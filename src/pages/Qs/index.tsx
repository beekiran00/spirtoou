import React, { useEffect } from "react";

const qs = require("qs");
const consola = require("consola");

function Qs() {
  useEffect(() => {
    const url1: string = qs.stringify({
      fname: "samuel",
      lname: "botwe",
      score: { eng: "pass", math: "fail" },
    });

    const url2: string = qs.stringify(
      { name: ["samuel", "asare", "botwe"] },
      { indices: false }
    );

    const url3: string = qs.stringify(
      {
        firstName: "samuel",
        secondName: "asare botwe",
        thirdName: null, //omits value of the property together with "=" sign
        fourthName: "", //assigns the property to empty string
        fifthName: undefined, //omits the property completely
      },
      { strictNullHandling: true } //to distinguish between null values and empty strings
    );

    /**spaces in parameters */
    const url4 = qs.stringify({ fName: "samuel asare" }); //maintain space
    const url5 = qs.stringify({ fName: "samuel asare" }, { format: "RFC1738" }); //use concat for space

    /**urls which may contain emojis */
    const url6 = qs.stringify(
      { username: "brabbit", icon: "☺" },
      { charset: "iso-8859-1" }
    );

    consola.info("url1: ", url1);
    consola.info("url2: ", url2);
    consola.info("url3: ", url3);
    consola.info("url4: ", url4);
    consola.info("url5: ", url5);
    consola.info("url6: ", url6);
  });

  return <></>;
}

export default Qs;
