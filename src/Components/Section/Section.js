import React, { Component } from "react";
import Form from "./Form";
import List from "./List";
import Search from "./Search";

export default class Section extends Component {
  render() {
    return (
      <div className="section-box">
        <Search
          searchvalue={this.props.search}
          search={this.props.searchChange}
        />
        <Form
          titlevalue={this.props.title}
          authorvalue={this.props.author}
          genrevalue={this.props.genre}
          chaptervalue={this.props.chapter}
          title={this.props.titleChange}
          author={this.props.authorChange}
          genre={this.props.genreChange}
          chapter={this.props.chapterChange}
          add={this.props.add}
        />
        <List
          webnovel={this.props.webnovel}
          del={this.props.del}
          edit={this.props.edit}
          searchlist={this.props.searchList}
          searchvalue={this.props.search}
        />
      </div>
    );
  }
}
