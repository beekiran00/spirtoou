import React, { useEffect, useState } from "react";
const consola = require("consola");
const qs = require("qs");

const baseUrl = "https://api.gdeltproject.org/api/v2/doc/doc?format=html&";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  const updateUrl = (url: any) => {
    setSearchTerm(url.target.value);
  };

  const generateData = () => {
    const endpoint =
      baseUrl +
      qs.stringify({
        startdatetime: 20221001000000,
        enddatetime: 20221007235959,
        query: searchTerm,
        mode: "timelinevolinfo",
        maxrecords: 75,
        format: "json",
        sort: "hybridrel",
      });

    window.open(endpoint);

    fetch(endpoint, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      // body: JSON.stringify({ username: username, password: password })
    })
      .then((res) => res.json())
      .then(
        (res) => {
          consola.success(res);
        },
        (err) => {
          console.error("err: ", err);
        }
      );
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <input
          placeholder="Enter search query"
          style={{
            display: "flex",
            width: "80%",
            backgroundColor: "transparent",
            paddingLeft: 10,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 10,
            outline: "none",
          }}
          onChange={updateUrl}
        />

        <button
          style={{
            display: "flex",
            border: "1px solid dodgerblue",
            backgroundColor: "white",
            color: "dodgerblue",
            cursor: "pointer",
            marginTop: 10,
            borderRadius: 10,
            outline: "none",
            paddingTop: 10,
            paddingBottom: 10,
            width: "20%",
            justifyContent: "center",
          }}
          onClick={generateData}
        >
          Generate Data
        </button>
      </div>
    </>
  );
}

export default Home;
