<template>
    <div>

        <Alert v-if="sentMessage" type="success" message="Il messaggio è stato inviato!" />

        <div class="my-4">

            <small class="form-text text-muted mb-3">* Campo obbligatorio</small>

            <div class="form-group">
                <label for="email">* Email:</label>

                <input type="email" class="form-control" id="email" placeholder="Inserisci l'email"
                    v-model="form.email">

                <small class="form-text text-danger">{{errors.email}}</small>
            </div>

            <div class="form-group">
                <label for="message">* Messaggio:</label>

                <textarea class="form-control" id="message" rows="3" placeholder="Inserisci il messaggio"
                    v-model="form.message"></textarea>

                <small class="form-text text-danger">{{errors.message}}</small>
            </div>

            <div class="text-center">
                <button class="btn btn-primary" @click="sendForm()">Invia</button>
            </div>

        </div>


    </div>
</template>

<script>
    import axios from 'axios';
    import Alert from '../includes/Alert.vue';

    export default {
        name: 'ContactPage',

        components: {
            Alert,
        },

        data() {
            return {

                form: {
                    email: null,
                    message: null
                },

                errors: {
                    email: null,
                    message: null
                },

                sentMessage: false,

            }
        },

        methods: {
            sendForm() {

                this.getErrors();

                axios.post('http://127.0.0.1:8000/api/message', this.form)
                    .then(() => {

                        if (this.form.email && this.form.message && this.validEmail(this.form.email)) {
                            this.sentMessage = true

                            this.hideAlert();
                        } 

                    })
                    .then(() => {

                        this.form.email = null,
                        this.form.message = null
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            },

            getErrors(){
                
                if (!this.validEmail(this.form.email)) {
                    this.errors.email = "Inserisci un'email valida!"
                }

                if (!this.form.email) {
                    this.errors.email = "L'email è obbligatoria!"
                }

                if (!this.form.message) {
                    this.errors.message = "Inserisci il testo per inviare la mail!"
                }

                setTimeout(() => {
                    this.errors.email = null
                    this.errors.message = null
                }, 25000)
            },

            validEmail(email) {
                var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                return re.test(email);
            },

            hideAlert(){
                setTimeout(() => {
                    this.sentMessage = false;
                }, 5000);
            }

        }
    }

</script>
