<script setup>
import Icon from '@/components/Icon.vue'
import logo from '@/assets/images/logo.svg'
import logoMin from '@/assets/images/logo-min.svg'
import qrCode from '@/assets/images/qr-code.svg'
import device from '@/assets/images/footer__image.png'
</script>

<template>
  <footer class="footer">
    <div class="footer__wrap">
      <div class="footer__columns">
        <div class="footer__column footer__column_content_address">
          <div class="footer__logos">
            <a
              href="https://www.mos.ru/moskomsport/"
              class="footer__logo-link"
              target="_blank"
              rel="nofollow noopener"
            >
              <img
                class="footer__logo-image"
                :src="logoMin"
                alt="Логотип Департамента спорта города Москвы"
                width="134"
              />
            </a>
            <a
              href="https://sport.mos.ru/"
              class="footer__logo-link"
              target="_blank"
              rel="nofollow noopener"
            >
              <img
                class="footer__logo-image"
                :src="logo"
                alt="Логотип Департамента спорта города Москвы"
                width="134"
              />
            </a>
          </div>
          <address class="footer__address">
            <p class="footer__address-text">Служба поддержки пользователей:</p>
            <ul class="footer__list">
              <li>
                <a href="tel:84991120160" class="footer__link" rel="nofollow noopener">
                  <span class="icon icon_type_phone" aria-label="hidden"></span>
                  +7 (499) 112-01-60
                </a>
              </li>
              <li>
                <Icon :src="logoMin" />
                <a
                  href="https://sport.mos.ru/feedback"
                  class="footer__link"
                  rel="nofollow noopener"
                  target="_blank"
                >
                  <span class="icon icon_type_envelope" aria-label="hidden"></span>
                  Обратная связь
                </a>
              </li>
            </ul>
          </address>
          <ul class="footer__social-list">
            <li>
              <a
                href="https://t.me/MoscowSportOfficial"
                class="footer__social-link"
                rel="noopener nofollow"
              >
                <span class="icon icon_type_t" aria-label="hidden"></span>
                <span class="icon icon_type_t-hover" aria-label="hidden"></span>
              </a>
            </li>
            <li>
              <a
                href="https://.com/moscowsportofficial"
                class="footer__social-link"
                rel="noopener nofollow"
              >
                <span class="icon icon_type_vk" aria-label="hidden"></span>
                <span class="icon icon_type_vk-hover" aria-label="hidden"></span>
              </a>
            </li>
            <li>
              <a
                href="https://rutube.ru/channel/24673075"
                class="footer__social-link"
                rel="noopener nofollow"
              >
                <span class="icon icon_type_rutube" aria-label="hidden"></span>
                <span class="icon icon_type_rutube-hover" aria-label="hidden"></span>
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__column footer__column_content_app">
          <h2 class="footer__title">Мобильное приложение «Московский спорт»</h2>
          <div class="footer__app">
            <div class="footer__app-img-wrap">
              <img
                class="footer__app-img"
                :src="qrCode"
                alt="qr-code для скачивания приложения «Московский спорт»"
                width="120"
              />
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
      <div class="footer__columns footer__columns_content_copyright">
        <a
          href="https://www.mos.ru/upload/documents/files/5620/Politikavotnosheniiobrabotkipersonalnihdannih.pdf"
          class="footer__copy-link"
          download
          target="_blank"
          >Политика в отношении обработки персональных данных</a
        >
        <a href="https://www.mos.ru/legal/rules/" class="footer__copy-link" target="_blank"
          >Соглашение о пользовании информационными системами и ресурсами города Москвы</a
        >
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background-color: var(--bg-color);
  background-image: linear-gradient(
    to right,
    var(--bg-color) 40%,
    var(--bg-secondary-color) 40%,
    var(--bg-secondary-color) 100%
  );
  box-shadow:
    0px 10px 36px 0px rgba(0, 0, 0, 0.19),
    0px 3px 13px 0px rgba(0, 0, 0, 0.04);

  &__wrap {
    margin-inline: auto;
    max-inline-size: 1440px;
    padding-block: 36px 20px;
    padding-inline: 70px;
  }

  &__columns {
    display: flex;

    &_content_copyright {
      background-color: var(--bg-color);
      box-shadow:
        0px 10px 36px 0px rgba(0, 0, 0, 0.19),
        0px 3px 13px 0px rgba(0, 0, 0, 0.04);
    }
  }

  &__column {
    display: flex;
    flex-direction: column;
    gap: 1em;

    &_content_address {
      flex-basis: 40%;
    }

    &_content_app {
      flex-basis: 60%;
    }
  }

  &__logos {
    display: flex;
    align-items: center;
    gap: 2.5em;
  }

  &__logo-link {
    text-decoration: none;

    &:focus-visible {
      outline: 2px solid;
    }
  }

  &__logo-image {
    display: block;
    inline-size: 100%;
  }

  &__address {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
  &__address {
  }
  &__address {
  }

  &__title {
  }

  &__text {
  }

  &__social {
  }

  &__social-list {
  }

  &__social-link {
  }

  &__app {
  }

  &__app-img-wrap {
  }

  &__app-img {
  }

  &__app-text {
  }

  &__app-label {
  }

  &__app-list {
  }

  &__app-link {
  }

  &__img {
  }
}
</style>
