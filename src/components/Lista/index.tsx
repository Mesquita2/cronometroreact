import { ITarefas } from "../../types/tarefa";
import style from "./Lista.module.scss"
import Item from "./item";


function Lista({tarefas}:{tarefas: ITarefas[] }){
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2> 
            <ul>
                {tarefas.map((item, index) => (
                    <Item
                        key={index}
                        tarefa={item.tarefa}
                        tempo={item.tempo}
                        selecionado={item.selecionado}
                        completado={item.completado}
                        id={item.id}
                        // ou pode ser usado{...item}
                    />
                ))}
            </ul>


        </aside>
    )
}

export default Lista;