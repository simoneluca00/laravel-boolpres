<template>
    <div>
        <Header />

        <main>
            <div class="container">

                <router-view> </router-view>

            </div>
        </main>
    </div>
</template>

<script>
    import Header from '../components/layout/Header.vue';

    export default {
        name: 'App',

        components: {
            Header,
        }
    }

</script>
