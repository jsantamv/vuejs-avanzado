/*Cuando se utiliza un TEMPLATE todo debe de estar
           Contenido en un DIV
       */
Vue.component('saludo', {
    template: //html
        `
                <div>
                    <h1>{{saludo}}</h1>
                    <h3>fasdfad</h3>
                </div>
            `,
    //data en forma de funcion 
    data() {
        return {
            saludo: 'Hola desde vue'
        }
    }
})