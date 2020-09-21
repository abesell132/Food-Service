import React, { Component } from "react";

import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";

class LocationSelect extends Component {
  render() {
    return (
      <FormControl variant="filled">
        <InputLabel id="demo-simple-select-filled-label">City</InputLabel>
        <Select labelId="demo-simple-select-filled-label" id="location-select">
          <MenuItem value={10}>Marquette</MenuItem>
          <MenuItem value={20}>Negaunee</MenuItem>
          <MenuItem value={30}>Ishpeming</MenuItem>
        </Select>
      </FormControl>
    );
  }
}

export default LocationSelect;
