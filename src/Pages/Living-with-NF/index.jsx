import React from 'react'
import CircleImages from 'src/Components/LivingwithNF/CircleImages/index'
import NFHeading from 'src/Components/LivingwithNF/Heading/index'
import  UnderstandingNF from 'src/Components/LivingwithNF/UnderstandingNF/index'
import TabComponent from 'src/Components/LivingwithNF/UnderstandingNF/Tabcomponent/index'
function index() {
  return (
    <div>
        <CircleImages/>
        <NFHeading/>
        <UnderstandingNF/>
        <TabComponent/>
        
    </div>
  )
}

export default index