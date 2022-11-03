import { searchTerms, finalArticlesData, returnArticles } from "./index.logic";
import { randomString, linegraphColors } from "../Home/index.logic";

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
              flex: 0.5,
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
                    style={{
                      color: linegraphColors[pos],
                      fontSize: 12,
                      fontWeight: "bold",
                    }}
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
                paddingTop: 5,
                paddingBottom: 5,
              }}
              key={randomString(5)}
            >
              {/* 👇️👇️👇️timestamp column👇️👇️👇️ */}
              <div
                key={randomString(5)}
                style={{
                  display: "flex",
                  flex: 0.5,
                  justifyContent: "center",
                  alignItems: "center",
                  border: "1px solid grey",
                  marginRight: 5,
                }}
              >
                <p
                  style={{ fontSize: 14, fontWeight: "bold" }}
                  key={randomString(5)}
                >
                  {itemA?.date}
                </p>
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
                    <div
                      style={{
                        display: "inline-flex",
                        flexDirection: "column",
                        width: "100%",
                        paddingLeft: 5,
                        paddingRight: 5,
                      }}
                    >
                      {returnArticles(itemA[itemB])}
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
