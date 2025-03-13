import React, { useState, useRef, useEffect } from "react";
import "./Pro.css";

export const Pro = () => {
    const categories = [
        "TANDOORI STARTERS", "SOUP", "STARTERS", "MANCHURIAN",
        "BIRYANI", "PULAV", "GRAVY", "CHINESE", "TANDOORI BREADS",
        "DOSA", "COFFEE & TEA", "RAITHA", "ICE CREAMS", "SODA",
        "JUICE", "MILK SHAKE"
    ];

    const [activeCategory, setActiveCategory] = useState("All");
    const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });
    const categoryRefs = useRef([]);

    useEffect(() => {
        const activeElement = categoryRefs.current.find((el) => el?.innerText === activeCategory);
        if (activeElement) {
            setIndicatorStyle({
                left: activeElement.offsetLeft,
                width: activeElement.offsetWidth
            });
        }
    }, [activeCategory]);

    return (
        <div className="container">
            {/* Original Banner Section */}
            <div className="banner">
                <div className="img">
                    <img src="https://lh3.googleusercontent.com/p/AF1QipO1OuCJF_hSEswZdSexCvNvGBIRAU6B4nVTfNeh=s1360-w1360-h1020" alt="Restaurant" />
                </div>
                <div className="hname">Bharjari Bhojana</div>
                <div className="mini">B w 6th & 7th cross, Sampige Rd, Sangeetha Apts, Malleshwaram, Bengaluru, Karnataka 560003</div>
            </div>

            {/* Category Section */}
            <div className="category-container">
                <button
                    className={`category sticky ${activeCategory === "All" ? "active" : ""}`}
                    onMouseEnter={() => setActiveCategory("All")}
                >
                    All
                </button>

                <div className="scroll-container">
                    {categories.map((category, index) => (
                        <button
                            key={index}
                            ref={(el) => (categoryRefs.current[index] = el)}
                            className={`category ${activeCategory === category ? "active" : ""}`}
                            onMouseEnter={() => setActiveCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                    {/* Scroll Indicator */}
                    <div className="scroll-indicator" style={indicatorStyle}></div>
                </div>
            </div>
        </div>
    );
};

export default Pro;


