<template>
    <div>
        <h1>Search</h1>
        <br>

        <form @submit.prevent="submit">
            <input placeholder="Enter Artist" v-model.lazy="search" autofocus></input>
        </form>
    </div>
</template>

<script>


export default {
    components: {

    },
    data() {
        return {
            search: ''
        }
    },
    methods: {
        submit(event) {
            this.$router.push(`results/${this.search}`)
        }
    }
}
</script>

<style>
    * {
        text-align: center;
    }

    h1 {
        padding: 20px;
    }
</style>
