import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { useState } from "react";
import { ClientsData } from "../../Data/Clients";
import "./style.css"
import { useNavigate } from "react-router-dom";


export const RenderLista = ({data, search}) => {


    const searchLowerCase = search.toLowerCase()
    const names = ClientsData.filter((eachData) => eachData.name.toLowerCase().includes(searchLowerCase));
    
    return (
        <>
            {
                names.map((eachName) => {
                    const key = eachName.id;
                    const title = `Nome: ${eachName.name} ${eachName.last}`;
                    const type = `Tipo: ${eachName.type}`;
                    return (
                        <div class="card" >
                            <h5 class="card-header">{title}</h5>
                            <div class="card-body">
                                {/* <h5 class="card-title">dsadasd</h5> */}
                                <p class="card-text">#{key} - {type}</p>
                                <a href="#" class="btn btn-primary">Editar</a>
                            </div>
                        </div>   
                    )
                })
            }
        </>
    )
}

export default function Clients(){

    const [search, setSearch] = useState("");
    const navigate = useNavigate();

    return(
        <div className="Cont">
            <Header/>

            <div class="input-group input-group-sm mb-3">
                <span class="input-group-text" id="inputGroup-sizing-sm">Digite o nome a ser procurado:</span>
                <input type="text" 
                class="form-control" 
                aria-label="Sizing example input" 
                aria-describedby="inputGroup-sizing-sm"
                value={search}
                onChange={(e) => setSearch(e.target.value)}/>
            </div>

            <button type="button" class="btn btn-primary btn-lg" onClick={() => navigate("/Client")}>Cadastrar novo Cliente</button>
            
            <div className="Content-card">
                <RenderLista search={search} data={ClientsData}/>
            </div>
            

            <Footer/>
        </div>
    )
}
