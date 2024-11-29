<script setup>
import Logo from '@/assets/images/logo.svg'
import Search from '@/assets/images/icons/search.svg'
import Menu from '@/assets/images/icons/menu.svg'
</script>

<template>
  <header class="bg-main text-textAccent rounded-b-2xl">
    <div class="w-viewport max-w-full mx-auto px-main py-3 flex items-center gap-4 sm:gap-12">
      <Logo class="text-iconAccent w-36 flex-none" />
      <menu class="flex-auto">
        <nav>
          <ul class="flex items-center justify-end">
            <li><a href="#" class="font-heading uppercase text-2xl px-3 py-2">Афиша</a></li>
            <li><a href="#" class="font-heading uppercase text-2xl px-3 py-2">Спортобъекты</a></li>
            <li><a href="#" class="font-heading uppercase text-2xl px-3 py-2">Тренеры</a></li>
            <li><a href="#" class="font-heading uppercase text-2xl px-3 py-2">Услуги</a></li>
            <li><a href="#" class="font-heading uppercase text-2xl px-3 py-2">Сообщество</a></li>
          </ul>
        </nav>
      </menu>
      <div class="flex-none flex gap-4">
        <button class="w-10 h-10 flex items-center justify-center" type="button">
          <Search class="text-iconAccent w-5" aria-hidden="true" />
        </button>
        <button class="w-10 h-10 flex items-center justify-center bg-bgSecondaryColor rounded-full" type="button">
          <Menu class="text-textMain w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </header>
</template>
