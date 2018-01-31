<template>
    <div class="card">
        <a target="_blank" :href="url" class="card__link">
            <p class="card__album_name">{{title}}, {{artist}}</p>
            <div class="card__album_image">
                <img :src="image" alt="">
            </div>
        </a>
    </div>
</template>

<script>
    export default {
        props: ['title', 'image', 'artist', 'url']
    }
</script>

<style scoped>
    .card {
        margin: 20px auto;
        display: flex;
        width: 500px;
        box-sizing: border-box;
        justify-content: space-between;
        background-color: lightgreen;
    }
    .card__link {
        width: 100%;
        display: flex;
        text-decoration: none;
        color: #000;
    }
    .card__album_name {
        flex: 1 1 30%;
        margin: 20px;
    }
    .card__album_image {
        margin: 20px;
    }
</style>