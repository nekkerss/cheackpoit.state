import React from "react";
import "./App.css"
import Profile from "./Profile";

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      name: "azer",
      person: {
        name: "azer chaabane",
        bio: "hello eveyone",
        pic: "",
        profession: "etudien"
      },
      
      shows: false
    }
  }
  
  
  Action = () => this.setState({ shows: !this.state.shows })
  render() {
    
    return (
    <div>{this.state.shows && <Profile person={this.state.person} />} 
    
      <button onClick={this.Action}> click here</button>
      
      </div>
    )

  }
};
export default App;
