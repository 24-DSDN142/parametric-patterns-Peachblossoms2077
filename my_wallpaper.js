//your parameter variables go here!

presetpenrose = "fixed" // Penrose randomization preset. Available presets are "fixed" and "random". Defaults to fixed

presetcolor1 = "random"; // Color preset. Available presets are "white, grey, red, green, blue, purple, orange, yellow, random and fixed"
presetcolor2 = "random"; // if preset is not set to one of the above, colors will default to white

presetopacitymain = "random" // Main penrose opacity preset. Available presets are "fixed" and "random". Defaults to fixed
presetopacity2 = "random" // Secondary penrose opacity preset. Available presets are "fixed" and "random". Defaults to fixed
presetopacity3 = "random" // Tertiary penrose opacity preset. Available presets are "fixed" and "random". Defaults to fixed
strokeopacity = "random" // Penrose stroke opacity preset. Available presets are "fixed" and "random". Defaults to fixed

let opacity = 255; // parameters for opacity of main penrose geometry (0 - 255)
let opacity2 = 255; // parameters for opacity of 2nd set of penrose geometry (0 - 255)
let opacity3 = 255; // parameters for opacity of 3rd set of penrose geometry (0 - 255)   // Caution: for manual customization of position, colors and opacity,
let opacityS = 255; // parameters for opacity of stroke for penrose geometry (0 - 255)      change preset to "fixed" first

let gradient1 = 255; //parameters for gradient background
let gradient2 = 255;
let gradient3 = 255;
let gradient21 = 255;
let gradient22 = 255;
let gradient23 = 255;

let scaleFactor = 0.442; //parameters for main penrose geometry
let Xdeduction = 75;
let Ydeduction = 50;

let scaleFactor2 = 0.093; //parameters for 2nd penrose geometry
let Xdeduction2 = 139;
let Ydeduction2 = 145;

let scaleFactor3 = 0.072; //parameters for 3rd penrose geometry
let Xdeduction3 = -73;
let Ydeduction3 = -52.7;

let scaleFactor4 = 0.072; //parameters for 4th penrose geometry
let Xdeduction4 = -101;
let Ydeduction4 = -101;

let scaleFactor5 = 0.072; //parameters for 5th penrose geometry
let Xdeduction5 = -45;
let Ydeduction5 = -101;

let scaleFactor6 = 0.194; //parameters for 6th penrose geometry
let Xdeduction6 = 47;
let Ydeduction6 = 105.5;

let scaleFactor6alt = 0.205; //parameters for alternative version of 6th penrose geometry
let Xdeduction6alt = 113;
let Ydeduction6alt = 40.5;

let scaleFactor7 = 0.071; //parameters for 7th penrose geometry
let Xdeduction7 = 59.5;
let Ydeduction7 = -10;

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(GRID_WALLPAPER);
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width = 265;
  pWallpaper.grid_settings.cell_height = 230;
  pWallpaper.grid_settings.row_offset = 133;

}

function wallpaper_background() {

  switch (presetcolor1) {
    case "blue":
      gradient1 = 122;
      gradient2 = 250;
      gradient3 = 250;
      break;
    case "red":
      gradient1 = 227;
      gradient2 = 36;
      gradient3 = 52;
      break;
    case "green":
      gradient1 = 102;
      gradient2 = 255;
      gradient3 = 112;
      break;
    case "white":
      gradient1 = 255;
      gradient2 = 255;
      gradient3 = 255;
      break;
    case "grey":
      gradient1 = 200;
      gradient2 = 200;
      gradient3 = 200;
      break;
    case "purple":
      gradient1 = 166;
      gradient2 = 34;
      gradient3 = 227;
      break;
    case "yellow":
      gradient1 = 247;
      gradient2 = 245;
      gradient3 = 82;
      break;
    case "orange":
      gradient1 = 247;
      gradient2 = 179;
      gradient3 = 69;
      break;
    case "cyan":
      gradient1 = 43;
      gradient2 = 255;
      gradient3 = 195;
      break;
    case "random":
      gradient1 = random(50, 255);
      gradient2 = random(50, 255);
      gradient3 = random(50, 255);
      break;
    case "fixed":
      break;
    default:
      gradient1 = 255;
      gradient2 = 255;
      gradient3 = 255;
  }

  switch (presetcolor2) {
    case "blue":
      gradient21 = 122;
      gradient22 = 250;
      gradient23 = 250;
      break;
    case "red":
      gradient21 = 227;
      gradient22 = 36;
      gradient23 = 52;
      break;
    case "green":
      gradient21 = 102;
      gradient22 = 255;
      gradient23 = 112;
      break;
    case "white":
      gradient21 = 255;
      gradient22 = 255;
      gradient23 = 255;
      break;
    case "grey":
      gradient21 = 200;
      gradient22 = 200;
      gradient23 = 200;
      break;
    case "purple":
      gradient21 = 166;
      gradient22 = 34;
      gradient23 = 227;
      break;
    case "yellow":
      gradient21 = 247;
      gradient22 = 245;
      gradient23 = 82;
      break;
    case "orange":
      gradient21 = 247;
      gradient22 = 179;
      gradient23 = 69;
      break;
    case "cyan":
      gradient21 = 43;
      gradient22 = 255;
      gradient23 = 195;
      break;
    case "random":
      gradient21 = random(50, 255);
      gradient22 = random(50, 255);
      gradient23 = random(50, 255);
      break;
    case "fixed":
      break;
    default:
      gradient21 = 200;
      gradient22 = 200;
      gradient23 = 200;
  }

  c1 = color(gradient1, gradient2, gradient3); //gradient background (top to bottom)
  c2 = color(gradient21, gradient22, gradient23);

  for (let y = 0; y < height; y++) {
    n = map(y, 0, height, 0, 1);
    let newc = lerpColor(c1, c2, n);
    stroke(newc);
    line(0, y, width, y);
  }
}

function PenroseMain() {
  stroke(2, opacityS);
  fill(190, opacity);
  beginShape();
  vertex(436 * scaleFactor - Xdeduction, 40 * scaleFactor - Ydeduction);
  vertex(360 * scaleFactor - Xdeduction, 40 * scaleFactor - Ydeduction);
  vertex(100 * scaleFactor - Xdeduction, 492 * scaleFactor - Ydeduction);
  vertex(552 * scaleFactor - Xdeduction, 492 * scaleFactor - Ydeduction);
  vertex(520 * scaleFactor - Xdeduction, 433 * scaleFactor - Ydeduction);
  vertex(212 * scaleFactor - Xdeduction, 433 * scaleFactor - Ydeduction);
  endShape();

  fill(255, opacity);
  beginShape();
  vertex(438 * scaleFactor - Xdeduction, 40 * scaleFactor - Ydeduction);
  vertex(211 * scaleFactor - Xdeduction, 433 * scaleFactor - Ydeduction);
  vertex(281 * scaleFactor - Xdeduction, 433 * scaleFactor - Ydeduction);
  vertex(435 * scaleFactor - Xdeduction, 167 * scaleFactor - Ydeduction);
  vertex(661 * scaleFactor - Xdeduction, 559 * scaleFactor - Ydeduction);
  vertex(700 * scaleFactor - Xdeduction, 492 * scaleFactor - Ydeduction);
  vertex(438 * scaleFactor - Xdeduction, 40 * scaleFactor - Ydeduction);
  endShape();

  fill(220, opacity);
  beginShape();
  vertex(553 * scaleFactor - Xdeduction, 492 * scaleFactor - Ydeduction);
  vertex(100 * scaleFactor - Xdeduction, 492 * scaleFactor - Ydeduction);
  vertex(137 * scaleFactor - Xdeduction, 560 * scaleFactor - Ydeduction);
  vertex(661 * scaleFactor - Xdeduction, 559 * scaleFactor - Ydeduction);
  vertex(435 * scaleFactor - Xdeduction, 167 * scaleFactor - Ydeduction);
  vertex(400 * scaleFactor - Xdeduction, 227 * scaleFactor - Ydeduction);
  vertex(553 * scaleFactor - Xdeduction, 492 * scaleFactor - Ydeduction);
  endShape();

}

function Penrose2() {
  push();
  rotate(180);
  stroke(2, opacityS);
  fill(190, opacity2);
  beginShape();
  vertex(436 * scaleFactor2 - Xdeduction2, 40 * scaleFactor2 - Ydeduction2);
  vertex(360 * scaleFactor2 - Xdeduction2, 40 * scaleFactor2 - Ydeduction2);
  vertex(100 * scaleFactor2 - Xdeduction2, 492 * scaleFactor2 - Ydeduction2);
  vertex(552 * scaleFactor2 - Xdeduction2, 492 * scaleFactor2 - Ydeduction2);
  vertex(520 * scaleFactor2 - Xdeduction2, 433 * scaleFactor2 - Ydeduction2);
  vertex(212 * scaleFactor2 - Xdeduction2, 433 * scaleFactor2 - Ydeduction2);
  endShape();

  fill(255, opacity2);
  beginShape();
  vertex(438 * scaleFactor2 - Xdeduction2, 40 * scaleFactor2 - Ydeduction2);
  vertex(211 * scaleFactor2 - Xdeduction2, 433 * scaleFactor2 - Ydeduction2);
  vertex(281 * scaleFactor2 - Xdeduction2, 433 * scaleFactor2 - Ydeduction2);
  vertex(435 * scaleFactor2 - Xdeduction2, 167 * scaleFactor2 - Ydeduction2);
  vertex(661 * scaleFactor2 - Xdeduction2, 559 * scaleFactor2 - Ydeduction2);
  vertex(700 * scaleFactor2 - Xdeduction2, 492 * scaleFactor2 - Ydeduction2);
  vertex(438 * scaleFactor2 - Xdeduction2, 40 * scaleFactor2 - Ydeduction2);
  endShape();

  fill(220, opacity2);
  beginShape();
  vertex(553 * scaleFactor2 - Xdeduction2, 492 * scaleFactor2 - Ydeduction2);
  vertex(100 * scaleFactor2 - Xdeduction2, 492 * scaleFactor2 - Ydeduction2);
  vertex(137 * scaleFactor2 - Xdeduction2, 560 * scaleFactor2 - Ydeduction2);
  vertex(661 * scaleFactor2 - Xdeduction2, 559 * scaleFactor2 - Ydeduction2);
  vertex(435 * scaleFactor2 - Xdeduction2, 167 * scaleFactor2 - Ydeduction2);
  vertex(400 * scaleFactor2 - Xdeduction2, 227 * scaleFactor2 - Ydeduction2);
  vertex(553 * scaleFactor2 - Xdeduction2, 492 * scaleFactor2 - Ydeduction2);
  endShape();
  pop();

}

function Penrose3() {
  stroke(2, opacityS);
  fill(190, opacity2);
  beginShape();
  vertex(436 * scaleFactor3 - Xdeduction3, 40 * scaleFactor3 - Ydeduction3);
  vertex(360 * scaleFactor3 - Xdeduction3, 40 * scaleFactor3 - Ydeduction3);
  vertex(100 * scaleFactor3 - Xdeduction3, 492 * scaleFactor3 - Ydeduction3);
  vertex(552 * scaleFactor3 - Xdeduction3, 492 * scaleFactor3 - Ydeduction3);
  vertex(520 * scaleFactor3 - Xdeduction3, 433 * scaleFactor3 - Ydeduction3);
  vertex(212 * scaleFactor3 - Xdeduction3, 433 * scaleFactor3 - Ydeduction3);
  endShape();

  fill(255, opacity2);
  beginShape();
  vertex(438 * scaleFactor3 - Xdeduction3, 40 * scaleFactor3 - Ydeduction3);
  vertex(211 * scaleFactor3 - Xdeduction3, 433 * scaleFactor3 - Ydeduction3);
  vertex(281 * scaleFactor3 - Xdeduction3, 433 * scaleFactor3 - Ydeduction3);
  vertex(435 * scaleFactor3 - Xdeduction3, 167 * scaleFactor3 - Ydeduction3);
  vertex(661 * scaleFactor3 - Xdeduction3, 559 * scaleFactor3 - Ydeduction3);
  vertex(700 * scaleFactor3 - Xdeduction3, 492 * scaleFactor3 - Ydeduction3);
  vertex(438 * scaleFactor3 - Xdeduction3, 40 * scaleFactor3 - Ydeduction3);
  endShape();

  fill(220, opacity2);
  beginShape();
  vertex(553 * scaleFactor3 - Xdeduction3, 492 * scaleFactor3 - Ydeduction3);
  vertex(100 * scaleFactor3 - Xdeduction3, 492 * scaleFactor3 - Ydeduction3);
  vertex(137 * scaleFactor3 - Xdeduction3, 560 * scaleFactor3 - Ydeduction3);
  vertex(661 * scaleFactor3 - Xdeduction3, 559 * scaleFactor3 - Ydeduction3);
  vertex(435 * scaleFactor3 - Xdeduction3, 167 * scaleFactor3 - Ydeduction3);
  vertex(400 * scaleFactor3 - Xdeduction3, 227 * scaleFactor3 - Ydeduction3);
  vertex(553 * scaleFactor3 - Xdeduction3, 492 * scaleFactor3 - Ydeduction3);
  endShape();

}

function Penrose4() {
  stroke(2, opacityS);
  fill(190, opacity2);
  beginShape();
  vertex(436 * scaleFactor4 - Xdeduction4, 40 * scaleFactor4 - Ydeduction4);
  vertex(360 * scaleFactor4 - Xdeduction4, 40 * scaleFactor4 - Ydeduction4);
  vertex(100 * scaleFactor4 - Xdeduction4, 492 * scaleFactor4 - Ydeduction4);
  vertex(552 * scaleFactor4 - Xdeduction4, 492 * scaleFactor4 - Ydeduction4);
  vertex(520 * scaleFactor4 - Xdeduction4, 433 * scaleFactor4 - Ydeduction4);
  vertex(212 * scaleFactor4 - Xdeduction4, 433 * scaleFactor4 - Ydeduction4);
  endShape();

  fill(255, opacity2);
  beginShape();
  vertex(438 * scaleFactor4 - Xdeduction4, 40 * scaleFactor4 - Ydeduction4);
  vertex(211 * scaleFactor4 - Xdeduction4, 433 * scaleFactor4 - Ydeduction4);
  vertex(281 * scaleFactor4 - Xdeduction4, 433 * scaleFactor4 - Ydeduction4);
  vertex(435 * scaleFactor4 - Xdeduction4, 167 * scaleFactor4 - Ydeduction4);
  vertex(661 * scaleFactor4 - Xdeduction4, 559 * scaleFactor4 - Ydeduction4);
  vertex(700 * scaleFactor4 - Xdeduction4, 492 * scaleFactor4 - Ydeduction4);
  vertex(438 * scaleFactor4 - Xdeduction4, 40 * scaleFactor4 - Ydeduction4);
  endShape();

  fill(220, opacity2);
  beginShape();
  vertex(553 * scaleFactor4 - Xdeduction4, 492 * scaleFactor4 - Ydeduction4);
  vertex(100 * scaleFactor4 - Xdeduction4, 492 * scaleFactor4 - Ydeduction4);
  vertex(137 * scaleFactor4 - Xdeduction4, 560 * scaleFactor4 - Ydeduction4);
  vertex(661 * scaleFactor4 - Xdeduction4, 559 * scaleFactor4 - Ydeduction4);
  vertex(435 * scaleFactor4 - Xdeduction4, 167 * scaleFactor4 - Ydeduction4);
  vertex(400 * scaleFactor4 - Xdeduction4, 227 * scaleFactor4 - Ydeduction4);
  vertex(553 * scaleFactor4 - Xdeduction4, 492 * scaleFactor4 - Ydeduction4);
  endShape();

}

function Penrose5() {
  stroke(2, opacityS);
  fill(190, opacity2);
  beginShape();
  vertex(436 * scaleFactor5 - Xdeduction5, 40 * scaleFactor5 - Ydeduction5);
  vertex(360 * scaleFactor5 - Xdeduction5, 40 * scaleFactor5 - Ydeduction5);
  vertex(100 * scaleFactor5 - Xdeduction5, 492 * scaleFactor5 - Ydeduction5);
  vertex(552 * scaleFactor5 - Xdeduction5, 492 * scaleFactor5 - Ydeduction5);
  vertex(520 * scaleFactor5 - Xdeduction5, 433 * scaleFactor5 - Ydeduction5);
  vertex(212 * scaleFactor5 - Xdeduction5, 433 * scaleFactor5 - Ydeduction5);
  endShape();

  fill(255, opacity2);
  beginShape();
  vertex(438 * scaleFactor5 - Xdeduction5, 40 * scaleFactor5 - Ydeduction5);
  vertex(211 * scaleFactor5 - Xdeduction5, 433 * scaleFactor5 - Ydeduction5);
  vertex(281 * scaleFactor5 - Xdeduction5, 433 * scaleFactor5 - Ydeduction5);
  vertex(435 * scaleFactor5 - Xdeduction5, 167 * scaleFactor5 - Ydeduction5);
  vertex(661 * scaleFactor5 - Xdeduction5, 559 * scaleFactor5 - Ydeduction5);
  vertex(700 * scaleFactor5 - Xdeduction5, 492 * scaleFactor5 - Ydeduction5);
  vertex(438 * scaleFactor5 - Xdeduction5, 40 * scaleFactor5 - Ydeduction5);
  endShape();

  fill(220, opacity2);
  beginShape();
  vertex(553 * scaleFactor5 - Xdeduction5, 492 * scaleFactor5 - Ydeduction5);
  vertex(100 * scaleFactor5 - Xdeduction5, 492 * scaleFactor5 - Ydeduction5);
  vertex(137 * scaleFactor5 - Xdeduction5, 560 * scaleFactor5 - Ydeduction5);
  vertex(661 * scaleFactor5 - Xdeduction5, 559 * scaleFactor5 - Ydeduction5);
  vertex(435 * scaleFactor5 - Xdeduction5, 167 * scaleFactor5 - Ydeduction5);
  vertex(400 * scaleFactor5 - Xdeduction5, 227 * scaleFactor5 - Ydeduction5);
  vertex(553 * scaleFactor5 - Xdeduction5, 492 * scaleFactor5 - Ydeduction5);
  endShape();

}

function Penrose6() {
  push();
  rotate(180);
  stroke(2, opacityS);
  fill(190, opacity3);
  beginShape();
  vertex(436 * scaleFactor6 - Xdeduction6, 40 * scaleFactor6 - Ydeduction6);
  vertex(360 * scaleFactor6 - Xdeduction6, 40 * scaleFactor6 - Ydeduction6);
  vertex(100 * scaleFactor6 - Xdeduction6, 492 * scaleFactor6 - Ydeduction6);
  vertex(552 * scaleFactor6 - Xdeduction6, 492 * scaleFactor6 - Ydeduction6);
  vertex(520 * scaleFactor6 - Xdeduction6, 433 * scaleFactor6 - Ydeduction6);
  vertex(212 * scaleFactor6 - Xdeduction6, 433 * scaleFactor6 - Ydeduction6);
  endShape();

  fill(255, opacity3);
  beginShape();
  vertex(438 * scaleFactor6 - Xdeduction6, 40 * scaleFactor6 - Ydeduction6);
  vertex(211 * scaleFactor6 - Xdeduction6, 433 * scaleFactor6 - Ydeduction6);
  vertex(281 * scaleFactor6 - Xdeduction6, 433 * scaleFactor6 - Ydeduction6);
  vertex(435 * scaleFactor6 - Xdeduction6, 167 * scaleFactor6 - Ydeduction6);
  vertex(661 * scaleFactor6 - Xdeduction6, 559 * scaleFactor6 - Ydeduction6);
  vertex(700 * scaleFactor6 - Xdeduction6, 492 * scaleFactor6 - Ydeduction6);
  vertex(438 * scaleFactor6 - Xdeduction6, 40 * scaleFactor6 - Ydeduction6);
  endShape();

  fill(220, opacity3);
  beginShape();
  vertex(553 * scaleFactor6 - Xdeduction6, 492 * scaleFactor6 - Ydeduction6);
  vertex(100 * scaleFactor6 - Xdeduction6, 492 * scaleFactor6 - Ydeduction6);
  vertex(137 * scaleFactor6 - Xdeduction6, 560 * scaleFactor6 - Ydeduction6);
  vertex(661 * scaleFactor6 - Xdeduction6, 559 * scaleFactor6 - Ydeduction6);
  vertex(435 * scaleFactor6 - Xdeduction6, 167 * scaleFactor6 - Ydeduction6);
  vertex(400 * scaleFactor6 - Xdeduction6, 227 * scaleFactor6 - Ydeduction6);
  vertex(553 * scaleFactor6 - Xdeduction6, 492 * scaleFactor6 - Ydeduction6);
  endShape();
  pop();

}

function Penrose6alt() {
  stroke(2, opacityS);
  fill(190, opacity3);
  beginShape();
  vertex(436 * scaleFactor6alt - Xdeduction6alt, 40 * scaleFactor6alt - Ydeduction6alt);
  vertex(360 * scaleFactor6alt - Xdeduction6alt, 40 * scaleFactor6alt - Ydeduction6alt);
  vertex(100 * scaleFactor6alt - Xdeduction6alt, 492 * scaleFactor6alt - Ydeduction6alt);
  vertex(552 * scaleFactor6alt - Xdeduction6alt, 492 * scaleFactor6alt - Ydeduction6alt);
  vertex(520 * scaleFactor6alt - Xdeduction6alt, 433 * scaleFactor6alt - Ydeduction6alt);
  vertex(212 * scaleFactor6alt - Xdeduction6alt, 433 * scaleFactor6alt - Ydeduction6alt);
  endShape();

  fill(255, opacity3);
  beginShape();
  vertex(438 * scaleFactor6alt - Xdeduction6alt, 40 * scaleFactor6alt - Ydeduction6alt);
  vertex(211 * scaleFactor6alt - Xdeduction6alt, 433 * scaleFactor6alt - Ydeduction6alt);
  vertex(281 * scaleFactor6alt - Xdeduction6alt, 433 * scaleFactor6alt - Ydeduction6alt);
  vertex(435 * scaleFactor6alt - Xdeduction6alt, 167 * scaleFactor6alt - Ydeduction6alt);
  vertex(661 * scaleFactor6alt - Xdeduction6alt, 559 * scaleFactor6alt - Ydeduction6alt);
  vertex(700 * scaleFactor6alt - Xdeduction6alt, 492 * scaleFactor6alt - Ydeduction6alt);
  vertex(438 * scaleFactor6alt - Xdeduction6alt, 40 * scaleFactor6alt - Ydeduction6alt);
  endShape();

  fill(220, opacity3);
  beginShape();
  vertex(553 * scaleFactor6alt - Xdeduction6alt, 492 * scaleFactor6alt - Ydeduction6alt);
  vertex(100 * scaleFactor6alt - Xdeduction6alt, 492 * scaleFactor6alt - Ydeduction6alt);
  vertex(137 * scaleFactor6alt - Xdeduction6alt, 560 * scaleFactor6alt - Ydeduction6alt);
  vertex(661 * scaleFactor6alt - Xdeduction6alt, 559 * scaleFactor6alt - Ydeduction6alt);
  vertex(435 * scaleFactor6alt - Xdeduction6alt, 167 * scaleFactor6alt - Ydeduction6alt);
  vertex(400 * scaleFactor6alt - Xdeduction6alt, 227 * scaleFactor6alt - Ydeduction6alt);
  vertex(553 * scaleFactor6alt - Xdeduction6alt, 492 * scaleFactor6alt - Ydeduction6alt);
  endShape()

}

function Penrose7() {
  stroke(2, opacityS);
  fill(190, opacity3);
  beginShape();
  vertex(436 * scaleFactor7 - Xdeduction7, 40 * scaleFactor7 - Ydeduction7);
  vertex(360 * scaleFactor7 - Xdeduction7, 40 * scaleFactor7 - Ydeduction7);
  vertex(100 * scaleFactor7 - Xdeduction7, 492 * scaleFactor7 - Ydeduction7);
  vertex(552 * scaleFactor7 - Xdeduction7, 492 * scaleFactor7 - Ydeduction7);
  vertex(520 * scaleFactor7 - Xdeduction7, 433 * scaleFactor7 - Ydeduction7);
  vertex(212 * scaleFactor7 - Xdeduction7, 433 * scaleFactor7 - Ydeduction7);
  endShape();

  fill(255, opacity3);
  beginShape();
  vertex(438 * scaleFactor7 - Xdeduction7, 40 * scaleFactor7 - Ydeduction7);
  vertex(211 * scaleFactor7 - Xdeduction7, 433 * scaleFactor7 - Ydeduction7);
  vertex(281 * scaleFactor7 - Xdeduction7, 433 * scaleFactor7 - Ydeduction7);
  vertex(435 * scaleFactor7 - Xdeduction7, 167 * scaleFactor7 - Ydeduction7);
  vertex(661 * scaleFactor7 - Xdeduction7, 559 * scaleFactor7 - Ydeduction7);
  vertex(700 * scaleFactor7 - Xdeduction7, 492 * scaleFactor7 - Ydeduction7);
  vertex(438 * scaleFactor7 - Xdeduction7, 40 * scaleFactor7 - Ydeduction7);
  endShape();

  fill(220, opacity3);
  beginShape();
  vertex(553 * scaleFactor7 - Xdeduction7, 492 * scaleFactor7 - Ydeduction7);
  vertex(100 * scaleFactor7 - Xdeduction7, 492 * scaleFactor7 - Ydeduction7);
  vertex(137 * scaleFactor7 - Xdeduction7, 560 * scaleFactor7 - Ydeduction7);
  vertex(661 * scaleFactor7 - Xdeduction7, 559 * scaleFactor7 - Ydeduction7);
  vertex(435 * scaleFactor7 - Xdeduction7, 167 * scaleFactor7 - Ydeduction7);
  vertex(400 * scaleFactor7 - Xdeduction7, 227 * scaleFactor7 - Ydeduction7);
  vertex(553 * scaleFactor7 - Xdeduction7, 492 * scaleFactor7 - Ydeduction7);
  endShape()

}

function opacitypreset() {
  switch (presetopacitymain) {
    case "fixed":
      break;
    case "random":
      opacity = random(20, 255);
      break;
    default:
      opacity = 255;
  }

  switch (presetopacity2) {
    case "fixed":
      break;
    case "random":
      opacity2 = random(20, 255);
      break;
    default:
      opacity2 = 255;
  }

  switch (presetopacity3) {
    case "fixed":
      break;
    case "random":
      opacity3 = random(20, 255);
      break;
    default:
      opacity3 = 255;
  }

  switch (strokeopacity) {
    case "fixed":
      break;
    case "random":
      opacityS = random(100, 255);
      break;
    default:
      opacityS = 255;
  }


}

function penrosepreset() {
  switch (presetpenrose) {
    case "fixed":
      Penrose7();

      Penrose6();

      Penrose6alt();

      break;

    case "random":

      let x = random(100);
      let y = random(100);
      let z = random(100);

      if (x < 60) {
        Penrose7();
      }

      if (y < 60) {
        Penrose6();
      }

      if (z < 60) {
        Penrose6alt();
      }

      break;

    default:
      Penrose7();

      Penrose6();

      Penrose6alt();
  }
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  opacitypreset();

  PenroseMain();

  Penrose2();

  Penrose3();

  Penrose4();

  Penrose5();

  penrosepreset();

}