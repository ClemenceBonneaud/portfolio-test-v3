<!-- ////////////////////////////////////////////////// -->
<!--                      TEMPLATE                      -->
<!-- ////////////////////////////////////////////////// -->

<template>
  <button type="button" id="menu-deroulant" @click="menuDeroulant()">
    <div class="logo-menu logo-menu--1"></div>
    <div class="logo-menu logo-menu--2"></div>
    <div class="logo-menu logo-menu--3"></div>
  </button>

  <nav class="navigation navigation--home shadow" ref="nav">

    <div class="overlay-nav" @click="menuDeroulant()"></div>

    <router-link to="/" @click="selectedTab(0), menuDeroulant()" class="groupe groupe--logo shadow-bottom">
      <figure class="menu-deroulant menu-deroulant--1" >
        <img src="/images/Logo.png" alt="logo CB"/>
      </figure>
      <p> Développeuse web Junior</p>
    </router-link>
    <div class="groupe groupe--liens">
      <router-link to="/about"       tag="li" active-class="active" class="menu-deroulant" @click="menuDeroulant()">A PROPOS</router-link>
      <router-link to="/skills"      tag="li" active-class="active" class="menu-deroulant" @click="menuDeroulant()">COMPÉTENCES</router-link>
      <router-link to="/experiences" tag="li" active-class="active" class="menu-deroulant" @click="menuDeroulant()">EXPÉRIENCES</router-link>
      <router-link to="/projects"    tag="li" active-class="active" class="menu-deroulant" @click="menuDeroulant()">PROJETS</router-link>
      <router-link to="/contact"     tag="li" active-class="active" class="menu-deroulant" @click="menuDeroulant()">CONTACTEZ-MOI !</router-link>
    </div>
    <div id="nav-logos">
      <div class="nav-logo menu-deroulant menu-deroulant--7">
        <a href="https://www.linkedin.com/in/cl%C3%A9mence-bonneaud/" target="_blank">
          <figure>
            <img src="/images/linkedin.png" alt="logo linkedin" />
          </figure>
        </a>
      </div>

      <div class="nav-logo menu-deroulant menu-deroulant--8">
        <a href="https://github.com/ClemenceBonneaud" target="_blank">
          <figure>
            <img src="/images/github.png" alt="logo github" />
          </figure>
        </a>
      </div>

      <div class="nav-logo menu-deroulant menu-deroulant--9">
        <a href="mailto:clemence.bonneaud@gmail.com" target="_blank">
          <figure>
            <img src="/images/email.png" alt="logo email" />
          </figure>
        </a>
      </div>
    </div>
  </nav>
</template>

<!-- ////////////////////////////////////////////////// -->
<!--                       SCRIPT                       -->
<!-- ////////////////////////////////////////////////// -->
<script>

export default {
  
  methods: {
    menuDeroulant() {
      this.$refs.nav.classList.toggle("open-nav");
    }
  }
}
</script>


<!-- ////////////////////////////////////////////////// -->
<!--                       STYLE                        -->
<!-- ////////////////////////////////////////////////// -->

<style lang="scss">

.overlay-nav {
  position: fixed;
  z-index: -50;
  top:    0;
  bottom: 0;
  right:  0;
  left:   170px;
  @media screen and (min-width: 769px){
    display: none;
  }
}

nav li:hover, 
nav li:active{
  background: red!important;
  color: blue;
}

</style>
