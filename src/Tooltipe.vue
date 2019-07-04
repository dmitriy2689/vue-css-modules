<template>
  <div>
    <h1 :class="[customStyle.test, $style.test]">
      Hello!
    </h1>
  </div>
</template>

<script>

export default {
  name: 'tooltipe',
  props: {
    customStyle: {
      type: Object,
      default: function () {
        return {}
      }
    }
  }
}
</script>

<style lang="scss" module>
.test {
  border: 2px solid black;
}
</style>