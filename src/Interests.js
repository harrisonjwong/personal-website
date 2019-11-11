import React from "react";

import "./Interests.css";

import Replyall from "./pictures/replyall.jpg";
import Heavyweight from "./pictures/heavyweight.png";
import Thedaily from "./pictures/thedaily.jpg";
import Podsaveamerica from "./pictures/podsaveamerica.jpg";

import Reddit from "./pictures/reddit.png";
import Twitter from "./pictures/twitter.png";
import Apple from "./pictures/apple.png";

import League from "./pictures/league.jpg";
import Lolesports from "./pictures/lolesports.png";
import Minecraft from "./pictures/minecraft.png";
import Etho from "./pictures/etho.jpg";

import Cooking from "./pictures/cooking.jpg";
import Fitness from "./pictures/fitness.png";

export default class Interests extends React.Component {
  render() {
    return (
      <div className="interestsPage">
        <h1> Interests </h1>

        <h3> Podcasts </h3>
        <div className="podcasts">
          <a href="https://gimletmedia.com/shows/reply-all">
            <img
              className="interestsPicture"
              src={Replyall}
              alt="Reply All Podcast"
            />
          </a>
          <a href="https://gimletmedia.com/shows/heavyweight">
            <img
              className="interestsPicture"
              src={Heavyweight}
              alt="Heavyweight Podcast"
            />
          </a>
          <a href="https://nytimes.com/thedaily">
            <img
              className="interestsPicture"
              src={Thedaily}
              alt="The Daily Podcast"
            />
          </a>
          <a href="https://crooked.com/podcast-series/pod-save-america/">
            <img
              className="interestsPicture"
              src={Podsaveamerica}
              alt="Pod Save America Podcast"
            />
          </a>

          <h3> Video Games </h3>
          <a href="https://leagueoflegends.com">
            <img
              className="interestsPicture"
              src={League}
              alt="League of Legends"
            />
          </a>
          <a href="https://lol.gamepedia.com">
            <img
              className="interestsPicture"
              src={Lolesports}
              alt="League of Legends Esports"
            />
          </a>
          <a href="https://minecraft.net">
            <img className="interestsPicture" src={Minecraft} alt="Minecraft" />
          </a>
          <a href="https://youtube.com/ethoslab">
            <img
              className="interestsPicture"
              src={Etho}
              alt="EthosLab (Minecraft YouTuber)"
            />
          </a>

          <h3> Miscellaneous </h3>
          <a href="https://reddit.com/r/all">
            <img className="interestsPicture" src={Reddit} alt="Reddit" />
          </a>
          <a href="https://twitter.com">
            <img className="interestsPicture" src={Twitter} alt="Twitter" />
          </a>
          <a href="https://reddit.com/r/apple">
            <img className="interestsPicture" src={Apple} alt="Apple" />
          </a>
          <a href="https://reddit.com/r/food">
            <img className="interestsPicture" src={Cooking} alt="Cooking" />
          </a>
          <a href="https://reddit.com/r/fitness">
            <img className="interestsPicture" src={Fitness} alt="Fitness" />
          </a>
        </div>
      </div>
    );
  }
}
