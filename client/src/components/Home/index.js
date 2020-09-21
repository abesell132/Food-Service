import React, { Component } from "react";
import fastFood from "../../assets/imgs/fast-food.png";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

import CategorySelect from "../_theme/CategorySelect";
import LocationSelect from "../_theme/LocationSelect";

import "./Home.scss";

class Home extends Component {
  constructor() {
    super();
    this.handleButtonClick = this.handleButtonClick.bind(this);
  }
  handleButtonClick(e) {
    e.preventDefault();
    console.log("Hello World");
    this.props.history.push("/searchResults");
  }
  render() {
    return (
      <div class="home">
        <div class="background-overlay"></div>
        <div class="get-started">
          <img src={fastFood} alt="Fast Food Decoration" />
          <h4>I'm currently in...</h4>
          <LocationSelect />
          <h4>...and in the mood for..</h4>
          <CategorySelect />
          <button onClick={this.handleButtonClick}>Show Me My Options</button>
        </div>
      </div>
    );
  }
}

// Dump Redux Store Into {this.props} Object
const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, {
  //    Redux Action Declations Go Here
})(withRouter(Home));
