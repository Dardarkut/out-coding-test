import styled from "styled-components";

export const HiringContainer = styled.div`
  position: relative;
  flex-flow: row wrap;
  justify-content:space-between;
`;

export const ContainerData = styled.div`
  width: 50vw;
  position: absolute;
  display: inline-block;
  align-items: center;
  justify-items: center;
  padding: 3em 3em 0em 3em;
  padding-top: 3em;
  vertical-align: middle;
  margin-top: 1em;
`;

export const ContainerTitle = styled.div`
  font-weight: 800  !important;
  font-size: 3.5vw  !important;
  line-height: 1.5em  !important;
  color: #FFFFFF;
  align-self: stretch;
`;

export const ContainerText = styled.div`
  font-weight: 400;
  font-size: 1.5vw;
  line-height: 28px;
  color: #D1D5DB;
  flex: none;
  align-self: stretch;
`;

export const ButtonFreeTrial = styled.button`
  margin-left: 1em;
  flex-direction: row;
  justify-content: center !important;
  align-items: center !important;
  padding: 0.5vw 1vw;
  color: #FFFFFF !important;
  background: #6366F1;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1), 0px 1px 2px rgba(0, 0, 0, 0.06);
  border-radius: 6px;
`;

