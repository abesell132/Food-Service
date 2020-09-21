import React, { Component } from "react";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class CategorySelect extends Component {
  render() {
    return (
      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">Cuisine</InputLabel>
        <Select labelId="demo-simple-select-filled-label" id="food-type-select">
          <MenuItem aria-label="None" value="" />
          <MenuItem value="1" id="pick-for-me">
            Random
          </MenuItem>
          <MenuItem value="2">Asian</MenuItem>
          <MenuItem value="3">Burgers</MenuItem>
          <MenuItem value="4">Dessert</MenuItem>
          <MenuItem value="5">Mexican</MenuItem>
          <MenuItem value="6">Salad</MenuItem>
          <MenuItem value="7">Seafood</MenuItem>
          <MenuItem value="8">Soup</MenuItem>
          <MenuItem value="9">Pasta</MenuItem>
          <MenuItem value="10">Pizza</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default CategorySelect;
