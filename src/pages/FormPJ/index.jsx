import React, { useState } from "react";
import * as C from "./style"
import Footer from "../Footer";

export default function FormPJ(){

    const[razao, setRazao] = useState("");
    const[nomefantasia, setNomefantasia] = useState();
    const[inscmun, setInscmun] = useState("");
    const[CNPJ, setCNPJ] = useState("");
    const[CEP, setCep] = useState("");
    const[endereco, setEndereco] = useState("");
    const[cidade, setCidade] = useState("");
    const[estado, setEstado] = useState("");
    const[ativeco, setAtiveco] = useState("");
    const[numero, setNumero] = useState();
    const[contato, setContato] = useState("");
    const[email, setEmail] = useState("");


    const checkCEP = () => {
        const cep = CEP.replace(/\D/g, '');

        fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
            setEndereco(data.logradouro)
            setCidade(data.localidade)
            setEstado(data.uf)
        })
        .catch(error => {
            console.log("Erro", "Erro ao validar CEP")
        });
    }

    return(
        <C.Container>
            <C.DivRow>
                <C.InputsLeft>
                    <C.Inputs>
                        <C.Text>Razão Social</C.Text>
                        <C.InputData 
                            placeholder="Digite o nome neste campo"
                            value={razao}
                            onChange={(e) => setRazao(e.target.value)}
                        />
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>Nome fantasia</C.Text>
                        <C.InputData 
                            placeholder="Digite o CPF neste campo"
                            value={nomefantasia}
                            onChange={(e) => setNomefantasia(e.target.value)}/>
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>CNPJ</C.Text>
                        <C.InputData 
                            placeholder="Digite a data neste campo"
                            value={CNPJ}
                            onChange={(e) => setCNPJ(e.target.value)}/>
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>Inscrição municipal</C.Text>
                        <C.InputData 
                            placeholder="Digite o CEP neste campo"
                            value={inscmun}
                            onChange={(e) => setInscmun(e.target.value)}
                        />
                    </C.Inputs> 
                </C.InputsLeft>
                <C.Line></C.Line>
                <C.InputsLeft>
                    <C.Inputs>
                        <C.Text>Atividade econômica</C.Text>
                        <C.InputData 
                            placeholder="Digite o endereo neste campo"
                            value={ativeco}
                            onChange={(e) => setAtiveco(e.target.value)}
                        />
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>CEP</C.Text>
                        <C.InputData 
                            placeholder="Digite o endereo neste campo"
                            value={CEP}
                            onBlur={checkCEP}
                            onChange={(e) => setCep(e.target.value)}
                        />
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>Cidade</C.Text>
                        <C.InputData 
                            placeholder="Digite o endereo neste campo"
                            value={cidade}
                            onChange={(e) => setCidade(e.target.value)}
                        />
                    </C.Inputs>
                    <C.Inputs>
                        <C.Text>Estado</C.Text>
                        <C.InputData 
                            placeholder="Digite o endereo neste campo"
                            value={estado}
                            onChange={(e) => setEstado(e.target.value)}
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