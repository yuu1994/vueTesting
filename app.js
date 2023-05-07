const app = Vue.createApp({
    data(){
        return {
            books : [
                {
                    title : "demon slayer",
                    studio : "ufotable",
                    genre : "action/shounen",
                    year : 2019 ,
                    link:"https://en.wikipedia.org/wiki/Demon_Slayer:_Kimetsu_no_Yaiba",
                    img: '/img/ds.jpg',
                    isFav: true ,
                },
                {
                    title : "mushoku",
                    studio : "MAPPA",
                    genre : "fantasy,isekai",
                    year : 2020 ,
                    link:"https://en.wikipedia.org/wiki/Mushoku_Tensei",
                    img:"img/mt.jpg",
                    isFav: true ,
                },
                {
                    title : "AOT",
                    studio : "MAPPA",
                    genre : "action",
                    year : 2010 ,
                    link:"https://en.wikipedia.org/wiki/Attack_on_Titan",
                    img:"img/aot.jpg",
                    isFav: true ,
                },
                {
                    title : "NGNL",
                    studio : "Madhouse",
                    genre : "isekai,fantasy",
                    year : 2007 ,
                    link:"https://en.wikipedia.org/wiki/No_Game_No_Life",
                    img:"img/ngnl.jpg",
                    isFav: true ,
                }
            ],
            showBook : true
        }     
    },
            methods: {
                clickHandler(book){
                    book.isFav = !book.isFav ;
                }
            },

            computed: {
                filterBooks(){
                    return this.books.filter((book)=>{
                        return book.isFav ;
                    })
                }
            }

});

app.mount('#app');