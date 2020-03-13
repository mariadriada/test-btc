import React from "react";
import { Form } from "react-bootstrap";
import "./style.scss";

export default function customInput(props) {
  const onChange = e => {
    props.getValue(props.id, e.target.value);
  };

  return (
    <div
      className={
        props.disabled
          ? `input-container disabled ${props.bgcolor}`
          : `input-container ${props.bgcolor}`
      }
    >
      <div className="coin-text">$</div>
      <Form.Control
        type="number"
        placeholder={props.placeholder}
        className={`input ${props.bgcolor}`}
        onChange={e => onChange(e)}
        disabled={props.disabled}
        //value={"valueee"}
      />
    </div>
  );
}
