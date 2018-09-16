new Promise(function(resolve, reject){
    var value = false;
    if(value){
        resolve(value);
    } else {
       reject(value)
    }
})
.then(function(value){
    console.log(value)
    return value;
})
.catch((err) => {
    console.log(err);
})