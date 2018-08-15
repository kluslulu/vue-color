webpackJsonp([0],[,function(e,t,s){"use strict";function a(e,t){var s,a=e&&e.a;!(s=e&&e.hsl?(0,i.default)(e.hsl):e&&e.hex&&e.hex.length>0?(0,i.default)(e.hex):(0,i.default)(e))||void 0!==s._a&&null!==s._a||s.setAlpha(a||1);var o=s.toHsl(),n=s.toHsv();return 0===o.s&&(n.h=o.h=e.h||e.hsl&&e.hsl.h||t||0),{hsl:o,hex:s.toHexString().toUpperCase(),hex8:s.toHex8String().toUpperCase(),rgba:s.toRgb(),hsv:n,oldHue:e.h||t||o.h,source:e.source,a:e.a||s.getAlpha()}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(20),i=function(e){return e&&e.__esModule?e:{default:e}}(o);t.default={props:["value"],data:function(){return{val:a(this.value)}},computed:{colors:{get:function(){return this.val},set:function(e){this.val=e,this.$emit("input",e)}}},watch:{value:function(e){this.val=a(e)}},methods:{colorChange:function(e,t){this.oldHue=this.colors.hsl.h,this.colors=a(e,t||this.oldHue)},isValidHex:function(e){return(0,i.default)(e).isValid()},simpleCheckForValidColor:function(e){for(var t=["r","g","b","a","h","s","l","v"],s=0,a=0,o=0;o<t.length;o++){var i=t[o];e[i]&&(s++,isNaN(e[i])||a++)}if(s===a)return e},paletteUpperCase:function(e){return e.map(function(e){return e.toUpperCase()})},isTransparent:function(e){return 0===(0,i.default)(e).getAlpha()}}}},function(e,t,s){"use strict";function a(e){s(17)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(18),i=s.n(o),n=s(19),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t,s){"use strict";function a(e){s(38)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(39),i=s.n(o),n=s(40),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t,s){"use strict";function a(e){s(45)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(46),i=s.n(o),n=s(48),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t,s){"use strict";function a(e){s(49)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(50),i=s.n(o),n=s(54),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t,s){"use strict";function a(e){s(51)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(52),i=s.n(o),n=s(53),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},,function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}var o=s(9),i=a(o),n=s(10),l=a(n);console.log(i.default.version),new i.default({el:"#app-wrap",render:function(e){return e(l.default)}})},,function(e,t,s){"use strict";function a(e){s(11)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(13),i=s.n(o),n=s(64),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t){},,function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(14),i=a(o),n=s(22),l=a(n),r=s(26),c=a(r),u=s(30),h=a(u),d=s(35),v=a(d),f=s(42),p=a(f),g=s(56),C=a(g),b=s(60),_=a(b),m={hex:"#194d33e6",hsl:{h:150,s:.5,l:.2,a:.9},hsv:{h:150,s:.66,v:.3,a:.9},rgba:{r:25,g:77,b:51,a:.9},a:.9};t.default={components:{"material-picker":i.default,"compact-picker":l.default,"grayscale-picker":c.default,"swatches-picker":h.default,"slider-picker":v.default,"sketch-picker":p.default,"chrome-picker":C.default,"photoshop-picker":_.default},data:function(){return{colors:m}},computed:{bgc:function(){return this.colors.hex}},methods:{onOk:function(){console.log("ok")},onCancel:function(){console.log("cancel")},updateValue:function(e){this.colors=e}},created:function(){}}},function(e,t,s){"use strict";function a(e){s(15)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(16),i=s.n(o),n=s(21),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t){},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(2),i=a(o),n=s(1),l=a(n);t.default={name:"Material",mixins:[l.default],components:{"ed-in":i.default},methods:{onChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"editableInput",props:{label:String,desc:String,value:[String,Number],max:Number,min:Number,arrowOffset:{type:Number,default:1}},computed:{val:{get:function(){return this.value},set:function(e){if(!(void 0!==this.max&&+e>this.max))return e;this.$refs.input.value=this.max}}},methods:{update:function(e){this.handleChange(e.target.value)},handleChange:function(e){var t={};t[this.label]=e,void 0===t.hex&&void 0===t["#"]?this.$emit("change",t):e.length>5&&this.$emit("change",t)},handleKeyDown:function(e){var t=this.val,s=Number(t);if(s){var a=this.arrowOffset||1;38===e.keyCode&&(t=s+a,this.handleChange(t),e.preventDefault()),40===e.keyCode&&(t=s-a,this.handleChange(t),e.preventDefault())}}}}},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-editable-input"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.val,expression:"val"}],ref:"input",staticClass:"vc-input__input",attrs:{"aria-label":e.desc?e.label+"("+e.desc+")":e.label},domProps:{value:e.val},on:{keydown:e.handleKeyDown,input:[function(t){t.target.composing||(e.val=t.target.value)},e.update]}}),e._v(" "),s("span",{staticClass:"vc-input__label",attrs:{for:e.label}},[e._v(e._s(e.label))]),e._v(" "),s("span",{staticClass:"vc-input__desc"},[e._v(e._s(e.desc))])])},o=[],i={render:a,staticRenderFns:o};t.a=i},,function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-material",attrs:{role:"MaterialColorPicker"}},[s("ed-in",{staticClass:"vc-material-hex",style:{borderColor:e.colors.hex},attrs:{label:"hex"},on:{change:e.onChange},model:{value:e.colors.hex,callback:function(t){e.colors.hex=t},expression:"colors.hex"}}),e._v(" "),s("div",{staticClass:"vc-material-split"},[s("div",{staticClass:"vc-material-third"},[s("ed-in",{attrs:{label:"r"},on:{change:e.onChange},model:{value:e.colors.rgba.r,callback:function(t){e.colors.rgba.r=t},expression:"colors.rgba.r"}})],1),e._v(" "),s("div",{staticClass:"vc-material-third"},[s("ed-in",{attrs:{label:"g"},on:{change:e.onChange},model:{value:e.colors.rgba.g,callback:function(t){e.colors.rgba.g=t},expression:"colors.rgba.g"}})],1),e._v(" "),s("div",{staticClass:"vc-material-third"},[s("ed-in",{attrs:{label:"b"},on:{change:e.onChange},model:{value:e.colors.rgba.b,callback:function(t){e.colors.rgba.b=t},expression:"colors.rgba.b"}})],1)])],1)},o=[],i={render:a,staticRenderFns:o};t.a=i},function(e,t,s){"use strict";function a(e){s(23)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(24),i=s.n(o),n=s(25),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t){},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(1),i=a(o),n=s(2),l=a(n),r=["#4D4D4D","#999999","#FFFFFF","#F44E3B","#FE9200","#FCDC00","#DBDF00","#A4DD00","#68CCCA","#73D8FF","#AEA1FF","#FDA1FF","#333333","#808080","#CCCCCC","#D33115","#E27300","#FCC400","#B0BC00","#68BC00","#16A5A5","#009CE0","#7B64FF","#FA28FF","#000000","#666666","#B3B3B3","#9F0500","#C45100","#FB9E00","#808900","#194D33","#0C797D","#0062B1","#653294","#AB149E"];t.default={name:"Compact",mixins:[i.default],props:{palette:{type:Array,default:function(){return r}}},components:{"ed-in":l.default},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-compact",attrs:{role:"CompactColorPicker"}},[s("ul",{staticClass:"vc-compact-colors",attrs:{role:"option"}},e._l(e.paletteUpperCase(e.palette),function(t){return s("li",{key:t,staticClass:"vc-compact-color-item",class:{"vc-compact-color-item--white":"#FFFFFF"===t},style:{background:t},attrs:{"aria-label":"Color:"+t},on:{click:function(s){e.handlerClick(t)}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-compact-dot"})])}))])},o=[],i={render:a,staticRenderFns:o};t.a=i},function(e,t,s){"use strict";function a(e){s(27)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(28),i=s.n(o),n=s(29),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(1),o=function(e){return e&&e.__esModule?e:{default:e}}(a),i=["#FFFFFF","#F2F2F2","#E6E6E6","#D9D9D9","#CCCCCC","#BFBFBF","#B3B3B3","#A6A6A6","#999999","#8C8C8C","#808080","#737373","#666666","#595959","#4D4D4D","#404040","#333333","#262626","#0D0D0D","#000000"];t.default={name:"Grayscale",mixins:[o.default],props:{palette:{type:Array,default:function(){return i}}},components:{},computed:{pick:function(){return this.colors.hex.toUpperCase()}},methods:{handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-grayscale",attrs:{role:"GrayscaleColorPicker"}},[s("ul",{staticClass:"vc-grayscale-colors",attrs:{role:"option"}},e._l(e.paletteUpperCase(e.palette),function(t){return s("li",{key:t,staticClass:"vc-grayscale-color-item",class:{"vc-grayscale-color-item--white":"#FFFFFF"==t},style:{background:t},attrs:{"aria-label":"Color:"+t},on:{click:function(s){e.handlerClick(t)}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t===e.pick,expression:"c === pick"}],staticClass:"vc-grayscale-dot"})])}))])},o=[],i={render:a,staticRenderFns:o};t.a=i},function(e,t,s){"use strict";function a(e){s(31)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(32),i=s.n(o),n=s(34),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t){},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(33),i=a(o),n=s(1),l=a(n),r=["red","pink","purple","deepPurple","indigo","blue","lightBlue","cyan","teal","green","lightGreen","lime","yellow","amber","orange","deepOrange","brown","blueGrey","black"],c=["900","700","500","300","100"],u=function(){var e=[];return r.forEach(function(t){var s=[];"black"===t.toLowerCase()||"white"===t.toLowerCase()?s=s.concat(["#000000","#FFFFFF"]):c.forEach(function(e){var a=i.default[t][e];s.push(a.toUpperCase())}),e.push(s)}),e}();t.default={name:"Swatches",mixins:[l.default],props:{palette:{type:Array,default:function(){return u}}},computed:{pick:function(){return this.colors.hex}},methods:{equal:function(e){return e.toLowerCase()===this.colors.hex.toLowerCase()},handlerClick:function(e){this.colorChange({hex:e,source:"hex"})}}}},,function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-swatches",attrs:{role:"SwatchesColorPicker","data-pick":e.pick}},[s("div",{staticClass:"vc-swatches-box",attrs:{role:"group"}},e._l(e.palette,function(t,a){return s("div",{key:a,staticClass:"vc-swatches-color-group"},e._l(t,function(t){return s("div",{key:t,class:["vc-swatches-color-it",{"vc-swatches-color--white":"#FFFFFF"===t}],style:{background:t},attrs:{"aria-label":"Color:"+t,"data-color":t},on:{click:function(s){e.handlerClick(t)}}},[s("div",{directives:[{name:"show",rawName:"v-show",value:e.equal(t),expression:"equal(c)"}],staticClass:"vc-swatches-pick"},[s("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"}},[s("path",{attrs:{d:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"}})])])])}))}))])},o=[],i={render:a,staticRenderFns:o};t.a=i},function(e,t,s){"use strict";function a(e){s(36)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(37),i=s.n(o),n=s(41),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t){},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(1),i=a(o),n=s(3),l=a(n);t.default={name:"Slider",mixins:[i.default],props:{swatches:{type:Array,default:function(){return[".80",".65",".50",".35",".20"]}}},components:{hue:l.default},computed:{activeOffset:function(){var e=this.swatches.includes("0"),t=this.swatches.includes("1"),s=this.colors.hsl;return Math.round(100*s.s)/100==.5?Math.round(100*s.l)/100:e&&0===s.l?0:t&&1===s.l?1:-1}},methods:{hueChange:function(e){this.colorChange(e)},handleSwClick:function(e,t){this.colorChange({h:this.colors.hsl.h,s:.5,l:t,source:"hsl"})}}}},function(e,t){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"Hue",props:{value:Object,direction:{type:String,default:"horizontal"}},data:function(){return{oldHue:0,pullDirection:""}},computed:{colors:function(){var e=this.value.hsl.h;return 0!==e&&e-this.oldHue>0&&(this.pullDirection="right"),0!==e&&e-this.oldHue<0&&(this.pullDirection="left"),this.oldHue=e,this.value},directionClass:function(){return{"vc-hue--horizontal":"horizontal"===this.direction,"vc-hue--vertical":"vertical"===this.direction}},pointerTop:function(){return"vertical"===this.direction?0===this.colors.hsl.h&&"right"===this.pullDirection?0:-100*this.colors.hsl.h/360+100+"%":0},pointerLeft:function(){return"vertical"===this.direction?0:0===this.colors.hsl.h&&"right"===this.pullDirection?"100%":100*this.colors.hsl.h/360+"%"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var s,a,o=this.$refs.container,i=o.clientWidth,n=o.clientHeight,l=o.getBoundingClientRect().left+window.pageXOffset,r=o.getBoundingClientRect().top+window.pageYOffset,c=e.pageX||(e.touches?e.touches[0].pageX:0),u=e.pageY||(e.touches?e.touches[0].pageY:0),h=c-l,d=u-r;"vertical"===this.direction?(d<0?s=360:d>n?s=0:(a=-100*d/n+100,s=360*a/100),this.colors.hsl.h!==s&&this.$emit("change",{h:s,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"})):(h<0?s=0:h>i?s=360:(a=100*h/i,s=360*a/100),this.colors.hsl.h!==s&&this.$emit("change",{h:s,s:this.colors.hsl.s,l:this.colors.hsl.l,a:this.colors.hsl.a,source:"hsl"}))},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:["vc-hue",e.directionClass],attrs:{role:"HuePanel"}},[s("div",{ref:"container",staticClass:"vc-hue-container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[s("div",{staticClass:"vc-hue-pointer",style:{top:e.pointerTop,left:e.pointerLeft},attrs:{role:"CurrentHuePointer"}},[s("div",{staticClass:"vc-hue-picker"})])])])},o=[],i={render:a,staticRenderFns:o};t.a=i},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-slider",attrs:{role:"SliderColorPicker"}},[s("div",{staticClass:"vc-slider-hue-warp"},[s("hue",{on:{change:e.hueChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),s("div",{staticClass:"vc-slider-swatches",attrs:{role:"group"}},e._l(e.swatches,function(t,a){return s("div",{key:a,staticClass:"vc-slider-swatch",attrs:{"data-index":a},on:{click:function(s){e.handleSwClick(a,t)}}},[s("div",{staticClass:"vc-slider-swatch-picker",class:{"vc-slider-swatch-picker--active":t==e.activeOffset,"vc-slider-swatch-picker--white":"1"===t},style:{background:"hsl("+e.colors.hsl.h+", 50%, "+100*t+"%)"},attrs:{"aria-label":"color:hsl("+e.colors.hsl.h+", 50%, "+100*t+"%)"}})])}))])},o=[],i={render:a,staticRenderFns:o};t.a=i},function(e,t,s){"use strict";function a(e){s(43)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(44),i=s.n(o),n=s(55),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t){},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(1),i=a(o),n=s(2),l=a(n),r=s(4),c=a(r),u=s(3),h=a(u),d=s(5),v=a(d),f=s(6),p=a(f),g=["#D0021B","#F5A623","#F8E71C","#8B572A","#7ED321","#417505","#BD10E0","#9013FE","#4A90E2","#50E3C2","#B8E986","#000000","#4A4A4A","#9B9B9B","#FFFFFF","rgba(0,0,0,0)"];t.default={name:"Sketch",mixins:[i.default],components:{saturation:c.default,hue:h.default,alpha:v.default,"ed-in":l.default,checkboard:p.default},props:{presetColors:{type:Array,default:function(){return g}},disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},computed:{hex:function(){var e=void 0;return e=this.colors.a<1?this.colors.hex8:this.colors.hex,e.replace("#","")},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"}},methods:{handlePreset:function(e){this.colorChange({hex:e,source:"hex"})},childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e.hex?this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"}):(e.r||e.g||e.b||e.a)&&this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}))}}}},function(e,t){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(47),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"Saturation",props:{value:Object},computed:{colors:function(){return this.value},bgColor:function(){return"hsl("+this.colors.hsv.h+", 100%, 50%)"},pointerTop:function(){return-100*this.colors.hsv.v+1+100+"%"},pointerLeft:function(){return 100*this.colors.hsv.s+"%"}},methods:{throttle:(0,o.default)(function(e,t){e(t)},20,{leading:!0,trailing:!1}),handleChange:function(e,t){!t&&e.preventDefault();var s=this.$refs.container,a=s.clientWidth,o=s.clientHeight,i=s.getBoundingClientRect().left+window.pageXOffset,n=s.getBoundingClientRect().top+window.pageYOffset,l=e.pageX||(e.touches?e.touches[0].pageX:0),r=e.pageY||(e.touches?e.touches[0].pageY:0),c=l-i,u=r-n;c<0?c=0:c>a?c=a:u<0?u=0:u>o&&(u=o);var h=c/a,d=-u/o+1;d=d>0?d:0,d=d>1?1:d,this.throttle(this.onChange,{h:this.colors.hsv.h,s:h,v:d,a:this.colors.hsv.a,source:"hsva"})},onChange:function(e){this.$emit("change",e)},handleMouseDown:function(e){window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(e){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},,function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{ref:"container",staticClass:"vc-saturation",style:{background:e.bgColor},attrs:{role:"SaturationPanel"},on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[s("div",{staticClass:"vc-saturation--white"}),e._v(" "),s("div",{staticClass:"vc-saturation--black"}),e._v(" "),s("div",{staticClass:"vc-saturation-pointer",style:{top:e.pointerTop,left:e.pointerLeft},attrs:{role:"CurrentSaturationPointer"}},[s("div",{staticClass:"vc-saturation-circle"})])])},o=[],i={render:a,staticRenderFns:o};t.a=i},function(e,t){},function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=s(6),o=function(e){return e&&e.__esModule?e:{default:e}}(a);t.default={name:"Alpha",props:{value:Object,onChange:Function},components:{checkboard:o.default},computed:{colors:function(){return this.value},gradientColor:function(){var e=this.colors.rgba,t=[e.r,e.g,e.b].join(",");return"linear-gradient(to right, rgba("+t+", 0) 0%, rgba("+t+", 1) 100%)"}},methods:{handleChange:function(e,t){!t&&e.preventDefault();var s,a=this.$refs.container,o=a.clientWidth,i=a.getBoundingClientRect().left+window.pageXOffset,n=e.pageX||(e.touches?e.touches[0].pageX:0),l=n-i;s=l<0?0:l>o?1:Math.round(100*l/o)/100,this.colors.a!==s&&this.$emit("change",{h:this.colors.hsl.h,s:this.colors.hsl.s,l:this.colors.hsl.l,a:s,source:"rgba"})},handleMouseDown:function(e){this.handleChange(e,!0),window.addEventListener("mousemove",this.handleChange),window.addEventListener("mouseup",this.handleMouseUp)},handleMouseUp:function(){this.unbindEventListeners()},unbindEventListeners:function(){window.removeEventListener("mousemove",this.handleChange),window.removeEventListener("mouseup",this.handleMouseUp)}}}},function(e,t){},function(e,t,s){"use strict";function a(e,t,s){if("undefined"==typeof document)return null;var a=document.createElement("canvas");a.width=a.height=2*s;var o=a.getContext("2d");return o?(o.fillStyle=e,o.fillRect(0,0,a.width,a.height),o.fillStyle=t,o.fillRect(0,0,s,s),o.translate(s,s),o.fillRect(0,0,s,s),a.toDataURL()):null}function o(e,t,s){var o=e+","+t+","+s;if(i[o])return i[o];var n=a(e,t,s);return i[o]=n,n}Object.defineProperty(t,"__esModule",{value:!0});var i={};t.default={name:"Checkboard",props:{size:{type:[Number,String],default:8},white:{type:String,default:"#fff"},grey:{type:String,default:"#e6e6e6"}},computed:{bgStyle:function(){return{"background-image":"url("+o(this.white,this.grey,this.size)+")"}}}}},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement;return(e._self._c||t)("div",{staticClass:"vc-checkerboard",style:e.bgStyle})},o=[],i={render:a,staticRenderFns:o};t.a=i},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"vc-alpha",attrs:{role:"HuePanel"}},[s("div",{staticClass:"vc-alpha-checkboard-wrap"},[s("checkboard")],1),e._v(" "),s("div",{staticClass:"vc-alpha-gradient",style:{background:e.gradientColor}}),e._v(" "),s("div",{ref:"container",staticClass:"vc-alpha-container",on:{mousedown:e.handleMouseDown,touchmove:e.handleChange,touchstart:e.handleChange}},[s("div",{staticClass:"vc-alpha-pointer",style:{left:100*e.colors.a+"%"},attrs:{role:"CurrentAlphaPointer"}},[s("div",{staticClass:"vc-alpha-picker"})])])])},o=[],i={render:a,staticRenderFns:o};t.a=i},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:["vc-sketch",e.disableAlpha?"vc-sketch__disable-alpha":""],attrs:{role:"SketchColorPicker"}},[s("div",{staticClass:"vc-sketch-saturation-wrap"},[s("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),s("div",{staticClass:"vc-sketch-controls"},[s("div",{staticClass:"vc-sketch-sliders"},[s("div",{staticClass:"vc-sketch-hue-wrap"},[s("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():s("div",{staticClass:"vc-sketch-alpha-wrap"},[s("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)]),e._v(" "),s("div",{staticClass:"vc-sketch-color-wrap"},[s("div",{staticClass:"vc-sketch-active-color",style:{background:e.activeColor},attrs:{"aria-label":"CurrentColor:"+e.activeColor}}),e._v(" "),s("checkboard")],1)]),e._v(" "),e.disableFields?e._e():s("div",{staticClass:"vc-sketch-field"},[s("div",{staticClass:"vc-sketch-field--double"},[s("ed-in",{attrs:{label:"hex",value:e.hex},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-sketch-field--single"},[s("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-sketch-field--single"},[s("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-sketch-field--single"},[s("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():s("div",{staticClass:"vc-sketch-field--single"},[s("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),s("div",{staticClass:"vc-sketch-presets",attrs:{role:"group"}},[e._l(e.presetColors,function(t){return[e.isTransparent(t)?s("div",{key:t,staticClass:"vc-sketch-presets-color",attrs:{"aria-label":"Color:"+t},on:{click:function(s){e.handlePreset(t)}}},[s("checkboard")],1):s("div",{key:t,staticClass:"vc-sketch-presets-color",style:{background:t},attrs:{"aria-label":"Color:"+t},on:{click:function(s){e.handlePreset(t)}}})]})],2)])},o=[],i={render:a,staticRenderFns:o};t.a=i},function(e,t,s){"use strict";function a(e){s(57)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(58),i=s.n(o),n=s(59),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t){},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(1),i=a(o),n=s(2),l=a(n),r=s(4),c=a(r),u=s(3),h=a(u),d=s(5),v=a(d),f=s(6),p=a(f);t.default={name:"Chrome",mixins:[i.default],props:{disableAlpha:{type:Boolean,default:!1},disableFields:{type:Boolean,default:!1}},components:{saturation:c.default,hue:h.default,alpha:v.default,"ed-in":l.default,checkboard:p.default},data:function(){return{fieldsIndex:0,highlight:!1}},computed:{hsl:function(){var e=this.colors.hsl,t=e.h,s=e.s,a=e.l;return{h:t.toFixed(),s:(100*s).toFixed()+"%",l:(100*a).toFixed()+"%"}},activeColor:function(){var e=this.colors.rgba;return"rgba("+[e.r,e.g,e.b,e.a].join(",")+")"},hasAlpha:function(){return this.colors.a<1}},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){if(e)if(e.hex)this.isValidHex(e.hex)&&this.colorChange({hex:e.hex,source:"hex"});else if(e.r||e.g||e.b||e.a)this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"});else if(e.h||e.s||e.l){var t=e.s?e.s.replace("%","")/100:this.colors.hsl.s,s=e.l?e.l.replace("%","")/100:this.colors.hsl.l;this.colorChange({h:e.h||this.colors.hsl.h,s:t,l:s,source:"hsl"})}},toggleViews:function(){if(this.fieldsIndex>=2)return void(this.fieldsIndex=0);this.fieldsIndex++},showHighlight:function(){this.highlight=!0},hideHighlight:function(){this.highlight=!1}}}},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:["vc-chrome",e.disableAlpha?"vc-chrome__disable-alpha":""],attrs:{role:"ChromeColorPicker"}},[s("div",{staticClass:"vc-chrome-saturation-wrap"},[s("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),s("div",{staticClass:"vc-chrome-body"},[s("div",{staticClass:"vc-chrome-controls"},[s("div",{staticClass:"vc-chrome-color-wrap"},[s("div",{staticClass:"vc-chrome-active-color",style:{background:e.activeColor}}),e._v(" "),e.disableAlpha?e._e():s("checkboard")],1),e._v(" "),s("div",{staticClass:"vc-chrome-sliders"},[s("div",{staticClass:"vc-chrome-hue-wrap"},[s("hue",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),e.disableAlpha?e._e():s("div",{staticClass:"vc-chrome-alpha-wrap"},[s("alpha",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1)])]),e._v(" "),e.disableFields?e._e():s("div",{staticClass:"vc-chrome-fields-wrap"},[s("div",{directives:[{name:"show",rawName:"v-show",value:0===e.fieldsIndex,expression:"fieldsIndex === 0"}],staticClass:"vc-chrome-fields"},[s("div",{staticClass:"vc-chrome-field"},[e.hasAlpha?e._e():s("ed-in",{attrs:{label:"hex",value:e.colors.hex},on:{change:e.inputChange}}),e._v(" "),e.hasAlpha?s("ed-in",{attrs:{label:"hex",value:e.colors.hex8},on:{change:e.inputChange}}):e._e()],1)]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:1===e.fieldsIndex,expression:"fieldsIndex === 1"}],staticClass:"vc-chrome-fields"},[s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2===e.fieldsIndex,expression:"fieldsIndex === 2"}],staticClass:"vc-chrome-fields"},[s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"h",value:e.hsl.h},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"s",value:e.hsl.s},on:{change:e.inputChange}})],1),e._v(" "),s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"l",value:e.hsl.l},on:{change:e.inputChange}})],1),e._v(" "),e.disableAlpha?e._e():s("div",{staticClass:"vc-chrome-field"},[s("ed-in",{attrs:{label:"a",value:e.colors.a,"arrow-offset":.01,max:1},on:{change:e.inputChange}})],1)]),e._v(" "),s("div",{staticClass:"vc-chrome-toggle-btn",attrs:{role:"button","aria-label":"Change another color definition"},on:{click:e.toggleViews}},[s("div",{staticClass:"vc-chrome-toggle-icon"},[s("svg",{staticStyle:{width:"24px",height:"24px"},attrs:{viewBox:"0 0 24 24"},on:{mouseover:e.showHighlight,mouseenter:e.showHighlight,mouseout:e.hideHighlight}},[s("path",{attrs:{fill:"#333",d:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z"}})])]),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:e.highlight,expression:"highlight"}],staticClass:"vc-chrome-toggle-icon-highlight"})])])])])},o=[],i={render:a,staticRenderFns:o};t.a=i},function(e,t,s){"use strict";function a(e){s(61)}Object.defineProperty(t,"__esModule",{value:!0});var o=s(62),i=s.n(o),n=s(63),l=s(0),r=a,c=l(i.a,n.a,r,null,null);t.default=c.exports},function(e,t){},function(e,t,s){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var o=s(1),i=a(o),n=s(2),l=a(n),r=s(4),c=a(r),u=s(3),h=a(u),d=s(5),v=a(d);t.default={name:"Photoshop",mixins:[i.default],props:{head:{type:String,default:"Color Picker"},disableFields:{type:Boolean,default:!1},hasResetButton:{type:Boolean,default:!1},acceptLabel:{type:String,default:"OK"},cancelLabel:{type:String,default:"Cancel"},resetLabel:{type:String,default:"Reset"}},components:{saturation:c.default,hue:h.default,alpha:v.default,"ed-in":l.default},data:function(){return{currentColor:"#FFF"}},computed:{hsv:function(){var e=this.colors.hsv;return{h:e.h.toFixed(),s:(100*e.s).toFixed(),v:(100*e.v).toFixed()}},hex:function(){var e=this.colors.hex;return e&&e.replace("#","")}},created:function(){this.currentColor=this.colors.hex},methods:{childChange:function(e){this.colorChange(e)},inputChange:function(e){e&&(e["#"]?this.isValidHex(e["#"])&&this.colorChange({hex:e["#"],source:"hex"}):e.r||e.g||e.b||e.a?this.colorChange({r:e.r||this.colors.rgba.r,g:e.g||this.colors.rgba.g,b:e.b||this.colors.rgba.b,a:e.a||this.colors.rgba.a,source:"rgba"}):(e.h||e.s||e.v)&&this.colorChange({h:e.h||this.colors.hsv.h,s:e.s/100||this.colors.hsv.s,v:e.v/100||this.colors.hsv.v,source:"hsv"}))},clickCurrentColor:function(){this.colorChange({hex:this.currentColor,source:"hex"})},handleAccept:function(){this.$emit("ok")},handleCancel:function(){this.$emit("cancel")},handleReset:function(){this.$emit("reset")}}}},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{class:["vc-photoshop",e.disableFields?"vc-photoshop__disable-fields":""],attrs:{role:"PhotoShopColorPicker"}},[s("div",{staticClass:"vc-ps-head"},[e._v(e._s(e.head))]),e._v(" "),s("div",{staticClass:"vc-ps-body"},[s("div",{staticClass:"vc-ps-saturation-wrap"},[s("saturation",{on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}})],1),e._v(" "),s("div",{staticClass:"vc-ps-hue-wrap"},[s("hue",{attrs:{direction:"vertical"},on:{change:e.childChange},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}},[s("div",{staticClass:"vc-ps-hue-pointer"},[s("i",{staticClass:"vc-ps-hue-pointer--left"}),s("i",{staticClass:"vc-ps-hue-pointer--right"})])])],1),e._v(" "),s("div",{class:["vc-ps-controls",e.disableFields?"vc-ps-controls__disable-fields":""]},[s("div",{staticClass:"vc-ps-previews"},[s("div",{staticClass:"vc-ps-previews__label"},[e._v("new")]),e._v(" "),s("div",{staticClass:"vc-ps-previews__swatches"},[s("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.colors.hex},attrs:{"aria-label":"NewColor:"+e.colors.hex}}),e._v(" "),s("div",{staticClass:"vc-ps-previews__pr-color",style:{background:e.currentColor},attrs:{"aria-label":"CurrentColor:"+e.currentColor},on:{click:e.clickCurrentColor}})]),e._v(" "),s("div",{staticClass:"vc-ps-previews__label"},[e._v("current")])]),e._v(" "),e.disableFields?e._e():s("div",{staticClass:"vc-ps-actions"},[s("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":"Confirm"},on:{click:e.handleAccept}},[e._v(e._s(e.acceptLabel))]),e._v(" "),s("div",{staticClass:"vc-ps-ac-btn",attrs:{role:"button","aria-label":"Cancel"},on:{click:e.handleCancel}},[e._v(e._s(e.cancelLabel))]),e._v(" "),s("div",{staticClass:"vc-ps-fields"},[s("ed-in",{attrs:{label:"h",desc:"°",value:e.hsv.h},on:{change:e.inputChange}}),e._v(" "),s("ed-in",{attrs:{label:"s",desc:"%",value:e.hsv.s,max:100},on:{change:e.inputChange}}),e._v(" "),s("ed-in",{attrs:{label:"v",desc:"%",value:e.hsv.v,max:100},on:{change:e.inputChange}}),e._v(" "),s("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),s("ed-in",{attrs:{label:"r",value:e.colors.rgba.r},on:{change:e.inputChange}}),e._v(" "),s("ed-in",{attrs:{label:"g",value:e.colors.rgba.g},on:{change:e.inputChange}}),e._v(" "),s("ed-in",{attrs:{label:"b",value:e.colors.rgba.b},on:{change:e.inputChange}}),e._v(" "),s("div",{staticClass:"vc-ps-fields__divider"}),e._v(" "),s("ed-in",{staticClass:"vc-ps-fields__hex",attrs:{label:"#",value:e.hex},on:{change:e.inputChange}})],1),e._v(" "),e.hasResetButton?s("div",{staticClass:"vc-ps-ac-btn",attrs:{"aria-label":"reset"},on:{click:e.handleReset}},[e._v(e._s(e.resetLabel))]):e._e()])])])])},o=[],i={render:a,staticRenderFns:o};t.a=i},function(e,t,s){"use strict";var a=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{attrs:{id:"app"}},[s("a",{staticClass:"github-fork-ribbon",attrs:{href:"https://github.com/xiaokaike/vue-color",title:"Fork me on GitHub"}},[e._v("Fork me on GitHub")]),e._v(" "),s("div",{staticClass:"header-container"},[s("div",{staticClass:"header-bg",style:{"background-color":e.bgc}}),e._v(" "),s("div",{staticClass:"header"},[e._m(0),e._v(" "),s("div",{staticClass:"demo-item"},[s("chrome-picker",{attrs:{value:e.colors},on:{input:e.updateValue}}),e._v(" "),s("h2",[e._v("Chrome")])],1)])]),e._v(" "),s("div",{staticClass:"demo-container"},[s("div",{staticClass:"demo-list"},[s("div",{staticClass:"demo-item"},[s("sketch-picker",{model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),e._v(" "),s("h2",[e._v("Sketch")])],1),e._v(" "),s("div",{staticClass:"demo-item"},[s("photoshop-picker",{on:{ok:e.onOk,cancel:e.onCancel},model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),e._v(" "),s("h2",[e._v("Photoshop")])],1)]),e._v(" "),s("div",{staticClass:"demo-list"},[s("div",{staticClass:"demo-item"},[s("material-picker",{model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),e._v(" "),s("h2",[e._v("Material")])],1),e._v(" "),s("div",{staticClass:"demo-item"},[s("slider-picker",{model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),e._v(" "),s("h2",[e._v("Slider")])],1)]),e._v(" "),s("div",{staticClass:"demo-list"},[s("div",{staticClass:"demo-item"},[s("compact-picker",{model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),e._v(" "),s("h2",[e._v("Compact")]),e._v(" "),s("br"),e._v(" "),s("br"),e._v(" "),s("grayscale-picker",{attrs:{value:e.colors},on:{input:e.updateValue}}),e._v(" "),s("h2",[e._v("Grayscale")])],1),e._v(" "),s("div",{staticClass:"demo-item"},[s("swatches-picker",{model:{value:e.colors,callback:function(t){e.colors=t},expression:"colors"}}),e._v(" "),s("h2",[e._v("Swatches")])],1)])])])},o=[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"intro-wrap"},[s("div",{staticClass:"intro"},[s("h1",[e._v("Vue-color")]),e._v(" "),s("p",{attrs:{role:"presentation"}},[e._v("A Collection of Color Pickers from Sketch, Photoshop, Chrome, Github, Twitter, Material Design & more")])])])}],i={render:a,staticRenderFns:o};t.a=i}],[8]);
//# sourceMappingURL=app.cdaae61508ba9890f0e9.js.map