"use strict";(self.webpackChunkhyper_react=self.webpackChunkhyper_react||[]).push([[4382],{80640:function(e,t,n){n(72791);var i=n(89743),a=n(2677),r=n(2461),o=n(80184);t.Z=function(e){return(0,o.jsx)(i.Z,{children:(0,o.jsx)(a.Z,{children:(0,o.jsxs)("div",{className:"page-title-box",children:[(0,o.jsx)("div",{className:"page-title-right",children:(0,o.jsxs)(r.Z,{listProps:{className:"m-0"},children:[(0,o.jsx)(r.Z.Item,{href:"/",children:"Stickynote"}),e.breadCrumbItems.map((function(e,t){return e.active?(0,o.jsx)(r.Z.Item,{active:!0,children:e.label},t):(0,o.jsx)(r.Z.Item,{href:e.path,children:e.label},t)}))]})}),(0,o.jsx)("h4",{className:"page-title",children:e.title})]})})})}},24382:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var i=n(72791),a=n(89743),r=n(2677),o=n(9140);function l(e){return l="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},l(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function c(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function u(e,t,n){return t&&c(e.prototype,t),n&&c(e,n),e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p.apply(this,arguments)}function h(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{},i=Object.keys(n);"function"===typeof Object.getOwnPropertySymbols&&(i=i.concat(Object.getOwnPropertySymbols(n).filter((function(e){return Object.getOwnPropertyDescriptor(n,e).enumerable})))),i.forEach((function(t){d(e,t,n[t])}))}return e}function m(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&y(e,t)}function f(e){return f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},f(e)}function y(e,t){return y=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},y(e,t)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(e,t){return!t||"object"!==typeof t&&"function"!==typeof t?b(e):t}var x={display:"inline-block",borderRadius:"50%",border:"5px double white",width:30,height:30},g={empty:h({},x,{backgroundColor:"#ccc"}),full:h({},x,{backgroundColor:"black"}),placeholder:h({},x,{backgroundColor:"red"})},j=function(e){return i.isValidElement(e)?e:"object"===l(e)&&null!==e?i.createElement("span",{style:e}):"[object String]"===Object.prototype.toString.call(e)?i.createElement("span",{className:e}):void 0},Z=function(e){function t(){return s(this,t),v(this,f(t).apply(this,arguments))}return m(t,e),u(t,[{key:"render",value:function(){var e,t=this.props,n=t.index,a=t.inactiveIcon,r=t.activeIcon,o=t.percent,l=t.direction,s=t.readonly,c=t.onClick,u=t.onMouseMove,p=j(a),h=o<100?{}:{visibility:"hidden"},m=j(r),f=(d(e={display:"inline-block",position:"absolute",overflow:"hidden",top:0},"rtl"===l?"right":"left",0),d(e,"width","".concat(o,"%")),e),y={cursor:s?"inherit":"pointer",display:"inline-block",position:"relative"};function b(e){u&&u(n,e)}function v(e){c&&(e.preventDefault(),c(n,e))}return i.createElement("span",{style:y,onClick:v,onMouseMove:b,onTouchMove:b,onTouchEnd:v},i.createElement("span",{style:h},p),i.createElement("span",{style:f},m))}}]),t}(i.PureComponent),S=function(e){function t(e){var n;return s(this,t),(n=v(this,f(t).call(this,e))).state={displayValue:n.props.value,interacting:!1},n.onMouseLeave=n.onMouseLeave.bind(b(b(n))),n.symbolMouseMove=n.symbolMouseMove.bind(b(b(n))),n.symbolClick=n.symbolClick.bind(b(b(n))),n}return m(t,e),u(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){var t=this.props.value!==e.value;this.setState((function(n){return{displayValue:t?e.value:n.displayValue}}))}},{key:"componentDidUpdate",value:function(e,t){if(e.value===this.props.value)return t.interacting&&!this.state.interacting?this.props.onHover():void(this.state.interacting&&this.props.onHover(this.state.displayValue))}},{key:"symbolClick",value:function(e,t){var n=this.calculateDisplayValue(e,t);this.props.onClick(n,t)}},{key:"symbolMouseMove",value:function(e,t){var n=this.calculateDisplayValue(e,t);this.setState({interacting:!this.props.readonly,displayValue:n})}},{key:"onMouseLeave",value:function(){this.setState({displayValue:this.props.value,interacting:!1})}},{key:"calculateDisplayValue",value:function(e,t){var n=this.calculateHoverPercentage(t),i=Math.ceil(n%1*this.props.fractions)/this.props.fractions,a=Math.pow(10,3),r=e+(Math.floor(n)+Math.floor(i*a)/a);return r>0?r>this.props.totalSymbols?this.props.totalSymbols:r:1/this.props.fractions}},{key:"calculateHoverPercentage",value:function(e){var t=e.nativeEvent.type.indexOf("touch")>-1?e.nativeEvent.type.indexOf("touchend")>-1?e.changedTouches[0].clientX:e.touches[0].clientX:e.clientX,n=e.target.getBoundingClientRect(),i="rtl"===this.props.direction?n.right-t:t-n.left;return i<0?0:i/n.width}},{key:"render",value:function(){var e,t=this.props,n=t.readonly,a=t.quiet,r=t.totalSymbols,o=t.value,l=t.placeholderValue,s=t.direction,c=t.emptySymbol,u=t.fullSymbol,d=t.placeholderSymbol,m=t.className,f=t.id,y=t.style,b=t.tabIndex,v=this.state,x=v.displayValue,g=v.interacting,j=[],S=[].concat(c),k=[].concat(u),C=[].concat(d),N=0!==l&&0===o&&!g;e=N?l:a?o:x;for(var w=Math.floor(e),M=0;M<r;M++){var P=void 0;P=M-w<0?100:M-w===0?100*(e-M):0,j.push(i.createElement(Z,p({key:M,index:M,readonly:n,inactiveIcon:S[M%S.length],activeIcon:N?C[M%k.length]:k[M%k.length],percent:P,direction:s},!n&&{onClick:this.symbolClick,onMouseMove:this.symbolMouseMove,onTouchMove:this.symbolMouseMove,onTouchEnd:this.symbolClick})))}return i.createElement("span",p({id:f,style:h({},y,{display:"inline-block",direction:s}),className:m,tabIndex:b,"aria-label":this.props["aria-label"]},!n&&{onMouseLeave:this.onMouseLeave}),j)}}]),t}(i.PureComponent);function k(){}k._name="react_rating_noop";var C=function(e){function t(e){var n;return s(this,t),(n=v(this,f(t).call(this,e))).state={value:e.initialRating},n.handleClick=n.handleClick.bind(b(b(n))),n.handleHover=n.handleHover.bind(b(b(n))),n}return m(t,e),u(t,[{key:"UNSAFE_componentWillReceiveProps",value:function(e){this.setState({value:e.initialRating})}},{key:"handleClick",value:function(e,t){var n=this,i=this.translateDisplayValueToValue(e);this.props.onClick(i),this.state.value!==i&&this.setState({value:i},(function(){return n.props.onChange(n.state.value)}))}},{key:"handleHover",value:function(e){var t=void 0===e?e:this.translateDisplayValueToValue(e);this.props.onHover(t)}},{key:"translateDisplayValueToValue",value:function(e){var t=e*this.props.step+this.props.start;return t===this.props.start?t+1/this.props.fractions:t}},{key:"tranlateValueToDisplayValue",value:function(e){return void 0===e?0:(e-this.props.start)/this.props.step}},{key:"render",value:function(){var e=this.props,t=e.step,n=e.emptySymbol,a=e.fullSymbol,r=e.placeholderSymbol,o=e.readonly,l=e.quiet,s=e.fractions,c=e.direction,u=e.start,d=e.stop,p=e.id,h=e.className,m=e.style,f=e.tabIndex;return i.createElement(S,{id:p,style:m,className:h,tabIndex:f,"aria-label":this.props["aria-label"],totalSymbols:function(e,t,n){return Math.floor((t-e)/n)}(u,d,t),value:this.tranlateValueToDisplayValue(this.state.value),placeholderValue:this.tranlateValueToDisplayValue(this.props.placeholderRating),readonly:o,quiet:l,fractions:s,direction:c,emptySymbol:n,fullSymbol:a,placeholderSymbol:r,onClick:this.handleClick,onHover:this.handleHover})}}]),t}(i.PureComponent);C.defaultProps={start:0,stop:5,step:1,readonly:!1,quiet:!1,fractions:1,direction:"ltr",onHover:k,onClick:k,onChange:k,emptySymbol:g.empty,fullSymbol:g.full,placeholderSymbol:g.placeholder};var N=C,w=n(80640),M=n(80184),P=function(){return(0,M.jsxs)(M.Fragment,{children:[(0,M.jsx)(w.Z,{breadCrumbItems:[{label:"Extended UI",path:"/ui/ratings"},{label:"Ratings",path:"/ui/ratings",active:!0}],title:"Ratings"}),(0,M.jsxs)(a.Z,{children:[(0,M.jsx)(r.Z,{xl:6,children:(0,M.jsx)(o.Z,{children:(0,M.jsxs)(o.Z.Body,{children:[(0,M.jsx)("h4",{className:"header-title",children:"Default Rating"}),(0,M.jsx)("p",{className:"text-muted font-14"}),(0,M.jsx)(N,{initialRating:2,emptySymbol:"mdi mdi-star-outline font-22 text-muted",fullSymbol:"mdi mdi-star font-22 text-warning"})]})})}),(0,M.jsx)(r.Z,{xl:6,children:(0,M.jsx)(o.Z,{children:(0,M.jsxs)(o.Z.Body,{children:[(0,M.jsx)("h4",{className:"header-title",children:"Readonly Rating"}),(0,M.jsx)("p",{className:"text-muted font-14"}),(0,M.jsx)(N,{initialRating:2.5,readonly:!0,emptySymbol:"mdi mdi-star-outline font-22 text-muted",fullSymbol:"mdi mdi-star font-22 text-warning"})]})})})]}),(0,M.jsxs)(a.Z,{children:[(0,M.jsx)(r.Z,{xl:6,children:(0,M.jsx)(o.Z,{children:(0,M.jsxs)(o.Z.Body,{children:[(0,M.jsx)("h4",{className:"header-title",children:"Different Icons"}),(0,M.jsx)(N,{initialRating:2,emptySymbol:"mdi mdi-thumb-down font-22 text-muted",fullSymbol:"mdi mdi-thumb-up font-22 text-success"})]})})}),(0,M.jsx)(r.Z,{xl:6,children:(0,M.jsx)(o.Z,{children:(0,M.jsxs)(o.Z.Body,{children:[(0,M.jsx)("h4",{className:"header-title",children:"Size"}),(0,M.jsx)(N,{initialRating:2.5,emptySymbol:"mdi mdi-star-outline font-16 text-muted",fullSymbol:"mdi mdi-star font-16 text-warning"}),(0,M.jsx)(N,{initialRating:2.5,className:"ms-3",emptySymbol:"mdi mdi-star-outline font-24 text-muted",fullSymbol:"mdi mdi-star font-24 text-warning"})]})})})]}),(0,M.jsxs)(a.Z,{children:[(0,M.jsx)(r.Z,{xl:6,children:(0,M.jsx)(o.Z,{children:(0,M.jsxs)(o.Z.Body,{children:[(0,M.jsx)("h4",{className:"header-title",children:"Fractional Rating"}),(0,M.jsx)(N,{initialRating:2,emptySymbol:"mdi mdi-star-outline font-22 text-muted",fullSymbol:"mdi mdi-star font-22 text-warning",fractions:2})]})})}),(0,M.jsx)(r.Z,{xl:6,children:(0,M.jsx)(o.Z,{children:(0,M.jsxs)(o.Z.Body,{children:[(0,M.jsx)("h4",{className:"header-title",children:"Readonly Fractional Rating"}),(0,M.jsx)("p",{className:"text-muted font-14"}),(0,M.jsx)(N,{initialRating:2.5,readonly:!0,emptySymbol:"mdi mdi-star-outline font-22 text-muted",fullSymbol:"mdi mdi-star font-22 text-warning"})]})})})]})]})}},9140:function(e,t,n){n.d(t,{Z:function(){return R}});var i=n(1413),a=n(45987),r=n(81694),o=n.n(r),l=n(72791),s=n(10162),c=n(66543),u=n(27472),d=n(80184),p=["bsPrefix","className","variant","as"],h=l.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,l=e.variant,c=e.as,u=void 0===c?"img":c,h=(0,a.Z)(e,p),m=(0,s.vE)(n,"card-img");return(0,d.jsx)(u,(0,i.Z)({ref:t,className:o()(l?"".concat(m,"-").concat(l):m,r)},h))}));h.displayName="CardImg";var m=h,f=n(96040),y=["bsPrefix","className","as"],b=l.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,c=e.as,u=void 0===c?"div":c,p=(0,a.Z)(e,y),h=(0,s.vE)(n,"card-header"),m=(0,l.useMemo)((function(){return{cardHeaderBsPrefix:h}}),[h]);return(0,d.jsx)(f.Z.Provider,{value:m,children:(0,d.jsx)(u,(0,i.Z)((0,i.Z)({ref:t},p),{},{className:o()(r,h)}))})}));b.displayName="CardHeader";var v=b,x=["bsPrefix","className","bg","text","border","body","children","as"],g=(0,u.Z)("h5"),j=(0,u.Z)("h6"),Z=(0,c.Z)("card-body"),S=(0,c.Z)("card-title",{Component:g}),k=(0,c.Z)("card-subtitle",{Component:j}),C=(0,c.Z)("card-link",{Component:"a"}),N=(0,c.Z)("card-text",{Component:"p"}),w=(0,c.Z)("card-footer"),M=(0,c.Z)("card-img-overlay"),P=l.forwardRef((function(e,t){var n=e.bsPrefix,r=e.className,l=e.bg,c=e.text,u=e.border,p=e.body,h=void 0!==p&&p,m=e.children,f=e.as,y=void 0===f?"div":f,b=(0,a.Z)(e,x),v=(0,s.vE)(n,"card");return(0,d.jsx)(y,(0,i.Z)((0,i.Z)({ref:t},b),{},{className:o()(r,v,l&&"bg-".concat(l),c&&"text-".concat(c),u&&"border-".concat(u)),children:h?(0,d.jsx)(Z,{children:m}):m}))}));P.displayName="Card";var R=Object.assign(P,{Img:m,Title:S,Subtitle:k,Body:Z,Link:C,Text:N,Header:v,Footer:w,ImgOverlay:M})},96040:function(e,t,n){var i=n(72791).createContext(null);i.displayName="CardHeaderContext",t.Z=i},27472:function(e,t,n){var i=n(1413),a=n(72791),r=n(81694),o=n.n(r),l=n(80184);t.Z=function(e){return a.forwardRef((function(t,n){return(0,l.jsx)("div",(0,i.Z)((0,i.Z)({},t),{},{ref:n,className:o()(t.className,e)}))}))}}}]);
//# sourceMappingURL=4382.4a24401b.chunk.js.map