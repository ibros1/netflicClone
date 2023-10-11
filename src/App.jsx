import { BrowserRouter, Routes, Route} from "react-router-dom";
import Browse from "./pages/Browse"
import Home from"./pages/Home";
import List from"./pages/List";
import Login from "./pages/LoginPage";
import Signup from "./pages/Signup";
import Movies from "./pages/Movies"
function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Browse" element={<Browse />} />
                <Route path="/list" element={<List />} />
                <Route path="/login" element={<Login />} />
                <Route path="/login" element={<Movies />} />
                <Route path="/signup" element={<Signup />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;

