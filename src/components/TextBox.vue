<template>
  <div class="input-container">
    <div class="label">{{ label }} ({{ help }})</div>
    <div class="field">
      <input type="text" v-model="textValue" :maxlength="maxlength" />
      <button class="clear-icon" @click="clear">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextBox',
  props: {
    label: String,
    help: String,
    maxlength: {
      type: String,
      default: '26'
    },
  },
  data: function () {
    return ({
      text: '',
    })
  },
  methods: {
    clear () {
      this.text = ''
      this.$emit('text', this.text)
    },
  },
  computed: {
    textValue: {
      get: function () {
        return this.text
      },
      set: function (newValue) {
        const characters = {}
        newValue.split('').forEach(character => {
          const char = character.toLowerCase()
          const charCode = char.charCodeAt(0)
          if ((charCode >= 97 && charCode < 123)) {
            characters[char] = true
          }
        })
        this.text = Object.keys(characters).join('')
        this.$emit('text', this.text)
      },
    }
  },
}
</script>

<style scoped>
.clear-icon {
  display: inline-flex;
  border: 1px solid #ccc;
  background: #fff;
  width: 30px;
  height: 30px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 50%;
  line-height: 25px;
  font-size: 10px;
  margin-left: 8px;
}
input {
  text-transform: uppercase;
  height: 30px;
  width: calc(100% - 50px);
}
.input-container {
  padding: 16px;
  border: 1px solid #ccc;
  margin-bottom: 16px;
  border-radius: 5px;
}
.field {
  display: flex;
  justify-content: space-between;
}
</style>
