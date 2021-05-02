import Head from "next/head";
import { getFilePath, getFileData } from "../utils/apiUtils";
import About from "../components/About/About";
import { Fragment } from "react";

function AboutPage(props) {
    return (
        <Fragment>
            <Head>
                <meta name="description" content="Histroy and Vision of MTU CDM Support Team" />
                <title>About | MTU CDM Support Team</title>
            </Head>
            <About {...props.data} />
        </Fragment>
    );
}
export async function getStaticProps(context) {
    const filePath = getFilePath("about");
    const data = await getFileData(filePath);
    return {
        props: {
            data,
        },
    };
}

export default AboutPage;
