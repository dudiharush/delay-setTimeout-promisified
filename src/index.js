function delay(time){
  return new Promise((resolve, reject) => {
    setTimeout(resolve, time);
  });
}

delay(1000).then(()=>console.log("done"));
