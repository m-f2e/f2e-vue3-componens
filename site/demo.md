

_你好， {{ msg }}_

<RedDiv>
_当前计数为： {{ count }}_
</RedDiv>
<br />
<button @click="count++">点我！</button>

<script setup>
import { h, ref } from 'vue'

const RedDiv = (_, { slots }) => h(
  'div',
  {
    class: 'red-div',
  },
  slots.default?.()
)
const msg = 'Markdown 中的 Vue'
const count = ref(0)
</script>

<style scoped lang="scss">
.red-div {
  color: red;
}
</style>