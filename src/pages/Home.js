import React from "react";

class Home extends React.Component {
  styles = {
    bg: {
      backgroundImage:
        "url('https://cdn.discordapp.com/attachments/704599857083449366/722677588484423721/luca-bravo-XJXWbfSo2f0-unsplash_1.jpg')",
      backgroundSize: "cover",
      height: "100vh",
    },
    centerAll: {
      position: "absolute",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
    },
  };

  render() {
    return (
      <div style={this.styles.bg}>
        <div style={this.styles.centerAll}>
          
        </div>
      </div>
    );
  }
}

export default Home;
