import React from "react";
import axios from "axios";

export default function AddItem(props) {
  const [text, setText] = React.useState(null);

  function addNewItem() {
    axios
      .post(
        "https://todo-app-96ede-default-rtdb.europe-west1.firebasedatabase.app/todoList.json",
        {
          text: text,
          status: "todo",
        }
      )
      .then((res) => {
        props.onAdded();
        setText(null);
      })
      .catch((err) => {
        setText(null);
      });
  }

  return (
    <div className='flex flex-col '>
      <div className='w-1/2 bg-red-600 justify-center items-center p-8 self-center rounded-lg flex flex-col'>
        <p className='pb-8'>React Component</p>

        <div>
          <input
            className='bg-green-100 border-2 rounded-lg h-12'
            type='text'
            value={text || ""}
            onChange={(ev) => {
              setText(ev.target.value);
            }}
          ></input>
          <button
            className='bg-green-200 p-2 border-gray-400 rounded-lg h-12 ml-4'
            style={!text ? { backgroundColor: "gray", cursor: "default" } : {}}
            disabled={!text}
            onClick={() => {
              addNewItem();
            }}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
