import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    /* From https://css.glass */
    
`;

export const ContentDashboard = styled.div`
    width: 100%;
    padding: 10px;
    /* From https://css.glass */
/* From https://css.glass */
    background: rgba(84, 32, 141, 0.81);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(2.9px);
    -webkit-backdrop-filter: blur(2.9px);
    border: 1px solid rgba(84, 32, 141, 0.52);
`;

export const DivRow = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    /* height: 12vh; */
`;

export const DivBottom = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    /* border: 1px solid black; */
    justify-content: space-around;
    align-items: center;
    height: 50vh;
    /* padding: 3%; */
    margin-bottom: 3%;
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