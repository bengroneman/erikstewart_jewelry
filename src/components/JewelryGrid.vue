<template>
    <div class="w-full">
        <div
            class="h-full flex"
            :class="[isEven(index) ? '': 'flex-row-reverse']"
            v-for="(item, name, index) in jewelry"
            :key="item.node.id + name"
        >
            <div class="p-4 w-1/2">
                <g-link :to="item.node.path">
                <g-image
                    :src="item.node.image.src"
                    :alt="item.node.name"
                />
                </g-link>
            </div>
            <div class="bg-gray-200 w-1/2 mb-12">
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
    },
    methods: {
        isEven(num) {
            if (num <= 0 ) { return false }
            return num % 2 == 0
        }
    }
}
</script>
