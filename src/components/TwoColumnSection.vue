<template>
  <section class="w-full md:pl-40 flex flex-row">
    <div class="m-12 w-1/2">
      <slot name="leftcolumn">
        Add some content
      </slot>
    </div>
    <div class="m-12 flex w-1/2 justify-center">
      <slot name="rightcolumn">
        Add some content
      </slot>
    </div>
  </section>
</template>
