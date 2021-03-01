import React from "react";
import LanguageContext from "../context/LanguageContext";

class Button extends React.Component{

  render(){

    return (
      <div>
        <button className="ui blue basic button">
          <LanguageContext.Consumer>
            {(value) => value === "English" ? "Submit" : "Voorleggen" }
          </LanguageContext.Consumer>
        </button>
      </div>
    )
  }
}

export default Button;