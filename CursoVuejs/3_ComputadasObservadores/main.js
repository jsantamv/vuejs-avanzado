var vm = new Vue({
    el: '#example',
    data: {
        message: 'Hello'
    },
    computed: {
        // un getter computado
        reversedMessage: function () {
            // `this` apunta a la instancia de vm
            return this.message.split('').reverse().join('-')
        }
    }
})