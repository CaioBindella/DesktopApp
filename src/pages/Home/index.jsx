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
            label: "Crescimento Anual",
            data: UserData.map((data) => data.userGain),
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


    return(
        <h.Container>
            <Header/>
            <h.ColumnContent>
                <h.MenuBar>
                    <h.ButtonOption onClick={() => navigate("/Client")}>
                        <h.Text>Clientes</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption>
                        <h.Text>Funcionários</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption>
                        <h.Text>Dashboards</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption>
                        <h.Text>Finanças</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption onClick={() => navigate("/")}>
                        <h.Text>Sair</h.Text>
                    </h.ButtonOption> 
                </h.MenuBar>
                <h.Content>
                    <BarChart 
                    chartData={userData} />
                </h.Content> 
            </h.ColumnContent>
        </h.Container>
    );
}