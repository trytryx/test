import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { HamburgerIcon } from "../../components/Svg";
import Overlay from "../../components/Overlay/Overlay";
import Logo from "./icons/Logo";
import { MobileOnlyButton } from "./Buttons";
import Panel from "./Panel";
import { NavProps } from "./types";
import Text from "../../components/Text/Text";

const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  width: 100%;
  height: 64px;
  background-color: ${({ theme }) => theme.nav.background};
  ${({ theme }) => theme.mediaQueries.nav} {
    justify-content: normal;
  }
`;

const Container = styled.a`
  display: flex;
  align-items: center;
  margin-right: 4px;
  svg {
    transition: transform 0.3s;
  }
  :hover {
    svg {
      transform: scale(1.2);
    }
  }
`;

const Nav: React.FC<NavProps> = ({
  links,
  account,
  login,
  logout,
  isDark,
  toggleTheme,
  langs,
  setLang,
  currentLang,
  btcPriceUsd,
}) => {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <StyledNav>
      <Link to="/" aria-label="Pancake home page" style={{ marginRight: "16px" }}>
        <Logo isDark={isDark} width="160px" height="100%" />
      </Link>
      <MobileOnlyButton aria-label="Open mobile menu" onClick={() => setIsOpened((prevState) => !prevState)}>
        <HamburgerIcon />
      </MobileOnlyButton>
      <Panel
        links={links}
        show={isOpened}
        account={account}
        closeNav={() => setIsOpened(false)}
        login={login}
        logout={logout}
        isDark={isDark}
        toggleTheme={toggleTheme}
        langs={langs}
        setLang={setLang}
        currentLang={currentLang}
        btcPriceUsd={btcPriceUsd}
      />
      <Overlay show={isOpened} onClick={() => setIsOpened(false)} role="presentation" />
    </StyledNav>
  );
};

export default Nav;
