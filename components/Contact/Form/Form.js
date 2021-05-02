import Button from "../../shared/Button/Button";
import classes from "./Form.module.scss";

function Form(props) {
    return (
        <article className={classes.Form}>
            <h1>Get in touch!</h1>
            <form action="">
                <div className={classes.Form__Control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" placeholder="John Doe" required id="name" />
                </div>
                <div className={classes.Form__Control}>
                    <label htmlFor="email">Email</label>
                    <input type="text" placeholder="johndoe@domain.com" required id="email" />
                </div>

                <div className={classes.Form__Grid}>
                    <div className={classes.Form__Grid}>
                        <input type="radio" required id="type" value="feedback" name="type" />
                        <label htmlFor="type">feedback</label>
                    </div>
                    <div className={classes.Form__Grid}>
                        <input type="radio" required id="bug" value="report" name="type" />
                        <label htmlFor="bug">report a bug</label>
                    </div>
                </div>
                <div className={classes.Form__Control}>
                    <label htmlFor="message">Message</label>
                    <textarea placeholder="Write your message" required id="message" rows="5" />
                </div>

                <button>Send message</button>
            </form>
        </article>
    );
}

export default Form;
