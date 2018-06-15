<template>
  <div>
    <h1>{{ $t("message.how") }}</h1>
    <h2 class="align-left">{{ $t("message.why") }}</h2>
    <p class="align-left">{{ $t("message.whyAnswer") }}</p>
    <h2 class="align-left">{{ $t("message.note") }}</h2>
    <p class="align-left">{{ $t("message.tips") }}</p>
    <hr>
    <p>{{ $t("message.inputHere") }} </p>
    <p> <input type="text" v-model="ethPrivateKey" /> </p>
    <p><button @click="getEos" >{{ $t("message.getEos") }}</button></p>
    <p class="error" v-if="errMsg">{{ $t("message.invaild") }}</p>
    <p class="success"  v-if="eosPrivateKey">
      {{ $t("message.yourPrivateKey") }}  {{eosPrivateKey}} <br>
      {{ $t("message.yourPublicKey") }}  {{eosPublicKey}}
    </p>
    <a class="ribbon" target="_blank" href="https://github.com/tokenbankteam/get-eoskey-from-ethkey/"><img style="position: absolute; top: 0; left: 0; border: 0; width: 100px" src="https://s3.amazonaws.com/github/ribbons/forkme_left_gray_6d6d6d.png" alt="Fork me on GitHub"></a>
  </div>
</template>

<script>

import ecc from 'eosjs-ecc';
import ethUtil from 'ethereumjs-util';

export default {
  name: 'HelloWorld',
  data () {
    return {
      ethPrivateKey: '',
      eosPrivateKey: '',
      eosPublicKey: '',
      errMsg: false
    }
  },
  methods: {
    getEos() {

      let buffer = Buffer.from(this.ethPrivateKey, 'hex');

      if (!ethUtil.isValidPrivate(buffer)) {
        this.errMsg = true;
        return;
      } 
      this.errMsg = false;

      let eosWIF = ecc.PrivateKey(buffer).toWif();
      this.eosPrivateKey = eosWIF;
      this.eosPublicKey = ecc.privateToPublic(eosWIF);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  font-weight: normal;
  font-size: 24px;
}
h2 {
  font-weight: normal;
  font-size: 16px;
  margin: 20px 20px 10px;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
input {
  width: 300px;
  height: 24px;
  border: 1px solid #ddd;
}
hr {
  width: 95%;
  max-width: 600px;
  border: none;
  border-bottom: 1px solid #ddd;
  margin: 20px auto;
  
}
button {
    padding: 8px 20px;
    border-radius: 30px;
    background: #333;
    border: 1px solid #ddd;
    color: #fff;
}

p {
  font-size: 14px;
}

h1, h2, p {
  box-sizing: border-box;
  padding: 0 15px;
}

.align-left {
  text-align: left;
  width: 100%;
  max-width: 600px;
  margin-left:  auto;
  margin-right: auto;
}



.error {
  color: red;
}
.success {
  color: green;
  word-break: break-all;
}

@media screen and (max-width: 767px) {
  .ribbon {
    display: none;
  }
}

</style>
