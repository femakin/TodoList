import React from 'react'

export default function InputForm(props) {
  return (
    <div>
       <form onSubmit={props.newItemSubmitHandler} className="todoInput">
        <input
          className="input"
          type="text"
          value={props.pendingItem}
          onChange={props.handleItemInput} //7. this fire everytime the user types something in to add an event handler onto the input.
          placeholder="Add an item"
        />
        <button type="submit" name="submit" value="submit">
          add
        </button>
      </form>
    </div>
  )
}
