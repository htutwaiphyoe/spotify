import Image from "next/image";

import Paragraph from "../../shared/Paragraph/Paragraph";
import classes from "./Info.module.scss";

const medias = [
    { url: "https://m.facebook.com/mtustudentunion", icon: "facebook", color: "#1778F2" },
    { url: "http://m.me/mtustudentunion", icon: "facebook-messenger", color: "#0078FF" },
];
function Info(props) {
    return (
        <div className={classes.Info}>
            <figure>
                <Image
                    src={"/imgs/team1.svg"}
                    alt={"Contact us"}
                    width={300}
                    height={300}
                    layout={"responsive"}
                    priority={true}
                />
            </figure>
            <Paragraph>
                CDM ထောက်ပံ့ရေးနှင့်ပတ်သတ်၍ အသေးစိတ်သိရှိလို၍ဖြစ်စေ၊ မေးမြန်းချင်လို၍ဖြစ်စေ MTU CDM
                Support Team ထံသို့ အောက်ဖော်ပြပါနည်းလမ်းများနှင့် ဆက်သွယ်နိုင်ပါသည်။
            </Paragraph>
            <ul>
                {medias.map((media, i) => (
                    <li key={i}>
                        <a href={media.url} style={{ color: `${media.color}` }}>
                            <i className={`fab fa-${media.icon}`}></i>
                        </a>
                    </li>
                ))}
            </ul>
            <Paragraph>
                Copyright &copy; 2021 | MTU Students' Union <br />
                Terms & Conditions
            </Paragraph>
        </div>
    );
}
export default Info;
