import { MongoClient } from "mongodb";
import { validateEmail } from "../../utils/helperUtils";

async function handler(req, res) {
    if (req.method === "POST") {
        const { name, email, type, message } = req.body;
        if (
            !name ||
            name.length < 6 ||
            name.length > 20 ||
            !email ||
            !validateEmail(email) ||
            !type ||
            !message ||
            message.length < 20 ||
            message.length > 100
        ) {
            return res.status(422).json({
                status: "fail",
                message: "Invalid inputs. Please enter properly.",
            });
        }
        let client;
        try {
            client = await MongoClient.connect(process.env.dbUrlString);
        } catch (e) {
            return res.status(500).json({
                status: "error",
                message: "Database connection failed",
            });
        }
        try {
            const db = client.db();
            db.collection("messages").insertOne({
                name,
                email,
                type,
                message,
            });
            client.close();
            res.status(201).json({
                status: "success",
                message: "Your message was sent successfully.",
            });
        } catch (e) {
            client.close();
            res.status(500).json({
                status: "error",
                message: "Can't send message successfully!",
            });
        }
    }
    res.status(200).json({
        status: "error",
        message: "Route are not defined!",
    });
}

export default handler;
