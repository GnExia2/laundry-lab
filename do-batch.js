var batch_input = [
  [ "pLe*A/tED SKirt", "f*AncY T/Ie" ],
  ["cumber*bund"],
  ["rEd tuX/edo", "red* soCks"]
];


function clean(word){
    if(word.includes("*")){
      var slice_clothes = word.split("*");
      return (slice_clothes[0] + slice_clothes[1]);
    } else {
    return word
  }
};

function mend(word){
  if(word.includes("/")){
    var slice_clothes = word.split("/");
    return(slice_clothes[0] + slice_clothes[1]);
  } else {
      return word
  }
};

function iron(knit_Batch){
  return knit_Batch.toLowerCase();
};

/* YOUR CODE HERE */
function doBatch(unDoneBatch){
    // your code here
    var batch = [].concat.apply([], unDoneBatch);

    console.log('inside dobatch func', batch);
    var clean_Batch = batch.map(clean);//good to go;
    var knit_Batch = clean_Batch.map(mend);
    var ironed_Batch = knit_Batch.map(iron);
    return ironed_Batch
}

doBatch(batch_input);



/* PRINT RESULT */
console.log("--> Finished running do-batch.js");
