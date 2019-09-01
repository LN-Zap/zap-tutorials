export const colors = {
  white: "#ffffff",
  black: "#000000",
  lightningOrange: "#fd9800",
  lightningBrown: "#4a2c00",
  deepseaBlue: "#242633",
  seaBlue: "#313340",
  hoverSeaBlue: "#353745",
  underwaterBlue: "#373947",
  seaGray: "#f3f3f3",
  hoverSeaGray: "#f2f2f2",
  underwaterGray: "#ebebeb",
  superGreen: "#39e673",
  pineGreen: "#0d331a",
  superRed: "#e63939",
  superBlue: "#005dfc",
  superOrange: "#fd9800",
  mudBrown: "#330d0d",
  gray: "#959595",
  darkGray: "#050f19",
  lightGray: "#e7e7e7",
  lightGreen: "#eefff4",
  lightOrange: "#fff3e1",
  lightRed: "#ffeded"
};

export const fontSizes = {
  xxs: "8px",
  xs: "10px",
  s: "11px",
  m: "13px",
  l: "15px",
  xl: "18px",
  xxl: "30px",
  xxxl: "60px"
};

export default {
  // base: "/zap-docs/",
  public: "./public",
  htmlContext: {
    favicon: "public/images/favicon/favicon.ico",
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "/public/global.css"
        }
      ]
    }
  },
  themeConfig: {
    mode: "dark",
    colors: {
      primary: colors.white,
      text: colors.white,
      link: colors.lightningOrange,
      // footerText: colors.grayDark,
      sidebarBg: colors.underwaterBlue,
      sidebarText: colors.white,
      sidebarHighlight: null,
      sidebarBorder: colors.gray,
      background: colors.deepseaBlue,
      border: colors.gray,
      theadColor: colors.gray,
      // theadBg: colors.grayExtraLight,
      // tableColor: colors.dark,
      codeBg: colors.underwaterBlue,
      codeColor: colors.gray,
      preBg: "green",
      blockquoteBg: colors.underwaterBlue,
      blockquoteBorder: colors.seaBlue,
      blockquoteColor: colors.gray
    },
    // logo: {
    //   src: "/public/images/logo.png",
    //   width: 150
    // }
    styles: {
      body: `
        font-size: ${fontSizes.l};
        line-height: 1.4em;
        font-family: "Roboto", system-ui, sans-serif;
        font-weight: 300;
      `,
      h1: `
        font-size: ${fontSizes.xxl};
        font-weight: 400;
      `
    }
  },
  title: "Zap Documentation",
  menu: ["Introduction", "Community", "Desktop", "iOS"]
};
