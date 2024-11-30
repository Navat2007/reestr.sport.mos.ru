<script setup>
import logo from '@/assets/images/logo.svg'
import logoMin from '@/assets/images/logo-min.svg'
import qrCode from '@/assets/images/qr-code.svg'
import device from '@/assets/images/footer__image.png'
import telephone from '@/assets/images/icons/telephone.svg'
import envelope from '@/assets/images/icons/envelope.svg'
import telegram from '@/assets/images/icons/telegram.svg'
import telegramHover from '@/assets/images/icons/telegram-hover.svg'
import vkontakte from '@/assets/images/icons/vkontakte.svg'
import vkontakteHover from '@/assets/images/icons/vkontakte-hover.svg'
import rutube from '@/assets/images/icons/rutube.svg'
import rutubeHover from '@/assets/images/icons/rutube-hover.svg'
import ruStore from '@/assets/images/icons/rustore.svg'
import ruMarket from '@/assets/images/icons/rumarket.svg'
import appStore from '@/assets/images/icons/appstore.svg'
</script>

<template>
  <footer>
    <div class="footer">
      <div class="w-viewport max-w-full mx-auto px-main flex flex-col desktop:flex-row">
        <div
          class="flex flex-col flex-wrap items-center justify-around gap-4 py-8 px-2 laptop:items-start laptop:flex-row desktop:w-footerAddress desktop:flex-col desktop:pr-10 desktop:pl-0"
        >
          <div class="w-address flex gap-10">
            <a href="https://www.mos.ru/moskomsport/" target="_blank" rel="nofollow noopener">
              <logoMin class="h-11" />
            </a>
            <a href="https://sport.mos.ru/" target="_blank" rel="nofollow noopener">
              <logo class="h-11 text-main" />
            </a>
          </div>
          <address class="w-address flex flex-col gap-4 not-italic">
            <p class="text-sm font-medium">Служба поддержки пользователей:</p>
            <ul class="flex gap-3 flex-col">
              <li>
                <a href="tel:84991120160" class="flex gap-3 text-xs" rel="nofollow noopener">
                  <telephone class="w-4 fill-icon" aria-label="hidden" />
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
                  <envelope class="w-4 fill-icon" aria-label="hidden" />
                  Обратная связь
                </a>
              </li>
            </ul>
          </address>
          <ul class="flex gap-4 mt-5 w-full justify-center desktop:w-auto desktop:justify-normal">
            <li>
              <a href="https://t.me/MoscowSportOfficial" class="grid" rel="noopener nofollow">
                <telegram
                  class="row-start-1 row-end-2 col-start-1 col-end-2 w-10 opacity-100 hover:opacity-0 transition-opacity"
                  aria-label="hidden"
                />
                <telegramHover
                  class="row-start-1 row-end-2 col-start-1 col-end-2 w-10 opacity-0 hover:opacity-100 transition-opacity"
                  aria-label="hidden"
                />
              </a>
            </li>
            <li>
              <a href="https://.com/moscowsportofficial" class="grid" rel="noopener nofollow">
                <vkontakte
                  class="row-start-1 row-end-2 col-start-1 col-end-2 w-10 opacity-100 hover:opacity-0 transition-opacity"
                  aria-label="hidden"
                />
                <vkontakteHover
                  class="row-start-1 row-end-2 col-start-1 col-end-2 w-10 opacity-0 hover:opacity-100 transition-opacity"
                  aria-label="hidden"
                />
              </a>
            </li>
            <li>
              <a href="https://rutube.ru/channel/24673075" class="grid" rel="noopener nofollow">
                <rutube
                  class="row-start-1 row-end-2 col-start-1 col-end-2 w-10 opacity-100 hover:opacity-0 transition-opacity"
                  aria-label="hidden"
                />
                <rutubeHover
                  class="row-start-1 row-end-2 col-start-1 col-end-2 w-10 opacity-0 hover:opacity-100 transition-opacity"
                  aria-label="hidden"
                />
              </a>
            </li>
          </ul>
        </div>
        <div
          class="flex flex-col gap-6 py-8 px-2 relative z-20 overflow-hidden -order-1 desktop:w-footerApp desktop:order-none desktop:pl-10 desktop:pr-0"
        >
          <h2 class="text-lg font-medium w-60 laptop:w-full">
            Мобильное приложение «Московский спорт»
          </h2>
          <div class="flex items-center gap-5 laptop:gap-6 max-w-80">
            <div class="flex-none qr-code">
              <qrCode class="w-full h-full" />
            </div>
            <p class="leading-6 tracking-wide">Сканируй QR-код, чтобы скачать приложение</p>
          </div>
          <ul
            class="flex gap-5 flex-col items-start flex-wrap laptop:flex-row laptop:items-stretch"
          >
            <li>
              <a
                href="https://apps.rustore.ru/app/com.moscowsport"
                class="app-link"
                target="_blank"
                rel="nofollow noopener"
              >
                <ruStore
                  class="h-6 w-6 row-start-1 row-end-3 col-start-1 col-end-2 laptop:h-8 laptop:w-8"
                  aria-label="hidden"
                />
                <p
                  class="text-3xs tracking-wide row-start-1 row-end-2 col-start-2 col-end-3 laptop:text-2xs"
                >
                  Доступно в
                </p>
                <p class="text-sm font-medium laptop:text-xl">RuStore</p>
              </a>
            </li>
            <li>
              <a
                href="https://ruplay.market/apps/com.moscowsport"
                class="app-link"
                target="_blank"
                rel="nofollow noopener"
              >
                <ruMarket
                  class="h-6 w-6 row-start-1 row-end-3 col-start-1 col-end-2 laptop:h-8 laptop:w-8"
                  aria-label="hidden"
                />
                <p
                  class="text-3xs tracking-wide row-start-1 row-end-2 col-start-2 col-end-3 laptop:text-2xs"
                >
                  Доступно в
                </p>
                <p class="text-sm font-medium laptop:text-xl">RuMarket</p>
              </a>
            </li>
            <li>
              <a
                href="https://apps.apple.com/ru/app/московский-спорт/id1673448468"
                class="app-link"
                target="_blank"
                rel="nofollow noopener"
              >
                <appStore
                  class="h-6 w-6 row-start-1 row-end-3 col-start-1 col-end-2 laptop:h-8 laptop:w-8"
                  aria-label="hidden"
                />
                <p
                  class="text-3xs tracking-wide row-start-1 row-end-2 col-start-2 col-end-3 laptop:text-2xs"
                >
                  Доступно в
                </p>
                <p class="text-sm font-medium laptop:text-xl">App&nbsp;Store</p>
              </a>
            </li>
          </ul>
          <img
            class="absolute right-0 top-64 -z-10 w-1/2 max-w-footerImage mobile:top-auto mobile:bottom-0 mobile:translate-y-1/2 laptop:translate-y-0 laptop:bottom-auto laptop:top-4"
            :src="device"
            alt="Изображение мобильного телефона с открытым приложением"
            width="300"
          />
        </div>
      </div>
    </div>
    <div
      class="bg-bgColor px-main py-3 flex flex-col gap-x-10 flex-wrap shadow-footer desktop:justify-center desktop:text-center desktop:items-center"
    >
      <a
        href="https://www.mos.ru/upload/documents/files/5620/Politikavotnosheniiobrabotkipersonalnihdannih.pdf"
        class="text-textSecondary text-2xs leading-3 desktop:text-xs"
        download
        target="_blank"
        >Политика в отношении обработки персональных данных</a
      >
      <a
        href="https://www.mos.ru/legal/rules/"
        class="text-textSecondary text-2xs leading-3 desktop:text-xs"
        target="_blank"
        >Соглашение о пользовании информационными системами и ресурсами города Москвы</a
      >
    </div>
  </footer>
</template>

<style>
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
  @apply w-36 grid gap-x-2 bg-bgColor p-2 border border-textMain shadow-footerApp rounded-3xl laptop:w-auto laptop:p-3;
  grid-template-columns: auto max-content;
  align-items: center;
  justify-content: center;
  line-height: 1;
}
</style>
