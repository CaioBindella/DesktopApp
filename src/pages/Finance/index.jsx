import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import "./style.css"
import { useState } from "react";
import BarChart from "../../Charts/BarChart";
import  {FinancesData}  from "../../Data/Finan.js";

export default function Finance(){

    const [formType, setFormType] = useState('button1');

    const [userData, setUserData] = useState({
        labels: FinancesData.map((data) => data.month),
        datasets: [
          {
            label: "Crescimento Mensal",
            data: FinancesData.map((data) => data.userGain),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(199, 29, 221, 0.2)',
                'rgba(89, 6, 156, 0.2)',
                'rgba(115, 28, 230, 0.2)',
                'rgba(173, 17, 113, 0.2)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
                'rgb(207, 29, 192)',
                'rgb(93, 13, 139)',
                'rgb(197, 22, 212)',
                'rgb(180, 25, 180)',
              ],
              borderWidth: 1,
          },
        ],
      });

    const handleButtonClick = (type) => {
        setFormType(type);
    };

    const renderForm = () => {
        switch (formType) {
        case 'button1':
            return <Form1 />;
        case 'button2':
            return <Form2 />;
        case 'button3':
            return <Form3 />;
        case 'button4':
            return <Form4 />;
        case 'button5':
            return <Form5 />;
        case 'button6':
            return <Form6 />;
        default:
            return null;
        }
    };


    return(

        <div className="Cont">
            <Header/>

            <div className="OptionsFinance">
                <div class="btn-group" role="group" aria-label="Basic checkbox toggle button group">

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio1" autocomplete="off" onClick={() => handleButtonClick('button1')}/>
                    <label class="btn btn-outline-primary" for="btnradio1">Receitas e Despesas</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio2" autocomplete="off" onClick={() => handleButtonClick('button2')}/>
                    <label class="btn btn-outline-primary" for="btnradio2">Contas a Receber e a Pagar</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio3" autocomplete="off" onClick={() => handleButtonClick('button3')}/>
                    <label class="btn btn-outline-primary" for="btnradio3">Fluxo de Caixa</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio4" autocomplete="off" onClick={() => handleButtonClick('button4')}/>
                    <label class="btn btn-outline-primary" for="btnradio4">Recursos Humanos</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio5" autocomplete="off" onClick={() => handleButtonClick('button5')}/>
                    <label class="btn btn-outline-primary" for="btnradio5">Custos Variáveis e Fixos</label>

                    <input type="radio" class="btn-check" name="btnradio" id="btnradio6" autocomplete="off" onClick={() => handleButtonClick('button6')}/>
                    <label class="btn btn-outline-primary" for="btnradio6">Investimentos e Empréstimos</label>
                </div>
            </div>

            <div className="forms">
                {renderForm()}
            </div>

            {/* <div className="Divchart">
                <BarChart chartData={userData}/>
            </div> */}

            <Footer/>
        </div>
    );
}

const Form1 = () => {
    return (
        <div className="center">
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <span className="input-group-text">Total de receitas:</span>
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" 
                placeholder="Incluindo vendas de produtos/serviços, receitas de investimentos, etc."/>
            </div>

            <div className="input-group">
                <span className="input-group-text">$</span>
                <span className="input-group-text">Total de despesas:</span>
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"
                placeholder="Como custo de mercadorias vendidas, despesas operacionais, impostos, etc."/>
            </div>

            <div className="button-add">
                <button type="button" class="btn btn-primary btn-lg" onClick={() => navigate("/Client")}>Adicionar</button>
            </div>
            
        </div>
    );
}

const Form2 = () => {
    return (
        <div className="center">
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <span className="input-group-text">Contas a Receber:</span>
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" 
                placeholder="Valores pendentes de clientes"/>
            </div>

            <div className="input-group">
                <span className="input-group-text">$</span>
                <span className="input-group-text">Contas a Pagar:</span>
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"
                placeholder="Valores pendentes a fornecedores e outras obrigações"/>
            </div>

            <div className="button-add">
                <button type="button" class="btn btn-primary btn-lg" onClick={() => navigate("/Client")}>Adicionar</button>
            </div>
        </div>
    );
}

const Form3 = () => {
    return (
        <div className="center">
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <span className="input-group-text">Entradas de caixa:</span>
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" 
                placeholder="Dinheiro que entra na empresa."/>
            </div>

            <div className="input-group">
                <span className="input-group-text">$</span>
                <span className="input-group-text">Saídas de caixa:</span>
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"
                placeholder="Dinheiro que sai da empresa."/>
            </div>

            <div className="button-add">
                <button type="button" class="btn btn-primary btn-lg" onClick={() => navigate("/Client")}>Adicionar</button>
            </div>
        </div>
    );
}

const Form4 = () => {
    return (
        <div className="center"> 
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <span className="input-group-text">Nome do funcionário:</span>
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" 
                placeholder="Nome do funcionário"/>
            </div>

            <div className="input-group">
                <span className="input-group-text">$</span>
                <span className="input-group-text">Salário Bruto:</span>
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"
                placeholder="Salário bruto com benefícios."/>
            </div>

            <div className="button-add">
                <button type="button" class="btn btn-primary btn-lg" onClick={() => navigate("/Client")}>Adicionar</button>
            </div>
        </div>
    );
}

const Form5 = () => {
    return (
        <div className="center">
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <span className="input-group-text">Custos Variáveis:</span>
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" 
                placeholder="Custos que variam com a produção ou vendas (por exemplo, matérias-primas)."/>
            </div>

            <div className="input-group">
                <span className="input-group-text">$</span>
                <span className="input-group-text">Custos Fixos:</span>
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"
                placeholder="Custos que permanecem constantes, independentemente do volume de vendas (por exemplo, aluguel)."/>
            </div>

            <div className="button-add">
                <button type="button" class="btn btn-primary btn-lg" onClick={() => navigate("/Client")}>Adicionar</button>
            </div>
        </div>
    );
}

const Form6 = () => {
    return (
        <div className="center">
            <div className="input-group mb-3">
                <span className="input-group-text">$</span>
                <span className="input-group-text">Investimentos:</span>
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)" 
                placeholder="Informações sobre investimentos realizados pela empresa"/>
            </div>

            <div className="input-group">
                <span className="input-group-text">$</span>
                <span className="input-group-text">Empréstimos:</span>
                <input type="text" className="form-control" aria-label="Dollar amount (with dot and two decimal places)"
                placeholder="Informações sobre empréstimos tomados da empresa."/>
            </div>

            <div className="button-add">
                <button type="button" class="btn btn-primary btn-lg" onClick={() => navigate("/Client")}>Adicionar</button>
            </div>
        </div>
    );
}