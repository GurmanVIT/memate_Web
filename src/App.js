import "../src/assets/style/Style.scss";
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from "./component/Home/Home";
import Header from "./component/Header/Header";

function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
