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
          <div className="mt-8">
            <div className="text-5xl text-center">About Me</div>
            <div className="text-center text-xl">
              Hello. I'm full-stack developer Gangjun Lee, 15 years old from
              korea.
              <br />
              I like learning new things and moving forward rather than staying
              fixed.
              <br />I want to learn hard and help many people in the future.
              <br />
            </div>
          </div>
          <div className="mt-8">
            <div className="text-5xl text-center">Skills</div>
            <div className="grid grid-cols-4 gap-4 text-6xl">
              <i className="devicon-react-original colored flex justify-center" />
              <i className="devicon-vuejs-plain colored flex justify-center" />
              <i className="devicon-express-original-wordmark flex justify-center" />
              <i className="devicon-css3-plain-wordmark colored flex justify-center" />
              <i className="devicon-nginx-original colored flex justify-center" />
              <i className="devicon-linux-plain flex justify-center" />
              <i className="devicon-mysql-plain colored flex justify-center" />
              <i className="devicon-cplusplus-plain colored flex justify-center" />
            </div>
          </div>
        </Element>
        <Element className="my-8 text-center" name="Contact">
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
