import React from 'react';
import styled from "styled-components";
import Header from "../include/Header";
import Footer from "../include/Footer";
import clouds from "../../image/clouds.jpg";

const StyledLayout = styled.div`
    display: grid;
    grid-template-areas:
    "header header header"
    ". contents ."
    "footer footer footer"
    ;
    grid-template-rows: 5% auto 10%;
    grid-template-columns: 5% auto 5%;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    background: url(${clouds}) no-repeat;
    background-size: cover;
}
`;

const Contents = styled.div`
    grid-area: contents;
`;

const Layout = ({children}) => {
    return (
        <StyledLayout>
            <Header></Header>
            <Contents>{children}</Contents>
            <Footer></Footer>
        </StyledLayout>
    );
};

export default Layout;