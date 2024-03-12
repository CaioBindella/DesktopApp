import styled from "styled-components"

export const Container = styled.div`
    width: 70%;
    /* border: 3px solid rgba(1089, 6, 156, 0.2); */
    border-radius: 7px;
    padding: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
    background-color: lightgrey;
`;

export const Title = styled.h1`
    font-size: 40px;
    color: black;
    text-align: center; 
`;

export const Inputs = styled.div`
    width: 100%;
`;

export const InputsLeft = styled.div`
`;

export const InputsRight = styled.div`
`;

export const InputData = styled.input`
    width: 250px;
    border-radius: 7px;
    padding: 8px;
    border: 0px;
`;

export const Text = styled.p`
`;

export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 30px;
    margin-top: 40px;
`;

export const ButtonRegister = styled.button`
    background-color: #3b71ca;
    border: none;
    border-radius: 6px;
    width: 300px;
    color: white;
    margin: 30px;
`;

export const Line = styled.div`
    border: 1px solid grey;
`;