import React, { Component } from "react";
import "./App.css";
import Header from "./Components/Header/Header";
import Section from "./Components/Section/Section";
import Footer from "./Components/Footer/Footer";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      webnovel: [],
      searchList: [],
      indexInput: "",
      titleInput: "",
      authorInput: "",
      genreInput: "",
      chapterInput: "",
      searchInput: ""
    };

    this.onChangeTitle.bind(this);
    this.onChangeAuthor.bind(this);
    this.onChangeGenre.bind(this);
    this.onChangeChapter.bind(this);
    this.onChangeSearch.bind(this);
    this.onAdd.bind(this);
    this.onDel.bind(this);
    this.onEdit.bind(this);
  }

  onChangeTitle = title => {
    this.setState({
      titleInput: title.target.value
    });
  };

  onChangeAuthor = author => {
    this.setState({
      authorInput: author.target.value
    });
  };

  onChangeGenre = genre => {
    this.setState({
      genreInput: genre.target.value
    });
  };

  onChangeChapter = chapter => {
    this.setState({
      chapterInput: chapter.target.value
    });
  };

  onChangeSearch = search => {
    let webtitle = this.state.webnovel;
    let filterInput = this.state.searchInput;
    const filteredNovel = webtitle.filter(word =>
      word.title.includes(filterInput)
    );
    this.setState({
      searchList: filteredNovel,
      searchInput: search.target.value
    });
  };

  onAdd = add => {
    let weblist = this.state.webnovel;
    let webindex = this.state.indexInput;
    if (this.state.indexInput !== "") {
      weblist[webindex].title = this.state.titleInput;
      weblist[webindex].author = this.state.authorInput;
      weblist[webindex].genre = this.state.genreInput;
      weblist[webindex].chapter = this.state.chapterInput;
      this.setState({
        indexInput: "",
        titleInput: "",
        authorInput: "",
        genreInput: "",
        chapterInput: "",
        webnovel: weblist
      });
    } else {
      this.setState({
        indexInput: "",
        titleInput: "",
        authorInput: "",
        genreInput: "",
        chapterInput: "",
        webnovel: [
          ...this.state.webnovel,
          {
            title: this.state.titleInput,
            author: this.state.authorInput,
            genre: this.state.genreInput,
            chapter: this.state.chapterInput
          }
        ]
      });
    }
  };

  onDel = del => {
    let delweblist = this.state.webnovel;
    delweblist.splice(del, 1);
    this.setState({
      indexInput: "",
      titleInput: "",
      authorInput: "",
      genreInput: "",
      chapterInput: "",
      webnovel: delweblist,
    });
    };

  onEdit = edit => {
    let weblist = this.state.webnovel;
    let titleIndex = weblist[edit].title;
    let authorIndex = weblist[edit].author;
    let genreIndex = weblist[edit].genre;
    let chapterIndex = weblist[edit].chapter;

    this.setState({
      indexInput: edit,
      titleInput: titleIndex,
      authorInput: authorIndex,
      genreInput: genreIndex,
      chapterInput: chapterIndex
    });
  };

  componentDidUpdate(){
    localStorage.setItem("webnovel", JSON.stringify(this.state.webnovel));
  }


  render() {
    return (
      <div className="App">
        <Header />
        <Section
          title={this.state.titleInput}
          author={this.state.authorInput}
          genre={this.state.genreInput}
          chapter={this.state.chapterInput}
          search={this.state.searchInput}
          titleChange={this.onChangeTitle}
          authorChange={this.onChangeAuthor}
          genreChange={this.onChangeGenre}
          chapterChange={this.onChangeChapter}
          searchChange={this.onChangeSearch}
          add={this.onAdd}
          del={this.onDel}
          edit={this.onEdit}
          webnovel={this.state.webnovel}
          searchList={this.state.searchList}
        />
        <Footer />
      </div>
    );
  }
}

export default App;
