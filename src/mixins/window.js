export default {
  data() {
    return {
      isDesktop: true
    };
  },

  mounted() {
    this.windowUpdateWidth();
    window.addEventListener('resize', this.windowUpdateWidth);
  },

  methods: {
    windowUpdateWidth() {
      let width = window.innerWidth;

      if (width < 576) {
        this.isDesktop = false;
      } else {
        this.isDesktop = true;
      }
    }
  }
};