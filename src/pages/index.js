import { Link } from 'gatsby'
import React from 'react'


import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'
import pic01 from '../assets/images/pic01.jpg'
import { motion } from 'framer-motion'
import pfe from '../assets/images/pfe.svg'
import INI from '../assets/images/INI.svg'
import PFA from '../assets/images/PFA.svg'
import Lampe from '../assets/images/Lampe.svg'
import Lampee from '../assets/images/Lampee.svg'
import CPGE from '../assets/images/CPGE.svg'

import College from '../assets/images/College.svg'
import Header from '../components/Header'
import Layout from '../components/layout'
import Nav from '../components/Nav'



import Accordion from "../components/Accordion/index"
import Accordiom from "../components/Accordiom/index"
import "../components/Accordion/index.css"
import "../components/Accordiom/index.css"








const AccordionData = [
  {
      title: "Ecole Nationale Superieure des Mines Rabat  des Mines  ",
      
      content: "L'option Electromécanique et Maintenance Industrielle est conçue pour former des ingénieurs spécialisés dans les domaines de l'informatique électrique, mécanique, automatique et industrielle. Le contenu de la formation assure une certaine polyvalence permettant à ces ingénieurs d'être immédiatement opérationnels en milieu industriel. En tant qu'ingénieur de cette branche, je pourrai exercer ma profession de: Ingénieur recherche et développement, Ingénieur en production. (À long terme) Chef de projet dans des sociétés d'ingénierie. (À long terme) En tant que lauréat de cette branche, je suis qualifié pour des emplois dans des domaines combinant électricité, électronique, automatisme et mécanique.",
      
      meda :   <img src={College} alt="ENIM ma chère école" /> ,    
        },
 
];

const AccordionData2 = [
  {
      title: "Classes Préparatoires aux Grandes Ecoles   -  [ ie CPGE ]                ",
      content: "L'objectif de la formation aux classes préparatoires TSI est de permettre aux étudiants de sculpter leur esprit analytique et critique, leur permettant d'intervenir sur des systèmes multi-technologies à haute valeur industrielle. Ce programme a été conçu pour permettre à ses lauréats de traiter un large éventail d'applications de ces systèmes dont la technologie dépend essentiellement de l'industrie électrique (modélisation, analyse et contrôle). Il leur permet également d'intervenir dans la mise en œuvre, la gestion et la maintenance de ces systèmes.",
      meda :   <img src={CPGE} alt=""  /> ,    
        },
 
];

const AccordiomData3 = [
  {
      title: "Projet de Fin d'Etudes",
      content: "Il s'agit d'un projet d'ingénierie en phase d'étude pour la construction d'une unité de production au profit de l'OCP. Mes missions étaient de contribuer avec une équipe dynamique pour :  Élaborer les livrables d'ingénierie relatifs à l'instrumentation de l'unité en phase d'étude. Concevoir puis  recommander une architecture pour le contrôle et commande, en s'appuyant sur des projets antérieurs. Conscients de la difficulté rencontrée par l'ensemble de l'équipe du projet dans le choix des instruments de terrain pour l'unité de production, Nous sommes convenus à : Concevoir puis développer une application sous Excel VBA, qui permettra de standardiser le choix des instruments, et par conséquence réduire le temps dédié au choix manuel reposant essentiellement sur l'expertise des membres de l'équipe.",
      meda : " Ingénieur Stagiaire en Instrum. & Controle" 
       
        },
 
];

const AccordiomData4 = [
  {
      title: "Projet de Formation",
      content: "La société JACOB DELAFON MAROC, vise à instaurer une politique pour améliorer la performance de ses ressources matérielles. Dans ce cadre, ce projet est mené dans le but de réduire les temps d’arrêts relatifs aux changements de certains outils des machines. La solution dans une grande échelle est de mettre en place un banc d'essai pour les tests. Mon rôle est plus particulièrement de concevoir le programme de la machine en s'appuyant sur les données du fournisseur. Mes missions étaient de : Mesurer l’écart entre l’existant actuel et l’objectif, en se basant sur des indicateurs de performance , pour quantifier les pertes. Élaborer le programme de commande de la machine, à l'appui des catalogues du fornisseur. Choix puis configuration de l'automate, compte tenu des entrées/sorties et les protocoles de communication. Puis implémentation sous TIA PORTAL pour vérifier puis valider la solution développée.",
      meda : " Ingénieur Stagiaire en Production"   
        },
 
];

const AccordiomData5 = [
  {
      title: "Projet d'initiation",
      content: "En tant que stagiaire au sein de l'Office National de l'Electricité [ONE], j'ai mené une mission au sein de l'unité de distributation régionale, consistant à comprendre la hiérarchie du réseau de distribution urbain , partant d'une unité de production locale vers le consommateur final en HT ou BT. Par ailleurs, le deuxième volet consiste à assister et contribuer à la mise en place d'un mode opératoire pour la prestation de coupure Haute Tension & Basse Tension. ",
      meda : " Stagiaire Unité Distribution"     
         
        },
 
];



class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }


  render() {
    return (
      <Layout>
        <Helmet title="Hicham's Resume" />

        <Header />
        <div id="root"></div>
       
        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />



        <div id="main">
          
          <section id="intro" className="main">
            <div className="spotlight">

                  <div className="content">
                    <header className="major">
                    <motion.div initial="hidden" animate="visible" variants={{
                        hidden:{
                          Scale: .8,
                          Opacity: 0,},
                        
                          Visibile: {
                          scale: 1,
                          opacity: 1,
                          transition: {
                            delay: .4
                          }
                        }
                      }}>
    
                      <h2>Une passion pour les technologies de pointe</h2>
                      </motion.div>
                    </header>
                    <motion.span className="image" whileHover={{ scale:1.1}}>
                    <img src={pic01} alt="" text="ANA"/> 
                    </motion.span>
                    <motion.span className="imagea" whileHover={{ scale:1.1}}>
                    <img src={Lampe} alt="" text="ANA"/> 
                    </motion.span>
                    
                   
                    <p>
                    La vocation industrielle du Maroc est en train de se confirmer. Le plan d’accélération industrielle 
                    a en effet donné un nouvel élan  à des secteurs hautement stratégiques. L’ambition est de porter
                    de 14 à 23% la contribution de l’industrie au PIB à l’horizon 2020. «Le rééquilibrage de la balance
                    commerciale, l’accompagnement de l’informel vers le secteur formel, le gain en compétitivité chez les
                    PME ou encore atteindre une réelle intégration à l’international. Pour réaliser ces objectifs, la tutelle
                    a enclenché, en l’espace de deux ans, la structuration de six secteurs d’activité par un contrat performance,
                    notamment  l’automobile, l’aéronautique, les poids lourds & carrosserie, le  textile, le cuir, la chimie, 
                    les matériaux de construction et la pharmacie.a enclenché, en l’espace de deux ans, la structuration de six secteurs d’activité par un contrat performance,
                    notamment  l’automobile, l’aéronautique, les poids lourds & carrosserie, le  textile, le cuir, la chimie, 
                    les matériaux de construction et la pharmacie.a enclenché, en l’espace de deux ans. <motion.span className="quota" whileHover={{ scale:1.1}}>
                    <img src={Lampee} alt="" text="ANA"/> 
                    </motion.span>
                    <br/>
                    <h6><i><br/>Extrait d'un article de Amine ATER | L'économiste | Edition N°:4738</i></h6>
                    
                    
                
                </p>
                
                <a href="https://www.leconomiste.com/article/995717-automobile-aeronautique-les-bons-eleves-de-l-industrie" className="button special" > Lire l'article </a>

                   
              </div>
              
              
            
            </div>
          </section>



          <section id="first" className="main special">
            <header className="major">
              <h2>Expériences Professionnelles :</h2></header>
            <h6>
             Dans mon parcours académique j'ai pu accumuler des expériencess professionnelles intéressantes, diversifiées, dans plusieurs domaines
             d'industrie. Ces premières expériences m’ont permis de développer mon esprit d’analyse et de synthèse, qui me permet d’identifier et de résoudre les problèmes de manière efficace, et d’apporter mon expertise dans le domaine.
             J’ai pu ainsi affûter mon esprit d’analyse, mon sens de rigueur et ma prise de recul, qui constituent des atouts vitaux pour le métier de l’ingénieur.</h6>
             
            <ul className="features">
              
              <li>

              <motion.span className="pfe" whileHover={{ scale:5}}>
                <img src={pfe} alt="hadadad" />   
              </motion.span>
                      
                      <h3>Jacobs Engineering JESA SA   |   2020</h3>
                      
                      <div className="row justify-content-center">
                                  <div className="col-3 text-left" >
                                      <Accordiom data={AccordiomData3} whileHover={{ scale:1.2}} />
                                  </div>
                                  
                              </div>
                        <br/>
                      <motion.button
                        whileHover={{ scale:1.1}}>
                        Matlab : Simulink
                      </motion.button>  
                      <motion.button
                        whileHover={{ scale:1.1}}>
                        Model Based Design
                      </motion.button>  
                      <motion.button
                        whileHover={{ scale:1.1}}>
                        Excel : VBA addon
                      </motion.button>  
                      
                      <motion.button
                        whileHover={{ scale:1.1}}>
                        Norme ISA 5
                      </motion.button>  
              </li>
            
              <li>

              <span className="PFA"><img src={PFA} alt="" /></span>
             
                      
              <h3>KOHLER - Jacob Delafon  |   2019<br/> </h3>
                      
                      <div className="row justify-content-center">
                                  <div className="col-3 text-left" >
                                      <Accordiom data={AccordiomData4} whileHover={{ scale:1.2}} />
                                  </div>
                                  
                              </div>
            
                              <br/>
                      <motion.button
                        whileHover={{ scale:1.1}}>
                        KPIs de Maintenance 
                      </motion.button>  
                      <motion.button
                        whileHover={{ scale:1.1}}>
                        Démarche DMAIC
                      </motion.button>
                      <motion.button
                        whileHover={{ scale:1.1}}>
                        TIA Portal
                      </motion.button>
                      
                      <motion.button
                        whileHover={{ scale:1.1}}>
                        STEP7
                      </motion.button>   
                       
                       
              </li> 
        
             
              <li>

              <motion.span className="INI"> <img src={INI}  alt="" whileHover={{
                     scale:1.2,  }}/>
              </motion.span>
              

              
                      
              
              <h3>Office National de l'Electricité   |   2018<br/> </h3>
                      
                      <div className="row justify-content-center">
                                  <div className="col-3 text-left" >
                                      <Accordiom data={AccordiomData5} whileHover={{ scale:1.2}} />
                                  </div>
                                  
                              </div>
                              <br/>
                      <motion.button
                        whileHover={{ scale:1.2}}>
                        NFC-15-100
                      </motion.button>  
                      <motion.button
                        whileHover={{ scale:1.2}}>
                        Réseau HT-BT
                      </motion.button> 
                      <motion.button
                        whileHover={{ scale:1.2}}>
                        Caneco-BT
                      </motion.button> 
                          
                   
              </li>
            </ul>

          </section>


          <section id="second" className="main special">
            
            <header className="major">
              <h2>Domaines de Compétence :</h2>
              </header>

                  <h6>
                  Avec une formation assez solide et pluridisciplinaire, enrichie avec des expériences 
                  professionnelles, j'ai pu développer plusieurs compétences, dans plusieurs disciplnes, pour sculpter un profil 
                  qui répond amplement aux exigences du marché d'emploi.
                  En tant qu'ingénieur Electromécanique combinant 4 disciplines majeures : 
                  
                  </h6>
                  <br/><br/>
                  <dl className="alt">
                  
                      <dt>Mécanique</dt>
                          <dd>Je suis capable de prendre connaissance des cahiers des charges, concevoir l’architecture
                              organique et fonctionnelle des pièces, effectuer des calculs de structures.
                          </dd>
                  
                      <dt>Electrique</dt>
                          <dd>Aptitude à dimensioner les appareillages, les machines électriques (MAS, MS, MCC), concevoir les architectures 
                          réseau électriques et ses utilités, entreprendre les circuits HT-BT. Réaliser des bilans & audit de la consommation électrique des
                          installations, Programmer les APIs, et entreprendre les circuits électroniques embarqués. 
                          </dd>
                      <dt>Controle Commande</dt>
                          <dd>Forte passion à développer des stratégies de controle-commande pour des systèmes dynamiques complexes et
                            pluridisciplinaires. Ceci s'intégrant dans la perspective PLM. 
                          </dd>
                      <dt>Gestion de projets</dt>
                          <dd>Capable à suivre le déroulement d'un projet, fournir les livrables nécessaires dans les délais déterminés.
                            déterminer les phases promordiales, communiquer les progrès.
                          </dd>
                      
                  
                  </dl>
                  <br/>

            

              <ul className="statistics">
                <motion.li className="style1"  whileHover={{
                     scale:1.05, 
                     textShadow : "0 10px 5px 0 rgb(255,255,255)",
                     color : "Black" ,
                    
                    }} >
                  <span className="icon  fas fa-cogs"></span>
                  <strong>Mécanique</strong>Chaines de traction<br />Conception <br />
                  Structures<br /> Fabrication
                </motion.li>
                <motion.li className="style2"whileHover={{
                     scale:1.05, 
                     textShadow : "0 10px 5px 0 rgb(255,255,255)",
                     color : "black" ,
                    
                    }}>
                  <span className="icon fas fa-bolt"></span>
                  <strong>Électrique</strong> Machines électriques <br/> Convertisseurs stat.
                  <br/>Appareillages <br/> APIs : STEP7
                </motion.li>
                <motion.li className="style3"whileHover={{
                     scale:1.05, 
                     textShadow : "0 10px 5px 0 rgb(255,255,255)",
                     color : "Black" ,
                    
                    }}>
                  <span className="icon fas fa-industry"></span>
                  <strong>Contrôle</strong> Model Based Design <br />Feedback Control  
                  <br /> PLM (Product) <br/> V Modeling 
                </motion.li>
                <motion.li className="style4"whileHover={{
                     scale:1.1, 
                     textShadow : "0 10px 5px 0 rgb(255,255,255)",
                     color : "Black" ,
                    
                    }}>
                  <span className="icon fas fa-tasks"></span>
                  <strong>Projets</strong> Livrables techniques <br />Pilotage technique <br/> Communication<br />Phases & Outils
                </motion.li>
                
              </ul>
              <p className="content">
              Deuux critères principaux orientent un choix dans ma carrière  : Intégrer une grande entreprise et opter pour un « métier d’avenir », et je pourrai ajouter 
              un 3ème; perspectives d'évolution au sein de l'organsime.
              Ma formation d’ingénieur orientée R&D et Production et mes expériences acquises dans ce domaine ont développé mon goût pour
              l’organisation, le travail d’équipe et la maîtrise de la technologie.
              </p>
        
                    
            </section>

            <section id="cta" className="main special">
                  <header className="major">
                    <h2>Formation Académique :</h2>
                    </header>
                
                      <motion.div className="row justify-content-center"  >
                          <div className="col-lg-6 text-center">
                          <h6>
                          Les grands constructeurs ont besoin d’ingénieurs pour trouver de nouveaux produits, de nouvelles technologies,
                          de nouveaux procédés de fabrication, mais aussi pour faire des essais, organiser la production, étudier le marché.
                          Dans cette perspective s'inscrit essentiellement l'approche de ma formation en tant qu'ingénieur en Electromécanique.<br/><br/>
                          Une formation polyvalente, et offrant des posibilités d'ouverture sur un ensemble des domaines majeures en indutrie.
                          A l'issue de formation alliant une diversité de champs industriels. Je suis doté d'une capacité de compréhension des nouveaux 
                          enjeux liés aux domaines de l'automobile et aéronautique, Capacité à piloter des projets innovants sur des sujets de pointe, 
                          Compréhension des enjeux liés à ces technologies.
                  </h6>

                                   
                              <div className="row justify-content-center">
                                  <div className="col-12 text-left" >
                                      <Accordion data={AccordionData} whileHover={{ scale:1.2}} />
                                      <br/>
                                      <a href="https://drive.google.com/file/d/1w0AAxCvSxMZz0DiPt6saYHi4d9k291TQ/view?usp=sharing" className="button special" > Brochure de la formation </a>
                                      
                          
                       
                                      
                                  </div>
                              </div>

                              <div className="row justify-content-center">
                                  <div className="col-12 text-left" >
                                      <Accordion data={AccordionData2} whileHover={{ scale:1.2}} />
                                  </div>
                                  
                              </div>
                          </div>
                      </motion.div>
  
                    
            </section>

    
         
          <section id="last" className="main special">
            <header className="major"> 
              <h2>Contactez Moi :</h2></header>
              Pour rester dans un cadre formel, un Curriculum Vitae mettant en évidence mon histoire professionnelle et académique
              sera plus synthétique et mieux adapté pour un usage professionnel. Vous pouvez en savoir plus sur moi en télechargeant la version PDF.
             <br/>
              
            
             <a href="https://drive.google.com/file/d/1NlQaKfN7XWJyvrUECZ85qveGSdD9ZsBb/view?usp=sharing" className="butto" > Curriculum Vitae </a>


                        
            
          </section>
         


        </div>
      </Layout>
    )
  }
}

export default Index
