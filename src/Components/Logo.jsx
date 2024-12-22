import styled from 'styled-components';

/* ////////////////////////////////// LOGO ///////////////////////////////////*/

const StyledLogo = styled.img`
  width: 400px;
  height: auto;
`;

export default function Logo() {
  return <StyledLogo src="/logo.png" alt="logo" />;
}
