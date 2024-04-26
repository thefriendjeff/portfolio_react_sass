import MainContent from "./components/MainContent";
import Sidebar from "./components/Sidebar";

import "./style/components/app.sass";

<meta name="viewport" content="width=device-width, initial-scale=1.0"/
>

function App() {
  return (
    <div id="portfolio">
      <h1>Jefferson Sena</h1>
      <Sidebar />
      <MainContent />
    </div>
  );
}

export default App;
