import { useState, useRef, useEffect } from "react";
import "./index.css";

import img4 from "src/Assets/Images/finance.png";
import img5 from "src/Assets/Images/bar.png";
import img6 from "src/Assets/Icons/Vector1.png";
import img7 from "src/Assets/Icons/Vector2.png";
import img8 from "src/Assets/Icons/Vector3.png";
import img9 from "src/Assets/Icons/Vector4.png";
import img10 from "src/Assets/Icons/Vector5.png";
import img11 from "src/Assets/Icons/Vector6.png";
import img12 from "src/Assets/Icons/Vector7.png";
import img13 from "src/Assets/Icons/Vector8.png";
import img14 from "src/Assets/Icons/Vector9.png";
import img17 from "src/Assets/Images/pie-chart2.png";
import img18 from "src/Assets/Images/pie-chart3.png";


const Finance = () => {
    const divRef = useRef(null);
    const divTwoRef = useRef(null);


    const [isVisible, setIsVisible] = useState({
        divRef: false,
        divTwoRef: false,


    });


    useEffect(() => {
        const handleScroll = () => {

            applyVisibleEffect(divRef, "divRef");
            applyVisibleEffect(divTwoRef, "divTwoRef");
        }
        const applyVisibleEffect = (div, key) => {
            if (div.current) {
                const rect = div.current.getBoundingClientRect();
                const windowHeight =
                    window.innerHeight || document.documentElement.clientHeight;

                if (rect.top <= windowHeight && rect.bottom >= 0) {
                    setIsVisible((prevState) => ({

                        ...prevState,
                        [key]: true
                    }));

                } else {
                    setIsVisible((prevState) => ({

                        ...prevState,
                        [key]: false
                    }));
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);




    return (
        <section id="Finance" className="finance-page ">

            <div className="container">
                <div className="financial-analysis-tab">
                        <div className="trans-Image">
                            <img src={img4} className="trans-Image-src" alt="Financial-Transparency" />
                            <h3 className="text-finance">Financial Transparency</h3>
                        </div>
                    <div className="financial-outline"> 
                        <h2>Revenue Generation</h2>
                        <h4>Our revenue is generated through the following business activities.</h4>  
                    </div>
                </div>
            </div>


            <div className={`trans-outline ${isVisible.divRef ? "slide-in" : ""}`}
                ref={divRef}>
                <div className="grid-outline">
                    <div className="grid">
                        <img src={img6} className="grid1" alt="tag1" />
                        <p className="grid2">Donation</p>
                    </div>
                    <div className="grid">
                        <img src={img7} className="grid1" alt="tag2" />
                        <p className="grid2">Licensing Fees</p>
                    </div>
                    <div className="grid">
                        <img src={img8} className="grid1" alt="tag3" />
                        <p className="grid2">Research Partnerships</p>
                    </div>
                    <div className="grid">
                        <img src={img9} className="grid1" alt="tag4" />
                        <p className="grid2">Data Analytics</p>
                    </div>
                    <div className="grid">
                        <img src={img10} className="grid1" alt="tag5" />
                        <p className="grid2">Consulting Services</p>
                    </div>
                    <div className="grid">
                        <img src={img11} className="grid1" alt="tag6" />
                        <p className="grid2">Advertising and Sponsorship</p>
                    </div>
                    <div className="grid">
                        <img src={img12} className="grid1" alt="tag7" />
                        <p className="grid2">Patient Advocacy Services</p>
                    </div>
                    <div className="grid">
                        <img src={img13} className="grid1" alt="tag8" />
                        <p className="grid2">Subscription Fees</p>
                    </div>
                    <div className="grid">
                        <img src={img14} className="grid1" alt="tag9" />
                        <p className="grid2">Booking Fees</p>
                    </div>
                </div>
                <div className="grid-analysis">
                    <img src={img5} alt="bar-chart" />
                </div>
            </div>





            <div className={`chart-analysis-tab ${isVisible.divTwoRef ? "slide-in" : ""}`}
                ref={divTwoRef}>
                <div>
                    <h2>Expenses</h2>
                    <div className="sp">
                    <img src={img17} className="analysis-img" alt="pie-chart" /> 
                    </div>
                    </div>
                <div>
                    <h2>Projected Revenue Streams</h2>
                    <img src={img18} className="analysis-img" alt="chart1" />
                </div>
            </div>



        </section>

    )
}
export default Finance;
