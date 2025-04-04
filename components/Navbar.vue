<script setup lang="ts">
import { ref, onMounted, nextTick } from 'vue'

// Ensure consistent loading by deferring more complex UI operations
const drawer = ref(false)
const mounted = ref(false)

onMounted(() => {
  // Allow for UI to stabilize before showing mobile drawer
  nextTick(() => {
    mounted.value = true
  })
})
</script> 