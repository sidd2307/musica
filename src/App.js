import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Page from "./pages/Page";

function App() {
  return (
    <div className="relative h-screen max-h-screen">
      <div className="bg-black absolute text-white top-0 flex flex-row">
        <div className="flex flex-col justify-start fixed">
          <span className="text-yellow-300 m-4">a</span>
          <span className="text-yellow-300 m-4">a</span>
          <span className="text-yellow-300 m-4">a</span>
          <span className="text-yellow-300 m-4">a</span>
        </div>
        <div className="w-[97%] ml-[3%] flex flex-col">
          <div className="h-[10%] text-green-400 fixed bg-black w-[100%]">
            a
          </div>
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
      <div className="backdrop-blur-xl z-10 bottom-[10px] fixed">
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