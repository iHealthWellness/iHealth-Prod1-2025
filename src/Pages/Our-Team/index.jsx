//Import Libraries/Packages
import React from "react";

//Import Components
import Hero from "src/Components/Team-Layout/Hero/Hero";
import Board from "src/Components/Team-Layout/Board/Board";

import "./index.css";
import ToTopBtn from "src/Components/About-Page-Layout/TotopBtn";

const index = () => {
    return (
        <div >
            <Hero />
            <Board />
            <ToTopBtn />
        </div>
    );
};

export default index;
