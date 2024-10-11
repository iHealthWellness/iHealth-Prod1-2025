import React, { useEffect } from 'react'



function ObvserverFunc(leftArticle,rightArticle,options) 
{


    function handleIntersection(entries) 
    {
        entries.map((entry) => {
          if (entry.isIntersecting) 
          {
            
            if(entry.target.id == "beforeanimationright")
            {
                /* const newspaperSpinning = [{ transform: "translateX(0) translateY(-87px)" },];
                const newspaperTiming = {duration: 2000,iterations: 1,};

                entry.target.animate(newspaperSpinning, newspaperTiming);
                setTimeout(() => {entry.target.style.transform ="translateX(0) translateY(-87px)"}, 2000); */
                
                //ntry.target.classList.add('slideDaninRight')
                entry.target.setAttribute('id','slideDaninRight')
            }
            
            if(entry.target.id == "beforeanimationleft")
            {
                /* const newspaperSpinning = [{ transform: "translateX(0) translateY(-87px)" },];
                const newspaperTiming = {duration: 2000,iterations: 1,};
                
                entry.target.animate(newspaperSpinning, newspaperTiming);
                setTimeout(() => {entry.target.style.transform ="translateX(0) translateY(-87px)"}, 2000); */
                
                //entry.target.classList.add('slideDaninLeft')
                entry.target.setAttribute('id','slideDaninLeft')
            }
          } 
        });
      }


    useEffect(() => 
    {   
        //Put all elements in an Array
        const ArrayOfElements = [leftArticle.current,rightArticle.current]
        //Native Js method when element enters the viewport
        const observer = new IntersectionObserver(handleIntersection,options);

        //If elements are reachable start observing them 
        if(leftArticle.current){ArrayOfElements.map(arg =>{observer.observe(arg);})}
        
        //General rule as stop/clear action/eventlistener/timing when component dismounts
        return () => {if(leftArticle.current){ArrayOfElements.map(arg =>{observer.unobserve(arg);})}}

    }, [leftArticle.current])



}

export default ObvserverFunc