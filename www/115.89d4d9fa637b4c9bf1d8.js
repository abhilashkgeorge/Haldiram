(window.webpackJsonp=window.webpackJsonp||[]).push([[115],{STjf:function(t,n,i){"use strict";i.r(n),i.d(n,"ion_ripple_effect",(function(){return o}));var a=i("wEJo"),e=i("E/Mt");const o=class{constructor(t){Object(a.o)(this,t),this.type="bounded"}async addRipple(t,n){return new Promise((i=>{Object(a.h)((()=>{const e=this.el.getBoundingClientRect(),o=e.width,c=e.height,l=Math.sqrt(o*o+c*c),m=Math.max(c,o),f=this.unbounded?m:l+r,d=Math.floor(m*s),u=f/d;let p=t-e.left,b=n-e.top;this.unbounded&&(p=.5*o,b=.5*c);const w=p-.5*d,h=b-.5*d,k=.5*o-p,y=.5*c-b;Object(a.f)((()=>{const t=document.createElement("div");t.classList.add("ripple-effect");const n=t.style;n.top=h+"px",n.left=w+"px",n.width=n.height=d+"px",n.setProperty("--final-scale",`${u}`),n.setProperty("--translate-end",`${k}px, ${y}px`);(this.el.shadowRoot||this.el).appendChild(t),setTimeout((()=>{i((()=>{removeRipple(t)}))}),325)}))}))}))}get unbounded(){return"unbounded"===this.type}render(){const t=Object(e.b)(this);return Object(a.j)(a.c,{role:"presentation",class:{[t]:!0,unbounded:this.unbounded}})}get el(){return Object(a.k)(this)}},removeRipple=t=>{t.classList.add("fade-out"),setTimeout((()=>{t.remove()}),200)},r=10,s=.5;o.style=":host{left:0;right:0;top:0;bottom:0;position:absolute;contain:strict;pointer-events:none}:host(.unbounded){contain:layout size style}.ripple-effect{border-radius:50%;position:absolute;background-color:currentColor;color:inherit;contain:strict;opacity:0;-webkit-animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;animation:225ms rippleAnimation forwards, 75ms fadeInAnimation forwards;will-change:transform, opacity;pointer-events:none}.fade-out{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1));-webkit-animation:150ms fadeOutAnimation forwards;animation:150ms fadeOutAnimation forwards}@-webkit-keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@keyframes rippleAnimation{from{-webkit-animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1);-webkit-transform:scale(1);transform:scale(1)}to{-webkit-transform:translate(var(--translate-end)) scale(var(--final-scale, 1));transform:translate(var(--translate-end)) scale(var(--final-scale, 1))}}@-webkit-keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@keyframes fadeInAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0}to{opacity:0.16}}@-webkit-keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}@keyframes fadeOutAnimation{from{-webkit-animation-timing-function:linear;animation-timing-function:linear;opacity:0.16}to{opacity:0}}"}}]);