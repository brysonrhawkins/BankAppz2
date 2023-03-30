import React, { useState } from "react";
import db from "../../Auth/Firebase.config";

function DisplayAll() {
  const [data, setData] = useState([]);

  db.collection("Banking Info").onSnapshot(function (querySnapshot) {
    const data = [];
    querySnapshot.forEach((doc) => {
      data.push({
        name: doc.data().name,
        checking: doc.data().checking,
        savings: doc.data().savings,
      });
    });
    setData(data);
  });

  return (
    <div className="display-section">
      <h1 className="display-section-text">Display Section</h1>
      <h6 className="display-section-text">
        displays all current data entries existing in the DB
      </h6>
      <ul>
        <li>{data.map(
          (data) =>
            "Name: " +
            data.name +
            "| Checking: " +
            data.checking +
            "| Savings: " +
            data.savings
        )}</li>
        <li
        key={data.id}
        name={data.name}
        checking={data.checking}
        savings={data.savings}/>
      
      </ul>
    </div>
  );
}

export default DisplayAll;
