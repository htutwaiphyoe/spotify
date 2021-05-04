import Image from "next/image";

import Heading from "../shared/Heading/Heading";
import Paragraph from "../shared/Paragraph/Paragraph";
import Button from "../shared/Button/Button";
import Strategy from "./Strategy/Strategy";
import classes from "./About.module.scss";

function About(props) {
    const { items } = props;
    return (
        <section className={classes.About}>
            <article>
                <div>
                    <figure className={classes.About__Figure}>
                        <Image
                            src="/imgs/sulogo.jpg"
                            alt="Students' Union Logo"
                            className={classes.About__Figure__Image}
                            width={200}
                            height={200}
                            layout="responsive"
                            priority={true}
                        />
                    </figure>
                </div>

                <Heading text="About Us" />

                <Paragraph>
                    မင်းအောင်လှိုင်ဦးစီးသော ဖက်စစ်စစ်တပ်သည် Feb 1 ရက်နေ့မှစ၍ အနိုင်ရပါတီ NLD ၏
                    အမတ်များနှင့် နိုင်ငံတော်အကြီးအကဲများကို ဖမ်းဆီးထိန်းသိမ်းကာ နိုင်ငံတော်အာဏာကို
                    အတင်းအဓမ္မသိမ်းယူခဲ့သည်။ ထိုအချိန်မှစ၍ နိုင်ငံတစ်ဝှမ်း အစိုးရဝန်ထမ်းများသည်
                    Civil Disobedience Movement ဟုခေါ်သော အာဏာဖီဆန်ခြင်း လှုပ်ရှားမှု၌ ပါဝင်လာကြသည်။
                    ထိုကဲ့သို့ ပြည်သူ့ဘက်မှ ရပ်တည်သော MTU ဝန်ထမ်းများကို တစ်ဖက်တစ်လှမ်းမှကူညီရန်
                    MTUSU သည် MTU CDM Support team အားဖွဲ့စည်းပြီး
                    ကူညီထောက်ပံ့ငွေများလက်ခံလျက်ရှိပါသည်။
                </Paragraph>
                <Button link={true} url="http://m.me/mtustudentunion">
                    Support Now
                </Button>
            </article>

            <article>
                <Heading text="Strategies" />
                <h2>MTU CDM Support Teamမှ လုပ်ဆောင်နေသည့် အစီအစဉ်များ</h2>
            </article>

            <Strategy items={items} />
        </section>
    );
}

export default About;
