import React, { Component } from "react";
import { Table, Button } from "reactstrap";

export default class List extends Component {
  render() {
    let weblist = this.props.webnovel;
    let searchlist = this.props.searchlist;
    let searchvalue = this.props.searchvalue;
    if (searchvalue === "") {
      return (
        <Table striped>
          <tbody>
            {weblist.map((weblist, i) => {
              return (
                <tr key={i} className="list">
                  <td className="list-novel">
                    {" "}
                    <span className="list-title">{weblist.title}</span>
                    <br />
                    <span className="list-author">
                      <label>Author :</label> {weblist.author}
                    </span>
                    <br />
                    <i className="fas fa-paw" />
                    <span className="list-genre">{weblist.genre}</span>
                    <i className="fas fa-book-open" />
                    <span className="list-chapter">{weblist.chapter}</span>
                  </td>
                  <td className="list-action">
                    <Button color="secondary" onClick={() => this.props.edit(i)}>
                      <i className="fas fa-edit" />
                    </Button>
                    <p />
                    <Button color="danger" onClick={() => this.props.del(i)}>
                      <i className="fas fa-trash-alt" />
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      );
    } else {
      return (
        <Table striped>
          <tbody>
            {searchlist.map((weblist, i) => {
              return (
                <tr key={i} className="list">
                  <td className="list-novel">
                    {" "}
                    <span className="list-title">{weblist.title}</span>
                    <br />
                    <span className="list-author">
                      <label>Author :</label> {weblist.author}
                    </span>
                    <br />
                    <i className="fas fa-paw" />
                    <span className="list-genre">{weblist.genre}</span>
                    <i className="fas fa-book-open" />
                    <span className="list-chapter">{weblist.chapter}</span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      );
    }

  
  }
}
