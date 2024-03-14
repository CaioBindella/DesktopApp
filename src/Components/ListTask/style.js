import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

export const InputTask = styled.input`
    width: 400px;
    border: 2px solid #3E1671;
    border-radius: 7px;
    margin-right: 10px;
    padding: 10px;
    background-color: transparent;
`;

export const Title = styled.h1`
    text-align: center;
    margin-bottom: 3%;
`;

export const DeleteButton = styled.button`
    background-color: transparent;
    border: 0px;
    margin-left: 10px;
`;

export const DivEnd = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;


export const AddButton = styled.button`
    padding: 10px 15px 10px 15px;
    color: #fff;
    background-color: #9E78CF;
    font-size: 20px;
    border: 0px;
    border-radius: 7px;
`;

export const TopicList = styled.li`
    padding: 20px;
    background-color: #21182D;
    border-radius: 7px;
    list-style-type: none;
    font-size: 20px;
    margin-bottom: 10px;
    display: flex;
    justify-content: space-between;
`;

export const ContentTopicList = styled.ul`
    width: 100%;
    margin: 3%;
    color: #9E78CF;
    text-decoration: none;
`;