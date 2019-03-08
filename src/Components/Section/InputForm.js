import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Input} from "reactstrap";
import "./Section.css";

export default class InputForm extends Component {
  render() {
    return (
      <div className="form">
        <InputGroup className="input-group">
          <InputGroupAddon addonType="prepend" className="icon-input">
            <i className="fas fa-book fa-lg" />
          </InputGroupAddon>
          <Input className="form-input" placeholder="Title" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend" className="icon-input">
            <i className="fas fa-user-edit fa-lg" />
          </InputGroupAddon>
          <Input className="form-input" placeholder="Author" />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend" className="icon-input">
            <i className="fas fa-paw" />
          </InputGroupAddon>
          <select>
          <option defaultValue="">Genre</option>
            <option value="Wuxia">Wuxia</option>
            <option value="Xianxia">Xianxia</option>
            <option value="Xuanhuan">Xuanhuan</option>
          </select>
          <InputGroupAddon addonType="prepend" className="icon-input">
            <i className="fas fa-book-open" />
          </InputGroupAddon>
          <Input className="form-input" placeholder="Chapters" />
        </InputGroup>
      </div>
    );
  }
}
