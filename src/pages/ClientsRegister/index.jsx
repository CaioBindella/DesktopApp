import React from "react";
import * as C from "./style"
import FormPF from "../FormPF";
import FormPJ from "../FormPJ";

export default function ClientRegister(){
    return(
        <C.Container>
            <C.Title>Cadastro de Cliente</C.Title>

            <C.DivInputs>
                <C.InputData type="radio"></C.InputData>
                <C.Text>Pessoa Física</C.Text>
            </C.DivInputs>

            <C.DivInputs>
                <C.InputData type="radio"></C.InputData>
                <C.Text>Pessoa Jurídica</C.Text>
            </C.DivInputs>

            {/* <FormPF/> */}
            {/* <FormPJ/> */}

        </C.Container>
    );
}