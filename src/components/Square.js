import React from "react";

export default function Square({ value, onClick }) {
  const style = value ? `Squares ${value}` : "squares";

  return (
    <button className={style} onClick={onClick}>
      {value}
    </button>
  );
}
