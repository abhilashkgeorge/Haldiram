(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{"8Mb5":function(t,e,i){"use strict";i.r(e),i.d(e,"ion_virtual_scroll",(function(){return h}));var s=i("wEJo"),r=i("W6o/");const n="item",l="header",o="footer",createNode=(t,e)=>{const i=getTemplate(t,e);return i&&t.ownerDocument?t.ownerDocument.importNode(i.content,!0).children[0]:null},getTemplate=(t,e)=>{switch(e){case n:return t.querySelector("template:not([name])");case l:return t.querySelector("template[name=header]");case o:return t.querySelector("template[name=footer]")}},calcCells=(t,e,i,s,r,h,a,c,d,g,u,p)=>{const m=[],f=p+u;for(let p=u;p<f;p++){const u=t[p];if(r){const e=r(u,p,t);null!=e&&m.push({i:g++,type:l,value:e,index:p,height:i?i(e,p):a,reads:i?0:2,visible:!!i})}if(m.push({i:g++,type:n,value:u,index:p,height:e?e(u,p):d,reads:e?0:2,visible:!!e}),h){const e=h(u,p,t);null!=e&&m.push({i:g++,type:o,value:e,index:p,height:s?s(e,p):c,reads:s?0:2,visible:!!s})}}return m},h=class{constructor(t){Object(s.o)(this,t),this.range={offset:0,length:0},this.viewportHeight=0,this.cells=[],this.virtualDom=[],this.isEnabled=!1,this.viewportOffset=0,this.currentScrollTop=0,this.indexDirty=0,this.lastItemLen=0,this.totalHeight=0,this.approxItemHeight=45,this.approxHeaderHeight=30,this.approxFooterHeight=30,this.onScroll=()=>{this.updateVirtualScroll()}}itemsChanged(){this.calcCells(),this.updateVirtualScroll()}componentWillLoad(){console.warn("[Deprecation Warning]: ion-virtual-scroll has been deprecated and will be removed in Ionic Framework v7.0. See https://ionicframework.com/docs/angular/virtual-scroll for migration steps.")}async connectedCallback(){const t=this.el.closest("ion-content");if(!t)return console.error("<ion-virtual-scroll> must be used inside an <ion-content>"),void 0;this.scrollEl=await t.getScrollElement(),this.contentEl=t,this.calcCells(),this.updateState()}componentDidUpdate(){this.updateState()}disconnectedCallback(){this.scrollEl=void 0}onResize(){this.calcCells(),this.updateVirtualScroll()}positionForItem(t){return Promise.resolve(((t,e,i)=>{const s=e.find((e=>e.type===n&&e.index===t));return s?i[s.i]:-1})(t,this.cells,this.getHeightIndex()))}async checkRange(t,e=-1){if(!this.items)return;const i=-1===e?this.items.length-t:e,s=((t,e)=>0===e?0:e===(t.length>0?t[t.length-1].index:0)+1?t.length:t.findIndex((t=>t.index===e)))(this.cells,t),r=calcCells(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,s,t,i);this.cells=((t,e,i)=>{if(0===i&&e.length>=t.length)return e;for(let s=0;s<e.length;s++)t[s+i]=e[s];return t})(this.cells,r,s),this.lastItemLen=this.items.length,this.indexDirty=Math.max(t-1,0),this.scheduleUpdate()}async checkEnd(){this.items&&this.checkRange(this.lastItemLen)}updateVirtualScroll(){this.isEnabled&&this.scrollEl&&(this.timerUpdate&&(clearTimeout(this.timerUpdate),this.timerUpdate=void 0),Object(s.h)(this.readVS.bind(this)),Object(s.f)(this.writeVS.bind(this)))}readVS(){const{contentEl:t,scrollEl:e,el:i}=this;let s=0,r=i;for(;r&&r!==t;)s+=r.offsetTop,r=r.offsetParent;this.viewportOffset=s,e&&(this.viewportHeight=e.offsetHeight,this.currentScrollTop=e.scrollTop)}writeVS(){const t=this.indexDirty,e=((t,e,i)=>({top:Math.max(t-i,0),bottom:t+e+i}))(this.currentScrollTop-this.viewportOffset,this.viewportHeight,100),i=this.getHeightIndex(),r=((t,e,i)=>{const s=e.top,r=e.bottom;let n=0;for(;n<t.length&&!(t[n]>s);n++);const l=Math.max(n-i-1,0);for(;n<t.length&&!(t[n]>=r);n++);return{offset:l,length:Math.min(n+i,t.length)-l}})(i,e,2),n=((t,e,i)=>t<=i.offset+i.length||e.offset!==i.offset||e.length!==i.length)(t,this.range,r);n&&(this.range=r,((t,e,i,s)=>{for(const e of t)e.change=0,e.d=!0;const r=[],n=s.offset+s.length;for(let l=s.offset;l<n;l++){const s=i[l],n=t.find((t=>t.d&&t.cell===s));if(n){const t=e[l];t!==n.top&&(n.top=t,n.change=1),n.d=!1}else r.push(s)}const l=t.filter((t=>t.d));for(const i of r){const s=l.find((t=>t.d&&t.cell.type===i.type)),r=i.i;s?(s.d=!1,s.change=2,s.cell=i,s.top=e[r]):t.push({d:!1,cell:i,visible:!0,change:2,top:e[r]})}t.filter((t=>t.d&&-9999!==t.top)).forEach((t=>{t.change=1,t.top=-9999}))})(this.virtualDom,i,this.cells,r),this.nodeRender?((t,e,i,s)=>{const r=Array.from(t.children).filter((t=>"TEMPLATE"!==t.tagName)),n=r.length;let l;for(let o=0;o<i.length;o++){const h=i[o],a=h.cell;if(2===h.change){if(o<n)l=r[o],e(l,a,o);else{const i=createNode(t,a.type);l=e(i,a,o)||i,l.classList.add("virtual-item"),t.appendChild(l)}l.$ionCell=a}else l=r[o];0!==h.change&&(l.style.transform=`translate3d(0,${h.top}px,0)`);const c=a.visible;h.visible!==c&&(c?l.classList.remove("virtual-loading"):l.classList.add("virtual-loading"),h.visible=c),a.reads>0&&(s(a,l),a.reads--)}})(this.el,this.nodeRender,this.virtualDom,this.updateCellHeight.bind(this)):this.domRender?this.domRender(this.virtualDom):this.renderItem&&Object(s.l)(this))}updateCellHeight(t,e){const update=()=>{if(e.$ionCell===t){const i=window.getComputedStyle(e),s=e.offsetHeight+parseFloat(i.getPropertyValue("margin-bottom"));this.setCellHeight(t,s)}};e?Object(r.c)(e,update):update()}setCellHeight(t,e){const i=t.i;t===this.cells[i]&&(t.height===e&&!0===t.visible||(t.visible=!0,t.height=e,this.indexDirty=Math.min(this.indexDirty,i),this.scheduleUpdate()))}scheduleUpdate(){clearTimeout(this.timerUpdate),this.timerUpdate=setTimeout((()=>this.updateVirtualScroll()),100)}updateState(){const t=!(!this.scrollEl||!this.cells);t!==this.isEnabled&&(this.enableScrollEvents(t),t&&this.updateVirtualScroll())}calcCells(){this.items&&(this.lastItemLen=this.items.length,this.cells=calcCells(this.items,this.itemHeight,this.headerHeight,this.footerHeight,this.headerFn,this.footerFn,this.approxHeaderHeight,this.approxFooterHeight,this.approxItemHeight,0,0,this.lastItemLen),this.indexDirty=0)}getHeightIndex(){return this.indexDirty!==1/0&&this.calcHeightIndex(this.indexDirty),this.heightIndex}calcHeightIndex(t=0){this.heightIndex=((t,e)=>{if(!t)return new Uint32Array(e);if(t.length===e)return t;if(e>t.length){const i=new Uint32Array(e);return i.set(t),i}return t.subarray(0,e)})(this.heightIndex,this.cells.length),this.totalHeight=((t,e,i)=>{let s=t[i];for(let r=i;r<t.length;r++)t[r]=s,s+=e[r].height;return s})(this.heightIndex,this.cells,t),this.indexDirty=1/0}enableScrollEvents(t){this.rmEvent&&(this.rmEvent(),this.rmEvent=void 0);const e=this.scrollEl;e&&(this.isEnabled=t,e.addEventListener("scroll",this.onScroll),this.rmEvent=()=>{e.removeEventListener("scroll",this.onScroll)})}renderVirtualNode(t){const{type:e,value:i,index:s}=t.cell;switch(e){case n:return this.renderItem(i,s);case l:return this.renderHeader(i,s);case o:return this.renderFooter(i,s)}}render(){return Object(s.j)(s.c,{style:{height:`${this.totalHeight}px`}},this.renderItem&&Object(s.j)(VirtualProxy,{dom:this.virtualDom},this.virtualDom.map((t=>this.renderVirtualNode(t)))))}get el(){return Object(s.k)(this)}static get watchers(){return{itemHeight:["itemsChanged"],headerHeight:["itemsChanged"],footerHeight:["itemsChanged"],items:["itemsChanged"]}}},VirtualProxy=({dom:t},e,i)=>i.map(e,((e,i)=>{const s=t[i],r=e.vattrs||{};let n=r.class||"";return n+="virtual-item ",s.visible||(n+="virtual-loading"),Object.assign(Object.assign({},e),{vattrs:Object.assign(Object.assign({},r),{class:n,style:Object.assign(Object.assign({},r.style),{transform:`translate3d(0,${s.top}px,0)`})})})}));h.style="ion-virtual-scroll{display:block;position:relative;width:100%;contain:strict;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}ion-virtual-scroll>.virtual-loading{opacity:0}ion-virtual-scroll>.virtual-item{position:absolute !important;top:0 !important;right:0 !important;left:0 !important;-webkit-transition-duration:0ms;transition-duration:0ms;will-change:transform}"}}]);