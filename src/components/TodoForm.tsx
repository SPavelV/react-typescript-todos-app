import React, { useRef } from "react";

interface TodoFromProps {
  onAdd(title: string): void;
}

export const TodoForm: React.FC<TodoFromProps> = (props) => {
  const ref = useRef<HTMLInputElement>(null);

  const keyPressHandler = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      props.onAdd(ref.current!.value);
      ref.current!.value = "";
    }
  };

  return (
    <div className="input-field mt2">
      <input
        type="text"
        name="title"
        id="title"
        placeholder="Введите название дела"
        onKeyPress={keyPressHandler}
        ref={ref}
      />
      <label htmlFor="title" className="active">
        Введите название дела
      </label>
    </div>
  );
};
