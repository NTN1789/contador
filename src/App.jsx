
import React, { Component } from "react";
import styled from "styled-components";

const OutterDiv = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Share Tech Mono', monospace;
  background: linear-gradient(
    45deg,
    #FFFFFF,
    #8b878b
)
`

const ContainerTimer = styled.div`
  align-items: center;
  background: #F4A460;
  width: 20%;
  padding: 2rem;
  border-radius: 20px;
  text-align: center;
  h1 {
    font-size: 3rem;
  }
`

const ContainerBotoes = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
  width: 100%;
`


const Button = styled.button`
  padding: 2rem;
  background-color: tomato;
  color: white;
  transition: .5s;
  border-radius: 20px;
  border: none;
  font-size: 1.3rem;
  &:hover {
    background-color: red;
    opacity: 0.7;
  }
  &:active {
    background-color: red;
    opacity: 0.9;
  }
`


export default class App extends Component {


  state = {
    numero: 0,
    contador: 0
  };

  incrementa = () => {
    if (this.state.numero < 10) {
      this.setState({ numero: this.state.numero + 1 })
    }
    else
      alert("10 é o valor máximo")
  }

  decrementa = () => {
    if (this.state.numero > 0) {
      this.setState({ numero: this.state.numero - 1 })
    }
    else
      alert("0 é o valor mínimo")
  }

  comeca = () => {
    setInterval(() => {
      this.setState({ contador: this.state.contador + 1 })
    }, 1000)
  }


  Contador = () => {
    const Parar = setInterval(() => {
      this.setState({
        contador: this.state.contador + 1
      })
    }, 1000)

    this.Parar = () => {
      clearInterval(Parar)
    }
  }


  render() {
    return (
      <OutterDiv>
        <ContainerTimer>
          <h1>Contador: {this.state.numero}</h1>
          <h2>Tempo: {this.state.contador}</h2>
          <ContainerBotoes>
            <Button onClick={this.incrementa}>+</Button>
            <Button onClick={this.decrementa}>-</Button>
            <Button onClick={this.Contador}>Começa</Button>
            <Button onClick={this.Parar}>Para</Button>
          </ContainerBotoes>
        </ContainerTimer>
      </OutterDiv>
    )
  }

}
