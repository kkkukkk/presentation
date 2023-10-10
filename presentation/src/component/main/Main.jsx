import React from 'react';
import styled from "styled-components";
import GradientBox from "../common/GradientBox";
import Button from "../common/Button";

const StyledMain = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LinkBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 60vmin;
  height: 60vmin;
  border-radius: 5px;
  box-shadow: rgba(255,255,255,.3) 1px 1px 5px 2px;
  background: rgba(255,255,255,.3);
  backdrop-filter: blur(5px);
`

const Main = () => {
    return (
        <StyledMain>
            <LinkBox>
                <GradientBox
                    width={"95%"}
                    height={"95%"}
                >
                    <Button color={"white"}>회원 가입</Button>
                </GradientBox>
            </LinkBox>
        </StyledMain>
    );
};

export default Main;