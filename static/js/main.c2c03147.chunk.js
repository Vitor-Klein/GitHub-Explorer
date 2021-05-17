(this["webpackJsonpgithub-explorer"]=this["webpackJsonpgithub-explorer"]||[]).push([[0],{34:function(n,e,t){n.exports=t.p+"static/media/logo.04f6798f.svg"},39:function(n,e,t){n.exports=t.p+"static/media/github-background.0b819d63.svg"},40:function(n,e,t){n.exports=t.p+"static/media/github-background-dark.666f2825.svg"},43:function(n,e,t){n.exports=t(71)},71:function(n,e,t){"use strict";t.r(e);var r=t(0),a=t.n(r),o=t(32),c=t.n(o),l=t(5),i=t(7),u=t(1);var s=function(n,e){var t=Object(r.useState)((function(){var t=localStorage.getItem(n);return t?JSON.parse(t):e})),a=Object(l.a)(t,2),o=a[0],c=a[1];return Object(r.useEffect)((function(){localStorage.setItem(n,JSON.stringify(o))}),[o,n]),[o,c]},p=t(8),m=t(33),d=t.n(m),f=t(9),b=t(34),g=t.n(b),x=t(2),h=t(15);function E(){var n=Object(x.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  > div {\n    display: flex;\n    align-items: center;\n\n    img {\n      margin-right: 30px;\n    }\n  }\n\n  a {\n    display: flex;\n    align-items: center;\n    text-decoration: none;\n    color: ",";\n    transition: color 0.3s;\n\n    &:hover {\n      color: ",";\n    }\n\n    svg {\n      margin-right: 4px;\n    }\n  }\n"]);return E=function(){return n},n}var v=u.e.header(E(),(function(n){return n.theme.colors.textSecundary}),(function(n){return"dark"===n.theme.title?Object(h.a)(.2,n.theme.colors.textSecundary):Object(h.b)(.2,n.theme.colors.textSecundary)})),y=function(n){var e=n.toggleTheme,t=Object(p.f)().location.pathname,o=Object(r.useContext)(u.a).title;return a.a.createElement(a.a.Fragment,null,a.a.createElement(v,null,a.a.createElement("div",null,a.a.createElement("img",{src:g.a,alt:"GitHub Explorer"}),a.a.createElement(d.a,{onChange:e,checked:"dark"===o,checkedIcon:!1,uncheckedIcon:!1,height:10,width:40,handleDiameter:20,offColor:"#999",onHandleColor:"#534F5E",offHandleColor:"#534F5E",onColor:"#F4EDE8"})),"/"!==t&&a.a.createElement(i.b,{to:"/"},a.a.createElement(f.a,{size:16}),"Voltar")))},O={title:"light",colors:{error:"#c53030",background:"#F0F0F5",title:"#3A3A3A",titleSecundary:"#3D3D4D",button:"#04d361",text:"#737380",textSecundary:"#a8a8b3",shape:"#fff"}},j={title:"dark",colors:{error:"#c53030",background:"#312E38",title:"#F4EDE8",titleSecundary:"#F4EDE8",button:"#04d361",text:"#999591",textSecundary:"#a8a8b3",shape:"#534F5E"}},k=t(39),S=t.n(k),w=t(40),z=t.n(w);function F(){var n=Object(x.a)(["\n              background: ","\n                url(",") no-repeat 70% top;\n            "]);return F=function(){return n},n}function _(){var n=Object(x.a)(["\n              background: ","\n                url(",") no-repeat 70% top;\n            "]);return _=function(){return n},n}function D(){var n=Object(x.a)(["\n  * {\n    margin:0;\n    padding:0;\n    outline: 0;\n    box-sizing: border-box;\n  }\n\n  body {\n      ","\n    -webkit-font-smoothing: antialiased;\n  }\n\n  body, input, button {\n    font: 16px Roboto, sans-serif;\n  }\n\n  #root {\n    max-width: 960px;\n    margin: 0 auto;\n    padding: 40px 20px;\n  }\n\n  button {\n    cursor: pointer;\n  }\n"]);return D=function(){return n},n}var C=Object(u.c)(D(),(function(n){return"dark"===n.theme.title?Object(u.d)(_(),n.theme.colors.background,z.a):Object(u.d)(F(),n.theme.colors.background,S.a)})),I=t(10),H=t.n(I),J=t(42),G=t(17),N=t(41),A=t.n(N).a.create({baseURL:"https://api.github.com"});function P(){var n=Object(x.a)(["\n  margin-top: 80px;\n  max-width: 700px;\n\n  a {\n    background: ",";\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    transition: transform 0.2s;\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    img {\n      width: 64px;\n      height: 64px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: ",";\n      }\n\n      p {\n        font-size: 18px;\n        color: ",";\n        margin-top: 4px;\n      }\n    }\n\n    svg {\n      margin-left: auto;\n    }\n  }\n"]);return P=function(){return n},n}function R(){var n=Object(x.a)(["\n  display: block;\n  color: ",";\n  margin-top: 8px;\n"]);return R=function(){return n},n}function T(){var n=Object(x.a)(["\n  margin-top: 40px;\n  max-width: 700px;\n\n  display: flex;\n\n  input {\n    flex: 1;\n    height: 70px;\n    padding: 0 24px;\n    border: 0;\n    border-radius: 5px 0 0 5px;\n    background: ",";\n    color: ",";\n    border: 2px solid\n      ",";\n    border-right: 0;\n\n    &::placeholder {\n      color: ",";\n    }\n  }\n\n  button {\n    width: 210px;\n    height: 70px;\n    background: ",";\n    border: 0;\n    border-radius: 0 5px 5px 0;\n    color: #fff;\n    font-weight: bold;\n    transition: background-color 0.3s;\n\n    &:hover {\n      background: ",";\n    }\n  }\n"]);return T=function(){return n},n}function X(){var n=Object(x.a)(["\n  font-size: 48px;\n  color: ",";\n\n  max-width: 450px;\n  line-height: 56px;\n\n  margin-top: 80px;\n"]);return X=function(){return n},n}var q=u.e.h1(X(),(function(n){return n.theme.colors.title})),B=u.e.form(T(),(function(n){return n.theme.colors.shape}),(function(n){return n.theme.colors.title}),(function(n){return n.hasError?n.theme.colors.error:n.theme.colors.shape}),(function(n){return n.theme.colors.textSecundary}),(function(n){return n.theme.colors.button}),(function(n){return Object(h.b)(.2,n.theme.colors.button)})),L=u.e.span(R(),(function(n){return n.theme.colors.error})),M=u.e.div(P(),(function(n){return n.theme.colors.shape}),(function(n){return n.theme.colors.titleSecundary}),(function(n){return n.theme.colors.textSecundary})),U=function(){var n=Object(r.useState)(""),e=Object(l.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)(""),u=Object(l.a)(c,2),s=u[0],p=u[1],m=Object(r.useState)((function(){var n=localStorage.getItem("@GitHubExplorer:repositories");return n?JSON.parse(n):[]})),d=Object(l.a)(m,2),b=d[0],g=d[1];function x(){return(x=Object(G.a)(H.a.mark((function n(e){var r;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(e.preventDefault(),t){n.next=4;break}return p("Digite o autor/nome do reposit\xf3rio"),n.abrupt("return");case 4:return n.prev=4,n.next=7,A.get("repos/".concat(t));case 7:r=n.sent,g([].concat(Object(J.a)(b),[r.data])),p(""),o(""),n.next=16;break;case 13:n.prev=13,n.t0=n.catch(4),p("Erro na busca por esse reposit\xf3rio");case 16:case"end":return n.stop()}}),n,null,[[4,13]])})))).apply(this,arguments)}return Object(r.useEffect)((function(){localStorage.setItem("@GitHubExplorer:repositories",JSON.stringify(b))}),[b]),a.a.createElement(a.a.Fragment,null,a.a.createElement(q,null,"Explore reposit\xf3rios no GitHub."),a.a.createElement(B,{hasError:!!s,onSubmit:function(n){return x.apply(this,arguments)}},a.a.createElement("input",{value:t,onChange:function(n){return o(n.target.value)},placeholder:"Digite o nome do reposit\xf3rio"}),a.a.createElement("button",{type:"submit"},"Pesquisar")),s&&a.a.createElement(L,null,s),a.a.createElement(M,null,b.map((function(n){return a.a.createElement(i.b,{key:n.full_name,to:"/repositories/".concat(n.full_name)},a.a.createElement("img",{src:n.owner.avatar_url,alt:n.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,n.full_name),a.a.createElement("p",null,n.description)),a.a.createElement(f.b,{size:20,color:"#cbcbd6"}))}))))};function V(){var n=Object(x.a)(["\n  margin-top: 80px;\n\n  a {\n    background: ",";\n    border-radius: 5px;\n    width: 100%;\n    padding: 24px;\n    display: block;\n    text-decoration: none;\n\n    display: flex;\n    align-items: center;\n\n    & + a {\n      margin-top: 16px;\n    }\n\n    transition: transform 0.2s;\n    &:hover {\n      transform: translateX(10px);\n    }\n\n    div {\n      margin: 0 16px;\n      flex: 1;\n\n      strong {\n        font-size: 20px;\n        color: ",";\n      }\n\n      p {\n        font-size: 18px;\n        color: ",";\n        margin-top: 4px;\n      }\n    }\n\n    svg {\n      margin-left: auto;\n    }\n  }\n"]);return V=function(){return n},n}function K(){var n=Object(x.a)(["\n  margin-top: 80px;\n\n  header {\n    display: flex;\n    align-items: center;\n\n    img {\n      width: 120px;\n      height: 120px;\n      border-radius: 50%;\n    }\n\n    div {\n      margin-left: 24px;\n\n      strong {\n        font-size: 36px;\n        color: ",";\n      }\n\n      p {\n        font-size: 18px;\n        color: ",";\n        margin-top: 4px;\n      }\n    }\n  }\n\n  ul {\n    display: flex;\n    list-style: none;\n    margin-top: 40px;\n\n    li {\n      & + li {\n        margin-left: 80px;\n      }\n\n      strong {\n        display: block;\n        font-size: 36px;\n\n        color: ",";\n      }\n\n      span {\n        display: block;\n        margin-top: 4px;\n        color: ",";\n      }\n    }\n  }\n"]);return K=function(){return n},n}var Q=u.e.section(K(),(function(n){return n.theme.colors.titleSecundary}),(function(n){return n.theme.colors.text}),(function(n){return n.theme.colors.titleSecundary}),(function(n){return n.theme.colors.text})),W=u.e.div(V(),(function(n){return n.theme.colors.shape}),(function(n){return n.theme.colors.titleSecundary}),(function(n){return n.theme.colors.textSecundary})),Y=function(){var n=Object(r.useState)(null),e=Object(l.a)(n,2),t=e[0],o=e[1],c=Object(r.useState)([]),i=Object(l.a)(c,2),u=i[0],s=i[1],m=Object(p.g)().params;return Object(r.useEffect)((function(){function n(){return(n=Object(G.a)(H.a.mark((function n(){var e,t,r,a;return H.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Promise.all([A.get("repos/".concat(m.repository)),A.get("repos/".concat(m.repository,"/issues"))]);case 2:e=n.sent,t=Object(l.a)(e,2),r=t[0],a=t[1],o(r.data),s(a.data);case 8:case"end":return n.stop()}}),n)})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[m.repository]),a.a.createElement(a.a.Fragment,null,t&&a.a.createElement(Q,null,a.a.createElement("header",null,a.a.createElement("img",{src:t.owner.avatar_url,alt:t.owner.login}),a.a.createElement("div",null,a.a.createElement("strong",null,t.full_name),a.a.createElement("p",null,t.description))),a.a.createElement("ul",null,a.a.createElement("li",null,a.a.createElement("strong",null,t.stargazers_count),a.a.createElement("span",null,"Start")),a.a.createElement("li",null,a.a.createElement("strong",null,t.forks_count),a.a.createElement("span",null,"Forks")),a.a.createElement("li",null,a.a.createElement("strong",null,t.open_issues_count),a.a.createElement("span",null,"Issues abertas")))),a.a.createElement(W,null,u.map((function(n){return a.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",key:n.id,href:n.html_url},a.a.createElement("div",null,a.a.createElement("strong",null,n.title),a.a.createElement("p",null,n.user.login)),a.a.createElement(f.b,{size:20,color:"#cbcbd6"}))}))))},Z=function(){return a.a.createElement(p.c,null,a.a.createElement(p.a,{path:"/",exact:!0,component:U}),a.a.createElement(p.a,{path:"/repositories/:repository+",component:Y}))},$=function(){var n=s("@GitHubExplorer:theme",O),e=Object(l.a)(n,2),t=e[0],o=e[1],c=Object(r.useCallback)((function(){o("light"===t.title?j:O)}),[t,o]);return a.a.createElement(u.b,{theme:t},a.a.createElement(C,null),a.a.createElement(i.a,{basename:"/github-explorer"},a.a.createElement(y,{toggleTheme:c}),a.a.createElement(Z,null)))};c.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement($,null)),document.getElementById("root"))}},[[43,1,2]]]);
//# sourceMappingURL=main.c2c03147.chunk.js.map