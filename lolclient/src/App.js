import React, { Component } from "react";
import logo from "./logo.svg";
import { Route, Link, Redirect } from "react-router-dom";
import "./App.css";
import Champion from "./Component/Champion";
import Team from "./Component/Team";
import ChampionDetail from "./Component/ChampionDetail";

const champ = [
  {
    tags: ["Fighter"],
    name: "Rek'Sai",
    title: "the Void Burrower",
    blurb:
      "An apex predator, Rek'Sai is a merciless Void-spawn that tunnels beneath the ground to ambush and devour unsuspecting prey. Her insatiable hunger has laid waste to entire regions of the once-great empire of Shurima—merchants, traders, even armed...",
    icon:
      "http://ddragon.leagueoflegends.com/cdn/9.16.1/img/champion/RekSai.png",
    screen:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/RekSai_0.jpg",
    attack: 8,
    defense: 5,
    magic: 2,
    __v: 0
  },
  {
    tags: ["Fighter", "Tank"],
    name: "Renekton",
    title: "the Butcher of the Sands",
    blurb:
      "Renekton is a terrifying, rage-fueled Ascended being from the scorched deserts of Shurima. Once, he was his empire's most esteemed warrior, leading the nation's armies to countless victories. However, after the empire's fall, Renekton was entombed...",
    icon:
      "http://ddragon.leagueoflegends.com/cdn/9.16.1/img/champion/Renekton.png",
    screen:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Renekton_0.jpg",
    attack: 8,
    defense: 5,
    magic: 2,
    __v: 0
  },
  {
    tags: ["Assassin", "Fighter"],
    name: "Rengar",
    title: "the Pridestalker",
    blurb:
      "Rengar is a ferocious vastayan trophy hunter who lives for the thrill of tracking down and killing dangerous creatures. He scours the world for the most fearsome beasts he can find, especially seeking any trace of Kha'Zix, the void creature who...",
    icon:
      "http://ddragon.leagueoflegends.com/cdn/9.16.1/img/champion/Rengar.png",
    screen:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rengar_0.jpg",
    attack: 7,
    defense: 4,
    magic: 2,
    __v: 0
  },
  {
    tags: ["Fighter", "Assassin"],
    name: "Riven",
    title: "the Exile",
    blurb:
      "Once a swordmaster in the warhosts of Noxus, Riven is an expatriate in a land she previously tried to conquer. She rose through the ranks on the strength of her conviction and brutal efficiency, and was rewarded with a legendary runic blade and a...",
    icon:
      "http://ddragon.leagueoflegends.com/cdn/9.16.1/img/champion/Riven.png",
    screen:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Riven_0.jpg",
    attack: 8,
    defense: 5,
    magic: 1,
    __v: 0
  },
  {
    tags: ["Fighter", "Mage"],
    name: "Rumble",
    title: "the Mechanized Menace",
    blurb:
      "Rumble is a young inventor with a temper. Using nothing more than his own two hands and a heap of scrap, the feisty yordle constructed a colossal mech suit outfitted with an arsenal of electrified harpoons and incendiary rockets. Though others may scoff...",
    icon:
      "http://ddragon.leagueoflegends.com/cdn/9.16.1/img/champion/Rumble.png",
    screen:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Rumble_0.jpg",
    attack: 3,
    defense: 6,
    magic: 8,
    __v: 0
  },
  {
    tags: ["Mage", "Fighter"],
    name: "Ryze",
    title: "the Rune Mage",
    blurb:
      "Widely considered one of the most adept sorcerers on Runeterra, Ryze is an ancient, hard-bitten archmage with an impossibly heavy burden to bear. Armed with immense arcane power and a boundless constitution, he tirelessly hunts for World Runes—fragments...",
    icon: "http://ddragon.leagueoflegends.com/cdn/9.16.1/img/champion/Ryze.png",
    screen:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Ryze_0.jpg",
    attack: 2,
    defense: 2,
    magic: 10,
    __v: 0
  },
  {
    tags: ["Tank", "Fighter"],
    name: "Sejuani",
    title: "Fury of the North",
    blurb:
      "Sejuani is the brutal, unforgiving Iceborn warmother of the Winter's Claw, one of the most feared tribes of the Freljord. Her people's survival is a constant, desperate battle against the elements, forcing them to raid Noxians, Demacians, and Avarosans...",
    icon:
      "http://ddragon.leagueoflegends.com/cdn/9.16.1/img/champion/Sejuani.png",
    screen:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Sejuani_0.jpg",
    attack: 5,
    defense: 7,
    magic: 6,
    __v: 0
  },
  {
    tags: ["Assassin"],
    name: "Shaco",
    title: "the Demon Jester",
    blurb:
      "Crafted long ago as a plaything for a lonely prince, the enchanted marionette Shaco now delights in murder and mayhem. Corrupted by dark magic and the loss of his beloved charge, the once-kind puppet finds pleasure only in the misery of the poor souls...",
    icon:
      "http://ddragon.leagueoflegends.com/cdn/9.16.1/img/champion/Shaco.png",
    screen:
      "http://ddragon.leagueoflegends.com/cdn/img/champion/loading/Shaco_0.jpg",
    attack: 8,
    defense: 4,
    magic: 6,
    __v: 0
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      champ: champ
    };
  }
  render() {
    return (
      <div className="App">
        <nav className="navbar">
          <Link to="/">
            <div className="icon" />
          </Link>
          <Link to="/">
            <h2 id="leageteambuilder"> Leage team builder</h2>
          </Link>
          <Link to="/team">
            <h2> Team</h2>
          </Link>
          <Link to="/champions">
            <h2> Champions</h2>
          </Link>
        </nav>
        <main class="flexcolumn">
          <Route
            path="/"
            exact
            render={routeProps => <Team {...routeProps} />}
          />
          <Route path="/team" exact render={() => <Redirect to="/" />} />

          <Route
            path="/champions"
            exact
            render={routeProps => (
              <Champion champ={this.state.champ} {...routeProps} />
            )}
          />

          <Route
            path="/champions/:championName"
            exact
            render={routeProps => (
              <ChampionDetail champ={this.state.champ} {...routeProps} />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
