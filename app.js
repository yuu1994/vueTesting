const app = Vue.createApp({
    data(){
        return {
            title : "demon slayer",
            studio : "MAPPA",
            genre : "action/shounen",
            age : 20 ,
            showBook : true
        }     
    },
    methods: {
        increase(){
            this.age ++
        }
    },

});

app.mount('#app');