import Image from "next/image";

import classes from "./Logo.module.scss";
function Logo(props) {
    return (
        <figure className={classes.Logo}>
            <Image
                src="/imgs/logo192.png"
                alt="MTU CDM Support Team logo"
                className={classes.Logo__Image}
                width={200}
                height={200}
                priority={true}
            />
        </figure>
    );
}

export default Logo;
