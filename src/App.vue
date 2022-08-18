<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Navigation from '@/components/Navigation.vue'
</script>

<template>
  <Navigation />

  <RouterView />
</template>

<style lang="scss">

////////////////////////////////////////////////////
///// Utils /////

// Variables

// $color-primary: #E9967A;
// $color-p-transparent: transparentize(#fff600, 0.2);

// $color-s-dark: #000000;
// $color-secondary: #111111;
// $color-s-light: #181818;

// $color-tertiary: #00656f;
// $color-t-transparent: transparentize(#e3363c, 0.2);

// $color-quaternary: #6667AB;

// $color-text-dark: rgb(100,100,100);
// $color-text: #d9d9d9;
// $color-text-light: white;

$color-neutral-light: white;
$color-neutral-dark:  black;
$color-primary:       rgb(233, 231, 218); // Beige/Yellow
$color-secondary:     rgb(186, 198, 189); // Olive green
$color-tertiary:      rgb(135, 142, 146); // Grey
$color-quaternary:    #FA7D84;            // Red
$color-quaternary-t:  transparentize(#FA7D84, 0.2); 
$color-quaternary-t5: transparentize(#FA7D84, 0.5);
$color-quaternary-t8: transparentize(#FA7D84, 0.8); 

$gradient:
  linear-gradient(to bottom right, $color-neutral-light, transparent),
  linear-gradient(to bottom left, $color-primary, transparent),
  linear-gradient(to top left, $color-secondary, transparent),
  linear-gradient(to top right, $color-tertiary, transparent);

$gradient-radial: 
  radial-gradient(ellipse, rgb(186, 198, 189, 0) 50%, rgba(135, 142, 146, 0.5));

$gradient-radial-light: 
  radial-gradient(circle at left, rgb(186, 198, 189, 0) 10%, rgba(135, 142, 146, 0.3));

////////////////////////////////////////////////////
///// Général /////

body {
  background-color: $color-neutral-light;
  margin-left: 170px;
  margin-right:  0;
  margin-bottom: 0;
  margin-top:    0;
  // height: calc(100vh - 100px);
  height: 100%;
  position: relative;
  @media screen and (max-width: 768px){
    margin-left: 0;
  }
}

#app {
  height: 100%;
}

a {
  text-decoration: none;
}

.shadow {
  box-shadow: $color-tertiary 0px 0px 10px 0px;
}

.shadow-bottom {
  box-shadow: $color-tertiary 0px 2px 10px -2px;
}

.move {
  display: -moz-inline-stack;
  display: inline-block;
  transition: all 500ms ease-in-out;
  &:hover {
    transform: rotate(17deg);
    color: #FA7D84;
  }
}

.side-color {
  display: -moz-inline-stack;
  display: inline-block;
  color: $color-quaternary;
  transform: rotate(17deg);
  transition: all 500ms ease-in-out;
  &:hover {
    transform: rotate(0deg);
    color: black;
  }
}

// Typology

h1,
h2,
h3,
h4,
p,
a,
li,
form,
button,
div {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  color: $color-neutral-dark;
}

h1 {
  font-weight: 200;
  letter-spacing: 15px;
  @media screen and (max-width: 768px){
    letter-spacing: 10px;
  }
  @media screen and (max-width: 425px){
    letter-spacing: 8px;
  }
}

h2 {
  font-weight: 300;
  letter-spacing: 6px;
  word-spacing: 15px;
}

h3 {
  font-weight: 400;
  letter-spacing: 2px;
  word-spacing: 5px;
}

h4 {
  font-weight: 300;
  letter-spacing: 3px;
  word-spacing: 10px;
}

p, 
li {
  font-weight: 100;
  font-size: 18px;
  letter-spacing: 1px;
  word-spacing: 5px;
}

a {
  font-weight: 400;
  &:hover {
    color: $color-quaternary;
  }
}

figcaption {
  color: $color-tertiary;
  font-weight: 300;
  letter-spacing: 1px;
  word-spacing: 2px;
}

.fond-couleur {
  background-color: $color-neutral-light;
  border-right: 3px solid $color-quaternary;
}

.fond-texture {
  opacity: 0.9;
  background-image:  linear-gradient(135deg, rgba(255,255,255,0.05) 0%,rgba(0,0,0,0.05) 100%);
  background-repeat: repeat;
}

////////////////////////////////////////////////////
///// Components /////

// Navigation
nav {
  background-color: $color-secondary;
  display: flex;
  flex-direction: column;
  float: left;
  width: 170px;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
  text-align: center;
  z-index: 20;
  & figure {
    width: 80px;
    display: block;
    margin-left:  auto;
    margin-right: auto;
  }
  & img {
    width: 100%;
  }
  & p {
    font-size: 18px;
  }
  @media screen and (max-width: 768px){
    display: none;
  }
}

.groupe {
  &--logo {
    background: $gradient-radial;
    height: 180px;
    padding-top: 20px;
    & p {
      width: 90%;
      margin-left:  auto;
      margin-right: auto;
    }
    @media screen and (max-width: 768px){
      & p {
        display: none;
      }
      & figure {
        height: 50px;
      }
      & img {
        height: 100%;
        width: auto;
      }
    }
  }
  &--liens {
    display: flex;
    flex-direction: column;
    & a {
      color: $color-neutral-dark;
      font-size: 13px;
      border-bottom: 1px solid transparentize($color-tertiary, 0.8);
      padding-top:    15px;
      padding-bottom: 15px;
      letter-spacing: 2px;
      &:first-child {
        margin-top: 30px;
        border-top: 1px solid transparentize($color-tertiary, 0.8);
        @media screen and (max-width: 768px){
          margin-top: 0;
        }
      }
      font-weight: 300;
      transition: background-color 400ms;
      &:hover {
          cursor: pointer;
          background: transparentize($color-tertiary, 0.5);
          color: $color-neutral-dark;
          font-weight: 600;
      }
    }
  }
}

.active {
  background: $gradient-radial-light;
  color: black;
  font-weight: 600;
}

#nav-logos {
  display: flex;
  justify-content: space-evenly;
}

.nav-logo {
  margin-top: 30px;
  background: $color-tertiary;
  width:  40px;
  height: 40px;
  border-radius: 20px;
  transition: background-color 200ms;
  & a {
    width:  100%;
    height: 100%;
    border-radius: inherit;
  }
  & figure {
    width: 70%;
    margin-top: 6px;
  }
  &:hover {
    background-color: $color-quaternary;
  }
}

#menu-deroulant {
  font-size: 25px;
  position: fixed;
  background: none;
  border: none;
  top: 15px;
  left: 15px;
  z-index: 21;
  &:hover,
  &:active {
    .logo-menu--1 {
      width: 35px;
      border-bottom: 2px solid $color-quaternary-t8;
    }
    .logo-menu--2 {
      width: 40px;
      border-bottom: 2px solid $color-quaternary-t5;
      transition-delay: 100ms;
    }
    .logo-menu--3 {
      width: 45px;
      border-bottom: 2px solid $color-quaternary;
      transition-delay: 200ms;
    }
  }
  @media screen and (min-width: 769px) {
    display: none;
  }
  & .logo-menu {
    width: 30px;
    margin-top: 5px;
    border-bottom: 2px solid white;
    margin-bottom: 5px;
    -moz-transition:    all 500ms ease-in-out;
    -webkit-transition: all 500ms ease-in-out;
    transition:         all 500ms ease-in-out;
  }
}

.overlay-nav {
  background: $color-tertiary;
  opacity: 0.5;
}

@media screen and (max-width: 768px){
  .open-nav {
    display: unset;
    padding-top: 70px;
    overflow: scroll;
  }

  .menu-deroulant {
    animation: menu-d 500ms both;
    @for $i from 1 through 9 {
        &--#{$i} {
            animation-delay: 150ms * $i;
        }
    }
  }
}

//// Animations menu déroulant

@keyframes menu-d {
    0% {
        opacity: 0;
        transform: translateY(10px);
    }
    100% {
        opacity: 1;
        transform: translateY(0px);
    }
}

// Header
header {
  position: fixed;
  width: calc(100vw - 170px);
  height: 70px;
  margin-top:  -8px;
  background-color: $color-primary;
  z-index: 10;
  text-align: center;
  & a {
    margin-top: -12px;
    display: block;
    height: 62px;
  }
  & h1 {
    font-size: 30px;
    padding-top: 10px;
    @media screen and (max-width: 768px){
      font-size: 25px;
      margin-top: 23px;
      margin-left: 75px;
    }
    @media screen and (max-width: 425px){
      font-size: 20px;
      margin-top: 26px;
      margin-left: 75px;
    }
  }
  &:hover {
    & .header-border--1 {
      animation: headerRight 1000ms both ease-in-out;
    }
    & .header-border--2 {
      animation: headerLeft 1000ms both ease-in-out;
    }
  }
  @media screen and (max-width: 768px){
    width: 100vw;
  }
  @media screen and (max-width: 768px){
    text-align: left;
  }
}

// Header animation
.header-border {
  position: fixed;
  width: 0%;
  height: 70px;
  z-index: -1;
  border-bottom: 3px solid $color-secondary;
  &--1 {
    animation: header 1000ms both ease-in-out;
  }
}

@keyframes header {
  0% {
    width: 0%;
  }
  50% {
    width: 80%;
  }
  100% {
    width: 0%;
    right: 0;
  }
}

@keyframes headerRight {
  0% {
    width: 0%;
    right: 50%;
  }
  50% {
    width: 100%;
    right: 0%
  }
  100% {
    width: 0%;
    right: 0%;
  }
}

@keyframes headerLeft {
  0% {
    width: 0%;
    left: 50%;
  }
  50% {
    width: 100%;
    left: 0%;
  }
  100% {
    width: 0%;
    left: 0%;
  }
}

////////////////////////////////////////////////////
///// Pages /////

.section {
  padding-top: 100px;
  color: $color-neutral-light;
}

// Page d'accueil
.section__accueil {
  background: linear-gradient($color-primary, $color-secondary, $color-tertiary);
}

// Page compétences
.skills__pro--fleche {
  background: linear-gradient($color-quaternary, $color-secondary);
}

.barre {
  &__anglais {
    background-color: rgb(240, 130, 136);
  }
  &__html {
    background-color: rgb(236, 138, 143);
  }
  &__css {
    background-color: rgb(229, 148, 151);
  }
  &__js {
    background-color: rgb(218, 159, 159);
  }
  &__git {
    background-color: rgb(212, 169, 167);
  }
  &__api {
    background-color: rgb(203, 178, 173);
  }
  &__sql {
    background-color: rgb(195, 187, 180);
  }
  &__seo {
    background-color: rgb(187, 195, 186);
  }
}

.btn {
  background: $color-neutral-light;
}

.btn-wrapper {
  background: linear-gradient($color-primary, $color-secondary, $color-tertiary)
}

// Page expériences

#chronologie-stop {
  text-align: center;
  background-color: $color-neutral-light;
  width: 30%;
  margin-left:  auto;
  margin-right: auto;
  z-index: 6;
  & p {
    letter-spacing: 10px;
    word-spacing: 15px;
  }
  @media screen and (max-width: 768px){
    margin-left: 5%;
    width: 90%;
  }
  & p {
    font-size: 20px;
    font-weight: 100;
    padding-bottom: 60px;
    padding-top: 20px;
    border-top: 2px solid $color-quaternary;
  }
}

#ligne-chronologie {
  position: absolute;
  z-index: -1;
  margin-top: 20px;
  top: 100px;
  bottom: 100px;
  width: 50%;
  border-right: 2px solid $color-quaternary;
  @media screen and (max-width: 768px){
    width: 0;
    margin-left: 60px;
  }
  @media screen and (max-width: 425px){
    margin-left: 35px;
  }
}

#point-chronologie {
  position: sticky;
  z-index: -1;
  height: 15px;
  width:  15px;
  margin-left: 49.3%;
  top: 240px;
  border: 2px solid $color-quaternary;
  border-radius: 10px;
  background-color: $color-neutral-light;
  @media screen and (max-width: 1024px){
    margin-left: 49%;
  }
  @media screen and (max-width: 768px){
    margin-left: 51px;
  }
  @media screen and (max-width: 425px){
    margin-left: 26px;
  }
}

.point-chronologie__plein {
  position: relative;
  z-index: -2;
  height: 5px;
  width:  5px;
  margin-bottom: -65px;
  border: 2px solid $color-quaternary;
  border-radius: 10px;
  background-color: $color-quaternary;
  &--left {
    left: 127.7%;
    @media screen and (max-width: 1024px){
      left: 127.3%;
    }
    @media screen and (max-width: 768px){
      left: -17%;
    }
  }
  &--right {
    right: 29.4%;
    @media screen and (max-width: 1024px){
      right: 29.9%;
    }
    @media screen and (max-width: 768px){
      left: -17%;
    }
  }
}

.chronologie--date {
  color: $color-secondary;
}

// Page projets
.modale {
  background-color: $color-tertiary;
}

.btn-modale {
  background-color: $color-quaternary;
}

.carte-overlay {
  color: $color-neutral-dark;
  background-color: $color-primary;
  &__texte {
    color: $color-neutral-dark;
  }
}

.carte-overlay {
    border-top:    2px solid $color-secondary;

}

// Page contact
.section__contact {
  & h2 {
    color: $color-tertiary;
    font-weight: 400;
  }
}

#contact-liens {
  background: linear-gradient($color-primary, $color-secondary, $color-tertiary);
}

#contact-liens a {
  color: $color-neutral-dark;
  text-decoration: underline;
  &:hover {
    color: $color-quaternary;
  }
}

// Page jeu
.score {
  background-color: $color-tertiary;
}

#snake {
    border: 1px solid $color-tertiary;
  }

</style>