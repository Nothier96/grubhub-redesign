import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Contactpage from "./pages/Contactpage";
import Orderpage from "./pages/Orderpage";
import SignInpage from "./pages/SignInpage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />}/>
        <Route path="/signin" element={<SignInpage />}/>
        <Route path="/order" element={<Orderpage />}/>
        <Route path="/contact" element={<Contactpage />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
