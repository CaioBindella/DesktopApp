import React, { useState } from "react";
import * as C from "./style";
import FormPF from "../FormPF";
import FormPJ from "../FormPJ";
import Header from "../Header";
import { useNavigate } from "react-router-dom";

export default function ClientRegister() {

    const navigate = useNavigate();
    const [clientType, setClientType] = useState("pf"); // Estado para armazenar o tipo de cliente selecionado

    const handleClientTypeChange = (event) => {
        setClientType(event.target.value); // Atualiza o estado com o tipo de cliente selecionado
    };

  

  return (
    <C.Container>
        <Header/>
        <C.DivRow>
            <C.DivInputs>
            <input
                type="radio"
                name="clientType"
                value="pf"
                checked={clientType === "pf"}
                onChange={handleClientTypeChange}
            />
            <C.Text>Pessoa Física</C.Text>
            </C.DivInputs>

            <C.DivInputs>
            <input
                type="radio"
                name="clientType"
                value="pj"
                checked={clientType === "pj"}
                onChange={handleClientTypeChange}
            />
            <C.Text>Pessoa Jurídica</C.Text>
            </C.DivInputs>
        </C.DivRow>

        {clientType === "pf" ? <FormPF /> : <FormPJ />} 

        
    </C.Container>
  );
}
