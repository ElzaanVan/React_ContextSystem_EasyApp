import React from "react";
import UserCreate from "./UserCreate";
import LanguageContext from "../context/LanguageContext";

class App extends React.Component {
  state = { language: "English" };

  onlanguageChange = (language) => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language :
          <div>
            <i
              className="gb eng flag"
              onClick={() => this.onlanguageChange("English")}
            />
            <i
              className="nl flag"
              onClick={() => this.onlanguageChange("Dutch")}
            />
          </div>
        </div>
        <LanguageContext.Provider value={this.state.language}>
          <UserCreate />
        </LanguageContext.Provider>
      </div>
    );
  }
}

export default App;
