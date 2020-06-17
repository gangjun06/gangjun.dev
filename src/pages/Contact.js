import React from "react";
import Title from "../components/Title";

class Home extends React.Component {
  render() {
    return (
      <div className="text-center">
        <Title title="Contact" text="Say to me, contact commission and etc" />
        <div className="text-lg">
          <a href="https://github.com/gangjun06">github: gangjun06</a>
          <div>email: me@gangjun.dev</div>
          <div>discord: gangjun06#8932</div>
          <a href="https://patreon.com/gangjun">Join My Patreon!</a>
        </div>
        <div className="my-4 text-xl">or Send content below</div>
        <form className="w-full mx-auto mt-8" style={{ width: "40vw" }}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Title
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                placeholder="Title"
                maxLength="40"
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email Address*
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                maxLength="40"
                placeholder="asdf@example.com"
              />
            </div>
            <div className="w-full md:w-1/3 px-3">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Discord
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                maxLength="40"
                placeholder="asdf#1234"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
              >
                Main Text*
              </label>
              <textarea
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                style={{ resize: "none" }}
                rows="7"
                maxLength="1000"
                placeholder="type maintext...."
              />
            </div>
          </div>
          <div className="flex flex-row-reverse w-full">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mb-4">
              Send!
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Home;
