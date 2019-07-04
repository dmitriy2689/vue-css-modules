<template>
  <div>
    <wizard
      :custom-style="{
        tooltipeA,
        tooltipeB
      }"
    />
  </div>
</template>

<script>
import wizard from './Wizard'

export default {
  name: 'wrapper',
  components: {
    wizard
  }
}
</script>

<style src="./TooltipA.scss" lang="scss" module="tooltipeA"></style>
<style src="./TooltipB.scss" lang="scss" module="tooltipeB"></style>