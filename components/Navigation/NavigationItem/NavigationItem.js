import Link from "next/link";
import { useRouter } from "next/router";

import classes from "./NavigationItem.module.scss";
function NavigationItem({ url, icon, text }) {
    const router = useRouter();
    return (
        <li className={`${classes.NavigationItem}`}>
            <Link href={url}>
                <a
                    className={`${classes.NavigationItem__Link} ${
                        router.pathname === url && classes.NavigationItem__Active
                    }`}
                >
                    <ion-icon name={icon}></ion-icon>
                    <span>{text}</span>
                </a>
            </Link>
        </li>
    );
}

export default NavigationItem;
