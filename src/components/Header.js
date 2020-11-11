import React from 'react';
import { motion } from "framer-motion";
import logo from '../assets/images/logo.svg';
import Blink from 'react-blink-text';


     
const Header = (props) => (
    <header id="header" className="alt">
        <motion.span className="logo" 
        whileHover={{
          scale:1.5, 
          textShadow : "0 10px 5px 0 rgb(255,255,255)",
          color : "Black" ,
         
         }}
      
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 360, 360, 0],
          borderRadius: ["20%", "20%", "50%", "50%", "20%"],
        }}> 

        <img src={logo} alt="" /> </motion.span>
        
        
       
        <Blink color='white' text='Get In touch with me !' fontSize='2em'>
        </Blink> 

            
          

        <app />
        <motion.buttona 
        whileHover={{ scale:1.05 , 
          textShadow : "0 10px 5px 0 rgb(255,215,255)",
          color : "Black" ,}}>
        <strong>Ingénieur d’état en Électromécanique | Conception Fonctionnelle | Contrôle et Commande</strong> 
        </motion.buttona>
        <br /> <br /><br />
       
        <p>
         Agé de 23 ans, je suis un ingénieur d'état de l'Ecole Nationale Supériere des Mines de Rabat,
         Filière Electromécanique promotion Juillet 2020. Motivé, sérieux apte à fournir des prestations de
         haut niveau. Compétent pour examiner le budget d'un projet, effectuer des essais de systèmes et de
         composants et évaluer les données d'essais pour tirer des conclusions. Capable de créer des rapports
         d'état et de documentation présentant les processus.
         </p>
   </header>
)

export default Header
