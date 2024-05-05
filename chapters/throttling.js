 
const btn = document.querySelector("#button_");
 

function func() {
  console.log("api call");
}

const Throttle = (func, delay) => {
  let prevTime = new Date().getTime() - delay;
  return () => {
  
    const timeNow = new Date().getTime();
    
    console.log(timeNow - prevTime);
    if (timeNow - prevTime > delay) {
      func();
      prevTime = timeNow;
    }
    console.log("-------------------------");
  };
};

btn.addEventListener("click", Throttle(func, 500));
