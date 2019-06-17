import React from 'react';

import Header from './components/header/'
import Main from './components/main/'
import Footer from './components/footer/'

export default class App extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Main />
       {// <Footer />
       }
      </div>
    );
  }
}