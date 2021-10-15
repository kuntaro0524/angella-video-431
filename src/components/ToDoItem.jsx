import React from "react";

export const ToDoItem = (props) => {
  // 子のコンポーネントからは変数や関数を受け取っているだけ。
  const { item, id, deleteElem } = props;
  // console.log(item, id);

  // 注意すべきなのは関数の定義。単純に onClick={deleteElem} としてしまうと、レンダリングのときにすぐに実行されてしまう
  // ここはアロー関数として設定してあげると「クリックしたときだけ」表示されることになる。
  // ニュアンスはよくわからんけど慣れていくしか無いね
  return (
    <>
      <li onClick={() => deleteElem(id)}>{item}</li>
    </>
  );
};
