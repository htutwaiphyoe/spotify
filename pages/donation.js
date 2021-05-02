import Head from "next/head";

import { getFilePath, getFileData } from "../utils/apiUtils";

import Donation from "../components/Donation/Donation";
import { Fragment } from "react";

function DonationPage(props) {
    return (
        <Fragment>
            <Head>
                <meta
                    name="description"
                    content="A brief donation anaylsis of MTU CDM Support Team"
                />
                <title>Donation | MTU CDM Support Team</title>
            </Head>
            <Donation {...props.data} />
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const filePath = getFilePath("donation");
    const data = await getFileData(filePath);
    return {
        props: {
            data,
        },
        revalidate: 60 * 60 * 24,
    };
}

export default DonationPage;
