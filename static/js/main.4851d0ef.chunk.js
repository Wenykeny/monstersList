(this.webpackJsonpcomplete_react=this.webpackJsonpcomplete_react||[]).push([[0],[,,,,,,,,function(e,t,a){e.exports=a(17)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),o=a.n(c),s=a(1),l=a(4),i=a(5),m=a(7),u=a(6),h=(a(13),a(14),a(15),function(e){var t,a,n=e.monster,c=e.avatar;return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{src:"https://robohash.org/".concat(n.id,"?set=set").concat((t=1,a=5,0===c?Math.floor(Math.random()*(a-t+1))+t:c),"&size=180x180"),alt:"Robo"}),r.a.createElement("h2",null," ",n.name," "),r.a.createElement("h5",null," ",n.email," "))}),d=function(e){return r.a.createElement("div",{className:"cardList"},e.monsters.map((function(t){return r.a.createElement(h,{key:t.id,monster:t,avatar:e.avatar})})))},v=(a(16),function(e){var t=e.placeholder,a=e.handleChange,n=e.handleAvatar;return r.a.createElement("div",null,r.a.createElement("input",{type:"search",className:"search",name:"searchField",onChange:a,placeholder:t}),r.a.createElement("div",{className:"select_img"},r.a.createElement("select",{name:"avatar",className:"select",onChange:n},r.a.createElement("option",{value:"0"},"Select Random"),r.a.createElement("option",{value:"5"},"People Avatar"),r.a.createElement("option",{value:"2"},"Monsters"),r.a.createElement("option",{value:"3"},"Disembodied Heads"),r.a.createElement("option",{value:"4"},"Beautiful Kittens"),r.a.createElement("option",{value:"1"},"Cartoon Robo"))))}),p=function(e){Object(m.a)(a,e);var t=Object(u.a)(a);function a(){var e;return Object(l.a)(this,a),(e=t.call(this)).searchMonster=function(t){return e.setState(Object(s.a)({},t.target.name,t.target.value))},e.handleAvatar=function(t){return e.setState(Object(s.a)({},t.target.name,parseInt(t.target.value)))},e.state={monsters:[],searchField:"",avatar:0},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users?_limit=12").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,a=e.searchField,n=t.filter((function(e){return e.name.toLowerCase().includes(a.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"App-logo"},"Monsters List"),r.a.createElement(v,{placeholder:"Search Monster",handleChange:this.searchMonster,handleAvatar:this.handleAvatar}),r.a.createElement(d,{monsters:n,avatar:this.state.avatar}))}}]),a}(n.Component);o.a.render(r.a.createElement(p,null),document.getElementById("root"))}],[[8,1,2]]]);
//# sourceMappingURL=main.4851d0ef.chunk.js.map