import React, { useState } from "react";
import db from "../../Auth/Firebase.config";
import "../Inputs/CreateQuery.css";

function CreateDeposit() {
  const [name, setName] = useState("");
  const [checking, setChecking] = useState(null);
  const [savings, setSavings] = useState(null);
  const [returno, setReturn] = useState(null);

  const submit = (e) => {
    e.preventDefault();
    db.collection("Banking Info").add({
      name: name,
      checking: checking,
      savings: savings,
      returno: returno,
    });

    setName("");
    setChecking(null);
    setSavings(null);
    setReturn(null);
  };

  return (
    <div>
      <form>
        <div>
          <h2>Deposit Form:</h2>
          <div>
            <label>Username</label>
            <input
              type="text"
              placeholder="username"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Checking</label>
            <input
              type="number"
              placeholder="checking"
              value={checking}
              onChange={(e) => setChecking(e.target.value)}
            />
          </div>
          <div>
            <label>Savings</label>
            <input
              type="number"
              className="description"
              placeholder="savings"
              maxLength={50}
              size={20}
              value={savings}
              onChange={(e) => setSavings(e.target.value)}
            />
          </div>
          <div>
            <label>Expected yeild</label>
            <input
              type="number"
              className="description"
              placeholder="expected yeild"
              maxLength={50}
              size={20}
              value={returno}
              onChange={(e) => setReturn(e.target.value)}
            />
          </div>
        </div>
        <button onClick={submit}>Submit Your Deposit</button>
      </form>
    </div>
  );
}

export default CreateDeposit;
