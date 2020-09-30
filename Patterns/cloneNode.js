// IDEA: VanillaJS cloneNode method is faster then createElement,
//       as it seems here - https://github.com/sophiebits/innerhtml-vs-createelement-vs-clonenode
//       so idea is prerender basic UI elements, used in project

// returns true if it is a DOM node
function isNode(o){
  return (
    typeof Node === "object" ? o instanceof Node :
    o && typeof o === "object" && typeof o.nodeType === "number" && typeof o.nodeName==="string"
  );
}
//Returns true if it is a DOM element
function isElement(o){
  return (
    typeof HTMLElement === "object" ? o instanceof HTMLElement : //DOM2
    o && typeof o === "object" && o !== null && o.nodeType === 1 && typeof o.nodeName==="string"
  );
}
// render basic DOM elements
function render(elemName, node){
  let elem = document.createElement(elemName)
  if (isElement(elem) && isNode(node)){
      node.appendChild();
  }
}
