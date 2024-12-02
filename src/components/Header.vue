<script setup>
import { ref } from 'vue'
import Logo from '@/assets/images/logo.svg'
import Search from '@/assets/images/icons/search.svg'
import Menu from '@/assets/images/icons/menu.svg'
import SignIn from '@/assets/images/icons/sign-in.svg'
import Envelope from '@/assets/images/icons/envelope.svg'
import Notification from '@/assets/images/icons/notification-circle.svg'

const isDrawerOpen = ref(false)
</script>

<template>
  <header class="position-sticky top-0 bg-main text-textAccent rounded-b-2xl">
    <div class="w-viewport max-w-full mx-auto px-main py-4 flex items-center gap-4 sm:gap-12">
      <a href="https://sport.mos.ru/" target="_blank" class="flex-none" rel="nofollow noopener">
        <Logo class="text-iconAccent w-36" />
      </a>
      <menu class="flex-auto">
        <nav>
          <ul class="hidden laptopWide:flex laptopWide:items-center laptopWide:justify-end">
            <li><a href="https://sport.mos.ru/events" class="font-heading uppercase text-2xl px-3 py-2" target="_blank" rel="noopener nofollow">Афиша</a></li>
            <li><a href="https://sport.mos.ru/facilities" class="font-heading uppercase text-2xl px-3 py-2" target="_blank" rel="noopener nofollow">Спортобъекты</a></li>
            <li><a href="https://sport.mos.ru/coaches" class="font-heading uppercase text-2xl px-3 py-2" target="_blank" rel="noopener nofollow">Тренеры</a></li>
            <li><a href="https://sport.mos.ru/services" class="font-heading uppercase text-2xl px-3 py-2" target="_blank" rel="noopener nofollow">Услуги</a></li>
            <li><a href="https://sport.mos.ru/community" class="font-heading uppercase text-2xl px-3 py-2" target="_blank" rel="noopener nofollow">Сообщество</a></li>
          </ul>
        </nav>
      </menu>
      <div class="flex-none flex gap-4">
        <Button class="w-10 h-10 p-2 flex items-center justify-center bg-transparent border-transparent rounded-full active:translate-y-px">
          <Search class="text-iconAccent w-5 h-5" aria-hidden="true" />
        </Button>
        <button
          @click="isDrawerOpen = true"
          class="w-10 h-10 flex items-center justify-center bg-bgSecondaryColor rounded-full active:translate-y-px"
          type="button"
        >
          <Menu class="text-textMain w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
    <Drawer
      v-model:visible="isDrawerOpen"
      position="right"
      :show-close-icon="false"
      class="w-full max-w-mobileMenu bg-bgAccentColor border-0 mobile:rounded-l-2xl px-5 laptopWide:px-11"
    >
      <template #header>
        <Button
          class="bg-bgColor hover:bg-main text-textMain hover:text-textAccent border-transparent p-3 active:translate-y-px"
          @click="isDrawerOpen = false"
          rounded
        >
          <Menu class="w-6 h-6" />
        </Button>
      </template>
      <template #footer>
        <div class="divider" aria-hidden="true"></div>
        <div class="flex items-center py-4 text-textAccent gap-6">
          <Notification class="flex-none w-10 h-10" />
          <div class="flex-auto flex flex-col gap-2">
            <p class="tracking-wide text-base">Уведомления недоступны</p>
            <p class="tracking-wide text-xs">Выполните авторизацию</p>
          </div>
        </div>
        <div class="divider" aria-hidden="true"></div>
        <Button
          as="a"
          rel="noopener"
          href="https://sport.mos.ru/feedback"
          class="w-full gap-6 justify-start text-textAccent bg-transparent border-transparent text-left px-4 py-6 hover:bg-linkHover tracking-wide active:translate-y-px"
          label="Обратная связь"
        >
           <Envelope class="w-6 h-6" />
           <span>Обратная связь</span>
        </Button>
      </template>
      <div class="w-full flex flex-col gap-5 pt-5 mobile:gap-10 mobile:pt-20">
        <Button
          as="a"
          rel="noopener"
          rounded
          href="https://login.mos.ru/sps/login/methods/password?bo=%2Fsps%2Foauth%2Fae%3Fclient_id%3Dauth.sport.moscow%26redirect_uri%3Dhttps%253A%252F%252Fauth.sport.moscow%252Flogin%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520snils%2520contacts%2520birthday%26code_challenge%3DC5trz6YmdFP0WaG_QB_EMjrjjolv9p6o9vnUDxLz7-k%26code_challenge_method%3DS256%26nonce%3D638685662915808942.N2ZkNjcyMzYtOWZjMi00ZjhlLWI5YzEtMmRmMmM2MzE5Y2ExYWEyZjBjNzAtZTRhNS00ZTc2LTgxNmItNzRiNmJhMDA0OTcy%26state%3DCfDJ8MJd-XmNk35KoWzvla4rJlvvRmf7qgkvceeXSnLV8YfsJ21h4jlZw6tNjtzIzjFGc6KznOngt-bvqHmw3DfjzHNiT4OnIDd9trWirH1Oin-FE348KvxH3hO1eJO7QX2dSy3CbnA3Q1a41TDS1mGmURIM030rCrsiY666-gTa-gnRMAn7qTWfw11CQprKFMTnb6qkBh7glSjFGlk-QA7YiP2X95qpryWik6rmI-V4Kx8DTJN869qFA2x0SjerwtU0M2Ol_Jz_xJ_I6mAiiDqp1aBCnLpqCKTgCft9_XrII2sJTdsHWODkiHTUCsqeG_0T8dgeI2CnW2bVitIBY5jNL60NTNBIGWNxssn8GvcR2AjVxzBd2R47mMIqQ5LG--vf6S47JL9VjiVZC9xNTUcU5vaH29HrOAImc3mLIU2CLPT_txjQOOA6tcBEmnNAU0tIUgSUtpuuw5YaDhw9yWZUv01OmrvTT6VfIs8fvNjZF9RS8bO9EeF2f5DxBPaUHGDQQlbI0o5UX2Tq-iJbh576s1TQzCtqc0yAvHmIAt-52qLdWWH5kxOdMCmWadPhy_3SzVo2gRgmtWRdUXNybfAIPNqJ6P09MUL8gjx5Uk3SjN_nVLaEQsNz4j5mvHyDRvbeWRU4jnxwlA3gw6AK1maRrdfCpda07wHebHhKtcWLncozqwUPDNtdvQkD9YPkXfiLo6eHITTFdgruU0ZlzpSUV-0Pt4gryZypD-DQjQWlQsMUfjbJH4IK9jZttV2oKK3BBwojIiQWJWw3zC6VLSd-bY3nFEbO0W6TltXpB6XcxdI2lHXD0fP2Yn9nR9_tytfpvw%26x-client-SKU%3DID_NETSTANDARD2_0%26x-client-ver%3D6.7.1.0"
          class="font-medium py-2 px-6 border-transparent bg-main hover:bg-mainHover shadow-authButton tracking-wide mobile:py-5 active:translate-y-px"
        >
          <span>Авторизация</span>
          <SignIn class="w-5 h-5" />
        </Button>
        <div class="divider" aria-hidden="true"></div>
        <menu>
        <nav>
          <ul class="flex flex-col">
            <li><a href="https://sport.mos.ru/events" class="text-textAccent text-base block px-4 py-3 hover:bg-linkHover" target="_blank" rel="noopener nofollow">Афиша</a></li>
            <li><a href="https://sport.mos.ru/facilities" class="text-textAccent text-base block px-4 py-3 hover:bg-linkHover" target="_blank" rel="noopener nofollow">Спортобъекты</a></li>
            <li><a href="https://sport.mos.ru/coaches" class="text-textAccent text-base block px-4 py-3 hover:bg-linkHover" target="_blank" rel="noopener nofollow">Тренеры</a></li>
            <li><a href="https://sport.mos.ru/services" class="text-textAccent text-base block px-4 py-3 hover:bg-linkHover" target="_blank" rel="noopener nofollow">Услуги</a></li>
            <li><a href="https://sport.mos.ru/community" class="text-textAccent text-base block px-4 py-3 hover:bg-linkHover" target="_blank" rel="noopener nofollow">Сообщество</a></li>
          </ul>
        </nav>
      </menu>
      </div>
    </Drawer>
  </header>
</template>

<style setup>
.divider {
  margin: 0px;
  flex-shrink: 0;
  border: none;
  background-image: linear-gradient(to right, rgb(255, 255, 255) 50%, rgba(255, 255, 255, 0) 0%);
  background-position: center bottom;
  background-size: 16px 1px;
  background-repeat: repeat-x;
  background-color: transparent;
  min-height: 1px;
}
</style>
