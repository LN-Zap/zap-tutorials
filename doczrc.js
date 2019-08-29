export default {
  // base: "/zap-docs/",
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
    mode: "light",
    colors: {
      primary: "#fd9800",
      sidebarBg: "#ebebeb",
      background: "#ffffff"
    }
    // logo: {
    //   src: "/public/images/logo.png",
    //   width: 150
    // }
  },
  title: "Zap Documentation",
  menu: ["Introduction", "Tutorials", "Community"]
};
