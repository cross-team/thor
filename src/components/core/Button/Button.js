import React from 'react';
import PropTypes from 'prop-types';
import Styled from './styles';

function Button({ children, variant, accent, ...props }) {
  let color = '#0000ff'; /*theme.primary*/
  if (accent) {
    if (accent === 'secondary' || accent === 'primary') {
      color = '#ff0000'; /*theme[accent]*/
    } else {
      color = accent;
    }
  }
  return (
    <Styled.StyledButtom variant={variant} accent={color} {...props}>
      <Styled.ButtonContent>{children}</Styled.ButtonContent>
    </Styled.StyledButtom>
  );
}

Button.propTypes = {
  children: PropTypes.any,
  variant: PropTypes.oneOf(['filled', 'outlined', 'link']),
  accent: PropTypes.string
};

Button.defaultProps = {
  variant: 'filled'
};

export default Button;
