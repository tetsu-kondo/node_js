
var socket;

function setup() {
  // createCanvas(windowWidth,windowHeight);
  
     createCanvas(windowWidth,windowHeight);
  
  
 // strokeWeight(2);
  background(0);

  //socket = io.connect('http://localhost:3000');
  
socket = io.connect('https://tetsukondo.glitch.me');
  
  socket.on('mouse',
  // When we receive data
  function(data) {
    console.log("Got: " + data.x + " " + data.y);
    console.log("Got: " + data.px + " " + data.py);
        
  stroke(209,98,226);
  strokeWeight(9);
  line(data.x, data.y,data.px,data.py); 
  }
            
);

}


function draw() {

}


function mouseDragged() {
  // Draw some white circles
  fill(255);
 // noStroke();
  stroke(52,167,225);
  strokeWeight(9);
  line(mouseX,mouseY,pmouseX,pmouseY);
 // ellipse(mouseX,mouseY,20,20);
  
  // Send the mouse coordinates
  sendmouse(mouseX,mouseY,pmouseX,pmouseY);
  
}


// Function for sending to the socket
function sendmouse(xpos, ypos, pxpos, pypos) {
  // We are sending!
  console.log("sendmouse: " + xpos + " " + ypos);
    console.log("sendmouse: " + pxpos + " " + pypos);

  
  // Make a little object with  and y
  var data = {
    x: xpos,
    y: ypos,
    px : pxpos,
    py : pypos
    
  };

  // Send that object to the socket
  socket.emit('mouse',data);
}