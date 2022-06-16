<template>
    <div>
        <div v-if="isLoading" class="vh-100 d-flex justify-content-center align-items-center">
            <Loader />
        </div>

        <div v-if="posts.length">
            <div class="card my-3" v-for="post in posts" :key="post.id">
                <h4 class="card-header">{{post.title}}</h4>
                <div class="card-body">
                    <p class="card-text">
                        {{post.content}}
                    </p>

                    <h5 class="card-title">
                        <span class="text-underline">Category</span>
                        : {{ post.category.label }}
                    </h5>
                    <h5 class="card-title">
                        <span class="text-underline">Tags</span> : 
                        <span v-for="tag in post.tags" :key="tag.id" class="badge text-white mr-1" :style="`background-color: ${tag.color}`" >
                            {{tag.label}}
                        </span>

                    </h5>
                </div>
            </div>
        </div>

        <p v-else class="text-center">Non sono presenti post</p>
    
    </div>
</template>

<script>
    import axios from 'axios';
    import Loader from '../includes/Loader.vue';

    export default {
        name: "PostsList",

        components: {
            Loader,
        },

        data() {
            return {
                posts: [],
                isLoading: true,
            }
        },


        methods: {

            getPosts() {
                axios.get('http://127.0.0.1:8000/api/posts')
                    .then((res) => {

                        this.posts = res.data.posts;
                    })
                    .finally(() => (this.isLoading = false));
            }
        },

        created() {
            this.getPosts();
        },
    }

</script>

<style lang="scss" scoped>

    .text-underline{
        text-decoration: underline;
    }

</style>
