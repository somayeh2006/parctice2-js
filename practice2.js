
function error(value){
  console.log("error")
}
function message(text, callback){
 console.log(text.trim());
 let result= text.split("");
if(text.indexOf("#") !== -1 ){
  callback();
  console.log(text.replace(text, ""));
}

}

message("  #hello Ahmad welcome  ", error);