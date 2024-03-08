import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import * as h from "./style.js";
import Header from "../Header/index.jsx";
import BarChart from "../../Charts/BarChart.jsx";
import { UserData } from "../../Data/Data.js";

export default function Home(){

    const navigate = useNavigate()

    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
          {
            label: "Users Gained",
            data: UserData.map((data) => data.userGain),
            backgroundColor: [
              "rgba(75,192,192,1)",
              "#ecf0f1",
              "#50AF95",
              "#f3ba2f",
              "#2a71d0",
            ],
            borderColor: "black",
            borderWidth: 2,
          },
        ],
      });


    return(
        <h.Container>
            <Header/>
            <h.RowContent>
                <h.MenuBar>
                    <h.ButtonOption>
                        <h.Text>Início</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption onClick={() => navigate("/Client")}>
                        <h.Text>Cadastrar Cliente</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption>
                        <h.Text>Gerar Dashboard</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption>
                        <h.Text>Caixa da Empresa</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption>
                        <h.Text>Gerir Membros</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption>
                        <h.Text>?</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption>
                        <h.Text>?</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption>
                        <h.Text>?</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption>
                        <h.Text>?</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption onClick={() => navigate("/")}>
                        <h.Text>Sair</h.Text>
                    </h.ButtonOption>
                </h.MenuBar>
                <h.Content>
                    <BarChart chartData={userData} />
                </h.Content> 
            </h.RowContent>
        </h.Container>
    );
}