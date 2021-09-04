import React, { useState } from "react";

const PersonForm = (props) => {
  return (
    <div>
      <h3>Add new person</h3>
      <form onSubmit={props.addEntry}>
        <div>
          Name:{" "}
          <input value={props.newName} onChange={props.handleNameChange} />
        </div>
        <div>
          Number:{" "}
          <input value={props.newPhone} onChange={props.handlePhoneChange} />
        </div>
        <div>
          <button type="submit">Add</button>
        </div>
      </form>
    </div>
  );
};

export default PersonForm;
