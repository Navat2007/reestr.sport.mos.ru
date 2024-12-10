<script setup>
import { onMounted, ref } from 'vue'
import ArrowDown from '@/assets/images/icons/arrow-down.svg'
import CheckCircle from '@/assets/images/icons/check-circle.svg'
import Popover from 'primevue/popover'
import Search from '@/assets/images/icons/search.svg'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  items: {
    type: Array,
    required: true
  },
  itemSelected: {
    type: Array,
    required: false,
    default: []
  }
});
const emit = defineEmits(['onSelect']);

const search = ref('')
const isFilterActivityTypeOpen = ref(false);
const selectedItems = ref([]);

const onSelect = (item) => {
  if(!selectedItems.value.includes(item))
  {
    selectedItems.value.push(item);
  }
  else
  {
    selectedItems.value.splice(selectedItems.value.indexOf(item), 1);
  }

  emit('onSelect', selectedItems.value);
};

onMounted(() => {
  selectedItems.value = props.itemSelected;
})
</script>

<template>
  <Button
    rounded
    class="filter"
    :class="{
        'bg-main text-textAccent': selectedItems.length > 0,
        'bg-bgColor bg-transparent text-textMain': selectedItems.length === 0,
      }"
    @click="(event) => isFilterActivityTypeOpen.toggle(event)"
  >
    <span class="flex-auto text-left xl:text-center xl:flex-none">{{title}}</span>
    <ArrowDown class="w-6 h-6" aria-hidden="true" />
  </Button>

  <Popover ref="isFilterActivityTypeOpen">
    <div class="-m-3">
      <div class="m-2 flex gap-2 px-2 items-center rounded-xl bg-bgColor border border-divider">
        <Button
          class="flex-none p-0 flex items-center justify-center bg-transparent border-transparent active:translate-y-px"
        >
          <Search class="text-icon w-6 h-6" aria-hidden="true" />
        </Button>
        <input
          v-model="search"
          type="search"
          class="w-full py-2 rounded-2xl focus:outline-none"
          placeholder="Поиск"
        />
      </div>
      <ul class="max-w-lg max-h-48 xl:max-w-none overflow-y-auto">
        <li
          v-for="item in items.filter((item) => item.toLowerCase().includes(search.toLowerCase()))"
          class="flex items-center gap-2 px-4 py-2 cursor-pointer hover:bg-linkHover"
          @click="onSelect(item)"
        >
          <CheckCircle
            class="flex-none w-5 h-5 text-icon"
            :class="{
              'text-green-500': selectedItems.includes(item)
            }"
          />
          <p>{{ item }}</p>
        </li>
      </ul>
    </div>
  </Popover>
</template>

<style scoped>
.filter{
  @apply border-divider xl:border-transparent xl:shadow-button flex gap-2 items-center px-4 py-2 hover:bg-main hover:text-textAccent active:translate-y-px;
}
</style>
