<script setup>
import Info from '@/assets/images/icons/info.svg'
import Filter from '@/assets/images/icons/filter.svg'
import Search from '@/assets/images/icons/search.svg'
import ArrowDown from '@/assets/images/icons/arrow-down.svg'
</script>

<template>
  <!-- Главный поиск -->
  <section class="w-viewport max-w-full mx-auto px-main py-section">
    <div class="flex items-center justify-between mb-3">
      <div class="flex items-start">
        <h1 class="max-w-max font-heading text-heading uppercase leading-10">
          Реестр физкультурно-спортивных организаций
        </h1>
        <button class="px-2 py-2 text-main active:translate-y-px" type="button" aria-label="Поиск">
          <Info class="flex-none w-6 h-6" aria-hidden="true" />
        </button>
      </div>
      <div class="flex-auto flex gap-4 justify-end">
        <div class="min-w-96 rounded-full bg-bgColor shadow-button flex gap-2 items-center pr-4">
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
          class="p-2 flex items-center justify-center bg-bgColor rounded-2xl shadow-button active:translate-y-px border-transparent hover:bg-linkHover"
        >
          <Filter class="text-icon w-6 h-6" aria-hidden="true" />
        </Button>
      </div>
    </div>
    <div class="flex gap-4 flex-wrap">
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
  <section class="w-viewport max-w-full mx-auto px-main pb-section">
    <p class="text-right">Всего найдено: 5448</p>
  </section>
</template>

<style scoped>
.search-divider {
  background-color: rgba(0, 0, 0, 0.2);
  inline-size: 1px;
  block-size: 24px;
}
</style>
