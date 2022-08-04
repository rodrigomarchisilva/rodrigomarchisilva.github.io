import sun from "../../images/sun.png";
import lightBackground from "../../images/light-background.webp";

const themeButtonEn = {
  src: sun,
  alt: 'Sun',
  title: 'Alternate theme',
};

const themeButtonPt = {
  src: sun,
  alt: 'Lua',
  title: 'Mudar tema',
};

const ironicPhraseEn = 'I noticed you have a good taste for themes. Keep it up!';
const ironicPhrasePt = 'Vejo que possui um gosto requintado para temas. Continue assim!';

const mainBackground = lightBackground;

const themeContentLight = {
  en: {
    themeButton: themeButtonEn,
    ironicPhrase: ironicPhraseEn,
    mainBackground,
  },
  pt: {
    themeButton: themeButtonPt,
    ironicPhrase: ironicPhrasePt,
    mainBackground,
  },
};

export default themeContentLight;