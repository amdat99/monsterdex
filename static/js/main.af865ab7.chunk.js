(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,function(e,t,n){},,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=n(0),s=n(1),c=n.n(s),o=n(4),a=n.n(o),i=(n(14),n(5)),h=n(6),l=n(8),u=n(7),d=(n(15),function(e){var t=e.monster;return Object(r.jsxs)("div",{className:"cardContainer example",children:[Object(r.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,".png?set=set2&size=200x200")}),t.name]})}),j=(n(3),function(e){var t=e.monsters;return Object(r.jsx)("div",{className:"cardlist ",children:t.map((function(e){return Object(r.jsx)(d,{monster:e},e.id)}))})}),m=function(e){return Object(r.jsx)("div",{className:"example",style:{overflowY:"scroll",overflowX:"hidden",height:"897px",maxWwidth:"100%"},children:e.children})},f=(n(16),function(e){var t=e.searchChange;e.placeholder;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{"aria-label":"Search Robots",className:"search",type:"search",placeholder:"search robots",onChange:t})})}),p=(n(17),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).OnSearchChange=function(t){e.setState({searchField:t.target.value})},e.filteredMonsters=function(){return e.state.monsters.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}))},e.state={monsters:[],searchField:""},e}return Object(h.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){return Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)("h1",{children:" Monsters Rolodex"}),Object(r.jsx)(f,{searchChange:this.OnSearchChange}),Object(r.jsx)(m,{children:Object(r.jsx)(j,{monsters:this.filteredMonsters()})})]})}}]),n}(c.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var b=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,r=t.getFID,s=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),r(e),s(e),c(e),o(e)}))};a.a.render(Object(r.jsx)(c.a.StrictMode,{children:Object(r.jsx)(p,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)})),b()}],[[18,1,2]]]);
//# sourceMappingURL=main.af865ab7.chunk.js.map