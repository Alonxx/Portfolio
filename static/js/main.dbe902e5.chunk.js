(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{34:function(t,n,e){},35:function(t,n,e){"use strict";e.r(n);var i,a,r,d,o,c,s,l,m,p=e(2),h=e.n(p),b=e(15),j=e.n(b),g=e(21),f=e(4),x=e(3),u=x.c.div(i||(i=Object(f.a)(["\n\twidth: 100%;\n\theight: fit-content;\n\tdisplay: grid;\n\tgrid-template-areas:\n\t\t'nav     nav    nav'\n\t\t'main    main   main'\n\t\t'skills   skills   skills'\n\t\t'projects   projects   projects'\n\t\t'contact     contact      contact'\n\t\t'footer footer footer';\n\n\t.nav {\n\t\tgrid-area: nav;\n\t}\n\n\t.main {\n\t\tgrid-area: main;\n\t}\n\t.skills {\n\t\tgrid-area: skills;\n\t}\n\t.projects {\n\t\tgrid-area: projects;\n\t}\n\t.contact {\n\t\tgrid-area: contact;\n\t}\n\t.footer {\n\t\tgrid-area: footer;\n\t}\n"]))),v=Object(x.b)(a||(a=Object(f.a)(["\n\n* { margin: 0; \n  padding: 0; \n  list-style: none;  \n  box-sizing: border-box; }\n\n  \t.div_component_open {\n\t\tmargin-left: 0rem;\n\t\tpadding-bottom: 2rem;\n\t\tfont-size: 2rem;\n\t\tfont-weight: 900;\n\t\tcolor: ",";\n\t\tspan {\n\t\t\tcolor: ",";\n\t\t}\n\t}\n\n  body {\n    min-height: 100vh;\n    background: ",";\n    color: ",";\n    //transition: all 0.50s linear;\n\n  }\nhtml {\n  font-size: 24px;\n  scroll-behavior: smooth;\n}\n\n@media (max-width: 1921px) {\n  html {\n    font-size: 22px;\n\n  }\n}\n\n@media (max-width: 1441px) {\n  html {\n    font-size: 20px;\n  }\n}\n\n@media (max-width: 1025px) {\n  html {\n    font-size: 18px;\n  }\n}\n\n  "])),(function(t){return t.theme.component}),(function(t){return t.theme.text}),(function(t){return t.theme.body}),(function(t){return t.theme.text})),O=e(6),_=e.n(O),w={body:"#f3f8f9",text:"#1c1c1c",navBar:"#ffffff",component:"#e1aa63",card:"#fdfeff",border:"whitesmoke",icon_linkedin:"#0a66c2"},k={body:"#0d1117",text:"#eaeaeb",navBar:"#161b22",component:"#4592f5",card:"#1a202c",border:"#293242",icon_linkedin:"#fff"},y=function(){var t=_.a.getItem("theme");return t?JSON.parse(t):"light"},N=x.c.div(r||(r=Object(f.a)(["\n\tdisplay: flex;\n\tposition: fixed;\n\tz-index: 1;\n\talign-items: center;\n\tjustify-content: center;\n\twidth: 100%;\n\theight: 2.8rem;\n\toverflow: hidden;\n\tbackground-color: ",";\n\tbox-shadow: 0px 1px 15px 2px rgba(0, 0, 0, 0.2);\n\ta {\n\t\ttext-decoration: none;\n\t\tcolor: ",";\n\t}\n\n\t.div_buttons {\n\t\twidth: 35%;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\toverflow: hidden;\n\t\t.div_buttons {\n\t\t\twidth: 90%;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-between;\n\t\t}\n\t}\n"])),(function(t){return t.theme.navBar}),(function(t){return t.theme.text})),z=e(1),S=["About","Skills","Projects","Contact"],A=function(t){t.themeToggler;return Object(z.jsx)("div",{className:"nav",children:Object(z.jsx)(N,{children:Object(z.jsx)("div",{className:"div_buttons",children:S&&S.map((function(t){return Object(z.jsx)("div",{children:Object(z.jsx)("a",{href:"#"+t,children:t})})}))})})})},P=x.c.div(d||(d=Object(f.a)(["\n\twidth: 99vw;\n\theight: fit-content;\n\tdisplay: grid;\n\tpadding-top: 4rem;\n\tgrid-template-areas:\n\t\t'header header'\n\t\t'photo about '\n\t\t'photo about';\n\n\t.photo {\n\t\tgrid-area: photo;\n\t\talign-self: center;\n\t\tjustify-self: center;\n\t}\n\t.about {\n\t\tgrid-area: about;\n\t}\n\n\t.header {\n\t\tgrid-area: header;\n\t}\n\n\t.div_component_open {\n\t\tpadding-left: 16rem;\n\t}\n\n\t.div_avatar {\n\t\twidth: fit-content;\n\t\theight: fit-content;\n\t\tpadding-top: 20px;\n\n\t\t.img_avatar {\n\t\t\tborder-radius: 15px;\n\t\t\twidth: 426px;\n\t\t}\n\t\t.img_avatar2 {\n\t\t\tdisplay: none;\n\t\t}\n\t}\n\n\t.div_about {\n\t\twidth: 22rem;\n\t\theight: fit-content;\n\n\t\t.div_greetings {\n\t\t\tpadding-bottom: 2.5rem;\n\t\t\twidth: fit-content;\n\t\t\theight: fit-content;\n\t\t\tfont-size: 0.9rem;\n\t\t\thr {\n\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t}\n\t\t}\n\t\t.div_title {\n\t\t\tpadding-bottom: 3rem;\n\t\t\t.span_about {\n\t\t\t\tline-height: 5rem;\n\t\t\t\tfont-weight: 900;\n\t\t\t\tfont-size: 5.5rem;\n\t\t\t\t.span_title {\n\t\t\t\t\tcolor: #01caf4;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t\t.div_description {\n\t\t\twidth: fit-content;\n\t\t\tfont-size: 0.9rem;\n\t\t\tline-height: 1.5;\n\n\t\t\t.span_mode {\n\t\t\t\tcolor: #4188cf;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\tgrid-template-areas:\n\t\t\t'header'\n\t\t\t'photo'\n\t\t\t'about ';\n\n\t\t.photo {\n\t\t\tgrid-area: photo;\n\t\t}\n\t\t.about {\n\t\t\tgrid-area: about;\n\t\t}\n\n\t\t.div_component_open {\n\t\t\tmargin-left: 0rem;\n\t\t\tpadding-bottom: 2rem;\n\t\t\tpadding-left: 0.5rem;\n\t\t}\n\n\t\t.div_avatar {\n\t\t\t.img_avatar {\n\t\t\t\tdisplay: none;\n\t\t\t}\n\t\t\t.img_avatar2 {\n\t\t\t\tdisplay: block;\n\t\t\t\twidth: 120px;\n\t\t\t\theight: auto;\n\t\t\t\tborder-radius: 100%;\n\t\t\t}\n\t\t}\n\n\t\t.div_about {\n\t\t\twidth: auto;\n\t\t\theight: fit-content;\n\n\t\t\t.div_greetings {\n\t\t\t\ttext-align: center;\n\t\t\t\tpadding-top: 1rem;\n\t\t\t\tpadding-bottom: 2rem;\n\t\t\t\twidth: 100%;\n\t\t\t\theight: fit-content;\n\t\t\t\tfont-size: 0.9rem;\n\n\t\t\t\thr {\n\t\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t\t\tmargin-left: 1.5rem;\n\t\t\t\t\twidth: 80%;\n\t\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.div_title {\n\t\t\t\tpadding-bottom: 1.6rem;\n\t\t\t\tpadding-left: 0.5rem;\n\t\t\t\t.span_about {\n\t\t\t\t\tline-height: 4rem;\n\t\t\t\t\tfont-weight: 900;\n\t\t\t\t\tfont-size: 3.7rem;\n\t\t\t\t\t.span_title {\n\t\t\t\t\t\tcolor: #01caf4;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t.div_description {\n\t\t\t\tpadding-left: 0.8rem;\n\t\t\t}\n\n\t\t\t.div_component_close {\n\t\t\t\twidth: 95%;\n\t\t\t}\n\t\t}\n\t}\n"]))),I=e(7),C=e.n(I),q=(e(14),e.p+"static/media/perfil.accbbdb3.png"),B=function(){Object(p.useEffect)((function(){C.a.init({})}),[]);var t=window.matchMedia("(max-width: 719px)");return Object(z.jsx)("div",{className:"main",children:Object(z.jsx)("a",{name:"About",children:Object(z.jsxs)(P,{children:[Object(z.jsx)("div",{className:"header",children:Object(z.jsx)("div",{className:"title",children:Object(z.jsxs)("div",{className:"div_component_open",children:[Object(z.jsx)("span",{children:"<"}),"About \xa0\xa0",Object(z.jsxs)("span",{children:["/>"," "]})]})})}),Object(z.jsx)("div",{className:"photo",children:Object(z.jsxs)("div",{className:"div_avatar","data-aos":t.matches?"fade-left":"fade-right","data-aos-duration":"800","data-aos-once":"true",children:[Object(z.jsx)("img",{className:"img_avatar",src:q,alt:"perfil"}),Object(z.jsx)("img",{className:"img_avatar2",src:q,alt:"perfil"})]})}),Object(z.jsxs)("div",{className:"about",children:[Object(z.jsxs)("div",{className:"div_about","data-aos":t.matches?"fade-right":"fade-left","data-aos-duration":"800","data-aos-once":"true",children:[Object(z.jsxs)("div",{className:"div_greetings",children:[Object(z.jsx)("h2",{children:"\xa1Hey! here Alonso Diaz \ud83d\udc4b"}),Object(z.jsx)("div",{className:"div_hr",children:Object(z.jsx)("hr",{})})]}),Object(z.jsx)("div",{className:"div_title",children:Object(z.jsxs)("span",{className:"span_about",children:["I'm ",Object(z.jsx)("span",{className:"span_title",children:"Full Stack Developer"}),"."]})})]}),Object(z.jsx)("div",{className:"div_about ","data-aos":"fade-up","data-aos-duration":"800","data-aos-once":"true","data-aos-delay":"300",children:Object(z.jsx)("div",{className:"div_description",children:Object(z.jsxs)("span",{children:["Lover of finances and investments \ud83d\udcc8 and I currently reside in Argentina \ud83c\udde6\ud83c\uddf7.",Object(z.jsx)("br",{})," I love challenges, adapt to changes, work as a team, and stay in"," ",Object(z.jsx)("span",{className:"span_mode",children:"#StudentModeAlways\ud83d\udcda"})]})})})]})]})})})},D=x.c.div(o||(o=Object(f.a)(["\n\twidth: 99vw;\n\theight: fit-content;\n\tdisplay: grid;\n\tpadding-top: 9rem;\n\tgrid-template-areas:\n\t\t'title'\n\t\t'frontend'\n\t\t'backend';\n\n\t.title {\n\t\tgrid-area: title;\n\t\tjustify-self: start;\n\t\tpadding-left: 16rem;\n\t\tpadding-bottom: 3rem;\n\t}\n\n\t.frontend {\n\t\tgrid-area: frontend;\n\t\tjustify-self: center;\n\t}\n\t.backend {\n\t\tgrid-area: backend;\n\t\tjustify-self: center;\n\t}\n\n\n\t.div_title {\n\t\tfont-size: 2rem;\n\t}\n\n\t.div_content {\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tplace-self: center;\n\t\tfont-size: 0.8rem;\n\t\timg {\n\t\t\twidth: 4rem;\n\t\t\theight: 4rem;\n\t\t}\n\t\t.div_skills_title {\n\t\t\twidth: fit-content;\n\t\t\tpadding-bottom: 1.5rem;\n\t\t\thr {\n\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t}\n\t\t\th2 {\n\t\t\t\tfont-size: 1.3rem;\n\t\t\t}\n\t\t}\n\t\t.div_frontend_container {\n\t\t\tpadding-bottom: 2.5rem;\n\t\t\twidth: fit-content;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\t.div_frontend {\n\t\t\t\tdisplay: flex;\n\t\t\t\tfont-size: 0.7rem;\n\t\t\t\tdiv {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tpadding-left: 3.136rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\t.div_backend_container {\n\t\t\twidth: fit-content;\n\t\t\theight: fit-content;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t\t.div_backend {\n\t\t\t\tdisplay: flex;\n\t\t\t\tfont-size: 0.7rem;\n\t\t\t\tdiv {\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tpadding-left: 3.136rem;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\tpadding-top: 4rem;\n\t\t.title {\n\t\t\tgrid-area: title;\n\t\t\tpadding-left: 0;\n\t\t\tpadding-bottom: 0;\n\t\t}\n\n\t\t.div_component_open {\n\t\t\tmargin-left: 0rem;\n\t\t\tpadding-bottom: 3rem;\n\t\t\tpadding-left: 0.5rem;\n\t\t}\n\n\t\t.div_content {\n\t\t\theight: fit-content;\n\t\t\twidth: 90%;\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: row;\n\t\t\tjustify-content: center;\n\t\t\timg {\n\t\t\t\twidth: 3.182rem;\n\t\t\t\theight: 3.182rem;\n\t\t\t}\n\t\t\t.div_skills_title {\n\t\t\t\tdisplay: flex;\n\t\t\t\tflex-direction: column;\n\t\t\t\ttext-align: center;\n\t\t\t\twidth: 100%;\n\t\t\t\tpadding-bottom: 1rem;\n\t\t\t\thr {\n\t\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\t\twidth: 60%;\n\t\t\t\t\tmargin-left: 1.7rem;\n\t\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t\t}\n\t\t\t\th2 {\n\t\t\t\t\tfont-size: 1.4rem;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.div_frontend_container {\n\t\t\t\tpadding: 0 1rem;\n\t\t\t\t.div_frontend {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tfont-size: 0.8rem;\n\t\t\t\t\tdiv {\n\t\t\t\t\t\tpadding: 0 0 0.8rem 0;\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.div_backend_container {\n\t\t\t\tpadding: 0;\n\t\t\t\t.div_backend {\n\t\t\t\t\tdisplay: flex;\n\t\t\t\t\tflex-direction: column;\n\t\t\t\t\tpadding: 0;\n\t\t\t\t\tfont-size: 0.8rem;\n\t\t\t\t\tdiv {\n\t\t\t\t\t\tpadding: 0 0 0.8rem 0;\n\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n"]))),E=e.p+"static/media/JS.fd46ca41.svg",J=e.p+"static/media/react.6c1d44b8.svg",M=e.p+"static/media/redux.71eb13e2.svg",T=e.p+"static/media/tailwind.017e1e30.svg",R=e.p+"static/media/node.502737ea.svg",L=e.p+"static/media/postgresql.b215fdee.svg",F=e.p+"static/media/sequelize.ed8fdada.svg",H=e.p+"static/media/html.87f3f64a.svg",Q=e.p+"static/media/css.28303bc0.svg",W=e.p+"static/media/expressjs.632d3c32.svg",G=e.p+"static/media/mongodb.0368dd10.svg",K=[{image:H,name:"HTML"},{image:Q,name:"CSS"},{image:E,name:"JS"},{image:J,name:"React.js"},{image:M,name:"Redux"},{image:T,name:"Tailwind CSS"}],U=[{image:R,name:"Node.js"},{image:W,name:"Express.js"},{image:L,name:"PostgreSQL"},{image:F,name:"Sequelize"},{image:G,name:"MongoDB"}],V=function(){return Object(z.jsx)("div",{id:"Skills",className:"skills",children:Object(z.jsxs)(D,{children:[Object(z.jsx)("div",{className:"title",children:Object(z.jsxs)("div",{className:"div_component_open",children:[Object(z.jsx)("span",{children:"<"}),"Skills \xa0\xa0",Object(z.jsxs)("span",{children:["/>"," "]})]})}),Object(z.jsxs)("div",{className:"div_content",children:[Object(z.jsx)("div",{className:"frontend",children:Object(z.jsxs)("div",{className:"div_frontend_container",children:[Object(z.jsxs)("div",{className:"div_skills_title",children:[Object(z.jsx)("h2",{children:"Front-end"}),Object(z.jsx)("hr",{})]}),Object(z.jsx)("div",{className:"div_frontend",children:K.map((function(t){return Object(z.jsxs)("div",{children:[Object(z.jsx)("img",{src:t.image,alt:t.name}),Object(z.jsx)("h3",{children:t.name})]})}))})]})}),Object(z.jsx)("div",{className:"backend",children:Object(z.jsxs)("div",{className:"div_backend_container",children:[Object(z.jsxs)("div",{className:"div_skills_title",children:[Object(z.jsx)("h2",{children:"Back-end"}),Object(z.jsx)("hr",{})]}),Object(z.jsx)("div",{className:"div_backend",children:U.map((function(t){return Object(z.jsxs)("div",{children:[Object(z.jsx)("img",{src:t.image,alt:t.name}),Object(z.jsx)("h3",{children:t.name})]})}))})]})})]})]})})},X=x.c.div(c||(c=Object(f.a)(["\n\twidth: 99vw;\n\theight: fit-content;\n\tdisplay: grid;\n\tpadding-top: 7rem;\n\tgrid-template-areas:\n\t\t'title'\n\t\t'project';\n\n\t.title {\n\t\tgrid-area: title;\n\t\tjustify-self: start;\n\t\tpadding-left: 16rem;\n\t\tpadding-bottom: 3rem;\n\t}\n\n\t.project {\n\t\tgrid-area: project;\n\t\tpadding-left: 5rem;\n\t\tjustify-self: center;\n\t}\n\n\t.div_title {\n\t\tfont-size: 2rem;\n\t}\n\n\n\t.div_project_container {\n\t\tdisplay: flex;\n\t\tflex-direction: row;\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\tpadding-top: 4rem;\n\t\t.title {\n\t\t\tgrid-area: title;\n\t\t\tjustify-self: start;\n\t\t\tpadding-left: 0;\n\t\t\tpadding-bottom: 2rem;\n\t\t}\n\t\t.project {\n\t\t\tgrid-area: project;\n\t\t\tpadding-left: 0;\n\t\t\tjustify-self: center;\n\t\t}\n\n\t\t.div_component_open {\n\t\t\tmargin-left: 0rem;\n\t\t\tpadding-bottom: 2rem;\n\t\t\tpadding-left: 0.5rem;\n\t\t}\n\n\t\t.div_project_container {\n\t\t\tdisplay: flex;\n\t\t\tflex-direction: column;\n\t\t}\n\t}\n"]))),Y=x.c.div(s||(s=Object(f.a)(["\n\tiframe {\n\t\theight: 12.909rem;\n\t\twidth: 20rem;\n\t}\n\n\ta {\n\t\tcolor: ",";\n\t\ttext-decoration: none;\n\t}\n\n\t.div_project_title {\n\t\twidth: fit-content;\n\t\tpadding-bottom: 0.6rem;\n\t\thr {\n\t\t\tmargin-top: 0.1rem;\n\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t}\n\t\th3 {\n\t\t\tfont-size: 1.1rem;\n\t\t}\n\t}\n\n\t.div_card {\n\t\twidth: 20.1rem;\n\t\theight: auto;\n\t\tborder: 1.5px solid ",";\n\t\tdisplay: flex;\n\t\tflex-direction: column;\n\t\tplace-items: center;\n\t\tbackground: ",";\n\t\tborder-radius: 0.455rem;\n\t\tpadding: 0.909rem 0 0.5rem 0;\n\t\tbox-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\tmargin: 0 2rem 0 0;\n\n\t\t.div_text {\n\t\t\tmargin: 0 0 0 0;\n\t\t\tfont-size: 0.7rem;\n\t\t\tline-height: 1.5;\n\t\t\tpadding: 0 0.5rem 0 0.5rem;\n\t\t\ttext-align: center;\n\t\t\twidth: 20.1rem;\n\t\t\theight: 4rem;\n\t\t}\n\t\t.div_icons {\n\t\t\twidth: 50%;\n\t\t\tpadding-top: 0.7rem;\n\t\t\tdisplay: flex;\n\t\t\tjustify-content: space-around;\n\n\t\t\t.span_icon {\n\t\t\t\tfont-size: 1.1rem;\n\t\t\t}\n\t\t\tspan {\n\t\t\t\tfont-size: 0.7rem;\n\t\t\t}\n\t\t}\n\t}\n\t@media screen and (max-width: 719px) {\n\t\toverflow: hidden;\n\t\tiframe {\n\t\t\theight: 12.909rem;\n\t\t\twidth: 19rem;\n\t\t}\n\n\t\t.div_project_title {\n\t\t\twidth: fit-content;\n\t\t\tpadding-bottom: 0.8rem;\n\t\t\thr {\n\t\t\t\tmargin-top: 0.1rem;\n\t\t\t\tbackground-color: rgba(222, 226, 230, 0.7);\n\t\t\t\tborder: 1px solid rgba(222, 226, 230, 0.7);\n\t\t\t}\n\t\t\th3 {\n\t\t\t\tfont-size: 1.1rem;\n\t\t\t}\n\t\t}\n\n\t\t.div_card {\n\t\t\tmargin: 0 0 2rem 0;\n\t\t\twidth: 19.2rem;\n\t\t\theight: auto;\n\t\t\t.div_text {\n\t\t\t\twidth: 19rem;\n\t\t\t}\n\t\t}\n\t}\n"])),(function(t){return t.theme.text}),(function(t){return t.theme.border}),(function(t){return t.theme.card})),Z=e(5),$=function(t){var n=t.title,e=t.description,i=t.link,a=t.github,r=t.web;return Object(z.jsx)(Y,{children:Object(z.jsxs)("div",{className:"div_card",children:[Object(z.jsxs)("div",{className:"div_project_title",children:[Object(z.jsx)("h3",{children:n}),Object(z.jsx)("hr",{})]}),Object(z.jsx)("div",{className:"div_text",children:Object(z.jsx)("span",{children:e})}),Object(z.jsx)("iframe",{src:i,frameborder:"0",allow:"autoplay; fullscreen",title:n}),Object(z.jsxs)("div",{className:"div_icons",children:[Object(z.jsx)("a",{href:a,target:"_blank",rel:"noreferrer",children:Object(z.jsxs)("span",{className:"span_icon",children:[Object(z.jsx)(Z.b,{}),Object(z.jsx)("span",{children:" GitHub"})]})}),Object(z.jsx)("a",{href:r,target:"_blank",rel:"noreferrer",children:Object(z.jsxs)("span",{className:"span_icon",children:[Object(z.jsx)(Z.a,{}),Object(z.jsx)("span",{children:" Web"})]})})]})]})})},tt=[{title:"Pokemon Companion App",description:"Web application to search, obtain information and add Pokemons.\n        Created with React.js, Redux, Express, Sequelize, PostgreSQL.",link:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6792079534683410432?compact=1",github:"https://github.com/Alonxx/Pokemon-Companion-App",web:"https://github.com/Alonxx/Pokemon-Companion-App"},{title:"The Quizz App",description:"Trivia game web application. Created with React.js consuming data from a public API.",link:"https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:6792576405097062400?compact=1",github:"https://github.com/Alonxx/quizzapp",web:"https://alonxx.github.io/quizzapp/"}],nt=function(){return Object(p.useEffect)((function(){C.a.init()}),[]),Object(z.jsx)("div",{id:"Projects",className:"projects",children:Object(z.jsxs)(X,{children:[Object(z.jsx)("div",{className:"title",children:Object(z.jsxs)("div",{className:"div_component_open",children:[Object(z.jsx)("span",{children:"<"}),"Projects \xa0\xa0",Object(z.jsxs)("span",{children:["/>"," "]})]})}),Object(z.jsx)("div",{className:"project",children:Object(z.jsx)("div",{className:"div_project_container",children:tt&&tt.map((function(t,n){return Object(z.jsx)($,{title:t.title,description:t.description,link:t.link,github:t.github,web:t.web})}))})})]})})},et=x.c.div(l||(l=Object(f.a)(["\n\twidth: 99vw;\n\theight: fit-content;\n\tdisplay: grid;\n\tpadding-top: 7rem;\n\tgrid-template-areas:\n\t\t'title'\n\t\t'content';\n\n\t.title {\n\t\tgrid-area: title;\n\t\tjustify-self: start;\n\t\tpadding-left: 16rem;\n\t\tpadding-bottom: 2.5rem;\n\t}\n\n\t.content {\n\t\tgrid-area: content;\n\t\tjustify-self: center;\n\t\tpadding-bottom: 2rem;\n\t}\n\n\t.div_title {\n\t\tfont-size: 2rem;\n\t}\n\n\t.tooltip {\n\t\tborder: 1px solid ",";\n\t\tfont-size: 0.67rem;\n\t\tvisibility: hidden;\n\t\twidth: 10rem;\n\t\tbackground: ",";\n\t\tcolor: ",";\n\t\ttext-align: center;\n\t\tborder-radius: 6px;\n\t\tpadding: 0.5rem 0.3rem 0 0.3rem;\n\t\tposition: absolute;\n\t\tz-index: 1;\n\t\tbottom: 115%;\n\t\tleft: -113%;\n\t\topacity: 0;\n\t\ttransition: opacity 0.3s;\n\t\tbox-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\timg {\n\t\t\twidth: 2rem;\n\t\t\theight: auto;\n\t\t\tborder-radius: 100%;\n\t\t}\n\t\ti {\n\t\t\tfont-size: 1rem;\n\t\t}\n\t\ta {\n\t\t\tcolor: ",";\n\t\t\ttext-decoration: none;\n\t\t}\n\t\t&:after {\n\t\t\tcontent: '';\n\t\t\tposition: absolute;\n\t\t\ttop: 100%;\n\t\t\tleft: 50%;\n\t\t\tmargin-left: -0.5rem;\n\t\t\tborder-width: 0.5rem;\n\t\t\tborder-style: solid;\n\t\t\tborder-color: "," transparent transparent\n\t\t\t\ttransparent;\n\t\t}\n\t}\n\n\t.div_contact {\n\t\twidth: 20rem;\n\t\tdisplay: flex;\n\t\tjustify-content: space-between;\n\t\tfont-size: 3rem;\n\t\tcolor: #1c1c1c;\n\n\t\t.div_icon {\n\t\t\tposition: relative;\n\n\t\t\t.icon_gmail {\n\t\t\t\tcolor: #ca372d;\n\t\t\t}\n\t\t\t.icon_linkedin {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\t\t\t.icon_github {\n\t\t\t\tcolor: ",";\n\t\t\t}\n\n\t\t\t&:hover .tooltip {\n\t\t\t\tvisibility: visible;\n\t\t\t\topacity: 1;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width: 719px) {\n\t\tpadding-top: 4rem;\n\t\t.title {\n\t\t\tgrid-area: title;\n\t\t\tpadding-left: 0;\n\t\t\tpadding-bottom: 0;\n\t\t}\n\n\t\t.div_component_open {\n\t\t\tmargin-left: 0rem;\n\t\t\tpadding-bottom: 3rem;\n\t\t\tpadding-left: 0.5rem;\n\t\t}\n\t\t.tooltip {\n\t\t\tborder: 1px solid ",";\n\t\t\tvisibility: hidden;\n\t\t\tfont-size: 0.7rem;\n\t\t\tbackground: ",";\n\t\t\tcolor: ",";\n\t\t\ttext-align: center;\n\t\t\tborder-radius: 6px;\n\t\t\tpadding: 0.5rem 0.1rem 0 0.1rem;\n\t\t\tposition: absolute;\n\t\t\tz-index: 1;\n\t\t\tbottom: 115%;\n\t\t\tleft: -113%;\n\t\t\topacity: 0;\n\t\t\ttransition: opacity 0.3s;\n\t\t\tbox-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t\t-webkit-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t\t-moz-box-shadow: 0 0.091rem 0.227rem rgba(0, 0, 0, 0.075);\n\t\t\timg {\n\t\t\t\twidth: 2rem;\n\t\t\t\theight: auto;\n\t\t\t\tborder-radius: 100%;\n\t\t\t}\n\t\t\ti {\n\t\t\t\tfont-size: 1.3rem;\n\t\t\t}\n\t\t\ta {\n\t\t\t\tcolor: ",";\n\t\t\t\ttext-decoration: none;\n\t\t\t}\n\t\t\t&:after {\n\t\t\t\tcontent: '';\n\t\t\t\tposition: absolute;\n\t\t\t\ttop: 100%;\n\t\t\t\tleft: 50%;\n\t\t\t\tmargin-left: -0.5rem;\n\t\t\t\tborder-width: 0.5rem;\n\t\t\t\tborder-style: solid;\n\t\t\t\tborder-color: #fdfeff transparent transparent transparent;\n\t\t\t}\n\t\t}\n\t\t.div_contact {\n\t\t\twidth: 12rem;\n\t\t}\n\t}\n"])),(function(t){return t.theme.border}),(function(t){return t.theme.card}),(function(t){return t.theme.text}),(function(t){return t.theme.text}),(function(t){return t.theme.card}),(function(t){return t.theme.icon_linkedin}),(function(t){return t.theme.text}),(function(t){return t.theme.border}),(function(t){return t.theme.card}),(function(t){return t.theme.text}),(function(t){return t.theme.text})),it=e(12),at=e(20),rt=e.p+"static/media/linkedin.d54ff438.png",dt=[{icon:at.a,image:q,text:"alonsodiazlip@gmail.com",text2:null,action:"copy",link:"mailto: alonsodiazlip@gmail.com",inIcon:Z.c,className:"icon_gmail"},{icon:it.b,image:rt,text:"Alonso Diaz",text2:"Full Stack Developer",action:"link",link:"https://www.linkedin.com/in/alonsojesusdiaz/",inIcon:Z.a,className:"icon_linkedin"},{icon:it.a,image:q,text:"@Alonxx",text2:null,action:"link",link:"https://github.com/Alonxx/",inIcon:Z.a,className:"icon_github"}],ot=function(){return Object(z.jsx)("div",{id:"Contact",className:"contact",children:Object(z.jsxs)(et,{children:[Object(z.jsx)("div",{className:"title",children:Object(z.jsxs)("div",{className:"div_component_open",children:[Object(z.jsx)("span",{children:"<"}),"Contact\xa0\xa0",Object(z.jsxs)("span",{children:["/>"," "]})]})}),Object(z.jsx)("div",{className:"content",children:Object(z.jsx)("div",{className:"div_contact",children:dt.map((function(t){return Object(z.jsxs)("div",{className:"div_icon",children:[Object(z.jsx)(t.icon,{className:t.className}),Object(z.jsxs)("div",{className:"tooltip",children:[Object(z.jsx)("img",{className:"img_perfil",src:t.image,alt:t.icon}),Object(z.jsx)("br",{}),Object(z.jsxs)("span",{children:[t.text,Object(z.jsx)("br",{}),null!==t.text2?t.text2:null]}),Object(z.jsx)("br",{}),Object(z.jsx)("i",{children:Object(z.jsx)("a",{href:t.link,target:"_blank",rel:"noreferrer",children:Object(z.jsx)(t.inIcon,{})})})]})]})}))})})]})})},ct=x.c.div(m||(m=Object(f.a)(["\n\tpadding-top: 1.5rem;\n\ttext-align: center;\n\tfont-size: 0.4rem;\n"]))),st=function(){return Object(z.jsx)("div",{className:"footer",children:Object(z.jsx)(ct,{children:Object(z.jsx)("h1",{children:" Made with \ud83d\udcaa by Alonso Diaz"})})})};var lt=function(){var t=Object(p.useState)(y),n=Object(g.a)(t,2),e=n[0],i=n[1];return Object(p.useEffect)((function(){_.a.setItem("theme",JSON.stringify(e))}),[e]),Object(z.jsx)(x.a,{theme:"light"===e?w:k,children:Object(z.jsxs)(u,{children:[Object(z.jsx)(v,{}),Object(z.jsx)(A,{themeToggler:function(){i("light"===e?"dark":"light")}}),Object(z.jsx)(B,{}),Object(z.jsx)(V,{}),Object(z.jsx)(nt,{}),Object(z.jsx)(ot,{}),Object(z.jsx)(st,{})]})})};e(34);j.a.render(Object(z.jsx)(h.a.StrictMode,{children:Object(z.jsx)(lt,{})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.dbe902e5.chunk.js.map