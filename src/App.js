import Professional from "./components/professional/Professional";
import Gamified from "./components/gamified/Gamified";
import Divider from "./components/Divider/Divider";

import "./components/Divider/Divider.css";
import "./App.css";
import "./style/panel.css";

function App() {
  return (
    <div className="layout">
      <Professional />
      <Divider />
      <Gamified />
    </div>
  );
}

export default App;
