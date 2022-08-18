<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>
    <!-- Header -->
    <header>
        <div class="header-border header-border--1"></div>
        <div class="header-border header-border--2"></div>
        <a href="#about"><h1>
          <nobr>
            <span class="move">A</span>
          </nobr>&nbsp
          <nobr>
            <span class="move">P</span>
            <span class="move">r</span>
            <span class="move">o</span>
            <span class="side-color">p</span>
            <span class="move">o</span>
            <span class="move">s</span>
          </nobr>
        </h1></a>
    </header>

    <section class="section section__about" id="about">

      <div class="about about__pro">
        <figure>
          <img alt="photo de Clémence Bonneaud AKA moi" src="/images/moi.jpg" /> 
          <figcaption>Tentative d'immitation de la Joconde</figcaption>
        </figure>

        <div class="about--texte">
          <h2> Je suis une développeuse web junior avec une affinité pour le front-end.</h2>
            <p> J'ai découvert le code quand je travaillais dans le milieu de la recherche scientifique
              à travers R et MatLab. A cette époque ce n'était qu'un outil de conception et d'analyse, 
              mais j'ai développé un réel intérêt pour la programmation qui m'a poussé vers le développement 
              web. J'ai alors décidé de tout arrêter pour me consacrer à cette discipline.</p>
            <p>J'ai choisi de suivre la formation complète d'OpenClassrooms durant laquelle j'ai 
              travaillé sur de nombreux projets concrets et professionnalisants en front-end comme en back-end.</p>
            <p>Aujourd'hui c'est en front-end que je m'amuse le plus et je travaille avec JavaScript via le 
              framework Vue.js. J'ai déjà créé et travaillé avec des 
              API RESTful, des bases de données SQL et NoSQL ainsi que sur les qualités SEO et accessibilité 
              d'un site.
              </p>
        </div>
      </div>

      <div class="about about__perso">

        <div class="about--texte">
          <h2>Et en dehors du code ?</h2>
            <p>Dans une vie antérieure mon métier était de proposer des jeux vidéos à des chimpanzés.
              <br>Plus sérieusement, j'étudiais les capacités cognitives des chimpanzés. J'ai notamment été 
              observer le comportement naturel de chimpanzés sauvages en Ouganda, et proposé des jeux programmés 
              sur écrans tactiles (libre d'accès) aux chimpanzés du zoo de Bâle en Suisse. Mon but était de 
              comprendre leurs capacités et leur fonctionnement intellectuel.</p>
            <p>Je suis de manière générale très curieuse, j'ai toujours envie de découvrir de nouvelles choses.
              C'est pourquoi à travers les années je me suis passionnée de voyages, de photo, de langues, de 
              sports, de moto, de lecture, etc.
              </p>
        </div>

        <figure>
          <img alt="photo de Clémence Bonneaud AKA moi" src="/images/moi2.jpg" /> 
          <figcaption>Tentative d'immitation de Jane Goodall</figcaption>
        </figure>
      </div>
    </section>

</template>

<!-- ////////////////////////////////////////////////// -->
<!--                       SCRIPT                       -->
<!-- ////////////////////////////////////////////////// -->

<script>

export default {
  name: "About",
  path: "/about",
  props: [""],
  data() {
    return {
        hover: "",
    };
  }
};
</script>

<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->

<style lang="scss">

.section__about {
  margin-left: 50px;
  padding-bottom: 60px;
  width: 90%;
  @media screen and (max-width: 768px){
    margin-left:  auto;
    margin-right: auto;
  }
  & figure {
    width:  200px;
    height: 200px;
    @media screen and (max-width: 768px){
      &:first-child {
        margin-left:  0;
        margin-right: 20px;
      }
      &:last-child {
        margin-right: 0;
        margin-left:  20px;
      }
    }
    @media screen and (max-width: 425px){
      margin-bottom: 60px;
      &:first-child {
        margin-left:  0;
        margin-right: 0;
      }
      &:last-child {
        margin-right: 0;
        margin-left:  0;
      }
    }
  }
  & img {
    width:  100%;
    height: 100%;
    border-radius: 80px;
    object-fit: cover;
  }
  & figcaption {
    font-size: 14px;
    font-weight: 400;
    text-align: center;
    width: 90%;
    margin-left:  auto;
    margin-right: auto;
    margin-top:   5px;
  }
}

.about {
  display: flex;
  margin-bottom: 40px;
  margin-top:    10px;
  &--texte {
    width: 70%;
  }
  @media screen and (max-width: 425px){
    align-items: center;
    text-align: center;
    &:first-child {
      flex-direction: column;
    }
    &:last-child {
      flex-direction: column-reverse;
    }
  }
}

</style>