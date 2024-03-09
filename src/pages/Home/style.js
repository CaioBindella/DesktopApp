import styled from "styled-components"

export const Container = styled.div`
    display: flex;
    width: 100%;
    height: 100%;
    flex-direction: column;
    
`;

export const ButtonOption = styled.button`
    border: 0px;
    border-bottom: 1px solid #7F48F3;
    background-color: #fff;
    width: 250px;
    border-radius: 0px 0px 8px 8px;
    border: 1px solid #7F48F3;
    border-top: 0px;

    &:hover{
        background-color: lightgrey;
        color: #fff
    }

`;

export const MenuBar = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
`;


export const Content = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 60%;
    padding: 50px;
`;

export const Text = styled.p`
    color: #7F48F3;
    font-weight: 600;

    
`;

export const ColumnContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;