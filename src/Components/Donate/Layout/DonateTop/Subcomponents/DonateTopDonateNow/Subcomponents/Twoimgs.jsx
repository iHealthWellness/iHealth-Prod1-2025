//Import Libraries/Packages
import React from 'react'


//Import Styles
import "./Twoimgs.css"

function Twoimgs({donateSF,donateOM}) 
{
  return (
    <>
        <div id='Twoimgs-wrapper'>
                <img loading='lazy' width="100%" src={donateSF} alt='Donate  smiling faces picture'/>
                <img loading='lazy' width="100%" src={donateOM} alt='Donate old man picture'/>
        </div>
    </>
  )
}

export default Twoimgs