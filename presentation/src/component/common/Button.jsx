import React from 'react';
import styled, {keyframes} from "styled-components";

const Button = ({children, className, ...rest}) => {
    return (
        <StyledButton
            className={className}
            {...rest}
        >
            {children}
        </StyledButton>
    );
};

const StyledButton = styled.div`
  padding: 10px 15px;
  cursor: pointer;
  color: ${props => props.color};
  border-radius: 5px;
  background: rgba(0,0,0,.5);
  box-shadow: rgba(0,0,0,.3) 1px 1px 5px 2px;
  
  &:hover {
    background: rgba(0,0,0,.3);
  }
`;
export default Button;