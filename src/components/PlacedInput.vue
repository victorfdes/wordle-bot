<template>
  <div class="container">
  <div class="label">
    Enter Placed Words (Green)
  </div>
  <div class="placed-input">
    <input type="text" v-model="a" @input="handleInput" maxlength="1" />
    <input type="text" v-model="b" @input="handleInput" maxlength="1" />
    <input type="text" v-model="c" @input="handleInput" maxlength="1" />
    <input type="text" v-model="d" @input="handleInput" maxlength="1" />
    <input type="text" v-model="e" @input="handleInput" maxlength="1" />
  </div>
  </div>
</template>
<script>
export default {
  name: 'PlacedInput',
  data () {
    return ({
      a: '',
      b: '',
      c: '',
      d: '',
      e: '',
    })
  },
  methods: {
    handleInput () {
      this.$emit('text', [
        this.a.toLowerCase(),
        this.b.toLowerCase(),
        this.c.toLowerCase(),
        this.d.toLowerCase(),
        this.e.toLowerCase(),
      ])
    }
  }
}
</script>
<style scoped>
input {
  width: 30px;
  height: 30px;
  text-transform: uppercase;
  text-align: center;
}
.container {
  padding: 16px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 16px;
}
.placed-input {
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.label {
  margin-bottom: 8px;
}
</style>
