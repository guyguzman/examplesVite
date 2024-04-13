export function elementPosition(element) {
  const dimensions = {};
  //   let elementObject = $(element)[0];

  let elementParent = element.parentNode;
  var elementBoundingBox = element.getBoundingClientRect();
  var elementParentBoundingBox = elementParent.getBoundingClientRect();

  dimensions.windowInnerWidth = window.innerWidth;
  dimensions.windowInnerHeight = window.innerHeight;
  dimensions.elementClientWidth = document.documentElement.clientWidth;
  dimensions.elementClientHeight = document.documentElement.clientHeight;
  dimensions.elementOffsetWidth = document.documentElement.offsetWidth;
  dimensions.elementOffsetHeight = document.documentElement.offsetHeight;
  dimensions.browserWidth = dimensions.elementClientWidth;
  dimensions.browserHeight = dimensions.windowInnerHeight;
  //   dimensions.boxSizing = $(element).css("box-sizing"); //box-sizing
  dimensions.boxSizing = getComputedStyle(element).boxSizing;
  dimensions.parentWidth = elementParentBoundingBox.width;
  dimensions.parentHeight = elementParentBoundingBox.height; //box-sizing
  dimensions.parentCenterX =
    dimensions.parentWidth / 2 - elementBoundingBox.width / 2; //center from left
  dimensions.parentCenterY =
    dimensions.parentHeight / 2 - elementBoundingBox.height / 2; //center from top
  dimensions.x = elementBoundingBox.x;
  dimensions.y = elementBoundingBox.y;
  dimensions.left = elementBoundingBox.left;
  dimensions.right = elementBoundingBox.right;
  dimensions.top = elementBoundingBox.top;
  dimensions.bottom = elementBoundingBox.bottom;
  dimensions.width = element.offsetWidth;
  dimensions.height = element.offsetHeight;
  dimensions.offScreenLeft = 0 - dimensions.width;
  dimensions.offScreenTop = 0 - dimensions.height;
  dimensions.offScreenRight = dimensions.parentWidth;
  dimensions.offScreenBottom = dimensions.parentHeight;
  dimensions.screenLeftEdge = 0;
  dimensions.screenTopEdge = 0;
  dimensions.screenRightEdge = dimensions.browserWidth - dimensions.width;
  dimensions.screenBottomEdge = dimensions.browserHeight - dimensions.height;
  dimensions.elementObject = element;
  return dimensions;
}
