<template>
    <div>
        <header>
            <nuxt-link class="header__link_home" to="/">Home</nuxt-link>
            <button class="header__button_refresh" @click.prevent="refresh">
                <i class="material-icons">autorenew</i>
            </button>
        </header>
    </div>
</template>

<script>
 export default {
    methods: {
        refresh() {
            this.$router.push('/')
        }
    }
    }
</script>

<style scoped>
    header {
        margin-top: 20px;
        min-height: 100px;
        width: 100%;
        display: flex;
        background-color: #00d7ff;
        align-items: center;
        justify-content: space-around;
        padding-left: 40px;
        padding-right: 40px;
        font-size: 27px;
    }

    .header__link_home {
        text-decoration: none;
        color: #fff;
    }
    .header__button_refresh {
        outline: none;
        border: none;
        padding: 10px;
        border-radius: 2em;
        color: #fff;
        background-color: #00ff8d;
        cursor: pointer;
        height: 42px;
    }
    .header__button_refresh:hover {
        background-color: #00ff0d;
    }
</style>