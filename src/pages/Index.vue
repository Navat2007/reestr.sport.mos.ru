<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'

import Info from '@/assets/images/icons/info.svg'
import Filter from '@/assets/images/icons/filter.svg'
import Search from '@/assets/images/icons/search.svg'
import ArrowDown from '@/assets/images/icons/arrow-down.svg'
import Company from '@/assets/images/icons/company.svg'

const tabValue = ref("0");
const isDialogOpen = ref(false)
const sportObject = ref(null)
const sportObjects = ref([
  {
    name: 'ООО «3СПОРТ»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    address: '105082, г.Москва, вн.тёр.г. муниципальный округ Басманный, пл Спартаковская, д.10, стр.12 (Бизнес-центр «Флеш Ланж 10с12»)',
    ogrn: '1127746355670',
    registrationDate: '04.05.2012',
    inn: '7708762136',
    region: 'Москва',
    firmSize: 'Микропредприятие',
    capital: '10 000,00',
    employers: [
      {year: 2022, count: 3},
      {year: 2023, count: 2},
      {year: 2024, count: 4},
    ]
  },
  {
    name: 'АНО «КЛУБ «САМБО-80»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    address: '105064, г.Москва, ул. Земляной вал, д.36',
    ogrn: '1087799026193',
    registrationDate: '11.06.2008',
    inn: '7708762136',
    region: 'Москва',
    firmSize: 'Микропредприятие',
    capital: '10 000,00',
    employers: [
      {year: 2022, count: 3},
      {year: 2023, count: 2},
      {year: 2024, count: 4},
    ]
  },
  {
    name: 'АНО «ПБЛ»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    address: '105066, г.Москва, муниципальный округ Басманный, пер Токмаков, д. 16,стр. 2',
    ogrn: '1127799014155',
    registrationDate: '23.07.2012',
    inn: '7708762136',
    region: 'Москва',
    firmSize: 'Микропредприятие',
    capital: '10 000,00',
    employers: [
      {year: 2022, count: 3},
      {year: 2023, count: 2},
      {year: 2024, count: 4},
    ]
  },
  {
    name: 'АНО «ЦРД «БГ КОДОКАН»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    address: '101000, г.Москва, ул Покровка, д. 41, стр. 1',
    ogrn: '1077799021530',
    registrationDate: '26.09.2007',
    inn: '7708762136',
    region: 'Москва',
    firmSize: 'Микропредприятие',
    capital: '10 000,00',
    employers: [
      {year: 2022, count: 3},
      {year: 2023, count: 2},
      {year: 2024, count: 4},
    ]
  },
  {
    name: 'АНО РИВС «Ноев ковчег»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    address: '105005, г.Москва, пер. Технический, д.2, пом. № 3',
    ogrn: '1117799004531',
    registrationDate: '15.03.2011',
    inn: '7708762136',
    region: 'Москва',
    firmSize: 'Микропредприятие',
    capital: '10 000,00',
    employers: [
      {year: 2022, count: 3},
      {year: 2023, count: 2},
      {year: 2024, count: 4},
    ]
  },
  {
    name: 'АССОЦИАЦИЯ «МСКЛП «СТРАННИК»',
    fullName: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»',
    address: '105005, г.москва, ул. Бауманская, д. 20, стр. 7, этаж 1 пом. ii, часть комн. 40',
    ogrn: '1057748621260',
    registrationDate: '14.10.2005',
    inn: '7708762136',
    region: 'Москва',
    firmSize: 'Микропредприятие',
    capital: '10 000,00',
    employers: [
      {year: 2022, count: 3},
      {year: 2023, count: 2},
      {year: 2024, count: 4},
    ]
  }
]);

const onSportObjectClick = (item) => {
  sportObject.value = item
  isDialogOpen.value = true
}
</script>

<template>
  <!-- Главный поиск -->
  <section class="w-viewport max-w-full mx-auto px-main py-section">
    <div
      class="flex gap-3 flex-col laptop:mb-3 desktop:flex-row desktop:items-center desktop:justify-between"
    >
      <h1 class="max-w-max font-heading text-heading uppercase leading-none">
        Реестр физкультурно-спортивных организаций
        <Info class="inline align-top w-6 h-6 text-main active:translate-y-px" role="button"
              aria-label="Подробная информация" />
      </h1>
      <div class="flex-auto flex gap-4 desktop:justify-end">
        <div
          class="w-full laptop:max-w-96 rounded-full bg-bgColor shadow-button flex gap-2 items-center pr-4"
        >
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
    <p class="text-center mb-10 laptop:text-right">Всего найдено: {{ sportObjects.length }}</p>
    <div class="card-deck">
      <!-- Карточка организации -->
      <article
        v-for="item in sportObjects"
        class="p-6 pb-4 bg-bgColor shadow-card rounded-2xl flex flex-col gap-3 cursor-pointer border-icon hover:shadow-cardHover transition-shadow active:shadow-card"
        @click="() => onSportObjectClick(item)"
      >
        <div class="flex items-end gap-3">
          <Company class="flex-none w-8 h-8 text-main" aria-hidden="true" />
          <h3 class="text-xl font-medium">{{ item.name }}</h3>
        </div>
        <div>
          <p class="text-sm text-textSecondary mb-1">Юридический адрес</p>
          <p class="text-sm font-medium">{{ item.address }}</p>
        </div>
        <div class="flex gap-2">
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">ОГРН</p>
            <p class="text-sm font-medium">{{ item.ogrn }}</p>
          </div>
          <div class="flex-auto">
            <p class="text-sm text-textSecondary mb-1">Дата регистрации</p>
            <p class="text-sm font-medium">{{ item.registrationDate }}</p>
          </div>
        </div>
      </article>
    </div>
  </section>


  <Dialog v-model:visible="isDialogOpen" modal class="w-8/12">
    <template #header>
      <h1 class="text-3xl font-bold">{{ sportObject.name }}</h1>
    </template>

    <!-- Детальная карточки - Общие сведения -->
    <Tabs :value="tabValue" scrollable>
      <TabList>
        <Tab value="0" class="flex gap-2">Общие сведения</Tab>
        <Tab value="1" class="flex gap-2">Характеристики</Tab>
        <Tab value="2" class="flex gap-2">Контакты</Tab>
        <Tab value="3" class="flex gap-2">Финансы</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <section class="flex flex-col gap-4">
            <h2 class="text-2xl font-medium">Общие сведения</h2>
            <div class="flex flex-col gap-1">
              <h3 class="text-xs text-textSecondary">Полное наименование организации</h3>
              <p>ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «3СПОРТ»</p>
            </div>
            <div class="flex flex-col gap-4 laptop:flex-row">
              <div class="flex-auto flex flex-col gap-4">
                <div class="flex flex-col gap-1">
                  <h3 class="text-xs text-textSecondary">Краткое наименование организации</h3>
                  <p>ООО «3СПОРТ»</p>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="text-xs text-textSecondary">Регион регистрации</h3>
                  <p>Москва</p>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="text-xs text-textSecondary">
                    Размер организации
                    <Info class="inline align-top w-4 h-4 text-main" role="button" />
                  </h3>
                  <p>Микропредприятие</p>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="text-xs text-textSecondary">Дата регистрации</h3>
                  <p>04.05.2012</p>
                </div>
              </div>
              <div class="w-px bg-divider"></div>
              <div class="flex-auto flex flex-col gap-4">
                <div class="flex flex-col gap-1">
                  <h3 class="text-xs text-textSecondary">
                    ИНН
                    <Info class="inline align-top w-4 h-4 text-main" role="button" />
                  </h3>
                  <p>7708762136</p>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="text-xs text-textSecondary">
                    ОГРН
                    <Info class="inline align-top w-4 h-4 text-main" role="button" />
                  </h3>
                  <p>1127746355670</p>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="text-xs text-textSecondary">
                    Уставный капитал, руб.
                    <Info class="inline align-top w-4 h-4 text-main" role="button" />
                  </h3>
                  <p>10 000,00</p>
                </div>
                <div class="flex flex-col gap-1">
                  <h3 class="text-xs text-textSecondary">
                    Среднесписочная численность сотрудников в
                    <span class="select-yrs"
                    >2022 <ArrowDown class="inline align-top w-4 h-4 text-icon" role="button"
                    /></span>
                  </h3>
                  <p>3 чел.</p>
                </div>
              </div>
            </div>
          </section>
        </TabPanel>
        <TabPanel value="1">
        </TabPanel>
        <TabPanel value="2">
        </TabPanel>
        <TabPanel value="3">
        </TabPanel>
      </TabPanels>
    </Tabs>

  </Dialog>
</template>

<style scoped>
.search-divider {
  @apply bg-divider;
  inline-size: 1px;
  block-size: 24px;
}

.card-deck {
  @apply grid gap-4 mb-10;
  grid-template-columns: repeat(auto-fit, minmax(min(370px, 100%), 1fr));
}

.select-yrs {
  @apply text-main cursor-pointer active:translate-y-px;
  text-decoration-line: underline;
  text-decoration-style: dotted;
  text-decoration-skip-ink: auto;
  text-decoration-thickness: 8%;
  text-underline-offset: auto;
  text-underline-position: from-font;
}
</style>
