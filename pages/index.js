import Head from "next/head";
import { Fragment } from "react";
import { getFilePath, getFileData } from "../utils/apiUtils";

import Home from "../components/Home/Home";

function HomePage(props) {
    return (
        <Fragment>
            <Head>
                <title>MTU CDM Support Team</title>
                <meta
                    name="description"
                    content="MTU CDM Support Team is formed by MTU Students' Union to help CDM servents in Mandalay Technological University."
                />
            </Head>
            <Home {...props.data} />
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const filePath = getFilePath("home");
    const data = await getFileData(filePath);
    return {
        props: {
            data,
        },
    };
}
export default HomePage;
