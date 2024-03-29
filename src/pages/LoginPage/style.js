import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    margin: 0%;
    display: flex;
    flex-direction: row;
    
`;

export const LeftContent = styled.div`
    background-color: #01062C;
    width: 60%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-left: 0px;
    
`;

export const Title = styled.h1`
    font-size: 80px;
    color: #fff;
`;

export const RightContent = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    flex-direction: column;
    width: 40%;
`;

export const Input = styled.input`
    padding: 10px;
    margin: 10px;
    width: 300px;
    border: 0;
    border-bottom: 1px solid #01062C;
`;

export const ButtonLogin = styled.button`
    background-color: #01062C;
    border: none;
    border-radius: 6px;
    width: 300px;
    height: 30px;
    color: white;
    margin: 30px;
`;

export const Description = styled.span`
    color: #fff;
    font-weight: 500;
    width: 400px;
    padding: 30px;
    text-align: justify;
`;


