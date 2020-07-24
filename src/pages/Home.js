import React from "react";
import Typist from "react-typist";
import { Element, animateScroll as scroll } from "react-scroll";

const Home = () => {
  const styles = {
    mainBG: {
      transform: "skewY(-4deg)",
      transformOrigin: "top left",
      backgroundImage: `url("https://cdn.discordapp.com/attachments/704599857083449366/722677588484423721/luca-bravo-XJXWbfSo2f0-unsplash_1.jpg")`,
      backgroundSize: "cover",
      height: "85vh",
      backgroundAttachment: "fixed",
    },
    centerAll: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: `skewY(+4deg) translate(-50%, -50%)`,
      transformOrigin: `top left`,
    },
  };

  const BuildIcon = ({ icon }) => {
    return (
      <div>
        <i className={`${icon} flex justify-center`} />
      </div>
    );
  };

  const IconList = [
    { name: "devicon-react-original" },
    { name: "devicon-vuejs-plain" },
    { name: "devicon-express-original-wordmark", colored: false },
    { name: "devicon-css3-plain-wordmark" },
    { name: "devicon-nginx-original" },
    { name: "devicon-linux-plain", colored: false },
    { name: "devicon-mysql-plain" },
    { name: "devicon-cplusplus-plain" },
  ];

  return (
    <>
      <div style={styles.mainBG} className="text-center">
        <div style={styles.centerAll} className="text-white">
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
        <div
          className="arrowBox cursor-pointer"
          onClick={() => scroll.scrollMore(500)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div>
        <Element className="mx-4 lg:mx-64" name="About">
          <div className="mt-12">
            <div className="text-5xl text-center">About Me</div>
            <div className="text-center text-xl">
              <p>
                Hello. I'm full-stack developer Gangjun Lee, 15 years old from
                korea.
              </p>
              <p>
                I like learning new things and moving forward rather than
                staying fixed.
              </p>
              <p>I want to learn hard and help many people in the future.</p>
            </div>
          </div>
          <div className="mt-16">
            <div className="text-5xl text-center">Skills</div>
            <div className="grid grid-cols-4 gap-4 text-6xl">
              {IconList.map((item, index) => (
                <BuildIcon
                  icon={
                    item.colored === false ? item.name : `${item.name} colored`
                  }
                  key={index}
                />
              ))}
            </div>
          </div>
        </Element>
        <Element className="my-16 text-center" name="Contact">
          <div className="text-5xl">Contact</div>
          <div className="text-xl">
            <div>mail: me@gangjun.dev</div>
            <div>discord: gangjun06#8932</div>
            <div>
              github: <a href="https://github.com/gangjun06">gangjun06</a>
            </div>
            <div>
              patreon: <a href="https://patreon.com/gangjun">gangjun</a>
            </div>
          </div>
        </Element>
      </div>
    </>
  );
};

export default Home;
