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
    margin-top: 8px;
    /* From https://css.glass */
/* From https://css.glass */
    background: rgba( 255, 255, 255, 0.05 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 0.5px );
    -webkit-backdrop-filter: blur( 0.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
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
    padding-top: 3%;
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

export const Line = styled.div`
    border: 1px solid #01062C;
    height: 250px;
`;