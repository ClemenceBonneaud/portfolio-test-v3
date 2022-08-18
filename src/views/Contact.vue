<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>
    <!-- Header -->
    <header>
        <div class="header-border header-border--1"></div>
        <div class="header-border header-border--2"></div>
        <a href="#contacts"><h1>
          <nobr>
            <span class="move">C</span>
            <span class="move">o</span>
            <span class="move">n</span>
            <span class="move">t</span>
            <span class="side-color">a</span>
            <span class="move">c</span>
            <span class="move">t</span>
            <span class="move">e</span>
            <span class="move">z</span>
            <span class="move">-</span>
            <span class="move">m</span>
            <span class="move">o</span>
            <span class="move">i</span>
          </nobr>
        </h1></a>
    </header>

    <section class="section section__contact" id="contacts">

      <article id="contact-recherche">
        <h2>En ce moment, je suis à la recherche de :</h2>
            <h4>Long-terme :</h4>
          <h3>Une opportunité en front-end en Suisse Romande (ou proche Suisse romande).</h3>

            <h4>Missions / Projets :</h4>
          <h3>Une opportunité en région Parisienne.</h3>

            <p>Je cherche avant tout une entreprise dans laquelle je pourrais travailler en équipe 
              avec d'autres développeurs, un endroit où je pourrais mettre à l'épreuve mes 
              capacités, relever des challenges, et surtout continuer encore et toujours 
              à apprendre et à progresser.
            </p><br>
      </article>

      <div class="arrow">
        <figure><img src="/images/arrow.png" alt="flèche" /></figure>
        <a href="#contact-liens"><p>Par ici</p></a>
      </div>

      <article id="contact-liens">
        <div class="fond-texture" id="contact-texture"></div>
        <div class="fond-couleur" id="contact-couleur">
          <h2 id="titre-cartes">Alors si mon profil vous intéresse, ou si vous voulez simplement discuter :</h2>
          <ul>
            <li>
              <span>Retrouvez-moi directement sur <br><br><a href="https://www.linkedin.com/in/cl%C3%A9mence-bonneaud/" target= "_blank">
              LinkedIn</a><br><br> sous le nom "Clémence Bonneaud" (surprenant non ?)</span>
            </li>

            <li>
              <span>Si vous préférez les email, vous pouvez m'en envoyer un à l'adresse 
              <br><br><a href="mailto:clemence.bonneaud@gmail.com" target= "_blank">clemence.bonneaud@gmail.com</a><br><br> 
              (toujours aussi imprévisible !)</span>
            </li>

            <li>
              <span>Pour m'avoir directement, de vive voix, appelez moi au <br><br><a href="tel:+33683148024" target= "_blank">+33(0) 6 83 14 80 24</a><br><br> 
            (celui-là normalement vous n'aviez pas pu le deviner)</span>
            </li>
          </ul>
        </div>
        
      </article>
    </section>

</template>

<!-- ////////////////////////////////////////////////// -->
<!--                       SCRIPT                       -->
<!-- ////////////////////////////////////////////////// -->

<script>

export default {
  name: "Contact",
  path: "/contact",
  props: [""],
  data() {
    return {
        hover: "",
        title: "Contactez-moi !",
    };
  }
};
</script>

<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->

<style lang="scss">

.section__contact {
  width: 100%;
  height: 0;
  z-index: 9;
  margin-left:  auto;
  margin-right: auto;

  & li {
    list-style-type: none;
  }
  & h2 {
    margin-bottom: 50px;
    letter-spacing: 5px;
  }
  & h3 {
    letter-spacing: 3px;
  }
  & p {
    width: 60%;
    margin-left:  auto;
    margin-right: auto;
  }
  & #titre-cartes {
    margin-bottom: 100px;
  }
}

#contact-couleur {
  position: relative;
  top: 0px;
  left: 15vw;
  width: 55vw;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  transform: skew(20deg);
  @media screen and (max-width: 1024px){
    transform: skew(15deg);
  }
  @media screen and (max-width: 768px){
    transform: skew(5deg);
    width: 80vw;
    left: 10vw;
  }
}

#contact-texture {
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-position:  100px 0, 100px 0, 0 0, 0 0;
  background-size: 100px 100px;
}

#contact-recherche {
  width: 90%;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 100px;
  margin-top: 40px;
  & h4 {
    margin-top: 60px;
  }
  & p {
    margin-top: 80px;
  }
}

#contact-liens {
  position: relative;
  right: 0;
  left:  0;
  height: auto;
  overflow-x: hidden;
  overflow-y: hidden;
  text-align: center;
  & h2 {
    width: 90%;
    margin-left:  auto;
    margin-right: auto;
    transform: skew(-20deg);
    @media screen and (max-width: 1024px){
      transform: skew(-15deg);
    }
    @media screen and (max-width: 768px){
      transform: skew(-5deg);
      font-size: 20px;
    }
  }
  & ul {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    padding: 0;
  }
  & li {
    height: 200px;
    max-width: 300px;
    width: 90%;
    margin-left:  auto;
    margin-right: auto;
    display: flex;
    align-items: center;
    position: relative;
    margin-bottom: 50px;
    transform: skew(-20deg);
    @media screen and (max-width: 1024px){
      transform: skew(-15deg);
    }
    @media screen and (max-width: 768px){
      transform: skew(-5deg);
      margin-bottom: 0px;
    }
    & span {
      padding: 10px;
      z-index: 1;
      font-size: 17px;
      @media screen and (max-width: 1024px){
        font-size: 15px;
      }
      @media screen and (max-width: 768px){
        font-size: 13px;
      }
    }
    & a {
      font-weight: 400;
    }
  }
  
}

.arrow {
  position: absolute;
  z-index: 9;
  display: flex;
  top: calc(100vh - 100px);
  left: -50px;
  transform: rotate(-90deg);
  width: 200px;
  animation: scroll 700ms ease-in-out infinite alternate;
  & figure {
    margin-right: 0;
  }
  & a {
    width: 100%;
  }
  @media screen and (min-width: 1024px){
    display: none;
  }
  @media screen and (max-width: 768px){
    display: none;
  }
}

@keyframes scroll {
  0% {
    top: calc(100vh - 110px);
  }
  100% {
    top: calc(100vh - 100px);
  }
}

</style>