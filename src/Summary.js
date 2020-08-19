import React from "react";
import SummaryOption from "./SummaryOption";
import SummaryTotal from "./SummaryTotal";

class Summary extends React.Component {
  render() {
    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <SummaryOption selected={this.props.selected} />
        <SummaryTotal selected={this.props.selected} />
      </section>
    );
  }
}

export default Summary;
