<template>
    <footer class="w-full">
        <form>
            <div class="flex flex-wrap">
                <div class="w-full md:w-1/2 px-3 mb-6 md-mb-0">
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="first_name">
                        First Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leadingl-tigh focus:outline-none focuse:bg-white"
                        id="first_name"
                        type="text"
                        placeholder="Jane"
                    >
                    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="last_name">
                        Last Name
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leadingl-tigh focus:outline-none focuse:bg-white"
                        id="last_name"
                        type="text"
                        placeholder="Doe"
                    >
                    <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                        Email Address
                    </label>
                    <input
                        class="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leadingl-tigh focus:outline-none focuse:bg-white"
                        id="email_address"
                        type="text"
                        placeholder="Email Address"
                    >
                </div>
            </div>
        </form>
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