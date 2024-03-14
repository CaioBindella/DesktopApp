import styled from "styled-components";

export const Container = styled.div`
    width: 250px;
    border-radius: 7px;
    padding: 15px 15px 5px 5px;
    margin: 0px;

    /* From https://css.glass */
    background: rgba(122, 0, 255, 0.53);
    border-radius: 16px;
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.3px);
    -webkit-backdrop-filter: blur(5.3px);
    border: 1px solid rgba(122, 0, 255, 0.87);
`;

export const Title = styled.h4`
    text-align: end;
    color: #fff;
`;

export const Number = styled.p`
    text-align: end;
    border-bottom: 1px solid #fff;
    font-size: 30px;
    margin-bottom: 0px;
    color: #fff;
`;

export const Description = styled.p`
    font-size: 13px;
    margin: 2px;
    color: #fff;
`;