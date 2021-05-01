import Layout from "../components/Layout/Layout";
import "../sass/index.scss";

function App({ Component, pageProps }) {
    return (
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;
