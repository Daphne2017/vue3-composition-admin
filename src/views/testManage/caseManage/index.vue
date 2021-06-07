
<template>
  <div class="app-container">
    <aside>
      <a
        href="https://github.com/kamranahmedse/driver.js"
        target="_blank"
      >用例管理</a>
    </aside>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'

export default defineComponent({
  setup() {
    onMounted(() => {
      console.log('onMounted')
    })

    const initData = () => {
      console.log('initData')
    }

    return {
      initData
    }
  }
})

</script>
