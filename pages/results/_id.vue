<template>
    <div>
        <h1>Results for: {{$route.params.id}}</h1>
        <div v-if="albumData.length > 0">
            <div v-for="(album, index) in albumData">
                <app-card
                        :title="album.collectionCensoredName"
                        :image="album.artworkUrl100"
                        :artist="album.artistName"
                        :url="album.artistViewUrl"
                ></app-card>
            </div>
        </div>
        <div v-if="albumData.length <= 0">Wrong name</div>
    </div>
</template>

<script>
    import axios from 'axios'
    import Card from '@/components/Cards/Card.vue'
    export default {
        asyncData({params}) {
            return axios.get(`https://itunes.apple.com/search?term=${params.id}&entity=album`)
                .then((response) => {
                    return {albumData: response.data.results}
                })

                .catch((e) => alert(e))
        },
        middleware: 'search',
        components: {
            'app-card': Card
        }
    }
</script>

<style>
    .container {
        text-align: center;
    }
</style>