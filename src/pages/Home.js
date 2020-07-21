import React from "react";
import Typist from "react-typist";
import { Link } from "react-router-dom";

class Home extends React.Component {
  styles = {
    mainBG: {
      transform: "skewY(-4deg)",
      transformOrigin: "top left",
      backgroundImage: `url("https://cdn.discordapp.com/attachments/704599857083449366/722677588484423721/luca-bravo-XJXWbfSo2f0-unsplash_1.jpg")`,
      backgroundSize: "cover",
      height: "85vh",
    },
    centerAll: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: `skewY(+4deg) translate(-50%, -50%)`,
      transformOrigin: `top left`,
    },
  };

  render() {
    return (
      <>
        <div style={this.styles.mainBG} className="text-center">
          <div style={this.styles.centerAll} className="text-white">
            <div className="text-6xl font-bold">
              <Typist
                avgTypingDelay={40}
                cursor={{ blink: true, element: "_" }}
                startDelay={500}
              >
                Developer Gangjun
                {/* <Typist.Backspace delay={500} count={20} />
              Welcome to Visit my website! */}
              </Typist>
            </div>
          </div>
          <div class="arrowBox">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </>
    );
  }
}

export default Home;
