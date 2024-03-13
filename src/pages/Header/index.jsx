import React from "react";
import * as h from "./style";
import "./style.css"
import { useNavigate } from "react-router-dom";

export default function Header(props){

    const navigate = useNavigate();
    return(
        <div className="headerR">
            <nav class="navbar navbar-expand-lg navbar-light bg-primary w-auto p-3 ml-120px">
                <a class="navbar-brand" href="#">GERENC.IA</a>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item active">
                            <a class="nav-link" role="button" onClick={() => navigate("/homePage")}>Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="button" onClick={() => navigate("/Clients")}>Clientes</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="button" onClick={() => navigate("/Employees")}>Funcionários</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="button" onClick={() => navigate("/Dashboard")}>Dashboards</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="button" onClick={() => navigate("/")}>RH</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="button" onClick={() => navigate("/Finance")}>Finanças</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" role="button" onClick={() => navigate("/")}>Sair</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="test">
                <p>a</p>
            </div>
        </div>
    )
}