
import { IterfaceTarefa } from '../../types/InterfaceTarfefa';
import ItemLista from './Item/ItemLista';
import style from './Lista.module.scss';



function Lista({ tarefas }: { tarefas: IterfaceTarefa[] }) {
  return (
    <aside className={style.listaTarefas}>
      <h2 >Estudos do Dia :</h2>
      <ul>
        {
          tarefas.map((item, index) => (
            <ItemLista {...item} key={index} />
          ))
        }
      </ul>
    </aside>
  )
}

export default Lista;