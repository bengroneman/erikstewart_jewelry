<template>
    <div class="w-full flex justify-center grid grid-cols-2">
        <div class="bg-black h-full" v-for="item in jewelry" :key="item.node.id">
            <g-link :to="item.node.path">
            <g-image
                :src="item.node.image.src"
                :alt="item.node.name"
            />
            <h3>{{ item.node.name }}</h3>
            </g-link>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        jewelry: {
            type: Array,
            required: true
        }
    }
}
</script>
