(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{34:function(t,n,e){},35:function(t,n,e){"use strict";e.r(n);var i,a,r,d,o,c,s,l,m,p,h,b,g=e(2),j=e.n(g),f=e(15),x=e.n(f),u=e(21),v=e(4),O=e(3),_=O.c.div(i||(i=Object(v.a)(["\n\twidth: 100%;\n\theight: fit-content;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'nav     nav    nav'\n\t\t'main    main   main'\n\t\t'skills   skills   skills'\n\t\t'projects   projects   projects'\n\t\t'contact     contact      contact'\n\t\t'footer footer footer';\n\n\t.nav {\n\t\tgrid-area: nav;\n\t}\n\n\t.main {\n\t\tgrid-area: main;\n\t}\n\t.skills {\n\t\tgrid-area: skills;\n\t}\n\t.projects {\n\t\tgrid-area: projects;\n\t}\n\t.contact {\n\t\tgrid-area: contact;\n\t}\n\t.footer {\n\t\tgrid-area: footer;\n\t}\n"]))),w=Object(O.b)(a||(a=Object(v.a)(["\n\n* { margin: 0; \n  padding: 0; \n  list-style: none;  \n  box-sizing: border-box; }\n\n.div_component_open {\n\t\tmargin-left: 0rem;\n\t\tpadding-bottom: 2rem;\n\t\tfont-size: 2rem;\n\t\tfont-weight: 900;\n\t\tcolor: ",";\n\t\tspan {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n\n  body {\n    min-height: 100vh;\n    background: ",";\n    color: ",";\n    //transition: all 0.50s linear;\n\n  }\nhtml {\n  font-size: 24px;\n  scroll-behavior: smooth;\n}\n\n@media (max-width: 1921px) {\n  html {\n    font-size: 22px;\n\n  }\n}\n\n@media (max-width: 1441px) {\n  html {\n    font-size: 20px;\n  }\n}\n\n\n\n@media (max-width: 1127px) {\n  html {\n    font-size: 18px;\n    \t\t.div_component_open {\n\t\t\tmargin-left: -6rem;\n\t\t}\n\n  }\n}\n\n @media (min-width: 720px) and (max-width: 1126px){\n  html {\n    font-size: 13.5px;\n    \t\t.div_component_open {\n\t\t\tmargin-left: -10rem;\n\t\t}\n\n  }\n}\n\n  "])),(function(t){return t.theme.component}),(function(t){return t.theme.text}),(function(t){return t.theme.body}),(function(t){return t.theme.text})),k=e(6),y=e.n(k),N={body:"#f3f8f9",text:"#1c1c1c",navBar:"#ffffff",component:"#e1aa63",card:"#fdfeff",border:"whitesmoke",icon_linkedin:"#0a66c2"},z={body:"#0d1117",text:"#eaeaeb",navBar:"#161b22",component:"#4592f5",card:"#1a202c",border:"#293242",icon_linkedin:"#fff"},S=function(){var t=y.a.getItem("theme");return t?JSON.parse(t):"light"},A=O.c.div(r||(r=Object(v.a)(["\n\tdisplay: flex;\n\tposition: fixed;\n\tz-index: 1;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: 2.8rem;\n\toverflow: hidden;\n\tbackground-color: ",";\n\tbox-shadow: 0px 1px 15px 2px rgba(0, 0, 0, 0.2);\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: ",";\n\t}\n\t.div_container {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t\talign-items: center;\n\t\tjustify-content: space-around;\n\t\twidth: 90%;\n\t\theight: 2.8rem;\n\t\t.div_buttons {\n\t\t\tmargin-left: 16rem;\n\t\t\twidth: 40%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\t\t.div_switch {\n\t\t}\n\t}\n\n\t@media (min-width: 720px) and (max-width: 1126px) {\n\t\t.div_container {\n\t\t\t.div_buttons {\n\t\t\t\tmargin-left: 8rem;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\toverflow: hidden;\n\t\t.div_container {\n\t\t\tposition: absolute;\n\t\t\twidth: 90%;\n\t\t\t.div_buttons {\n\t\t\t\tmargin-left: 0;\n\t\t\t\twidth: 90%;\n\t\t\t\tdisplay: flex;\n\t\t\t\tjustify-content: space-between;\n\t\t\t}\n\t\t\t.div_switch {\n\t\t\t\tposition: relative;\n\t\t\t\tleft: 3%;\n\t\t\t\ttop: 6%;\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.navBar}),(function(t){return t.theme.text})),I=O.c.div(d||(d=Object(v.a)(["\n\tmargin-top: 4px;\n\tposition: relative;\n\t@media screen and (max-width: 719px) {\n\t\tmargin-top: 0;\n\t}\n"]))),P=O.c.label(o||(o=Object(v.a)(["\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 42px;\n\theight: 26px;\n\tborder-radius: 15px;\n\tbackground: #bebebe;\n\tcursor: pointer;\n\t&::after {\n\t\tcontent: '';\n\t\tdisplay: block;\n\t\tborder-radius: 50%;\n\t\twidth: 18px;\n\t\theight: 18px;\n\t\tmargin: 3px;\n\t\tbackground: #ffffff;\n\t\tbox-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);\n\t\ttransition: 0.2s;\n\t}\n"]))),C=O.c.input(c||(c=Object(v.a)(["\n\topacity: 0;\n\tz-index: 1;\n\tborder-radius: 15px;\n\twidth: 42px;\n\theight: 26px;\n\t&:checked + "," {\n\t\tbackground: #4fbe79;\n\t\t&::after {\n\t\t\tcontent: '';\n\t\t\tdisplay: block;\n\t\t\tborder-radius: 50%;\n\t\t\twidth: 18px;\n\t\t\theight: 18px;\n\t\t\tmargin-left: 21px;\n\t\t\ttransition: 0.2s;\n\t\t}\n\t}\n"])),P),q=e(1),B=["About","Skills","Projects","Contact"],D=function(t){var n=t.themeToggler,e=t.theme;return Object(q.jsx)("div",{className:"nav",children:Object(q.jsx)(A,{children:Object(q.jsxs)("div",{className:"div_container",children:[Object(q.jsx)("div",{className:"div_buttons",children:B&&B.map((function(t){return Object(q.jsx)("div",{children:Object(q.jsx)("a",{href:"#"+t,children:t})})}))}),Object(q.jsx)("div",{className:"div_switch",children:Object(q.jsxs)(I,{children:[Object(q.jsx)(C,{id:"checkbox",type:"checkbox",onClick:n,checked:"dark"===e}),Object(q.jsx)(P,{htmlFor:"checkbox"})]})})]})})})},E=O.c.div(s||(s=Object(v.a)(["\n\twidth: 99vw;\n\theight: fit-content;\n\tdisplay: grid;\n\tpadding-top: 4rem;\n\tgrid-template-areas:\n\t\t'header header'\n\t\t'photo about '\n\t\t'photo about';\n\n\t.photo {\n\t\tgrid-area: photo;\n\t\talign-self: center;\n\t\tjustify-self: center;\n\t}\n\t.about {\n\t\tgrid-area: about;\n\t}\n\n\t.header {\n\t\tgrid-area: header;\n\t}\n\n\t.div_component_open {\n\t\tpadding-left: 16rem;\n\t}\n\n\t.div_avatar {\n\t\twidth: fit-content;\n\t\theight: fit-content;\n\t\tpadding-top: 20px;\n\n\t\t.img_avatar {\n\t\t\tborder-radius: 15px;\n\t\t\twidth: 19.364rem;\n\t\t}\n\t\t.img_avatar2 {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t.div_about {\n\t\twidth: 22rem;\n\t\theight: fit-content;\n\n\t\t.div_greetings {\n\t\t\tpadding-bottom: 2.5rem;\n\t\t\twidth: fit-content;\n\t\t\theight: fit-content;\n\t\t\tfont-size: 0.9rem;\n\t\t\thr {\n\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t}\n\t\t}\n\t\t.div_title {\n\t\t\tpadding-bottom: 3rem;\n\t\t\t.span_about {\n\t\t\t\tline-height: 5rem;\n\t\t\t\tfont-weight: 900;\n\t\t\t\tfont-size: 5.5rem;\n\t\t\t\t.span_title {\n\t\t\t\t\tcolor: #01caf4;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.div_description {\n\t\t\twidth: fit-content;\n\t\t\tfont-size: 0.9rem;\n\t\t\tline-height: 1.5;\n\n\t\t\t.span_mode {\n\t\t\t\tcolor: #4188cf;\n\t\t\t}\n\t\t}\n\t}\n\n\n\t@media screen and (max-width: 719px) {\n\t\tgrid-template-areas:\n\t\t\t'header'\n\t\t\t'photo'\n\t\t\t'about ';\n\n\t\t.photo {\n\t\t\tgrid-area: photo;\n\t\t}\n\t\t.about {\n\t\t\tgrid-area: about;\n\t\t}\n\n\t\t.div_component_open {\n\t\t\tmargin-left: 0rem;\n\t\t\tpadding-bottom: 1rem;\n\t\t\tpadding-left: 0.5rem;\n\t\t}\n\n\t\t.div_avatar {\n\t\t\t.img_avatar {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.img_avatar2 {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 120px;\n\t\t\t\theight: auto;\n\n\t\t\t\tborder-radius: 100%;\n\t\t\t}\n\t\t}\n\n\t\t.div_about {\n\t\t\twidth: auto;\n\t\t\theight: fit-content;\n\n\t\t\t.div_greetings {\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding-top: 1rem;\n\t\t\t\tpadding-bottom: 2rem;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: fit-content;\n\t\t\t\tfont-size: 0.9rem;\n\n\t\t\t\thr {\n\t\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t\t\tmargin-left: 1.5rem;\n\t\t\t\t\twidth: 80%;\n\t\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.div_title {\n\t\t\t\tpadding-bottom: 1.6rem;\n\t\t\t\tpadding-left: 0.5rem;\n\t\t\t\t.span_about {\n\t\t\t\t\tline-height: 4rem;\n\t\t\t\t\tfont-weight: 900;\n\t\t\t\t\tfont-size: 3.7rem;\n\t\t\t\t\t.span_title {\n\t\t\t\t\t\tcolor: #01caf4;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t.div_description {\n\t\t\t\tpadding-left: 0.8rem;\n\t\t\t}\n\t\t}\n\t}\n"]))),J=e(7),M=e.n(J),T=(e(14),e.p+"static/media/perfil.a6a57cee.png"),R=e.p+"static/media/linkedin.f78fb0f9.png",F=function(){Object(g.useEffect)((function(){M.a.init({})}),[]);var t=window.matchMedia("(max-width: 719px)");return Object(q.jsx)("div",{className:"main",children:Object(q.jsx)("a",{name:"About",children:Object(q.jsxs)(E,{children:[Object(q.jsx)("div",{className:"header",children:Object(q.jsx)("div",{className:"title",children:Object(q.jsxs)("div",{className:"div_component_open",children:[Object(q.jsx)("span",{children:"<"}),"About \xa0\xa0",Object(q.jsxs)("span",{children:["/>"," "]})]})})}),Object(q.jsx)("div",{className:"photo",children:Object(q.jsxs)("div",{className:"div_avatar","data-aos":t.matches?"fade-left":"fade-right","data-aos-duration":"800","data-aos-once":"true",children:[Object(q.jsx)("img",{className:"img_avatar",src:T,alt:"perfil"}),Object(q.jsx)("img",{className:"img_avatar2",src:R,alt:"perfil"})]})}),Object(q.jsxs)("div",{className:"about",children:[Object(q.jsxs)("div",{className:"div_about","data-aos":t.matches?"fade-right":"fade-left","data-aos-duration":"800","data-aos-once":"true",children:[Object(q.jsxs)("div",{className:"div_greetings",children:[Object(q.jsx)("h2",{children:"Hey! here Alonso Diaz \ud83d\udc4b"}),Object(q.jsx)("div",{className:"div_hr",children:Object(q.jsx)("hr",{})})]}),Object(q.jsx)("div",{className:"div_title",children:Object(q.jsxs)("span",{className:"span_about",children:["I'm ",Object(q.jsx)("span",{className:"span_title",children:"Full Stack Developer"}),"."]})})]}),Object(q.jsx)("div",{className:"div_about ","data-aos":"fade-up","data-aos-duration":"800","data-aos-once":"true","data-aos-delay":"300",children:Object(q.jsx)("div",{className:"div_description",children:Object(q.jsxs)("span",{children:["Lover of finances and investments \ud83d\udcc8 and I currently reside in Argentina \ud83c\udde6\ud83c\uddf7.",Object(q.jsx)("br",{})," I love challenges, adapt to changes, work as a team, and stay in"," ",Object(q.jsx)("span",{className:"span_mode",children:"#StudentModeAlways\ud83d\udcda"})]})})})]})]})})})},L=O.c.div(l||(l=Object(v.a)(["\n\twidth: 99vw;\n\theight: fit-content;\n\tdisplay: grid;\n\tpadding-top: 9rem;\n\tgrid-template-areas:\n\t\t'title'\n\t\t'frontend'\n\t\t'backend';\n\n\t.title {\n\t\tgrid-area: title;\n\t\tjustify-self: start;\n\t\tpadding-left: 16rem;\n\t\tpadding-bottom: 3rem;\n\t}\n\n\t.frontend {\n\t\tgrid-area: frontend;\n\t\tjustify-self: center;\n\t}\n\t.backend {\n\t\tgrid-area: backend;\n\t\tjustify-self: center;\n\t}\n\n\t.div_title {\n\t\tfont-size: 2rem;\n\t}\n\n\t.div_content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tplace-self: center;\n\t\tfont-size: 0.8rem;\n\t\timg {\n\t\t\twidth: 4rem;\n\t\t\theight: 4rem;\n\t\t}\n\t\t.div_skills_title {\n\t\t\twidth: fit-content;\n\t\t\tpadding-bottom: 1.5rem;\n\t\t\thr {\n\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t}\n\t\t\th2 {\n\t\t\t\tfont-size: 1.3rem;\n\t\t\t}\n\t\t}\n\t\t.div_frontend_container {\n\t\t\tpadding-bottom: 2.5rem;\n\t\t\twidth: fit-content;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\t.div_frontend {\n\t\t\t\tdisplay: flex;\n\t\t\t\tfont-size: 0.7rem;\n\t\t\t\tdiv {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tpadding-left: 3.136rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.div_backend_container {\n\t\t\twidth: fit-content;\n\t\t\theight: fit-content;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\t.div_backend {\n\t\t\t\tdisplay: flex;\n\t\t\t\tfont-size: 0.7rem;\n\t\t\t\tdiv {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tpadding-left: 3.136rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\tpadding-top: 4rem;\n\t\t.title {\n\t\t\tgrid-area: title;\n\t\t\tpadding-left: 0;\n\t\t\tpadding-bottom: 0;\n\t\t}\n\n\t\t.div_component_open {\n\t\t\tmargin-left: 0rem;\n\t\t\tpadding-bottom: 3rem;\n\t\t\tpadding-left: 0.5rem;\n\t\t}\n\n\t\t.div_content {\n\t\t\theight: fit-content;\n\t\t\twidth: 90%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tjustify-content: center;\n\t\t\timg {\n\t\t\t\twidth: 3.182rem;\n\t\t\t\theight: 3.182rem;\n\t\t\t}\n\t\t\t.div_skills_title {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\ttext-align: center;\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding-bottom: 1rem;\n\t\t\t\thr {\n\t\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\t\twidth: 60%;\n\t\t\t\t\tmargin-left: 1.7rem;\n\t\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t\t}\n\t\t\t\th2 {\n\t\t\t\t\tfont-size: 1.4rem;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.div_frontend_container {\n\t\t\t\tpadding: 0 1rem;\n\t\t\t\t.div_frontend {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tfont-size: 0.8rem;\n\t\t\t\t\tdiv {\n\t\t\t\t\t\tpadding: 0 0 0.8rem 0;\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.div_backend_container {\n\t\t\t\tpadding: 0;\n\t\t\t\t.div_backend {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tfont-size: 0.8rem;\n\t\t\t\t\tdiv {\n\t\t\t\t\t\tpadding: 0 0 0.8rem 0;\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]))),H=e.p+"static/media/JS.1d3d2879.svg",Q=e.p+"static/media/react.6c1d44b8.svg",W=e.p+"static/media/redux.71eb13e2.svg",G=e.p+"static/media/tailwind.017e1e30.svg",K=e.p+"static/media/node.502737ea.svg",U=e.p+"static/media/postgresql.b215fdee.svg",V=e.p+"static/media/sequelize.ed8fdada.svg",X=e.p+"static/media/html.87f3f64a.svg",Y=e.p+"static/media/css.28303bc0.svg",Z=e.p+"static/media/expressjs.632d3c32.svg",$=e.p+"static/media/mongodb.0368dd10.svg",tt=[{image:X,name:"HTML"},{image:Y,name:"CSS"},{image:H,name:"JS"},{image:Q,name:"React.js"},{image:W,name:"Redux"},{image:G,name:"Tailwind CSS"}],nt=[{image:K,name:"Node.js"},{image:Z,name:"Express.js"},{image:U,name:"PostgreSQL"},{image:V,name:"Sequelize"},{image:$,name:"MongoDB"}],et=function(){return Object(q.jsx)("div",{id:"Skills",className:"skills",children:Object(q.jsxs)(L,{children:[Object(q.jsx)("div",{className:"title",children:Object(q.jsxs)("div",{className:"div_component_open",children:[Object(q.jsx)("span",{children:"<"}),"Skills \xa0\xa0",Object(q.jsxs)("span",{children:["/>"," "]})]})}),Object(q.jsxs)("div",{className:"div_content",children:[Object(q.jsx)("div",{className:"frontend",children:Object(q.jsxs)("div",{className:"div_frontend_container",children:[Object(q.jsxs)("div",{className:"div_skills_title",children:[Object(q.jsx)("h2",{children:"Front-end"}),Object(q.jsx)("hr",{})]}),Object(q.jsx)("div",{className:"div_frontend",children:tt.map((function(t){return Object(q.jsxs)("div",{children:[Object(q.jsx)("img",{src:t.image,alt:t.name}),Object(q.jsx)("h3",{children:t.name})]})}))})]})}),Object(q.jsx)("div",{className:"backend",children:Object(q.jsxs)("div",{className:"div_backend_container",children:[Object(q.jsxs)("div",{className:"div_skills_title",children:[Object(q.jsx)("h2",{children:"Back-end"}),Object(q.jsx)("hr",{})]}),Object(q.jsx)("div",{className:"div_backend",children:nt.map((function(t){return Object(q.jsxs)("div",{children:[Object(q.jsx)("img",{src:t.image,alt:t.name}),Object(q.jsx)("h3",{children:t.name})]})}))})]})})]})]})})},it=O.c.div(m||(m=Object(v.a)(["\n\twidth: 99vw;\n\theight: fit-content;\n\tdisplay: grid;\n\tpadding-top: 7rem;\n\tgrid-template-areas:\n\t\t'title'\n\t\t'project';\n\n\t.title {\n\t\tgrid-area: title;\n\t\tjustify-self: start;\n\t\tpadding-left: 16rem;\n\t\tpadding-bottom: 3rem;\n\t}\n\n\t.project {\n\t\tgrid-area: project;\n\t\tpadding-left: 5rem;\n\t\tjustify-self: center;\n\t}\n\n\t.div_title {\n\t\tfont-size: 2rem;\n\t}\n\n\n\t.div_project_container {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\tpadding-top: 4rem;\n\t\t.title {\n\t\t\tgrid-area: title;\n\t\t\tjustify-self: start;\n\t\t\tpadding-left: 0;\n\t\t\tpadding-bottom: 2rem;\n\t\t}\n\t\t.project {\n\t\t\tgrid-area: project;\n\t\t\tpadding-left: 0;\n\t\t\tjustify-self: center;\n\t\t}\n\n\t\t.div_component_open {\n\t\t\tmargin-left: 0rem;\n\t\t\tpadding-bottom: 2rem;\n\t\t\tpadding-left: 0.5rem;\n\t\t}\n\n\t\t.div_project_container {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\t}\n"]))),at=O.c.div(p||(p=Object(v.a)(["\n\tiframe {\n\t\theight: 12.909rem;\n\t\twidth: 20rem;\n\t}\n\n\ta {\n\t\tcolor: ",";\n\t\ttext-decoration: none;\n\t}\n\n\t.div_project_title {\n\t\twidth: fit-content;\n\t\tpadding-bottom: 0.6rem;\n\t\thr {\n\t\t\tmargin-top: 0.1rem;\n\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t}\n\t\th3 {\n\t\t\tfont-size: 1.1rem;\n\t\t}\n\t}\n\n\t.div_card {\n\t\twidth: 20.1rem;\n\t\theight: auto;\n\t\tborder: 1.5px solid ",";\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tplace-items: center;\n\t\tbackground: ",";\n\t\tborder-radius: 0.455rem;\n\t\tpadding: 0.909rem 0 0.5rem 0;\n\t\tbox-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\tmargin: 0 2rem 0 0;\n\n\t\t.div_text {\n\t\t\tmargin: 0 0 0 0;\n\t\t\tfont-size: 0.7rem;\n\t\t\tline-height: 1.5;\n\t\t\tpadding: 0 0.5rem 0 0.5rem;\n\t\t\ttext-align: center;\n\t\t\twidth: 20.1rem;\n\t\t\theight: 4rem;\n\t\t}\n\t\t.div_icons {\n\t\t\twidth: 50%;\n\t\t\tpadding-top: 0.7rem;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\n\t\t\t.span_icon {\n\t\t\t\tfont-size: 1.1rem;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tfont-size: 0.7rem;\n\t\t\t}\n\t\t}\n\t}\n\t@media screen and (max-width: 719px) {\n\t\toverflow: hidden;\n\t\tiframe {\n\t\t\theight: 12.909rem;\n\t\t\twidth: 19rem;\n\t\t}\n\n\t\t.div_project_title {\n\t\t\twidth: fit-content;\n\t\t\tpadding-bottom: 0.8rem;\n\t\t\thr {\n\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t}\n\t\t\th3 {\n\t\t\t\tfont-size: 1.1rem;\n\t\t\t}\n\t\t}\n\n\t\t.div_card {\n\t\t\tmargin: 0 0 2rem 0;\n\t\t\twidth: 19.2rem;\n\t\t\theight: auto;\n\t\t\t.div_text {\n\t\t\t\twidth: 19rem;\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.text}),(function(t){return t.theme.border}),(function(t){return t.theme.card})),rt=e(5),dt=function(t){var n=t.title,e=t.description,i=t.link,a=t.github,r=t.web;return Object(q.jsx)(at,{children:Object(q.jsxs)("div",{className:"div_card",children:[Object(q.jsxs)("div",{className:"div_project_title",children:[Object(q.jsx)("h3",{children:n}),Object(q.jsx)("hr",{})]}),Object(q.jsx)("div",{className:"div_text",children:Object(q.jsx)("span",{children:e})}),Object(q.jsx)("iframe",{src:i,frameborder:"0",allow:"autoplay; fullscreen",title:n}),Object(q.jsxs)("div",{className:"div_icons",children:[Object(q.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(q.jsxs)("span",{className:"span_icon",children:[Object(q.jsx)(rt.b,{}),Object(q.jsx)("span",{children:" GitHub"})]})}),Object(q.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(q.jsxs)("span",{className:"span_icon",children:[Object(q.jsx)(rt.a,{}),Object(q.jsx)("span",{children:" Web"})]})})]})]})})},ot=[{title:"Pokemon Companion App",description:"Web application to search, obtain information and add Pokemons.\n        Created with React.js, Redux, Express, Sequelize, PostgreSQL.",link:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6792079534683410432?compact=1",github:"https://github.com/Alonxx/Pokemon-Companion-App",web:"https://pokemon-companion-app.herokuapp.com/"},{title:"The Quizz App",description:"Trivia game web application. Created with React.js consuming data from a public API.",link:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6792576405097062400?compact=1",github:"https://github.com/Alonxx/quizzapp",web:"https://alonxx.github.io/quizzapp/"}],ct=function(){return Object(g.useEffect)((function(){M.a.init()}),[]),Object(q.jsx)("div",{id:"Projects",className:"projects",children:Object(q.jsxs)(it,{children:[Object(q.jsx)("div",{className:"title",children:Object(q.jsxs)("div",{className:"div_component_open",children:[Object(q.jsx)("span",{children:"<"}),"Projects \xa0\xa0",Object(q.jsxs)("span",{children:["/>"," "]})]})}),Object(q.jsx)("div",{className:"project",children:Object(q.jsx)("div",{className:"div_project_container",children:ot&&ot.map((function(t,n){return Object(q.jsx)(dt,{title:t.title,description:t.description,link:t.link,github:t.github,web:t.web})}))})})]})})},st=O.c.div(h||(h=Object(v.a)(["\n\twidth: 99vw;\n\theight: fit-content;\n\tdisplay: grid;\n\tpadding-top: 7rem;\n\tgrid-template-areas:\n\t\t'title'\n\t\t'content';\n\n\t.title {\n\t\tgrid-area: title;\n\t\tjustify-self: start;\n\t\tpadding-left: 16rem;\n\t\tpadding-bottom: 2.5rem;\n\t}\n\n\t.content {\n\t\tgrid-area: content;\n\t\tjustify-self: center;\n\t\tpadding-bottom: 2rem;\n\t}\n\n\t.div_title {\n\t\tfont-size: 2rem;\n\t}\n\n\t.tooltip {\n\t\tborder: 1px solid ",";\n\t\tfont-size: 0.67rem;\n\t\tvisibility: hidden;\n\t\twidth: 10rem;\n\t\tbackground: ",";\n\t\tcolor: ",";\n\t\ttext-align: center;\n\t\tborder-radius: 6px;\n\t\tpadding: 0.5rem 0.3rem 0 0.3rem;\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\tbottom: 115%;\n\t\tleft: -113%;\n\t\topacity: 0;\n\t\ttransition: opacity 0.3s;\n\t\tbox-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\timg {\n\t\t\twidth: 2rem;\n\t\t\theight: auto;\n\t\t\tborder-radius: 100%;\n\t\t}\n\t\ti {\n\t\t\tfont-size: 1rem;\n\t\t}\n\t\ta {\n\t\t\tcolor: ",";\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t&:after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 100%;\n\t\t\tleft: 50%;\n\t\t\tmargin-left: -0.5rem;\n\t\t\tborder-width: 0.5rem;\n\t\t\tborder-style: solid;\n\t\t\tborder-color: "," transparent transparent\n\t\t\t\ttransparent;\n\t\t}\n\t}\n\n\t.div_contact {\n\t\twidth: 20rem;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tfont-size: 3rem;\n\t\tcolor: #1c1c1c;\n\n\t\t.div_icon {\n\t\t\tposition: relative;\n\n\t\t\t.icon_gmail {\n\t\t\t\tcolor: #ca372d;\n\t\t\t}\n\t\t\t.icon_linkedin {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t\t.icon_github {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\n\t\t\t&:hover .tooltip {\n\t\t\t\tvisibility: visible;\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\tpadding-top: 4rem;\n\t\t.title {\n\t\t\tgrid-area: title;\n\t\t\tpadding-left: 0;\n\t\t\tpadding-bottom: 0;\n\t\t}\n\n\t\t.div_component_open {\n\t\t\tmargin-left: 0rem;\n\t\t\tpadding-bottom: 3rem;\n\t\t\tpadding-left: 0.5rem;\n\t\t}\n\t\t.tooltip {\n\t\t\tborder: 1px solid ",";\n\t\t\tvisibility: hidden;\n\t\t\tfont-size: 0.7rem;\n\t\t\tbackground: ",";\n\t\t\tcolor: ",";\n\t\t\ttext-align: center;\n\t\t\tborder-radius: 6px;\n\t\t\tpadding: 0.5rem 0.1rem 0 0.1rem;\n\t\t\tposition: absolute;\n\t\t\tz-index: 1;\n\t\t\tbottom: 115%;\n\t\t\tleft: -113%;\n\t\t\topacity: 0;\n\t\t\ttransition: opacity 0.3s;\n\t\t\tbox-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t\t-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t\t-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t\timg {\n\t\t\t\twidth: 2rem;\n\t\t\t\theight: auto;\n\t\t\t\tborder-radius: 100%;\n\t\t\t}\n\t\t\ti {\n\t\t\t\tfont-size: 1.3rem;\n\t\t\t}\n\t\t\ta {\n\t\t\t\tcolor: ",";\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t&:after {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 100%;\n\t\t\t\tleft: 50%;\n\t\t\t\tmargin-left: -0.5rem;\n\t\t\t\tborder-width: 0.5rem;\n\t\t\t\tborder-style: solid;\n\t\t\t\tborder-color: #fdfeff transparent transparent transparent;\n\t\t\t}\n\t\t}\n\t\t.div_contact {\n\t\t\twidth: 12rem;\n\t\t}\n\t}\n"])),(function(t){return t.theme.border}),(function(t){return t.theme.card}),(function(t){return t.theme.text}),(function(t){return t.theme.text}),(function(t){return t.theme.card}),(function(t){return t.theme.icon_linkedin}),(function(t){return t.theme.text}),(function(t){return t.theme.border}),(function(t){return t.theme.card}),(function(t){return t.theme.text}),(function(t){return t.theme.text})),lt=e(12),mt=[{icon:e(20).a,image:R,text:"alonsodiazlip@gmail.com",text2:null,action:"copy",link:"mailto: alonsodiazlip@gmail.com",inIcon:rt.c,className:"icon_gmail"},{icon:lt.b,image:R,text:"Alonso Diaz",text2:"Full Stack Developer",action:"link",link:"https://www.linkedin.com/in/alonsojesusdiaz/",inIcon:rt.a,className:"icon_linkedin"},{icon:lt.a,image:R,text:"@Alonxx",text2:null,action:"link",link:"https://github.com/Alonxx/",inIcon:rt.a,className:"icon_github"}],pt=function(){return Object(q.jsx)("div",{id:"Contact",className:"contact",children:Object(q.jsxs)(st,{children:[Object(q.jsx)("div",{className:"title",children:Object(q.jsxs)("div",{className:"div_component_open",children:[Object(q.jsx)("span",{children:"<"}),"Contact\xa0\xa0",Object(q.jsxs)("span",{children:["/>"," "]})]})}),Object(q.jsx)("div",{className:"content",children:Object(q.jsx)("div",{className:"div_contact",children:mt.map((function(t){return Object(q.jsxs)("div",{className:"div_icon",children:[Object(q.jsx)(t.icon,{className:t.className}),Object(q.jsxs)("div",{className:"tooltip",children:[Object(q.jsx)("img",{className:"img_perfil",src:t.image,alt:t.icon}),Object(q.jsx)("br",{}),Object(q.jsxs)("span",{children:[t.text,Object(q.jsx)("br",{}),null!==t.text2?t.text2:null]}),Object(q.jsx)("br",{}),Object(q.jsx)("i",{children:Object(q.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:Object(q.jsx)(t.inIcon,{})})})]})]})}))})})]})})},ht=O.c.div(b||(b=Object(v.a)(["\n\tpadding-top: 1.5rem;\n\ttext-align: center;\n\tfont-size: 0.4rem;\n"]))),bt=function(){return Object(q.jsx)("div",{className:"footer",children:Object(q.jsx)(ht,{children:Object(q.jsx)("h1",{children:" Made with \ud83d\udcaa by Alonso Diaz"})})})};var gt=function(){var t=Object(g.useState)(S),n=Object(u.a)(t,2),e=n[0],i=n[1];return Object(g.useEffect)((function(){y.a.setItem("theme",JSON.stringify(e))}),[e]),Object(q.jsx)(O.a,{theme:"light"===e?N:z,children:Object(q.jsxs)(_,{children:[Object(q.jsx)(w,{}),Object(q.jsx)(D,{themeToggler:function(){i("light"===e?"dark":"light")},theme:e}),Object(q.jsx)(F,{}),Object(q.jsx)(et,{}),Object(q.jsx)(ct,{}),Object(q.jsx)(pt,{}),Object(q.jsx)(bt,{})]})})};e(34);x.a.render(Object(q.jsx)(j.a.StrictMode,{children:Object(q.jsx)(gt,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.0d387ece.chunk.js.map