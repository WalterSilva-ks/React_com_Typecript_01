
import style from '../Lista.module.scss';
import { IterfaceTarefa } from '../../../types/InterfaceTarfefa'


function ItemLista({ tarefa, tempo, selecionado, completado, id }: IterfaceTarefa) {
    return (
        <li className={style.item} >
            <h3>
                {tarefa}
            </h3>
            <span>
                {tempo}
            </span>
        </li>
    )
}

export default ItemLista