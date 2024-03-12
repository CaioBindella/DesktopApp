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

export default function Dashboards(){

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
                <LineChart chartData={userData}/>
                <PieChart chartData={userData}/>
                <RadarChart chartData={userData}/>
                <BarChart chartData={userData}/>
            </D.DivRow>

            {/* <D.DivRow>
                <RadarChart chartData={userData}/>
                <BarChart chartData={userData}/>
            </D.DivRow> */}
            <Footer/>
        </D.Container>
    );
}