import React from "react";
import "./Portfolio.css";

import ItemPortfolio from "../itemPortfolio/ItemPortfolio";

import portfolio from "./Portfolio.json"


function Portfolio() {


    return (
        <main>


           {portfolio.map(
                (item, index) => 
                <ItemPortfolio
                    key={index}
                    link={item.link}
                    image={item.image + (index + 1)}
                    title={item.title + (index + 1)}
                ></ItemPortfolio>

           )}
    

        </main>


    )


}

export default Portfolio;