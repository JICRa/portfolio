import { Component } from "react";
import { withRouter } from "react-router-dom";

class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth", // or "instant"
      });
    }
  }

  render() {
    // Just render children normally
    return this.props.children || null;
  }
}

export default withRouter(ScrollToTop);
