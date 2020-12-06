<template>
  <div class="navbar">
    <div class="nav-container">
      <!-- Logo small -->
      <a aria-label="Netflix" class="logo-sm icon-logo-sm" href="/"></a>
      <ul class="menu-list l-navigation">
        <li class="nav-menu">
          <a class="menu-trigger" role="button" aria-haspopup="true" tabindex="0">Navegar</a>
        </li>
        <li class="nav-tab"><a class="active" href="/">Home</a></li>
        <li class="nav-tab"><a href="/series">Series</a></li>
        <li class="nav-tab"><a href="/movies">Movies</a></li>
      </ul>
      <div class="r-navigation">
        <div class="nav-elem">
          <div class="search-button">
            <span class="icon-search"></span>
          </div>
        </div>
        <!-- <div class="nav-elem">
          <a href="/Kids">INFANTIL</a>
        </div> -->
        <div class="nav-elem">
          <div class="notification-button">
            <span class="icon-notification"></span>
          </div>
        </div>
        <!-- Account button -->
        <div class="nav-elem">
          <div class="account-menu">
            <div class="account-dropdown">
              <a href="/" role="button" tabindex="0" aria-haspopup="true" aria-expanded="false" aria-label="Marcos - My account">
                <span class="profile-link" role="presentation"><img class="profile-icon" :src="require('../assets/images/profile-img.png')" alt=""></span>
              </a>
              <span class="caret" role="presentation"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class NavBar extends Vue {
}
</script>
