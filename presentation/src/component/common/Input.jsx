import React from 'react';
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 5px 10px;
  border: none;
  box-shadow: rgba(0,0,0,.3) 1px 1px 3px 1px;
  border-radius: 5px;
  
  
  &:focus {
    outline: none;
    border: 1px solid black;
    transition: 1s;
  }
`;

const Input = () => {
    return (
        <StyledInput>

        </StyledInput>
    );
};

export default Input;