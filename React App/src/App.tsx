import { useState } from "react";
import Button from "./components/ Button";
import Alert from "./components/Alert";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        My button
      </Button>
    </div>
  );
}

export default App;

// import Alert from "./components/Alert";

//function App() {
// return (
//<div>
//<Alert>
// Hello <span>World</span>
//</Alert>
//</div>
// );
//}

//export default App;

// delete everything and craete new component
//import Message component
//import Message from "./message";
// Don't need message component anymore
//let items = [
// "New York",
// "San Francisco",
// "Tokyo",
// "Los Angeles",
// "London",
// "Paris",
//];
//const handleSelectItem = (item: string) => {
//console.log(item);
//};
// return ()
//<ListGroup !>
//  items={items}
// heading="Cities"
// onSelectItem={handleSelectItem}
///>
//</div>
// export app component, it can be use somewhere else
