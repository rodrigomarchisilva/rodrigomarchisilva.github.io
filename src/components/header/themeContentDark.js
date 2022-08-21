import moon from "../../images/icons/moon.png";
import darkBackground from "../../images/backgrounds/dark-background.jpg";

const themeButtonEn = {
  src: moon,
  alt: 'Moon',
  title: 'Alternate theme',
};

const themeButtonBr = {
  src: moon,
  alt: 'Lua',
  title: 'Mudar tema',
};

const ironicPhraseEn = 'Research shows that dark theme users have a bad taste...';
const ironicPhraseBr = 'Pesquisas comprovam que usuários de tema escuro possuem mau gosto...';

const mainBackground = darkBackground;

const themeContentDark = {
  en: {
    themeButton: themeButtonEn,
    ironicPhrase: ironicPhraseEn,
    mainBackground,
  },
  pt: {
    themeButton: themeButtonBr,
    ironicPhrase: ironicPhraseBr,
    mainBackground,
  },
};

export default themeContentDark;