import React, { useState } from 'react';
import { IterfaceTarefa } from '../../types/InterfaceTarfefa';
import Botao from '../Botao/Botao';
import Cronometro from '../Cronometro/Cronometro';
import Formulario from '../Formulario/Formulario';
import Lista from '../Lista/Lista';
import style from './App.module.scss';


function App() {
  const [tarefas, setTarefas] = useState<IterfaceTarefa[] | []>([]);

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Cronometro />
      <Lista tarefas={tarefas} />

    </div>
  );
}

export default App;
