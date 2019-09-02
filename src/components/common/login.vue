<template>
  <v-app id="inspire" v-if="!this.$store.state.isLogin">
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="4">
            <v-card class="elevation-12">
              <v-toolbar color="amber" dark flat>
                <v-toolbar-title>
                  <span class="grey--text text--darken-4">登入</span>
                </v-toolbar-title>
                <div class="flex-grow-1"></div>
                <v-tooltip bottom>
                  <span>Source</span>
                </v-tooltip>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    color="grey--text text--darken-4"
                    label="Login"
                    name="login"
                    prepend-icon="person"
                    type="text"
                    v-model.trim="loginName"
                  ></v-text-field>

                  <v-text-field
                    color="grey--text text--darken-4"
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="loginPassword"
                  ></v-text-field>
                  <v-alert dense outlined type="error" :value="isErrorAlert">{{ errorMessages }}</v-alert>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <div class="flex-grow-1"></div>
                <v-btn color="amber" @click="loginHandler()" :loading="loading">Login</v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  props: {
    source: String
  },
  data: () => ({
    drawer: null,
    loginName: "",
    loginPassword: "",
    loading: false,
    isErrorAlert: false,
    errorMessages: ""
  }),
  methods: {
    loginHandler() {
      this.isErrorAlert = false;
      this.loading = true;
      if (!this.loginName || !this.loginPassword) {
        return;
      }

      this.$store
        .dispatch("login", {
          loginName: this.loginName,
          loginPassword: this.loginPassword
        })
        .then(res => {
          if (res !== 200) {
            this.loading = false;
            this.errorMessages = res.response.data;
            this.isErrorAlert = true;
          }
        });
    }
  },
  computed: {}
};
</script>