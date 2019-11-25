import React, {Component} from 'react';

class App extends Component {
  state = {
        Students: [
          {name: "Student 1", age: "10"},
          {name: "Student 2", age: "20"},
          {name: "Student 3", age: "30"}
        ]
      }

      twoWayBinding =  (event) => {
        this.setState({
          Students: [
            {name: event.target.value, age: "10"},
            {name: "Student 2", age: "20"},
            {name: "Student 3", age: "30"}
          ]
        })
      }


  render() {
    return(
      <div>
        <p>I am {this.state.Students[0].name} and I am {this.state.Students[1].age} yrs old!</p>
        <input type="text" onChange={this.twoWayBinding.bind(this)}></input>
      </div>
    );
  }
}

export default App;
