import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import * as h from "./style.js";
import Header from "../Header/index.jsx";
import BarChart from "../../Charts/BarChart.jsx";
import { UserData } from "../../Data/Data.js";
import Footer from "../Footer/index.jsx";
import Numbers from "../../assets/numbers.webp"
import "./style.css"
import TodoList from "../../Components/ListTask/index.jsx";

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
        <div className="Cont">
            <Header/>
                <h.Content>
                        <TodoList/>
                    </h.Content> 
            <Footer/>
        </div>
    );
}
