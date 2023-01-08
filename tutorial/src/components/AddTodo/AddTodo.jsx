import "./AddTodo.css";
import React from "react";
import axios from "axios";

function AddTodo(props) {
  const [title, setTitle] = React.useState("");
  const [content, setContent] = React.useState("");

  const titleInputRef = React.useRef(null);

  const titleChangeHandler = (e) => {
    setTitle(e.target.value);
  };
  const descChangeHandler = (e) => {
    setContent(e.target.value);
  };



  React.useEffect(() => {
    titleInputRef.current.focus()
  }, [])



  const submitHandler = () => {
    const new_todo = {
      title: title,
      content: content,
    };

    axios
      .post("http://127.0.0.1:8000/api/todo/todo-list/", new_todo)
      .then((response) => {
        props.addTodoHandler(response.data);
        setTitle("");
        setContent("");
      })
      .catch((error) => {
        alert("Error has occured");
      });

    props.addTodoHandler(new_todo);
    setTitle("");
    setContent("");
  };

  const pressHandler = (e) => {
    if (e.key === "Enter") {
      if (title && content){
        submitHandler();
        titleInputRef.current.focus()
      }
      else alert("Cannot be empty");
    }
  };

  return (
    <div className="add-todo">
      <input
        value={title}
        onChange={titleChangeHandler}
        className="title-input"
        type="text"
        placeholder="Header"
        onKeyDown={pressHandler}
        ref={titleInputRef}
      />
      <input
        value={content}
        onChange={descChangeHandler}
        className="desc-input"
        type="text"
        placeholder="Content"
        onKeyDown={pressHandler}
      />
      <button onClick={submitHandler}>Add</button>
    </div>
  );
}

export default React.memo(AddTodo);
