import { Component, h } from "preact";

// deno-lint-ignore ban-types
class Scroll extends Component<{}, {scrolled: boolean}> {
  constructor() {
    super();
    this.state = {
      scrolled: false,
    };
  }

  componentDidMount() {
    // deno-lint-ignore no-window-prefix
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    // deno-lint-ignore no-window-prefix
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    if (window.scrollY > 100) {
      this.setState({ scrolled: true });
    } else {
      this.setState({ scrolled: false });
    }
  };

  render() {
    const { scrolled } = this.state;
    return (
      <>
        {scrolled ? "scrolled" : ""}
      </>
    );
  }
}

export default Scroll;
