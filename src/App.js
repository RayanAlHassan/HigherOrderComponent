import "./App.css";
import ClickCounter from "./component/ClickCounter";
import HoveCounter from "./component/HoveCounter";
import MyComponent from "./component/MyComponent";

function App() {
  return (
    <div>
      <MyComponent />
      <ClickCounter />
      <HoveCounter />
    </div>
  );
}

export default App;
