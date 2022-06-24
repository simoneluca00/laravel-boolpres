<template>
    <div>
        <div v-if="!isError">
            <h2>pagina singolo post</h2>

            <p>{{post.title}}</p>
        </div>

         <Alert v-if="isError" message="Il post non esiste, prova a cercare qualcos'altro" type="danger" />
    </div>
</template>

<script>
import axios from 'axios'
import Alert from '../includes/Alert.vue'
export default {
    name: 'PostDetails',

    components: {
        Alert,
    },

    data() {
        return {
            post: [],
            isError: false,
        }
    },

    mounted(){
        this.getPost()
    },

    methods: {

        getPost(){
            axios.get(`http://127.0.0.1:8000/api/posts/${ this.$route.params.slug }`)
            .then((res) => {
                this.post = res.data;
                console.log(this.post);
            }).catch((error) => {
                console.log(error)
                
                this.isError = true;
            })
        }

    }
}
</script>