import React from "react";
import * as CD from "./style.js"

export default function CardDashboard(props){
    return(
        <CD.Container>
            <CD.Title>{props.Title}</CD.Title>
            <CD.Number>{props.number}</CD.Number>
            <CD.Description>{props.Description}</CD.Description>
        </CD.Container>
    )
}