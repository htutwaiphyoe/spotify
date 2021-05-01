import classes from "./Navigation.module.scss";
import Logo from "./Logo/Logo";
import NavigationItem from "./NavigationItem/NavigationItem";

const items = [
    { url: "/", icon: "home-sharp", text: "Home" },
    { url: "/about", icon: "information-circle-sharp", text: "About" },
    { url: "/donation", icon: "stats-chart-sharp", text: "Donation" },
    { url: "/contact", icon: "call-sharp", text: "Contact" },
];
function Navigation(props) {
    return (
        <header>
            <Logo />
            <nav className={classes.Navigation}>
                <ul className={classes.Navigation__List}>
                    {items.map((el, i) => (
                        <NavigationItem {...el} key={i} />
                    ))}
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
