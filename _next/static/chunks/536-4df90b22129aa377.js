"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[536],{5536:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Image",{enumerable:!0,get:function(){return v}});let n=r(6040),i=r(6735),o=r(7573),l=i._(r(7653)),a=n._(r(3458)),s=n._(r(4415)),u=r(6651),d=r(4241),f=r(5676);r(8622);let c=r(9459),p=n._(r(3326)),m={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/monorepo/web/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!1};function g(e,t,r,n,i,o,l){let a=null==e?void 0:e.src;e&&e["data-loaded-src"]!==a&&(e["data-loaded-src"]=a,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&i(!0),null==r?void 0:r.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let n=!1,i=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>n,isPropagationStopped:()=>i,persist:()=>{},preventDefault:()=>{n=!0,t.preventDefault()},stopPropagation:()=>{i=!0,t.stopPropagation()}})}(null==n?void 0:n.current)&&n.current(e)}}))}function h(e){return l.use?{fetchPriority:e}:{fetchpriority:e}}"undefined"==typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y=(0,l.forwardRef)((e,t)=>{let{src:r,srcSet:n,sizes:i,height:a,width:s,decoding:u,className:d,style:f,fetchPriority:c,placeholder:p,loading:m,unoptimized:y,fill:b,onLoadRef:v,onLoadingCompleteRef:_,setBlurComplete:w,setShowAltText:j,sizesInput:S,onLoad:x,onError:C,...P}=e;return(0,o.jsx)("img",{...P,...h(c),loading:m,width:s,height:a,decoding:u,"data-nimg":b?"fill":"1",className:d,style:f,sizes:i,srcSet:n,src:r,ref:(0,l.useCallback)(e=>{t&&("function"==typeof t?t(e):"object"==typeof t&&(t.current=e)),e&&(C&&(e.src=e.src),e.complete&&g(e,p,v,_,w,y,S))},[r,p,v,_,w,C,y,S,t]),onLoad:e=>{g(e.currentTarget,p,v,_,w,y,S)},onError:e=>{j(!0),"empty"!==p&&w(!0),C&&C(e)}})});function b(e){let{isAppRouter:t,imgAttributes:r}=e,n={as:"image",imageSrcSet:r.srcSet,imageSizes:r.sizes,crossOrigin:r.crossOrigin,referrerPolicy:r.referrerPolicy,...h(r.fetchPriority)};return t&&a.default.preload?(a.default.preload(r.src,n),null):(0,o.jsx)(s.default,{children:(0,o.jsx)("link",{rel:"preload",href:r.srcSet?void 0:r.src,...n},"__nimg-"+r.src+r.srcSet+r.sizes)})}let v=(0,l.forwardRef)((e,t)=>{let r=(0,l.useContext)(c.RouterContext),n=(0,l.useContext)(f.ImageConfigContext),i=(0,l.useMemo)(()=>{let e=m||n||d.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r}},[n]),{onLoad:a,onLoadingComplete:s}=e,g=(0,l.useRef)(a);(0,l.useEffect)(()=>{g.current=a},[a]);let h=(0,l.useRef)(s);(0,l.useEffect)(()=>{h.current=s},[s]);let[v,_]=(0,l.useState)(!1),[w,j]=(0,l.useState)(!1),{props:S,meta:x}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:i,blurComplete:v,showAltText:w});return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(y,{...S,unoptimized:x.unoptimized,placeholder:x.placeholder,fill:x.fill,onLoadRef:g,onLoadingCompleteRef:h,setBlurComplete:_,setShowAltText:j,sizesInput:e.sizes,ref:t}),x.priority?(0,o.jsx)(b,{isAppRouter:!r,imgAttributes:S}):null]})});("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},3347:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"AmpStateContext",{enumerable:!0,get:function(){return n}});let n=r(6040)._(r(7653)).default.createContext({})},7500:(e,t)=>{function r(e){let{ampFirst:t=!1,hybrid:r=!1,hasQuery:n=!1}=void 0===e?{}:e;return t||r&&n}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isInAmpMode",{enumerable:!0,get:function(){return r}})},6651:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImgProps",{enumerable:!0,get:function(){return a}}),r(8622);let n=r(8993),i=r(4241);function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function a(e,t){var r;let a,s,u,{src:d,sizes:f,unoptimized:c=!1,priority:p=!1,loading:m,className:g,quality:h,width:y,height:b,fill:v=!1,style:_,overrideSrc:w,onLoad:j,onLoadingComplete:S,placeholder:x="empty",blurDataURL:C,fetchPriority:P,layout:O,objectFit:E,objectPosition:M,lazyBoundary:z,lazyRoot:I,...k}=e,{imgConf:R,showAltText:A,blurComplete:D,defaultLoader:N}=t,U=R||i.imageConfigDefault;if("allSizes"in U)a=U;else{let e=[...U.deviceSizes,...U.imageSizes].sort((e,t)=>e-t),t=U.deviceSizes.sort((e,t)=>e-t);a={...U,allSizes:e,deviceSizes:t}}if(void 0===N)throw Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config");let L=k.loader||N;delete k.loader,delete k.srcSet;let T="__next_img_default"in L;if(T){if("custom"===a.loader)throw Error('Image with src "'+d+'" is missing "loader" prop.\nRead more: https://nextjs.org/docs/messages/next-image-missing-loader')}else{let e=L;L=t=>{let{config:r,...n}=t;return e(n)}}if(O){"fill"===O&&(v=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[O];e&&(_={..._,...e});let t={responsive:"100vw",fill:"100vw"}[O];t&&!f&&(f=t)}let F="",B=l(y),G=l(b);if("object"==typeof(r=d)&&(o(r)||void 0!==r.src)){let e=o(d)?d.default:d;if(!e.src)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received "+JSON.stringify(e));if(!e.height||!e.width)throw Error("An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received "+JSON.stringify(e));if(s=e.blurWidth,u=e.blurHeight,C=C||e.blurDataURL,F=e.src,!v){if(B||G){if(B&&!G){let t=B/e.width;G=Math.round(e.height*t)}else if(!B&&G){let t=G/e.height;B=Math.round(e.width*t)}}else B=e.width,G=e.height}}let W=!p&&("lazy"===m||void 0===m);(!(d="string"==typeof d?d:F)||d.startsWith("data:")||d.startsWith("blob:"))&&(c=!0,W=!1),a.unoptimized&&(c=!0),T&&d.endsWith(".svg")&&!a.dangerouslyAllowSVG&&(c=!0),p&&(P="high");let H=l(h),V=Object.assign(v?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:E,objectPosition:M}:{},A?{}:{color:"transparent"},_),q=D||"empty"===x?null:"blur"===x?'url("data:image/svg+xml;charset=utf-8,'+(0,n.getImageBlurSvg)({widthInt:B,heightInt:G,blurWidth:s,blurHeight:u,blurDataURL:C||"",objectFit:V.objectFit})+'")':'url("'+x+'")',$=q?{backgroundSize:V.objectFit||"cover",backgroundPosition:V.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:q}:{},J=function(e){let{config:t,src:r,unoptimized:n,width:i,quality:o,sizes:l,loader:a}=e;if(n)return{src:r,srcSet:void 0,sizes:void 0};let{widths:s,kind:u}=function(e,t,r){let{deviceSizes:n,allSizes:i}=e;if(r){let e=/(^|\s)(1?\d?\d)vw/g,t=[];for(let n;n=e.exec(r);n)t.push(parseInt(n[2]));if(t.length){let e=.01*Math.min(...t);return{widths:i.filter(t=>t>=n[0]*e),kind:"w"}}return{widths:i,kind:"w"}}return"number"!=typeof t?{widths:n,kind:"w"}:{widths:[...new Set([t,2*t].map(e=>i.find(t=>t>=e)||i[i.length-1]))],kind:"x"}}(t,i,l),d=s.length-1;return{sizes:l||"w"!==u?l:"100vw",srcSet:s.map((e,n)=>a({config:t,src:r,quality:o,width:e})+" "+("w"===u?e:n+1)+u).join(", "),src:a({config:t,src:r,quality:o,width:s[d]})}}({config:a,src:d,unoptimized:c,width:B,quality:H,sizes:f,loader:L});return{props:{...k,loading:W?"lazy":m,fetchPriority:P,width:B,height:G,decoding:"async",className:g,style:{...V,...$},sizes:J.sizes,srcSet:J.srcSet,src:w||J.src},meta:{unoptimized:c,priority:p,placeholder:x,fill:v}}}},4415:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{default:function(){return g},defaultHead:function(){return f}});let n=r(6040),i=r(6735),o=r(7573),l=i._(r(7653)),a=n._(r(567)),s=r(3347),u=r(512),d=r(7500);function f(e){void 0===e&&(e=!1);let t=[(0,o.jsx)("meta",{charSet:"utf-8"})];return e||t.push((0,o.jsx)("meta",{name:"viewport",content:"width=device-width"})),t}function c(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}r(8622);let p=["name","httpEquiv","charSet","itemProp"];function m(e,t){let{inAmpMode:r}=t;return e.reduce(c,[]).reverse().concat(f(r).reverse()).filter(function(){let e=new Set,t=new Set,r=new Set,n={};return i=>{let o=!0,l=!1;if(i.key&&"number"!=typeof i.key&&i.key.indexOf("$")>0){l=!0;let t=i.key.slice(i.key.indexOf("$")+1);e.has(t)?o=!1:e.add(t)}switch(i.type){case"title":case"base":t.has(i.type)?o=!1:t.add(i.type);break;case"meta":for(let e=0,t=p.length;e<t;e++){let t=p[e];if(i.props.hasOwnProperty(t)){if("charSet"===t)r.has(t)?o=!1:r.add(t);else{let e=i.props[t],r=n[t]||new Set;("name"!==t||!l)&&r.has(e)?o=!1:(r.add(e),n[t]=r)}}}}return o}}()).reverse().map((e,t)=>{let n=e.key||t;if(!r&&"link"===e.type&&e.props.href&&["https://fonts.googleapis.com/css","https://use.typekit.net/"].some(t=>e.props.href.startsWith(t))){let t={...e.props||{}};return t["data-href"]=t.href,t.href=void 0,t["data-optimized-fonts"]=!0,l.default.cloneElement(e,t)}return l.default.cloneElement(e,{key:n})})}let g=function(e){let{children:t}=e,r=(0,l.useContext)(s.AmpStateContext),n=(0,l.useContext)(u.HeadManagerContext);return(0,o.jsx)(a.default,{reduceComponentsToState:m,headManager:n,inAmpMode:(0,d.isInAmpMode)(r),children:t})};("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},8993:(e,t)=>{function r(e){let{widthInt:t,heightInt:r,blurWidth:n,blurHeight:i,blurDataURL:o,objectFit:l}=e,a=n?40*n:t,s=i?40*i:r,u=a&&s?"viewBox='0 0 "+a+" "+s+"'":"";return"%3Csvg xmlns='http://www.w3.org/2000/svg' "+u+"%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='"+(u?"none":"contain"===l?"xMidYMid":"cover"===l?"xMidYMid slice":"none")+"' style='filter: url(%23b);' href='"+o+"'/%3E%3C/svg%3E"}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"getImageBlurSvg",{enumerable:!0,get:function(){return r}})},5676:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"ImageConfigContext",{enumerable:!0,get:function(){return o}});let n=r(6040)._(r(7653)),i=r(4241),o=n.default.createContext(i.imageConfigDefault)},4241:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),function(e,t){for(var r in t)Object.defineProperty(e,r,{enumerable:!0,get:t[r]})}(t,{VALID_LOADERS:function(){return r},imageConfigDefault:function(){return n}});let r=["default","imgix","cloudinary","akamai","custom"],n={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[16,32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:60,formats:["image/webp"],dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",remotePatterns:[],unoptimized:!1}},3326:(e,t)=>{function r(e){let{config:t,src:r,width:n,quality:i}=e;return t.path+"?url="+encodeURIComponent(r)+"&w="+n+"&q="+(i||75)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n}}),r.__next_img_default=!0;let n=r},9459:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"RouterContext",{enumerable:!0,get:function(){return n}});let n=r(6040)._(r(7653)).default.createContext(null)},567:(e,t,r)=>{Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"default",{enumerable:!0,get:function(){return a}});let n=r(7653),i="undefined"==typeof window,o=i?()=>{}:n.useLayoutEffect,l=i?()=>{}:n.useEffect;function a(e){let{headManager:t,reduceComponentsToState:r}=e;function a(){if(t&&t.mountedInstances){let i=n.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(i,e))}}if(i){var s;null==t||null==(s=t.mountedInstances)||s.add(e.children),a()}return o(()=>{var r;return null==t||null==(r=t.mountedInstances)||r.add(e.children),()=>{var r;null==t||null==(r=t.mountedInstances)||r.delete(e.children)}}),o(()=>(t&&(t._pendingUpdate=a),()=>{t&&(t._pendingUpdate=a)})),l(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}}}]);