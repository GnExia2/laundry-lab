var dirty_clothes = [
  "*blue shirt",
  "argyle s*ocks",
  "u*gly sweater",
  "brown plaid pa*nts",
  "paisl*ey dress shirt"
];

/* YOUR CODE HERE */
var clean_Clothes = dirty_clothes.map(clean)


function clean(clothing_item){
  var slice_clothes = clothing_item.split("*");
  return((slice_clothes[0] + slice_clothes[1]));

}


/* PRINT RESULT */
console.log("--> Finished running clean.js");
