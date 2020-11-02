const app = new Vue({
    el: '#app',

    data() {
        return {
            horasCurso: 0,
            nombreCurso: '',
            listaCursos: []
        }
    },

    computed: {

    },

    methods: {
        guardaCurso(){
            return this.listaCursos.push({nombreCurso: this.nombreCurso, horasCurso : this.horasCurso})
            document.querySelector('#titulo-de-curso').reset()
        }
    }
})