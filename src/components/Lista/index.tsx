import { ITarefas } from "../../types/tarefa";
import style from "./Lista.module.scss"
import Item from "./item";

interface Props {
    tarefas: ITarefas[];
    selecionaTarefa: (tarefaSelecionada: ITarefas) => void;
  }
  
  function Lista({ tarefas, selecionaTarefa }: Props) {
    return (
      <aside className={style.listaTarefas}>
        <h2>Estudos do dia</h2>
        <ul>
          {tarefas.map((item) => (
            <Item
              key={item.id}
              tarefa={item.tarefa}
              tempo={item.tempo}
              selecionado={item.selecionado}
              completado={item.completado}
              id={item.id}
              selecionaTarefa={selecionaTarefa}
            />
          ))}
        </ul>
      </aside>
    );
  }
  
  export default Lista;