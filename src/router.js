import Vue from 'vue';
import Home from './components/Home';
import Books from './components/Books/Books';
import AddBook from './components/Books/AddBook';
import BookDetail from './components/Books/BookDetail';
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
    {path: '/', component: Home},
    {path: '/kitaplar', component: Books},
    {path: '/kitaplar/:slug', component: BookDetail, name: 'bookDetail'},
    {path: '/kitap-ekle', component: AddBook},
    {path: '*', redirect: '/'}
]

export const router = new VueRouter({ 
    mode: 'history',
    routes
   });