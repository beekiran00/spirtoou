import React, { useEffect, useState } from "react";

function ArtList() {
  return (
    <div
      style={{
        display: "flex",
        width: "100vw",
        height: "100%",
        border: "1px solid grey",
        flexDirection: "column",
      }}
    >
      {/* 👉️👉️👉️ row  👉️👉️👉️*/}
      <div
        style={{
          display: "flex",
          width: "100%",
          height: 50,
          paddingTop: 2,
        }}
      >
        {/* 👇️👇️👇️col 1👇️👇️👇️ */}
        <div
          style={{
            display: "flex",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid grey",
            marginRight: 5,
          }}
        >
          <p>Timestamp</p>
        </div>

        {/**map column headers */}
      </div>
    </div>
  );
}

export default ArtList;
