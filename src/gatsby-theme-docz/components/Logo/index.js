/** @jsx jsx */
import { jsx, Flex } from "theme-ui";
import { Link, useConfig } from "docz";
import ZapLogo from "./ZapLogo";

import * as styles from "./styles";

export const Logo = () => {
  const config = useConfig();
  return (
    <Flex sx={styles.logo}>
      <a href={config.website}>
        <ZapLogo height="40px" width="40px" />
      </a>

      <Flex sx={styles.menu}>
        <Flex sx={styles.link}>
          <a href={config.repository}>Contribute</a>
        </Flex>

        <Link to="/" sx={styles.link}>
          Documentation
        </Link>
      </Flex>
    </Flex>
  );
};
