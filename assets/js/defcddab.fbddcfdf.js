"use strict";(self.webpackChunkba_getter=self.webpackChunkba_getter||[]).push([[381],{2487:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var s=n(5893),i=n(1151);const o={},r="Windows IIS Proxy",a={id:"Installation/iis-proxy",title:"Windows IIS Proxy",description:"With a few extra steps you can run BaGetter behind a Windows IIS proxy. This has many benefits, including automatic restarts on reboots.",source:"@site/docs/Installation/iis-proxy.md",sourceDirName:"Installation",slug:"/Installation/iis-proxy",permalink:"/docs/Installation/iis-proxy",draft:!1,unlisted:!1,editUrl:"https://github.com/${organizationName}/${projectName}/tree/main/docs/Installation/iis-proxy.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Run BaGetter on Google Cloud Platform",permalink:"/docs/Installation/gcp"},next:{title:"Run BaGetter on your Computer",permalink:"/docs/Installation/local"}},l={},c=[{value:"IIS setup",id:"iis-setup",level:2},{value:"BaGetter folder permissions",id:"bagetter-folder-permissions",level:2},{value:"Alternative storage path",id:"alternative-storage-path",level:2},{value:"IIS server options",id:"iis-server-options",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"windows-iis-proxy",children:"Windows IIS Proxy"}),"\n",(0,s.jsx)(t.p,{children:"With a few extra steps you can run BaGetter behind a Windows IIS proxy. This has many benefits, including automatic restarts on reboots."}),"\n",(0,s.jsx)(t.h2,{id:"iis-setup",children:"IIS setup"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Install the ",(0,s.jsx)(t.a,{href:"https://dotnet.microsoft.com/download",children:".NET Core Runtime"})," on the web server."]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsxs)(t.p,{children:["Copy the BaGetter directory over to your hosting area such as ",(0,s.jsx)(t.code,{children:"C:\\Inetpub\\wwwroot\\BaGetter"})]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Using IIS Manager, create a new Application Pool:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["Name = ",(0,s.jsx)(t.code,{children:"BaGetterAppPool"})," (can be whatever you want)"]}),"\n",(0,s.jsx)(t.li,{children:".NET CLR version = No Managed Code"}),"\n",(0,s.jsx)(t.li,{children:"Managed Pipeline Mode = Integrated"}),"\n",(0,s.jsx)(t.li,{children:"Start application pool immediately = checked"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.li,{children:["\n",(0,s.jsx)(t.p,{children:"Using IIS Manager, create a new web site:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"Choose your site name and physical path"}),"\n",(0,s.jsxs)(t.li,{children:["Choose ",(0,s.jsx)(t.code,{children:"BaGetterAppPool"})," as the application pool"]}),"\n",(0,s.jsx)(t.li,{children:"In the Binding area, enter the default BaGetter port of 5000"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"bagetter-folder-permissions",children:"BaGetter folder permissions"}),"\n",(0,s.jsxs)(t.p,{children:["You ",(0,s.jsx)(t.strong,{children:"may"})," need to give special permissions to the top-level BaGetter folder so that the app can persist its state. This is necessary as the Application Pools' identity is a virtual account that isn't recognized by the Windows User Management Console. For more information, please refer to ASP.NET Core's documentation:"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-2.2#application-pools",children:"Application Pools"})}),"\n",(0,s.jsx)(t.li,{children:(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-2.2#application-pool-identity",children:"Application Pool Identity"})}),"\n"]}),"\n",(0,s.jsx)(t.h2,{id:"alternative-storage-path",children:"Alternative storage path"}),"\n",(0,s.jsx)(t.admonition,{type:"info",children:(0,s.jsxs)(t.p,{children:["Virtual Directories do not work with IIS and Kestrel.\nFor more information, please refer to ",(0,s.jsx)(t.a,{href:"https://docs.microsoft.com/en-us/aspnet/core/host-and-deploy/iis/?view=aspnetcore-2.2#virtual-directories",children:"ASP.NET Core's documentation"}),"."]})}),"\n",(0,s.jsxs)(t.p,{children:["Ensure that the configuration's storage ",(0,s.jsx)(t.code,{children:"Path"})," has the appropriate forward slashes:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-javascript",children:'...\n  "Storage": {\n    "Type": "FileSystem",\n    "Path": "C://AnotherFolder/Packages"\n  },\n...\n'})}),"\n",(0,s.jsxs)(t.p,{children:["Note that you will need to adjust folder permissions if the ",(0,s.jsx)(t.code,{children:"Path"})," is created outside of the BaGetter top-level directory. See the ",(0,s.jsx)(t.a,{href:"#bagetter-folder-permissions",children:"BaGettert Folder Permissions"}),"."]}),"\n",(0,s.jsx)(t.h2,{id:"iis-server-options",children:"IIS server options"}),"\n",(0,s.jsxs)(t.p,{children:["Settings such as the maximum package size can be configured for IIS in the appsettings.json file - see ",(0,s.jsx)(t.a,{href:"/docs/configuration#iis-server-options",children:"IIS Server Options"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var s=n(7294);const i={},o=s.createContext(i);function r(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);