<template>
  <div>
    填寫帳號:
    <input type="text" placeholder="填寫帳號" v-model.trim="account" />
    <br />填寫密碼:
    <input type="password" placeholder="填寫密碼" v-model.trim="password" />
    <h2>{{ text }}</h2>
    <input type="button" @click="clickHandler()" value="獲取數據" v-bind:title="test" />
    <h3>{{ $route.params.id }}</h3>
    <p v-html="test"></p>
    <!-- <router-view v-if="this.$store.state.account && $route.params.pname===this.$store.state.account"></router-view> -->
  </div>
</template>

<style scoped>
input[type="text"],
input[type="password"] {
  height: 50px;
  width: 200px;
  background-color: yellow;
}
input[type="button"] {
  height: 100px;
  width: 100px;
  background-color: rgb(35, 175, 89);
  border-radius: 50%;
  color: #fff;
  font-size: 18px;
  letter-spacing: 5px;
  text-align: center;
  margin: auto;
  border: 3px solid #777;
}
</style>

<script>
export default {
  name: "InputComponent",
  data() {
    return {
      text: "",
      test: "你好",
      account: "",
      password: ""
    };
  },
  computed: {
    inputText: {
      get() {
        return this.text;
      },
      set(val) {
        //this.$emit('TextChange', val)
        //this.$emit('update:text', val)
        this.text = val;
      }
    }
  },
  methods: {
    clickHandler() {
      if (this.account === "" || this.password === "") return;
      // console.log(this.account, this.password)
      this.$store.dispatch("INIT_DATA", {
        account: this.account,
        password: this.password
      });
      //this.$router.push({ path: `/input/${id}/${pname}` });
      // this.$router.go(-1)
    }
  }
};
</script>

