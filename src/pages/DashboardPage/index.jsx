import React from "react";
import * as D from "./style"
import LineChart from "../../Charts/LineChart";
import PieChart from "../../Charts/PieChart.jsx";
import RadarChart from "../../Charts/RadarChart.jsx";
import BarChart from "../../Charts/BarChart.jsx";
import { useState } from "react";
import { UserData } from "../../Data/Data.js";
import Header from "../Header/index.jsx";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer/index.jsx";
import CardDashboard from "../../Components/CardDashboard/index.jsx";

export default function Dashboards( props){

    const navigate = useNavigate();

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
        <D.Container>
            <Header/>
            <D.DivRow>
                
                  <div class="col-sm">
                    <CardDashboard Title="Receitas" number="R$2132,13" Description="Last seen 14hours"/>
                  </div>
                  <div class="col-sm">
                    <CardDashboard Title="Despesas" number="R$2132,13" Description="Last seen 14hours"/>
                  </div> 
                  <div class="col-sm">
                    <CardDashboard Title="Caixa" number="R$2132,13" Description="Last seen 14hours"/>
                  </div> 
                  <div class="col-sm">
                    <CardDashboard Title="Contas" number="R$2132,13" Description="Last seen 14hours"/>
                  </div> 
              
            </D.DivRow>
            

            <D.DivBottom>
              <div class="row">
                  <div class="col-sm">
                    <BarChart chartData={userData}/>
                  </div>
                  <div class="col-sm">
                    <RadarChart chartData={userData}/>
                  </div>
                </div>
            </D.DivBottom>
            <Footer/>
        </D.Container>
    );
}



{/* <LineChart chartData={userData}/>
<PieChart chartData={userData}/>

  */}