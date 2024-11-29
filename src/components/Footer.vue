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
</script>

<template>
  <footer class="footer">
    <div class="w-viewport max-w-full mx-auto px-main pt-9 pb-5 flex">
      <div class="w-footerAddress flex flex-col gap-4">
        <div class="flex gap-10">
          <a href="https://www.mos.ru/moskomsport/" target="_blank" rel="nofollow noopener">
            <logoMin class="h-11" />
          </a>
          <a href="https://sport.mos.ru/" target="_blank" rel="nofollow noopener">
            <logo class="h-11 text-main" />
          </a>
        </div>
        <address class="flex flex-col gap-4 not-italic">
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
        <ul class="flex gap-4 mt-5">
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
      <div class="w-footerApp flex flex-col gap-6">
        <h2 class="text-lg font-medium">Мобильное приложение «Московский спорт»</h2>
        <div class="footer__app">
          <div class="bg-bgColor rounded-sm shadow-sm w-36 h-36">
            <qrCode class="w-full h-full contain-size" />
          </div>
          <p class="footer__app-text">Сканируй QR-код, чтобы скачать приложение</p>
        </div>
        <ul class="footer__app-list">
          <li>
            <a
              href="https://apps.rustore.ru/app/com.moscowsport"
              class="footer__app-link"
              target="_blank"
              rel="nofollow noopener"
            >
              <span class="icon icon_type_rustore" aria-label="hidden"></span>
              <p class="footer__app-label">Доступно в</p>
              <p class="footer__app-text">RuStore</p>
            </a>
          </li>
          <li>
            <a
              href="https://ruplay.market/apps/com.moscowsport"
              class="footer__app-link"
              target="_blank"
              rel="nofollow noopener"
            >
              <span class="icon icon_type_rustore" aria-label="hidden"></span>
              <p class="footer__app-label">Доступно в</p>
              <p class="footer__app-text">RuMarket</p>
            </a>
          </li>
          <li>
            <a
              href="https://apps.apple.com/ru/app/московский-спорт/id1673448468"
              class="footer__app-link"
              target="_blank"
              rel="nofollow noopener"
            >
              <span class="icon icon_type_rustore" aria-label="hidden"></span>
              <p class="footer__app-label">Доступно в</p>
              <p class="footer__app-text">App Store</p>
            </a>
          </li>
        </ul>
        <img
          class="footer__img"
          :src="device"
          alt="Изображение мобильного телефона с открытым приложением"
          width="300"
        />
      </div>
    </div>
    <div
      class="bg-bgColor px-main py-3 flex gap-x-10 flex-wrap text-center items-center justify-center shadow-footer"
    >
      <a
        href="https://www.mos.ru/upload/documents/files/5620/Politikavotnosheniiobrabotkipersonalnihdannih.pdf"
        class="text-textSecondary text-xs"
        download
        target="_blank"
        >Политика в отношении обработки персональных данных</a
      >
      <a href="https://www.mos.ru/legal/rules/" class="text-textSecondary text-xs" target="_blank"
        >Соглашение о пользовании информационными системами и ресурсами города Москвы</a
      >
    </div>
  </footer>
</template>

<style>
.footer {
  @apply bg-bgColor shadow-footer;
  background-image: linear-gradient(to right, #ffffff 40%, #f3f3f3 40%, #f3f3f3 100%);
}
</style>
