"use strict";(self.webpackChunk_sensoro_design_charts=self.webpackChunk_sensoro_design_charts||[]).push([[748],{96195:function(O,_,e){e.r(_);var l=e(28152),a=e.n(l),c=e(20068),s=e(50959),u=e(37876),n=e(11527);_.default=function(){var d=(0,s.useState)([]),o=a()(d,2),h=o[0],f=o[1],m=(0,s.useState)({xField:"item",yField:"score",seriesField:"user",meta:{score:{alias:"\u5206\u6570",min:0,max:80}},width:226,height:200,autoFit:!1}),r=a()(m,2),i=r[0],E=r[1],g=function(){fetch("https://gw.alipayobjects.com/os/antfincdn/svFjSfJkYy/radar.json").then(function(t){return t.json()}).then(function(t){return f(t)}).catch(function(t){console.log("fetch data failed",t)})};return(0,s.useEffect)(function(){g()},[]),(0,n.jsxs)("div",{style:{display:"flex",justifyContent:"space-between",columnGap:16,height:500},children:[(0,n.jsx)("div",{style:{width:"40%"},children:(0,n.jsx)(u.Z,{value:JSON.stringify(i,null,2),onChange:function(t){return E(JSON.parse(t))}})}),(0,n.jsx)("div",{style:{width:"60%"},children:(0,n.jsx)(c.Fk,{title:"\u96F7\u8FBE\u56FE",config:i,data:h,legend:{legendItemGap:16,verticalGap:48},className:"radar"})})]})}}}]);
