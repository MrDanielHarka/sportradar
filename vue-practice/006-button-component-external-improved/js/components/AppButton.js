export default {
  template: `
            <button
            :class="{
              'border rounded px-4 py-2 disabled:cursor-not-allowed' : true,
              'bg-green-200 hover:bg-green-400' : type === 'success',
              'bg-blue-400 hover:bg-blue-600' : type === 'primary',
              'bg-red-200 hover:bg-red-400' : type === 'danger',
              'is-loading': processing
            }"
            :disabled="processing">
              <slot>
              </slot>
            </button>`,
  props: {
    type: { type: String, default: 'primary' },
    processing: {
      type: Boolean,
      default: false,
    },
  },
};
