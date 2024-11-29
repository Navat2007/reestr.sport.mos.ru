<script setup>
import Logo from '@/assets/images/logo.svg'
</script>

<template>
  <header class="header">
    <div class="header__wrap">
      <Logo class="header__logo" />
      <menu class="header__menu">
        <nav class="header__nav">
          <ul class="header__list">
            <li><a href="#" class="header__link">Афиша</a></li>
            <li><a href="#" class="header__link">Спортобъекты</a></li>
            <li><a href="#" class="header__link">Тренеры</a></li>
            <li><a href="#" class="header__link">Услуги</a></li>
            <li><a href="#" class="header__link">Сообщество</a></li>
          </ul>
        </nav>
      </menu>
      <div class="header__search"></div>
      <div class="header__burger"></div>
    </div>
  </header>
</template>

<style scoped lang="scss">
.header {
  background-color: var(--main-color);
  border-radius: 0 0 1em 1em;

  &__wrap {
    inline-size: var(--main-inline-size);
    padding-inline: var(--main-indent);
    max-inline-size: 100%;

    display: flex;
    align-items: center;
    gap: 3em;
  }

  &__logo {
    fill: var(--text-accent-color);
  }

  &__menu {
  }

  &__nav {
  }

  &__list {
  }

  &__link {
    text-decoration: none;
    font-family: var(--heading-font-family);
    text-transform: uppercase;
    font-size: 1.5em;
    color: var(--text-accent-color);
  }

  &__search {
  }

  &__burger {
  }
}
</style>
