import{H as e,u as l,r as a,b as u,c as o,d,k as t,h as s,S as m,j as r,Q as p,g as n,a6 as c,W as i,m as v,e as V,a5 as _}from"./index.1699270951405.js";const h={class:"manager-setting bg-white p-4 rounded-lg"},f=V("h2",{class:"mb-4"},"站点信息配置",-1),b=["src"],g=V("h2",{class:"mb-4"},"邮件服务器配置（如使用25端口,需要检查服务器商是否允许25端口）",-1),U=V("h2",{class:"mb-4"},"其他配置",-1),y={__name:"setting",setup(V){const y={userid:e.get("user_id"),token:e.get("token","")},k=l(),w=a({logo:"",title:"",email:"",backgroundImage:"",smtp_host:"",smtp_email:"",smtp_password:"",smtp_port:"",assets_host:"",authCode:"",remote_avatar:"",defaultTab:"",recordNumber:"",description:"",authServer:"",customHead:""}),S=e=>{1===e.code&&(w.value.logo=e.data.url)},x=e=>{1===e.code&&(w.value.backgroundImage=e.data.url)},H=e=>{1===e.code&&(w.value.defaultTab=e.data.url)},I=()=>{m({url:"/setting/saveSetting",method:"post",data:{form:w.value}}).then((e=>{1===e.code&&(_.success("保存成功"),T())}))},T=()=>{m({url:"/setting/getSetting",method:"get"}).then((e=>{1===e.code&&(w.value=e.data)}))};return T(),(e,l)=>{const a=u("el-icon"),m=u("el-upload"),V=u("el-form-item"),_=u("el-input"),T=u("el-button"),C=u("el-card"),A=u("el-form");return o(),d("div",h,[t(A,{modelValue:w.value,"onUpdate:modelValue":l[16]||(l[16]=e=>w.value=e),"label-position":"top"},{default:s((()=>[t(C,null,{default:s((()=>[f,t(V,{label:"站点logo (建议尺寸128x128px)"},{default:s((()=>[t(m,{class:"avatar-uploader","show-file-list":!1,"on-success":S,action:r(p)+r(k).state.site.upload},{default:s((()=>{var e,l;return[(null==(e=w.value)?void 0:e.logo)?(o(),d("img",{key:0,src:null==(l=w.value)?void 0:l.logo,class:"avatar",alt:""},null,8,b)):(o(),n(a,{key:1,class:"avatar-uploader-icon"},{default:s((()=>[t(r(c))])),_:1}))]})),_:1},8,["action"])])),_:1}),t(V,{label:"站点名称"},{default:s((()=>[t(_,{modelValue:w.value.title,"onUpdate:modelValue":l[0]||(l[0]=e=>w.value.title=e),placeholder:"站点名称"},null,8,["modelValue"])])),_:1}),t(V,{label:"站点关键字"},{default:s((()=>[t(_,{modelValue:w.value.keywords,"onUpdate:modelValue":l[1]||(l[1]=e=>w.value.keywords=e),placeholder:"站点关键字用,隔开"},null,8,["modelValue"])])),_:1}),t(V,{label:"站点介绍"},{default:s((()=>[t(_,{modelValue:w.value.description,"onUpdate:modelValue":l[2]||(l[2]=e=>w.value.description=e),placeholder:"站点介绍"},null,8,["modelValue"])])),_:1}),t(V,{label:"站点联系邮箱"},{default:s((()=>[t(_,{modelValue:w.value.email,"onUpdate:modelValue":l[3]||(l[3]=e=>w.value.email=e),placeholder:"联系客服邮箱"},null,8,["modelValue"])])),_:1}),t(V,{label:"自定义Head代码"},{default:s((()=>[t(_,{type:"textarea",rows:"5",modelValue:w.value.customHead,"onUpdate:modelValue":l[4]||(l[4]=e=>w.value.customHead=e),placeholder:"请粘贴html文本内容"},null,8,["modelValue"])])),_:1}),t(V,{label:"站点备案信息"},{default:s((()=>[t(_,{modelValue:w.value.recordNumber,"onUpdate:modelValue":l[5]||(l[5]=e=>w.value.recordNumber=e),placeholder:"请输入备案号"},null,8,["modelValue"])])),_:1}),t(V,{label:"默认壁纸"},{default:s((()=>[t(_,{modelValue:w.value.backgroundImage,"onUpdate:modelValue":l[6]||(l[6]=e=>w.value.backgroundImage=e),placeholder:"请设置网站默认壁纸"},{append:s((()=>[t(m,{class:"upload-demo","show-file-list":!1,"on-success":x,action:r(p)+r(k).state.site.upload},{default:s((()=>[t(T,{type:"primary"},{default:s((()=>[i("上传")])),_:1})])),_:1},8,["action"])])),_:1},8,["modelValue"])])),_:1})])),_:1}),t(C,{class:"mt-4"},{default:s((()=>[g,t(V,{label:"SMTP HOST"},{default:s((()=>[t(_,{type:"text",modelValue:w.value.smtp_host,"onUpdate:modelValue":l[7]||(l[7]=e=>w.value.smtp_host=e),placeholder:"邮件服务器地址"},null,8,["modelValue"])])),_:1}),t(V,{label:"邮箱账号"},{default:s((()=>[t(_,{modelValue:w.value.smtp_email,"onUpdate:modelValue":l[8]||(l[8]=e=>w.value.smtp_email=e),placeholder:"发件人邮箱"},null,8,["modelValue"])])),_:1}),t(V,{label:"邮箱授权码/密码"},{default:s((()=>[t(_,{type:"password","show-password":"",modelValue:w.value.smtp_password,"onUpdate:modelValue":l[9]||(l[9]=e=>w.value.smtp_password=e),placeholder:"授权码/密码"},null,8,["modelValue"])])),_:1}),t(V,{label:"发件端口"},{default:s((()=>[t(_,{modelValue:w.value.smtp_port,"onUpdate:modelValue":l[10]||(l[10]=e=>w.value.smtp_port=e),placeholder:"25/109/110/143/465/995/993/994"},null,8,["modelValue"])])),_:1})])),_:1}),t(C,{class:"mt-4"},{default:s((()=>[U,r(false)?(o(),n(V,{key:0,label:"资源cdn域名"},{default:s((()=>[t(_,{modelValue:w.value.assets_host,"onUpdate:modelValue":l[11]||(l[11]=e=>w.value.assets_host=e),placeholder:"文件cdn域名,一般留空即可!"},null,8,["modelValue"])])),_:1})):v("",!0),r(false)?(o(),n(V,{key:1,label:"授权服务器"},{default:s((()=>[t(_,{modelValue:w.value.authServer,"onUpdate:modelValue":l[12]||(l[12]=e=>w.value.authServer=e),placeholder:"一般留空即可!默认无需填写"},null,8,["modelValue"])])),_:1})):v("",!0),t(V,{label:"授权码配置"},{default:s((()=>[t(_,{modelValue:w.value.authCode,"onUpdate:modelValue":l[13]||(l[13]=e=>w.value.authCode=e),placeholder:"请输入授权码"},null,8,["modelValue"])])),_:1}),t(V,{label:"头像生成API（自建请修改API地址）"},{default:s((()=>[t(_,{modelValue:w.value.remote_avatar,"onUpdate:modelValue":l[14]||(l[14]=e=>w.value.remote_avatar=e),placeholder:"https://avatar.mtab.cc/6.x/thumbs/png?seed="},null,8,["modelValue"])])),_:1}),t(V,{label:"默认主页标签（请前往首页设置好然后将导出的文件上传至此）"},{default:s((()=>[t(_,{modelValue:w.value.defaultTab,"onUpdate:modelValue":l[15]||(l[15]=e=>w.value.defaultTab=e),placeholder:"设置->导出图标"},{append:s((()=>[t(m,{class:"upload-demo","show-file-list":!1,"on-success":H,headers:y,action:r(p)+"/api/AdminUpload"},{default:s((()=>[t(T,{type:"primary"},{default:s((()=>[i("上传")])),_:1})])),_:1},8,["action"])])),_:1},8,["modelValue"])])),_:1})])),_:1}),t(T,{size:"large",class:"mt-4 w-full",type:"primary",onClick:I},{default:s((()=>[i("保存配置文件")])),_:1})])),_:1},8,["modelValue"])])}}};export{y as default};
