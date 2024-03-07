import React, { useState} from "react";
import "./style.css";
import IMGHome from "../../assets/homeImage.svg";
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
    <div className="Container">
      <div className="Left-Content">
        <h1>GERENC.IA</h1>
        <img src={IMGHome} alt="Imagem da Home" />
        <span>
          Completo e intuitivo, projetado para otimizar a gestão de todas as
          áreas de uma empresa. Desde o controle financeiro e de estoque até o
          gerenciamento de recursos humanos e vendas, este software oferece
          ferramentas poderosas para simplificar processos, aumentar a
          eficiência e impulsionar o crescimento. Com recursos personalizáveis
          e relatórios detalhados, é a escolha ideal para empresas de todos os
          tamanhos que buscam uma gestão mais eficaz e resultados superiores.
        </span>
      </div>
      <div className="Right-Content">
        <input
          type="text"
          placeholder="Nome de Usuário"
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />

        <input
          type="password"
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
        />

        <button onClick={() => LoginFunc("/homePage")}>Entrar</button>
      </div>
    </div>
  );
}
