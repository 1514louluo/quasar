module.exports=function(n){function t(a){if(e[a])return e[a].exports;var r=e[a]={exports:{},id:a,loaded:!1};return n[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var e={};return t.m=n,t.c=e,t.p="",t(0)}({0:function(n,t,e){n.exports=e(121)},121:function(n,t,e){"use strict";var a=e(122);n.exports=function(n){quasar.current.layout.vm.$data.title="Rating",n({template:a,data:{ratingModel:1}})}},122:function(n,t){n.exports='<div class="label bg-secondary text-white">\n  Model <span class="right-detail"><em>{{ratingModel}}</em></span>\n</div>\n\n<div style="font-size: 2rem; margin-top: 20px;">\n  <rating :model.sync="ratingModel" :max-grade="3"></rating>\n  <rating :model.sync="ratingModel" :max-grade="5" icon="pets"></rating>\n  <rating :model.sync="ratingModel" :max-grade="9" icon="thumb_up"></rating>\n  <rating :model.sync="ratingModel" :max-grade="6" icon="home"></rating>\n</div>\n'}});