import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import CategorySelect from "../_theme/CategorySelect";
import LocationSelect from "../_theme/LocationSelect";

import SearchResult from "./SearchResult";
import "./index.scss";

class SearchResults extends Component {
  render() {
    return (
      <div class="list">
        <div class="background-overlay"></div>
        <div class="options">
          <form id="search-options">
            <div class="custom-select" id="food-select">
              <CategorySelect />
            </div>
            <div id="in">in</div>
            <div class="custom-select">
              <LocationSelect />
            </div>
            <button>Update</button>
          </form>
          <div id="search-results">
            <SearchResult
              name={"Teal Lake Pizzeria"}
              addressStreet={"81 Croix St"}
              addressCity={"Negaunee, MI 49866"}
              categories={"Pizza, American, Dessert, Salad"}
              website={"https://www.teallakepizzeria.com/"}
            />
          </div>
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
})(withRouter(SearchResults));
