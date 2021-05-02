import Image from "next/image";

import Paragraph from "../../shared/Paragraph/Paragraph";
import classes from "./Story.module.scss";

function Story(props) {
    const { data } = props;
    return (
        <ul className={classes.Story}>
            {data.map((d, i) => (
                <li key={i}>
                    <figure className={classes.Story__Image}>
                        <Image
                            src={d.image}
                            alt={`${d.month} donations`}
                            width={300}
                            height={200}
                            layout="responsive"
                        />
                    </figure>

                    <div className={classes.Story__Content}>
                        <h2>{d.month} လအတွက် ထောက်ပံ့မှုများ</h2>
                        <Paragraph>{d.description}</Paragraph>
                    </div>
                </li>
            ))}
        </ul>
    );
}

export default Story;
