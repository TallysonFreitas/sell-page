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
    background-color:#FAFAFA;
    }

    .fs-7{
    font-size:14px;
    }

    .fs-8{
    font-size:12px;
    }

    .text-gray{
    color:#737373;
    }

    .mb-6{
    margin-bottom:6rem;
    }

    .text-blacked{
    color:#363636;
    }
`

export const Container = styled.div`
    max-width:1440px;
    width:100%;
    margin:0 auto;
`

