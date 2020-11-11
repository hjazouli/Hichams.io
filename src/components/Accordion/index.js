import React, { useState } from "react";
import { motion } from 'framer-motion'
import "./index.css"


    const Accordion = ({ data, multiple = false }) => {
        
        const [active, setActive] = useState(1);

        return (
            <div className="custom-accordion">
                <br/>
                
                {data.map((tab, idx) => (
                    <AccordionItem
                       
                        key={idx}
                        {...tab}
                        active={active === idx}
                        multiple={multiple}
                        onToggle={(e) => setActive((a) => (a === idx ? "" : idx))}
                        
                    />
                    
                ))}
            </div>
        );
    };

    const AccordionItem = ({ title, content, meda, active, multiple, onToggle }) => {
    
    
    const [visiblity, setVisiblity] = useState(false);
    const isActive = () => (multiple ? visiblity : active);
    const toogleVisiblity = () => {
        setVisiblity((v) => !v);
        onToggle();
        };

    return (
        <div className={`card ${isActive() ? "accordion-active" : ""}`}>
            <motion.div className="card-header" 
               
               whileHover={{
                     scale:1.05, 
                     textShadow : "0 10px 5px 0 rgb(255,255,255)",
                     color : "brown" ,}} 
                    
               onClick={toogleVisiblity}>
               
                {title}
                <span className="accordion-icon">
                    <svg
                                width="16"
                                height="18"
                                viewBox="0 -2 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                >
                                <path
                                    d="M7.75745 10.5858L9.17166 9.17154L12.0001 12L14.8285 9.17157L16.2427 10.5858L12.0001 14.8284L7.75745 10.5858Z"
                                    fill="#636379"
                                />
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12ZM12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21Z"
                                    fill="#636379"
                                />
                                </svg> 
                                                </span>
            </motion.div>

                    <div className="card-body">{content}</div>
                   
                    <div className="card-body">{meda}</div>
                    
        </div>
    );
};

export default Accordion;
