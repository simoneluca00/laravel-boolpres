<template>
    <div class="d-flex flex-column justify-content-center align-items-center vh-100">
        <h2 class="mb-4">Questa pagina non esiste | Error: 404</h2>
        <button class="btn btn-secondary mb-5" @click="$router.back()" >Indietro</button>
    </div>
</template>

<script>

export default {
    name: 'NotFoundPage',

}
</script>