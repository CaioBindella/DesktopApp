import React from "react";
import * as C from "./style"

export default function FormPF(){
    return(
        <C.Container>
            <C.DivRow>
                <C.InputsLeft>
                    <C.Inputs>
                        <C.Text>Nome Completo</C.Text>
                        <C.InputData></C.InputData>
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>CPF</C.Text>
                        <C.InputData></C.InputData>
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>Data de nascimento</C.Text>
                        <C.InputData></C.InputData>
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>CEP</C.Text>
                        <C.InputData></C.InputData>
                    </C.Inputs> 
                </C.InputsLeft>
                <C.InputsRight>
                    <C.Inputs>
                        <C.Text>Endereço</C.Text>
                        <C.InputData></C.InputData>
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>Número</C.Text>
                        <C.InputData></C.InputData>
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>Celular/Telefone</C.Text>
                        <C.InputData></C.InputData>
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>Email</C.Text>
                        <C.InputData></C.InputData>
                    </C.Inputs>
                </C.InputsRight>
            </C.DivRow>
            
            <C.ButtonRegister>
                <C.Text>Cadastrar</C.Text>
            </C.ButtonRegister>
        </C.Container>

    );
}