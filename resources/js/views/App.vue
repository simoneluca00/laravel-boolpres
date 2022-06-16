<template>
    <div>
        <Header />

        <Main />
    </div>
</template>

<script>
import Header from '../components/layout/Header.vue';
import Main from '../components/layout/Main.vue';

    export default {
        name: 'App',

        components: {
            Header,
            Main,
        }
    }
</script>
