(this["webpackJsonpreact_goods-selector"]=this["webpackJsonpreact_goods-selector"]||[]).push([[0],{13:function(e,t,o){},15:function(e,t,o){"use strict";o.r(t);var s=o(4),c=o.n(s),n=o(5),a=o(6),l=o(8),r=o(7),d=o(1),i=o.n(d),u=o(3),b=o.n(u),g=(o(13),o(0)),h=["Dumplings","Carrot","Eggs","Ice cream","Apple","Bread","Fish","Honey","Jam","Garlic"],j=function(e){Object(l.a)(o,e);var t=Object(r.a)(o);function o(){var e;Object(n.a)(this,o);for(var s=arguments.length,c=new Array(s),a=0;a<s;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={good:"Jam",selectedGood:"Jam is selected"},e.clearGood=function(){e.setState({good:"",selectedGood:"No goods selected"})},e.selectGood=function(t){e.setState({good:t,selectedGood:"".concat(t," is selected")})},e}return Object(a.a)(o,[{key:"render",value:function(){var e=this;return Object(g.jsxs)("div",{className:"App",children:[Object(g.jsxs)("h1",{className:"title",children:[this.state.selectedGood,Object(g.jsx)("button",{className:"button button__clear",type:"button",hidden:!this.state.good,onClick:this.clearGood,children:"Clear"})]}),Object(g.jsx)("ul",{className:"goods",children:h.map((function(t){return Object(g.jsxs)("li",{className:b()("goods__list",{goods__selected:t===e.state.good}),children:[t,Object(g.jsx)("button",{className:b()("button",{button__clear:e.state.good===t}),type:"button",onClick:function(){return e.state.good!==t?e.selectGood(t):e.clearGood()},children:e.state.good!==t?"Select":"Remove"})]},t)}))})]})}}]),o}(i.a.Component),m=j;c.a.render(Object(g.jsx)(m,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.ec56e92d.chunk.js.map