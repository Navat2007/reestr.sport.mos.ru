<script setup>
import Logo from '@/assets/images/logo.svg'
import LogoMin from '@/assets/images/logo-min.svg'
import QrCode from '@/assets/images/qr-code.svg'
import Device from '@/assets/images/footer__image.png'
import Telephone from '@/assets/images/icons/telephone.svg'
import Envelope from '@/assets/images/icons/envelope.svg'
import Telegram from '@/assets/images/icons/telegram.svg'
import TelegramHover from '@/assets/images/icons/telegram-hover.svg'
import Vkontakte from '@/assets/images/icons/vkontakte.svg'
import VkontakteHover from '@/assets/images/icons/vkontakte-hover.svg'
import Rutube from '@/assets/images/icons/rutube.svg'
import RutubeHover from '@/assets/images/icons/rutube-hover.svg'
import RuStore from '@/assets/images/icons/rustore.svg'
import RuMarket from '@/assets/images/icons/rumarket.svg'
import AppStore from '@/assets/images/icons/appstore.svg'
</script>

<template>
  <footer class="flex-none mt-auto">
    <div class="footer">
      <div class="w-viewport max-w-full mx-auto px-main flex flex-col xl:flex-row">
        <div
          class="flex flex-col flex-wrap items-center justify-around gap-4 py-8 px-2 md:items-start md:flex-row xl:w-[40%] xl:flex-col xl:pr-10 xl:pl-0"
        >
          <div class="w-[310px] flex gap-10">
            <a href="https://www.mos.ru/moskomsport/" target="_blank" rel="nofollow noopener">
              <LogoMin class="h-11" />
            </a>
            <a href="https://sport.mos.ru/" target="_blank" rel="nofollow noopener">
              <Logo class="h-11 text-main" />
            </a>
          </div>
          <address class="w-[310px] flex flex-col gap-4 not-italic">
            <p class="text-sm font-medium">Служба поддержки пользователей:</p>
            <ul class="flex gap-3 flex-col">
              <li>
                <a href="tel:84991120160" class="flex gap-3 text-xs" rel="nofollow noopener">
                  <Telephone class="w-4 fill-icon" aria-label="hidden" />
                  +7 (499) 112-01-60
                </a>
              </li>
              <li>
                <a
                  href="https://sport.mos.ru/feedback"
                  class="flex gap-3 text-xs"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  <Envelope class="w-4 fill-icon" aria-label="hidden" />
                  Обратная связь
                </a>
              </li>
            </ul>
          </address>
          <ul class="flex gap-4 mt-5 w-full justify-center xl:w-auto xl:justify-normal">
            <li>
              <a href="https://t.me/MoscowSportOfficial" class="grid active:translate-y-px" rel="noopener nofollow">
                <Telegram
                  class="row-start-1 row-end-2 col-start-1 col-end-2 w-10 opacity-100 hover:opacity-0 transition-opacity"
                  aria-label="hidden"
                />
                <TelegramHover
                  class="row-start-1 row-end-2 col-start-1 col-end-2 w-10 opacity-0 hover:opacity-100 transition-opacity"
                  aria-label="hidden"
                />
              </a>
            </li>
            <li>
              <a href="https://vk.com/moscowsportofficial" class="grid active:translate-y-px" rel="noopener nofollow">
                <Vkontakte
                  class="row-start-1 row-end-2 col-start-1 col-end-2 w-10 opacity-100 hover:opacity-0 transition-opacity"
                  aria-label="hidden"
                />
                <VkontakteHover
                  class="row-start-1 row-end-2 col-start-1 col-end-2 w-10 opacity-0 hover:opacity-100 transition-opacity"
                  aria-label="hidden"
                />
              </a>
            </li>
            <li>
              <a href="https://rutube.ru/channel/24673075" class="grid active:translate-y-px" rel="noopener nofollow">
                <Rutube
                  class="row-start-1 row-end-2 col-start-1 col-end-2 w-10 opacity-100 hover:opacity-0 transition-opacity"
                  aria-label="hidden"
                />
                <RutubeHover
                  class="row-start-1 row-end-2 col-start-1 col-end-2 w-10 opacity-0 hover:opacity-100 transition-opacity"
                  aria-label="hidden"
                />
              </a>
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col gap-6 py-8 px-2 relative z-20 overflow-hidden -order-1 xl:w-[60%] xl:order-none xl:pl-10 xl:pr-0"
        >
          <h2 class="text-lg font-medium w-60 md:w-full">
            Мобильное приложение «Московский спорт»
          </h2>
          <div class="flex items-center gap-5 md:gap-6 max-w-80">
            <div class="flex-none qr-code">
              <QrCode class="w-full h-full" />
            </div>
            <p class="leading-normal tracking-wide">Сканируй QR-код, чтобы скачать приложение</p>
          </div>
          <ul
            class="flex gap-5 flex-col items-start flex-wrap md:flex-row md:items-stretch"
          >
            <li>
              <a
                href="https://apps.rustore.ru/app/com.moscowsport"
                class="app-link"
                target="_blank"
                rel="nofollow noopener"
              >
                <RuStore
                  class="h-6 w-6 row-start-1 row-end-3 col-start-1 col-end-2 md:h-8 md:w-8"
                  aria-label="hidden"
                />
                <p
                  class="text-3xs tracking-wide row-start-1 row-end-2 col-start-2 col-end-3 md:text-2xs"
                >
                  Доступно в
                </p>
                <p class="text-sm font-medium md:text-xl">RuStore</p>
              </a>
            </li>
            <li>
              <a
                href="https://ruplay.market/apps/com.moscowsport"
                class="app-link"
                target="_blank"
                rel="nofollow noopener"
              >
                <RuMarket
                  class="h-6 w-6 row-start-1 row-end-3 col-start-1 col-end-2 md:h-8 md:w-8"
                  aria-label="hidden"
                />
                <p
                  class="text-3xs tracking-wide row-start-1 row-end-2 col-start-2 col-end-3 laptmdop:text-2xs"
                >
                  Доступно в
                </p>
                <p class="text-sm font-medium md:text-xl">RuMarket</p>
              </a>
            </li>
            <li>
              <a
                href="https://apps.apple.com/ru/app/московский-спорт/id1673448468"
                class="app-link"
                target="_blank"
                rel="nofollow noopener"
              >
                <AppStore
                  class="h-6 w-6 row-start-1 row-end-3 col-start-1 col-end-2 md:h-8 md:w-8"
                  aria-label="hidden"
                />
                <p
                  class="text-3xs tracking-wide row-start-1 row-end-2 col-start-2 col-end-3 md:text-2xs"
                >
                  Доступно в
                </p>
                <p class="text-sm font-medium md:text-xl">App&nbsp;Store</p>
              </a>
            </li>
          </ul>
          <img
            class="absolute right-0 top-64 -z-10 w-1/2 max-w-[300px] sm:top-auto sm:bottom-0 sm:translate-y-1/2 md:translate-y-0 md:bottom-auto md:top-4"
            :src="Device"
            alt="Изображение мобильного телефона с открытым приложением"
            width="300"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-bgColor px-main py-3 flex flex-col gap-x-10 flex-wrap shadow-footer xl:justify-center xl:text-center xl:items-center"
    >
      <a
        href="https://www.mos.ru/upload/documents/files/5620/Politikavotnosheniiobrabotkipersonalnihdannih.pdf"
        class="text-textSecondary text-2xs xl:text-xs"
        download
        target="_blank"
        >Политика в отношении обработки персональных данных</a
      >
      <a
        href="https://www.mos.ru/legal/rules/"
        class="text-textSecondary text-2xs xl:text-xs"
        target="_blank"
        >Соглашение о пользовании информационными системами и ресурсами города Москвы</a
      >
    </div>
  </footer>
</template>

<style setup>
.footer {
  @apply bg-bgColor shadow-footer;
  background-image: linear-gradient(to bottom, #f3f3f3 63%, #ffffff 63%, #ffffff 100%);
  @media screen and (min-width: 768px) {
    background-image: linear-gradient(to bottom, #f3f3f3 60%, #ffffff 60%, #ffffff 100%);
  }
  @media screen and (min-width: 1440px) {
    background-image: linear-gradient(to right, #ffffff 40%, #f3f3f3 40%, #f3f3f3 100%);
  }
}
.qr-code {
  @apply bg-bgColor;
  inline-size: 130px;
  block-size: 130px;
  padding: 8px;
  border-radius: 20px;
  box-shadow: 1px 1px 7px 1px rgba(0, 0, 0, 0.25);
}
.app-link {
  @apply w-36 grid gap-x-2 bg-bgColor p-2 border border-textMain shadow-footerApp rounded-3xl md:w-auto md:p-3;
  grid-template-columns: auto max-content;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
</style>
