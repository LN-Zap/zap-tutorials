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

export default {
  public: "./public",
  htmlContext: {
    favicon: "public/images/favicon/favicon.ico",
    head: {
      links: [
        {
          rel: "stylesheet",
          href: "public/global.css"
        }
      ]
    }
  },
  themeConfig: {
    fonts: {
      body: "Roboto, system-ui, sans-serif",
      heading: "Roboto, system-ui, sans-serif",
      monospace: "'Lucida Console', Monaco, monospace"
    },
    fontSizes: [11, 13, 15, 18, 24, 30, 40, 50],
    fontWeights: {
      body: 300,
      heading: 400,
      bold: 400
    },
    styles: {
      h1: {
        fontWeight: 400
      },
      h2: {
        fontWeight: 400
      },
      h3: {
        fontWeight: 400
      }
    },
    styles: {
      root: {
        fontFamily: "body",
        fontWeight: "body",
        lineHeight: "body"
      }
    },
    colors: {
      modes: {
        dark: {
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
          }
        },
        light: {
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
          }
        }
      }
    }
  },
  title: "Zap Documentation",
  menu: ["General", "Community", "Desktop", "iOS", "Android"]
};
