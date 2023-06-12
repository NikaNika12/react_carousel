(this.webpackJsonpreact_carousel=this.webpackJsonpreact_carousel||[]).push([[0],{14:function(t,e,n){},15:function(t,e,n){},17:function(t,e,n){"use strict";n.r(e);var i=n(9),a=n.n(i),s=n(2),r=n(8),c=n(3),o=n(4),l=n(6),m=n(5),u=n(1),p=n.n(u),d=(n(14),n(15),n(0)),h=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={position:0},t.getInfinitePosition=function(e){t.setState((function(t){return{position:t.position+(e-t.position)}}))},t.nextSliderHandler=function(){var e=t.props,n=e.images,i=e.itemWidth,a=e.step,s=e.frameSize,r=e.infinite,c=(n.length-s)*i;t.state.position+i*a<c?t.setState((function(t){return{position:t.position+i*a}})):t.state.position===c&&r?t.setState({position:0}):t.getInfinitePosition(c)},t.prevSliderHandler=function(){var e=t.props,n=e.images,i=e.itemWidth,a=e.frameSize,s=e.step,r=e.infinite,c=(n.length-a)*i;t.state.position-i*s>0?t.setState((function(t){return{position:t.position-i*s}})):0===t.state.position&&r?t.getInfinitePosition(c):t.setState({position:0})},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this,e=this.props,n=e.images,i=e.frameSize,a=e.itemWidth,s=e.animationDuration;return Object(d.jsxs)("div",{className:"Carousel",children:[Object(d.jsx)("ul",{style:{width:"".concat(i*a-1,"px")},className:"Carousel__list",children:n.map((function(e,n){return Object(d.jsx)("li",{style:{width:"".concat(a,"px"),height:"".concat(a,"px")},children:Object(d.jsx)("img",{className:"Image",src:e,alt:"".concat(n+1),width:a,height:a,style:{transition:"transform ".concat(s,"ms"),transform:"translateX(-".concat(t.state.position,"px)")}})},e)}))}),Object(d.jsxs)("div",{className:"Carousel__buttons",children:[Object(d.jsx)("button",{className:"Carousel__button",type:"button",onClick:this.prevSliderHandler,children:"Prev"}),Object(d.jsx)("button",{className:"Carousel__button",type:"button","data-cy":"next",onClick:this.nextSliderHandler,children:"Next"})]})]})}}]),n}(p.a.Component),j=function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(c.a)(this,n);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={images:["./img/1.png","./img/2.png","./img/3.png","./img/4.png","./img/5.png","./img/6.png","./img/7.png","./img/8.png","./img/9.png","./img/10.png"],step:3,frameSize:3,itemWidth:130,animationDuration:1e3,infinite:!1},t.changeValueHandler=function(e){t.setState((function(t){return Object(r.a)(Object(r.a)({},t),{},Object(s.a)({},e.target.name,+e.target.value))}))},t.infiniteHandler=function(){t.setState((function(t){return{infinite:!t.infinite}}))},t}return Object(o.a)(n,[{key:"render",value:function(){var t=this.state,e=t.images,n=t.step,i=t.frameSize,a=t.itemWidth,s=t.animationDuration,r=t.infinite;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{"data-cy":"title",className:"App__title",children:"Carousel with ".concat(e.length," images")}),Object(d.jsx)(h,{images:e,step:n,frameSize:i,itemWidth:a,animationDuration:s,infinite:r}),Object(d.jsxs)("form",{action:"",method:"get",className:"Form",children:[Object(d.jsxs)("div",{className:"Form__inputs",children:[Object(d.jsx)("label",{htmlFor:"widthId",children:"Item width:"}),Object(d.jsx)("input",{id:"widthId",type:"number",className:"Form__input",name:"itemWidth",value:a,min:"0",onChange:this.changeValueHandler})]}),Object(d.jsxs)("div",{className:"Form__inputs",children:[Object(d.jsx)("label",{htmlFor:"frameId",children:"Frame size:"}),Object(d.jsx)("input",{id:"frameId",type:"number",className:"Form__input",name:"frameSize",value:i,min:"1",max:e.length,onChange:this.changeValueHandler})]}),Object(d.jsxs)("div",{className:"Form__inputs",children:[Object(d.jsx)("label",{htmlFor:"stepId",children:"Step:"}),Object(d.jsx)("input",{id:"stepId",type:"number",className:"Form__input",name:"step",value:n,min:"1",max:e.length-i,onChange:this.changeValueHandler})]}),Object(d.jsxs)("div",{className:"Form__inputs",children:[Object(d.jsx)("label",{htmlFor:"animationId",children:"Animation duration:"}),Object(d.jsx)("input",{id:"animationId",type:"number",className:"Form__input",name:"animationDuration",value:s,onChange:this.changeValueHandler})]}),Object(d.jsxs)("div",{className:"Form__inputs",children:[Object(d.jsx)("label",{htmlFor:"infiniteId",children:"Infinite"}),Object(d.jsx)("input",{id:"infiniteId",type:"checkbox",className:"Form__input",name:"infinite",checked:r,onChange:this.infiniteHandler})]})]})]})}}]),n}(p.a.Component),b=j;a.a.render(Object(d.jsx)(b,{}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.a9ef2366.chunk.js.map