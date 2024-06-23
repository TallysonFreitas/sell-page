import styled, { createGlobalStyle } from "styled-components";

export const EstiloGlobal = createGlobalStyle`
    *{
    padding:0;
    margin:0px;
    box-sizing:border-box;
    font-family: "Roboto", sans-serif;
    font-style: normal;
    list-style:none;
    }
    body{
    width:100%;
    height:200vh;
    background-color:#f1f1f1;
    }
`

export const Container = styled.div`
    max-width:1440px;
    width:100%;
    margin:0 auto;
`

