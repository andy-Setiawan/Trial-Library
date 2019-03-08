import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Input } from "reactstrap";

export default class Search extends Component {
  render() {
    return (
      <InputGroup className="input-search">
        <InputGroupAddon addonType="prepend" className="icon-input">
          <i className="fas fa-search fa-lg" />
        </InputGroupAddon>
        <Input onChange={this.props.search} value={this.props.searchvalue} type="search" className="input" placeholder="Search By Title" />
      </InputGroup>
    );
  }
}
