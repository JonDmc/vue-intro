const component = {
    data() {
        return { // READ & WRITE data
            name: 'Jon',
            count: 0,
            inputTask: '',
            // tasks: ['Eat', 'Code', 'Walk the dog']
            tasks: []
            // headerClass: 'text-green'
        }

    }, //method
    computed: { //READ data
        greetings() {
            if (!this.name.length) {
                return 'Who are you?'
            }
            return `Hello, ${this.name}`
        },
        headerClass() {
            return !this.name.length ? 'text-red' : 'text-green'
        }
    },
    methods: { //handler for v-on
        increment() {
            // this.count = this.count +1
            this.count++
        },
        decrement() {
            this.count--
        },

        submitHandler() {
            this.tasks.push(this.inputTask)
            this.inputTask = ''
        }
    }
}

Vue.createApp(component).mount('#app');