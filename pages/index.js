import { getFilePath, getFileData } from "../utils/apiUtils";

import Home from "../components/Home/Home";

function HomePage(props) {
    return <Home {...props.data} />;
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
