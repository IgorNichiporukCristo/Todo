import { useSelector } from 'react-redux';
import AddTodo from '../Add todo/AddTodo';
import OneTodo from '../One todo/OneTodo';
import { RootState } from '../types/state';
import style from './Main.module.css';

export default function Main() {
  const array = useSelector((state: RootState) => state.postsSlice.todos);

  return (
    <div className={style.todoContainer}>
      <AddTodo />
      <ul  className={style.todoList}>
        {array.length ? (
          array.map((el) => <OneTodo key={el.id} el={el} />)
        ) : (
          <>
            <h1>No todos</h1>
          </>
        )}
      </ul>
    </div>
  );
}
