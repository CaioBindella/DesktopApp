import React from "react";
import { useNavigate } from "react-router-dom";
import * as h from "./style.js";

export default function Home(){

    const navigate = useNavigate()


    return(
        <h.Container>
            <h.MenuBar>
                <h.Button>
                    <h.Text>Cadastrar</h.Text>
                </h.Button>
                <h.Button>
                    <h.Text>Cadastrar</h.Text>
                </h.Button>
                <h.Button>
                    <h.Text>Cadastrar</h.Text>
                </h.Button>
                <h.Button>
                    <h.Text>Cadastrar</h.Text>
                </h.Button>
                <h.Button>
                    <h.Text>Cadastrar</h.Text>
                </h.Button>
                
            </h.MenuBar>
            <h.Content>
            </h.Content>
            {/* <button onClick={() => navigate("/")}>Sair</button> */}
        </h.Container>
    );
}