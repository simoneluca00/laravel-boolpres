// 1) Import di Vue
import Vue from 'vue';

// 2) Import della rispettiva dipendenza installata
import VueRouter from 'vue-router';

// 3) Utilizzando un "module system", per installare il router è necessario utilizzare "Vue.use()"
Vue.use(VueRouter);

// 4) Import dei components
import HomePage from './components/pages/HomePage.vue'
import ContactPage from './components/pages/ContactPage.vue'
import PostDetails from './components/pages/PostDetails.vue'
import NotFoundPage from './components/pages/NotFoundPage.vue'

// 5) Inizializzare il router
const router = new VueRouter({

    // 5.1) questo parametro permette a Vue-router di rendere possibile il passaggio (in modo dinamico) tra una pagina e l'altra cliccando sui btn del browser (frecce per avanti e indietro) -> permette al browser di tenere in memoria le pagine visitate
    mode: 'history',

    // 5.2) quando è presente la classe "router-link-exact-active" viene inserita la classe "active" (in questo caso di Bootstrap)
    linkExactActiveClass: 'active', 

    // 5.3) in questo parametro (array) verrà inserito un oggetto per ogni rotta che si vuole andare a definire
    routes: [
        {path: '/', component: HomePage, name: 'home'},
        {path: '/contacts', component: ContactPage, name: 'contacts'},
        {path: '/posts/:id', component: PostDetails, name:'post-details'},
        {path: '*', component: NotFoundPage, name: 'notFound'}
    ]
});

// 6) per permettere l'import dell'istanza e del suo contenuto nel file "front.js"
export default router;