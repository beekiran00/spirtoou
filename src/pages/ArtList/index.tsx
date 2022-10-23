import React from "react";

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
            flex: 2.98,
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid grey",
            marginRight: 5,
          }}
        >
          <p>Timestamp</p>
        </div>

        {/* 👇️👇️👇️col 2 👇️👇️👇️ */}
        <div
          style={{
            display: "flex",
            flex: 0.98,
            border: "1px solid grey",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5,
          }}
        >
          <p>No of articles</p>
        </div>

        {/* 👇️👇️👇️col 3 👇️👇️👇️ */}
        <div
          style={{
            display: "flex",
            flex: 3.98,
            border: "1px solid grey",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5,
          }}
        >
          <p>Articles returned</p>
        </div>

        {/* 👇️👇️👇️col 4 👇️👇️👇️ */}
        <div
          style={{
            display: "flex",
            flex: 0.98,
            border: "1px solid grey",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5,
          }}
        >
          <p>Norm</p>
        </div>

        {/* 👇️👇️👇️col 5 👇️👇️👇️ */}
        <div
          style={{
            display: "flex",
            flex: 0.98,
            border: "1px solid grey",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Vol. Intensity</p>
        </div>
      </div>
      {/* 👉️👉️👉️ row  👉️👉️👉️*/}

      {/* 👉️👉️👉️ row  👉️👉️👉️*/}
      <div
        style={{
          display: "flex",
          width: "100%",
          // height: 50,
          paddingTop: 2,
        }}
      >
        {/* 👇️👇️👇️col 1👇️👇️👇️ */}
        <div
          style={{
            display: "flex",
            flex: 2.98,

            border: "1px solid grey",
            marginRight: 5,
          }}
        >
          <div style={{ flex: 0.2 }}>
            <p style={{ fontSize: 10, textAlign: "center" }}>2nd Oct, 2:00pm</p>
          </div>
          <div style={{ flex: 0.8 }}>
            <p style={{ fontSize: 12, padding: 0, margin: 0 }}>
              "elon musk" (twitter or whatsapp or facebook or instagram)
              sourcelang:english
            </p>
            <p style={{ fontSize: 12, padding: 0, margin: 0 }}>
              "elon musk" (twitter or whatsapp or facebook or instagram)
              sourcelang:english
            </p>
            <p style={{ fontSize: 12, padding: 0, margin: 0 }}>
              "elon musk" (twitter or whatsapp or facebook or instagram)
              sourcelang:english
            </p>
          </div>
        </div>

        {/* 👇️👇️👇️col 2 👇️👇️👇️ */}
        <div
          style={{
            display: "flex",
            flex: 0.98,
            border: "1px solid grey",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5,
          }}
        >
          <p>5</p>
        </div>

        {/* 👇️👇️👇️col 3 👇️👇️👇️ */}
        <div
          style={{
            display: "flex",
            flex: 3.98,
            border: "1px solid grey",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5,
          }}
        >
          <p>Articles returned</p>
        </div>

        {/* 👇️👇️👇️col 4 👇️👇️👇️ */}
        <div
          style={{
            display: "flex",
            flex: 0.98,
            border: "1px solid grey",
            justifyContent: "center",
            alignItems: "center",
            marginRight: 5,
          }}
        >
          <p>Norm</p>
        </div>

        {/* 👇️👇️👇️col 5 👇️👇️👇️ */}
        <div
          style={{
            display: "flex",
            flex: 0.98,
            border: "1px solid grey",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <p>Vol. Intensity</p>
        </div>
      </div>
      {/* 👉️👉️👉️ row  👉️👉️👉️*/}
    </div>
  );
}

export default ArtList;
