// console.log("Hello, Vue")
const app = Vue.createApp({
    data(){
        return {
            url: 'http://www.thenetninja.co.uk',
            showBooks: true,
            books: [
                { title: 'name of the wind', author:'patrick rothfuss'},
                { title: 'the way of kings', author:'brandon sanderson'},
                { title: 'the final empire', author:'brandon sanderson'},
            ]
        }
    },
    methods:{
        // changeTitle(title){
        //     // this refers to app
        //     this.title = title
        // }
        toggleShowBooks(){
            this.showBooks = !this.showBooks
        },

        // Mouse event methods
        // handleEvent(e, data){
        //     console.log(e, e.type)
        //     if(data){
        //         console.log(data)
        //     }
        // },
        // handleMousemove(e){
        //     this.x = e.offsetX
        //     this.y = e.offsetY
        // }
    }
})

app.mount("#app")

