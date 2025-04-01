<template>
    <div>
      <button @click="signInWithFacebook">Sign in with Facebook</button>
    </div>
  </template>
  
  <!-- <script>
  import firebase from "~/plugins/firebase.vue";
  
  export default {
    methods: {
      async signInWithFacebook() {
        const provider = new firebase.auth.FacebookAuthProvider();
        try {
          const result = await firebase.auth().signInWithPopup(provider);
          console.log("User Info:", result.user);
          this.$router.push("/"); // Redirect after login
        } catch (error) {
          console.error("Facebook Sign-In Error:", error.message);
        }
      }
    }
  };
  </script> -->
  