import React from "react";

export default function ControlButton({ name, className, onClick }) {
  return (
    <button className={className} onClick={onClick}>
      {name}
    </button>
  );
}
