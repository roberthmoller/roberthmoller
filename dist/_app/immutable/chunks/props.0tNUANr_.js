import{h as N,H as y,m as K,n as R,j as S,k as D,E as g,s as j,o as O,q as C,L as F,P as T,v as U,g as c,w as Y,x as z,y as B,z as H,d as M,A as I,B as $,C as G,D as V,F as h}from"./runtime.BSqPhpxs.js";import{h as Z,d as A,e as J}from"./disclose-version.CuIoUarZ.js";function ne(e,r,n,s=null,v=!1){var i=null,a=null,l=null,t=v?g:0;N(()=>{if(l===(l=!!r()))return;let f=!1;if(Z){const d=e.data===y;l===d&&(K(J),A(!1),f=!0)}l?(i?R(i):i=S(()=>n(e)),a&&D(a,()=>{a=null})):(a?R(a):s&&(a=S(()=>s(e))),i&&D(i,()=>{i=null})),f&&A(!0)},t)}const Q={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function se(e,r,n){return new Proxy({props:e,exclude:r},Q)}const W={get(e,r){if(!e.exclude.includes(r))return c(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=k({get[r](){return e.props[r]}},r,T)),e.special[r](n),z(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function ue(e,r){return new Proxy({props:e,exclude:r,special:{},version:j(0)},W)}const X={get(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(h(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(h(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return O(s,r)}},has(e,r){for(let n of e.props)if(h(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){h(n)&&(n=n());for(const s in n)r.includes(s)||r.push(s)}return r}};function ie(...e){return new Proxy({props:e},X)}function k(e,r,n,s){var E;var v=(n&B)!==0,i=(n&H)!==0,a=(n&G)!==0,l=e[r],t=(E=O(e,r))==null?void 0:E.set,f=s,d=!0,w=()=>(a&&d&&(d=!1,f=M(s)),f);l===void 0&&s!==void 0&&(t&&i&&C(),l=w(),t&&t(l));var o;if(i)o=()=>{var u=e[r];return u===void 0?w():(d=!0,u)};else{var x=(v?I:$)(()=>e[r]);x.f|=F,o=()=>{var u=c(x);return u!==void 0&&(f=void 0),u===void 0?f:u}}if(!(n&T))return o;if(t){var q=e.$$legacy;return function(u,p){return arguments.length>0?((!i||!p||q)&&t(p?o():u),u):o()}}var P=!1,m=V(l),_=I(()=>{var u=o(),p=c(m);return P?(P=!1,p):m.v=u});return v||(_.equals=U),function(u,p){var L=c(_);if(arguments.length>0){const b=p?c(_):u;return _.equals(b)||(P=!0,Y(m,b),c(_)),u}return L}}export{ne as i,ue as l,k as p,se as r,ie as s};
