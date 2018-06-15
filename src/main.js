// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueI18n from 'vue-i18n'
import u from 'underscore'

Vue.use(VueI18n)

const messages = {
  'en': {
    message: {
      how: 'Generate fallback key base on your ethereum private key', // 'GENERATE YOUR FALLBACK KEY BASE ON YOUR ETHEREUM PRIVATE KEY',
      why: 'Why we need the fallback key?',
      whyAnswer: 'For those who has forgotten to register their EOS or who has registered but the key was rejected, the fallback mechanism will help to find back the EOS.'
        + 'If you have already mapped correctly, the mechanism won’t work.',
      note: 'ATTENTIONS:',
      tips: 'For your asset’s safety, you should keep offline while doing the operation, and you should write the private key down on paper, don’t take any screenshot or copy to pasteboard.',
      invaild: 'Invalid Private Key!',
      getEos: 'GENERATE EOS Private Key!',
      inputHere: 'Input your ethereum Private Key:',
      yourPrivateKey: 'Your EOS Private Key: ',
      yourPublicKey: 'Your EOS Public Key: ' 
    }
  },
  'zh-CN': {
    message: {
      how: '用你的以太坊私钥找回丢失的EOS',
      why: '为什么需要“找回方案”？',
      whyAnswer: '如果你忘记了映射或者映射后无法导入账户，那可以通过持有EOS的以太坊私钥进行转化，得到EOS网络的公私钥，这样你就可以取回未映射的EOS。'
        + '对于已经映射过的朋友，该方案没有任何的效果，所以如果您已经正确映射过EOS，本方案无法帮您解决丢失问题。',
      note: '注意事项：',
      tips: '为了您的资产安全，请在确认可以正确运行时进行断网操作。找回后的公私钥用离线方式记录下来，例如手抄。',
      invaild: '私钥错误!',
      getEos: '生成EOS私钥！',
      inputHere: '输入你的以太坊私钥：',
      yourPrivateKey: '你的EOS私钥： ',
      yourPublicKey: '你的EOS公钥： ' 

    }
  }
}

const availableLocale = ['zh-CN', 'en']

let defaultLangStr = navigator.language
let defaultLang = 'zh-CN'

if (defaultLangStr.indexOf('en') >= 0) {
  defaultLang = 'en'
}

let query = location.search.substr(1)
let queryObj = {}

if (query) {
  u.each(query.split('&'), item => {
    let tempArr = item.split('=')
    queryObj[tempArr[0]] = tempArr[1]
  })
}

let locale = u.contains(availableLocale, queryObj['locale']) ? queryObj['locale'] : defaultLang

const i18n = new VueI18n({
  locale,
  messages
})


Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  i18n,
  components: { App },
  template: '<App/>'
})
