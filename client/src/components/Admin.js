import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";

const Admin = () => {
  const history = useHistory();

  useEffect(() => {
    let pass = prompt("Enter password");
    if (pass !== "3000") history.push("/");
  });
  return (
    <div className="admin">
      <h1>asasas</h1>
    </div>
  );
};
