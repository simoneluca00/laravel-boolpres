<template>
    <nav aria-label="Page navigation example" class="my-5">
        <ul class="pagination justify-content-center">
            <li class="page-item"  v-if="paginationProps.currentPage > 1">
                <a class="page-link" href="#" aria-label="Previous" @click="$emit('on-page-change', paginationProps.currentPage - 1)">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>

            <li class="page-item" v-for="page in paginationProps.lastPage" :key="page" @click="$emit('on-page-change', page)">
                <a class="page-link" href="#" :class="paginationProps.currentPage == page ? 'bg-primary text-white' : ''">{{page}}</a>
            </li>

            <li class="page-item" v-if="paginationProps.currentPage < paginationProps.lastPage">
                <a class="page-link" href="#" aria-label="Next" @click="$emit('on-page-change', paginationProps.currentPage + 1)">
                    <span aria-hidden="true">&raquo;</span>
                </a>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: 'Pagination',

    props: {
        paginationProps: Object,
    }
}
</script>