import Heading from "../shared/Heading/Heading";
import Paragraph from "../shared/Paragraph/Paragraph";
import Button from "../shared/Button/Button";
import Story from "./Story/Story";
import FAQ from "./FAQ/FAQ";
import Payment from "./Payment/Payment";
import classes from "./Home.module.scss";

function Home(props) {
    const { pays, banks, cards, faqs } = props;
    return (
        <section className={classes.Home}>
            <Story data={cards} />
            <article>
                <Paragraph>
                    CDM သမားများ ဆက်လက်ရပ်တည်နိုင်ရန်အတွက် ထောက်ပံ့လိုပါက MTU Student's Union ၏
                    <br />
                    Page Messanger ကနေတစ်ဆင့် ဆက်သွယ်မေးမြန်းလှူဒါန်းနိုင်ပါသည်။
                </Paragraph>
                <Button link={true} url="http://m.me/mtustudentunion">
                    Support Now
                </Button>
            </article>
            <article>
                <h1>FAQs</h1>
            </article>
            <FAQ items={faqs} />
            <article>
                <Paragraph>
                    အောက်ဖော်ပြပါ service များဖြင့် လှူဒါန်းမှုကို ကောက်ခံလျက်ရှိပါသည်။
                </Paragraph>
                <Payment data={pays} />
                <Payment data={banks} />
            </article>
        </section>
    );
}

export default Home;
