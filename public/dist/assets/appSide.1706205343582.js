import{u as e,r as s,w as a,ab as l,q as t,o,b as n,c as i,d as u,k as d,h as r,e as c,j as p,ae as m,a1 as v,x as g,i as h,Z as f,af as w,m as _,T as k,X as x,Y as y,M as b,B as C,C as L,R as V,g as j,ad as S,ag as B}from"./index.1706205343582.js";const P={class:"userLogin"},U={key:0,class:"loginPage"},E={class:"loginCard"},I={class:"rightLogin"},O={class:"text-lg font-bold mb-6 flex items-center"},A={key:0,class:"mt-3 login"},K={class:"input_div"},M=c("div",{class:"input_title"}," 邮箱账号 ",-1),R=c("div",{class:"input_title mt-3"}," 登录密码 ",-1),T=["onKeyup"],D={class:"flex mt-4"},z=c("hr",{class:"mt-6 mb-6 hr-login"},null,-1),G={class:"flex"},q={key:1,class:"mt-3 register"},F={class:"input_div"},H=c("div",{class:"input_title"}," 邮箱账号 ",-1),X=c("div",{class:"input_title mt-3"}," 注册密码 ",-1),Y=["onKeyup"],Z=c("div",{class:"input_title mt-3"}," 验证码 ",-1),J={class:"flex gap-4"},N={key:1,class:"SmsCodeButton"},Q={class:"flex mt-4"},W=c("hr",{class:"mt-6 mb-6 hr-login"},null,-1),$={class:"flex"},ee={key:2,class:"mt-3 register"},se={class:"input_div"},ae=c("div",{class:"input_title"}," 邮箱账号 ",-1),le=c("div",{class:"input_title mt-3"}," 新密码 ",-1),te=c("div",{class:"input_title mt-3"}," 邮件验证码 ",-1),oe={class:"flex gap-4"},ne={key:1,class:"SmsCodeButton"},ie={class:"flex mt-4"},ue=c("hr",{class:"mt-6 mb-6 hr-login"},null,-1),de={class:"flex"},re={__name:"userLogin",setup(C){const L=e(),V=s(1),j=s(60),S=s(!1);a(S,(e=>{document.body.style.overflow=e?"hidden":"scroll"}));const B=()=>{S.value=!1},re=l({username:"",password:""}),ce=l({username:"",password:"",code:""}),pe=l({username:"",password:"",code:""}),me=()=>{x({url:"/user/forgetPass",method:"post",data:{username:pe.username,password:pe.password,code:pe.code}}).then((e=>{1===e.code?(re.username=pe.username,re.password=pe.password,y.success("重置成功,已为您自动登录"),ge()):y.error(e.msg)}))},ve=()=>{x({url:"/user/register",method:"post",data:{username:ce.username,password:ce.password,code:ce.code}}).then((e=>{1===e.code?(re.username=ce.username,re.password=ce.password,y.success("从现在起你就是我的主人了,已为您自动登录"),ge()):y.error(e.msg)}))},ge=()=>{x({url:"/user/login",method:"post",data:{username:re.username,password:re.password}}).then((e=>{if(1===e.code){const{user_id:s,token:a}=e.data;b.set("token",a).set("user_id",s),L.dispatch("loginIn"),S.value=!1}else y.error(e.msg)}))},he=e=>{x({url:"/api/getMailCode",method:"post",data:{mail:e}}).then((e=>{if(1===e.code){y.success(e.msg);let s=setInterval((()=>{j.value-=1,j.value<=0&&(clearInterval(s),j.value=60)}),1e3)}else y.error(e.msg)}))},fe=(e=1)=>{V.value=e,S.value=!0};return t.on("openLogin",fe),o((()=>{t.off("openLogin",fe)})),(e,s)=>{const a=n("el-icon");return i(),u("div",P,[d(k,{name:"loginFade"},{default:r((()=>[S.value?(i(),u("div",U,[c("div",E,[c("div",I,[d(a,{onClick:B,size:"25px",class:"closeLogin"},{default:r((()=>[d(p(m))])),_:1}),c("h2",O,[c("img",{class:"loginIco",src:"/favicon",alt:""}),v(" "+g(["登录","注册","重置"][V.value-1])+"您的账户 ",1)]),1===V.value?(i(),u("div",A,[c("div",K,[M,h(c("input",{"onUpdate:modelValue":s[0]||(s[0]=e=>re.username=e),class:"inputLogin",placeholder:"请输入邮箱"},null,512),[[f,re.username]]),R,h(c("input",{type:"password","onUpdate:modelValue":s[1]||(s[1]=e=>re.password=e),placeholder:"请输入6-18位密码",class:"inputLogin",onKeyup:w(ge,["enter"])},null,40,T),[[f,re.password]])]),c("div",D,[c("span",{class:"hover text-blue-500 ml-auto text-sm",onClick:s[2]||(s[2]=e=>V.value=3)},"忘记密码？")]),c("div",{class:"mt-4 flex"},[c("button",{class:"loginBtn",onClick:ge}," 登录 ")]),z,c("div",G,[c("div",{class:"text-gray-500 text-sm m-auto cursor-pointer",onClick:s[3]||(s[3]=e=>V.value=2)},"还没有账号？去注册")])])):_("",!0),2===V.value?(i(),u("div",q,[c("div",F,[H,h(c("input",{class:"inputLogin","onUpdate:modelValue":s[4]||(s[4]=e=>ce.username=e),placeholder:"请输入邮箱"},null,512),[[f,ce.username]]),X,h(c("input",{"onUpdate:modelValue":s[5]||(s[5]=e=>ce.password=e),placeholder:"请输入6-18位密码",class:"inputLogin",type:"password",onKeyup:w(ge,["enter"])},null,40,Y),[[f,ce.password]]),Z,c("div",J,[h(c("input",{type:"number",class:"inputLogin","onUpdate:modelValue":s[6]||(s[6]=e=>ce.code=e),placeholder:"请输入验证码"},null,512),[[f,ce.code]]),60===j.value?(i(),u("button",{key:0,class:"SmsCodeButton",onClickOnce:s[7]||(s[7]=e=>he(ce.username))},"获取 ",32)):(i(),u("button",N,g(j.value)+"s",1))])]),c("div",Q,[c("span",{class:"hover text-blue-500 ml-auto text-sm",onClick:s[8]||(s[8]=e=>V.value=1)},"已有账号？去登录")]),c("div",{class:"mt-4 flex"},[c("button",{class:"loginBtn",onClick:ve}," 提交注册 ")]),W,c("div",$,[c("div",{class:"text-gray-500 text-sm m-auto cursor-pointer",onClick:s[9]||(s[9]=e=>V.value=3)},"忘记密码？去找回")])])):_("",!0),3===V.value?(i(),u("div",ee,[c("div",se,[ae,h(c("input",{class:"inputLogin","onUpdate:modelValue":s[10]||(s[10]=e=>pe.username=e),placeholder:"请输入邮箱"},null,512),[[f,pe.username]]),le,h(c("input",{"onUpdate:modelValue":s[11]||(s[11]=e=>pe.password=e),placeholder:"请输入6-18位密码",type:"password",class:"inputLogin"},null,512),[[f,pe.password]]),te,c("div",oe,[h(c("input",{type:"number",class:"inputLogin","onUpdate:modelValue":s[12]||(s[12]=e=>pe.code=e),placeholder:"请输入验证码"},null,512),[[f,pe.code]]),60===j.value?(i(),u("button",{key:0,class:"SmsCodeButton",onClickOnce:s[13]||(s[13]=e=>he(pe.username))},"获取 ",32)):(i(),u("button",ne,g(j.value)+"s",1))])]),c("div",ie,[c("span",{class:"hover text-blue-500 ml-auto text-sm",onClick:s[14]||(s[14]=e=>V.value=1)},"已有账号？去登录")]),c("div",{class:"mt-4 flex"},[c("button",{class:"loginBtn",onClick:me}," 提交 ")]),ue,c("div",de,[c("div",{class:"text-gray-500 text-sm m-auto cursor-pointer",onClick:s[15]||(s[15]=e=>V.value=2)},"还没有账号？去注册")])])):_("",!0)])])])):_("",!0)])),_:1})])}}},ce={iconGroup:C((()=>L((()=>import("./iconGroup.1706205343582.js")),["assets/iconGroup.1706205343582.js","assets/iconGroup.1706205343582.css","assets/index.1706205343582.js","assets/index.17062053435824.css","assets/jquery.1706205343582.js"]))),addicon:C((()=>L((()=>import("./addicon.1706205343582.js")),["assets/addicon.1706205343582.js","assets/addicon.1706205343582.css","assets/index.1706205343582.js","assets/index.17062053435824.css"]))),addSearchEngine:C((()=>L((()=>import("./addSearchEngine.1706205343582.js")),["assets/addSearchEngine.1706205343582.js","assets/addSearchEngine.1706205343582.css","assets/index.1706205343582.js","assets/index.17062053435824.css","assets/net.1706205343582.js"])))};const pe={key:0,class:"framer"},me=[c("svg",{width:"24",height:"24",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg"},[c("path",{d:"M8 8L40 40",stroke:"var(--framerSvg)","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"}),c("path",{d:"M8 40L40 8",stroke:"var(--framerSvg)","stroke-width":"4","stroke-linecap":"round","stroke-linejoin":"round"})],-1)],ve={class:"componentView"},ge={__name:"framer",setup(e){const a=s(!1),l=s({}),m=s(null);let v={width:"1000px",height:"500px",top:"15vh"};const g=s(Object.assign({},v)),h=V(ce.note),f=e=>{const{size:s=!1}=e;if(s){g.value.width=s.width,g.value.height=s.height;const{top:e="15vh"}=s;g.value.top=e}else g.value=Object.assign({},v);B("--frameHeight",g.value.height),h.value=ce[e.component];const{data:t={}}=e;l.value=t,a.value=!0},w=()=>{a.value=!1},k=e=>{a.value=!1,e()};return t.on("openPlugin",f),t.on("closePlugin",w),o((()=>{t.off("openPlugin",f),t.off("closePlugin",w)})),(e,s)=>{const t=n("el-dialog");return a.value?(i(),u("div",pe,[d(t,{modal:!1,modelValue:a.value,"onUpdate:modelValue":s[0]||(s[0]=e=>a.value=e),"append-to-body":"","show-close":!1,"close-on-click-modal":!1,width:g.value.width,"before-close":k,class:"framerAlert",top:g.value.top,ref_key:"framers",ref:m,draggable:""},{header:r((()=>[c("div",{class:"flex justify-end"},[c("div",{class:"cursor-pointer windowController windowclose",onClick:w,title:"关闭窗口"},me)])])),default:r((()=>[c("div",ve,[(i(),j(S(p(h)),{data:l.value,onClose:w},null,40,["data"]))])])),_:1},8,["modelValue","width","top"])])):_("",!0)}}};const he={class:"appSide"},fe={__name:"appSide",setup:s=>(e(),(e,s)=>(i(),u("div",he,[d(re),d(ge)])))};export{fe as default};
