import "./assets/css/reset.css"
import Header from "./components/Header/Header"
import Content from "./components/Content/Content"
import Drawer from "./components/Drawer/Drawer"
function App() {
  return (
    <div className="wrapper">
        <Drawer/>
        <Header/>  
        <Content/>
    </div>
  );
}

export default App;
