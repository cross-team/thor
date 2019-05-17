import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

function Button({ children, variant, accent, onClick, ...props }) {
  let color = '#39adb5'; /* theme.primary */
  if (accent) {
    if (accent === 'secondary' || accent === 'primary') {
      color = '#e53935'; /* theme[accent] */
    } else {
      color = accent;
    }
  }
  return (
    <Styled.StyledButtom variant={variant} accent={color} onClick={onClick} {...props}>
      <Styled.ButtonContent>{children}</Styled.ButtonContent>
    </Styled.StyledButtom>
  );
}

Button.propTypes = {
  accent: PropTypes.string,
  children: PropTypes.element,
  disabled: PropTypes.bool,
  variant: PropTypes.oneOf(['filled', 'outlined', 'link']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  accent: 'primary',
  children: undefined,
  disabled: false,
  variant: 'filled',
  onClick() {
    // eslint-disable-next-line no-console
    console.log('Button clicked...');
  },
};

export default Button;
