import React, { Component } from 'react'
import './style.css';
import InputForm from './InputForm';
import List from './List';

//1. stateful component
export class App extends Component {
//2. constructor where our state is initialized.
constructor(props) {
  super(props)

  this.state = {
  //5. This is what we will update as the user inputs text into our form.
  pendingItem: "",
  list: []
  }
}
//3. render statement which returns the JSX that makes up the component
 
//6. adding the event handler to update pendingItem as the user types in the input.
handleItemInput = e => {
  this.setState({ 
    pendingItem: e.target.value
  });
}

//9. handler to update the state everytime the user clicks the submit button. 
newItemSubmitHandler = e => {
  e.preventDefault();
  this.setState({
    list: [
      {
        name: this.state.pendingItem,
      },
      ...this.state.list
    ],
    pendingItem: ""
  });
};


//10. handler to remove our list items if we don’t want them.


// handleRemove = index => {
//   const newState = this.state.list.filter(item => {
//     this.state.list.indexOf(item) !== index
//   });

//   this.setState({ 
//     list: newState
//   });
// };


render() {
    return (
      <div className="App">
        <h2>TodoList </h2>

<InputForm

className="input"
type="text"
handleItemInput={this.handleItemInput}
value={this.state.pendingItem}
newItemSubmitHandler={this.newItemSubmitHandler}

placeholder="Add an item"
/>


<List list={this.state.list} />
{/* handleRemove={this.handleRemove} */}


      </div>
    )
  }
}

export default App
