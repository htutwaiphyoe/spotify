import Table from "../shared/Table/Table";
import Amount from "./Amount/Amount";
import Graph from "./Graph/Graph";
import classes from "./Donation.module.scss";

function Donation(props) {
    const { amounts, charts, donors } = props;

    return (
        <section className={classes.Donation}>
            <Amount items={amounts} />
            <div className={classes.Donation__Grid}>
                <Graph {...charts[2]} />
                <Graph {...charts[1]} />
            </div>
            <Graph {...charts[0]} />
            <Table items={donors} />
        </section>
    );
}

export default Donation;
