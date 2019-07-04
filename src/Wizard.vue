<template>
  <div>
    <tooltipe />
    <tooltipe :custom-style="customStyle.tooltipeA" />
    <tooltipe :custom-style="customStyle.tooltipeB" />
  </div>
</template>

<script>
import tooltipe from './Tooltipe'

export default {
  name: 'wizard',
  props: [
    'customStyle'
  ],
  components: {
    tooltipe
  },
  created() {
    console.log(this.customStyle.tooltipeA);
    console.log(this.customStyle.tooltipeB);
  }
}
</script>