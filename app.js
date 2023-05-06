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
        },
        mouseOverHandler(event,data){
            console.log("moveover is working",event.type,data);
        },
        mouseLeaveHandler(event){
            console.log("mouse leave is working",event.type);
        },
        dblClickHandler(event){
            console.log("double click is working",event.type);
        },
    },

});

app.mount('#app');