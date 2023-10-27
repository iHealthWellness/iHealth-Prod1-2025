import React from 'react'
import CircleImages from 'src/Components/LivingwithNF/CircleImages/index'
import NFHeading from 'src/Components/LivingwithNF/Heading/index'
import  UnderstandingNF from 'src/Components/LivingwithNF/UnderstandingNF/index'
import TabComponent from 'src/Components/LivingwithNF/UnderstandingNF/Tabcomponent/index'
import CausesAspects from 'src/Components/LivingwithNF/Causes-Aspects/index'
function index() {
  return (
    <div>
        <CircleImages/>
        <NFHeading/>
        <UnderstandingNF/>
        <TabComponent/>
        <CausesAspects/>
    </div>
  )
}

export default index