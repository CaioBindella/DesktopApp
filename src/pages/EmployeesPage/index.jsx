import React from "react";
import Header from "../Header/index"
import Footer from "../Footer/index"

export default function PageEmp(){
    return(
        <div className="Cont">
            <Header></Header>
            
            <div class="card-columns">
                <div class="card">
                    <div class="card-body">
                        <div class="media">
                        <img class="d-flex align-self-start mr-3" src="/images/pathToYourImage.png" alt=""/>
                        <div class="media-body">
                            <h2 class="mt-0">Mark Otto</h2>
                            <p>Idade: 23 anos.</p>
                            <span>CPF: 000.000.000-00</span>
                            <p>Data de nascimento: 00/00/0000</p>
                            <p>Endereço: rua xxxxxxxxxxx</p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="card p-3">
                        <p>Função: Desenvolvedor</p>
                        <p>Tempo na empresa: 2 anos</p>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <span>Salario Bruto: R$ 3000,00</span>
                        </div>
                    </div>
                    <div class="card bg-primary p-3 text-center">
                        <p>dashboard</p>
                    </div>
                </div>


            <Footer></Footer>
        </div>
    )
}