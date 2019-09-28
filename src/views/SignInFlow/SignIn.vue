<template>
    <div class="container">
        <div class="request">Don't have a design+code HQ account <router-link to="/request">Request an Account</router-link></div>
        <div class="login">
            <img src="@/assets/DCHQ.svg">
            <h4>Sign into Design+Code HQ</h4>
            <input type="email" placeholder="Email">
            <input type="password" placeholder="Password">
            <button>Sign in</button>
            <router-link to="/reover">forgot your password</router-link>
        </div>

    </div>
</template>

<script>
    export default {
        name:"SingIn"
    }
</script>

<style lang="scss" scoped>
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
    color:rgba(255, 255, 255, 0.3);

    a{
        color:white;}

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