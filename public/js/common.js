export function adjustWidthHeight() {
  setWidthHeight();
  window.addEventListener("resize", () => {
    setWidthHeight();
  });
}

export function setWidthHeight() {
  let windowInnerWidth = window.innerWidth;
  let windowInnerHeight = window.innerHeight;
  let elementClientWidth = document.documentElement.clientWidth;
  let elementClientHeight = document.documentElement.clientHeight;
  let elementOffsetWidth = document.documentElement.offsetWidth;
  let elementOffsetHeight = document.documentElement.offsetHeight;

  let vh = windowInnerHeight * 0.01;
  document.documentElement.style.setProperty("--vh", `${vh}px`);
  let vw = elementClientWidth * 0.01;
  document.documentElement.style.setProperty("--vw", `${vw}px`);
}
