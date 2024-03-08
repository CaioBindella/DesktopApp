import styled from "styled-components"

export const Container = styled.div`
    width: 60%;
    height: 60vh;
    border: 3px solid #7F48F3;
    border-radius: 7px;
    padding: 40px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: column;
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
    width: 200px;
    border-radius: 7px;
    padding: 8px;
    border: 1px solid #7F48F3;
`;

export const Text = styled.p`

`;

export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
`;

export const ButtonRegister = styled.button`
    background-color: #7F48F3;
    border: none;
    border-radius: 6px;
    width: 300px;
    height: 30px;
    color: white;
    margin: 30px;
`;