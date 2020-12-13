<template>
  <div class="w-full bg-blue-gray-e">
    <div class="md:w-1/2 p-32"> 
      <div class="headers">
        <h1>
          {{ content.header }}
        </h1>
        <h3 class="heading-3 font-body text-white">
          {{ content.sub_header }}
        </h3>
      </div>
      <div class="content"> 
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
// TODO: use named props for this component (improves readability)
export default {
  props: {
    content: {
      type: Object,
      required: true
    },
  },
}
</script>
<!-- TODO: find a way to get graphql explore to work offline -->
<!-- TODO: write a query for the home page and pass the data down to this child component may need to rework some the theme file idea...? --> 

<!-- TODO: Optimize images? Or look into using the gridsome quality parameter for images --> 