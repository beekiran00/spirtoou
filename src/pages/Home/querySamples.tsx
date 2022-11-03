export const querySamples: any[] = [
  {
    queryType: "Elon Musk",
    queryText: [
      `"elon musk" (twitter or whatsapp or facebook or instagram) sourcelang:english`,
      `"elon musk" theme:MEDIA_SOCIAL sourcelang:english`,
      `"elon musk" "social media" sourcelang:english`,
      `"elon musk" social and media sourcelang:english`,
      `"elon musk" (social or media) sourcelang:english`,
    ],
  },
  {
    queryType: "Biden",
    queryText: [
      `Biden "energy crisis"`,
      `Biden pollution`,
      `Biden ("energy crisis" OR pollution)`,
      `Biden "energy crisis" pollution`,
    ],
  },
  {
    queryType: "investment",
    queryText: [
      `investment ethereum`,
      `investment dogecoin`,
      `investment bitcoin`,
      `investment (ethereum OR dogecoin OR bitcoin)`,
      `investment ethereum dogecoin bitcoin`,
    ],
  },
  {
    queryType: "Mark Zuckerberg",
    queryText: [
      `"Mark Zuckerberg" meta sourcelang:english`,
      `"Mark Zuckerberg" facebook sourcelang:english`,
    ],
  },
  {
    queryType: "covid pandemic",
    queryText: [
      `"coronavirus" sourcelang:english`,
      `"covid-19" sourcelang:english`,
    ],
  },
];
