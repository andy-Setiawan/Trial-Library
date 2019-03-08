import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
        <div className='header'>
            <div className='logo'><img src={require("./img/webnovel.png")} alt=""></img></div>
            <div className='user'><i className="fas fa-user fa-2x"></i></div>
        </div>
    )
  }
}
