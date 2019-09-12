import * as mixins from "~utils/mixins";

export const wrapper = {
  bg: "header.bg",
  boxShadow: "m",
  position: "relative",
  borderBottom: t => `1px solid ${t.colors.border}`
};

export const innerContainer = {
  ...mixins.centerAlign,
  px: 0,
  py: 3,
  position: "relative",
  justifyContent: "space-between",
  width: "81.81818181818183%",
  mx: "auto"
};

export const headerButton = {
  ...mixins.centerAlign,
  outline: "none",
  p: 3,
  border: "none",
  borderRadius: 9999,
  bg: "header.button.bg",
  color: "header.button.color",
  fontSize: 0,
  fontWeight: 600,
  ":hover": {
    cursor: "pointer",
    bg: "header.button.hover"
  },
  svg: {
    width: "14px",
    height: "14px"
  }
};

export const editButton = {
  ...mixins.centerAlign,
  position: "absolute",
  bottom: -40,
  right: 30,
  bg: "transparent",
  color: "muted",
  fontSize: 1,
  textDecoration: "none",
  borderRadius: "radius",
  svg: {
    width: "14px",
    height: "14px"
  }
};
