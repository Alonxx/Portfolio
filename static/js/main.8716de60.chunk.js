(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{35:function(t,n,e){},36:function(t,n,e){"use strict";e.r(n);var i,a,r,d,o,c,s,l,m,p,h,b,j=e(2),g=e.n(j),x=e(15),f=e.n(x),u=e(22),v=e(4),O=e(3),_=O.c.div(i||(i=Object(v.a)(["\n\twidth: 100%;\n\theight: fit-content;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'nav     nav    nav'\n\t\t'main    main   main'\n\t\t'skills   skills   skills'\n\t\t'projects   projects   projects'\n\t\t'contact     contact      contact'\n\t\t'footer footer footer';\n\n\t.nav {\n\t\tgrid-area: nav;\n\t}\n\n\t.main {\n\t\tgrid-area: main;\n\t}\n\t.skills {\n\t\tgrid-area: skills;\n\t}\n\t.projects {\n\t\tgrid-area: projects;\n\t}\n\t.contact {\n\t\tgrid-area: contact;\n\t}\n\t.footer {\n\t\tgrid-area: footer;\n\t}\n"]))),w=Object(O.b)(a||(a=Object(v.a)(["\n\n* { margin: 0; \n  padding: 0; \n  list-style: none;  \n  box-sizing: border-box; }\n\n.div_component_open {\n\t\tmargin-left: 0rem;\n\t\tpadding-bottom: 2rem;\n\t\tfont-size: 2rem;\n\t\tfont-weight: 900;\n\t\tcolor: ",";\n\t\tspan {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n\n  body {\n    min-height: 100vh;\n    background: ",";\n    color: ",";\n    //transition: all 0.50s linear;\n\n  }\nhtml {\n  font-size: 24px;\n  scroll-behavior: smooth;\n}\n\n@media (max-width: 1921px) {\n  html {\n    font-size: 22px;\n\n  }\n}\n\n@media (max-width: 1441px) {\n  html {\n    font-size: 20px;\n  }\n}\n\n\n\n@media (max-width: 1127px) {\n  html {\n    font-size: 18px;\n    \t\t.div_component_open {\n\t\t\tmargin-left: -6rem;\n\t\t}\n\n  }\n}\n\n @media (min-width: 720px) and (max-width: 1126px){\n  html {\n    font-size: 13.5px;\n    \t\t.div_component_open {\n\t\t\tmargin-left: -10rem;\n\t\t}\n\n  }\n}\n\n  "])),(function(t){return t.theme.component}),(function(t){return t.theme.text}),(function(t){return t.theme.body}),(function(t){return t.theme.text})),k=e(6),y=e.n(k),N={body:"#f3f8f9",text:"#1c1c1c",navBar:"#ffffff",component:"#e1aa63",card:"#fdfeff",border:"whitesmoke",icon_linkedin:"#0a66c2"},z={body:"#0d1117",text:"#eaeaeb",navBar:"#161b22",component:"#4592f5",card:"#1a202c",border:"#293242",icon_linkedin:"#fff"},S=function(){var t=y.a.getItem("theme");return t?JSON.parse(t):"light"},A=O.c.div(r||(r=Object(v.a)(["\n\tdisplay: flex;\n\tposition: fixed;\n\tz-index: 1;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: 2.8rem;\n\toverflow: hidden;\n\tbackground-color: ",";\n\tbox-shadow: 0px 1px 15px 2px rgba(0, 0, 0, 0.2);\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: ",";\n\t}\n\t.div_container {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tjustify-content: space-around;\n\t\twidth: 90%;\n\t\theight: 2.8rem;\n\t\t.div_buttons {\n\t\t\tmargin-left: 16rem;\n\t\t\twidth: 40%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\t\t.div_switch {\n\t\t\twidth: 7%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t\tspan {\n\t\t\t\tmargin-top: 4px;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media (min-width: 720px) and (max-width: 1126px) {\n\t\t.div_container {\n\t\t\t.div_buttons {\n\t\t\t\tmargin-left: 8rem;\n\t\t\t}\n\t\t\t.div_switch {\n\t\t\t\twidth: 14%;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-around;\n\t\t\t\tspan {\n\t\t\t\t\tmargin-top: 10px;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\toverflow: hidden;\n\t\t.div_container {\n\t\t\tposition: absolute;\n\t\t\twidth: 90%;\n\t\t\t.div_buttons {\n\t\t\t\tmargin-left: 0;\n\t\t\t\twidth: 90%;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t}\n\t\t\t.div_switch {\n\t\t\t\twidth: 12%;\n\t\t\t\tposition: relative;\n\t\t\t\tleft: 3%;\n\t\t\t\ttop: 6%;\n\t\t\t\tspan {\n\t\t\t\t\tdisplay: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.navBar}),(function(t){return t.theme.text})),P=O.c.div(d||(d=Object(v.a)(["\n\tmargin-top: 4px;\n\tposition: relative;\n\tspan {\n\t}\n\t@media screen and (max-width: 719px) {\n\t\tmargin-top: 0;\n\t}\n"]))),C=O.c.label(o||(o=Object(v.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 42px;\n\theight: 26px;\n\tborder-radius: 15px;\n\tbackground: #bebebe;\n\tcursor: pointer;\n\t&::after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tborder-radius: 50%;\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tmargin: 3px;\n\t\tbackground: #ffffff;\n\t\tbox-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n\t\ttransition: 0.2s;\n\t}\n"]))),I=O.c.input(c||(c=Object(v.a)(["\n\topacity: 0;\n\tz-index: 1;\n\tborder-radius: 15px;\n\twidth: 42px;\n\theight: 26px;\n\t&:checked + "," {\n\t\tbackground: #4fbe79;\n\t\t&::after {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 18px;\n\t\t\theight: 18px;\n\t\t\tmargin-left: 21px;\n\t\t\ttransition: 0.2s;\n\t\t}\n\t}\n"])),C),q=e(19),B=e(20),D=e(1),E=["About","Skills","Projects","Contact"],J=function(t){var n=t.themeToggler,e=t.theme;return Object(D.jsx)("div",{className:"nav",children:Object(D.jsx)(A,{children:Object(D.jsxs)("div",{className:"div_container",children:[Object(D.jsx)("div",{className:"div_buttons",children:E&&E.map((function(t){return Object(D.jsx)("div",{children:Object(D.jsx)("a",{href:"#"+t,children:t})})}))}),Object(D.jsxs)("div",{className:"div_switch",children:[Object(D.jsx)("span",{children:Object(D.jsx)(q.a,{})}),Object(D.jsxs)(P,{children:[Object(D.jsx)(I,{id:"checkbox",type:"checkbox",onClick:n,checked:"dark"===e}),Object(D.jsx)(C,{htmlFor:"checkbox"})]}),Object(D.jsx)("span",{children:Object(D.jsx)(B.a,{})})]})]})})})},M=O.c.div(s||(s=Object(v.a)(["\n\twidth: 99vw;\n\theight: fit-content;\n\tdisplay: grid;\n\tpadding-top: 4rem;\n\tgrid-template-areas:\n\t\t'header header'\n\t\t'photo about '\n\t\t'photo about';\n\n\t.photo {\n\t\tgrid-area: photo;\n\t\talign-self: center;\n\t\tjustify-self: center;\n\t}\n\t.about {\n\t\tgrid-area: about;\n\t}\n\n\t.header {\n\t\tgrid-area: header;\n\t}\n\n\t.div_component_open {\n\t\tpadding-left: 16rem;\n\t}\n\n\t.div_avatar {\n\t\twidth: fit-content;\n\t\theight: fit-content;\n\t\tpadding-top: 20px;\n\n\t\t.img_avatar {\n\t\t\tborder-radius: 15px;\n\t\t\twidth: 19.364rem;\n\t\t}\n\t\t.img_avatar2 {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t.div_about {\n\t\twidth: 22rem;\n\t\theight: fit-content;\n\n\t\t.div_greetings {\n\t\t\tpadding-bottom: 2.5rem;\n\t\t\twidth: fit-content;\n\t\t\theight: fit-content;\n\t\t\tfont-size: 0.9rem;\n\t\t\thr {\n\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t}\n\t\t}\n\t\t.div_title {\n\t\t\tpadding-bottom: 2.5rem;\n\t\t\t.span_about {\n\t\t\t\tline-height: 5rem;\n\t\t\t\tfont-weight: 900;\n\t\t\t\tfont-size: 5.5rem;\n\t\t\t\t.span_title {\n\t\t\t\t\tcolor: #01caf4;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.div_description {\n\t\t\twidth: fit-content;\n\t\t\tfont-size: 0.9rem;\n\t\t\tline-height: 1.5;\n\n\t\t\t.span_mode {\n\t\t\t\tcolor: #4188cf;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\tgrid-template-areas:\n\t\t\t'header'\n\t\t\t'photo'\n\t\t\t'about ';\n\n\t\t.photo {\n\t\t\tgrid-area: photo;\n\t\t}\n\t\t.about {\n\t\t\tgrid-area: about;\n\t\t}\n\n\t\t.div_component_open {\n\t\t\tmargin-left: 0rem;\n\t\t\tpadding-bottom: 1rem;\n\t\t\tpadding-left: 0.5rem;\n\t\t}\n\n\t\t.div_avatar {\n\t\t\t.img_avatar {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.img_avatar2 {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 120px;\n\t\t\t\theight: auto;\n\n\t\t\t\tborder-radius: 100%;\n\t\t\t}\n\t\t}\n\n\t\t.div_about {\n\t\t\twidth: auto;\n\t\t\theight: fit-content;\n\n\t\t\t.div_greetings {\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding-top: 1rem;\n\t\t\t\tpadding-bottom: 2rem;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: fit-content;\n\t\t\t\tfont-size: 0.9rem;\n\n\t\t\t\thr {\n\t\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t\t\tmargin-left: 1.5rem;\n\t\t\t\t\twidth: 80%;\n\t\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.div_title {\n\t\t\t\tpadding-bottom: 1.6rem;\n\t\t\t\tpadding-left: 0.5rem;\n\t\t\t\t.span_about {\n\t\t\t\t\tline-height: 4rem;\n\t\t\t\t\tfont-weight: 900;\n\t\t\t\t\tfont-size: 3.7rem;\n\t\t\t\t\t.span_title {\n\t\t\t\t\t\tcolor: #01caf4;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t.div_description {\n\t\t\t\tpadding-left: 0.8rem;\n\t\t\t}\n\t\t}\n\t}\n"]))),T=e(7),F=e.n(T),R=(e(14),e.p+"static/media/perfil.a6a57cee.png"),H=e.p+"static/media/linkedin.f78fb0f9.png",L=function(){Object(j.useEffect)((function(){F.a.init({})}),[]);var t=window.matchMedia("(max-width: 719px)");return Object(D.jsx)("div",{id:"About",className:"main",children:Object(D.jsxs)(M,{children:[Object(D.jsx)("div",{className:"header",children:Object(D.jsx)("div",{className:"title",children:Object(D.jsxs)("div",{className:"div_component_open",children:[Object(D.jsx)("span",{children:"<"}),"About \xa0\xa0",Object(D.jsxs)("span",{children:["/>"," "]})]})})}),Object(D.jsx)("div",{className:"photo",children:Object(D.jsxs)("div",{className:"div_avatar","data-aos":t.matches?"fade-left":"fade-right","data-aos-duration":"800","data-aos-once":"true",children:[Object(D.jsx)("img",{loading:"lazy",className:"img_avatar",src:R,alt:"perfil"}),Object(D.jsx)("img",{loading:"lazy",className:"img_avatar2",src:H,alt:"perfil"})]})}),Object(D.jsxs)("div",{className:"about",children:[Object(D.jsxs)("div",{className:"div_about","data-aos":t.matches?"fade-right":"fade-left","data-aos-duration":"800","data-aos-once":"true",children:[Object(D.jsxs)("div",{className:"div_greetings",children:[Object(D.jsx)("h2",{children:"Hey! here Alonso Diaz \ud83d\udc4b"}),Object(D.jsx)("div",{className:"div_hr",children:Object(D.jsx)("hr",{})})]}),Object(D.jsx)("div",{className:"div_title",children:Object(D.jsxs)("span",{className:"span_about",children:["I'm ",Object(D.jsx)("span",{className:"span_title",children:"Full Stack Developer"}),"."]})})]}),Object(D.jsx)("div",{className:"div_about ","data-aos":"fade-up","data-aos-duration":"800","data-aos-once":"true","data-aos-delay":"300",children:Object(D.jsx)("div",{className:"div_description",children:Object(D.jsxs)("span",{children:["Finances and investments lover \ud83d\udcc8 living in Argentina \ud83c\udde6\ud83c\uddf7",Object(D.jsx)("br",{}),Object(D.jsx)("br",{}),"I'm a team player that likes challenges and adapts to changes.\xa0\xa0",Object(D.jsx)("span",{className:"span_mode",children:"#StudentModeAlways\ud83d\udcda"})]})})})]})]})})},Q=O.c.div(l||(l=Object(v.a)(["\n\twidth: 99vw;\n\theight: fit-content;\n\tdisplay: grid;\n\tpadding-top: 9rem;\n\tgrid-template-areas:\n\t\t'title'\n\t\t'frontend'\n\t\t'backend';\n\n\t.title {\n\t\tgrid-area: title;\n\t\tjustify-self: start;\n\t\tpadding-left: 16rem;\n\t\tpadding-bottom: 3rem;\n\t}\n\n\t.frontend {\n\t\tgrid-area: frontend;\n\t\tjustify-self: center;\n\t}\n\t.backend {\n\t\tgrid-area: backend;\n\t\tjustify-self: center;\n\t}\n\n\t.div_title {\n\t\tfont-size: 2rem;\n\t}\n\n\t.div_content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tplace-self: center;\n\t\tfont-size: 0.8rem;\n\t\timg {\n\t\t\twidth: 4rem;\n\t\t\theight: 4rem;\n\t\t}\n\t\t.div_skills_title {\n\t\t\twidth: fit-content;\n\t\t\tpadding-bottom: 1.5rem;\n\t\t\thr {\n\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t}\n\t\t\th2 {\n\t\t\t\tfont-size: 1.3rem;\n\t\t\t}\n\t\t}\n\t\t.div_frontend_container {\n\t\t\tpadding-bottom: 2.5rem;\n\t\t\twidth: fit-content;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\t.div_frontend {\n\t\t\t\tdisplay: flex;\n\t\t\t\tfont-size: 0.7rem;\n\t\t\t\tdiv {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tpadding-left: 3.136rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.div_backend_container {\n\t\t\twidth: fit-content;\n\t\t\theight: fit-content;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\t.div_backend {\n\t\t\t\tdisplay: flex;\n\t\t\t\tfont-size: 0.7rem;\n\t\t\t\tdiv {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tpadding-left: 3.136rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\tpadding-top: 4rem;\n\t\t.title {\n\t\t\tgrid-area: title;\n\t\t\tpadding-left: 0;\n\t\t\tpadding-bottom: 0;\n\t\t}\n\n\t\t.div_component_open {\n\t\t\tmargin-left: 0rem;\n\t\t\tpadding-bottom: 3rem;\n\t\t\tpadding-left: 0.5rem;\n\t\t}\n\n\t\t.div_content {\n\t\t\theight: fit-content;\n\t\t\twidth: 90%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tjustify-content: center;\n\t\t\timg {\n\t\t\t\twidth: 3.182rem;\n\t\t\t\theight: 3.182rem;\n\t\t\t}\n\t\t\t.div_skills_title {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\ttext-align: center;\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding-bottom: 1rem;\n\t\t\t\thr {\n\t\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\t\twidth: 60%;\n\t\t\t\t\tmargin-left: 1.7rem;\n\t\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t\t}\n\t\t\t\th2 {\n\t\t\t\t\tfont-size: 1.4rem;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.div_frontend_container {\n\t\t\t\tpadding: 0 1rem;\n\t\t\t\t.div_frontend {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tfont-size: 0.8rem;\n\t\t\t\t\tdiv {\n\t\t\t\t\t\tpadding: 0 0 0.8rem 0;\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.div_backend_container {\n\t\t\t\tpadding: 0;\n\t\t\t\t.div_backend {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tfont-size: 0.8rem;\n\t\t\t\t\tdiv {\n\t\t\t\t\t\tpadding: 0 0 0.8rem 0;\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]))),W=e.p+"static/media/JS.1d3d2879.svg",G=e.p+"static/media/react.6c1d44b8.svg",K=e.p+"static/media/redux.71eb13e2.svg",U=e.p+"static/media/tailwind.017e1e30.svg",V=e.p+"static/media/node.502737ea.svg",X=e.p+"static/media/postgresql.b215fdee.svg",Y=e.p+"static/media/sequelize.ed8fdada.svg",Z=e.p+"static/media/html.87f3f64a.svg",$=e.p+"static/media/css.28303bc0.svg",tt=e.p+"static/media/expressjs.632d3c32.svg",nt=e.p+"static/media/mongodb.0368dd10.svg",et=[{image:Z,name:"HTML"},{image:$,name:"CSS"},{image:W,name:"JS"},{image:G,name:"React.js"},{image:K,name:"Redux"},{image:U,name:"Tailwind CSS"}],it=[{image:V,name:"Node.js"},{image:tt,name:"Express.js"},{image:X,name:"PostgreSQL"},{image:Y,name:"Sequelize"},{image:nt,name:"MongoDB"}],at=function(){return Object(D.jsx)("div",{id:"Skills",className:"skills",children:Object(D.jsxs)(Q,{children:[Object(D.jsx)("div",{className:"title",children:Object(D.jsxs)("div",{className:"div_component_open",children:[Object(D.jsx)("span",{children:"<"}),"Skills \xa0\xa0",Object(D.jsxs)("span",{children:["/>"," "]})]})}),Object(D.jsxs)("div",{className:"div_content",children:[Object(D.jsx)("div",{className:"frontend",children:Object(D.jsxs)("div",{className:"div_frontend_container",children:[Object(D.jsxs)("div",{className:"div_skills_title",children:[Object(D.jsx)("h2",{children:"Front-end"}),Object(D.jsx)("hr",{})]}),Object(D.jsx)("div",{className:"div_frontend",children:et.map((function(t){return Object(D.jsxs)("div",{children:[Object(D.jsx)("img",{src:t.image,alt:t.name}),Object(D.jsx)("h3",{children:t.name})]})}))})]})}),Object(D.jsx)("div",{className:"backend",children:Object(D.jsxs)("div",{className:"div_backend_container",children:[Object(D.jsxs)("div",{className:"div_skills_title",children:[Object(D.jsx)("h2",{children:"Back-end"}),Object(D.jsx)("hr",{})]}),Object(D.jsx)("div",{className:"div_backend",children:it.map((function(t){return Object(D.jsxs)("div",{children:[Object(D.jsx)("img",{src:t.image,alt:t.name}),Object(D.jsx)("h3",{children:t.name})]})}))})]})})]})]})})},rt=O.c.div(m||(m=Object(v.a)(["\n\twidth: 99vw;\n\theight: fit-content;\n\tdisplay: grid;\n\tpadding-top: 7rem;\n\tgrid-template-areas:\n\t\t'title'\n\t\t'project';\n\n\t.title {\n\t\tgrid-area: title;\n\t\tjustify-self: start;\n\t\tpadding-left: 16rem;\n\t\tpadding-bottom: 3rem;\n\t}\n\n\t.project {\n\t\tgrid-area: project;\n\t\tpadding-left: 5rem;\n\t\tjustify-self: center;\n\t}\n\n\t.div_title {\n\t\tfont-size: 2rem;\n\t}\n\n\n\t.div_project_container {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\tpadding-top: 4rem;\n\t\t.title {\n\t\t\tgrid-area: title;\n\t\t\tjustify-self: start;\n\t\t\tpadding-left: 0;\n\t\t\tpadding-bottom: 2rem;\n\t\t}\n\t\t.project {\n\t\t\tgrid-area: project;\n\t\t\tpadding-left: 0;\n\t\t\tjustify-self: center;\n\t\t}\n\n\t\t.div_component_open {\n\t\t\tmargin-left: 0rem;\n\t\t\tpadding-bottom: 2rem;\n\t\t\tpadding-left: 0.5rem;\n\t\t}\n\n\t\t.div_project_container {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\t}\n"]))),dt=O.c.div(p||(p=Object(v.a)(["\n\tiframe {\n\t\theight: 12.909rem;\n\t\twidth: 20rem;\n\t}\n\n\ta {\n\t\tcolor: ",";\n\t\ttext-decoration: none;\n\t}\n\n\t.div_project_title {\n\t\twidth: fit-content;\n\t\tpadding-bottom: 0.6rem;\n\t\thr {\n\t\t\tmargin-top: 0.1rem;\n\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t}\n\t\th3 {\n\t\t\tfont-size: 1.1rem;\n\t\t}\n\t}\n\n\t.div_card {\n\t\twidth: 20.1rem;\n\t\theight: auto;\n\t\tborder: 1.5px solid ",";\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tplace-items: center;\n\t\tbackground: ",";\n\t\tborder-radius: 0.455rem;\n\t\tpadding: 0.909rem 0 0.5rem 0;\n\t\tbox-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\tmargin: 0 2rem 0 0;\n\n\t\t.div_text {\n\t\t\tmargin: 0 0 0 0;\n\t\t\tfont-size: 0.7rem;\n\t\t\tline-height: 1.5;\n\t\t\tpadding: 0 0.5rem 0 0.5rem;\n\t\t\ttext-align: center;\n\t\t\twidth: 20.1rem;\n\t\t\theight: 4rem;\n\t\t}\n\t\t.div_icons {\n\t\t\twidth: 50%;\n\t\t\tpadding-top: 0.7rem;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\n\t\t\t.span_icon {\n\t\t\t\tfont-size: 1.1rem;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tfont-size: 0.7rem;\n\t\t\t}\n\t\t}\n\t}\n\t@media screen and (max-width: 719px) {\n\t\toverflow: hidden;\n\t\tiframe {\n\t\t\theight: 12.909rem;\n\t\t\twidth: 19rem;\n\t\t}\n\n\t\t.div_project_title {\n\t\t\twidth: fit-content;\n\t\t\tpadding-bottom: 0.8rem;\n\t\t\thr {\n\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t}\n\t\t\th3 {\n\t\t\t\tfont-size: 1.1rem;\n\t\t\t}\n\t\t}\n\n\t\t.div_card {\n\t\t\tmargin: 0 0 2rem 0;\n\t\t\twidth: 19.2rem;\n\t\t\theight: auto;\n\t\t\t.div_text {\n\t\t\t\twidth: 19rem;\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.text}),(function(t){return t.theme.border}),(function(t){return t.theme.card})),ot=e(5),ct=function(t){var n=t.title,e=t.description,i=t.link,a=t.github,r=t.web;return Object(D.jsx)(dt,{children:Object(D.jsxs)("div",{className:"div_card",children:[Object(D.jsxs)("div",{className:"div_project_title",children:[Object(D.jsx)("h3",{children:n}),Object(D.jsx)("hr",{})]}),Object(D.jsx)("div",{className:"div_text",children:Object(D.jsx)("span",{children:e})}),Object(D.jsx)("iframe",{src:i,frameborder:"0",allow:"autoplay; fullscreen",title:n}),Object(D.jsxs)("div",{className:"div_icons",children:[Object(D.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(D.jsxs)("span",{className:"span_icon",children:[Object(D.jsx)(ot.b,{}),Object(D.jsx)("span",{children:" GitHub"})]})}),Object(D.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(D.jsxs)("span",{className:"span_icon",children:[Object(D.jsx)(ot.a,{}),Object(D.jsx)("span",{children:" Web"})]})})]})]})})},st=[{title:"Pokemon Companion App",description:"Web application to search, obtain information and add Pokemons.\n        Created with React.js, Redux, Express, Sequelize, PostgreSQL.",link:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6792079534683410432?compact=1",github:"https://github.com/Alonxx/Pokemon-Companion-App",web:"https://pokemon-companion-app.herokuapp.com/"},{title:"The Quizz App",description:"Trivia game web application. Created with React.js consuming data from a public API.",link:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6792576405097062400?compact=1",github:"https://github.com/Alonxx/quizzapp",web:"https://alonxx.github.io/quizzapp/"}],lt=function(){return Object(j.useEffect)((function(){F.a.init()}),[]),Object(D.jsx)("div",{id:"Projects",className:"projects",children:Object(D.jsxs)(rt,{children:[Object(D.jsx)("div",{className:"title",children:Object(D.jsxs)("div",{className:"div_component_open",children:[Object(D.jsx)("span",{children:"<"}),"Projects \xa0\xa0",Object(D.jsxs)("span",{children:["/>"," "]})]})}),Object(D.jsx)("div",{className:"project",children:Object(D.jsx)("div",{className:"div_project_container",children:st&&st.map((function(t,n){return Object(D.jsx)(ct,{title:t.title,description:t.description,link:t.link,github:t.github,web:t.web})}))})})]})})},mt=O.c.div(h||(h=Object(v.a)(["\n\twidth: 99vw;\n\theight: fit-content;\n\tdisplay: grid;\n\tpadding-top: 7rem;\n\tgrid-template-areas:\n\t\t'title'\n\t\t'content';\n\n\t.title {\n\t\tgrid-area: title;\n\t\tjustify-self: start;\n\t\tpadding-left: 16rem;\n\t\tpadding-bottom: 2.5rem;\n\t}\n\n\t.content {\n\t\tgrid-area: content;\n\t\tjustify-self: center;\n\t\tpadding-bottom: 2rem;\n\t}\n\n\t.div_title {\n\t\tfont-size: 2rem;\n\t}\n\n\t.tooltip {\n\t\tborder: 1px solid ",";\n\t\tfont-size: 0.67rem;\n\t\tvisibility: hidden;\n\t\twidth: 10rem;\n\t\tbackground: ",";\n\t\tcolor: ",";\n\t\ttext-align: center;\n\t\tborder-radius: 6px;\n\t\tpadding: 0.5rem 0.3rem 0 0.3rem;\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\tbottom: 115%;\n\t\tleft: -113%;\n\t\topacity: 0;\n\t\ttransition: opacity 0.3s;\n\t\tbox-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\timg {\n\t\t\twidth: 2rem;\n\t\t\theight: auto;\n\t\t\tborder-radius: 100%;\n\t\t}\n\t\ti {\n\t\t\tfont-size: 1rem;\n\t\t}\n\t\ta {\n\t\t\tcolor: ",";\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t&:after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 100%;\n\t\t\tleft: 50%;\n\t\t\tmargin-left: -0.5rem;\n\t\t\tborder-width: 0.5rem;\n\t\t\tborder-style: solid;\n\t\t\tborder-color: "," transparent transparent\n\t\t\t\ttransparent;\n\t\t}\n\t}\n\n\t.div_contact {\n\t\twidth: 20rem;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tfont-size: 3rem;\n\t\tcolor: #1c1c1c;\n\n\t\t.div_icon {\n\t\t\tposition: relative;\n\n\t\t\t.icon_gmail {\n\t\t\t\tcolor: #ca372d;\n\t\t\t}\n\t\t\t.icon_linkedin {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t\t.icon_github {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\n\t\t\t&:hover .tooltip {\n\t\t\t\tvisibility: visible;\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\tpadding-top: 4rem;\n\t\t.title {\n\t\t\tgrid-area: title;\n\t\t\tpadding-left: 0;\n\t\t\tpadding-bottom: 0;\n\t\t}\n\n\t\t.div_component_open {\n\t\t\tmargin-left: 0rem;\n\t\t\tpadding-bottom: 3rem;\n\t\t\tpadding-left: 0.5rem;\n\t\t}\n\t\t.tooltip {\n\t\t\tborder: 1px solid ",";\n\t\t\tvisibility: hidden;\n\t\t\tfont-size: 0.7rem;\n\t\t\tbackground: ",";\n\t\t\tcolor: ",";\n\t\t\ttext-align: center;\n\t\t\tborder-radius: 6px;\n\t\t\tpadding: 0.5rem 0.1rem 0 0.1rem;\n\t\t\tposition: absolute;\n\t\t\tz-index: 1;\n\t\t\tbottom: 115%;\n\t\t\tleft: -113%;\n\t\t\topacity: 0;\n\t\t\ttransition: opacity 0.3s;\n\t\t\tbox-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t\t-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t\t-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t\timg {\n\t\t\t\twidth: 2rem;\n\t\t\t\theight: auto;\n\t\t\t\tborder-radius: 100%;\n\t\t\t}\n\t\t\ti {\n\t\t\t\tfont-size: 1.3rem;\n\t\t\t}\n\t\t\ta {\n\t\t\t\tcolor: ",";\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t&:after {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 100%;\n\t\t\t\tleft: 50%;\n\t\t\t\tmargin-left: -0.5rem;\n\t\t\t\tborder-width: 0.5rem;\n\t\t\t\tborder-style: solid;\n\t\t\t\tborder-color: #fdfeff transparent transparent transparent;\n\t\t\t}\n\t\t}\n\t\t.div_contact {\n\t\t\twidth: 12rem;\n\t\t}\n\t}\n"])),(function(t){return t.theme.border}),(function(t){return t.theme.card}),(function(t){return t.theme.text}),(function(t){return t.theme.text}),(function(t){return t.theme.card}),(function(t){return t.theme.icon_linkedin}),(function(t){return t.theme.text}),(function(t){return t.theme.border}),(function(t){return t.theme.card}),(function(t){return t.theme.text}),(function(t){return t.theme.text})),pt=e(11),ht=[{icon:e(21).a,image:H,text:"alonsodiazlip@gmail.com",text2:null,action:"copy",link:"mailto: alonsodiazlip@gmail.com",inIcon:ot.c,className:"icon_gmail"},{icon:pt.b,image:H,text:"Alonso Diaz",text2:"Full Stack Developer",action:"link",link:"https://www.linkedin.com/in/alonsojesusdiaz/",inIcon:ot.a,className:"icon_linkedin"},{icon:pt.a,image:H,text:"@Alonxx",text2:null,action:"link",link:"https://github.com/Alonxx/",inIcon:ot.a,className:"icon_github"}],bt=function(){return Object(D.jsx)("div",{id:"Contact",className:"contact",children:Object(D.jsxs)(mt,{children:[Object(D.jsx)("div",{className:"title",children:Object(D.jsxs)("div",{className:"div_component_open",children:[Object(D.jsx)("span",{children:"<"}),"Contact\xa0\xa0",Object(D.jsxs)("span",{children:["/>"," "]})]})}),Object(D.jsx)("div",{className:"content",children:Object(D.jsx)("div",{className:"div_contact",children:ht.map((function(t){return Object(D.jsxs)("div",{className:"div_icon",children:[Object(D.jsx)(t.icon,{className:t.className}),Object(D.jsxs)("div",{className:"tooltip",children:[Object(D.jsx)("img",{className:"img_perfil",src:t.image,alt:t.icon}),Object(D.jsx)("br",{}),Object(D.jsxs)("span",{children:[t.text,Object(D.jsx)("br",{}),null!==t.text2?t.text2:null]}),Object(D.jsx)("br",{}),Object(D.jsx)("i",{children:Object(D.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:Object(D.jsx)(t.inIcon,{})})})]})]})}))})})]})})},jt=O.c.div(b||(b=Object(v.a)(["\n\tpadding-top: 1.5rem;\n\ttext-align: center;\n\tfont-size: 0.4rem;\n"]))),gt=function(){return Object(D.jsx)("div",{className:"footer",children:Object(D.jsx)(jt,{children:Object(D.jsx)("h1",{children:" Made with \ud83d\udcaa by Alonso Diaz"})})})};var xt=function(){var t=Object(j.useState)(S),n=Object(u.a)(t,2),e=n[0],i=n[1];return Object(j.useEffect)((function(){y.a.setItem("theme",JSON.stringify(e))}),[e]),Object(D.jsx)(O.a,{theme:"light"===e?N:z,children:Object(D.jsxs)(_,{children:[Object(D.jsx)(w,{}),Object(D.jsx)(J,{themeToggler:function(){i("light"===e?"dark":"light")},theme:e}),Object(D.jsx)(L,{}),Object(D.jsx)(at,{}),Object(D.jsx)(lt,{}),Object(D.jsx)(bt,{}),Object(D.jsx)(gt,{})]})})};e(35);f.a.render(Object(D.jsx)(g.a.StrictMode,{children:Object(D.jsx)(xt,{})}),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.8716de60.chunk.js.map