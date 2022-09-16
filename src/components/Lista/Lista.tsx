
import { IterfaceTarefa } from '../../types/InterfaceTarefa';
import ItemLista from './Item/ItemLista';
import style from './Lista.module.scss';

interface Props {
  tarefas: IterfaceTarefa[],
  selecionaTarefa: (tarefaSelecionada: IterfaceTarefa) => void
}


function Lista({ tarefas, selecionaTarefa }: Props) {
  return (
    <aside className={style.listaTarefas}>
      <h2 >Estudos do Dia :</h2>
      <ul>
        {
          tarefas.map((item) => (
            <ItemLista selecionaTarefa={selecionaTarefa} {...item} key={item.id} />
          ))
        }
      </ul>
    </aside>
  )
}

export default Lista;