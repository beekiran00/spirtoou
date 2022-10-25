import consola from "consola";
import moment from "moment-timezone";

let searchTerms: any = [];
let uniqueDateTimes: string[] = [];
let finalArticlesData: any[] = [];

const processArticles = (data: any[]) => {
  consola.success(data);

  searchTerms = [];
  uniqueDateTimes = [];
  finalArticlesData = [];

  data.map((item: any, pos: number) => {
    //gather searched keywords titles into array
    searchTerms.push(item?.queryInfo?.searchTerm);

    //gather unique datetimes from all the results into one array before sorting the datetimes
    // consola.info(item?.queryResult?.articles);
    let queryArticlesObj: any = item?.queryResult?.articles;
    // consola.warn("queryArilcObj: ", queryArticlesObj);

    for (let i = 0; i < queryArticlesObj.length; i++) {
      if (uniqueDateTimes.includes(queryArticlesObj[i].seendate)) {
        //do nothing
      } else {
        uniqueDateTimes.push(queryArticlesObj[i].seendate);
      }
    }
  });

  // for (let count = 0; count < uniqueDateTimes.length; count++) {
  //   consola.warn("unique date: ", uniqueDateTimes[count]);
  //   let x: any = uniqueDateTimes[count];
  //   consola.warn(
  //     "converted date: ",
  //     moment(x).tz("Atlantic/St_Helena").format("D MMM LT")
  //   );
  // }

  //sort datestimes in ascending order
  uniqueDateTimes.sort((a, b) => a.localeCompare(b));
  // consola.info("uniqueDateTimes", uniqueDateTimes);

  //filter all data from different search queries according to dates in our datetimearray
  uniqueDateTimes.map((itemA: any, posA: number) => {
    // consola.info("itemA: ", itemA);
    // consola.log("moment converted: ", moment(itemA).format("D MMM LT"));
    // let newDataEntry: any = { date: moment(itemA).format("D MMM LT") };
    let newDataEntry: any = {
      date: moment(itemA).tz("Atlantic/St_Helena").format("D MMM LT"),
    };

    //loop through data from each query
    data.map((itemB: any, posB: number) => {
      // consola.info("itemB: ", itemB);
      let x: any = (itemB?.queryResult?.articles).filter(
        (itemC: any, posC: number) => {
          // consola.info("itemC: ", itemC);
          return itemC.seendate == itemA;
        }
      );

      // consola.info("x:dsf   ", x);
      newDataEntry[itemB?.queryInfo?.searchTerm] = x;
    });

    finalArticlesData.push(newDataEntry);
  });

  consola.info("final articles data: ", finalArticlesData);
};

const returnArticles = (obj: any) => {
  consola.info("object: ", obj);
  return obj;
};

export { processArticles, searchTerms, finalArticlesData, returnArticles };
