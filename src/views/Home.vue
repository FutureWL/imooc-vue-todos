<template>
    <div class="home">
        {{count}}|{{getCount}}
        <button @click="add">add</button>
        |
        <button @click="agetCount">add2</button>
    </div>
</template>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'
    import {mapGetters, mapState, mapMutations, mapActions} from 'vuex'

    export default {
        name: 'home',
        computed: {
            ...mapState(['count']),
            ...mapGetters(['getCount'])
        },
        methods: {
            ...mapMutations(['add']),
            ...mapActions(['agetCount'])
        }
    }
</script>
