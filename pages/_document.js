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
                    <script
                        type="module"
                        src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.esm.js"
                    ></script>
                    <script
                        nomodule=""
                        src="https://unpkg.com/ionicons@5.4.0/dist/ionicons/ionicons.js"
                    ></script>
                </body>
            </Html>
        );
    }
}

export default AppDocument;
