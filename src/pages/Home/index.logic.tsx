//colors array to assign to each search item to use for line graph
const linegraphColors: string[] = [
  "#0099CC",
  "#FF6600",
  "#00CC00",
  "#924CB9",
  "#BF4E93",
];

const randomString = (length: number) => {
  var result = "";
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export { randomString, linegraphColors };
