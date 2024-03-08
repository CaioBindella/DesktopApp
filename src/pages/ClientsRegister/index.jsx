import React from "react";
import * as C from "./style"
import FormPF from "../FormPF";

export default function ClientRegister(){
    return(
        <C.Container>
            <C.Title>Cadastro de Cliente</C.Title>

            {/* <C.InputData type="radio"></C.InputData>
            <Text>Pessoa Física</Text>

            <C.InputData type="radio"></C.InputData>
            <Text>Pessoa Jurídica</Text> */}
            <FormPF/>

        </C.Container>
    );
}