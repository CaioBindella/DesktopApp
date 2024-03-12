import React, { useState } from "react";
import * as C from "./style"
import Footer from "../Footer";

export default function FormPF(){

    const[nome, setNome] = useState("");
    const[cpf, setCpf] = useState("");
    const[datanasc, setDataNasc] = useState("");
    const[CEP, setCep] = useState("");
    const[endereco, setEndereco] = useState("");
    const[numero, setNumero] = useState();
    const[contato, setContato] = useState("");
    const[email, setEmail] = useState("");


    const checkCEP = () => {
        const cep = CEP.replace(/\D/g, '');

        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
          setEndereco(data.logradouro)
        })
        .catch(error => {
            console.log("Erro", "Erro ao validar CEP")
        });
    }

    return(
        <C.Container>
            <C.Title>Cadastro de PF</C.Title>
            <C.DivRow>
                <C.InputsLeft>
                    <C.Inputs>
                        <C.Text>Nome Completo</C.Text>
                        <C.InputData 
                            placeholder="Digite o nome neste campo"
                            value={nome}
                            onChange={(e) => setNome(e.target.value)}
                        />
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>CPF</C.Text>
                        <C.InputData 
                            placeholder="Digite o CPF neste campo"
                            value={cpf}
                            onChange={(e) => setCpf(e.target.value)}/>
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>Data de nascimento</C.Text>
                        <C.InputData 
                            placeholder="Digite a data neste campo"
                            value={datanasc}
                            onChange={(e) => setDataNasc(e.target.value)}/>
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>CEP</C.Text>
                        <C.InputData 
                            placeholder="Digite o CEP neste campo"
                            value={CEP}
                            onBlur={checkCEP}
                            onChange={(e) => setCep(e.target.value)}
                        />
                    </C.Inputs> 
                </C.InputsLeft>
                <C.Line></C.Line>
                <C.InputsRight>
                    <C.Inputs>
                        <C.Text>Endereço</C.Text>
                        <C.InputData 
                            placeholder="Digite o endereo neste campo"
                            value={endereco}
                            onChange={(e) => setEndereco(e.target.value)}
                        />
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>Número</C.Text>
                        <C.InputData 
                            placeholder="Digite o número neste campo"
                            value={numero}
                            type="number"
                            onChange={(e) => setNumero(e.target.value)}/>
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>Celular/Telefone</C.Text>
                        <C.InputData 
                            placeholder="Digite o contato neste campo"
                            value={contato}
                            onChange={(e) => setContato(e.target.value)}/>
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>Email</C.Text>
                        <C.InputData 
                            placeholder="Digite o email neste campo"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </C.Inputs>
                </C.InputsRight>
            </C.DivRow>
            
            <button type="button" class="btn btn-primary btn-lg" onClick={() => navigate("/Client")}>Cadastrar novo Cliente</button>

            <Footer></Footer>
        </C.Container>

    );
}