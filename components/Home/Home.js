import Heading from "../shared/Heading/Heading";
import Paragraph from "../shared/Paragraph/Paragraph";
import Button from "../shared/Button/Button";
import Story from "./Story/Story";
import Payment from "./Payment/Payment";
import classes from "./Home.module.scss";

function Home(props) {
    const { pays, banks, cards } = props;
    return (
        <section className={classes.Home}>
            <Story data={cards} />
            <Paragraph>
                CDM သမားများ ဆက်လက်ရပ်တည်နိုင်ရန်အတွက် ထောက်ပံ့လိုပါက MTU Student's Union ၏ Page
                Messanger ကနေတစ်ဆင့် ဆက်သွယ်မေးမြန်းလှူဒါန်းနိုင်ပါသည်။
            </Paragraph>
            <Button link={true} url="http://m.me/mtustudentunion">
                Support Now
                <i className="fas fa-arrow-right" style={{ marginLeft: ".8rem" }}></i>
            </Button>
            <Paragraph>
                အောက်ဖော်ပြပါ service များဖြင့် လှူဒါန်းမှုကို ကောက်ခံလျက်ရှိပါသည်။
            </Paragraph>
            <Payment data={pays} />
            <Payment data={banks} />
        </section>
    );
}

export default Home;
