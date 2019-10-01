<template>
    <div class="container" :class="{'light-background':!isDarkMode,'dark-background':isDarkMode}">
        <div class="request" :class="{'light-request':isDarkMode,'dark-request':!isDarkMode}">Don't have a design+code HQ account <router-link to="/request">Request an Account</router-link></div>
        <div class="login">
            <img src="@/assets/DCHQ.svg" v-if="isDarkMode">
            <img src="@/assets/DCHQ-dark.svg" v-if="!isDarkMode">
            <h4 :class="{'light-text':!isDarkMode,'dark-text':isDarkMode}">Sign into Design+Code HQ</h4>
            <input :class="{'light-field':isDarkMode,'dark-field':!isDarkMode}" type="email" placeholder="Email">
            <input :class="{'light-field':isDarkMode,'dark-field':!isDarkMode}" type="password" placeholder="Password">
            <button>Sign in</button>
            <router-link :class="{'light-request':isDarkMode,'dark-request':!isDarkMode}" to="/reover">forgot your password</router-link>
            <button @click="toggleDarkMode">Toggle</button>
        </div>
    </div>
</template>

<script>
    export default {
        name:"SingIn",
        computed: {
            isDarkMode(){
              return this.$store.getters.isDarkMode
            }, 
        },   
        methods: {
            toggleDarkMode(){
                this.$store.commit("toggleDarkMode")
            }
        }
        // computed: {
        //   isDarkMode() {
        //     return this.$store.getters.isDarkMode;
        //   }
        // },
        // methods: {
        //   toggleDarkMode() {
        //   this.$store.commit("toggleDarkMode");
        // }

    }
</script>

<style lang="scss" scoped>

*{
  transition: 0.8s,cubic-bezier(0.2, 0.8, 0.2, 1)
}
.light-background {
  background-color: $light-gray;
}

.dark-background {
  background-color: $dark-blue;
}

.light-text {
  color: $black;
}

.dark-text {
  color: $white;
}

.light-field {
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.2);
  &::placeholder {
    color: rgba(255, 255, 255, 0.3);
  }
}

.dark-field {
  background: rgba(198, 208, 235, 0.2);
  border: 1px solid rgba(0, 0, 0, 0.2);
  &::placeholder {
    color: rgba(0, 0, 0, 0.3);
  }
}

.light-request {
  color: rgba(255, 255, 255, 0.3);

  a {
    color: white;
  }
}

.dark-request {
  color: rgba(0, 0, 0, 0.3);

  a {
    color: $black;
  }
}
.container{
    display:flex;
    justify-content: center;
    align-items:center;
    min-height:100vh;
}

.login{
    width:400px;
}

.request{
    position:absolute;
    top:40px;
    right:40px;
    // color:rgba(255, 255, 255, 0.3);

}

h4{
    font-size: 24px;
    line-height: 34px;
    margin:0;
    color:#ffffff
}

input{
    background: rgba(255, 255, 255, 0.1);
    border: 1px solid rgba(255, 255, 255, 0.1);
    box-sizing: border-box;
    border-radius: 4px;

    height:60px;
    width:100%;

    border-radius: 4px;
    padding-left:20px;
    margin-top:20px;
    color:white;

    font-size:20px;

    &::placeholder{
        color: rgba(255, 255, 255, 0.3);
    }
}

button{
    height:60px;
    width:100%;

    background: #56CCF2;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.2);
    border-radius: 4px;

    font-size:20px;
    color:white;
    border:none;
    margin-top:20px;
    margin-bottom:40px;
}

a{
    font-family: SF Pro Text;
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: rgba(255, 255, 255, 0.3);
    text-decoration: none;
}
</style>