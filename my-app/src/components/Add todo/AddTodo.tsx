import React, { Dispatch, SetStateAction, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ITodo, addTodo, editTodo } from '../Redux/posts.slice';
import style from './AddTodo.module.css';

type Input = {
  todo: string;
};
type AddProps = {
  el?: ITodo;
  setEdit?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
};

export default function AddTodo({ el, setEdit }: AddProps) {
  const { register, handleSubmit, reset } = useForm<Input>({
    defaultValues: { todo: el?.todo || '' },
  });

  const dispatch = useDispatch();

  const onSubmit: SubmitHandler<Input> = (data) => {
    if (setEdit) {
      el && dispatch(editTodo({ todo: data.todo, id: el.id }));
      setEdit(true);
    } else {
      dispatch(
        addTodo({ todo: data.todo, id: Math.floor(Math.random() * 1000) })
      );
    }
    reset();
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input className={style.form} placeholder='Введите заметку' type="text" {...register('todo')} required />
        <button className={style.button} type="submit">Добавить</button>
      </form>
    </div>
  );
}
