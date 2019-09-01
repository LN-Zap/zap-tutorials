/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Link } from "docz";
import ZapLogo from "./ZapLogo";

import * as styles from "./styles";

export const Logo = () => {
  return (
    <Flex aligmItems="center" sx={styles.logo}>
      <ZapLogo width="1.4em" height="1.4em" />
      <Link to="/" sx={styles.link}>
        Zap Documentation
      </Link>
    </Flex>
  );
};
