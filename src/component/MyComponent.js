import React, { Component } from "react";
// you have to import a component HOC here
import withHoverEffect from "./withHoverEffect";
class MyComponent extends Component {
  render() {
    const { handleMouseEnter, style } = this.props; // Destructure the param to pass them as props

    return (
      <div>
        <button onMouseOver={handleMouseEnter} style={{ background: style }}>
          on hover background
        </button>
      </div>
    );
  }
}

// adjust this export so the original componenent is a parameter for the HOC to pass her a props
export default withHoverEffect(MyComponent);
