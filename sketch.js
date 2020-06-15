var database;
var surveyState = 0;
var voterCount;
var survey,form,voter,answer,question;
var ans1,ans2,ans3,ans4,ans5,ans6,ans7,ans8,ans9,ans10;

function setup(){
  createCanvas(850,500);
  database = firebase.database();

  survey = new Survey();
  survey.getState();
  survey.start();
}

function draw(){
  background("white");
  drawSprites();
}
