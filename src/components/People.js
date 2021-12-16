import { Component } from "react";

class People extends Component {
  constructor() {
    super();

    this.state = {
      peopleArr: [],
      userInput: ""
    };
  }

  fetchPeople = () => {
    fetch("https://ghibliapi.herokuapp.com/people")
      .then((res) => res.json())
      .then((data) => {
        this.setState({
          peopleArr: data,
        });
      });
  };

  componentDidMount = () => {
    this.fetchPeople();
  };

  handleUserInput = (e) => {
    this.setState({
      userInput: e.target.value,
    });
  };


  render() {
    return (
      <div className="people">
        <h1>Search for a Person</h1>
        <input
          type="text"
          value={this.state.userInput}
          onChange={this.handleUserInput}
        />
        <button>Submit</button>
      </div>
    );
  }
}

export default People;
