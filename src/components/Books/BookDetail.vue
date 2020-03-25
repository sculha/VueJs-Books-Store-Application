<template>
    <div class="container pt-5 ">
        <div v-for="item in book" :key="item.id">
            <h3>{{ item.title }}</h3>
            <hr>
            <div class="row" >
                <div class="col-4 border-right">
                    <img :src="item.imageLink" :alt="book.title">
                </div>
                <div class="col-8">
                    <p><b>Kitabın Yazarı:</b> {{item.author}}</p>
                    <p><b>Yayın Evi:</b> {{item.publishingHouse}}</p>
                    <p><b>Sayfa Sayısı:</b> {{item.pages ? item.pages : '-'}}</p>
                    <p><b>Basım Yılı:</b> {{item.year}}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";
export default {
    data() {
        return{
            bookList: [],
            book: undefined  
        }
    },
    created() {
        axios.get('/books.json')
        .then(response => {
            let data = response.data;
            for (let key in data) {
                this.bookList.push({ ...data[key], id: key });
            }
            this.getData();
        })
        .catch(e => {console.log(e)});

    },
    computed: {
        productId () {
            return this.$route.params.slug // From route
        }
    },
    methods: {
        getData() {
            let data = this.bookList;

            console.log(this.productId);

            const book = data.filter(item => {
                return item.path === this.productId;
            });


            this.book = book;
            
        }
    }
}
</script>