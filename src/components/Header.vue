<script setup>
import {ref} from "vue";
import Logo from '@/assets/images/logo.svg'
import Search from '@/assets/images/icons/search.svg'
import Menu from '@/assets/images/icons/menu.svg'
import {Icon} from "@vicons/utils";
import { MailOutlined, CloseRound } from '@vicons/material'

const isDrawerOpen = ref(false);
</script>

<template>
  <header class="bg-main text-textAccent rounded-b-2xl">
    <div class="w-viewport max-w-full mx-auto px-main py-4 flex items-center gap-4 sm:gap-12">
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
        <button @click="isDrawerOpen = true" class="w-10 h-10 flex items-center justify-center bg-bgSecondaryColor rounded-full" type="button">
          <Menu class="text-textMain w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
    <Drawer
      v-model:visible="isDrawerOpen"
      position="right" :show-close-icon="false"
      class="w-2/6 bg-gray-700 border-0 rounded-l-2xl pl-12 pr-12"
    >
      <template #header>
        <Button
          class="w-14 h-14 rounded-full bg-white hover:bg-red-600 text-black hover:text-white border-transparent"
          @click="isDrawerOpen = false"
        >
          <template #icon>
            <Icon size="28"><CloseRound /></Icon>
          </template>
        </Button>
      </template>
      <template #footer>
        <Divider type="dashed" />
        <Button
          as="a" rel="noopener"
          href="https://sport.mos.ru/feedback"
          class="w-full text-textAccent border-0 hover:bg-gray-600 hover:text-red-400"
          label="Обратная связь" outlined
        >
          <template #icon>
            <Icon class="mr-4" size="24"><MailOutlined /></Icon>
          </template>
        </Button>
      </template>

      <div class="flex flex-col gap-8 mt-20">
        <Button
          as="a" rel="noopener" rounded
          href="https://login.mos.ru/sps/login/methods/password?bo=%2Fsps%2Foauth%2Fae%3Fclient_id%3Dauth.sport.moscow%26redirect_uri%3Dhttps%253A%252F%252Fauth.sport.moscow%252Flogin%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520snils%2520contacts%2520birthday%26code_challenge%3DC5trz6YmdFP0WaG_QB_EMjrjjolv9p6o9vnUDxLz7-k%26code_challenge_method%3DS256%26nonce%3D638685662915808942.N2ZkNjcyMzYtOWZjMi00ZjhlLWI5YzEtMmRmMmM2MzE5Y2ExYWEyZjBjNzAtZTRhNS00ZTc2LTgxNmItNzRiNmJhMDA0OTcy%26state%3DCfDJ8MJd-XmNk35KoWzvla4rJlvvRmf7qgkvceeXSnLV8YfsJ21h4jlZw6tNjtzIzjFGc6KznOngt-bvqHmw3DfjzHNiT4OnIDd9trWirH1Oin-FE348KvxH3hO1eJO7QX2dSy3CbnA3Q1a41TDS1mGmURIM030rCrsiY666-gTa-gnRMAn7qTWfw11CQprKFMTnb6qkBh7glSjFGlk-QA7YiP2X95qpryWik6rmI-V4Kx8DTJN869qFA2x0SjerwtU0M2Ol_Jz_xJ_I6mAiiDqp1aBCnLpqCKTgCft9_XrII2sJTdsHWODkiHTUCsqeG_0T8dgeI2CnW2bVitIBY5jNL60NTNBIGWNxssn8GvcR2AjVxzBd2R47mMIqQ5LG--vf6S47JL9VjiVZC9xNTUcU5vaH29HrOAImc3mLIU2CLPT_txjQOOA6tcBEmnNAU0tIUgSUtpuuw5YaDhw9yWZUv01OmrvTT6VfIs8fvNjZF9RS8bO9EeF2f5DxBPaUHGDQQlbI0o5UX2Tq-iJbh576s1TQzCtqc0yAvHmIAt-52qLdWWH5kxOdMCmWadPhy_3SzVo2gRgmtWRdUXNybfAIPNqJ6P09MUL8gjx5Uk3SjN_nVLaEQsNz4j5mvHyDRvbeWRU4jnxwlA3gw6AK1maRrdfCpda07wHebHhKtcWLncozqwUPDNtdvQkD9YPkXfiLo6eHITTFdgruU0ZlzpSUV-0Pt4gryZypD-DQjQWlQsMUfjbJH4IK9jZttV2oKK3BBwojIiQWJWw3zC6VLSd-bY3nFEbO0W6TltXpB6XcxdI2lHXD0fP2Yn9nR9_tytfpvw%26x-client-SKU%3DID_NETSTANDARD2_0%26x-client-ver%3D6.7.1.0"
          class="bg-red-600 hover:bg-red-500 border-0 min-w-16 h-16"
        >
          <template #default>
            <span>Авторизация</span>
            <i class="pi pi-sign-in" style="color: white"></i>
          </template>
        </Button>
        <Divider type="dashed" />
      </div>
    </Drawer>
  </header>
</template>
