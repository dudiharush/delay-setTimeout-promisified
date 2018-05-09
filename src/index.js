const delay = time =>
  new Promise(resolve => {
    setTimeout(resolve, time);
  });

delay(1000).then(() => console.log("done"));
