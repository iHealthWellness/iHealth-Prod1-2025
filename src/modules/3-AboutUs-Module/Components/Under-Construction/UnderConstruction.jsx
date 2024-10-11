//Import Libraries/Packages
import React from 'react'


//Import Styles
import "./UnderConstruction.css"




function UnderConstruction() 
{



  return (
    <>
        <section id='UnderConst-wrapper'>
          <div id='UnderConst-main'>

            <div id="UnderConst-circle"> 
              <div id="UnderConst-innerCircle"></div>
              <p>Under Construction</p>
              <p>Exciting Updates Coming <br /> Soon!</p>
              <div id="UnderConst-bar"></div>

              {/* 
                As requested This under construction component will work as pop-up dialog,
                This component default has css rule display: none
                to use this component you can apply this code to button/link onClick={()=>{document.querySelector('#UnderConst-wrapper').style.display = "flex"}}
              */}

              <button onClick={
                          ()=>{document.querySelector('#UnderConst-main').style.animation = 'Disappear-animation 1s forwards 1' ;
                              setTimeout(()=>{document.querySelector('#UnderConst-wrapper').style.display = "none";
                              document.querySelector('#UnderConst-main').style.animation = 'Appear-animation 1s cubic-bezier(0.68, 0.45, 0.27, 1.55) forwards 1'},600)}}>Close</button>
            </div>
          </div>
        </section>

    </>
  )
}

export default UnderConstruction