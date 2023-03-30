import React, { useState, useEffect } from "react";
import db from "../../Auth/Firebase.config";

function Projections() {
  const [inputValue, setInputValue] = useState("");
  const [data, setData] = useState([]);
  const [setDataTwo] = useState([]);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  useEffect(() => {
    const unsubscribe = db
      .collection("Banking Info")
      .where("name", "==", inputValue)
      .onSnapshot((querySnapshot) => {
        const documents = [];
        querySnapshot.forEach((doc) => {
          documents.push({
            id: doc.id,
            ...doc.data(),
          });
        });
        setData(documents);
      });
    return unsubscribe;
  }, [inputValue]);

  useEffect(() => {
    const docRef = db
      .collection("Banking Info")
      .where("name", "==", inputValue);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          const data = doc.data();
          setDataTwo(data);
        }
      })
      .catch((error) => {
        console.log("Error getting document", error);
      });
  }, []);

  return (
    <div>
      <h1>Who do you want projections for?: </h1>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <br />
      <br />
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            Current Balance for {item.name}: Checking: {item.checking}, Savings:{" "}
            {item.savings} at {item.return} yeild.
          </li>
        ))}
      </ul>
      <br />
      <br />
      <h2>
        {data.map(
          (documents) =>
            "Calculated Projections over 12 months @ " +
            documents.return * 100 +
            " % Return"
        )}
      </h2>
      <h3>
        Not important will finish later - W.I.P. math works, super frickin ugly
      </h3>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            One Month Checking gain:{" "}$
            {item.checking * item.return +
              "( " +
              (item.checking * item.return + item.checking) +
              " )"}{" "}
            Month 1 Savings gain:{" "}$
            {item.savings * item.return +
              "(" +
              (item.savings * item.return + item.savings) +
              ")"}
          </li>
          
        ))}
      </ul>
    </div>
  );
}

export default Projections;
