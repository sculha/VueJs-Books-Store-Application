<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
            <a class="navbar-brand" href="#"></a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <router-link to="/" tag="li"  active-class="active" class="nav-item">
                        <a class="nav-link">Ana Sayfa</a>
                    </router-link>
                    <router-link to="/kitaplar" tag="li"  active-class="active" class="nav-item">
                        <a class="nav-link">Kitaplar</a>
                    </router-link>
                        <router-link to="/kitap-ekle" tag="li" active-class="active" class="nav-item">
                        <a class="nav-link">Kitap Ekle</a>
                    </router-link>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
export default {
    
}
</script>

<style>
    .collapse{
        margin: 0 -15px;
    }
</style>