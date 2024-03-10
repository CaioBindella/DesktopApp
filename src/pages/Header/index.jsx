import React from "react";
import * as h from "./style";

export default function Header(props){
    return(
        <h.Container>
            <h.Title>{props.Title}</h.Title>
        </h.Container>
    )
}