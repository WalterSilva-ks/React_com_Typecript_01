import React, { Component } from 'react'
import Botao from '../Botao/Botao';
import style from './Formulario.module.scss';

class Formulario extends React.Component {
  render() {
    return (
      <form className={style.novaTarefa}>
        <div className={style.inputContainer}>
          <label htmlFor="tarefa">
            Adicione um novo estudo
          </label>
          <br />
          <input type="text"
            name='tarefa'
            id='tarefa'
            placeholder="O que você quer estudar?"
            required
          />
        </div>
        &nbsp;
        <div className={style.inputContainer}>
          <label>Tempo</label>
          <br />
          <input
            type="time"
            step="1"
            name="tempo"
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          />
        </div>
        <Botao></Botao>

      </form>
    )
  }
}

export default Formulario