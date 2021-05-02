import classes from "./Table.module.scss";

function Table({ items }) {
    return (
        <table className={classes.Table}>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th>Batch</th>
                    <th>Amount(Ks)</th>
                </tr>
            </thead>
            <tbody>
                {items.map((item, i) => (
                    <tr key={i}>
                        <td>{+i + 1}</td>
                        <td>{item.name}</td>
                        <td>{item.batch}</td>
                        <td>{item.amount}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}

export default Table;
