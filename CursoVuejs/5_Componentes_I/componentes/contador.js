Vue.component('contador', {
    template: //html
        `
        <div>
            <h3>{{numero}}</h3>
            <button @click="numero++" class="btn btn-primary">+</button>
        </div>
    `,
    data() {
        return {
            numero: 0
        }
    },

})