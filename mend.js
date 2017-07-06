var torn_clothes = [
  "knit swe/ater",
  "tu/be socks",
  "blue je/ans",
  "whit/e blouse"
];

/* YOUR CODE HERE */

var knit_Clothes = torn_clothes.map(mend)

function mend(clothing_item){
  var slice_clothes = clothing_item.split("/");
  return(slice_clothes[0] + slice_clothes[1]);
};


/* PRINT RESULT */
console.log("--> Finished running mend.js");
