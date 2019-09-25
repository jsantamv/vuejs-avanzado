const app = new Vue({
    el: '#app',
    data: {
        saludo: 'soy ciclo de vida de vue'
    },
    beforeCreate() {
        console.log('beforeCreate')
    },
    created() {
        //al crear los metodos, observadores y eventos, pero aun no accede al DOM.
        //Aun no se puede acceder a 'el'
        console.log('created')
    },
    beforeMount() {
        // Se ejecuta antes de insertar el DOM
        console.log('beforeMount')
    },
    mounted() {
        // Se ejecuta al insertar al DOM
        console.log('mounted')
    },
    beforeUpdate() {
        //Al detectar un cambio
        console.log('beforeUpdate')
    },
    updated() {
        //al realizar cambios
        console.log('updated')
    },
    beforeDestroy() {
        //se destruye toda la instancia
        console.log('beforeDetroy')
    },
    destroyed() {
        // se destruye toda la instancia
        console.log('destroyed')
    },
    methods: {
        destruir() {
            this.$destroy()
        }
    },

})