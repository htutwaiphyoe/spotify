import fs from "fs/promises";
import path from "path";

import Home from "../components/Home/Home";

function HomePage(props) {
    return <Home {...props.data} />;
}

export async function getStaticProps(context) {
    const filePath = path.join(process.cwd(), "api", "home.json");
    const data = JSON.parse(await fs.readFile(filePath, "utf8"));
    return {
        props: {
            data,
        },
    };
}
export default HomePage;
