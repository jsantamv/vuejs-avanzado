
const app = new Vue({
    el: '#appMantRol',
    data: {
        Rol: {
            Rol_codigo: 0,
            Rol_nombre: "",
            Rol_estado: "",
            Rol_usuarioreg: ""
        },
        listaRoles: []
    },
    mounted() {
        this.listarRoles();
    },
    methods: {
        listarRoles: async function () {
            const respuesta = await fetch("ListarRoles", {
                method: "POST",
                data: this.Rol
            })
            const result = await respuesta.json();
            this.listaRoles = await result.Data;
            this.Rol.Rol_usuarioreg = JSON.parse(localStorage.getItem("Usuario"))[0].Usu_usuario
        },
        editar: function (elemento) {
            this.Rol.Rol_codigo = elemento.Rol_codigo
            this.Rol.Rol_nombre = elemento.Rol_nombre
            this.Rol.Rol_estado = elemento.Rol_estado
        },
        guardar: async function () {
            const respuesta = await fetch("GuardarRol", {
                headers: { "accept": "application/json", "content-type": "application/json" },
                method: "POST",
                body: JSON.stringify({
                    rol: this.Rol
                })
            })
            const result = await respuesta.json()
            //En caso correcto
            if (result.Data.Status === ResponseStatus.Success) {                
                this.nuevo()
            }
            await swal(result.MensajeEncabezado, result.Mensaje, result.MensajeInfo)
        },
        checked: function () {
            this.Rol.Rol_estado = document.getElementById("chkDato").checked ? 'A' : 'I'
        },
        nuevo: function () {
            this.Rol.Rol_codigo = 0
            this.Rol.Rol_nombre = ""
            this.Rol.Rol_estado = "I"
        }
    }
})