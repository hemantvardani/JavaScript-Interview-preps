// import * as abb from './chapters/index.js'

//polyfill of reduce

// [].reduce(() => {}, __);
Array.prototype.myReduce = function (cb, initial) {
    // edge case if size=0, 1
  
    if(this.size===0){
          return undefined;
    }
   
    console.log('sldjf')
  
    let acc = initial;
    let start = 0;
    if (initial===undefined) {
      acc = this[0];
      start = 1;
    }
  
    console.log('sldjf')
  
    for (let index = start; index < this.length; index++) {
          console.log(' d')
  
      acc = cb(acc, this[index]);
    }
    console.log('sldjf')
  
  
    return acc;
  };
  const a = [];
  const ans= a.reduce((acc,curr)=>{acc.push(curr); return acc;});
  console.log(ans)
  
  