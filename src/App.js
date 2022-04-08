import './App.scss';
import Landing from "./components/landing/Landing";
import Page from "./components/page/Page";
import { Routes, Route } from "react-router-dom";
import UserApp from "./components/userApp/UserApp";


function Welcome() {
    return (
        <div>
            <Landing/>
            <Page/>
        </div>
    )
}

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/" element={<Welcome/>} />
                <Route path="user-app" element={<UserApp/>} />
            </Routes>
        </div>
    );
}

export default App;
