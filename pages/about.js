import { getFilePath, getFileData } from "../utils/apiUtils";

import About from "../components/About/About";

function AboutPage(props) {
    return <About {...props.data} />;
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
