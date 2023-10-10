import React from 'react';
import styled from "styled-components";
import Input from "../common/Input";
import Button from "../common/Button";
import TextArea from "../common/TextArea";
import GradientBox from "../common/GradientBox";
import {Link} from "react-router-dom";

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

const InputBox = styled.div`
    width: 90%;
    height: 90%;
    padding: 5px;
    border-radius: 5px;
    box-shadow: rgba(0,0,0,.3) 1px 1px 5px 2px;
    background: rgba(0,0,0,.3);
    backdrop-filter: blur(2px);
`;

const InputSet = styled.div`
    color: white;
`;

const ButtonSet = styled.div`
    display: flex;
`;

const SignUp = () => {
    return (
        <StyledSignUp>
            <SignUpBox>
                <GradientBox
                    width={"95%"}
                    height={"95%"}
                >
                    <InputBox>
                        <InputSet>
                            이름 : <Input />
                        </InputSet>
                        <ButtonSet>
                            <Link to={"/"}><Button>메인</Button></Link>
                            <Button>가입</Button>
                        </ButtonSet>
                    </InputBox>
                </GradientBox>
            </SignUpBox>
        </StyledSignUp>
    );
};

export default SignUp;