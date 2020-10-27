import React from "react";
import './App.css';
import {library} from '@fortawesome/fontawesome-svg-core'
import {faCheckSquare, faCoffee, faTimes, faCog} from '@fortawesome/free-solid-svg-icons'
import CollapsibleTable from "../features/Table";
import {Header} from "../features/Header/Header";
import {Contacts} from "../features/Contacts/Contacts";

library.add(faCheckSquare, faCoffee, faTimes, faCog)

function App() {
    return (
        <div>
            {/*<CollapsibleTable />*/}
            <Header/>
            <Contacts/>
            {/*<Contacts />*/}
        </div>
    );
}

export default App;
