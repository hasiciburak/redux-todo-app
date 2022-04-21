import "./App.css";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";
import React from "react";

function App() {
    return (
        <>
            <section className="todoapp">
                <Header/>
                <Content/>
            </section>
            <Footer/>
        </>
    );
}

export default App;
