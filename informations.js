const name = "Romain IMBRASSE";
const campusName = "Wild Code School";

function get_cows(error, cow_names) {
  if (error) {
    console.log(error);
  } else if (cow_names) {
    console.log(`Number of cows available: ${cow_names.length}`);
  }
}
const cowsay = require("cowsay");
cowsay.list(get_cows);

module.exports = {
  name: name,
  campus: campusName,
};
