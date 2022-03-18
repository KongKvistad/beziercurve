let step = 0.02; // Size of each step along the path
let pct = 0.0; // Percentage traveled (0.0 to 1.0)
let circSize = 30 // sizer of circle

//init anim status to false
let played = false;


//method imported from p5
function setup() {
  createCanvas(windowWidth, windowHeight);
}

//method imported from p5
function draw() {
  //background needs to be drawn here
  background(0);

  //init bezier curve
  const bezier = setupBezier(windowWidth, windowHeight)
  
  // Draw a circle, map to bezier
  fill(255);
  let x = bezierPoint(...objCoordsToList(bezier, "x"), easeInSine(pct));
  let y = bezierPoint(...objCoordsToList(bezier, "y"), easeInSine(pct));
  
  //plot the circle
  circle(x, y, circSize);
  

  //manage animation status
  if (pct >= 1){
    played = true;
  } else if (pct <= 0){
    played = false;
  }
  // inc or dec according to animstatus
  if(!played){
    pct += step;
  } else {
    pct -= step;
  }
  
  
}
