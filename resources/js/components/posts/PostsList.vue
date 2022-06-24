<template>
    <div>
        <div v-if="isLoading" class="vh-100 d-flex justify-content-center align-items-center">
            <Loader />
        </div>

        <div v-if="posts.length">

            <Pagination :paginationProps="pagination" @on-page-change="getPosts"/>

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
                <div class="card-footer text-center">
                    <router-link :to="{name: 'post-details', params: { slug: post.slug } }" class="btn btn-primary">View Info</router-link>
                </div>
            </div>
        </div>

        <p v-else class="text-center">Non sono presenti post</p>
    
    </div>
</template>

<script>
    import axios from 'axios';
    import Loader from '../includes/Loader.vue';
    import Pagination from '../includes/Pagination.vue';

    export default {
        name: "PostsList",

        components: {
            Loader,
            Pagination
        },

        data() {
            return {
                posts: [],
                pagination: {},
                isLoading: true,
            }
        },


        methods: {

            getPosts( page = 1) {
                axios.get(`http://127.0.0.1:8000/api/posts?page=${page}`)
                    .then((res) => {

                        console.log(res.data.posts.data);

                        const {data, current_page, last_page} = res.data.posts;

                        this.posts = data;

                        this.pagination = {
                            currentPage: current_page,
                            lastPage: last_page,
                        }

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
