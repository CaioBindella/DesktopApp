import React, { useState} from "react";
import * as l from "./style.js";
import Logo from "../../assets/logo.jpeg";
import { useNavigate } from "react-router-dom"

export default function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()

  const LoginFunc = (link) => {
    // console.log(username, password);
    navigate(link);
  };

  return (
    <l.Container>
      <l.LeftContent>
        <l.Title>GERENC.IA</l.Title>
        <img src={Logo} alt="Imagem da Home" className="logowidth" />
        <l.Description>
          Completo e intuitivo, projetado para otimizar a gestão de todas as
          áreas de uma empresa. Desde o controle financeiro e de estoque até o
          gerenciamento de recursos humanos e vendas, este software oferece
          ferramentas poderosas para simplificar processos, aumentar a
          eficiência e impulsionar o crescimento. Com recursos personalizáveis
          e relatórios detalhados, é a escolha ideal para empresas de todos os
          tamanhos que buscam uma gestão mais eficaz e resultados superiores.
        </l.Description>
      </l.LeftContent>
      <l.RightContent>
        <l.Input
          type="text"
          placeholder="Nome de Usuário"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <l.Input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <l.ButtonLogin onClick={() => LoginFunc("/homePage")}>Entrar</l.ButtonLogin>
      </l.RightContent>
    </l.Container>
  );
}
