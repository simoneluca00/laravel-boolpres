<template>
    <div :class="`alert alert-${type} text-center position-relative my-4`" role="alert">
        <h3>
            {{ message }}
        </h3>
    </div>
</template>

<script>
export default {
    name: 'Alert',
    props: [ 'message', 'type'],
    // props: [ 'type' ]
}
</script>