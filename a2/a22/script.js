let Impact, Arial, ComicSans;
let HotlineBling, UNODraw25, DisasterGirl, WomanYellingAtCat, WaitingSkeleton;
let w = 400;
let h = 400;
let containerX1Slider, containerY1Slider, containerWidth1Slider, containerHeight1Slider, fontSize1Slider;
let containerX2Slider, containerY2Slider, containerWidth2Slider, containerHeight2Slider, fontSize2Slider;

let title1, title2;
let rSlider, gSlider, bSlider;

function preload() {
  
  Impact = loadFont("./fonts/impact.ttf");
  Arial = loadFont("./fonts/arial.ttf");
  ComicSans = loadFont("./fonts/ComicSans.ttf");
  Poppins = loadFont("./fonts/Poppins-ExtraBold.ttf");
  
  HotlineBling = loadImage("./images/HotlineBling.jpeg");
  UNODraw25 = loadImage("./images/UNODraw25.jpeg");
  DisasterGirl = loadImage("./images/DisasterGirl.jpeg");
  WomanYellingAtCat = loadImage("./images/WomanYellingAtCat.png");
  WaitingSkeleton= loadImage("./images/waiting skeleton.jpeg");

}

function setup() {
    let cnv = createCanvas(w,h);
    cnv.parent('column-two'); 
    cnv.class('canvas-container');

    let p1 = createP('Select Meme Image');
    p1.parent('one');
    p1.class('text');

    dropdown1 = createSelect("Select Meme Image:");
    dropdown1.parent('one'); 
    dropdown1.class('dropdown'); 
    dropdown1.id('img1'); 
    dropdown1.option("Hotline Bling");
    dropdown1.option("UNO Draw 25");
    dropdown1.option("Disaster Girl");
    dropdown1.option("Woman Yelling At Cat");
    dropdown1.option("Waiting Skeleton");
    dropdown1.changed(imageUpdate);

   

    let p2 = createP('Enter Text 1');
    p2.parent('two');
    p2.class('text');

    title1= createInput("Title 1");
    title1.parent('two'); 
    title1.class('titles'); 
    title1.id('tit1'); 


    let p3 = createP('Enter Text 2');
    p3.parent('two');
    p3.class('text');

    title2= createInput("Title 2");
    title2.parent('two'); 
    title2.class('titles'); 
    title2.id('tit2'); 

    let p4 = createP('Position of Text 1');
    p4.parent('three');
    p4.class('text');

    let p5 = createP('x1:');    //x1 SLIDER
    p5.parent('three'); 
    p5.class('text1');
    x1Slider = createSlider(0, 400, 230);
    x1Slider.parent('three');
    x1Slider.class('sliders'); 

    let p6 = createP('y1:');   //y1 SLIDER
    p6.parent('three');
    p6.class('text1');
    y1Slider = createSlider(0, 400, 90);
    y1Slider.parent('three');
    y1Slider.class('sliders'); 

    let p7 = createP('Position of Text 2');
    p7.parent('four');
    p7.class('text');

    let p8 = createP('x2:');  //x2 SLIDER
    p8.parent('four');
    p8.class('text1');
    x2Slider = createSlider(0, 400, 230);
    x2Slider.parent('four');
    x2Slider.class('sliders'); 

    let p9 = createP('y2:');  //y2 SLIDER
    p9.parent('four');
    p9.class('text1');
    y2Slider = createSlider(0, 400, 280);
    y2Slider.parent('four');
    y2Slider.class('sliders'); 

    let p10 = createP('Font Size'); //font SLIDER
    p10.parent('five');
    p10.class('text');
    fontSlider = createSlider(0, 60, 30);
    fontSlider.parent('five');
    fontSlider.class('sliders'); 
    
    let p11 = createP('Choose Font');
    p11.parent('six');
    p11.class('text');
    radio = createRadio();
    radio.parent('six');
    radio.option("Impact");
    radio.option("Arial");
    radio.option("ComicSans");
    radio.changed(changeFont);
    radio.class('radio');

    let p12 = createP('R Colour of Font'); //font SLIDER
    p12.parent('seven');
    p12.class('text');
    rSlider = createSlider(0, 256, 0);
    rSlider.parent('seven');
    rSlider.class('sliders'); 

    let p13 = createP('G Colour of Font'); //font SLIDER
    p13.parent('seven');
    p13.class('text');
    gSlider = createSlider(0, 256, 0);
    gSlider.parent('seven');
    gSlider.class('sliders'); 

    let p14 = createP('B Colour of Font'); //font SLIDER
    p14.parent('seven');
    p14.class('text');
    bSlider = createSlider(0, 256, 0);
    bSlider.parent('seven');
    bSlider.class('sliders'); 

    let p15= createP('Save Your Meme');
    p15.parent('eight');
    p15.class('text');
    
    let btn1 = createButton("Save Image");  //save BUTTON
    btn1.parent('eight'); 
    btn1.class('buttons'); 
    btn1.id('button1'); 
    btn1.mousePressed(saveimg);


    function imageUpdate(){
      let m1 = dropdown1.value();
      im1 = loadImage(m1);
    }

    function changeFont() {
      let selectedFont = radio.value();
      textFont(selectedFont);
    }

    function saveimg(){
      saveCanvas(cnv,'RiRi ka meme','png')
    }
  }
  
  function draw() {
    background('white');

    // Get values from input
    let val1 = title1.value();
    let val2 = title2.value();

    // Get value from dropdown

    let choice1 = dropdown1.value();
    if (choice1 === "Hotline Bling") {
      image(HotlineBling, 0, 0, w, h);
    } if (choice1 === "UNO Draw 25") {
      image(UNODraw25, 0, 0, w, h);
    } if (choice1 === "Disaster Girl") {
      image(DisasterGirl, 0, 0, w, h);
    } if (choice1 === "Woman Yelling At Cat") {
      image(WomanYellingAtCat, 0, 0, w, h);
    } else if (choice1 === "Waiting Skeleton") {
      image(WaitingSkeleton, 0, 0, w, h);
    } 
  
        // Get values from sliders
    let x1 = x1Slider.value();
    let y1 = y1Slider.value();
    let x2 = x2Slider.value();
    let y2 = y2Slider.value();
    let fontSize= fontSlider.value();
    let r= rSlider.value();
    let g= gSlider.value();
    let b= bSlider.value();

    // text inside the container 1
    fill(r, g, b);
    noStroke();
    textSize(fontSize);
    textAlign(CENTER, LEFT);
    text(val1, x1, y1, w/3, h/3);

    
    // text inside the container 2
    fill(r, g, b);
    noStroke();
    textSize(fontSize);
    textAlign(CENTER, LEFT);
    text(val2, x2, y2, w/3, h/3);

  }
  
