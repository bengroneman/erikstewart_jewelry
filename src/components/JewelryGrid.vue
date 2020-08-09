<template>
    <div class="w-full">
        <div class="h-full grid grid-cols-2" v-for="item in jewelry" :key="item.node.id">
            <div class="p-4">
                <g-link :to="item.node.path">
                <g-image
                    :src="item.node.image.src"
                    :alt="item.node.name"
                />
                </g-link>
            </div>
            <div class="bg-gray-200 mb-12">
                <div class="p-4">
                <h1 class="text-6xl">{{ item.node.name }}</h1>
                <p class="text-l">{{item.node.content}}</p>
                <MagicButton link="/shop">View</MagicButton>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import MagicButton from '@/components/MagicButton'

export default {
    props: {
        jewelry: {
            type: Array,
            required: true
        }
    },
    components: {
        MagicButton
    }
}
</script>
