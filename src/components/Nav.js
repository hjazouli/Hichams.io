import React from 'react'
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'
import { motion } from 'framer-motion'



const Nav = (props) => (
    <motion.nav id="nav" className={props.sticky ? 'alt' : ''}  whileHover={{Scale: 1.2,}}>
        <Scrollspy items={ ['intro', 'first', 'second','cta','last'] }   currentClassName="is-active" offset={-300}>
            <li>
                <Scroll type="id" element="intro">
                    <a href="#">Portrait et Vision</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="first" >
                    <a href="#">Expériences Professionnelles</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="second">
                    <a href="#">Domaines de Compétence</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="cta">
                    <a href="#">Formation</a>
                </Scroll>
            </li>
            <li>
                <Scroll type="id" element="last">
                    <a href="#">Contactez Moi</a>
                </Scroll>
            </li>
        </Scrollspy>
    </motion.nav>
)

export default Nav
