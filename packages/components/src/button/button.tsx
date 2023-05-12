import { PropType, computed, defineComponent } from "vue";

export default defineComponent({
  name: 'MButton',
  props: {
    type: {
      type: String as PropType<'default'|'primary'>,
      default: 'default'
    }
  },
  setup(props, { slots }) {
    const prefixCls = 'm-btn'
    const cls = computed(() => ({
      [prefixCls]: true,
      [`${prefixCls}-${props.type}`]: props.type !== 'default',
    }))
    return () => {
      return <button class={cls.value}>{ slots.default?.() }</button>
    }
  }
})