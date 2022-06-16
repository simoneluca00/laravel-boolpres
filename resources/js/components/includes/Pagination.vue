<template>
    <nav aria-label="Page navigation example" class="my-5">
        <ul class="pagination justify-content-center">
            <li class="page-item">
                <a class="page-link" href="#" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                </a>
            </li>

            <li class="page-item" v-for="page in paginationProps.lastPage" :key="page">
                <a class="page-link" href="#">{{page}}</a>
            </li>

            <li class="page-item">
                <a class="page-link" href="#" aria-label="Next">
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