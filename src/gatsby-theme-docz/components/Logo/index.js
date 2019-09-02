/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Link, useConfig } from "docz";
import ZapLogo from "./ZapLogo";

import * as styles from "./styles";

export const Logo = () => {
  const config = useConfig();
  return (
    <Flex aligmItems="center" sx={styles.logo}>
      <ZapLogo width="1.4em" height="1.4em" />
      <Link to="/" sx={styles.link}>
        {config.title}
      </Link>
    </Flex>
  );
};
