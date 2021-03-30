import React from "react";

const Form = ({ setInputText }) => {
  const inputTextHandler = (e) => {
    console.log(e.target.value);
    serInputText(e.target.value);
  };
  return (
    <form>
      <input onChange={inputTextHandler} type="text" className="todo-input" />
      <button className="todo-button" type="submit">
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" classNameName="filter-todo">
          <option value="all">All</option>
          <option value="completed">完了</option>
          <option value="uncompleted">未完了</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
