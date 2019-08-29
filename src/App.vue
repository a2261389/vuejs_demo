<template>
  <v-app>
    <Keep />
    <Login />
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import Header from "./components/common/header";
import Footer from "./components/common/footer";
import Keep from "./components/keep";
import Login from "./components/common/login";

export default {
  name: "App",
  components: {
    HelloWorld,
    Header,
    Footer,
    Keep,
    Login
  },
  data: () => ({
    //
    loading: false
  })
};
</script>
