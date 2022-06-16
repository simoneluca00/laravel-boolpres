<template>
    <main>
        <div class="container">
            <PostsList />
        </div>
    </main>
</template>

<script>

    import PostsList from '../posts/PostsList.vue';
    export default {
        name: 'Main',

        components: {
            PostsList,
        },
    }

</script>
