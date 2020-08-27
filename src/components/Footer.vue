<template>
    <footer class="w-full bg-footer">
        <ContactForm />
    </footer>
</template>

<script>
import ContactForm from "@/components/ContactForm"

export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    },
    components: {
        ContactForm
    }
}
</script>