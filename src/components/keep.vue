<template>
  <v-app id="keep" v-if="this.$store.state.isLogin">
    <v-app-bar app clipped-left color="amber">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
      <span class="title ml-3 mr-5">
        Sample&nbsp;
        <span class="font-weight-light">Keep(Beta)</span>
      </span>
      <!-- <v-text-field solo-inverted flat hide-details label="Search" prepend-inner-icon="search"></v-text-field> -->
      <div class="flex-grow-1"></div>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" app clipped color="grey lighten-4">
      <v-list dense class="grey lighten-4">
        <template v-for="(item, i) in items">
          <v-row v-if="item.heading" :key="i" align="center">
            <v-col cols="6">
              <v-subheader v-if="item.heading">{{ item.heading }}</v-subheader>
            </v-col>
            <v-col cols="6" class="text-right">
              <v-btn small text>edit</v-btn>
            </v-col>
          </v-row>
          <v-divider v-else-if="item.divider" :key="i" dark class="my-4"></v-divider>
          <v-list-item v-else :key="i" @click>
            <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="grey--text">{{ item.text }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </template>
      </v-list>
    </v-navigation-drawer>

    <v-content>
      <v-container fluid class="grey lighten-4">
        <!-- row -->
        <v-row class="ma-1" justify="center" align="center">
          <v-col>
            <v-sheet class="pa-1" color="grey lighten-3">
              <div></div>
              <v-sheet class="mx-auto pa-3">
                <v-form ref="form">
                  <v-text-field label="標題" required v-model="keepTitle"></v-text-field>
                  <v-text-field label="內容" required v-model="keepContent"></v-text-field>
                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn color="amber" @click="addContent()">新增</v-btn>
                  </v-card-actions>
                </v-form>
              </v-sheet>
              <div></div>
            </v-sheet>
          </v-col>
        </v-row>
        <!-- /row -->
        <v-divider class="ma-5"></v-divider>

        <!-- row -->
        <template v-for="(content, i) in keepContents">
          <v-row class="ma-1" justify="center" align="center" :key="i">
            <v-col>
              <v-sheet class="pa-1" color="grey lighten-3">
                <div></div>
                <v-sheet class="mx-auto pa-3">
                  <v-card-actions>
                    <div class="flex-grow-1"></div>
                    <v-btn text icon @click="deleteContent(i)">
                      <v-icon>delete</v-icon>
                    </v-btn>
                  </v-card-actions>
                  <v-form ref="form">
                    <v-text-field label="標題" required v-model="content.title"></v-text-field>
                    <v-text-field label="內容" required v-model="content.content"></v-text-field>
                  </v-form>
                  <v-layout align-center justify-end class="mt-2">
                    <span class="subheading mr-2 overline">日期: {{ content.day }}</span>
                  </v-layout>
                </v-sheet>
                <div></div>
              </v-sheet>
            </v-col>
          </v-row>
        </template>

        <!-- /row -->
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: [
      { icon: "add", text: "新增" },
      { divider: true },
      { icon: "delete", text: "垃圾桶" },
      { divider: true },
      // { icon: "settings", text: "設定" },
      { icon: "chat_bubble", text: "回饋" },
      // { icon: "help", text: "幫助" },
    ],
    keepTitle: "",
    keepContent: "",
    keepContents: [
      {
        title: "吃火鍋",
        content: "今天吃了一間好吃的火鍋",
        day: "2019/04/15 11:55:03"
      },
      {
        title: "吃牛排",
        content: "吃了一間超難吃的牛排",
        day: "2019/04/13 12:30:13"
      }
    ]
  }),
  methods: {
    addContent() {
      if (!this.keepTitle || !this.keepContent) {
        return
      }

      let dt = new Date()
      let year = dt.getFullYear()
      let month = dt.getMonth() + 1 < 10 ? "0" + (dt.getMonth() + 1) : dt.getMonth() + 1
      let day = dt.getDate() < 10 ? "0" + dt.getDate() : dt.getDate()
      let hours = dt.getHours() < 10 ? "0" + dt.getHours() : dt.getHours()
      let minutes = dt.getMinutes() < 10 ? "0" + dt.getMinutes() : dt.getMinutes()
      let seconds = dt.getSeconds() < 10 ? "0" + dt.getSeconds() : dt.getSeconds()

      let fullTime = `${year}/${month}/${day} ${hours}:${minutes}:${seconds}`

      this.keepContents.unshift({
        title: this.keepTitle,
        content: this.keepContent,
        day: fullTime
      })
      this.keepTitle = ""
      this.keepContent = ""
    },
    deleteContent(id) {
      this.keepContents.splice(id, 1)
    }
  }
}
</script>

<style>
#keep .v-navigation-drawer__border {
  display: none;
}
</style>
