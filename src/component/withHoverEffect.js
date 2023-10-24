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
        <WrappedComponent
          handleMouseEnter={this.handleMouseEnter}
          style={backgroundColor}
        />
      );
    }
  };
}

export default withHoverEffect;
