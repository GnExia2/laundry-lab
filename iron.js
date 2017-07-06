var wrinkled_clothes = [
  "grEEn shIrt",
  "TubE sockS",
  "TIe Dye shIrt",
  "gray pants",
  "HAndKerChief",
  "whItE bLousE"
];

/* YOUR CODE HERE */

var ironed_Clothes = wrinkled_clothes.map(iron);

function iron(clothing_item){
  console.log(clothing_item.toLowerCase());
};
/* PRINT RESULT */
console.log(" Finished running iron.js ");
