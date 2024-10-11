import { educationData, Type, Categories } from "../../EducationCardData/educationData";
import styles from "./educationCards.module.css";
import Card from "./singleCard";
import PageControl from "../Pagination/pageControl";
import React, {useEffect, useState} from "react";

// General call of function
function splitCardData(data, pageSize) {
    // alert(data.length);
    const resultSplitDataArray = [];
    for (let i = 0; i < data.length; i += pageSize){
        // Slice is used to cut section of array
        resultSplitDataArray.push(data.slice(i, i+pageSize))
    }
    console.log(resultSplitDataArray);
    return resultSplitDataArray;
}

const filterCardList = (tab) => {
    if (tab === "All" || !tab) {
        return educationData;
    }
    return educationData.filter((item) => item.audience === tab);
}

const checkboxFilterCardList = (filter, data) => {
    // What happens if trying to access item in empty array? 
    const filterData = data.filter((item) => 
    // Conditions are checked sequentially

    // Filter by Disease 
    (
        (filter.disease.neurofibromatosis === false) ||
        (filter.disease.neurofibromatosis === true && item.disease === "Neurofibromatosis")
    )
    &&
    // Filter by Focus (Age)
    (
        (filter.age.children === false) ||
        (filter.age.children === true && item.focus === "Children")
    )
    &&
    // Filter by NF Type
    (
        (filter.nfType.nf1===false && filter.nfType.nf2 ===false && filter.nfType.nf3 ===false) ||
        (filter.nfType.nf1===true && item.subCategories[0] === Type.NF1) || 
        (filter.nfType.nf2===true && item.subCategories[0] === Type.NF2) || 
        (filter.nfType.nf3===true && item.subCategories[0] === Type.SWN_NF3)
    )
    &&
    // Filter by Source Type
    (
        (filter.sourceType.article===false && filter.sourceType.pdf ===false && filter.sourceType.podcast ===false
        && filter.sourceType.clinicalStudy ===false && filter.sourceType.academicJournal===false) ||
        (filter.sourceType.article===true && item.subCategories[1] === Categories.Article) || 
        (filter.sourceType.pdf===true && item.subCategories[1] === Categories.PDF) || 
        (filter.sourceType.podcast===true && item.subCategories[1] === Categories.Podcast) ||
        (filter.sourceType.clinicalStudy===true && item.subCategories[1] === Categories.Clinical_Study) ||
        (filter.sourceType.academicJournal===true && item.subCategories[1] === Categories.Academic_Journal)   
    )
    )
    return filterData;
}

// Curly braces for tab
function CardList({tab, filter}) {
    
    const [currentPage, setCurrentPage] = useState(0);
    const [pageData, setPageData] = useState(
        splitCardData(checkboxFilterCardList(filter,filterCardList(tab)),12)
    );
    // const pageData = splitCardData(educationData,12);
    // let pageData = splitCardData(checkboxFilterCardList(filter,filterCardList(tab)),12);
    // Hook in React, allows you to synchronize components, each time tab changes set current page to 0 (start index)
    useEffect(
        // Anonymous function - function that doesn't have a name, cannot call elsewhere in code bc no name
        // Arrow function is anonymous function by default
        // Two parameters taken in useEffect
        // 1 - Function we want to execute 
        // 2 - Dependencies, when do we want to execute function (i.e. when tab changes)
        // Acts as a listener, when variable changes do something
        () => {
            setCurrentPage(0); 
            setPageData(
                splitCardData(checkboxFilterCardList(filter,filterCardList(tab)),12)
            );
            // Always need to be in array for second parameter
        }, [tab, filter]
    ) 
    return (
        <div>
            <div className={styles.listItem}>
                {
                    // When switch tabs need to reset current page to start index
                    // 2 equal signs vs 3 equal signs 
                    // 2 only compares only the value 
                    // 3 compares BOTH value & type (recommended)
                    // Get rid of pagination - not display when empty 
                    pageData.length === 0 ? "No cards available" : 
                    pageData[currentPage].map((item) => {
                        return ( 
                            <Card
                            audience={item.audience} 
                            subCategories= {item.subCategories} 
                            contentLink = {item.contentLink} 
                            name={item.name}
                            focus={item.focus}
                            />
                            
                        );
                    })
                }
            </div>
            <div style={{marginTop: "100px"}}>
                <PageControl
                pages={pageData}
                currentPage={currentPage}
                onPageChange={setCurrentPage}
                />
            </div>
        </div>
    );
}

export default CardList;