// PascalCasing (first alphabet of the function name, should be in uper case)
function Message() {
  //How UI looks like while using this component
  // JSX: JavaScript XML
  // JSX always allows to craete dynamic content
  const name = "";
  if (name) return <h1>Hello {name} </h1>;
  return <h1>Hello World</h1>;

  //return <h1>Hello World!</h1>;
}

export default Message;

// go to app component and use this compone
// currently, we have component tree, with the App being the root and Message being a child.
// whenever, application starts, react takes this component tree and builds javascript data structure called virtual DOM.
// this is different from actual DOM browser.
