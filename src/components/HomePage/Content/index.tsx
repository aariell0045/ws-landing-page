import React from "react";
import * as Style from "./content.styles";
const HomePage_Contet_UI_Text = {
	whatWeGiveYouTitle: "מה תוכנת WS כוללת",
	whyWhatsappTitle: "למה דווקא Whatsapp",
	automationWhatsapp: "אוטומצייה ב Whatsapp",
};

const whatWhatsappGiveYou = [
	"אפשרות בדף הבית לתוכנת ניהול ושימוש כלומר – להשים תזכורות או דברים כאלה ואחרים פגישות משימות ועוד...",

	"ממשק המאפשר להעלות קבוצות ומידע מקבצי אקסל ואנשי קשר מהפלאפון, הממשק מאפשר סינון כפילויות ומספרים לא תקינים וקיטלוג לפי מגדר גיל ועוד...",

	"שליחת הודעות דרך ווצאפ עם אפשרות הוספת שם פרטי וכל סוגי המדיה עד 4 הודעות ברצף ובנוסף מכניסה לארכיון לאחר שליחת ההודעה ובכל אינה מפריעה לתפקוד הכללי שלך",
	"אפשרות להתחיל ולסיים את שליחת ההודעות באיזה מיקום שתרצה בקובץ",
	"היסטוריית הרצות שכוללת תאריך ושעה , איפה התחלת איפה סיימת ותוכן ההודעה",
];

const whyWhatsapp = [
	"Whatsapp היא אפליקציית המסרים המידיים המובילה בישראל ובעולם!",
	"כולם זמינים ב Whatsapp כל יום כל היום",
	"המשתמש הממוצע בודק את ה Whatsapp שלו 23 פעמים ביום",
	"אחוז המענה להודעות ב Whatsapp עומד על 40%",
	"אחוז קריאת ההודעות ב Whatsapp הוא 99%",
];

const whatsappNeed = `איך אוטומציה בווצאפ יכולה לייעל את העבודה בעסק שלכם? השימוש באפליקציית ווטסאפ הפכה לחלק אינטגרלי בכל עסק, חברה וארגונים גדולים. כיום ניתן לראות שימוש באפליקציית ווטסאפ במחלקות השונות הנמצאות כמעט בכל חברה וארגון כגון תמיכה טכנית, שירות לקוחות, שיווק ומכירה. בכדי לשפר את השימוש בווטסאפ ולקצר את תהליך העבודה שלכם, אנחנו בבית התוכנה WS נבנה עבורכם מערכות תוכנה המותאמות במיוחד לצרכים שלכם.
`;

const Content = () => {
	const { whatWeGiveYouTitle, whyWhatsappTitle, automationWhatsapp } = HomePage_Contet_UI_Text;

	const text = (text: string) => {
		return <Style.ListItem>{text}</Style.ListItem>;
	};
	return (
		<Style.Container>
			<Style.SectionContainer>
				<Style.TitleContainer>
					<Style.Title>{automationWhatsapp}</Style.Title>
				</Style.TitleContainer>
				<Style.UnorderList>
					<Style.Paragraph>{whatsappNeed}</Style.Paragraph>
				</Style.UnorderList>
			</Style.SectionContainer>
			<Style.SectionContainer>
				<Style.TitleContainer>
					<Style.Title>{whatWeGiveYouTitle}</Style.Title>
				</Style.TitleContainer>
				<Style.UnorderList>{whatWhatsappGiveYou.map(text)}</Style.UnorderList>
			</Style.SectionContainer>
			<Style.SectionContainer>
				<Style.TitleContainer>
					<Style.Title>{whyWhatsappTitle}</Style.Title>
				</Style.TitleContainer>
				<Style.UnorderList> {whyWhatsapp.map(text)}</Style.UnorderList>
			</Style.SectionContainer>
			<Style.ButtonWrapper>
				<Style.DonwloadButton
					onClick={() => {
						function download(url: string) {
							const link = document.createElement("a");
							link.href = url;
							link.click();
						}

						download("https://we-send-download.s3.eu-central-1.amazonaws.com/WS+Setup+1.0.0.exe");
					}}
				>
					Download WS Windows
				</Style.DonwloadButton>
			</Style.ButtonWrapper>
		</Style.Container>
	);
};

export default Content;
