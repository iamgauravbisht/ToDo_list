import "./App.css";
import { useState } from "react";
import plus from "./assets/Plus.svg";
import del from "./assets/delete.svg";

function App() {
  const [textValue, setTextValue] = useState("");
  const [list, setList] = useState([{ text: "gaurav", id: 1 }]);
  // const List = [{ text: "Hello", id: 0 }];

  const createListHandler = (e) => {
    const idValue = new Date();
    if (textValue == "") return;
    if (e) {
      e.preventDefault();
    }
    setList((oldList) => {
      return [...oldList, { text: textValue, id: idValue }];
    });
    setTextValue("");
  };

  const deleteListHandler = (id) => {
    setList((oldList) => {
      return [...oldList.filter((el) => el.id !== id)];
    });
  };
  return (
    <div className="app">
      <h1>To Do List</h1>
      <form onSubmit={createListHandler}>
        <input
          type="text"
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
          }}
        />
        <img src={plus} alt="Plus" onClick={createListHandler} />
      </form>
      {list.map((item, i) => {
        return (
          <div key={i} className="list">
            <p>{item.text}</p>
            <div>
              <button>edit</button>
              <img
                src={del}
                alt="del"
                onClick={() => deleteListHandler(item.id)}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
