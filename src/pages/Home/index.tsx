import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import moment from "moment";
const consola = require("consola");
const qs = require("qs");

const baseUrl = "https://api.gdeltproject.org/api/v2/doc/doc?format=html&";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState();

  const updateUrl = (url: any) => {
    setSearchTerm(url.target.value);
  };

  const generateData = () => {
    if (searchTerm.trim() == "") {
      alert("search cannot be empty");
      return;
    }

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

    // window.open(endpoint);

    fetch(endpoint, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
      mode: "cors",
      // body: JSON.stringify({ username: username, password: password })
    })
      .then((res) => res.json())
      .then(
        (res) => {
          var temp = res?.timeline[0]?.data;
          var filtered = temp.map((idx: any) => {
            return {
              name: moment(idx.date).format("D MMM LT"),
              value: idx.value,
            };
          });
          return filtered;
        },
        (err) => {
          consola.error(err);
        }
      )
      .then((data) => {
        setData(data);
        console.log("final: ", data);
      });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100%",
          justifyContent: "center",

          flexDirection: "column",
        }}
      >
        <input
          placeholder="Enter search query"
          style={{
            display: "flex",
            width: "50%",
            backgroundColor: "transparent",
            paddingLeft: 10,
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 10,
            outline: "none",
            alignSelf: "center",
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
            marginBottom: 10,
            borderRadius: 10,
            outline: "none",
            paddingTop: 10,
            paddingBottom: 10,
            width: "20%",
            justifyContent: "center",
            alignSelf: "center",
          }}
          onClick={generateData}
        >
          Generate Data
        </button>

        <ResponsiveContainer width="100%" height="50%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 4 }}
            />
            <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default Home;
