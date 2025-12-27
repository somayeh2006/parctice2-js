//practice1

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


//practice2
function corecct(value){
     console.log("Successful");
   }
   function incorecct(value){
     console.log("not Successful");
   }
   function userandpassword(name, password, callback1, callback2){
     let result = name.trim() ;
     console.log(result);
     if(result === "sara" && password === 123){
       callback1();
     }else{
       callback2();
     }
   }
   userandpassword("  sara  ", 123, corecct,incorecct);