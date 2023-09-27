var N=Object.defineProperty;var o=(t,e)=>N(t,"name",{value:e,configurable:!0});import{w as M,d as x,z as B,u as C,l as P}from"./iframe.73474e02.js";var L="backgrounds",R=M.LOGLEVEL,d=M.console,f={trace:1,debug:2,info:3,warn:4,error:5,silent:10},$=R,b=f[$]||f.info,H={trace:o(function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return b<=f.trace&&d.trace.apply(d,[e].concat(n))},"trace"),debug:o(function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return b<=f.debug&&d.debug.apply(d,[e].concat(n))},"debug"),info:o(function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return b<=f.info&&d.info.apply(d,[e].concat(n))},"info"),warn:o(function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return b<=f.warn&&d.warn.apply(d,[e].concat(n))},"warn"),error:o(function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return b<=f.error&&d.error.apply(d,[e].concat(n))},"error"),log:o(function(e){for(var r=arguments.length,n=new Array(r>1?r-1:0),a=1;a<r;a++)n[a-1]=arguments[a];return b<f.silent&&d.log.apply(d,[e].concat(n))},"log")},O;function D(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}o(D,"_taggedTemplateLiteral$1");var v=M.document,F=M.window,K=o(function(){var e=F.matchMedia("(prefers-reduced-motion: reduce)");return e.matches},"isReduceMotionEnabled"),Y=o(function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:[],n=arguments.length>2?arguments[2]:void 0;if(e==="transparent")return"transparent";if(r.find(function(c){return c.value===e}))return e;var a=r.find(function(c){return c.name===n});if(a)return a.value;if(n){var i=r.map(function(c){return c.name}).join(", ");H.warn(x(O||(O=D([`
        Backgrounds Addon: could not find the default color "`,`".
        These are the available colors for your story based on your configuration:
        `,`.
      `])),n,i))}return"transparent"},"getBackgroundColorByName"),T=o(function(e){var r=Array.isArray(e)?e:[e];r.forEach(U)},"clearStyles"),U=o(function(e){var r=v.getElementById(e);r&&r.parentElement.removeChild(r)},"clearStyle"),X=o(function(e,r){var n=v.getElementById(e);if(n)n.innerHTML!==r&&(n.innerHTML=r);else{var a=v.createElement("style");a.setAttribute("id",e),a.innerHTML=r,v.head.appendChild(a)}},"addGridStyle"),W=o(function(e,r,n){var a=v.getElementById(e);if(a)a.innerHTML!==r&&(a.innerHTML=r);else{var i=v.createElement("style");i.setAttribute("id",e),i.innerHTML=r;var c="addon-backgrounds-grid".concat(n?"-docs-".concat(n):""),s=v.getElementById(c);s?s.parentElement.insertBefore(i,s):v.head.appendChild(i)}},"addBackgroundStyle"),q=o(function(e,r){var n,a=r.globals,i=r.parameters,c=(n=a[L])===null||n===void 0?void 0:n.value,s=i[L],u=B(function(){return s.disable?"transparent":Y(c,s.values,s.default)},[s,c]),g=B(function(){return u&&u!=="transparent"},[u]),h=r.viewMode==="docs"?"#anchor--".concat(r.id," .docs-story"):".sb-show-main",p=B(function(){var m="transition: background-color 0.3s;";return`
      `.concat(h,` {
        background: `).concat(u,` !important;
        `).concat(K()?"":m,`
      }
    `)},[u,h]);return C(function(){var m=r.viewMode==="docs"?"addon-backgrounds-docs-".concat(r.id):"addon-backgrounds-color";if(!g){T(m);return}W(m,p,r.viewMode==="docs"?r.id:null)},[g,p,r]),e()},"withBackground"),j;function J(t,e){return e||(e=t.slice(0)),Object.freeze(Object.defineProperties(t,{raw:{value:Object.freeze(e)}}))}o(J,"_taggedTemplateLiteral");var Q=P(function(){},x(j||(j=J([`
    Backgrounds Addon: The cell size parameter has been changed.

    - parameters.grid.cellSize should now be parameters.backgrounds.grid.cellSize
    See https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#deprecated-grid-parameter
  `])))),V=o(function(e,r){var n,a,i,c,s=r.globals,u=r.parameters,g=u[L].grid,h=((n=s[L])===null||n===void 0?void 0:n.grid)===!0&&g.disable!==!0,p=g.cellAmount,m=g.cellSize,w=g.opacity,z=r.viewMode==="docs",l;(a=u.grid)!==null&&a!==void 0&&a.cellSize?(l=u.grid.cellSize,Q()):l=m;var I=u.layout===void 0||u.layout==="padded",E=I?16:0,S=(i=g.offsetX)!==null&&i!==void 0?i:z?20:E,y=(c=g.offsetY)!==null&&c!==void 0?c:z?20:E,k=B(function(){var A=r.viewMode==="docs"?"#anchor--".concat(r.id," .docs-story"):".sb-show-main",G=["".concat(l*p,"px ").concat(l*p,"px"),"".concat(l*p,"px ").concat(l*p,"px"),"".concat(l,"px ").concat(l,"px"),"".concat(l,"px ").concat(l,"px")].join(", ");return`
      `.concat(A,` {
        background-size: `).concat(G,` !important;
        background-position: `).concat(S,"px ").concat(y,"px, ").concat(S,"px ").concat(y,"px, ").concat(S,"px ").concat(y,"px, ").concat(S,"px ").concat(y,`px !important;
        background-blend-mode: difference !important;
        background-image: linear-gradient(rgba(130, 130, 130, `).concat(w,`) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, `).concat(w,`) 1px, transparent 1px),
         linear-gradient(rgba(130, 130, 130, `).concat(w/2,`) 1px, transparent 1px),
         linear-gradient(90deg, rgba(130, 130, 130, `).concat(w/2,`) 1px, transparent 1px) !important;
      }
    `)},[l]);return C(function(){var A=r.viewMode==="docs"?"addon-backgrounds-grid-docs-".concat(r.id):"addon-backgrounds-grid";if(!h){T(A);return}X(A,k)},[h,k,r]),e()},"withGrid"),rr=[V,q],ar={backgrounds:{grid:{cellSize:20,opacity:.5,cellAmount:5},values:[{name:"light",value:"#F8F8F8"},{name:"dark",value:"#333333"}]}};export{rr as decorators,ar as parameters};
//# sourceMappingURL=preview.42d2b077.js.map
