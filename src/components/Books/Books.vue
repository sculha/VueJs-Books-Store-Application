<template>
    <div class="container pt-5 pm-5">
        <div class="book-wrap">
            <div class="head">
                <h3>Kitaplar</h3>
                <input class="form-control" type="text" placeholder="Kitak Adı" v-model="filter_name"/>
            </div>

            <div class="body mb-5">
                <div class="row d-flex flex-wrap flex-row justify-content-center align-item-center">
                    <div v-for="book in filteredRows.slice(pageStart, pageStart + countOfPage)" :key="book.id" class="card">
                        <router-link 
                            tag="img" 
                            :src="book.imageLink" 
                            :alt="book.title" 
                            class="card-img-top"
                            :to="{ name : 'bookDetail', params: {slug : book.path} }"> 
                                {{book.title}} 
                        </router-link>
                        <div class="card-body">
                            <router-link 
                                tag="h5" 
                                class="card-title" 
                                :to="{ name : 'bookDetail', params: {slug : book.path} }"> 
                                    {{book.title}} 
                                </router-link> 
                            <p class="card-text">{{book.author}}</p>
                        </div>
                    </div>
                </div>
            </div>

            <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                    <li class="page-item" 
                        :class="{ disabled: currPage === 1 }" 
                        @click.prevent="setPage(currPage - 1)">
                            <a class="page-link" href="#" aria-label="Previous">
                                <span aria-hidden="true">&laquo;</span>
                            </a>
                        </li>
                    <li class="page-item" 
                        v-for="n in totalPage" 
                        :key="n"
                        :class="{ active: currPage === n }" 
                        @click.prevent="setPage(n)">
                            <a class="page-link" href="">{{ n }}</a>
                        </li>
                    <li class="page-item" 
                        :class="{ disabled: currPage === totalPage }" 
                        @click.prevent="setPage(currPage + 1)">
                            <a class="page-link" href="#" aria-label="Next">
                                <span aria-hidden="true">&raquo;</span>
                            </a>
                        </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return{
            bookList: [],
            countOfPage: 10,
            currPage: 1,
            filter_name: ''
        }
    },
    computed: {
        filteredRows() {
            let filter_name = this.filter_name.toLowerCase();

            return ( this.filter_name.trim() !== '' ) ? this.bookList.filter((item) => { 
                    return item.title.toLowerCase().indexOf(filter_name) > -1; 
                }) : this.bookList;
            
        },
        pageStart() {
            return (this.currPage - 1) * this.countOfPage;
        },
        totalPage() {
            return Math.ceil(this.filteredRows.length / this.countOfPage);
        }
    },
    methods: {
        setPage(idx) {
            if( idx <= 0 || idx > this.totalPage ) {
                return;
            }
            this.currPage = idx;
        }
    },
    created() {
        axios.get('/books.json')
        .then(response => {
            let data = response.data;
            for (let key in data) {
                this.bookList.push({ ...data[key], id: key });
            }
        })
        .catch(e => {console.log(e)});
    }
    
}
</script>

<style>
.book-wrap .head{
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
    padding: 10px 0;
}

.book-wrap .head input{
    max-width: 30%;
}

.book-wrap .body{
    min-height: 350px;
}

.book-wrap .card{
    width: calc(100% / 6);
    margin: 0 15px 15px;
}

.book-wrap .card .card-title{
    font-size: 14px;
    font-weight: bold;
    line-height: 1.4;
    cursor: pointer;
}
.book-wrap .card .card-body{
    padding: 15px;
}
.card-img-top{
    width: 150px;
    height: 200px;
    margin: auto;
    background-size: cover;
    background-position: center;
    cursor: pointer;
}
</style>