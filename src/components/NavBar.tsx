import { useState } from "react";
import {
  NavbarContainer,
  LeftContainer,
  RightContainer,
  NavbarExtendedContainer,
  NavbarInnerContainer,
  NavbarLinkContainer,
  NavbarLink,
  Logo,
  OpenLinksButton,
  NavbarLinkExtended,
} from "./styles/Navbar.style";
import LogoImg from "../assets/logo.png";
import '../assets/css/navBar.css';

import { ButtonFreeTrial } from "./styles/HiringSection.style";

const Navbar = () => {
  const [extendNavbar, setExtendNavbar] = useState(false);

  return (
    <NavbarContainer extendNavbar={extendNavbar}>
      <NavbarInnerContainer>
        <LeftContainer>
          <NavbarLinkContainer>
            <Logo src={LogoImg}></Logo>
            <NavbarLink to="/">Product</NavbarLink>
            <NavbarLink to="/">Features</NavbarLink>
            <NavbarLink to="/">Marketplace</NavbarLink>
            <NavbarLink to="/">Company</NavbarLink>
            <OpenLinksButton extendNavbar={extendNavbar}
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavbarLinkContainer>
        </LeftContainer>
        <RightContainer extendNavbar={extendNavbar}>
          <NavbarLinkContainer>
            <NavbarLink to="/" className="right" id="login-button-nav">Log in</NavbarLink>
            <NavbarLink to="/" className="right"><ButtonFreeTrial className="button-free-trial-second">Start free trial</ButtonFreeTrial></NavbarLink>
          </NavbarLinkContainer>
        </RightContainer>
      </NavbarInnerContainer>
      {extendNavbar && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/">Product</NavbarLinkExtended>
          <NavbarLinkExtended to="/">Features</NavbarLinkExtended>
          <NavbarLinkExtended to="/">Marketplace</NavbarLinkExtended>
          <NavbarLinkExtended to="/">Company</NavbarLinkExtended>
          <NavbarLinkExtended to="/" className="link-hamburger-nav"><ButtonFreeTrial className="button-free-trial-primary">Start free trial</ButtonFreeTrial></NavbarLinkExtended>
          <div className="link-hamburger-nav">Existing Customer? <NavbarLinkExtended to="/">Login</NavbarLinkExtended></div>
        </NavbarExtendedContainer>
      )}
    </NavbarContainer>
  );
}

export default Navbar;