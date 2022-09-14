import React from 'react'
import Botao from '../Botao/Botao'
import Relogio from './Relogio/Relogio'
import style from './Cronometro.module.scss'

function Cronometro() {
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha o card e inicie o cronomêtro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao texto="Começar" />
        </div>
    )
}

export default Cronometro