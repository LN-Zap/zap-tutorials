import * as colors from "./colors";
import prismDark from "./prism/dark";
import prismLight from "./prism/light";

export const light = {
  ...colors,
  primary: colors.lightningOrange,
  text: colors.darkGray,
  muted: colors.gray,
  link: colors.lightningOrange,
  background: colors.white,
  border: null,
  sidebar: {
    bg: colors.underwaterGray,
    navGroup: colors.gray,
    navLink: colors.darkGray,
    navLinkActive: colors.lightningOrange,
    tocLink: colors.gray,
    tocLinkActive: colors.lightningOrange
  },
  header: {
    bg: colors.seaGray,
    text: colors.darkGray,
    border: colors.lightGray,
    button: {
      bg: colors.lightningOrange,
      color: colors.white
    }
  },
  props: {
    bg: colors.white,
    text: colors.darkGray,
    highlight: colors.hoverSeaGray,
    defaultValue: colors.gray,
    descriptionText: colors.darkGray,
    descriptionBg: colors.white
  },
  playground: {
    bg: colors.darkGray,
    border: colors.darkGray
  },
  blockquote: {
    bg: colors.lightGray,
    border: colors.gray,
    color: colors.gray
  },
  prism: {
    ...prismLight
  }
};

export const dark = {
  ...colors,
  primary: colors.lightningOrange,
  text: colors.white,
  muted: colors.gray,
  link: colors.lightningOrange,
  background: colors.deepseaBlue,
  border: null,
  sidebar: {
    bg: colors.underwaterBlue,
    navGroup: colors.gray,
    navLink: colors.lightGray,
    navLinkActive: colors.lightningOrange,
    tocLink: colors.gray,
    tocLinkActive: colors.lightningOrange
  },
  header: {
    bg: colors.seaBlue,
    text: colors.white,
    border: colors.darkGray,
    button: {
      bg: colors.lightningOrange,
      color: colors.white
    }
  },
  props: {
    bg: colors.deepseaBlue,
    text: colors.white,
    highlight: colors.hoverSeaBlue,
    defaultValue: colors.darkGray,
    descriptionText: colors.gray,
    descriptionBg: colors.seaBlue
  },
  playground: {
    bg: colors.darkGray,
    border: colors.darkGray
  },
  blockquote: {
    bg: colors.underwaterBlue,
    border: colors.seaBlue,
    color: colors.gray
  },
  prism: {
    ...prismDark
  }
};
