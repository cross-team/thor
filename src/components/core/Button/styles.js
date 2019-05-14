import styled from 'styled-components';

const styles = {
  StyledButtom: styled.button`
    background: 0;
    background-color: ${({ accent, variant }) =>
      variant === 'filled' ? accent : ''};
    border: ${({ accent, variant }) =>
      `1px solid ${variant === 'outlined' ? accent : 'transparent'}`};
    border-radius: 3px !important;
    color: #fff !important;
    cursor: pointer;
    display: inline-block;
    font-size: 13px !important;
    font-weight: bold;
    line-height: 17px;
    margin: 1px;
    padding: 6px 12px 7px 12px;
    position: relative;
    text-align: center;
    text-decoration: none;
    text-shadow: none;
    white-space: nowrap;
    transition-duration: 0.1s;
    transition-property: transform;
    &:hover {
      text-decoration: ${({ variant }) =>
        variant === 'link' ? 'underline' : ''};
      transform: scale(1.05);
    }
    &:active {
      border-color: #202020 !important;
    }
    &:focus {
      outline-width: 0;
    }
  `,
  ButtonContent: styled.span`
    display: flex;
  `
};

export default styles;
