import styled, { css } from 'styled-components';

/* ////////////////////////////////// LOGO ///////////////////////////////////*/

const StyledLogo = styled.img`
  height: auto;
  object-fit: contain;

  ${(props) =>
    props.type === 'header' &&
    css`
      width: 400px;
    `}

  ${(props) =>
    props.type === 'footer' &&
    css`
      width: 300px;
    `}
`;

export default function Logo({ type }) {
  return <StyledLogo src="/logo.png" alt="logo" type={type} />;
}
