import { Link } from 'gatsby'
import React from 'react'

const Footer = props => (
  
  <footer id="footer">
    
    <section>
      <p><strong>Une opportunité à me proposer ?</strong><br/>
      N'hesitez pas à me contacter si mon profil vous intéresse. Je peux me rendre disponible pour en discuter.<br/>

      </p>
    
      
      <Link  href="mailto:in.jazouli@gmail.com" className="ifde">
                          Click & Mail me
                        </Link>
        
      
    </section>
    <section>
    <p><strong>Au plaisir d'échange ! </strong></p>
      <dl className="alt">
        <dt>N° Téléphone :</dt>
        <dd>(212) 665-856018</dd>
        <dt>Boite E-mail :</dt>
        <dd>
          <a href="mailto:in.jazouli@gmail.com">in.jazouli@gmail.com</a>
        </dd>
      </dl>
      <ul className="icons">
        <br/>
        <li>
          <a
            href="https://www.linkedin.com/in/hjazouli/"
            className="icon fa-linkedin alt"
            alt="Compte Linkedin Personnel"
          >
            <span className="label">Linkedin</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/hjazouli"
            className="icon fa-github alt"
          >
            <span className="label">GitHub</span>
          </a>
          
        </li>
        <li>
          <a href="https://twitter.com/j_hichaam" className="icon fa-twitter alt">
            <span className="label">Twitter</span>
          </a>
        </li>
      </ul>
    </section>
    <p className="copyright">
      &copy; Designed by <a href="https://linkedin.com/in/hjazouli">Hicham</a>.
    </p>
  </footer>
)

export default Footer
