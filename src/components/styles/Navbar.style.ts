import styled from "styled-components";
import { Link } from "react-router-dom";

interface Props {
    extendNavbar: Boolean;
  }

export const NavbarContainer = styled.nav<Props>`
  width: 100%;
  height: ${(props) => (props.extendNavbar ? "auto" : "80px")};
  background-color: ${(props) => (props.extendNavbar ? "white" : "none")};
  border-radius: ${(props) => (props.extendNavbar ? "10px" : "none")};
  display: flex;
  flex-direction: column;

  @media (min-width: 660px) {
    height: 80px;
  }
`;

export const LeftContainer = styled.div`
  flex: 70%;
  display: flex;
  align-items: center;
  padding-left: 5%;
`;

export const RightContainer = styled.div<Props>`
  display: ${(props) => (props.extendNavbar ? "none" : "flex")};
  flex: 40%;
  display: inline-block;
  align-items: center;
  padding-top: 25px;
  float: right;
`;

export const NavbarInnerContainer = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
`;

export const NavbarLinkContainer = styled.div`
  display: flex;
  align-items: flex-end;
  float: right;
`;

export const NavbarLink = styled(Link)`
  color: white;
  font-size: 1.2vw;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;

  @media (max-width: 660px) {
    display: none;
  }
`;


export const Logo = styled.img`
    width: 3em;
    height: 3em;
    padding-top: 1rem;
    padding-right: 1rem;
`;

export const OpenLinksButton = styled.button<Props>`
  width: 70px;
  height: 50px;
  background: none;
  border: none;
  color: ${(props) => (props.extendNavbar ? "black" : "white")};
  font-size: ${(props) => (props.extendNavbar ? " 2em" : "3em")};
  cursor: pointer;

  @media (min-width: 660px) {
    display: none;
  }
`;

// Hamburger Menu
export const NavbarLinkExtended = styled(Link)`
  color: black;
  font-size: 4vw;
  font-family: Arial, Helvetica, sans-serif;
  text-decoration: none;
  margin: 10px;
`;

export const NavbarExtendedContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  
  @media (min-width: 660px) {
    display: none;
  }
`;