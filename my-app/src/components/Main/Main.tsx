import { useSelector } from "react-redux";
import AddTodo from "../Todo/Add todo/AddTodo";
import OneTodo from "../Todo/One todo/OneTodo";
import { RootState } from "../Redux/types/type";
import style from "./Main.module.css";
import Weather from "../Weather/Weather";

export default function Main() {
  const array = useSelector((state: RootState) => state.postsSlice.todos);

  return (
    <>
      <div>
        <Weather />
      </div>
      <div className={style.todoContainer}>
        <AddTodo />
        <ul className={style.todoList}>
          {array.length ? (
            array.map((el) => <OneTodo key={el.id} el={el} />)
          ) : (
            <>
              <span>нет не законченных дел</span>
            </>
          )}
        </ul>
      </div>
    </>
  );
}
