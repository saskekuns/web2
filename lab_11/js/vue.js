const { createApp } = Vue;

createApp({
  data() {
    return {
      textInput: '',
      maxCharacters: 10,
      entries: []
    };
  },
  methods: {
    addEntry() {
      const date = new Date();
      const formattedDate = new Intl.DateTimeFormat('ru', { year: 'numeric', month: 'numeric', day: 'numeric', hour: 'numeric', minute: 'numeric' }).format(date);

      this.entries.push({
        id: Date.now(),
        content: this.textInput,
        timestamp: formattedDate
      });
      this.textInput = '';
    }
  },
  computed: {
    isTextTooLong() {
      return this.textInput.length > this.maxCharacters;
    }
  },
}).mount("#app");
