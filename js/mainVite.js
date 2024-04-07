import { gsap } from "gsap";

let svgContainer = document.getElementById("svgContainer");
let root = "";
root = "YouTube";
root = "Circle";
root = "GuyGuzman";
let svgObjectId = `svgObject${root}`;
let svgClipPathId = `svgClipPath${root}`;
console.log(svgObjectId);
console.log(svgClipPathId);
let svgObject = document.getElementById(svgObjectId);
let clipPath = document.getElementById(svgClipPathId);
let right = document.getElementById("right");
let ratioContainer;
let svgRatio;
let svgX;
let svgY;
let svgWidth;
let svgHeight;

window.onload = function () {
  svgContainer.style.clipPath = `url(#${svgClipPathId})`;
  adjustSVG(svgContainer, svgObject);
  gsap.to(right, { backdropFilter: blur(10), duration: 1 });
};

function adjustSVG(svgContainer, svg) {
  let boundingRect = svgContainer.getBoundingClientRect();
  ratioContainer = boundingRect.width / boundingRect.height;
  let bbBox = svg.getBBox();
  svgX = bbBox.x;
  svgY = bbBox.y;
  svgWidth = bbBox.width;
  svgHeight = bbBox.height;
  svgRatio = svgWidth / svgHeight;
  let translateX = svgX * -1;
  let translateY = svgY * -1;
  let translateScale = `translate(${translateX} ${translateY})`;

  if (boundingRect.width / boundingRect.height >= svgWidth / svgHeight) {
    let scale = boundingRect.height / svgHeight;
    translateX = translateX * scale;
    translateY = translateY * scale;
    translateScale = `translate(${translateX} ${translateY}) scale(${scale})`;
    svgContainer.style.width = svgRatio * boundingRect.height + "px";
  } else {
    let scale = boundingRect.width / svgWidth;
    translateX = translateX * scale;
    translateY = translateY * scale;
    translateScale = `translate(${translateX} ${translateY}) scale(${scale})`;
    console.log(svgRatio);
    svgContainer.style.height = boundingRect.width / svgRatio + "px";
  }

  clipPath.setAttribute("transform", translateScale);
  console.log(boundingRect);
  console.log(bbBox);
  console.log(translateScale);
}

function setViewBoxClipPathScale(svgId, clipPathId) {
  const currentSVG = document.getElementById(svgId);
  const currentClipPath = document.getElementById(clipPathId);
  const lowermin = 0.00001;

  let bbox = currentSVG.getBBox();
  let x = bbox.x;
  let y = bbox.y;
  let width = bbox.width;
  let height = bbox.height;
  let scaleX = 1 / width;
  let scaleY = 1 / height;
  let absX = Math.abs(x);
  let absY = Math.abs(y);
  if (absX < lowermin) x = 0;
  if (absY < lowermin) y = 0;
  let translateX = 0;
  let translateY = 0;
  translateX = x * -1;
  translateY = y * -1;

  const viewbox = `${x} ${y} ${width} ${height}`;
  const scale = `scale(${scaleX} ${scaleY})`;
  const translate = `translate(${translateX} ${translateY})`;

  currentSVG.setAttribute("viewBox", viewbox);
  currentClipPath.setAttribute("transform", scale);
}

function svgResetOrigin(svgId, targetId) {
  const currentSVG = document.getElementById(svgId);
  const target = document.getElementById(targetId);
  const lowermin = 0.00001;

  let bbox = currentSVG.getBBox();
  let x = bbox.x;
  let y = bbox.y;
  let width = bbox.width;
  let height = bbox.height;
  let scaleX = 1 / width;
  let scaleY = 1 / height;
  let absX = Math.abs(x);
  let absY = Math.abs(y);
  if (absX < lowermin) x = 0;
  if (absY < lowermin) y = 0;
  let translateX = 0;
  let translateY = 0;
  translateX = x * -1;
  translateY = y * -1;

  const translate = `translate(${translateX} ${translateY})`;

  target.setAttribute("transform", translate);
}

function setViewBox(svgId) {
  const currentSVG = document.getElementById(svgId);
  const lowermin = 0.00001;

  let bbox = currentSVG.getBBox();
  let x = bbox.x;
  let y = bbox.y;
  let width = bbox.width;
  let height = bbox.height;
  let scaleX = 1 / width;
  let scaleY = 1 / height;
  let absX = Math.abs(x);
  let absY = Math.abs(y);
  if (absX < lowermin) x = 0;
  if (absY < lowermin) y = 0;

  const viewbox = `${x} ${y} ${width} ${height}`;
  const scale = `scale(${scaleX} ${scaleY})`;

  currentSVG.setAttribute("viewBox", viewbox);
}
