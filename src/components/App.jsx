import React, { useState } from "react";
import { ToDoItem } from "./ToDoItem";

function App() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    setItems((prevItems) => {
      return [...prevItems, inputText];
    });
    setInputText("");
  }

  function deleteElem(index) {
    // このコンポーネント内で利用している useState の配列を編集する
    // この意味において、子コンポーネントでこの配列を渡すことは難しい。
    // というかこれは実際には context で取り扱っていく内容な気もする
    // とにかくここでindex以外のものというフィルターをかけて、新たにsetItemsしている。
    setItems(
      items.filter((item, filter_index) => {
        return filter_index !== index;
      })
    );
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={handleChange} type="text" value={inputText} />
        <button onClick={addItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        {/* atomic designの考え方が重要だなと思う。ループで回すときは末端の細いコンポーネントを作っておくほうが絶対楽 */}
        <ul>
          {/* レンダリングのループはここで回してあげる→この部分もmoleculeとかのサイズにコンポーネント化しておいても良い気がする */}
          {items.map((item, index) => {
            // このdivがクリックされたときに「Todo配列」をイジる必要があるので、それは呼び出し側で仕組みを作っておいたほうが良い
            // まずこのコンポーネント内で関数を定義してそれを子に渡してあげる
            // 子コンポーネントからはそれを利用するだけ
            return (
              <ToDoItem
                key={index}
                id={index}
                item={item}
                deleteElem={deleteElem}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default App;
