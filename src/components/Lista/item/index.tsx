import React from "react";
import style from "./Item.module.scss"
import { ITarefas } from "../../../types/tarefa";

interface Props extends ITarefas{
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void
}

const Item: React.FC<Props> = ({ tarefa, tempo, selecionado, completado, id, selecionaTarefa}: Props) => {
    return(
        <li className={`${style.item} ${selecionado ? style.itemSelecionado : ''} ${completado ? style.itemCompletado : ''}`} 
            onClick={()=> !completado && selecionaTarefa(
                {
                    tarefa, 
                    tempo,
                    selecionado,
                    completado,
                    id
                }
            )}
        >
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido}aria-label="tarefa completada"></span>}
        </li>
    )
}


export default Item;