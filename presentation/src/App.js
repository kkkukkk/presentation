import './App.css';
import { Route, Routes } from "react-router-dom";
import Layout from "./component/common/Layout";
import Main from "./component/main/Main";
import SignUp from "./component/signup/SignUp";

function App() {
    return (
        <div className="App">
            <Layout>
                <Routes>
                    <Route path={"/"} element={<Main />}></Route>
                    <Route path={"/signup"} element={<SignUp />}></Route>
                </Routes>
            </Layout>
        </div>
    );
}

export default App;
