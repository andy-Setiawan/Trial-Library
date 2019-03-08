import React, { Component } from "react";
import {
  InputGroup,
  InputGroupAddon,
  Input,
  FormGroup,
  Button
} from "reactstrap";
import "./Section.css";

export default class Form extends Component {
  render() {
    return (
      <div className="form">
        <span className='request-label'>WEBNOVEL REQUEST FORM</span>
        <InputGroup className="input-group">
          <InputGroupAddon addonType="prepend" className="icon-input">
            <i className="fas fa-book fa-lg" />
          </InputGroupAddon>
          <Input
            className="form-input"
            placeholder="Title"
            onChange={this.props.title}
            value={this.props.titlevalue}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend" className="icon-input">
            <i className="fas fa-user-edit fa-lg" />
          </InputGroupAddon>
          <Input
            className="form-input"
            placeholder="Author"
            onChange={this.props.author}
            value={this.props.authorvalue}
          />
        </InputGroup>
        <InputGroup>
          <InputGroupAddon addonType="prepend" className="icon-input">
            <i className="fas fa-paw" />
          </InputGroupAddon>
          <FormGroup>
            <Input
              type="select"
              className="form-input"
              onChange={this.props.genre}
              value={this.props.genrevalue}
            >
              <option defaultValue="">Genre</option>
              <option value="Wuxia">Wuxia</option>
              <option value="Xianxia">Xianxia</option>
              <option value="Xuanhuan">Xuanhuan</option>
            </Input>
          </FormGroup>
          <InputGroupAddon addonType="prepend" className="icon-input">
            <i className="fas fa-book-open" />
          </InputGroupAddon>
          <Input
            className="form-input"
            placeholder="Chapters"
            onChange={this.props.chapter}
            value={this.props.chaptervalue}
          />
          <Button onClick={this.props.add} color="info">
            <i className="fas fa-plus" />
          </Button>
        </InputGroup>
      </div>
    );
  }
}
