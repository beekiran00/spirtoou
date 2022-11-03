import moment from "moment-timezone";

let searchTerms: any = [];
let uniqueDateTimes: string[] = [];
let finalArticlesData: any[] = [];

const processArticles = (data: any[]) => {
  searchTerms = [];
  uniqueDateTimes = [];
  finalArticlesData = [];

  data.map((item: any, pos: number) => {
    //gather searched keywords titles into array
    searchTerms.push(item?.queryInfo?.searchTerm);

    //gather unique datetimes from all the results into one array before sorting the datetimes
    let queryArticlesObj: any = item?.queryResult?.articles;

    for (let i = 0; i < queryArticlesObj.length; i++) {
      if (uniqueDateTimes.includes(queryArticlesObj[i].seendate)) {
        //do nothing
      } else {
        uniqueDateTimes.push(queryArticlesObj[i].seendate);
      }
    }
  });

  //sort datestimes in ascending order
  uniqueDateTimes.sort((a, b) => a.localeCompare(b));

  //filter all data from different search queries according to dates in our datetimearray
  uniqueDateTimes.map((itemA: any, posA: number) => {
    let newDataEntry: any = {
      date: moment(itemA).tz("Atlantic/St_Helena").format("D MMM LT"),
    };

    //loop through data from each query
    data.map((itemB: any, posB: number) => {
      let x: any = (itemB?.queryResult?.articles).filter(
        (itemC: any, posC: number) => {
          return itemC.seendate == itemA;
        }
      );

      newDataEntry[itemB?.queryInfo?.searchTerm] = x;
    });

    finalArticlesData.push(newDataEntry);
  });
};

const returnArticles = (obj: any) => {
  let articles: any = [];
  if (obj?.length == 0) {
    //do nothing
  } else {
    for (let count = 0; count < obj.length; count++) {
      articles.push(
        // <>
        <span
          style={{
            fontSize: 12,
            minWidth: 230,
            maxWidth: "100%",
            whiteSpace: "nowrap",
            overflow: "hidden",
            textOverflow: "ellipsis",
            lineHeight: 2,
          }}
        >
          <a href={obj[count].url} target="_blank">
            {obj[count].title}
          </a>
        </span>
        // </>
      );
    }
  }
  return articles;
};

export { processArticles, searchTerms, finalArticlesData, returnArticles };
