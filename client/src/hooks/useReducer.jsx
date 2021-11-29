import React, { useReducer } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_USER":
      state.users.push(action.newUser);
      return state;
    case "CHANGE_TIME":
      return { ...state, time: action.newTime };
    default:
      return state;
  }
};

export default function UseReducer() {
  const [state, dispatch] = useReducer(reducer, {
    users: ["Logan", "Laurie", "Simon"],
    time: 60,
  });

  return (
    <div>
      <form>
        <label htmlFor="set-time">{state.time}s</label><br></br>
        <input type="text" id="set-time" placeholder="Time Limit"></input>
        <input type="submit" value="Change Time"></input>
      </form>
      <form>
        <input type="text" id="add-user" placeholder="Add New User"></input>
        <input type="submit" value="Add User"></input>
      </form>
      <ul>Users</ul>
      {state.users.map((user, idx) => {
        return <li key={idx}>{user}</li>;
      })}
    </div>
  );
}
