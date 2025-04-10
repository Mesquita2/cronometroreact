import React from "react";
import style from "../Lista.module.scss"

interface ItemProps {
    tarefa: string
    tempo: string
}

const Item: React.FC<ItemProps> = ({ tarefa, tempo}) => {
    return(
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}


export default Item;