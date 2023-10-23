
import React, { Component } from "react";
// you have to import a component HOC here 

class MyComponent extends Component {
  render() {
    const { ..., ... } = this. ; // Destructure the props

    return (
      <div>
        <button onMouseOver={...} style={{ background: ... }}>
          on hover background
        </button>
      </div>
    );
  }
}

// adjust this export so the original componenent is a parameter for the HOC to pass her a props
export default MyComponent;














