/* Funcion para aplicar filtros */
function aplicarfiltros() {
    let app = new Vue({
        el: '#app',
        data: {
            titulo: 'yo manejando',
            subtituslos: 'estas viendo el cursp de vue',
            nombre: '',
            cursosSeleccionados: [],
            cursos: [
                {
                    nombre: 'Curso de Vue.js',
                    value: 'vue'
                },
                {
                    nombre: 'Curso de seo',
                    value: 'seo'
                },
                {
                    nombre: 'Curso de react',
                    value: 'react'
                },
                {
                    nombre: 'Curso de growth',
                    value: 'growth'
                },
            ]
        },
        filters: {
            uppercase: str => str.toUpperCase(),
            lowercase: str => str.toLowerCase(),
            capitalize: function (str) {
                if (typeof str !== 'string') return ''
                return str.charAt(0).toUpperCase() + str.slice(1)
            }

        },
        methods: {
            submit: function () {
                console.log('Ejecuta el metodo submit')
                console.log(this.cursosSeleccionados)
            }
        }
    })
}

/*probando*/

function contador() {
    let app = new Vue({
        el: '#app',
        data: {
            contador: 0
        },
        methods: {
            sumar: function () {
                this.contador++
            },
            restar: function () {
                this.contador--
            }
        }
    })
}