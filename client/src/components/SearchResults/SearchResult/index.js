import React, { Component } from "react";

import website from "../../../assets/imgs/seo.png";
import menu from "../../../assets/imgs/menu.png";
import directions from "../../../assets/imgs/explore.png";

class SearchResult extends Component {
  render() {
    return (
      <div class="result">
        <div>
          <a href="./menu.html">
            <h3>{this.props.name}</h3>
          </a>
          <div class="address">
            {this.props.addressStreet}
            <br />
            {this.props.addressCity}
          </div>
          <div class="restaurant-categories">{this.props.categories}</div>
        </div>
        <div class="links">
          <a href={this.props.website} target="_blank" rel="noopener noreferrer">
            <div>
              <img src={website} alt="Website Link" /> <span class="link-text">Website</span>
            </div>
          </a>
          <a href="./menu.html">
            <div>
              <img src={menu} alt="Menu Link" /> <span class="link-text">View Menu</span>
            </div>
          </a>
          <a
            href="https://www.google.com/maps/dir//81+Croix+St,+Negaunee,+MI+49866/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x4d51c28a7edf3a4d:0xdd1cf49cf6978e83?sa=X&ved=2ahUKEwjCjsv_jvPrAhWWLs0KHYuaBkcQwwUwAHoECAsQAg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div>
              <img src={directions} alt="Directions Link" /> <span class="link-text">Directions</span>
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default SearchResult;
