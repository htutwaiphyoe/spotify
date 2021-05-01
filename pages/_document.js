import Document, { Html, Head, Main, NextScript } from "next/document";

class AppDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
                    <script src="https://unpkg.com/ionicons@5.4.0/dist/ionicons.js"></script>
                </body>
            </Html>
        );
    }
}

export default AppDocument;
