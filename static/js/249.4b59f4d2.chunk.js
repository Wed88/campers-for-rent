"use strict";(self.webpackChunkcampers_for_rent=self.webpackChunkcampers_for_rent||[]).push([[249],{7454:function(e,a,r){r.r(a),r.d(a,{CatalogPage:function(){return K}});var t=r(2013),n=r(4420),i=r(9166),l="CatalogFilterItem_container__123kV",o="CatalogFilterItem_checkbox__3WLyK",s="CatalogFilterItem_input__6mLOv",c="CatalogFilterItem_svgBox__ysZRy",u=r(184),h=function(e){var a=e.name,r=e.icon,h=e.nameValue,_=(0,n.I0)();return(0,u.jsxs)("li",{className:l,children:[(0,u.jsx)("input",{className:s,id:a,type:"checkbox",onChange:function(e){var a;(a=e.target).checked?_((0,i.r3)(a.id)):_((0,i.kW)(a.id))},hidden:!0}),(0,u.jsxs)("label",{className:o,htmlFor:a,children:[(0,u.jsx)("div",{className:c,children:(0,u.jsx)(t.l,{icon:r})}),h]})]})},_="CatalogFilterList_container__yV5DI",d="CatalogFilterList_name__MA-km",m="CatalogFilterList_group__afKzS",g=function(e){var a=e.filterGroup,r=e.filters;return(0,u.jsxs)("div",{className:_,children:[(0,u.jsx)("p",{className:d,children:a}),(0,u.jsx)("ul",{className:m,children:Object.keys(r).map((function(e){return(0,u.jsx)(h,{name:e,icon:e,nameValue:r[e]},e)}))})]})},f=r(6351),v=r(5590),p="CatalogSearchBar_container__7vGzg",x="CatalogSearchBar_form__yC2nh",C="CatalogSearchBar_box__2hegS",j="CatalogSearchBar_label__cX8kw",b="CatalogSearchBar_inputBox__eFRZt",N="CatalogSearchBar_svgBox__Aw2Hp",y="CatalogSearchBar_input__kBnKi",k="CatalogSearchBar_group__KS5MB",w="CatalogSearchBar_gap__FTHri",S="CatalogSearchBar_button__BLZi6",F=function(){var e=(0,n.I0)(),a=(0,n.v9)(f.Rq);return(0,u.jsx)("div",{className:p,children:(0,u.jsxs)("form",{className:x,onSubmit:function(r){r.preventDefault();e((0,i.RZ)(1)),e((0,i.Rm)(a)),e((0,v.N)({page:1,limit:4,locationFilter:a}))},children:[(0,u.jsxs)("div",{className:C,children:[(0,u.jsx)("p",{className:j,children:"Location"}),(0,u.jsxs)("div",{className:b,children:[(0,u.jsx)("input",{className:y,id:"location",name:"location",type:"input",autoComplete:"off",placeholder:"City",value:a,onChange:function(a){return r=a.target.value,void e((0,i.fJ)(r));var r}}),(0,u.jsx)("div",{className:N,children:(0,u.jsx)(t.l,{icon:"location"})})]})]}),(0,u.jsx)("p",{className:k,children:"Filters"}),(0,u.jsx)(g,{filterGroup:"Vehicle equipment",filters:{TV:"AC",CD:"CD",radio:"Radio",shower:"Shower",toilet:"Toilet",bathroom:"bathroom",freezer:"Freezer",hob:"hob",microwave:"Microwave"}}),(0,u.jsx)(g,{filterGroup:"Vehicle type",filters:{panelTruck:"Van",fullyIntegrated:"Fully Integrated",alcove:"Alcove"}}),(0,u.jsx)("span",{className:w}),(0,u.jsx)("button",{className:S,children:"Search"})]})})},B=r(9872),L=r(9900),I="Loader_container__X02md",V=function(){return(0,u.jsx)("div",{className:I,children:(0,u.jsx)(L.Yt,{height:"80",width:"80",ariaLabel:"magnifying-glass-loading",wrapperStyle:{},wrapperClass:"magnifying-glass-wrapper",glassColor:"#c0efff",color:"#475467"})})},R=r(2791),T="CatalogList_container__gdKcM",A="CatalogList_list__xFnLi",z="CatalogList_button__rYHiQ",D=function(){var e=(0,n.I0)(),a=(0,n.v9)(f.kX),r=(0,n.v9)(f.NH),t=(0,n.v9)(f.zh),l=(0,n.v9)(f.Ai),o=(0,n.v9)(f.Q$),s=(0,n.v9)(f.Sn),c=(0,n.v9)(f.Rq),h=(0,n.v9)(f.Wi);(0,R.useEffect)((function(){e((0,v.N)({page:o,limit:4,location:s}))}),[e,o,s]);var _={panelTruck:"Van",fullyIntegrated:"Fully Integrated",alcove:"Alcove"},d={airConditioner:"Air conditioner",bathroom:"bathroom",kitchen:"kitchen",beds:"beds",TV:"AC",CD:"CD",radio:"Radio",shower:"Shower",toilet:"Toilet",freezer:"Freezer",hob:"hob",microwave:"Microwave",gas:"Gas",water:"Water",adults:"adults",children:"children",engine:"petrol",transmission:"automatic"},m=function(e){return e.filter((function(e){return!(a=e.location)||!c||a.toLowerCase().includes(c.toLowerCase());var a})).filter((function(e){return function(e){var a=Object.keys(_),r=h.filter((function(e){return a.includes(e)}));if(r.length>0&&!r.includes(e.form))return!1;var t=Object.keys(d);return h.filter((function(e){return t.includes(e)})).every((function(a){var r=e.details[a];return r&&r>0}))}(e)}))}(a);return(0,u.jsxs)("div",{className:T,children:[t,0!==a.length&&(0,u.jsx)("ul",{className:A,children:m.map((function(e){return(0,u.jsx)(B.m,{camper:e},e._id)}))}),0===m.length&&!r&&(0,u.jsx)("p",{children:"There is no camper to match your requirements"}),r&&(0,u.jsx)(V,{}),0!==m.length&&l&&(0,u.jsx)("button",{className:z,type:"button",onClick:function(){e((0,i.RZ)(o+1))},children:"Load more"})]})},Z=r(8167),G="CatalogPage_container__w3ZO8",H="CatalogPage_campers__7jraH",K=function(){var e=(0,n.v9)(f.Xw);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:G,children:[(0,u.jsx)(F,{}),(0,u.jsx)("div",{className:H,children:(0,u.jsx)(D,{})})]}),e&&(0,u.jsx)(Z.T,{})]})}}}]);
//# sourceMappingURL=249.4b59f4d2.chunk.js.map