<template>
  <v-card height="150">
    <v-footer absolute class="font-weight-medium">
      <v-flex text-center xs12>
        {{ new Date().getFullYear() }} —
        <strong>Vuetify</strong>
        <v-row justify="space-around">
          <v-icon>mdi-anchor</v-icon>
          <v-icon>mdi-xbox-controller</v-icon>
          <v-icon>mdi-watch</v-icon>
          <v-icon>mdi-tilde</v-icon>
          <v-icon>mdi-tennis</v-icon>
          <v-icon>mdi-mouse</v-icon>
        </v-row>
      </v-flex>
    </v-footer>
  </v-card>
</template>

<script>
export default {};
</script>
