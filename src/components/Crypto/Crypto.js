import React from "react";
import "./style.scss";

export default function Crypto({ isCrypto }) {
  return (
    <div className="crypto">
      <div className={isCrypto === "1" ? `circle green` : `circle red`} />
      {isCrypto === "1" ? (
        <span className="text-green">SI</span>
      ) : (
        <span className="text-red">NO</span>
      )}
    </div>
  );
}
