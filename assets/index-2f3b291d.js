(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const c of document.querySelectorAll('link[rel="modulepreload"]'))s(c);new MutationObserver(c=>{for(const o of c)if(o.type==="childList")for(const r of o.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&s(r)}).observe(document,{childList:!0,subtree:!0});function n(c){const o={};return c.integrity&&(o.integrity=c.integrity),c.referrerPolicy&&(o.referrerPolicy=c.referrerPolicy),c.crossOrigin==="use-credentials"?o.credentials="include":c.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(c){if(c.ep)return;c.ep=!0;const o=n(c);fetch(c.href,o)}})();var U,h,_e,C,Z,he,q,B={},ge=[],Ie=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;function x(e,t){for(var n in t)e[n]=t[n];return e}function ue(e){var t=e.parentNode;t&&t.removeChild(e)}function Te(e,t,n){var s,c,o,r={};for(o in t)o=="key"?s=t[o]:o=="ref"?c=t[o]:r[o]=t[o];if(arguments.length>2&&(r.children=arguments.length>3?U.call(arguments,2):n),typeof e=="function"&&e.defaultProps!=null)for(o in e.defaultProps)r[o]===void 0&&(r[o]=e.defaultProps[o]);return D(e,r,s,c,null)}function D(e,t,n,s,c){var o={type:e,props:t,key:n,ref:s,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:c??++_e};return c==null&&h.vnode!=null&&h.vnode(o),o}function z(e){return e.children}function F(e,t){this.props=e,this.context=t}function T(e,t){if(t==null)return e.__?T(e.__,e.__.__k.indexOf(e)+1):null;for(var n;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null)return n.__e;return typeof e.type=="function"?T(e):null}function fe(e){var t,n;if((e=e.__)!=null&&e.__c!=null){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if((n=e.__k[t])!=null&&n.__e!=null){e.__e=e.__c.base=n.__e;break}return fe(e)}}function ee(e){(!e.__d&&(e.__d=!0)&&C.push(e)&&!O.__r++||Z!==h.debounceRendering)&&((Z=h.debounceRendering)||he)(O)}function O(){var e,t,n,s,c,o,r,l;for(C.sort(q);e=C.shift();)e.__d&&(t=C.length,s=void 0,c=void 0,r=(o=(n=e).__v).__e,(l=n.__P)&&(s=[],(c=x({},o)).__v=o.__v+1,Y(l,o,c,n.__n,l.ownerSVGElement!==void 0,o.__h!=null?[r]:null,s,r??T(o),o.__h),ke(s,o),o.__e!=r&&fe(o)),C.length>t&&C.sort(q));O.__r=0}function ve(e,t,n,s,c,o,r,l,p,m){var a,u,_,d,g,A,f,b=s&&s.__k||ge,N=b.length;for(n.__k=[],a=0;a<t.length;a++)if((d=n.__k[a]=(d=t[a])==null||typeof d=="boolean"||typeof d=="function"?null:typeof d=="string"||typeof d=="number"||typeof d=="bigint"?D(null,d,null,null,d):Array.isArray(d)?D(z,{children:d},null,null,null):d.__b>0?D(d.type,d.props,d.key,d.ref?d.ref:null,d.__v):d)!=null){if(d.__=n,d.__b=n.__b+1,(_=b[a])===null||_&&d.key==_.key&&d.type===_.type)b[a]=void 0;else for(u=0;u<N;u++){if((_=b[u])&&d.key==_.key&&d.type===_.type){b[u]=void 0;break}_=null}Y(e,d,_=_||B,c,o,r,l,p,m),g=d.__e,(u=d.ref)&&_.ref!=u&&(f||(f=[]),_.ref&&f.push(_.ref,null,d),f.push(u,d.__c||g,d)),g!=null?(A==null&&(A=g),typeof d.type=="function"&&d.__k===_.__k?d.__d=p=be(d,p,e):p=ye(e,d,_,b,g,p),typeof n.type=="function"&&(n.__d=p)):p&&_.__e==p&&p.parentNode!=e&&(p=T(_))}for(n.__e=A,a=N;a--;)b[a]!=null&&(typeof n.type=="function"&&b[a].__e!=null&&b[a].__e==n.__d&&(n.__d=Ne(s).nextSibling),we(b[a],b[a]));if(f)for(a=0;a<f.length;a++)Se(f[a],f[++a],f[++a])}function be(e,t,n){for(var s,c=e.__k,o=0;c&&o<c.length;o++)(s=c[o])&&(s.__=e,t=typeof s.type=="function"?be(s,t,n):ye(n,s,s,c,s.__e,t));return t}function ye(e,t,n,s,c,o){var r,l,p;if(t.__d!==void 0)r=t.__d,t.__d=void 0;else if(n==null||c!=o||c.parentNode==null)e:if(o==null||o.parentNode!==e)e.appendChild(c),r=null;else{for(l=o,p=0;(l=l.nextSibling)&&p<s.length;p+=1)if(l==c)break e;e.insertBefore(c,o),r=o}return r!==void 0?r:c.nextSibling}function Ne(e){var t,n,s;if(e.type==null||typeof e.type=="string")return e.__e;if(e.__k){for(t=e.__k.length-1;t>=0;t--)if((n=e.__k[t])&&(s=Ne(n)))return s}return null}function He(e,t,n,s,c){var o;for(o in n)o==="children"||o==="key"||o in t||J(e,o,null,n[o],s);for(o in t)c&&typeof t[o]!="function"||o==="children"||o==="key"||o==="value"||o==="checked"||n[o]===t[o]||J(e,o,t[o],n[o],s)}function te(e,t,n){t[0]==="-"?e.setProperty(t,n??""):e[t]=n==null?"":typeof n!="number"||Ie.test(t)?n:n+"px"}function J(e,t,n,s,c){var o;e:if(t==="style")if(typeof n=="string")e.style.cssText=n;else{if(typeof s=="string"&&(e.style.cssText=s=""),s)for(t in s)n&&t in n||te(e.style,t,"");if(n)for(t in n)s&&n[t]===s[t]||te(e.style,t,n[t])}else if(t[0]==="o"&&t[1]==="n")o=t!==(t=t.replace(/Capture$/,"")),t=t.toLowerCase()in e?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+o]=n,n?s||e.addEventListener(t,o?ie:ne,o):e.removeEventListener(t,o?ie:ne,o);else if(t!=="dangerouslySetInnerHTML"){if(c)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if(t!=="width"&&t!=="height"&&t!=="href"&&t!=="list"&&t!=="form"&&t!=="tabIndex"&&t!=="download"&&t in e)try{e[t]=n??"";break e}catch{}typeof n=="function"||(n==null||n===!1&&t.indexOf("-")==-1?e.removeAttribute(t):e.setAttribute(t,n))}}function ne(e){return this.l[e.type+!1](h.event?h.event(e):e)}function ie(e){return this.l[e.type+!0](h.event?h.event(e):e)}function Y(e,t,n,s,c,o,r,l,p){var m,a,u,_,d,g,A,f,b,N,H,I,X,$,P,y=t.type;if(t.constructor!==void 0)return null;n.__h!=null&&(p=n.__h,l=t.__e=n.__e,t.__h=null,o=[l]),(m=h.__b)&&m(t);try{e:if(typeof y=="function"){if(f=t.props,b=(m=y.contextType)&&s[m.__c],N=m?b?b.props.value:m.__:s,n.__c?A=(a=t.__c=n.__c).__=a.__E:("prototype"in y&&y.prototype.render?t.__c=a=new y(f,N):(t.__c=a=new F(f,N),a.constructor=y,a.render=Pe),b&&b.sub(a),a.props=f,a.state||(a.state={}),a.context=N,a.__n=s,u=a.__d=!0,a.__h=[],a._sb=[]),a.__s==null&&(a.__s=a.state),y.getDerivedStateFromProps!=null&&(a.__s==a.state&&(a.__s=x({},a.__s)),x(a.__s,y.getDerivedStateFromProps(f,a.__s))),_=a.props,d=a.state,a.__v=t,u)y.getDerivedStateFromProps==null&&a.componentWillMount!=null&&a.componentWillMount(),a.componentDidMount!=null&&a.__h.push(a.componentDidMount);else{if(y.getDerivedStateFromProps==null&&f!==_&&a.componentWillReceiveProps!=null&&a.componentWillReceiveProps(f,N),!a.__e&&a.shouldComponentUpdate!=null&&a.shouldComponentUpdate(f,a.__s,N)===!1||t.__v===n.__v){for(t.__v!==n.__v&&(a.props=f,a.state=a.__s,a.__d=!1),a.__e=!1,t.__e=n.__e,t.__k=n.__k,t.__k.forEach(function(M){M&&(M.__=t)}),H=0;H<a._sb.length;H++)a.__h.push(a._sb[H]);a._sb=[],a.__h.length&&r.push(a);break e}a.componentWillUpdate!=null&&a.componentWillUpdate(f,a.__s,N),a.componentDidUpdate!=null&&a.__h.push(function(){a.componentDidUpdate(_,d,g)})}if(a.context=N,a.props=f,a.__P=e,I=h.__r,X=0,"prototype"in y&&y.prototype.render){for(a.state=a.__s,a.__d=!1,I&&I(t),m=a.render(a.props,a.state,a.context),$=0;$<a._sb.length;$++)a.__h.push(a._sb[$]);a._sb=[]}else do a.__d=!1,I&&I(t),m=a.render(a.props,a.state,a.context),a.state=a.__s;while(a.__d&&++X<25);a.state=a.__s,a.getChildContext!=null&&(s=x(x({},s),a.getChildContext())),u||a.getSnapshotBeforeUpdate==null||(g=a.getSnapshotBeforeUpdate(_,d)),P=m!=null&&m.type===z&&m.key==null?m.props.children:m,ve(e,Array.isArray(P)?P:[P],t,n,s,c,o,r,l,p),a.base=t.__e,t.__h=null,a.__h.length&&r.push(a),A&&(a.__E=a.__=null),a.__e=!1}else o==null&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=$e(n.__e,t,n,s,c,o,r,p);(m=h.diffed)&&m(t)}catch(M){t.__v=null,(p||o!=null)&&(t.__e=l,t.__h=!!p,o[o.indexOf(l)]=null),h.__e(M,t,n)}}function ke(e,t){h.__c&&h.__c(t,e),e.some(function(n){try{e=n.__h,n.__h=[],e.some(function(s){s.call(n)})}catch(s){h.__e(s,n.__v)}})}function $e(e,t,n,s,c,o,r,l){var p,m,a,u=n.props,_=t.props,d=t.type,g=0;if(d==="svg"&&(c=!0),o!=null){for(;g<o.length;g++)if((p=o[g])&&"setAttribute"in p==!!d&&(d?p.localName===d:p.nodeType===3)){e=p,o[g]=null;break}}if(e==null){if(d===null)return document.createTextNode(_);e=c?document.createElementNS("http://www.w3.org/2000/svg",d):document.createElement(d,_.is&&_),o=null,l=!1}if(d===null)u===_||l&&e.data===_||(e.data=_);else{if(o=o&&U.call(e.childNodes),m=(u=n.props||B).dangerouslySetInnerHTML,a=_.dangerouslySetInnerHTML,!l){if(o!=null)for(u={},g=0;g<e.attributes.length;g++)u[e.attributes[g].name]=e.attributes[g].value;(a||m)&&(a&&(m&&a.__html==m.__html||a.__html===e.innerHTML)||(e.innerHTML=a&&a.__html||""))}if(He(e,_,u,c,l),a)t.__k=[];else if(g=t.props.children,ve(e,Array.isArray(g)?g:[g],t,n,s,c&&d!=="foreignObject",o,r,o?o[0]:n.__k&&T(n,0),l),o!=null)for(g=o.length;g--;)o[g]!=null&&ue(o[g]);l||("value"in _&&(g=_.value)!==void 0&&(g!==e.value||d==="progress"&&!g||d==="option"&&g!==u.value)&&J(e,"value",g,u.value,!1),"checked"in _&&(g=_.checked)!==void 0&&g!==e.checked&&J(e,"checked",g,u.checked,!1))}return e}function Se(e,t,n){try{typeof e=="function"?e(t):e.current=t}catch(s){h.__e(s,n)}}function we(e,t,n){var s,c;if(h.unmount&&h.unmount(e),(s=e.ref)&&(s.current&&s.current!==e.__e||Se(s,null,t)),(s=e.__c)!=null){if(s.componentWillUnmount)try{s.componentWillUnmount()}catch(o){h.__e(o,t)}s.base=s.__P=null,e.__c=void 0}if(s=e.__k)for(c=0;c<s.length;c++)s[c]&&we(s[c],t,n||typeof e.type!="function");n||e.__e==null||ue(e.__e),e.__=e.__e=e.__d=void 0}function Pe(e,t,n){return this.constructor(e,n)}function Me(e,t,n){var s,c,o;h.__&&h.__(e,t),c=(s=typeof n=="function")?null:n&&n.__k||t.__k,o=[],Y(t,e=(!s&&n||t).__k=Te(z,null,[e]),c||B,B,t.ownerSVGElement!==void 0,!s&&n?[n]:c?null:t.firstChild?U.call(t.childNodes):null,o,!s&&n?n:c?c.__e:t.firstChild,s),ke(o,e)}U=ge.slice,h={__e:function(e,t,n,s){for(var c,o,r;t=t.__;)if((c=t.__c)&&!c.__)try{if((o=c.constructor)&&o.getDerivedStateFromError!=null&&(c.setState(o.getDerivedStateFromError(e)),r=c.__d),c.componentDidCatch!=null&&(c.componentDidCatch(e,s||{}),r=c.__d),r)return c.__E=c}catch(l){e=l}throw e}},_e=0,F.prototype.setState=function(e,t){var n;n=this.__s!=null&&this.__s!==this.state?this.__s:this.__s=x({},this.state),typeof e=="function"&&(e=e(x({},n),this.props)),e&&x(n,e),e!=null&&this.__v&&(t&&this._sb.push(t),ee(this))},F.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),ee(this))},F.prototype.render=z,C=[],he=typeof Promise=="function"?Promise.prototype.then.bind(Promise.resolve()):setTimeout,q=function(e,t){return e.__v.__b-t.__v.__b},O.__r=0;var G,v,V,ae,W=0,xe=[],j=[],se=h.__b,oe=h.__r,ce=h.diffed,le=h.__c,re=h.unmount;function K(e,t){h.__h&&h.__h(v,e,W||t),W=0;var n=v.__H||(v.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({__V:j}),n.__[e]}function S(e){return W=1,Le(Ee,e)}function Le(e,t,n){var s=K(G++,2);if(s.t=e,!s.__c&&(s.__=[n?n(t):Ee(void 0,t),function(l){var p=s.__N?s.__N[0]:s.__[0],m=s.t(p,l);p!==m&&(s.__N=[m,s.__[1]],s.__c.setState({}))}],s.__c=v,!v.u)){var c=function(l,p,m){if(!s.__c.__H)return!0;var a=s.__c.__H.__.filter(function(_){return _.__c});if(a.every(function(_){return!_.__N}))return!o||o.call(this,l,p,m);var u=!1;return a.forEach(function(_){if(_.__N){var d=_.__[0];_.__=_.__N,_.__N=void 0,d!==_.__[0]&&(u=!0)}}),!(!u&&s.__c.props===l)&&(!o||o.call(this,l,p,m))};v.u=!0;var o=v.shouldComponentUpdate,r=v.componentWillUpdate;v.componentWillUpdate=function(l,p,m){if(this.__e){var a=o;o=void 0,c(l,p,m),o=a}r&&r.call(this,l,p,m)},v.shouldComponentUpdate=c}return s.__N||s.__}function E(e,t){var n=K(G++,3);!h.__s&&Ce(n.__H,t)&&(n.__=e,n.i=t,v.__H.__h.push(n))}function De(e){return W=5,Fe(function(){return{current:e}},[])}function Fe(e,t){var n=K(G++,7);return Ce(n.__H,t)?(n.__V=e(),n.i=t,n.__h=e,n.__V):n.__}function je(){for(var e;e=xe.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(R),e.__H.__h.forEach(Q),e.__H.__h=[]}catch(t){e.__H.__h=[],h.__e(t,e.__v)}}h.__b=function(e){v=null,se&&se(e)},h.__r=function(e){oe&&oe(e),G=0;var t=(v=e.__c).__H;t&&(V===v?(t.__h=[],v.__h=[],t.__.forEach(function(n){n.__N&&(n.__=n.__N),n.__V=j,n.__N=n.i=void 0})):(t.__h.forEach(R),t.__h.forEach(Q),t.__h=[])),V=v},h.diffed=function(e){ce&&ce(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(xe.push(t)!==1&&ae===h.requestAnimationFrame||((ae=h.requestAnimationFrame)||Re)(je)),t.__H.__.forEach(function(n){n.i&&(n.__H=n.i),n.__V!==j&&(n.__=n.__V),n.i=void 0,n.__V=j})),V=v=null},h.__c=function(e,t){t.some(function(n){try{n.__h.forEach(R),n.__h=n.__h.filter(function(s){return!s.__||Q(s)})}catch(s){t.some(function(c){c.__h&&(c.__h=[])}),t=[],h.__e(s,n.__v)}}),le&&le(e,t)},h.unmount=function(e){re&&re(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach(function(s){try{R(s)}catch(c){t=c}}),n.__H=void 0,t&&h.__e(t,n.__v))};var me=typeof requestAnimationFrame=="function";function Re(e){var t,n=function(){clearTimeout(s),me&&cancelAnimationFrame(t),setTimeout(e)},s=setTimeout(n,100);me&&(t=requestAnimationFrame(n))}function R(e){var t=v,n=e.__c;typeof n=="function"&&(e.__c=void 0,n()),v=t}function Q(e){var t=v;e.__c=e.__(),v=t}function Ce(e,t){return!e||e.length!==t.length||t.some(function(n,s){return n!==e[s]})}function Ee(e,t){return typeof t=="function"?t(e):t}const L={introduction:`I am a Full Stack Developer with 2 years of professional experience. 
 A fast learner, self-motivated and problem solver.`,projectsDone:6,gitHubCommits:"+ 600",yearsOfExperience:2};var Be=0;function i(e,t,n,s,c,o){var r,l,p={};for(l in t)l=="ref"?r=t[l]:p[l]=t[l];var m={type:e,props:p,key:n,ref:r,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,__h:null,constructor:void 0,__v:--Be,__source:c,__self:o};if(typeof e=="function"&&(r=e.defaultProps))for(l in r)p[l]===void 0&&(p[l]=r[l]);return h.vnode&&h.vnode(m),m}const Oe=()=>i("section",{className:"about section",id:"about",children:i("div",{className:"container",children:[i("h2",{className:"section-title px-15",children:"About Me"}),i("div",{className:"about-content",children:[i("p",{className:"about-text",children:L.introduction}),i("div",{className:"btn btn-default",children:i("a",{href:"./documents/baatchia-resume.pdf",download:"baatchia-resume.pdf",children:"DOWNLOAD RESUME"})})]}),i("div",{className:"row stats-items",children:[i("div",{className:"stats-item px-15",children:[i("a",{href:"#projects",children:i("i",{className:"fa-solid fa-circle-check"})}),i("div",{className:"details",children:[i("h3",{children:L.projectsDone}),i("p",{children:"Projects Done"})]})]}),i("div",{className:"stats-item px-15",children:[i("i",{className:"fa-solid fa-code-commit"}),i("div",{className:"details",children:[i("h3",{children:L.gitHubCommits}),i("p",{children:"GitHub Commits"})]})]}),i("div",{className:"stats-item px-15",children:[i("i",{className:"fa-solid fa-briefcase"}),i("div",{className:"details",children:[i("h3",{children:L.yearsOfExperience}),i("p",{children:"Years of Experience"})]})]})]})]})}),k={phoneNumber:"+213 657 73 50 82",email:"Baatchia_Riyadh@protonmail.com",github:"https://github.com/riyadh-dev",linkedin:"https://linkedin.com/in/baatchia-riyadh",twitter:"",whatsapp:""};const Je=()=>i("section",{className:"section contact",id:"contact",children:i("div",{className:"container",children:[i("h2",{className:"section-title px-15",children:"Contact Me"}),i("div",{className:"contact-container",children:[i("div",{className:"contact-box px-15",children:i("div",{className:"contact-data",children:[i("div",{className:"contact-info",children:[i("h3",{className:"contact-subtitle",children:"Text Me"}),i("a",{href:`tel:${k.phoneNumber}`,className:"contact-description",children:[i("i",{className:"fa-solid fa-phone"}),k.phoneNumber]})]}),i("div",{className:"contact-info",children:[i("h3",{className:"contact-subtitle",children:"Email Me"}),i("a",{href:`mailto:${k.email}`,className:"contact-description",children:[i("i",{className:"fa-solid fa-envelope"}),k.email]})]})]})}),i("form",{action:`mailto:${k.email}`,className:"contact-form px-15",children:[i("div",{className:"contact-inputs",children:[i("div",{className:"contact-content",children:[i("input",{type:"email",name:"email",className:"contact-input"}),i("label",{className:"contact-label",children:"Email"}),i("span",{})]}),i("div",{className:"contact-content",children:[i("input",{type:"text",name:"subject",className:"contact-input"}),i("label",{className:"contact-label",children:"Subject"}),i("span",{})]}),i("div",{className:"contact-content contact-area",children:[i("textarea",{name:"body",cols:30,rows:10,className:"contact-input"}),i("label",{className:"contact-label",children:"Message"}),i("span",{})]})]}),i("button",{type:"submit",className:"btn btn-default",children:"Sent"})]})]})]})}),de=[{fontAwesomeIcon:"fa-solid fa-briefcase timeline-icon",period:"2020 - 2022",company:"Sirius Services - Abb Partner Algeria",jobTitle:"Software Developer",description:["Developed various scripts to automate a variety of repetitive task to increase productivity and efficiency.","Designed and develop internal software applications for addressing company problems and needs."]},{fontAwesomeIcon:"fa-solid fa-briefcase timeline-icon",period:"2019 - 2020",company:"Freelancing",jobTitle:"Software Developer",description:["Designed and developed some simple applications for local small business"]},{fontAwesomeIcon:"fa-solid fa-briefcase timeline-icon",period:"24/03/2018 – 05/04/2018",company:"Electricity And Gas Distribution Administration Algeria",jobTitle:"Internship",description:["Was responsible for daily backing up customers database.","Was giving a basic walk-through on the IT department daily operations."]},{fontAwesomeIcon:"fa-solid fa-user-graduate timeline-icon",period:"July 2019",company:"Institute Of Electrical And Electronics Engineering (Ex-INELEC) Algeria",jobTitle:"Degree",description:["Master’s in Computer Engineering.","Developed a Fullstack Web Application to facilitate the management of the Scientific Council of the institute."]},{fontAwesomeIcon:"fa-solid fa-user-graduate timeline-icon",period:"July 2017",company:"Institute Of Electrical And Electronics Engineering (Ex-INELEC) Algeria",jobTitle:"Degree",description:["License in Electrical and Electronics Engineering."]}];const We=()=>i("section",{className:"experience section",id:"experience",children:i("div",{className:"container",children:[i("h2",{className:"section-title px-15",children:"Experience"}),i("div",{className:"experience-container",children:[i("div",{className:"experience-card",children:de.slice(0,3).map(e=>i("div",{className:"timeline-item",children:[i("i",{className:e.fontAwesomeIcon}),i("h3",{className:"timeline-date",children:[i("i",{className:"fa-solid fa-calendar-days"})," ",e.period]}),i("h3",{className:"timeline-title",children:e.company}),i("h4",{className:"timeline-subtitle",children:e.jobTitle}),i("ul",{className:"timeline-text",children:e.description.map(t=>i("li",{children:t}))})]}))}),i("div",{className:"experience-card",children:de.slice(3,6).map(e=>i("div",{className:"timeline-item",children:[i("i",{className:e.fontAwesomeIcon}),i("h3",{className:"timeline-date",children:[i("i",{className:"fa-solid fa-calendar-days"})," ",e.period]}),i("h3",{className:"timeline-title",children:e.company}),i("h4",{className:"timeline-subtitle",children:e.jobTitle}),i("ul",{className:"timeline-text",children:e.description.map(t=>i("li",{children:t}))})]}))})]})]})});const Ue=()=>i("div",{className:"footer",children:i("div",{className:"container",children:i("div",{className:"footer-text px-15",children:i("p",{children:"©2023 Baatchia Riyadh."})})})});const ze=({handleCloseGallerySlider:e,images:t})=>{const[n,s]=S(0),c=()=>{t.length-1<=n||(s(n+1),p(!1))},o=()=>{n!==0&&(s(n-1),p(!1))},r=a=>()=>s(a);E(()=>(document.body.style.overflow="hidden",()=>{document.body.style.overflow="auto",document.body.style.position=""}),[]);const[l,p]=S(!1),m=()=>{p(!0)};return console.log(l),i("div",{className:"gallery-slider-container",children:[i("div",{className:"close-button circular-Button",onClick:e,children:i("i",{className:"fa-solid fa-xmark"})}),i("div",{className:"back-button circular-Button",onClick:o,children:i("i",{className:"fa-solid fa-arrow-left"})}),i("div",{className:"forward-button circular-Button",onClick:c,children:i("i",{className:"fa-solid fa-arrow-right"})}),i("div",{className:"gallery-slider-middle-section",children:[i("div",{className:`loader ${l?"hide":"show"}`}),i("img",{src:t[n],alt:"image "+n,loading:"lazy",onLoad:m,className:l?"show":"hide"})]}),i("div",{className:"gallery-slider-circles bottom-section",children:t.map((a,u)=>i("span",{className:u===n?"gallery-slider-circle-active":"",onClick:r(u)},u))})]})};const Ge=()=>i("section",{className:"home section",id:"home",children:i("div",{className:"intro",children:[i("img",{src:"./logo.png",alt:""}),i("h1",{children:"RIYADH BAATCHIA"}),i("span",{children:"FULL STACK WEB DEVELOPER"}),i("ul",{className:"social-icons",children:[i("li",{children:i("a",{href:k.github,rel:"noreferrer",target:"_blank",children:i("i",{className:"fa-brands fa-github"})})}),i("li",{children:i("a",{href:k.linkedin,rel:"noreferrer",target:"_blank",children:i("i",{className:"fa-brands fa-linkedin"})})}),i("li",{children:i("a",{href:k.twitter,rel:"noreferrer",target:"_blank",children:i("i",{className:"fa-brands fa-twitter"})})}),i("li",{children:i("a",{href:`mailto:${k.email}`,rel:"noreferrer",target:"_blank",children:i("i",{className:"fa-solid fa-envelope"})})}),i("li",{children:i("a",{href:`tel:${k.phoneNumber}`,rel:"noreferrer",target:"_blank",children:i("i",{className:"fa-brands fa-whatsapp"})})})]}),i("div",{className:"btn btn-default",children:i("a",{href:"#contact",children:"Contact me"})}),i("div",{className:"scroll-down",children:[i("h3",{children:"Scroll For More"}),i("i",{className:"fa-solid fa-angles-down"})]})]})});const Ve=[{name:"Home",href:"#home"},{name:"About",href:"#about"},{name:"Skills",href:"#skills"},{name:"Experience",href:"#experience"},{name:"Projects",href:"#projects"},{name:"Contact",href:"#contact"}],qe=({handleOpenThemePanel:e})=>{const t=De(null),n=()=>{var l;return(l=t.current)==null?void 0:l.classList.add("show")},s=()=>{var l;return(l=t.current)==null?void 0:l.classList.remove("show")},c=l=>{l.target.classList.contains("nav-link")&&s()},[o,r]=S(window.location.hash??"#home");return E(()=>{const l=document.querySelectorAll("section[id]"),p=()=>{let m=window.pageYOffset;l.forEach(a=>{const u=a.offsetHeight,_=a.offsetTop-76,d=a.getAttribute("id");m>_&&m<=_+u&&r("#"+d)})};window.addEventListener("scroll",p)}),i("header",{id:"header",className:"header",children:i("nav",{className:"nav container px-15",children:[i("div",{className:"nav-logo",children:i("h2",{children:"Riyadh"})}),i("div",{ref:t,className:"nav-menu",children:[i("ul",{className:"nav-list",onClick:c,children:Ve.map(l=>i("li",{className:"nav-item",children:i("a",{href:l.href,className:`nav-link ${o===l.href?"active-link":""}`,children:l.name})}))}),i("div",{className:"nav-close",id:"nav-close",children:i("i",{className:"fa-solid fa-xmark",onClick:s})})]}),i("div",{className:"nav-btn-group",children:[i("i",{className:"fa-solid fa-palette",id:"nav-theme-btn",onClick:e}),i("div",{className:"nav-btn nav-toggle",id:"nav-toggle",children:i("i",{className:"fa-solid fa-gear",onClick:n})})]})]})})},Qe=[{name:"Social Media App",links:["https://social-media-app-production.up.railway.app","https://social-media-app-eoga.onrender.com/"],repo:"https://github.com/riyadh-dev/social-media-app",thumbnail:"./images/social-media-app/3.png",images:["./images/social-media-app/1.png","./images/social-media-app/2.png","./images/social-media-app/3.png","./images/social-media-app/4.png","./images/social-media-app/5.png","./images/social-media-app/6.png","./images/social-media-app/7.png","./images/social-media-app/8.png","./images/social-media-app/9.png","./images/social-media-app/10.png"],tags:["ReactJS","ExpressJS","MongoDB","MUI","WebSockets","Typescript","RecoilJS","React Router","React Query"]},{name:"Online Store",links:["https://e-commerce-app-self.vercel.app/"],repo:"https://github.com/riyadh-dev/e-commerce-app",thumbnail:"./images/e-commerce-app/1.png",images:["./images/e-commerce-app/1.png","./images/e-commerce-app/2.png","./images/e-commerce-app/3.png","./images/e-commerce-app/4.png","./images/e-commerce-app/5.png","./images/e-commerce-app/6.png","./images/e-commerce-app/7.png","./images/e-commerce-app/8.png","./images/e-commerce-app/9.png"],tags:["NextJS","TailwindCSS","Typescript","Stripe","RecoilJS"]},{name:"Instant Messaging App",links:["https://messaging-app.up.railway.app","https://messaging-app-2b7q.onrender.com"],repo:"https://github.com/riyadh-dev/messaging-app",thumbnail:"./images/messaging-app/4.png",images:["./images/messaging-app/1.png","./images/messaging-app/2.png","./images/messaging-app/3.png","./images/messaging-app/4.png","./images/messaging-app/5.png","./images/messaging-app/6.png"],tags:["ReactJS","ExpressJS","MongoDB","MUI","WebSockets","Typescript","RecoilJS","React Router","React Query"]},{name:"Scientific Consul Management System",links:["https://scms-client.netlify.app/"],repo:"https://github.com/riyadh-dev/scms-client",thumbnail:"./images/scms/5.png",images:["./images/scms/1.png","./images/scms/2.png","./images/scms/3.png","./images/scms/4.png","./images/scms/5.png","./images/scms/6.png","./images/scms/7.png","./images/scms/8.png","./images/scms/9.png","./images/scms/10.png","./images/scms/11.png","./images/scms/12.png","./images/scms/13.png"],tags:["ReactJS","ExpressJS","MongoDB","MUI","GraphQL"]},{name:"Card Matching Game",links:["https://riyadh-dev-memory-matching-game.netlify.app/"],repo:"https://github.com/riyadh-dev/memory-matching-game",thumbnail:"./images/memory-matching-game/1.png",images:["./images/memory-matching-game/1.png"],tags:["ReactJS","Typescript","ExpressJS"]},{name:"Authentication Demo",links:["https://authentication-demo.up.railway.app/","https://authentication-demo-jqhr.onrender.com/"],repo:"https://github.com/riyadh-dev/authentication-demo",thumbnail:"./images/authentication-demo/2.png",images:["./images/authentication-demo/1.png","./images/authentication-demo/2.png","./images/authentication-demo/3.png","./images/authentication-demo/4.png","./images/authentication-demo/5.png"],tags:["ReactJS","Chakra UI","Typescript","ExpressJS","MongoDB","CSURF","HTTPOnly cookies"]},{name:"IEC101 Master Sim",links:["https://github.com/riyadh-dev/iec101-master-sim/releases/download/v1.0.0/IEC101MasterSim.exe"],repo:"https://github.com/riyadh-dev/iec101-master-sim",thumbnail:"./images/iec101-master-sim/2.png",images:["./images/iec101-master-sim/1.png","./images/iec101-master-sim/2.png"],tags:[".NET","WPF","C#","XAML","IEC 60870-5-101"]},{name:"Portfolio Website (React JS)",links:["https://riyadh-dev.github.io/portfolio-website-react"],repo:"https://github.com/riyadh-dev/portfolio-website-react",thumbnail:"./images/portfolio-website-image/1.png",images:["./images/portfolio-website-image/1.png","./images/portfolio-website-image/2.png","./images/portfolio-website-image/3.png","./images/portfolio-website-image/4.png","./images/portfolio-website-image/5.png","./images/portfolio-website-image/6.png"],tags:["ReactJS","Typescript","CSS"]},{name:"Portfolio Website (No Framework)",links:["https://riyadh-dev.github.io/portfolio-website"],repo:"https://github.com/riyadh-dev/portfolio-website",thumbnail:"./images/portfolio-website-image/3.png",images:["./images/portfolio-website-image/1.png","./images/portfolio-website-image/2.png","./images/portfolio-website-image/3.png","./images/portfolio-website-image/4.png","./images/portfolio-website-image/5.png","./images/portfolio-website-image/6.png"],tags:["HTML","Typescript","SASS","ParcelJS"]}];const Ye=({handleOpenGallerySlider:e})=>i("section",{className:"projects section",id:"projects",children:i("div",{className:"container",children:[i("h2",{className:"section-title px-15",children:"Projects"}),i("div",{className:"projects-container",children:Qe.map((t,n)=>i("div",{children:[i("div",{className:"project-card",children:[i("img",{src:t.thumbnail,alt:t.name,className:"project-img"}),i("div",{className:"project-card-hover",children:[i("h3",{className:"project-title",children:t.name}),i("div",{className:"project-buttons",children:[i("div",{className:"project-buttons-group",children:[i("span",{className:"circular-Button-no-hover",children:i("i",{className:"fa-solid fa-link"})}),i("div",{className:"project-buttons-group-links",children:t.links.map((s,c)=>i("a",{href:s,rel:"noreferrer",target:"_blank",children:c+1},c))})]}),i("a",{href:t.repo,rel:"noreferrer",target:"_blank",children:i("i",{className:"fa-brands fa-github"})}),i("span",{className:"circular-Button",onClick:e(t.images),children:i("i",{className:"fa-solid fa-images"})})]})]})]}),i("ul",{className:"project-tags-container",children:t.tags.map((s,c)=>i("li",{className:"project-tag",children:s},c))})]},n))})]})}),pe=[{categoryName:"Web Frontend",fontAwesomeClasses:"fa-brands fa-firefox-browser skills-icon",skills:[{name:"React",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/640px-React-icon.svg.png"},{name:"Tailwind",image:"https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg"},{name:"NextJS",image:"https://img.icons8.com/color/512/nextjs.png"},{name:"RecoilJS",image:"https://external-content.duckduckgo.com/ip3/recoiljs.org.ico"},{name:"TS",image:"https://cdn-icons-png.flaticon.com/128/5968/5968381.png"},{name:"SASS",image:"https://cdn-icons-png.flaticon.com/128/5968/5968358.png"},{name:"Bootstrap",image:"https://cdn-icons-png.flaticon.com/512/5968/5968672.png"},{name:"MUI",image:"https://raw.githubusercontent.com/mui/material-ui/master/docs/public/static/logo.svg"},{name:"Chakra UI",image:"https://images.opencollective.com/chakra-ui/eb43264/logo/256.png"},{name:"HTML",image:"https://cdn-icons-png.flaticon.com/128/174/174854.png"},{name:"CSS",image:"https://cdn-icons-png.flaticon.com/128/732/732190.png"},{name:"JS",image:"https://cdn-icons-png.flaticon.com/128/5968/5968292.png"}]},{categoryName:"Web Backend",fontAwesomeClasses:"fa-solid fa-server skills-icon",skills:[{name:"NodeJS",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1200px-Node.js_logo.svg.png"},{name:"MongoDB",image:"https://www.svgrepo.com/show/331488/mongodb.svg"},{name:"PostgreSQL",image:"https://cdn-icons-png.flaticon.com/512/5968/5968342.png"},{name:"ExpressJS",image:"https://upload.wikimedia.org/wikipedia/commons/6/64/Expressjs.png"},{name:"GraphQL",image:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/GraphQL_Logo.svg/1200px-GraphQL_Logo.svg.png"},{name:"WebSockets",image:"https://seeklogo.com/images/W/websocket-logo-91B815D333-seeklogo.com.png"}]},{categoryName:"Desktop",fontAwesomeClasses:"fa-solid fa-display skills-icon",skills:[{name:"C#",image:"https://cdn-icons-png.flaticon.com/512/6132/6132221.png"},{name:"XAML",image:"https://user-images.githubusercontent.com/16964652/66596008-f4e3ed80-eb50-11e9-9a8a-3e9a5adf4d7c.png"},{name:".NET",image:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"},{name:"WPF",image:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"},{name:"WinForms",image:"https://upload.wikimedia.org/wikipedia/commons/7/7d/Microsoft_.NET_logo.svg"}]},{categoryName:"Other Skills",fontAwesomeClasses:"fa-solid fa-laptop-code skills-icon",skills:[{name:"ParcelJS",image:"https://parceljs.org/avatar.66e613b2.avif"}]}];const Ke=()=>{const[e,t]=S(0);return i("section",{className:"skills section",id:"skills",children:i("div",{className:"container",children:[i("h2",{className:"section-title px-15",children:"Skills"}),i("div",{className:"skills-container",children:[i("div",{className:"skills-tabs",children:pe.map((n,s)=>i("div",{className:`skills-tab ${s===e?"skills-active":""}`,onClick:()=>t(s),children:[i("i",{className:n.fontAwesomeClasses}),i("div",{children:i("h1",{className:"skills-title",children:n.categoryName})}),i("i",{className:"fa-solid fa-chevron-down skills-arrow"})]},s))}),i("div",{className:"skills-content",children:i("div",{className:"skills-group",children:pe[e].skills.map((n,s)=>i("div",{className:"skill-container",children:[i("img",{src:n.image,alt:n.name}),i("h3",{children:n.name})]},s))})})]})]})})},w={fontSizes:["12px","14px","16px","18px"],colorHues:["252","127","352","49","229"],backgrounds:[{text:"Light",values:["92%","17%","100%"]},{text:"Dim",values:["15%","95%","20%"]},{text:"Dark",values:["10%","95%","0%"]}]},Ae=()=>{var l;const[e,t]=S(parseInt(localStorage.getItem("activeFontSizeIndex")??"2")),[n,s]=S(parseInt(localStorage.getItem("activeColorHueIndex")??"2")),[c,o]=S(parseInt(localStorage.getItem("activeBackgroundColorIndex")??"0")),r=(l=document.querySelector("html"))==null?void 0:l.style;return E(()=>{r&&(r.fontSize=w.fontSizes[e])},[e,r]),E(()=>{r&&r.setProperty("--primary-color-hue",w.colorHues[n])},[n,r]),E(()=>{r&&(r.setProperty("--light-color-lightness",w.backgrounds[c].values[0]),r.setProperty("--dark-color-lightness",w.backgrounds[c].values[1]),r.setProperty("--white-color-lightness",w.backgrounds[c].values[2]))},[c,r]),{activeBackgroundColorIndex:c,setActiveBackgroundColorIndex:o,activeColorHueIndex:n,setActiveColorHueIndex:s,activeFontSizeIndex:e,setActiveFontSizeIndex:t}};const Xe=({handleCloseThemePanel:e})=>{const t=p=>{p.target.id==="theme-panel-container"&&e()},{activeBackgroundColorIndex:n,activeColorHueIndex:s,activeFontSizeIndex:c,setActiveBackgroundColorIndex:o,setActiveColorHueIndex:r,setActiveFontSizeIndex:l}=Ae();return E(()=>()=>{localStorage.setItem("activeFontSizeIndex",c.toString()),localStorage.setItem("activeColorHueIndex",s.toString()),localStorage.setItem("activeBackgroundColorIndex",n.toString())}),E(()=>(document.body.style.overflow="hidden",()=>{document.body.style.position="",document.body.style.overflow="auto"}),[]),i("div",{className:"theme-panel-container",id:"theme-panel-container",onClick:t,children:i("div",{className:"theme-panel",children:[i("h2",{children:"Customize The Theme"}),i("p",{children:"Manage the font size, color and theme mode."}),i("div",{className:"theme-font-size",children:[i("h3",{children:"Font Size"}),i("div",{className:"theme-font-size-slider",children:[i("h6",{children:"Aa"}),i("ul",{children:w.fontSizes.map((p,m)=>i("li",{onClick:()=>l(m),className:`font-size-${m+1} ${m===c?"active":""}`},m))}),i("h3",{children:"Aa"})]})]}),i("div",{className:"theme-color",children:[i("h3",{children:"Color"}),i("ul",{children:w.colorHues.map((p,m)=>i("li",{onClick:()=>r(m),className:`color-${m+1} ${m===s?"active":""}`},m))})]}),i("div",{className:"theme-background",children:[i("h3",{children:"Theme Mode"}),i("ul",{children:w.backgrounds.map(({text:p},m)=>i("li",{onClick:()=>o(m),className:`bg-${m+1} ${m===n?"active":""}`,children:[i("span",{}),i("h5",{children:p})]},m))})]})]})})};function Ze(){const[e,t]=S(!1),n=()=>t(!0),s=()=>t(!1),[c,o]=S(!1),[r,l]=S([]),p=a=>()=>{l(a),o(!0)},m=()=>o(!1);return Ae(),i("div",{className:"App",children:[i(qe,{handleOpenThemePanel:n}),i("main",{className:"main-content",children:[i(Ge,{}),i(Oe,{}),i(Ke,{}),i(We,{}),i(Ye,{handleOpenGallerySlider:p}),i(Je,{}),i(Ue,{})]}),c&&i(ze,{images:r,handleCloseGallerySlider:m}),e&&i(Xe,{handleCloseThemePanel:s})]})}Me(i(Ze,{}),document.getElementById("app"));
