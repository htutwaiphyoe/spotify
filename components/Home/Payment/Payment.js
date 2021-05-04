import Image from "next/image";
import { Fragment } from "react";

import Paragraph from "../../shared/Paragraph/Paragraph";
import classes from "./Payment.module.scss";
function PaymentCard(props) {
    const { caption, data } = props.data;
    return (
        <Fragment>
            <h3>{caption}</h3>
            <ul className={classes.Payment}>
                {data.map((d, i) => (
                    <li key={i}>
                        <figure>
                            <Image
                                src={d.image}
                                alt={d.description}
                                width={150}
                                height={150}
                                layout="responsive"
                                priority={true}
                            />
                        </figure>
                        <Paragraph>{d.description}</Paragraph>
                    </li>
                ))}
            </ul>
        </Fragment>
    );
}

export default PaymentCard;
