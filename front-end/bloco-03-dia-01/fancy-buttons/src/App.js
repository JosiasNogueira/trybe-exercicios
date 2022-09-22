import React from 'react';
import './App.css';

class App extends React.Component {
  constructor () {
    super()
    // A função abaixo vincula "manualmente" o `this` à nossa função
    this.handleClickOne = this.handleClickOne.bind(this) // Essa função esta ligada ao this.
    this.handleClickTwo = this.handleClickTwo.bind(this)
    this.handleClickThree = this.handleClickThree.bind(this)
    /* Agora esse log retorna o objeto `this`, já acessível para nossa função!
    Com isso, podemos acessar as `props`, estado do componente (ainda vamos ver como!)
    e tudo o mais daqui de dentro */
    this.state = {
      clickBtnOne: 0,
      clickBtnTwo: 0,
      clickBtnThree: 0,
    };
  }
  handleClickOne() {
    const { clickBtnOne } = this.state;
    this.setState((estadoAnterior, _props) => ({
      clickBtnOne: estadoAnterior.clickBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(clickBtnOne)}`);
    });
  }
  handleClickTwo() {
    const { clickBtnTwo } = this.state;
    this.setState((estadoAnterior, _props) => ({
      clickBtnTwo: estadoAnterior.clickBtnTwo + 1,
    }), () => {
      console.log(`Botão 2 ${ this.getButtonColor(clickBtnTwo) }`);
    });
  }
  handleClickThree() {
    const { clickBtnThree } = this.state;
    this.setState((estadoAnterior, _props) => ({
      clickBtnThree: estadoAnterior.clickBtnThree + 1,
    }), () => {
      console.log(`Botão 3 ${this.getButtonColor(clickBtnThree)}`);
    });
  }
  getButtonColor(num) {
    return num % 2 === 0 ? 'green' : 'white';
  }
  render() {
    const {clickBtnOne, clickBtnTwo, clickBtnThree} = this.state
    return (
    <div className="App">
     <button type='button' onClick={this.handleClickOne} style={ { backgroundColor: this.getButtonColor(clickBtnOne) } }> {`Clique botão 1:${clickBtnOne}`}</button>
     <button type='button'  onClick={this.handleClickTwo} style={ { backgroundColor: this.getButtonColor(clickBtnTwo) } }>{`Clique botçao 2:${clickBtnTwo}`}</button>
     <button type='button'  onClick={this.handleClickThree} style={ { backgroundColor: this.getButtonColor(clickBtnThree) } }>{`Clique botão 3:${clickBtnThree}`}</button>
    </div>
  );
}
}

export default App;
