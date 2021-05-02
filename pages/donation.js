import { getFilePath, getFileData } from "../utils/apiUtils";

import Donation from "../components/Donation/Donation";

function DonationPage(props) {
    return <Donation {...props.data} />;
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
