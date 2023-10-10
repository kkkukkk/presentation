import React from 'react';
import styled from "styled-components";
import Input from "../common/Input";
import Button from "../common/Button";
import TextArea from "../common/TextArea";
import GradientBox from "../common/GradientBox";

const StyledSignUp = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

const SignUpBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70vmin;
  height: 70vmin;
  border-radius: 5px;
  box-shadow: rgba(255,255,255,.3) 1px 1px 5px 2px;
  background: rgba(255,255,255,.3);
  backdrop-filter: blur(5px);
`;

const SignUp = () => {
    return (
        <StyledSignUp>
            <SignUpBox>
                <GradientBox
                    width={"95%"}
                    height={"95%"}
                >
                    <Input></Input>
                </GradientBox>
            </SignUpBox>
        </StyledSignUp>
    );
};

export default SignUp;