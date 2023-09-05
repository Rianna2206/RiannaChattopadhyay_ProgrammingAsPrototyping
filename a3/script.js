let Impact, Arial, ComicSans;

let w=400;
let h=400;
let value = 255;
let title1;
let colors = [255,0, 'red', '#0171A9','#e31837', 'green']; // An array of colors
let currentColorIndex = 0;

function preload() { 
 
  Impact = loadFont("./fonts/impact.ttf");
  Arial = loadFont("./fonts/arial.ttf");
  ComicSans = loadFont("./fonts/ComicSans.ttf");
  Poppins = loadFont("./fonts/Poppins-ExtraBold.ttf");
  Oswald= loadFont("./fonts/Oswald-Stencil.ttf");

  PizzaCheeseBurst = loadImage("./images/pizza_cheeseburst.png");
  PizzaFreshPan= loadImage("./images/pizza_freshpan.png");
  PizzaHandTossed = loadImage("./images/pizza_handtossed.png");
  PizzaThinCrust= loadImage("./images/pizza_thincrust.png");

  SauceBarbeque= loadImage("./images/sauce_barbeque.png");
  SaucePesto = loadImage("./images/sauce_pesto.png");
  SauceTobasco= loadImage("./images/sauce_tobasco.png");

  ToppingPepperoni= loadImage("./images/topping_pepperoni.png");
  ToppingCapsicum= loadImage("./images/topping_capsicum.png");
  ToppingOnion= loadImage("./images/topping_onion.png");
  ToppingMushroom = loadImage("./images/topping_mushroom.png");
  ToppingOlive = loadImage("./images/topping_olive.png");
  ToppingCorn= loadImage("./images/topping_corn.png");
  ToppingChicken = loadImage("./images/topping_chicken.png");
  ToppingBasil= loadImage("./images/topping_basil.png");
 
  DominosLogo= loadImage("./images/dominos_full_logo.png");
  
}

function setup() {

  let cnv = createCanvas(windowHeight/2, windowHeight/2+40);
  cnv.parent('top'); 

//  cnv.class('top');
  // PizzaCheeseBurst = loadImage("./images/pizza_cheeseburst.png", () => {
  //   image(PizzaCheeseBurst, 0, 0, width, height);});
  // PizzaFreshPan= loadImage("./images/pizza_freshpan.png",() => {
  //   image(PizzaFreshPan, 0, 0, width, height);});
  // PizzaHandTossed = loadImage("./images/pizza_handtossed.png",() => {
  //   image(PizzaHandTossed , 0, 0, width, height);});
  // PizzaThinCrust= loadImage("./images/pizza_thincrust.png",() => {
  //   image(PizzaThinCrust, 0, 0, width, height);});
  
  // SauceBarbeque= loadImage("./images/sauce_barbeque.png",() => {
  //   image(SauceBarbeque, 0, 0, width, height);});
  // SaucePesto = loadImage("./images/sauce_pesto.png",() => {
  //   image(SaucePesto, 0, 0, width, height);});
  // SauceTobasco= loadImage("./images/sauce_tobasco.png",() => {
  //   image(SauceTobasco, 0, 0, width, height);});
  
  // ToppingPepperoni= loadImage("./images/topping_pepperoni.png",() => {
  //   image(ToppingPepperoni, 0, 0, width, height);});
  // ToppingCapsicum= loadImage("./images/topping_capsicum.png",() => {
  //   image(ToppingCapsicum, 0, 0, width, height);});
  // ToppingOnion= loadImage("./images/topping_onion.png",() => {
  //   image(ToppingOnion, 0, 0, width, height);});
  // ToppingMushroom = loadImage("./images/topping_mushroom.png",() => {
  //   image(ToppingMushroom, 0, 0, width, height);});
  // ToppingOlive = loadImage("./images/topping_olive.png",() => {
  //   image(ToppingOlive, 0, 0, width, height);});
  // ToppingCorn= loadImage("./images/topping_corn.png",() => {
  //   image(ToppingCorn, 0, 0, width, height);});
  // ToppingChicken = loadImage("./images/topping_chicken.png",() => {
  //   image(ToppingChicken, 0, 0, width, height);});
  // ToppingBasil= loadImage("./images/topping_basil.png",() => {
  //   image(ToppingBasil, 0, 0, width, height);});

  // let p1 = createP('Create Your Own Pizza:');
  // p1.parent('one');
  // p1.class('topText');
  let p2 = createP('Select Crust Type:');
  p2.parent('two');
  p2.class('title');

  dropdown1 = createSelect("Select Crust Type:");
  dropdown1.parent('two'); 
  dropdown1.class('dropdown'); 
  dropdown1.id('img1'); 
  dropdown1.option("Fresh Pan");
  dropdown1.option("Cheese Burst");
  dropdown1.option("Hand Tossed");
  dropdown1.option("Thin Crust");
  dropdown1.changed(updateImage);
  
  let p3 = createP('Choose Toppings:');
  p3.parent('three');
  p3.class('title');

  checkbox1 = createCheckbox('Pepperoni');
  checkbox1.changed(updateTopping);
  checkbox1.parent('section_one');
  checkbox1.class('checkbox'); 

  checkbox2 = createCheckbox('Capsicum');
  checkbox2.changed(updateTopping);
  checkbox2.parent('section_one');
  checkbox2.class('checkbox'); 

  checkbox3 = createCheckbox('Onion');
  checkbox3.changed(updateTopping);
  checkbox3.parent('section_one');
  checkbox3.class('checkbox'); 

  checkbox4 = createCheckbox('Mushroom');
  checkbox4.changed(updateTopping);
  checkbox4.parent('section_one');
  checkbox4.class('checkbox'); 

  checkbox5 = createCheckbox('Olive');
  checkbox5.changed(updateTopping);
  checkbox5.parent('section_two');
  checkbox5.class('checkbox'); 

  checkbox6 = createCheckbox('Corn');
  checkbox6.changed(updateTopping);
  checkbox6.parent('section_two');
  checkbox6.class('checkbox'); 

  checkbox7 = createCheckbox('Chicken');
  checkbox7.changed(updateTopping);
  checkbox7.parent('section_two');
  checkbox7.class('checkbox'); 

  checkbox8 = createCheckbox('Basil');
  checkbox8.changed(updateTopping);
  checkbox8.parent('section_two');
  checkbox8.class('checkbox'); 

  let p4 = createP('Choose Sauce:');
  p4.parent('five');
  p4.class('title');
  radio = createRadio();
  radio.parent('five');
  radio.option("Barbeque");
  radio.option("Pesto");
  radio.option("Tobasco");
  radio.class('radio');

  // let p5 = createP('Choose Sauce Thickness:'); //font SLIDER
  // p5.parent('six');
  // p5.class('title');
  // sizeSlider = createSlider(2, 50, 2);
  // sizeSlider.parent('six');
  // sizeSlider.class('sliders'); 

  let p6 = createP('Name Your Pizza:');
  p6.parent('seven');
  p6.class('title');

  title1= createInput("Enter the name of your pizza");
  title1.parent('seven'); 
  title1.class('input-titles'); 
  title1.id('tit1'); 
  title1.input(updateTitle);

  let p7= createP("");
  p7.parent("seven");

  let p8= createP("Note: Press SpaceBar to change the font colour");
  p8.parent("seven");
  p8.class('text');

  // displayTitle = createDiv(""); // Create a div to display the title outside of the canvas
  // displayTitle.parent('bottom');
  // displayTitle.class('bottom');
  // displayTitle.id('displayTitle');
  let btn1 = createButton("Save & Submit");  //PLACE ORDER BUTTON
  btn1.parent('eight'); 
  btn1.class('buttons'); 
  btn1.id('button1'); 
  btn1.mousePressed(saveimg);
  

  function saveimg(){
    saveCanvas(cnv, "MyCanvas", "jpeg")
  }

  
}
  
function draw() {
  let w = windowHeight/ 2;
  let h = windowHeight/ 2;

  background(26,26,26);
   // Get values from input
  let val1 = title1.value();
  
  // fill(256,256,256);
  // textSize(20);

  fill(colors[currentColorIndex]);
  //fill(value);
  textFont(Oswald);
  name1=text(val1, w/ 2, h+20);
 
  //name1.fill(random(255),random(255),random(255));
  // name1.textSize(calc(cnv.windowHeight*0.9));
  name1.textSize(18);
  name1.textAlign(CENTER, CENTER);
  textFont(); // Center-align the text

  // Draw the text on the canvas
  //text(val1, width / 2, height - 20);
   // Adjust the position as needed
   // text(val1,w/6,h+50,w,h);


  // Get value from dropdown

 

  let choice1 = dropdown1.value();
  if (choice1 === "Fresh Pan") {
  image(PizzaFreshPan, 0, 0, w, h);
  } else if (choice1 === "Cheese Burst") {
  image(PizzaCheeseBurst, 0, 0, w, h);
  } else if (choice1 === "Hand Tossed") {
   image(PizzaHandTossed, 0, 0, w, h);
  } else if (choice1 === "Thin Crust") {
  image(PizzaThinCrust, 0, 0, w, h);
   }


  let choice2 = radio.value();
    if (choice2 === "Barbeque") {
      image(SauceBarbeque, 0, 0, w, h);
    } if (choice2 === "Pesto") {
      image(SaucePesto, 0, 0, w, h);
    } if (choice2 === "Tobasco") {
      image(SauceTobasco, 0, 0, w, h);
    }


  if (checkbox1.checked()) {
    image(ToppingPepperoni, 0, 0, w, h);
  }
  if (checkbox2.checked()) {
    image(ToppingCapsicum, 0, 0, w, h);
  }
  if (checkbox3.checked()) {
    image(ToppingOnion, 0, 0, w, h);
  }
  if (checkbox4.checked()) {
    image(ToppingMushroom, 0, 0, w, h);
  }
  if (checkbox5.checked()) {
    image(ToppingOlive, 0, 0, w, h);
  }
  if (checkbox6.checked()) {
    image(ToppingCorn, 0, 0, w, h);
  }
  if (checkbox7.checked()) {
    image(ToppingChicken, 0, 0, w, h);
  }
  if (checkbox8.checked()) {
    image(ToppingBasil, 0, 0, w, h);
  }



   // Update the text outside the canvas
  //displayTitle.html(val1);
}
function keyPressed() {
  if (keyCode === 32) {
    currentColorIndex = (currentColorIndex + 1) % colors.length;
  }
}

// function keyPressed() {
//   if (value === 0) {
//     value = 255;
//   } else {
//     value = 0;
//   } 
// }
 
function updateImage() {
  // Update the choice1 variable when the dropdown selection changes
  choice1 = dropdown1.value();
}

function updateTopping() {
  if (!checkbox1.checked()) {
    clear();
  }
  if (!checkbox2.checked()) {
    clear();
  }
  if (!checkbox3.checked()) {
    clear();
  }
  if (!checkbox4.checked()) {
    clear();
  }
  if (!checkbox5.checked()) {
    clear();
  }
  if (!checkbox6.checked()) {
    clear();
  }
  if (!checkbox7.checked()) {
    clear();
  }
  if (!checkbox8.checked()) {
    clear();
  }



}


function updateTitle() {
  let val1 = title1.value();
  displayTitle.html(val1); // Update the text outside the canvas
}

function mouseDragged() {
  // Draw a line from the previous mouse position to the current mouse position
 
  l1=line(pmouseX, pmouseY, mouseX, mouseY);
  stroke(0, 0, 0); 
  strokeWeight(sauceSize);
}

function windowResized() {
  resizeCanvas(windowHeight/2, windowHeight/2+40);
}