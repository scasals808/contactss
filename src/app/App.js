import React from "react";
import './App.css';
import {Header} from "../features/Header/Header";
import {Contacts} from "../features/Contacts/Contacts";

function App() {
    return (
        <div>
            <Header/>
            <Contacts/>
        </div>
    );
}

export default App;
