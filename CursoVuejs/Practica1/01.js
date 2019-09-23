const app = new Vue({
    el: '#app',
    data: {
        titulo: 'Hola como estas',
        frutas: ['Manzana', 'Peras', 'Naranjas', 'Mandarinas'],
        objetos: [{
                nombre: 'Juan K',
                cedula: '205530947',
                estado: 'falso',
                anio: 15
            },
            {
                nombre: 'Yess',
                cedula: '109530714',
                estado: 'falso',
                anio: 20
            },
            {
                nombre: 'Susuna',
                cedula: '701230474',
                estado: 'falso',
                anio: 30
            }
        ],
        nuevaPersona: ""

    },
    methods: {
        agregarPersona() {
            this.objetos.push({
                nombre: this.nuevaPersona,
                anio: 0
            })
            this.nuevaPersona = ""
        }


    }
})