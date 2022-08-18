<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>

  <section class="section section__accueil">
    <div id="accueil-titre">
      <div class="fond-texture" id="accueil-texture"></div>
      <div class="fond-couleur" id="accueil-couleur"></div>

      <!-- <p class="accueil__p1">Bonjour,</p> -->
      <p class="accueil__p1">
        <nobr>
          <span class="move">J</span>
          <span class="move">e</span>
        </nobr>&nbsp
        <nobr>
          <span class="move">s</span>
          <span class="move">u</span>
          <span class="move">i</span>
          <span class="move">s</span>
        </nobr>
      </p>

      <h1>
          <nobr>
            <span class="h1 h1--1">C</span>
            <span class="h1 h1--2">l</span>
            <span class="h1 h1--3">é</span>
            <span class="h1 h1--4">m</span>
            <span class="h1 h1--5">e</span>
            <span class="h1 h1--6">n</span>
            <span class="h1 h1--7">c</span>
            <span class="h1 h1--8">e</span>
          </nobr>
          &nbsp
          <nobr>
            <span class="h1 h1--9">B</span>
            <span class="h1 h1--10">o</span>
            <span class="h1 h1--11">n</span>
            <span class="h1 h1--12">n</span>
            <span class="h1 h1--13">e</span>
            <span class="h1 h1--14">a</span>
            <span class="h1 h1--15">u</span>
            <span class="h1 h1--16">d</span>
          </nobr></h1>

      <!-- <p class="accueil__p2">développeuse web avec une affinité pour le front-end.</p> -->
      <!-- Anciennement aventurière et toujours en quête de nouvelles compétences à aquérir.<br> -->
      <p class="accueil__p2">
        <nobr>
          <span class="move">D</span>
          <span class="move">é</span>
          <span class="move">v</span>
          <span class="move">e</span>
          <span class="move">l</span>
          <span class="move">o</span>
          <span class="move">p</span>
          <span class="move">p</span>
          <span class="move">e</span>
          <span class="side-color">u</span>
          <span class="move">s</span>
          <span class="move">e</span>
        </nobr>
        &nbsp
        <nobr>
          <span class="move">w</span>
          <span class="move">e</span>
          <span class="move">b</span>
        </nobr>
      </p>
      <p class="accueil__p3">Bienvenue sur mon portfolio!</p>
    </div>
  </section>

</template>

<!-- ////////////////////////////////////////////////// -->
<!--                       SCRIPT                       -->
<!-- ////////////////////////////////////////////////// -->

<script>
export default {
  name: "Accueil",
  path: "/",
  props: [""]
};
</script>

<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->

<style lang="scss">

.section__accueil {
  padding-left: 50px;
  height: calc(100vh - 100px);
  overflow-x: hidden;
  overflow-y: hidden;
  @media screen and (max-width: 425px){
    padding-left: 30px;
  }
}

#accueil-couleur {
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  z-index: 0;
  overflow: hidden;
  animation: graphic 1000ms ease-in-out both;
  @media screen and (max-width: 768px){
    animation: graphicSmall 1000ms ease-in-out both;
  }
  @media screen and (max-width: 425px){
    animation: graphicXSmall 1000ms ease-in-out both;
  }
}

#accueil-texture {
  position:absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  background-position:  160px 0, 160px 0, 0 0, 0 0;
  background-size: 160px 160px;
  @media screen and (max-width: 768px){
    background-position:  80px 0, 80px 0, 0 0, 0 0;
    background-size: 80px 80px;
  }
  @media screen and (max-width: 425px){
    background-position:  60px 0, 60px 0, 0 0, 0 0;
    background-size: 60px 60px;
  }
}

#accueil-titre{
  width: 90%;
  margin-top: 100px;
  @media screen and (max-width: 1024px){
    margin-top: 50px;
  }
  & p {
    position: absolute;
    letter-spacing: 15px;
    color: black;
    font-weight: 300;
    &:last-child {
      text-align: right;
      font-weight: 300 !important;
    }
  }
  & h1 {
    color: black;
    font-weight: 200;
    font-size: 4vw;
    position: absolute;
    top: 25%;
    left: 50px;
    &:hover {
      & .h1 {
        animation: moveAll 2000ms both;
        @for $i from 1 through 16 {
          &--#{$i} {
            animation-delay: 100ms * $i;
          }
        }
      }
    }
    @media screen and (max-width: 1024px){
      top: 26%;
      font-size: 3.7vw;
    }
    @media screen and (max-width: 768px){
      top: 23%;
      left: 10%;
      font-size: 6vw;
    }
    @media screen and (max-width: 425px){
      top: 23%;
      left: 14.5%;
      font-size: 5.5vw;
    }
  }
}

.accueil {
  &__p1 {
    top: 8%;
    font-size: 4vw;
    @media screen and (max-width: 1024px){
      top: 15%;
      font-size: 3.7vw;
    }
    @media screen and (max-width: 768px){
      top: 5%;
      left: 15%;
      font-size: 6vw;
    }
    @media screen and (max-width: 596px){
      top: 10%;
      left: 15%;
    }
    @media screen and (max-width: 425px){
      top: 10%;
      left: 20%;
      font-size: 5.5vw;
    }
  }
  &__p2 {
    top: 39%;
    font-size: 4vw;
    @media screen and (max-width: 1024px){
      top: 35%;
      font-size: 3.7vw;
    }
    @media screen and (max-width: 768px){
      top: 45%;
      font-size: 6vw;
    }
    @media screen and (max-width: 596px){
      top: 40%;
    }
    @media screen and (max-width: 425px){
      top: 40%;
      left: 7%;
      font-size: 5.5vw;
    }
  }
  &__p3 {
    top: 80%;
    width: calc(100vw - 250px);
    font-size: 2vw;
    @media screen and (max-width: 768px){
      font-size: 4vw;
      width: calc(100vw - 50px);
    }
    @media screen and (max-width: 425px){
      top: 80vh;
      text-align:left !important;
    }
  }
}

/* ANIMATIONS */

@keyframes graphic {
  0% {
    transform: skew(10deg);
    width: 30vw;
  }
  60% {
    transform: skew(2deg);
  }
  70% {
    width: 80vw;
  }
  100% {
    transform: skew(-15deg);
    width: 75vw;
  }
}

@keyframes graphicSmall {
  0% {
    transform: skew(15deg);
    width: 30vw;
  }
  100% {
    transform: skew(-15deg);
    width: 80vw;
  }
}

@keyframes graphicXSmall {
  0% {
    transform: skew(11deg);
    width: 30vw;
  }
  100% {
    transform: skew(-14deg);
    width: 90vw;
  }
}

.h1 {
  display: -moz-inline-stack;
  display: inline-block;
  transition: all 500ms ease-in-out;
}

@keyframes moveAll {
  0% {
    color: black;
  }
  10% {
    transform: rotate(-17deg);
    transform-origin: top;
  }
  40% {
    color: #FA7D84;
    transform: rotate(17deg);
    transform-origin: top;
  }
  60% {
    color: #FA7D84;
    transform: rotate(-8deg);
    transform-origin: top;
  }
  80% {
    transform: rotate(4deg);
    transform-origin: top;
  }
  90% {
    transform: rotate(-2deg);
    transform-origin: top;
  }
  95% {
    transform: rotate(1deg);
    transform-origin: top;
  }
  100% {
    color: black;
  }
}

</style>