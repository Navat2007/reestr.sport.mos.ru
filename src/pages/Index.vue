<script setup>
import Info from '@/assets/images/icons/info.svg'
import Filter from '@/assets/images/icons/filter.svg'
import Search from '@/assets/images/icons/search.svg'
import ArrowDown from '@/assets/images/icons/arrow-down.svg'
import Company from '@/assets/images/icons/company.svg'
</script>

<template>
  <!-- Главный поиск -->
  <section class="w-viewport max-w-full mx-auto px-main py-section">
    <div
      class="flex gap-3 flex-col laptop:mb-3 desktop:flex-row desktop:items-center desktop:justify-between"
    >
      <div class="flex items-start">
        <h1 class="max-w-max font-heading text-heading uppercase leading-10">
          Реестр физкультурно-спортивных организаций
        </h1>
        <button class="px-2 py-2 text-main active:translate-y-px" type="button" aria-label="Поиск">
          <Info class="flex-none w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <div class="flex-auto flex gap-4 desktop:justify-end">
        <div class="w-full laptop:max-w-96 rounded-full bg-bgColor shadow-button flex gap-2 items-center pr-4">
          <input
            type="search"
            class="w-full py-2 px-4 rounded-full focus:outline-none"
            placeholder="Поиск по наименованию, адресу и виду спорта"
          />
          <div class="search-divider"></div>
          <Button
            class="p-2 flex items-center justify-center bg-transparent border-transparent active:translate-y-px"
          >
            <Search class="text-icon w-5 h-5" aria-hidden="true" />
          </Button>
        </div>
        <Button
          class="flex-none p-2 flex items-center justify-center bg-main text-textAccent rounded-2xl shadow-button active:translate-y-px border-transparent hover:bg-linkHover laptop:bg-bgColor laptop:text-icon"
        >
          <Filter class="w-6 h-6" aria-hidden="true" />
        </Button>
      </div>
    </div>
    <!-- Фильтры -->
    <div class="hidden gap-4 flex-wrap laptop:flex">
      <Button
        rounded
        class="bg-bgColor bg-transparent border-transparent shadow-button flex gap-2 items-center px-4 py-2 text-textMain hover:bg-main hover:text-textAccent active:translate-y-px"
      >
        <span>Вид деятельности</span>
        <ArrowDown class="w-6 h-6" aria-hidden="true" />
      </Button>
      <Button
        rounded
        class="bg-bgColor bg-transparent border-transparent shadow-button flex gap-2 items-center px-4 py-2 text-textMain hover:bg-main hover:text-textAccent active:translate-y-px"
      >
        <span>Правовая форма</span>
        <ArrowDown class="w-6 h-6" aria-hidden="true" />
      </Button>
      <Button
        rounded
        class="bg-bgColor bg-transparent border-transparent shadow-button flex gap-2 items-center px-4 py-2 text-textMain hover:bg-main hover:text-textAccent active:translate-y-px"
      >
        <span>Форма собственности</span>
        <ArrowDown class="w-6 h-6" aria-hidden="true" />
      </Button>
      <Button
        rounded
        class="bg-bgColor bg-transparent border-transparent shadow-button flex gap-2 items-center px-4 py-2 text-textMain hover:bg-main hover:text-textAccent active:translate-y-px"
      >
        <span>Ведомственная принадлежность</span>
        <ArrowDown class="w-6 h-6" aria-hidden="true" />
      </Button>
    </div>
  </section>
  <!-- Результаты поиска -->
  <section class="w-viewport max-w-full mx-auto px-main pb-section" aria-label="Результаты поиска">
    <p class="text-center mb-10 laptop:text-right">Всего найдено: 5448</p>
    <div class="card-deck">
      <!-- Карточка организации -->
      <article
        class="p-6 pb-4 bg-bgColor shadow-card rounded-2xl flex flex-col gap-3 cursor-pointer border-icon hover:shadow-cardHover transition-shadow active:shadow-card"
      >
        <div class="flex items-end gap-3">
          <Company class="flex-none w-8 h-8 text-main" aria-hidden="true" />
          <h3 class="text-xl font-medium">ООО «3СПОРТ»</h3>
        </div>
        <div>
          <p class="text-sm text-textSecondary mb-1">Юридический адрес</p>
          <p class="text-sm font-medium">
            105082, г. Москва, вн.тёр.г. муниципальный округ Басманный, пл Спартаковская, д. 10,
            стр. 12 (Бизнес-центр «Флеш Ланж 10с12»)
          </p>
        </div>
        <div class="flex gap-2">
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">ОГРН</p>
            <p class="text-sm font-medium">1127746355670</p>
          </div>
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">Дата регистрации</p>
            <p class="text-sm font-medium">04.05.2012</p>
          </div>
        </div>
      </article>
      <article
        class="p-6 pb-4 bg-bgColor shadow-card rounded-2xl flex flex-col gap-3 cursor-pointer border-icon hover:shadow-cardHover transition-shadow active:shadow-card"
      >
        <div class="flex items-end gap-3">
          <Company class="flex-none w-8 h-8 text-main" aria-hidden="true" />
          <h3 class="text-xl font-medium">АНО «КЛУБ «САМБО-80»</h3>
        </div>
        <div>
          <p class="text-sm text-textSecondary mb-1">Юридический адрес</p>
          <p class="text-sm font-medium">105064, г.Москва, ул. Земляной вал, д.36</p>
        </div>
        <div class="flex gap-2">
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">ОГРН</p>
            <p class="text-sm font-medium">1087799026193</p>
          </div>
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">Дата регистрации</p>
            <p class="text-sm font-medium">11.06.2008</p>
          </div>
        </div>
      </article>
      <article
        class="p-6 pb-4 bg-bgColor shadow-card rounded-2xl flex flex-col gap-3 cursor-pointer border-icon hover:shadow-cardHover transition-shadow active:shadow-card"
      >
        <div class="flex items-end gap-3">
          <Company class="flex-none w-8 h-8 text-main" aria-hidden="true" />
          <h3 class="text-xl font-medium">АНО «ПБЛ»</h3>
        </div>
        <div>
          <p class="text-sm text-textSecondary mb-1">Юридический адрес</p>
          <p class="text-sm font-medium">
            105066, г.Москва, муниципальный округ Басманный, пер Токмаков, д. 16,стр. 2
          </p>
        </div>
        <div class="flex gap-2">
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">ОГРН</p>
            <p class="text-sm font-medium">1127799014155</p>
          </div>
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">Дата регистрации</p>
            <p class="text-sm font-medium">23.07.2012</p>
          </div>
        </div>
      </article>
      <article
        class="p-6 pb-4 bg-bgColor shadow-card rounded-2xl flex flex-col gap-3 cursor-pointer border-icon hover:shadow-cardHover transition-shadow active:shadow-card"
      >
        <div class="flex items-end gap-3">
          <Company class="flex-none w-8 h-8 text-main" aria-hidden="true" />
          <h3 class="text-xl font-medium">АНО «ЦРД «БГ КОДОКАН»</h3>
        </div>
        <div>
          <p class="text-sm text-textSecondary mb-1">Юридический адрес</p>
          <p class="text-sm font-medium">101000, г.Москва, ул Покровка, д. 41, стр. 1</p>
        </div>
        <div class="flex gap-2">
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">ОГРН</p>
            <p class="text-sm font-medium">1077799021530</p>
          </div>
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">Дата регистрации</p>
            <p class="text-sm font-medium">26.09.2007</p>
          </div>
        </div>
      </article>
      <article
        class="p-6 pb-4 bg-bgColor shadow-card rounded-2xl flex flex-col gap-3 cursor-pointer border-icon hover:shadow-cardHover transition-shadow active:shadow-card"
      >
        <div class="flex items-end gap-3">
          <Company class="flex-none w-8 h-8 text-main" aria-hidden="true" />
          <h3 class="text-xl font-medium">АНО РИВС «Ноев ковчег»</h3>
        </div>
        <div>
          <p class="text-sm text-textSecondary mb-1">Юридический адрес</p>
          <p class="text-sm font-medium">105005, г.Москва, пер. Технический, д.2, пом. № 3</p>
        </div>
        <div class="flex gap-2">
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">ОГРН</p>
            <p class="text-sm font-medium">1117799004531</p>
          </div>
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">Дата регистрации</p>
            <p class="text-sm font-medium">15.03.2011</p>
          </div>
        </div>
      </article>
      <article
        class="p-6 pb-4 bg-bgColor shadow-card rounded-2xl flex flex-col gap-3 cursor-pointer border-icon hover:shadow-cardHover transition-shadow active:shadow-card"
      >
        <div class="flex items-end gap-3">
          <Company class="flex-none w-8 h-8 text-main" aria-hidden="true" />
          <h3 class="text-xl font-medium">АССОЦИАЦИЯ «МСКЛП «СТРАННИК»</h3>
        </div>
        <div>
          <p class="text-sm text-textSecondary mb-1">Юридический адрес</p>
          <p class="text-sm font-medium">
            105005, г.москва, ул. Бауманская, д. 20, стр. 7, этаж 1 пом. ii, часть комн. 40
          </p>
        </div>
        <div class="flex gap-2">
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">ОГРН</p>
            <p class="text-sm font-medium">1057748621260</p>
          </div>
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">Дата регистрации</p>
            <p class="text-sm font-medium">14.10.2005</p>
          </div>
        </div>
      </article>
    </div>
  </section>
</template>

<style scoped>
.search-divider {
  background-color: rgba(0, 0, 0, 0.2);
  inline-size: 1px;
  block-size: 24px;
}
.card-deck {
  @apply grid gap-4 mb-10;
  grid-template-columns: repeat(auto-fit, minmax(min(370px, 100%), 1fr));
}
</style>
