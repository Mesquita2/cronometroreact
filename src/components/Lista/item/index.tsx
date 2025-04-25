import React from "react";
import style from "../Lista.module.scss"
import { ITarefas } from "../../../types/tarefa";

interface ItemProps extends ITarefas{
    tarefa: string
    tempo: string
}

const Item: React.FC<ITarefas> = ({ tarefa, tempo, selecionado, completado, id}: ITarefas) => {
    console.log('item atual', { tarefa, tempo, selecionado, completado, id});
    return(
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}


export default Item;