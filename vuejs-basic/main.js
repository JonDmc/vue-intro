const component = {
    data() {
        return {
            name: 'Jon'
        }

    }, //method
    computed: {
        greetings() {
            if (!this.name.length) {
                return 'Who are you?'
            }
            return `Hello, ${this.name}`
        }
    }
}

Vue.createApp(component).mount('#app');