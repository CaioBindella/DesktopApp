import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import * as h from "./style.js";
import Header from "../Header/index.jsx";
import BarChart from "../../Charts/BarChart.jsx";
import { UserData } from "../../Data/Data.js";
import Footer from "../Footer/index.jsx";
import Numbers from "../../assets/numbers.webp"
import "./style.css"

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
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div class="col">
                            <div class="card h-100 ">
                            <img src={Numbers} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            <img src={Numbers} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                            </div>
                        </div>
                        <div class="col">
                            <div class="card h-100">
                            <img src={Numbers} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">Card title</h5>
                                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Last updated 3 mins ago</small>
                            </div>
                            </div>
                        </div>
                        </div>
                    </h.Content> 
            <Footer/>
        </div>
    );
}


{/* <h.MenuBar>
                    <h.ButtonOption onClick={() => navigate("/Client")}>
                        <h.Text>Clientes</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption>
                        <h.Text>Funcionários</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption onClick={() => navigate("/Dashboard")}>
                        <h.Text>Dashboards</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption>
                        <h.Text>Finanças</h.Text>
                    </h.ButtonOption>
                    <h.ButtonOption onClick={() => navigate("/")}>
                        <h.Text>Sair</h.Text>
                    </h.ButtonOption> 
                </h.MenuBar> */}