module.exports=function(e){function o(n){if(r[n])return r[n].exports;var t=r[n]={exports:{},id:n,loaded:!1};return e[n].call(t.exports,t,t.exports,o),t.loaded=!0,t.exports}var r={};return o.m=e,o.c=r,o.p="",o(0)}({0:function(e,o,r){e.exports=r(47)},47:function(e,o,r){"use strict";var n=r(48);e.exports=function(e){quasar.current.layout.vm.$data.title="Color Palette",e({template:n,data:{mainColors:["primary","secondary","tertiary","neutral","positive","negative","info","warning","light","dark","faded"],colors:["red","pink","purple","deep-purple","indigo","blue","light-blue","cyan","teal","green","light-green","lime","yellow","amber","orange","deep-orange","brown","grey","blue-grey"]}})}},48:function(e,o){e.exports='<div class="text-center">\n  <h5>Main Colors</h5>\n  <div\n    class="main-color shadow-1 row inline items-center justify-center text-white"\n    v-for="color in mainColors"\n    :class="\'bg-\' + color"\n  >\n    {{color}}\n  </div>\n\n  <h5>Full Palette</h5>\n  <div class="detail" v-for="color in colors">\n    <h5 class="detailed-color shadow-1 column items-center justify-center text-white" :class="\'bg-\' + color">{{color}}</h5>\n    <div class="detailed-color column items-center justify-center" v-for="n in 14" :class="\'bg-\' + color + \'-\' + (n+1)">{{color}}-{{(n+1)}}</div>\n  </div>\n</div>\n'}});