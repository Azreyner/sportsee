import React, { useState, useEffect } from "react";
import logo from "../Assets/SportSeeLogo.png";
import SportsData from "../SportsData.js";
import BoutonAside from "../Components/BoutonAside";
import "../Style/Pages/Home.scss";

import Zen from "../Assets/NavAside/Zen.svg";
import Nage from "../Assets/NavAside/Nage.svg";
import Velo from "../Assets/NavAside/Velo.svg";
import Muscu from "../Assets/NavAside/Muscu.svg";

function Home() {
  const [testDonnée, setTestDonnée] = useState();

  /*useEffect(() => {
    axios
      .get("./generalMocked.json")
      .then((response) => {
        setTestDonnée(response.data[0].id);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);*/

  useEffect(() => {
    const donees = new SportsData();
    console.log(donees);
    setTestDonnée(donees.getTest());
  }, []);

  //console.log(new SportsData().getTest());

  return (
    <div className="home">
      <header>
        <img src={logo} alt="Logo de SportSee" />
        <nav>
          <ul>
            <li>
              <a href="#">Accueil</a>
            </li>
            <li>
              <a href="#">Profil</a>
            </li>
            <li>
              <a href="#">Réglage</a>
            </li>
            <li>
              <a href="#">Communauté</a>
            </li>
          </ul>
        </nav>
        <h1>{testDonnée}</h1>
      </header>
      <aside>
        <ul>
          <li>
            <BoutonAside logo={Zen} nom="Méditation" />
          </li>
          <li>
            <BoutonAside logo={Nage} nom="Nage" />
          </li>
          <li>
            <BoutonAside logo={Velo} nom="Vélo" />
          </li>
          <li>
            <BoutonAside logo={Muscu} nom="Musculation" />
          </li>
        </ul>
        <p>Copiryght, SportSee 2020</p>
      </aside>
    </div>
  );
}

export default Home;
