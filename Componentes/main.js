/**
 * Funcion con componentes
 */

function aplicarComponentes() {
    Vue.component('curso', {
        props: ['curso'],
        methods: {
            onchange: function (ev) {
                this.$emit('checked', this.curso.value, ev.target.checked)
            }
        },
        template: `
          <div>
            <input type="checkbox" v-bind:id="curso.value" v-bind:value="curso.value" @change="onchange">
            <label v-bind:for="curso.value">{{ curso.nombre }}</label>
          </div>
        `
    })

    let app = new Vue({
        el: '#app',
        data: {
            cursos: [
                { nombre: 'Curso de Introducción a Vue.js', value: 'vue' },
                { nombre: 'Curso de SEO', value: 'seo' },
                { nombre: 'Curso React y Redux', value: 'react' },
                { nombre: 'Curso de Growth Marketing', value: 'growth' }
            ],
            cursosSeleccionados: []
        },
        methods: {
            submit: function () {
                console.log('Se ejecuta el método submit')
                console.log(this.cursosSeleccionados)
            },
            selectCurso: function (curso, checked) {
                if (checked) {
                    this.cursosSeleccionados.push(curso)
                } else {
                    let index = this.cursosSeleccionados.indexOf(curso)
                    this.cursosSeleccionados.splice(index, 1)
                }
            }
        }
    })
}