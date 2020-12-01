const app = new Vue({
    el: '#app',

    data() {
        return {
            horasCurso: '',
            nombreCurso: '',
            cursos: [],
            totalTime: 0,
            error: false
        }
    },

    methods: {
        guardaCurso(){
            if(!this.horasCurso || !this.nombreCurso) {return this.error = true}
            this.cursos.push({title: this.nombreCurso, time: parseInt(this.horasCurso) })
            this.totalTime = 0
            this.cursos.forEach(element => {
                this.totalTime += parseInt(element.time)
            });
            this.horasCurso = ''
            this.nombreCurso = ''
        }
    }
})