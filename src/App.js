import React, { Component } from 'react'
import Sidebar from './Sidebar';
import Deshboard from './Deshboard';
import Footer from './Footer';
import History from './History'

export default class App extends Component {
  render() {
    return (
      <div>
        <Sidebar/>
        <Deshboard/>
        <Footer/>
      </div>
    )
  }
}
