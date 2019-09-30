Vue.component('hijo', {
    props: ["numero"],
    template: //html
        `
        <div class="py-5 bg-success">
            <h4>Componente Hijo</h4>
            <h5>{{numero}}</h5>
        </div>
    `,
    data() {
        return {
            nombre: 'Ignacio'
        }
    },
    mounted() {
        //se ejecuta cuando el dom este construido
        //vamos a crear un evento 
        this.$emit('nombreHijo', this.nombre)
    },

})