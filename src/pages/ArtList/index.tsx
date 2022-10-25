import React, { useEffect, useState } from "react";
import { searchTerms, finalArticlesData, returnArticles } from "./index.logic";
import { randomString, linegraphColors } from "../Home/index.logic";
import moment from "moment";

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
      <div
        style={{
          overflowY: "scroll",
          margin: "5px 0px 0px 0px",
          padding: 0,
          width: "100%",
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

          {searchTerms.length == 0 ? (
            <>
              <div style={{ flex: 1 }}></div>
            </>
          ) : (
            /**map column headers */
            searchTerms.map((item: any, pos: number) => {
              return (
                <div
                  style={{
                    display: "flex",
                    flex: 1,
                    justifyContent: "center",
                    alignItems: "center",
                    border: "1px solid grey",
                    marginRight: 5,
                  }}
                  key={randomString(5)}
                >
                  <p
                    key={randomString(5)}
                    style={{ color: linegraphColors[pos] }}
                  >
                    {item}
                  </p>
                </div>
              );
            })
          )}
        </div>
      </div>

      <div
        style={{
          overflowY: "scroll",
          height: 580,
          margin: "5px 0px 0px 0px",
          padding: 0,
          width: "100%",
        }}
      >
        {finalArticlesData.map((itemA: any, posA: number) => {
          return (
            /* 👇️👇️👇️row👇️👇️👇️ */
            <div
              style={{
                display: "flex",
                width: "100%",
                height: 100,
                paddingTop: 2,
              }}
              key={randomString(5)}
            >
              {/* 👇️👇️👇️timestamp column👇️👇️👇️ */}
              <div
                key={randomString(5)}
                style={{
                  display: "flex",
                  flex: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid grey",
                  marginRight: 5,
                }}
              >
                <p key={randomString(5)}>{itemA?.date}</p>
              </div>

              {/* map through query items column to return articles for each query item */}
              {searchTerms.map((itemB: any, posB: number) => {
                return (
                  <div
                    key={randomString(5)}
                    style={{
                      display: "flex",
                      flex: 1,
                      border: "1px solid grey",
                      marginRight: 5,
                      overflowY: "scroll",
                    }}
                  >
                    <div>
                      <p
                        style={{
                          fontSize: 12,
                          maxWidth: 230,
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {itemA[itemB][0]?.title == null
                          ? "no articles"
                          : itemA[itemB][0]?.title}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ArtList;
