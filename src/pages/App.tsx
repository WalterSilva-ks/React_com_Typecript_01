import React, { useState } from 'react';
import { IterfaceTarefa } from '../types/InterfaceTarefa';
import Botao from '../components/Botao/Botao';
import Cronometro from '../components/Cronometro/Cronometro';
import Formulario from '../components/Formulario/Formulario';
import Lista from '../components/Lista/Lista';
import style from './App.module.scss';


function App() {
  const [tarefas, setTarefas] = useState<IterfaceTarefa[] | []>([]);
  const [selecionado, setSelecionado] = useState<IterfaceTarefa>();

  function selecionaTarefa(tarefaSelecionada: IterfaceTarefa) {
    setSelecionado(tarefaSelecionada)
    setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => ({
      ...tarefa,
      selecionado: tarefa.id === tarefaSelecionada.id ? true : false
    })))
  }

  function finalizarTarefa() {
    if (selecionado) {
      setSelecionado(undefined);

      setTarefas(tarefasAnteriores => tarefasAnteriores.map(tarefa => {
        if (tarefa.id === selecionado.id) {
          return {
            ...tarefa,
            selecionado: false,
            completado: true
          }
        }
        return tarefa;
      }))
    }
  }

  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas} />
      <Cronometro
        selecionado={selecionado}
        finalizarTarefa={finalizarTarefa}
      />
      <Lista
        tarefas={tarefas}
        selecionaTarefa={selecionaTarefa}
      />

    </div>
  );
}

export default App;
