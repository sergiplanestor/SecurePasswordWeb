<template>
  <v-app>
    <v-app-bar
        app
        color="primary"
        dark
    >
      <div class="d-flex align-center">
        <v-avatar>
          <v-icon
              large
              class="orange darken-1"
              dark
          >
            mdi-key
          </v-icon>
        </v-avatar>

        <v-btn
            href="/"
            target="_blank"
            text
        >
          <span>Secure Password</span>
        </v-btn>
      </div>

      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    //
  }),
  actions: {
    onClose() {
      window.onbeforeunload = function() {
         alert("Are you sure you want to close the window?");
      }
    }
  }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500&family=Raleway:wght@300;400;500&display=swap');
</style>
