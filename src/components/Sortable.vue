<script>
import { h, ref, onMounted } from "vue";
import Sortable from "sortablejs";

export default {
  props: {
    sortable: {
      type: Object,
      default: () => ({}),
    },
    tag: {
      default: "ul",
      required: true,
    },
  },
  setup(props, { slots }) {
    const root = ref(null);

    onMounted(() => {
      const sortable = Sortable.create(root.value);
    });

    return () => h(props.tag, { ref: root }, slots.default());
  },
};
</script>
