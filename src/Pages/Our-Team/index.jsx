//Import Libraries/Packages
import React from "react";

//Import Components
import Hero from "src/Components/Team-Layout/Hero/Hero";
import Board from "src/Components/Team-Layout/Board/Board";
import TeamMember from "src/Components/Team-Layout/TeamMembers/TeamMember";
import "./index.css";
import ToTopBtn from "src/Components/About-Page-Layout/TotopBtn";

const index = () => {
    return (
        <div >
            <Hero />
            <Board />
            <TeamMember />
            <ToTopBtn />
        </div>
    );
};

export default index;
