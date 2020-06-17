import React from "react";
import Typist from "react-typist";
import { Link } from "react-router-dom";

class Home extends React.Component {
  styles = {
    bg: {
      backgroundImage:
        "url('https://cdn.discordapp.com/attachments/704599857083449366/722677588484423721/luca-bravo-XJXWbfSo2f0-unsplash_1.jpg')",
      backgroundSize: "cover",
      height: "100vh",
      width: "100vw",
    },
    centerAll: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: "100vw",
    },
  };

  render() {
    return (
      <div style={this.styles.bg} className="text-center">
        <div style={this.styles.centerAll} className="text-white">
          <div className="text-6xl font-bold">
            <Typist
              avgTypingDelay={40}
              cursor={{ blink: true, element: "_" }}
              startDelay={500}
            >
              Hello, I'm GangjunLee ,<br />a Student Developer
              <Typist.Backspace delay={500} count={20} />
              Welcome to Visit my website!
            </Typist>
          </div>
          <div className="mt-12 flex justify-center">
            <Link
              to="/about"
              className="bg-transparent text-white font-semibold hover:text-gray-300 py-2 px-4 border border-white hover:border-gray-300 rounded-l cursor-pointor"
            >
              AboutMe
            </Link>
            <Link
              to="/account"
              className="bg-transparent text-white font-semibold hover:text-gray-300 py-2 px-4 border border-white hover:border-gray-300 cursor-pointor"
            >
              Account
            </Link>
            <Link
              to="posts"
              className="bg-transparent text-white font-semibold hover:text-gray-300 py-2 px-4 border border-white hover:border-gray-300 cursor-pointor"
            >
              Posts
            </Link>
            <Link
              to="services"
              className="bg-transparent text-white font-semibold hover:text-gray-300 py-2 px-4 border border-white hover:border-gray-300 cursor-pointor"
            >
              Services
            </Link>
            <Link
              to="contact"
              className="bg-transparent text-white font-semibold hover:text-gray-300 py-2 px-4 border border-white  hover:border-gray-300 rounded-r cursor-pointor"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
