import React from "react";
import { Form } from "react-bootstrap";
import { FaChevronDown } from "react-icons/fa";
import "./style.scss";

export default function customSelector(props) {
  return (
    <div className="select-container">
      <Form.Control
        as="select"
        className="select"
        onChange={e => props.getValue(props.id, e.target.value)}
      >
        <option>{props.default}</option>
        {props.options.map((coin, i) => (
          <option key={i}>{coin}</option>
        ))}
      </Form.Control>
      <div className="icon">
        <FaChevronDown className="arrow fas fa-xl" />
      </div>
    </div>
  );
}
