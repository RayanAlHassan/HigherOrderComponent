import React, { Component } from "react";

function withHoverEffect(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isHovered: false,
      };
    }

    handleMouseEnter = () => {
      this.setState({ isHovered: true });
    };

    handleMouseLeave = () => {
      this.setState({ isHovered: false });
    };

    render() {
      const backgroundColor = this.state.isHovered ? "red" : "transparent";

      return (

        <  // ...
        // give parameter as props for undefined variable in the original/wrapped component
        //   ...={...}
          style={backgroundColor}
        />

      );
    }
  };
}

export default withHoverEffect;




