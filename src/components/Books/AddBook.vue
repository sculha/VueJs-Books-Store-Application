<template>
    <div class="container pt-5 pb-5">
        <div class="row justify-content-md-center">
            <div class="col-md-6">
                <h3>Yeni Kitap Ekle</h3>
                <hr>
                <form @submit.prevent="onSubmit" action="">
                    <div class="form-group">
                        <label class="control-label">Kitap Adı</label>
                        <input v-model="post.title" type="text" class="form-control" placeholder="Kitap Adı">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Yazar Adı Soyadı</label>
                        <input v-model="post.author" type="text" class="form-control" placeholder="Yazar Adı Soyadı">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Kitap Resmi</label>
                        <input v-model="post.imageLink" type="text" class="form-control" placeholder="Kitap Resmi">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Yayınevi Adı</label>
                        <input v-model="post.publishingHouse" type="text" class="form-control" placeholder="Yayınevi Adı">
                    </div>
                    <div class="row">
                        <div class="col-6">
                            <div class="form-group">
                                <label class="control-label">Kitap Sayfa Sayısı</label>
                                <input v-model="post.pages" type="text" class="form-control" placeholder="Kitap Sayfa Sayısı">
                            </div>
                        </div>
                        <div class="col-6">
                            <div class="form-group">
                                <label class="control-label">Kitabın Yayın Yılı</label>
                                <input v-model="post.year" type="text" class="form-control" placeholder="Kitabın Yayın Yılı">
                            </div>
                        </div>
                    </div>
                    <button @click="$router.push('/book-list')" class="btn btn-danger">İptal</button>
                    <button type="submit" class="btn btn-info">Kaydet</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from "axios";

export default {
    data() {
        return {
            post: {
                title: '',
                author: '',
                imageLink: '',
                publishingHouse: '',
                pages: '',
                year: ''
            }
        }
    },
    methods: {
        onSubmit() {
            let url = this.slugify(this.post.title);
            axios.post('/books.json', {...this.post, path: url,  updatedDate: new Date()})
            .then(response => {
                this.post = [];
            })
            .catch(e => {console.log(e)});
        },
        slugify(text) {
            var trMap = {
                'çÇ':'c',
                'ğĞ':'g',
                'şŞ':'s',
                'üÜ':'u',
                'ıİ':'i',
                'öÖ':'o'
            };
            for(var key in trMap) {
                text = text.replace(new RegExp('[' + key + ']','g'), trMap[key]);
            }
            return text.replace(/[^-a-zA-Z0-9\s]+/ig, '')
                .replace(/\s/gi, "-")
                .replace(/[-]+/gi, "-")
                .toLowerCase();

        }
    }
}
</script>

<style>
label.control-label{
    font-size: 12px;
    font-weight: 500;
}
</style>