module.exports=function(n){function t(s){if(i[s])return i[s].exports;var o=i[s]={exports:{},id:s,loaded:!1};return n[s].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var i={};return t.m=n,t.c=i,t.p="",t(0)}({0:function(n,t,i){n.exports=i(53)},53:function(n,t,i){"use strict";var s=i(54);n.exports=function(n){quasar.current.layout.vm.$data.title="Dropdown",n({template:s})}},54:function(n,t){n.exports='<h5>Click on buttons and image below to open Dropdowns.</h5>\n\n<div>\n  <dropdown>\n    <button slot="target" class="primary">\n      <i>menu</i>\n    </button>\n\n    <div class="list item-delimiter highlight">\n      <div class="item item-link" v-for="n in 20">\n        <div class="item-content">\n          <div class="item-label">Label</div>\n          <div class="item-value">Value</div>\n        </div>\n      </div>\n    </div>\n  </dropdown>\n\n  <dropdown>\n    <button slot="target" class="secondary">\n      <i>directions</i>\n    </button>\n\n    <img src="assets/map.png" class="responsive">\n  </dropdown>\n\n  <dropdown>\n    <button slot="target" class="tertiary">\n      <i>plus_one</i>\n    </button>\n\n    <div class="row justify-center">\n      <button class="primary clear">\n        <i>thumb_up</i>\n      </button>\n      <button class="primary clear">\n        <i>thumb_down</i>\n      </button>\n      <button class="secondary clear">\n        <i>share</i>\n      </button>\n    </div>\n  </dropdown>\n</div>\n\n<br><br>\n<div>\n  <dropdown>\n    <img slot="target" src="assets/map.png" class="responsive">\n\n    <div class="list item-delimiter highlight">\n      <div class="item item-link" v-for="n in 20">\n        <i>share</i>\n        <div class="item-content">\n          Share\n        </div>\n      </div>\n    </div>\n  </dropdown>\n</div>\n'}});