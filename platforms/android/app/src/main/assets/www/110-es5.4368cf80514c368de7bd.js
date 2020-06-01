function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function asyncGeneratorStep(t,e,n,i,a,r,o){try{var s=t[r](o),l=s.value}catch(d){return void n(d)}s.done?e(l):Promise.resolve(l).then(i,a)}function _asyncToGenerator(t){return function(){var e=this,n=arguments;return new Promise((function(i,a){var r=t.apply(e,n);function o(t){asyncGeneratorStep(r,i,a,o,s,"next",t)}function s(t){asyncGeneratorStep(r,i,a,o,s,"throw",t)}o(void 0)}))}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function _defineProperties(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function _createClass(t,e,n){return e&&_defineProperties(t.prototype,e),n&&_defineProperties(t,n),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[110],{"5g9+":function(t,e,n){"use strict";n.r(e),n.d(e,"ion_range",(function(){return o}));var i=n("dSyh"),a=(n("AfW+"),n("aiEM")),r=n("Dl6n"),o=function(){function t(e){var n=this;_classCallCheck(this,t),Object(i.l)(this,e),this.noUpdate=!1,this.hasFocus=!1,this.ratioA=0,this.ratioB=0,this.debounce=0,this.name="",this.dualKnobs=!1,this.min=0,this.max=100,this.pin=!1,this.snaps=!1,this.step=1,this.ticks=!0,this.disabled=!1,this.value=0,this.clampBounds=function(t){return Object(a.c)(n.min,t,n.max)},this.ensureValueInBounds=function(t){return n.dualKnobs?{lower:n.clampBounds(t.lower),upper:n.clampBounds(t.upper)}:n.clampBounds(t)},this.handleKeyboard=function(t,e){var i=n.step;i=i>0?i:1,i/=n.max-n.min,e||(i*=-1),"A"===t?n.ratioA=Object(a.c)(0,n.ratioA+i,1):n.ratioB=Object(a.c)(0,n.ratioB+i,1),n.updateValue()},this.onBlur=function(){n.hasFocus&&(n.hasFocus=!1,n.ionBlur.emit(),n.emitStyle())},this.onFocus=function(){n.hasFocus||(n.hasFocus=!0,n.ionFocus.emit(),n.emitStyle())},this.ionChange=Object(i.d)(this,"ionChange",7),this.ionStyle=Object(i.d)(this,"ionStyle",7),this.ionFocus=Object(i.d)(this,"ionFocus",7),this.ionBlur=Object(i.d)(this,"ionBlur",7)}var e;return _createClass(t,[{key:"debounceChanged",value:function(){this.ionChange=Object(a.d)(this.ionChange,this.debounce)}},{key:"minChanged",value:function(){this.noUpdate||this.updateRatio()}},{key:"maxChanged",value:function(){this.noUpdate||this.updateRatio()}},{key:"disabledChanged",value:function(){this.gesture&&this.gesture.setDisabled(this.disabled),this.emitStyle()}},{key:"valueChanged",value:function(t){this.noUpdate||this.updateRatio(),t=this.ensureValueInBounds(t),this.ionChange.emit({value:t})}},{key:"connectedCallback",value:function(){this.updateRatio(),this.debounceChanged(),this.disabledChanged()}},{key:"disconnectedCallback",value:function(){this.gesture&&(this.gesture.destroy(),this.gesture=void 0)}},{key:"componentDidLoad",value:(e=_asyncToGenerator(regeneratorRuntime.mark((function t(){var e,i=this;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e=this.rangeSlider,t.t0=e,!t.t0){t.next=8;break}return t.next=5,Promise.resolve().then(n.bind(null,"mUkt"));case 5:t.t1={el:e,gestureName:"range",gesturePriority:100,threshold:0,onStart:function(t){return i.onStart(t)},onMove:function(t){return i.onMove(t)},onEnd:function(t){return i.onEnd(t)}},this.gesture=t.sent.createGesture(t.t1),this.gesture.setDisabled(this.disabled);case 8:case"end":return t.stop()}}),t,this)}))),function(){return e.apply(this,arguments)})},{key:"getValue",value:function(){var t=this.value||0;return this.dualKnobs?"object"==typeof t?t:{lower:0,upper:t}:"object"==typeof t?t.upper:t}},{key:"emitStyle",value:function(){this.ionStyle.emit({interactive:!0,"interactive-disabled":this.disabled})}},{key:"onStart",value:function(t){var e=this.rect=this.rangeSlider.getBoundingClientRect(),n=t.currentX,i=Object(a.c)(0,(n-e.left)/e.width,1);"rtl"===document.dir&&(i=1-i),this.pressedKnob=!this.dualKnobs||Math.abs(this.ratioA-i)<Math.abs(this.ratioB-i)?"A":"B",this.setFocus(this.pressedKnob),this.update(n)}},{key:"onMove",value:function(t){this.update(t.currentX)}},{key:"onEnd",value:function(t){this.update(t.currentX),this.pressedKnob=void 0}},{key:"update",value:function(t){var e=this.rect,n=Object(a.c)(0,(t-e.left)/e.width,1);"rtl"===document.dir&&(n=1-n),this.snaps&&(n=d(l(n,this.min,this.max,this.step),this.min,this.max)),"A"===this.pressedKnob?this.ratioA=n:this.ratioB=n,this.updateValue()}},{key:"updateRatio",value:function(){var t=this.getValue(),e=this.min,n=this.max;this.dualKnobs?(this.ratioA=d(t.lower,e,n),this.ratioB=d(t.upper,e,n)):this.ratioA=d(t,e,n)}},{key:"updateValue",value:function(){this.noUpdate=!0;var t=this.valA,e=this.valB;this.value=this.dualKnobs?{lower:Math.min(t,e),upper:Math.max(t,e)}:t,this.noUpdate=!1}},{key:"setFocus",value:function(t){if(this.el.shadowRoot){var e=this.el.shadowRoot.querySelector("A"===t?".range-knob-a":".range-knob-b");e&&e.focus()}}},{key:"render",value:function(){var t,e,n=this,o=this.min,l=this.max,h=this.step,u=this.el,c=this.handleKeyboard,b=this.pressedKnob,g=this.disabled,p=this.pin,m=this.ratioLower,f=this.ratioUpper,k=Object(i.e)(this),v="rtl"===document.dir,x=v?"right":"left",y=function(t){return _defineProperty({},x,t[x])},w=(_defineProperty(t={},x,"".concat(100*m,"%")),_defineProperty(t,v?"left":"right","".concat(100-100*f,"%")),t),j=[];if(this.snaps&&this.ticks)for(var O=o;O<=l;O+=h){var B=d(O,o,l),A={ratio:B,active:B>=m&&B<=f};A[x]="".concat(100*B,"%"),j.push(A)}return Object(a.a)(!0,u,this.name,JSON.stringify(this.getValue()),g),Object(i.i)(i.a,{onFocusin:this.onFocus,onFocusout:this.onBlur,class:Object.assign(Object.assign({},Object(r.a)(this.color)),(e={},_defineProperty(e,k,!0),_defineProperty(e,"in-item",Object(r.c)("ion-item",u)),_defineProperty(e,"range-disabled",g),_defineProperty(e,"range-pressed",void 0!==b),_defineProperty(e,"range-has-pin",p),e))},Object(i.i)("slot",{name:"start"}),Object(i.i)("div",{class:"range-slider",ref:function(t){return n.rangeSlider=t}},j.map((function(t){return Object(i.i)("div",{style:y(t),role:"presentation",class:{"range-tick":!0,"range-tick-active":t.active}})})),Object(i.i)("div",{class:"range-bar",role:"presentation"}),Object(i.i)("div",{class:"range-bar range-bar-active",role:"presentation",style:w}),s(v,{knob:"A",pressed:"A"===b,value:this.valA,ratio:this.ratioA,pin:p,disabled:g,handleKeyboard:c,min:o,max:l}),this.dualKnobs&&s(v,{knob:"B",pressed:"B"===b,value:this.valB,ratio:this.ratioB,pin:p,disabled:g,handleKeyboard:c,min:o,max:l})),Object(i.i)("slot",{name:"end"}))}},{key:"valA",get:function(){return l(this.ratioA,this.min,this.max,this.step)}},{key:"valB",get:function(){return l(this.ratioB,this.min,this.max,this.step)}},{key:"ratioLower",get:function(){return this.dualKnobs?Math.min(this.ratioA,this.ratioB):0}},{key:"ratioUpper",get:function(){return this.dualKnobs?Math.max(this.ratioA,this.ratioB):this.ratioA}},{key:"el",get:function(){return Object(i.f)(this)}}],[{key:"watchers",get:function(){return{debounce:["debounceChanged"],min:["minChanged"],max:["maxChanged"],disabled:["disabledChanged"],value:["valueChanged"]}}},{key:"style",get:function(){return":host{--knob-handle-size:calc(var(--knob-size) * 2);display:-ms-flexbox;display:flex;position:relative;-ms-flex:3;flex:3;-ms-flex-align:center;align-items:center;font-family:var(--ion-font-family,inherit);-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;z-index:2}:host(.range-disabled){pointer-events:none}::slotted(ion-label){-ms-flex:initial;flex:initial}::slotted(ion-icon[slot]){font-size:24px}.range-slider{position:relative;-ms-flex:1;flex:1;width:100%;height:var(--height);contain:size layout style;cursor:-webkit-grab;cursor:grab;-ms-touch-action:pan-y;touch-action:pan-y}:host(.range-pressed) .range-slider{cursor:-webkit-grabbing;cursor:grabbing}.range-pin{position:absolute;background:var(--ion-color-base);color:var(--ion-color-contrast);-webkit-box-sizing:border-box;box-sizing:border-box}.range-knob-handle{left:0;top:calc((var(--height) - var(--knob-handle-size)) / 2);margin-left:calc(0px - var(--knob-handle-size) / 2);position:absolute;width:var(--knob-handle-size);height:var(--knob-handle-size);text-align:center}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{right:unset;right:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-knob-handle{margin-left:unset;-webkit-margin-start:calc(0px - var(--knob-handle-size) / 2);margin-inline-start:calc(0px - var(--knob-handle-size) / 2)}}:host-context([dir=rtl]) .range-knob-handle,[dir=rtl] .range-knob-handle{left:unset}.range-knob-handle:active,.range-knob-handle:focus{outline:none}.range-bar{border-radius:var(--bar-border-radius);left:0;top:calc((var(--height) - var(--bar-height)) / 2);position:absolute;width:100%;height:var(--bar-height);background:var(--bar-background);pointer-events:none}:host-context([dir=rtl]) .range-bar,[dir=rtl] .range-bar{right:unset;right:0;left:unset}.range-knob{border-radius:var(--knob-border-radius);left:calc(50% - var(--knob-size) / 2);top:calc(50% - var(--knob-size) / 2);position:absolute;width:var(--knob-size);height:var(--knob-size);background:var(--knob-background);-webkit-box-shadow:var(--knob-box-shadow);box-shadow:var(--knob-box-shadow);z-index:2;pointer-events:none}:host-context([dir=rtl]) .range-knob,[dir=rtl] .range-knob{right:unset;right:calc(50% - var(--knob-size) / 2);left:unset}:host(.range-pressed) .range-bar-active{will-change:left,right}:host(.in-item){width:100%}:host(.in-item) ::slotted(ion-label){-ms-flex-item-align:center;align-self:center}:host{--knob-border-radius:50%;--knob-background:#fff;--knob-box-shadow:0 3px 1px rgba(0,0,0,0.1),0 4px 8px rgba(0,0,0,0.13),0 0 0 1px rgba(0,0,0,0.02);--knob-size:28px;--bar-height:2px;--bar-background:rgba(var(--ion-text-color-rgb,0,0,0),0.1);--bar-background-active:var(--ion-color-primary,#3880ff);--bar-border-radius:0;--height:42px;padding-left:16px;padding-right:16px;padding-top:8px;padding-bottom:8px}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){:host{padding-left:unset;padding-right:unset;-webkit-padding-start:16px;padding-inline-start:16px;-webkit-padding-end:16px;padding-inline-end:16px}}:host(.ion-color) .range-bar-active,:host(.ion-color) .range-tick-active{background:var(--ion-color-base)}::slotted([slot=start]){margin-left:0;margin-right:16px;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=start]){margin-left:unset;margin-right:unset;-webkit-margin-start:0;margin-inline-start:0;-webkit-margin-end:16px;margin-inline-end:16px}}::slotted([slot=end]){margin-left:16px;margin-right:0;margin-top:0;margin-bottom:0}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){::slotted([slot=end]){margin-left:unset;margin-right:unset;-webkit-margin-start:16px;margin-inline-start:16px;-webkit-margin-end:0;margin-inline-end:0}}:host(.range-has-pin){padding-top:20px}.range-bar-active{bottom:0;width:auto;background:var(--bar-background-active)}.range-tick{margin-left:-1px;border-radius:0;position:absolute;top:18px;width:2px;height:8px;background:rgba(var(--ion-text-color-rgb,0,0,0),.1);pointer-events:none}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-tick{margin-left:unset;-webkit-margin-start:-1px;margin-inline-start:-1px}}.range-tick-active{background:var(--bar-background-active)}.range-pin{-webkit-transform:translate3d(0,28px,0) scale(.01);transform:translate3d(0,28px,0) scale(.01);padding-left:8px;padding-right:8px;padding-top:8px;padding-bottom:8px;display:inline-block;position:relative;top:-20px;min-width:28px;-webkit-transition:-webkit-transform .12s ease;transition:-webkit-transform .12s ease;transition:transform .12s ease;transition:transform .12s ease,-webkit-transform .12s ease;background:transparent;color:var(--ion-text-color,#000);font-size:12px;text-align:center}@supports ((-webkit-margin-start:0) or (margin-inline-start:0)) or (-webkit-margin-start:0){.range-pin{padding-left:unset;padding-right:unset;-webkit-padding-start:8px;padding-inline-start:8px;-webkit-padding-end:8px;padding-inline-end:8px}}.range-knob-pressed .range-pin{-webkit-transform:translateZ(0) scale(1);transform:translateZ(0) scale(1)}:host(.range-disabled){opacity:.5}"}}]),t}(),s=function(t,e){var n,a=e.knob,r=e.value,o=e.ratio,s=e.min,l=e.max,d=e.disabled,h=e.pressed,u=e.pin,c=e.handleKeyboard,b=t?"right":"left";return Object(i.i)("div",{onKeyDown:function(t){var e=t.key;"ArrowLeft"===e||"ArrowDown"===e?(c(a,!1),t.preventDefault(),t.stopPropagation()):"ArrowRight"!==e&&"ArrowUp"!==e||(c(a,!0),t.preventDefault(),t.stopPropagation())},class:{"range-knob-handle":!0,"range-knob-a":"A"===a,"range-knob-b":"B"===a,"range-knob-pressed":h,"range-knob-min":r===s,"range-knob-max":r===l},style:(n={},n[b]="".concat(100*o,"%"),n),role:"slider",tabindex:d?-1:0,"aria-valuemin":s,"aria-valuemax":l,"aria-disabled":d?"true":null,"aria-valuenow":r},u&&Object(i.i)("div",{class:"range-pin",role:"presentation"},Math.round(r)),Object(i.i)("div",{class:"range-knob",role:"presentation"}))},l=function(t,e,n,i){var r=(n-e)*t;return i>0&&(r=Math.round(r/i)*i+e),Object(a.c)(e,r,n)},d=function(t,e,n){return Object(a.c)(0,(t-e)/(n-e),1)}}}]);