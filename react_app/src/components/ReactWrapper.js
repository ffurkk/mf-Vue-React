import React from "react";
import ReactDOM from "react-dom";
import AddItem from "./AddItem";

export default (el) => {
  ReactDOM.render(
    <AddItem
      onAdded={() => {
        el.__vueParentComponent.ctx.onAdded();
      }}
    />,
    el
  );
};
