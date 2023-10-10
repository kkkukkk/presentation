import React from 'react';
import styled, {keyframes} from "styled-components";



const GradientBox = ({children, ...rest}) => {
    return (
        <StyledGradientBox {...rest} className={"animated-border in"}>
            {children}
        </StyledGradientBox>
    );
};

const gradient = keyframes`
  0% {
    background-position: 15% 0%;
  }
  50% {
    background-position: 85% 100%;
  }
  100% {
    background-position: 15% 0%;
  }
`;

const frame = keyframes`
  0% {
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  25% {
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) calc(100% - 3px), calc(100% - 3px) 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  50% {
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, calc(100% - 3px) 3px, 100% 0%, 0% 0%);
  }
  75% {
    -webkit-clip-path: polygon(0% 100%, 3px 100%, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 3px, 3px 0%, 0% 0%);
  }
  100% {
    -webkit-clip-path: polygon(0% 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 3px 100%, 0% 100%);
  }
`;

const StyledGradientBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  background: transparent;
  width: ${props => props.width};
  height: ${props => props.height};
  
  &.animated-border {
    position: relative;
  }
  &.animated-border:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 5px;
    background: linear-gradient(120deg, #00F260, #0575E6, #00F260);
    background-size: 300% 300%;
    clip-path: polygon(0% 100%, 3px 100%, 3px 3px, calc(100% - 3px) 3px, calc(100% - 3px) calc(100% - 3px), 3px calc(100% - 3px), 3px 100%, 100% 100%, 100% 0%, 0% 0%);
  }
  &.animated-border.in:after {
    animation: ${frame} 1s forwards ease-in-out reverse, ${gradient} 4s ease-in-out infinite;
  }
`

export default GradientBox;