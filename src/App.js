import "./App.css";

import Home from "./components/home";
import SiteProvider from "./components/context/Context";
function App() {
  return (<SiteProvider>
    <Home />
  </SiteProvider>);
}
export default App;
