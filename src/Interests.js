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
import Cooking from "./pictures/cooking.jpg";
import Fitness from "./pictures/fitness.png";

export default class Interests extends React.Component {
  render() {
    const podcasts = [
      {
        title: "Reply All Podcast",
        source: Replyall,
        link: "https://gimletmedia.com/shows/reply-all"
      },
      {
        title: "Heavyweight Podcast",
        source: Heavyweight,
        link: "https://gimletmedia.com/shows/heavyweight"
      },
      {
        title: "The Daily Podcast",
        source: Thedaily,
        link: "https://nytimes.com/thedaily"
      },
      {
        title: "Pod Save America",
        source: Podsaveamerica,
        link: "https://crooked.com/podcast-series/pod-save-america/"
      }
    ];
    const videoGames = [
      {
        title: "League of Legends",
        source: League,
        link: "https://leagueoflegends.com"
      },
      {
        title: "League of Legends Esports",
        source: Lolesports,
        link: "https://lol.gamepedia.com/New_To_League"
      },
      {
        title: "Minecraft",
        source: Minecraft,
        link: "https://minecraft.net"
      }
    ];
    const miscellaneous = [
      {
        title: "Reddit",
        source: Reddit,
        link: "https://reddit.com/r/all"
      },
      {
        title: "Twitter",
        source: Twitter,
        link: "https://twitter.com"
      },
      {
        title: "Apple",
        source: Apple,
        link: "https://reddit.com/r/apple"
      },
      {
        title: "Cooking",
        source: Cooking,
        link: "https://reddit.com/r/food"
      },
      {
        title: "Fitness/Weightlifting",
        source: Fitness,
        link: "https://reddit.com/r/fitness"
      }
    ];
    return (
      <div className="interestsPage">
        <h1> Interests </h1>

        <div className="interests">
          <h3> Podcasts </h3>
          {podcasts.map(podcast => (
            <a href={podcast.link}>
              <img
                title={podcast.title}
                alt={podcast.title}
                className="interestsPicture"
                src={podcast.source}
              />
            </a>
          ))}

          <h3> Video Games </h3>
          {videoGames.map(game => (
            <a href={game.link}>
              <img
                title={game.title}
                alt={game.title}
                className="interestsPicture"
                src={game.source}
              />
            </a>
          ))}
          <h3> Miscellaneous </h3>
          {miscellaneous.map(misc => (
            <a href={misc.link}>
              <img
                title={misc.title}
                alt={misc.title}
                className="interestsPicture"
                src={misc.source}
              />
            </a>
          ))}
        </div>
      </div>
    );
  }
}

/*
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
*/
