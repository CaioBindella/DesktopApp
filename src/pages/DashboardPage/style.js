import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 400px;
    justify-content: space-around;
    align-items: center;
    height: 350px;
`;

export const Button = styled.button`
    background-color: #7F48F3;
    color: #fff;
    width: 250px;
    border: 1px solid #fff;
    margin-top: 7%;
    padding: 1%;
    border-radius: 7px;
`;

export const DivButtonCentred = styled.div`
    width: 90%;
    display: flex;
    justify-content: start;
`;