import React, { useState, memo } from "react";
import { useDispatch } from "react-redux";
import { ITodo, delTodo } from "../../Redux/posts.slice";
import AddTodo from "../Add todo/AddTodo";
import style from "./OneTodo.module.css";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";

function OneTodo({ el }: { el: ITodo }) {
  const dispatch = useDispatch();
  const [edit, setEdit] = useState(true);
  const [check, setCheck] = useState(true);

  const deleteTodo = (id: number) => {
    dispatch(delTodo(id));
  };

  return (
    <li className={style.todoContainer}>
      {edit ? (
        <div className={style.todoElement}>
          <span
            className={`${style.todoText} ${check ? "" : style.textThrough}`}
          >
            {el.todo}
          </span>
          <div
            className={`${style.boxCheckbox} ${check ? "" : style.color}`}
            onClick={() => setCheck(() => !check)}
          />
          <AiFillEdit onClick={() => setEdit(() => !edit)} />
          <AiFillDelete
            className={style.todoDelete}
            onClick={() => deleteTodo(el.id)}
          />
        </div>
      ) : (
        <AddTodo el={el} setEdit={setEdit} />
      )}
    </li>
  );
}

export default OneTodo;
