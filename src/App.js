import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import NavBar from "./components/NavBar";
import Search from "./components/Search";
import Home from "./pages/Home";
import Page from "./pages/Page";

function App() {
  return (
    <div className="relative h-screen max-h-screen">
      <div className="bg-[#1D2123] absolute text-white top-0 flex flex-row">
        <NavBar />
        <div className="ml-[70px] flex flex-col">
          <Search />
          <div className="h-[90%]">
            <BrowserRouter>
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/page' element={<Page />} />
              </Routes>
            </BrowserRouter>
          </div>
        </div>
      </div>
      <div className="backdrop-blur-xl z-10 bottom-[10px] fixed h-[125px]">
        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
      </div>
    </div>
  );
}

export default App;

{/* <BrowserRouter>
<Routes>
  <Route path='/' element={<Home />} />
</Routes>
</BrowserRouter> */}