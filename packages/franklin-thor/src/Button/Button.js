import React from 'react';
import PropTypes from 'prop-types';
// import Styled from './styles';

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
    <button type={'button'} variant={variant} accent={color} onClick={onClick} {...props}>
      <span>{children}</span>
    </button>
  );
}

Button.propTypes = {
  accent: PropTypes.string,
  children: PropTypes.element,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  variant: PropTypes.oneOf(['filled', 'outlined', 'link']),
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
