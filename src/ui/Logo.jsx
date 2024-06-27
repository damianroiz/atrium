import styled from 'styled-components';

/* ////////////////////////////////// LOGO ///////////////////////////////////*/

const StyledLogo = styled.img`
  width: 440px;
  height: auto;
  padding: 30px;
`;

export default function Logo() {
  return <StyledLogo src="/logo.png" alt="logo" />;
}
