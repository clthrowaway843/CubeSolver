var ay=Object.defineProperty;var Rf=i=>{throw TypeError(i)};var oy=(i,e,t)=>e in i?ay(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var F=(i,e,t)=>oy(i,typeof e!="symbol"?e+"":e,t),Lu=(i,e,t)=>e.has(i)||Rf("Cannot "+t);var w=(i,e,t)=>(Lu(i,e,"read from private field"),t?t.call(i):e.get(i)),J=(i,e,t)=>e.has(i)?Rf("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(i):e.set(i,t),fe=(i,e,t,n)=>(Lu(i,e,"write to private field"),n?n.call(i,t):e.set(i,t),t),Qe=(i,e,t)=>(Lu(i,e,"access private method"),t);var Ko=(i,e,t,n)=>({set _(r){fe(i,e,r,t)},get _(){return w(i,e,n)}});(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();const ly="modulepreload",cy=function(i){return"/CubeSolver/"+i},If={},ft=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=(a==null?void 0:a.nonce)||(a==null?void 0:a.getAttribute("nonce"));r=Promise.allSettled(t.map(l=>{if(l=cy(l),l in If)return;If[l]=!0;const c=l.endsWith(".css"),u=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${u}`))return;const h=document.createElement("link");if(h.rel=c?"stylesheet":ly,c||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),c)return new Promise((d,f)=>{h.addEventListener("load",d),h.addEventListener("error",()=>f(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return r.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};var gg=class{is(i){return this instanceof i}as(i){return this instanceof i?this:null}},ir=class extends gg{constructor(){super()}get log(){return console.log.bind(console,this,this.toString())}};function uy(i,e=!0){if(!e)return i;switch(i){case 1:return-1;case-1:return 1}}function vg(i,e){return e===-1?Array.from(i).reverse():i}function hy(i){return Array.from(i).reverse()}function*dy(i,e){e===-1?yield*fy(i):yield*i}function*fy(i){for(const e of Array.from(i).reverse())yield e}var Mh=2147483647,Sh="2^31 - 1",py=-2147483648,Nr,Vm,wh=(Vm=class{constructor(){J(this,Nr,[])}push(i){w(this,Nr).push(i)}experimentalPushAlg(i){for(const e of i.childAlgNodes())this.push(e)}experimentalNumAlgNodes(){return w(this,Nr).length}toAlg(){return new Te(w(this,Nr))}reset(){fe(this,Nr,[])}},Nr=new WeakMap,Vm),Ur,zr,Kr,In=(Kr=class extends ir{constructor(t,n){super();J(this,Ur);J(this,zr);fe(this,Ur,Va(t)),fe(this,zr,Va(n))}get A(){return w(this,Ur)}get B(){return w(this,zr)}isIdentical(t){const n=t.as(Kr);return!!(n!=null&&n.A.isIdentical(this.A)&&(n!=null&&n.B.isIdentical(this.B)))}invert(){return new Kr(w(this,zr),w(this,Ur))}*experimentalExpand(t=1,n){n??(n=1/0),n===0?yield t===1?this:this.invert():t===1?(yield*this.A.experimentalExpand(1,n-1),yield*this.B.experimentalExpand(1,n-1),yield*this.A.experimentalExpand(-1,n-1),yield*this.B.experimentalExpand(-1,n-1)):(yield*this.B.experimentalExpand(1,n-1),yield*this.A.experimentalExpand(1,n-1),yield*this.B.experimentalExpand(-1,n-1),yield*this.A.experimentalExpand(-1,n-1))}toString(){return`[${w(this,Ur).toString()}, ${w(this,zr).toString()}]`}},Ur=new WeakMap,zr=new WeakMap,Kr),Hs,Ws,Qr,hn=(Qr=class extends ir{constructor(t,n){super();J(this,Hs);J(this,Ws);fe(this,Hs,Va(t)),fe(this,Ws,Va(n))}get A(){return w(this,Hs)}get B(){return w(this,Ws)}isIdentical(t){const n=t.as(Qr);return!!(n!=null&&n.A.isIdentical(this.A)&&(n!=null&&n.B.isIdentical(this.B)))}invert(){return new Qr(w(this,Hs),w(this,Ws).invert())}*experimentalExpand(t,n){n??(n=1/0),n===0?yield t===1?this:this.invert():(yield*this.A.experimentalExpand(1,n-1),yield*this.B.experimentalExpand(t,n-1),yield*this.A.experimentalExpand(-1,n-1))}toString(){return`[${this.A}: ${this.B}]`}},Hs=new WeakMap,Ws=new WeakMap,Qr),Zi,Xs,zo=(Xs=class extends ir{constructor(t){super();J(this,Zi);if(t.includes(`
`)||t.includes("\r"))throw new Error("LineComment cannot contain newline");fe(this,Zi,t)}get text(){return w(this,Zi)}isIdentical(t){const n=t;return t.is(Xs)&&w(this,Zi)===w(n,Zi)}invert(){return this}*experimentalExpand(t=1,n=1/0){yield this}toString(){return`//${w(this,Zi)}`}},Zi=new WeakMap,Xs),qr=class xg extends ir{toString(){return`
`}isIdentical(e){return e.is(xg)}invert(){return this}*experimentalExpand(e=1,t=1/0){yield this}},Mn=class yg extends ir{constructor(){super(...arguments);F(this,"experimentalNISSGrouping")}toString(){return"."}isIdentical(t){return t.is(yg)}invert(){return this}*experimentalExpand(t=1,n=1/0){yield this}};function Qo(i,e){return i?parseInt(i):e}var Lf=/^(\d+)?('?)/,my=/^[_\dA-Za-z]/,gy=/^((([1-9]\d*)-)?([1-9]\d*))?([_A-Za-z]+)/,vy=/^[^\n]*/,xy=/^(-?\d+), ?/,yy=/^(-?\d+)\)/;function _g(i){return new Id().parseAlg(i)}function _y(i){return new Id().parseMove(i)}function My(i){return new Id().parseQuantumMove(i)}function Ot(i,e,t){const n=i;return n.startCharIndex=e,n.endCharIndex=t,n}function Sy(i,e){return"startCharIndex"in i&&(e.startCharIndex=i.startCharIndex),"endCharIndex"in i&&(e.endCharIndex=i.endCharIndex),e}var ln,Ue,qs,Gm,Id=(Gm=class{constructor(){J(this,ln,"");J(this,Ue,0);J(this,qs,[])}parseAlg(i){fe(this,ln,i),fe(this,Ue,0);const e=this.parseAlgWithStopping([]);this.mustBeAtEndOfInput();const t=Array.from(e.childAlgNodes());if(w(this,qs).length>0)for(const a of w(this,qs).reverse())t.push(a);const n=new Te(t),{startCharIndex:r,endCharIndex:s}=e;return Ot(n,r,s),n}parseMove(i){fe(this,ln,i),fe(this,Ue,0);const e=this.parseMoveImpl();return this.mustBeAtEndOfInput(),e}parseQuantumMove(i){fe(this,ln,i),fe(this,Ue,0);const e=this.parseQuantumMoveImpl();return this.mustBeAtEndOfInput(),e}mustBeAtEndOfInput(){if(w(this,Ue)!==w(this,ln).length)throw new Error("parsing unexpectedly ended early")}parseAlgWithStopping(i){let e=w(this,Ue),t=w(this,Ue);const n=new wh;let r=!1;const s=a=>{if(r)throw new Error(`Unexpected character at index ${a}. Are you missing a space?`)};e:for(;w(this,Ue)<w(this,ln).length;){const a=w(this,Ue);if(i.includes(w(this,ln)[w(this,Ue)]))return Ot(n.toAlg(),e,t);if(this.tryConsumeNext(" ")){r=!1,n.experimentalNumAlgNodes()===0&&(e=w(this,Ue));continue e}else if(my.test(w(this,ln)[w(this,Ue)])){s(a);const o=this.parseMoveImpl();n.push(o),r=!0,t=w(this,Ue);continue e}else if(this.tryConsumeNext("(")){s(a);const o=this.tryRegex(xy);if(o){const l=o[1],c=w(this,Ue),u=this.parseRegex(yy),h=Ot(new z(new wi("U_SQ_"),parseInt(l)),a+1,a+1+l.length),d=Ot(new z(new wi("D_SQ_"),parseInt(u[1])),c,w(this,Ue)-1),f=Ot(new Te([h,d]),a+1,w(this,Ue)-1);n.push(Ot(new nn(f),a,w(this,Ue))),r=!0,t=w(this,Ue);continue e}else{const l=this.parseAlgWithStopping([")"]);this.mustConsumeNext(")");const c=this.parseAmount();n.push(Ot(new nn(l,c),a,w(this,Ue))),r=!0,t=w(this,Ue);continue e}}else if(this.tryConsumeNext("^")){this.mustConsumeNext("(");const o=this.parseAlgWithStopping([")"]);this.popNext();const l=new nn(o,-1),c=new Mn;l.experimentalNISSPlaceholder=c,c.experimentalNISSGrouping=l,w(this,qs).push(l),n.push(c)}else if(this.tryConsumeNext("[")){s(a);const o=this.parseAlgWithStopping([",",":"]),l=this.popNext(),c=this.parseAlgWithStopping(["]"]);this.mustConsumeNext("]");let u;switch(l){case":":{u=Ot(new hn(o,c),a,w(this,Ue)),r=!0,t=w(this,Ue);break}case",":{u=Ot(new In(o,c),a,w(this,Ue)),r=!0,t=w(this,Ue);break}default:throw new Error("unexpected parsing error")}const h=w(this,Ue),d=this.parseAmount();if(d===1)n.push(u);else{const f=Ot(new Te([u]),a,h),p=Ot(new nn(f,d),a,w(this,Ue));n.push(p)}r=!0,t=w(this,Ue);continue e}else if(this.tryConsumeNext(`
`)){n.push(Ot(new qr,a,w(this,Ue))),r=!1,t=w(this,Ue);continue e}else if(this.tryConsumeNext("/"))if(this.tryConsumeNext("/")){s(a);const[o]=this.parseRegex(vy);n.push(Ot(new zo(o),a,w(this,Ue))),r=!1,t=w(this,Ue);continue e}else{n.push(Ot(new z("_SLASH_"),a,w(this,Ue))),r=!0,t=w(this,Ue);continue e}else if(this.tryConsumeNext(".")){s(a),n.push(Ot(new Mn,a,w(this,Ue))),r=!0,t=w(this,Ue);continue e}else throw new Error(`Unexpected character: ${this.popNext()}`)}if(w(this,Ue)!==w(this,ln).length)throw new Error("did not finish parsing?");if(i.length>0)throw new Error("expected stopping");return Ot(n.toAlg(),e,t)}parseQuantumMoveImpl(){const[,,,i,e,t]=this.parseRegex(gy);return new wi(t,Qo(e,void 0),Qo(i,void 0))}parseMoveImpl(){const i=w(this,Ue);if(this.tryConsumeNext("/"))return Ot(new z("_SLASH_"),i,w(this,Ue));let e=this.parseQuantumMoveImpl(),[t,n]=this.parseAmountAndTrackEmptyAbsAmount();const r=this.parseMoveSuffix();if(r){if(t<0)throw new Error("uh-oh");if((r==="++"||r==="--")&&t!==1)throw new Error("Pochmann ++ or -- moves cannot have an amount other than 1.");if((r==="++"||r==="--")&&!n)throw new Error("Pochmann ++ or -- moves cannot have an amount written as a number.");if((r==="+"||r==="-")&&n)throw new Error("Clock dial moves must have an amount written as a natural number followed by + or -.");r.startsWith("+")&&(e=e.modified({family:`${e.family}_${r==="+"?"PLUS":"PLUSPLUS"}_`})),r.startsWith("-")&&(e=e.modified({family:`${e.family}_${r==="-"?"PLUS":"PLUSPLUS"}_`}),t*=-1)}return Ot(new z(e,t),i,w(this,Ue))}parseMoveSuffix(){return this.tryConsumeNext("+")?this.tryConsumeNext("+")?"++":"+":this.tryConsumeNext("-")?this.tryConsumeNext("-")?"--":"-":null}parseAmountAndTrackEmptyAbsAmount(){const i=w(this,Ue),[,e,t]=this.parseRegex(Lf);if(e!=null&&e.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${i}: An amount can only start with 0 if it's exactly the digit 0.`);return[Qo(e,1)*(t==="'"?-1:1),!e]}parseAmount(){const i=w(this,Ue),[,e,t]=this.parseRegex(Lf);if(e!=null&&e.startsWith("0")&&e!=="0")throw new Error(`Error at char index ${i}: An amount number can only start with 0 if it's exactly the digit 0.`);return Qo(e,1)*(t==="'"?-1:1)}parseRegex(i){const e=i.exec(this.remaining());if(e===null)throw new Error("internal parsing error");return fe(this,Ue,w(this,Ue)+e[0].length),e}tryRegex(i){const e=i.exec(this.remaining());return e===null?null:(fe(this,Ue,w(this,Ue)+e[0].length),e)}remaining(){return w(this,ln).slice(w(this,Ue))}popNext(){const i=w(this,ln)[w(this,Ue)];return Ko(this,Ue)._++,i}tryConsumeNext(i){return w(this,ln)[w(this,Ue)]===i?(Ko(this,Ue)._++,!0):!1}mustConsumeNext(i){const e=this.popNext();if(e!==i)throw new Error(`expected \`${i}\` while parsing, encountered ${e}`);return e}},ln=new WeakMap,Ue=new WeakMap,qs=new WeakMap,Gm),Pf=new Set;function Mg(i){Pf.has(i)||(console.warn(i),Pf.add(i))}var bh=class{constructor(i,e=1){F(this,"quantum");F(this,"amount");if(this.quantum=i,this.amount=e,!Number.isInteger(this.amount)||this.amount<py||this.amount>Mh)throw new Error(`AlgNode amount absolute value must be a non-negative integer below ${Sh}.`)}suffix(){let i="";const e=Math.abs(this.amount);return e!==1&&(i+=e),this.amount<0&&(i+="'"),i}isIdentical(i){return this.quantum.isIdentical(i.quantum)&&this.amount===i.amount}*experimentalExpand(i,e){const t=Math.abs(this.amount),n=uy(i,this.amount<0);for(let r=0;r<t;r++)yield*this.quantum.experimentalExpand(n,e)}},di,Ht,Wt,es,wi=(es=class extends gg{constructor(t,n,r){super();J(this,di);J(this,Ht);J(this,Wt);if(fe(this,di,t),fe(this,Ht,n??null),fe(this,Wt,r??null),Object.freeze(this),w(this,Ht)!==null&&(!Number.isInteger(w(this,Ht))||w(this,Ht)<1||w(this,Ht)>Mh))throw new Error(`QuantumMove inner layer must be a positive integer below ${Sh}.`);if(w(this,Wt)!==null&&(!Number.isInteger(w(this,Wt))||w(this,Wt)<1||w(this,Wt)>Mh))throw new Error(`QuantumMove outer layer must be a positive integer below ${Sh}.`);if(w(this,Wt)!==null&&w(this,Ht)!==null&&w(this,Ht)<=w(this,Wt))throw new Error("QuantumMove outer layer must be smaller than inner layer.");if(w(this,Wt)!==null&&w(this,Ht)===null)throw new Error("QuantumMove with an outer layer must have an inner layer")}static fromString(t){return My(t)}modified(t){return new es(t.family??w(this,di),t.innerLayer??w(this,Ht),t.outerLayer??w(this,Wt))}isIdentical(t){const n=t;return t.is(es)&&w(this,di)===w(n,di)&&w(this,Ht)===w(n,Ht)&&w(this,Wt)===w(n,Wt)}get family(){return w(this,di)}get outerLayer(){return w(this,Wt)}get innerLayer(){return w(this,Ht)}experimentalExpand(){throw new Error("experimentalExpand() cannot be called on a `QuantumMove` directly.")}toString(){let t=w(this,di);return w(this,Ht)!==null&&(t=String(w(this,Ht))+t,w(this,Wt)!==null&&(t=`${String(w(this,Wt))}-${t}`)),t}},di=new WeakMap,Ht=new WeakMap,Wt=new WeakMap,es),Vt,Si,z=(Si=class extends ir{constructor(...t){super();J(this,Vt);if(typeof t[0]=="string")if(t[1]??null){fe(this,Vt,new bh(wi.fromString(t[0]),t[1]));return}else return Si.fromString(t[0]);fe(this,Vt,new bh(t[0],t[1]))}isIdentical(t){const n=t.as(Si);return!!n&&w(this,Vt).isIdentical(w(n,Vt))}invert(){return Sy(this,new Si(w(this,Vt).quantum,-this.amount))}*experimentalExpand(t=1){t===1?yield this:yield this.modified({amount:-this.amount})}get quantum(){return w(this,Vt).quantum}modified(t){return new Si(w(this,Vt).quantum.modified(t),t.amount??this.amount)}static fromString(t){return _y(t)}get amount(){return w(this,Vt).amount}get type(){return Mg("deprecated: type"),"blockMove"}get family(){return w(this,Vt).quantum.family??void 0}get outerLayer(){return w(this,Vt).quantum.outerLayer??void 0}get innerLayer(){return w(this,Vt).quantum.innerLayer??void 0}toString(){if(this.family==="_SLASH_")return"/";if(this.family.endsWith("_PLUS_"))return w(this,Vt).quantum.toString().slice(0,-6)+Math.abs(this.amount)+(this.amount<0?"-":"+");if(this.family.endsWith("_PLUSPLUS_")){const t=Math.abs(this.amount);return w(this,Vt).quantum.toString().slice(0,-10)+(t===1?"":t)+(this.amount<0?"--":"++")}return w(this,Vt).quantum.toString()+w(this,Vt).suffix()}},Vt=new WeakMap,Si),wy=class{constructor(){F(this,"quantumU_SQ_",null);F(this,"quantumD_SQ_",null)}format(i){if(i.amount!==1)return null;const e=this.tuple(i);return e?`(${e.map(t=>t.amount).join(", ")})`:null}tuple(i){var t,n;if(i.amount!==1)return null;this.quantumU_SQ_||(this.quantumU_SQ_=new wi("U_SQ_")),this.quantumD_SQ_||(this.quantumD_SQ_=new wi("D_SQ_"));const e=i.alg;if(e.experimentalNumChildAlgNodes()===2){const[r,s]=e.childAlgNodes();if((t=r.as(z))!=null&&t.quantum.isIdentical(this.quantumU_SQ_)&&((n=s.as(z))!=null&&n.quantum.isIdentical(this.quantumD_SQ_)))return[r,s]}return null}},Pu=new wy,cn,xc,Sg,er,nn=(er=class extends ir{constructor(t,n){super();J(this,xc);J(this,cn);F(this,"experimentalNISSPlaceholder");const r=Va(t);fe(this,cn,new bh(r,n))}isIdentical(t){const n=t;return t.is(er)&&w(this,cn).isIdentical(w(n,cn))}get alg(){return w(this,cn).quantum}get amount(){return w(this,cn).amount}get experimentalRepetitionSuffix(){return w(this,cn).suffix()}invert(){const t=Pu.tuple(this);if(t){const[n,r]=t;return new er(new Te([n.invert(),r.invert()]))}return new er(w(this,cn).quantum,-w(this,cn).amount)}*experimentalExpand(t=1,n){n??(n=1/0),n===0?yield t===1?this:this.invert():yield*w(this,cn).experimentalExpand(t,n-1)}static fromString(){throw new Error("unimplemented")}toString(){return Pu.format(this)??`${Qe(this,xc,Sg).call(this)}${w(this,cn).suffix()}`}experimentalAsSquare1Tuple(){return Pu.tuple(this)}},cn=new WeakMap,xc=new WeakSet,Sg=function(){const t=w(this,cn).quantum.toString(),n=this.alg.childAlgNodes(),{value:r}=n.next();return n.next().done&&(r!=null&&r.is(In)||r!=null&&r.is(hn))?t:`(${t})`},er);function hi(i,e){return i instanceof e}function by(i){return hi(i,nn)||hi(i,zo)||hi(i,In)||hi(i,hn)||hi(i,z)||hi(i,qr)||hi(i,Mn)}function wg(i,e,t){if(e.is(nn))return i.traverseGrouping(e,t);if(e.is(z))return i.traverseMove(e,t);if(e.is(In))return i.traverseCommutator(e,t);if(e.is(hn))return i.traverseConjugate(e,t);if(e.is(Mn))return i.traversePause(e,t);if(e.is(qr))return i.traverseNewline(e,t);if(e.is(zo))return i.traverseLineComment(e,t);throw new Error("unknown AlgNode")}function bg(i){if(i.is(nn)||i.is(z)||i.is(In)||i.is(hn)||i.is(Mn)||i.is(qr)||i.is(zo))return i;throw new Error("internal error: expected AlgNode")}var ha=class{traverseAlgNode(i,e){return wg(this,i,e)}traverseIntoAlgNode(i,e){return bg(this.traverseAlgNode(i,e))}},os=class extends ha{traverseAlgNode(i){return wg(this,i,void 0)}traverseIntoAlgNode(i){return bg(this.traverseAlgNode(i))}};function An(i,e){const t=new i(...e??[]);return t.traverseAlg.bind(t)}var Ay="any-direction",Ag=class{constructor(i={}){this.config=i}cancelQuantum(){const{cancel:i}=this.config;return i===!0?Ay:i===!1?"none":(i==null?void 0:i.directional)??"none"}cancelAny(){return this.config.cancel&&this.cancelQuantum()!=="none"}cancelPuzzleSpecificModWrap(){const{cancel:i}=this.config;return i===!0||i===!1?"canonical-centered":i!=null&&i.puzzleSpecificModWrap?i==null?void 0:i.puzzleSpecificModWrap:(i==null?void 0:i.directional)==="same-direction"?"preserve-sign":"canonical-centered"}puzzleSpecificSimplifyOptions(){var i;return((i=this.config.puzzleLoader)==null?void 0:i.puzzleSpecificSimplifyOptions)??this.config.puzzleSpecificSimplifyOptions}};function Ty(i,e){return i*Math.sign(e.amount)>=0}function Tg(i,e,t=0){return((i-t)%e+e)%e+t}function Eg(i,e,t){var l;const n=new Ag(t),r=Array.from(i.childAlgNodes());let s=[e];function a(){return new Te([...r,...s])}function o(c){var p;if(n.cancelPuzzleSpecificModWrap()==="none")return c;const u=(p=n.puzzleSpecificSimplifyOptions())==null?void 0:p.quantumMoveOrder;if(!u)return c;const h=u(e.quantum);let d;switch(n.cancelPuzzleSpecificModWrap()){case"gravity":{d=-Math.floor((h-(c.amount<0?0:1))/2);break}case"canonical-centered":{d=-Math.floor((h-1)/2);break}case"canonical-positive":{d=0;break}case"preserve-sign":{d=c.amount<0?1-h:0;break}default:throw new Error("Unknown mod wrap")}const f=Tg(c.amount,h,d);return c.modified({amount:f})}if(n.cancelAny()){let c;const u=(l=n.puzzleSpecificSimplifyOptions())==null?void 0:l.axis;if(u)c=v=>u.areQuantumMovesSameAxis(e.quantum,v.quantum);else{const v=e.quantum.toString();c=g=>g.quantum.toString()===v}const h=n.cancelQuantum()==="same-direction",d=new Map;d.set(e.quantum.toString(),Math.sign(e.amount));let f;for(f=r.length-1;f>=0;f--){const v=r[f].as(z);if(!v||!c(v))break;const g=v.quantum.toString();if(h){const m=d.get(g);if(m&&!Ty(m,v))break;d.set(g,Math.sign(v.amount))}}const p=[...r.splice(f+1),e];if(u)s=u.simplifySameAxisMoves(p,n.cancelPuzzleSpecificModWrap()!=="none");else{const v=p.reduce((g,m)=>g+m.amount,0);if(d.size!==1)throw new Error("Internal error: multiple quantums when one was expected");s=[new z(e.quantum,v)]}}return s=s.map(c=>o(c)).filter(c=>c.amount!==0),a()}function Ey(i,e,t){const n=e.as(z);return n?Eg(i,n,t):new Te([...i.childAlgNodes(),e])}var yc,_n,Ah,Pa,Th,Hm,Cy=(Hm=class extends ha{constructor(){super(...arguments);J(this,_n);J(this,yc)}*traverseAlg(e,t){if(t.depth===0){yield*e.childAlgNodes();return}let n=[];const r=Qe(this,_n,Pa).call(this,t);for(const s of e.childAlgNodes())for(const a of this.traverseAlgNode(s,r))n=Array.from(Ey(new Te(n),a,r).childAlgNodes());for(const s of n)yield s}*traverseGrouping(e,t){if(t.depth===0){yield e;return}if(e.amount===0)return;const n=new nn(this.traverseAlg(e.alg,Qe(this,_n,Pa).call(this,t)),e.amount);if(n.alg.experimentalIsEmpty())return;const r=Qe(this,_n,Ah).call(this).get(e);r&&(n.experimentalNISSPlaceholder=r,r.experimentalNISSGrouping=n),yield n}*traverseMove(e,t){yield e}*traverseCommutator(e,t){if(t.depth===0){yield e;return}const n=Qe(this,_n,Pa).call(this,t),r=new In(this.traverseAlg(e.A,n),this.traverseAlg(e.B,n));r.A.experimentalIsEmpty()||r.B.experimentalIsEmpty()||r.A.isIdentical(r.B)||r.A.isIdentical(r.B.invert())||Qe(this,_n,Th).call(this,r.A,r.B,t)||(yield r)}*traverseConjugate(e,t){if(t.depth===0){yield e;return}const n=Qe(this,_n,Pa).call(this,t),r=new hn(this.traverseAlg(e.A,n),this.traverseAlg(e.B,n));if(!r.B.experimentalIsEmpty()){if(r.A.experimentalIsEmpty()||r.A.isIdentical(r.B)||r.A.isIdentical(r.B.invert())||Qe(this,_n,Th).call(this,r.A,r.B,t)){yield*e.B.childAlgNodes();return}yield r}}*traversePause(e,t){if(e.experimentalNISSGrouping){const n=new Mn;Qe(this,_n,Ah).call(this).set(e.experimentalNISSGrouping,n),yield n}else yield e}*traverseNewline(e,t){yield e}*traverseLineComment(e,t){yield e}},yc=new WeakMap,_n=new WeakSet,Ah=function(){return w(this,yc)??fe(this,yc,new Map)},Pa=function(e){return{...e,depth:e.depth?e.depth-1:null}},Th=function(e,t,n){var r,s,a,o;if(e.experimentalNumChildAlgNodes()===1&&t.experimentalNumChildAlgNodes()===1){const l=(r=Array.from(e.childAlgNodes())[0])==null?void 0:r.as(z),c=(s=Array.from(t.childAlgNodes())[0])==null?void 0:s.as(z);if(!(l&&c))return!1;if(c.quantum.isIdentical(l.quantum)||(o=(a=new Ag(n).puzzleSpecificSimplifyOptions())==null?void 0:a.axis)!=null&&o.areQuantumMovesSameAxis(l.quantum,c.quantum))return!0}return!1},Hm),Ry=An(Cy);function Df(i){if(!i)return[];if(hi(i,Te))return i.childAlgNodes();if(typeof i=="string")return _g(i).childAlgNodes();const e=i;if(typeof e[Symbol.iterator]=="function")return e;throw new Error("Invalid AlgNode")}function Va(i){return hi(i,Te)?i:new Te(i)}var un,jn,Te=(jn=class extends ir{constructor(t){super();J(this,un);fe(this,un,Array.from(Df(t)));for(const n of w(this,un))if(!by(n))throw new Error("An alg can only contain alg nodes.")}isIdentical(t){const n=t;if(!t.is(jn))return!1;const r=Array.from(w(this,un)),s=Array.from(w(n,un));if(r.length!==s.length)return!1;for(let a=0;a<r.length;a++)if(!r[a].isIdentical(s[a]))return!1;return!0}invert(){return new jn(hy(Array.from(w(this,un)).map(t=>t.invert())))}*experimentalExpand(t=1,n){n??(n=1/0);for(const r of vg(w(this,un),t))yield*r.experimentalExpand(t,n)}expand(t){return new jn(this.experimentalExpand(1,(t==null?void 0:t.depth)??1/0))}*experimentalLeafMoves(){for(const t of this.experimentalExpand())t.is(z)&&(yield t)}concat(t){return new jn(Array.from(w(this,un)).concat(Array.from(Df(t))))}experimentalIsEmpty(){for(const t of w(this,un))return!1;return!0}static fromString(t){return _g(t)}units(){return this.childAlgNodes()}*childAlgNodes(){for(const t of w(this,un))yield t}experimentalNumUnits(){return this.experimentalNumChildAlgNodes()}experimentalNumChildAlgNodes(){return Array.from(w(this,un)).length}get type(){return Mg("deprecated: type"),"sequence"}toString(){var r,s;let t="",n=null;for(const a of w(this,un)){n&&(t+=Iy(n,a));const o=(r=a.as(Mn))==null?void 0:r.experimentalNISSGrouping;if(o){if(o.amount!==-1)throw new Error("Invalid NISS Grouping amount!");t+=`^(${o.alg.toString()})`}else(s=a.as(nn))!=null&&s.experimentalNISSPlaceholder||(t+=a.toString());n=a}return t}experimentalSimplify(t){return new jn(Ry(this,t??{}))}simplify(t){return this.experimentalSimplify(t)}},un=new WeakMap,jn);function Iy(i,e){var t;return i.is(qr)||e.is(qr)||(t=e.as(nn))!=null&&t.experimentalNISSPlaceholder?"":i.is(zo)&&!e.is(qr)?`
`:" "}new Te([new z("R",1),new z("U",1),new z("R",-1),new z("U",1),new z("R",1),new z("U",-2),new z("R",-1)]),new Te([new z("R",1),new z("U",2),new z("R",-1),new z("U",-1),new z("R",1),new z("U",-1),new z("R",-1)]),new Te([new In(new Te([new z("R",1),new z("U",1),new z("R",-2)]),new Te([new hn(new Te([new z("R",1)]),new Te([new z("U",1)]))]))]),new Te([new z("R",1),new z("U",-1),new z("L",-1),new z("U",1),new z("R",-1),new z("U",-1),new z("L",1),new z("U",1)]),new Te([new z("x",-1),new In(new Te([new hn(new Te([new z("R",1)]),new Te([new z("U",-1)]))]),new Te([new z("D",1)])),new In(new Te([new hn(new Te([new z("R",1)]),new Te([new z("U",1)]))]),new Te([new z("D",1)])),new z("x",1)]),new Te([new hn(new Te([new z("F",1)]),new Te([new In(new Te([new z("U",1)]),new Te([new z("R",1)]))]))]),new Te([new hn(new Te([new z("R",2)]),new Te([new In(new Te([new z("F",2)]),new Te([new z("R",-1),new z("B",-1),new z("R",1)]))]))]),new Te([new z("F",1),new z("U",1),new z("R",1),new z("U",-1),new z("R",-1),new z("F",-1)]),new Te([new z("R",1),new z("U",1),new z("R",-1),new z("U",-1),new z("R",-1),new z("F",1),new z("R",2),new z("U",-1),new z("R",-1),new z("U",-1),new z("R",1),new z("U",1),new z("R",-1),new z("F",-1)]),new Te([new hn(new Te([new z("F",1)]),new Te([new nn(new Te([new In(new Te([new z("R",1)]),new Te([new z("U",1)]))]),3)]))]),new Te([new Mn,new Mn,new Mn]);new z("R"),new z("R'"),new z("B"),new z("B'"),new z("D"),new z("D'"),new z("L"),new z("L'"),new z("U"),new z("U'"),new z("F"),new z("F'"),new z("x'"),new z("l"),new z("l'"),new z("r"),new z("r'"),new z("d"),new z("d'"),new z("x"),new z("x"),new z("x'"),new z("y"),new z("y"),new z("y'"),new z("z"),new z("z'"),new z("M'"),new z("M'"),new Mn;function Eh(i,e,t){const n={};for(const r of i.orbits){const s=e[r.orbitName],a=t[r.orbitName];if(lc(r.numOrientations,a))n[r.orbitName]=s;else if(lc(r.numOrientations,s))n[r.orbitName]=a;else{const o=new Array(r.numPieces);if(r.numOrientations===1){for(let l=0;l<r.numPieces;l++)o[l]=s.permutation[a.permutation[l]];n[r.orbitName]={permutation:o,orientationDelta:s.orientationDelta}}else{const l=new Array(r.numPieces);for(let c=0;c<r.numPieces;c++)l[c]=(s.orientationDelta[a.permutation[c]]+a.orientationDelta[c])%r.numOrientations,o[c]=s.permutation[a.permutation[c]];n[r.orbitName]={permutation:o,orientationDelta:l}}}}return n}function Nf(i,e,t){const n={};for(const r of i.orbits){const s=e[r.orbitName],a=t[r.orbitName];if(lc(r.numOrientations,a))n[r.orbitName]=s;else{const o=new Array(r.numPieces);if(r.numOrientations===1){for(let c=0;c<r.numPieces;c++)o[c]=s.pieces[a.permutation[c]];const l={pieces:o,orientation:s.orientation};n[r.orbitName]=l}else{const l=new Array(r.numPieces),c=s.orientationMod?new Array(r.numPieces):void 0;for(let h=0;h<r.numPieces;h++){const d=a.permutation[h];let f=r.numOrientations;if(s.orientationMod){const p=s.orientationMod[d];c[h]=p,f=p||r.numOrientations}l[h]=(s.orientation[d]+a.orientationDelta[h])%f,o[h]=s.pieces[d]}const u={pieces:o,orientation:l};c&&(u.orientationMod=c),n[r.orbitName]=u}}}return n}var Uf=new Map;function Ly(i){const e=Uf.get(i);if(e)return e;const t=new Array(i),n=new Array(i);for(let s=0;s<i;s++)t[s]=s,n[s]=0;const r={permutation:t,orientationDelta:n};return Uf.set(i,r),r}function Py(i){const e={};for(const t of i.orbits)e[t.orbitName]=Ly(t.numPieces);return e}function Dy(i,e){function t(r,s){var c;const a=r.toString(),o=i.definition.moves[a];if(o)return sa(i,o,s);const l=(c=i.definition.derivedMoves)==null?void 0:c[a];if(l)return sa(i,i.algToTransformation(l).transformationData,s)}const n=t(e.quantum,e.amount)??t(e,1)??t(e.invert,-1);if(n)return n;throw new Error(`Invalid move for KPuzzle (${i.name()}): ${e}`)}var Ld=class jl{constructor(e,t){this.kpuzzle=e,this.patternData=t}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),patternData:this.patternData}}static fromTransformation(e){const t=Nf(e.kpuzzle.definition,e.kpuzzle.definition.defaultPattern,e.transformationData);return new jl(e.kpuzzle,t)}apply(e){return this.applyTransformation(this.kpuzzle.toTransformation(e))}applyTransformation(e){if(e.isIdentityTransformation())return new jl(this.kpuzzle,this.patternData);const t=Nf(this.kpuzzle.definition,this.patternData,e.transformationData);return new jl(this.kpuzzle,t)}applyMove(e){return this.applyTransformation(this.kpuzzle.moveToTransformation(e))}applyAlg(e){return this.applyTransformation(this.kpuzzle.algToTransformation(e))}isIdentical(e){return Oy(this.kpuzzle,this.patternData,e.patternData)}experimentalToTransformation(){if(!this.kpuzzle.canConvertDefaultPatternToUniqueTransformation())return null;const e={};for(const[t,n]of Object.entries(this.patternData)){const r={permutation:n.pieces,orientationDelta:n.orientation};e[t]=r}return new zs(this.kpuzzle,e)}experimentalIsSolved(e){if(!this.kpuzzle.definition.experimentalIsPatternSolved)throw new Error("`KPattern.experimentalIsPatternSolved()` is not supported for this puzzle at the moment.");return this.kpuzzle.definition.experimentalIsPatternSolved(this,e)}},Or,kn,zs=(kn=class{constructor(e,t){J(this,Or);this.kpuzzle=e,this.transformationData=t}toJSON(){return{experimentalPuzzleName:this.kpuzzle.name(),transformationData:this.transformationData}}invert(){return new kn(this.kpuzzle,Cg(this.kpuzzle,this.transformationData))}isIdentityTransformation(){return w(this,Or)??fe(this,Or,this.isIdentical(this.kpuzzle.identityTransformation()))}static experimentalConstructIdentity(e){const t=new kn(e,Py(e.definition));return fe(t,Or,!0),t}isIdentical(e){return Uy(this.kpuzzle,this.transformationData,e.transformationData)}apply(e){return this.applyTransformation(this.kpuzzle.toTransformation(e))}applyTransformation(e){if(this.kpuzzle!==e.kpuzzle)throw new Error(`Tried to apply a transformation for a KPuzzle (${e.kpuzzle.name()}) to a different KPuzzle (${this.kpuzzle.name()}).`);return w(this,Or)?new kn(this.kpuzzle,e.transformationData):w(e,Or)?new kn(this.kpuzzle,this.transformationData):new kn(this.kpuzzle,Eh(this.kpuzzle.definition,this.transformationData,e.transformationData))}applyMove(e){return this.applyTransformation(this.kpuzzle.moveToTransformation(e))}applyAlg(e){return this.applyTransformation(this.kpuzzle.algToTransformation(e))}toKPattern(){return Ld.fromTransformation(this)}repetitionOrder(){return By(this.kpuzzle.definition,this)}selfMultiply(e){return new kn(this.kpuzzle,sa(this.kpuzzle,this.transformationData,e))}},Or=new WeakMap,kn);function lc(i,e){e.permutation||console.log(e);const{permutation:t}=e,n=t.length;for(let r=0;r<n;r++)if(t[r]!==r)return!1;if(i>1){const{orientationDelta:r}=e;for(let s=0;s<n;s++)if(r[s]!==0)return!1}return!0}function Ny(i,e,t,n={}){for(let r=0;r<i.numPieces;r++)if(!(n!=null&&n.ignorePieceOrientations)&&e.orientationDelta[r]!==t.orientationDelta[r]||!(n!=null&&n.ignorePiecePermutation)&&e.permutation[r]!==t.permutation[r])return!1;return!0}function Uy(i,e,t){for(const n of i.definition.orbits)if(!Ny(n,e[n.orbitName],t[n.orbitName]))return!1;return!0}function zy(i,e,t,n={}){var r,s;for(let a=0;a<i.numPieces;a++)if(!(n!=null&&n.ignorePieceOrientations)&&(e.orientation[a]!==t.orientation[a]||(((r=e.orientationMod)==null?void 0:r[a])??0)!==(((s=t.orientationMod)==null?void 0:s[a])??0))||!(n!=null&&n.ignorePieceIndices)&&e.pieces[a]!==t.pieces[a])return!1;return!0}function Oy(i,e,t){for(const n of i.definition.orbits)if(!zy(n,e[n.orbitName],t[n.orbitName]))return!1;return!0}function Cg(i,e){const t={};for(const n of i.definition.orbits){const r=e[n.orbitName];if(lc(n.numOrientations,r))t[n.orbitName]=r;else if(n.numOrientations===1){const s=new Array(n.numPieces);for(let a=0;a<n.numPieces;a++)s[r.permutation[a]]=a;t[n.orbitName]={permutation:s,orientationDelta:r.orientationDelta}}else{const s=new Array(n.numPieces),a=new Array(n.numPieces);for(let o=0;o<n.numPieces;o++){const l=r.permutation[o];s[l]=o,a[l]=(n.numOrientations-r.orientationDelta[o]+n.numOrientations)%n.numOrientations}t[n.orbitName]={permutation:s,orientationDelta:a}}}return t}function sa(i,e,t){if(t===1)return e;if(t<0)return sa(i,Cg(i,e),-t);if(t===0){const{transformationData:s}=i.identityTransformation();return s}let n=e;t!==2&&(n=sa(i,e,Math.floor(t/2)));const r=Eh(i.definition,n,n);return t%2===0?r:Eh(i.definition,e,r)}var Fy=class extends ha{traverseAlg(i,e){let t=null;for(const n of i.childAlgNodes())t?t=t.applyTransformation(this.traverseAlgNode(n,e)):t=this.traverseAlgNode(n,e);return t??e.identityTransformation()}traverseGrouping(i,e){const t=this.traverseAlg(i.alg,e);return new zs(e,sa(e,t.transformationData,i.amount))}traverseMove(i,e){return e.moveToTransformation(i)}traverseCommutator(i,e){const t=this.traverseAlg(i.A,e),n=this.traverseAlg(i.B,e);return t.applyTransformation(n).applyTransformation(t.invert()).applyTransformation(n.invert())}traverseConjugate(i,e){const t=this.traverseAlg(i.A,e),n=this.traverseAlg(i.B,e);return t.applyTransformation(n).applyTransformation(t.invert())}traversePause(i,e){return e.identityTransformation()}traverseNewline(i,e){return e.identityTransformation()}traverseLineComment(i,e){return e.identityTransformation()}},ky=An(Fy);function Ch(i,e){return e?Ch(e,i%e):i}function By(i,e){let t=1;for(const n of i.orbits){const r=e.transformationData[n.orbitName],s=new Array(n.numPieces);for(let a=0;a<n.numPieces;a++)if(!s[a]){let o=a,l=0,c=0;for(;s[o]=!0,l=l+r.orientationDelta[o],c=c+1,o=r.permutation[o],o!==a;);l!==0&&(c=c*n.numOrientations/Ch(n.numOrientations,Math.abs(l))),t=t*c/Ch(t,c)}}return t}var vo,Ys,_c,Wm,Ni=(Wm=class{constructor(i,e){F(this,"experimentalPGNotation");J(this,vo);J(this,Ys,new Map);J(this,_c);this.definition=i,this.experimentalPGNotation=e==null?void 0:e.experimentalPGNotation}lookupOrbitDefinition(i){return w(this,vo)||fe(this,vo,(()=>{const e={};for(const t of this.definition.orbits)e[t.orbitName]=t;return e})()),w(this,vo)[i]}name(){return this.definition.name}identityTransformation(){return zs.experimentalConstructIdentity(this)}moveToTransformation(i){typeof i=="string"&&(i=new z(i));const e=i.toString(),t=w(this,Ys).get(e);if(t)return new zs(this,t);if(this.experimentalPGNotation){const r=this.experimentalPGNotation.lookupMove(i);if(!r)throw new Error(`could not map to internal move: ${i}`);return w(this,Ys).set(e,r),new zs(this,r)}const n=Dy(this,i);return w(this,Ys).set(e,n),new zs(this,n)}algToTransformation(i){return typeof i=="string"&&(i=new Te(i)),ky(i,this)}toTransformation(i){var e,t;return typeof i=="string"?this.algToTransformation(i):(e=i==null?void 0:i.is)!=null&&e.call(i,Te)?this.algToTransformation(i):(t=i==null?void 0:i.is)!=null&&t.call(i,z)?this.moveToTransformation(i):i}defaultPattern(){return new Ld(this,this.definition.defaultPattern)}canConvertDefaultPatternToUniqueTransformation(){return w(this,_c)??fe(this,_c,(()=>{for(const i of this.definition.orbits){const e=new Array(i.numPieces).fill(!1);for(const t of this.definition.defaultPattern[i.orbitName].pieces)e[t]=!0;for(const t of e)if(!t)return!1}return!0})())}},vo=new WeakMap,Ys=new WeakMap,_c=new WeakMap,Wm),Rg=class Jl extends Promise{constructor(e){super(t=>{t()}),this._executor=e}static from(e){return new Jl(t=>{t(e())})}static resolve(e){return new Jl(t=>{t(e)})}static reject(e){return new Jl((t,n)=>{n(e)})}then(e,t){return this._promise=this._promise||new Promise(this._executor),this._promise.then(e,t)}catch(e){return this._promise=this._promise||new Promise(this._executor),this._promise.catch(e)}};function Pd(i){return new Rg(e=>{e(i())})}function uI(i,e,t,n,r){var l;const a=i.orbits[e].pieces[t];if(a===null)return Cn;const o=(l=a.facelets)==null?void 0:l[n];return o===null?Cn:typeof o=="string"?o:(console.log(o),o.mask)}var Ar=class{constructor(i,e){F(this,"stickerings",new Map);for(const t of i.definition.orbits)this.stickerings.set(t.orbitName,new Array(t.numPieces).fill(e))}},Cn="regular",Et="ignored",hs="oriented",Vy="experimentalOriented2",xa="invisible",hr="dim",Gy={Regular:{facelets:[Cn,Cn,Cn,Cn,Cn]},Ignored:{facelets:[Et,Et,Et,Et,Et]},OrientationStickers:{facelets:[hs,hs,hs,hs,hs]},IgnoreNonPrimary:{facelets:[Cn,Et,Et,Et,Et]},Invisible:{facelets:[xa,xa,xa,xa,xa]},PermuteNonPrimary:{facelets:[hr,Cn,Cn,Cn,Cn]},Dim:{facelets:[hr,hr,hr,hr,hr]},Ignoriented:{facelets:[hr,Et,Et,Et,Et]},OrientationWithoutPermutation:{facelets:[hs,Et,Et,Et,Et]},ExperimentalOrientationWithoutPermutation2:{facelets:[Vy,Et,Et,Et,Et]}};function Ig(i){return Gy[i]}var Lg=class extends Ar{constructor(i){super(i,"Regular")}set(i,e){for(const[t,n]of this.stickerings.entries())for(let r=0;r<n.length;r++)i.stickerings.get(t)[r]&&(n[r]=e);return this}toStickeringMask(){const i={orbits:{}};for(const[e,t]of this.stickerings.entries()){const n=[],r={pieces:n};i.orbits[e]=r;for(const s of t)n.push(Ig(s))}return i}},Pg=class{constructor(i){this.kpuzzle=i}and(i){const e=new Ar(this.kpuzzle,!1);for(const t of this.kpuzzle.definition.orbits)e:for(let n=0;n<t.numPieces;n++){e.stickerings.get(t.orbitName)[n]=!0;for(const r of i)if(!r.stickerings.get(t.orbitName)[n]){e.stickerings.get(t.orbitName)[n]=!1;continue e}}return e}or(i){const e=new Ar(this.kpuzzle,!1);for(const t of this.kpuzzle.definition.orbits)e:for(let n=0;n<t.numPieces;n++){e.stickerings.get(t.orbitName)[n]=!1;for(const r of i)if(r.stickerings.get(t.orbitName)[n]){e.stickerings.get(t.orbitName)[n]=!0;continue e}}return e}not(i){const e=new Ar(this.kpuzzle,!1);for(const t of this.kpuzzle.definition.orbits)for(let n=0;n<t.numPieces;n++)e.stickerings.get(t.orbitName)[n]=!i.stickerings.get(t.orbitName)[n];return e}all(){return this.and(this.moves([]))}move(i){const e=this.kpuzzle.moveToTransformation(i),t=new Ar(this.kpuzzle,!1);for(const n of this.kpuzzle.definition.orbits)for(let r=0;r<n.numPieces;r++)(e.transformationData[n.orbitName].permutation[r]!==r||e.transformationData[n.orbitName].orientationDelta[r]!==0)&&(t.stickerings.get(n.orbitName)[r]=!0);return t}moves(i){return i.map(e=>this.move(e))}orbits(i){const e=new Ar(this.kpuzzle,!1);for(const t of i)e.stickerings.get(t).fill(!0);return e}orbitPrefix(i){const e=new Ar(this.kpuzzle,!1);for(const t of this.kpuzzle.definition.orbits)t.orbitName.startsWith(i)&&e.stickerings.get(t.orbitName).fill(!0);return e}},zf="Last Layer",Of="Last Slot",Dn={"3x3x3":zf,megaminx:zf},Oi={"3x3x3":Of,megaminx:Of},Hy={full:{groups:{"3x3x3":"Stickering",megaminx:"Stickering"}},OLL:{groups:Dn},PLL:{groups:Dn},LL:{groups:Dn},EOLL:{groups:Dn},COLL:{groups:Dn},OCLL:{groups:Dn},CPLL:{groups:Dn},CLL:{groups:Dn},EPLL:{groups:Dn},ELL:{groups:Dn},ZBLL:{groups:Dn},LS:{groups:Oi},LSOLL:{groups:Oi},LSOCLL:{groups:Oi},ELS:{groups:Oi},CLS:{groups:Oi},ZBLS:{groups:Oi},VLS:{groups:Oi},WVLS:{groups:Oi},F2L:{groups:{"3x3x3":"CFOP (Fridrich)"}},Daisy:{groups:{"3x3x3":"CFOP (Fridrich)"}},Cross:{groups:{"3x3x3":"CFOP (Fridrich)"}},EO:{groups:{"3x3x3":"ZZ"}},EOline:{groups:{"3x3x3":"ZZ"}},EOcross:{groups:{"3x3x3":"ZZ"}},CMLL:{groups:{"3x3x3":"Roux"}},L10P:{groups:{"3x3x3":"Roux"}},L6E:{groups:{"3x3x3":"Roux"}},L6EO:{groups:{"3x3x3":"Roux"}},"2x2x2":{groups:{"3x3x3":"Petrus"}},"2x2x3":{groups:{"3x3x3":"Petrus"}},G1:{groups:{"3x3x3":"FMC"}},L2C:{groups:{"4x4x4":"Reduction","5x5x5":"Reduction","6x6x6":"Reduction"}},PBL:{groups:{"2x2x2":"Ortega"}},"Void Cube":{groups:{"3x3x3":"Miscellaneous"}},invisible:{groups:{"3x3x3":"Miscellaneous"}},picture:{groups:{"3x3x3":"Miscellaneous"}},"centers-only":{groups:{"3x3x3":"Miscellaneous"}},"experimental-centers-U":{},"experimental-centers-U-D":{},"experimental-centers-U-L-D":{},"experimental-centers-U-L-B-D":{},"experimental-centers":{},"experimental-fto-fc":{groups:{fto:"Bencisco"}},"experimental-fto-f2t":{groups:{fto:"Bencisco"}},"experimental-fto-sc":{groups:{fto:"Bencisco"}},"experimental-fto-l2c":{groups:{fto:"Bencisco"}},"experimental-fto-lbt":{groups:{fto:"Bencisco"}},"experimental-fto-l3t":{groups:{fto:"Bencisco"}}};async function Ga(i,e){return(await Wy(i,e)).toStickeringMask()}async function Wy(i,e){const t=await i.kpuzzle(),n=new Lg(t),r=new Pg(t),s=()=>r.move("U"),a=()=>r.or(r.moves(["U","D"])),o=()=>r.or(r.moves(["L","R"])),l=()=>r.not(o()),c=()=>r.not(s()),u=()=>r.orbitPrefix("CENTER"),h=()=>r.orbitPrefix("EDGE"),d=()=>r.or([r.orbitPrefix("CORNER"),r.orbitPrefix("C4RNER"),r.orbitPrefix("C5RNER")]),f=()=>r.or([l(),r.and([s(),h()])]),p=()=>r.and([s(),u()]),v=()=>r.and([r.and(r.moves(["F","R"])),h()]),g=()=>r.and([r.and(r.moves(["F","R"])),d(),r.not(s())]),m=()=>r.or([g(),v()]);function y(){n.set(c(),"Dim")}function x(){n.set(s(),"PermuteNonPrimary"),n.set(p(),"Dim")}function _(){n.set(s(),"IgnoreNonPrimary"),n.set(p(),"Regular")}function L(){n.set(s(),"Ignoriented"),n.set(p(),"Dim")}switch(e){case"full":break;case"PLL":{y(),x();break}case"CLS":{y(),n.set(g(),"Regular"),n.set(s(),"Ignoriented"),n.set(r.and([s(),u()]),"Dim"),n.set(r.and([s(),d()]),"IgnoreNonPrimary");break}case"OLL":{y(),_();break}case"EOLL":{y(),_(),n.set(r.and([s(),d()]),"Ignored");break}case"COLL":{y(),n.set(r.and([s(),h()]),"Ignoriented"),n.set(r.and([s(),u()]),"Dim"),n.set(r.and([s(),d()]),"Regular");break}case"OCLL":{y(),L(),n.set(r.and([s(),d()]),"IgnoreNonPrimary");break}case"CPLL":{y(),n.set(r.and([d(),s()]),"PermuteNonPrimary"),n.set(r.and([r.not(d()),s()]),"Dim");break}case"CLL":{y(),n.set(r.not(r.and([d(),s()])),"Dim");break}case"EPLL":{y(),n.set(s(),"Dim"),n.set(r.and([s(),h()]),"PermuteNonPrimary");break}case"ELL":{y(),n.set(s(),"Dim"),n.set(r.and([s(),h()]),"Regular");break}case"ELS":{y(),_(),n.set(r.and([s(),d()]),"Ignored"),n.set(v(),"Regular"),n.set(g(),"Ignored");break}case"LL":{y();break}case"F2L":{n.set(s(),"Ignored");break}case"ZBLL":{y(),n.set(s(),"PermuteNonPrimary"),n.set(p(),"Dim"),n.set(r.and([s(),d()]),"Regular");break}case"ZBLS":{y(),n.set(m(),"Regular"),_(),n.set(r.and([s(),d()]),"Ignored");break}case"VLS":{y(),n.set(m(),"Regular"),_();break}case"WVLS":{y(),n.set(m(),"Regular"),n.set(r.and([s(),h()]),"Ignoriented"),n.set(r.and([s(),u()]),"Dim"),n.set(r.and([s(),d()]),"IgnoreNonPrimary");break}case"LS":{y(),n.set(m(),"Regular"),n.set(s(),"Ignored"),n.set(p(),"Dim");break}case"LSOLL":{y(),_(),n.set(m(),"Regular");break}case"LSOCLL":{y(),L(),n.set(r.and([s(),d()]),"IgnoreNonPrimary"),n.set(m(),"Regular");break}case"EO":{n.set(d(),"Ignored"),n.set(h(),"OrientationWithoutPermutation");break}case"EOline":{n.set(d(),"Ignored"),n.set(h(),"OrientationWithoutPermutation"),n.set(r.and(r.moves(["D","M"])),"Regular");break}case"EOcross":{n.set(h(),"OrientationWithoutPermutation"),n.set(r.move("D"),"Regular"),n.set(d(),"Ignored");break}case"CMLL":{n.set(c(),"Dim"),n.set(f(),"Ignored"),n.set(r.and([s(),d()]),"Regular");break}case"L10P":{n.set(r.not(f()),"Dim"),n.set(r.and([d(),s()]),"Regular");break}case"L6E":{n.set(r.not(f()),"Dim");break}case"L6EO":{n.set(r.not(f()),"Dim"),n.set(f(),"OrientationWithoutPermutation"),n.set(r.and([u(),a()]),"OrientationStickers");break}case"Daisy":{n.set(r.all(),"Ignored"),n.set(u(),"Dim"),n.set(r.and([r.move("D"),u()]),"Regular"),n.set(r.and([r.move("U"),h()]),"IgnoreNonPrimary");break}case"Cross":{n.set(r.all(),"Ignored"),n.set(u(),"Dim"),n.set(r.and([r.move("D"),u()]),"Regular"),n.set(r.and([r.move("D"),h()]),"Regular");break}case"2x2x2":{n.set(r.or(r.moves(["U","F","R"])),"Ignored"),n.set(r.and([r.or(r.moves(["U","F","R"])),u()]),"Dim");break}case"2x2x3":{n.set(r.all(),"Dim"),n.set(r.or(r.moves(["U","F","R"])),"Ignored"),n.set(r.and([r.or(r.moves(["U","F","R"])),u()]),"Dim"),n.set(r.and([r.move("F"),r.not(r.or(r.moves(["U","R"])))]),"Regular");break}case"G1":{n.set(r.all(),"ExperimentalOrientationWithoutPermutation2"),n.set(r.or(r.moves(["E"])),"OrientationWithoutPermutation"),n.set(r.and(r.moves(["E","S"])),"Ignored");break}case"L2C":{n.set(r.or(r.moves(["L","R","B","D"])),"Dim"),n.set(r.not(u()),"Ignored");break}case"PBL":{n.set(r.all(),"Ignored"),n.set(r.or(r.moves(["U","D"])),"PermuteNonPrimary");break}case"Void Cube":{n.set(u(),"Invisible");break}case"picture":case"invisible":{n.set(r.all(),"Invisible");break}case"centers-only":{n.set(r.not(u()),"Ignored");break}default:console.warn(`Unsupported stickering for ${i.id}: ${e}. Setting all pieces to dim.`),n.set(r.and(r.moves([])),"Dim")}return n}async function Zc(i,e){const t=[],n=[];for(const[r,s]of Object.entries(Hy))s.groups&&(i in s.groups?t.push(r):e!=null&&e.use3x3x3Fallbacks&&"3x3x3"in s.groups&&n.push(r));return t.concat(n)}function xt(i){let e=null;return()=>e??(e=i())}async function Dd(i){return(await ft(()=>import("./index-DQgfSxu_.js"),[])).getPuzzleGeometryByName(i,{allMoves:!0,orientCenters:!0,addRotations:!0})}async function Dg(i,e){const t=await i,n=t.getKPuzzleDefinition(!0);n.name=e;const r=await ft(()=>import("./index-DQgfSxu_.js"),[]),s=new r.ExperimentalPGNotation(t,t.getOrbitsDef(!0));return new Ni(s.remapKPuzzleDefinition(n),{experimentalPGNotation:s})}var Mc,Sc,wc,Xm,Yr=(Xm=class{constructor(i){F(this,"pgId");F(this,"id");F(this,"fullName");F(this,"inventedBy");F(this,"inventionYear");J(this,Mc);J(this,Sc);J(this,wc);F(this,"puzzleSpecificSimplifyOptionsPromise",Ng(this.kpuzzle.bind(this)));this.pgId=i.pgID,this.id=i.id,this.fullName=i.fullName,this.inventedBy=i.inventedBy,this.inventionYear=i.inventionYear}pg(){return w(this,Mc)??fe(this,Mc,Dd(this.pgId??this.id))}kpuzzle(){return w(this,Sc)??fe(this,Sc,Dg(this.pg(),this.id))}svg(){return w(this,wc)??fe(this,wc,(async()=>(await this.pg()).generatesvg())())}},Mc=new WeakMap,Sc=new WeakMap,wc=new WeakMap,Xm),Da=class extends Yr{constructor(){super(...arguments);F(this,"stickerings",()=>Zc(this.id,{use3x3x3Fallbacks:!0}))}stickeringMask(e){return Ga(this,e)}};function Ng(i){return new Rg(async e=>{const t=await i();e({quantumMoveOrder:n=>t.moveToTransformation(new z(n)).repetitionOrder()})})}var cc={name:"3x3x3",orbits:[{orbitName:"EDGES",numPieces:12,numOrientations:2},{orbitName:"CORNERS",numPieces:8,numOrientations:3},{orbitName:"CENTERS",numPieces:6,numOrientations:4}],defaultPattern:{EDGES:{pieces:[0,1,2,3,4,5,6,7,8,9,10,11],orientation:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{pieces:[0,1,2,3,4,5,6,7],orientation:[0,0,0,0,0,0,0,0]},CENTERS:{pieces:[0,1,2,3,4,5],orientation:[0,0,0,0,0,0],orientationMod:[1,1,1,1,1,1]}},moves:{U:{EDGES:{permutation:[1,2,3,0,4,5,6,7,8,9,10,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[1,0,0,0,0,0]}},y:{EDGES:{permutation:[1,2,3,0,5,6,7,4,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,7,4,5,6],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientationDelta:[1,0,0,0,0,3]}},x:{EDGES:{permutation:[4,8,0,9,6,10,2,11,5,7,1,3],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,3,5,7,6,2,1],orientationDelta:[2,1,2,1,1,2,1,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientationDelta:[0,3,0,1,2,2]}},L:{EDGES:{permutation:[0,1,2,11,4,5,6,9,8,3,10,7],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientationDelta:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,1,0,0,0,0]}},F:{EDGES:{permutation:[9,1,2,3,8,5,6,7,0,4,10,11],orientationDelta:[1,0,0,0,1,0,0,0,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientationDelta:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,1,0,0,0]}},R:{EDGES:{permutation:[0,8,2,3,4,10,6,7,5,9,1,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientationDelta:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,1,0,0]}},B:{EDGES:{permutation:[0,1,10,3,4,5,11,7,8,9,6,2],orientationDelta:[0,0,1,0,0,0,1,0,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientationDelta:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,0,1,0]}},D:{EDGES:{permutation:[0,1,2,3,7,4,5,6,8,9,10,11],orientationDelta:[0,0,0,0,0,0,0,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,1,2,3,4,5],orientationDelta:[0,0,0,0,0,1]}},z:{EDGES:{permutation:[9,3,11,7,8,1,10,5,0,4,2,6],orientationDelta:[1,1,1,1,1,1,1,1,1,1,1,1]},CORNERS:{permutation:[3,2,6,5,0,4,7,1],orientationDelta:[1,2,1,2,2,1,2,1]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,1,1,3,1]}},M:{EDGES:{permutation:[2,1,6,3,0,5,4,7,8,9,10,11],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientationDelta:[2,0,0,0,2,0]}},E:{EDGES:{permutation:[0,1,2,3,4,5,6,7,9,11,8,10],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientationDelta:[0,0,0,0,0,0]}},S:{EDGES:{permutation:[0,3,2,7,4,1,6,5,8,9,10,11],orientationDelta:[0,1,0,1,0,1,0,1,0,0,0,0]},CORNERS:{permutation:[0,1,2,3,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,0,1,0,1]}},u:{EDGES:{permutation:[1,2,3,0,4,5,6,7,10,8,11,9],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[1,2,3,0,4,5,6,7],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,2,3,4,1,5],orientationDelta:[1,0,0,0,0,0]}},l:{EDGES:{permutation:[2,1,6,11,0,5,4,9,8,3,10,7],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[0,1,6,2,4,3,5,7],orientationDelta:[0,0,2,1,0,2,1,0]},CENTERS:{permutation:[4,1,0,3,5,2],orientationDelta:[2,1,0,0,2,0]}},f:{EDGES:{permutation:[9,3,2,7,8,1,6,5,0,4,10,11],orientationDelta:[1,1,0,1,1,1,0,1,1,1,0,0]},CORNERS:{permutation:[3,1,2,5,0,4,6,7],orientationDelta:[1,0,0,2,2,1,0,0]},CENTERS:{permutation:[1,5,2,0,4,3],orientationDelta:[1,1,1,1,0,1]}},r:{EDGES:{permutation:[4,8,0,3,6,10,2,7,5,9,1,11],orientationDelta:[1,0,1,0,1,0,1,0,0,0,0,0]},CORNERS:{permutation:[4,0,2,3,7,5,6,1],orientationDelta:[2,1,0,0,1,0,0,2]},CENTERS:{permutation:[2,1,5,3,0,4],orientationDelta:[0,0,0,1,2,2]}},b:{EDGES:{permutation:[0,5,10,1,4,7,11,3,8,9,6,2],orientationDelta:[0,1,1,1,0,1,1,1,0,0,1,1]},CORNERS:{permutation:[0,7,1,3,4,5,2,6],orientationDelta:[0,2,1,0,0,0,2,1]},CENTERS:{permutation:[3,0,2,5,4,1],orientationDelta:[3,3,0,3,1,3]}},d:{EDGES:{permutation:[0,1,2,3,7,4,5,6,9,11,8,10],orientationDelta:[0,0,0,0,0,0,0,0,1,1,1,1]},CORNERS:{permutation:[0,1,2,3,5,6,7,4],orientationDelta:[0,0,0,0,0,0,0,0]},CENTERS:{permutation:[0,4,1,2,3,5],orientationDelta:[0,0,0,0,0,1]}}},derivedMoves:{Uw:"u",Lw:"l",Fw:"f",Rw:"r",Bw:"b",Dw:"d",Uv:"y",Lv:"x'",Fv:"z",Rv:"x",Bv:"z'",Dv:"y'","2U":"u U'","2L":"l L'","2F":"f F'","2R":"r R'","2B":"b B'","2D":"d D'"}};async function Xy(i){const e=await(i.puzzleSpecificSimplifyOptions??i.puzzleSpecificSimplifyOptionsPromise);return e?{puzzleLoader:{puzzleSpecificSimplifyOptions:e}}:{}}new Array(24);async function uc(i,e){return(await ft(()=>import("./index-DQgfSxu_.js"),[])).getPuzzleGeometryByDesc(i,{allMoves:!0,orientCenters:!0,addRotations:!0,...e})}async function Ug(i,e){const t=uc(i,e);return Dg(t,`description: ${i}`)}var qy=1;function Yy(i,e){const t=qy++;let n=null;const r=async()=>n??(n=Ug(i));return{id:`custom-${t}`,fullName:(e==null?void 0:e.fullName)??`Custom Puzzle (instance #${t})`,kpuzzle:r,svg:async()=>(await uc(i)).generatesvg(),pg:async()=>uc(i),puzzleSpecificSimplifyOptionsPromise:Ng(r)}}var zg=new Ni(cc);cc.experimentalIsPatternSolved=jy;function Og(i){const e=i.patternData.CENTERS.pieces[0],t=i.patternData.CENTERS.pieces[5],n=i.patternData.CENTERS.pieces[1];let r=n;return e<n&&r--,t<n&&r--,[e,r]}var Ff=new Array(6).fill(0).map(()=>new Array(6));function Zy(){{const i=["","z","x","z'","x'","x2"].map(t=>Te.fromString(t)),e=new Te("y");for(const t of i){let n=zg.algToTransformation(t);for(let r=0;r<4;r++){n=n.applyAlg(e);const[s,a]=Og(n.toKPattern());Ff[s][a]=n.invert()}}}return Ff}function $y(i){const[e,t]=Og(i),n=Zy()[e][t];return i.applyTransformation(n)}function jy(i,e){var t;return e.ignorePuzzleOrientation&&(i=$y(i)),e.ignoreCenterOrientation&&(i=new Ld(i.kpuzzle,{EDGES:i.patternData.EDGES,CORNERS:i.patternData.CORNERS,CENTERS:{pieces:i.patternData.CENTERS.pieces,orientation:new Array(6).fill(0)}})),!!((t=i.experimentalToTransformation())!=null&&t.isIdentityTransformation())}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const $c="165",Jy={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Ky={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Fg=0,Rh=1,kg=2,Qy=3,e_=0,Nd=1,Bg=2,qn=3,Ri=0,rn=1,$n=2,bi=0,Zr=1,Ih=2,Lh=3,Ph=4,Vg=5,Yi=100,Gg=101,Hg=102,Wg=103,Xg=104,qg=200,Yg=201,Zg=202,$g=203,hc=204,dc=205,jg=206,Jg=207,Kg=208,Qg=209,e0=210,t0=211,n0=212,i0=213,r0=214,s0=0,a0=1,o0=2,Ha=3,l0=4,c0=5,u0=6,h0=7,Oo=0,d0=1,f0=2,Ai=0,p0=1,m0=2,g0=3,v0=4,x0=5,y0=6,_0=7,Dh="attached",M0="detached",jc=300,Ii=301,tr=302,Wa=303,Xa=304,da=306,qa=1e3,Ln=1001,Ya=1002,Gt=1003,Ud=1004,t_=1004,Os=1005,n_=1005,Lt=1006,za=1007,i_=1007,Jn=1008,r_=1008,Li=1009,S0=1010,w0=1011,Za=1012,zd=1013,ts=1014,yn=1015,Fo=1016,Od=1017,Fd=1018,ns=1020,b0=35902,A0=1021,T0=1022,dn=1023,E0=1024,C0=1025,$r=1026,is=1027,kd=1028,Bd=1029,R0=1030,Vd=1031,Gd=1033,Kl=33776,Ql=33777,ec=33778,tc=33779,Nh=35840,Uh=35841,zh=35842,Oh=35843,Fh=36196,kh=37492,Bh=37496,Vh=37808,Gh=37809,Hh=37810,Wh=37811,Xh=37812,qh=37813,Yh=37814,Zh=37815,$h=37816,jh=37817,Jh=37818,Kh=37819,Qh=37820,ed=37821,nc=36492,td=36494,nd=36495,I0=36283,id=36284,rd=36285,sd=36286,L0=2200,P0=2201,D0=2202,$a=2300,fc=2301,ic=2302,Rr=2400,Ir=2401,ja=2402,Jc=2500,Hd=2501,s_=0,a_=1,o_=2,N0=3200,U0=3201,rr=0,z0=1,yi="",Rn="srgb",ni="srgb-linear",Kc="display-p3",ko="display-p3-linear",Ja="linear",pt="srgb",Ka="rec709",Qa="p3",l_=0,Tr=7680,c_=7681,u_=7682,h_=7683,d_=34055,f_=34056,p_=5386,m_=512,g_=513,v_=514,x_=515,y_=516,__=517,M_=518,ad=519,O0=512,F0=513,k0=514,Wd=515,B0=516,V0=517,G0=518,H0=519,eo=35044,S_=35048,w_=35040,b_=35045,A_=35049,T_=35041,E_=35046,C_=35050,R_=35042,I_="100",od="300 es",Kn=2e3,to=2001;class Ui{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const n=this._listeners;return n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const n=this._listeners[e.type];if(n!==void 0){e.target=this;const r=n.slice(0);for(let s=0,a=r.length;s<a;s++)r[s].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let kf=1234567;const jr=Math.PI/180,aa=180/Math.PI;function Sn(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]).toLowerCase()}function wt(i,e,t){return Math.max(e,Math.min(t,i))}function Xd(i,e){return(i%e+e)%e}function L_(i,e,t,n,r){return n+(i-e)*(r-n)/(t-e)}function P_(i,e,t){return i!==e?(t-i)/(e-i):0}function Oa(i,e,t){return(1-t)*i+t*e}function D_(i,e,t,n){return Oa(i,e,1-Math.exp(-t*n))}function N_(i,e=1){return e-Math.abs(Xd(i,e*2)-e)}function U_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*(3-2*i))}function z_(i,e,t){return i<=e?0:i>=t?1:(i=(i-e)/(t-e),i*i*i*(i*(i*6-15)+10))}function O_(i,e){return i+Math.floor(Math.random()*(e-i+1))}function F_(i,e){return i+Math.random()*(e-i)}function k_(i){return i*(.5-Math.random())}function B_(i){i!==void 0&&(kf=i);let e=kf+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function V_(i){return i*jr}function G_(i){return i*aa}function H_(i){return(i&i-1)===0&&i!==0}function W_(i){return Math.pow(2,Math.ceil(Math.log(i)/Math.LN2))}function X_(i){return Math.pow(2,Math.floor(Math.log(i)/Math.LN2))}function q_(i,e,t,n,r){const s=Math.cos,a=Math.sin,o=s(t/2),l=a(t/2),c=s((e+n)/2),u=a((e+n)/2),h=s((e-n)/2),d=a((e-n)/2),f=s((n-e)/2),p=a((n-e)/2);switch(r){case"XYX":i.set(o*u,l*h,l*d,o*c);break;case"YZY":i.set(l*d,o*u,l*h,o*c);break;case"ZXZ":i.set(l*h,l*d,o*u,o*c);break;case"XZX":i.set(o*u,l*p,l*f,o*c);break;case"YXY":i.set(l*f,o*u,l*p,o*c);break;case"ZYZ":i.set(l*p,l*f,o*u,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function tn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function Xe(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Y_={DEG2RAD:jr,RAD2DEG:aa,generateUUID:Sn,clamp:wt,euclideanModulo:Xd,mapLinear:L_,inverseLerp:P_,lerp:Oa,damp:D_,pingpong:N_,smoothstep:U_,smootherstep:z_,randInt:O_,randFloat:F_,randFloatSpread:k_,seededRandom:B_,degToRad:V_,radToDeg:G_,isPowerOfTwo:H_,ceilPowerOfTwo:W_,floorPowerOfTwo:X_,setQuaternionFromProperEuler:q_,normalize:Xe,denormalize:tn};class j{constructor(e=0,t=0){j.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,r=e.elements;return this.x=r[0]*t+r[3]*n+r[6],this.y=r[1]*t+r[4]*n+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),r=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*r+e.x,this.y=s*r+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,t,n,r,s,a,o,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c)}set(e,t,n,r,s,a,o,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=o,u[3]=t,u[4]=s,u[5]=l,u[6]=n,u[7]=a,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[3],l=n[6],c=n[1],u=n[4],h=n[7],d=n[2],f=n[5],p=n[8],v=r[0],g=r[3],m=r[6],y=r[1],x=r[4],_=r[7],L=r[2],T=r[5],C=r[8];return s[0]=a*v+o*y+l*L,s[3]=a*g+o*x+l*T,s[6]=a*m+o*_+l*C,s[1]=c*v+u*y+h*L,s[4]=c*g+u*x+h*T,s[7]=c*m+u*_+h*C,s[2]=d*v+f*y+p*L,s[5]=d*g+f*x+p*T,s[8]=d*m+f*_+p*C,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8];return t*a*u-t*o*c-n*s*u+n*o*l+r*s*c-r*a*l}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=u*a-o*c,d=o*l-u*s,f=c*s-a*l,p=t*h+n*d+r*f;if(p===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/p;return e[0]=h*v,e[1]=(r*c-u*n)*v,e[2]=(o*n-r*a)*v,e[3]=d*v,e[4]=(u*t-r*l)*v,e[5]=(r*s-o*t)*v,e[6]=f*v,e[7]=(n*l-c*t)*v,e[8]=(a*t-n*s)*v,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,r,s,a,o){const l=Math.cos(s),c=Math.sin(s);return this.set(n*l,n*c,-n*(l*a+c*o)+a+e,-r*c,r*l,-r*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Du.makeScale(e,t)),this}rotate(e){return this.premultiply(Du.makeRotation(-e)),this}translate(e,t){return this.premultiply(Du.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<9;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Du=new We;function W0(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}const Z_={Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array};function Fs(i,e){return new Z_[i](e)}function no(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function X0(){const i=no("canvas");return i.style.display="block",i}const Bf={};function qd(i){i in Bf||(Bf[i]=!0,console.warn(i))}function $_(i,e,t){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const Vf=new We().set(.8224621,.177538,0,.0331941,.9668058,0,.0170827,.0723974,.9105199),Gf=new We().set(1.2249401,-.2249404,0,-.0420569,1.0420571,0,-.0196376,-.0786361,1.0982735),el={[ni]:{transfer:Ja,primaries:Ka,toReference:i=>i,fromReference:i=>i},[Rn]:{transfer:pt,primaries:Ka,toReference:i=>i.convertSRGBToLinear(),fromReference:i=>i.convertLinearToSRGB()},[ko]:{transfer:Ja,primaries:Qa,toReference:i=>i.applyMatrix3(Gf),fromReference:i=>i.applyMatrix3(Vf)},[Kc]:{transfer:pt,primaries:Qa,toReference:i=>i.convertSRGBToLinear().applyMatrix3(Gf),fromReference:i=>i.applyMatrix3(Vf).convertLinearToSRGB()}},j_=new Set([ni,ko]),at={enabled:!0,_workingColorSpace:ni,get workingColorSpace(){return this._workingColorSpace},set workingColorSpace(i){if(!j_.has(i))throw new Error(`Unsupported working color space, "${i}".`);this._workingColorSpace=i},convert:function(i,e,t){if(this.enabled===!1||e===t||!e||!t)return i;const n=el[e].toReference,r=el[t].fromReference;return r(n(i))},fromWorkingColorSpace:function(i,e){return this.convert(i,this._workingColorSpace,e)},toWorkingColorSpace:function(i,e){return this.convert(i,e,this._workingColorSpace)},getPrimaries:function(i){return el[i].primaries},getTransfer:function(i){return i===yi?Ja:el[i].transfer}};function Gs(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Nu(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ds;class q0{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{ds===void 0&&(ds=no("canvas")),ds.width=e.width,ds.height=e.height;const n=ds.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),t=ds}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=no("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const r=n.getImageData(0,0,e.width,e.height),s=r.data;for(let a=0;a<s.length;a++)s[a]=Gs(s[a]/255)*255;return n.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Gs(t[n]/255)*255):t[n]=Gs(t[n]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let J_=0;class Lr{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=Sn(),this.data=e,this.dataReady=!0,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let a=0,o=r.length;a<o;a++)r[a].isDataTexture?s.push(Uu(r[a].image)):s.push(Uu(r[a]))}else s=Uu(r);n.url=s}return t||(e.images[this.uuid]=n),n}}function Uu(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?q0.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let K_=0;class bt extends Ui{constructor(e=bt.DEFAULT_IMAGE,t=bt.DEFAULT_MAPPING,n=Ln,r=Ln,s=Lt,a=Jn,o=dn,l=Li,c=bt.DEFAULT_ANISOTROPY,u=yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:K_++}),this.uuid=Sn(),this.name="",this.source=new Lr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new j(0,0),this.repeat=new j(1,1),this.center=new j(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==jc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case qa:e.x=e.x-Math.floor(e.x);break;case Ln:e.x=e.x<0?0:1;break;case Ya:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case qa:e.y=e.y-Math.floor(e.y);break;case Ln:e.y=e.y<0?0:1;break;case Ya:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}bt.DEFAULT_IMAGE=null;bt.DEFAULT_MAPPING=jc;bt.DEFAULT_ANISOTROPY=1;class ct{constructor(e=0,t=0,n=0,r=1){ct.prototype.isVector4=!0,this.x=e,this.y=t,this.z=n,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,r){return this.x=e,this.y=t,this.z=n,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*r+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*r+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*r+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*r+a[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,r,s;const l=e.elements,c=l[0],u=l[4],h=l[8],d=l[1],f=l[5],p=l[9],v=l[2],g=l[6],m=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-v)<.01&&Math.abs(p-g)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+v)<.1&&Math.abs(p+g)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(c+1)/2,_=(f+1)/2,L=(m+1)/2,T=(u+d)/4,C=(h+v)/4,I=(p+g)/4;return x>_&&x>L?x<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(x),r=T/n,s=C/n):_>L?_<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(_),n=T/r,s=I/r):L<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(L),n=C/s,r=I/s),this.set(n,r,s,t),this}let y=Math.sqrt((g-p)*(g-p)+(h-v)*(h-v)+(d-u)*(d-u));return Math.abs(y)<.001&&(y=1),this.x=(g-p)/y,this.y=(h-v)/y,this.z=(d-u)/y,this.w=Math.acos((c+f+m-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Y0 extends Ui{constructor(e=1,t=1,n={}){super(),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ct(0,0,e,t),this.scissorTest=!1,this.viewport=new ct(0,0,e,t);const r={width:e,height:t,depth:1};n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Lt,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},n);const s=new bt(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace);s.flipY=!1,s.generateMipmaps=n.generateMipmaps,s.internalFormat=n.internalFormat,this.textures=[];const a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0;this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.depthTexture=n.depthTexture,this.samples=n.samples}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=t,this.textures[r].image.depth=n;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,r=e.textures.length;n<r;n++)this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new Lr(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Bn extends Y0{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Qc extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Q_ extends Bn{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGLArrayRenderTarget=!0,this.depth=n,this.texture=new Qc(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class Yd extends bt{constructor(e=null,t=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:r},this.magFilter=Gt,this.minFilter=Gt,this.wrapR=Ln,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class eM extends Bn{constructor(e=1,t=1,n=1,r={}){super(e,t,r),this.isWebGL3DRenderTarget=!0,this.depth=n,this.texture=new Yd(null,e,t,n),this.texture.isRenderTargetTexture=!0}}class fn{constructor(e=0,t=0,n=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=r}static slerpFlat(e,t,n,r,s,a,o){let l=n[r+0],c=n[r+1],u=n[r+2],h=n[r+3];const d=s[a+0],f=s[a+1],p=s[a+2],v=s[a+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h;return}if(o===1){e[t+0]=d,e[t+1]=f,e[t+2]=p,e[t+3]=v;return}if(h!==v||l!==d||c!==f||u!==p){let g=1-o;const m=l*d+c*f+u*p+h*v,y=m>=0?1:-1,x=1-m*m;if(x>Number.EPSILON){const L=Math.sqrt(x),T=Math.atan2(L,m*y);g=Math.sin(g*T)/L,o=Math.sin(o*T)/L}const _=o*y;if(l=l*g+d*_,c=c*g+f*_,u=u*g+p*_,h=h*g+v*_,g===1-o){const L=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=L,c*=L,u*=L,h*=L}}e[t]=l,e[t+1]=c,e[t+2]=u,e[t+3]=h}static multiplyQuaternionsFlat(e,t,n,r,s,a){const o=n[r],l=n[r+1],c=n[r+2],u=n[r+3],h=s[a],d=s[a+1],f=s[a+2],p=s[a+3];return e[t]=o*p+u*h+l*f-c*d,e[t+1]=l*p+u*d+c*h-o*f,e[t+2]=c*p+u*f+o*d-l*h,e[t+3]=u*p-o*h-l*d-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,r){return this._x=e,this._y=t,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,r=e._y,s=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(n/2),u=o(r/2),h=o(s/2),d=l(n/2),f=l(r/2),p=l(s/2);switch(a){case"XYZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"YXZ":this._x=d*u*h+c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"ZXY":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h-d*f*p;break;case"ZYX":this._x=d*u*h-c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h+d*f*p;break;case"YZX":this._x=d*u*h+c*f*p,this._y=c*f*h+d*u*p,this._z=c*u*p-d*f*h,this._w=c*u*h-d*f*p;break;case"XZY":this._x=d*u*h-c*f*p,this._y=c*f*h-d*u*p,this._z=c*u*p+d*f*h,this._w=c*u*h+d*f*p;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,r=Math.sin(n);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],r=t[4],s=t[8],a=t[1],o=t[5],l=t[9],c=t[2],u=t[6],h=t[10],d=n+o+h;if(d>0){const f=.5/Math.sqrt(d+1);this._w=.25/f,this._x=(u-l)*f,this._y=(s-c)*f,this._z=(a-r)*f}else if(n>o&&n>h){const f=2*Math.sqrt(1+n-o-h);this._w=(u-l)/f,this._x=.25*f,this._y=(r+a)/f,this._z=(s+c)/f}else if(o>h){const f=2*Math.sqrt(1+o-n-h);this._w=(s-c)/f,this._x=(r+a)/f,this._y=.25*f,this._z=(l+u)/f}else{const f=2*Math.sqrt(1+h-n-o);this._w=(a-r)/f,this._x=(s+c)/f,this._y=(l+u)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<Number.EPSILON?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(wt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const r=Math.min(1,t/n);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,r=e._y,s=e._z,a=e._w,o=t._x,l=t._y,c=t._z,u=t._w;return this._x=n*u+a*o+r*c-s*l,this._y=r*u+a*l+s*o-n*c,this._z=s*u+a*c+n*l-r*o,this._w=a*u-n*o-r*l-s*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const n=this._x,r=this._y,s=this._z,a=this._w;let o=a*e._w+n*e._x+r*e._y+s*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=a,this._x=n,this._y=r,this._z=s,this;const l=1-o*o;if(l<=Number.EPSILON){const f=1-t;return this._w=f*a+t*this._w,this._x=f*n+t*this._x,this._y=f*r+t*this._y,this._z=f*s+t*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,o),h=Math.sin((1-t)*u)/c,d=Math.sin(t*u)/c;return this._w=a*h+this._w*d,this._x=n*h+this._x*d,this._y=r*h+this._y*d,this._z=s*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class E{constructor(e=0,t=0,n=0){E.prototype.isVector3=!0,this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Hf.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Hf.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*r,this.y=s[1]*t+s[4]*n+s[7]*r,this.z=s[2]*t+s[5]*n+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,r=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*r+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*r+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*r+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,r=this.z,s=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*r-o*n),u=2*(o*t-s*r),h=2*(s*n-a*t);return this.x=t+l*c+a*h-o*u,this.y=n+l*u+o*c-s*h,this.z=r+l*h+s*u-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*r,this.y=s[1]*t+s[5]*n+s[9]*r,this.z=s[2]*t+s[6]*n+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Math.max(e,Math.min(t,n)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,r=e.y,s=e.z,a=t.x,o=t.y,l=t.z;return this.x=r*l-s*o,this.y=s*a-n*l,this.z=n*o-r*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return zu.copy(this).projectOnVector(e),this.sub(zu)}reflect(e){return this.sub(zu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(wt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,r=this.z-e.z;return t*t+n*n+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const r=Math.sin(t)*e;return this.x=r*Math.sin(n),this.y=Math.cos(t)*e,this.z=r*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const zu=new E,Hf=new fn;class sn{constructor(e=new E(1/0,1/0,1/0),t=new E(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(Nn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(Nn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=Nn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Nn):Nn.fromBufferAttribute(s,a),Nn.applyMatrix4(e.matrixWorld),this.expandByPoint(Nn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),tl.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),tl.copy(n.boundingBox)),tl.applyMatrix4(e.matrixWorld),this.union(tl)}const r=e.children;for(let s=0,a=r.length;s<a;s++)this.expandByObject(r[s],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ya),nl.subVectors(this.max,ya),fs.subVectors(e.a,ya),ps.subVectors(e.b,ya),ms.subVectors(e.c,ya),Fi.subVectors(ps,fs),ki.subVectors(ms,ps),dr.subVectors(fs,ms);let t=[0,-Fi.z,Fi.y,0,-ki.z,ki.y,0,-dr.z,dr.y,Fi.z,0,-Fi.x,ki.z,0,-ki.x,dr.z,0,-dr.x,-Fi.y,Fi.x,0,-ki.y,ki.x,0,-dr.y,dr.x,0];return!Ou(t,fs,ps,ms,nl)||(t=[1,0,0,0,1,0,0,0,1],!Ou(t,fs,ps,ms,nl))?!1:(il.crossVectors(Fi,ki),t=[il.x,il.y,il.z],Ou(t,fs,ps,ms,nl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(si[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),si[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),si[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),si[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),si[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),si[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),si[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),si[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(si),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const si=[new E,new E,new E,new E,new E,new E,new E,new E],Nn=new E,tl=new sn,fs=new E,ps=new E,ms=new E,Fi=new E,ki=new E,dr=new E,ya=new E,nl=new E,il=new E,fr=new E;function Ou(i,e,t,n,r){for(let s=0,a=i.length-3;s<=a;s+=3){fr.fromArray(i,s);const o=r.x*Math.abs(fr.x)+r.y*Math.abs(fr.y)+r.z*Math.abs(fr.z),l=e.dot(fr),c=t.dot(fr),u=n.dot(fr);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>o)return!1}return!0}const tM=new sn,_a=new E,Fu=new E;class $t{constructor(e=new E,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):tM.setFromPoints(e).getCenter(n);let r=0;for(let s=0,a=e.length;s<a;s++)r=Math.max(r,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;_a.subVectors(e,this.center);const t=_a.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),r=(n-this.radius)*.5;this.center.addScaledVector(_a,r/n),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fu.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(_a.copy(e.center).add(Fu)),this.expandByPoint(_a.copy(e.center).sub(Fu))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const ai=new E,ku=new E,rl=new E,Bi=new E,Bu=new E,sl=new E,Vu=new E;class fa{constructor(e=new E,t=new E(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ai)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ai.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ai.copy(this.origin).addScaledVector(this.direction,t),ai.distanceToSquared(e))}distanceSqToSegment(e,t,n,r){ku.copy(e).add(t).multiplyScalar(.5),rl.copy(t).sub(e).normalize(),Bi.copy(this.origin).sub(ku);const s=e.distanceTo(t)*.5,a=-this.direction.dot(rl),o=Bi.dot(this.direction),l=-Bi.dot(rl),c=Bi.lengthSq(),u=Math.abs(1-a*a);let h,d,f,p;if(u>0)if(h=a*l-o,d=a*o-l,p=s*u,h>=0)if(d>=-p)if(d<=p){const v=1/u;h*=v,d*=v,f=h*(h+a*d+2*o)+d*(a*h+d+2*l)+c}else d=s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d=-s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;else d<=-p?(h=Math.max(0,-(-a*s+o)),d=h>0?-s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c):d<=p?(h=0,d=Math.min(Math.max(-s,-l),s),f=d*(d+2*l)+c):(h=Math.max(0,-(a*s+o)),d=h>0?s:Math.min(Math.max(-s,-l),s),f=-h*h+d*(d+2*l)+c);else d=a>0?-s:s,h=Math.max(0,-(a*d+o)),f=-h*h+d*(d+2*l)+c;return n&&n.copy(this.origin).addScaledVector(this.direction,h),r&&r.copy(ku).addScaledVector(rl,d),f}intersectSphere(e,t){ai.subVectors(e.center,this.origin);const n=ai.dot(this.direction),r=ai.dot(ai)-n*n,s=e.radius*e.radius;if(r>s)return null;const a=Math.sqrt(s-r),o=n-a,l=n+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,r,s,a,o,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(n=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(n=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,a=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,a=(e.min.y-d.y)*u),n>a||s>r||((s>n||isNaN(n))&&(n=s),(a<r||isNaN(r))&&(r=a),h>=0?(o=(e.min.z-d.z)*h,l=(e.max.z-d.z)*h):(o=(e.max.z-d.z)*h,l=(e.min.z-d.z)*h),n>l||o>r)||((o>n||n!==n)&&(n=o),(l<r||r!==r)&&(r=l),r<0)?null:this.at(n>=0?n:r,t)}intersectsBox(e){return this.intersectBox(e,ai)!==null}intersectTriangle(e,t,n,r,s){Bu.subVectors(t,e),sl.subVectors(n,e),Vu.crossVectors(Bu,sl);let a=this.direction.dot(Vu),o;if(a>0){if(r)return null;o=1}else if(a<0)o=-1,a=-a;else return null;Bi.subVectors(this.origin,e);const l=o*this.direction.dot(sl.crossVectors(Bi,sl));if(l<0)return null;const c=o*this.direction.dot(Bu.cross(Bi));if(c<0||l+c>a)return null;const u=-o*Bi.dot(Vu);return u<0?null:this.at(u/a,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class ze{constructor(e,t,n,r,s,a,o,l,c,u,h,d,f,p,v,g){ze.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,r,s,a,o,l,c,u,h,d,f,p,v,g)}set(e,t,n,r,s,a,o,l,c,u,h,d,f,p,v,g){const m=this.elements;return m[0]=e,m[4]=t,m[8]=n,m[12]=r,m[1]=s,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=u,m[10]=h,m[14]=d,m[3]=f,m[7]=p,m[11]=v,m[15]=g,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ze().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,n=e.elements,r=1/gs.setFromMatrixColumn(e,0).length(),s=1/gs.setFromMatrixColumn(e,1).length(),a=1/gs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*r,t[1]=n[1]*r,t[2]=n[2]*r,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,r=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),h=Math.sin(s);if(e.order==="XYZ"){const d=a*u,f=a*h,p=o*u,v=o*h;t[0]=l*u,t[4]=-l*h,t[8]=c,t[1]=f+p*c,t[5]=d-v*c,t[9]=-o*l,t[2]=v-d*c,t[6]=p+f*c,t[10]=a*l}else if(e.order==="YXZ"){const d=l*u,f=l*h,p=c*u,v=c*h;t[0]=d+v*o,t[4]=p*o-f,t[8]=a*c,t[1]=a*h,t[5]=a*u,t[9]=-o,t[2]=f*o-p,t[6]=v+d*o,t[10]=a*l}else if(e.order==="ZXY"){const d=l*u,f=l*h,p=c*u,v=c*h;t[0]=d-v*o,t[4]=-a*h,t[8]=p+f*o,t[1]=f+p*o,t[5]=a*u,t[9]=v-d*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){const d=a*u,f=a*h,p=o*u,v=o*h;t[0]=l*u,t[4]=p*c-f,t[8]=d*c+v,t[1]=l*h,t[5]=v*c+d,t[9]=f*c-p,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){const d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=v-d*h,t[8]=p*h+f,t[1]=h,t[5]=a*u,t[9]=-o*u,t[2]=-c*u,t[6]=f*h+p,t[10]=d-v*h}else if(e.order==="XZY"){const d=a*l,f=a*c,p=o*l,v=o*c;t[0]=l*u,t[4]=-h,t[8]=c*u,t[1]=d*h+v,t[5]=a*u,t[9]=f*h-p,t[2]=p*h-f,t[6]=o*u,t[10]=v*h+d}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(nM,e,iM)}lookAt(e,t,n){const r=this.elements;return gn.subVectors(e,t),gn.lengthSq()===0&&(gn.z=1),gn.normalize(),Vi.crossVectors(n,gn),Vi.lengthSq()===0&&(Math.abs(n.z)===1?gn.x+=1e-4:gn.z+=1e-4,gn.normalize(),Vi.crossVectors(n,gn)),Vi.normalize(),al.crossVectors(gn,Vi),r[0]=Vi.x,r[4]=al.x,r[8]=gn.x,r[1]=Vi.y,r[5]=al.y,r[9]=gn.y,r[2]=Vi.z,r[6]=al.z,r[10]=gn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,r=t.elements,s=this.elements,a=n[0],o=n[4],l=n[8],c=n[12],u=n[1],h=n[5],d=n[9],f=n[13],p=n[2],v=n[6],g=n[10],m=n[14],y=n[3],x=n[7],_=n[11],L=n[15],T=r[0],C=r[4],I=r[8],b=r[12],M=r[1],P=r[5],H=r[9],B=r[13],W=r[2],$=r[6],X=r[10],ae=r[14],q=r[3],_e=r[7],Ee=r[11],be=r[15];return s[0]=a*T+o*M+l*W+c*q,s[4]=a*C+o*P+l*$+c*_e,s[8]=a*I+o*H+l*X+c*Ee,s[12]=a*b+o*B+l*ae+c*be,s[1]=u*T+h*M+d*W+f*q,s[5]=u*C+h*P+d*$+f*_e,s[9]=u*I+h*H+d*X+f*Ee,s[13]=u*b+h*B+d*ae+f*be,s[2]=p*T+v*M+g*W+m*q,s[6]=p*C+v*P+g*$+m*_e,s[10]=p*I+v*H+g*X+m*Ee,s[14]=p*b+v*B+g*ae+m*be,s[3]=y*T+x*M+_*W+L*q,s[7]=y*C+x*P+_*$+L*_e,s[11]=y*I+x*H+_*X+L*Ee,s[15]=y*b+x*B+_*ae+L*be,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],r=e[8],s=e[12],a=e[1],o=e[5],l=e[9],c=e[13],u=e[2],h=e[6],d=e[10],f=e[14],p=e[3],v=e[7],g=e[11],m=e[15];return p*(+s*l*h-r*c*h-s*o*d+n*c*d+r*o*f-n*l*f)+v*(+t*l*f-t*c*d+s*a*d-r*a*f+r*c*u-s*l*u)+g*(+t*c*h-t*o*f-s*a*h+n*a*f+s*o*u-n*c*u)+m*(-r*o*u-t*l*h+t*o*d+r*a*h-n*a*d+n*l*u)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],r=e[2],s=e[3],a=e[4],o=e[5],l=e[6],c=e[7],u=e[8],h=e[9],d=e[10],f=e[11],p=e[12],v=e[13],g=e[14],m=e[15],y=h*g*c-v*d*c+v*l*f-o*g*f-h*l*m+o*d*m,x=p*d*c-u*g*c-p*l*f+a*g*f+u*l*m-a*d*m,_=u*v*c-p*h*c+p*o*f-a*v*f-u*o*m+a*h*m,L=p*h*l-u*v*l-p*o*d+a*v*d+u*o*g-a*h*g,T=t*y+n*x+r*_+s*L;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=y*C,e[1]=(v*d*s-h*g*s-v*r*f+n*g*f+h*r*m-n*d*m)*C,e[2]=(o*g*s-v*l*s+v*r*c-n*g*c-o*r*m+n*l*m)*C,e[3]=(h*l*s-o*d*s-h*r*c+n*d*c+o*r*f-n*l*f)*C,e[4]=x*C,e[5]=(u*g*s-p*d*s+p*r*f-t*g*f-u*r*m+t*d*m)*C,e[6]=(p*l*s-a*g*s-p*r*c+t*g*c+a*r*m-t*l*m)*C,e[7]=(a*d*s-u*l*s+u*r*c-t*d*c-a*r*f+t*l*f)*C,e[8]=_*C,e[9]=(p*h*s-u*v*s-p*n*f+t*v*f+u*n*m-t*h*m)*C,e[10]=(a*v*s-p*o*s+p*n*c-t*v*c-a*n*m+t*o*m)*C,e[11]=(u*o*s-a*h*s-u*n*c+t*h*c+a*n*f-t*o*f)*C,e[12]=L*C,e[13]=(u*v*r-p*h*r+p*n*d-t*v*d-u*n*g+t*h*g)*C,e[14]=(p*o*r-a*v*r-p*n*l+t*v*l+a*n*g-t*o*g)*C,e[15]=(a*h*r-u*o*r+u*n*l-t*h*l-a*n*d+t*o*d)*C,this}scale(e){const t=this.elements,n=e.x,r=e.y,s=e.z;return t[0]*=n,t[4]*=r,t[8]*=s,t[1]*=n,t[5]*=r,t[9]*=s,t[2]*=n,t[6]*=r,t[10]*=s,t[3]*=n,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,r))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),r=Math.sin(t),s=1-n,a=e.x,o=e.y,l=e.z,c=s*a,u=s*o;return this.set(c*a+n,c*o-r*l,c*l+r*o,0,c*o+r*l,u*o+n,u*l-r*a,0,c*l-r*o,u*l+r*a,s*l*l+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,r,s,a){return this.set(1,n,s,0,e,1,a,0,t,r,1,0,0,0,0,1),this}compose(e,t,n){const r=this.elements,s=t._x,a=t._y,o=t._z,l=t._w,c=s+s,u=a+a,h=o+o,d=s*c,f=s*u,p=s*h,v=a*u,g=a*h,m=o*h,y=l*c,x=l*u,_=l*h,L=n.x,T=n.y,C=n.z;return r[0]=(1-(v+m))*L,r[1]=(f+_)*L,r[2]=(p-x)*L,r[3]=0,r[4]=(f-_)*T,r[5]=(1-(d+m))*T,r[6]=(g+y)*T,r[7]=0,r[8]=(p+x)*C,r[9]=(g-y)*C,r[10]=(1-(d+v))*C,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,n){const r=this.elements;let s=gs.set(r[0],r[1],r[2]).length();const a=gs.set(r[4],r[5],r[6]).length(),o=gs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Un.copy(this);const c=1/s,u=1/a,h=1/o;return Un.elements[0]*=c,Un.elements[1]*=c,Un.elements[2]*=c,Un.elements[4]*=u,Un.elements[5]*=u,Un.elements[6]*=u,Un.elements[8]*=h,Un.elements[9]*=h,Un.elements[10]*=h,t.setFromRotationMatrix(Un),n.x=s,n.y=a,n.z=o,this}makePerspective(e,t,n,r,s,a,o=Kn){const l=this.elements,c=2*s/(t-e),u=2*s/(n-r),h=(t+e)/(t-e),d=(n+r)/(n-r);let f,p;if(o===Kn)f=-(a+s)/(a-s),p=-2*a*s/(a-s);else if(o===to)f=-a/(a-s),p=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=f,l[14]=p,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,r,s,a,o=Kn){const l=this.elements,c=1/(t-e),u=1/(n-r),h=1/(a-s),d=(t+e)*c,f=(n+r)*u;let p,v;if(o===Kn)p=(a+s)*h,v=-2*h;else if(o===to)p=s*h,v=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-f,l[2]=0,l[6]=0,l[10]=v,l[14]=-p,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let r=0;r<16;r++)if(t[r]!==n[r])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const gs=new E,Un=new ze,nM=new E(0,0,0),iM=new E(1,1,1),Vi=new E,al=new E,gn=new E,Wf=new ze,Xf=new fn;class wn{constructor(e=0,t=0,n=0,r=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,r=this._order){return this._x=e,this._y=t,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const r=e.elements,s=r[0],a=r[4],o=r[8],l=r[1],c=r[5],u=r[9],h=r[2],d=r[6],f=r[10];switch(t){case"XYZ":this._y=Math.asin(wt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-u,f),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-wt(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,s),this._z=0);break;case"ZXY":this._x=Math.asin(wt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-wt(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,f),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(wt(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,s)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-wt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-u,f),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return Wf.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Wf,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Xf.setFromEuler(this),this.setFromQuaternion(Xf,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class eu{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let rM=0;const qf=new E,vs=new fn,oi=new ze,ol=new E,Ma=new E,sM=new E,aM=new fn,Yf=new E(1,0,0),Zf=new E(0,1,0),$f=new E(0,0,1),jf={type:"added"},oM={type:"removed"},xs={type:"childadded",child:null},Gu={type:"childremoved",child:null};class it extends Ui{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:rM++}),this.uuid=Sn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=it.DEFAULT_UP.clone();const e=new E,t=new wn,n=new fn,r=new E(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new ze},normalMatrix:{value:new We}}),this.matrix=new ze,this.matrixWorld=new ze,this.matrixAutoUpdate=it.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eu,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.multiply(vs),this}rotateOnWorldAxis(e,t){return vs.setFromAxisAngle(e,t),this.quaternion.premultiply(vs),this}rotateX(e){return this.rotateOnAxis(Yf,e)}rotateY(e){return this.rotateOnAxis(Zf,e)}rotateZ(e){return this.rotateOnAxis($f,e)}translateOnAxis(e,t){return qf.copy(e).applyQuaternion(this.quaternion),this.position.add(qf.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Yf,e)}translateY(e){return this.translateOnAxis(Zf,e)}translateZ(e){return this.translateOnAxis($f,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(oi.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?ol.copy(e):ol.set(e,t,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ma.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?oi.lookAt(Ma,ol,this.up):oi.lookAt(ol,Ma,this.up),this.quaternion.setFromRotationMatrix(oi),r&&(oi.extractRotation(r.matrixWorld),vs.setFromRotationMatrix(oi),this.quaternion.premultiply(vs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(jf),xs.child=e,this.dispatchEvent(xs),xs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(oM),Gu.child=e,this.dispatchEvent(Gu),Gu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),oi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),oi.multiply(e.parent.matrixWorld)),e.applyMatrix4(oi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(jf),xs.child=e,this.dispatchEvent(xs),xs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,r=this.children.length;n<r;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const r=this.children;for(let s=0,a=r.length;s<a;s++)r[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,e,sM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ma,aM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,r=t.length;n<r;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,r=t.length;n<r;n++){const s=t[n];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const n=this.parent;if(e===!0&&n!==null&&n.matrixWorldAutoUpdate===!0&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,a=r.length;s<a;s++){const o=r[s];o.matrixWorldAutoUpdate===!0&&o.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.visibility=this._visibility,r.active=this._active,r.bounds=this._bounds.map(o=>({boxInitialized:o.boxInitialized,boxMin:o.box.min.toArray(),boxMax:o.box.max.toArray(),sphereInitialized:o.sphereInitialized,sphereRadius:o.sphere.radius,sphereCenter:o.sphere.center.toArray()})),r.maxGeometryCount=this._maxGeometryCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.geometryCount=this._geometryCount,r.matricesTexture=this._matricesTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere={center:r.boundingSphere.center.toArray(),radius:r.boundingSphere.radius}),this.boundingBox!==null&&(r.boundingBox={min:r.boundingBox.min.toArray(),max:r.boundingBox.max.toArray()}));function s(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];s(e.shapes,h)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(s(e.materials,this.material[l]));r.material=o}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let o=0;o<this.children.length;o++)r.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];r.animations.push(s(e.animations,l))}}if(t){const o=a(e.geometries),l=a(e.materials),c=a(e.textures),u=a(e.images),h=a(e.shapes),d=a(e.skeletons),f=a(e.animations),p=a(e.nodes);o.length>0&&(n.geometries=o),l.length>0&&(n.materials=l),c.length>0&&(n.textures=c),u.length>0&&(n.images=u),h.length>0&&(n.shapes=h),d.length>0&&(n.skeletons=d),f.length>0&&(n.animations=f),p.length>0&&(n.nodes=p)}return n.object=r,n;function a(o){const l=[];for(const c in o){const u=o[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const r=e.children[n];this.add(r.clone())}return this}}it.DEFAULT_UP=new E(0,1,0);it.DEFAULT_MATRIX_AUTO_UPDATE=!0;it.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const zn=new E,li=new E,Hu=new E,ci=new E,ys=new E,_s=new E,Jf=new E,Wu=new E,Xu=new E,qu=new E;class xn{constructor(e=new E,t=new E,n=new E){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,r){r.subVectors(n,t),zn.subVectors(e,t),r.cross(zn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,n,r,s){zn.subVectors(r,t),li.subVectors(n,t),Hu.subVectors(e,t);const a=zn.dot(zn),o=zn.dot(li),l=zn.dot(Hu),c=li.dot(li),u=li.dot(Hu),h=a*c-o*o;if(h===0)return s.set(0,0,0),null;const d=1/h,f=(c*l-o*u)*d,p=(a*u-o*l)*d;return s.set(1-f-p,p,f)}static containsPoint(e,t,n,r){return this.getBarycoord(e,t,n,r,ci)===null?!1:ci.x>=0&&ci.y>=0&&ci.x+ci.y<=1}static getInterpolation(e,t,n,r,s,a,o,l){return this.getBarycoord(e,t,n,r,ci)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,ci.x),l.addScaledVector(a,ci.y),l.addScaledVector(o,ci.z),l)}static isFrontFacing(e,t,n,r){return zn.subVectors(n,t),li.subVectors(e,t),zn.cross(li).dot(r)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,r){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,n,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return zn.subVectors(this.c,this.b),li.subVectors(this.a,this.b),zn.cross(li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return xn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return xn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,r,s){return xn.getInterpolation(e,this.a,this.b,this.c,t,n,r,s)}containsPoint(e){return xn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return xn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,r=this.b,s=this.c;let a,o;ys.subVectors(r,n),_s.subVectors(s,n),Wu.subVectors(e,n);const l=ys.dot(Wu),c=_s.dot(Wu);if(l<=0&&c<=0)return t.copy(n);Xu.subVectors(e,r);const u=ys.dot(Xu),h=_s.dot(Xu);if(u>=0&&h<=u)return t.copy(r);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return a=l/(l-u),t.copy(n).addScaledVector(ys,a);qu.subVectors(e,s);const f=ys.dot(qu),p=_s.dot(qu);if(p>=0&&f<=p)return t.copy(s);const v=f*c-l*p;if(v<=0&&c>=0&&p<=0)return o=c/(c-p),t.copy(n).addScaledVector(_s,o);const g=u*p-f*h;if(g<=0&&h-u>=0&&f-p>=0)return Jf.subVectors(s,r),o=(h-u)/(h-u+(f-p)),t.copy(r).addScaledVector(Jf,o);const m=1/(g+v+d);return a=v*m,o=d*m,t.copy(n).addScaledVector(ys,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Z0={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Gi={h:0,s:0,l:0},ll={h:0,s:0,l:0};function Yu(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class ye{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Rn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,at.toWorkingColorSpace(this,t),this}setRGB(e,t,n,r=at.workingColorSpace){return this.r=e,this.g=t,this.b=n,at.toWorkingColorSpace(this,r),this}setHSL(e,t,n,r=at.workingColorSpace){if(e=Xd(e,1),t=wt(t,0,1),n=wt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=Yu(a,s,e+1/3),this.g=Yu(a,s,e),this.b=Yu(a,s,e-1/3)}return at.toWorkingColorSpace(this,r),this}setStyle(e,t=Rn){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=r[1],o=r[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Rn){const n=Z0[e.toLowerCase()];return n!==void 0?this.setHex(n,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Gs(e.r),this.g=Gs(e.g),this.b=Gs(e.b),this}copyLinearToSRGB(e){return this.r=Nu(e.r),this.g=Nu(e.g),this.b=Nu(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Rn){return at.fromWorkingColorSpace(Yt.copy(this),e),Math.round(wt(Yt.r*255,0,255))*65536+Math.round(wt(Yt.g*255,0,255))*256+Math.round(wt(Yt.b*255,0,255))}getHexString(e=Rn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=at.workingColorSpace){at.fromWorkingColorSpace(Yt.copy(this),t);const n=Yt.r,r=Yt.g,s=Yt.b,a=Math.max(n,r,s),o=Math.min(n,r,s);let l,c;const u=(o+a)/2;if(o===a)l=0,c=0;else{const h=a-o;switch(c=u<=.5?h/(a+o):h/(2-a-o),a){case n:l=(r-s)/h+(r<s?6:0);break;case r:l=(s-n)/h+2;break;case s:l=(n-r)/h+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,t=at.workingColorSpace){return at.fromWorkingColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=Rn){at.fromWorkingColorSpace(Yt.copy(this),e);const t=Yt.r,n=Yt.g,r=Yt.b;return e!==Rn?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(e,t,n){return this.getHSL(Gi),this.setHSL(Gi.h+e,Gi.s+t,Gi.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(Gi),e.getHSL(ll);const n=Oa(Gi.h,ll.h,t),r=Oa(Gi.s,ll.s,t),s=Oa(Gi.l,ll.l,t);return this.setHSL(n,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*r,this.g=s[1]*t+s[4]*n+s[7]*r,this.b=s[2]*t+s[5]*n+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new ye;ye.NAMES=Z0;let lM=0;class Jt extends Ui{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=Sn(),this.name="",this.type="Material",this.blending=Zr,this.side=Ri,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=hc,this.blendDst=dc,this.blendEquation=Yi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ye(0,0,0),this.blendAlpha=0,this.depthFunc=Ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Tr,this.stencilZFail=Tr,this.stencilZPass=Tr,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==Zr&&(n.blending=this.blending),this.side!==Ri&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==hc&&(n.blendSrc=this.blendSrc),this.blendDst!==dc&&(n.blendDst=this.blendDst),this.blendEquation!==Yi&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==Ha&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==ad&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Tr&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Tr&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Tr&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const a=[];for(const o in s){const l=s[o];delete l.metadata,a.push(l)}return a}if(t){const s=r(e.textures),a=r(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const r=t.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class sr extends Jt{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const _i=cM();function cM(){const i=new ArrayBuffer(4),e=new Float32Array(i),t=new Uint32Array(i),n=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(n[l]=0,n[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(n[l]=1024>>-c-14,n[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(n[l]=c+15<<10,n[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(n[l]=31744,n[l|256]=64512,r[l]=24,r[l|256]=24):(n[l]=31744,n[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),a=new Uint32Array(64),o=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)a[l]=l<<23;a[31]=1199570944,a[32]=2147483648;for(let l=33;l<63;++l)a[l]=2147483648+(l-32<<23);a[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(o[l]=1024);return{floatView:e,uint32View:t,baseTable:n,shiftTable:r,mantissaTable:s,exponentTable:a,offsetTable:o}}function on(i){Math.abs(i)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),i=wt(i,-65504,65504),_i.floatView[0]=i;const e=_i.uint32View[0],t=e>>23&511;return _i.baseTable[t]+((e&8388607)>>_i.shiftTable[t])}function Na(i){const e=i>>10;return _i.uint32View[0]=_i.mantissaTable[_i.offsetTable[e]+(i&1023)]+_i.exponentTable[e],_i.floatView[0]}const uM={toHalfFloat:on,fromHalfFloat:Na},It=new E,cl=new j;class ut{constructor(e,t,n=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=eo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.gpuType=yn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return qd("THREE.BufferAttribute: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[n+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)cl.fromBufferAttribute(this,t),cl.applyMatrix3(e),this.setXY(t,cl.x,cl.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix3(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyMatrix4(e),this.setXYZ(t,It.x,It.y,It.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.applyNormalMatrix(e),this.setXYZ(t,It.x,It.y,It.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)It.fromBufferAttribute(this,t),It.transformDirection(e),this.setXYZ(t,It.x,It.y,It.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xe(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==eo&&(e.usage=this.usage),e}}class hM extends ut{constructor(e,t,n){super(new Int8Array(e),t,n)}}class dM extends ut{constructor(e,t,n){super(new Uint8Array(e),t,n)}}class fM extends ut{constructor(e,t,n){super(new Uint8ClampedArray(e),t,n)}}class pM extends ut{constructor(e,t,n){super(new Int16Array(e),t,n)}}class Zd extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class mM extends ut{constructor(e,t,n){super(new Int32Array(e),t,n)}}class $d extends ut{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class gM extends ut{constructor(e,t,n){super(new Uint16Array(e),t,n),this.isFloat16BufferAttribute=!0}getX(e){let t=Na(this.array[e*this.itemSize]);return this.normalized&&(t=tn(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize]=on(t),this}getY(e){let t=Na(this.array[e*this.itemSize+1]);return this.normalized&&(t=tn(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+1]=on(t),this}getZ(e){let t=Na(this.array[e*this.itemSize+2]);return this.normalized&&(t=tn(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+2]=on(t),this}getW(e){let t=Na(this.array[e*this.itemSize+3]);return this.normalized&&(t=tn(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.array[e*this.itemSize+3]=on(t),this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.array[e+0]=on(t),this.array[e+1]=on(n),this}setXYZ(e,t,n,r){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.array[e+0]=on(t),this.array[e+1]=on(n),this.array[e+2]=on(r),this}setXYZW(e,t,n,r,s){return e*=this.itemSize,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.array[e+0]=on(t),this.array[e+1]=on(n),this.array[e+2]=on(r),this.array[e+3]=on(s),this}}class Re extends ut{constructor(e,t,n){super(new Float32Array(e),t,n)}}let vM=0;const En=new ze,Zu=new it,Ms=new E,vn=new sn,Sa=new sn,Ft=new E;class $e extends Ui{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:vM++}),this.uuid=Sn(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(W0(e)?$d:Zd)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new We().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return En.makeRotationFromQuaternion(e),this.applyMatrix4(En),this}rotateX(e){return En.makeRotationX(e),this.applyMatrix4(En),this}rotateY(e){return En.makeRotationY(e),this.applyMatrix4(En),this}rotateZ(e){return En.makeRotationZ(e),this.applyMatrix4(En),this}translate(e,t,n){return En.makeTranslation(e,t,n),this.applyMatrix4(En),this}scale(e,t,n){return En.makeScale(e,t,n),this.applyMatrix4(En),this}lookAt(e){return Zu.lookAt(e),Zu.updateMatrix(),this.applyMatrix4(Zu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=[];for(let n=0,r=e.length;n<r;n++){const s=e[n];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Re(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new E(-1/0,-1/0,-1/0),new E(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,r=t.length;n<r;n++){const s=t[n];vn.setFromBufferAttribute(s),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,vn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,vn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(vn.min),this.boundingBox.expandByPoint(vn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $t);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new E,1/0);return}if(e){const n=this.boundingSphere.center;if(vn.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];Sa.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(vn.min,Sa.min),vn.expandByPoint(Ft),Ft.addVectors(vn.max,Sa.max),vn.expandByPoint(Ft)):(vn.expandByPoint(Sa.min),vn.expandByPoint(Sa.max))}vn.getCenter(n);let r=0;for(let s=0,a=e.count;s<a;s++)Ft.fromBufferAttribute(e,s),r=Math.max(r,n.distanceToSquared(Ft));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],l=this.morphTargetsRelative;for(let c=0,u=o.count;c<u;c++)Ft.fromBufferAttribute(o,c),l&&(Ms.fromBufferAttribute(e,c),Ft.add(Ms)),r=Math.max(r,n.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,r=t.normal,s=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new ut(new Float32Array(4*n.count),4));const a=this.getAttribute("tangent"),o=[],l=[];for(let I=0;I<n.count;I++)o[I]=new E,l[I]=new E;const c=new E,u=new E,h=new E,d=new j,f=new j,p=new j,v=new E,g=new E;function m(I,b,M){c.fromBufferAttribute(n,I),u.fromBufferAttribute(n,b),h.fromBufferAttribute(n,M),d.fromBufferAttribute(s,I),f.fromBufferAttribute(s,b),p.fromBufferAttribute(s,M),u.sub(c),h.sub(c),f.sub(d),p.sub(d);const P=1/(f.x*p.y-p.x*f.y);isFinite(P)&&(v.copy(u).multiplyScalar(p.y).addScaledVector(h,-f.y).multiplyScalar(P),g.copy(h).multiplyScalar(f.x).addScaledVector(u,-p.x).multiplyScalar(P),o[I].add(v),o[b].add(v),o[M].add(v),l[I].add(g),l[b].add(g),l[M].add(g))}let y=this.groups;y.length===0&&(y=[{start:0,count:e.count}]);for(let I=0,b=y.length;I<b;++I){const M=y[I],P=M.start,H=M.count;for(let B=P,W=P+H;B<W;B+=3)m(e.getX(B+0),e.getX(B+1),e.getX(B+2))}const x=new E,_=new E,L=new E,T=new E;function C(I){L.fromBufferAttribute(r,I),T.copy(L);const b=o[I];x.copy(b),x.sub(L.multiplyScalar(L.dot(b))).normalize(),_.crossVectors(T,b);const P=_.dot(l[I])<0?-1:1;a.setXYZW(I,x.x,x.y,x.z,P)}for(let I=0,b=y.length;I<b;++I){const M=y[I],P=M.start,H=M.count;for(let B=P,W=P+H;B<W;B+=3)C(e.getX(B+0)),C(e.getX(B+1)),C(e.getX(B+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new ut(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let d=0,f=n.count;d<f;d++)n.setXYZ(d,0,0,0);const r=new E,s=new E,a=new E,o=new E,l=new E,c=new E,u=new E,h=new E;if(e)for(let d=0,f=e.count;d<f;d+=3){const p=e.getX(d+0),v=e.getX(d+1),g=e.getX(d+2);r.fromBufferAttribute(t,p),s.fromBufferAttribute(t,v),a.fromBufferAttribute(t,g),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),o.fromBufferAttribute(n,p),l.fromBufferAttribute(n,v),c.fromBufferAttribute(n,g),o.add(u),l.add(u),c.add(u),n.setXYZ(p,o.x,o.y,o.z),n.setXYZ(v,l.x,l.y,l.z),n.setXYZ(g,c.x,c.y,c.z)}else for(let d=0,f=t.count;d<f;d+=3)r.fromBufferAttribute(t,d+0),s.fromBufferAttribute(t,d+1),a.fromBufferAttribute(t,d+2),u.subVectors(a,s),h.subVectors(r,s),u.cross(h),n.setXYZ(d+0,u.x,u.y,u.z),n.setXYZ(d+1,u.x,u.y,u.z),n.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,u=o.itemSize,h=o.normalized,d=new c.constructor(l.length*u);let f=0,p=0;for(let v=0,g=l.length;v<g;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*u;for(let m=0;m<u;m++)d[p++]=c[f++]}return new ut(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new $e,n=this.index.array,r=this.attributes;for(const o in r){const l=r[o],c=e(l,n);t.setAttribute(o,c)}const s=this.morphAttributes;for(const o in s){const l=[],c=s[o];for(let u=0,h=c.length;u<h;u++){const d=c[u],f=e(d,n);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,l=a.length;o<l;o++){const c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const l in n){const c=n[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h];u.push(f.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere={center:o.center.toArray(),radius:o.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone(t));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(t))}const s=e.morphAttributes;for(const c in s){const u=[],h=s[c];for(let d=0,f=h.length;d<f;d++)u.push(h[d].clone(t));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let c=0,u=a.length;c<u;c++){const h=a[c];this.addGroup(h.start,h.count,h.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Kf=new ze,pr=new fa,ul=new $t,Qf=new E,Ss=new E,ws=new E,bs=new E,$u=new E,hl=new E,dl=new j,fl=new j,pl=new j,ep=new E,tp=new E,np=new E,ml=new E,gl=new E;class Pt extends it{constructor(e=new $e,t=new sr){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(r,e);const o=this.morphTargetInfluences;if(s&&o){hl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=o[l],h=s[l];u!==0&&($u.fromBufferAttribute(h,e),a?hl.addScaledVector($u,u):hl.addScaledVector($u.sub(t),u))}t.add(hl)}return t}raycast(e,t){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),ul.copy(n.boundingSphere),ul.applyMatrix4(s),pr.copy(e.ray).recast(e.near),!(ul.containsPoint(pr.origin)===!1&&(pr.intersectSphere(ul,Qf)===null||pr.origin.distanceToSquared(Qf)>(e.far-e.near)**2))&&(Kf.copy(s).invert(),pr.copy(e.ray).applyMatrix4(Kf),!(n.boundingBox!==null&&pr.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,pr)))}_computeIntersections(e,t,n){let r;const s=this.geometry,a=this.material,o=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,h=s.attributes.normal,d=s.groups,f=s.drawRange;if(o!==null)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(o.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,L=x;_<L;_+=3){const T=o.getX(_),C=o.getX(_+1),I=o.getX(_+2);r=vl(this,m,e,n,c,u,h,T,C,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const y=o.getX(g),x=o.getX(g+1),_=o.getX(g+2);r=vl(this,a,e,n,c,u,h,y,x,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(a))for(let p=0,v=d.length;p<v;p++){const g=d[p],m=a[g.materialIndex],y=Math.max(g.start,f.start),x=Math.min(l.count,Math.min(g.start+g.count,f.start+f.count));for(let _=y,L=x;_<L;_+=3){const T=_,C=_+1,I=_+2;r=vl(this,m,e,n,c,u,h,T,C,I),r&&(r.faceIndex=Math.floor(_/3),r.face.materialIndex=g.materialIndex,t.push(r))}}else{const p=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let g=p,m=v;g<m;g+=3){const y=g,x=g+1,_=g+2;r=vl(this,a,e,n,c,u,h,y,x,_),r&&(r.faceIndex=Math.floor(g/3),t.push(r))}}}}function xM(i,e,t,n,r,s,a,o){let l;if(e.side===rn?l=n.intersectTriangle(a,s,r,!0,o):l=n.intersectTriangle(r,s,a,e.side===Ri,o),l===null)return null;gl.copy(o),gl.applyMatrix4(i.matrixWorld);const c=t.ray.origin.distanceTo(gl);return c<t.near||c>t.far?null:{distance:c,point:gl.clone(),object:i}}function vl(i,e,t,n,r,s,a,o,l,c){i.getVertexPosition(o,Ss),i.getVertexPosition(l,ws),i.getVertexPosition(c,bs);const u=xM(i,e,t,n,Ss,ws,bs,ml);if(u){r&&(dl.fromBufferAttribute(r,o),fl.fromBufferAttribute(r,l),pl.fromBufferAttribute(r,c),u.uv=xn.getInterpolation(ml,Ss,ws,bs,dl,fl,pl,new j)),s&&(dl.fromBufferAttribute(s,o),fl.fromBufferAttribute(s,l),pl.fromBufferAttribute(s,c),u.uv1=xn.getInterpolation(ml,Ss,ws,bs,dl,fl,pl,new j)),a&&(ep.fromBufferAttribute(a,o),tp.fromBufferAttribute(a,l),np.fromBufferAttribute(a,c),u.normal=xn.getInterpolation(ml,Ss,ws,bs,ep,tp,np,new E),u.normal.dot(n.direction)>0&&u.normal.multiplyScalar(-1));const h={a:o,b:l,c,normal:new E,materialIndex:0};xn.getNormal(Ss,ws,bs,h.normal),u.face=h}return u}class ls extends $e{constructor(e=1,t=1,n=1,r=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:r,heightSegments:s,depthSegments:a};const o=this;r=Math.floor(r),s=Math.floor(s),a=Math.floor(a);const l=[],c=[],u=[],h=[];let d=0,f=0;p("z","y","x",-1,-1,n,t,e,a,s,0),p("z","y","x",1,-1,n,t,-e,a,s,1),p("x","z","y",1,1,e,n,t,r,a,2),p("x","z","y",1,-1,e,n,-t,r,a,3),p("x","y","z",1,-1,e,t,n,r,s,4),p("x","y","z",-1,-1,e,t,-n,r,s,5),this.setIndex(l),this.setAttribute("position",new Re(c,3)),this.setAttribute("normal",new Re(u,3)),this.setAttribute("uv",new Re(h,2));function p(v,g,m,y,x,_,L,T,C,I,b){const M=_/C,P=L/I,H=_/2,B=L/2,W=T/2,$=C+1,X=I+1;let ae=0,q=0;const _e=new E;for(let Ee=0;Ee<X;Ee++){const be=Ee*P-B;for(let je=0;je<$;je++){const rt=je*M-H;_e[v]=rt*y,_e[g]=be*x,_e[m]=W,c.push(_e.x,_e.y,_e.z),_e[v]=0,_e[g]=0,_e[m]=T>0?1:-1,u.push(_e.x,_e.y,_e.z),h.push(je/C),h.push(1-Ee/I),ae+=1}}for(let Ee=0;Ee<I;Ee++)for(let be=0;be<C;be++){const je=d+be+$*Ee,rt=d+be+$*(Ee+1),Y=d+(be+1)+$*(Ee+1),oe=d+(be+1)+$*Ee;l.push(je,rt,oe),l.push(rt,Y,oe),q+=6}o.addGroup(f,q,b),f+=q,d+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ls(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function oa(i){const e={};for(const t in i){e[t]={};for(const n in i[t]){const r=i[t][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=r.clone():Array.isArray(r)?e[t][n]=r.slice():e[t][n]=r}}return e}function en(i){const e={};for(let t=0;t<i.length;t++){const n=oa(i[t]);for(const r in n)e[r]=n[r]}return e}function yM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function $0(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:at.workingColorSpace}const j0={clone:oa,merge:en};var _M=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,MM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Vn extends Jt{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=_M,this.fragmentShader=MM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=oa(e.uniforms),this.uniformsGroups=yM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const a=this.uniforms[r].value;a&&a.isTexture?t.uniforms[r]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[r]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[r]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[r]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[r]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[r]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[r]={type:"m4",value:a.toArray()}:t.uniforms[r]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}}class tu extends it{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ze,this.projectionMatrix=new ze,this.projectionMatrixInverse=new ze,this.coordinateSystem=Kn}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Hi=new E,ip=new j,rp=new j;class Xt extends tu{constructor(e=50,t=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=aa*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(jr*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return aa*2*Math.atan(Math.tan(jr*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){Hi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z),Hi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(Hi.x,Hi.y).multiplyScalar(-e/Hi.z)}getViewSize(e,t){return this.getViewBounds(e,ip,rp),t.subVectors(rp,ip)}setViewOffset(e,t,n,r,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(jr*.5*this.fov)/this.zoom,n=2*t,r=this.aspect*n,s=-.5*r;const a=this.view;if(this.view!==null&&this.view.enabled){const l=a.fullWidth,c=a.fullHeight;s+=a.offsetX*r/l,t-=a.offsetY*n/c,r*=a.width/l,n*=a.height/c}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-n,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const As=-90,Ts=1;class J0 extends it{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Xt(As,Ts,e,t);r.layers=this.layers,this.add(r);const s=new Xt(As,Ts,e,t);s.layers=this.layers,this.add(s);const a=new Xt(As,Ts,e,t);a.layers=this.layers,this.add(a);const o=new Xt(As,Ts,e,t);o.layers=this.layers,this.add(o);const l=new Xt(As,Ts,e,t);l.layers=this.layers,this.add(l);const c=new Xt(As,Ts,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,r,s,a,o,l]=t;for(const c of t)this.remove(c);if(e===Kn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===to)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,l,c,u]=this.children,h=e.getRenderTarget(),d=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),p=e.xr.enabled;e.xr.enabled=!1;const v=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,e.setRenderTarget(n,0,r),e.render(t,s),e.setRenderTarget(n,1,r),e.render(t,a),e.setRenderTarget(n,2,r),e.render(t,o),e.setRenderTarget(n,3,r),e.render(t,l),e.setRenderTarget(n,4,r),e.render(t,c),n.texture.generateMipmaps=v,e.setRenderTarget(n,5,r),e.render(t,u),e.setRenderTarget(h,d,f),e.xr.enabled=p,n.texture.needsPMREMUpdate=!0}}class Bo extends bt{constructor(e,t,n,r,s,a,o,l,c,u){e=e!==void 0?e:[],t=t!==void 0?t:Ii,super(e,t,n,r,s,a,o,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class K0 extends Bn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},r=[n,n,n,n,n,n];this.texture=new Bo(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Lt}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ls(5,5,5),s=new Vn({name:"CubemapFromEquirect",uniforms:oa(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:rn,blending:bi});s.uniforms.tEquirect.value=t;const a=new Pt(r,s),o=t.minFilter;return t.minFilter===Jn&&(t.minFilter=Lt),new J0(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t,n,r){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,r);e.setRenderTarget(s)}}const ju=new E,SM=new E,wM=new We;class qi{constructor(e=new E(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,r){return this.normal.set(e,t,n),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const r=ju.subVectors(n,t).cross(SM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const n=e.delta(ju),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(n,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||wM.getNormalMatrix(e),r=this.coplanarPoint(ju).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const mr=new $t,xl=new E;class Vo{constructor(e=new qi,t=new qi,n=new qi,r=new qi,s=new qi,a=new qi){this.planes=[e,t,n,r,s,a]}set(e,t,n,r,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(r),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Kn){const n=this.planes,r=e.elements,s=r[0],a=r[1],o=r[2],l=r[3],c=r[4],u=r[5],h=r[6],d=r[7],f=r[8],p=r[9],v=r[10],g=r[11],m=r[12],y=r[13],x=r[14],_=r[15];if(n[0].setComponents(l-s,d-c,g-f,_-m).normalize(),n[1].setComponents(l+s,d+c,g+f,_+m).normalize(),n[2].setComponents(l+a,d+u,g+p,_+y).normalize(),n[3].setComponents(l-a,d-u,g-p,_-y).normalize(),n[4].setComponents(l-o,d-h,g-v,_-x).normalize(),t===Kn)n[5].setComponents(l+o,d+h,g+v,_+x).normalize();else if(t===to)n[5].setComponents(o,h,v,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),mr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),mr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(mr)}intersectsSprite(e){return mr.center.set(0,0,0),mr.radius=.7071067811865476,mr.applyMatrix4(e.matrixWorld),this.intersectsSphere(mr)}intersectsSphere(e){const t=this.planes,n=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const r=t[n];if(xl.x=r.normal.x>0?e.max.x:e.min.x,xl.y=r.normal.y>0?e.max.y:e.min.y,xl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(xl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Q0(){let i=null,e=!1,t=null,n=null;function r(s,a){t(s,a),n=i.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(n=i.requestAnimationFrame(r),e=!0)},stop:function(){i.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){i=s}}}function bM(i){const e=new WeakMap;function t(o,l){const c=o.array,u=o.usage,h=c.byteLength,d=i.createBuffer();i.bindBuffer(l,d),i.bufferData(l,c,u),o.onUploadCallback();let f;if(c instanceof Float32Array)f=i.FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=i.HALF_FLOAT:f=i.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=i.SHORT;else if(c instanceof Uint32Array)f=i.UNSIGNED_INT;else if(c instanceof Int32Array)f=i.INT;else if(c instanceof Int8Array)f=i.BYTE;else if(c instanceof Uint8Array)f=i.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:h}}function n(o,l,c){const u=l.array,h=l._updateRange,d=l.updateRanges;if(i.bindBuffer(c,o),h.count===-1&&d.length===0&&i.bufferSubData(c,0,u),d.length!==0){for(let f=0,p=d.length;f<p;f++){const v=d[f];i.bufferSubData(c,v.start*u.BYTES_PER_ELEMENT,u,v.start,v.count)}l.clearUpdateRanges()}h.count!==-1&&(i.bufferSubData(c,h.offset*u.BYTES_PER_ELEMENT,u,h.offset,h.count),h.count=-1),l.onUploadCallback()}function r(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(i.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isGLBufferAttribute){const u=e.get(o);(!u||u.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(c.buffer,o,l),c.version=o.version}}return{get:r,remove:s,update:a}}class pa extends $e{constructor(e=1,t=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:r};const s=e/2,a=t/2,o=Math.floor(n),l=Math.floor(r),c=o+1,u=l+1,h=e/o,d=t/l,f=[],p=[],v=[],g=[];for(let m=0;m<u;m++){const y=m*d-a;for(let x=0;x<c;x++){const _=x*h-s;p.push(_,-y,0),v.push(0,0,1),g.push(x/o),g.push(1-m/l)}}for(let m=0;m<l;m++)for(let y=0;y<o;y++){const x=y+c*m,_=y+c*(m+1),L=y+1+c*(m+1),T=y+1+c*m;f.push(x,_,T),f.push(_,L,T)}this.setIndex(f),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(v,3)),this.setAttribute("uv",new Re(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new pa(e.width,e.height,e.widthSegments,e.heightSegments)}}var AM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,TM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,EM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,IM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,LM=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,PM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
	attribute float batchId;
	uniform highp sampler2D batchingTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,NM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( batchId );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,FM=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,kM=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,BM=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,WM=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,XM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,qM=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,YM=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( batchId );
	vColor.xyz *= batchingColor.xyz;
#endif`,ZM=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,$M=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,jM=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,JM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,KM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,tS="gl_FragColor = linearToOutputTexel( gl_FragColor );",nS=`
const mat3 LINEAR_SRGB_TO_LINEAR_DISPLAY_P3 = mat3(
	vec3( 0.8224621, 0.177538, 0.0 ),
	vec3( 0.0331941, 0.9668058, 0.0 ),
	vec3( 0.0170827, 0.0723974, 0.9105199 )
);
const mat3 LINEAR_DISPLAY_P3_TO_LINEAR_SRGB = mat3(
	vec3( 1.2249401, - 0.2249404, 0.0 ),
	vec3( - 0.0420569, 1.0420571, 0.0 ),
	vec3( - 0.0196376, - 0.0786361, 1.0982735 )
);
vec4 LinearSRGBToLinearDisplayP3( in vec4 value ) {
	return vec4( value.rgb * LINEAR_SRGB_TO_LINEAR_DISPLAY_P3, value.a );
}
vec4 LinearDisplayP3ToLinearSRGB( in vec4 value ) {
	return vec4( value.rgb * LINEAR_DISPLAY_P3_TO_LINEAR_SRGB, value.a );
}
vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}
vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return sRGBTransferOETF( value );
}`,iS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,sS=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,aS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,oS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,lS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,cS=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,uS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,hS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,fS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,pS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,mS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,vS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,xS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,yS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,_S=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,MS=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,SS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,wS=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,AS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,TS=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,ES=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,CS=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,RS=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,IS=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = vec4( mix( pow( sampledDiffuseColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), sampledDiffuseColor.rgb * 0.0773993808, vec3( lessThanEqual( sampledDiffuseColor.rgb, vec3( 0.04045 ) ) ) ), sampledDiffuseColor.w );
	
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,PS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,DS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,NS=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,US=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,OS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,FS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,kS=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,BS=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,VS=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GS=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,HS=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,WS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XS=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qS=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,YS=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,ZS=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$S=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jS=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,JS=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,KS=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QS=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ew=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,sw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,aw=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return shadow;
	}
#endif`,ow=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,lw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,cw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,uw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,hw=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,dw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,fw=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,pw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mw=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vw=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,xw=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,yw=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
		
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
		
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		
		#else
		
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,_w=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Mw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,Sw=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ww=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Aw=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Ew=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Iw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Lw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Pw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Dw=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Ow=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Fw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,kw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Vw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Gw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Hw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ww=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Xw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,qw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Yw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,$w=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Jw=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Kw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Qw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,eb=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,tb=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,nb=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,ib=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ze={alphahash_fragment:AM,alphahash_pars_fragment:TM,alphamap_fragment:EM,alphamap_pars_fragment:CM,alphatest_fragment:RM,alphatest_pars_fragment:IM,aomap_fragment:LM,aomap_pars_fragment:PM,batching_pars_vertex:DM,batching_vertex:NM,begin_vertex:UM,beginnormal_vertex:zM,bsdfs:OM,iridescence_fragment:FM,bumpmap_pars_fragment:kM,clipping_planes_fragment:BM,clipping_planes_pars_fragment:VM,clipping_planes_pars_vertex:GM,clipping_planes_vertex:HM,color_fragment:WM,color_pars_fragment:XM,color_pars_vertex:qM,color_vertex:YM,common:ZM,cube_uv_reflection_fragment:$M,defaultnormal_vertex:jM,displacementmap_pars_vertex:JM,displacementmap_vertex:KM,emissivemap_fragment:QM,emissivemap_pars_fragment:eS,colorspace_fragment:tS,colorspace_pars_fragment:nS,envmap_fragment:iS,envmap_common_pars_fragment:rS,envmap_pars_fragment:sS,envmap_pars_vertex:aS,envmap_physical_pars_fragment:vS,envmap_vertex:oS,fog_vertex:lS,fog_pars_vertex:cS,fog_fragment:uS,fog_pars_fragment:hS,gradientmap_pars_fragment:dS,lightmap_pars_fragment:fS,lights_lambert_fragment:pS,lights_lambert_pars_fragment:mS,lights_pars_begin:gS,lights_toon_fragment:xS,lights_toon_pars_fragment:yS,lights_phong_fragment:_S,lights_phong_pars_fragment:MS,lights_physical_fragment:SS,lights_physical_pars_fragment:wS,lights_fragment_begin:bS,lights_fragment_maps:AS,lights_fragment_end:TS,logdepthbuf_fragment:ES,logdepthbuf_pars_fragment:CS,logdepthbuf_pars_vertex:RS,logdepthbuf_vertex:IS,map_fragment:LS,map_pars_fragment:PS,map_particle_fragment:DS,map_particle_pars_fragment:NS,metalnessmap_fragment:US,metalnessmap_pars_fragment:zS,morphinstance_vertex:OS,morphcolor_vertex:FS,morphnormal_vertex:kS,morphtarget_pars_vertex:BS,morphtarget_vertex:VS,normal_fragment_begin:GS,normal_fragment_maps:HS,normal_pars_fragment:WS,normal_pars_vertex:XS,normal_vertex:qS,normalmap_pars_fragment:YS,clearcoat_normal_fragment_begin:ZS,clearcoat_normal_fragment_maps:$S,clearcoat_pars_fragment:jS,iridescence_pars_fragment:JS,opaque_fragment:KS,packing:QS,premultiplied_alpha_fragment:ew,project_vertex:tw,dithering_fragment:nw,dithering_pars_fragment:iw,roughnessmap_fragment:rw,roughnessmap_pars_fragment:sw,shadowmap_pars_fragment:aw,shadowmap_pars_vertex:ow,shadowmap_vertex:lw,shadowmask_pars_fragment:cw,skinbase_vertex:uw,skinning_pars_vertex:hw,skinning_vertex:dw,skinnormal_vertex:fw,specularmap_fragment:pw,specularmap_pars_fragment:mw,tonemapping_fragment:gw,tonemapping_pars_fragment:vw,transmission_fragment:xw,transmission_pars_fragment:yw,uv_pars_fragment:_w,uv_pars_vertex:Mw,uv_vertex:Sw,worldpos_vertex:ww,background_vert:bw,background_frag:Aw,backgroundCube_vert:Tw,backgroundCube_frag:Ew,cube_vert:Cw,cube_frag:Rw,depth_vert:Iw,depth_frag:Lw,distanceRGBA_vert:Pw,distanceRGBA_frag:Dw,equirect_vert:Nw,equirect_frag:Uw,linedashed_vert:zw,linedashed_frag:Ow,meshbasic_vert:Fw,meshbasic_frag:kw,meshlambert_vert:Bw,meshlambert_frag:Vw,meshmatcap_vert:Gw,meshmatcap_frag:Hw,meshnormal_vert:Ww,meshnormal_frag:Xw,meshphong_vert:qw,meshphong_frag:Yw,meshphysical_vert:Zw,meshphysical_frag:$w,meshtoon_vert:jw,meshtoon_frag:Jw,points_vert:Kw,points_frag:Qw,shadow_vert:eb,shadow_frag:tb,sprite_vert:nb,sprite_frag:ib},pe={common:{diffuse:{value:new ye(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},envMapRotation:{value:new We},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new j(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ye(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ye(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new ye(16777215)},opacity:{value:1},center:{value:new j(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Fn={basic:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.fog]),vertexShader:Ze.meshbasic_vert,fragmentShader:Ze.meshbasic_frag},lambert:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ze.meshlambert_vert,fragmentShader:Ze.meshlambert_frag},phong:{uniforms:en([pe.common,pe.specularmap,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,pe.lights,{emissive:{value:new ye(0)},specular:{value:new ye(1118481)},shininess:{value:30}}]),vertexShader:Ze.meshphong_vert,fragmentShader:Ze.meshphong_frag},standard:{uniforms:en([pe.common,pe.envmap,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.roughnessmap,pe.metalnessmap,pe.fog,pe.lights,{emissive:{value:new ye(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag},toon:{uniforms:en([pe.common,pe.aomap,pe.lightmap,pe.emissivemap,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.gradientmap,pe.fog,pe.lights,{emissive:{value:new ye(0)}}]),vertexShader:Ze.meshtoon_vert,fragmentShader:Ze.meshtoon_frag},matcap:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,pe.fog,{matcap:{value:null}}]),vertexShader:Ze.meshmatcap_vert,fragmentShader:Ze.meshmatcap_frag},points:{uniforms:en([pe.points,pe.fog]),vertexShader:Ze.points_vert,fragmentShader:Ze.points_frag},dashed:{uniforms:en([pe.common,pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ze.linedashed_vert,fragmentShader:Ze.linedashed_frag},depth:{uniforms:en([pe.common,pe.displacementmap]),vertexShader:Ze.depth_vert,fragmentShader:Ze.depth_frag},normal:{uniforms:en([pe.common,pe.bumpmap,pe.normalmap,pe.displacementmap,{opacity:{value:1}}]),vertexShader:Ze.meshnormal_vert,fragmentShader:Ze.meshnormal_frag},sprite:{uniforms:en([pe.sprite,pe.fog]),vertexShader:Ze.sprite_vert,fragmentShader:Ze.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ze.background_vert,fragmentShader:Ze.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new We}},vertexShader:Ze.backgroundCube_vert,fragmentShader:Ze.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ze.cube_vert,fragmentShader:Ze.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ze.equirect_vert,fragmentShader:Ze.equirect_frag},distanceRGBA:{uniforms:en([pe.common,pe.displacementmap,{referencePosition:{value:new E},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ze.distanceRGBA_vert,fragmentShader:Ze.distanceRGBA_frag},shadow:{uniforms:en([pe.lights,pe.fog,{color:{value:new ye(0)},opacity:{value:1}}]),vertexShader:Ze.shadow_vert,fragmentShader:Ze.shadow_frag}};Fn.physical={uniforms:en([Fn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new j(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new ye(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new j},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new ye(0)},specularColor:{value:new ye(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new j},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ze.meshphysical_vert,fragmentShader:Ze.meshphysical_frag};const yl={r:0,b:0,g:0},gr=new wn,rb=new ze;function sb(i,e,t,n,r,s,a){const o=new ye(0);let l=s===!0?0:1,c,u,h=null,d=0,f=null;function p(y){let x=y.isScene===!0?y.background:null;return x&&x.isTexture&&(x=(y.backgroundBlurriness>0?t:e).get(x)),x}function v(y){let x=!1;const _=p(y);_===null?m(o,l):_&&_.isColor&&(m(_,1),x=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?n.buffers.color.setClear(0,0,0,1,a):L==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,a),(i.autoClear||x)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function g(y,x){const _=p(x);_&&(_.isCubeTexture||_.mapping===da)?(u===void 0&&(u=new Pt(new ls(1,1,1),new Vn({name:"BackgroundCubeMaterial",uniforms:oa(Fn.backgroundCube.uniforms),vertexShader:Fn.backgroundCube.vertexShader,fragmentShader:Fn.backgroundCube.fragmentShader,side:rn,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(L,T,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),gr.copy(x.backgroundRotation),gr.x*=-1,gr.y*=-1,gr.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&(gr.y*=-1,gr.z*=-1),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=x.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(rb.makeRotationFromEuler(gr)),u.material.toneMapped=at.getTransfer(_.colorSpace)!==pt,(h!==_||d!==_.version||f!==i.toneMapping)&&(u.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),u.layers.enableAll(),y.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new Pt(new pa(2,2),new Vn({name:"BackgroundMaterial",uniforms:oa(Fn.background.uniforms),vertexShader:Fn.background.vertexShader,fragmentShader:Fn.background.fragmentShader,side:Ri,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=x.backgroundIntensity,c.material.toneMapped=at.getTransfer(_.colorSpace)!==pt,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||f!==i.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,f=i.toneMapping),c.layers.enableAll(),y.unshift(c,c.geometry,c.material,0,0,null))}function m(y,x){y.getRGB(yl,$0(i)),n.buffers.color.setClear(yl.r,yl.g,yl.b,x,a)}return{getClearColor:function(){return o},setClearColor:function(y,x=1){o.set(y),l=x,m(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(y){l=y,m(o,l)},render:v,addToRenderList:g}}function ab(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=d(null);let s=r,a=!1;function o(M,P,H,B,W){let $=!1;const X=h(B,H,P);s!==X&&(s=X,c(s.object)),$=f(M,B,H,W),$&&p(M,B,H,W),W!==null&&e.update(W,i.ELEMENT_ARRAY_BUFFER),($||a)&&(a=!1,_(M,P,H,B),W!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return i.createVertexArray()}function c(M){return i.bindVertexArray(M)}function u(M){return i.deleteVertexArray(M)}function h(M,P,H){const B=H.wireframe===!0;let W=n[M.id];W===void 0&&(W={},n[M.id]=W);let $=W[P.id];$===void 0&&($={},W[P.id]=$);let X=$[B];return X===void 0&&(X=d(l()),$[B]=X),X}function d(M){const P=[],H=[],B=[];for(let W=0;W<t;W++)P[W]=0,H[W]=0,B[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:H,attributeDivisors:B,object:M,attributes:{},index:null}}function f(M,P,H,B){const W=s.attributes,$=P.attributes;let X=0;const ae=H.getAttributes();for(const q in ae)if(ae[q].location>=0){const Ee=W[q];let be=$[q];if(be===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(be=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(be=M.instanceColor)),Ee===void 0||Ee.attribute!==be||be&&Ee.data!==be.data)return!0;X++}return s.attributesNum!==X||s.index!==B}function p(M,P,H,B){const W={},$=P.attributes;let X=0;const ae=H.getAttributes();for(const q in ae)if(ae[q].location>=0){let Ee=$[q];Ee===void 0&&(q==="instanceMatrix"&&M.instanceMatrix&&(Ee=M.instanceMatrix),q==="instanceColor"&&M.instanceColor&&(Ee=M.instanceColor));const be={};be.attribute=Ee,Ee&&Ee.data&&(be.data=Ee.data),W[q]=be,X++}s.attributes=W,s.attributesNum=X,s.index=B}function v(){const M=s.newAttributes;for(let P=0,H=M.length;P<H;P++)M[P]=0}function g(M){m(M,0)}function m(M,P){const H=s.newAttributes,B=s.enabledAttributes,W=s.attributeDivisors;H[M]=1,B[M]===0&&(i.enableVertexAttribArray(M),B[M]=1),W[M]!==P&&(i.vertexAttribDivisor(M,P),W[M]=P)}function y(){const M=s.newAttributes,P=s.enabledAttributes;for(let H=0,B=P.length;H<B;H++)P[H]!==M[H]&&(i.disableVertexAttribArray(H),P[H]=0)}function x(M,P,H,B,W,$,X){X===!0?i.vertexAttribIPointer(M,P,H,W,$):i.vertexAttribPointer(M,P,H,B,W,$)}function _(M,P,H,B){v();const W=B.attributes,$=H.getAttributes(),X=P.defaultAttributeValues;for(const ae in $){const q=$[ae];if(q.location>=0){let _e=W[ae];if(_e===void 0&&(ae==="instanceMatrix"&&M.instanceMatrix&&(_e=M.instanceMatrix),ae==="instanceColor"&&M.instanceColor&&(_e=M.instanceColor)),_e!==void 0){const Ee=_e.normalized,be=_e.itemSize,je=e.get(_e);if(je===void 0)continue;const rt=je.buffer,Y=je.type,oe=je.bytesPerElement,Ae=Y===i.INT||Y===i.UNSIGNED_INT||_e.gpuType===zd;if(_e.isInterleavedBufferAttribute){const de=_e.data,He=de.stride,qe=_e.offset;if(de.isInstancedInterleavedBuffer){for(let Ve=0;Ve<q.locationSize;Ve++)m(q.location+Ve,de.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=de.meshPerAttribute*de.count)}else for(let Ve=0;Ve<q.locationSize;Ve++)g(q.location+Ve);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let Ve=0;Ve<q.locationSize;Ve++)x(q.location+Ve,be/q.locationSize,Y,Ee,He*oe,(qe+be/q.locationSize*Ve)*oe,Ae)}else{if(_e.isInstancedBufferAttribute){for(let de=0;de<q.locationSize;de++)m(q.location+de,_e.meshPerAttribute);M.isInstancedMesh!==!0&&B._maxInstanceCount===void 0&&(B._maxInstanceCount=_e.meshPerAttribute*_e.count)}else for(let de=0;de<q.locationSize;de++)g(q.location+de);i.bindBuffer(i.ARRAY_BUFFER,rt);for(let de=0;de<q.locationSize;de++)x(q.location+de,be/q.locationSize,Y,Ee,be*oe,be/q.locationSize*de*oe,Ae)}}else if(X!==void 0){const Ee=X[ae];if(Ee!==void 0)switch(Ee.length){case 2:i.vertexAttrib2fv(q.location,Ee);break;case 3:i.vertexAttrib3fv(q.location,Ee);break;case 4:i.vertexAttrib4fv(q.location,Ee);break;default:i.vertexAttrib1fv(q.location,Ee)}}}}y()}function L(){I();for(const M in n){const P=n[M];for(const H in P){const B=P[H];for(const W in B)u(B[W].object),delete B[W];delete P[H]}delete n[M]}}function T(M){if(n[M.id]===void 0)return;const P=n[M.id];for(const H in P){const B=P[H];for(const W in B)u(B[W].object),delete B[W];delete P[H]}delete n[M.id]}function C(M){for(const P in n){const H=n[P];if(H[M.id]===void 0)continue;const B=H[M.id];for(const W in B)u(B[W].object),delete B[W];delete H[M.id]}}function I(){b(),a=!0,s!==r&&(s=r,c(s.object))}function b(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:o,reset:I,resetDefaultState:b,dispose:L,releaseStatesOfGeometry:T,releaseStatesOfProgram:C,initAttributes:v,enableAttribute:g,disableUnusedAttributes:y}}function ob(i,e,t){let n;function r(c){n=c}function s(c,u){i.drawArrays(n,c,u),t.update(u,n,1)}function a(c,u,h){h!==0&&(i.drawArraysInstanced(n,c,u,h),t.update(u,n,h))}function o(c,u,h){if(h===0)return;const d=e.get("WEBGL_multi_draw");if(d===null)for(let f=0;f<h;f++)this.render(c[f],u[f]);else{d.multiDrawArraysWEBGL(n,c,0,u,0,h);let f=0;for(let p=0;p<h;p++)f+=u[p];t.update(f,n,1)}}function l(c,u,h,d){if(h===0)return;const f=e.get("WEBGL_multi_draw");if(f===null)for(let p=0;p<c.length;p++)a(c[p],u[p],d[p]);else{f.multiDrawArraysInstancedWEBGL(n,c,0,u,0,d,0,h);let p=0;for(let v=0;v<h;v++)p+=u[v];for(let v=0;v<d.length;v++)t.update(p,n,d[v])}}this.setMode=r,this.render=s,this.renderInstances=a,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function lb(i,e,t,n){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const T=e.get("EXT_texture_filter_anisotropic");r=i.getParameter(T.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function a(T){return!(T!==dn&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(T){const C=T===Fo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(T!==Li&&n.convert(T)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&T!==yn&&!C)}function l(T){if(T==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";T="mediump"}return T==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=t.logarithmicDepthBuffer===!0,d=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),f=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),g=i.getParameter(i.MAX_VERTEX_ATTRIBS),m=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),y=i.getParameter(i.MAX_VARYING_VECTORS),x=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),_=f>0,L=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:h,maxTextures:d,maxVertexTextures:f,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:y,maxFragmentUniforms:x,vertexTextures:_,maxSamples:L}}function cb(i){const e=this;let t=null,n=0,r=!1,s=!1;const a=new qi,o=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const f=h.length!==0||d||n!==0||r;return r=d,n=h.length,f},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(h,d){t=u(h,d,0)},this.setState=function(h,d,f){const p=h.clippingPlanes,v=h.clipIntersection,g=h.clipShadows,m=i.get(h);if(!r||p===null||p.length===0||s&&!g)s?u(null):c();else{const y=s?0:n,x=y*4;let _=m.clippingState||null;l.value=_,_=u(p,d,x,f);for(let L=0;L!==x;++L)_[L]=t[L];m.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=y}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function u(h,d,f,p){const v=h!==null?h.length:0;let g=null;if(v!==0){if(g=l.value,p!==!0||g===null){const m=f+v*4,y=d.matrixWorldInverse;o.getNormalMatrix(y),(g===null||g.length<m)&&(g=new Float32Array(m));for(let x=0,_=f;x!==v;++x,_+=4)a.copy(h[x]).applyMatrix4(y,o),a.normal.toArray(g,_),g[_+3]=a.constant}l.value=g,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,g}}function ub(i){let e=new WeakMap;function t(a,o){return o===Wa?a.mapping=Ii:o===Xa&&(a.mapping=tr),a}function n(a){if(a&&a.isTexture){const o=a.mapping;if(o===Wa||o===Xa)if(e.has(a)){const l=e.get(a).texture;return t(l,a.mapping)}else{const l=a.image;if(l&&l.height>0){const c=new K0(l.height);return c.fromEquirectangularTexture(i,a),e.set(a,c),a.addEventListener("dispose",r),t(c.texture,a.mapping)}else return null}}return a}function r(a){const o=a.target;o.removeEventListener("dispose",r);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function s(){e=new WeakMap}return{get:n,dispose:s}}class nu extends tu{constructor(e=-1,t=1,n=1,r=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=r,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,r,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,a=s+c*this.view.width,o-=u*this.view.offsetY,l=o-u*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const ks=4,sp=[.125,.215,.35,.446,.526,.582],Cr=20,Ju=new nu,ap=new ye;let Ku=null,Qu=0,eh=0,th=!1;const Er=(1+Math.sqrt(5))/2,Es=1/Er,op=[new E(-Er,Es,0),new E(Er,Es,0),new E(-Es,0,Er),new E(Es,0,Er),new E(0,Er,-Es),new E(0,Er,Es),new E(-1,1,-1),new E(1,1,-1),new E(-1,1,1),new E(1,1,1)];class ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,n=.1,r=100){Ku=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,n,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=up(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=cp(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Ku,Qu,eh),this._renderer.xr.enabled=th,e.scissorTest=!1,_l(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ii||e.mapping===tr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ku=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),eh=this._renderer.getActiveMipmapLevel(),th=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:Lt,minFilter:Lt,generateMipmaps:!1,type:Fo,format:dn,colorSpace:ni,depthBuffer:!1},r=lp(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=lp(e,t,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=hb(s)),this._blurMaterial=db(s,e,t)}return r}_compileMaterial(e){const t=new Pt(this._lodPlanes[0],e);this._renderer.compile(t,Ju)}_sceneToCubeUV(e,t,n,r){const o=new Xt(90,1,t,n),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(ap),u.toneMapping=Ai,u.autoClear=!1;const f=new sr({name:"PMREM.Background",side:rn,depthWrite:!1,depthTest:!1}),p=new Pt(new ls,f);let v=!1;const g=e.background;g?g.isColor&&(f.color.copy(g),e.background=null,v=!0):(f.color.copy(ap),v=!0);for(let m=0;m<6;m++){const y=m%3;y===0?(o.up.set(0,l[m],0),o.lookAt(c[m],0,0)):y===1?(o.up.set(0,0,l[m]),o.lookAt(0,c[m],0)):(o.up.set(0,l[m],0),o.lookAt(0,0,c[m]));const x=this._cubeSize;_l(r,y*x,m>2?x:0,x,x),u.setRenderTarget(r),v&&u.render(p,o),u.render(e,o)}p.geometry.dispose(),p.material.dispose(),u.toneMapping=d,u.autoClear=h,e.background=g}_textureToCubeUV(e,t){const n=this._renderer,r=e.mapping===Ii||e.mapping===tr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=up()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=cp());const s=r?this._cubemapMaterial:this._equirectMaterial,a=new Pt(this._lodPlanes[0],s),o=s.uniforms;o.envMap.value=e;const l=this._cubeSize;_l(t,0,0,3*l,2*l),n.setRenderTarget(t),n.render(a,Ju)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const a=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),o=op[(r-s-1)%op.length];this._blur(e,s-1,s,a,o)}t.autoClear=n}_blur(e,t,n,r,s){const a=this._pingPongRenderTarget;this._halfBlur(e,a,t,n,r,"latitudinal",s),this._halfBlur(a,e,n,n,r,"longitudinal",s)}_halfBlur(e,t,n,r,s,a,o){const l=this._renderer,c=this._blurMaterial;a!=="latitudinal"&&a!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Pt(this._lodPlanes[r],c),d=c.uniforms,f=this._sizeLods[n]-1,p=isFinite(s)?Math.PI/(2*f):2*Math.PI/(2*Cr-1),v=s/p,g=isFinite(s)?1+Math.floor(u*v):Cr;g>Cr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${g} samples when the maximum is set to ${Cr}`);const m=[];let y=0;for(let C=0;C<Cr;++C){const I=C/v,b=Math.exp(-I*I/2);m.push(b),C===0?y+=b:C<g&&(y+=2*b)}for(let C=0;C<m.length;C++)m[C]=m[C]/y;d.envMap.value=e.texture,d.samples.value=g,d.weights.value=m,d.latitudinal.value=a==="latitudinal",o&&(d.poleAxis.value=o);const{_lodMax:x}=this;d.dTheta.value=p,d.mipInt.value=x-n;const _=this._sizeLods[r],L=3*_*(r>x-ks?r-x+ks:0),T=4*(this._cubeSize-_);_l(t,L,T,3*_,2*_),l.setRenderTarget(t),l.render(h,Ju)}}function hb(i){const e=[],t=[],n=[];let r=i;const s=i-ks+1+sp.length;for(let a=0;a<s;a++){const o=Math.pow(2,r);t.push(o);let l=1/o;a>i-ks?l=sp[a-i+ks-1]:a===0&&(l=0),n.push(l);const c=1/(o-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],f=6,p=6,v=3,g=2,m=1,y=new Float32Array(v*p*f),x=new Float32Array(g*p*f),_=new Float32Array(m*p*f);for(let T=0;T<f;T++){const C=T%3*2/3-1,I=T>2?0:-1,b=[C,I,0,C+2/3,I,0,C+2/3,I+1,0,C,I,0,C+2/3,I+1,0,C,I+1,0];y.set(b,v*p*T),x.set(d,g*p*T);const M=[T,T,T,T,T,T];_.set(M,m*p*T)}const L=new $e;L.setAttribute("position",new ut(y,v)),L.setAttribute("uv",new ut(x,g)),L.setAttribute("faceIndex",new ut(_,m)),e.push(L),r>ks&&r--}return{lodPlanes:e,sizeLods:t,sigmas:n}}function lp(i,e,t){const n=new Bn(i,e,t);return n.texture.mapping=da,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function _l(i,e,t,n,r){i.viewport.set(e,t,n,r),i.scissor.set(e,t,n,r)}function db(i,e,t){const n=new Float32Array(Cr),r=new E(0,1,0);return new Vn({name:"SphericalGaussianBlur",defines:{n:Cr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function cp(){return new Vn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function up(){return new Vn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:jd(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:bi,depthTest:!1,depthWrite:!1})}function jd(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function fb(i){let e=new WeakMap,t=null;function n(o){if(o&&o.isTexture){const l=o.mapping,c=l===Wa||l===Xa,u=l===Ii||l===tr;if(c||u){let h=e.get(o);const d=h!==void 0?h.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==d)return t===null&&(t=new ld(i)),h=c?t.fromEquirectangular(o,h):t.fromCubemap(o,h),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),h.texture;if(h!==void 0)return h.texture;{const f=o.image;return c&&f&&f.height>0||u&&f&&r(f)?(t===null&&(t=new ld(i)),h=c?t.fromEquirectangular(o):t.fromCubemap(o),h.texture.pmremVersion=o.pmremVersion,e.set(o,h),o.addEventListener("dispose",s),h.texture):null}}}return o}function r(o){let l=0;const c=6;for(let u=0;u<c;u++)o[u]!==void 0&&l++;return l===c}function s(o){const l=o.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function a(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:n,dispose:a}}function pb(i){const e={};function t(n){if(e[n]!==void 0)return e[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return e[n]=r,r}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const r=t(n);return r===null&&qd("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function mb(i,e,t,n){const r={},s=new WeakMap;function a(h){const d=h.target;d.index!==null&&e.remove(d.index);for(const p in d.attributes)e.remove(d.attributes[p]);for(const p in d.morphAttributes){const v=d.morphAttributes[p];for(let g=0,m=v.length;g<m;g++)e.remove(v[g])}d.removeEventListener("dispose",a),delete r[d.id];const f=s.get(d);f&&(e.remove(f),s.delete(d)),n.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,t.memory.geometries--}function o(h,d){return r[d.id]===!0||(d.addEventListener("dispose",a),r[d.id]=!0,t.memory.geometries++),d}function l(h){const d=h.attributes;for(const p in d)e.update(d[p],i.ARRAY_BUFFER);const f=h.morphAttributes;for(const p in f){const v=f[p];for(let g=0,m=v.length;g<m;g++)e.update(v[g],i.ARRAY_BUFFER)}}function c(h){const d=[],f=h.index,p=h.attributes.position;let v=0;if(f!==null){const y=f.array;v=f.version;for(let x=0,_=y.length;x<_;x+=3){const L=y[x+0],T=y[x+1],C=y[x+2];d.push(L,T,T,C,C,L)}}else if(p!==void 0){const y=p.array;v=p.version;for(let x=0,_=y.length/3-1;x<_;x+=3){const L=x+0,T=x+1,C=x+2;d.push(L,T,T,C,C,L)}}else return;const g=new(W0(d)?$d:Zd)(d,1);g.version=v;const m=s.get(h);m&&e.remove(m),s.set(h,g)}function u(h){const d=s.get(h);if(d){const f=h.index;f!==null&&d.version<f.version&&c(h)}else c(h);return s.get(h)}return{get:o,update:l,getWireframeAttribute:u}}function gb(i,e,t){let n;function r(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function l(d,f){i.drawElements(n,f,s,d*a),t.update(f,n,1)}function c(d,f,p){p!==0&&(i.drawElementsInstanced(n,f,s,d*a,p),t.update(f,n,p))}function u(d,f,p){if(p===0)return;const v=e.get("WEBGL_multi_draw");if(v===null)for(let g=0;g<p;g++)this.render(d[g]/a,f[g]);else{v.multiDrawElementsWEBGL(n,f,0,s,d,0,p);let g=0;for(let m=0;m<p;m++)g+=f[m];t.update(g,n,1)}}function h(d,f,p,v){if(p===0)return;const g=e.get("WEBGL_multi_draw");if(g===null)for(let m=0;m<d.length;m++)c(d[m]/a,f[m],v[m]);else{g.multiDrawElementsInstancedWEBGL(n,f,0,s,d,0,v,0,p);let m=0;for(let y=0;y<p;y++)m+=f[y];for(let y=0;y<v.length;y++)t.update(m,n,v[y])}}this.setMode=r,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function vb(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case i.TRIANGLES:t.triangles+=o*(s/3);break;case i.LINES:t.lines+=o*(s/2);break;case i.LINE_STRIP:t.lines+=o*(s-1);break;case i.LINE_LOOP:t.lines+=o*s;break;case i.POINTS:t.points+=o*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",a);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:n}}function xb(i,e,t){const n=new WeakMap,r=new ct;function s(a,o,l){const c=a.morphTargetInfluences,u=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,h=u!==void 0?u.length:0;let d=n.get(o);if(d===void 0||d.count!==h){let b=function(){C.dispose(),n.delete(o),o.removeEventListener("dispose",b)};d!==void 0&&d.texture.dispose();const f=o.morphAttributes.position!==void 0,p=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,g=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],y=o.morphAttributes.color||[];let x=0;f===!0&&(x=1),p===!0&&(x=2),v===!0&&(x=3);let _=o.attributes.position.count*x,L=1;_>e.maxTextureSize&&(L=Math.ceil(_/e.maxTextureSize),_=e.maxTextureSize);const T=new Float32Array(_*L*4*h),C=new Qc(T,_,L,h);C.type=yn,C.needsUpdate=!0;const I=x*4;for(let M=0;M<h;M++){const P=g[M],H=m[M],B=y[M],W=_*L*4*M;for(let $=0;$<P.count;$++){const X=$*I;f===!0&&(r.fromBufferAttribute(P,$),T[W+X+0]=r.x,T[W+X+1]=r.y,T[W+X+2]=r.z,T[W+X+3]=0),p===!0&&(r.fromBufferAttribute(H,$),T[W+X+4]=r.x,T[W+X+5]=r.y,T[W+X+6]=r.z,T[W+X+7]=0),v===!0&&(r.fromBufferAttribute(B,$),T[W+X+8]=r.x,T[W+X+9]=r.y,T[W+X+10]=r.z,T[W+X+11]=B.itemSize===4?r.w:1)}}d={count:h,texture:C,size:new j(_,L)},n.set(o,d),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(i,"morphTexture",a.morphTexture,t);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];const p=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(i,"morphTargetBaseInfluence",p),l.getUniforms().setValue(i,"morphTargetInfluences",c)}l.getUniforms().setValue(i,"morphTargetsTexture",d.texture,t),l.getUniforms().setValue(i,"morphTargetsTextureSize",d.size)}return{update:s}}function yb(i,e,t,n){let r=new WeakMap;function s(l){const c=n.render.frame,u=l.geometry,h=e.get(l,u);if(r.get(h)!==c&&(e.update(h),r.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),r.get(l)!==c&&(t.update(l.instanceMatrix,i.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,i.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;r.get(d)!==c&&(d.update(),r.set(d,c))}return h}function a(){r=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:s,dispose:a}}class Jd extends bt{constructor(e,t,n,r,s,a,o,l,c,u=$r){if(u!==$r&&u!==is)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");n===void 0&&u===$r&&(n=ts),n===void 0&&u===is&&(n=ns),super(null,r,s,a,o,l,u,n,c),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=o!==void 0?o:Gt,this.minFilter=l!==void 0?l:Gt,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}const ev=new bt,tv=new Jd(1,1);tv.compareFunction=Wd;const nv=new Qc,iv=new Yd,rv=new Bo,hp=[],dp=[],fp=new Float32Array(16),pp=new Float32Array(9),mp=new Float32Array(4);function ma(i,e,t){const n=i[0];if(n<=0||n>0)return i;const r=e*t;let s=hp[r];if(s===void 0&&(s=new Float32Array(r),hp[r]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,i[a].toArray(s,o)}return s}function Dt(i,e){if(i.length!==e.length)return!1;for(let t=0,n=i.length;t<n;t++)if(i[t]!==e[t])return!1;return!0}function Nt(i,e){for(let t=0,n=e.length;t<n;t++)i[t]=e[t]}function iu(i,e){let t=dp[e];t===void 0&&(t=new Int32Array(e),dp[e]=t);for(let n=0;n!==e;++n)t[n]=i.allocateTextureUnit();return t}function _b(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Mb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2fv(this.addr,e),Nt(t,e)}}function Sb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;i.uniform3fv(this.addr,e),Nt(t,e)}}function wb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4fv(this.addr,e),Nt(t,e)}}function bb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;mp.set(n),i.uniformMatrix2fv(this.addr,!1,mp),Nt(t,n)}}function Ab(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;pp.set(n),i.uniformMatrix3fv(this.addr,!1,pp),Nt(t,n)}}function Tb(i,e){const t=this.cache,n=e.elements;if(n===void 0){if(Dt(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Nt(t,e)}else{if(Dt(t,n))return;fp.set(n),i.uniformMatrix4fv(this.addr,!1,fp),Nt(t,n)}}function Eb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Cb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2iv(this.addr,e),Nt(t,e)}}function Rb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3iv(this.addr,e),Nt(t,e)}}function Ib(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4iv(this.addr,e),Nt(t,e)}}function Lb(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function Pb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;i.uniform2uiv(this.addr,e),Nt(t,e)}}function Db(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;i.uniform3uiv(this.addr,e),Nt(t,e)}}function Nb(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;i.uniform4uiv(this.addr,e),Nt(t,e)}}function Ub(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);const s=this.type===i.SAMPLER_2D_SHADOW?tv:ev;t.setTexture2D(e||s,r)}function zb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture3D(e||iv,r)}function Ob(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTextureCube(e||rv,r)}function Fb(i,e,t){const n=this.cache,r=t.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),t.setTexture2DArray(e||nv,r)}function kb(i){switch(i){case 5126:return _b;case 35664:return Mb;case 35665:return Sb;case 35666:return wb;case 35674:return bb;case 35675:return Ab;case 35676:return Tb;case 5124:case 35670:return Eb;case 35667:case 35671:return Cb;case 35668:case 35672:return Rb;case 35669:case 35673:return Ib;case 5125:return Lb;case 36294:return Pb;case 36295:return Db;case 36296:return Nb;case 35678:case 36198:case 36298:case 36306:case 35682:return Ub;case 35679:case 36299:case 36307:return zb;case 35680:case 36300:case 36308:case 36293:return Ob;case 36289:case 36303:case 36311:case 36292:return Fb}}function Bb(i,e){i.uniform1fv(this.addr,e)}function Vb(i,e){const t=ma(e,this.size,2);i.uniform2fv(this.addr,t)}function Gb(i,e){const t=ma(e,this.size,3);i.uniform3fv(this.addr,t)}function Hb(i,e){const t=ma(e,this.size,4);i.uniform4fv(this.addr,t)}function Wb(i,e){const t=ma(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Xb(i,e){const t=ma(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function qb(i,e){const t=ma(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Yb(i,e){i.uniform1iv(this.addr,e)}function Zb(i,e){i.uniform2iv(this.addr,e)}function $b(i,e){i.uniform3iv(this.addr,e)}function jb(i,e){i.uniform4iv(this.addr,e)}function Jb(i,e){i.uniform1uiv(this.addr,e)}function Kb(i,e){i.uniform2uiv(this.addr,e)}function Qb(i,e){i.uniform3uiv(this.addr,e)}function e1(i,e){i.uniform4uiv(this.addr,e)}function t1(i,e,t){const n=this.cache,r=e.length,s=iu(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2D(e[a]||ev,s[a])}function n1(i,e,t){const n=this.cache,r=e.length,s=iu(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture3D(e[a]||iv,s[a])}function i1(i,e,t){const n=this.cache,r=e.length,s=iu(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTextureCube(e[a]||rv,s[a])}function r1(i,e,t){const n=this.cache,r=e.length,s=iu(t,r);Dt(n,s)||(i.uniform1iv(this.addr,s),Nt(n,s));for(let a=0;a!==r;++a)t.setTexture2DArray(e[a]||nv,s[a])}function s1(i){switch(i){case 5126:return Bb;case 35664:return Vb;case 35665:return Gb;case 35666:return Hb;case 35674:return Wb;case 35675:return Xb;case 35676:return qb;case 5124:case 35670:return Yb;case 35667:case 35671:return Zb;case 35668:case 35672:return $b;case 35669:case 35673:return jb;case 5125:return Jb;case 36294:return Kb;case 36295:return Qb;case 36296:return e1;case 35678:case 36198:case 36298:case 36306:case 35682:return t1;case 35679:case 36299:case 36307:return n1;case 35680:case 36300:case 36308:case 36293:return i1;case 36289:case 36303:case 36311:case 36292:return r1}}class a1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=kb(t.type)}}class o1{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=s1(t.type)}}class l1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const r=this.seq;for(let s=0,a=r.length;s!==a;++s){const o=r[s];o.setValue(e,t[o.id],n)}}}const nh=/(\w+)(\])?(\[|\.)?/g;function gp(i,e){i.seq.push(e),i.map[e.id]=e}function c1(i,e,t){const n=i.name,r=n.length;for(nh.lastIndex=0;;){const s=nh.exec(n),a=nh.lastIndex;let o=s[1];const l=s[2]==="]",c=s[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===r){gp(t,c===void 0?new a1(o,i,e):new o1(o,i,e));break}else{let h=t.map[o];h===void 0&&(h=new l1(o),gp(t,h)),t=h}}}class rc{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=e.getActiveUniform(t,r),a=e.getUniformLocation(t,s.name);c1(s,a,this)}}setValue(e,t,n,r){const s=this.map[t];s!==void 0&&s.setValue(e,n,r)}setOptional(e,t,n){const r=t[n];r!==void 0&&this.setValue(e,n,r)}static upload(e,t,n,r){for(let s=0,a=t.length;s!==a;++s){const o=t[s],l=n[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,r)}}static seqWithValue(e,t){const n=[];for(let r=0,s=e.length;r!==s;++r){const a=e[r];a.id in t&&n.push(a)}return n}}function vp(i,e,t){const n=i.createShader(e);return i.shaderSource(n,t),i.compileShader(n),n}const u1=37297;let h1=0;function d1(i,e){const t=i.split(`
`),n=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=r;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}function f1(i){const e=at.getPrimaries(at.workingColorSpace),t=at.getPrimaries(i);let n;switch(e===t?n="":e===Qa&&t===Ka?n="LinearDisplayP3ToLinearSRGB":e===Ka&&t===Qa&&(n="LinearSRGBToLinearDisplayP3"),i){case ni:case ko:return[n,"LinearTransferOETF"];case Rn:case Kc:return[n,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",i),[n,"LinearTransferOETF"]}}function xp(i,e,t){const n=i.getShaderParameter(e,i.COMPILE_STATUS),r=i.getShaderInfoLog(e).trim();if(n&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const a=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+d1(i.getShaderSource(e),a)}else return r}function p1(i,e){const t=f1(e);return`vec4 ${i}( vec4 value ) { return ${t[0]}( ${t[1]}( value ) ); }`}function m1(i,e){let t;switch(e){case p0:t="Linear";break;case m0:t="Reinhard";break;case g0:t="OptimizedCineon";break;case v0:t="ACESFilmic";break;case y0:t="AgX";break;case _0:t="Neutral";break;case x0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function g1(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ua).join(`
`)}function v1(i){const e=[];for(const t in i){const n=i[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function x1(i,e){const t={},n=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(e,r),a=s.name;let o=1;s.type===i.FLOAT_MAT2&&(o=2),s.type===i.FLOAT_MAT3&&(o=3),s.type===i.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:i.getAttribLocation(e,a),locationSize:o}}return t}function Ua(i){return i!==""}function yp(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _p(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const y1=/^[ \t]*#include +<([\w\d./]+)>/gm;function cd(i){return i.replace(y1,M1)}const _1=new Map;function M1(i,e){let t=Ze[e];if(t===void 0){const n=_1.get(e);if(n!==void 0)t=Ze[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("Can not resolve #include <"+e+">")}return cd(t)}const S1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Mp(i){return i.replace(S1,w1)}function w1(i,e,t,n){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Sp(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function b1(i){let e="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Nd?e="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bg?e="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===qn&&(e="SHADOWMAP_TYPE_VSM"),e}function A1(i){let e="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case Ii:case tr:e="ENVMAP_TYPE_CUBE";break;case da:e="ENVMAP_TYPE_CUBE_UV";break}return e}function T1(i){let e="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case tr:e="ENVMAP_MODE_REFRACTION";break}return e}function E1(i){let e="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Oo:e="ENVMAP_BLENDING_MULTIPLY";break;case d0:e="ENVMAP_BLENDING_MIX";break;case f0:e="ENVMAP_BLENDING_ADD";break}return e}function C1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:n,maxMip:t}}function R1(i,e,t,n){const r=i.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const l=b1(t),c=A1(t),u=T1(t),h=E1(t),d=C1(t),f=g1(t),p=v1(s),v=r.createProgram();let g,m,y=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(g=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ua).join(`
`),g.length>0&&(g+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p].filter(Ua).join(`
`),m.length>0&&(m+=`
`)):(g=[Sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ua).join(`
`),m=[Sp(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,p,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+u:"",t.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Ai?"#define TONE_MAPPING":"",t.toneMapping!==Ai?Ze.tonemapping_pars_fragment:"",t.toneMapping!==Ai?m1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ze.colorspace_pars_fragment,p1("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ua).join(`
`)),a=cd(a),a=yp(a,t),a=_p(a,t),o=cd(o),o=yp(o,t),o=_p(o,t),a=Mp(a),o=Mp(o),t.isRawShaderMaterial!==!0&&(y=`#version 300 es
`,g=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+g,m=["#define varying in",t.glslVersion===od?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===od?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const x=y+g+a,_=y+m+o,L=vp(r,r.VERTEX_SHADER,x),T=vp(r,r.FRAGMENT_SHADER,_);r.attachShader(v,L),r.attachShader(v,T),t.index0AttributeName!==void 0?r.bindAttribLocation(v,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v);function C(P){if(i.debug.checkShaderErrors){const H=r.getProgramInfoLog(v).trim(),B=r.getShaderInfoLog(L).trim(),W=r.getShaderInfoLog(T).trim();let $=!0,X=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,v,L,T);else{const ae=xp(r,L,"vertex"),q=xp(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+H+`
`+ae+`
`+q)}else H!==""?console.warn("THREE.WebGLProgram: Program Info Log:",H):(B===""||W==="")&&(X=!1);X&&(P.diagnostics={runnable:$,programLog:H,vertexShader:{log:B,prefix:g},fragmentShader:{log:W,prefix:m}})}r.deleteShader(L),r.deleteShader(T),I=new rc(r,v),b=x1(r,v)}let I;this.getUniforms=function(){return I===void 0&&C(this),I};let b;this.getAttributes=function(){return b===void 0&&C(this),b};let M=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return M===!1&&(M=r.getProgramParameter(v,u1)),M},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h1++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=L,this.fragmentShader=T,this}let I1=0;class L1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,n=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(n),a=this._getShaderCacheForMaterial(e);return a.has(r)===!1&&(a.add(r),r.usedTimes++),a.has(s)===!1&&(a.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new P1(e),t.set(e,n)),n}}class P1{constructor(e){this.id=I1++,this.code=e,this.usedTimes=0}}function D1(i,e,t,n,r,s,a){const o=new eu,l=new L1,c=new Set,u=[],h=r.logarithmicDepthBuffer,d=r.vertexTextures;let f=r.precision;const p={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(b){return c.add(b),b===0?"uv":`uv${b}`}function g(b,M,P,H,B){const W=H.fog,$=B.geometry,X=b.isMeshStandardMaterial?H.environment:null,ae=(b.isMeshStandardMaterial?t:e).get(b.envMap||X),q=ae&&ae.mapping===da?ae.image.height:null,_e=p[b.type];b.precision!==null&&(f=r.getMaxPrecision(b.precision),f!==b.precision&&console.warn("THREE.WebGLProgram.getParameters:",b.precision,"not supported, using",f,"instead."));const Ee=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,be=Ee!==void 0?Ee.length:0;let je=0;$.morphAttributes.position!==void 0&&(je=1),$.morphAttributes.normal!==void 0&&(je=2),$.morphAttributes.color!==void 0&&(je=3);let rt,Y,oe,Ae;if(_e){const ht=Fn[_e];rt=ht.vertexShader,Y=ht.fragmentShader}else rt=b.vertexShader,Y=b.fragmentShader,l.update(b),oe=l.getVertexShaderID(b),Ae=l.getFragmentShaderID(b);const de=i.getRenderTarget(),He=B.isInstancedMesh===!0,qe=B.isBatchedMesh===!0,Ve=!!b.map,D=!!b.matcap,K=!!ae,ne=!!b.aoMap,le=!!b.lightMap,re=!!b.bumpMap,se=!!b.normalMap,Me=!!b.displacementMap,ve=!!b.emissiveMap,Ge=!!b.metalnessMap,R=!!b.roughnessMap,S=b.anisotropy>0,G=b.clearcoat>0,te=b.dispersion>0,ee=b.iridescence>0,ie=b.sheen>0,Pe=b.transmission>0,me=S&&!!b.anisotropyMap,ge=G&&!!b.clearcoatMap,Ye=G&&!!b.clearcoatNormalMap,ce=G&&!!b.clearcoatRoughnessMap,Ie=ee&&!!b.iridescenceMap,Ke=ee&&!!b.iridescenceThicknessMap,ke=ie&&!!b.sheenColorMap,xe=ie&&!!b.sheenRoughnessMap,Je=!!b.specularMap,et=!!b.specularColorMap,At=!!b.specularIntensityMap,N=Pe&&!!b.transmissionMap,Se=Pe&&!!b.thicknessMap,Z=!!b.gradientMap,Q=!!b.alphaMap,he=b.alphaTest>0,Be=!!b.alphaHash,st=!!b.extensions;let Tt=Ai;b.toneMapped&&(de===null||de.isXRRenderTarget===!0)&&(Tt=i.toneMapping);const Ut={shaderID:_e,shaderType:b.type,shaderName:b.name,vertexShader:rt,fragmentShader:Y,defines:b.defines,customVertexShaderID:oe,customFragmentShaderID:Ae,isRawShaderMaterial:b.isRawShaderMaterial===!0,glslVersion:b.glslVersion,precision:f,batching:qe,batchingColor:qe&&B._colorsTexture!==null,instancing:He,instancingColor:He&&B.instanceColor!==null,instancingMorph:He&&B.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:de===null?i.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:ni,alphaToCoverage:!!b.alphaToCoverage,map:Ve,matcap:D,envMap:K,envMapMode:K&&ae.mapping,envMapCubeUVHeight:q,aoMap:ne,lightMap:le,bumpMap:re,normalMap:se,displacementMap:d&&Me,emissiveMap:ve,normalMapObjectSpace:se&&b.normalMapType===z0,normalMapTangentSpace:se&&b.normalMapType===rr,metalnessMap:Ge,roughnessMap:R,anisotropy:S,anisotropyMap:me,clearcoat:G,clearcoatMap:ge,clearcoatNormalMap:Ye,clearcoatRoughnessMap:ce,dispersion:te,iridescence:ee,iridescenceMap:Ie,iridescenceThicknessMap:Ke,sheen:ie,sheenColorMap:ke,sheenRoughnessMap:xe,specularMap:Je,specularColorMap:et,specularIntensityMap:At,transmission:Pe,transmissionMap:N,thicknessMap:Se,gradientMap:Z,opaque:b.transparent===!1&&b.blending===Zr&&b.alphaToCoverage===!1,alphaMap:Q,alphaTest:he,alphaHash:Be,combine:b.combine,mapUv:Ve&&v(b.map.channel),aoMapUv:ne&&v(b.aoMap.channel),lightMapUv:le&&v(b.lightMap.channel),bumpMapUv:re&&v(b.bumpMap.channel),normalMapUv:se&&v(b.normalMap.channel),displacementMapUv:Me&&v(b.displacementMap.channel),emissiveMapUv:ve&&v(b.emissiveMap.channel),metalnessMapUv:Ge&&v(b.metalnessMap.channel),roughnessMapUv:R&&v(b.roughnessMap.channel),anisotropyMapUv:me&&v(b.anisotropyMap.channel),clearcoatMapUv:ge&&v(b.clearcoatMap.channel),clearcoatNormalMapUv:Ye&&v(b.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ce&&v(b.clearcoatRoughnessMap.channel),iridescenceMapUv:Ie&&v(b.iridescenceMap.channel),iridescenceThicknessMapUv:Ke&&v(b.iridescenceThicknessMap.channel),sheenColorMapUv:ke&&v(b.sheenColorMap.channel),sheenRoughnessMapUv:xe&&v(b.sheenRoughnessMap.channel),specularMapUv:Je&&v(b.specularMap.channel),specularColorMapUv:et&&v(b.specularColorMap.channel),specularIntensityMapUv:At&&v(b.specularIntensityMap.channel),transmissionMapUv:N&&v(b.transmissionMap.channel),thicknessMapUv:Se&&v(b.thicknessMap.channel),alphaMapUv:Q&&v(b.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(se||S),vertexColors:b.vertexColors,vertexAlphas:b.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:B.isPoints===!0&&!!$.attributes.uv&&(Ve||Q),fog:!!W,useFog:b.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:b.flatShading===!0,sizeAttenuation:b.sizeAttenuation===!0,logarithmicDepthBuffer:h,skinning:B.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:be,morphTextureStride:je,numDirLights:M.directional.length,numPointLights:M.point.length,numSpotLights:M.spot.length,numSpotLightMaps:M.spotLightMap.length,numRectAreaLights:M.rectArea.length,numHemiLights:M.hemi.length,numDirLightShadows:M.directionalShadowMap.length,numPointLightShadows:M.pointShadowMap.length,numSpotLightShadows:M.spotShadowMap.length,numSpotLightShadowsWithMaps:M.numSpotLightShadowsWithMaps,numLightProbes:M.numLightProbes,numClippingPlanes:a.numPlanes,numClipIntersection:a.numIntersection,dithering:b.dithering,shadowMapEnabled:i.shadowMap.enabled&&P.length>0,shadowMapType:i.shadowMap.type,toneMapping:Tt,decodeVideoTexture:Ve&&b.map.isVideoTexture===!0&&at.getTransfer(b.map.colorSpace)===pt,premultipliedAlpha:b.premultipliedAlpha,doubleSided:b.side===$n,flipSided:b.side===rn,useDepthPacking:b.depthPacking>=0,depthPacking:b.depthPacking||0,index0AttributeName:b.index0AttributeName,extensionClipCullDistance:st&&b.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:st&&b.extensions.multiDraw===!0&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:b.customProgramCacheKey()};return Ut.vertexUv1s=c.has(1),Ut.vertexUv2s=c.has(2),Ut.vertexUv3s=c.has(3),c.clear(),Ut}function m(b){const M=[];if(b.shaderID?M.push(b.shaderID):(M.push(b.customVertexShaderID),M.push(b.customFragmentShaderID)),b.defines!==void 0)for(const P in b.defines)M.push(P),M.push(b.defines[P]);return b.isRawShaderMaterial===!1&&(y(M,b),x(M,b),M.push(i.outputColorSpace)),M.push(b.customProgramCacheKey),M.join()}function y(b,M){b.push(M.precision),b.push(M.outputColorSpace),b.push(M.envMapMode),b.push(M.envMapCubeUVHeight),b.push(M.mapUv),b.push(M.alphaMapUv),b.push(M.lightMapUv),b.push(M.aoMapUv),b.push(M.bumpMapUv),b.push(M.normalMapUv),b.push(M.displacementMapUv),b.push(M.emissiveMapUv),b.push(M.metalnessMapUv),b.push(M.roughnessMapUv),b.push(M.anisotropyMapUv),b.push(M.clearcoatMapUv),b.push(M.clearcoatNormalMapUv),b.push(M.clearcoatRoughnessMapUv),b.push(M.iridescenceMapUv),b.push(M.iridescenceThicknessMapUv),b.push(M.sheenColorMapUv),b.push(M.sheenRoughnessMapUv),b.push(M.specularMapUv),b.push(M.specularColorMapUv),b.push(M.specularIntensityMapUv),b.push(M.transmissionMapUv),b.push(M.thicknessMapUv),b.push(M.combine),b.push(M.fogExp2),b.push(M.sizeAttenuation),b.push(M.morphTargetsCount),b.push(M.morphAttributeCount),b.push(M.numDirLights),b.push(M.numPointLights),b.push(M.numSpotLights),b.push(M.numSpotLightMaps),b.push(M.numHemiLights),b.push(M.numRectAreaLights),b.push(M.numDirLightShadows),b.push(M.numPointLightShadows),b.push(M.numSpotLightShadows),b.push(M.numSpotLightShadowsWithMaps),b.push(M.numLightProbes),b.push(M.shadowMapType),b.push(M.toneMapping),b.push(M.numClippingPlanes),b.push(M.numClipIntersection),b.push(M.depthPacking)}function x(b,M){o.disableAll(),M.supportsVertexTextures&&o.enable(0),M.instancing&&o.enable(1),M.instancingColor&&o.enable(2),M.instancingMorph&&o.enable(3),M.matcap&&o.enable(4),M.envMap&&o.enable(5),M.normalMapObjectSpace&&o.enable(6),M.normalMapTangentSpace&&o.enable(7),M.clearcoat&&o.enable(8),M.iridescence&&o.enable(9),M.alphaTest&&o.enable(10),M.vertexColors&&o.enable(11),M.vertexAlphas&&o.enable(12),M.vertexUv1s&&o.enable(13),M.vertexUv2s&&o.enable(14),M.vertexUv3s&&o.enable(15),M.vertexTangents&&o.enable(16),M.anisotropy&&o.enable(17),M.alphaHash&&o.enable(18),M.batching&&o.enable(19),M.dispersion&&o.enable(20),M.batchingColor&&o.enable(21),b.push(o.mask),o.disableAll(),M.fog&&o.enable(0),M.useFog&&o.enable(1),M.flatShading&&o.enable(2),M.logarithmicDepthBuffer&&o.enable(3),M.skinning&&o.enable(4),M.morphTargets&&o.enable(5),M.morphNormals&&o.enable(6),M.morphColors&&o.enable(7),M.premultipliedAlpha&&o.enable(8),M.shadowMapEnabled&&o.enable(9),M.doubleSided&&o.enable(10),M.flipSided&&o.enable(11),M.useDepthPacking&&o.enable(12),M.dithering&&o.enable(13),M.transmission&&o.enable(14),M.sheen&&o.enable(15),M.opaque&&o.enable(16),M.pointsUvs&&o.enable(17),M.decodeVideoTexture&&o.enable(18),M.alphaToCoverage&&o.enable(19),b.push(o.mask)}function _(b){const M=p[b.type];let P;if(M){const H=Fn[M];P=j0.clone(H.uniforms)}else P=b.uniforms;return P}function L(b,M){let P;for(let H=0,B=u.length;H<B;H++){const W=u[H];if(W.cacheKey===M){P=W,++P.usedTimes;break}}return P===void 0&&(P=new R1(i,M,b,s),u.push(P)),P}function T(b){if(--b.usedTimes===0){const M=u.indexOf(b);u[M]=u[u.length-1],u.pop(),b.destroy()}}function C(b){l.remove(b)}function I(){l.dispose()}return{getParameters:g,getProgramCacheKey:m,getUniforms:_,acquireProgram:L,releaseProgram:T,releaseShaderCache:C,programs:u,dispose:I}}function N1(){let i=new WeakMap;function e(s){let a=i.get(s);return a===void 0&&(a={},i.set(s,a)),a}function t(s){i.delete(s)}function n(s,a,o){i.get(s)[a]=o}function r(){i=new WeakMap}return{get:e,remove:t,update:n,dispose:r}}function U1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.z!==e.z?i.z-e.z:i.id-e.id}function wp(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function bp(){const i=[];let e=0;const t=[],n=[],r=[];function s(){e=0,t.length=0,n.length=0,r.length=0}function a(h,d,f,p,v,g){let m=i[e];return m===void 0?(m={id:h.id,object:h,geometry:d,material:f,groupOrder:p,renderOrder:h.renderOrder,z:v,group:g},i[e]=m):(m.id=h.id,m.object=h,m.geometry=d,m.material=f,m.groupOrder=p,m.renderOrder=h.renderOrder,m.z=v,m.group=g),e++,m}function o(h,d,f,p,v,g){const m=a(h,d,f,p,v,g);f.transmission>0?n.push(m):f.transparent===!0?r.push(m):t.push(m)}function l(h,d,f,p,v,g){const m=a(h,d,f,p,v,g);f.transmission>0?n.unshift(m):f.transparent===!0?r.unshift(m):t.unshift(m)}function c(h,d){t.length>1&&t.sort(h||U1),n.length>1&&n.sort(d||wp),r.length>1&&r.sort(d||wp)}function u(){for(let h=e,d=i.length;h<d;h++){const f=i[h];if(f.id===null)break;f.id=null,f.object=null,f.geometry=null,f.material=null,f.group=null}}return{opaque:t,transmissive:n,transparent:r,init:s,push:o,unshift:l,finish:u,sort:c}}function z1(){let i=new WeakMap;function e(n,r){const s=i.get(n);let a;return s===void 0?(a=new bp,i.set(n,[a])):r>=s.length?(a=new bp,s.push(a)):a=s[r],a}function t(){i=new WeakMap}return{get:e,dispose:t}}function O1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new E,color:new ye};break;case"SpotLight":t={position:new E,direction:new E,color:new ye,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new E,color:new ye,distance:0,decay:0};break;case"HemisphereLight":t={direction:new E,skyColor:new ye,groundColor:new ye};break;case"RectAreaLight":t={color:new ye,position:new E,halfWidth:new E,halfHeight:new E};break}return i[e.id]=t,t}}}function F1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new j,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let k1=0;function B1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function V1(i){const e=new O1,t=F1(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)n.probe.push(new E);const r=new E,s=new ze,a=new ze;function o(c){let u=0,h=0,d=0;for(let b=0;b<9;b++)n.probe[b].set(0,0,0);let f=0,p=0,v=0,g=0,m=0,y=0,x=0,_=0,L=0,T=0,C=0;c.sort(B1);for(let b=0,M=c.length;b<M;b++){const P=c[b],H=P.color,B=P.intensity,W=P.distance,$=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)u+=H.r*B,h+=H.g*B,d+=H.b*B;else if(P.isLightProbe){for(let X=0;X<9;X++)n.probe[X].addScaledVector(P.sh.coefficients[X],B);C++}else if(P.isDirectionalLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ae=P.shadow,q=t.get(P);q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,n.directionalShadow[f]=q,n.directionalShadowMap[f]=$,n.directionalShadowMatrix[f]=P.shadow.matrix,y++}n.directional[f]=X,f++}else if(P.isSpotLight){const X=e.get(P);X.position.setFromMatrixPosition(P.matrixWorld),X.color.copy(H).multiplyScalar(B),X.distance=W,X.coneCos=Math.cos(P.angle),X.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),X.decay=P.decay,n.spot[v]=X;const ae=P.shadow;if(P.map&&(n.spotLightMap[L]=P.map,L++,ae.updateMatrices(P),P.castShadow&&T++),n.spotLightMatrix[v]=ae.matrix,P.castShadow){const q=t.get(P);q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,n.spotShadow[v]=q,n.spotShadowMap[v]=$,_++}v++}else if(P.isRectAreaLight){const X=e.get(P);X.color.copy(H).multiplyScalar(B),X.halfWidth.set(P.width*.5,0,0),X.halfHeight.set(0,P.height*.5,0),n.rectArea[g]=X,g++}else if(P.isPointLight){const X=e.get(P);if(X.color.copy(P.color).multiplyScalar(P.intensity),X.distance=P.distance,X.decay=P.decay,P.castShadow){const ae=P.shadow,q=t.get(P);q.shadowBias=ae.bias,q.shadowNormalBias=ae.normalBias,q.shadowRadius=ae.radius,q.shadowMapSize=ae.mapSize,q.shadowCameraNear=ae.camera.near,q.shadowCameraFar=ae.camera.far,n.pointShadow[p]=q,n.pointShadowMap[p]=$,n.pointShadowMatrix[p]=P.shadow.matrix,x++}n.point[p]=X,p++}else if(P.isHemisphereLight){const X=e.get(P);X.skyColor.copy(P.color).multiplyScalar(B),X.groundColor.copy(P.groundColor).multiplyScalar(B),n.hemi[m]=X,m++}}g>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=pe.LTC_FLOAT_1,n.rectAreaLTC2=pe.LTC_FLOAT_2):(n.rectAreaLTC1=pe.LTC_HALF_1,n.rectAreaLTC2=pe.LTC_HALF_2)),n.ambient[0]=u,n.ambient[1]=h,n.ambient[2]=d;const I=n.hash;(I.directionalLength!==f||I.pointLength!==p||I.spotLength!==v||I.rectAreaLength!==g||I.hemiLength!==m||I.numDirectionalShadows!==y||I.numPointShadows!==x||I.numSpotShadows!==_||I.numSpotMaps!==L||I.numLightProbes!==C)&&(n.directional.length=f,n.spot.length=v,n.rectArea.length=g,n.point.length=p,n.hemi.length=m,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.pointShadow.length=x,n.pointShadowMap.length=x,n.spotShadow.length=_,n.spotShadowMap.length=_,n.directionalShadowMatrix.length=y,n.pointShadowMatrix.length=x,n.spotLightMatrix.length=_+L-T,n.spotLightMap.length=L,n.numSpotLightShadowsWithMaps=T,n.numLightProbes=C,I.directionalLength=f,I.pointLength=p,I.spotLength=v,I.rectAreaLength=g,I.hemiLength=m,I.numDirectionalShadows=y,I.numPointShadows=x,I.numSpotShadows=_,I.numSpotMaps=L,I.numLightProbes=C,n.version=k1++)}function l(c,u){let h=0,d=0,f=0,p=0,v=0;const g=u.matrixWorldInverse;for(let m=0,y=c.length;m<y;m++){const x=c[m];if(x.isDirectionalLight){const _=n.directional[h];_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),h++}else if(x.isSpotLight){const _=n.spot[f];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),_.direction.setFromMatrixPosition(x.matrixWorld),r.setFromMatrixPosition(x.target.matrixWorld),_.direction.sub(r),_.direction.transformDirection(g),f++}else if(x.isRectAreaLight){const _=n.rectArea[p];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),a.identity(),s.copy(x.matrixWorld),s.premultiply(g),a.extractRotation(s),_.halfWidth.set(x.width*.5,0,0),_.halfHeight.set(0,x.height*.5,0),_.halfWidth.applyMatrix4(a),_.halfHeight.applyMatrix4(a),p++}else if(x.isPointLight){const _=n.point[d];_.position.setFromMatrixPosition(x.matrixWorld),_.position.applyMatrix4(g),d++}else if(x.isHemisphereLight){const _=n.hemi[v];_.direction.setFromMatrixPosition(x.matrixWorld),_.direction.transformDirection(g),v++}}}return{setup:o,setupView:l,state:n}}function Ap(i){const e=new V1(i),t=[],n=[];function r(u){c.camera=u,t.length=0,n.length=0}function s(u){t.push(u)}function a(u){n.push(u)}function o(){e.setup(t)}function l(u){e.setupView(t,u)}const c={lightsArray:t,shadowsArray:n,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:o,setupLightsView:l,pushLight:s,pushShadow:a}}function G1(i){let e=new WeakMap;function t(r,s=0){const a=e.get(r);let o;return a===void 0?(o=new Ap(i),e.set(r,[o])):s>=a.length?(o=new Ap(i),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}class Kd extends Jt{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=N0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qd extends Jt{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const H1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,W1=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function X1(i,e,t){let n=new Vo;const r=new j,s=new j,a=new ct,o=new Kd({depthPacking:U0}),l=new Qd,c={},u=t.maxTextureSize,h={[Ri]:rn,[rn]:Ri,[$n]:$n},d=new Vn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new j},radius:{value:4}},vertexShader:H1,fragmentShader:W1}),f=d.clone();f.defines.HORIZONTAL_PASS=1;const p=new $e;p.setAttribute("position",new ut(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new Pt(p,d),g=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Nd;let m=this.type;this.render=function(T,C,I){if(g.enabled===!1||g.autoUpdate===!1&&g.needsUpdate===!1||T.length===0)return;const b=i.getRenderTarget(),M=i.getActiveCubeFace(),P=i.getActiveMipmapLevel(),H=i.state;H.setBlending(bi),H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const B=m!==qn&&this.type===qn,W=m===qn&&this.type!==qn;for(let $=0,X=T.length;$<X;$++){const ae=T[$],q=ae.shadow;if(q===void 0){console.warn("THREE.WebGLShadowMap:",ae,"has no shadow.");continue}if(q.autoUpdate===!1&&q.needsUpdate===!1)continue;r.copy(q.mapSize);const _e=q.getFrameExtents();if(r.multiply(_e),s.copy(q.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/_e.x),r.x=s.x*_e.x,q.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/_e.y),r.y=s.y*_e.y,q.mapSize.y=s.y)),q.map===null||B===!0||W===!0){const be=this.type!==qn?{minFilter:Gt,magFilter:Gt}:{};q.map!==null&&q.map.dispose(),q.map=new Bn(r.x,r.y,be),q.map.texture.name=ae.name+".shadowMap",q.camera.updateProjectionMatrix()}i.setRenderTarget(q.map),i.clear();const Ee=q.getViewportCount();for(let be=0;be<Ee;be++){const je=q.getViewport(be);a.set(s.x*je.x,s.y*je.y,s.x*je.z,s.y*je.w),H.viewport(a),q.updateMatrices(ae,be),n=q.getFrustum(),_(C,I,q.camera,ae,this.type)}q.isPointLightShadow!==!0&&this.type===qn&&y(q,I),q.needsUpdate=!1}m=this.type,g.needsUpdate=!1,i.setRenderTarget(b,M,P)};function y(T,C){const I=e.update(v);d.defines.VSM_SAMPLES!==T.blurSamples&&(d.defines.VSM_SAMPLES=T.blurSamples,f.defines.VSM_SAMPLES=T.blurSamples,d.needsUpdate=!0,f.needsUpdate=!0),T.mapPass===null&&(T.mapPass=new Bn(r.x,r.y)),d.uniforms.shadow_pass.value=T.map.texture,d.uniforms.resolution.value=T.mapSize,d.uniforms.radius.value=T.radius,i.setRenderTarget(T.mapPass),i.clear(),i.renderBufferDirect(C,null,I,d,v,null),f.uniforms.shadow_pass.value=T.mapPass.texture,f.uniforms.resolution.value=T.mapSize,f.uniforms.radius.value=T.radius,i.setRenderTarget(T.map),i.clear(),i.renderBufferDirect(C,null,I,f,v,null)}function x(T,C,I,b){let M=null;const P=I.isPointLight===!0?T.customDistanceMaterial:T.customDepthMaterial;if(P!==void 0)M=P;else if(M=I.isPointLight===!0?l:o,i.localClippingEnabled&&C.clipShadows===!0&&Array.isArray(C.clippingPlanes)&&C.clippingPlanes.length!==0||C.displacementMap&&C.displacementScale!==0||C.alphaMap&&C.alphaTest>0||C.map&&C.alphaTest>0){const H=M.uuid,B=C.uuid;let W=c[H];W===void 0&&(W={},c[H]=W);let $=W[B];$===void 0&&($=M.clone(),W[B]=$,C.addEventListener("dispose",L)),M=$}if(M.visible=C.visible,M.wireframe=C.wireframe,b===qn?M.side=C.shadowSide!==null?C.shadowSide:C.side:M.side=C.shadowSide!==null?C.shadowSide:h[C.side],M.alphaMap=C.alphaMap,M.alphaTest=C.alphaTest,M.map=C.map,M.clipShadows=C.clipShadows,M.clippingPlanes=C.clippingPlanes,M.clipIntersection=C.clipIntersection,M.displacementMap=C.displacementMap,M.displacementScale=C.displacementScale,M.displacementBias=C.displacementBias,M.wireframeLinewidth=C.wireframeLinewidth,M.linewidth=C.linewidth,I.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const H=i.properties.get(M);H.light=I}return M}function _(T,C,I,b,M){if(T.visible===!1)return;if(T.layers.test(C.layers)&&(T.isMesh||T.isLine||T.isPoints)&&(T.castShadow||T.receiveShadow&&M===qn)&&(!T.frustumCulled||n.intersectsObject(T))){T.modelViewMatrix.multiplyMatrices(I.matrixWorldInverse,T.matrixWorld);const B=e.update(T),W=T.material;if(Array.isArray(W)){const $=B.groups;for(let X=0,ae=$.length;X<ae;X++){const q=$[X],_e=W[q.materialIndex];if(_e&&_e.visible){const Ee=x(T,_e,b,M);T.onBeforeShadow(i,T,C,I,B,Ee,q),i.renderBufferDirect(I,null,B,Ee,T,q),T.onAfterShadow(i,T,C,I,B,Ee,q)}}}else if(W.visible){const $=x(T,W,b,M);T.onBeforeShadow(i,T,C,I,B,$,null),i.renderBufferDirect(I,null,B,$,T,null),T.onAfterShadow(i,T,C,I,B,$,null)}}const H=T.children;for(let B=0,W=H.length;B<W;B++)_(H[B],C,I,b,M)}function L(T){T.target.removeEventListener("dispose",L);for(const I in c){const b=c[I],M=T.target.uuid;M in b&&(b[M].dispose(),delete b[M])}}}function q1(i){function e(){let N=!1;const Se=new ct;let Z=null;const Q=new ct(0,0,0,0);return{setMask:function(he){Z!==he&&!N&&(i.colorMask(he,he,he,he),Z=he)},setLocked:function(he){N=he},setClear:function(he,Be,st,Tt,Ut){Ut===!0&&(he*=Tt,Be*=Tt,st*=Tt),Se.set(he,Be,st,Tt),Q.equals(Se)===!1&&(i.clearColor(he,Be,st,Tt),Q.copy(Se))},reset:function(){N=!1,Z=null,Q.set(-1,0,0,0)}}}function t(){let N=!1,Se=null,Z=null,Q=null;return{setTest:function(he){he?Ae(i.DEPTH_TEST):de(i.DEPTH_TEST)},setMask:function(he){Se!==he&&!N&&(i.depthMask(he),Se=he)},setFunc:function(he){if(Z!==he){switch(he){case s0:i.depthFunc(i.NEVER);break;case a0:i.depthFunc(i.ALWAYS);break;case o0:i.depthFunc(i.LESS);break;case Ha:i.depthFunc(i.LEQUAL);break;case l0:i.depthFunc(i.EQUAL);break;case c0:i.depthFunc(i.GEQUAL);break;case u0:i.depthFunc(i.GREATER);break;case h0:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Z=he}},setLocked:function(he){N=he},setClear:function(he){Q!==he&&(i.clearDepth(he),Q=he)},reset:function(){N=!1,Se=null,Z=null,Q=null}}}function n(){let N=!1,Se=null,Z=null,Q=null,he=null,Be=null,st=null,Tt=null,Ut=null;return{setTest:function(ht){N||(ht?Ae(i.STENCIL_TEST):de(i.STENCIL_TEST))},setMask:function(ht){Se!==ht&&!N&&(i.stencilMask(ht),Se=ht)},setFunc:function(ht,Wn,Xn){(Z!==ht||Q!==Wn||he!==Xn)&&(i.stencilFunc(ht,Wn,Xn),Z=ht,Q=Wn,he=Xn)},setOp:function(ht,Wn,Xn){(Be!==ht||st!==Wn||Tt!==Xn)&&(i.stencilOp(ht,Wn,Xn),Be=ht,st=Wn,Tt=Xn)},setLocked:function(ht){N=ht},setClear:function(ht){Ut!==ht&&(i.clearStencil(ht),Ut=ht)},reset:function(){N=!1,Se=null,Z=null,Q=null,he=null,Be=null,st=null,Tt=null,Ut=null}}}const r=new e,s=new t,a=new n,o=new WeakMap,l=new WeakMap;let c={},u={},h=new WeakMap,d=[],f=null,p=!1,v=null,g=null,m=null,y=null,x=null,_=null,L=null,T=new ye(0,0,0),C=0,I=!1,b=null,M=null,P=null,H=null,B=null;const W=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,X=0;const ae=i.getParameter(i.VERSION);ae.indexOf("WebGL")!==-1?(X=parseFloat(/^WebGL (\d)/.exec(ae)[1]),$=X>=1):ae.indexOf("OpenGL ES")!==-1&&(X=parseFloat(/^OpenGL ES (\d)/.exec(ae)[1]),$=X>=2);let q=null,_e={};const Ee=i.getParameter(i.SCISSOR_BOX),be=i.getParameter(i.VIEWPORT),je=new ct().fromArray(Ee),rt=new ct().fromArray(be);function Y(N,Se,Z,Q){const he=new Uint8Array(4),Be=i.createTexture();i.bindTexture(N,Be),i.texParameteri(N,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(N,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let st=0;st<Z;st++)N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY?i.texImage3D(Se,0,i.RGBA,1,1,Q,0,i.RGBA,i.UNSIGNED_BYTE,he):i.texImage2D(Se+st,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,he);return Be}const oe={};oe[i.TEXTURE_2D]=Y(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Y(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Y(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Y(i.TEXTURE_3D,i.TEXTURE_3D,1,1),r.setClear(0,0,0,1),s.setClear(1),a.setClear(0),Ae(i.DEPTH_TEST),s.setFunc(Ha),re(!1),se(Rh),Ae(i.CULL_FACE),ne(bi);function Ae(N){c[N]!==!0&&(i.enable(N),c[N]=!0)}function de(N){c[N]!==!1&&(i.disable(N),c[N]=!1)}function He(N,Se){return u[N]!==Se?(i.bindFramebuffer(N,Se),u[N]=Se,N===i.DRAW_FRAMEBUFFER&&(u[i.FRAMEBUFFER]=Se),N===i.FRAMEBUFFER&&(u[i.DRAW_FRAMEBUFFER]=Se),!0):!1}function qe(N,Se){let Z=d,Q=!1;if(N){Z=h.get(Se),Z===void 0&&(Z=[],h.set(Se,Z));const he=N.textures;if(Z.length!==he.length||Z[0]!==i.COLOR_ATTACHMENT0){for(let Be=0,st=he.length;Be<st;Be++)Z[Be]=i.COLOR_ATTACHMENT0+Be;Z.length=he.length,Q=!0}}else Z[0]!==i.BACK&&(Z[0]=i.BACK,Q=!0);Q&&i.drawBuffers(Z)}function Ve(N){return f!==N?(i.useProgram(N),f=N,!0):!1}const D={[Yi]:i.FUNC_ADD,[Gg]:i.FUNC_SUBTRACT,[Hg]:i.FUNC_REVERSE_SUBTRACT};D[Wg]=i.MIN,D[Xg]=i.MAX;const K={[qg]:i.ZERO,[Yg]:i.ONE,[Zg]:i.SRC_COLOR,[hc]:i.SRC_ALPHA,[e0]:i.SRC_ALPHA_SATURATE,[Kg]:i.DST_COLOR,[jg]:i.DST_ALPHA,[$g]:i.ONE_MINUS_SRC_COLOR,[dc]:i.ONE_MINUS_SRC_ALPHA,[Qg]:i.ONE_MINUS_DST_COLOR,[Jg]:i.ONE_MINUS_DST_ALPHA,[t0]:i.CONSTANT_COLOR,[n0]:i.ONE_MINUS_CONSTANT_COLOR,[i0]:i.CONSTANT_ALPHA,[r0]:i.ONE_MINUS_CONSTANT_ALPHA};function ne(N,Se,Z,Q,he,Be,st,Tt,Ut,ht){if(N===bi){p===!0&&(de(i.BLEND),p=!1);return}if(p===!1&&(Ae(i.BLEND),p=!0),N!==Vg){if(N!==v||ht!==I){if((g!==Yi||x!==Yi)&&(i.blendEquation(i.FUNC_ADD),g=Yi,x=Yi),ht)switch(N){case Zr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ih:i.blendFunc(i.ONE,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFuncSeparate(i.ZERO,i.SRC_COLOR,i.ZERO,i.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}else switch(N){case Zr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Ih:i.blendFunc(i.SRC_ALPHA,i.ONE);break;case Lh:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ph:i.blendFunc(i.ZERO,i.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",N);break}m=null,y=null,_=null,L=null,T.set(0,0,0),C=0,v=N,I=ht}return}he=he||Se,Be=Be||Z,st=st||Q,(Se!==g||he!==x)&&(i.blendEquationSeparate(D[Se],D[he]),g=Se,x=he),(Z!==m||Q!==y||Be!==_||st!==L)&&(i.blendFuncSeparate(K[Z],K[Q],K[Be],K[st]),m=Z,y=Q,_=Be,L=st),(Tt.equals(T)===!1||Ut!==C)&&(i.blendColor(Tt.r,Tt.g,Tt.b,Ut),T.copy(Tt),C=Ut),v=N,I=!1}function le(N,Se){N.side===$n?de(i.CULL_FACE):Ae(i.CULL_FACE);let Z=N.side===rn;Se&&(Z=!Z),re(Z),N.blending===Zr&&N.transparent===!1?ne(bi):ne(N.blending,N.blendEquation,N.blendSrc,N.blendDst,N.blendEquationAlpha,N.blendSrcAlpha,N.blendDstAlpha,N.blendColor,N.blendAlpha,N.premultipliedAlpha),s.setFunc(N.depthFunc),s.setTest(N.depthTest),s.setMask(N.depthWrite),r.setMask(N.colorWrite);const Q=N.stencilWrite;a.setTest(Q),Q&&(a.setMask(N.stencilWriteMask),a.setFunc(N.stencilFunc,N.stencilRef,N.stencilFuncMask),a.setOp(N.stencilFail,N.stencilZFail,N.stencilZPass)),ve(N.polygonOffset,N.polygonOffsetFactor,N.polygonOffsetUnits),N.alphaToCoverage===!0?Ae(i.SAMPLE_ALPHA_TO_COVERAGE):de(i.SAMPLE_ALPHA_TO_COVERAGE)}function re(N){b!==N&&(N?i.frontFace(i.CW):i.frontFace(i.CCW),b=N)}function se(N){N!==Fg?(Ae(i.CULL_FACE),N!==M&&(N===Rh?i.cullFace(i.BACK):N===kg?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):de(i.CULL_FACE),M=N}function Me(N){N!==P&&($&&i.lineWidth(N),P=N)}function ve(N,Se,Z){N?(Ae(i.POLYGON_OFFSET_FILL),(H!==Se||B!==Z)&&(i.polygonOffset(Se,Z),H=Se,B=Z)):de(i.POLYGON_OFFSET_FILL)}function Ge(N){N?Ae(i.SCISSOR_TEST):de(i.SCISSOR_TEST)}function R(N){N===void 0&&(N=i.TEXTURE0+W-1),q!==N&&(i.activeTexture(N),q=N)}function S(N,Se,Z){Z===void 0&&(q===null?Z=i.TEXTURE0+W-1:Z=q);let Q=_e[Z];Q===void 0&&(Q={type:void 0,texture:void 0},_e[Z]=Q),(Q.type!==N||Q.texture!==Se)&&(q!==Z&&(i.activeTexture(Z),q=Z),i.bindTexture(N,Se||oe[N]),Q.type=N,Q.texture=Se)}function G(){const N=_e[q];N!==void 0&&N.type!==void 0&&(i.bindTexture(N.type,null),N.type=void 0,N.texture=void 0)}function te(){try{i.compressedTexImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ee(){try{i.compressedTexImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ie(){try{i.texSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Pe(){try{i.texSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function me(){try{i.compressedTexSubImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ge(){try{i.compressedTexSubImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ye(){try{i.texStorage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ce(){try{i.texStorage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ie(){try{i.texImage2D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function Ke(){try{i.texImage3D.apply(i,arguments)}catch(N){console.error("THREE.WebGLState:",N)}}function ke(N){je.equals(N)===!1&&(i.scissor(N.x,N.y,N.z,N.w),je.copy(N))}function xe(N){rt.equals(N)===!1&&(i.viewport(N.x,N.y,N.z,N.w),rt.copy(N))}function Je(N,Se){let Z=l.get(Se);Z===void 0&&(Z=new WeakMap,l.set(Se,Z));let Q=Z.get(N);Q===void 0&&(Q=i.getUniformBlockIndex(Se,N.name),Z.set(N,Q))}function et(N,Se){const Q=l.get(Se).get(N);o.get(Se)!==Q&&(i.uniformBlockBinding(Se,Q,N.__bindingPointIndex),o.set(Se,Q))}function At(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),c={},q=null,_e={},u={},h=new WeakMap,d=[],f=null,p=!1,v=null,g=null,m=null,y=null,x=null,_=null,L=null,T=new ye(0,0,0),C=0,I=!1,b=null,M=null,P=null,H=null,B=null,je.set(0,0,i.canvas.width,i.canvas.height),rt.set(0,0,i.canvas.width,i.canvas.height),r.reset(),s.reset(),a.reset()}return{buffers:{color:r,depth:s,stencil:a},enable:Ae,disable:de,bindFramebuffer:He,drawBuffers:qe,useProgram:Ve,setBlending:ne,setMaterial:le,setFlipSided:re,setCullFace:se,setLineWidth:Me,setPolygonOffset:ve,setScissorTest:Ge,activeTexture:R,bindTexture:S,unbindTexture:G,compressedTexImage2D:te,compressedTexImage3D:ee,texImage2D:Ie,texImage3D:Ke,updateUBOMapping:Je,uniformBlockBinding:et,texStorage2D:Ye,texStorage3D:ce,texSubImage2D:ie,texSubImage3D:Pe,compressedTexSubImage2D:me,compressedTexSubImage3D:ge,scissor:ke,viewport:xe,reset:At}}function Y1(i,e,t,n,r,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new j,u=new WeakMap;let h;const d=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function p(R,S){return f?new OffscreenCanvas(R,S):no("canvas")}function v(R,S,G){let te=1;const ee=Ge(R);if((ee.width>G||ee.height>G)&&(te=G/Math.max(ee.width,ee.height)),te<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ie=Math.floor(te*ee.width),Pe=Math.floor(te*ee.height);h===void 0&&(h=p(ie,Pe));const me=S?p(ie,Pe):h;return me.width=ie,me.height=Pe,me.getContext("2d").drawImage(R,0,0,ie,Pe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ie+"x"+Pe+")."),me}else return"data"in R&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),R;return R}function g(R){return R.generateMipmaps&&R.minFilter!==Gt&&R.minFilter!==Lt}function m(R){i.generateMipmap(R)}function y(R,S,G,te,ee=!1){if(R!==null){if(i[R]!==void 0)return i[R];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let ie=S;if(S===i.RED&&(G===i.FLOAT&&(ie=i.R32F),G===i.HALF_FLOAT&&(ie=i.R16F),G===i.UNSIGNED_BYTE&&(ie=i.R8)),S===i.RED_INTEGER&&(G===i.UNSIGNED_BYTE&&(ie=i.R8UI),G===i.UNSIGNED_SHORT&&(ie=i.R16UI),G===i.UNSIGNED_INT&&(ie=i.R32UI),G===i.BYTE&&(ie=i.R8I),G===i.SHORT&&(ie=i.R16I),G===i.INT&&(ie=i.R32I)),S===i.RG&&(G===i.FLOAT&&(ie=i.RG32F),G===i.HALF_FLOAT&&(ie=i.RG16F),G===i.UNSIGNED_BYTE&&(ie=i.RG8)),S===i.RG_INTEGER&&(G===i.UNSIGNED_BYTE&&(ie=i.RG8UI),G===i.UNSIGNED_SHORT&&(ie=i.RG16UI),G===i.UNSIGNED_INT&&(ie=i.RG32UI),G===i.BYTE&&(ie=i.RG8I),G===i.SHORT&&(ie=i.RG16I),G===i.INT&&(ie=i.RG32I)),S===i.RGB&&G===i.UNSIGNED_INT_5_9_9_9_REV&&(ie=i.RGB9_E5),S===i.RGBA){const Pe=ee?Ja:at.getTransfer(te);G===i.FLOAT&&(ie=i.RGBA32F),G===i.HALF_FLOAT&&(ie=i.RGBA16F),G===i.UNSIGNED_BYTE&&(ie=Pe===pt?i.SRGB8_ALPHA8:i.RGBA8),G===i.UNSIGNED_SHORT_4_4_4_4&&(ie=i.RGBA4),G===i.UNSIGNED_SHORT_5_5_5_1&&(ie=i.RGB5_A1)}return(ie===i.R16F||ie===i.R32F||ie===i.RG16F||ie===i.RG32F||ie===i.RGBA16F||ie===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ie}function x(R,S){let G;return R?S===null||S===ts||S===ns?G=i.DEPTH24_STENCIL8:S===yn?G=i.DEPTH32F_STENCIL8:S===Za&&(G=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):S===null||S===ts||S===ns?G=i.DEPTH_COMPONENT24:S===yn?G=i.DEPTH_COMPONENT32F:S===Za&&(G=i.DEPTH_COMPONENT16),G}function _(R,S){return g(R)===!0||R.isFramebufferTexture&&R.minFilter!==Gt&&R.minFilter!==Lt?Math.log2(Math.max(S.width,S.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?S.mipmaps.length:1}function L(R){const S=R.target;S.removeEventListener("dispose",L),C(S),S.isVideoTexture&&u.delete(S)}function T(R){const S=R.target;S.removeEventListener("dispose",T),b(S)}function C(R){const S=n.get(R);if(S.__webglInit===void 0)return;const G=R.source,te=d.get(G);if(te){const ee=te[S.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(R),Object.keys(te).length===0&&d.delete(G)}n.remove(R)}function I(R){const S=n.get(R);i.deleteTexture(S.__webglTexture);const G=R.source,te=d.get(G);delete te[S.__cacheKey],a.memory.textures--}function b(R){const S=n.get(R);if(R.depthTexture&&R.depthTexture.dispose(),R.isWebGLCubeRenderTarget)for(let te=0;te<6;te++){if(Array.isArray(S.__webglFramebuffer[te]))for(let ee=0;ee<S.__webglFramebuffer[te].length;ee++)i.deleteFramebuffer(S.__webglFramebuffer[te][ee]);else i.deleteFramebuffer(S.__webglFramebuffer[te]);S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer[te])}else{if(Array.isArray(S.__webglFramebuffer))for(let te=0;te<S.__webglFramebuffer.length;te++)i.deleteFramebuffer(S.__webglFramebuffer[te]);else i.deleteFramebuffer(S.__webglFramebuffer);if(S.__webglDepthbuffer&&i.deleteRenderbuffer(S.__webglDepthbuffer),S.__webglMultisampledFramebuffer&&i.deleteFramebuffer(S.__webglMultisampledFramebuffer),S.__webglColorRenderbuffer)for(let te=0;te<S.__webglColorRenderbuffer.length;te++)S.__webglColorRenderbuffer[te]&&i.deleteRenderbuffer(S.__webglColorRenderbuffer[te]);S.__webglDepthRenderbuffer&&i.deleteRenderbuffer(S.__webglDepthRenderbuffer)}const G=R.textures;for(let te=0,ee=G.length;te<ee;te++){const ie=n.get(G[te]);ie.__webglTexture&&(i.deleteTexture(ie.__webglTexture),a.memory.textures--),n.remove(G[te])}n.remove(R)}let M=0;function P(){M=0}function H(){const R=M;return R>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+R+" texture units while this GPU supports only "+r.maxTextures),M+=1,R}function B(R){const S=[];return S.push(R.wrapS),S.push(R.wrapT),S.push(R.wrapR||0),S.push(R.magFilter),S.push(R.minFilter),S.push(R.anisotropy),S.push(R.internalFormat),S.push(R.format),S.push(R.type),S.push(R.generateMipmaps),S.push(R.premultiplyAlpha),S.push(R.flipY),S.push(R.unpackAlignment),S.push(R.colorSpace),S.join()}function W(R,S){const G=n.get(R);if(R.isVideoTexture&&Me(R),R.isRenderTargetTexture===!1&&R.version>0&&G.__version!==R.version){const te=R.image;if(te===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(te.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{rt(G,R,S);return}}t.bindTexture(i.TEXTURE_2D,G.__webglTexture,i.TEXTURE0+S)}function $(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){rt(G,R,S);return}t.bindTexture(i.TEXTURE_2D_ARRAY,G.__webglTexture,i.TEXTURE0+S)}function X(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){rt(G,R,S);return}t.bindTexture(i.TEXTURE_3D,G.__webglTexture,i.TEXTURE0+S)}function ae(R,S){const G=n.get(R);if(R.version>0&&G.__version!==R.version){Y(G,R,S);return}t.bindTexture(i.TEXTURE_CUBE_MAP,G.__webglTexture,i.TEXTURE0+S)}const q={[qa]:i.REPEAT,[Ln]:i.CLAMP_TO_EDGE,[Ya]:i.MIRRORED_REPEAT},_e={[Gt]:i.NEAREST,[Ud]:i.NEAREST_MIPMAP_NEAREST,[Os]:i.NEAREST_MIPMAP_LINEAR,[Lt]:i.LINEAR,[za]:i.LINEAR_MIPMAP_NEAREST,[Jn]:i.LINEAR_MIPMAP_LINEAR},Ee={[O0]:i.NEVER,[H0]:i.ALWAYS,[F0]:i.LESS,[Wd]:i.LEQUAL,[k0]:i.EQUAL,[G0]:i.GEQUAL,[B0]:i.GREATER,[V0]:i.NOTEQUAL};function be(R,S){if(S.type===yn&&e.has("OES_texture_float_linear")===!1&&(S.magFilter===Lt||S.magFilter===za||S.magFilter===Os||S.magFilter===Jn||S.minFilter===Lt||S.minFilter===za||S.minFilter===Os||S.minFilter===Jn)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(R,i.TEXTURE_WRAP_S,q[S.wrapS]),i.texParameteri(R,i.TEXTURE_WRAP_T,q[S.wrapT]),(R===i.TEXTURE_3D||R===i.TEXTURE_2D_ARRAY)&&i.texParameteri(R,i.TEXTURE_WRAP_R,q[S.wrapR]),i.texParameteri(R,i.TEXTURE_MAG_FILTER,_e[S.magFilter]),i.texParameteri(R,i.TEXTURE_MIN_FILTER,_e[S.minFilter]),S.compareFunction&&(i.texParameteri(R,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(R,i.TEXTURE_COMPARE_FUNC,Ee[S.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(S.magFilter===Gt||S.minFilter!==Os&&S.minFilter!==Jn||S.type===yn&&e.has("OES_texture_float_linear")===!1)return;if(S.anisotropy>1||n.get(S).__currentAnisotropy){const G=e.get("EXT_texture_filter_anisotropic");i.texParameterf(R,G.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(S.anisotropy,r.getMaxAnisotropy())),n.get(S).__currentAnisotropy=S.anisotropy}}}function je(R,S){let G=!1;R.__webglInit===void 0&&(R.__webglInit=!0,S.addEventListener("dispose",L));const te=S.source;let ee=d.get(te);ee===void 0&&(ee={},d.set(te,ee));const ie=B(S);if(ie!==R.__cacheKey){ee[ie]===void 0&&(ee[ie]={texture:i.createTexture(),usedTimes:0},a.memory.textures++,G=!0),ee[ie].usedTimes++;const Pe=ee[R.__cacheKey];Pe!==void 0&&(ee[R.__cacheKey].usedTimes--,Pe.usedTimes===0&&I(S)),R.__cacheKey=ie,R.__webglTexture=ee[ie].texture}return G}function rt(R,S,G){let te=i.TEXTURE_2D;(S.isDataArrayTexture||S.isCompressedArrayTexture)&&(te=i.TEXTURE_2D_ARRAY),S.isData3DTexture&&(te=i.TEXTURE_3D);const ee=je(R,S),ie=S.source;t.bindTexture(te,R.__webglTexture,i.TEXTURE0+G);const Pe=n.get(ie);if(ie.version!==Pe.__version||ee===!0){t.activeTexture(i.TEXTURE0+G);const me=at.getPrimaries(at.workingColorSpace),ge=S.colorSpace===yi?null:at.getPrimaries(S.colorSpace),Ye=S.colorSpace===yi||me===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ye);let ce=v(S.image,!1,r.maxTextureSize);ce=ve(S,ce);const Ie=s.convert(S.format,S.colorSpace),Ke=s.convert(S.type);let ke=y(S.internalFormat,Ie,Ke,S.colorSpace,S.isVideoTexture);be(te,S);let xe;const Je=S.mipmaps,et=S.isVideoTexture!==!0,At=Pe.__version===void 0||ee===!0,N=ie.dataReady,Se=_(S,ce);if(S.isDepthTexture)ke=x(S.format===is,S.type),At&&(et?t.texStorage2D(i.TEXTURE_2D,1,ke,ce.width,ce.height):t.texImage2D(i.TEXTURE_2D,0,ke,ce.width,ce.height,0,Ie,Ke,null));else if(S.isDataTexture)if(Je.length>0){et&&At&&t.texStorage2D(i.TEXTURE_2D,Se,ke,Je[0].width,Je[0].height);for(let Z=0,Q=Je.length;Z<Q;Z++)xe=Je[Z],et?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,xe.width,xe.height,Ie,Ke,xe.data):t.texImage2D(i.TEXTURE_2D,Z,ke,xe.width,xe.height,0,Ie,Ke,xe.data);S.generateMipmaps=!1}else et?(At&&t.texStorage2D(i.TEXTURE_2D,Se,ke,ce.width,ce.height),N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,ce.width,ce.height,Ie,Ke,ce.data)):t.texImage2D(i.TEXTURE_2D,0,ke,ce.width,ce.height,0,Ie,Ke,ce.data);else if(S.isCompressedTexture)if(S.isCompressedArrayTexture){et&&At&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,ke,Je[0].width,Je[0].height,ce.depth);for(let Z=0,Q=Je.length;Z<Q;Z++)if(xe=Je[Z],S.format!==dn)if(Ie!==null)if(et){if(N)if(S.layerUpdates.size>0){for(const he of S.layerUpdates){const Be=xe.width*xe.height;t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,he,xe.width,xe.height,1,Ie,xe.data.slice(Be*he,Be*(he+1)),0,0)}S.clearLayerUpdates()}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,xe.width,xe.height,ce.depth,Ie,xe.data,0,0)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,Z,ke,xe.width,xe.height,ce.depth,0,xe.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?N&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,Z,0,0,0,xe.width,xe.height,ce.depth,Ie,Ke,xe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,Z,ke,xe.width,xe.height,ce.depth,0,Ie,Ke,xe.data)}else{et&&At&&t.texStorage2D(i.TEXTURE_2D,Se,ke,Je[0].width,Je[0].height);for(let Z=0,Q=Je.length;Z<Q;Z++)xe=Je[Z],S.format!==dn?Ie!==null?et?N&&t.compressedTexSubImage2D(i.TEXTURE_2D,Z,0,0,xe.width,xe.height,Ie,xe.data):t.compressedTexImage2D(i.TEXTURE_2D,Z,ke,xe.width,xe.height,0,xe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,xe.width,xe.height,Ie,Ke,xe.data):t.texImage2D(i.TEXTURE_2D,Z,ke,xe.width,xe.height,0,Ie,Ke,xe.data)}else if(S.isDataArrayTexture)if(et){if(At&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Se,ke,ce.width,ce.height,ce.depth),N)if(S.layerUpdates.size>0){let Z;switch(Ke){case i.UNSIGNED_BYTE:switch(Ie){case i.ALPHA:Z=1;break;case i.LUMINANCE:Z=1;break;case i.LUMINANCE_ALPHA:Z=2;break;case i.RGB:Z=3;break;case i.RGBA:Z=4;break;default:throw new Error(`Unknown texel size for format ${Ie}.`)}break;case i.UNSIGNED_SHORT_4_4_4_4:case i.UNSIGNED_SHORT_5_5_5_1:case i.UNSIGNED_SHORT_5_6_5:Z=1;break;default:throw new Error(`Unknown texel size for type ${Ke}.`)}const Q=ce.width*ce.height*Z;for(const he of S.layerUpdates)t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,he,ce.width,ce.height,1,Ie,Ke,ce.data.slice(Q*he,Q*(he+1)));S.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ce.width,ce.height,ce.depth,Ie,Ke,ce.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,ke,ce.width,ce.height,ce.depth,0,Ie,Ke,ce.data);else if(S.isData3DTexture)et?(At&&t.texStorage3D(i.TEXTURE_3D,Se,ke,ce.width,ce.height,ce.depth),N&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ce.width,ce.height,ce.depth,Ie,Ke,ce.data)):t.texImage3D(i.TEXTURE_3D,0,ke,ce.width,ce.height,ce.depth,0,Ie,Ke,ce.data);else if(S.isFramebufferTexture){if(At)if(et)t.texStorage2D(i.TEXTURE_2D,Se,ke,ce.width,ce.height);else{let Z=ce.width,Q=ce.height;for(let he=0;he<Se;he++)t.texImage2D(i.TEXTURE_2D,he,ke,Z,Q,0,Ie,Ke,null),Z>>=1,Q>>=1}}else if(Je.length>0){if(et&&At){const Z=Ge(Je[0]);t.texStorage2D(i.TEXTURE_2D,Se,ke,Z.width,Z.height)}for(let Z=0,Q=Je.length;Z<Q;Z++)xe=Je[Z],et?N&&t.texSubImage2D(i.TEXTURE_2D,Z,0,0,Ie,Ke,xe):t.texImage2D(i.TEXTURE_2D,Z,ke,Ie,Ke,xe);S.generateMipmaps=!1}else if(et){if(At){const Z=Ge(ce);t.texStorage2D(i.TEXTURE_2D,Se,ke,Z.width,Z.height)}N&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ie,Ke,ce)}else t.texImage2D(i.TEXTURE_2D,0,ke,Ie,Ke,ce);g(S)&&m(te),Pe.__version=ie.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function Y(R,S,G){if(S.image.length!==6)return;const te=je(R,S),ee=S.source;t.bindTexture(i.TEXTURE_CUBE_MAP,R.__webglTexture,i.TEXTURE0+G);const ie=n.get(ee);if(ee.version!==ie.__version||te===!0){t.activeTexture(i.TEXTURE0+G);const Pe=at.getPrimaries(at.workingColorSpace),me=S.colorSpace===yi?null:at.getPrimaries(S.colorSpace),ge=S.colorSpace===yi||Pe===me?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,S.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,S.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,S.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ge);const Ye=S.isCompressedTexture||S.image[0].isCompressedTexture,ce=S.image[0]&&S.image[0].isDataTexture,Ie=[];for(let Q=0;Q<6;Q++)!Ye&&!ce?Ie[Q]=v(S.image[Q],!0,r.maxCubemapSize):Ie[Q]=ce?S.image[Q].image:S.image[Q],Ie[Q]=ve(S,Ie[Q]);const Ke=Ie[0],ke=s.convert(S.format,S.colorSpace),xe=s.convert(S.type),Je=y(S.internalFormat,ke,xe,S.colorSpace),et=S.isVideoTexture!==!0,At=ie.__version===void 0||te===!0,N=ee.dataReady;let Se=_(S,Ke);be(i.TEXTURE_CUBE_MAP,S);let Z;if(Ye){et&&At&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Je,Ke.width,Ke.height);for(let Q=0;Q<6;Q++){Z=Ie[Q].mipmaps;for(let he=0;he<Z.length;he++){const Be=Z[he];S.format!==dn?ke!==null?et?N&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,Be.width,Be.height,ke,Be.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Je,Be.width,Be.height,0,Be.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):et?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,0,0,Be.width,Be.height,ke,xe,Be.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he,Je,Be.width,Be.height,0,ke,xe,Be.data)}}}else{if(Z=S.mipmaps,et&&At){Z.length>0&&Se++;const Q=Ge(Ie[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Se,Je,Q.width,Q.height)}for(let Q=0;Q<6;Q++)if(ce){et?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Ie[Q].width,Ie[Q].height,ke,xe,Ie[Q].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,Ie[Q].width,Ie[Q].height,0,ke,xe,Ie[Q].data);for(let he=0;he<Z.length;he++){const st=Z[he].image[Q].image;et?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,st.width,st.height,ke,xe,st.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Je,st.width,st.height,0,ke,xe,st.data)}}else{et?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,ke,xe,Ie[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,Je,ke,xe,Ie[Q]);for(let he=0;he<Z.length;he++){const Be=Z[he];et?N&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,0,0,ke,xe,Be.image[Q]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Q,he+1,Je,ke,xe,Be.image[Q])}}}g(S)&&m(i.TEXTURE_CUBE_MAP),ie.__version=ee.version,S.onUpdate&&S.onUpdate(S)}R.__version=S.version}function oe(R,S,G,te,ee,ie){const Pe=s.convert(G.format,G.colorSpace),me=s.convert(G.type),ge=y(G.internalFormat,Pe,me,G.colorSpace);if(!n.get(S).__hasExternalTextures){const ce=Math.max(1,S.width>>ie),Ie=Math.max(1,S.height>>ie);ee===i.TEXTURE_3D||ee===i.TEXTURE_2D_ARRAY?t.texImage3D(ee,ie,ge,ce,Ie,S.depth,0,Pe,me,null):t.texImage2D(ee,ie,ge,ce,Ie,0,Pe,me,null)}t.bindFramebuffer(i.FRAMEBUFFER,R),se(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,te,ee,n.get(G).__webglTexture,0,re(S)):(ee===i.TEXTURE_2D||ee>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,te,ee,n.get(G).__webglTexture,ie),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ae(R,S,G){if(i.bindRenderbuffer(i.RENDERBUFFER,R),S.depthBuffer){const te=S.depthTexture,ee=te&&te.isDepthTexture?te.type:null,ie=x(S.stencilBuffer,ee),Pe=S.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,me=re(S);se(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,me,ie,S.width,S.height):G?i.renderbufferStorageMultisample(i.RENDERBUFFER,me,ie,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ie,S.width,S.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,R)}else{const te=S.textures;for(let ee=0;ee<te.length;ee++){const ie=te[ee],Pe=s.convert(ie.format,ie.colorSpace),me=s.convert(ie.type),ge=y(ie.internalFormat,Pe,me,ie.colorSpace),Ye=re(S);G&&se(S)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ye,ge,S.width,S.height):se(S)?o.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ye,ge,S.width,S.height):i.renderbufferStorage(i.RENDERBUFFER,ge,S.width,S.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function de(R,S){if(S&&S.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(i.FRAMEBUFFER,R),!(S.depthTexture&&S.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!n.get(S.depthTexture).__webglTexture||S.depthTexture.image.width!==S.width||S.depthTexture.image.height!==S.height)&&(S.depthTexture.image.width=S.width,S.depthTexture.image.height=S.height,S.depthTexture.needsUpdate=!0),W(S.depthTexture,0);const te=n.get(S.depthTexture).__webglTexture,ee=re(S);if(S.depthTexture.format===$r)se(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,te,0);else if(S.depthTexture.format===is)se(S)?o.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0,ee):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,te,0);else throw new Error("Unknown depthTexture format")}function He(R){const S=n.get(R),G=R.isWebGLCubeRenderTarget===!0;if(R.depthTexture&&!S.__autoAllocateDepthBuffer){if(G)throw new Error("target.depthTexture not supported in Cube render targets");de(S.__webglFramebuffer,R)}else if(G){S.__webglDepthbuffer=[];for(let te=0;te<6;te++)t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer[te]),S.__webglDepthbuffer[te]=i.createRenderbuffer(),Ae(S.__webglDepthbuffer[te],R,!1)}else t.bindFramebuffer(i.FRAMEBUFFER,S.__webglFramebuffer),S.__webglDepthbuffer=i.createRenderbuffer(),Ae(S.__webglDepthbuffer,R,!1);t.bindFramebuffer(i.FRAMEBUFFER,null)}function qe(R,S,G){const te=n.get(R);S!==void 0&&oe(te.__webglFramebuffer,R,R.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),G!==void 0&&He(R)}function Ve(R){const S=R.texture,G=n.get(R),te=n.get(S);R.addEventListener("dispose",T);const ee=R.textures,ie=R.isWebGLCubeRenderTarget===!0,Pe=ee.length>1;if(Pe||(te.__webglTexture===void 0&&(te.__webglTexture=i.createTexture()),te.__version=S.version,a.memory.textures++),ie){G.__webglFramebuffer=[];for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer[me]=[];for(let ge=0;ge<S.mipmaps.length;ge++)G.__webglFramebuffer[me][ge]=i.createFramebuffer()}else G.__webglFramebuffer[me]=i.createFramebuffer()}else{if(S.mipmaps&&S.mipmaps.length>0){G.__webglFramebuffer=[];for(let me=0;me<S.mipmaps.length;me++)G.__webglFramebuffer[me]=i.createFramebuffer()}else G.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let me=0,ge=ee.length;me<ge;me++){const Ye=n.get(ee[me]);Ye.__webglTexture===void 0&&(Ye.__webglTexture=i.createTexture(),a.memory.textures++)}if(R.samples>0&&se(R)===!1){G.__webglMultisampledFramebuffer=i.createFramebuffer(),G.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,G.__webglMultisampledFramebuffer);for(let me=0;me<ee.length;me++){const ge=ee[me];G.__webglColorRenderbuffer[me]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,G.__webglColorRenderbuffer[me]);const Ye=s.convert(ge.format,ge.colorSpace),ce=s.convert(ge.type),Ie=y(ge.internalFormat,Ye,ce,ge.colorSpace,R.isXRRenderTarget===!0),Ke=re(R);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ke,Ie,R.width,R.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+me,i.RENDERBUFFER,G.__webglColorRenderbuffer[me])}i.bindRenderbuffer(i.RENDERBUFFER,null),R.depthBuffer&&(G.__webglDepthRenderbuffer=i.createRenderbuffer(),Ae(G.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(ie){t.bindTexture(i.TEXTURE_CUBE_MAP,te.__webglTexture),be(i.TEXTURE_CUBE_MAP,S);for(let me=0;me<6;me++)if(S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)oe(G.__webglFramebuffer[me][ge],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,ge);else oe(G.__webglFramebuffer[me],R,S,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);g(S)&&m(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let me=0,ge=ee.length;me<ge;me++){const Ye=ee[me],ce=n.get(Ye);t.bindTexture(i.TEXTURE_2D,ce.__webglTexture),be(i.TEXTURE_2D,Ye),oe(G.__webglFramebuffer,R,Ye,i.COLOR_ATTACHMENT0+me,i.TEXTURE_2D,0),g(Ye)&&m(i.TEXTURE_2D)}t.unbindTexture()}else{let me=i.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(me=R.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(me,te.__webglTexture),be(me,S),S.mipmaps&&S.mipmaps.length>0)for(let ge=0;ge<S.mipmaps.length;ge++)oe(G.__webglFramebuffer[ge],R,S,i.COLOR_ATTACHMENT0,me,ge);else oe(G.__webglFramebuffer,R,S,i.COLOR_ATTACHMENT0,me,0);g(S)&&m(me),t.unbindTexture()}R.depthBuffer&&He(R)}function D(R){const S=R.textures;for(let G=0,te=S.length;G<te;G++){const ee=S[G];if(g(ee)){const ie=R.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:i.TEXTURE_2D,Pe=n.get(ee).__webglTexture;t.bindTexture(ie,Pe),m(ie),t.unbindTexture()}}}const K=[],ne=[];function le(R){if(R.samples>0){if(se(R)===!1){const S=R.textures,G=R.width,te=R.height;let ee=i.COLOR_BUFFER_BIT;const ie=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=n.get(R),me=S.length>1;if(me)for(let ge=0;ge<S.length;ge++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let ge=0;ge<S.length;ge++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ee|=i.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ee|=i.STENCIL_BUFFER_BIT)),me){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[ge]);const Ye=n.get(S[ge]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ye,0)}i.blitFramebuffer(0,0,G,te,0,0,G,te,ee,i.NEAREST),l===!0&&(K.length=0,ne.length=0,K.push(i.COLOR_ATTACHMENT0+ge),R.depthBuffer&&R.resolveDepthBuffer===!1&&(K.push(ie),ne.push(ie),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,ne)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,K))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),me)for(let ge=0;ge<S.length;ge++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[ge]);const Ye=n.get(S[ge]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.TEXTURE_2D,Ye,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.resolveDepthBuffer===!1&&l){const S=R.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[S])}}}function re(R){return Math.min(r.maxSamples,R.samples)}function se(R){const S=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&S.__useRenderToTexture!==!1}function Me(R){const S=a.render.frame;u.get(R)!==S&&(u.set(R,S),R.update())}function ve(R,S){const G=R.colorSpace,te=R.format,ee=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||G!==ni&&G!==yi&&(at.getTransfer(G)===pt?(te!==dn||ee!==Li)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",G)),S}function Ge(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=P,this.setTexture2D=W,this.setTexture2DArray=$,this.setTexture3D=X,this.setTextureCube=ae,this.rebindTextures=qe,this.setupRenderTarget=Ve,this.updateRenderTargetMipmap=D,this.updateMultisampleRenderTarget=le,this.setupDepthRenderbuffer=He,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=se}function sv(i,e){function t(n,r=yi){let s;const a=at.getTransfer(r);if(n===Li)return i.UNSIGNED_BYTE;if(n===Od)return i.UNSIGNED_SHORT_4_4_4_4;if(n===Fd)return i.UNSIGNED_SHORT_5_5_5_1;if(n===b0)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===S0)return i.BYTE;if(n===w0)return i.SHORT;if(n===Za)return i.UNSIGNED_SHORT;if(n===zd)return i.INT;if(n===ts)return i.UNSIGNED_INT;if(n===yn)return i.FLOAT;if(n===Fo)return i.HALF_FLOAT;if(n===A0)return i.ALPHA;if(n===T0)return i.RGB;if(n===dn)return i.RGBA;if(n===E0)return i.LUMINANCE;if(n===C0)return i.LUMINANCE_ALPHA;if(n===$r)return i.DEPTH_COMPONENT;if(n===is)return i.DEPTH_STENCIL;if(n===kd)return i.RED;if(n===Bd)return i.RED_INTEGER;if(n===R0)return i.RG;if(n===Vd)return i.RG_INTEGER;if(n===Gd)return i.RGBA_INTEGER;if(n===Kl||n===Ql||n===ec||n===tc)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Kl)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Ql)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===tc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Kl)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Ql)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===ec)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===tc)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Nh||n===Uh||n===zh||n===Oh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Nh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Uh)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===zh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Oh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Fh||n===kh||n===Bh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Fh||n===kh)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===Bh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===Vh||n===Gh||n===Hh||n===Wh||n===Xh||n===qh||n===Yh||n===Zh||n===$h||n===jh||n===Jh||n===Kh||n===Qh||n===ed)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Vh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Gh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Hh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Wh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Xh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===qh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Yh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Zh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===$h)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===jh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===Jh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Kh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Qh)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===ed)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===nc||n===td||n===nd)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===nc)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===td)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===nd)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===I0||n===id||n===rd||n===sd)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===nc)return s.COMPRESSED_RED_RGTC1_EXT;if(n===id)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===rd)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===sd)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===ns?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:t}}class av extends Xt{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class Bs extends it{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Z1={type:"move"};class ih{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Bs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Bs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new E,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new E),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Bs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new E,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new E),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let r=null,s=null,a=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(const v of e.hand.values()){const g=t.getJointPose(v,n),m=this._getHandJoint(c,v);g!==null&&(m.matrix.fromArray(g.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=g.radius),m.visible=g!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),f=.02,p=.005;c.inputState.pinching&&d>f+p?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=f-p&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(r=t.getPose(e.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(o.matrix.fromArray(r.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,r.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(r.linearVelocity)):o.hasLinearVelocity=!1,r.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(r.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Z1)))}return o!==null&&(o.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Bs;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const $1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,j1=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class J1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,n){if(this.texture===null){const r=new bt,s=e.properties.get(r);s.__webglTexture=t.texture,(t.depthNear!=n.depthNear||t.depthFar!=n.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new Vn({vertexShader:$1,fragmentShader:j1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Pt(new pa(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}}class K1 extends Ui{constructor(e,t){super();const n=this;let r=null,s=1,a=null,o="local-floor",l=1,c=null,u=null,h=null,d=null,f=null,p=null;const v=new J1,g=t.getContextAttributes();let m=null,y=null;const x=[],_=[],L=new j;let T=null;const C=new Xt;C.layers.enable(1),C.viewport=new ct;const I=new Xt;I.layers.enable(2),I.viewport=new ct;const b=[C,I],M=new av;M.layers.enable(1),M.layers.enable(2);let P=null,H=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(Y){let oe=x[Y];return oe===void 0&&(oe=new ih,x[Y]=oe),oe.getTargetRaySpace()},this.getControllerGrip=function(Y){let oe=x[Y];return oe===void 0&&(oe=new ih,x[Y]=oe),oe.getGripSpace()},this.getHand=function(Y){let oe=x[Y];return oe===void 0&&(oe=new ih,x[Y]=oe),oe.getHandSpace()};function B(Y){const oe=_.indexOf(Y.inputSource);if(oe===-1)return;const Ae=x[oe];Ae!==void 0&&(Ae.update(Y.inputSource,Y.frame,c||a),Ae.dispatchEvent({type:Y.type,data:Y.inputSource}))}function W(){r.removeEventListener("select",B),r.removeEventListener("selectstart",B),r.removeEventListener("selectend",B),r.removeEventListener("squeeze",B),r.removeEventListener("squeezestart",B),r.removeEventListener("squeezeend",B),r.removeEventListener("end",W),r.removeEventListener("inputsourceschange",$);for(let Y=0;Y<x.length;Y++){const oe=_[Y];oe!==null&&(_[Y]=null,x[Y].disconnect(oe))}P=null,H=null,v.reset(),e.setRenderTarget(m),f=null,d=null,h=null,r=null,y=null,rt.stop(),n.isPresenting=!1,e.setPixelRatio(T),e.setSize(L.width,L.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(Y){s=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(Y){o=Y,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(Y){c=Y},this.getBaseLayer=function(){return d!==null?d:f},this.getBinding=function(){return h},this.getFrame=function(){return p},this.getSession=function(){return r},this.setSession=async function(Y){if(r=Y,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",B),r.addEventListener("selectstart",B),r.addEventListener("selectend",B),r.addEventListener("squeeze",B),r.addEventListener("squeezestart",B),r.addEventListener("squeezeend",B),r.addEventListener("end",W),r.addEventListener("inputsourceschange",$),g.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(L),r.renderState.layers===void 0){const oe={antialias:g.antialias,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};f=new XRWebGLLayer(r,t,oe),r.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Bn(f.framebufferWidth,f.framebufferHeight,{format:dn,type:Li,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let oe=null,Ae=null,de=null;g.depth&&(de=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=g.stencil?is:$r,Ae=g.stencil?ns:ts);const He={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:s};h=new XRWebGLBinding(r,t),d=h.createProjectionLayer(He),r.updateRenderState({layers:[d]}),e.setPixelRatio(1),e.setSize(d.textureWidth,d.textureHeight,!1),y=new Bn(d.textureWidth,d.textureHeight,{format:dn,type:Li,depthTexture:new Jd(d.textureWidth,d.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await r.requestReferenceSpace(o),rt.setContext(r),rt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function $(Y){for(let oe=0;oe<Y.removed.length;oe++){const Ae=Y.removed[oe],de=_.indexOf(Ae);de>=0&&(_[de]=null,x[de].disconnect(Ae))}for(let oe=0;oe<Y.added.length;oe++){const Ae=Y.added[oe];let de=_.indexOf(Ae);if(de===-1){for(let qe=0;qe<x.length;qe++)if(qe>=_.length){_.push(Ae),de=qe;break}else if(_[qe]===null){_[qe]=Ae,de=qe;break}if(de===-1)break}const He=x[de];He&&He.connect(Ae)}}const X=new E,ae=new E;function q(Y,oe,Ae){X.setFromMatrixPosition(oe.matrixWorld),ae.setFromMatrixPosition(Ae.matrixWorld);const de=X.distanceTo(ae),He=oe.projectionMatrix.elements,qe=Ae.projectionMatrix.elements,Ve=He[14]/(He[10]-1),D=He[14]/(He[10]+1),K=(He[9]+1)/He[5],ne=(He[9]-1)/He[5],le=(He[8]-1)/He[0],re=(qe[8]+1)/qe[0],se=Ve*le,Me=Ve*re,ve=de/(-le+re),Ge=ve*-le;oe.matrixWorld.decompose(Y.position,Y.quaternion,Y.scale),Y.translateX(Ge),Y.translateZ(ve),Y.matrixWorld.compose(Y.position,Y.quaternion,Y.scale),Y.matrixWorldInverse.copy(Y.matrixWorld).invert();const R=Ve+ve,S=D+ve,G=se-Ge,te=Me+(de-Ge),ee=K*D/S*R,ie=ne*D/S*R;Y.projectionMatrix.makePerspective(G,te,ee,ie,R,S),Y.projectionMatrixInverse.copy(Y.projectionMatrix).invert()}function _e(Y,oe){oe===null?Y.matrixWorld.copy(Y.matrix):Y.matrixWorld.multiplyMatrices(oe.matrixWorld,Y.matrix),Y.matrixWorldInverse.copy(Y.matrixWorld).invert()}this.updateCamera=function(Y){if(r===null)return;v.texture!==null&&(Y.near=v.depthNear,Y.far=v.depthFar),M.near=I.near=C.near=Y.near,M.far=I.far=C.far=Y.far,(P!==M.near||H!==M.far)&&(r.updateRenderState({depthNear:M.near,depthFar:M.far}),P=M.near,H=M.far,C.near=P,C.far=H,I.near=P,I.far=H,C.updateProjectionMatrix(),I.updateProjectionMatrix(),Y.updateProjectionMatrix());const oe=Y.parent,Ae=M.cameras;_e(M,oe);for(let de=0;de<Ae.length;de++)_e(Ae[de],oe);Ae.length===2?q(M,C,I):M.projectionMatrix.copy(C.projectionMatrix),Ee(Y,M,oe)};function Ee(Y,oe,Ae){Ae===null?Y.matrix.copy(oe.matrixWorld):(Y.matrix.copy(Ae.matrixWorld),Y.matrix.invert(),Y.matrix.multiply(oe.matrixWorld)),Y.matrix.decompose(Y.position,Y.quaternion,Y.scale),Y.updateMatrixWorld(!0),Y.projectionMatrix.copy(oe.projectionMatrix),Y.projectionMatrixInverse.copy(oe.projectionMatrixInverse),Y.isPerspectiveCamera&&(Y.fov=aa*2*Math.atan(1/Y.projectionMatrix.elements[5]),Y.zoom=1)}this.getCamera=function(){return M},this.getFoveation=function(){if(!(d===null&&f===null))return l},this.setFoveation=function(Y){l=Y,d!==null&&(d.fixedFoveation=Y),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=Y)},this.hasDepthSensing=function(){return v.texture!==null},this.getDepthSensingMesh=function(){return v.getMesh(M)};let be=null;function je(Y,oe){if(u=oe.getViewerPose(c||a),p=oe,u!==null){const Ae=u.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let de=!1;Ae.length!==M.cameras.length&&(M.cameras.length=0,de=!0);for(let qe=0;qe<Ae.length;qe++){const Ve=Ae[qe];let D=null;if(f!==null)D=f.getViewport(Ve);else{const ne=h.getViewSubImage(d,Ve);D=ne.viewport,qe===0&&(e.setRenderTargetTextures(y,ne.colorTexture,d.ignoreDepthValues?void 0:ne.depthStencilTexture),e.setRenderTarget(y))}let K=b[qe];K===void 0&&(K=new Xt,K.layers.enable(qe),K.viewport=new ct,b[qe]=K),K.matrix.fromArray(Ve.transform.matrix),K.matrix.decompose(K.position,K.quaternion,K.scale),K.projectionMatrix.fromArray(Ve.projectionMatrix),K.projectionMatrixInverse.copy(K.projectionMatrix).invert(),K.viewport.set(D.x,D.y,D.width,D.height),qe===0&&(M.matrix.copy(K.matrix),M.matrix.decompose(M.position,M.quaternion,M.scale)),de===!0&&M.cameras.push(K)}const He=r.enabledFeatures;if(He&&He.includes("depth-sensing")){const qe=h.getDepthInformation(Ae[0]);qe&&qe.isValid&&qe.texture&&v.init(e,qe,r.renderState)}}for(let Ae=0;Ae<x.length;Ae++){const de=_[Ae],He=x[Ae];de!==null&&He!==void 0&&He.update(de,oe,c||a)}be&&be(Y,oe),oe.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:oe}),p=null}const rt=new Q0;rt.setAnimationLoop(je),this.setAnimationLoop=function(Y){be=Y},this.dispose=function(){}}}const vr=new wn,Q1=new ze;function eA(i,e){function t(g,m){g.matrixAutoUpdate===!0&&g.updateMatrix(),m.value.copy(g.matrix)}function n(g,m){m.color.getRGB(g.fogColor.value,$0(i)),m.isFog?(g.fogNear.value=m.near,g.fogFar.value=m.far):m.isFogExp2&&(g.fogDensity.value=m.density)}function r(g,m,y,x,_){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(g,m):m.isMeshToonMaterial?(s(g,m),h(g,m)):m.isMeshPhongMaterial?(s(g,m),u(g,m)):m.isMeshStandardMaterial?(s(g,m),d(g,m),m.isMeshPhysicalMaterial&&f(g,m,_)):m.isMeshMatcapMaterial?(s(g,m),p(g,m)):m.isMeshDepthMaterial?s(g,m):m.isMeshDistanceMaterial?(s(g,m),v(g,m)):m.isMeshNormalMaterial?s(g,m):m.isLineBasicMaterial?(a(g,m),m.isLineDashedMaterial&&o(g,m)):m.isPointsMaterial?l(g,m,y,x):m.isSpriteMaterial?c(g,m):m.isShadowMaterial?(g.color.value.copy(m.color),g.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(g,m){g.opacity.value=m.opacity,m.color&&g.diffuse.value.copy(m.color),m.emissive&&g.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.bumpMap&&(g.bumpMap.value=m.bumpMap,t(m.bumpMap,g.bumpMapTransform),g.bumpScale.value=m.bumpScale,m.side===rn&&(g.bumpScale.value*=-1)),m.normalMap&&(g.normalMap.value=m.normalMap,t(m.normalMap,g.normalMapTransform),g.normalScale.value.copy(m.normalScale),m.side===rn&&g.normalScale.value.negate()),m.displacementMap&&(g.displacementMap.value=m.displacementMap,t(m.displacementMap,g.displacementMapTransform),g.displacementScale.value=m.displacementScale,g.displacementBias.value=m.displacementBias),m.emissiveMap&&(g.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,g.emissiveMapTransform)),m.specularMap&&(g.specularMap.value=m.specularMap,t(m.specularMap,g.specularMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest);const y=e.get(m),x=y.envMap,_=y.envMapRotation;x&&(g.envMap.value=x,vr.copy(_),vr.x*=-1,vr.y*=-1,vr.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(vr.y*=-1,vr.z*=-1),g.envMapRotation.value.setFromMatrix4(Q1.makeRotationFromEuler(vr)),g.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,g.reflectivity.value=m.reflectivity,g.ior.value=m.ior,g.refractionRatio.value=m.refractionRatio),m.lightMap&&(g.lightMap.value=m.lightMap,g.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,g.lightMapTransform)),m.aoMap&&(g.aoMap.value=m.aoMap,g.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,g.aoMapTransform))}function a(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform))}function o(g,m){g.dashSize.value=m.dashSize,g.totalSize.value=m.dashSize+m.gapSize,g.scale.value=m.scale}function l(g,m,y,x){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.size.value=m.size*y,g.scale.value=x*.5,m.map&&(g.map.value=m.map,t(m.map,g.uvTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function c(g,m){g.diffuse.value.copy(m.color),g.opacity.value=m.opacity,g.rotation.value=m.rotation,m.map&&(g.map.value=m.map,t(m.map,g.mapTransform)),m.alphaMap&&(g.alphaMap.value=m.alphaMap,t(m.alphaMap,g.alphaMapTransform)),m.alphaTest>0&&(g.alphaTest.value=m.alphaTest)}function u(g,m){g.specular.value.copy(m.specular),g.shininess.value=Math.max(m.shininess,1e-4)}function h(g,m){m.gradientMap&&(g.gradientMap.value=m.gradientMap)}function d(g,m){g.metalness.value=m.metalness,m.metalnessMap&&(g.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,g.metalnessMapTransform)),g.roughness.value=m.roughness,m.roughnessMap&&(g.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,g.roughnessMapTransform)),m.envMap&&(g.envMapIntensity.value=m.envMapIntensity)}function f(g,m,y){g.ior.value=m.ior,m.sheen>0&&(g.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),g.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(g.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,g.sheenColorMapTransform)),m.sheenRoughnessMap&&(g.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,g.sheenRoughnessMapTransform))),m.clearcoat>0&&(g.clearcoat.value=m.clearcoat,g.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(g.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,g.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(g.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,g.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(g.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,g.clearcoatNormalMapTransform),g.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===rn&&g.clearcoatNormalScale.value.negate())),m.dispersion>0&&(g.dispersion.value=m.dispersion),m.iridescence>0&&(g.iridescence.value=m.iridescence,g.iridescenceIOR.value=m.iridescenceIOR,g.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],g.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(g.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,g.iridescenceMapTransform)),m.iridescenceThicknessMap&&(g.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,g.iridescenceThicknessMapTransform))),m.transmission>0&&(g.transmission.value=m.transmission,g.transmissionSamplerMap.value=y.texture,g.transmissionSamplerSize.value.set(y.width,y.height),m.transmissionMap&&(g.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,g.transmissionMapTransform)),g.thickness.value=m.thickness,m.thicknessMap&&(g.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,g.thicknessMapTransform)),g.attenuationDistance.value=m.attenuationDistance,g.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(g.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(g.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,g.anisotropyMapTransform))),g.specularIntensity.value=m.specularIntensity,g.specularColor.value.copy(m.specularColor),m.specularColorMap&&(g.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,g.specularColorMapTransform)),m.specularIntensityMap&&(g.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,g.specularIntensityMapTransform))}function p(g,m){m.matcap&&(g.matcap.value=m.matcap)}function v(g,m){const y=e.get(m).light;g.referencePosition.value.setFromMatrixPosition(y.matrixWorld),g.nearDistance.value=y.shadow.camera.near,g.farDistance.value=y.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function tA(i,e,t,n){let r={},s={},a=[];const o=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,x){const _=x.program;n.uniformBlockBinding(y,_)}function c(y,x){let _=r[y.id];_===void 0&&(p(y),_=u(y),r[y.id]=_,y.addEventListener("dispose",g));const L=x.program;n.updateUBOMapping(y,L);const T=e.render.frame;s[y.id]!==T&&(d(y),s[y.id]=T)}function u(y){const x=h();y.__bindingPointIndex=x;const _=i.createBuffer(),L=y.__size,T=y.usage;return i.bindBuffer(i.UNIFORM_BUFFER,_),i.bufferData(i.UNIFORM_BUFFER,L,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,x,_),_}function h(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(y){const x=r[y.id],_=y.uniforms,L=y.__cache;i.bindBuffer(i.UNIFORM_BUFFER,x);for(let T=0,C=_.length;T<C;T++){const I=Array.isArray(_[T])?_[T]:[_[T]];for(let b=0,M=I.length;b<M;b++){const P=I[b];if(f(P,T,b,L)===!0){const H=P.__offset,B=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let $=0;$<B.length;$++){const X=B[$],ae=v(X);typeof X=="number"||typeof X=="boolean"?(P.__data[0]=X,i.bufferSubData(i.UNIFORM_BUFFER,H+W,P.__data)):X.isMatrix3?(P.__data[0]=X.elements[0],P.__data[1]=X.elements[1],P.__data[2]=X.elements[2],P.__data[3]=0,P.__data[4]=X.elements[3],P.__data[5]=X.elements[4],P.__data[6]=X.elements[5],P.__data[7]=0,P.__data[8]=X.elements[6],P.__data[9]=X.elements[7],P.__data[10]=X.elements[8],P.__data[11]=0):(X.toArray(P.__data,W),W+=ae.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,H,P.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function f(y,x,_,L){const T=y.value,C=x+"_"+_;if(L[C]===void 0)return typeof T=="number"||typeof T=="boolean"?L[C]=T:L[C]=T.clone(),!0;{const I=L[C];if(typeof T=="number"||typeof T=="boolean"){if(I!==T)return L[C]=T,!0}else if(I.equals(T)===!1)return I.copy(T),!0}return!1}function p(y){const x=y.uniforms;let _=0;const L=16;for(let C=0,I=x.length;C<I;C++){const b=Array.isArray(x[C])?x[C]:[x[C]];for(let M=0,P=b.length;M<P;M++){const H=b[M],B=Array.isArray(H.value)?H.value:[H.value];for(let W=0,$=B.length;W<$;W++){const X=B[W],ae=v(X),q=_%L;q!==0&&L-q<ae.boundary&&(_+=L-q),H.__data=new Float32Array(ae.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=_,_+=ae.storage}}}const T=_%L;return T>0&&(_+=L-T),y.__size=_,y.__cache={},this}function v(y){const x={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(x.boundary=4,x.storage=4):y.isVector2?(x.boundary=8,x.storage=8):y.isVector3||y.isColor?(x.boundary=16,x.storage=12):y.isVector4?(x.boundary=16,x.storage=16):y.isMatrix3?(x.boundary=48,x.storage=48):y.isMatrix4?(x.boundary=64,x.storage=64):y.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",y),x}function g(y){const x=y.target;x.removeEventListener("dispose",g);const _=a.indexOf(x.__bindingPointIndex);a.splice(_,1),i.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function m(){for(const y in r)i.deleteBuffer(r[y]);a=[],r={},s={}}return{bind:l,update:c,dispose:m}}class nA{constructor(e={}){const{canvas:t=X0(),context:n=null,depth:r=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1}=e;this.isWebGLRenderer=!0;let d;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");d=n.getContextAttributes().alpha}else d=a;const f=new Uint32Array(4),p=new Int32Array(4);let v=null,g=null;const m=[],y=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=Rn,this.toneMapping=Ai,this.toneMappingExposure=1;const x=this;let _=!1,L=0,T=0,C=null,I=-1,b=null;const M=new ct,P=new ct;let H=null;const B=new ye(0);let W=0,$=t.width,X=t.height,ae=1,q=null,_e=null;const Ee=new ct(0,0,$,X),be=new ct(0,0,$,X);let je=!1;const rt=new Vo;let Y=!1,oe=!1;const Ae=new ze,de=new E,He={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let qe=!1;function Ve(){return C===null?ae:1}let D=n;function K(A,U){return t.getContext(A,U)}try{const A={alpha:!0,depth:r,stencil:s,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${$c}`),t.addEventListener("webglcontextlost",Se,!1),t.addEventListener("webglcontextrestored",Z,!1),t.addEventListener("webglcontextcreationerror",Q,!1),D===null){const U="webgl2";if(D=K(U,A),D===null)throw K(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(A){throw console.error("THREE.WebGLRenderer: "+A.message),A}let ne,le,re,se,Me,ve,Ge,R,S,G,te,ee,ie,Pe,me,ge,Ye,ce,Ie,Ke,ke,xe,Je,et;function At(){ne=new pb(D),ne.init(),xe=new sv(D,ne),le=new lb(D,ne,e,xe),re=new q1(D),se=new vb(D),Me=new N1,ve=new Y1(D,ne,re,Me,le,xe,se),Ge=new ub(x),R=new fb(x),S=new bM(D),Je=new ab(D,S),G=new mb(D,S,se,Je),te=new yb(D,G,S,se),Ie=new xb(D,le,ve),ge=new cb(Me),ee=new D1(x,Ge,R,ne,le,Je,ge),ie=new eA(x,Me),Pe=new z1,me=new G1(ne),ce=new sb(x,Ge,R,re,te,d,l),Ye=new X1(x,te,le),et=new tA(D,se,le,re),Ke=new ob(D,ne,se),ke=new gb(D,ne,se),se.programs=ee.programs,x.capabilities=le,x.extensions=ne,x.properties=Me,x.renderLists=Pe,x.shadowMap=Ye,x.state=re,x.info=se}At();const N=new K1(x,D);this.xr=N,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const A=ne.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=ne.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return ae},this.setPixelRatio=function(A){A!==void 0&&(ae=A,this.setSize($,X,!1))},this.getSize=function(A){return A.set($,X)},this.setSize=function(A,U,k=!0){if(N.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}$=A,X=U,t.width=Math.floor(A*ae),t.height=Math.floor(U*ae),k===!0&&(t.style.width=A+"px",t.style.height=U+"px"),this.setViewport(0,0,A,U)},this.getDrawingBufferSize=function(A){return A.set($*ae,X*ae).floor()},this.setDrawingBufferSize=function(A,U,k){$=A,X=U,ae=k,t.width=Math.floor(A*k),t.height=Math.floor(U*k),this.setViewport(0,0,A,U)},this.getCurrentViewport=function(A){return A.copy(M)},this.getViewport=function(A){return A.copy(Ee)},this.setViewport=function(A,U,k,V){A.isVector4?Ee.set(A.x,A.y,A.z,A.w):Ee.set(A,U,k,V),re.viewport(M.copy(Ee).multiplyScalar(ae).round())},this.getScissor=function(A){return A.copy(be)},this.setScissor=function(A,U,k,V){A.isVector4?be.set(A.x,A.y,A.z,A.w):be.set(A,U,k,V),re.scissor(P.copy(be).multiplyScalar(ae).round())},this.getScissorTest=function(){return je},this.setScissorTest=function(A){re.setScissorTest(je=A)},this.setOpaqueSort=function(A){q=A},this.setTransparentSort=function(A){_e=A},this.getClearColor=function(A){return A.copy(ce.getClearColor())},this.setClearColor=function(){ce.setClearColor.apply(ce,arguments)},this.getClearAlpha=function(){return ce.getClearAlpha()},this.setClearAlpha=function(){ce.setClearAlpha.apply(ce,arguments)},this.clear=function(A=!0,U=!0,k=!0){let V=0;if(A){let O=!1;if(C!==null){const ue=C.texture.format;O=ue===Gd||ue===Vd||ue===Bd}if(O){const ue=C.texture.type,we=ue===Li||ue===ts||ue===Za||ue===ns||ue===Od||ue===Fd,Ce=ce.getClearColor(),Le=ce.getClearAlpha(),Oe=Ce.r,Fe=Ce.g,Ne=Ce.b;we?(f[0]=Oe,f[1]=Fe,f[2]=Ne,f[3]=Le,D.clearBufferuiv(D.COLOR,0,f)):(p[0]=Oe,p[1]=Fe,p[2]=Ne,p[3]=Le,D.clearBufferiv(D.COLOR,0,p))}else V|=D.COLOR_BUFFER_BIT}U&&(V|=D.DEPTH_BUFFER_BIT),k&&(V|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Se,!1),t.removeEventListener("webglcontextrestored",Z,!1),t.removeEventListener("webglcontextcreationerror",Q,!1),Pe.dispose(),me.dispose(),Me.dispose(),Ge.dispose(),R.dispose(),te.dispose(),Je.dispose(),et.dispose(),ee.dispose(),N.dispose(),N.removeEventListener("sessionstart",Wn),N.removeEventListener("sessionend",Xn),cr.stop()};function Se(A){A.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),_=!0}function Z(){console.log("THREE.WebGLRenderer: Context Restored."),_=!1;const A=se.autoReset,U=Ye.enabled,k=Ye.autoUpdate,V=Ye.needsUpdate,O=Ye.type;At(),se.autoReset=A,Ye.enabled=U,Ye.autoUpdate=k,Ye.needsUpdate=V,Ye.type=O}function Q(A){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function he(A){const U=A.target;U.removeEventListener("dispose",he),Be(U)}function Be(A){st(A),Me.remove(A)}function st(A){const U=Me.get(A).programs;U!==void 0&&(U.forEach(function(k){ee.releaseProgram(k)}),A.isShaderMaterial&&ee.releaseShaderCache(A))}this.renderBufferDirect=function(A,U,k,V,O,ue){U===null&&(U=He);const we=O.isMesh&&O.matrixWorld.determinant()<0,Ce=ny(A,U,k,V,O);re.setMaterial(V,we);let Le=k.index,Oe=1;if(V.wireframe===!0){if(Le=G.getWireframeAttribute(k),Le===void 0)return;Oe=2}const Fe=k.drawRange,Ne=k.attributes.position;let ot=Fe.start*Oe,_t=(Fe.start+Fe.count)*Oe;ue!==null&&(ot=Math.max(ot,ue.start*Oe),_t=Math.min(_t,(ue.start+ue.count)*Oe)),Le!==null?(ot=Math.max(ot,0),_t=Math.min(_t,Le.count)):Ne!=null&&(ot=Math.max(ot,0),_t=Math.min(_t,Ne.count));const Mt=_t-ot;if(Mt<0||Mt===1/0)return;Je.setup(O,V,Ce,k,Le);let mn,lt=Ke;if(Le!==null&&(mn=S.get(Le),lt=ke,lt.setIndex(mn)),O.isMesh)V.wireframe===!0?(re.setLineWidth(V.wireframeLinewidth*Ve()),lt.setMode(D.LINES)):lt.setMode(D.TRIANGLES);else if(O.isLine){let De=V.linewidth;De===void 0&&(De=1),re.setLineWidth(De*Ve()),O.isLineSegments?lt.setMode(D.LINES):O.isLineLoop?lt.setMode(D.LINE_LOOP):lt.setMode(D.LINE_STRIP)}else O.isPoints?lt.setMode(D.POINTS):O.isSprite&&lt.setMode(D.TRIANGLES);if(O.isBatchedMesh)O._multiDrawInstances!==null?lt.renderMultiDrawInstances(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount,O._multiDrawInstances):lt.renderMultiDraw(O._multiDrawStarts,O._multiDrawCounts,O._multiDrawCount);else if(O.isInstancedMesh)lt.renderInstances(ot,Mt,O.count);else if(k.isInstancedBufferGeometry){const De=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Kt=Math.min(k.instanceCount,De);lt.renderInstances(ot,Mt,Kt)}else lt.render(ot,Mt)};function Tt(A,U,k){A.transparent===!0&&A.side===$n&&A.forceSinglePass===!1?(A.side=rn,A.needsUpdate=!0,jo(A,U,k),A.side=Ri,A.needsUpdate=!0,jo(A,U,k),A.side=$n):jo(A,U,k)}this.compile=function(A,U,k=null){k===null&&(k=A),g=me.get(k),g.init(U),y.push(g),k.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),A!==k&&A.traverseVisible(function(O){O.isLight&&O.layers.test(U.layers)&&(g.pushLight(O),O.castShadow&&g.pushShadow(O))}),g.setupLights();const V=new Set;return A.traverse(function(O){const ue=O.material;if(ue)if(Array.isArray(ue))for(let we=0;we<ue.length;we++){const Ce=ue[we];Tt(Ce,k,O),V.add(Ce)}else Tt(ue,k,O),V.add(ue)}),y.pop(),g=null,V},this.compileAsync=function(A,U,k=null){const V=this.compile(A,U,k);return new Promise(O=>{function ue(){if(V.forEach(function(we){Me.get(we).currentProgram.isReady()&&V.delete(we)}),V.size===0){O(A);return}setTimeout(ue,10)}ne.get("KHR_parallel_shader_compile")!==null?ue():setTimeout(ue,10)})};let Ut=null;function ht(A){Ut&&Ut(A)}function Wn(){cr.stop()}function Xn(){cr.start()}const cr=new Q0;cr.setAnimationLoop(ht),typeof self<"u"&&cr.setContext(self),this.setAnimationLoop=function(A){Ut=A,N.setAnimationLoop(A),A===null?cr.stop():cr.start()},N.addEventListener("sessionstart",Wn),N.addEventListener("sessionend",Xn),this.render=function(A,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(_===!0)return;if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),N.enabled===!0&&N.isPresenting===!0&&(N.cameraAutoUpdate===!0&&N.updateCamera(U),U=N.getCamera()),A.isScene===!0&&A.onBeforeRender(x,A,U,C),g=me.get(A,y.length),g.init(U),y.push(g),Ae.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),rt.setFromProjectionMatrix(Ae),oe=this.localClippingEnabled,Y=ge.init(this.clippingPlanes,oe),v=Pe.get(A,m.length),v.init(),m.push(v),N.enabled===!0&&N.isPresenting===!0){const ue=x.xr.getDepthSensingMesh();ue!==null&&Eu(ue,U,-1/0,x.sortObjects)}Eu(A,U,0,x.sortObjects),v.finish(),x.sortObjects===!0&&v.sort(q,_e),qe=N.enabled===!1||N.isPresenting===!1||N.hasDepthSensing()===!1,qe&&ce.addToRenderList(v,A),this.info.render.frame++,Y===!0&&ge.beginShadows();const k=g.state.shadowsArray;Ye.render(k,A,U),Y===!0&&ge.endShadows(),this.info.autoReset===!0&&this.info.reset();const V=v.opaque,O=v.transmissive;if(g.setupLights(),U.isArrayCamera){const ue=U.cameras;if(O.length>0)for(let we=0,Ce=ue.length;we<Ce;we++){const Le=ue[we];bf(V,O,A,Le)}qe&&ce.render(A);for(let we=0,Ce=ue.length;we<Ce;we++){const Le=ue[we];wf(v,A,Le,Le.viewport)}}else O.length>0&&bf(V,O,A,U),qe&&ce.render(A),wf(v,A,U);C!==null&&(ve.updateMultisampleRenderTarget(C),ve.updateRenderTargetMipmap(C)),A.isScene===!0&&A.onAfterRender(x,A,U),Je.resetDefaultState(),I=-1,b=null,y.pop(),y.length>0?(g=y[y.length-1],Y===!0&&ge.setGlobalState(x.clippingPlanes,g.state.camera)):g=null,m.pop(),m.length>0?v=m[m.length-1]:v=null};function Eu(A,U,k,V){if(A.visible===!1)return;if(A.layers.test(U.layers)){if(A.isGroup)k=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(U);else if(A.isLight)g.pushLight(A),A.castShadow&&g.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||rt.intersectsSprite(A)){V&&de.setFromMatrixPosition(A.matrixWorld).applyMatrix4(Ae);const we=te.update(A),Ce=A.material;Ce.visible&&v.push(A,we,Ce,k,de.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||rt.intersectsObject(A))){const we=te.update(A),Ce=A.material;if(V&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),de.copy(A.boundingSphere.center)):(we.boundingSphere===null&&we.computeBoundingSphere(),de.copy(we.boundingSphere.center)),de.applyMatrix4(A.matrixWorld).applyMatrix4(Ae)),Array.isArray(Ce)){const Le=we.groups;for(let Oe=0,Fe=Le.length;Oe<Fe;Oe++){const Ne=Le[Oe],ot=Ce[Ne.materialIndex];ot&&ot.visible&&v.push(A,we,ot,k,de.z,Ne)}}else Ce.visible&&v.push(A,we,Ce,k,de.z,null)}}const ue=A.children;for(let we=0,Ce=ue.length;we<Ce;we++)Eu(ue[we],U,k,V)}function wf(A,U,k,V){const O=A.opaque,ue=A.transmissive,we=A.transparent;g.setupLightsView(k),Y===!0&&ge.setGlobalState(x.clippingPlanes,k),V&&re.viewport(M.copy(V)),O.length>0&&$o(O,U,k),ue.length>0&&$o(ue,U,k),we.length>0&&$o(we,U,k),re.buffers.depth.setTest(!0),re.buffers.depth.setMask(!0),re.buffers.color.setMask(!0),re.setPolygonOffset(!1)}function bf(A,U,k,V){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;g.state.transmissionRenderTarget[V.id]===void 0&&(g.state.transmissionRenderTarget[V.id]=new Bn(1,1,{generateMipmaps:!0,type:ne.has("EXT_color_buffer_half_float")||ne.has("EXT_color_buffer_float")?Fo:Li,minFilter:Jn,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:at.workingColorSpace}));const ue=g.state.transmissionRenderTarget[V.id],we=V.viewport||M;ue.setSize(we.z,we.w);const Ce=x.getRenderTarget();x.setRenderTarget(ue),x.getClearColor(B),W=x.getClearAlpha(),W<1&&x.setClearColor(16777215,.5),qe?ce.render(k):x.clear();const Le=x.toneMapping;x.toneMapping=Ai;const Oe=V.viewport;if(V.viewport!==void 0&&(V.viewport=void 0),g.setupLightsView(V),Y===!0&&ge.setGlobalState(x.clippingPlanes,V),$o(A,k,V),ve.updateMultisampleRenderTarget(ue),ve.updateRenderTargetMipmap(ue),ne.has("WEBGL_multisampled_render_to_texture")===!1){let Fe=!1;for(let Ne=0,ot=U.length;Ne<ot;Ne++){const _t=U[Ne],Mt=_t.object,mn=_t.geometry,lt=_t.material,De=_t.group;if(lt.side===$n&&Mt.layers.test(V.layers)){const Kt=lt.side;lt.side=rn,lt.needsUpdate=!0,Af(Mt,k,V,mn,lt,De),lt.side=Kt,lt.needsUpdate=!0,Fe=!0}}Fe===!0&&(ve.updateMultisampleRenderTarget(ue),ve.updateRenderTargetMipmap(ue))}x.setRenderTarget(Ce),x.setClearColor(B,W),Oe!==void 0&&(V.viewport=Oe),x.toneMapping=Le}function $o(A,U,k){const V=U.isScene===!0?U.overrideMaterial:null;for(let O=0,ue=A.length;O<ue;O++){const we=A[O],Ce=we.object,Le=we.geometry,Oe=V===null?we.material:V,Fe=we.group;Ce.layers.test(k.layers)&&Af(Ce,U,k,Le,Oe,Fe)}}function Af(A,U,k,V,O,ue){A.onBeforeRender(x,U,k,V,O,ue),A.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),O.onBeforeRender(x,U,k,V,A,ue),O.transparent===!0&&O.side===$n&&O.forceSinglePass===!1?(O.side=rn,O.needsUpdate=!0,x.renderBufferDirect(k,U,V,O,A,ue),O.side=Ri,O.needsUpdate=!0,x.renderBufferDirect(k,U,V,O,A,ue),O.side=$n):x.renderBufferDirect(k,U,V,O,A,ue),A.onAfterRender(x,U,k,V,O,ue)}function jo(A,U,k){U.isScene!==!0&&(U=He);const V=Me.get(A),O=g.state.lights,ue=g.state.shadowsArray,we=O.state.version,Ce=ee.getParameters(A,O.state,ue,U,k),Le=ee.getProgramCacheKey(Ce);let Oe=V.programs;V.environment=A.isMeshStandardMaterial?U.environment:null,V.fog=U.fog,V.envMap=(A.isMeshStandardMaterial?R:Ge).get(A.envMap||V.environment),V.envMapRotation=V.environment!==null&&A.envMap===null?U.environmentRotation:A.envMapRotation,Oe===void 0&&(A.addEventListener("dispose",he),Oe=new Map,V.programs=Oe);let Fe=Oe.get(Le);if(Fe!==void 0){if(V.currentProgram===Fe&&V.lightsStateVersion===we)return Ef(A,Ce),Fe}else Ce.uniforms=ee.getUniforms(A),A.onBuild(k,Ce,x),A.onBeforeCompile(Ce,x),Fe=ee.acquireProgram(Ce,Le),Oe.set(Le,Fe),V.uniforms=Ce.uniforms;const Ne=V.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ne.clippingPlanes=ge.uniform),Ef(A,Ce),V.needsLights=ry(A),V.lightsStateVersion=we,V.needsLights&&(Ne.ambientLightColor.value=O.state.ambient,Ne.lightProbe.value=O.state.probe,Ne.directionalLights.value=O.state.directional,Ne.directionalLightShadows.value=O.state.directionalShadow,Ne.spotLights.value=O.state.spot,Ne.spotLightShadows.value=O.state.spotShadow,Ne.rectAreaLights.value=O.state.rectArea,Ne.ltc_1.value=O.state.rectAreaLTC1,Ne.ltc_2.value=O.state.rectAreaLTC2,Ne.pointLights.value=O.state.point,Ne.pointLightShadows.value=O.state.pointShadow,Ne.hemisphereLights.value=O.state.hemi,Ne.directionalShadowMap.value=O.state.directionalShadowMap,Ne.directionalShadowMatrix.value=O.state.directionalShadowMatrix,Ne.spotShadowMap.value=O.state.spotShadowMap,Ne.spotLightMatrix.value=O.state.spotLightMatrix,Ne.spotLightMap.value=O.state.spotLightMap,Ne.pointShadowMap.value=O.state.pointShadowMap,Ne.pointShadowMatrix.value=O.state.pointShadowMatrix),V.currentProgram=Fe,V.uniformsList=null,Fe}function Tf(A){if(A.uniformsList===null){const U=A.currentProgram.getUniforms();A.uniformsList=rc.seqWithValue(U.seq,A.uniforms)}return A.uniformsList}function Ef(A,U){const k=Me.get(A);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function ny(A,U,k,V,O){U.isScene!==!0&&(U=He),ve.resetTextureUnits();const ue=U.fog,we=V.isMeshStandardMaterial?U.environment:null,Ce=C===null?x.outputColorSpace:C.isXRRenderTarget===!0?C.texture.colorSpace:ni,Le=(V.isMeshStandardMaterial?R:Ge).get(V.envMap||we),Oe=V.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Fe=!!k.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Ne=!!k.morphAttributes.position,ot=!!k.morphAttributes.normal,_t=!!k.morphAttributes.color;let Mt=Ai;V.toneMapped&&(C===null||C.isXRRenderTarget===!0)&&(Mt=x.toneMapping);const mn=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,lt=mn!==void 0?mn.length:0,De=Me.get(V),Kt=g.state.lights;if(Y===!0&&(oe===!0||A!==b)){const Tn=A===b&&V.id===I;ge.setState(V,A,Tn)}let dt=!1;V.version===De.__version?(De.needsLights&&De.lightsStateVersion!==Kt.state.version||De.outputColorSpace!==Ce||O.isBatchedMesh&&De.batching===!1||!O.isBatchedMesh&&De.batching===!0||O.isBatchedMesh&&De.batchingColor===!0&&O.colorTexture===null||O.isBatchedMesh&&De.batchingColor===!1&&O.colorTexture!==null||O.isInstancedMesh&&De.instancing===!1||!O.isInstancedMesh&&De.instancing===!0||O.isSkinnedMesh&&De.skinning===!1||!O.isSkinnedMesh&&De.skinning===!0||O.isInstancedMesh&&De.instancingColor===!0&&O.instanceColor===null||O.isInstancedMesh&&De.instancingColor===!1&&O.instanceColor!==null||O.isInstancedMesh&&De.instancingMorph===!0&&O.morphTexture===null||O.isInstancedMesh&&De.instancingMorph===!1&&O.morphTexture!==null||De.envMap!==Le||V.fog===!0&&De.fog!==ue||De.numClippingPlanes!==void 0&&(De.numClippingPlanes!==ge.numPlanes||De.numIntersection!==ge.numIntersection)||De.vertexAlphas!==Oe||De.vertexTangents!==Fe||De.morphTargets!==Ne||De.morphNormals!==ot||De.morphColors!==_t||De.toneMapping!==Mt||De.morphTargetsCount!==lt)&&(dt=!0):(dt=!0,De.__version=V.version);let ri=De.currentProgram;dt===!0&&(ri=jo(V,U,O));let Jo=!1,ur=!1,Cu=!1;const zt=ri.getUniforms(),zi=De.uniforms;if(re.useProgram(ri.program)&&(Jo=!0,ur=!0,Cu=!0),V.id!==I&&(I=V.id,ur=!0),Jo||b!==A){zt.setValue(D,"projectionMatrix",A.projectionMatrix),zt.setValue(D,"viewMatrix",A.matrixWorldInverse);const Tn=zt.map.cameraPosition;Tn!==void 0&&Tn.setValue(D,de.setFromMatrixPosition(A.matrixWorld)),le.logarithmicDepthBuffer&&zt.setValue(D,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&zt.setValue(D,"isOrthographic",A.isOrthographicCamera===!0),b!==A&&(b=A,ur=!0,Cu=!0)}if(O.isSkinnedMesh){zt.setOptional(D,O,"bindMatrix"),zt.setOptional(D,O,"bindMatrixInverse");const Tn=O.skeleton;Tn&&(Tn.boneTexture===null&&Tn.computeBoneTexture(),zt.setValue(D,"boneTexture",Tn.boneTexture,ve))}O.isBatchedMesh&&(zt.setOptional(D,O,"batchingTexture"),zt.setValue(D,"batchingTexture",O._matricesTexture,ve),zt.setOptional(D,O,"batchingColorTexture"),O._colorsTexture!==null&&zt.setValue(D,"batchingColorTexture",O._colorsTexture,ve));const Ru=k.morphAttributes;if((Ru.position!==void 0||Ru.normal!==void 0||Ru.color!==void 0)&&Ie.update(O,k,ri),(ur||De.receiveShadow!==O.receiveShadow)&&(De.receiveShadow=O.receiveShadow,zt.setValue(D,"receiveShadow",O.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(zi.envMap.value=Le,zi.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),V.isMeshStandardMaterial&&V.envMap===null&&U.environment!==null&&(zi.envMapIntensity.value=U.environmentIntensity),ur&&(zt.setValue(D,"toneMappingExposure",x.toneMappingExposure),De.needsLights&&iy(zi,Cu),ue&&V.fog===!0&&ie.refreshFogUniforms(zi,ue),ie.refreshMaterialUniforms(zi,V,ae,X,g.state.transmissionRenderTarget[A.id]),rc.upload(D,Tf(De),zi,ve)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(rc.upload(D,Tf(De),zi,ve),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&zt.setValue(D,"center",O.center),zt.setValue(D,"modelViewMatrix",O.modelViewMatrix),zt.setValue(D,"normalMatrix",O.normalMatrix),zt.setValue(D,"modelMatrix",O.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const Tn=V.uniformsGroups;for(let Iu=0,sy=Tn.length;Iu<sy;Iu++){const Cf=Tn[Iu];et.update(Cf,ri),et.bind(Cf,ri)}}return ri}function iy(A,U){A.ambientLightColor.needsUpdate=U,A.lightProbe.needsUpdate=U,A.directionalLights.needsUpdate=U,A.directionalLightShadows.needsUpdate=U,A.pointLights.needsUpdate=U,A.pointLightShadows.needsUpdate=U,A.spotLights.needsUpdate=U,A.spotLightShadows.needsUpdate=U,A.rectAreaLights.needsUpdate=U,A.hemisphereLights.needsUpdate=U}function ry(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return C},this.setRenderTargetTextures=function(A,U,k){Me.get(A.texture).__webglTexture=U,Me.get(A.depthTexture).__webglTexture=k;const V=Me.get(A);V.__hasExternalTextures=!0,V.__autoAllocateDepthBuffer=k===void 0,V.__autoAllocateDepthBuffer||ne.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(A,U){const k=Me.get(A);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(A,U=0,k=0){C=A,L=U,T=k;let V=!0,O=null,ue=!1,we=!1;if(A){const Le=Me.get(A);Le.__useDefaultFramebuffer!==void 0?(re.bindFramebuffer(D.FRAMEBUFFER,null),V=!1):Le.__webglFramebuffer===void 0?ve.setupRenderTarget(A):Le.__hasExternalTextures&&ve.rebindTextures(A,Me.get(A.texture).__webglTexture,Me.get(A.depthTexture).__webglTexture);const Oe=A.texture;(Oe.isData3DTexture||Oe.isDataArrayTexture||Oe.isCompressedArrayTexture)&&(we=!0);const Fe=Me.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Fe[U])?O=Fe[U][k]:O=Fe[U],ue=!0):A.samples>0&&ve.useMultisampledRTT(A)===!1?O=Me.get(A).__webglMultisampledFramebuffer:Array.isArray(Fe)?O=Fe[k]:O=Fe,M.copy(A.viewport),P.copy(A.scissor),H=A.scissorTest}else M.copy(Ee).multiplyScalar(ae).floor(),P.copy(be).multiplyScalar(ae).floor(),H=je;if(re.bindFramebuffer(D.FRAMEBUFFER,O)&&V&&re.drawBuffers(A,O),re.viewport(M),re.scissor(P),re.setScissorTest(H),ue){const Le=Me.get(A.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+U,Le.__webglTexture,k)}else if(we){const Le=Me.get(A.texture),Oe=U||0;D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,Le.__webglTexture,k||0,Oe)}I=-1},this.readRenderTargetPixels=function(A,U,k,V,O,ue,we){if(!(A&&A.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){re.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Le=A.texture,Oe=Le.format,Fe=Le.type;if(!le.textureFormatReadable(Oe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!le.textureTypeReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=A.width-V&&k>=0&&k<=A.height-O&&D.readPixels(U,k,V,O,xe.convert(Oe),xe.convert(Fe),ue)}finally{const Le=C!==null?Me.get(C).__webglFramebuffer:null;re.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.readRenderTargetPixelsAsync=async function(A,U,k,V,O,ue,we){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=Me.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&we!==void 0&&(Ce=Ce[we]),Ce){re.bindFramebuffer(D.FRAMEBUFFER,Ce);try{const Le=A.texture,Oe=Le.format,Fe=Le.type;if(!le.textureFormatReadable(Oe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!le.textureTypeReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=A.width-V&&k>=0&&k<=A.height-O){const Ne=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.bufferData(D.PIXEL_PACK_BUFFER,ue.byteLength,D.STREAM_READ),D.readPixels(U,k,V,O,xe.convert(Oe),xe.convert(Fe),0),D.flush();const ot=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);await $_(D,ot,4);try{D.bindBuffer(D.PIXEL_PACK_BUFFER,Ne),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,ue)}finally{D.deleteBuffer(Ne),D.deleteSync(ot)}return ue}}finally{const Le=C!==null?Me.get(C).__webglFramebuffer:null;re.bindFramebuffer(D.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(A,U=null,k=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,A=arguments[1]);const V=Math.pow(2,-k),O=Math.floor(A.image.width*V),ue=Math.floor(A.image.height*V),we=U!==null?U.x:0,Ce=U!==null?U.y:0;ve.setTexture2D(A,0),D.copyTexSubImage2D(D.TEXTURE_2D,k,0,0,we,Ce,O,ue),re.unbindTexture()},this.copyTextureToTexture=function(A,U,k=null,V=null,O=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture function signature has changed."),V=arguments[0]||null,A=arguments[1],U=arguments[2],O=arguments[3]||0,k=null);let ue,we,Ce,Le,Oe,Fe;k!==null?(ue=k.max.x-k.min.x,we=k.max.y-k.min.y,Ce=k.min.x,Le=k.min.y):(ue=A.image.width,we=A.image.height,Ce=0,Le=0),V!==null?(Oe=V.x,Fe=V.y):(Oe=0,Fe=0);const Ne=xe.convert(U.format),ot=xe.convert(U.type);ve.setTexture2D(U,0),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const _t=D.getParameter(D.UNPACK_ROW_LENGTH),Mt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),mn=D.getParameter(D.UNPACK_SKIP_PIXELS),lt=D.getParameter(D.UNPACK_SKIP_ROWS),De=D.getParameter(D.UNPACK_SKIP_IMAGES),Kt=A.isCompressedTexture?A.mipmaps[O]:A.image;D.pixelStorei(D.UNPACK_ROW_LENGTH,Kt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Kt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ce),D.pixelStorei(D.UNPACK_SKIP_ROWS,Le),A.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,O,Oe,Fe,ue,we,Ne,ot,Kt.data):A.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,O,Oe,Fe,Kt.width,Kt.height,Ne,Kt.data):D.texSubImage2D(D.TEXTURE_2D,O,Oe,Fe,Ne,ot,Kt),D.pixelStorei(D.UNPACK_ROW_LENGTH,_t),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,mn),D.pixelStorei(D.UNPACK_SKIP_ROWS,lt),D.pixelStorei(D.UNPACK_SKIP_IMAGES,De),O===0&&U.generateMipmaps&&D.generateMipmap(D.TEXTURE_2D),re.unbindTexture()},this.copyTextureToTexture3D=function(A,U,k=null,V=null,O=0){A.isTexture!==!0&&(console.warn("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,V=arguments[1]||null,A=arguments[2],U=arguments[3],O=arguments[4]||0);let ue,we,Ce,Le,Oe,Fe,Ne,ot,_t;const Mt=A.isCompressedTexture?A.mipmaps[O]:A.image;k!==null?(ue=k.max.x-k.min.x,we=k.max.y-k.min.y,Ce=k.max.z-k.min.z,Le=k.min.x,Oe=k.min.y,Fe=k.min.z):(ue=Mt.width,we=Mt.height,Ce=Mt.depth,Le=0,Oe=0,Fe=0),V!==null?(Ne=V.x,ot=V.y,_t=V.z):(Ne=0,ot=0,_t=0);const mn=xe.convert(U.format),lt=xe.convert(U.type);let De;if(U.isData3DTexture)ve.setTexture3D(U,0),De=D.TEXTURE_3D;else if(U.isDataArrayTexture||U.isCompressedArrayTexture)ve.setTexture2DArray(U,0),De=D.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,U.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,U.unpackAlignment);const Kt=D.getParameter(D.UNPACK_ROW_LENGTH),dt=D.getParameter(D.UNPACK_IMAGE_HEIGHT),ri=D.getParameter(D.UNPACK_SKIP_PIXELS),Jo=D.getParameter(D.UNPACK_SKIP_ROWS),ur=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Mt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Mt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Le),D.pixelStorei(D.UNPACK_SKIP_ROWS,Oe),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Fe),A.isDataTexture||A.isData3DTexture?D.texSubImage3D(De,O,Ne,ot,_t,ue,we,Ce,mn,lt,Mt.data):U.isCompressedArrayTexture?D.compressedTexSubImage3D(De,O,Ne,ot,_t,ue,we,Ce,mn,Mt.data):D.texSubImage3D(De,O,Ne,ot,_t,ue,we,Ce,mn,lt,Mt),D.pixelStorei(D.UNPACK_ROW_LENGTH,Kt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,dt),D.pixelStorei(D.UNPACK_SKIP_PIXELS,ri),D.pixelStorei(D.UNPACK_SKIP_ROWS,Jo),D.pixelStorei(D.UNPACK_SKIP_IMAGES,ur),O===0&&U.generateMipmaps&&D.generateMipmap(De),re.unbindTexture()},this.initRenderTarget=function(A){Me.get(A).__webglFramebuffer===void 0&&ve.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?ve.setTextureCube(A,0):A.isData3DTexture?ve.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?ve.setTexture2DArray(A,0):ve.setTexture2D(A,0),re.unbindTexture()},this.resetState=function(){L=0,T=0,C=null,re.reset(),Je.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Kn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=e===Kc?"display-p3":"srgb",t.unpackColorSpace=at.workingColorSpace===ko?"display-p3":"srgb"}}class ru{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ye(e),this.density=t}clone(){return new ru(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class su{constructor(e,t=1,n=1e3){this.isFog=!0,this.name="",this.color=new ye(e),this.near=t,this.far=n}clone(){return new su(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class ov extends it{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}class au{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=eo,this._updateRange={offset:0,count:-1},this.updateRanges=[],this.version=0,this.uuid=Sn()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}get updateRange(){return qd("THREE.InterleavedBuffer: updateRange() is deprecated and will be removed in r169. Use addUpdateRange() instead."),this._updateRange}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,n){e*=this.stride,n*=t.stride;for(let r=0,s=this.stride;r<s;r++)this.array[e+r]=t.array[n+r];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),n=new this.constructor(t,this.stride);return n.setUsage(this.usage),n}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){return e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Sn()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer))),{uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride}}}const Qt=new E;class rs{constructor(e,t,n,r=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=n,this.normalized=r}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,n=this.data.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyMatrix4(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.applyNormalMatrix(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Qt.fromBufferAttribute(this,t),Qt.transformDirection(e),this.setXYZ(t,Qt.x,Qt.y,Qt.z);return this}getComponent(e,t){let n=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(n=tn(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=Xe(n,this.array)),this.data.array[e*this.data.stride+this.offset+t]=n,this}setX(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xe(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=tn(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=tn(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=tn(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=tn(t,this.array)),t}setXY(e,t,n){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this}setXYZ(e,t,n,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this}setXYZW(e,t,n,r,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xe(t,this.array),n=Xe(n,this.array),r=Xe(r,this.array),s=Xe(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=n,this.data.array[e+2]=r,this.data.array[e+3]=s,this}clone(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return new ut(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new rs(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){console.log("THREE.InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let n=0;n<this.count;n++){const r=n*this.data.stride+this.offset;for(let s=0;s<this.itemSize;s++)t.push(this.data.array[r+s])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}class ef extends Jt{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Cs;const wa=new E,Rs=new E,Is=new E,Ls=new j,ba=new j,lv=new ze,Ml=new E,Aa=new E,Sl=new E,Tp=new j,rh=new j,Ep=new j;class cv extends it{constructor(e=new ef){if(super(),this.isSprite=!0,this.type="Sprite",Cs===void 0){Cs=new $e;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),n=new au(t,5);Cs.setIndex([0,1,2,0,2,3]),Cs.setAttribute("position",new rs(n,3,0,!1)),Cs.setAttribute("uv",new rs(n,2,3,!1))}this.geometry=Cs,this.material=e,this.center=new j(.5,.5)}raycast(e,t){e.camera===null&&console.error('THREE.Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Rs.setFromMatrixScale(this.matrixWorld),lv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Is.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Rs.multiplyScalar(-Is.z);const n=this.material.rotation;let r,s;n!==0&&(s=Math.cos(n),r=Math.sin(n));const a=this.center;wl(Ml.set(-.5,-.5,0),Is,a,Rs,r,s),wl(Aa.set(.5,-.5,0),Is,a,Rs,r,s),wl(Sl.set(.5,.5,0),Is,a,Rs,r,s),Tp.set(0,0),rh.set(1,0),Ep.set(1,1);let o=e.ray.intersectTriangle(Ml,Aa,Sl,!1,wa);if(o===null&&(wl(Aa.set(-.5,.5,0),Is,a,Rs,r,s),rh.set(0,1),o=e.ray.intersectTriangle(Ml,Sl,Aa,!1,wa),o===null))return;const l=e.ray.origin.distanceTo(wa);l<e.near||l>e.far||t.push({distance:l,point:wa.clone(),uv:xn.getInterpolation(wa,Ml,Aa,Sl,Tp,rh,Ep,new j),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function wl(i,e,t,n,r,s){Ls.subVectors(i,t).addScalar(.5).multiply(n),r!==void 0?(ba.x=s*Ls.x-r*Ls.y,ba.y=r*Ls.x+s*Ls.y):ba.copy(Ls),i.copy(e),i.x+=ba.x,i.y+=ba.y,i.applyMatrix4(lv)}const bl=new E,Cp=new E;class uv extends it{constructor(){super(),this._currentLevel=0,this.type="LOD",Object.defineProperties(this,{levels:{enumerable:!0,value:[]},isLOD:{value:!0}}),this.autoUpdate=!0}copy(e){super.copy(e,!1);const t=e.levels;for(let n=0,r=t.length;n<r;n++){const s=t[n];this.addLevel(s.object.clone(),s.distance,s.hysteresis)}return this.autoUpdate=e.autoUpdate,this}addLevel(e,t=0,n=0){t=Math.abs(t);const r=this.levels;let s;for(s=0;s<r.length&&!(t<r[s].distance);s++);return r.splice(s,0,{distance:t,hysteresis:n,object:e}),this.add(e),this}getCurrentLevel(){return this._currentLevel}getObjectForDistance(e){const t=this.levels;if(t.length>0){let n,r;for(n=1,r=t.length;n<r;n++){let s=t[n].distance;if(t[n].object.visible&&(s-=s*t[n].hysteresis),e<s)break}return t[n-1].object}return null}raycast(e,t){if(this.levels.length>0){bl.setFromMatrixPosition(this.matrixWorld);const r=e.ray.origin.distanceTo(bl);this.getObjectForDistance(r).raycast(e,t)}}update(e){const t=this.levels;if(t.length>1){bl.setFromMatrixPosition(e.matrixWorld),Cp.setFromMatrixPosition(this.matrixWorld);const n=bl.distanceTo(Cp)/e.zoom;t[0].object.visible=!0;let r,s;for(r=1,s=t.length;r<s;r++){let a=t[r].distance;if(t[r].object.visible&&(a-=a*t[r].hysteresis),n>=a)t[r-1].object.visible=!1,t[r].object.visible=!0;else break}for(this._currentLevel=r-1;r<s;r++)t[r].object.visible=!1}}toJSON(e){const t=super.toJSON(e);this.autoUpdate===!1&&(t.object.autoUpdate=!1),t.object.levels=[];const n=this.levels;for(let r=0,s=n.length;r<s;r++){const a=n[r];t.object.levels.push({object:a.object.uuid,distance:a.distance,hysteresis:a.hysteresis})}return t}}const Rp=new E,Ip=new ct,Lp=new ct,iA=new E,Pp=new ze,Al=new E,sh=new $t,Dp=new ze,ah=new fa;class hv extends Pt{constructor(e,t){super(e,t),this.isSkinnedMesh=!0,this.type="SkinnedMesh",this.bindMode=Dh,this.bindMatrix=new ze,this.bindMatrixInverse=new ze,this.boundingBox=null,this.boundingSphere=null}computeBoundingBox(){const e=this.geometry;this.boundingBox===null&&(this.boundingBox=new sn),this.boundingBox.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Al),this.boundingBox.expandByPoint(Al)}computeBoundingSphere(){const e=this.geometry;this.boundingSphere===null&&(this.boundingSphere=new $t),this.boundingSphere.makeEmpty();const t=e.getAttribute("position");for(let n=0;n<t.count;n++)this.getVertexPosition(n,Al),this.boundingSphere.expandByPoint(Al)}copy(e,t){return super.copy(e,t),this.bindMode=e.bindMode,this.bindMatrix.copy(e.bindMatrix),this.bindMatrixInverse.copy(e.bindMatrixInverse),this.skeleton=e.skeleton,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}raycast(e,t){const n=this.material,r=this.matrixWorld;n!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),sh.copy(this.boundingSphere),sh.applyMatrix4(r),e.ray.intersectsSphere(sh)!==!1&&(Dp.copy(r).invert(),ah.copy(e.ray).applyMatrix4(Dp),!(this.boundingBox!==null&&ah.intersectsBox(this.boundingBox)===!1)&&this._computeIntersections(e,t,ah)))}getVertexPosition(e,t){return super.getVertexPosition(e,t),this.applyBoneTransform(e,t),t}bind(e,t){this.skeleton=e,t===void 0&&(this.updateMatrixWorld(!0),this.skeleton.calculateInverses(),t=this.matrixWorld),this.bindMatrix.copy(t),this.bindMatrixInverse.copy(t).invert()}pose(){this.skeleton.pose()}normalizeSkinWeights(){const e=new ct,t=this.geometry.attributes.skinWeight;for(let n=0,r=t.count;n<r;n++){e.fromBufferAttribute(t,n);const s=1/e.manhattanLength();s!==1/0?e.multiplyScalar(s):e.set(1,0,0,0),t.setXYZW(n,e.x,e.y,e.z,e.w)}}updateMatrixWorld(e){super.updateMatrixWorld(e),this.bindMode===Dh?this.bindMatrixInverse.copy(this.matrixWorld).invert():this.bindMode===M0?this.bindMatrixInverse.copy(this.bindMatrix).invert():console.warn("THREE.SkinnedMesh: Unrecognized bindMode: "+this.bindMode)}applyBoneTransform(e,t){const n=this.skeleton,r=this.geometry;Ip.fromBufferAttribute(r.attributes.skinIndex,e),Lp.fromBufferAttribute(r.attributes.skinWeight,e),Rp.copy(t).applyMatrix4(this.bindMatrix),t.set(0,0,0);for(let s=0;s<4;s++){const a=Lp.getComponent(s);if(a!==0){const o=Ip.getComponent(s);Pp.multiplyMatrices(n.bones[o].matrixWorld,n.boneInverses[o]),t.addScaledVector(iA.copy(Rp).applyMatrix4(Pp),a)}}return t.applyMatrix4(this.bindMatrixInverse)}}class tf extends it{constructor(){super(),this.isBone=!0,this.type="Bone"}}class Ti extends bt{constructor(e=null,t=1,n=1,r,s,a,o,l,c=Gt,u=Gt,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Np=new ze,rA=new ze;class ou{constructor(e=[],t=[]){this.uuid=Sn(),this.bones=e.slice(0),this.boneInverses=t,this.boneMatrices=null,this.boneTexture=null,this.init()}init(){const e=this.bones,t=this.boneInverses;if(this.boneMatrices=new Float32Array(e.length*16),t.length===0)this.calculateInverses();else if(e.length!==t.length){console.warn("THREE.Skeleton: Number of inverse bone matrices does not match amount of bones."),this.boneInverses=[];for(let n=0,r=this.bones.length;n<r;n++)this.boneInverses.push(new ze)}}calculateInverses(){this.boneInverses.length=0;for(let e=0,t=this.bones.length;e<t;e++){const n=new ze;this.bones[e]&&n.copy(this.bones[e].matrixWorld).invert(),this.boneInverses.push(n)}}pose(){for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&n.matrixWorld.copy(this.boneInverses[e]).invert()}for(let e=0,t=this.bones.length;e<t;e++){const n=this.bones[e];n&&(n.parent&&n.parent.isBone?(n.matrix.copy(n.parent.matrixWorld).invert(),n.matrix.multiply(n.matrixWorld)):n.matrix.copy(n.matrixWorld),n.matrix.decompose(n.position,n.quaternion,n.scale))}}update(){const e=this.bones,t=this.boneInverses,n=this.boneMatrices,r=this.boneTexture;for(let s=0,a=e.length;s<a;s++){const o=e[s]?e[s].matrixWorld:rA;Np.multiplyMatrices(o,t[s]),Np.toArray(n,s*16)}r!==null&&(r.needsUpdate=!0)}clone(){return new ou(this.bones,this.boneInverses)}computeBoneTexture(){let e=Math.sqrt(this.bones.length*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4);t.set(this.boneMatrices);const n=new Ti(t,e,e,dn,yn);return n.needsUpdate=!0,this.boneMatrices=t,this.boneTexture=n,this}getBoneByName(e){for(let t=0,n=this.bones.length;t<n;t++){const r=this.bones[t];if(r.name===e)return r}}dispose(){this.boneTexture!==null&&(this.boneTexture.dispose(),this.boneTexture=null)}fromJSON(e,t){this.uuid=e.uuid;for(let n=0,r=e.bones.length;n<r;n++){const s=e.bones[n];let a=t[s];a===void 0&&(console.warn("THREE.Skeleton: No bone found with UUID:",s),a=new tf),this.bones.push(a),this.boneInverses.push(new ze().fromArray(e.boneInverses[n]))}return this.init(),this}toJSON(){const e={metadata:{version:4.6,type:"Skeleton",generator:"Skeleton.toJSON"},bones:[],boneInverses:[]};e.uuid=this.uuid;const t=this.bones,n=this.boneInverses;for(let r=0,s=t.length;r<s;r++){const a=t[r];e.bones.push(a.uuid);const o=n[r];e.boneInverses.push(o.toArray())}return e}}class la extends ut{constructor(e,t,n,r=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=r}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ps=new ze,Up=new ze,Tl=[],zp=new sn,sA=new ze,Ta=new Pt,Ea=new $t;class dv extends Pt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new la(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let r=0;r<n;r++)this.setMatrixAt(r,sA)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new sn),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),zp.copy(e.boundingBox).applyMatrix4(Ps),this.boundingBox.union(zp)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new $t),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ps),Ea.copy(e.boundingSphere).applyMatrix4(Ps),this.boundingSphere.union(Ea)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,r=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=r[a+o]}raycast(e,t){const n=this.matrixWorld,r=this.count;if(Ta.geometry=this.geometry,Ta.material=this.material,Ta.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),Ea.copy(this.boundingSphere),Ea.applyMatrix4(n),e.ray.intersectsSphere(Ea)!==!1))for(let s=0;s<r;s++){this.getMatrixAt(s,Ps),Up.multiplyMatrices(n,Ps),Ta.matrixWorld=Up,Ta.raycast(e,Tl);for(let a=0,o=Tl.length;a<o;a++){const l=Tl[a];l.instanceId=s,l.object=this,t.push(l)}Tl.length=0}}setColorAt(e,t){this.instanceColor===null&&(this.instanceColor=new la(new Float32Array(this.instanceMatrix.count*3),3)),t.toArray(this.instanceColor.array,e*3)}setMatrixAt(e,t){t.toArray(this.instanceMatrix.array,e*16)}setMorphAt(e,t){const n=t.morphTargetInfluences,r=n.length+1;this.morphTexture===null&&(this.morphTexture=new Ti(new Float32Array(r*this.count),r,this.count,kd,yn));const s=this.morphTexture.source.data.data;let a=0;for(let c=0;c<n.length;c++)a+=n[c];const o=this.geometry.morphTargetsRelative?1:1-a,l=r*e;s[l]=o,s.set(n,l+1)}updateMorphTargets(){}dispose(){return this.dispatchEvent({type:"dispose"}),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null),this}}function aA(i,e){return i.z-e.z}function oA(i,e){return e.z-i.z}class lA{constructor(){this.index=0,this.pool=[],this.list=[]}push(e,t){const n=this.pool,r=this.list;this.index>=n.length&&n.push({start:-1,count:-1,z:-1});const s=n[this.index];r.push(s),this.index++,s.start=e.start,s.count=e.count,s.z=t}reset(){this.list.length=0,this.index=0}}const Ds="batchId",Wi=new ze,oh=new ze,cA=new ze,uA=new ye(1,1,1),Op=new ze,lh=new Vo,El=new sn,xr=new $t,Ca=new E,Fp=new E,hA=new E,ch=new lA,Zt=new Pt,Cl=[];function dA(i,e,t=0){const n=e.itemSize;if(i.isInterleavedBufferAttribute||i.array.constructor!==e.array.constructor){const r=i.count;for(let s=0;s<r;s++)for(let a=0;a<n;a++)e.setComponent(s+t,a,i.getComponent(s,a))}else e.array.set(i.array,t*n);e.needsUpdate=!0}class fv extends Pt{get maxGeometryCount(){return this._maxGeometryCount}constructor(e,t,n=t*2,r){super(new $e,r),this.isBatchedMesh=!0,this.perObjectFrustumCulled=!0,this.sortObjects=!0,this.boundingBox=null,this.boundingSphere=null,this.customSort=null,this._drawRanges=[],this._reservedRanges=[],this._visibility=[],this._active=[],this._bounds=[],this._maxGeometryCount=e,this._maxVertexCount=t,this._maxIndexCount=n,this._geometryInitialized=!1,this._geometryCount=0,this._multiDrawCounts=new Int32Array(e),this._multiDrawStarts=new Int32Array(e),this._multiDrawCount=0,this._multiDrawInstances=null,this._visibilityChanged=!0,this._matricesTexture=null,this._initMatricesTexture(),this._colorsTexture=null}_initMatricesTexture(){let e=Math.sqrt(this._maxGeometryCount*4);e=Math.ceil(e/4)*4,e=Math.max(e,4);const t=new Float32Array(e*e*4),n=new Ti(t,e,e,dn,yn);this._matricesTexture=n}_initColorsTexture(){let e=Math.sqrt(this._maxGeometryCount);e=Math.ceil(e);const t=new Float32Array(e*e*4).fill(1),n=new Ti(t,e,e,dn,yn);n.colorSpace=at.workingColorSpace,this._colorsTexture=n}_initializeGeometry(e){const t=this.geometry,n=this._maxVertexCount,r=this._maxGeometryCount,s=this._maxIndexCount;if(this._geometryInitialized===!1){for(const o in e.attributes){const l=e.getAttribute(o),{array:c,itemSize:u,normalized:h}=l,d=new c.constructor(n*u),f=new ut(d,u,h);t.setAttribute(o,f)}if(e.getIndex()!==null){const o=n>65536?new Uint32Array(s):new Uint16Array(s);t.setIndex(new ut(o,1))}const a=r>65536?new Uint32Array(n):new Uint16Array(n);t.setAttribute(Ds,new ut(a,1)),this._geometryInitialized=!0}}_validateGeometry(e){if(e.getAttribute(Ds))throw new Error(`BatchedMesh: Geometry cannot use attribute "${Ds}"`);const t=this.geometry;if(!!e.getIndex()!=!!t.getIndex())throw new Error('BatchedMesh: All geometries must consistently have "index".');for(const n in t.attributes){if(n===Ds)continue;if(!e.hasAttribute(n))throw new Error(`BatchedMesh: Added geometry missing "${n}". All geometries must have consistent attributes.`);const r=e.getAttribute(n),s=t.getAttribute(n);if(r.itemSize!==s.itemSize||r.normalized!==s.normalized)throw new Error("BatchedMesh: All attributes must have a consistent itemSize and normalized value.")}}setCustomSort(e){return this.customSort=e,this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new sn);const e=this._geometryCount,t=this.boundingBox,n=this._active;t.makeEmpty();for(let r=0;r<e;r++)n[r]!==!1&&(this.getMatrixAt(r,Wi),this.getBoundingBoxAt(r,El).applyMatrix4(Wi),t.union(El))}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $t);const e=this._geometryCount,t=this.boundingSphere,n=this._active;t.makeEmpty();for(let r=0;r<e;r++)n[r]!==!1&&(this.getMatrixAt(r,Wi),this.getBoundingSphereAt(r,xr).applyMatrix4(Wi),t.union(xr))}addGeometry(e,t=-1,n=-1){if(this._initializeGeometry(e),this._validateGeometry(e),this._geometryCount>=this._maxGeometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");const r={vertexStart:-1,vertexCount:-1,indexStart:-1,indexCount:-1};let s=null;const a=this._reservedRanges,o=this._drawRanges,l=this._bounds;this._geometryCount!==0&&(s=a[a.length-1]),t===-1?r.vertexCount=e.getAttribute("position").count:r.vertexCount=t,s===null?r.vertexStart=0:r.vertexStart=s.vertexStart+s.vertexCount;const c=e.getIndex(),u=c!==null;if(u&&(n===-1?r.indexCount=c.count:r.indexCount=n,s===null?r.indexStart=0:r.indexStart=s.indexStart+s.indexCount),r.indexStart!==-1&&r.indexStart+r.indexCount>this._maxIndexCount||r.vertexStart+r.vertexCount>this._maxVertexCount)throw new Error("BatchedMesh: Reserved space request exceeds the maximum buffer size.");const h=this._visibility,d=this._active,f=this._matricesTexture,p=this._matricesTexture.image.data,v=this._colorsTexture;h.push(!0),d.push(!0);const g=this._geometryCount;this._geometryCount++,cA.toArray(p,g*16),f.needsUpdate=!0,v!==null&&(uA.toArray(v.image.data,g*4),v.needsUpdate=!0),a.push(r),o.push({start:u?r.indexStart:r.vertexStart,count:-1}),l.push({boxInitialized:!1,box:new sn,sphereInitialized:!1,sphere:new $t});const m=this.geometry.getAttribute(Ds);for(let y=0;y<r.vertexCount;y++)m.setX(r.vertexStart+y,g);return m.needsUpdate=!0,this.setGeometryAt(g,e),g}setGeometryAt(e,t){if(e>=this._geometryCount)throw new Error("BatchedMesh: Maximum geometry count reached.");this._validateGeometry(t);const n=this.geometry,r=n.getIndex()!==null,s=n.getIndex(),a=t.getIndex(),o=this._reservedRanges[e];if(r&&a.count>o.indexCount||t.attributes.position.count>o.vertexCount)throw new Error("BatchedMesh: Reserved space not large enough for provided geometry.");const l=o.vertexStart,c=o.vertexCount;for(const f in n.attributes){if(f===Ds)continue;const p=t.getAttribute(f),v=n.getAttribute(f);dA(p,v,l);const g=p.itemSize;for(let m=p.count,y=c;m<y;m++){const x=l+m;for(let _=0;_<g;_++)v.setComponent(x,_,0)}v.needsUpdate=!0,v.addUpdateRange(l*g,c*g)}if(r){const f=o.indexStart;for(let p=0;p<a.count;p++)s.setX(f+p,l+a.getX(p));for(let p=a.count,v=o.indexCount;p<v;p++)s.setX(f+p,l);s.needsUpdate=!0,s.addUpdateRange(f,o.indexCount)}const u=this._bounds[e];t.boundingBox!==null?(u.box.copy(t.boundingBox),u.boxInitialized=!0):u.boxInitialized=!1,t.boundingSphere!==null?(u.sphere.copy(t.boundingSphere),u.sphereInitialized=!0):u.sphereInitialized=!1;const h=this._drawRanges[e],d=t.getAttribute("position");return h.count=r?a.count:d.count,this._visibilityChanged=!0,e}deleteGeometry(e){const t=this._active;return e>=t.length||t[e]===!1?this:(t[e]=!1,this._visibilityChanged=!0,this)}getInstanceCountAt(e){return this._multiDrawInstances===null?null:this._multiDrawInstances[e]}setInstanceCountAt(e,t){return this._multiDrawInstances===null&&(this._multiDrawInstances=new Int32Array(this._maxGeometryCount).fill(1)),this._multiDrawInstances[e]=t,e}getBoundingBoxAt(e,t){if(this._active[e]===!1)return null;const r=this._bounds[e],s=r.box,a=this.geometry;if(r.boxInitialized===!1){s.makeEmpty();const o=a.index,l=a.attributes.position,c=this._drawRanges[e];for(let u=c.start,h=c.start+c.count;u<h;u++){let d=u;o&&(d=o.getX(d)),s.expandByPoint(Ca.fromBufferAttribute(l,d))}r.boxInitialized=!0}return t.copy(s),t}getBoundingSphereAt(e,t){if(this._active[e]===!1)return null;const r=this._bounds[e],s=r.sphere,a=this.geometry;if(r.sphereInitialized===!1){s.makeEmpty(),this.getBoundingBoxAt(e,El),El.getCenter(s.center);const o=a.index,l=a.attributes.position,c=this._drawRanges[e];let u=0;for(let h=c.start,d=c.start+c.count;h<d;h++){let f=h;o&&(f=o.getX(f)),Ca.fromBufferAttribute(l,f),u=Math.max(u,s.center.distanceToSquared(Ca))}s.radius=Math.sqrt(u),r.sphereInitialized=!0}return t.copy(s),t}setMatrixAt(e,t){const n=this._active,r=this._matricesTexture,s=this._matricesTexture.image.data,a=this._geometryCount;return e>=a||n[e]===!1?this:(t.toArray(s,e*16),r.needsUpdate=!0,this)}getMatrixAt(e,t){const n=this._active,r=this._matricesTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(r,e*16)}setColorAt(e,t){this._colorsTexture===null&&this._initColorsTexture();const n=this._active,r=this._colorsTexture,s=this._colorsTexture.image.data,a=this._geometryCount;return e>=a||n[e]===!1?this:(t.toArray(s,e*4),r.needsUpdate=!0,this)}getColorAt(e,t){const n=this._active,r=this._colorsTexture.image.data,s=this._geometryCount;return e>=s||n[e]===!1?null:t.fromArray(r,e*4)}setVisibleAt(e,t){const n=this._visibility,r=this._active,s=this._geometryCount;return e>=s||r[e]===!1||n[e]===t?this:(n[e]=t,this._visibilityChanged=!0,this)}getVisibleAt(e){const t=this._visibility,n=this._active,r=this._geometryCount;return e>=r||n[e]===!1?!1:t[e]}raycast(e,t){const n=this._visibility,r=this._active,s=this._drawRanges,a=this._geometryCount,o=this.matrixWorld,l=this.geometry;Zt.material=this.material,Zt.geometry.index=l.index,Zt.geometry.attributes=l.attributes,Zt.geometry.boundingBox===null&&(Zt.geometry.boundingBox=new sn),Zt.geometry.boundingSphere===null&&(Zt.geometry.boundingSphere=new $t);for(let c=0;c<a;c++){if(!n[c]||!r[c])continue;const u=s[c];Zt.geometry.setDrawRange(u.start,u.count),this.getMatrixAt(c,Zt.matrixWorld).premultiply(o),this.getBoundingBoxAt(c,Zt.geometry.boundingBox),this.getBoundingSphereAt(c,Zt.geometry.boundingSphere),Zt.raycast(e,Cl);for(let h=0,d=Cl.length;h<d;h++){const f=Cl[h];f.object=this,f.batchId=c,t.push(f)}Cl.length=0}Zt.material=null,Zt.geometry.index=null,Zt.geometry.attributes={},Zt.geometry.setDrawRange(0,1/0)}copy(e){return super.copy(e),this.geometry=e.geometry.clone(),this.perObjectFrustumCulled=e.perObjectFrustumCulled,this.sortObjects=e.sortObjects,this.boundingBox=e.boundingBox!==null?e.boundingBox.clone():null,this.boundingSphere=e.boundingSphere!==null?e.boundingSphere.clone():null,this._drawRanges=e._drawRanges.map(t=>({...t})),this._reservedRanges=e._reservedRanges.map(t=>({...t})),this._visibility=e._visibility.slice(),this._active=e._active.slice(),this._bounds=e._bounds.map(t=>({boxInitialized:t.boxInitialized,box:t.box.clone(),sphereInitialized:t.sphereInitialized,sphere:t.sphere.clone()})),this._maxGeometryCount=e._maxGeometryCount,this._maxVertexCount=e._maxVertexCount,this._maxIndexCount=e._maxIndexCount,this._geometryInitialized=e._geometryInitialized,this._geometryCount=e._geometryCount,this._multiDrawCounts=e._multiDrawCounts.slice(),this._multiDrawStarts=e._multiDrawStarts.slice(),this._matricesTexture=e._matricesTexture.clone(),this._matricesTexture.image.data=this._matricesTexture.image.slice(),this._colorsTexture!==null&&(this._colorsTexture=e._colorsTexture.clone(),this._colorsTexture.image.data=this._colorsTexture.image.slice()),this}dispose(){return this.geometry.dispose(),this._matricesTexture.dispose(),this._matricesTexture=null,this._colorsTexture!==null&&(this._colorsTexture.dispose(),this._colorsTexture=null),this}onBeforeRender(e,t,n,r,s){if(!this._visibilityChanged&&!this.perObjectFrustumCulled&&!this.sortObjects)return;const a=r.getIndex(),o=a===null?1:a.array.BYTES_PER_ELEMENT,l=this._active,c=this._visibility,u=this._multiDrawStarts,h=this._multiDrawCounts,d=this._drawRanges,f=this.perObjectFrustumCulled;f&&(Op.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse).multiply(this.matrixWorld),lh.setFromProjectionMatrix(Op,e.coordinateSystem));let p=0;if(this.sortObjects){oh.copy(this.matrixWorld).invert(),Ca.setFromMatrixPosition(n.matrixWorld).applyMatrix4(oh),Fp.set(0,0,-1).transformDirection(n.matrixWorld).transformDirection(oh);for(let m=0,y=c.length;m<y;m++)if(c[m]&&l[m]){this.getMatrixAt(m,Wi),this.getBoundingSphereAt(m,xr).applyMatrix4(Wi);let x=!1;if(f&&(x=!lh.intersectsSphere(xr)),!x){const _=hA.subVectors(xr.center,Ca).dot(Fp);ch.push(d[m],_)}}const v=ch.list,g=this.customSort;g===null?v.sort(s.transparent?oA:aA):g.call(this,v,n);for(let m=0,y=v.length;m<y;m++){const x=v[m];u[p]=x.start*o,h[p]=x.count,p++}ch.reset()}else for(let v=0,g=c.length;v<g;v++)if(c[v]&&l[v]){let m=!1;if(f&&(this.getMatrixAt(v,Wi),this.getBoundingSphereAt(v,xr).applyMatrix4(Wi),m=!lh.intersectsSphere(xr)),!m){const y=d[v];u[p]=y.start*o,h[p]=y.count,p++}}this._multiDrawCount=p,this._visibilityChanged=!1}onBeforeShadow(e,t,n,r,s,a){this.onBeforeRender(e,null,r,s,a)}}class an extends Jt{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new ye(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const pc=new E,mc=new E,kp=new ze,Ra=new fa,Rl=new $t,uh=new E,Bp=new E;class nr extends it{constructor(e=new $e,t=new an){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let r=1,s=t.count;r<s;r++)pc.fromBufferAttribute(t,r-1),mc.fromBufferAttribute(t,r),n[r]=n[r-1],n[r]+=pc.distanceTo(mc);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Rl.copy(n.boundingSphere),Rl.applyMatrix4(r),Rl.radius+=s,e.ray.intersectsSphere(Rl)===!1)return;kp.copy(r).invert(),Ra.copy(e.ray).applyMatrix4(kp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,u=n.index,d=n.attributes.position;if(u!==null){const f=Math.max(0,a.start),p=Math.min(u.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=c){const m=u.getX(v),y=u.getX(v+1),x=Il(this,e,Ra,l,m,y);x&&t.push(x)}if(this.isLineLoop){const v=u.getX(p-1),g=u.getX(f),m=Il(this,e,Ra,l,v,g);m&&t.push(m)}}else{const f=Math.max(0,a.start),p=Math.min(d.count,a.start+a.count);for(let v=f,g=p-1;v<g;v+=c){const m=Il(this,e,Ra,l,v,v+1);m&&t.push(m)}if(this.isLineLoop){const v=Il(this,e,Ra,l,p-1,f);v&&t.push(v)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Il(i,e,t,n,r,s){const a=i.geometry.attributes.position;if(pc.fromBufferAttribute(a,r),mc.fromBufferAttribute(a,s),t.distanceSqToSegment(pc,mc,uh,Bp)>n)return;uh.applyMatrix4(i.matrixWorld);const l=e.ray.origin.distanceTo(uh);if(!(l<e.near||l>e.far))return{distance:l,point:Bp.clone().applyMatrix4(i.matrixWorld),index:r,face:null,faceIndex:null,object:i}}const Vp=new E,Gp=new E;class ii extends nr{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[];for(let r=0,s=t.count;r<s;r+=2)Vp.fromBufferAttribute(t,r),Gp.fromBufferAttribute(t,r+1),n[r]=r===0?0:n[r-1],n[r+1]=n[r]+Vp.distanceTo(Gp);e.setAttribute("lineDistance",new Re(n,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class pv extends nr{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class nf extends Jt{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ye(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Hp=new ze,ud=new fa,Ll=new $t,Pl=new E;class mv extends it{constructor(e=new $e,t=new nf){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const n=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Ll.copy(n.boundingSphere),Ll.applyMatrix4(r),Ll.radius+=s,e.ray.intersectsSphere(Ll)===!1)return;Hp.copy(r).invert(),ud.copy(e.ray).applyMatrix4(Hp);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=n.index,h=n.attributes.position;if(c!==null){const d=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let p=d,v=f;p<v;p++){const g=c.getX(p);Pl.fromBufferAttribute(h,g),Wp(Pl,g,l,r,e,t,this)}}else{const d=Math.max(0,a.start),f=Math.min(h.count,a.start+a.count);for(let p=d,v=f;p<v;p++)Pl.fromBufferAttribute(h,p),Wp(Pl,p,l,r,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const r=t[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=r.length;s<a;s++){const o=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Wp(i,e,t,n,r,s,a){const o=ud.distanceSqToPoint(i);if(o<t){const l=new E;ud.closestPointToPoint(i,l),l.applyMatrix4(n);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,object:a})}}class fA extends bt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isVideoTexture=!0,this.minFilter=a!==void 0?a:Lt,this.magFilter=s!==void 0?s:Lt,this.generateMipmaps=!1;const u=this;function h(){u.needsUpdate=!0,e.requestVideoFrameCallback(h)}"requestVideoFrameCallback"in e&&e.requestVideoFrameCallback(h)}clone(){return new this.constructor(this.image).copy(this)}update(){const e=this.image;"requestVideoFrameCallback"in e===!1&&e.readyState>=e.HAVE_CURRENT_DATA&&(this.needsUpdate=!0)}}class pA extends bt{constructor(e,t){super({width:e,height:t}),this.isFramebufferTexture=!0,this.magFilter=Gt,this.minFilter=Gt,this.generateMipmaps=!1,this.needsUpdate=!0}}class lu extends bt{constructor(e,t,n,r,s,a,o,l,c,u,h,d){super(null,a,o,l,c,u,r,s,h,d),this.isCompressedTexture=!0,this.image={width:t,height:n},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class mA extends lu{constructor(e,t,n,r,s,a){super(e,t,n,s,a),this.isCompressedArrayTexture=!0,this.image.depth=r,this.wrapR=Ln,this.layerUpdates=new Set}addLayerUpdates(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class gA extends lu{constructor(e,t,n){super(void 0,e[0].width,e[0].height,t,n,Ii),this.isCompressedCubeTexture=!0,this.isCubeTexture=!0,this.image=e}}class vA extends bt{constructor(e,t,n,r,s,a,o,l,c){super(e,t,n,r,s,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gn{constructor(){this.type="Curve",this.arcLengthDivisions=200}getPoint(){return console.warn("THREE.Curve: .getPoint() not implemented."),null}getPointAt(e,t){const n=this.getUtoTmapping(e);return this.getPoint(n,t)}getPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return t}getSpacedPoints(e=5){const t=[];for(let n=0;n<=e;n++)t.push(this.getPointAt(n/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let n,r=this.getPoint(0),s=0;t.push(0);for(let a=1;a<=e;a++)n=this.getPoint(a/e),s+=n.distanceTo(r),t.push(s),r=n;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t){const n=this.getLengths();let r=0;const s=n.length;let a;t?a=t:a=e*n[s-1];let o=0,l=s-1,c;for(;o<=l;)if(r=Math.floor(o+(l-o)/2),c=n[r]-a,c<0)o=r+1;else if(c>0)l=r-1;else{l=r;break}if(r=l,n[r]===a)return r/(s-1);const u=n[r],d=n[r+1]-u,f=(a-u)/d;return(r+f)/(s-1)}getTangent(e,t){let r=e-1e-4,s=e+1e-4;r<0&&(r=0),s>1&&(s=1);const a=this.getPoint(r),o=this.getPoint(s),l=t||(a.isVector2?new j:new E);return l.copy(o).sub(a).normalize(),l}getTangentAt(e,t){const n=this.getUtoTmapping(e);return this.getTangent(n,t)}computeFrenetFrames(e,t){const n=new E,r=[],s=[],a=[],o=new E,l=new ze;for(let f=0;f<=e;f++){const p=f/e;r[f]=this.getTangentAt(p,new E)}s[0]=new E,a[0]=new E;let c=Number.MAX_VALUE;const u=Math.abs(r[0].x),h=Math.abs(r[0].y),d=Math.abs(r[0].z);u<=c&&(c=u,n.set(1,0,0)),h<=c&&(c=h,n.set(0,1,0)),d<=c&&n.set(0,0,1),o.crossVectors(r[0],n).normalize(),s[0].crossVectors(r[0],o),a[0].crossVectors(r[0],s[0]);for(let f=1;f<=e;f++){if(s[f]=s[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(r[f-1],r[f]),o.length()>Number.EPSILON){o.normalize();const p=Math.acos(wt(r[f-1].dot(r[f]),-1,1));s[f].applyMatrix4(l.makeRotationAxis(o,p))}a[f].crossVectors(r[f],s[f])}if(t===!0){let f=Math.acos(wt(s[0].dot(s[e]),-1,1));f/=e,r[0].dot(o.crossVectors(s[0],s[e]))>0&&(f=-f);for(let p=1;p<=e;p++)s[p].applyMatrix4(l.makeRotationAxis(r[p],f*p)),a[p].crossVectors(r[p],s[p])}return{tangents:r,normals:s,binormals:a}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.6,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class cu extends Gn{constructor(e=0,t=0,n=1,r=1,s=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=n,this.yRadius=r,this.aStartAngle=s,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(e,t=new j){const n=t,r=Math.PI*2;let s=this.aEndAngle-this.aStartAngle;const a=Math.abs(s)<Number.EPSILON;for(;s<0;)s+=r;for(;s>r;)s-=r;s<Number.EPSILON&&(a?s=0:s=r),this.aClockwise===!0&&!a&&(s===r?s=-r:s=s-r);const o=this.aStartAngle+e*s;let l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){const u=Math.cos(this.aRotation),h=Math.sin(this.aRotation),d=l-this.aX,f=c-this.aY;l=d*u-f*h+this.aX,c=d*h+f*u+this.aY}return n.set(l,c)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class gv extends cu{constructor(e,t,n,r,s,a){super(e,t,n,n,r,s,a),this.isArcCurve=!0,this.type="ArcCurve"}}function rf(){let i=0,e=0,t=0,n=0;function r(s,a,o,l){i=s,e=o,t=-3*s+3*a-2*o-l,n=2*s-2*a+o+l}return{initCatmullRom:function(s,a,o,l,c){r(a,o,c*(o-s),c*(l-a))},initNonuniformCatmullRom:function(s,a,o,l,c,u,h){let d=(a-s)/c-(o-s)/(c+u)+(o-a)/u,f=(o-a)/u-(l-a)/(u+h)+(l-o)/h;d*=u,f*=u,r(a,o,d,f)},calc:function(s){const a=s*s,o=a*s;return i+e*s+t*a+n*o}}}const Dl=new E,hh=new rf,dh=new rf,fh=new rf;class vv extends Gn{constructor(e=[],t=!1,n="centripetal",r=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=n,this.tension=r}getPoint(e,t=new E){const n=t,r=this.points,s=r.length,a=(s-(this.closed?0:1))*e;let o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/s)+1)*s:l===0&&o===s-1&&(o=s-2,l=1);let c,u;this.closed||o>0?c=r[(o-1)%s]:(Dl.subVectors(r[0],r[1]).add(r[0]),c=Dl);const h=r[o%s],d=r[(o+1)%s];if(this.closed||o+2<s?u=r[(o+2)%s]:(Dl.subVectors(r[s-1],r[s-2]).add(r[s-1]),u=Dl),this.curveType==="centripetal"||this.curveType==="chordal"){const f=this.curveType==="chordal"?.5:.25;let p=Math.pow(c.distanceToSquared(h),f),v=Math.pow(h.distanceToSquared(d),f),g=Math.pow(d.distanceToSquared(u),f);v<1e-4&&(v=1),p<1e-4&&(p=v),g<1e-4&&(g=v),hh.initNonuniformCatmullRom(c.x,h.x,d.x,u.x,p,v,g),dh.initNonuniformCatmullRom(c.y,h.y,d.y,u.y,p,v,g),fh.initNonuniformCatmullRom(c.z,h.z,d.z,u.z,p,v,g)}else this.curveType==="catmullrom"&&(hh.initCatmullRom(c.x,h.x,d.x,u.x,this.tension),dh.initCatmullRom(c.y,h.y,d.y,u.y,this.tension),fh.initCatmullRom(c.z,h.z,d.z,u.z,this.tension));return n.set(hh.calc(l),dh.calc(l),fh.calc(l)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new E().fromArray(r))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function Xp(i,e,t,n,r){const s=(n-e)*.5,a=(r-t)*.5,o=i*i,l=i*o;return(2*t-2*n+s+a)*l+(-3*t+3*n-2*s-a)*o+s*i+t}function xA(i,e){const t=1-i;return t*t*e}function yA(i,e){return 2*(1-i)*i*e}function _A(i,e){return i*i*e}function Fa(i,e,t,n){return xA(i,e)+yA(i,t)+_A(i,n)}function MA(i,e){const t=1-i;return t*t*t*e}function SA(i,e){const t=1-i;return 3*t*t*i*e}function wA(i,e){return 3*(1-i)*i*i*e}function bA(i,e){return i*i*i*e}function ka(i,e,t,n,r){return MA(i,e)+SA(i,t)+wA(i,n)+bA(i,r)}class sf extends Gn{constructor(e=new j,t=new j,n=new j,r=new j){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new j){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,r.x,s.x,a.x,o.x),ka(e,r.y,s.y,a.y,o.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xv extends Gn{constructor(e=new E,t=new E,n=new E,r=new E){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=n,this.v3=r}getPoint(e,t=new E){const n=t,r=this.v0,s=this.v1,a=this.v2,o=this.v3;return n.set(ka(e,r.x,s.x,a.x,o.x),ka(e,r.y,s.y,a.y,o.y),ka(e,r.z,s.z,a.z,o.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class af extends Gn{constructor(e=new j,t=new j){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new j){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new j){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yv extends Gn{constructor(e=new E,t=new E){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new E){const n=t;return e===1?n.copy(this.v2):(n.copy(this.v2).sub(this.v1),n.multiplyScalar(e).add(this.v1)),n}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new E){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class of extends Gn{constructor(e=new j,t=new j,n=new j){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new j){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Fa(e,r.x,s.x,a.x),Fa(e,r.y,s.y,a.y)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class lf extends Gn{constructor(e=new E,t=new E,n=new E){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=n}getPoint(e,t=new E){const n=t,r=this.v0,s=this.v1,a=this.v2;return n.set(Fa(e,r.x,s.x,a.x),Fa(e,r.y,s.y,a.y),Fa(e,r.z,s.z,a.z)),n}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cf extends Gn{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new j){const n=t,r=this.points,s=(r.length-1)*e,a=Math.floor(s),o=s-a,l=r[a===0?a:a-1],c=r[a],u=r[a>r.length-2?r.length-1:a+1],h=r[a>r.length-3?r.length-1:a+2];return n.set(Xp(o,l.x,c.x,u.x,h.x),Xp(o,l.y,c.y,u.y,h.y)),n}copy(e){super.copy(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,n=this.points.length;t<n;t++){const r=this.points[t];e.points.push(r.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,n=e.points.length;t<n;t++){const r=e.points[t];this.points.push(new j().fromArray(r))}return this}}var gc=Object.freeze({__proto__:null,ArcCurve:gv,CatmullRomCurve3:vv,CubicBezierCurve:sf,CubicBezierCurve3:xv,EllipseCurve:cu,LineCurve:af,LineCurve3:yv,QuadraticBezierCurve:of,QuadraticBezierCurve3:lf,SplineCurve:cf});class _v extends Gn{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(e){this.curves.push(e)}closePath(){const e=this.curves[0].getPoint(0),t=this.curves[this.curves.length-1].getPoint(1);if(!e.equals(t)){const n=e.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new gc[n](t,e))}return this}getPoint(e,t){const n=e*this.getLength(),r=this.getCurveLengths();let s=0;for(;s<r.length;){if(r[s]>=n){const a=r[s]-n,o=this.curves[s],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,t)}s++}return null}getLength(){const e=this.getCurveLengths();return e[e.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;const e=[];let t=0;for(let n=0,r=this.curves.length;n<r;n++)t+=this.curves[n].getLength(),e.push(t);return this.cacheLengths=e,e}getSpacedPoints(e=40){const t=[];for(let n=0;n<=e;n++)t.push(this.getPoint(n/e));return this.autoClose&&t.push(t[0]),t}getPoints(e=12){const t=[];let n;for(let r=0,s=this.curves;r<s.length;r++){const a=s[r],o=a.isEllipseCurve?e*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?e*a.points.length:e,l=a.getPoints(o);for(let c=0;c<l.length;c++){const u=l[c];n&&n.equals(u)||(t.push(u),n=u)}}return this.autoClose&&t.length>1&&!t[t.length-1].equals(t[0])&&t.push(t[0]),t}copy(e){super.copy(e),this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(r.clone())}return this.autoClose=e.autoClose,this}toJSON(){const e=super.toJSON();e.autoClose=this.autoClose,e.curves=[];for(let t=0,n=this.curves.length;t<n;t++){const r=this.curves[t];e.curves.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.autoClose=e.autoClose,this.curves=[];for(let t=0,n=e.curves.length;t<n;t++){const r=e.curves[t];this.curves.push(new gc[r.type]().fromJSON(r))}return this}}class io extends _v{constructor(e){super(),this.type="Path",this.currentPoint=new j,e&&this.setFromPoints(e)}setFromPoints(e){this.moveTo(e[0].x,e[0].y);for(let t=1,n=e.length;t<n;t++)this.lineTo(e[t].x,e[t].y);return this}moveTo(e,t){return this.currentPoint.set(e,t),this}lineTo(e,t){const n=new af(this.currentPoint.clone(),new j(e,t));return this.curves.push(n),this.currentPoint.set(e,t),this}quadraticCurveTo(e,t,n,r){const s=new of(this.currentPoint.clone(),new j(e,t),new j(n,r));return this.curves.push(s),this.currentPoint.set(n,r),this}bezierCurveTo(e,t,n,r,s,a){const o=new sf(this.currentPoint.clone(),new j(e,t),new j(n,r),new j(s,a));return this.curves.push(o),this.currentPoint.set(s,a),this}splineThru(e){const t=[this.currentPoint.clone()].concat(e),n=new cf(t);return this.curves.push(n),this.currentPoint.copy(e[e.length-1]),this}arc(e,t,n,r,s,a){const o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(e+o,t+l,n,r,s,a),this}absarc(e,t,n,r,s,a){return this.absellipse(e,t,n,n,r,s,a),this}ellipse(e,t,n,r,s,a,o,l){const c=this.currentPoint.x,u=this.currentPoint.y;return this.absellipse(e+c,t+u,n,r,s,a,o,l),this}absellipse(e,t,n,r,s,a,o,l){const c=new cu(e,t,n,r,s,a,o,l);if(this.curves.length>0){const h=c.getPoint(0);h.equals(this.currentPoint)||this.lineTo(h.x,h.y)}this.curves.push(c);const u=c.getPoint(1);return this.currentPoint.copy(u),this}copy(e){return super.copy(e),this.currentPoint.copy(e.currentPoint),this}toJSON(){const e=super.toJSON();return e.currentPoint=this.currentPoint.toArray(),e}fromJSON(e){return super.fromJSON(e),this.currentPoint.fromArray(e.currentPoint),this}}class Go extends $e{constructor(e=[new j(0,-.5),new j(.5,0),new j(0,.5)],t=12,n=0,r=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:n,phiLength:r},t=Math.floor(t),r=wt(r,0,Math.PI*2);const s=[],a=[],o=[],l=[],c=[],u=1/t,h=new E,d=new j,f=new E,p=new E,v=new E;let g=0,m=0;for(let y=0;y<=e.length-1;y++)switch(y){case 0:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case e.length-1:l.push(v.x,v.y,v.z);break;default:g=e[y+1].x-e[y].x,m=e[y+1].y-e[y].y,f.x=m*1,f.y=-g,f.z=m*0,p.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(p)}for(let y=0;y<=t;y++){const x=n+y*u*r,_=Math.sin(x),L=Math.cos(x);for(let T=0;T<=e.length-1;T++){h.x=e[T].x*_,h.y=e[T].y,h.z=e[T].x*L,a.push(h.x,h.y,h.z),d.x=y/t,d.y=T/(e.length-1),o.push(d.x,d.y);const C=l[3*T+0]*_,I=l[3*T+1],b=l[3*T+0]*L;c.push(C,I,b)}}for(let y=0;y<t;y++)for(let x=0;x<e.length-1;x++){const _=x+y*e.length,L=_,T=_+e.length,C=_+e.length+1,I=_+1;s.push(L,T,I),s.push(C,I,T)}this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("uv",new Re(o,2)),this.setAttribute("normal",new Re(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.points,e.segments,e.phiStart,e.phiLength)}}class uu extends Go{constructor(e=1,t=1,n=4,r=8){const s=new io;s.absarc(0,-t/2,e,Math.PI*1.5,0),s.absarc(0,t/2,e,0,Math.PI*.5),super(s.getPoints(n),r),this.type="CapsuleGeometry",this.parameters={radius:e,length:t,capSegments:n,radialSegments:r}}static fromJSON(e){return new uu(e.radius,e.length,e.capSegments,e.radialSegments)}}class hu extends $e{constructor(e=1,t=32,n=0,r=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:r},t=Math.max(3,t);const s=[],a=[],o=[],l=[],c=new E,u=new j;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let h=0,d=3;h<=t;h++,d+=3){const f=n+h/t*r;c.x=e*Math.cos(f),c.y=e*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),u.x=(a[d]/e+1)/2,u.y=(a[d+1]/e+1)/2,l.push(u.x,u.y)}for(let h=1;h<=t;h++)s.push(h,h+1,0);this.setIndex(s),this.setAttribute("position",new Re(a,3)),this.setAttribute("normal",new Re(o,3)),this.setAttribute("uv",new Re(l,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hu(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class ga extends $e{constructor(e=1,t=1,n=1,r=32,s=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:r,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:l};const c=this;r=Math.floor(r),s=Math.floor(s);const u=[],h=[],d=[],f=[];let p=0;const v=[],g=n/2;let m=0;y(),a===!1&&(e>0&&x(!0),t>0&&x(!1)),this.setIndex(u),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(f,2));function y(){const _=new E,L=new E;let T=0;const C=(t-e)/n;for(let I=0;I<=s;I++){const b=[],M=I/s,P=M*(t-e)+e;for(let H=0;H<=r;H++){const B=H/r,W=B*l+o,$=Math.sin(W),X=Math.cos(W);L.x=P*$,L.y=-M*n+g,L.z=P*X,h.push(L.x,L.y,L.z),_.set($,C,X).normalize(),d.push(_.x,_.y,_.z),f.push(B,1-M),b.push(p++)}v.push(b)}for(let I=0;I<r;I++)for(let b=0;b<s;b++){const M=v[b][I],P=v[b+1][I],H=v[b+1][I+1],B=v[b][I+1];u.push(M,P,B),u.push(P,H,B),T+=6}c.addGroup(m,T,0),m+=T}function x(_){const L=p,T=new j,C=new E;let I=0;const b=_===!0?e:t,M=_===!0?1:-1;for(let H=1;H<=r;H++)h.push(0,g*M,0),d.push(0,M,0),f.push(.5,.5),p++;const P=p;for(let H=0;H<=r;H++){const W=H/r*l+o,$=Math.cos(W),X=Math.sin(W);C.x=b*X,C.y=g*M,C.z=b*$,h.push(C.x,C.y,C.z),d.push(0,M,0),T.x=$*.5+.5,T.y=X*.5*M+.5,f.push(T.x,T.y),p++}for(let H=0;H<r;H++){const B=L+H,W=P+H;_===!0?u.push(W,W+1,B):u.push(W+1,W,B),I+=3}c.addGroup(m,I,_===!0?1:2),m+=I}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ga(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class du extends ga{constructor(e=1,t=1,n=32,r=1,s=!1,a=0,o=Math.PI*2){super(0,e,t,n,r,s,a,o),this.type="ConeGeometry",this.parameters={radius:e,height:t,radialSegments:n,heightSegments:r,openEnded:s,thetaStart:a,thetaLength:o}}static fromJSON(e){return new du(e.radius,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class ar extends $e{constructor(e=[],t=[],n=1,r=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:e,indices:t,radius:n,detail:r};const s=[],a=[];o(r),c(n),u(),this.setAttribute("position",new Re(s,3)),this.setAttribute("normal",new Re(s.slice(),3)),this.setAttribute("uv",new Re(a,2)),r===0?this.computeVertexNormals():this.normalizeNormals();function o(y){const x=new E,_=new E,L=new E;for(let T=0;T<t.length;T+=3)f(t[T+0],x),f(t[T+1],_),f(t[T+2],L),l(x,_,L,y)}function l(y,x,_,L){const T=L+1,C=[];for(let I=0;I<=T;I++){C[I]=[];const b=y.clone().lerp(_,I/T),M=x.clone().lerp(_,I/T),P=T-I;for(let H=0;H<=P;H++)H===0&&I===T?C[I][H]=b:C[I][H]=b.clone().lerp(M,H/P)}for(let I=0;I<T;I++)for(let b=0;b<2*(T-I)-1;b++){const M=Math.floor(b/2);b%2===0?(d(C[I][M+1]),d(C[I+1][M]),d(C[I][M])):(d(C[I][M+1]),d(C[I+1][M+1]),d(C[I+1][M]))}}function c(y){const x=new E;for(let _=0;_<s.length;_+=3)x.x=s[_+0],x.y=s[_+1],x.z=s[_+2],x.normalize().multiplyScalar(y),s[_+0]=x.x,s[_+1]=x.y,s[_+2]=x.z}function u(){const y=new E;for(let x=0;x<s.length;x+=3){y.x=s[x+0],y.y=s[x+1],y.z=s[x+2];const _=g(y)/2/Math.PI+.5,L=m(y)/Math.PI+.5;a.push(_,1-L)}p(),h()}function h(){for(let y=0;y<a.length;y+=6){const x=a[y+0],_=a[y+2],L=a[y+4],T=Math.max(x,_,L),C=Math.min(x,_,L);T>.9&&C<.1&&(x<.2&&(a[y+0]+=1),_<.2&&(a[y+2]+=1),L<.2&&(a[y+4]+=1))}}function d(y){s.push(y.x,y.y,y.z)}function f(y,x){const _=y*3;x.x=e[_+0],x.y=e[_+1],x.z=e[_+2]}function p(){const y=new E,x=new E,_=new E,L=new E,T=new j,C=new j,I=new j;for(let b=0,M=0;b<s.length;b+=9,M+=6){y.set(s[b+0],s[b+1],s[b+2]),x.set(s[b+3],s[b+4],s[b+5]),_.set(s[b+6],s[b+7],s[b+8]),T.set(a[M+0],a[M+1]),C.set(a[M+2],a[M+3]),I.set(a[M+4],a[M+5]),L.copy(y).add(x).add(_).divideScalar(3);const P=g(L);v(T,M+0,y,P),v(C,M+2,x,P),v(I,M+4,_,P)}}function v(y,x,_,L){L<0&&y.x===1&&(a[x]=y.x-1),_.x===0&&_.z===0&&(a[x]=L/2/Math.PI+.5)}function g(y){return Math.atan2(y.z,-y.x)}function m(y){return Math.atan2(-y.y,Math.sqrt(y.x*y.x+y.z*y.z))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ar(e.vertices,e.indices,e.radius,e.details)}}class fu extends ar{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=1/n,s=[-1,-1,-1,-1,-1,1,-1,1,-1,-1,1,1,1,-1,-1,1,-1,1,1,1,-1,1,1,1,0,-r,-n,0,-r,n,0,r,-n,0,r,n,-r,-n,0,-r,n,0,r,-n,0,r,n,0,-n,0,-r,n,0,-r,-n,0,r,n,0,r],a=[3,11,7,3,7,15,3,15,13,7,19,17,7,17,6,7,6,15,17,4,8,17,8,10,17,10,6,8,0,16,8,16,2,8,2,10,0,12,1,0,1,18,0,18,16,6,10,2,6,2,13,6,13,15,2,16,18,2,18,3,2,3,13,18,1,9,18,9,11,18,11,3,4,14,12,4,12,0,4,0,8,11,9,5,11,5,19,11,19,7,19,5,14,19,14,4,19,4,17,1,12,14,1,14,5,1,5,9];super(s,a,e,t),this.type="DodecahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new fu(e.radius,e.detail)}}const Nl=new E,Ul=new E,ph=new E,zl=new xn;class Mv extends $e{constructor(e=null,t=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:e,thresholdAngle:t},e!==null){const r=Math.pow(10,4),s=Math.cos(jr*t),a=e.getIndex(),o=e.getAttribute("position"),l=a?a.count:o.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},f=[];for(let p=0;p<l;p+=3){a?(c[0]=a.getX(p),c[1]=a.getX(p+1),c[2]=a.getX(p+2)):(c[0]=p,c[1]=p+1,c[2]=p+2);const{a:v,b:g,c:m}=zl;if(v.fromBufferAttribute(o,c[0]),g.fromBufferAttribute(o,c[1]),m.fromBufferAttribute(o,c[2]),zl.getNormal(ph),h[0]=`${Math.round(v.x*r)},${Math.round(v.y*r)},${Math.round(v.z*r)}`,h[1]=`${Math.round(g.x*r)},${Math.round(g.y*r)},${Math.round(g.z*r)}`,h[2]=`${Math.round(m.x*r)},${Math.round(m.y*r)},${Math.round(m.z*r)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let y=0;y<3;y++){const x=(y+1)%3,_=h[y],L=h[x],T=zl[u[y]],C=zl[u[x]],I=`${_}_${L}`,b=`${L}_${_}`;b in d&&d[b]?(ph.dot(d[b].normal)<=s&&(f.push(T.x,T.y,T.z),f.push(C.x,C.y,C.z)),d[b]=null):I in d||(d[I]={index0:c[y],index1:c[x],normal:ph.clone()})}}for(const p in d)if(d[p]){const{index0:v,index1:g}=d[p];Nl.fromBufferAttribute(o,v),Ul.fromBufferAttribute(o,g),f.push(Nl.x,Nl.y,Nl.z),f.push(Ul.x,Ul.y,Ul.z)}this.setAttribute("position",new Re(f,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}class Jr extends io{constructor(e){super(e),this.uuid=Sn(),this.type="Shape",this.holes=[]}getPointsHoles(e){const t=[];for(let n=0,r=this.holes.length;n<r;n++)t[n]=this.holes[n].getPoints(e);return t}extractPoints(e){return{shape:this.getPoints(e),holes:this.getPointsHoles(e)}}copy(e){super.copy(e),this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(r.clone())}return this}toJSON(){const e=super.toJSON();e.uuid=this.uuid,e.holes=[];for(let t=0,n=this.holes.length;t<n;t++){const r=this.holes[t];e.holes.push(r.toJSON())}return e}fromJSON(e){super.fromJSON(e),this.uuid=e.uuid,this.holes=[];for(let t=0,n=e.holes.length;t<n;t++){const r=e.holes[t];this.holes.push(new io().fromJSON(r))}return this}}const AA={triangulate:function(i,e,t=2){const n=e&&e.length,r=n?e[0]*t:i.length;let s=Sv(i,0,r,t,!0);const a=[];if(!s||s.next===s.prev)return a;let o,l,c,u,h,d,f;if(n&&(s=IA(i,e,s,t)),i.length>80*t){o=c=i[0],l=u=i[1];for(let p=t;p<r;p+=t)h=i[p],d=i[p+1],h<o&&(o=h),d<l&&(l=d),h>c&&(c=h),d>u&&(u=d);f=Math.max(c-o,u-l),f=f!==0?32767/f:0}return ro(s,a,t,o,l,f,0),a}};function Sv(i,e,t,n,r){let s,a;if(r===VA(i,e,t,n)>0)for(s=e;s<t;s+=n)a=qp(s,i[s],i[s+1],a);else for(s=t-n;s>=e;s-=n)a=qp(s,i[s],i[s+1],a);return a&&pu(a,a.next)&&(ao(a),a=a.next),a}function ss(i,e){if(!i)return i;e||(e=i);let t=i,n;do if(n=!1,!t.steiner&&(pu(t,t.next)||yt(t.prev,t,t.next)===0)){if(ao(t),t=e=t.prev,t===t.next)break;n=!0}else t=t.next;while(n||t!==e);return e}function ro(i,e,t,n,r,s,a){if(!i)return;!a&&s&&UA(i,n,r,s);let o=i,l,c;for(;i.prev!==i.next;){if(l=i.prev,c=i.next,s?EA(i,n,r,s):TA(i)){e.push(l.i/t|0),e.push(i.i/t|0),e.push(c.i/t|0),ao(i),i=c.next,o=c.next;continue}if(i=c,i===o){a?a===1?(i=CA(ss(i),e,t),ro(i,e,t,n,r,s,2)):a===2&&RA(i,e,t,n,r,s):ro(ss(i),e,t,n,r,s,1);break}}}function TA(i){const e=i.prev,t=i,n=i.next;if(yt(e,t,n)>=0)return!1;const r=e.x,s=t.x,a=n.x,o=e.y,l=t.y,c=n.y,u=r<s?r<a?r:a:s<a?s:a,h=o<l?o<c?o:c:l<c?l:c,d=r>s?r>a?r:a:s>a?s:a,f=o>l?o>c?o:c:l>c?l:c;let p=n.next;for(;p!==e;){if(p.x>=u&&p.x<=d&&p.y>=h&&p.y<=f&&Vs(r,o,s,l,a,c,p.x,p.y)&&yt(p.prev,p,p.next)>=0)return!1;p=p.next}return!0}function EA(i,e,t,n){const r=i.prev,s=i,a=i.next;if(yt(r,s,a)>=0)return!1;const o=r.x,l=s.x,c=a.x,u=r.y,h=s.y,d=a.y,f=o<l?o<c?o:c:l<c?l:c,p=u<h?u<d?u:d:h<d?h:d,v=o>l?o>c?o:c:l>c?l:c,g=u>h?u>d?u:d:h>d?h:d,m=hd(f,p,e,t,n),y=hd(v,g,e,t,n);let x=i.prevZ,_=i.nextZ;for(;x&&x.z>=m&&_&&_.z<=y;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==r&&x!==a&&Vs(o,u,l,h,c,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0||(x=x.prevZ,_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==r&&_!==a&&Vs(o,u,l,h,c,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;x&&x.z>=m;){if(x.x>=f&&x.x<=v&&x.y>=p&&x.y<=g&&x!==r&&x!==a&&Vs(o,u,l,h,c,d,x.x,x.y)&&yt(x.prev,x,x.next)>=0)return!1;x=x.prevZ}for(;_&&_.z<=y;){if(_.x>=f&&_.x<=v&&_.y>=p&&_.y<=g&&_!==r&&_!==a&&Vs(o,u,l,h,c,d,_.x,_.y)&&yt(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function CA(i,e,t){let n=i;do{const r=n.prev,s=n.next.next;!pu(r,s)&&wv(r,n,n.next,s)&&so(r,s)&&so(s,r)&&(e.push(r.i/t|0),e.push(n.i/t|0),e.push(s.i/t|0),ao(n),ao(n.next),n=i=s),n=n.next}while(n!==i);return ss(n)}function RA(i,e,t,n,r,s){let a=i;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&FA(a,o)){let l=bv(a,o);a=ss(a,a.next),l=ss(l,l.next),ro(a,e,t,n,r,s,0),ro(l,e,t,n,r,s,0);return}o=o.next}a=a.next}while(a!==i)}function IA(i,e,t,n){const r=[];let s,a,o,l,c;for(s=0,a=e.length;s<a;s++)o=e[s]*n,l=s<a-1?e[s+1]*n:i.length,c=Sv(i,o,l,n,!1),c===c.next&&(c.steiner=!0),r.push(OA(c));for(r.sort(LA),s=0;s<r.length;s++)t=PA(r[s],t);return t}function LA(i,e){return i.x-e.x}function PA(i,e){const t=DA(i,e);if(!t)return e;const n=bv(t,i);return ss(n,n.next),ss(t,t.next)}function DA(i,e){let t=e,n=-1/0,r;const s=i.x,a=i.y;do{if(a<=t.y&&a>=t.next.y&&t.next.y!==t.y){const d=t.x+(a-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=s&&d>n&&(n=d,r=t.x<t.next.x?t:t.next,d===s))return r}t=t.next}while(t!==e);if(!r)return null;const o=r,l=r.x,c=r.y;let u=1/0,h;t=r;do s>=t.x&&t.x>=l&&s!==t.x&&Vs(a<c?s:n,a,l,c,a<c?n:s,a,t.x,t.y)&&(h=Math.abs(a-t.y)/(s-t.x),so(t,i)&&(h<u||h===u&&(t.x>r.x||t.x===r.x&&NA(r,t)))&&(r=t,u=h)),t=t.next;while(t!==o);return r}function NA(i,e){return yt(i.prev,i,e.prev)<0&&yt(e.next,i,i.next)<0}function UA(i,e,t,n){let r=i;do r.z===0&&(r.z=hd(r.x,r.y,e,t,n)),r.prevZ=r.prev,r.nextZ=r.next,r=r.next;while(r!==i);r.prevZ.nextZ=null,r.prevZ=null,zA(r)}function zA(i){let e,t,n,r,s,a,o,l,c=1;do{for(t=i,i=null,s=null,a=0;t;){for(a++,n=t,o=0,e=0;e<c&&(o++,n=n.nextZ,!!n);e++);for(l=c;o>0||l>0&&n;)o!==0&&(l===0||!n||t.z<=n.z)?(r=t,t=t.nextZ,o--):(r=n,n=n.nextZ,l--),s?s.nextZ=r:i=r,r.prevZ=s,s=r;t=n}s.nextZ=null,c*=2}while(a>1);return i}function hd(i,e,t,n,r){return i=(i-t)*r|0,e=(e-n)*r|0,i=(i|i<<8)&16711935,i=(i|i<<4)&252645135,i=(i|i<<2)&858993459,i=(i|i<<1)&1431655765,e=(e|e<<8)&16711935,e=(e|e<<4)&252645135,e=(e|e<<2)&858993459,e=(e|e<<1)&1431655765,i|e<<1}function OA(i){let e=i,t=i;do(e.x<t.x||e.x===t.x&&e.y<t.y)&&(t=e),e=e.next;while(e!==i);return t}function Vs(i,e,t,n,r,s,a,o){return(r-a)*(e-o)>=(i-a)*(s-o)&&(i-a)*(n-o)>=(t-a)*(e-o)&&(t-a)*(s-o)>=(r-a)*(n-o)}function FA(i,e){return i.next.i!==e.i&&i.prev.i!==e.i&&!kA(i,e)&&(so(i,e)&&so(e,i)&&BA(i,e)&&(yt(i.prev,i,e.prev)||yt(i,e.prev,e))||pu(i,e)&&yt(i.prev,i,i.next)>0&&yt(e.prev,e,e.next)>0)}function yt(i,e,t){return(e.y-i.y)*(t.x-e.x)-(e.x-i.x)*(t.y-e.y)}function pu(i,e){return i.x===e.x&&i.y===e.y}function wv(i,e,t,n){const r=Fl(yt(i,e,t)),s=Fl(yt(i,e,n)),a=Fl(yt(t,n,i)),o=Fl(yt(t,n,e));return!!(r!==s&&a!==o||r===0&&Ol(i,t,e)||s===0&&Ol(i,n,e)||a===0&&Ol(t,i,n)||o===0&&Ol(t,e,n))}function Ol(i,e,t){return e.x<=Math.max(i.x,t.x)&&e.x>=Math.min(i.x,t.x)&&e.y<=Math.max(i.y,t.y)&&e.y>=Math.min(i.y,t.y)}function Fl(i){return i>0?1:i<0?-1:0}function kA(i,e){let t=i;do{if(t.i!==i.i&&t.next.i!==i.i&&t.i!==e.i&&t.next.i!==e.i&&wv(t,t.next,i,e))return!0;t=t.next}while(t!==i);return!1}function so(i,e){return yt(i.prev,i,i.next)<0?yt(i,e,i.next)>=0&&yt(i,i.prev,e)>=0:yt(i,e,i.prev)<0||yt(i,i.next,e)<0}function BA(i,e){let t=i,n=!1;const r=(i.x+e.x)/2,s=(i.y+e.y)/2;do t.y>s!=t.next.y>s&&t.next.y!==t.y&&r<(t.next.x-t.x)*(s-t.y)/(t.next.y-t.y)+t.x&&(n=!n),t=t.next;while(t!==i);return n}function bv(i,e){const t=new dd(i.i,i.x,i.y),n=new dd(e.i,e.x,e.y),r=i.next,s=e.prev;return i.next=e,e.prev=i,t.next=r,r.prev=t,n.next=t,t.prev=n,s.next=n,n.prev=s,n}function qp(i,e,t,n){const r=new dd(i,e,t);return n?(r.next=n.next,r.prev=n,n.next.prev=r,n.next=r):(r.prev=r,r.next=r),r}function ao(i){i.next.prev=i.prev,i.prev.next=i.next,i.prevZ&&(i.prevZ.nextZ=i.nextZ),i.nextZ&&(i.nextZ.prevZ=i.prevZ)}function dd(i,e,t){this.i=i,this.x=e,this.y=t,this.prev=null,this.next=null,this.z=0,this.prevZ=null,this.nextZ=null,this.steiner=!1}function VA(i,e,t,n){let r=0;for(let s=e,a=t-n;s<t;s+=n)r+=(i[a]-i[s])*(i[s+1]+i[a+1]),a=s;return r}class Qn{static area(e){const t=e.length;let n=0;for(let r=t-1,s=0;s<t;r=s++)n+=e[r].x*e[s].y-e[s].x*e[r].y;return n*.5}static isClockWise(e){return Qn.area(e)<0}static triangulateShape(e,t){const n=[],r=[],s=[];Yp(e),Zp(n,e);let a=e.length;t.forEach(Yp);for(let l=0;l<t.length;l++)r.push(a),a+=t[l].length,Zp(n,t[l]);const o=AA.triangulate(n,r);for(let l=0;l<o.length;l+=3)s.push(o.slice(l,l+3));return s}}function Yp(i){const e=i.length;e>2&&i[e-1].equals(i[0])&&i.pop()}function Zp(i,e){for(let t=0;t<e.length;t++)i.push(e[t].x),i.push(e[t].y)}class mu extends $e{constructor(e=new Jr([new j(.5,.5),new j(-.5,.5),new j(-.5,-.5),new j(.5,-.5)]),t={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:e,options:t},e=Array.isArray(e)?e:[e];const n=this,r=[],s=[];for(let o=0,l=e.length;o<l;o++){const c=e[o];a(c)}this.setAttribute("position",new Re(r,3)),this.setAttribute("uv",new Re(s,2)),this.computeVertexNormals();function a(o){const l=[],c=t.curveSegments!==void 0?t.curveSegments:12,u=t.steps!==void 0?t.steps:1,h=t.depth!==void 0?t.depth:1;let d=t.bevelEnabled!==void 0?t.bevelEnabled:!0,f=t.bevelThickness!==void 0?t.bevelThickness:.2,p=t.bevelSize!==void 0?t.bevelSize:f-.1,v=t.bevelOffset!==void 0?t.bevelOffset:0,g=t.bevelSegments!==void 0?t.bevelSegments:3;const m=t.extrudePath,y=t.UVGenerator!==void 0?t.UVGenerator:GA;let x,_=!1,L,T,C,I;m&&(x=m.getSpacedPoints(u),_=!0,d=!1,L=m.computeFrenetFrames(u,!1),T=new E,C=new E,I=new E),d||(g=0,f=0,p=0,v=0);const b=o.extractPoints(c);let M=b.shape;const P=b.holes;if(!Qn.isClockWise(M)){M=M.reverse();for(let K=0,ne=P.length;K<ne;K++){const le=P[K];Qn.isClockWise(le)&&(P[K]=le.reverse())}}const B=Qn.triangulateShape(M,P),W=M;for(let K=0,ne=P.length;K<ne;K++){const le=P[K];M=M.concat(le)}function $(K,ne,le){return ne||console.error("THREE.ExtrudeGeometry: vec does not exist"),K.clone().addScaledVector(ne,le)}const X=M.length,ae=B.length;function q(K,ne,le){let re,se,Me;const ve=K.x-ne.x,Ge=K.y-ne.y,R=le.x-K.x,S=le.y-K.y,G=ve*ve+Ge*Ge,te=ve*S-Ge*R;if(Math.abs(te)>Number.EPSILON){const ee=Math.sqrt(G),ie=Math.sqrt(R*R+S*S),Pe=ne.x-Ge/ee,me=ne.y+ve/ee,ge=le.x-S/ie,Ye=le.y+R/ie,ce=((ge-Pe)*S-(Ye-me)*R)/(ve*S-Ge*R);re=Pe+ve*ce-K.x,se=me+Ge*ce-K.y;const Ie=re*re+se*se;if(Ie<=2)return new j(re,se);Me=Math.sqrt(Ie/2)}else{let ee=!1;ve>Number.EPSILON?R>Number.EPSILON&&(ee=!0):ve<-Number.EPSILON?R<-Number.EPSILON&&(ee=!0):Math.sign(Ge)===Math.sign(S)&&(ee=!0),ee?(re=-Ge,se=ve,Me=Math.sqrt(G)):(re=ve,se=Ge,Me=Math.sqrt(G/2))}return new j(re/Me,se/Me)}const _e=[];for(let K=0,ne=W.length,le=ne-1,re=K+1;K<ne;K++,le++,re++)le===ne&&(le=0),re===ne&&(re=0),_e[K]=q(W[K],W[le],W[re]);const Ee=[];let be,je=_e.concat();for(let K=0,ne=P.length;K<ne;K++){const le=P[K];be=[];for(let re=0,se=le.length,Me=se-1,ve=re+1;re<se;re++,Me++,ve++)Me===se&&(Me=0),ve===se&&(ve=0),be[re]=q(le[re],le[Me],le[ve]);Ee.push(be),je=je.concat(be)}for(let K=0;K<g;K++){const ne=K/g,le=f*Math.cos(ne*Math.PI/2),re=p*Math.sin(ne*Math.PI/2)+v;for(let se=0,Me=W.length;se<Me;se++){const ve=$(W[se],_e[se],re);de(ve.x,ve.y,-le)}for(let se=0,Me=P.length;se<Me;se++){const ve=P[se];be=Ee[se];for(let Ge=0,R=ve.length;Ge<R;Ge++){const S=$(ve[Ge],be[Ge],re);de(S.x,S.y,-le)}}}const rt=p+v;for(let K=0;K<X;K++){const ne=d?$(M[K],je[K],rt):M[K];_?(C.copy(L.normals[0]).multiplyScalar(ne.x),T.copy(L.binormals[0]).multiplyScalar(ne.y),I.copy(x[0]).add(C).add(T),de(I.x,I.y,I.z)):de(ne.x,ne.y,0)}for(let K=1;K<=u;K++)for(let ne=0;ne<X;ne++){const le=d?$(M[ne],je[ne],rt):M[ne];_?(C.copy(L.normals[K]).multiplyScalar(le.x),T.copy(L.binormals[K]).multiplyScalar(le.y),I.copy(x[K]).add(C).add(T),de(I.x,I.y,I.z)):de(le.x,le.y,h/u*K)}for(let K=g-1;K>=0;K--){const ne=K/g,le=f*Math.cos(ne*Math.PI/2),re=p*Math.sin(ne*Math.PI/2)+v;for(let se=0,Me=W.length;se<Me;se++){const ve=$(W[se],_e[se],re);de(ve.x,ve.y,h+le)}for(let se=0,Me=P.length;se<Me;se++){const ve=P[se];be=Ee[se];for(let Ge=0,R=ve.length;Ge<R;Ge++){const S=$(ve[Ge],be[Ge],re);_?de(S.x,S.y+x[u-1].y,x[u-1].x+le):de(S.x,S.y,h+le)}}}Y(),oe();function Y(){const K=r.length/3;if(d){let ne=0,le=X*ne;for(let re=0;re<ae;re++){const se=B[re];He(se[2]+le,se[1]+le,se[0]+le)}ne=u+g*2,le=X*ne;for(let re=0;re<ae;re++){const se=B[re];He(se[0]+le,se[1]+le,se[2]+le)}}else{for(let ne=0;ne<ae;ne++){const le=B[ne];He(le[2],le[1],le[0])}for(let ne=0;ne<ae;ne++){const le=B[ne];He(le[0]+X*u,le[1]+X*u,le[2]+X*u)}}n.addGroup(K,r.length/3-K,0)}function oe(){const K=r.length/3;let ne=0;Ae(W,ne),ne+=W.length;for(let le=0,re=P.length;le<re;le++){const se=P[le];Ae(se,ne),ne+=se.length}n.addGroup(K,r.length/3-K,1)}function Ae(K,ne){let le=K.length;for(;--le>=0;){const re=le;let se=le-1;se<0&&(se=K.length-1);for(let Me=0,ve=u+g*2;Me<ve;Me++){const Ge=X*Me,R=X*(Me+1),S=ne+re+Ge,G=ne+se+Ge,te=ne+se+R,ee=ne+re+R;qe(S,G,te,ee)}}}function de(K,ne,le){l.push(K),l.push(ne),l.push(le)}function He(K,ne,le){Ve(K),Ve(ne),Ve(le);const re=r.length/3,se=y.generateTopUV(n,r,re-3,re-2,re-1);D(se[0]),D(se[1]),D(se[2])}function qe(K,ne,le,re){Ve(K),Ve(ne),Ve(re),Ve(ne),Ve(le),Ve(re);const se=r.length/3,Me=y.generateSideWallUV(n,r,se-6,se-3,se-2,se-1);D(Me[0]),D(Me[1]),D(Me[3]),D(Me[1]),D(Me[2]),D(Me[3])}function Ve(K){r.push(l[K*3+0]),r.push(l[K*3+1]),r.push(l[K*3+2])}function D(K){s.push(K.x),s.push(K.y)}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes,n=this.parameters.options;return HA(t,n,e)}static fromJSON(e,t){const n=[];for(let s=0,a=e.shapes.length;s<a;s++){const o=t[e.shapes[s]];n.push(o)}const r=e.options.extrudePath;return r!==void 0&&(e.options.extrudePath=new gc[r.type]().fromJSON(r)),new mu(n,e.options)}}const GA={generateTopUV:function(i,e,t,n,r){const s=e[t*3],a=e[t*3+1],o=e[n*3],l=e[n*3+1],c=e[r*3],u=e[r*3+1];return[new j(s,a),new j(o,l),new j(c,u)]},generateSideWallUV:function(i,e,t,n,r,s){const a=e[t*3],o=e[t*3+1],l=e[t*3+2],c=e[n*3],u=e[n*3+1],h=e[n*3+2],d=e[r*3],f=e[r*3+1],p=e[r*3+2],v=e[s*3],g=e[s*3+1],m=e[s*3+2];return Math.abs(o-u)<Math.abs(a-c)?[new j(a,1-l),new j(c,1-h),new j(d,1-p),new j(v,1-m)]:[new j(o,1-l),new j(u,1-h),new j(f,1-p),new j(g,1-m)]}};function HA(i,e,t){if(t.shapes=[],Array.isArray(i))for(let n=0,r=i.length;n<r;n++){const s=i[n];t.shapes.push(s.uuid)}else t.shapes.push(i.uuid);return t.options=Object.assign({},e),e.extrudePath!==void 0&&(t.options.extrudePath=e.extrudePath.toJSON()),t}class gu extends ar{constructor(e=1,t=0){const n=(1+Math.sqrt(5))/2,r=[-1,n,0,1,n,0,-1,-n,0,1,-n,0,0,-1,n,0,1,n,0,-1,-n,0,1,-n,n,0,-1,n,0,1,-n,0,-1,-n,0,1],s=[0,11,5,0,5,1,0,1,7,0,7,10,0,10,11,1,5,9,5,11,4,11,10,2,10,7,6,7,1,8,3,9,4,3,4,2,3,2,6,3,6,8,3,8,9,4,9,5,2,4,11,6,2,10,8,6,7,9,8,1];super(r,s,e,t),this.type="IcosahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new gu(e.radius,e.detail)}}class Ho extends ar{constructor(e=1,t=0){const n=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],r=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(n,r,e,t),this.type="OctahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new Ho(e.radius,e.detail)}}class vu extends $e{constructor(e=.5,t=1,n=32,r=1,s=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:n,phiSegments:r,thetaStart:s,thetaLength:a},n=Math.max(3,n),r=Math.max(1,r);const o=[],l=[],c=[],u=[];let h=e;const d=(t-e)/r,f=new E,p=new j;for(let v=0;v<=r;v++){for(let g=0;g<=n;g++){const m=s+g/n*a;f.x=h*Math.cos(m),f.y=h*Math.sin(m),l.push(f.x,f.y,f.z),c.push(0,0,1),p.x=(f.x/t+1)/2,p.y=(f.y/t+1)/2,u.push(p.x,p.y)}h+=d}for(let v=0;v<r;v++){const g=v*(n+1);for(let m=0;m<n;m++){const y=m+g,x=y,_=y+n+1,L=y+n+2,T=y+1;o.push(x,_,T),o.push(_,L,T)}}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(u,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new vu(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class xu extends $e{constructor(e=new Jr([new j(0,.5),new j(-.5,-.5),new j(.5,-.5)]),t=12){super(),this.type="ShapeGeometry",this.parameters={shapes:e,curveSegments:t};const n=[],r=[],s=[],a=[];let o=0,l=0;if(Array.isArray(e)===!1)c(e);else for(let u=0;u<e.length;u++)c(e[u]),this.addGroup(o,l,u),o+=l,l=0;this.setIndex(n),this.setAttribute("position",new Re(r,3)),this.setAttribute("normal",new Re(s,3)),this.setAttribute("uv",new Re(a,2));function c(u){const h=r.length/3,d=u.extractPoints(t);let f=d.shape;const p=d.holes;Qn.isClockWise(f)===!1&&(f=f.reverse());for(let g=0,m=p.length;g<m;g++){const y=p[g];Qn.isClockWise(y)===!0&&(p[g]=y.reverse())}const v=Qn.triangulateShape(f,p);for(let g=0,m=p.length;g<m;g++){const y=p[g];f=f.concat(y)}for(let g=0,m=f.length;g<m;g++){const y=f[g];r.push(y.x,y.y,0),s.push(0,0,1),a.push(y.x,y.y)}for(let g=0,m=v.length;g<m;g++){const y=v[g],x=y[0]+h,_=y[1]+h,L=y[2]+h;n.push(x,_,L),l+=3}}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON(),t=this.parameters.shapes;return WA(t,e)}static fromJSON(e,t){const n=[];for(let r=0,s=e.shapes.length;r<s;r++){const a=t[e.shapes[r]];n.push(a)}return new xu(n,e.curveSegments)}}function WA(i,e){if(e.shapes=[],Array.isArray(i))for(let t=0,n=i.length;t<n;t++){const r=i[t];e.shapes.push(r.uuid)}else e.shapes.push(i.uuid);return e}class Wo extends $e{constructor(e=1,t=32,n=16,r=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:r,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const l=Math.min(a+o,Math.PI);let c=0;const u=[],h=new E,d=new E,f=[],p=[],v=[],g=[];for(let m=0;m<=n;m++){const y=[],x=m/n;let _=0;m===0&&a===0?_=.5/t:m===n&&l===Math.PI&&(_=-.5/t);for(let L=0;L<=t;L++){const T=L/t;h.x=-e*Math.cos(r+T*s)*Math.sin(a+x*o),h.y=e*Math.cos(a+x*o),h.z=e*Math.sin(r+T*s)*Math.sin(a+x*o),p.push(h.x,h.y,h.z),d.copy(h).normalize(),v.push(d.x,d.y,d.z),g.push(T+_,1-x),y.push(c++)}u.push(y)}for(let m=0;m<n;m++)for(let y=0;y<t;y++){const x=u[m][y+1],_=u[m][y],L=u[m+1][y],T=u[m+1][y+1];(m!==0||a>0)&&f.push(x,_,T),(m!==n-1||l<Math.PI)&&f.push(_,L,T)}this.setIndex(f),this.setAttribute("position",new Re(p,3)),this.setAttribute("normal",new Re(v,3)),this.setAttribute("uv",new Re(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Wo(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class yu extends ar{constructor(e=1,t=0){const n=[1,1,1,-1,-1,1,-1,1,-1,1,-1,-1],r=[2,1,0,0,3,2,1,3,0,2,3,1];super(n,r,e,t),this.type="TetrahedronGeometry",this.parameters={radius:e,detail:t}}static fromJSON(e){return new yu(e.radius,e.detail)}}class _u extends $e{constructor(e=1,t=.4,n=12,r=48,s=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:n,tubularSegments:r,arc:s},n=Math.floor(n),r=Math.floor(r);const a=[],o=[],l=[],c=[],u=new E,h=new E,d=new E;for(let f=0;f<=n;f++)for(let p=0;p<=r;p++){const v=p/r*s,g=f/n*Math.PI*2;h.x=(e+t*Math.cos(g))*Math.cos(v),h.y=(e+t*Math.cos(g))*Math.sin(v),h.z=t*Math.sin(g),o.push(h.x,h.y,h.z),u.x=e*Math.cos(v),u.y=e*Math.sin(v),d.subVectors(h,u).normalize(),l.push(d.x,d.y,d.z),c.push(p/r),c.push(f/n)}for(let f=1;f<=n;f++)for(let p=1;p<=r;p++){const v=(r+1)*f+p-1,g=(r+1)*(f-1)+p-1,m=(r+1)*(f-1)+p,y=(r+1)*f+p;a.push(v,g,y),a.push(g,m,y)}this.setIndex(a),this.setAttribute("position",new Re(o,3)),this.setAttribute("normal",new Re(l,3)),this.setAttribute("uv",new Re(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _u(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class Mu extends $e{constructor(e=1,t=.4,n=64,r=8,s=2,a=3){super(),this.type="TorusKnotGeometry",this.parameters={radius:e,tube:t,tubularSegments:n,radialSegments:r,p:s,q:a},n=Math.floor(n),r=Math.floor(r);const o=[],l=[],c=[],u=[],h=new E,d=new E,f=new E,p=new E,v=new E,g=new E,m=new E;for(let x=0;x<=n;++x){const _=x/n*s*Math.PI*2;y(_,s,a,e,f),y(_+.01,s,a,e,p),g.subVectors(p,f),m.addVectors(p,f),v.crossVectors(g,m),m.crossVectors(v,g),v.normalize(),m.normalize();for(let L=0;L<=r;++L){const T=L/r*Math.PI*2,C=-t*Math.cos(T),I=t*Math.sin(T);h.x=f.x+(C*m.x+I*v.x),h.y=f.y+(C*m.y+I*v.y),h.z=f.z+(C*m.z+I*v.z),l.push(h.x,h.y,h.z),d.subVectors(h,f).normalize(),c.push(d.x,d.y,d.z),u.push(x/n),u.push(L/r)}}for(let x=1;x<=n;x++)for(let _=1;_<=r;_++){const L=(r+1)*(x-1)+(_-1),T=(r+1)*x+(_-1),C=(r+1)*x+_,I=(r+1)*(x-1)+_;o.push(L,T,I),o.push(T,C,I)}this.setIndex(o),this.setAttribute("position",new Re(l,3)),this.setAttribute("normal",new Re(c,3)),this.setAttribute("uv",new Re(u,2));function y(x,_,L,T,C){const I=Math.cos(x),b=Math.sin(x),M=L/_*x,P=Math.cos(M);C.x=T*(2+P)*.5*I,C.y=T*(2+P)*b*.5,C.z=T*Math.sin(M)*.5}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mu(e.radius,e.tube,e.tubularSegments,e.radialSegments,e.p,e.q)}}class Su extends $e{constructor(e=new lf(new E(-1,-1,0),new E(-1,1,0),new E(1,1,0)),t=64,n=1,r=8,s=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:n,radialSegments:r,closed:s};const a=e.computeFrenetFrames(t,s);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;const o=new E,l=new E,c=new j;let u=new E;const h=[],d=[],f=[],p=[];v(),this.setIndex(p),this.setAttribute("position",new Re(h,3)),this.setAttribute("normal",new Re(d,3)),this.setAttribute("uv",new Re(f,2));function v(){for(let x=0;x<t;x++)g(x);g(s===!1?t:0),y(),m()}function g(x){u=e.getPointAt(x/t,u);const _=a.normals[x],L=a.binormals[x];for(let T=0;T<=r;T++){const C=T/r*Math.PI*2,I=Math.sin(C),b=-Math.cos(C);l.x=b*_.x+I*L.x,l.y=b*_.y+I*L.y,l.z=b*_.z+I*L.z,l.normalize(),d.push(l.x,l.y,l.z),o.x=u.x+n*l.x,o.y=u.y+n*l.y,o.z=u.z+n*l.z,h.push(o.x,o.y,o.z)}}function m(){for(let x=1;x<=t;x++)for(let _=1;_<=r;_++){const L=(r+1)*(x-1)+(_-1),T=(r+1)*x+(_-1),C=(r+1)*x+_,I=(r+1)*(x-1)+_;p.push(L,T,I),p.push(T,C,I)}}function y(){for(let x=0;x<=t;x++)for(let _=0;_<=r;_++)c.x=x/t,c.y=_/r,f.push(c.x,c.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new Su(new gc[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}class Av extends $e{constructor(e=null){if(super(),this.type="WireframeGeometry",this.parameters={geometry:e},e!==null){const t=[],n=new Set,r=new E,s=new E;if(e.index!==null){const a=e.attributes.position,o=e.index;let l=e.groups;l.length===0&&(l=[{start:0,count:o.count,materialIndex:0}]);for(let c=0,u=l.length;c<u;++c){const h=l[c],d=h.start,f=h.count;for(let p=d,v=d+f;p<v;p+=3)for(let g=0;g<3;g++){const m=o.getX(p+g),y=o.getX(p+(g+1)%3);r.fromBufferAttribute(a,m),s.fromBufferAttribute(a,y),$p(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}}else{const a=e.attributes.position;for(let o=0,l=a.count/3;o<l;o++)for(let c=0;c<3;c++){const u=3*o+c,h=3*o+(c+1)%3;r.fromBufferAttribute(a,u),s.fromBufferAttribute(a,h),$p(r,s,n)===!0&&(t.push(r.x,r.y,r.z),t.push(s.x,s.y,s.z))}}this.setAttribute("position",new Re(t,3))}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}}function $p(i,e,t){const n=`${i.x},${i.y},${i.z}-${e.x},${e.y},${e.z}`,r=`${e.x},${e.y},${e.z}-${i.x},${i.y},${i.z}`;return t.has(n)===!0||t.has(r)===!0?!1:(t.add(n),t.add(r),!0)}var jp=Object.freeze({__proto__:null,BoxGeometry:ls,CapsuleGeometry:uu,CircleGeometry:hu,ConeGeometry:du,CylinderGeometry:ga,DodecahedronGeometry:fu,EdgesGeometry:Mv,ExtrudeGeometry:mu,IcosahedronGeometry:gu,LatheGeometry:Go,OctahedronGeometry:Ho,PlaneGeometry:pa,PolyhedronGeometry:ar,RingGeometry:vu,ShapeGeometry:xu,SphereGeometry:Wo,TetrahedronGeometry:yu,TorusGeometry:_u,TorusKnotGeometry:Mu,TubeGeometry:Su,WireframeGeometry:Av});class Tv extends Jt{constructor(e){super(),this.isShadowMaterial=!0,this.type="ShadowMaterial",this.color=new ye(0),this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.fog=e.fog,this}}class Ev extends Vn{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class uf extends Jt{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new ye(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Cv extends uf{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new j(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return wt(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new ye(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new ye(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new ye(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Rv extends Jt{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new ye(16777215),this.specular=new ye(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Iv extends Jt{constructor(e){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new ye(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.gradientMap=e.gradientMap,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}class Lv extends Jt{constructor(e){super(),this.isMeshNormalMaterial=!0,this.type="MeshNormalMaterial",this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.flatShading=!1,this.setValues(e)}copy(e){return super.copy(e),this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.flatShading=e.flatShading,this}}class Pv extends Jt{constructor(e){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new ye(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ye(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Oo,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Dv extends Jt{constructor(e){super(),this.isMeshMatcapMaterial=!0,this.defines={MATCAP:""},this.type="MeshMatcapMaterial",this.color=new ye(16777215),this.matcap=null,this.map=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=rr,this.normalScale=new j(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={MATCAP:""},this.color.copy(e.color),this.matcap=e.matcap,this.map=e.map,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.alphaMap=e.alphaMap,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Nv extends an{constructor(e){super(),this.isLineDashedMaterial=!0,this.type="LineDashedMaterial",this.scale=1,this.dashSize=3,this.gapSize=1,this.setValues(e)}copy(e){return super.copy(e),this.scale=e.scale,this.dashSize=e.dashSize,this.gapSize=e.gapSize,this}}function Pr(i,e,t){return!i||!t&&i.constructor===e?i:typeof e.BYTES_PER_ELEMENT=="number"?new e(i):Array.prototype.slice.call(i)}function Uv(i){return ArrayBuffer.isView(i)&&!(i instanceof DataView)}function zv(i){function e(r,s){return i[r]-i[s]}const t=i.length,n=new Array(t);for(let r=0;r!==t;++r)n[r]=r;return n.sort(e),n}function fd(i,e,t){const n=i.length,r=new i.constructor(n);for(let s=0,a=0;a!==n;++s){const o=t[s]*e;for(let l=0;l!==e;++l)r[a++]=i[o+l]}return r}function hf(i,e,t,n){let r=1,s=i[0];for(;s!==void 0&&s[n]===void 0;)s=i[r++];if(s===void 0)return;let a=s[n];if(a!==void 0)if(Array.isArray(a))do a=s[n],a!==void 0&&(e.push(s.time),t.push.apply(t,a)),s=i[r++];while(s!==void 0);else if(a.toArray!==void 0)do a=s[n],a!==void 0&&(e.push(s.time),a.toArray(t,t.length)),s=i[r++];while(s!==void 0);else do a=s[n],a!==void 0&&(e.push(s.time),t.push(a)),s=i[r++];while(s!==void 0)}function XA(i,e,t,n,r=30){const s=i.clone();s.name=e;const a=[];for(let l=0;l<s.tracks.length;++l){const c=s.tracks[l],u=c.getValueSize(),h=[],d=[];for(let f=0;f<c.times.length;++f){const p=c.times[f]*r;if(!(p<t||p>=n)){h.push(c.times[f]);for(let v=0;v<u;++v)d.push(c.values[f*u+v])}}h.length!==0&&(c.times=Pr(h,c.times.constructor),c.values=Pr(d,c.values.constructor),a.push(c))}s.tracks=a;let o=1/0;for(let l=0;l<s.tracks.length;++l)o>s.tracks[l].times[0]&&(o=s.tracks[l].times[0]);for(let l=0;l<s.tracks.length;++l)s.tracks[l].shift(-1*o);return s.resetDuration(),s}function qA(i,e=0,t=i,n=30){n<=0&&(n=30);const r=t.tracks.length,s=e/n;for(let a=0;a<r;++a){const o=t.tracks[a],l=o.ValueTypeName;if(l==="bool"||l==="string")continue;const c=i.tracks.find(function(m){return m.name===o.name&&m.ValueTypeName===l});if(c===void 0)continue;let u=0;const h=o.getValueSize();o.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(u=h/3);let d=0;const f=c.getValueSize();c.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline&&(d=f/3);const p=o.times.length-1;let v;if(s<=o.times[0]){const m=u,y=h-u;v=o.values.slice(m,y)}else if(s>=o.times[p]){const m=p*h+u,y=m+h-u;v=o.values.slice(m,y)}else{const m=o.createInterpolant(),y=u,x=h-u;m.evaluate(s),v=m.resultBuffer.slice(y,x)}l==="quaternion"&&new fn().fromArray(v).normalize().conjugate().toArray(v);const g=c.times.length;for(let m=0;m<g;++m){const y=m*f+d;if(l==="quaternion")fn.multiplyQuaternionsFlat(c.values,y,v,0,c.values,y);else{const x=f-d*2;for(let _=0;_<x;++_)c.values[y+_]-=v[_]}}}return i.blendMode=Hd,i}const YA={convertArray:Pr,isTypedArray:Uv,getKeyframeOrder:zv,sortedArray:fd,flattenJSON:hf,subclip:XA,makeClipAdditive:qA};class Xo{constructor(e,t,n,r){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=r!==void 0?r:new t.constructor(n),this.sampleValues=t,this.valueSize=n,this.settings=null,this.DefaultSettings_={}}evaluate(e){const t=this.parameterPositions;let n=this._cachedIndex,r=t[n],s=t[n-1];e:{t:{let a;n:{i:if(!(e<r)){for(let o=n+2;;){if(r===void 0){if(e<s)break i;return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}if(n===o)break;if(s=r,r=t[++n],e<r)break t}a=t.length;break n}if(!(e>=s)){const o=t[1];e<o&&(n=2,s=o);for(let l=n-2;;){if(s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===l)break;if(r=s,s=t[--n-1],e>=s)break t}a=n,n=0;break n}break e}for(;n<a;){const o=n+a>>>1;e<t[o]?a=o:n=o+1}if(r=t[n],s=t[n-1],s===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===void 0)return n=t.length,this._cachedIndex=n,this.copySampleValue_(n-1)}this._cachedIndex=n,this.intervalChanged_(n,s,r)}return this.interpolate_(n,s,e,r)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){const t=this.resultBuffer,n=this.sampleValues,r=this.valueSize,s=e*r;for(let a=0;a!==r;++a)t[a]=n[s+a];return t}interpolate_(){throw new Error("call to abstract method")}intervalChanged_(){}}class Ov extends Xo{constructor(e,t,n,r){super(e,t,n,r),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Rr,endingEnd:Rr}}intervalChanged_(e,t,n){const r=this.parameterPositions;let s=e-2,a=e+1,o=r[s],l=r[a];if(o===void 0)switch(this.getSettings_().endingStart){case Ir:s=e,o=2*t-n;break;case ja:s=r.length-2,o=t+r[s]-r[s+1];break;default:s=e,o=n}if(l===void 0)switch(this.getSettings_().endingEnd){case Ir:a=e,l=2*n-t;break;case ja:a=1,l=n+r[1]-r[0];break;default:a=e-1,l=t}const c=(n-t)*.5,u=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-n),this._offsetPrev=s*u,this._offsetNext=a*u}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=this._offsetPrev,h=this._offsetNext,d=this._weightPrev,f=this._weightNext,p=(n-t)/(r-t),v=p*p,g=v*p,m=-d*g+2*d*v-d*p,y=(1+d)*g+(-1.5-2*d)*v+(-.5+d)*p+1,x=(-1-f)*g+(1.5+f)*v+.5*p,_=f*g-f*v;for(let L=0;L!==o;++L)s[L]=m*a[u+L]+y*a[c+L]+x*a[l+L]+_*a[h+L];return s}}class df extends Xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,u=(n-t)/(r-t),h=1-u;for(let d=0;d!==o;++d)s[d]=a[c+d]*h+a[l+d]*u;return s}}class Fv extends Xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e){return this.copySampleValue_(e-1)}}class Hn{constructor(e,t,n,r){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Pr(t,this.TimeBufferType),this.values=Pr(n,this.ValueBufferType),this.setInterpolation(r||this.DefaultInterpolation)}static toJSON(e){const t=e.constructor;let n;if(t.toJSON!==this.toJSON)n=t.toJSON(e);else{n={name:e.name,times:Pr(e.times,Array),values:Pr(e.values,Array)};const r=e.getInterpolation();r!==e.DefaultInterpolation&&(n.interpolation=r)}return n.type=e.ValueTypeName,n}InterpolantFactoryMethodDiscrete(e){return new Fv(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new df(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new Ov(this.times,this.values,this.getValueSize(),e)}setInterpolation(e){let t;switch(e){case $a:t=this.InterpolantFactoryMethodDiscrete;break;case fc:t=this.InterpolantFactoryMethodLinear;break;case ic:t=this.InterpolantFactoryMethodSmooth;break}if(t===void 0){const n="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(n);return console.warn("THREE.KeyframeTrack:",n),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return $a;case this.InterpolantFactoryMethodLinear:return fc;case this.InterpolantFactoryMethodSmooth:return ic}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]+=e}return this}scale(e){if(e!==1){const t=this.times;for(let n=0,r=t.length;n!==r;++n)t[n]*=e}return this}trim(e,t){const n=this.times,r=n.length;let s=0,a=r-1;for(;s!==r&&n[s]<e;)++s;for(;a!==-1&&n[a]>t;)--a;if(++a,s!==0||a!==r){s>=a&&(a=Math.max(a,1),s=a-1);const o=this.getValueSize();this.times=n.slice(s,a),this.values=this.values.slice(s*o,a*o)}return this}validate(){let e=!0;const t=this.getValueSize();t-Math.floor(t)!==0&&(console.error("THREE.KeyframeTrack: Invalid value size in track.",this),e=!1);const n=this.times,r=this.values,s=n.length;s===0&&(console.error("THREE.KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==s;o++){const l=n[o];if(typeof l=="number"&&isNaN(l)){console.error("THREE.KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){console.error("THREE.KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(r!==void 0&&Uv(r))for(let o=0,l=r.length;o!==l;++o){const c=r[o];if(isNaN(c)){console.error("THREE.KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){const e=this.times.slice(),t=this.values.slice(),n=this.getValueSize(),r=this.getInterpolation()===ic,s=e.length-1;let a=1;for(let o=1;o<s;++o){let l=!1;const c=e[o],u=e[o+1];if(c!==u&&(o!==1||c!==e[0]))if(r)l=!0;else{const h=o*n,d=h-n,f=h+n;for(let p=0;p!==n;++p){const v=t[h+p];if(v!==t[d+p]||v!==t[f+p]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];const h=o*n,d=a*n;for(let f=0;f!==n;++f)t[d+f]=t[h+f]}++a}}if(s>0){e[a]=e[s];for(let o=s*n,l=a*n,c=0;c!==n;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*n)):(this.times=e,this.values=t),this}clone(){const e=this.times.slice(),t=this.values.slice(),n=this.constructor,r=new n(this.name,e,t);return r.createInterpolant=this.createInterpolant,r}}Hn.prototype.TimeBufferType=Float32Array;Hn.prototype.ValueBufferType=Float32Array;Hn.prototype.DefaultInterpolation=fc;class cs extends Hn{constructor(e,t,n){super(e,t,n)}}cs.prototype.ValueTypeName="bool";cs.prototype.ValueBufferType=Array;cs.prototype.DefaultInterpolation=$a;cs.prototype.InterpolantFactoryMethodLinear=void 0;cs.prototype.InterpolantFactoryMethodSmooth=void 0;class ff extends Hn{}ff.prototype.ValueTypeName="color";class oo extends Hn{}oo.prototype.ValueTypeName="number";class kv extends Xo{constructor(e,t,n,r){super(e,t,n,r)}interpolate_(e,t,n,r){const s=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(n-t)/(r-t);let c=e*o;for(let u=c+o;c!==u;c+=4)fn.slerpFlat(s,0,a,c-o,a,c,l);return s}}class qo extends Hn{InterpolantFactoryMethodLinear(e){return new kv(this.times,this.values,this.getValueSize(),e)}}qo.prototype.ValueTypeName="quaternion";qo.prototype.InterpolantFactoryMethodSmooth=void 0;class us extends Hn{constructor(e,t,n){super(e,t,n)}}us.prototype.ValueTypeName="string";us.prototype.ValueBufferType=Array;us.prototype.DefaultInterpolation=$a;us.prototype.InterpolantFactoryMethodLinear=void 0;us.prototype.InterpolantFactoryMethodSmooth=void 0;class lo extends Hn{}lo.prototype.ValueTypeName="vector";class co{constructor(e="",t=-1,n=[],r=Jc){this.name=e,this.tracks=n,this.duration=t,this.blendMode=r,this.uuid=Sn(),this.duration<0&&this.resetDuration()}static parse(e){const t=[],n=e.tracks,r=1/(e.fps||1);for(let a=0,o=n.length;a!==o;++a)t.push($A(n[a]).scale(r));const s=new this(e.name,e.duration,t,e.blendMode);return s.uuid=e.uuid,s}static toJSON(e){const t=[],n=e.tracks,r={name:e.name,duration:e.duration,tracks:t,uuid:e.uuid,blendMode:e.blendMode};for(let s=0,a=n.length;s!==a;++s)t.push(Hn.toJSON(n[s]));return r}static CreateFromMorphTargetSequence(e,t,n,r){const s=t.length,a=[];for(let o=0;o<s;o++){let l=[],c=[];l.push((o+s-1)%s,o,(o+1)%s),c.push(0,1,0);const u=zv(l);l=fd(l,1,u),c=fd(c,1,u),!r&&l[0]===0&&(l.push(s),c.push(c[0])),a.push(new oo(".morphTargetInfluences["+t[o].name+"]",l,c).scale(1/n))}return new this(e,-1,a)}static findByName(e,t){let n=e;if(!Array.isArray(e)){const r=e;n=r.geometry&&r.geometry.animations||r.animations}for(let r=0;r<n.length;r++)if(n[r].name===t)return n[r];return null}static CreateClipsFromMorphTargetSequences(e,t,n){const r={},s=/^([\w-]*?)([\d]+)$/;for(let o=0,l=e.length;o<l;o++){const c=e[o],u=c.name.match(s);if(u&&u.length>1){const h=u[1];let d=r[h];d||(r[h]=d=[]),d.push(c)}}const a=[];for(const o in r)a.push(this.CreateFromMorphTargetSequence(o,r[o],t,n));return a}static parseAnimation(e,t){if(!e)return console.error("THREE.AnimationClip: No animation in JSONLoader data."),null;const n=function(h,d,f,p,v){if(f.length!==0){const g=[],m=[];hf(f,g,m,p),g.length!==0&&v.push(new h(d,g,m))}},r=[],s=e.name||"default",a=e.fps||30,o=e.blendMode;let l=e.length||-1;const c=e.hierarchy||[];for(let h=0;h<c.length;h++){const d=c[h].keys;if(!(!d||d.length===0))if(d[0].morphTargets){const f={};let p;for(p=0;p<d.length;p++)if(d[p].morphTargets)for(let v=0;v<d[p].morphTargets.length;v++)f[d[p].morphTargets[v]]=-1;for(const v in f){const g=[],m=[];for(let y=0;y!==d[p].morphTargets.length;++y){const x=d[p];g.push(x.time),m.push(x.morphTarget===v?1:0)}r.push(new oo(".morphTargetInfluence["+v+"]",g,m))}l=f.length*a}else{const f=".bones["+t[h].name+"]";n(lo,f+".position",d,"pos",r),n(qo,f+".quaternion",d,"rot",r),n(lo,f+".scale",d,"scl",r)}}return r.length===0?null:new this(s,l,r,o)}resetDuration(){const e=this.tracks;let t=0;for(let n=0,r=e.length;n!==r;++n){const s=this.tracks[n];t=Math.max(t,s.times[s.times.length-1])}return this.duration=t,this}trim(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].trim(0,this.duration);return this}validate(){let e=!0;for(let t=0;t<this.tracks.length;t++)e=e&&this.tracks[t].validate();return e}optimize(){for(let e=0;e<this.tracks.length;e++)this.tracks[e].optimize();return this}clone(){const e=[];for(let t=0;t<this.tracks.length;t++)e.push(this.tracks[t].clone());return new this.constructor(this.name,this.duration,e,this.blendMode)}toJSON(){return this.constructor.toJSON(this)}}function ZA(i){switch(i.toLowerCase()){case"scalar":case"double":case"float":case"number":case"integer":return oo;case"vector":case"vector2":case"vector3":case"vector4":return lo;case"color":return ff;case"quaternion":return qo;case"bool":case"boolean":return cs;case"string":return us}throw new Error("THREE.KeyframeTrack: Unsupported typeName: "+i)}function $A(i){if(i.type===void 0)throw new Error("THREE.KeyframeTrack: track type undefined, can not parse");const e=ZA(i.type);if(i.times===void 0){const t=[],n=[];hf(i.keys,t,n,"value"),i.times=t,i.values=n}return e.parse!==void 0?e.parse(i):new e(i.name,i.times,i.values,i.interpolation)}const Mi={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(this.files[i]=e)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class pf{constructor(e,t,n){const r=this;let s=!1,a=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=n,this.itemStart=function(u){o++,s===!1&&r.onStart!==void 0&&r.onStart(u,a,o),s=!0},this.itemEnd=function(u){a++,r.onProgress!==void 0&&r.onProgress(u,a,o),a===o&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,h){return c.push(u,h),this},this.removeHandler=function(u){const h=c.indexOf(u);return h!==-1&&c.splice(h,2),this},this.getHandler=function(u){for(let h=0,d=c.length;h<d;h+=2){const f=c[h],p=c[h+1];if(f.global&&(f.lastIndex=0),f.test(u))return p}return null}}}const Bv=new pf;class pn{constructor(e){this.manager=e!==void 0?e:Bv,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const n=this;return new Promise(function(r,s){n.load(e,r,t,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}pn.DEFAULT_MATERIAL_NAME="__DEFAULT";const ui={};class jA extends Error{constructor(e,t){super(e),this.response=t}}class Pi extends pn{constructor(e){super(e)}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=Mi.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{t&&t(s),this.manager.itemEnd(e)},0),s;if(ui[e]!==void 0){ui[e].push({onLoad:t,onProgress:n,onError:r});return}ui[e]=[],ui[e].push({onLoad:t,onProgress:n,onError:r});const a=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),o=this.mimeType,l=this.responseType;fetch(a).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=ui[e],h=c.body.getReader(),d=c.headers.get("X-File-Size")||c.headers.get("Content-Length"),f=d?parseInt(d):0,p=f!==0;let v=0;const g=new ReadableStream({start(m){y();function y(){h.read().then(({done:x,value:_})=>{if(x)m.close();else{v+=_.byteLength;const L=new ProgressEvent("progress",{lengthComputable:p,loaded:v,total:f});for(let T=0,C=u.length;T<C;T++){const I=u[T];I.onProgress&&I.onProgress(L)}m.enqueue(_),y()}},x=>{m.error(x)})}}});return new Response(g)}else throw new jA(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,o));case"json":return c.json();default:if(o===void 0)return c.text();{const h=/charset="?([^;"\s]*)"?/i.exec(o),d=h&&h[1]?h[1].toLowerCase():void 0,f=new TextDecoder(d);return c.arrayBuffer().then(p=>f.decode(p))}}}).then(c=>{Mi.add(e,c);const u=ui[e];delete ui[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onLoad&&f.onLoad(c)}}).catch(c=>{const u=ui[e];if(u===void 0)throw this.manager.itemError(e),c;delete ui[e];for(let h=0,d=u.length;h<d;h++){const f=u[h];f.onError&&f.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class JA extends pn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Pi(this.manager);a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t=[];for(let n=0;n<e.length;n++){const r=co.parse(e[n]);t.push(r)}return t}}class KA extends pn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=[],o=new lu,l=new Pi(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(h){l.load(e[h],function(d){const f=s.parse(d,!0);a[h]={width:f.width,height:f.height,format:f.format,mipmaps:f.mipmaps},c+=1,c===6&&(f.mipmapCount===1&&(o.minFilter=Lt),o.image=a,o.format=f.format,o.needsUpdate=!0,t&&t(o))},n,r)}if(Array.isArray(e))for(let h=0,d=e.length;h<d;++h)u(h);else l.load(e,function(h){const d=s.parse(h,!0);if(d.isCubemap){const f=d.mipmaps.length/d.mipmapCount;for(let p=0;p<f;p++){a[p]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)a[p].mipmaps.push(d.mipmaps[p*d.mipmapCount+v]),a[p].format=d.format,a[p].width=d.width,a[p].height=d.height}o.image=a}else o.image.width=d.width,o.image.height=d.height,o.mipmaps=d.mipmaps;d.mipmapCount===1&&(o.minFilter=Lt),o.format=d.format,o.needsUpdate=!0,t&&t(o)},n,r);return o}}class uo extends pn{constructor(e){super(e)}load(e,t,n,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Mi.get(e);if(a!==void 0)return s.manager.itemStart(e),setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a;const o=no("img");function l(){u(),Mi.add(e,this),t&&t(this),s.manager.itemEnd(e)}function c(h){u(),r&&r(h),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),s.manager.itemStart(e),o.src=e,o}}class QA extends pn{constructor(e){super(e)}load(e,t,n,r){const s=new Bo;s.colorSpace=Rn;const a=new uo(this.manager);a.setCrossOrigin(this.crossOrigin),a.setPath(this.path);let o=0;function l(c){a.load(e[c],function(u){s.images[c]=u,o++,o===6&&(s.needsUpdate=!0,t&&t(s))},void 0,r)}for(let c=0;c<e.length;++c)l(c);return s}}class eT extends pn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Ti,o=new Pi(this.manager);return o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setPath(this.path),o.setWithCredentials(s.withCredentials),o.load(e,function(l){let c;try{c=s.parse(l)}catch(u){if(r!==void 0)r(u);else{console.error(u);return}}c.image!==void 0?a.image=c.image:c.data!==void 0&&(a.image.width=c.width,a.image.height=c.height,a.image.data=c.data),a.wrapS=c.wrapS!==void 0?c.wrapS:Ln,a.wrapT=c.wrapT!==void 0?c.wrapT:Ln,a.magFilter=c.magFilter!==void 0?c.magFilter:Lt,a.minFilter=c.minFilter!==void 0?c.minFilter:Lt,a.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0&&(a.colorSpace=c.colorSpace),c.flipY!==void 0&&(a.flipY=c.flipY),c.format!==void 0&&(a.format=c.format),c.type!==void 0&&(a.type=c.type),c.mipmaps!==void 0&&(a.mipmaps=c.mipmaps,a.minFilter=Jn),c.mipmapCount===1&&(a.minFilter=Lt),c.generateMipmaps!==void 0&&(a.generateMipmaps=c.generateMipmaps),a.needsUpdate=!0,t&&t(a,c)},n,r),a}}class tT extends pn{constructor(e){super(e)}load(e,t,n,r){const s=new bt,a=new uo(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){s.image=o,s.needsUpdate=!0,t!==void 0&&t(s)},n,r),s}}class or extends it{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ye(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}class Vv extends or{constructor(e,t,n){super(e,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ye(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}}const mh=new ze,Jp=new E,Kp=new E;class mf{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new j(512,512),this.map=null,this.mapPass=null,this.matrix=new ze,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Vo,this._frameExtents=new j(1,1),this._viewportCount=1,this._viewports=[new ct(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,n=this.matrix;Jp.setFromMatrixPosition(e.matrixWorld),t.position.copy(Jp),Kp.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Kp),t.updateMatrixWorld(),mh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(mh),n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(mh)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class nT extends mf{constructor(){super(new Xt(50,1,.5,500)),this.isSpotLightShadow=!0,this.focus=1}updateMatrices(e){const t=this.camera,n=aa*2*e.angle*this.focus,r=this.mapSize.width/this.mapSize.height,s=e.distance||t.far;(n!==t.fov||r!==t.aspect||s!==t.far)&&(t.fov=n,t.aspect=r,t.far=s,t.updateProjectionMatrix()),super.updateMatrices(e)}copy(e){return super.copy(e),this.focus=e.focus,this}}class Gv extends or{constructor(e,t,n=0,r=Math.PI/3,s=0,a=2){super(e,t),this.isSpotLight=!0,this.type="SpotLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.distance=n,this.angle=r,this.penumbra=s,this.decay=a,this.map=null,this.shadow=new nT}get power(){return this.intensity*Math.PI}set power(e){this.intensity=e/Math.PI}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.angle=e.angle,this.penumbra=e.penumbra,this.decay=e.decay,this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}const Qp=new ze,Ia=new E,gh=new E;class iT extends mf{constructor(){super(new Xt(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new j(4,2),this._viewportCount=6,this._viewports=[new ct(2,1,1,1),new ct(0,1,1,1),new ct(3,1,1,1),new ct(1,1,1,1),new ct(3,0,1,1),new ct(1,0,1,1)],this._cubeDirections=[new E(1,0,0),new E(-1,0,0),new E(0,0,1),new E(0,0,-1),new E(0,1,0),new E(0,-1,0)],this._cubeUps=[new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,1,0),new E(0,0,1),new E(0,0,-1)]}updateMatrices(e,t=0){const n=this.camera,r=this.matrix,s=e.distance||n.far;s!==n.far&&(n.far=s,n.updateProjectionMatrix()),Ia.setFromMatrixPosition(e.matrixWorld),n.position.copy(Ia),gh.copy(n.position),gh.add(this._cubeDirections[t]),n.up.copy(this._cubeUps[t]),n.lookAt(gh),n.updateMatrixWorld(),r.makeTranslation(-Ia.x,-Ia.y,-Ia.z),Qp.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qp)}}class Hv extends or{constructor(e,t,n=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=r,this.shadow=new iT}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class rT extends mf{constructor(){super(new nu(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Wv extends or{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(it.DEFAULT_UP),this.updateMatrix(),this.target=new it,this.shadow=new rT}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Xv extends or{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class qv extends or{constructor(e,t,n=10,r=10){super(e,t),this.isRectAreaLight=!0,this.type="RectAreaLight",this.width=n,this.height=r}get power(){return this.intensity*this.width*this.height*Math.PI}set power(e){this.intensity=e/(this.width*this.height*Math.PI)}copy(e){return super.copy(e),this.width=e.width,this.height=e.height,this}toJSON(e){const t=super.toJSON(e);return t.object.width=this.width,t.object.height=this.height,t}}class Yv{constructor(){this.isSphericalHarmonics3=!0,this.coefficients=[];for(let e=0;e<9;e++)this.coefficients.push(new E)}set(e){for(let t=0;t<9;t++)this.coefficients[t].copy(e[t]);return this}zero(){for(let e=0;e<9;e++)this.coefficients[e].set(0,0,0);return this}getAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.282095),t.addScaledVector(a[1],.488603*r),t.addScaledVector(a[2],.488603*s),t.addScaledVector(a[3],.488603*n),t.addScaledVector(a[4],1.092548*(n*r)),t.addScaledVector(a[5],1.092548*(r*s)),t.addScaledVector(a[6],.315392*(3*s*s-1)),t.addScaledVector(a[7],1.092548*(n*s)),t.addScaledVector(a[8],.546274*(n*n-r*r)),t}getIrradianceAt(e,t){const n=e.x,r=e.y,s=e.z,a=this.coefficients;return t.copy(a[0]).multiplyScalar(.886227),t.addScaledVector(a[1],2*.511664*r),t.addScaledVector(a[2],2*.511664*s),t.addScaledVector(a[3],2*.511664*n),t.addScaledVector(a[4],2*.429043*n*r),t.addScaledVector(a[5],2*.429043*r*s),t.addScaledVector(a[6],.743125*s*s-.247708),t.addScaledVector(a[7],2*.429043*n*s),t.addScaledVector(a[8],.429043*(n*n-r*r)),t}add(e){for(let t=0;t<9;t++)this.coefficients[t].add(e.coefficients[t]);return this}addScaledSH(e,t){for(let n=0;n<9;n++)this.coefficients[n].addScaledVector(e.coefficients[n],t);return this}scale(e){for(let t=0;t<9;t++)this.coefficients[t].multiplyScalar(e);return this}lerp(e,t){for(let n=0;n<9;n++)this.coefficients[n].lerp(e.coefficients[n],t);return this}equals(e){for(let t=0;t<9;t++)if(!this.coefficients[t].equals(e.coefficients[t]))return!1;return!0}copy(e){return this.set(e.coefficients)}clone(){return new this.constructor().copy(this)}fromArray(e,t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].fromArray(e,t+r*3);return this}toArray(e=[],t=0){const n=this.coefficients;for(let r=0;r<9;r++)n[r].toArray(e,t+r*3);return e}static getBasisAt(e,t){const n=e.x,r=e.y,s=e.z;t[0]=.282095,t[1]=.488603*r,t[2]=.488603*s,t[3]=.488603*n,t[4]=1.092548*n*r,t[5]=1.092548*r*s,t[6]=.315392*(3*s*s-1),t[7]=1.092548*n*s,t[8]=.546274*(n*n-r*r)}}class Zv extends or{constructor(e=new Yv,t=1){super(void 0,t),this.isLightProbe=!0,this.sh=e}copy(e){return super.copy(e),this.sh.copy(e.sh),this}fromJSON(e){return this.intensity=e.intensity,this.sh.fromArray(e.sh),this}toJSON(e){const t=super.toJSON(e);return t.object.sh=this.sh.toArray(),t}}class wu extends pn{constructor(e){super(e),this.textures={}}load(e,t,n,r){const s=this,a=new Pi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t=this.textures;function n(s){return t[s]===void 0&&console.warn("THREE.MaterialLoader: Undefined texture",s),t[s]}const r=wu.createMaterialFromType(e.type);if(e.uuid!==void 0&&(r.uuid=e.uuid),e.name!==void 0&&(r.name=e.name),e.color!==void 0&&r.color!==void 0&&r.color.setHex(e.color),e.roughness!==void 0&&(r.roughness=e.roughness),e.metalness!==void 0&&(r.metalness=e.metalness),e.sheen!==void 0&&(r.sheen=e.sheen),e.sheenColor!==void 0&&(r.sheenColor=new ye().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(r.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&r.emissive!==void 0&&r.emissive.setHex(e.emissive),e.specular!==void 0&&r.specular!==void 0&&r.specular.setHex(e.specular),e.specularIntensity!==void 0&&(r.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&r.specularColor!==void 0&&r.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(r.shininess=e.shininess),e.clearcoat!==void 0&&(r.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(r.dispersion=e.dispersion),e.iridescence!==void 0&&(r.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(r.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(r.transmission=e.transmission),e.thickness!==void 0&&(r.thickness=e.thickness),e.attenuationDistance!==void 0&&(r.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&r.attenuationColor!==void 0&&r.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(r.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(r.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(r.fog=e.fog),e.flatShading!==void 0&&(r.flatShading=e.flatShading),e.blending!==void 0&&(r.blending=e.blending),e.combine!==void 0&&(r.combine=e.combine),e.side!==void 0&&(r.side=e.side),e.shadowSide!==void 0&&(r.shadowSide=e.shadowSide),e.opacity!==void 0&&(r.opacity=e.opacity),e.transparent!==void 0&&(r.transparent=e.transparent),e.alphaTest!==void 0&&(r.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(r.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(r.depthFunc=e.depthFunc),e.depthTest!==void 0&&(r.depthTest=e.depthTest),e.depthWrite!==void 0&&(r.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(r.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(r.blendSrc=e.blendSrc),e.blendDst!==void 0&&(r.blendDst=e.blendDst),e.blendEquation!==void 0&&(r.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(r.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(r.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(r.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&r.blendColor!==void 0&&r.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(r.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(r.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(r.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(r.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(r.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(r.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(r.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(r.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(r.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(r.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(r.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(r.rotation=e.rotation),e.linewidth!==void 0&&(r.linewidth=e.linewidth),e.dashSize!==void 0&&(r.dashSize=e.dashSize),e.gapSize!==void 0&&(r.gapSize=e.gapSize),e.scale!==void 0&&(r.scale=e.scale),e.polygonOffset!==void 0&&(r.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(r.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(r.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(r.dithering=e.dithering),e.alphaToCoverage!==void 0&&(r.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(r.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(r.forceSinglePass=e.forceSinglePass),e.visible!==void 0&&(r.visible=e.visible),e.toneMapped!==void 0&&(r.toneMapped=e.toneMapped),e.userData!==void 0&&(r.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?r.vertexColors=e.vertexColors>0:r.vertexColors=e.vertexColors),e.uniforms!==void 0)for(const s in e.uniforms){const a=e.uniforms[s];switch(r.uniforms[s]={},a.type){case"t":r.uniforms[s].value=n(a.value);break;case"c":r.uniforms[s].value=new ye().setHex(a.value);break;case"v2":r.uniforms[s].value=new j().fromArray(a.value);break;case"v3":r.uniforms[s].value=new E().fromArray(a.value);break;case"v4":r.uniforms[s].value=new ct().fromArray(a.value);break;case"m3":r.uniforms[s].value=new We().fromArray(a.value);break;case"m4":r.uniforms[s].value=new ze().fromArray(a.value);break;default:r.uniforms[s].value=a.value}}if(e.defines!==void 0&&(r.defines=e.defines),e.vertexShader!==void 0&&(r.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(r.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(r.glslVersion=e.glslVersion),e.extensions!==void 0)for(const s in e.extensions)r.extensions[s]=e.extensions[s];if(e.lights!==void 0&&(r.lights=e.lights),e.clipping!==void 0&&(r.clipping=e.clipping),e.size!==void 0&&(r.size=e.size),e.sizeAttenuation!==void 0&&(r.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(r.map=n(e.map)),e.matcap!==void 0&&(r.matcap=n(e.matcap)),e.alphaMap!==void 0&&(r.alphaMap=n(e.alphaMap)),e.bumpMap!==void 0&&(r.bumpMap=n(e.bumpMap)),e.bumpScale!==void 0&&(r.bumpScale=e.bumpScale),e.normalMap!==void 0&&(r.normalMap=n(e.normalMap)),e.normalMapType!==void 0&&(r.normalMapType=e.normalMapType),e.normalScale!==void 0){let s=e.normalScale;Array.isArray(s)===!1&&(s=[s,s]),r.normalScale=new j().fromArray(s)}return e.displacementMap!==void 0&&(r.displacementMap=n(e.displacementMap)),e.displacementScale!==void 0&&(r.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(r.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(r.roughnessMap=n(e.roughnessMap)),e.metalnessMap!==void 0&&(r.metalnessMap=n(e.metalnessMap)),e.emissiveMap!==void 0&&(r.emissiveMap=n(e.emissiveMap)),e.emissiveIntensity!==void 0&&(r.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(r.specularMap=n(e.specularMap)),e.specularIntensityMap!==void 0&&(r.specularIntensityMap=n(e.specularIntensityMap)),e.specularColorMap!==void 0&&(r.specularColorMap=n(e.specularColorMap)),e.envMap!==void 0&&(r.envMap=n(e.envMap)),e.envMapRotation!==void 0&&r.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(r.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(r.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(r.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(r.lightMap=n(e.lightMap)),e.lightMapIntensity!==void 0&&(r.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(r.aoMap=n(e.aoMap)),e.aoMapIntensity!==void 0&&(r.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(r.gradientMap=n(e.gradientMap)),e.clearcoatMap!==void 0&&(r.clearcoatMap=n(e.clearcoatMap)),e.clearcoatRoughnessMap!==void 0&&(r.clearcoatRoughnessMap=n(e.clearcoatRoughnessMap)),e.clearcoatNormalMap!==void 0&&(r.clearcoatNormalMap=n(e.clearcoatNormalMap)),e.clearcoatNormalScale!==void 0&&(r.clearcoatNormalScale=new j().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(r.iridescenceMap=n(e.iridescenceMap)),e.iridescenceThicknessMap!==void 0&&(r.iridescenceThicknessMap=n(e.iridescenceThicknessMap)),e.transmissionMap!==void 0&&(r.transmissionMap=n(e.transmissionMap)),e.thicknessMap!==void 0&&(r.thicknessMap=n(e.thicknessMap)),e.anisotropyMap!==void 0&&(r.anisotropyMap=n(e.anisotropyMap)),e.sheenColorMap!==void 0&&(r.sheenColorMap=n(e.sheenColorMap)),e.sheenRoughnessMap!==void 0&&(r.sheenRoughnessMap=n(e.sheenRoughnessMap)),r}setTextures(e){return this.textures=e,this}static createMaterialFromType(e){const t={ShadowMaterial:Tv,SpriteMaterial:ef,RawShaderMaterial:Ev,ShaderMaterial:Vn,PointsMaterial:nf,MeshPhysicalMaterial:Cv,MeshStandardMaterial:uf,MeshPhongMaterial:Rv,MeshToonMaterial:Iv,MeshNormalMaterial:Lv,MeshLambertMaterial:Pv,MeshDepthMaterial:Kd,MeshDistanceMaterial:Qd,MeshBasicMaterial:sr,MeshMatcapMaterial:Dv,LineDashedMaterial:Nv,LineBasicMaterial:an,Material:Jt};return new t[e]}}class pd{static decodeText(e){if(console.warn("THREE.LoaderUtils: decodeText() has been deprecated with r165 and will be removed with r175. Use TextDecoder instead."),typeof TextDecoder<"u")return new TextDecoder().decode(e);let t="";for(let n=0,r=e.length;n<r;n++)t+=String.fromCharCode(e[n]);try{return decodeURIComponent(escape(t))}catch{return t}}static extractUrlBase(e){const t=e.lastIndexOf("/");return t===-1?"./":e.slice(0,t+1)}static resolveURL(e,t){return typeof e!="string"||e===""?"":(/^https?:\/\//i.test(t)&&/^\//.test(e)&&(t=t.replace(/(^https?:\/\/[^\/]+).*/i,"$1")),/^(https?:)?\/\//i.test(e)||/^data:.*,.*$/i.test(e)||/^blob:.*$/i.test(e)?e:t+e)}}class $v extends $e{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){const e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}}class jv extends pn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Pi(s.manager);a.setPath(s.path),a.setRequestHeader(s.requestHeader),a.setWithCredentials(s.withCredentials),a.load(e,function(o){try{t(s.parse(JSON.parse(o)))}catch(l){r?r(l):console.error(l),s.manager.itemError(e)}},n,r)}parse(e){const t={},n={};function r(f,p){if(t[p]!==void 0)return t[p];const g=f.interleavedBuffers[p],m=s(f,g.buffer),y=Fs(g.type,m),x=new au(y,g.stride);return x.uuid=g.uuid,t[p]=x,x}function s(f,p){if(n[p]!==void 0)return n[p];const g=f.arrayBuffers[p],m=new Uint32Array(g).buffer;return n[p]=m,m}const a=e.isInstancedBufferGeometry?new $v:new $e,o=e.data.index;if(o!==void 0){const f=Fs(o.type,o.array);a.setIndex(new ut(f,1))}const l=e.data.attributes;for(const f in l){const p=l[f];let v;if(p.isInterleavedBufferAttribute){const g=r(e.data,p.data);v=new rs(g,p.itemSize,p.offset,p.normalized)}else{const g=Fs(p.type,p.array),m=p.isInstancedBufferAttribute?la:ut;v=new m(g,p.itemSize,p.normalized)}p.name!==void 0&&(v.name=p.name),p.usage!==void 0&&v.setUsage(p.usage),a.setAttribute(f,v)}const c=e.data.morphAttributes;if(c)for(const f in c){const p=c[f],v=[];for(let g=0,m=p.length;g<m;g++){const y=p[g];let x;if(y.isInterleavedBufferAttribute){const _=r(e.data,y.data);x=new rs(_,y.itemSize,y.offset,y.normalized)}else{const _=Fs(y.type,y.array);x=new ut(_,y.itemSize,y.normalized)}y.name!==void 0&&(x.name=y.name),v.push(x)}a.morphAttributes[f]=v}e.data.morphTargetsRelative&&(a.morphTargetsRelative=!0);const h=e.data.groups||e.data.drawcalls||e.data.offsets;if(h!==void 0)for(let f=0,p=h.length;f!==p;++f){const v=h[f];a.addGroup(v.start,v.count,v.materialIndex)}const d=e.data.boundingSphere;if(d!==void 0){const f=new E;d.center!==void 0&&f.fromArray(d.center),a.boundingSphere=new $t(f,d.radius)}return e.name&&(a.name=e.name),e.userData&&(a.userData=e.userData),a}}class sT extends pn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=this.path===""?pd.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||a;const o=new Pi(this.manager);o.setPath(this.path),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(e,function(l){let c=null;try{c=JSON.parse(l)}catch(h){r!==void 0&&r(h),console.error("THREE:ObjectLoader: Can't parse "+e+".",h.message);return}const u=c.metadata;if(u===void 0||u.type===void 0||u.type.toLowerCase()==="geometry"){r!==void 0&&r(new Error("THREE.ObjectLoader: Can't load "+e)),console.error("THREE.ObjectLoader: Can't load "+e);return}s.parse(c,t)},n,r)}async loadAsync(e,t){const n=this,r=this.path===""?pd.extractUrlBase(e):this.path;this.resourcePath=this.resourcePath||r;const s=new Pi(this.manager);s.setPath(this.path),s.setRequestHeader(this.requestHeader),s.setWithCredentials(this.withCredentials);const a=await s.loadAsync(e,t),o=JSON.parse(a),l=o.metadata;if(l===void 0||l.type===void 0||l.type.toLowerCase()==="geometry")throw new Error("THREE.ObjectLoader: Can't load "+e);return await n.parseAsync(o)}parse(e,t){const n=this.parseAnimations(e.animations),r=this.parseShapes(e.shapes),s=this.parseGeometries(e.geometries,r),a=this.parseImages(e.images,function(){t!==void 0&&t(c)}),o=this.parseTextures(e.textures,a),l=this.parseMaterials(e.materials,o),c=this.parseObject(e.object,s,l,o,n),u=this.parseSkeletons(e.skeletons,c);if(this.bindSkeletons(c,u),t!==void 0){let h=!1;for(const d in a)if(a[d].data instanceof HTMLImageElement){h=!0;break}h===!1&&t(c)}return c}async parseAsync(e){const t=this.parseAnimations(e.animations),n=this.parseShapes(e.shapes),r=this.parseGeometries(e.geometries,n),s=await this.parseImagesAsync(e.images),a=this.parseTextures(e.textures,s),o=this.parseMaterials(e.materials,a),l=this.parseObject(e.object,r,o,a,t),c=this.parseSkeletons(e.skeletons,l);return this.bindSkeletons(l,c),l}parseShapes(e){const t={};if(e!==void 0)for(let n=0,r=e.length;n<r;n++){const s=new Jr().fromJSON(e[n]);t[s.uuid]=s}return t}parseSkeletons(e,t){const n={},r={};if(t.traverse(function(s){s.isBone&&(r[s.uuid]=s)}),e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=new ou().fromJSON(e[s],r);n[o.uuid]=o}return n}parseGeometries(e,t){const n={};if(e!==void 0){const r=new jv;for(let s=0,a=e.length;s<a;s++){let o;const l=e[s];switch(l.type){case"BufferGeometry":case"InstancedBufferGeometry":o=r.parse(l);break;default:l.type in jp?o=jp[l.type].fromJSON(l,t):console.warn(`THREE.ObjectLoader: Unsupported geometry type "${l.type}"`)}o.uuid=l.uuid,l.name!==void 0&&(o.name=l.name),l.userData!==void 0&&(o.userData=l.userData),n[l.uuid]=o}}return n}parseMaterials(e,t){const n={},r={};if(e!==void 0){const s=new wu;s.setTextures(t);for(let a=0,o=e.length;a<o;a++){const l=e[a];n[l.uuid]===void 0&&(n[l.uuid]=s.parse(l)),r[l.uuid]=n[l.uuid]}}return r}parseAnimations(e){const t={};if(e!==void 0)for(let n=0;n<e.length;n++){const r=e[n],s=co.parse(r);t[s.uuid]=s}return t}parseImages(e,t){const n=this,r={};let s;function a(l){return n.manager.itemStart(l),s.load(l,function(){n.manager.itemEnd(l)},void 0,function(){n.manager.itemError(l),n.manager.itemEnd(l)})}function o(l){if(typeof l=="string"){const c=l,u=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(c)?c:n.resourcePath+c;return a(u)}else return l.data?{data:Fs(l.type,l.data),width:l.width,height:l.height}:null}if(e!==void 0&&e.length>0){const l=new pf(t);s=new uo(l),s.setCrossOrigin(this.crossOrigin);for(let c=0,u=e.length;c<u;c++){const h=e[c],d=h.url;if(Array.isArray(d)){const f=[];for(let p=0,v=d.length;p<v;p++){const g=d[p],m=o(g);m!==null&&(m instanceof HTMLImageElement?f.push(m):f.push(new Ti(m.data,m.width,m.height)))}r[h.uuid]=new Lr(f)}else{const f=o(h.url);r[h.uuid]=new Lr(f)}}}return r}async parseImagesAsync(e){const t=this,n={};let r;async function s(a){if(typeof a=="string"){const o=a,l=/^(\/\/)|([a-z]+:(\/\/)?)/i.test(o)?o:t.resourcePath+o;return await r.loadAsync(l)}else return a.data?{data:Fs(a.type,a.data),width:a.width,height:a.height}:null}if(e!==void 0&&e.length>0){r=new uo(this.manager),r.setCrossOrigin(this.crossOrigin);for(let a=0,o=e.length;a<o;a++){const l=e[a],c=l.url;if(Array.isArray(c)){const u=[];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=await s(f);p!==null&&(p instanceof HTMLImageElement?u.push(p):u.push(new Ti(p.data,p.width,p.height)))}n[l.uuid]=new Lr(u)}else{const u=await s(l.url);n[l.uuid]=new Lr(u)}}}return n}parseTextures(e,t){function n(s,a){return typeof s=="number"?s:(console.warn("THREE.ObjectLoader.parseTexture: Constant should be in numeric form.",s),a[s])}const r={};if(e!==void 0)for(let s=0,a=e.length;s<a;s++){const o=e[s];o.image===void 0&&console.warn('THREE.ObjectLoader: No "image" specified for',o.uuid),t[o.image]===void 0&&console.warn("THREE.ObjectLoader: Undefined image",o.image);const l=t[o.image],c=l.data;let u;Array.isArray(c)?(u=new Bo,c.length===6&&(u.needsUpdate=!0)):(c&&c.data?u=new Ti:u=new bt,c&&(u.needsUpdate=!0)),u.source=l,u.uuid=o.uuid,o.name!==void 0&&(u.name=o.name),o.mapping!==void 0&&(u.mapping=n(o.mapping,aT)),o.channel!==void 0&&(u.channel=o.channel),o.offset!==void 0&&u.offset.fromArray(o.offset),o.repeat!==void 0&&u.repeat.fromArray(o.repeat),o.center!==void 0&&u.center.fromArray(o.center),o.rotation!==void 0&&(u.rotation=o.rotation),o.wrap!==void 0&&(u.wrapS=n(o.wrap[0],em),u.wrapT=n(o.wrap[1],em)),o.format!==void 0&&(u.format=o.format),o.internalFormat!==void 0&&(u.internalFormat=o.internalFormat),o.type!==void 0&&(u.type=o.type),o.colorSpace!==void 0&&(u.colorSpace=o.colorSpace),o.minFilter!==void 0&&(u.minFilter=n(o.minFilter,tm)),o.magFilter!==void 0&&(u.magFilter=n(o.magFilter,tm)),o.anisotropy!==void 0&&(u.anisotropy=o.anisotropy),o.flipY!==void 0&&(u.flipY=o.flipY),o.generateMipmaps!==void 0&&(u.generateMipmaps=o.generateMipmaps),o.premultiplyAlpha!==void 0&&(u.premultiplyAlpha=o.premultiplyAlpha),o.unpackAlignment!==void 0&&(u.unpackAlignment=o.unpackAlignment),o.compareFunction!==void 0&&(u.compareFunction=o.compareFunction),o.userData!==void 0&&(u.userData=o.userData),r[o.uuid]=u}return r}parseObject(e,t,n,r,s){let a;function o(d){return t[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined geometry",d),t[d]}function l(d){if(d!==void 0){if(Array.isArray(d)){const f=[];for(let p=0,v=d.length;p<v;p++){const g=d[p];n[g]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",g),f.push(n[g])}return f}return n[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined material",d),n[d]}}function c(d){return r[d]===void 0&&console.warn("THREE.ObjectLoader: Undefined texture",d),r[d]}let u,h;switch(e.type){case"Scene":a=new ov,e.background!==void 0&&(Number.isInteger(e.background)?a.background=new ye(e.background):a.background=c(e.background)),e.environment!==void 0&&(a.environment=c(e.environment)),e.fog!==void 0&&(e.fog.type==="Fog"?a.fog=new su(e.fog.color,e.fog.near,e.fog.far):e.fog.type==="FogExp2"&&(a.fog=new ru(e.fog.color,e.fog.density)),e.fog.name!==""&&(a.fog.name=e.fog.name)),e.backgroundBlurriness!==void 0&&(a.backgroundBlurriness=e.backgroundBlurriness),e.backgroundIntensity!==void 0&&(a.backgroundIntensity=e.backgroundIntensity),e.backgroundRotation!==void 0&&a.backgroundRotation.fromArray(e.backgroundRotation),e.environmentIntensity!==void 0&&(a.environmentIntensity=e.environmentIntensity),e.environmentRotation!==void 0&&a.environmentRotation.fromArray(e.environmentRotation);break;case"PerspectiveCamera":a=new Xt(e.fov,e.aspect,e.near,e.far),e.focus!==void 0&&(a.focus=e.focus),e.zoom!==void 0&&(a.zoom=e.zoom),e.filmGauge!==void 0&&(a.filmGauge=e.filmGauge),e.filmOffset!==void 0&&(a.filmOffset=e.filmOffset),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"OrthographicCamera":a=new nu(e.left,e.right,e.top,e.bottom,e.near,e.far),e.zoom!==void 0&&(a.zoom=e.zoom),e.view!==void 0&&(a.view=Object.assign({},e.view));break;case"AmbientLight":a=new Xv(e.color,e.intensity);break;case"DirectionalLight":a=new Wv(e.color,e.intensity);break;case"PointLight":a=new Hv(e.color,e.intensity,e.distance,e.decay);break;case"RectAreaLight":a=new qv(e.color,e.intensity,e.width,e.height);break;case"SpotLight":a=new Gv(e.color,e.intensity,e.distance,e.angle,e.penumbra,e.decay);break;case"HemisphereLight":a=new Vv(e.color,e.groundColor,e.intensity);break;case"LightProbe":a=new Zv().fromJSON(e);break;case"SkinnedMesh":u=o(e.geometry),h=l(e.material),a=new hv(u,h),e.bindMode!==void 0&&(a.bindMode=e.bindMode),e.bindMatrix!==void 0&&a.bindMatrix.fromArray(e.bindMatrix),e.skeleton!==void 0&&(a.skeleton=e.skeleton);break;case"Mesh":u=o(e.geometry),h=l(e.material),a=new Pt(u,h);break;case"InstancedMesh":u=o(e.geometry),h=l(e.material);const d=e.count,f=e.instanceMatrix,p=e.instanceColor;a=new dv(u,h,d),a.instanceMatrix=new la(new Float32Array(f.array),16),p!==void 0&&(a.instanceColor=new la(new Float32Array(p.array),p.itemSize));break;case"BatchedMesh":u=o(e.geometry),h=l(e.material),a=new fv(e.maxGeometryCount,e.maxVertexCount,e.maxIndexCount,h),a.geometry=u,a.perObjectFrustumCulled=e.perObjectFrustumCulled,a.sortObjects=e.sortObjects,a._drawRanges=e.drawRanges,a._reservedRanges=e.reservedRanges,a._visibility=e.visibility,a._active=e.active,a._bounds=e.bounds.map(v=>{const g=new sn;g.min.fromArray(v.boxMin),g.max.fromArray(v.boxMax);const m=new $t;return m.radius=v.sphereRadius,m.center.fromArray(v.sphereCenter),{boxInitialized:v.boxInitialized,box:g,sphereInitialized:v.sphereInitialized,sphere:m}}),a._maxGeometryCount=e.maxGeometryCount,a._maxVertexCount=e.maxVertexCount,a._maxIndexCount=e.maxIndexCount,a._geometryInitialized=e.geometryInitialized,a._geometryCount=e.geometryCount,a._matricesTexture=c(e.matricesTexture.uuid),e.colorsTexture!==void 0&&(a._colorsTexture=c(e.colorsTexture.uuid));break;case"LOD":a=new uv;break;case"Line":a=new nr(o(e.geometry),l(e.material));break;case"LineLoop":a=new pv(o(e.geometry),l(e.material));break;case"LineSegments":a=new ii(o(e.geometry),l(e.material));break;case"PointCloud":case"Points":a=new mv(o(e.geometry),l(e.material));break;case"Sprite":a=new cv(l(e.material));break;case"Group":a=new Bs;break;case"Bone":a=new tf;break;default:a=new it}if(a.uuid=e.uuid,e.name!==void 0&&(a.name=e.name),e.matrix!==void 0?(a.matrix.fromArray(e.matrix),e.matrixAutoUpdate!==void 0&&(a.matrixAutoUpdate=e.matrixAutoUpdate),a.matrixAutoUpdate&&a.matrix.decompose(a.position,a.quaternion,a.scale)):(e.position!==void 0&&a.position.fromArray(e.position),e.rotation!==void 0&&a.rotation.fromArray(e.rotation),e.quaternion!==void 0&&a.quaternion.fromArray(e.quaternion),e.scale!==void 0&&a.scale.fromArray(e.scale)),e.up!==void 0&&a.up.fromArray(e.up),e.castShadow!==void 0&&(a.castShadow=e.castShadow),e.receiveShadow!==void 0&&(a.receiveShadow=e.receiveShadow),e.shadow&&(e.shadow.bias!==void 0&&(a.shadow.bias=e.shadow.bias),e.shadow.normalBias!==void 0&&(a.shadow.normalBias=e.shadow.normalBias),e.shadow.radius!==void 0&&(a.shadow.radius=e.shadow.radius),e.shadow.mapSize!==void 0&&a.shadow.mapSize.fromArray(e.shadow.mapSize),e.shadow.camera!==void 0&&(a.shadow.camera=this.parseObject(e.shadow.camera))),e.visible!==void 0&&(a.visible=e.visible),e.frustumCulled!==void 0&&(a.frustumCulled=e.frustumCulled),e.renderOrder!==void 0&&(a.renderOrder=e.renderOrder),e.userData!==void 0&&(a.userData=e.userData),e.layers!==void 0&&(a.layers.mask=e.layers),e.children!==void 0){const d=e.children;for(let f=0;f<d.length;f++)a.add(this.parseObject(d[f],t,n,r,s))}if(e.animations!==void 0){const d=e.animations;for(let f=0;f<d.length;f++){const p=d[f];a.animations.push(s[p])}}if(e.type==="LOD"){e.autoUpdate!==void 0&&(a.autoUpdate=e.autoUpdate);const d=e.levels;for(let f=0;f<d.length;f++){const p=d[f],v=a.getObjectByProperty("uuid",p.object);v!==void 0&&a.addLevel(v,p.distance,p.hysteresis)}}return a}bindSkeletons(e,t){Object.keys(t).length!==0&&e.traverse(function(n){if(n.isSkinnedMesh===!0&&n.skeleton!==void 0){const r=t[n.skeleton];r===void 0?console.warn("THREE.ObjectLoader: No skeleton found with UUID:",n.skeleton):n.bind(r,n.bindMatrix)}})}}const aT={UVMapping:jc,CubeReflectionMapping:Ii,CubeRefractionMapping:tr,EquirectangularReflectionMapping:Wa,EquirectangularRefractionMapping:Xa,CubeUVReflectionMapping:da},em={RepeatWrapping:qa,ClampToEdgeWrapping:Ln,MirroredRepeatWrapping:Ya},tm={NearestFilter:Gt,NearestMipmapNearestFilter:Ud,NearestMipmapLinearFilter:Os,LinearFilter:Lt,LinearMipmapNearestFilter:za,LinearMipmapLinearFilter:Jn};class oT extends pn{constructor(e){super(e),this.isImageBitmapLoader=!0,typeof createImageBitmap>"u"&&console.warn("THREE.ImageBitmapLoader: createImageBitmap() not supported."),typeof fetch>"u"&&console.warn("THREE.ImageBitmapLoader: fetch() not supported."),this.options={premultiplyAlpha:"none"}}setOptions(e){return this.options=e,this}load(e,t,n,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,a=Mi.get(e);if(a!==void 0){if(s.manager.itemStart(e),a.then){a.then(c=>{t&&t(c),s.manager.itemEnd(e)}).catch(c=>{r&&r(c)});return}return setTimeout(function(){t&&t(a),s.manager.itemEnd(e)},0),a}const o={};o.credentials=this.crossOrigin==="anonymous"?"same-origin":"include",o.headers=this.requestHeader;const l=fetch(e,o).then(function(c){return c.blob()}).then(function(c){return createImageBitmap(c,Object.assign(s.options,{colorSpaceConversion:"none"}))}).then(function(c){return Mi.add(e,c),t&&t(c),s.manager.itemEnd(e),c}).catch(function(c){r&&r(c),Mi.remove(e),s.manager.itemError(e),s.manager.itemEnd(e)});Mi.add(e,l),s.manager.itemStart(e)}}let kl;class gf{static getContext(){return kl===void 0&&(kl=new(window.AudioContext||window.webkitAudioContext)),kl}static setContext(e){kl=e}}class lT extends pn{constructor(e){super(e)}load(e,t,n,r){const s=this,a=new Pi(this.manager);a.setResponseType("arraybuffer"),a.setPath(this.path),a.setRequestHeader(this.requestHeader),a.setWithCredentials(this.withCredentials),a.load(e,function(l){try{const c=l.slice(0);gf.getContext().decodeAudioData(c,function(h){t(h)}).catch(o)}catch(c){o(c)}},n,r);function o(l){r?r(l):console.error(l),s.manager.itemError(e)}}}const nm=new ze,im=new ze,yr=new ze;class cT{constructor(){this.type="StereoCamera",this.aspect=1,this.eyeSep=.064,this.cameraL=new Xt,this.cameraL.layers.enable(1),this.cameraL.matrixAutoUpdate=!1,this.cameraR=new Xt,this.cameraR.layers.enable(2),this.cameraR.matrixAutoUpdate=!1,this._cache={focus:null,fov:null,aspect:null,near:null,far:null,zoom:null,eyeSep:null}}update(e){const t=this._cache;if(t.focus!==e.focus||t.fov!==e.fov||t.aspect!==e.aspect*this.aspect||t.near!==e.near||t.far!==e.far||t.zoom!==e.zoom||t.eyeSep!==this.eyeSep){t.focus=e.focus,t.fov=e.fov,t.aspect=e.aspect*this.aspect,t.near=e.near,t.far=e.far,t.zoom=e.zoom,t.eyeSep=this.eyeSep,yr.copy(e.projectionMatrix);const r=t.eyeSep/2,s=r*t.near/t.focus,a=t.near*Math.tan(jr*t.fov*.5)/t.zoom;let o,l;im.elements[12]=-r,nm.elements[12]=r,o=-a*t.aspect+s,l=a*t.aspect+s,yr.elements[0]=2*t.near/(l-o),yr.elements[8]=(l+o)/(l-o),this.cameraL.projectionMatrix.copy(yr),o=-a*t.aspect-s,l=a*t.aspect-s,yr.elements[0]=2*t.near/(l-o),yr.elements[8]=(l+o)/(l-o),this.cameraR.projectionMatrix.copy(yr)}this.cameraL.matrixWorld.copy(e.matrixWorld).multiply(im),this.cameraR.matrixWorld.copy(e.matrixWorld).multiply(nm)}}class Jv{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=rm(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const t=rm();e=(t-this.oldTime)/1e3,this.oldTime=t,this.elapsedTime+=e}return e}}function rm(){return(typeof performance>"u"?Date:performance).now()}const _r=new E,sm=new fn,uT=new E,Mr=new E;class hT extends it{constructor(){super(),this.type="AudioListener",this.context=gf.getContext(),this.gain=this.context.createGain(),this.gain.connect(this.context.destination),this.filter=null,this.timeDelta=0,this._clock=new Jv}getInput(){return this.gain}removeFilter(){return this.filter!==null&&(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination),this.gain.connect(this.context.destination),this.filter=null),this}getFilter(){return this.filter}setFilter(e){return this.filter!==null?(this.gain.disconnect(this.filter),this.filter.disconnect(this.context.destination)):this.gain.disconnect(this.context.destination),this.filter=e,this.gain.connect(this.filter),this.filter.connect(this.context.destination),this}getMasterVolume(){return this.gain.gain.value}setMasterVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}updateMatrixWorld(e){super.updateMatrixWorld(e);const t=this.context.listener,n=this.up;if(this.timeDelta=this._clock.getDelta(),this.matrixWorld.decompose(_r,sm,uT),Mr.set(0,0,-1).applyQuaternion(sm),t.positionX){const r=this.context.currentTime+this.timeDelta;t.positionX.linearRampToValueAtTime(_r.x,r),t.positionY.linearRampToValueAtTime(_r.y,r),t.positionZ.linearRampToValueAtTime(_r.z,r),t.forwardX.linearRampToValueAtTime(Mr.x,r),t.forwardY.linearRampToValueAtTime(Mr.y,r),t.forwardZ.linearRampToValueAtTime(Mr.z,r),t.upX.linearRampToValueAtTime(n.x,r),t.upY.linearRampToValueAtTime(n.y,r),t.upZ.linearRampToValueAtTime(n.z,r)}else t.setPosition(_r.x,_r.y,_r.z),t.setOrientation(Mr.x,Mr.y,Mr.z,n.x,n.y,n.z)}}class Kv extends it{constructor(e){super(),this.type="Audio",this.listener=e,this.context=e.context,this.gain=this.context.createGain(),this.gain.connect(e.getInput()),this.autoplay=!1,this.buffer=null,this.detune=0,this.loop=!1,this.loopStart=0,this.loopEnd=0,this.offset=0,this.duration=void 0,this.playbackRate=1,this.isPlaying=!1,this.hasPlaybackControl=!0,this.source=null,this.sourceType="empty",this._startedAt=0,this._progress=0,this._connected=!1,this.filters=[]}getOutput(){return this.gain}setNodeSource(e){return this.hasPlaybackControl=!1,this.sourceType="audioNode",this.source=e,this.connect(),this}setMediaElementSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaNode",this.source=this.context.createMediaElementSource(e),this.connect(),this}setMediaStreamSource(e){return this.hasPlaybackControl=!1,this.sourceType="mediaStreamNode",this.source=this.context.createMediaStreamSource(e),this.connect(),this}setBuffer(e){return this.buffer=e,this.sourceType="buffer",this.autoplay&&this.play(),this}play(e=0){if(this.isPlaying===!0){console.warn("THREE.Audio: Audio is already playing.");return}if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}this._startedAt=this.context.currentTime+e;const t=this.context.createBufferSource();return t.buffer=this.buffer,t.loop=this.loop,t.loopStart=this.loopStart,t.loopEnd=this.loopEnd,t.onended=this.onEnded.bind(this),t.start(this._startedAt,this._progress+this.offset,this.duration),this.isPlaying=!0,this.source=t,this.setDetune(this.detune),this.setPlaybackRate(this.playbackRate),this.connect()}pause(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.isPlaying===!0&&(this._progress+=Math.max(this.context.currentTime-this._startedAt,0)*this.playbackRate,this.loop===!0&&(this._progress=this._progress%(this.duration||this.buffer.duration)),this.source.stop(),this.source.onended=null,this.isPlaying=!1),this}stop(){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this._progress=0,this.source!==null&&(this.source.stop(),this.source.onended=null),this.isPlaying=!1,this}connect(){if(this.filters.length>0){this.source.connect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].connect(this.filters[e]);this.filters[this.filters.length-1].connect(this.getOutput())}else this.source.connect(this.getOutput());return this._connected=!0,this}disconnect(){if(this._connected!==!1){if(this.filters.length>0){this.source.disconnect(this.filters[0]);for(let e=1,t=this.filters.length;e<t;e++)this.filters[e-1].disconnect(this.filters[e]);this.filters[this.filters.length-1].disconnect(this.getOutput())}else this.source.disconnect(this.getOutput());return this._connected=!1,this}}getFilters(){return this.filters}setFilters(e){return e||(e=[]),this._connected===!0?(this.disconnect(),this.filters=e.slice(),this.connect()):this.filters=e.slice(),this}setDetune(e){return this.detune=e,this.isPlaying===!0&&this.source.detune!==void 0&&this.source.detune.setTargetAtTime(this.detune,this.context.currentTime,.01),this}getDetune(){return this.detune}getFilter(){return this.getFilters()[0]}setFilter(e){return this.setFilters(e?[e]:[])}setPlaybackRate(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.playbackRate=e,this.isPlaying===!0&&this.source.playbackRate.setTargetAtTime(this.playbackRate,this.context.currentTime,.01),this}getPlaybackRate(){return this.playbackRate}onEnded(){this.isPlaying=!1}getLoop(){return this.hasPlaybackControl===!1?(console.warn("THREE.Audio: this Audio has no playback control."),!1):this.loop}setLoop(e){if(this.hasPlaybackControl===!1){console.warn("THREE.Audio: this Audio has no playback control.");return}return this.loop=e,this.isPlaying===!0&&(this.source.loop=this.loop),this}setLoopStart(e){return this.loopStart=e,this}setLoopEnd(e){return this.loopEnd=e,this}getVolume(){return this.gain.gain.value}setVolume(e){return this.gain.gain.setTargetAtTime(e,this.context.currentTime,.01),this}}const Sr=new E,am=new fn,dT=new E,wr=new E;class fT extends Kv{constructor(e){super(e),this.panner=this.context.createPanner(),this.panner.panningModel="HRTF",this.panner.connect(this.gain)}connect(){super.connect(),this.panner.connect(this.gain)}disconnect(){super.disconnect(),this.panner.disconnect(this.gain)}getOutput(){return this.panner}getRefDistance(){return this.panner.refDistance}setRefDistance(e){return this.panner.refDistance=e,this}getRolloffFactor(){return this.panner.rolloffFactor}setRolloffFactor(e){return this.panner.rolloffFactor=e,this}getDistanceModel(){return this.panner.distanceModel}setDistanceModel(e){return this.panner.distanceModel=e,this}getMaxDistance(){return this.panner.maxDistance}setMaxDistance(e){return this.panner.maxDistance=e,this}setDirectionalCone(e,t,n){return this.panner.coneInnerAngle=e,this.panner.coneOuterAngle=t,this.panner.coneOuterGain=n,this}updateMatrixWorld(e){if(super.updateMatrixWorld(e),this.hasPlaybackControl===!0&&this.isPlaying===!1)return;this.matrixWorld.decompose(Sr,am,dT),wr.set(0,0,1).applyQuaternion(am);const t=this.panner;if(t.positionX){const n=this.context.currentTime+this.listener.timeDelta;t.positionX.linearRampToValueAtTime(Sr.x,n),t.positionY.linearRampToValueAtTime(Sr.y,n),t.positionZ.linearRampToValueAtTime(Sr.z,n),t.orientationX.linearRampToValueAtTime(wr.x,n),t.orientationY.linearRampToValueAtTime(wr.y,n),t.orientationZ.linearRampToValueAtTime(wr.z,n)}else t.setPosition(Sr.x,Sr.y,Sr.z),t.setOrientation(wr.x,wr.y,wr.z)}}class pT{constructor(e,t=2048){this.analyser=e.context.createAnalyser(),this.analyser.fftSize=t,this.data=new Uint8Array(this.analyser.frequencyBinCount),e.getOutput().connect(this.analyser)}getFrequencyData(){return this.analyser.getByteFrequencyData(this.data),this.data}getAverageFrequency(){let e=0;const t=this.getFrequencyData();for(let n=0;n<t.length;n++)e+=t[n];return e/t.length}}class Qv{constructor(e,t,n){this.binding=e,this.valueSize=n;let r,s,a;switch(t){case"quaternion":r=this._slerp,s=this._slerpAdditive,a=this._setAdditiveIdentityQuaternion,this.buffer=new Float64Array(n*6),this._workIndex=5;break;case"string":case"bool":r=this._select,s=this._select,a=this._setAdditiveIdentityOther,this.buffer=new Array(n*5);break;default:r=this._lerp,s=this._lerpAdditive,a=this._setAdditiveIdentityNumeric,this.buffer=new Float64Array(n*5)}this._mixBufferRegion=r,this._mixBufferRegionAdditive=s,this._setIdentity=a,this._origIndex=3,this._addIndex=4,this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,this.useCount=0,this.referenceCount=0}accumulate(e,t){const n=this.buffer,r=this.valueSize,s=e*r+r;let a=this.cumulativeWeight;if(a===0){for(let o=0;o!==r;++o)n[s+o]=n[o];a=t}else{a+=t;const o=t/a;this._mixBufferRegion(n,s,0,o,r)}this.cumulativeWeight=a}accumulateAdditive(e){const t=this.buffer,n=this.valueSize,r=n*this._addIndex;this.cumulativeWeightAdditive===0&&this._setIdentity(),this._mixBufferRegionAdditive(t,r,0,e,n),this.cumulativeWeightAdditive+=e}apply(e){const t=this.valueSize,n=this.buffer,r=e*t+t,s=this.cumulativeWeight,a=this.cumulativeWeightAdditive,o=this.binding;if(this.cumulativeWeight=0,this.cumulativeWeightAdditive=0,s<1){const l=t*this._origIndex;this._mixBufferRegion(n,r,l,1-s,t)}a>0&&this._mixBufferRegionAdditive(n,r,this._addIndex*t,1,t);for(let l=t,c=t+t;l!==c;++l)if(n[l]!==n[l+t]){o.setValue(n,r);break}}saveOriginalState(){const e=this.binding,t=this.buffer,n=this.valueSize,r=n*this._origIndex;e.getValue(t,r);for(let s=n,a=r;s!==a;++s)t[s]=t[r+s%n];this._setIdentity(),this.cumulativeWeight=0,this.cumulativeWeightAdditive=0}restoreOriginalState(){const e=this.valueSize*3;this.binding.setValue(this.buffer,e)}_setAdditiveIdentityNumeric(){const e=this._addIndex*this.valueSize,t=e+this.valueSize;for(let n=e;n<t;n++)this.buffer[n]=0}_setAdditiveIdentityQuaternion(){this._setAdditiveIdentityNumeric(),this.buffer[this._addIndex*this.valueSize+3]=1}_setAdditiveIdentityOther(){const e=this._origIndex*this.valueSize,t=this._addIndex*this.valueSize;for(let n=0;n<this.valueSize;n++)this.buffer[t+n]=this.buffer[e+n]}_select(e,t,n,r,s){if(r>=.5)for(let a=0;a!==s;++a)e[t+a]=e[n+a]}_slerp(e,t,n,r){fn.slerpFlat(e,t,e,t,e,n,r)}_slerpAdditive(e,t,n,r,s){const a=this._workIndex*s;fn.multiplyQuaternionsFlat(e,a,e,t,e,n),fn.slerpFlat(e,t,e,t,e,a,r)}_lerp(e,t,n,r,s){const a=1-r;for(let o=0;o!==s;++o){const l=t+o;e[l]=e[l]*a+e[n+o]*r}}_lerpAdditive(e,t,n,r,s){for(let a=0;a!==s;++a){const o=t+a;e[o]=e[o]+e[n+a]*r}}}const vf="\\[\\]\\.:\\/",mT=new RegExp("["+vf+"]","g"),xf="[^"+vf+"]",gT="[^"+vf.replace("\\.","")+"]",vT=/((?:WC+[\/:])*)/.source.replace("WC",xf),xT=/(WCOD+)?/.source.replace("WCOD",gT),yT=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",xf),_T=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",xf),MT=new RegExp("^"+vT+xT+yT+_T+"$"),ST=["material","materials","bones","map"];class wT{constructor(e,t,n){const r=n||tt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,r)}getValue(e,t){this.bind();const n=this._targetGroup.nCachedObjects_,r=this._bindings[n];r!==void 0&&r.getValue(e,t)}setValue(e,t){const n=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=n.length;r!==s;++r)n[r].setValue(e,t)}bind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].bind()}unbind(){const e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,n=e.length;t!==n;++t)e[t].unbind()}}class tt{constructor(e,t,n){this.path=t,this.parsedPath=n||tt.parseTrackName(t),this.node=tt.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,n){return e&&e.isAnimationObjectGroup?new tt.Composite(e,t,n):new tt(e,t,n)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(mT,"")}static parseTrackName(e){const t=MT.exec(e);if(t===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const n={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},r=n.nodeName&&n.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=n.nodeName.substring(r+1);ST.indexOf(s)!==-1&&(n.nodeName=n.nodeName.substring(0,r),n.objectName=s)}if(n.propertyName===null||n.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return n}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){const n=e.skeleton.getBoneByName(t);if(n!==void 0)return n}if(e.children){const n=function(s){for(let a=0;a<s.length;a++){const o=s[a];if(o.name===t||o.uuid===t)return o;const l=n(o.children);if(l)return l}return null},r=n(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)e[t++]=n[r]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++]}_setValue_array_setNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){const n=this.resolvedProperty;for(let r=0,s=n.length;r!==s;++r)n[r]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node;const t=this.parsedPath,n=t.objectName,r=t.propertyName;let s=t.propertyIndex;if(e||(e=tt.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.warn("THREE.PropertyBinding: No target node found for track: "+this.path+".");return}if(n){let c=t.objectIndex;switch(n){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[n]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[n]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const a=e[r];if(a===void 0){const c=t.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?o=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=s}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}tt.Composite=wT;tt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};tt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};tt.prototype.GetterByBindingType=[tt.prototype._getValue_direct,tt.prototype._getValue_array,tt.prototype._getValue_arrayElement,tt.prototype._getValue_toArray];tt.prototype.SetterByBindingTypeAndVersioning=[[tt.prototype._setValue_direct,tt.prototype._setValue_direct_setNeedsUpdate,tt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_array,tt.prototype._setValue_array_setNeedsUpdate,tt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_arrayElement,tt.prototype._setValue_arrayElement_setNeedsUpdate,tt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[tt.prototype._setValue_fromArray,tt.prototype._setValue_fromArray_setNeedsUpdate,tt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class bT{constructor(){this.isAnimationObjectGroup=!0,this.uuid=Sn(),this._objects=Array.prototype.slice.call(arguments),this.nCachedObjects_=0;const e={};this._indicesByUUID=e;for(let n=0,r=arguments.length;n!==r;++n)e[arguments[n].uuid]=n;this._paths=[],this._parsedPaths=[],this._bindings=[],this._bindingsIndicesByPath={};const t=this;this.stats={objects:{get total(){return t._objects.length},get inUse(){return this.total-t.nCachedObjects_}},get bindingsPerObject(){return t._bindings.length}}}add(){const e=this._objects,t=this._indicesByUUID,n=this._paths,r=this._parsedPaths,s=this._bindings,a=s.length;let o,l=e.length,c=this.nCachedObjects_;for(let u=0,h=arguments.length;u!==h;++u){const d=arguments[u],f=d.uuid;let p=t[f];if(p===void 0){p=l++,t[f]=p,e.push(d);for(let v=0,g=a;v!==g;++v)s[v].push(new tt(d,n[v],r[v]))}else if(p<c){o=e[p];const v=--c,g=e[v];t[g.uuid]=p,e[p]=g,t[f]=v,e[v]=d;for(let m=0,y=a;m!==y;++m){const x=s[m],_=x[v];let L=x[p];x[p]=_,L===void 0&&(L=new tt(d,n[m],r[m])),x[v]=L}}else e[p]!==o&&console.error("THREE.AnimationObjectGroup: Different objects with the same UUID detected. Clean the caches or recreate your infrastructure when reloading scenes.")}this.nCachedObjects_=c}remove(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_;for(let a=0,o=arguments.length;a!==o;++a){const l=arguments[a],c=l.uuid,u=t[c];if(u!==void 0&&u>=s){const h=s++,d=e[h];t[d.uuid]=u,e[u]=d,t[c]=h,e[h]=l;for(let f=0,p=r;f!==p;++f){const v=n[f],g=v[h],m=v[u];v[u]=g,v[h]=m}}}this.nCachedObjects_=s}uncache(){const e=this._objects,t=this._indicesByUUID,n=this._bindings,r=n.length;let s=this.nCachedObjects_,a=e.length;for(let o=0,l=arguments.length;o!==l;++o){const c=arguments[o],u=c.uuid,h=t[u];if(h!==void 0)if(delete t[u],h<s){const d=--s,f=e[d],p=--a,v=e[p];t[f.uuid]=h,e[h]=f,t[v.uuid]=d,e[d]=v,e.pop();for(let g=0,m=r;g!==m;++g){const y=n[g],x=y[d],_=y[p];y[h]=x,y[d]=_,y.pop()}}else{const d=--a,f=e[d];d>0&&(t[f.uuid]=h),e[h]=f,e.pop();for(let p=0,v=r;p!==v;++p){const g=n[p];g[h]=g[d],g.pop()}}}this.nCachedObjects_=s}subscribe_(e,t){const n=this._bindingsIndicesByPath;let r=n[e];const s=this._bindings;if(r!==void 0)return s[r];const a=this._paths,o=this._parsedPaths,l=this._objects,c=l.length,u=this.nCachedObjects_,h=new Array(c);r=s.length,n[e]=r,a.push(e),o.push(t),s.push(h);for(let d=u,f=l.length;d!==f;++d){const p=l[d];h[d]=new tt(p,e,t)}return h}unsubscribe_(e){const t=this._bindingsIndicesByPath,n=t[e];if(n!==void 0){const r=this._paths,s=this._parsedPaths,a=this._bindings,o=a.length-1,l=a[o],c=e[o];t[c]=n,a[n]=l,a.pop(),s[n]=s[o],s.pop(),r[n]=r[o],r.pop()}}}class ex{constructor(e,t,n=null,r=t.blendMode){this._mixer=e,this._clip=t,this._localRoot=n,this.blendMode=r;const s=t.tracks,a=s.length,o=new Array(a),l={endingStart:Rr,endingEnd:Rr};for(let c=0;c!==a;++c){const u=s[c].createInterpolant(null);o[c]=u,u.settings=l}this._interpolantSettings=l,this._interpolants=o,this._propertyBindings=new Array(a),this._cacheIndex=null,this._byClipCacheIndex=null,this._timeScaleInterpolant=null,this._weightInterpolant=null,this.loop=P0,this._loopCount=-1,this._startTime=null,this.time=0,this.timeScale=1,this._effectiveTimeScale=1,this.weight=1,this._effectiveWeight=1,this.repetitions=1/0,this.paused=!1,this.enabled=!0,this.clampWhenFinished=!1,this.zeroSlopeAtStart=!0,this.zeroSlopeAtEnd=!0}play(){return this._mixer._activateAction(this),this}stop(){return this._mixer._deactivateAction(this),this.reset()}reset(){return this.paused=!1,this.enabled=!0,this.time=0,this._loopCount=-1,this._startTime=null,this.stopFading().stopWarping()}isRunning(){return this.enabled&&!this.paused&&this.timeScale!==0&&this._startTime===null&&this._mixer._isActiveAction(this)}isScheduled(){return this._mixer._isActiveAction(this)}startAt(e){return this._startTime=e,this}setLoop(e,t){return this.loop=e,this.repetitions=t,this}setEffectiveWeight(e){return this.weight=e,this._effectiveWeight=this.enabled?e:0,this.stopFading()}getEffectiveWeight(){return this._effectiveWeight}fadeIn(e){return this._scheduleFading(e,0,1)}fadeOut(e){return this._scheduleFading(e,1,0)}crossFadeFrom(e,t,n){if(e.fadeOut(t),this.fadeIn(t),n){const r=this._clip.duration,s=e._clip.duration,a=s/r,o=r/s;e.warp(1,a,t),this.warp(o,1,t)}return this}crossFadeTo(e,t,n){return e.crossFadeFrom(this,t,n)}stopFading(){const e=this._weightInterpolant;return e!==null&&(this._weightInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}setEffectiveTimeScale(e){return this.timeScale=e,this._effectiveTimeScale=this.paused?0:e,this.stopWarping()}getEffectiveTimeScale(){return this._effectiveTimeScale}setDuration(e){return this.timeScale=this._clip.duration/e,this.stopWarping()}syncWith(e){return this.time=e.time,this.timeScale=e.timeScale,this.stopWarping()}halt(e){return this.warp(this._effectiveTimeScale,0,e)}warp(e,t,n){const r=this._mixer,s=r.time,a=this.timeScale;let o=this._timeScaleInterpolant;o===null&&(o=r._lendControlInterpolant(),this._timeScaleInterpolant=o);const l=o.parameterPositions,c=o.sampleValues;return l[0]=s,l[1]=s+n,c[0]=e/a,c[1]=t/a,this}stopWarping(){const e=this._timeScaleInterpolant;return e!==null&&(this._timeScaleInterpolant=null,this._mixer._takeBackControlInterpolant(e)),this}getMixer(){return this._mixer}getClip(){return this._clip}getRoot(){return this._localRoot||this._mixer._root}_update(e,t,n,r){if(!this.enabled){this._updateWeight(e);return}const s=this._startTime;if(s!==null){const l=(e-s)*n;l<0||n===0?t=0:(this._startTime=null,t=n*l)}t*=this._updateTimeScale(e);const a=this._updateTime(t),o=this._updateWeight(e);if(o>0){const l=this._interpolants,c=this._propertyBindings;switch(this.blendMode){case Hd:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulateAdditive(o);break;case Jc:default:for(let u=0,h=l.length;u!==h;++u)l[u].evaluate(a),c[u].accumulate(r,o)}}}_updateWeight(e){let t=0;if(this.enabled){t=this.weight;const n=this._weightInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopFading(),r===0&&(this.enabled=!1))}}return this._effectiveWeight=t,t}_updateTimeScale(e){let t=0;if(!this.paused){t=this.timeScale;const n=this._timeScaleInterpolant;if(n!==null){const r=n.evaluate(e)[0];t*=r,e>n.parameterPositions[1]&&(this.stopWarping(),t===0?this.paused=!0:this.timeScale=t)}}return this._effectiveTimeScale=t,t}_updateTime(e){const t=this._clip.duration,n=this.loop;let r=this.time+e,s=this._loopCount;const a=n===D0;if(e===0)return s===-1?r:a&&(s&1)===1?t-r:r;if(n===L0){s===-1&&(this._loopCount=0,this._setEndings(!0,!0,!1));e:{if(r>=t)r=t;else if(r<0)r=0;else{this.time=r;break e}this.clampWhenFinished?this.paused=!0:this.enabled=!1,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e<0?-1:1})}}else{if(s===-1&&(e>=0?(s=0,this._setEndings(!0,this.repetitions===0,a)):this._setEndings(this.repetitions===0,!0,a)),r>=t||r<0){const o=Math.floor(r/t);r-=t*o,s+=Math.abs(o);const l=this.repetitions-s;if(l<=0)this.clampWhenFinished?this.paused=!0:this.enabled=!1,r=e>0?t:0,this.time=r,this._mixer.dispatchEvent({type:"finished",action:this,direction:e>0?1:-1});else{if(l===1){const c=e<0;this._setEndings(c,!c,a)}else this._setEndings(!1,!1,a);this._loopCount=s,this.time=r,this._mixer.dispatchEvent({type:"loop",action:this,loopDelta:o})}}else this.time=r;if(a&&(s&1)===1)return t-r}return r}_setEndings(e,t,n){const r=this._interpolantSettings;n?(r.endingStart=Ir,r.endingEnd=Ir):(e?r.endingStart=this.zeroSlopeAtStart?Ir:Rr:r.endingStart=ja,t?r.endingEnd=this.zeroSlopeAtEnd?Ir:Rr:r.endingEnd=ja)}_scheduleFading(e,t,n){const r=this._mixer,s=r.time;let a=this._weightInterpolant;a===null&&(a=r._lendControlInterpolant(),this._weightInterpolant=a);const o=a.parameterPositions,l=a.sampleValues;return o[0]=s,l[0]=t,o[1]=s+e,l[1]=n,this}}const AT=new Float32Array(1);class TT extends Ui{constructor(e){super(),this._root=e,this._initMemoryManager(),this._accuIndex=0,this.time=0,this.timeScale=1}_bindAction(e,t){const n=e._localRoot||this._root,r=e._clip.tracks,s=r.length,a=e._propertyBindings,o=e._interpolants,l=n.uuid,c=this._bindingsByRootAndName;let u=c[l];u===void 0&&(u={},c[l]=u);for(let h=0;h!==s;++h){const d=r[h],f=d.name;let p=u[f];if(p!==void 0)++p.referenceCount,a[h]=p;else{if(p=a[h],p!==void 0){p._cacheIndex===null&&(++p.referenceCount,this._addInactiveBinding(p,l,f));continue}const v=t&&t._propertyBindings[h].binding.parsedPath;p=new Qv(tt.create(n,f,v),d.ValueTypeName,d.getValueSize()),++p.referenceCount,this._addInactiveBinding(p,l,f),a[h]=p}o[h].resultBuffer=p.buffer}}_activateAction(e){if(!this._isActiveAction(e)){if(e._cacheIndex===null){const n=(e._localRoot||this._root).uuid,r=e._clip.uuid,s=this._actionsByClip[r];this._bindAction(e,s&&s.knownActions[0]),this._addInactiveAction(e,r,n)}const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];s.useCount++===0&&(this._lendBinding(s),s.saveOriginalState())}this._lendAction(e)}}_deactivateAction(e){if(this._isActiveAction(e)){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.useCount===0&&(s.restoreOriginalState(),this._takeBackBinding(s))}this._takeBackAction(e)}}_initMemoryManager(){this._actions=[],this._nActiveActions=0,this._actionsByClip={},this._bindings=[],this._nActiveBindings=0,this._bindingsByRootAndName={},this._controlInterpolants=[],this._nActiveControlInterpolants=0;const e=this;this.stats={actions:{get total(){return e._actions.length},get inUse(){return e._nActiveActions}},bindings:{get total(){return e._bindings.length},get inUse(){return e._nActiveBindings}},controlInterpolants:{get total(){return e._controlInterpolants.length},get inUse(){return e._nActiveControlInterpolants}}}}_isActiveAction(e){const t=e._cacheIndex;return t!==null&&t<this._nActiveActions}_addInactiveAction(e,t,n){const r=this._actions,s=this._actionsByClip;let a=s[t];if(a===void 0)a={knownActions:[e],actionByRoot:{}},e._byClipCacheIndex=0,s[t]=a;else{const o=a.knownActions;e._byClipCacheIndex=o.length,o.push(e)}e._cacheIndex=r.length,r.push(e),a.actionByRoot[n]=e}_removeInactiveAction(e){const t=this._actions,n=t[t.length-1],r=e._cacheIndex;n._cacheIndex=r,t[r]=n,t.pop(),e._cacheIndex=null;const s=e._clip.uuid,a=this._actionsByClip,o=a[s],l=o.knownActions,c=l[l.length-1],u=e._byClipCacheIndex;c._byClipCacheIndex=u,l[u]=c,l.pop(),e._byClipCacheIndex=null;const h=o.actionByRoot,d=(e._localRoot||this._root).uuid;delete h[d],l.length===0&&delete a[s],this._removeInactiveBindingsForAction(e)}_removeInactiveBindingsForAction(e){const t=e._propertyBindings;for(let n=0,r=t.length;n!==r;++n){const s=t[n];--s.referenceCount===0&&this._removeInactiveBinding(s)}}_lendAction(e){const t=this._actions,n=e._cacheIndex,r=this._nActiveActions++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackAction(e){const t=this._actions,n=e._cacheIndex,r=--this._nActiveActions,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_addInactiveBinding(e,t,n){const r=this._bindingsByRootAndName,s=this._bindings;let a=r[t];a===void 0&&(a={},r[t]=a),a[n]=e,e._cacheIndex=s.length,s.push(e)}_removeInactiveBinding(e){const t=this._bindings,n=e.binding,r=n.rootNode.uuid,s=n.path,a=this._bindingsByRootAndName,o=a[r],l=t[t.length-1],c=e._cacheIndex;l._cacheIndex=c,t[c]=l,t.pop(),delete o[s],Object.keys(o).length===0&&delete a[r]}_lendBinding(e){const t=this._bindings,n=e._cacheIndex,r=this._nActiveBindings++,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_takeBackBinding(e){const t=this._bindings,n=e._cacheIndex,r=--this._nActiveBindings,s=t[r];e._cacheIndex=r,t[r]=e,s._cacheIndex=n,t[n]=s}_lendControlInterpolant(){const e=this._controlInterpolants,t=this._nActiveControlInterpolants++;let n=e[t];return n===void 0&&(n=new df(new Float32Array(2),new Float32Array(2),1,AT),n.__cacheIndex=t,e[t]=n),n}_takeBackControlInterpolant(e){const t=this._controlInterpolants,n=e.__cacheIndex,r=--this._nActiveControlInterpolants,s=t[r];e.__cacheIndex=r,t[r]=e,s.__cacheIndex=n,t[n]=s}clipAction(e,t,n){const r=t||this._root,s=r.uuid;let a=typeof e=="string"?co.findByName(r,e):e;const o=a!==null?a.uuid:e,l=this._actionsByClip[o];let c=null;if(n===void 0&&(a!==null?n=a.blendMode:n=Jc),l!==void 0){const h=l.actionByRoot[s];if(h!==void 0&&h.blendMode===n)return h;c=l.knownActions[0],a===null&&(a=c._clip)}if(a===null)return null;const u=new ex(this,a,t,n);return this._bindAction(u,c),this._addInactiveAction(u,o,s),u}existingAction(e,t){const n=t||this._root,r=n.uuid,s=typeof e=="string"?co.findByName(n,e):e,a=s?s.uuid:e,o=this._actionsByClip[a];return o!==void 0&&o.actionByRoot[r]||null}stopAllAction(){const e=this._actions,t=this._nActiveActions;for(let n=t-1;n>=0;--n)e[n].stop();return this}update(e){e*=this.timeScale;const t=this._actions,n=this._nActiveActions,r=this.time+=e,s=Math.sign(e),a=this._accuIndex^=1;for(let c=0;c!==n;++c)t[c]._update(r,e,s,a);const o=this._bindings,l=this._nActiveBindings;for(let c=0;c!==l;++c)o[c].apply(a);return this}setTime(e){this.time=0;for(let t=0;t<this._actions.length;t++)this._actions[t].time=0;return this.update(e)}getRoot(){return this._root}uncacheClip(e){const t=this._actions,n=e.uuid,r=this._actionsByClip,s=r[n];if(s!==void 0){const a=s.knownActions;for(let o=0,l=a.length;o!==l;++o){const c=a[o];this._deactivateAction(c);const u=c._cacheIndex,h=t[t.length-1];c._cacheIndex=null,c._byClipCacheIndex=null,h._cacheIndex=u,t[u]=h,t.pop(),this._removeInactiveBindingsForAction(c)}delete r[n]}}uncacheRoot(e){const t=e.uuid,n=this._actionsByClip;for(const a in n){const o=n[a].actionByRoot,l=o[t];l!==void 0&&(this._deactivateAction(l),this._removeInactiveAction(l))}const r=this._bindingsByRootAndName,s=r[t];if(s!==void 0)for(const a in s){const o=s[a];o.restoreOriginalState(),this._removeInactiveBinding(o)}}uncacheAction(e,t){const n=this.existingAction(e,t);n!==null&&(this._deactivateAction(n),this._removeInactiveAction(n))}}class yf{constructor(e){this.value=e}clone(){return new yf(this.value.clone===void 0?this.value:this.value.clone())}}let ET=0;class CT extends Ui{constructor(){super(),this.isUniformsGroup=!0,Object.defineProperty(this,"id",{value:ET++}),this.name="",this.usage=eo,this.uniforms=[]}add(e){return this.uniforms.push(e),this}remove(e){const t=this.uniforms.indexOf(e);return t!==-1&&this.uniforms.splice(t,1),this}setName(e){return this.name=e,this}setUsage(e){return this.usage=e,this}dispose(){return this.dispatchEvent({type:"dispose"}),this}copy(e){this.name=e.name,this.usage=e.usage;const t=e.uniforms;this.uniforms.length=0;for(let n=0,r=t.length;n<r;n++){const s=Array.isArray(t[n])?t[n]:[t[n]];for(let a=0;a<s.length;a++)this.uniforms.push(s[a].clone())}return this}clone(){return new this.constructor().copy(this)}}class RT extends au{constructor(e,t,n=1){super(e,t),this.isInstancedInterleavedBuffer=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}clone(e){const t=super.clone(e);return t.meshPerAttribute=this.meshPerAttribute,t}toJSON(e){const t=super.toJSON(e);return t.isInstancedInterleavedBuffer=!0,t.meshPerAttribute=this.meshPerAttribute,t}}class IT{constructor(e,t,n,r,s){this.isGLBufferAttribute=!0,this.name="",this.buffer=e,this.type=t,this.itemSize=n,this.elementSize=r,this.count=s,this.version=0}set needsUpdate(e){e===!0&&this.version++}setBuffer(e){return this.buffer=e,this}setType(e,t){return this.type=e,this.elementSize=t,this}setItemSize(e){return this.itemSize=e,this}setCount(e){return this.count=e,this}}const om=new ze;class LT{constructor(e,t,n=0,r=1/0){this.ray=new fa(e,t),this.near=n,this.far=r,this.camera=null,this.layers=new eu,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return om.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(om),this}intersectObject(e,t=!0,n=[]){return md(e,this,n,t),n.sort(lm),n}intersectObjects(e,t=!0,n=[]){for(let r=0,s=e.length;r<s;r++)md(e[r],this,n,t);return n.sort(lm),n}}function lm(i,e){return i.distance-e.distance}function md(i,e,t,n){let r=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(r=!1),r===!0&&n===!0){const s=i.children;for(let a=0,o=s.length;a<o;a++)md(s[a],e,t,!0)}}class PT{constructor(e=1,t=0,n=0){return this.radius=e,this.phi=t,this.theta=n,this}set(e,t,n){return this.radius=e,this.phi=t,this.theta=n,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+t*t+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,n),this.phi=Math.acos(wt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class DT{constructor(e=1,t=0,n=0){return this.radius=e,this.theta=t,this.y=n,this}set(e,t,n){return this.radius=e,this.theta=t,this.y=n,this}copy(e){return this.radius=e.radius,this.theta=e.theta,this.y=e.y,this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,n){return this.radius=Math.sqrt(e*e+n*n),this.theta=Math.atan2(e,n),this.y=t,this}clone(){return new this.constructor().copy(this)}}const cm=new j;class NT{constructor(e=new j(1/0,1/0),t=new j(-1/0,-1/0)){this.isBox2=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=cm.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=1/0,this.max.x=this.max.y=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y}getCenter(e){return this.isEmpty()?e.set(0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y)}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,cm).distanceTo(e)}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const um=new E,Bl=new E;class UT{constructor(e=new E,t=new E){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){um.subVectors(e,this.start),Bl.subVectors(this.end,this.start);const n=Bl.dot(Bl);let s=Bl.dot(um)/n;return t&&(s=wt(s,0,1)),s}closestPointToPoint(e,t,n){const r=this.closestPointToPointParameter(e,t);return this.delta(n).multiplyScalar(r).add(this.start)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}const hm=new E;class zT extends it{constructor(e,t){super(),this.light=e,this.matrixAutoUpdate=!1,this.color=t,this.type="SpotLightHelper";const n=new $e,r=[0,0,0,0,0,1,0,0,0,1,0,1,0,0,0,-1,0,1,0,0,0,0,1,1,0,0,0,0,-1,1];for(let a=0,o=1,l=32;a<l;a++,o++){const c=a/l*Math.PI*2,u=o/l*Math.PI*2;r.push(Math.cos(c),Math.sin(c),1,Math.cos(u),Math.sin(u),1)}n.setAttribute("position",new Re(r,3));const s=new an({fog:!1,toneMapped:!1});this.cone=new ii(n,s),this.add(this.cone),this.update()}dispose(){this.cone.geometry.dispose(),this.cone.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),this.parent?(this.parent.updateWorldMatrix(!0),this.matrix.copy(this.parent.matrixWorld).invert().multiply(this.light.matrixWorld)):this.matrix.copy(this.light.matrixWorld),this.matrixWorld.copy(this.light.matrixWorld);const e=this.light.distance?this.light.distance:1e3,t=e*Math.tan(this.light.angle);this.cone.scale.set(t,t,e),hm.setFromMatrixPosition(this.light.target.matrixWorld),this.cone.lookAt(hm),this.color!==void 0?this.cone.material.color.set(this.color):this.cone.material.color.copy(this.light.color)}}const Xi=new E,Vl=new ze,vh=new ze;class OT extends ii{constructor(e){const t=tx(e),n=new $e,r=[],s=[],a=new ye(0,0,1),o=new ye(0,1,0);for(let c=0;c<t.length;c++){const u=t[c];u.parent&&u.parent.isBone&&(r.push(0,0,0),r.push(0,0,0),s.push(a.r,a.g,a.b),s.push(o.r,o.g,o.b))}n.setAttribute("position",new Re(r,3)),n.setAttribute("color",new Re(s,3));const l=new an({vertexColors:!0,depthTest:!1,depthWrite:!1,toneMapped:!1,transparent:!0});super(n,l),this.isSkeletonHelper=!0,this.type="SkeletonHelper",this.root=e,this.bones=t,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1}updateMatrixWorld(e){const t=this.bones,n=this.geometry,r=n.getAttribute("position");vh.copy(this.root.matrixWorld).invert();for(let s=0,a=0;s<t.length;s++){const o=t[s];o.parent&&o.parent.isBone&&(Vl.multiplyMatrices(vh,o.matrixWorld),Xi.setFromMatrixPosition(Vl),r.setXYZ(a,Xi.x,Xi.y,Xi.z),Vl.multiplyMatrices(vh,o.parent.matrixWorld),Xi.setFromMatrixPosition(Vl),r.setXYZ(a+1,Xi.x,Xi.y,Xi.z),a+=2)}n.getAttribute("position").needsUpdate=!0,super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose()}}function tx(i){const e=[];i.isBone===!0&&e.push(i);for(let t=0;t<i.children.length;t++)e.push.apply(e,tx(i.children[t]));return e}class FT extends Pt{constructor(e,t,n){const r=new Wo(t,4,2),s=new sr({wireframe:!0,fog:!1,toneMapped:!1});super(r,s),this.light=e,this.color=n,this.type="PointLightHelper",this.matrix=this.light.matrixWorld,this.matrixAutoUpdate=!1,this.update()}dispose(){this.geometry.dispose(),this.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.color!==void 0?this.material.color.set(this.color):this.material.color.copy(this.light.color)}}const kT=new E,dm=new ye,fm=new ye;class BT extends it{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="HemisphereLightHelper";const r=new Ho(t);r.rotateY(Math.PI*.5),this.material=new sr({wireframe:!0,fog:!1,toneMapped:!1}),this.color===void 0&&(this.material.vertexColors=!0);const s=r.getAttribute("position"),a=new Float32Array(s.count*3);r.setAttribute("color",new ut(a,3)),this.add(new Pt(r,this.material)),this.update()}dispose(){this.children[0].geometry.dispose(),this.children[0].material.dispose()}update(){const e=this.children[0];if(this.color!==void 0)this.material.color.set(this.color);else{const t=e.geometry.getAttribute("color");dm.copy(this.light.color),fm.copy(this.light.groundColor);for(let n=0,r=t.count;n<r;n++){const s=n<r/2?dm:fm;t.setXYZ(n,s.r,s.g,s.b)}t.needsUpdate=!0}this.light.updateWorldMatrix(!0,!1),e.lookAt(kT.setFromMatrixPosition(this.light.matrixWorld).negate())}}class VT extends ii{constructor(e=10,t=10,n=4473924,r=8947848){n=new ye(n),r=new ye(r);const s=t/2,a=e/t,o=e/2,l=[],c=[];for(let d=0,f=0,p=-o;d<=t;d++,p+=a){l.push(-o,0,p,o,0,p),l.push(p,0,-o,p,0,o);const v=d===s?n:r;v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3,v.toArray(c,f),f+=3}const u=new $e;u.setAttribute("position",new Re(l,3)),u.setAttribute("color",new Re(c,3));const h=new an({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class GT extends ii{constructor(e=10,t=16,n=8,r=64,s=4473924,a=8947848){s=new ye(s),a=new ye(a);const o=[],l=[];if(t>1)for(let h=0;h<t;h++){const d=h/t*(Math.PI*2),f=Math.sin(d)*e,p=Math.cos(d)*e;o.push(0,0,0),o.push(f,0,p);const v=h&1?s:a;l.push(v.r,v.g,v.b),l.push(v.r,v.g,v.b)}for(let h=0;h<n;h++){const d=h&1?s:a,f=e-e/n*h;for(let p=0;p<r;p++){let v=p/r*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f;o.push(g,0,m),l.push(d.r,d.g,d.b),v=(p+1)/r*(Math.PI*2),g=Math.sin(v)*f,m=Math.cos(v)*f,o.push(g,0,m),l.push(d.r,d.g,d.b)}}const c=new $e;c.setAttribute("position",new Re(o,3)),c.setAttribute("color",new Re(l,3));const u=new an({vertexColors:!0,toneMapped:!1});super(c,u),this.type="PolarGridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}const pm=new E,Gl=new E,mm=new E;class HT extends it{constructor(e,t,n){super(),this.light=e,this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.color=n,this.type="DirectionalLightHelper",t===void 0&&(t=1);let r=new $e;r.setAttribute("position",new Re([-t,t,0,t,t,0,t,-t,0,-t,-t,0,-t,t,0],3));const s=new an({fog:!1,toneMapped:!1});this.lightPlane=new nr(r,s),this.add(this.lightPlane),r=new $e,r.setAttribute("position",new Re([0,0,0,0,0,1],3)),this.targetLine=new nr(r,s),this.add(this.targetLine),this.update()}dispose(){this.lightPlane.geometry.dispose(),this.lightPlane.material.dispose(),this.targetLine.geometry.dispose(),this.targetLine.material.dispose()}update(){this.light.updateWorldMatrix(!0,!1),this.light.target.updateWorldMatrix(!0,!1),pm.setFromMatrixPosition(this.light.matrixWorld),Gl.setFromMatrixPosition(this.light.target.matrixWorld),mm.subVectors(Gl,pm),this.lightPlane.lookAt(Gl),this.color!==void 0?(this.lightPlane.material.color.set(this.color),this.targetLine.material.color.set(this.color)):(this.lightPlane.material.color.copy(this.light.color),this.targetLine.material.color.copy(this.light.color)),this.targetLine.lookAt(Gl),this.targetLine.scale.z=mm.length()}}const Hl=new E,St=new tu;class WT extends ii{constructor(e){const t=new $e,n=new an({color:16777215,vertexColors:!0,toneMapped:!1}),r=[],s=[],a={};o("n1","n2"),o("n2","n4"),o("n4","n3"),o("n3","n1"),o("f1","f2"),o("f2","f4"),o("f4","f3"),o("f3","f1"),o("n1","f1"),o("n2","f2"),o("n3","f3"),o("n4","f4"),o("p","n1"),o("p","n2"),o("p","n3"),o("p","n4"),o("u1","u2"),o("u2","u3"),o("u3","u1"),o("c","t"),o("p","c"),o("cn1","cn2"),o("cn3","cn4"),o("cf1","cf2"),o("cf3","cf4");function o(p,v){l(p),l(v)}function l(p){r.push(0,0,0),s.push(0,0,0),a[p]===void 0&&(a[p]=[]),a[p].push(r.length/3-1)}t.setAttribute("position",new Re(r,3)),t.setAttribute("color",new Re(s,3)),super(t,n),this.type="CameraHelper",this.camera=e,this.camera.updateProjectionMatrix&&this.camera.updateProjectionMatrix(),this.matrix=e.matrixWorld,this.matrixAutoUpdate=!1,this.pointMap=a,this.update();const c=new ye(16755200),u=new ye(16711680),h=new ye(43775),d=new ye(16777215),f=new ye(3355443);this.setColors(c,u,h,d,f)}setColors(e,t,n,r,s){const o=this.geometry.getAttribute("color");o.setXYZ(0,e.r,e.g,e.b),o.setXYZ(1,e.r,e.g,e.b),o.setXYZ(2,e.r,e.g,e.b),o.setXYZ(3,e.r,e.g,e.b),o.setXYZ(4,e.r,e.g,e.b),o.setXYZ(5,e.r,e.g,e.b),o.setXYZ(6,e.r,e.g,e.b),o.setXYZ(7,e.r,e.g,e.b),o.setXYZ(8,e.r,e.g,e.b),o.setXYZ(9,e.r,e.g,e.b),o.setXYZ(10,e.r,e.g,e.b),o.setXYZ(11,e.r,e.g,e.b),o.setXYZ(12,e.r,e.g,e.b),o.setXYZ(13,e.r,e.g,e.b),o.setXYZ(14,e.r,e.g,e.b),o.setXYZ(15,e.r,e.g,e.b),o.setXYZ(16,e.r,e.g,e.b),o.setXYZ(17,e.r,e.g,e.b),o.setXYZ(18,e.r,e.g,e.b),o.setXYZ(19,e.r,e.g,e.b),o.setXYZ(20,e.r,e.g,e.b),o.setXYZ(21,e.r,e.g,e.b),o.setXYZ(22,e.r,e.g,e.b),o.setXYZ(23,e.r,e.g,e.b),o.setXYZ(24,t.r,t.g,t.b),o.setXYZ(25,t.r,t.g,t.b),o.setXYZ(26,t.r,t.g,t.b),o.setXYZ(27,t.r,t.g,t.b),o.setXYZ(28,t.r,t.g,t.b),o.setXYZ(29,t.r,t.g,t.b),o.setXYZ(30,t.r,t.g,t.b),o.setXYZ(31,t.r,t.g,t.b),o.setXYZ(32,n.r,n.g,n.b),o.setXYZ(33,n.r,n.g,n.b),o.setXYZ(34,n.r,n.g,n.b),o.setXYZ(35,n.r,n.g,n.b),o.setXYZ(36,n.r,n.g,n.b),o.setXYZ(37,n.r,n.g,n.b),o.setXYZ(38,r.r,r.g,r.b),o.setXYZ(39,r.r,r.g,r.b),o.setXYZ(40,s.r,s.g,s.b),o.setXYZ(41,s.r,s.g,s.b),o.setXYZ(42,s.r,s.g,s.b),o.setXYZ(43,s.r,s.g,s.b),o.setXYZ(44,s.r,s.g,s.b),o.setXYZ(45,s.r,s.g,s.b),o.setXYZ(46,s.r,s.g,s.b),o.setXYZ(47,s.r,s.g,s.b),o.setXYZ(48,s.r,s.g,s.b),o.setXYZ(49,s.r,s.g,s.b),o.needsUpdate=!0}update(){const e=this.geometry,t=this.pointMap,n=1,r=1;St.projectionMatrixInverse.copy(this.camera.projectionMatrixInverse),Ct("c",t,e,St,0,0,-1),Ct("t",t,e,St,0,0,1),Ct("n1",t,e,St,-1,-1,-1),Ct("n2",t,e,St,n,-1,-1),Ct("n3",t,e,St,-1,r,-1),Ct("n4",t,e,St,n,r,-1),Ct("f1",t,e,St,-1,-1,1),Ct("f2",t,e,St,n,-1,1),Ct("f3",t,e,St,-1,r,1),Ct("f4",t,e,St,n,r,1),Ct("u1",t,e,St,n*.7,r*1.1,-1),Ct("u2",t,e,St,-1*.7,r*1.1,-1),Ct("u3",t,e,St,0,r*2,-1),Ct("cf1",t,e,St,-1,0,1),Ct("cf2",t,e,St,n,0,1),Ct("cf3",t,e,St,0,-1,1),Ct("cf4",t,e,St,0,r,1),Ct("cn1",t,e,St,-1,0,-1),Ct("cn2",t,e,St,n,0,-1),Ct("cn3",t,e,St,0,-1,-1),Ct("cn4",t,e,St,0,r,-1),e.getAttribute("position").needsUpdate=!0}dispose(){this.geometry.dispose(),this.material.dispose()}}function Ct(i,e,t,n,r,s,a){Hl.set(r,s,a).unproject(n);const o=e[i];if(o!==void 0){const l=t.getAttribute("position");for(let c=0,u=o.length;c<u;c++)l.setXYZ(o[c],Hl.x,Hl.y,Hl.z)}}const Wl=new sn;class XT extends ii{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=new Float32Array(8*3),s=new $e;s.setIndex(new ut(n,1)),s.setAttribute("position",new ut(r,3)),super(s,new an({color:t,toneMapped:!1})),this.object=e,this.type="BoxHelper",this.matrixAutoUpdate=!1,this.update()}update(e){if(e!==void 0&&console.warn("THREE.BoxHelper: .update() has no longer arguments."),this.object!==void 0&&Wl.setFromObject(this.object),Wl.isEmpty())return;const t=Wl.min,n=Wl.max,r=this.geometry.attributes.position,s=r.array;s[0]=n.x,s[1]=n.y,s[2]=n.z,s[3]=t.x,s[4]=n.y,s[5]=n.z,s[6]=t.x,s[7]=t.y,s[8]=n.z,s[9]=n.x,s[10]=t.y,s[11]=n.z,s[12]=n.x,s[13]=n.y,s[14]=t.z,s[15]=t.x,s[16]=n.y,s[17]=t.z,s[18]=t.x,s[19]=t.y,s[20]=t.z,s[21]=n.x,s[22]=t.y,s[23]=t.z,r.needsUpdate=!0,this.geometry.computeBoundingSphere()}setFromObject(e){return this.object=e,this.update(),this}copy(e,t){return super.copy(e,t),this.object=e.object,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class qT extends ii{constructor(e,t=16776960){const n=new Uint16Array([0,1,1,2,2,3,3,0,4,5,5,6,6,7,7,4,0,4,1,5,2,6,3,7]),r=[1,1,1,-1,1,1,-1,-1,1,1,-1,1,1,1,-1,-1,1,-1,-1,-1,-1,1,-1,-1],s=new $e;s.setIndex(new ut(n,1)),s.setAttribute("position",new Re(r,3)),super(s,new an({color:t,toneMapped:!1})),this.box=e,this.type="Box3Helper",this.geometry.computeBoundingSphere()}updateMatrixWorld(e){const t=this.box;t.isEmpty()||(t.getCenter(this.position),t.getSize(this.scale),this.scale.multiplyScalar(.5),super.updateMatrixWorld(e))}dispose(){this.geometry.dispose(),this.material.dispose()}}class YT extends nr{constructor(e,t=1,n=16776960){const r=n,s=[1,-1,0,-1,1,0,-1,-1,0,1,1,0,-1,1,0,-1,-1,0,1,-1,0,1,1,0],a=new $e;a.setAttribute("position",new Re(s,3)),a.computeBoundingSphere(),super(a,new an({color:r,toneMapped:!1})),this.type="PlaneHelper",this.plane=e,this.size=t;const o=[1,1,0,-1,1,0,-1,-1,0,1,1,0,-1,-1,0,1,-1,0],l=new $e;l.setAttribute("position",new Re(o,3)),l.computeBoundingSphere(),this.add(new Pt(l,new sr({color:r,opacity:.2,transparent:!0,depthWrite:!1,toneMapped:!1})))}updateMatrixWorld(e){this.position.set(0,0,0),this.scale.set(.5*this.size,.5*this.size,1),this.lookAt(this.plane.normal),this.translateZ(-this.plane.constant),super.updateMatrixWorld(e)}dispose(){this.geometry.dispose(),this.material.dispose(),this.children[0].geometry.dispose(),this.children[0].material.dispose()}}const gm=new E;let Xl,xh;class ZT extends it{constructor(e=new E(0,0,1),t=new E(0,0,0),n=1,r=16776960,s=n*.2,a=s*.2){super(),this.type="ArrowHelper",Xl===void 0&&(Xl=new $e,Xl.setAttribute("position",new Re([0,0,0,0,1,0],3)),xh=new ga(0,.5,1,5,1),xh.translate(0,-.5,0)),this.position.copy(t),this.line=new nr(Xl,new an({color:r,toneMapped:!1})),this.line.matrixAutoUpdate=!1,this.add(this.line),this.cone=new Pt(xh,new sr({color:r,toneMapped:!1})),this.cone.matrixAutoUpdate=!1,this.add(this.cone),this.setDirection(e),this.setLength(n,s,a)}setDirection(e){if(e.y>.99999)this.quaternion.set(0,0,0,1);else if(e.y<-.99999)this.quaternion.set(1,0,0,0);else{gm.set(e.z,0,-e.x).normalize();const t=Math.acos(e.y);this.quaternion.setFromAxisAngle(gm,t)}}setLength(e,t=e*.2,n=t*.2){this.line.scale.set(1,Math.max(1e-4,e-t),1),this.line.updateMatrix(),this.cone.scale.set(n,t,n),this.cone.position.y=e,this.cone.updateMatrix()}setColor(e){this.line.material.color.set(e),this.cone.material.color.set(e)}copy(e){return super.copy(e,!1),this.line.copy(e.line),this.cone.copy(e.cone),this}dispose(){this.line.geometry.dispose(),this.line.material.dispose(),this.cone.geometry.dispose(),this.cone.material.dispose()}}class $T extends ii{constructor(e=1){const t=[0,0,0,e,0,0,0,0,0,0,e,0,0,0,0,0,0,e],n=[1,0,0,1,.6,0,0,1,0,.6,1,0,0,0,1,0,.6,1],r=new $e;r.setAttribute("position",new Re(t,3)),r.setAttribute("color",new Re(n,3));const s=new an({vertexColors:!0,toneMapped:!1});super(r,s),this.type="AxesHelper"}setColors(e,t,n){const r=new ye,s=this.geometry.attributes.color.array;return r.set(e),r.toArray(s,0),r.toArray(s,3),r.set(t),r.toArray(s,6),r.toArray(s,9),r.set(n),r.toArray(s,12),r.toArray(s,15),this.geometry.attributes.color.needsUpdate=!0,this}dispose(){this.geometry.dispose(),this.material.dispose()}}class jT{constructor(){this.type="ShapePath",this.color=new ye,this.subPaths=[],this.currentPath=null}moveTo(e,t){return this.currentPath=new io,this.subPaths.push(this.currentPath),this.currentPath.moveTo(e,t),this}lineTo(e,t){return this.currentPath.lineTo(e,t),this}quadraticCurveTo(e,t,n,r){return this.currentPath.quadraticCurveTo(e,t,n,r),this}bezierCurveTo(e,t,n,r,s,a){return this.currentPath.bezierCurveTo(e,t,n,r,s,a),this}splineThru(e){return this.currentPath.splineThru(e),this}toShapes(e){function t(m){const y=[];for(let x=0,_=m.length;x<_;x++){const L=m[x],T=new Jr;T.curves=L.curves,y.push(T)}return y}function n(m,y){const x=y.length;let _=!1;for(let L=x-1,T=0;T<x;L=T++){let C=y[L],I=y[T],b=I.x-C.x,M=I.y-C.y;if(Math.abs(M)>Number.EPSILON){if(M<0&&(C=y[T],b=-b,I=y[L],M=-M),m.y<C.y||m.y>I.y)continue;if(m.y===C.y){if(m.x===C.x)return!0}else{const P=M*(m.x-C.x)-b*(m.y-C.y);if(P===0)return!0;if(P<0)continue;_=!_}}else{if(m.y!==C.y)continue;if(I.x<=m.x&&m.x<=C.x||C.x<=m.x&&m.x<=I.x)return!0}}return _}const r=Qn.isClockWise,s=this.subPaths;if(s.length===0)return[];let a,o,l;const c=[];if(s.length===1)return o=s[0],l=new Jr,l.curves=o.curves,c.push(l),c;let u=!r(s[0].getPoints());u=e?!u:u;const h=[],d=[];let f=[],p=0,v;d[p]=void 0,f[p]=[];for(let m=0,y=s.length;m<y;m++)o=s[m],v=o.getPoints(),a=r(v),a=e?!a:a,a?(!u&&d[p]&&p++,d[p]={s:new Jr,p:v},d[p].s.curves=o.curves,u&&p++,f[p]=[]):f[p].push({h:o,p:v[0]});if(!d[0])return t(s);if(d.length>1){let m=!1,y=0;for(let x=0,_=d.length;x<_;x++)h[x]=[];for(let x=0,_=d.length;x<_;x++){const L=f[x];for(let T=0;T<L.length;T++){const C=L[T];let I=!0;for(let b=0;b<d.length;b++)n(C.p,d[b].p)&&(x!==b&&y++,I?(I=!1,h[b].push(C)):m=!0);I&&h[x].push(C)}}y>0&&m===!1&&(f=h)}let g;for(let m=0,y=d.length;m<y;m++){l=d[m].s,c.push(l),g=f[m];for(let x=0,_=g.length;x<_;x++)l.holes.push(g[x].h)}return c}}class JT extends Bn{constructor(e=1,t=1,n=1,r={}){console.warn('THREE.WebGLMultipleRenderTargets has been deprecated and will be removed in r172. Use THREE.WebGLRenderTarget and set the "count" parameter to enable MRT.'),super(e,t,{...r,count:n}),this.isWebGLMultipleRenderTargets=!0}get texture(){return this.textures}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:$c}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=$c);const hI=Object.freeze(Object.defineProperty({__proto__:null,ACESFilmicToneMapping:v0,AddEquation:Yi,AddOperation:f0,AdditiveAnimationBlendMode:Hd,AdditiveBlending:Ih,AgXToneMapping:y0,AlphaFormat:A0,AlwaysCompare:H0,AlwaysDepth:a0,AlwaysStencilFunc:ad,AmbientLight:Xv,AnimationAction:ex,AnimationClip:co,AnimationLoader:JA,AnimationMixer:TT,AnimationObjectGroup:bT,AnimationUtils:YA,ArcCurve:gv,ArrayCamera:av,ArrowHelper:ZT,AttachedBindMode:Dh,Audio:Kv,AudioAnalyser:pT,AudioContext:gf,AudioListener:hT,AudioLoader:lT,AxesHelper:$T,BackSide:rn,BasicDepthPacking:N0,BasicShadowMap:e_,BatchedMesh:fv,Bone:tf,BooleanKeyframeTrack:cs,Box2:NT,Box3:sn,Box3Helper:qT,BoxGeometry:ls,BoxHelper:XT,BufferAttribute:ut,BufferGeometry:$e,BufferGeometryLoader:jv,ByteType:S0,Cache:Mi,Camera:tu,CameraHelper:WT,CanvasTexture:vA,CapsuleGeometry:uu,CatmullRomCurve3:vv,CineonToneMapping:g0,CircleGeometry:hu,ClampToEdgeWrapping:Ln,Clock:Jv,Color:ye,ColorKeyframeTrack:ff,ColorManagement:at,CompressedArrayTexture:mA,CompressedCubeTexture:gA,CompressedTexture:lu,CompressedTextureLoader:KA,ConeGeometry:du,ConstantAlphaFactor:i0,ConstantColorFactor:t0,CubeCamera:J0,CubeReflectionMapping:Ii,CubeRefractionMapping:tr,CubeTexture:Bo,CubeTextureLoader:QA,CubeUVReflectionMapping:da,CubicBezierCurve:sf,CubicBezierCurve3:xv,CubicInterpolant:Ov,CullFaceBack:Rh,CullFaceFront:kg,CullFaceFrontBack:Qy,CullFaceNone:Fg,Curve:Gn,CurvePath:_v,CustomBlending:Vg,CustomToneMapping:x0,CylinderGeometry:ga,Cylindrical:DT,Data3DTexture:Yd,DataArrayTexture:Qc,DataTexture:Ti,DataTextureLoader:eT,DataUtils:uM,DecrementStencilOp:h_,DecrementWrapStencilOp:f_,DefaultLoadingManager:Bv,DepthFormat:$r,DepthStencilFormat:is,DepthTexture:Jd,DetachedBindMode:M0,DirectionalLight:Wv,DirectionalLightHelper:HT,DiscreteInterpolant:Fv,DisplayP3ColorSpace:Kc,DodecahedronGeometry:fu,DoubleSide:$n,DstAlphaFactor:jg,DstColorFactor:Kg,DynamicCopyUsage:C_,DynamicDrawUsage:S_,DynamicReadUsage:A_,EdgesGeometry:Mv,EllipseCurve:cu,EqualCompare:k0,EqualDepth:l0,EqualStencilFunc:v_,EquirectangularReflectionMapping:Wa,EquirectangularRefractionMapping:Xa,Euler:wn,EventDispatcher:Ui,ExtrudeGeometry:mu,FileLoader:Pi,Float16BufferAttribute:gM,Float32BufferAttribute:Re,FloatType:yn,Fog:su,FogExp2:ru,FramebufferTexture:pA,FrontSide:Ri,Frustum:Vo,GLBufferAttribute:IT,GLSL1:I_,GLSL3:od,GreaterCompare:B0,GreaterDepth:u0,GreaterEqualCompare:G0,GreaterEqualDepth:c0,GreaterEqualStencilFunc:M_,GreaterStencilFunc:y_,GridHelper:VT,Group:Bs,HalfFloatType:Fo,HemisphereLight:Vv,HemisphereLightHelper:BT,IcosahedronGeometry:gu,ImageBitmapLoader:oT,ImageLoader:uo,ImageUtils:q0,IncrementStencilOp:u_,IncrementWrapStencilOp:d_,InstancedBufferAttribute:la,InstancedBufferGeometry:$v,InstancedInterleavedBuffer:RT,InstancedMesh:dv,Int16BufferAttribute:pM,Int32BufferAttribute:mM,Int8BufferAttribute:hM,IntType:zd,InterleavedBuffer:au,InterleavedBufferAttribute:rs,Interpolant:Xo,InterpolateDiscrete:$a,InterpolateLinear:fc,InterpolateSmooth:ic,InvertStencilOp:p_,KeepStencilOp:Tr,KeyframeTrack:Hn,LOD:uv,LatheGeometry:Go,Layers:eu,LessCompare:F0,LessDepth:o0,LessEqualCompare:Wd,LessEqualDepth:Ha,LessEqualStencilFunc:x_,LessStencilFunc:g_,Light:or,LightProbe:Zv,Line:nr,Line3:UT,LineBasicMaterial:an,LineCurve:af,LineCurve3:yv,LineDashedMaterial:Nv,LineLoop:pv,LineSegments:ii,LinearDisplayP3ColorSpace:ko,LinearFilter:Lt,LinearInterpolant:df,LinearMipMapLinearFilter:r_,LinearMipMapNearestFilter:i_,LinearMipmapLinearFilter:Jn,LinearMipmapNearestFilter:za,LinearSRGBColorSpace:ni,LinearToneMapping:p0,LinearTransfer:Ja,Loader:pn,LoaderUtils:pd,LoadingManager:pf,LoopOnce:L0,LoopPingPong:D0,LoopRepeat:P0,LuminanceAlphaFormat:C0,LuminanceFormat:E0,MOUSE:Jy,Material:Jt,MaterialLoader:wu,MathUtils:Y_,Matrix3:We,Matrix4:ze,MaxEquation:Xg,Mesh:Pt,MeshBasicMaterial:sr,MeshDepthMaterial:Kd,MeshDistanceMaterial:Qd,MeshLambertMaterial:Pv,MeshMatcapMaterial:Dv,MeshNormalMaterial:Lv,MeshPhongMaterial:Rv,MeshPhysicalMaterial:Cv,MeshStandardMaterial:uf,MeshToonMaterial:Iv,MinEquation:Wg,MirroredRepeatWrapping:Ya,MixOperation:d0,MultiplyBlending:Ph,MultiplyOperation:Oo,NearestFilter:Gt,NearestMipMapLinearFilter:n_,NearestMipMapNearestFilter:t_,NearestMipmapLinearFilter:Os,NearestMipmapNearestFilter:Ud,NeutralToneMapping:_0,NeverCompare:O0,NeverDepth:s0,NeverStencilFunc:m_,NoBlending:bi,NoColorSpace:yi,NoToneMapping:Ai,NormalAnimationBlendMode:Jc,NormalBlending:Zr,NotEqualCompare:V0,NotEqualDepth:h0,NotEqualStencilFunc:__,NumberKeyframeTrack:oo,Object3D:it,ObjectLoader:sT,ObjectSpaceNormalMap:z0,OctahedronGeometry:Ho,OneFactor:Yg,OneMinusConstantAlphaFactor:r0,OneMinusConstantColorFactor:n0,OneMinusDstAlphaFactor:Jg,OneMinusDstColorFactor:Qg,OneMinusSrcAlphaFactor:dc,OneMinusSrcColorFactor:$g,OrthographicCamera:nu,P3Primaries:Qa,PCFShadowMap:Nd,PCFSoftShadowMap:Bg,PMREMGenerator:ld,Path:io,PerspectiveCamera:Xt,Plane:qi,PlaneGeometry:pa,PlaneHelper:YT,PointLight:Hv,PointLightHelper:FT,Points:mv,PointsMaterial:nf,PolarGridHelper:GT,PolyhedronGeometry:ar,PositionalAudio:fT,PropertyBinding:tt,PropertyMixer:Qv,QuadraticBezierCurve:of,QuadraticBezierCurve3:lf,Quaternion:fn,QuaternionKeyframeTrack:qo,QuaternionLinearInterpolant:kv,RED_GREEN_RGTC2_Format:rd,RED_RGTC1_Format:I0,REVISION:$c,RGBADepthPacking:U0,RGBAFormat:dn,RGBAIntegerFormat:Gd,RGBA_ASTC_10x10_Format:Kh,RGBA_ASTC_10x5_Format:$h,RGBA_ASTC_10x6_Format:jh,RGBA_ASTC_10x8_Format:Jh,RGBA_ASTC_12x10_Format:Qh,RGBA_ASTC_12x12_Format:ed,RGBA_ASTC_4x4_Format:Vh,RGBA_ASTC_5x4_Format:Gh,RGBA_ASTC_5x5_Format:Hh,RGBA_ASTC_6x5_Format:Wh,RGBA_ASTC_6x6_Format:Xh,RGBA_ASTC_8x5_Format:qh,RGBA_ASTC_8x6_Format:Yh,RGBA_ASTC_8x8_Format:Zh,RGBA_BPTC_Format:nc,RGBA_ETC2_EAC_Format:Bh,RGBA_PVRTC_2BPPV1_Format:Oh,RGBA_PVRTC_4BPPV1_Format:zh,RGBA_S3TC_DXT1_Format:Ql,RGBA_S3TC_DXT3_Format:ec,RGBA_S3TC_DXT5_Format:tc,RGBFormat:T0,RGB_BPTC_SIGNED_Format:td,RGB_BPTC_UNSIGNED_Format:nd,RGB_ETC1_Format:Fh,RGB_ETC2_Format:kh,RGB_PVRTC_2BPPV1_Format:Uh,RGB_PVRTC_4BPPV1_Format:Nh,RGB_S3TC_DXT1_Format:Kl,RGFormat:R0,RGIntegerFormat:Vd,RawShaderMaterial:Ev,Ray:fa,Raycaster:LT,Rec709Primaries:Ka,RectAreaLight:qv,RedFormat:kd,RedIntegerFormat:Bd,ReinhardToneMapping:m0,RenderTarget:Y0,RepeatWrapping:qa,ReplaceStencilOp:c_,ReverseSubtractEquation:Hg,RingGeometry:vu,SIGNED_RED_GREEN_RGTC2_Format:sd,SIGNED_RED_RGTC1_Format:id,SRGBColorSpace:Rn,SRGBTransfer:pt,Scene:ov,ShaderChunk:Ze,ShaderLib:Fn,ShaderMaterial:Vn,ShadowMaterial:Tv,Shape:Jr,ShapeGeometry:xu,ShapePath:jT,ShapeUtils:Qn,ShortType:w0,Skeleton:ou,SkeletonHelper:OT,SkinnedMesh:hv,Source:Lr,Sphere:$t,SphereGeometry:Wo,Spherical:PT,SphericalHarmonics3:Yv,SplineCurve:cf,SpotLight:Gv,SpotLightHelper:zT,Sprite:cv,SpriteMaterial:ef,SrcAlphaFactor:hc,SrcAlphaSaturateFactor:e0,SrcColorFactor:Zg,StaticCopyUsage:E_,StaticDrawUsage:eo,StaticReadUsage:b_,StereoCamera:cT,StreamCopyUsage:R_,StreamDrawUsage:w_,StreamReadUsage:T_,StringKeyframeTrack:us,SubtractEquation:Gg,SubtractiveBlending:Lh,TOUCH:Ky,TangentSpaceNormalMap:rr,TetrahedronGeometry:yu,Texture:bt,TextureLoader:tT,TorusGeometry:_u,TorusKnotGeometry:Mu,Triangle:xn,TriangleFanDrawMode:o_,TriangleStripDrawMode:a_,TrianglesDrawMode:s_,TubeGeometry:Su,UVMapping:jc,Uint16BufferAttribute:Zd,Uint32BufferAttribute:$d,Uint8BufferAttribute:dM,Uint8ClampedBufferAttribute:fM,Uniform:yf,UniformsGroup:CT,UniformsLib:pe,UniformsUtils:j0,UnsignedByteType:Li,UnsignedInt248Type:ns,UnsignedInt5999Type:b0,UnsignedIntType:ts,UnsignedShort4444Type:Od,UnsignedShort5551Type:Fd,UnsignedShortType:Za,VSMShadowMap:qn,Vector2:j,Vector3:E,Vector4:ct,VectorKeyframeTrack:lo,VideoTexture:fA,WebGL3DRenderTarget:eM,WebGLArrayRenderTarget:Q_,WebGLCoordinateSystem:Kn,WebGLCubeRenderTarget:K0,WebGLMultipleRenderTargets:JT,WebGLRenderTarget:Bn,WebGLRenderer:nA,WebGLUtils:sv,WebGPUCoordinateSystem:to,WireframeGeometry:Av,WrapAroundEnding:ja,ZeroCurvatureEnding:Rr,ZeroFactor:qg,ZeroSlopeEnding:Ir,ZeroStencilOp:l_,createCanvasElement:X0},Symbol.toStringTag,{value:"Module"}));var bc,xo,qm,bu=(qm=class{constructor(){J(this,bc,0);J(this,xo,0)}queue(i){return new Promise(async(e,t)=>{try{const n=++Ko(this,bc)._,r=await i;n>w(this,xo)&&(fe(this,xo,n),e(r))}catch(n){t(n)}})}},bc=new WeakMap,xo=new WeakMap,qm),nx=0,Fr,Zs,ca,rx,kr,sx,$s,Ym,ix=(Ym=class{constructor(){J(this,ca);J(this,Fr,new Set);F(this,"lastSourceGeneration",0);J(this,Zs,new Set);J(this,kr,!1);J(this,$s,new Map)}canReuse(i,e){return i===e||this.canReuseValue(i,e)}canReuseValue(i,e){return!1}debugGetChildren(){return Array.from(w(this,Fr).values())}addChild(i){w(this,Fr).add(i)}removeChild(i){w(this,Fr).delete(i)}markStale(i){if(i.detail.generation!==nx)throw new Error("A TwistyProp was marked stale too late!");if(this.lastSourceGeneration!==i.detail.generation){this.lastSourceGeneration=i.detail.generation;for(const e of w(this,Fr))e.markStale(i);Qe(this,ca,rx).call(this)}}addRawListener(i,e){w(this,Zs).add(i),e!=null&&e.initial&&i()}removeRawListener(i){w(this,Zs).delete(i)}addFreshListener(i){const e=new bu;let t=null;const n=async()=>{const r=await e.queue(this.get());t!==null&&this.canReuse(t,r)||(t=r,i(r))};w(this,$s).set(i,n),this.addRawListener(n,{initial:!0})}removeFreshListener(i){this.removeRawListener(w(this,$s).get(i)),w(this,$s).delete(i)}},Fr=new WeakMap,Zs=new WeakMap,ca=new WeakSet,rx=function(){w(this,kr)||(fe(this,kr,!0),setTimeout(()=>Qe(this,ca,sx).call(this),0))},kr=new WeakMap,sx=function(){if(!w(this,kr))throw new Error("Invalid dispatch state!");for(const i of w(this,Zs))i();fe(this,kr,!1)},$s=new WeakMap,Ym),Yn,Zm,lr=(Zm=class extends ix{constructor(e){super();J(this,Yn);fe(this,Yn,Pd(()=>this.getDefaultValue())),e&&fe(this,Yn,this.deriveFromPromiseOrValue(e,w(this,Yn)))}set(e){fe(this,Yn,this.deriveFromPromiseOrValue(e,w(this,Yn)));const t={sourceProp:this,value:w(this,Yn),generation:++nx};this.markStale(new CustomEvent("stale",{detail:t}))}async get(){return w(this,Yn)}async deriveFromPromiseOrValue(e,t){return this.derive(await e,t)}},Yn=new WeakMap,Zm),mt=class extends lr{derive(i){return i}},ho=Symbol("no value"),$i,yo,js,ua,ax,ox,$m,gt=($m=class extends ix{constructor(e,t){super();J(this,ua);J(this,$i);J(this,yo,null);J(this,js,null);this.userVisibleErrorTracker=t,fe(this,$i,e);for(const n of Object.values(e))n.addChild(this)}async get(){var n,r;const e=this.lastSourceGeneration;if(((n=w(this,js))==null?void 0:n.generation)===e)return w(this,js).output;const t={generation:e,output:Qe(this,ua,ox).call(this,Qe(this,ua,ax).call(this),e,w(this,yo))};return fe(this,js,t),(r=this.userVisibleErrorTracker)==null||r.reset(),t.output}},$i=new WeakMap,yo=new WeakMap,js=new WeakMap,ua=new WeakSet,ax=async function(){const e={};for(const[n,r]of Object.entries(w(this,$i)))e[n]=r.get();const t={};for(const n in w(this,$i))t[n]=await e[n];return t},ox=async function(e,t,n=null){const r=await e,s=o=>(fe(this,yo,{inputs:r,output:Promise.resolve(o),generation:t}),o);if(!n)return s(await this.derive(r));const a=n.inputs;for(const o in w(this,$i))if(!w(this,$i)[o].canReuse(r[o],a[o]))return s(await this.derive(r));return n.output},$m),Js,jm,Yo=(jm=class{constructor(){J(this,Js,[])}addListener(i,e){let t=!1;const n=r=>{t||e(r)};i.addFreshListener(n),w(this,Js).push(()=>{i.removeFreshListener(n),t=!0})}addMultiListener3(i,e){this.addMultiListener(i,e)}addMultiListener(i,e){let t=!1,n=i.length-1;const r=async s=>{if(n>0){n--;return}if(t)return;const a=i.map(l=>l.get()),o=await Promise.all(a);e(o)};for(const s of i)s.addFreshListener(r);w(this,Js).push(()=>{for(const s of i)s.removeFreshListener(r);t=!0})}disconnect(){for(const i of w(this,Js))i()}},Js=new WeakMap,jm),va=class{constructor(i){F(this,"animFrameID",null);F(this,"animFrame",this.animFrameWrapper.bind(this));this.callback=i}requestIsPending(){return!!this.animFrameID}requestAnimFrame(){this.animFrameID||(this.animFrameID=requestAnimationFrame(this.animFrame))}cancelAnimFrame(){this.animFrameID&&(cancelAnimationFrame(this.animFrameID),this.animFrameID=0)}animFrameWrapper(i){this.animFrameID=0,this.callback(i)}},dI={floating:!0,none:!0},KT=class extends mt{getDefaultValue(){return"auto"}},QT=Math.PI*2,fo=360/QT,eE=class{},po;globalThis.HTMLElement?po=globalThis.HTMLElement:po=eE;var tE=class{define(){}},jt;globalThis.customElements?jt=globalThis.customElements:jt=new tE;var bn,nE=class{replaceSync(){}};globalThis.CSSStyleSheet?bn=globalThis.CSSStyleSheet:bn=nE;var Pn=class extends po{constructor(e){super();F(this,"shadow");F(this,"contentWrapper");this.shadow=this.attachShadow({mode:(e==null?void 0:e.mode)??"closed"}),this.contentWrapper=document.createElement("div"),this.contentWrapper.classList.add("wrapper"),this.shadow.appendChild(this.contentWrapper)}addCSS(e){this.shadow.adoptedStyleSheets.push(e)}removeCSS(e){const t=this.shadow.adoptedStyleSheets.indexOf(e);typeof t<"u"&&this.shadow.adoptedStyleSheets.splice(t,t+1)}addElement(e){return this.contentWrapper.appendChild(e)}prependElement(e){this.contentWrapper.prepend(e)}removeElement(e){return this.contentWrapper.removeChild(e)}};jt.define("twisty-managed-custom-element",Pn);var iE=null;async function lx(){return iE??(iE=ft(()=>import("./twisty-dynamic-3d-HF7KVBOE-DV65izPO.js"),[]))}var ei=Pd(async()=>(await lx()).T3I);function gd(){return devicePixelRatio||1}var cx=new bn;cx.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  place-content: center;
  contain: strict;
}

.loading {
  width: 4em;
  height: 4em;
  border-radius: 2.5em;
  border: 0.5em solid rgba(0, 0, 0, 0);
  border-top: 0.5em solid rgba(0, 0, 0, 0.7);
  border-right: 0.5em solid rgba(0, 0, 0, 0.7);
  animation: fade-in-delayed 4s, rotate 1s linear infinite;
}

@keyframes fade-in-delayed {
  0% { opacity: 0; }
  25% {opacity: 0; }
  100% { opacity: 1; }
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* TODO: This is due to stats hack. Replace with \`canvas\`. */
.wrapper > canvas {
  max-width: 100%;
  max-height: 100%;
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}

.wrapper.invisible {
  opacity: 0;
}

.wrapper.drag-input-enabled > canvas {
  cursor: grab;
}

.wrapper.drag-input-enabled > canvas:active {
  cursor: grabbing;
}
`);var vm=.1,Br,Vr,Ks,Di,ux,hx,vd,Jm,rE=(Jm=class extends EventTarget{constructor(e){super();J(this,Di);J(this,Br,new Map);J(this,Vr,new Map);J(this,Ks,!1);this.target=e}start(){this.addTargetListener("pointerdown",this.onPointerDown.bind(this)),this.addTargetListener("contextmenu",e=>{e.preventDefault()}),this.addTargetListener("touchmove",e=>e.preventDefault()),this.addTargetListener("dblclick",e=>e.preventDefault())}stop(){for(const[e,t]of w(this,Vr).entries())this.target.removeEventListener(e,t);w(this,Vr).clear(),fe(this,Ks,!1)}addTargetListener(e,t){w(this,Vr).has(e)||(this.target.addEventListener(e,t),w(this,Vr).set(e,t))}onPointerDown(e){Qe(this,Di,ux).call(this);const t={attachedInfo:{},hasMoved:!1,lastClientX:e.clientX,lastClientY:e.clientY,lastTimeStamp:e.timeStamp};w(this,Br).set(e.pointerId,t),this.target.setPointerCapture(e.pointerId)}onPointerMove(e){const t=Qe(this,Di,vd).call(this,e).movementInfo;t&&(e.preventDefault(),this.dispatchEvent(new CustomEvent("move",{detail:t})))}onPointerUp(e){const t=Qe(this,Di,vd).call(this,e),n=w(this,Br).get(e.pointerId);Qe(this,Di,hx).call(this,e),this.target.releasePointerCapture(e.pointerId);let r;if(t.hasMoved)r=new CustomEvent("up",{detail:{attachedInfo:n.attachedInfo}});else{const{altKey:s,ctrlKey:a,metaKey:o,shiftKey:l}=e;r=new CustomEvent("press",{detail:{normalizedX:e.offsetX/this.target.offsetWidth*2-1,normalizedY:1-e.offsetY/this.target.offsetHeight*2,rightClick:!!(e.button&2),keys:{altKey:s,ctrlOrMetaKey:a||o,shiftKey:l}}})}this.dispatchEvent(r)}},Br=new WeakMap,Vr=new WeakMap,Ks=new WeakMap,Di=new WeakSet,ux=function(){w(this,Ks)||(this.addTargetListener("pointermove",this.onPointerMove.bind(this)),this.addTargetListener("pointerup",this.onPointerUp.bind(this)),fe(this,Ks,!0))},hx=function(e){w(this,Br).delete(e.pointerId)},vd=function(e){const t=w(this,Br).get(e.pointerId);if(!t)return{movementInfo:null,hasMoved:!1};let n;return(e.movementX??0)!==0||(e.movementY??0)!==0?n={attachedInfo:t.attachedInfo,movementX:e.movementX,movementY:e.movementY,elapsedMs:e.timeStamp-t.lastTimeStamp}:n={attachedInfo:t.attachedInfo,movementX:e.clientX-t.lastClientX,movementY:e.clientY-t.lastClientY,elapsedMs:e.timeStamp-t.lastTimeStamp},t.lastClientX=e.clientX,t.lastClientY=e.clientY,t.lastTimeStamp=e.timeStamp,Math.abs(n.movementX)<vm&&Math.abs(n.movementY)<vm?{movementInfo:null,hasMoved:t.hasMoved}:(t.hasMoved=!0,{movementInfo:n,hasMoved:t.hasMoved})},Jm),Ba=[];async function dx(i,e,t,n){Ba.length===0&&Ba.push(_f());const r=await Ba[0];return r.setSize(i,e),r.render(t,n),r.domElement}async function sE(i,e,t,n,r){if(i===0||e===0)return;Ba.length===0&&Ba.push(_f());const s=await dx(i,e,n,r),a=t.getContext("2d");a.clearRect(0,0,t.width,t.height),a.drawImage(s,0,0)}async function _f(){const i=(await ei).WebGLRenderer,e=new i({antialias:!0,alpha:!0});return e.outputColorSpace=ni,e.setPixelRatio(gd()),e}var aE=!0,yh=500,oE=50,lE=.75;function xm(i){return(Math.exp(1-i)-(1-i))/(1-Math.E)+1}var cE=class{constructor(i,e,t,n){F(this,"scheduler",new va(this.render.bind(this)));F(this,"lastTimestamp");this.startTimestamp=i,this.momentumX=e,this.momentumY=t,this.callback=n,this.scheduler.requestAnimFrame(),this.lastTimestamp=i}render(i){const e=(this.lastTimestamp-this.startTimestamp)/yh,t=Math.min(1,(i-this.startTimestamp)/yh);if(e===0&&t>oE/yh)return;const n=xm(t)-xm(e);this.callback(this.momentumX*n*1e3,this.momentumY*n*1e3),t<1&&this.scheduler.requestAnimFrame(),this.lastTimestamp=i}},uE=class{constructor(i,e,t,n){F(this,"experimentalInertia",aE);F(this,"onMovementBound",this.onMovement.bind(this));F(this,"experimentalHasBeenMoved",!1);this.model=i,this.mirror=e,this.canvas=t,this.dragTracker=n,this.dragTracker.addEventListener("move",this.onMove.bind(this)),this.dragTracker.addEventListener("up",this.onUp.bind(this))}temperMovement(i){return Math.sign(i)*Math.log(Math.abs(i*10)+1)/6}onMove(i){var r;(r=i.detail).attachedInfo??(r.attachedInfo={});const{temperedX:e,temperedY:t}=this.onMovement(i.detail.movementX,i.detail.movementY),n=i.detail.attachedInfo;n.lastTemperedX=e*10,n.lastTemperedY=t*10,n.timestamp=i.timeStamp}onMovement(i,e){const t=this.mirror?-1:1,n=Math.min(this.canvas.offsetWidth,this.canvas.offsetHeight),r=this.temperMovement(i/n),s=this.temperMovement(e/n*lE);return this.model.twistySceneModel.orbitCoordinatesRequest.set((async()=>{const a=await this.model.twistySceneModel.orbitCoordinates.get();return{latitude:a.latitude+2*s*fo*t,longitude:a.longitude-2*r*fo}})()),{temperedX:r,temperedY:s}}onUp(i){i.preventDefault(),"lastTemperedX"in i.detail.attachedInfo&&"lastTemperedY"in i.detail.attachedInfo&&"timestamp"in i.detail.attachedInfo&&i.timeStamp-i.detail.attachedInfo.timestamp<60&&new cE(i.timeStamp,i.detail.attachedInfo.lastTemperedX,i.detail.attachedInfo.lastTemperedY,this.onMovementBound)}};async function fx(i,e,t=!1){const n=new(await ei).Spherical(e.distance,(90-(t?-1:1)*e.latitude)/fo,((t?180:0)+e.longitude)/fo);n.makeSafe(),i.position.setFromSpherical(n),i.lookAt(0,0,0)}var ym=0,hE=2,px=!1;function dE(){return ym<hE?(ym++,!1):(px=!0,!0)}function fI(){return px}var ti,mx,Ac,_o,Mo,yd,Tc,Ec,Cc,_d,Rc,Ic,Qs,ea,Lc,Km,xd=(Km=class extends Pn{constructor(e,t,n){super();J(this,ti);F(this,"scene",null);F(this,"stats",null);F(this,"rendererIsShared",dE());F(this,"loadingElement",null);J(this,Ac,new bu);J(this,_o,0);J(this,Mo,0);J(this,Tc,null);J(this,Ec,null);J(this,Cc,null);J(this,Rc,null);J(this,Ic,null);J(this,Qs,[]);J(this,ea,null);J(this,Lc,new va(this.render.bind(this)));this.model=e,this.options=n,this.scene=t??null,this.loadingElement=this.addElement(document.createElement("div")),this.loadingElement.classList.add("loading")}async connectedCallback(){this.addCSS(cx),this.addElement((await this.canvasInfo()).canvas),Qe(this,ti,yd).call(this),new ResizeObserver(Qe(this,ti,yd).bind(this)).observe(this.contentWrapper),this.orbitControls(),Qe(this,ti,mx).call(this),this.scheduleRender()}async clearCanvas(){if(this.rendererIsShared){const e=await this.canvasInfo();e.context.clearRect(0,0,e.canvas.width,e.canvas.height)}else{const t=(await this.renderer()).getContext();t.clear(t.COLOR_BUFFER_BIT)}}async renderer(){if(this.rendererIsShared)throw new Error("renderer expected to be shared.");return w(this,Tc)??fe(this,Tc,_f())}async canvasInfo(){return w(this,Ec)??fe(this,Ec,(async()=>{var n;let e;if(this.rendererIsShared)e=this.addElement(document.createElement("canvas"));else{const r=await this.renderer();e=this.addElement(r.domElement)}(n=this.loadingElement)==null||n.remove();const t=e.getContext("2d");return{canvas:e,context:t}})())}async camera(){return w(this,Rc)??fe(this,Rc,(async()=>{var t;const e=new(await ei).PerspectiveCamera(20,1,.1,20);return e.position.copy(new(await ei).Vector3(2,4,4).multiplyScalar((t=this.options)!=null&&t.backView?-1:1)),e.lookAt(0,0,0),e})())}async orbitControls(){return w(this,Ic)??fe(this,Ic,(async()=>{var t;const e=new uE(this.model,!!((t=this.options)!=null&&t.backView),(await this.canvasInfo()).canvas,await Qe(this,ti,_d).call(this));return this.model&&this.addListener(this.model.twistySceneModel.orbitCoordinates,async n=>{var s;const r=await this.camera();fx(r,n,(s=this.options)==null?void 0:s.backView),this.scheduleRender()}),e})())}addListener(e,t){e.addFreshListener(t),w(this,Qs).push(()=>{e.removeFreshListener(t)})}disconnect(){for(const e of w(this,Qs))e();fe(this,Qs,[])}experimentalNextRenderFinishedCallback(e){fe(this,ea,e)}async render(){var r,s,a;if(!this.scene)throw new Error("Attempted to render without a scene");(r=this.stats)==null||r.begin();const[e,t,n]=await Promise.all([this.scene.scene(),this.camera(),this.canvasInfo()]);this.rendererIsShared?sE(w(this,_o),w(this,Mo),n.canvas,e,t):(await this.renderer()).render(e,t),(s=this.stats)==null||s.end(),(a=w(this,ea))==null||a.call(this),fe(this,ea,null)}scheduleRender(){w(this,Lc).requestAnimFrame()}},ti=new WeakSet,mx=async function(){(await Qe(this,ti,_d).call(this)).addEventListener("press",async t=>{await this.model.twistySceneModel.movePressInput.get()==="basic"&&this.dispatchEvent(new CustomEvent("press",{detail:{pressInfo:t.detail,cameraPromise:this.camera()}}))})},Ac=new WeakMap,_o=new WeakMap,Mo=new WeakMap,yd=async function(){const e=await w(this,Ac).queue(this.camera()),t=this.contentWrapper.clientWidth,n=this.contentWrapper.clientHeight;fe(this,_o,t),fe(this,Mo,n);const r=0;let s=0,a=0;if(n>t&&(a=n-t,s=-Math.floor(.5*a)),e.aspect=t/n,e.setViewOffset(t,n-a,r,s,t,n),e.updateProjectionMatrix(),this.clearCanvas(),this.rendererIsShared){const o=await this.canvasInfo();o.canvas.width=t*gd(),o.canvas.height=n*gd(),o.canvas.style.width=`${t.toString()}px`,o.canvas.style.height=`${n.toString()}px`}else(await this.renderer()).setSize(t,n,!0);this.scheduleRender()},Tc=new WeakMap,Ec=new WeakMap,Cc=new WeakMap,_d=async function(){return w(this,Cc)??fe(this,Cc,(async()=>{var t;const e=new rE((await this.canvasInfo()).canvas);return(t=this.model)==null||t.twistySceneModel.dragInput.addFreshListener(n=>{let r=!1;switch(n){case"auto":{e.start(),r=!0;break}case"none":{e.stop();break}}this.contentWrapper.classList.toggle("drag-input-enabled",r)}),e})())},Rc=new WeakMap,Ic=new WeakMap,Qs=new WeakMap,ea=new WeakMap,Lc=new WeakMap,Km);jt.define("twisty-3d-vantage",xd);function fE(i){return i.endsWith("v")||["x","y","z"].includes(i)?"Rotation":i.startsWith("2")||["M","E","S"].includes(i)?"Inner":"Outer"}var La;function pE(){if(La)return La;La={};const i=[...Object.keys(cc.moves),...Object.keys(cc.derivedMoves)];for(const e of i)La[e]=fE(e);return La}var gx={OBTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:1,amountFactor:0,zeroAmount:0},Inner:{constantFactor:2,amountFactor:0,zeroAmount:0}},RBTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:1,amountFactor:0,zeroAmount:0},Inner:{constantFactor:1,amountFactor:0,zeroAmount:0}},OBQTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:0,amountFactor:1,zeroAmount:0},Inner:{constantFactor:0,amountFactor:2,zeroAmount:0}},RBQTM:{Rotation:{constantFactor:0,amountFactor:0,zeroAmount:0},Outer:{constantFactor:0,amountFactor:1,zeroAmount:0},Inner:{constantFactor:0,amountFactor:1,zeroAmount:0}},ETM:{Rotation:{constantFactor:1,amountFactor:0,zeroAmount:1},Outer:{constantFactor:1,amountFactor:0,zeroAmount:1},Inner:{constantFactor:1,amountFactor:0,zeroAmount:1}}};function mE(i,e){const t=gx[i];if(!t)throw new Error(`Invalid metric for 3x3x3: ${i}`);const n=pE(),r=e.quantum.toString();if(!(r in n))throw new Error(`Invalid move for 3x3x3 ${i}: ${r}`);const s=n[r],{constantFactor:a,amountFactor:o,zeroAmount:l}=t[s];return e.amount===0?l:a+o*Math.abs(e.amount)}var Zo=class extends os{constructor(i){super(),this.metric=i}traverseAlg(i){let e=0;for(const t of i.childAlgNodes())e+=this.traverseAlgNode(t);return e}traverseGrouping(i){const e=i.alg;return this.traverseAlg(e)*Math.abs(i.amount)}traverseMove(i){return this.metric(i)}traverseCommutator(i){return 2*(this.traverseAlg(i.A)+this.traverseAlg(i.B))}traverseConjugate(i){return 2*this.traverseAlg(i.A)+this.traverseAlg(i.B)}traversePause(i){return 0}traverseNewline(i){return 0}traverseLineComment(i){return 0}},gE=class extends os{traverseAlg(i){let e=0;for(const t of i.childAlgNodes())e+=this.traverseAlgNode(t);return e}traverseGrouping(i){const e=i.alg;return this.traverseAlg(e)*Math.abs(i.amount)}traverseMove(i){return 1}traverseCommutator(i){return 2*(this.traverseAlg(i.A)+this.traverseAlg(i.B))}traverseConjugate(i){return 2*this.traverseAlg(i.A)+this.traverseAlg(i.B)}traversePause(i){return 1}traverseNewline(i){return 1}traverseLineComment(i){return 1}};function vx(i){return"A"<=i&&i<="Z"}function xx(i){const e=i.family;return vx(e[0])&&e[e.length-1]==="v"||e==="x"||e==="y"||e==="z"||e==="T"?0:1}function vE(i){return 1}function yx(i){const e=i.family;return vx(e[0])&&e[e.length-1]==="v"||e==="x"||e==="y"||e==="z"||e==="T"?0:1}function xE(i){return Math.abs(i.amount)*yx(i)}var pI=An(Zo,[xx]),yE=An(Zo,[vE]),_E=An(Zo,[xE]),ME=An(Zo,[yx]),SE=An(gE,[xx]);function wE(i,e,t){if(i.id==="3x3x3"){if(e in gx)return An(Zo,[n=>mE(e,n)])(t)}else switch(e){case"ETM":return yE(t);case"RBTM":{if(i.pg)return ME(t);break}case"RBQTM":{if(i.pg)return _E(t);break}}throw new Error("Unsupported puzzle or metric.")}var bE=class extends os{traverseAlg(i){let e=0;for(const t of i.childAlgNodes())e+=this.traverseAlgNode(t);return e}traverseGrouping(i){return this.traverseAlg(i.alg)*Math.abs(i.amount)}traverseMove(i){return 1}traverseCommutator(i){return 2*(this.traverseAlg(i.A)+this.traverseAlg(i.B))}traverseConjugate(i){return 2*this.traverseAlg(i.A)+this.traverseAlg(i.B)}traversePause(i){return 1}traverseNewline(i){return 0}traverseLineComment(i){return 0}},AE=An(bE),_x={id:"2x2x2",fullName:"2×2×2 Cube",kpuzzle:xt(async()=>new Ni((await ft(async()=>{const{cube2x2x2JSON:i}=await import("./puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js");return{cube2x2x2JSON:i}},[])).cube2x2x2JSON)),svg:async()=>(await ft(async()=>{const{cube2x2x2SVG:i}=await import("./puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js");return{cube2x2x2SVG:i}},[])).cube2x2x2SVG,llSVG:xt(async()=>(await ft(async()=>{const{cube2x2x2LLSVG:i}=await import("./puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js");return{cube2x2x2LLSVG:i}},[])).cube2x2x2LLSVG),pg:xt(async()=>Dd("2x2x2")),stickeringMask:i=>Ga(_x,i),stickerings:()=>Zc("2x2x2",{use3x3x3Fallbacks:!0})};function kt(i,e,t,n){const r=[];for(const s of i){const a=z.fromString(s),{family:o,amount:l}=a;if(![-1,1].includes(l))throw new Error("Invalid config move");r.push({family:o,direction:l,type:e,from:t,to:n})}return r}var as={"x axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...kt(["R"],0,0,3),...kt(["L'"],1,0,3),...kt(["r","Rw"],2,0,2),...kt(["l'","Lw'"],3,0,2),...kt(["M'"],4,1,2),...kt(["x","Uv","Dv'"],5,0,3)]},"y axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...kt(["U"],0,0,3),...kt(["D'"],1,0,3),...kt(["u","Uw"],2,0,2),...kt(["d'","Dw'"],3,0,2),...kt(["E'"],4,1,2),...kt(["y","Uv","Dv'"],5,0,3)]},"z axis":{sliceDiameter:3,extendsThroughEntirePuzzle:!0,moveSourceInfos:[...kt(["F"],0,0,3),...kt(["B'"],1,0,3),...kt(["f","Fw"],2,0,3),...kt(["b'","Bw'"],3,0,3),...kt(["S"],4,1,2),...kt(["z","Fv","Bv'"],5,0,3)]}},mo={};for(const[i,e]of Object.entries(as))for(const t of e.moveSourceInfos)mo[t.family]={axis:i,moveSourceInfo:t};var Mx={},Qm;for(const i of Object.keys(as)){const e={};Mx[i]=e;for(const t of as[i].moveSourceInfos)(e[Qm=t.type]??(e[Qm]=[])).push(t)}var Sx={};for(const i of Object.keys(as)){const e=new Map;Sx[i]=e;for(const t of as[i].moveSourceInfos)e.get(t.from)||e.set(t.from,t)}function _m(i,e){var n;const t=(n=Mx[i][e])==null?void 0:n[0];if(!t)throw new Error(`Could not find a reference move (axis: ${i}, move source type: ${e})`);return t}var TE=(i,e)=>mo[i.family].axis===mo[e.family].axis;function EE(i,e,t,n){if(e+1===t){const d=Sx[i].get(e);if(d)return new z(new wi(d.family),n*d.direction)}const r=as[i],{sliceDiameter:s}=r;if(e===0&&t===s){const d=_m(i,5);return new z(new wi(d.family),n*d.direction)}const a=e+t>s;a&&([e,t]=[s-t,s-e]);let o=e+1,l=t;const c=o===l;c&&(l=null),o===1&&(o=null),c&&o===1&&(l=null),!c&&l===2&&(l=null);const h=_m(i,c?a?1:0:a?3:2);return new z(new wi(h.family,l,o),n*h.direction)}function CE(i,e=!0){if(i.length===0)return[];const t=mo[i[0].family].axis,n=as[t],{sliceDiameter:r}=n,s=new Map;let a=null;function o(d,f){let p=(s.get(d)??0)+f;e&&(p=p%4+5%4-1),p===0?s.delete(d):s.set(d,p)}let l=0;for(const d of Array.from(i).reverse()){l++;const{moveSourceInfo:f}=mo[d.family],p=d.amount*f.direction;switch(f.type){case 0:{const v=(d.innerLayer??1)-1;o(v,p),o(v+1,-p);break}case 1:{const v=r-(d.innerLayer??1);o(v,p),o(v+1,-p);break}case 2:{o((d.outerLayer??1)-1,p),o(d.innerLayer??2,-p);break}case 3:{o(r-(d.innerLayer??2),p),o(r-((d.outerLayer??1)-1),-p);break}case 4:{o(f.from,p),o(f.to,-p);break}case 5:{o(0,p),o(r,-p);break}}[0,2].includes(s.size)&&(a={suffixLength:l,sliceDeltas:new Map(s)})}if(s.size===0)return[];if(!a)return i;let[c,u]=a.sliceDeltas.keys();c>u&&([c,u]=[u,c]);const h=a.sliceDeltas.get(c);return[...i.slice(0,-a.suffixLength),...h!==0?[EE(t,c,u,h)]:[]]}var RE={quantumMoveOrder:()=>4,axis:{areQuantumMovesSameAxis:TE,simplifySameAxisMoves:CE}},Mf={id:"3x3x3",fullName:"3×3×3 Cube",inventedBy:["Ernő Rubik"],inventionYear:1974,kpuzzle:xt(async()=>zg),svg:xt(async()=>(await ft(async()=>{const{cube3x3x3SVG:i}=await import("./puzzles-dynamic-3x3x3-JWIWLLZA-fR7zXD4k.js");return{cube3x3x3SVG:i}},[])).cube3x3x3SVG),llSVG:xt(async()=>(await ft(async()=>{const{cube3x3x3LLSVG:i}=await import("./puzzles-dynamic-3x3x3-JWIWLLZA-fR7zXD4k.js");return{cube3x3x3LLSVG:i}},[])).cube3x3x3LLSVG),llFaceSVG:xt(async()=>(await ft(async()=>{const{cube3x3x3LLFaceSVG:i}=await import("./puzzles-dynamic-3x3x3-JWIWLLZA-fR7zXD4k.js");return{cube3x3x3LLFaceSVG:i}},[])).cube3x3x3LLFaceSVG),pg:xt(async()=>Dd("3x3x3")),stickeringMask:i=>Ga(Mf,i),stickerings:()=>Zc("3x3x3"),puzzleSpecificSimplifyOptions:RE},wx=new Da({id:"4x4x4",fullName:"4×4×4 Cube"});wx.llSVG=xt(async()=>(await ft(async()=>{const{cube4x4x4LLSVG:i}=await import("./puzzles-dynamic-4x4x4-REUXFQJ4-BNnOy5ao.js");return{cube4x4x4LLSVG:i}},[])).cube4x4x4LLSVG);var IE={id:"clock",fullName:"Clock",inventedBy:["Christopher C. Wiggs","Christopher J. Taylor"],inventionYear:1988,kpuzzle:xt(async()=>new Ni((await ft(async()=>{const{clockJSON:i}=await import("./puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js");return{clockJSON:i}},[])).clockJSON)),svg:xt(async()=>(await ft(async()=>{const{clockSVG:i}=await import("./puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js");return{clockSVG:i}},[])).clockSVG)};async function LE(i,e){const t=await i.kpuzzle(),n=new Lg(t),r=new Pg(t),s=()=>r.and([r.move("U"),r.not(r.or(r.moves(["F","BL","BR"])))]),a=()=>r.and([r.move("U"),r.not(r.move("F"))]),o=()=>r.or([a(),r.and([r.move("F"),r.not(r.or(r.moves(["U","BL","BR"])))])]),l=()=>r.not(r.or([r.and([r.move("U"),r.move("F")]),r.and([r.move("F"),r.move("BL")]),r.and([r.move("F"),r.move("BR")]),r.and([r.move("BL"),r.move("BR")])])),c=()=>r.not(r.or([r.and([r.move("F"),r.move("BL")]),r.and([r.move("F"),r.move("BR")]),r.and([r.move("BL"),r.move("BR")])]));switch(e){case"full":break;case"experimental-fto-fc":{n.set(r.not(s()),"Ignored");break}case"experimental-fto-f2t":{n.set(r.not(a()),"Ignored"),n.set(s(),"Dim");break}case"experimental-fto-sc":{n.set(r.not(o()),"Ignored"),n.set(a(),"Dim");break}case"experimental-fto-l2c":{n.set(r.not(l()),"Ignored"),n.set(o(),"Dim");break}case"experimental-fto-lbt":{n.set(r.not(c()),"Ignored"),n.set(l(),"Dim");break}case"experimental-fto-l3t":{n.set(c(),"Dim");break}default:console.warn(`Unsupported stickering for ${i.id}: ${e}. Setting all pieces to dim.`),n.set(r.and(r.moves([])),"Dim")}return n.toStickeringMask()}async function PE(){return["full","experimental-fto-fc","experimental-fto-f2t","experimental-fto-sc","experimental-fto-l2c","experimental-fto-lbt","experimental-fto-l3t"]}var DE=class extends Yr{constructor(){super({pgID:"FTO",id:"fto",fullName:"Face-Turning Octahedron",inventedBy:["Karl Rohrbach","David Pitcher"],inventionYear:1983});F(this,"stickerings",PE);F(this,"svg",xt(async()=>(await ft(async()=>{const{ftoSVG:e}=await import("./puzzles-dynamic-unofficial-NCMLO2AJ-SUsTto0f.js");return{ftoSVG:e}},[])).ftoSVG))}stickeringMask(e){return LE(this,e)}},NE=new DE,Mm="d f 0.56",UE={id:"kilominx",fullName:"Kilominx",kpuzzle:xt(()=>Ug(Mm,{includeCenterOrbits:!1,includeEdgeOrbits:!1})),pg:()=>uc(Mm,{includeCenterOrbits:!1,includeEdgeOrbits:!1}),svg:xt(async()=>(await ft(async()=>{const{kilominxSVG:i}=await import("./puzzles-dynamic-unofficial-NCMLO2AJ-SUsTto0f.js");return{kilominxSVG:i}},[])).kilominxSVG)},zE={id:"loopover",fullName:"Loopover",inventedBy:["Cary Huang"],inventionYear:2018,kpuzzle:xt(async()=>new Ni((await ft(async()=>{const{loopoverJSON:i}=await import("./puzzles-dynamic-unofficial-NCMLO2AJ-SUsTto0f.js");return{loopoverJSON:i}},[])).loopoverJSON)),svg:async()=>(await ft(async()=>{const{loopoverSVG:i}=await import("./puzzles-dynamic-unofficial-NCMLO2AJ-SUsTto0f.js");return{loopoverSVG:i}},[])).loopoverSVG};async function OE(i,e){return(await bx()).includes(e)?Ga(i,e):(console.warn(`Unsupported stickering for ${i.id}: ${e}. Setting all pieces to dim.`),Ga(i,"full"))}var FE=Pd(()=>Zc("megaminx"));function bx(){return FE}var kE=class extends Yr{constructor(){super({id:"megaminx",fullName:"Megaminx",inventionYear:1981});F(this,"stickerings",bx);F(this,"llSVG",xt(async()=>(await ft(async()=>{const{megaminxLLSVG:e}=await import("./puzzles-dynamic-megaminx-2LVHIDL4-Cm8jQJ-N.js");return{megaminxLLSVG:e}},[])).megaminxLLSVG))}stickeringMask(e){return OE(this,e)}},BE=new kE,VE={id:"melindas2x2x2x2",fullName:"Melinda's 2×2×2×2",inventedBy:["Melinda Green"],kpuzzle:xt(async()=>new Ni((await ft(async()=>{const{melindas2x2x2x2OrbitJSON:i}=await import("./puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js");return{melindas2x2x2x2OrbitJSON:i}},[])).melindas2x2x2x2OrbitJSON)),svg:xt(async()=>(await ft(async()=>{const{melindas2x2x2x2OrbitSVG:i}=await import("./puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js");return{melindas2x2x2x2OrbitSVG:i}},[])).melindas2x2x2x2OrbitSVG)},GE=class extends Yr{constructor(){super({id:"pyraminx",fullName:"Pyraminx",inventedBy:["Uwe Meffert"]});F(this,"svg",xt(async()=>(await ft(async()=>{const{pyraminxSVG:e}=await import("./puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js");return{pyraminxSVG:e}},[])).pyraminxSVG))}},HE=new GE,WE={id:"redi_cube",fullName:"Redi Cube",inventedBy:["Oskar van Deventer"],inventionYear:2009,kpuzzle:xt(async()=>new Ni((await ft(async()=>{const{rediCubeJSON:i}=await import("./puzzles-dynamic-unofficial-NCMLO2AJ-SUsTto0f.js");return{rediCubeJSON:i}},[])).rediCubeJSON)),svg:async()=>(await ft(async()=>{const{rediCubeSVG:i}=await import("./puzzles-dynamic-unofficial-NCMLO2AJ-SUsTto0f.js");return{rediCubeSVG:i}},[])).rediCubeSVG},XE={id:"square1",fullName:"Square-1",inventedBy:["Karel Hršel","Vojtech Kopský"],inventionYear:1990,kpuzzle:xt(async()=>new Ni((await ft(async()=>{const{sq1HyperOrbitJSON:i}=await import("./puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js");return{sq1HyperOrbitJSON:i}},[])).sq1HyperOrbitJSON)),svg:xt(async()=>(await ft(async()=>{const{sq1HyperOrbitSVG:i}=await import("./puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js");return{sq1HyperOrbitSVG:i}},[])).sq1HyperOrbitSVG)},qE={id:"tri_quad",fullName:"TriQuad",inventedBy:["Bram Cohen","Carl Hoff"],inventionYear:2018,kpuzzle:xt(async()=>new Ni((await ft(async()=>{const{triQuadJSON:i}=await import("./puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js");return{triQuadJSON:i}},[])).triQuadJSON)),svg:xt(async()=>(await ft(async()=>{const{triQuadSVG:i}=await import("./puzzles-dynamic-side-events-QIADTLKJ-Ce2s_gCL.js");return{triQuadSVG:i}},[])).triQuadSVG)},Ax={"3x3x3":Mf,"2x2x2":_x,"4x4x4":wx,"5x5x5":new Da({id:"5x5x5",fullName:"5×5×5 Cube"}),"6x6x6":new Da({id:"6x6x6",fullName:"6×6×6 Cube"}),"7x7x7":new Da({id:"7x7x7",fullName:"7×7×7 Cube"}),"40x40x40":new Da({id:"40x40x40",fullName:"40×40×40 Cube"}),clock:IE,megaminx:BE,pyraminx:HE,skewb:new Yr({id:"skewb",fullName:"Skewb",inventedBy:["Tony Durham"]}),square1:XE,fto:NE,gigaminx:new Yr({id:"gigaminx",fullName:"Gigaminx",inventedBy:["Tyler Fox"],inventionYear:2006}),master_tetraminx:new Yr({pgID:"master tetraminx",id:"master_tetraminx",fullName:"Master Tetraminx",inventedBy:["Katsuhiko Okamoto"],inventionYear:2002}),kilominx:UE,redi_cube:WE,melindas2x2x2x2:VE,loopover:zE,tri_quad:qE};function Md(i,e){if(i===e)return!0;if(i.length!==e.length)return!1;for(let t=0;t<i.length;t++)if(i[t]!==e[t])return!1;return!0}function Sm(i,e,t){if(i===e)return!0;if(i.length!==e.length)return!1;for(let n=0;n<i.length;n++)if(!t(i[n],e[n]))return!1;return!0}function Sd(i,e,t){return Tg(i,t-e,e)}var YE=class{constructor(i){F(this,"catchingUp",!1);F(this,"pendingFrame",!1);F(this,"tempoScale");F(this,"scheduler",new va(this.animFrame.bind(this)));F(this,"catchUpMs",500);F(this,"lastTimestamp",0);this.model=i,i.tempoScale.addFreshListener(e=>{this.tempoScale=e})}start(){this.catchingUp||(this.lastTimestamp=performance.now()),this.catchingUp=!0,this.pendingFrame=!0,this.scheduler.requestAnimFrame()}stop(){this.catchingUp=!1,this.scheduler.cancelAnimFrame()}animFrame(i){this.scheduler.requestAnimFrame();const e=this.tempoScale*(i-this.lastTimestamp)/this.catchUpMs;this.lastTimestamp=i,this.model.catchUpMove.set((async()=>{const t=await this.model.catchUpMove.get();if(t.move===null)return t;const n=t.amount+e;return n>=1?(this.pendingFrame=!0,this.stop(),this.model.timestampRequest.set("end"),{move:null,amount:0}):(this.pendingFrame=!1,{move:t.move,amount:n})})())}},So,wd,Pc,eg,ZE=(eg=class{constructor(i,e){J(this,So);F(this,"playing",!1);F(this,"direction",1);F(this,"catchUpHelper");F(this,"model");F(this,"lastDatestamp",0);F(this,"lastTimestampPromise");F(this,"scheduler",new va(this.animFrame.bind(this)));J(this,Pc,new bu);this.delegate=e,this.model=i,this.lastTimestampPromise=Qe(this,So,wd).call(this),this.model.playingInfo.addFreshListener(this.onPlayingProp.bind(this)),this.catchUpHelper=new YE(this.model),this.model.catchUpMove.addFreshListener(this.onCatchUpMoveProp.bind(this))}async onPlayingProp(i){i.playing!==this.playing&&(i.playing?this.play(i):this.pause())}async onCatchUpMoveProp(i){const e=i.move!==null;e!==this.catchUpHelper.catchingUp&&(e?this.catchUpHelper.start():this.catchUpHelper.stop()),this.scheduler.requestAnimFrame()}jumpToStart(i){this.model.timestampRequest.set("start"),this.pause(),i!=null&&i.flash&&this.delegate.flash()}jumpToEnd(i){this.model.timestampRequest.set("end"),this.pause(),i!=null&&i.flash&&this.delegate.flash()}playPause(){this.playing?this.pause():this.play()}async play(i){const e=(i==null?void 0:i.direction)??1,t=await this.model.coarseTimelineInfo.get();((i==null?void 0:i.autoSkipToOtherEndIfStartingAtBoundary)??!0)&&(e===1&&t.atEnd&&(this.model.timestampRequest.set("start"),this.delegate.flash()),e===-1&&t.atStart&&(this.model.timestampRequest.set("end"),this.delegate.flash())),this.model.playingInfo.set({playing:!0,direction:e,untilBoundary:(i==null?void 0:i.untilBoundary)??"entire-timeline",loop:(i==null?void 0:i.loop)??!1}),this.playing=!0,this.lastDatestamp=performance.now(),this.lastTimestampPromise=Qe(this,So,wd).call(this),this.scheduler.requestAnimFrame()}pause(){this.playing=!1,this.scheduler.cancelAnimFrame(),this.model.playingInfo.set({playing:!1,untilBoundary:"entire-timeline"})}async animFrame(i){this.playing&&this.scheduler.requestAnimFrame();const e=this.lastDatestamp,t=await w(this,Pc).queue(Promise.all([this.model.playingInfo.get(),this.lastTimestampPromise,this.model.timeRange.get(),this.model.tempoScale.get(),this.model.currentMoveInfo.get()])),[n,r,s,a,o]=t;if(!n.playing){this.playing=!1;return}let l=o.earliestEnd;(o.currentMoves.length===0||n.untilBoundary==="entire-timeline")&&(l=s.end);let c=o.latestStart;(o.currentMoves.length===0||n.untilBoundary==="entire-timeline")&&(c=s.start);let u=(i-e)*this.direction*a;u=Math.max(u,1),u*=n.direction;let h=r+u,d=null;h>=l?n.loop?h=Sd(h,s.start,s.end):(h===s.end?d="end":h=l,this.playing=!1,this.model.playingInfo.set({playing:!1})):h<=c&&(n.loop?h=Sd(h,s.start,s.end):(h===s.start?d="start":h=c,this.playing=!1,this.model.playingInfo.set({playing:!1}))),this.lastDatestamp=i,this.lastTimestampPromise=Promise.resolve(h),this.model.timestampRequest.set(d??h)}},So=new WeakSet,wd=async function(){return(await this.model.detailedTimelineInfo.get()).timestamp},Pc=new WeakMap,eg),$E=class{constructor(i,e){F(this,"animationController");this.model=i,this.animationController=new ZE(i,e)}jumpToStart(i){this.animationController.jumpToStart(i)}jumpToEnd(i){this.animationController.jumpToEnd(i)}togglePlay(i){typeof i>"u"&&this.animationController.playPause(),i?this.animationController.play():this.animationController.pause()}async visitTwizzleLink(){const i=document.createElement("a");i.href=await this.model.twizzleLink(),i.target="_blank",i.click()}},jE={"bottom-row":!0,none:!0},JE=class extends mt{getDefaultValue(){return"auto"}},Sf=new bn;Sf.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.wrapper > * {
  width: 100%;
  height: 100%;
  overflow: hidden;
}

.wrapper.back-view-side-by-side {
  grid-template-columns: 1fr 1fr;
}

.wrapper.back-view-top-right {
  grid-template-columns: 3fr 1fr;
  grid-template-rows: 1fr 3fr;
}

.wrapper.back-view-top-right > :nth-child(1) {
  grid-row: 1 / 3;
  grid-column: 1 / 3;
}

.wrapper.back-view-top-right > :nth-child(2) {
  grid-row: 1 / 2;
  grid-column: 2 / 3;
}
`);var ql="http://www.w3.org/2000/svg",wm="data-copy-id",bm=0;function KE(){return bm+=1,`svg${bm.toString()}`}var QE={dim:{white:"#dddddd",orange:"#884400",limegreen:"#008800",red:"#660000","rgb(34, 102, 255)":"#000088",yellow:"#888800","rgb(102, 0, 153)":"rgb(50, 0, 76)",purple:"#3f003f"},oriented:"#44ddcc",ignored:"#555555",invisible:"#00000000"},eC=class{constructor(i,e,t,n=!1){F(this,"wrapperElement");F(this,"svgElement");F(this,"gradientDefs");F(this,"originalColors",{});F(this,"gradients",{});F(this,"svgID");if(this.kpuzzle=i,this.showUnknownOrientations=n,!e)throw new Error(`No SVG definition for puzzle type: ${i.name()}`);this.svgID=KE(),this.wrapperElement=document.createElement("div"),this.wrapperElement.classList.add("svg-wrapper"),this.wrapperElement.innerHTML=e;const r=this.wrapperElement.querySelector("svg");if(!r)throw new Error("Could not get SVG element");if(this.svgElement=r,ql!==r.namespaceURI)throw new Error("Unexpected XML namespace");r.style.maxWidth="100%",r.style.maxHeight="100%",this.gradientDefs=document.createElementNS(ql,"defs"),r.insertBefore(this.gradientDefs,r.firstChild);for(const s of i.definition.orbits)for(let a=0;a<s.numPieces;a++)for(let o=0;o<s.numOrientations;o++){const l=this.elementID(s.orbitName,a,o),c=this.elementByID(l);let u=c==null?void 0:c.style.fill;t?(()=>{const h=t.orbits;if(!h)return;const d=h[s.orbitName];if(!d)return;const f=d.pieces[a];if(!f)return;const p=f.facelets[o];if(!p)return;const v=typeof p=="string"?p:p==null?void 0:p.mask,g=QE[v];typeof g=="string"?u=g:g&&(u=g[u])})():u=c==null?void 0:c.style.fill,this.originalColors[l]=u,this.gradients[l]=this.newGradient(l,u),this.gradientDefs.appendChild(this.gradients[l]),c==null||c.setAttribute("style",`fill: url(#grad-${this.svgID}-${l})`)}for(const s of Array.from(r.querySelectorAll(`[${wm}]`))){const a=s.getAttribute(wm);s.setAttribute("style",`fill: url(#grad-${this.svgID}-${a})`)}this.showUnknownOrientations&&this.drawPattern(this.kpuzzle.defaultPattern())}drawPattern(i,e,t){this.draw(i,e,t)}draw(i,e,t){var r;const n=e==null?void 0:e.experimentalToTransformation();if(!i)throw new Error("Distinguishable pieces are not handled for SVG yet!");for(const s of i.kpuzzle.definition.orbits){const a=i.patternData[s.orbitName],o=n?n.transformationData[s.orbitName]:null;for(let l=0;l<s.numPieces;l++)for(let c=0;c<s.numOrientations;c++){const u=this.elementID(s.orbitName,l,c),h=this.elementID(s.orbitName,a.pieces[l],(s.numOrientations-a.orientation[l]+c)%s.numOrientations);let d=!1;if(o){const f=this.elementID(s.orbitName,o.permutation[l],(s.numOrientations-o.orientationDelta[l]+c)%s.numOrientations);h===f&&(d=!0),t=t||0;const p=100*(1-t*t*(2-t*t));this.gradients[u].children[0].setAttribute("stop-color",this.originalColors[h]),this.gradients[u].children[0].setAttribute("offset",`${Math.max(p-5,0)}%`),this.gradients[u].children[1].setAttribute("offset",`${Math.max(p-5,0)}%`),this.gradients[u].children[2].setAttribute("offset",`${p}%`),this.gradients[u].children[3].setAttribute("offset",`${p}%`),this.gradients[u].children[3].setAttribute("stop-color",this.originalColors[f])}else d=!0;d&&(this.showUnknownOrientations&&((r=a.orientationMod)==null?void 0:r[l])===1?(this.gradients[u].children[0].setAttribute("stop-color","#000"),this.gradients[u].children[0].setAttribute("offset","5%"),this.gradients[u].children[1].setAttribute("offset","5%"),this.gradients[u].children[2].setAttribute("offset","20%"),this.gradients[u].children[3].setAttribute("offset","20%"),this.gradients[u].children[3].setAttribute("stop-color",this.originalColors[h])):(this.gradients[u].children[0].setAttribute("stop-color",this.originalColors[h]),this.gradients[u].children[0].setAttribute("offset","100%"),this.gradients[u].children[1].setAttribute("offset","100%"),this.gradients[u].children[2].setAttribute("offset","100%"),this.gradients[u].children[3].setAttribute("offset","100%")))}}}newGradient(i,e){const t=document.createElementNS(ql,"radialGradient");t.setAttribute("id",`grad-${this.svgID}-${i}`),t.setAttribute("r","70.7107%");const n=[{offset:0,color:e},{offset:0,color:"black"},{offset:0,color:"black"},{offset:0,color:e}];for(const r of n){const s=document.createElementNS(ql,"stop");s.setAttribute("offset",`${r.offset}%`),s.setAttribute("stop-color",r.color),s.setAttribute("stop-opacity","1"),t.appendChild(s)}return t}elementID(i,e,t){return`${i}-l${e}-o${t}`}elementByID(i){return this.wrapperElement.querySelector(`#${i}`)}},Tx=new bn;Tx.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
}

.svg-wrapper,
twisty-2d-svg,
svg {
  width: 100%;
  height: 100%;
  display: grid;
  min-height: 0;
}

svg {
  animation: fade-in 0.25s ease-in;
}

@keyframes fade-in {
  from { opacity: 0; }
  to { opacity: 1; }
}
`);var ta,na,tg,Ex=(tg=class extends Pn{constructor(e,t,n,r,s){var a;super();F(this,"svgWrapper");F(this,"scheduler",new va(this.render.bind(this)));J(this,ta,null);J(this,na,new Yo);this.model=e,this.kpuzzle=t,this.svgSource=n,this.options=r,this.puzzleLoader=s,this.addCSS(Tx),this.resetSVG(),w(this,na).addListener(this.model.puzzleID,o=>{(s==null?void 0:s.id)!==o&&this.disconnect()}),w(this,na).addListener(this.model.legacyPosition,this.onPositionChange.bind(this)),(a=this.options)!=null&&a.experimentalStickeringMask&&this.experimentalSetStickeringMask(this.options.experimentalStickeringMask)}disconnect(){w(this,na).disconnect()}onPositionChange(e){var t;try{if(e.movesInProgress.length>0){const n=e.movesInProgress[0].move;let r=n;e.movesInProgress[0].direction===-1&&(r=n.invert());const s=e.pattern.applyMove(r);this.svgWrapper.draw(e.pattern,s,e.movesInProgress[0].fraction)}else this.svgWrapper.draw(e.pattern),fe(this,ta,e)}catch(n){console.warn("Bad position (this doesn't necessarily mean something is wrong). Pre-emptively disconnecting:",(t=this.puzzleLoader)==null?void 0:t.id,n),this.disconnect()}}scheduleRender(){this.scheduler.requestAnimFrame()}experimentalSetStickeringMask(e){this.resetSVG(e)}resetSVG(e){this.svgWrapper&&this.removeElement(this.svgWrapper.wrapperElement),this.kpuzzle&&(this.svgWrapper=new eC(this.kpuzzle,this.svgSource,e),this.addElement(this.svgWrapper.wrapperElement),w(this,ta)&&this.onPositionChange(w(this,ta)))}render(){}},ta=new WeakMap,na=new WeakMap,tg);jt.define("twisty-2d-puzzle",Ex);var wo,Dc,ng,tC=(ng=class{constructor(i,e,t,n){J(this,wo,new Yo);J(this,Dc,null);this.model=i,this.schedulable=e,this.puzzleLoader=t,this.effectiveVisualization=n,this.twisty2DPuzzle(),w(this,wo).addListener(this.model.twistySceneModel.stickeringMask,async r=>{(await this.twisty2DPuzzle()).experimentalSetStickeringMask(r)})}disconnect(){w(this,wo).disconnect()}scheduleRender(){}async twisty2DPuzzle(){return w(this,Dc)??fe(this,Dc,(async()=>{const i=this.effectiveVisualization==="experimental-2D-LL-face"?this.puzzleLoader.llFaceSVG():this.effectiveVisualization==="experimental-2D-LL"?this.puzzleLoader.llSVG():this.puzzleLoader.svg();return new Ex(this.model,await this.puzzleLoader.kpuzzle(),await i,{},this.puzzleLoader)})())}},wo=new WeakMap,Dc=new WeakMap,ng),bo,Nc,ji,ig,Cx=(ig=class extends Pn{constructor(e,t){super();J(this,bo,new Yo);J(this,Nc);J(this,ji,null);this.model=e,this.effectiveVisualization=t}disconnect(){w(this,bo).disconnect()}async connectedCallback(){this.addCSS(Sf),this.model&&w(this,bo).addListener(this.model.twistyPlayerModel.puzzleLoader,this.onPuzzleLoader.bind(this))}async scene(){return w(this,Nc)??fe(this,Nc,(async()=>new(await ei).Scene)())}scheduleRender(){var e;(e=w(this,ji))==null||e.scheduleRender()}currentTwisty2DPuzzleWrapper(){return w(this,ji)}async setCurrentTwisty2DPuzzleWrapper(e){const t=w(this,ji);fe(this,ji,e),t==null||t.disconnect();const n=e.twisty2DPuzzle();this.contentWrapper.textContent="",this.addElement(await n)}async onPuzzleLoader(e){var n;(n=w(this,ji))==null||n.disconnect();const t=new tC(this.model.twistyPlayerModel,this,e,this.effectiveVisualization);this.setCurrentTwisty2DPuzzleWrapper(t)}},bo=new WeakMap,Nc=new WeakMap,ji=new WeakMap,ig);jt.define("twisty-2d-scene-wrapper",Cx);var Ji,rg,Au=(rg=class{constructor(i,e,t){J(this,Ji,null);this.elem=i,this.prefix=e,this.validSuffixes=t}clearValue(){w(this,Ji)&&this.elem.contentWrapper.classList.remove(w(this,Ji)),fe(this,Ji,null)}setValue(i){if(!this.validSuffixes.includes(i))throw new Error(`Invalid suffix: ${i}`);const e=`${this.prefix}${i}`,t=w(this,Ji)!==e;return t&&(this.clearValue(),this.elem.contentWrapper.classList.add(e),fe(this,Ji,e)),t}},Ji=new WeakMap,rg),Ao,sg,Rx=(sg=class{constructor(){J(this,Ao);F(this,"reject");F(this,"promise",new Promise((i,e)=>{fe(this,Ao,i),this.reject=e}))}handleNewValue(i){w(this,Ao).call(this,i)}},Ao=new WeakMap,sg),On,Uc,ag,Ix=(ag=class extends EventTarget{constructor(e,t,n,r){super();J(this,On,new Yo);J(this,Uc,null);this.model=e,this.schedulable=t,this.puzzleLoader=n,this.visualizationStrategy=r,this.twisty3DPuzzle(),w(this,On).addListener(this.model.puzzleLoader,s=>{this.puzzleLoader.id!==s.id&&this.disconnect()}),w(this,On).addListener(this.model.legacyPosition,async s=>{try{(await this.twisty3DPuzzle()).onPositionChange(s),this.scheduleRender()}catch{this.disconnect()}}),w(this,On).addListener(this.model.twistySceneModel.hintFacelet,async s=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({hintFacelets:s==="auto"?"floating":s}),this.scheduleRender()}),w(this,On).addListener(this.model.twistySceneModel.foundationDisplay,async s=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({showFoundation:s!=="none"}),this.scheduleRender()}),w(this,On).addListener(this.model.twistySceneModel.stickeringMask,async s=>{(await this.twisty3DPuzzle()).setStickeringMask(s),this.scheduleRender()}),w(this,On).addListener(this.model.twistySceneModel.faceletScale,async s=>{(await this.twisty3DPuzzle()).experimentalUpdateOptions({faceletScale:s}),this.scheduleRender()}),w(this,On).addMultiListener3([this.model.twistySceneModel.stickeringMask,this.model.twistySceneModel.foundationStickerSprite,this.model.twistySceneModel.hintStickerSprite],async s=>{"experimentalUpdateTexture"in await this.twisty3DPuzzle()&&((await this.twisty3DPuzzle()).experimentalUpdateTexture(s[0].specialBehaviour==="picture",s[1],s[2]),this.scheduleRender())})}disconnect(){w(this,On).disconnect()}scheduleRender(){this.schedulable.scheduleRender(),this.dispatchEvent(new CustomEvent("render-scheduled"))}async twisty3DPuzzle(){return w(this,Uc)??fe(this,Uc,(async()=>{const e=lx();if(this.puzzleLoader.id==="3x3x3"&&this.visualizationStrategy==="Cube3D"){const[t,n,r,s]=await Promise.all([this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.stickeringMask.get(),this.model.twistySceneModel.initialHintFaceletsAnimation.get()]);return(await e).cube3DShim(()=>this.schedulable.scheduleRender(),{foundationSprite:t,hintSprite:n,experimentalStickeringMask:r,initialHintFaceletsAnimation:s})}else{const[t,n,r,s]=await Promise.all([this.model.twistySceneModel.hintFacelet.get(),this.model.twistySceneModel.foundationStickerSprite.get(),this.model.twistySceneModel.hintStickerSprite.get(),this.model.twistySceneModel.faceletScale.get()]),a=(await e).pg3dShim(()=>this.schedulable.scheduleRender(),this.puzzleLoader,t==="auto"?"floating":t,s,this.puzzleLoader.id==="kilominx");return a.then(o=>o.experimentalUpdateTexture(!0,n??void 0,r??void 0)),a}})())}async raycastMove(e,t){const n=await this.twisty3DPuzzle();if(!("experimentalGetControlTargets"in n)){console.info("not PG3D! skipping raycast");return}const r=n.experimentalGetControlTargets(),[s,a]=await Promise.all([e,this.model.twistySceneModel.movePressCancelOptions.get()]),o=s.intersectObjects(r);if(o.length>0){const l=n.getClosestMoveToAxis(o[0].point,t);l?this.model.experimentalAddMove(l.move,{cancel:a}):console.info("Skipping move!")}}},On=new WeakMap,Uc=new WeakMap,ag),zc,ia,fi,Oc,Gr,pi,To,Fc,og,bd=(og=class extends Pn{constructor(e){super();J(this,zc,new Au(this,"back-view-",["auto","none","side-by-side","top-right"]));J(this,ia,new Yo);J(this,fi,null);J(this,Oc);J(this,Gr,new Set);J(this,pi,null);J(this,To,new Rx);J(this,Fc,new bu);this.model=e}disconnect(){w(this,ia).disconnect()}async connectedCallback(){this.addCSS(Sf);const e=new xd(this.model,this);this.addVantage(e),this.model&&(w(this,ia).addMultiListener([this.model.puzzleLoader,this.model.visualizationStrategy],this.onPuzzle.bind(this)),w(this,ia).addListener(this.model.backView,this.onBackView.bind(this))),this.scheduleRender()}setBackView(e){const t=["side-by-side","top-right"].includes(e),n=w(this,fi)!==null;w(this,zc).setValue(e),t?n||(fe(this,fi,new xd(this.model,this,{backView:!0})),this.addVantage(w(this,fi)),this.scheduleRender()):w(this,fi)&&(this.removeVantage(w(this,fi)),fe(this,fi,null))}onBackView(e){this.setBackView(e)}async onPress(e){const t=w(this,pi);if(!t){console.info("no wrapper; skipping scene wrapper press!");return}const n=(async()=>{const[r,s]=await Promise.all([e.detail.cameraPromise,ei]),a=new s.Raycaster,o=new(await ei).Vector2(e.detail.pressInfo.normalizedX,e.detail.pressInfo.normalizedY);return a.setFromCamera(o,r),a})();t.raycastMove(n,{invert:!e.detail.pressInfo.rightClick,depth:e.detail.pressInfo.keys.ctrlOrMetaKey?"rotation":e.detail.pressInfo.keys.shiftKey?"secondSlice":"none"})}async scene(){return w(this,Oc)??fe(this,Oc,(async()=>new(await ei).Scene)())}addVantage(e){e.addEventListener("press",this.onPress.bind(this)),w(this,Gr).add(e),this.contentWrapper.appendChild(e)}removeVantage(e){var t;w(this,Gr).delete(e),e.remove(),e.disconnect(),(t=w(this,pi))==null||t.disconnect()}experimentalVantages(){return w(this,Gr).values()}scheduleRender(){for(const e of w(this,Gr))e.scheduleRender()}async setCurrentTwisty3DPuzzleWrapper(e,t){const n=w(this,pi);try{fe(this,pi,t),n==null||n.disconnect(),e.add(await t.twisty3DPuzzle())}finally{n&&e.remove(await n.twisty3DPuzzle())}w(this,To).handleNewValue(t)}async experimentalTwisty3DPuzzleWrapper(){return w(this,pi)||w(this,To).promise}async onPuzzle(e){var r;if(e[1]==="2D")return;(r=w(this,pi))==null||r.disconnect();const[t,n]=await w(this,Fc).queue(Promise.all([this.scene(),new Ix(this.model,this,e[0],e[1])]));this.setCurrentTwisty3DPuzzleWrapper(t,n)}},zc=new WeakMap,ia=new WeakMap,fi=new WeakMap,Oc=new WeakMap,Gr=new WeakMap,pi=new WeakMap,To=new WeakMap,Fc=new WeakMap,og);jt.define("twisty-3d-scene-wrapper",bd);var Lx=new bn;Lx.replaceSync(`
:host {
  width: 384px;
  height: 24px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
}

.wrapper {
  grid-auto-flow: column;
}

.viewer-link-none .twizzle-link-button {
  display: none;
}

.wrapper twisty-button,
.wrapper twisty-control-button {
  width: inherit;
  height: inherit;
}
`);var Px=new bn;Px.replaceSync(`
:host:not([hidden]) {
  display: grid;
}

:host {
  width: 48px;
  height: 24px;
}

.wrapper {
  width: 100%;
  height: 100%;
}

button {
  width: 100%;
  height: 100%;
  border: none;
  
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  background-color: rgba(196, 196, 196, 0.75);
}

button:enabled {
  background-color: rgba(196, 196, 196, 0.75)
}

.dark-mode button:enabled {
  background-color: #88888888;
}

button:disabled {
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 0.25;
  pointer-events: none;
}

.dark-mode button:disabled {
  background-color: #ffffff44;
}

button:enabled:hover {
  background-color: rgba(255, 255, 255, 0.75);
  box-shadow: 0 0 1em rgba(0, 0, 0, 0.25);
  cursor: pointer;
}

/* TODO: fullscreen icons have too much padding?? */
.svg-skip-to-start button,
button.svg-skip-to-start {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjQzIDEwMzdxMTktMTkgMzItMTN0MTMgMzJ2MTQ3MnEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djcxMHEwIDI2LTEzIDMydC0zMi0xM2wtNzEwLTcxMHEtOS05LTEzLTE5djY3OHEwIDI2LTE5IDQ1dC00NSAxOUg5NjBxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWgxMjhxMjYgMCA0NSAxOXQxOSA0NXY2NzhxNC0xMSAxMy0xOWw3MTAtNzEwcTE5LTE5IDMyLTEzdDEzIDMydjcxMHE0LTExIDEzLTE5eiIvPjwvc3ZnPg==");
}

.svg-skip-to-end button,
button.svg-skip-to-end {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik05NDEgMjU0N3EtMTkgMTktMzIgMTN0LTEzLTMyVjEwNTZxMC0yNiAxMy0zMnQzMiAxM2w3MTAgNzEwcTggOCAxMyAxOXYtNzEwcTAtMjYgMTMtMzJ0MzIgMTNsNzEwIDcxMHE4IDggMTMgMTl2LTY3OHEwLTI2IDE5LTQ1dDQ1LTE5aDEyOHEyNiAwIDQ1IDE5dDE5IDQ1djE0MDhxMCAyNi0xOSA0NXQtNDUgMTloLTEyOHEtMjYgMC00NS0xOXQtMTktNDV2LTY3OHEtNSAxMC0xMyAxOWwtNzEwIDcxMHEtMTkgMTktMzIgMTN0LTEzLTMydi03MTBxLTUgMTAtMTMgMTl6Ii8+PC9zdmc+");
}

.svg-step-forward button,
button.svg-step-forward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDE1NjhxMCAyNi0xOSA0NWwtNTEyIDUxMnEtMTkgMTktNDUgMTl0LTQ1LTE5cS0xOS0xOS0xOS00NXYtMjU2aC0yMjRxLTk4IDAtMTc1LjUgNnQtMTU0IDIxLjVxLTc2LjUgMTUuNS0xMzMgNDIuNXQtMTA1LjUgNjkuNXEtNDkgNDIuNS04MCAxMDF0LTQ4LjUgMTM4LjVxLTE3LjUgODAtMTcuNSAxODEgMCA1NSA1IDEyMyAwIDYgMi41IDIzLjV0Mi41IDI2LjVxMCAxNS04LjUgMjV0LTIzLjUgMTBxLTE2IDAtMjgtMTctNy05LTEzLTIydC0xMy41LTMwcS03LjUtMTctMTAuNS0yNC0xMjctMjg1LTEyNy00NTEgMC0xOTkgNTMtMzMzIDE2Mi00MDMgODc1LTQwM2gyMjR2LTI1NnEwLTI2IDE5LTQ1dDQ1LTE5cTI2IDAgNDUgMTlsNTEyIDUxMnExOSAxOSAxOSA0NXoiLz48L3N2Zz4=");
}

.svg-step-backward button,
button.svg-step-backward {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNjg4IDIwNDhxMCAxNjYtMTI3IDQ1MS0zIDctMTAuNSAyNHQtMTMuNSAzMHEtNiAxMy0xMyAyMi0xMiAxNy0yOCAxNy0xNSAwLTIzLjUtMTB0LTguNS0yNXEwLTkgMi41LTI2LjV0Mi41LTIzLjVxNS02OCA1LTEyMyAwLTEwMS0xNy41LTE4MXQtNDguNS0xMzguNXEtMzEtNTguNS04MC0xMDF0LTEwNS41LTY5LjVxLTU2LjUtMjctMTMzLTQyLjV0LTE1NC0yMS41cS03Ny41LTYtMTc1LjUtNmgtMjI0djI1NnEwIDI2LTE5IDQ1dC00NSAxOXEtMjYgMC00NS0xOWwtNTEyLTUxMnEtMTktMTktMTktNDV0MTktNDVsNTEyLTUxMnExOS0xOSA0NS0xOXQ0NSAxOXExOSAxOSAxOSA0NXYyNTZoMjI0cTcxMyAwIDg3NSA0MDMgNTMgMTM0IDUzIDMzM3oiLz48L3N2Zz4=");
}

.svg-pause button,
button.svg-pause {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNTYwIDEwODh2MTQwOHEwIDI2LTE5IDQ1dC00NSAxOWgtNTEycS0yNiAwLTQ1LTE5dC0xOS00NVYxMDg4cTAtMjYgMTktNDV0NDUtMTloNTEycTI2IDAgNDUgMTl0MTkgNDV6bS04OTYgMHYxNDA4cTAgMjYtMTkgNDV0LTQ1IDE5aC01MTJxLTI2IDAtNDUtMTl0LTE5LTQ1VjEwODhxMC0yNiAxOS00NXQ0NS0xOWg1MTJxMjYgMCA0NSAxOXQxOSA0NXoiLz48L3N2Zz4=");
}

.svg-play button,
button.svg-play {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzNTg0IiBoZWlnaHQ9IjM1ODQiIHZpZXdCb3g9IjAgMCAzNTg0IDM1ODQiPjxwYXRoIGQ9Ik0yNDcyLjUgMTgyM2wtMTMyOCA3MzhxLTIzIDEzLTM5LjUgM3QtMTYuNS0zNlYxMDU2cTAtMjYgMTYuNS0zNnQzOS41IDNsMTMyOCA3MzhxMjMgMTMgMjMgMzF0LTIzIDMxeiIvPjwvc3ZnPg==");
}

.svg-enter-fullscreen button,
button.svg-enter-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTkgMTZIN3Y1aDV2LTJIOXYtM3ptLTItNGgyVjloM1Y3SDd2NXptMTIgN2gtM3YyaDV2LTVoLTJ2M3pNMTYgN3YyaDN2M2gyVjdoLTV6Ii8+PC9zdmc+");
}

.svg-exit-fullscreen button,
button.svg-exit-fullscreen {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGhlaWdodD0iMjgiIHZpZXdCb3g9IjAgMCAyOCAyOCIgd2lkdGg9IjI4Ij48cGF0aCBkPSJNMiAyaDI0djI0SDJ6IiBmaWxsPSJub25lIi8+PHBhdGggZD0iTTcgMThoM3YzaDJ2LTVIN3Yyem0zLThIN3YyaDVWN2gtMnYzem02IDExaDJ2LTNoM3YtMmgtNXY1em0yLTExVjdoLTJ2NWg1di0yaC0zeiIvPjwvc3ZnPg==");
}

.svg-twizzle-tw button,
button.svg-twizzle-tw {
  background-image: url("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODY0IiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMzk3LjU4MSAxNTEuMTh2NTcuMDg0aC04OS43MDN2MjQwLjM1MmgtNjYuOTU1VjIwOC4yNjRIMTUxLjIydi01Ny4wODNoMjQ2LjM2MXptNTQuMzEgNzEuNjc3bDcuNTEyIDMzLjY5MmMyLjcxOCAxMi4xNiA1LjU4IDI0LjY4IDguNTg0IDM3LjU1NWEyMTgwLjc3NSAyMTgwLjc3NSAwIDAwOS40NDIgMzguODQzIDEyNjYuMyAxMjY2LjMgMCAwMDEwLjA4NiAzNy41NTVjMy43Mi0xMi41OSA3LjM2OC0yNS40NjYgMTAuOTQ1LTM4LjYyOCAzLjU3Ni0xMy4xNjIgNy4wMS0yNi4xMSAxMC4zLTM4Ljg0M2w1Ljc2OS0yMi40NTZjMS4yNDgtNC44ODcgMi40NzItOS43MDUgMy42NzQtMTQuNDU1IDMuMDA0LTExLjg3NSA1LjY1MS0yMi45NjIgNy45NC0zMy4yNjNoNDYuMzU0bDIuMzg0IDEwLjU2M2EyMDAwLjc3IDIwMDAuNzcgMCAwMDMuOTM1IDE2LjgyOGw2LjcxMSAyNy43MWMxLjIxMyA0Ljk1NiAyLjQ1IDkuOTggMy43MDkgMTUuMDczYTMxMTkuNzc3IDMxMTkuNzc3IDAgMDA5Ljg3MSAzOC44NDMgMTI0OS4yMjcgMTI0OS4yMjcgMCAwMDEwLjczIDM4LjYyOCAxOTA3LjYwNSAxOTA3LjYwNSAwIDAwMTAuMzAxLTM3LjU1NSAxMzk3Ljk0IDEzOTcuOTQgMCAwMDkuNjU3LTM4Ljg0M2w0LjQtMTkuMDQ2Yy43MTUtMy4xMyAxLjQyMS02LjIzNiAyLjExOC05LjMyMWw5LjU3Ny00Mi44OGg2Ni41MjZhMjk4OC43MTggMjk4OC43MTggMCAwMS0xOS41MjkgNjYuMzExbC01LjcyOCAxOC40ODJhMzIzNy40NiAzMjM3LjQ2IDAgMDEtMTQuMDE1IDQzLjc1MmMtNi40MzggMTkuNi0xMi43MzMgMzcuNjk4LTE4Ljg4NSA1NC4yOTRsLTMuMzA2IDguODI1Yy00Ljg4NCAxMi44OTgtOS40MzMgMjQuMjYzLTEzLjY0NyAzNC4wOTVoLTQ5Ljc4N2E4NDE3LjI4OSA4NDE3LjI4OSAwIDAxLTIxLjAzMS02NC44MDkgMTI4OC42ODYgMTI4OC42ODYgMCAwMS0xOC44ODUtNjQuODEgMTk3Mi40NDQgMTk3Mi40NDQgMCAwMS0xOC4yNCA2NC44MSAyNTc5LjQxMiAyNTc5LjQxMiAwIDAxLTIwLjM4OCA2NC44MWgtNDkuNzg3Yy00LjY4Mi0xMC45MjYtOS43Mi0yMy43NDMtMTUuMTEtMzguNDUxbC0xLjYyOS00LjQ3Yy01LjI1OC0xNC41MjEtMTAuNjgtMzAuMTkyLTE2LjI2Ni00Ny4wMTRsLTIuNDA0LTcuMjhjLTYuNDM4LTE5LjYtMTMuMDItNDAuMzQ0LTE5Ljc0My02Mi4yMzRhMjk4OC43MDcgMjk4OC43MDcgMCAwMS0xOS41MjktNjYuMzExaDY3LjM4NXoiIGZpbGw9IiM0Mjg1RjQiIGZpbGwtcnVsZT0ibm9uemVybyIvPjwvc3ZnPg==");
}
`);var vt=typeof document>"u"?null:document,nC=(vt==null?void 0:vt.fullscreenEnabled)||!!(vt!=null&&vt.webkitFullscreenEnabled);function iC(){return document.exitFullscreen?document.exitFullscreen():document.webkitExitFullscreen()}function Am(){return document.fullscreenElement?document.fullscreenElement:document.webkitFullscreenElement??null}function rC(i){return i.requestFullscreen?i.requestFullscreen():i.webkitRequestFullscreen()}var sC=["skip-to-start","skip-to-end","step-forward","step-backward","pause","play","enter-fullscreen","exit-fullscreen","twizzle-tw"],aC=class extends gt{derive(i){return{fullscreen:{enabled:nC,icon:document.fullscreenElement===null?"enter-fullscreen":"exit-fullscreen",title:"Enter fullscreen"},"jump-to-start":{enabled:!i.coarseTimelineInfo.atStart,icon:"skip-to-start",title:"Restart"},"play-step-backwards":{enabled:!i.coarseTimelineInfo.atStart,icon:"step-backward",title:"Step backward"},"play-pause":{enabled:!(i.coarseTimelineInfo.atStart&&i.coarseTimelineInfo.atEnd),icon:i.coarseTimelineInfo.playing?"pause":"play",title:i.coarseTimelineInfo.playing?"Pause":"Play"},"play-step":{enabled:!i.coarseTimelineInfo.atEnd,icon:"step-forward",title:"Step forward"},"jump-to-end":{enabled:!i.coarseTimelineInfo.atEnd,icon:"skip-to-end",title:"Skip to End"},"twizzle-link":{enabled:!0,icon:"twizzle-tw",title:"View at Twizzle",hidden:i.viewerLink==="none"}}}},Tm={fullscreen:!0,"jump-to-start":!0,"play-step-backwards":!0,"play-pause":!0,"play-step":!0,"jump-to-end":!0,"twizzle-link":!0},kc,Nx,lg,Dx=(lg=class extends Pn{constructor(e,t,n){super();J(this,kc);F(this,"buttons",null);this.model=e,this.controller=t,this.defaultFullscreenElement=n}connectedCallback(){var t,n;this.addCSS(Lx);const e={};for(const r in Tm){const s=new Ux;e[r]=s,s.htmlButton.addEventListener("click",()=>Qe(this,kc,Nx).call(this,r)),this.addElement(s)}this.buttons=e,(t=this.model)==null||t.buttonAppearance.addFreshListener(this.update.bind(this)),(n=this.model)==null||n.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}async onFullscreenButton(){var e,t;if(!this.defaultFullscreenElement)throw new Error("Attempted to go fullscreen without an element.");if(Am()===this.defaultFullscreenElement)iC();else{(e=this.buttons)==null||e.fullscreen.setIcon("exit-fullscreen"),rC(await((t=this.model)==null?void 0:t.twistySceneModel.fullscreenElement.get())??this.defaultFullscreenElement);const n=()=>{var r;Am()!==this.defaultFullscreenElement&&((r=this.buttons)==null||r.fullscreen.setIcon("enter-fullscreen"),window.removeEventListener("fullscreenchange",n))};window.addEventListener("fullscreenchange",n)}}async update(e){for(const t in Tm){const n=this.buttons[t],r=e[t];n.htmlButton.disabled=!r.enabled,n.htmlButton.title=r.title,n.setIcon(r.icon),n.hidden=!!r.hidden}}updateColorScheme(e){for(const t of Object.values(this.buttons??{}))t.updateColorScheme(e)}},kc=new WeakSet,Nx=function(e){var t,n,r,s,a,o;switch(e){case"fullscreen":{this.onFullscreenButton();break}case"jump-to-start":{(t=this.controller)==null||t.jumpToStart({flash:!0});break}case"play-step-backwards":{(n=this.controller)==null||n.animationController.play({direction:-1,untilBoundary:"move"});break}case"play-pause":{(r=this.controller)==null||r.togglePlay();break}case"play-step":{(s=this.controller)==null||s.animationController.play({direction:1,untilBoundary:"move"});break}case"jump-to-end":{(a=this.controller)==null||a.jumpToEnd({flash:!0});break}case"twizzle-link":{(o=this.controller)==null||o.visitTwizzleLink();break}default:throw new Error("Missing command")}},lg);jt.define("twisty-buttons",Dx);var Bc,cg,Ux=(cg=class extends Pn{constructor(){super(...arguments);F(this,"htmlButton",document.createElement("button"));J(this,Bc,new Au(this,"svg-",sC))}updateColorScheme(e){this.contentWrapper.classList.toggle("dark-mode",e==="dark")}connectedCallback(){this.addCSS(Px),this.addElement(this.htmlButton)}setIcon(e){w(this,Bc).setValue(e)}},Bc=new WeakMap,cg);jt.define("twisty-button",Ux);var zx=new bn;zx.replaceSync(`
:host {
  width: 384px;
  height: 16px;
  display: grid;
}

.wrapper {
  width: 100%;
  height: 100%;
  display: grid;
  overflow: hidden;
  backdrop-filter: blur(4px);
  -webkit-backdrop-filter: blur(4px);
  background: rgba(196, 196, 196, 0.75);
}

input:not(:disabled) {
  cursor: ew-resize;
}

.wrapper.dark-mode {
  background: #666666;
}
`);vt==null||vt.addEventListener("mousedown",i=>{i.which},!0);vt==null||vt.addEventListener("mouseup",i=>{i.which},!0);vt==null||vt.addEventListener("mousedown",()=>{},!1);vt==null||vt.addEventListener("mousemove",Ox,!1);vt==null||vt.addEventListener("mouseenter",Ox,!1);function Ox(i){i.pageY}var Vc,ug,Fx=(ug=class extends Pn{constructor(e,t){super();J(this,Vc,null);this.model=e,this.controller=t}async onDetailedTimelineInfo(e){const t=await this.inputElem();t.min=e.timeRange.start.toString(),t.max=e.timeRange.end.toString(),t.disabled=t.min===t.max,t.value=e.timestamp.toString()}async connectedCallback(){var e;this.addCSS(zx),this.addElement(await this.inputElem()),(e=this.model)==null||e.twistySceneModel.colorScheme.addFreshListener(this.updateColorScheme.bind(this))}updateColorScheme(e){this.contentWrapper.classList.toggle("dark-mode",e==="dark")}async inputElem(){return w(this,Vc)??fe(this,Vc,(async()=>{var t;const e=document.createElement("input");return e.type="range",e.disabled=!0,(t=this.model)==null||t.detailedTimelineInfo.addFreshListener(this.onDetailedTimelineInfo.bind(this)),e.addEventListener("input",this.onInput.bind(this)),e.addEventListener("keydown",this.onKeypress.bind(this)),e})())}async onInput(e){var r,s;const t=await this.inputElem();await this.slowDown(e,t);const n=parseInt(t.value);(r=this.model)==null||r.playingInfo.set({playing:!1}),(s=this.model)==null||s.timestampRequest.set(n)}onKeypress(e){var t,n;switch(e.key){case"ArrowLeft":case"ArrowRight":{(t=this.controller)==null||t.animationController.play({direction:e.key==="ArrowLeft"?-1:1,untilBoundary:"move"}),e.preventDefault();break}case" ":{(n=this.controller)==null||n.togglePlay(),e.preventDefault();break}}}async slowDown(e,t){}},Vc=new WeakMap,ug);jt.define("twisty-scrubber",Fx);var oC=null;async function Em(i,e){const[{PerspectiveCamera:t,Scene:n},r,s,a,o,l,c]=await Promise.all([ei,await i.puzzleLoader.get(),await i.visualizationStrategy.get(),await i.twistySceneModel.stickeringRequest.get(),await i.twistySceneModel.stickeringMaskRequest.get(),await i.legacyPosition.get(),await i.twistySceneModel.orbitCoordinates.get()]),u=(e==null?void 0:e.width)??2048,h=(e==null?void 0:e.height)??2048,d=u/h,f=oC??(oC=await(async()=>new t(20,d,.1,20))()),p=new n,v=new Ix(i,{scheduleRender:()=>{}},r,s);p.add(await v.twisty3DPuzzle()),await fx(f,c);const m=(await dx(u,h,p,f)).toDataURL(),y=await kx(i);return{dataURL:m,download:async x=>{Bx(m,x??y)}}}async function kx(i){const[e,t]=await Promise.all([i.puzzleID.get(),i.alg.get()]);return`[${e}]${t.alg.experimentalNumChildAlgNodes()===0?"":` ${t.alg.toString()}`}`}function Bx(i,e,t="png"){const n=document.createElement("a");n.href=i,n.download=`${e}.${t}`,n.click()}var Vx=new bn;Vx.replaceSync(`
:host {
  width: 384px;
  height: 256px;
  display: grid;

  -webkit-user-select: none;
  user-select: none;
}

.wrapper {
  display: grid;
  overflow: hidden;
  contain: size;
  grid-template-rows: 7fr minmax(1.5em, 0.5fr) minmax(2em, 1fr);
}

.wrapper > * {
  width: inherit;
  height: inherit;
  overflow: hidden;
}

.wrapper.controls-none {
  grid-template-rows: 7fr;
}

.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-control-button-panel ,
.wrapper.controls-none twisty-scrubber,
.wrapper.controls-none twisty-buttons {
  display: none;
}

twisty-scrubber {
  background: rgba(196, 196, 196, 0.5);
}

.wrapper.checkered,
.wrapper.checkered-transparent {
  background-color: #EAEAEA;
  background-image: linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD),
    linear-gradient(45deg, #DDD 25%, transparent 25%, transparent 75%, #DDD 75%, #DDD);
  background-size: 32px 32px;
  background-position: 0 0, 16px 16px;
}

.wrapper.checkered-transparent {
  background-color: #F4F4F4;
  background-image: linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88),
    linear-gradient(45deg, #DDDDDD88 25%, transparent 25%, transparent 75%, #DDDDDD88 75%, #DDDDDD88);
}

.wrapper.dark-mode {
  background-color: #444;
  background-image: linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b),
    linear-gradient(45deg, #DDDDDD0b 25%, transparent 25%, transparent 75%, #DDDDDD0b 75%, #DDDDDD0b);
}

.visualization-wrapper > * {
  width: 100%;
  height: 100%;
}

.error-elem {
  width: 100%;
  height: 100%;
  display: none;
  place-content: center;
  font-family: sans-serif;
  box-shadow: inset 0 0 2em rgb(255, 0, 0);
  color: red;
  text-shadow: 0 0 0.2em white;
  background: rgba(255, 255, 255, 0.25);
}

.wrapper.error .visualization-wrapper {
  display: none;
}

.wrapper.error .error-elem {
  display: grid;
}
`);var Cm=class extends mt{getDefaultValue(){return null}},Ad=class extends lr{getDefaultValue(){return null}derive(i){return typeof i=="string"?new URL(i,location.href):i}},go=class Gx{constructor(e){F(this,"warnings");F(this,"errors");this.warnings=Object.freeze((e==null?void 0:e.warnings)??[]),this.errors=Object.freeze((e==null?void 0:e.errors)??[]),Object.freeze(this)}add(e){return new Gx({warnings:this.warnings.concat((e==null?void 0:e.warnings)??[]),errors:this.errors.concat((e==null?void 0:e.errors)??[])})}log(){this.errors.length>0?console.error(`🚨 ${this.errors[0]}`):this.warnings.length>0?console.warn(`⚠️ ${this.warnings[0]}`):console.info("😎 No issues!")}};function Hx(i){try{const e=Te.fromString(i),t=[];return e.toString()!==i&&t.push("Alg is non-canonical!"),{alg:e,issues:new go({warnings:t})}}catch(e){return{alg:new Te,issues:new go({errors:[`Malformed alg: ${e.toString()}`]})}}}function lC(i,e){return i.alg.isIdentical(e.alg)&&Md(i.issues.warnings,e.issues.warnings)&&Md(i.issues.errors,e.issues.errors)}var Rm=class extends lr{getDefaultValue(){return{alg:new Te,issues:new go}}canReuseValue(i,e){return lC(i,e)}async derive(i){return typeof i=="string"?Hx(i):{alg:i,issues:new go}}},cC=class extends gt{derive(i){return i.kpuzzle.algToTransformation(i.setupAlg.alg)}},uC=class extends gt{derive(i){if(i.setupTransformation)return i.setupTransformation;switch(i.setupAnchor){case"start":return i.setupAlgTransformation;case"end":{const t=i.indexer.transformationAtIndex(i.indexer.numAnimatedLeaves()).invert();return i.setupAlgTransformation.applyTransformation(t)}default:throw new Error("Unimplemented!")}}},hC=class extends mt{getDefaultValue(){return{move:null,amount:0}}canReuseValue(i,e){return i.move===e.move&&i.amount===e.amount}},dC=class extends gt{derive(i){return{patternIndex:i.currentMoveInfo.patternIndex,movesFinishing:i.currentMoveInfo.movesFinishing.map(e=>e.move),movesFinished:i.currentMoveInfo.movesFinished.map(e=>e.move)}}canReuseValue(i,e){return i.patternIndex===e.patternIndex&&Sm(i.movesFinishing,e.movesFinishing,(t,n)=>t.isIdentical(n))&&Sm(i.movesFinished,e.movesFinished,(t,n)=>t.isIdentical(n))}},fC=class extends gt{derive(i){var t;function e(n){return i.detailedTimelineInfo.atEnd&&i.catchUpMove.move!==null&&n.currentMoves.push({move:i.catchUpMove.move,direction:-1,fraction:1-i.catchUpMove.amount,startTimestamp:-1,endTimestamp:-1}),n}if(i.indexer.currentMoveInfo)return e(i.indexer.currentMoveInfo(i.detailedTimelineInfo.timestamp));{const n=i.indexer.timestampToIndex(i.detailedTimelineInfo.timestamp),r={patternIndex:n,currentMoves:[],movesFinishing:[],movesFinished:[],movesStarting:[],latestStart:-1/0,earliestEnd:1/0};if(i.indexer.numAnimatedLeaves()>0){const s=(t=i.indexer.getAnimLeaf(n))==null?void 0:t.as(z);if(!s)return e(r);const a=i.indexer.indexToMoveStartTimestamp(n),o=i.indexer.moveDuration(n),l=o?(i.detailedTimelineInfo.timestamp-a)/o:0,c=a+o,u={move:s,direction:1,fraction:l,startTimestamp:a,endTimestamp:c};l===0?r.movesStarting.push(u):l===1?r.movesFinishing.push(u):(r.currentMoves.push(u),r.latestStart=Math.max(r.latestStart,a),r.earliestEnd=Math.min(r.earliestEnd,c))}return e(r)}}},pC=class extends gt{derive(i){let e=i.indexer.transformationAtIndex(i.currentLeavesSimplified.patternIndex);e=i.anchoredStart.applyTransformation(e);for(const t of i.currentLeavesSimplified.movesFinishing)e=e.applyMove(t);for(const t of i.currentLeavesSimplified.movesFinished)e=e.applyMove(t);return e.toKPattern()}};function Dr(i){switch(Math.abs(i)){case 0:return 0;case 1:return 1e3;case 2:return 1500;default:return 2e3}}var Wx=class extends os{constructor(i=Dr){super(),this.durationForAmount=i}traverseAlg(i){let e=0;for(const t of i.childAlgNodes())e+=this.traverseAlgNode(t);return e}traverseGrouping(i){return i.amount*this.traverseAlg(i.alg)}traverseMove(i){return this.durationForAmount(i.amount)}traverseCommutator(i){return 2*(this.traverseAlg(i.A)+this.traverseAlg(i.B))}traverseConjugate(i){return 2*this.traverseAlg(i.A)+this.traverseAlg(i.B)}traversePause(i){return this.durationForAmount(1)}traverseNewline(i){return this.durationForAmount(1)}traverseLineComment(i){return this.durationForAmount(0)}},mC=class{constructor(i,e){F(this,"moves");F(this,"durationFn",new Wx(Dr));this.kpuzzle=i,this.moves=new Te(e.experimentalExpand())}getAnimLeaf(i){return Array.from(this.moves.childAlgNodes())[i]}indexToMoveStartTimestamp(i){const e=new Te(Array.from(this.moves.childAlgNodes()).slice(0,i));return this.durationFn.traverseAlg(e)}timestampToIndex(i){let e=0,t;for(t=0;t<this.numAnimatedLeaves();t++)if(e+=this.durationFn.traverseMove(this.getAnimLeaf(t)),e>=i)return t;return t}patternAtIndex(i){return this.kpuzzle.defaultPattern().applyTransformation(this.transformationAtIndex(i))}transformationAtIndex(i){let e=this.kpuzzle.identityTransformation();for(const t of Array.from(this.moves.childAlgNodes()).slice(0,i))e=e.applyMove(t);return e}algDuration(){return this.durationFn.traverseAlg(this.moves)}numAnimatedLeaves(){return AE(this.moves)}moveDuration(i){return this.durationFn.traverseMove(this.getAnimLeaf(i))}},Im={u:"y",l:"x",f:"z",r:"x",b:"z",d:"y",m:"x",e:"y",s:"z",x:"x",y:"y",z:"z"};function gC(i,e){return Im[i.family[0].toLowerCase()]===Im[e.family[0].toLowerCase()]}var vC=class extends os{traverseAlg(i){const e=[];for(const t of i.childAlgNodes())e.push(this.traverseAlgNode(t));return Array.prototype.concat(...e)}traverseGroupingOnce(i){if(i.experimentalIsEmpty())return[];for(const r of i.childAlgNodes())if(!r.is(z))return this.traverseAlg(i);const e=Array.from(i.childAlgNodes());let t=Dr(e[0].amount);for(let r=0;r<e.length-1;r++){for(let s=1;s<e.length;s++)if(!gC(e[r],e[s]))return this.traverseAlg(i);t=Math.max(t,Dr(e[r].amount))}const n=e.map(r=>({animLeafAlgNode:r,msUntilNext:0,duration:t}));return n[n.length-1].msUntilNext=t,n}traverseGrouping(i){const e=[],t=i.amount>0?i.alg:i.alg.invert();for(let n=0;n<Math.abs(i.amount);n++)e.push(this.traverseGroupingOnce(t));return Array.prototype.concat(...e)}traverseMove(i){const e=Dr(i.amount);return[{animLeafAlgNode:i,msUntilNext:e,duration:e}]}traverseCommutator(i){const e=[],t=[i.A,i.B,i.A.invert(),i.B.invert()];for(const n of t)e.push(this.traverseGroupingOnce(n));return Array.prototype.concat(...e)}traverseConjugate(i){const e=[],t=[i.A,i.B,i.A.invert()];for(const n of t)e.push(this.traverseGroupingOnce(n));return Array.prototype.concat(...e)}traversePause(i){if(i.experimentalNISSGrouping)return[];const e=Dr(1);return[{animLeafAlgNode:i,msUntilNext:e,duration:e}]}traverseNewline(i){return[]}traverseLineComment(i){return[]}},xC=An(vC);function yC(i){let e=0;return xC(i).map(n=>{const r={animLeaf:n.animLeafAlgNode,start:e,end:e+n.duration};return e+=n.msUntilNext,r})}var _C={"y' y' U' E D R2 r2 F2 B2 U E D' R2 L2' z2 S2 U U D D S2 F2' B2":[{animLeaf:new z("y",-1),start:0,end:1e3},{animLeaf:new z("y",-1),start:1e3,end:2e3},{animLeaf:new z("U",-1),start:1e3,end:1600},{animLeaf:new z("E",1),start:1200,end:1800},{animLeaf:new z("D"),start:1400,end:2e3},{animLeaf:new z("R",2),start:2e3,end:3500},{animLeaf:new z("r",2),start:2e3,end:3500},{animLeaf:new z("F",2),start:3500,end:4200},{animLeaf:new z("B",2),start:3800,end:4500},{animLeaf:new z("U",1),start:4500,end:5500},{animLeaf:new z("E",1),start:4500,end:5500},{animLeaf:new z("D",-1),start:4500,end:5500},{animLeaf:new z("R",2),start:5500,end:6500},{animLeaf:new z("L",-2),start:5500,end:6500},{animLeaf:new z("z",2),start:5500,end:6500},{animLeaf:new z("S",2),start:6500,end:7500},{animLeaf:new z("U"),start:7500,end:8e3},{animLeaf:new z("D"),start:7750,end:8250},{animLeaf:new z("U"),start:8e3,end:8500},{animLeaf:new z("D"),start:8250,end:8750},{animLeaf:new z("S",2),start:8750,end:9250},{animLeaf:new z("F",-2),start:8750,end:1e4},{animLeaf:new z("B",2),start:8750,end:1e4}],"M' R' U' D' M R":[{animLeaf:new z("M",-1),start:0,end:1e3},{animLeaf:new z("R",-1),start:0,end:1e3},{animLeaf:new z("U",-1),start:1e3,end:2e3},{animLeaf:new z("D",-1),start:1e3,end:2e3},{animLeaf:new z("M"),start:2e3,end:3e3},{animLeaf:new z("R"),start:2e3,end:3e3}],"U' E' r E r2' E r U E":[{animLeaf:new z("U",-1),start:0,end:1e3},{animLeaf:new z("E",-1),start:0,end:1e3},{animLeaf:new z("r"),start:1e3,end:2500},{animLeaf:new z("E"),start:2500,end:3500},{animLeaf:new z("r",-2),start:3500,end:5e3},{animLeaf:new z("E"),start:5e3,end:6e3},{animLeaf:new z("r"),start:6e3,end:7e3},{animLeaf:new z("U"),start:7e3,end:8e3},{animLeaf:new z("E"),start:7e3,end:8e3}]},Lm=class{constructor(i,e){F(this,"animLeaves");this.kpuzzle=i,this.animLeaves=_C[e.toString()]??yC(e)}getAnimLeaf(i){var e;return((e=this.animLeaves[Math.min(i,this.animLeaves.length-1)])==null?void 0:e.animLeaf)??null}getAnimLeafWithRange(i){return this.animLeaves[Math.min(i,this.animLeaves.length-1)]}indexToMoveStartTimestamp(i){let e=0;return this.animLeaves.length>0&&(e=this.animLeaves[Math.min(i,this.animLeaves.length-1)].start),e}timestampToIndex(i){let e=0;for(e=0;e<this.animLeaves.length;e++)if(this.animLeaves[e].start>=i)return Math.max(0,e-1);return Math.max(0,e-1)}timestampToPosition(i,e){const t=this.currentMoveInfo(i);let n=e??this.kpuzzle.identityTransformation().toKPattern();for(const r of this.animLeaves.slice(0,t.patternIndex)){const s=r.animLeaf.as(z);s!==null&&(n=n.applyMove(s))}return{pattern:n,movesInProgress:t.currentMoves}}currentMoveInfo(i){let e=1/0;for(const c of this.animLeaves)if(c.start<=i&&c.end>=i)e=Math.min(e,c.start);else if(c.start>i)break;const t=[],n=[],r=[],s=[];let a=-1/0,o=1/0,l=0;for(const c of this.animLeaves)if(c.end<=e)l++;else{if(c.start>i)break;{const u=c.animLeaf.as(z);if(u!==null){let h=(i-c.start)/(c.end-c.start),d=!1;h>1&&(h=1,d=!0);const f={move:u,direction:1,fraction:h,startTimestamp:c.start,endTimestamp:c.end};switch(h){case 0:{n.push(f);break}case 1:{d?s.push(f):r.push(f);break}default:t.push(f),a=Math.max(a,c.start),o=Math.min(o,c.end)}}}}return{patternIndex:l,currentMoves:t,latestStart:a,earliestEnd:o,movesStarting:n,movesFinishing:r,movesFinished:s}}patternAtIndex(i,e){let t=e??this.kpuzzle.defaultPattern();for(let n=0;n<this.animLeaves.length&&n<i;n++){const s=this.animLeaves[n].animLeaf.as(z);s!==null&&(t=t.applyMove(s))}return t}transformationAtIndex(i){let e=this.kpuzzle.identityTransformation();for(const t of this.animLeaves.slice(0,i)){const n=t.animLeaf.as(z);n!==null&&(e=e.applyMove(n))}return e}algDuration(){let i=0;for(const e of this.animLeaves)i=Math.max(i,e.end);return i}numAnimatedLeaves(){return this.animLeaves.length}moveDuration(i){const e=this.getAnimLeafWithRange(i);return e.end-e.start}},br=class{constructor(i,e,t,n,r=[]){this.moveCount=i,this.duration=e,this.forward=t,this.backward=n,this.children=r}},MC=class extends os{constructor(e){super();F(this,"identity");F(this,"dummyLeaf");F(this,"durationFn",new Wx(Dr));F(this,"cache",{});this.kpuzzle=e,this.identity=e.identityTransformation(),this.dummyLeaf=new br(0,0,this.identity,this.identity,[])}traverseAlg(e){let t=0,n=0,r=this.identity;const s=[];for(const a of e.childAlgNodes()){const o=this.traverseAlgNode(a);t+=o.moveCount,n+=o.duration,r===this.identity?r=o.forward:r=r.applyTransformation(o.forward),s.push(o)}return new br(t,n,r,r.invert(),s)}traverseGrouping(e){const t=this.traverseAlg(e.alg);return this.mult(t,e.amount,[t])}traverseMove(e){const t=e.toString();let n=this.cache[t];if(n)return n;const r=this.kpuzzle.moveToTransformation(e);return n=new br(1,this.durationFn.traverseAlgNode(e),r,r.invert()),this.cache[t]=n,n}traverseCommutator(e){const t=this.traverseAlg(e.A),n=this.traverseAlg(e.B),r=t.forward.applyTransformation(n.forward),s=t.backward.applyTransformation(n.backward),a=r.applyTransformation(s),o=new br(2*(t.moveCount+n.moveCount),2*(t.duration+n.duration),a,a.invert(),[t,n]);return this.mult(o,1,[o,t,n])}traverseConjugate(e){const t=this.traverseAlg(e.A),n=this.traverseAlg(e.B),s=t.forward.applyTransformation(n.forward).applyTransformation(t.backward),a=new br(2*t.moveCount+n.moveCount,2*t.duration+n.duration,s,s.invert(),[t,n]);return this.mult(a,1,[a,t,n])}traversePause(e){return e.experimentalNISSGrouping?this.dummyLeaf:new br(1,this.durationFn.traverseAlgNode(e),this.identity,this.identity)}traverseNewline(e){return this.dummyLeaf}traverseLineComment(e){return this.dummyLeaf}mult(e,t,n){const r=Math.abs(t),s=e.forward.selfMultiply(t);return new br(e.moveCount*r,e.duration*r,s,s.invert(),n)}},Bt=class{constructor(i,e){this.apd=i,this.back=e}},SC=class extends ha{constructor(e,t,n){super();F(this,"move");F(this,"moveDuration");F(this,"back");F(this,"st");F(this,"root");F(this,"i");F(this,"dur");F(this,"goali");F(this,"goaldur");this.kpuzzle=e,this.algOrAlgNode=t,this.apd=n,this.i=-1,this.dur=-1,this.goali=-1,this.goaldur=-1,this.move=void 0,this.back=!1,this.moveDuration=0,this.st=this.kpuzzle.identityTransformation(),this.root=new Bt(this.apd,!1)}moveByIndex(e){return this.i>=0&&this.i===e?this.move!==void 0:this.dosearch(e,1/0)}moveByDuration(e){return this.dur>=0&&this.dur<e&&this.dur+this.moveDuration>=e?this.move!==void 0:this.dosearch(1/0,e)}dosearch(e,t){return this.goali=e,this.goaldur=t,this.i=0,this.dur=0,this.move=void 0,this.moveDuration=0,this.back=!1,this.st=this.kpuzzle.identityTransformation(),this.algOrAlgNode.is(Te)?this.traverseAlg(this.algOrAlgNode,this.root):this.traverseAlgNode(this.algOrAlgNode,this.root)}traverseAlg(e,t){if(!this.firstcheck(t))return!1;let n=t.back?e.experimentalNumChildAlgNodes()-1:0;for(const r of dy(e.childAlgNodes(),t.back?-1:1)){if(this.traverseAlgNode(r,new Bt(t.apd.children[n],t.back)))return!0;n+=t.back?-1:1}return!1}traverseGrouping(e,t){if(!this.firstcheck(t))return!1;const n=this.domult(t,e.amount);return this.traverseAlg(e.alg,new Bt(t.apd.children[0],n))}traverseMove(e,t){return this.firstcheck(t)?(this.move=e,this.moveDuration=t.apd.duration,this.back=t.back,!0):!1}traverseCommutator(e,t){if(!this.firstcheck(t))return!1;const n=this.domult(t,1);return n?this.traverseAlg(e.B,new Bt(t.apd.children[2],!n))||this.traverseAlg(e.A,new Bt(t.apd.children[1],!n))||this.traverseAlg(e.B,new Bt(t.apd.children[2],n))||this.traverseAlg(e.A,new Bt(t.apd.children[1],n)):this.traverseAlg(e.A,new Bt(t.apd.children[1],n))||this.traverseAlg(e.B,new Bt(t.apd.children[2],n))||this.traverseAlg(e.A,new Bt(t.apd.children[1],!n))||this.traverseAlg(e.B,new Bt(t.apd.children[2],!n))}traverseConjugate(e,t){if(!this.firstcheck(t))return!1;const n=this.domult(t,1);return n?this.traverseAlg(e.A,new Bt(t.apd.children[1],!n))||this.traverseAlg(e.B,new Bt(t.apd.children[2],n))||this.traverseAlg(e.A,new Bt(t.apd.children[1],n)):this.traverseAlg(e.A,new Bt(t.apd.children[1],n))||this.traverseAlg(e.B,new Bt(t.apd.children[2],n))||this.traverseAlg(e.A,new Bt(t.apd.children[1],!n))}traversePause(e,t){return this.firstcheck(t)?(this.move=e,this.moveDuration=t.apd.duration,this.back=t.back,!0):!1}traverseNewline(e,t){return!1}traverseLineComment(e,t){return!1}firstcheck(e){return e.apd.moveCount+this.i<=this.goali&&e.apd.duration+this.dur<this.goaldur?this.keepgoing(e):!0}domult(e,t){let n=e.back;if(t===0)return n;t<0&&(n=!n,t=-t);const r=e.apd.children[0],s=Math.min(Math.floor((this.goali-this.i)/r.moveCount),Math.ceil((this.goaldur-this.dur)/r.duration-1));return s>0&&this.keepgoing(new Bt(r,n),s),n}keepgoing(e,t=1){return this.i+=t*e.apd.moveCount,this.dur+=t*e.apd.duration,t!==1?e.back?this.st=this.st.applyTransformation(e.apd.backward.selfMultiply(t)):this.st=this.st.applyTransformation(e.apd.forward.selfMultiply(t)):e.back?this.st=this.st.applyTransformation(e.apd.backward):this.st=this.st.applyTransformation(e.apd.forward),!1}},wC=16;function bC(i,e){const t=new wh,n=new wh;for(const r of i.childAlgNodes())n.push(r),n.experimentalNumAlgNodes()>=e&&(t.push(new nn(n.toAlg())),n.reset());return t.push(new nn(n.toAlg())),t.toAlg()}var AC=class extends os{traverseAlg(i){const e=i.experimentalNumChildAlgNodes();return e<wC?i:bC(i,Math.ceil(Math.sqrt(e)))}traverseGrouping(i){return new nn(this.traverseAlg(i.alg),i.amount)}traverseMove(i){return i}traverseCommutator(i){return new hn(this.traverseAlg(i.A),this.traverseAlg(i.B))}traverseConjugate(i){return new hn(this.traverseAlg(i.A),this.traverseAlg(i.B))}traversePause(i){return i}traverseNewline(i){return i}traverseLineComment(i){return i}},TC=An(AC),Pm=class{constructor(i,e){F(this,"decoration");F(this,"walker");this.kpuzzle=i;const t=new MC(this.kpuzzle),n=TC(e);this.decoration=t.traverseAlg(n),this.walker=new SC(this.kpuzzle,n,this.decoration)}getAnimLeaf(i){if(this.walker.moveByIndex(i)){if(!this.walker.move)throw new Error("`this.walker.mv` missing");const e=this.walker.move;return this.walker.back?e.invert():e}return null}indexToMoveStartTimestamp(i){if(this.walker.moveByIndex(i)||this.walker.i===i)return this.walker.dur;throw new Error(`Out of algorithm: index ${i}`)}indexToMovesInProgress(i){if(this.walker.moveByIndex(i)||this.walker.i===i)return this.walker.dur;throw new Error(`Out of algorithm: index ${i}`)}patternAtIndex(i,e){return this.walker.moveByIndex(i),(e??this.kpuzzle.defaultPattern()).applyTransformation(this.walker.st)}transformationAtIndex(i){return this.walker.moveByIndex(i),this.walker.st}numAnimatedLeaves(){return this.decoration.moveCount}timestampToIndex(i){return this.walker.moveByDuration(i),this.walker.i}algDuration(){return this.decoration.duration}moveDuration(i){return this.walker.moveByIndex(i),this.walker.moveDuration}},EC=1024,CC=class extends gt{derive(i){switch(i.indexerConstructorRequest){case"auto":return SE(i.alg.alg)<=EC&&i.puzzle==="3x3x3"&&i.visualizationStrategy==="Cube3D"?Lm:Pm;case"tree":return Pm;case"simple":return mC;case"simultaneous":return Lm;default:throw new Error("Invalid indexer request!")}}},RC=class extends mt{getDefaultValue(){return"auto"}},IC=class extends gt{derive(i){return new i.indexerConstructor(i.kpuzzle,i.algWithIssues.alg)}},LC=class extends gt{derive(i){return{pattern:i.currentPattern,movesInProgress:i.currentMoveInfo.currentMoves}}},PC=!0,Dm=class extends gt{async derive(i){try{return PC&&i.kpuzzle.algToTransformation(i.algWithIssues.alg),i.algWithIssues}catch(e){return{alg:new Te,issues:new go({errors:[`Invalid alg for puzzle: ${e.toString()}`]})}}}},DC=class extends mt{getDefaultValue(){return"start"}},NC=class extends mt{getDefaultValue(){return null}},UC=class extends gt{async derive(i){return i.puzzleLoader.kpuzzle()}},zC=class extends mt{getDefaultValue(){return ho}},OC=class extends gt{async derive(i){return i.puzzleLoader.id}},FC=class extends mt{getDefaultValue(){return ho}},kC=class extends gt{derive(i){if(i.puzzleIDRequest&&i.puzzleIDRequest!==ho){const e=Ax[i.puzzleIDRequest];return e||this.userVisibleErrorTracker.set({errors:[`Invalid puzzle ID: ${i.puzzleIDRequest}`]}),e}return i.puzzleDescriptionRequest&&i.puzzleDescriptionRequest!==ho?Yy(i.puzzleDescriptionRequest):Mf}},BC=class extends gt{derive(i){return{playing:i.playingInfo.playing,atStart:i.detailedTimelineInfo.atStart,atEnd:i.detailedTimelineInfo.atEnd}}canReuseValue(i,e){return i.playing===e.playing&&i.atStart===e.atStart&&i.atEnd===e.atEnd}},Gc,Xx,hg,VC=(hg=class extends gt{constructor(){super(...arguments);J(this,Gc)}derive(e){let t=Qe(this,Gc,Xx).call(this,e),n=!1,r=!1;return t>=e.timeRange.end&&(r=!0,t=Math.min(e.timeRange.end,t)),t<=e.timeRange.start&&(n=!0,t=Math.max(e.timeRange.start,t)),{timestamp:t,timeRange:e.timeRange,atStart:n,atEnd:r}}canReuseValue(e,t){return e.timestamp===t.timestamp&&e.timeRange.start===t.timeRange.start&&e.timeRange.end===t.timeRange.end&&e.atStart===t.atStart&&e.atEnd===t.atEnd}},Gc=new WeakSet,Xx=function(e){switch(e.timestampRequest){case"auto":return e.setupAnchor==="start"&&e.setupAlg.alg.experimentalIsEmpty()?e.timeRange.end:e.timeRange.start;case"start":return e.timeRange.start;case"end":return e.timeRange.end;case"anchor":return e.setupAnchor==="start"?e.timeRange.start:e.timeRange.end;case"opposite-anchor":return e.setupAnchor==="start"?e.timeRange.end:e.timeRange.start;default:return e.timestampRequest}},hg),GC=class extends lr{async getDefaultValue(){return{direction:1,playing:!1,untilBoundary:"entire-timeline",loop:!1}}async derive(i,e){const t=await e,n=Object.assign({},t);return Object.assign(n,i),n}canReuseValue(i,e){return i.direction===e.direction&&i.playing===e.playing&&i.untilBoundary===e.untilBoundary&&i.loop===e.loop}},HC=class extends lr{getDefaultValue(){return 1}derive(i){return i<0?1:i}},WC={auto:!0,start:!0,end:!0,anchor:!0,"opposite-anchor":!0},XC=class extends mt{getDefaultValue(){return"auto"}set(i){const e=this.get();super.set((async()=>this.validInput(await i)?i:e)())}validInput(i){return!!(typeof i=="number"||WC[i])}},qC=class extends mt{getDefaultValue(){return"auto"}},YC=class extends gt{derive(i){return{start:0,end:i.indexer.algDuration()}}},ZC=class extends mt{getDefaultValue(){return"auto"}},$C=class extends mt{getDefaultValue(){return"auto"}},jC=class extends gt{derive(i){switch(i.puzzleID){case"clock":case"square1":case"redi_cube":case"melindas2x2x2x2":case"tri_quad":case"loopover":return"2D";case"3x3x3":switch(i.visualizationRequest){case"auto":case"3D":return"Cube3D";default:return i.visualizationRequest}default:switch(i.visualizationRequest){case"auto":case"3D":return"PG3D";case"experimental-2D-LL":case"experimental-2D-LL-face":return["2x2x2","4x4x4","megaminx"].includes(i.puzzleID)?"experimental-2D-LL":"2D";default:return i.visualizationRequest}}}},JC=class extends mt{getDefaultValue(){return"auto"}},KC=class extends mt{getDefaultValue(){return"auto"}},QC=class extends mt{getDefaultValue(){return"auto"}},eR=null;async function tR(){return eR??(eR=new(await ei).TextureLoader)}var Nm=class extends gt{async derive(i){const{spriteURL:e}=i;return e===null?null:new Promise(async(t,n)=>{const r=()=>{console.warn("Could not load sprite:",e.toString()),t(null)};try{(await tR()).load(e.toString(),t,r,r)}catch{r()}})}},nR={facelets:["regular","regular","regular","regular","regular"]};async function iR(i){const{definition:e}=await i.kpuzzle(),t={orbits:{}};for(const n of e.orbits)t.orbits[n.orbitName]={pieces:new Array(n.numPieces).fill(nR)};return t}var rR=class extends gt{getDefaultValue(){return{orbits:{}}}async derive(i){var e,t;return i.stickeringMaskRequest?i.stickeringMaskRequest:i.stickeringRequest==="picture"?{specialBehaviour:"picture",orbits:{}}:((t=(e=i.puzzleLoader).stickeringMask)==null?void 0:t.call(e,i.stickeringRequest??"full"))??iR(i.puzzleLoader)}},sR={"-":"Regular",D:"Dim",I:"Ignored",X:"Invisible",O:"IgnoreNonPrimary",P:"PermuteNonPrimary",o:"Ignoriented","?":"OrientationWithoutPermutation","@":"Regular"};function aR(i){const e={orbits:{}},t=i.split(",");for(const n of t){const[r,s,...a]=n.split(":");if(a.length>0)throw new Error(`Invalid serialized orbit stickering mask (too many colons): \`${n}\``);const o=[];e.orbits[r]={pieces:o};for(const l of s){const c=sR[l];o.push(Ig(c))}}return e}var oR=class extends lr{getDefaultValue(){return null}derive(i){return i===null?null:typeof i=="string"?aR(i):i}},lR=class extends mt{getDefaultValue(){return null}},cR=class extends mt{getDefaultValue(){return"auto"}},uR=class extends mt{getDefaultValue(){return{}}},hR=class extends mt{getDefaultValue(){return"auto"}},dR=class extends mt{getDefaultValue(){return"auto"}},fR=class extends gt{derive(i){return i.colorSchemeRequest==="dark"?"dark":"light"}},pR=class extends mt{getDefaultValue(){return"auto"}},mR=class extends mt{getDefaultValue(){return null}},gR=35,vR=class extends mt{getDefaultValue(){return gR}};function qx(i,e){return i.latitude===e.latitude&&i.longitude===e.longitude&&i.distance===e.distance}var xR=class extends lr{getDefaultValue(){return"auto"}canReuseValue(i,e){return i===e||qx(i,e)}async derive(i,e){if(i==="auto")return"auto";let t=await e;t==="auto"&&(t={});const n=Object.assign({},t);return Object.assign(n,i),typeof n.latitude<"u"&&(n.latitude=Math.min(Math.max(n.latitude,-90),90)),typeof n.longitude<"u"&&(n.longitude=Sd(n.longitude,180,-180)),n}},yR=class extends gt{canReuseValue(i,e){return qx(i,e)}async derive(i){if(i.orbitCoordinatesRequest==="auto")return zm(i.puzzleID,i.strategy);const e=Object.assign(Object.assign({},zm(i.puzzleID,i.strategy),i.orbitCoordinatesRequest));if(Math.abs(e.latitude)<=i.latitudeLimit)return e;{const{latitude:t,longitude:n,distance:r}=e;return{latitude:i.latitudeLimit*Math.sign(t),longitude:n,distance:r}}}},_R={latitude:31.717474411461005,longitude:0,distance:5.877852522924731},MR={latitude:35,longitude:30,distance:6},Um={latitude:35,longitude:30,distance:6.25},SR={latitude:Math.atan(1/2)*fo,longitude:0,distance:6.7},wR={latitude:26.56505117707799,longitude:0,distance:6};function zm(i,e){if(i[1]==="x")return e==="Cube3D"?MR:Um;switch(i){case"megaminx":case"gigaminx":return SR;case"pyraminx":case"master_tetraminx":return wR;case"skewb":return Um;default:return _R}}var bR=class{constructor(i){F(this,"background",new dR);F(this,"colorSchemeRequest",new pR);F(this,"dragInput",new cR);F(this,"foundationDisplay",new KC);F(this,"foundationStickerSpriteURL",new Ad);F(this,"fullscreenElement",new mR);F(this,"hintFacelet",new KT);F(this,"hintStickerSpriteURL",new Ad);F(this,"initialHintFaceletsAnimation",new QC);F(this,"latitudeLimit",new vR);F(this,"movePressInput",new hR);F(this,"movePressCancelOptions",new uR);F(this,"orbitCoordinatesRequest",new xR);F(this,"stickeringMaskRequest",new oR);F(this,"stickeringRequest",new lR);F(this,"faceletScale",new JC);F(this,"colorScheme",new fR({colorSchemeRequest:this.colorSchemeRequest}));F(this,"foundationStickerSprite",new Nm({spriteURL:this.foundationStickerSpriteURL}));F(this,"hintStickerSprite",new Nm({spriteURL:this.hintStickerSpriteURL}));F(this,"orbitCoordinates");F(this,"stickeringMask");this.twistyPlayerModel=i,this.orbitCoordinates=new yR({orbitCoordinatesRequest:this.orbitCoordinatesRequest,latitudeLimit:this.latitudeLimit,puzzleID:i.puzzleID,strategy:i.visualizationStrategy}),this.stickeringMask=new rR({stickeringMaskRequest:this.stickeringMaskRequest,stickeringRequest:this.stickeringRequest,puzzleLoader:i.puzzleLoader})}},AR={errors:[]},TR=class extends mt{getDefaultValue(){return AR}reset(){this.set(this.getDefaultValue())}canReuseValue(i,e){return Md(i.errors,e.errors)}},ER=class{constructor(){F(this,"userVisibleErrorTracker",new TR);F(this,"alg",new Rm);F(this,"backView",new qC);F(this,"controlPanel",new JE);F(this,"catchUpMove",new hC);F(this,"indexerConstructorRequest",new RC);F(this,"playingInfo",new GC);F(this,"puzzleDescriptionRequest",new zC);F(this,"puzzleIDRequest",new FC);F(this,"setupAnchor",new DC);F(this,"setupAlg",new Rm);F(this,"setupTransformation",new NC);F(this,"tempoScale",new HC);F(this,"timestampRequest",new XC);F(this,"viewerLink",new ZC);F(this,"visualizationFormat",new $C);F(this,"title",new Cm);F(this,"videoURL",new Ad);F(this,"competitionID",new Cm);F(this,"puzzleLoader",new kC({puzzleIDRequest:this.puzzleIDRequest,puzzleDescriptionRequest:this.puzzleDescriptionRequest},this.userVisibleErrorTracker));F(this,"kpuzzle",new UC({puzzleLoader:this.puzzleLoader}));F(this,"puzzleID",new OC({puzzleLoader:this.puzzleLoader}));F(this,"puzzleAlg",new Dm({algWithIssues:this.alg,kpuzzle:this.kpuzzle}));F(this,"puzzleSetupAlg",new Dm({algWithIssues:this.setupAlg,kpuzzle:this.kpuzzle}));F(this,"visualizationStrategy",new jC({visualizationRequest:this.visualizationFormat,puzzleID:this.puzzleID}));F(this,"indexerConstructor",new CC({alg:this.alg,puzzle:this.puzzleID,visualizationStrategy:this.visualizationStrategy,indexerConstructorRequest:this.indexerConstructorRequest}));F(this,"setupAlgTransformation",new cC({setupAlg:this.puzzleSetupAlg,kpuzzle:this.kpuzzle}));F(this,"indexer",new IC({indexerConstructor:this.indexerConstructor,algWithIssues:this.puzzleAlg,kpuzzle:this.kpuzzle}));F(this,"anchorTransformation",new uC({setupTransformation:this.setupTransformation,setupAnchor:this.setupAnchor,setupAlgTransformation:this.setupAlgTransformation,indexer:this.indexer}));F(this,"timeRange",new YC({indexer:this.indexer}));F(this,"detailedTimelineInfo",new VC({timestampRequest:this.timestampRequest,timeRange:this.timeRange,setupAnchor:this.setupAnchor,setupAlg:this.setupAlg}));F(this,"coarseTimelineInfo",new BC({detailedTimelineInfo:this.detailedTimelineInfo,playingInfo:this.playingInfo}));F(this,"currentMoveInfo",new fC({indexer:this.indexer,detailedTimelineInfo:this.detailedTimelineInfo,catchUpMove:this.catchUpMove}));F(this,"buttonAppearance",new aC({coarseTimelineInfo:this.coarseTimelineInfo,viewerLink:this.viewerLink}));F(this,"currentLeavesSimplified",new dC({currentMoveInfo:this.currentMoveInfo}));F(this,"currentPattern",new pC({anchoredStart:this.anchorTransformation,currentLeavesSimplified:this.currentLeavesSimplified,indexer:this.indexer}));F(this,"legacyPosition",new LC({currentMoveInfo:this.currentMoveInfo,currentPattern:this.currentPattern}));F(this,"twistySceneModel",new bR(this))}async twizzleLink(){const[i,e,t,n,r,s,a,o]=await Promise.all([this.viewerLink.get(),this.puzzleID.get(),this.puzzleDescriptionRequest.get(),this.alg.get(),this.setupAlg.get(),this.setupAnchor.get(),this.twistySceneModel.stickeringRequest.get(),this.twistySceneModel.twistyPlayerModel.title.get()]),l=i==="experimental-twizzle-explorer",c=new URL(`https://alpha.twizzle.net/${l?"explore":"edit"}/`);return n.alg.experimentalIsEmpty()||c.searchParams.set("alg",n.alg.toString()),r.alg.experimentalIsEmpty()||c.searchParams.set("setup-alg",r.alg.toString()),s!=="start"&&c.searchParams.set("setup-anchor",s),a!=="full"&&a!==null&&c.searchParams.set("experimental-stickering",a),l&&t!==ho?c.searchParams.set("puzzle-description",t):e!=="3x3x3"&&c.searchParams.set("puzzle",e),o&&c.searchParams.set("title",o),c.toString()}experimentalAddAlgLeaf(i,e){const t=i.as(z);t?this.experimentalAddMove(t,e):this.alg.set((async()=>{const r=(await this.alg.get()).alg.concat(new Te([i]));return this.timestampRequest.set("end"),r})())}experimentalAddMove(i,e){const t=typeof i=="string"?new z(i):i;this.alg.set((async()=>{const[{alg:n},r]=await Promise.all([this.alg.get(),this.puzzleLoader.get()]),s=Eg(n,t,{...e,...await Xy(r)});return this.timestampRequest.set("end"),this.catchUpMove.set({move:t,amount:0}),s})())}experimentalRemoveFinalChild(){this.alg.set((async()=>{const i=(await this.alg.get()).alg,e=Array.from(i.childAlgNodes()),[t]=e.splice(-1);if(!t)return i;this.timestampRequest.set("end");const n=t.as(z);return n&&this.catchUpMove.set({move:n.invert(),amount:0}),new Te(e)})())}};function nt(i){return new Error(`Cannot get \`.${i}\` directly from a \`TwistyPlayer\`.`)}var CR=class extends Pn{constructor(){super(...arguments);F(this,"experimentalModel",new ER);F(this,"experimentalGet",new RR(this.experimentalModel))}set alg(e){this.experimentalModel.alg.set(e)}get alg(){throw nt("alg")}set experimentalSetupAlg(e){this.experimentalModel.setupAlg.set(e)}get experimentalSetupAlg(){throw nt("setup")}set experimentalSetupAnchor(e){this.experimentalModel.setupAnchor.set(e)}get experimentalSetupAnchor(){throw nt("anchor")}set puzzle(e){this.experimentalModel.puzzleIDRequest.set(e)}get puzzle(){throw nt("puzzle")}set experimentalPuzzleDescription(e){this.experimentalModel.puzzleDescriptionRequest.set(e)}get experimentalPuzzleDescription(){throw nt("experimentalPuzzleDescription")}set timestamp(e){this.experimentalModel.timestampRequest.set(e)}get timestamp(){throw nt("timestamp")}set hintFacelets(e){this.experimentalModel.twistySceneModel.hintFacelet.set(e)}get hintFacelets(){throw nt("hintFacelets")}set experimentalStickering(e){this.experimentalModel.twistySceneModel.stickeringRequest.set(e)}get experimentalStickering(){throw nt("experimentalStickering")}set experimentalStickeringMaskOrbits(e){this.experimentalModel.twistySceneModel.stickeringMaskRequest.set(e)}get experimentalStickeringMaskOrbits(){throw nt("experimentalStickeringMaskOrbits")}set experimentalFaceletScale(e){this.experimentalModel.twistySceneModel.faceletScale.set(e)}get experimentalFaceletScale(){throw nt("experimentalFaceletScale")}set backView(e){this.experimentalModel.backView.set(e)}get backView(){throw nt("backView")}set background(e){this.experimentalModel.twistySceneModel.background.set(e)}get background(){throw nt("background")}set colorScheme(e){this.experimentalModel.twistySceneModel.colorSchemeRequest.set(e)}get colorScheme(){throw nt("colorScheme")}set controlPanel(e){this.experimentalModel.controlPanel.set(e)}get controlPanel(){throw nt("controlPanel")}set visualization(e){this.experimentalModel.visualizationFormat.set(e)}get visualization(){throw nt("visualization")}set experimentalTitle(e){this.experimentalModel.title.set(e)}get experimentalTitle(){throw nt("experimentalTitle")}set experimentalVideoURL(e){this.experimentalModel.videoURL.set(e)}get experimentalVideoURL(){throw nt("experimentalVideoURL")}set experimentalCompetitionID(e){this.experimentalModel.competitionID.set(e)}get experimentalCompetitionID(){throw nt("experimentalCompetitionID")}set viewerLink(e){this.experimentalModel.viewerLink.set(e)}get viewerLink(){throw nt("viewerLink")}set experimentalMovePressInput(e){this.experimentalModel.twistySceneModel.movePressInput.set(e)}get experimentalMovePressInput(){throw nt("experimentalMovePressInput")}set experimentalMovePressCancelOptions(e){this.experimentalModel.twistySceneModel.movePressCancelOptions.set(e)}get experimentalMovePressCancelOptions(){throw nt("experimentalMovePressCancelOptions")}set cameraLatitude(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({latitude:e})}get cameraLatitude(){throw nt("cameraLatitude")}set cameraLongitude(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({longitude:e})}get cameraLongitude(){throw nt("cameraLongitude")}set cameraDistance(e){this.experimentalModel.twistySceneModel.orbitCoordinatesRequest.set({distance:e})}get cameraDistance(){throw nt("cameraDistance")}set cameraLatitudeLimit(e){this.experimentalModel.twistySceneModel.latitudeLimit.set(e)}get cameraLatitudeLimit(){throw nt("cameraLatitudeLimit")}set indexer(e){this.experimentalModel.indexerConstructorRequest.set(e)}get indexer(){throw nt("indexer")}set tempoScale(e){this.experimentalModel.tempoScale.set(e)}get tempoScale(){throw nt("tempoScale")}set experimentalSprite(e){this.experimentalModel.twistySceneModel.foundationStickerSpriteURL.set(e)}get experimentalSprite(){throw nt("experimentalSprite")}set experimentalHintSprite(e){this.experimentalModel.twistySceneModel.hintStickerSpriteURL.set(e)}get experimentalHintSprite(){throw nt("experimentalHintSprite")}set fullscreenElement(e){this.experimentalModel.twistySceneModel.fullscreenElement.set(e)}get fullscreenElement(){throw nt("fullscreenElement")}set experimentalInitialHintFaceletsAnimation(e){this.experimentalModel.twistySceneModel.initialHintFaceletsAnimation.set(e)}get experimentalInitialHintFaceletsAnimation(){throw nt("experimentalInitialHintFaceletsAnimation")}set experimentalDragInput(e){this.experimentalModel.twistySceneModel.dragInput.set(e)}get experimentalDragInput(){throw nt("experimentalDragInput")}},RR=class{constructor(i){this.model=i}async alg(){return(await this.model.alg.get()).alg}async setupAlg(){return(await this.model.setupAlg.get()).alg}puzzleID(){return this.model.puzzleID.get()}async timestamp(){return(await this.model.detailedTimelineInfo.get()).timestamp}},_h="data-",vc={alg:"alg","experimental-setup-alg":"experimentalSetupAlg","experimental-setup-anchor":"experimentalSetupAnchor",puzzle:"puzzle","experimental-puzzle-description":"experimentalPuzzleDescription",visualization:"visualization","hint-facelets":"hintFacelets","experimental-stickering":"experimentalStickering","experimental-stickering-mask-orbits":"experimentalStickeringMaskOrbits",background:"background","color-scheme":"colorScheme","control-panel":"controlPanel","back-view":"backView","experimental-initial-hint-facelets-animation":"experimentalInitialHintFaceletsAnimation","viewer-link":"viewerLink","experimental-move-press-input":"experimentalMovePressInput","experimental-drag-input":"experimentalDragInput","experimental-title":"experimentalTitle","experimental-video-url":"experimentalVideoURL","experimental-competition-id":"experimentalCompetitionID","camera-latitude":"cameraLatitude","camera-longitude":"cameraLongitude","camera-distance":"cameraDistance","camera-latitude-limit":"cameraLatitudeLimit","tempo-scale":"tempoScale","experimental-sprite":"experimentalSprite","experimental-hint-sprite":"experimentalHintSprite"},IR=Object.fromEntries(Object.values(vc).map(i=>[i,!0])),LR={experimentalMovePressCancelOptions:!0},Hc,Eo,ra,Co,Ro,mi,Io,Lo,Wc,Yx,dg,Tu=(dg=class extends CR{constructor(e={}){super();J(this,Wc);F(this,"controller",new $E(this.experimentalModel,this));F(this,"buttons");F(this,"experimentalCanvasClickCallback",()=>{});J(this,Hc,new Au(this,"controls-",["auto"].concat(Object.keys(jE))));J(this,Eo,document.createElement("div"));J(this,ra,document.createElement("div"));J(this,Co,!1);J(this,Ro,"auto");J(this,mi,null);J(this,Io,new Rx);J(this,Lo,null);for(const[t,n]of Object.entries(e)){if(!(IR[t]||LR[t])){console.warn(`Invalid config passed to TwistyPlayer: ${t}`);break}this[t]=n}}async connectedCallback(){if(w(this,Co))return;fe(this,Co,!0),this.addCSS(Vx),this.addElement(w(this,Eo)).classList.add("visualization-wrapper"),this.addElement(w(this,ra)).classList.add("error-elem"),w(this,ra).textContent="Error",this.experimentalModel.userVisibleErrorTracker.addFreshListener(t=>{const n=t.errors[0]??null;this.contentWrapper.classList.toggle("error",!!n),n&&(w(this,ra).textContent=n)});const e=new Fx(this.experimentalModel,this.controller);this.contentWrapper.appendChild(e),this.buttons=new Dx(this.experimentalModel,this.controller,this),this.contentWrapper.appendChild(this.buttons),this.experimentalModel.twistySceneModel.background.addFreshListener(t=>{this.contentWrapper.classList.toggle("checkered",["auto","checkered"].includes(t)),this.contentWrapper.classList.toggle("checkered-transparent",t==="checkered-transparent")}),this.experimentalModel.twistySceneModel.colorScheme.addFreshListener(t=>{this.contentWrapper.classList.toggle("dark-mode",["dark"].includes(t))}),this.experimentalModel.controlPanel.addFreshListener(t=>{w(this,Hc).setValue(t)}),this.experimentalModel.visualizationStrategy.addFreshListener(Qe(this,Wc,Yx).bind(this)),this.experimentalModel.puzzleID.addFreshListener(this.flash.bind(this))}experimentalSetFlashLevel(e){fe(this,Ro,e)}flash(){var e;w(this,Ro)==="auto"&&((e=w(this,mi))==null||e.animate([{opacity:.25},{opacity:1}],{duration:250,easing:"ease-out"}))}async experimentalCurrentVantages(){this.connectedCallback();const e=w(this,mi);return e instanceof bd?e.experimentalVantages():[]}async experimentalCurrentCanvases(){const e=await this.experimentalCurrentVantages(),t=[];for(const n of e)t.push((await n.canvasInfo()).canvas);return t}async experimentalCurrentThreeJSPuzzleObject(e){this.connectedCallback();const n=await(await w(this,Io).promise).experimentalTwisty3DPuzzleWrapper(),r=n.twisty3DPuzzle(),s=(async()=>{await r,await new Promise(a=>setTimeout(a,0))})();if(e){const a=new va(async()=>{});n.addEventListener("render-scheduled",async()=>{a.requestIsPending()||(a.requestAnimFrame(),await s,e())})}return r}jumpToStart(e){this.controller.jumpToStart(e)}jumpToEnd(e){this.controller.jumpToEnd(e)}play(){this.controller.togglePlay(!0)}pause(){this.controller.togglePlay(!1)}togglePlay(e){this.controller.togglePlay(e)}experimentalAddMove(e,t){this.experimentalModel.experimentalAddMove(e,t)}experimentalAddAlgLeaf(e,t){this.experimentalModel.experimentalAddAlgLeaf(e,t)}static get observedAttributes(){const e=[];for(const t of Object.keys(vc))e.push(t,_h+t);return e}experimentalRemoveFinalChild(){this.experimentalModel.experimentalRemoveFinalChild()}attributeChangedCallback(e,t,n){e.startsWith(_h)&&(e=e.slice(_h.length));const r=vc[e];r&&(this[r]=n)}async experimentalScreenshot(e){return(await Em(this.experimentalModel,e)).dataURL}async experimentalDownloadScreenshot(e){if(["2D","experimental-2D-LL","experimental-2D-LL-face"].includes(await this.experimentalModel.visualizationStrategy.get())){const n=await w(this,mi).currentTwisty2DPuzzleWrapper().twisty2DPuzzle(),r=new XMLSerializer().serializeToString(n.svgWrapper.svgElement),s=URL.createObjectURL(new Blob([r]));Bx(s,e??await kx(this.experimentalModel),"svg")}else await(await Em(this.experimentalModel)).download(e)}},Hc=new WeakMap,Eo=new WeakMap,ra=new WeakMap,Co=new WeakMap,Ro=new WeakMap,mi=new WeakMap,Io=new WeakMap,Lo=new WeakMap,Wc=new WeakSet,Yx=function(e){var t,n;if(e!==w(this,Lo)){(t=w(this,mi))==null||t.remove(),(n=w(this,mi))==null||n.disconnect();let r;switch(e){case"2D":case"experimental-2D-LL":case"experimental-2D-LL-face":{r=new Cx(this.experimentalModel.twistySceneModel,e);break}case"Cube3D":case"PG3D":{r=new bd(this.experimentalModel),w(this,Io).handleNewValue(r);break}default:throw new Error("Invalid visualization")}w(this,Eo).appendChild(r),fe(this,mi,r),fe(this,Lo,e)}},dg);jt.define("twisty-player",Tu);var Zx=new bn;Zx.replaceSync(`
:host {
  display: inline;
}

.wrapper {
  display: inline;
}

a:not(:hover) {
  color: inherit;
  text-decoration: none;
}

twisty-alg-leaf-elem.twisty-alg-comment {
  color: rgba(0, 0, 0, 0.4);
}

.wrapper.current-move {
  background: rgba(66, 133, 244, 0.3);
  margin-left: -0.1em;
  margin-right: -0.1em;
  padding-left: 0.1em;
  padding-right: 0.1em;
  border-radius: 0.1em;
}
`);async function PR(i){return new Promise((e,t)=>{const n=document.getElementById(i);n&&e(n);const r=new MutationObserver(s=>{for(const a of s)a.attributeName==="id"&&a.target instanceof Element&&a.target.getAttribute("id")===i&&(e(a.target),r.disconnect())});r.observe(document.body,{attributeFilter:["id"],subtree:!0})})}var DR=250,Ns=class extends Pn{constructor(i,e,t,n,r,s){if(super({mode:"open"}),this.algOrAlgNode=n,this.classList.add(i),this.addCSS(Zx),s){const a=this.contentWrapper.appendChild(document.createElement("a"));a.href="#",a.textContent=e,a.addEventListener("click",o=>{o.preventDefault(),t.twistyAlgViewer.jumpToIndex(t.earliestMoveIndex,r)})}else this.contentWrapper.appendChild(document.createElement("span")).textContent=e}pathToIndex(i){return[]}setCurrentMove(i){this.contentWrapper.classList.toggle("current-move",i)}};jt.define("twisty-alg-leaf-elem",Ns);var Us=class extends po{constructor(e,t){super();F(this,"queue",[]);this.algOrAlgNode=t,this.classList.add(e)}addString(e){this.queue.push(document.createTextNode(e))}addElem(e){return this.queue.push(e.element),e.moveCount}flushQueue(e=1){for(const t of $x(this.queue,e))this.append(t);this.queue=[]}pathToIndex(e){return[]}};jt.define("twisty-alg-wrapper-elem",Us);function NR(i){return i===1?-1:1}function UR(i,e){return e<0?NR(i):i}function $x(i,e){if(e===1)return i;const t=Array.from(i);return t.reverse(),t}var zR=class extends ha{traverseAlg(i,e){var s,a,o;let t=0;const n=new Us("twisty-alg-alg",i);let r=!0;for(const l of vg(i.childAlgNodes(),e.direction))r||n.addString(" "),r=!1,(s=l.as(Mn))!=null&&s.experimentalNISSGrouping&&n.addString("^("),(a=l.as(nn))!=null&&a.experimentalNISSPlaceholder||(t+=n.addElem(this.traverseAlgNode(l,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction}))),(o=l.as(Mn))!=null&&o.experimentalNISSGrouping&&n.addString(")");return n.flushQueue(e.direction),{moveCount:t,element:n}}traverseGrouping(i,e){const t=i.experimentalAsSquare1Tuple(),n=UR(e.direction,i.amount);let r=0;const s=new Us("twisty-alg-grouping",i);return s.addString("("),t?(r+=s.addElem({moveCount:1,element:new Ns("twisty-alg-move",t[0].amount.toString(),e,t[0],!0,!0)}),s.addString(", "),r+=s.addElem({moveCount:1,element:new Ns("twisty-alg-move",t[1].amount.toString(),e,t[1],!0,!0)})):r+=s.addElem(this.traverseAlg(i.alg,{earliestMoveIndex:e.earliestMoveIndex+r,twistyAlgViewer:e.twistyAlgViewer,direction:n})),s.addString(`)${i.experimentalRepetitionSuffix}`),s.flushQueue(),{moveCount:r*Math.abs(i.amount),element:s}}traverseMove(i,e){const t=new Ns("twisty-alg-move",i.toString(),e,i,!0,!0);return e.twistyAlgViewer.highlighter.addMove(i.startCharIndex,t),{moveCount:1,element:t}}traverseCommutator(i,e){let t=0;const n=new Us("twisty-alg-commutator",i);n.addString("["),n.flushQueue();const[r,s]=$x([i.A,i.B],e.direction);return t+=n.addElem(this.traverseAlg(r,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),n.addString(", "),t+=n.addElem(this.traverseAlg(s,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),n.flushQueue(e.direction),n.addString("]"),n.flushQueue(),{moveCount:t*2,element:n}}traverseConjugate(i,e){let t=0;const n=new Us("twisty-alg-conjugate",i);n.addString("[");const r=n.addElem(this.traverseAlg(i.A,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction}));return t+=r,n.addString(": "),t+=n.addElem(this.traverseAlg(i.B,{earliestMoveIndex:e.earliestMoveIndex+t,twistyAlgViewer:e.twistyAlgViewer,direction:e.direction})),n.addString("]"),n.flushQueue(),{moveCount:t+r,element:n}}traversePause(i,e){return i.experimentalNISSGrouping?this.traverseAlg(i.experimentalNISSGrouping.alg,e):{moveCount:1,element:new Ns("twisty-alg-pause",".",e,i,!0,!0)}}traverseNewline(i,e){const t=new Us("twisty-alg-newline",i);return t.append(document.createElement("br")),{moveCount:0,element:t}}traverseLineComment(i,e){return{moveCount:0,element:new Ns("twisty-alg-line-comment",`//${i.text}`,e,i,!1,!1)}}},OR=An(zR),FR=class{constructor(){F(this,"moveCharIndexMap",new Map);F(this,"currentElem",null)}addMove(i,e){this.moveCharIndexMap.set(i,e)}set(i){var t,n;const e=i?this.moveCharIndexMap.get(i.startCharIndex)??null:null;this.currentElem!==e&&((t=this.currentElem)==null||t.classList.remove("twisty-alg-current-move"),(n=this.currentElem)==null||n.setCurrentMove(!1),e==null||e.classList.add("twisty-alg-current-move"),e==null||e.setCurrentMove(!0),this.currentElem=e)}},Po,gi,Xc,Jx,fg,jx=(fg=class extends po{constructor(e){super();J(this,Xc);F(this,"highlighter",new FR);J(this,Po);J(this,gi,null);F(this,"lastClickTimestamp",null);e!=null&&e.twistyPlayer&&(this.twistyPlayer=e==null?void 0:e.twistyPlayer)}connectedCallback(){}setAlg(e){fe(this,Po,OR(e,{earliestMoveIndex:0,twistyAlgViewer:this,direction:1}).element),this.textContent="",this.appendChild(w(this,Po))}get twistyPlayer(){return w(this,gi)}set twistyPlayer(e){Qe(this,Xc,Jx).call(this,e)}async jumpToIndex(e,t){const n=w(this,gi);if(n){n.pause();const r=(async()=>{const s=await n.experimentalModel.indexer.get(),a=t?DR:0;return s.indexToMoveStartTimestamp(e)+s.moveDuration(e)-a})();n.experimentalModel.timestampRequest.set(await r),this.lastClickTimestamp===await r?(n.play(),this.lastClickTimestamp=null):this.lastClickTimestamp=await r}}async attributeChangedCallback(e,t,n){if(e==="for"){let r=document.getElementById(n);if(r||console.info("for= elem does not exist, waiting for one"),await customElements.whenDefined("twisty-player"),r=await PR(n),!(r instanceof Tu)){console.warn("for= elem is not a twisty-player");return}this.twistyPlayer=r}}static get observedAttributes(){return["for"]}},Po=new WeakMap,gi=new WeakMap,Xc=new WeakSet,Jx=async function(e){if(w(this,gi)){console.warn("twisty-player reassignment is not supported");return}if(e===null)throw new Error("clearing twistyPlayer is not supported");fe(this,gi,e),w(this,gi).experimentalModel.alg.addFreshListener(r=>{this.setAlg(r.alg)});const t=(await w(this,gi).experimentalModel.alg.get()).alg,n="startCharIndex"in t?t:Te.fromString(t.toString());this.setAlg(n),e.experimentalModel.currentMoveInfo.addFreshListener(r=>{let s=r.currentMoves[0];if(s??(s=r.movesStarting[0]),s??(s=r.movesFinishing[0]),!s)this.highlighter.set(null);else{const a=s.move;this.highlighter.set(a)}}),e.experimentalModel.detailedTimelineInfo.addFreshListener(r=>{r.timestamp!==this.lastClickTimestamp&&(this.lastClickTimestamp=null)})},fg);jt.define("twisty-alg-viewer",jx);var kR=class extends ha{traverseAlg(i,e){const t=[];let n=0;for(const r of i.childAlgNodes()){const s=this.traverseAlgNode(r,{numMovesSofar:e.numMovesSofar+n});t.push(s.tokens),n+=s.numLeavesInside}return{tokens:Array.prototype.concat(...t),numLeavesInside:n}}traverseGrouping(i,e){const t=this.traverseAlg(i.alg,e);return{tokens:t.tokens,numLeavesInside:t.numLeavesInside*i.amount}}traverseMove(i,e){return{tokens:[{leaf:i,idx:e.numMovesSofar}],numLeavesInside:1}}traverseCommutator(i,e){const t=this.traverseAlg(i.A,e),n=this.traverseAlg(i.B,{numMovesSofar:e.numMovesSofar+t.numLeavesInside});return{tokens:t.tokens.concat(n.tokens),numLeavesInside:t.numLeavesInside*2+n.numLeavesInside}}traverseConjugate(i,e){const t=this.traverseAlg(i.A,e),n=this.traverseAlg(i.B,{numMovesSofar:e.numMovesSofar+t.numLeavesInside});return{tokens:t.tokens.concat(n.tokens),numLeavesInside:t.numLeavesInside*2+n.numLeavesInside*2}}traversePause(i,e){return{tokens:[{leaf:i,idx:e.numMovesSofar}],numLeavesInside:1}}traverseNewline(i,e){return{tokens:[],numLeavesInside:0}}traverseLineComment(i,e){return{tokens:[],numLeavesInside:0}}},BR=An(kR),VR=class extends mt{getDefaultValue(){return""}},GR=class extends gt{derive(i){return Hx(i.value)}},HR=class extends lr{getDefaultValue(){return{selectionStart:0,selectionEnd:0,endChangedMostRecently:!1}}async derive(i,e){const{selectionStart:t,selectionEnd:n}=i,r=await e,s=i.selectionStart===r.selectionStart&&i.selectionEnd!==(await e).selectionEnd;return{selectionStart:t,selectionEnd:n,endChangedMostRecently:s}}},WR=class extends gt{derive(i){return i.selectionInfo.endChangedMostRecently?i.selectionInfo.selectionEnd:i.selectionInfo.selectionStart}},XR=class extends gt{derive(i){return BR(i.algWithIssues.alg,{numMovesSofar:0}).tokens}},qR=class extends gt{derive(i){function e(n){if(n===null)return null;let r;return i.targetChar<n.leaf.startCharIndex?r="before":i.targetChar===n.leaf.startCharIndex?r="start":i.targetChar<n.leaf.endCharIndex?r="inside":i.targetChar===n.leaf.endCharIndex?r="end":r="after",{leafInfo:n,where:r}}let t=null;for(const n of i.leafTokens){if(i.targetChar<n.leaf.startCharIndex&&t!==null)return e(t);if(i.targetChar<=n.leaf.endCharIndex)return e(n);t=n}return e(t)}},YR=class{constructor(){F(this,"valueProp",new VR);F(this,"selectionProp",new HR);F(this,"targetCharProp",new WR({selectionInfo:this.selectionProp}));F(this,"algEditorAlgWithIssues",new GR({value:this.valueProp}));F(this,"leafTokensProp",new XR({algWithIssues:this.algEditorAlgWithIssues}));F(this,"leafToHighlight",new qR({leafTokens:this.leafTokensProp,targetChar:this.targetCharProp}))}},ZR="//";function $R(i){try{return Te.fromString(i)}catch{return null}}function Kx(i,e){const t=i.indexOf(e);return t===-1?[i,""]:[i.slice(0,t),i.slice(t)]}function Om(i){const e=[];for(const t of i.split(`
`)){let[n,r]=Kx(t,ZR);n=n.replaceAll("’","'"),e.push(n+r)}return e.join(`
`)}function jR(i,e){const{value:t}=i,{selectionStart:n,selectionEnd:r}=i,s=t.slice(0,n),a=t.slice(r);e=e.replaceAll(`\r
`,`
`);const o=s.match(/\/\/[^\n]*$/),l=t[n-1]==="/"&&e[0]==="/",c=o||l,u=e.match(/\/\/[^\n]*$/);let h=e;if(c){const[g,m]=Kx(e,`
`);h=g+Om(m)}else h=Om(e);const d=!c&&n!==0&&![`
`," "].includes(h[0])&&![`
`," "].includes(t[n-1]),f=!u&&r!==t.length&&![`
`," "].includes(h.at(-1))&&![`
`," "].includes(t[r]);function p(g,m){const y=g+h+m,x=!!$R(s+y+a);return x&&(h=y),x}d&&f&&p(" "," ")||d&&p(" ","")||f&&p(""," "),(vt==null?void 0:vt.execCommand("insertText",!1,h))||i.setRangeText(h,n,r,"end")}var Qx=new bn;Qx.replaceSync(`
:host {
  width: 384px;
  display: grid;
}

.wrapper {
  /*overflow: hidden;
  resize: horizontal;*/

  background: var(--background, none);
  display: grid;
}

textarea, .carbon-copy {
  grid-area: 1 / 1 / 2 / 2;

  width: 100%;
  font-family: sans-serif;
  line-height: 1.2em;

  font-size: var(--font-size, inherit);
  font-family: var(--font-family, sans-serif);

  box-sizing: border-box;

  padding: var(--padding, 0.5em);
  /* Prevent horizontal growth. */
  overflow-x: hidden;
}

textarea {
  resize: none;
  background: none;
  z-index: 2;
  border: 1px solid var(--border-color, rgba(0, 0, 0, 0.25));
}

.carbon-copy {
  white-space: pre-wrap;
  word-wrap: break-word;
  color: transparent;
  user-select: none;
  pointer-events: none;

  z-index: 1;
}

.carbon-copy .highlight {
  background: var(--highlight-color, rgba(255, 128, 0, 0.5));
  padding: 0.1em 0.2em;
  margin: -0.1em -0.2em;
  border-radius: 0.2em;
}

.wrapper.issue-warning textarea,
.wrapper.valid-for-puzzle-warning textarea {
  outline: none;
  border: 1px solid rgba(200, 200, 0, 0.5);
  background: rgba(255, 255, 0, 0.1);
}

.wrapper.issue-error textarea,
.wrapper.valid-for-puzzle-error textarea {
  outline: none;
  border: 1px solid red;
  background: rgba(255, 0, 0, 0.1);
}
`);var Yl="for-twisty-player",Fm="placeholder",km="twisty-player-prop",Rt,Ki,Hr,vi,Wr,qc,Zn,xi,Ei,sc,Do,Td,No,pg,JR=(pg=class extends Pn{constructor(e){super();J(this,Ei);F(this,"model",new YR);J(this,Rt,document.createElement("textarea"));J(this,Ki,document.createElement("div"));J(this,Hr,document.createElement("span"));J(this,vi,document.createElement("span"));J(this,Wr,document.createElement("span"));J(this,qc,new Au(this,"valid-for-puzzle-",["none","warning","error"]));J(this,Zn,null);J(this,xi);F(this,"debugNeverRequestTimestamp",!1);J(this,Do,!1);J(this,No,null);w(this,Ki).classList.add("carbon-copy"),this.addElement(w(this,Ki)),w(this,Rt).rows=1,this.addElement(w(this,Rt)),w(this,Hr).classList.add("prefix"),w(this,Ki).appendChild(w(this,Hr)),w(this,vi).classList.add("highlight"),w(this,Ki).appendChild(w(this,vi)),w(this,Wr).classList.add("suffix"),w(this,Ki).appendChild(w(this,Wr)),w(this,Rt).placeholder="Alg",w(this,Rt).setAttribute("spellcheck","false"),this.addCSS(Qx),w(this,Rt).addEventListener("input",()=>{fe(this,Do,!0),this.onInput()}),w(this,Rt).addEventListener("blur",()=>this.onBlur()),document.addEventListener("selectionchange",()=>this.onSelectionChange()),e!=null&&e.twistyPlayer&&(this.twistyPlayer=e.twistyPlayer),fe(this,xi,(e==null?void 0:e.twistyPlayerProp)??"alg"),(e==null?void 0:e.twistyPlayerProp)==="alg"&&this.model.leafToHighlight.addFreshListener(t=>{t&&this.highlightLeaf(t.leafInfo.leaf)})}connectedCallback(){w(this,Rt).addEventListener("paste",e=>{var n;const t=(n=e.clipboardData)==null?void 0:n.getData("text");t&&(jR(w(this,Rt),t),e.preventDefault(),this.onInput())})}set algString(e){w(this,Rt).value=e,this.onInput()}get algString(){return w(this,Rt).value}set placeholder(e){w(this,Rt).placeholder=e}onInput(){var t;w(this,vi).hidden=!0,this.highlightLeaf(null);const e=w(this,Rt).value.trimEnd();this.model.valueProp.set(e),(t=w(this,Ei,sc))==null||t.set(e)}async onSelectionChange(){if(document.activeElement!==this||this.shadow.activeElement!==w(this,Rt)||w(this,xi)!=="alg")return;const{selectionStart:e,selectionEnd:t}=w(this,Rt);this.model.selectionProp.set({selectionStart:e,selectionEnd:t})}async onBlur(){}setAlgIssueClassForPuzzle(e){w(this,qc).setValue(e)}highlightLeaf(e){if(w(this,xi)==="alg"){if(e===null){w(this,Hr).textContent="",w(this,vi).textContent="",w(this,Wr).textContent=Qe(this,Ei,Td).call(this,w(this,Rt).value);return}e!==w(this,No)&&(fe(this,No,e),w(this,Hr).textContent=w(this,Rt).value.slice(0,e.startCharIndex),w(this,vi).textContent=w(this,Rt).value.slice(e.startCharIndex,e.endCharIndex),w(this,Wr).textContent=Qe(this,Ei,Td).call(this,w(this,Rt).value.slice(e.endCharIndex)),w(this,vi).hidden=!1)}}get twistyPlayer(){return w(this,Zn)}set twistyPlayer(e){var t;if(w(this,Zn)){console.warn("twisty-player reassignment/clearing is not supported");return}fe(this,Zn,e),e&&((async()=>this.algString=w(this,Ei,sc)?(await w(this,Ei,sc).get()).alg.toString():"")(),w(this,xi)==="alg"&&((t=w(this,Zn))==null||t.experimentalModel.puzzleAlg.addFreshListener(n=>{if(n.issues.errors.length===0){this.setAlgIssueClassForPuzzle(n.issues.warnings.length===0?"none":"warning");const r=n.alg,s=Te.fromString(this.algString);r.isIdentical(s)||(this.algString=r.toString(),this.onInput())}else this.setAlgIssueClassForPuzzle("error")}),this.model.leafToHighlight.addFreshListener(async n=>{if(n===null)return;const[r,s]=await Promise.all([await e.experimentalModel.indexer.get(),await e.experimentalModel.timestampRequest.get()]);if(s==="auto"&&!w(this,Do))return;const a=r.indexToMoveStartTimestamp(n.leafInfo.idx),o=r.moveDuration(n.leafInfo.idx);let l;switch(n.where){case"before":{l=a;break}case"start":case"inside":{l=a+o/4;break}case"end":case"after":{l=a+o;break}default:throw console.log("invalid where"),new Error("Invalid where!")}this.debugNeverRequestTimestamp||e.experimentalModel.timestampRequest.set(l)}),e.experimentalModel.currentLeavesSimplified.addFreshListener(async n=>{const s=(await e.experimentalModel.indexer.get()).getAnimLeaf(n.patternIndex);this.highlightLeaf(s)})))}attributeChangedCallback(e,t,n){switch(e){case Yl:{const r=document.getElementById(n);if(!r){console.warn(`${Yl}= elem does not exist`);return}if(!(r instanceof Tu)){console.warn(`${Yl}=is not a twisty-player`);return}this.twistyPlayer=r;return}case Fm:{this.placeholder=n;return}case km:{if(w(this,Zn))throw console.log("cannot set prop"),new Error("cannot set prop after twisty player");fe(this,xi,n);return}}}static get observedAttributes(){return[Yl,Fm,km]}},Rt=new WeakMap,Ki=new WeakMap,Hr=new WeakMap,vi=new WeakMap,Wr=new WeakMap,qc=new WeakMap,Zn=new WeakMap,xi=new WeakMap,Ei=new WeakSet,sc=function(){return w(this,Zn)===null?null:w(this,Zn).experimentalModel[w(this,xi)]},Do=new WeakMap,Td=function(e){return e.endsWith(`
`)?`${e} `:e},No=new WeakMap,pg);jt.define("twisty-alg-editor",JR);var ac=new bn;ac.replaceSync(`
.wrapper {
  background: rgb(255, 245, 235);
  border: 1px solid rgba(0, 0, 0, 0.25);

  /* Workaround from https://stackoverflow.com/questions/40010597/how-do-i-apply-opacity-to-a-css-color-variable */
  --text-color: 0, 0, 0;
  --heading-background: 255, 230, 210;

  color: rgb(var(--text-color));
}

.setup-alg, twisty-alg-viewer {
  padding: 0.5em 1em;
}

.heading {
  background: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  font-weight: bold;
  padding: 0.25em 0.5em;
  display: grid;
  grid-template-columns: auto 1fr;

  /* For the move count hover elems. */
  position: sticky;
}

.heading.title {
  background: rgb(255, 245, 235);
  font-size: 150%;
  white-space: pre-wrap;
}

.heading .move-count {
  font-weight: initial;
  text-align: right;
  color: rgba(var(--text-color), 0.4);
}

.wrapper.dark-mode .heading .move-count {
  color: rgba(var(--text-color), 0.7);
}

.heading a {
  text-decoration: none;
  color: inherit;
}

twisty-player {
  width: 100%;
  min-height: 128px;
  height: 288px;
  resize: vertical;
  overflow-y: hidden;
}

twisty-player + .heading {
  padding-top: 0.5em;
}

twisty-alg-viewer {
  display: inline-block;
}

.wrapper {
  container-type: inline-size;
}

.scrollable-region {
  border-top: 1px solid rgba(0, 0, 0, 0.25);
}

.scrollable-region {
  max-height: 18em;
  overflow-y: auto;
}

@container (min-width: 512px) {
  .responsive-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  twisty-player {
    height: 320px
  }
  .scrollable-region {
    border-top: none;
    border-left: 1px solid rgba(0, 0, 0, 0.25);
    contain: strict;
    max-height: 100cqh;
  }
}

.wrapper:fullscreen,
.wrapper:fullscreen .responsive-wrapper {
  width: 100%;
  height: 100%;
}

.wrapper:fullscreen twisty-player,
.wrapper:fullscreen .scrollable-region {
  height: 50%;
}

@container (min-width: 512px) {
  .wrapper:fullscreen twisty-player,
  .wrapper:fullscreen .scrollable-region {
    height: 100%;
  }
}

/* TODO: dedup with Twizzle Editor */
.move-count > span:hover:before {
  background-color: rgba(var(--heading-background), 1);
  color: rgba(var(--text-color), 1);
  backdrop-filter: blur(4px);
  z-index: 100;
  position: absolute;
  padding: 0.5em;
  top: 1.5em;
  right: 0;
  content: attr(data-before);
  white-space: pre-wrap;
  text-align: left;
}

.move-count > span:hover {
  color: rgba(var(--text-color), 1);
  cursor: help;
}
`);var ey=new bn;ey.replaceSync(`
.wrapper {
  background: white;
  --heading-background: 232, 239, 253
}

.wrapper.dark-mode {
  --text-color: 236, 236, 236;
  --heading-background: 29, 29, 29;
}

.scrollable-region {
  overflow-y: auto;
}

.wrapper.dark-mode {
  background: #262626;
  --text-color: 142, 142, 142;
  border-color: #FFFFFF44;
  color-scheme: dark;
}

.wrapper.dark-mode .heading:not(.title) {
  background: #1d1d1d;
}

.heading.title {
  background: none;
}
`);function KR(i="",e=location.href){const t={alg:"alg","setup-alg":"experimental-setup-alg","setup-anchor":"experimental-setup-anchor",puzzle:"puzzle",stickering:"experimental-stickering","puzzle-description":"experimental-puzzle-description",title:"experimental-title","video-url":"experimental-video-url",competition:"experimental-competition-id"},n=new URL(e).searchParams,r={};for(const[s,a]of Object.entries(t)){const o=n.get(i+s);if(o!==null){const l=vc[a];r[l]=o}}return r}var Zl="outer block moves (e.g. R, Rw, or 4r)",$l="inner block moves (e.g. M or 2-5r)",Bm={OBTM:`HTM = OBTM ("Outer Block Turn Metric"):
• ${$l} count as 2 turns
• ${Zl} count as 1 turn
• rotations (e.g. x) count as 0 turns`,OBQTM:`QTM = OBQTM ("Outer Block Quantum Turn Metric"):
• ${$l} count as 2 turns per quantum (e.g. M2 counts as 4)
• ${Zl} count as 1 turn per quantum (e.g. R2 counts as 2)
• rotations (e.g. x) count as 0 turns`,RBTM:`STM = RBTM ("Range Block Turn Metric"):
• ${$l} count as 1 turn
• ${Zl} count as 1 turn
• rotations (e.g. x) count as 0 turns`,RBQTM:`SQTM = RBQTM ("Range Block Quantum Turn Metric"):
• ${$l} count as 1 turn per quantum (e.g. M2 counts as 2)
• ${Zl} count as 1 turn per quantum (e.g. R2 counts as 2)
• rotations (e.g. x) count as 0 turns`,ETM:`ETM ("Execution Turn Metric"):
• all moves (including rotations) count as 1 turn`},QR={OBTM:"OB",OBQTM:"OBQ",RBTM:"RB",RBQTM:"RBQ",ETM:"E"},Ci,Ed,Yc,Qi,Xr,Uo,oc,mg,eI=(mg=class extends Pn{constructor(e){super({mode:"open"});J(this,Ci);F(this,"twistyPlayer",null);F(this,"a",null);J(this,Yc);J(this,Qi);J(this,Xr);J(this,Uo);this.options=e}async connectedCallback(){var s,a,o,l,c;if(fe(this,Xr,this.addElement(document.createElement("div"))),w(this,Xr).classList.add("responsive-wrapper"),((s=this.options)==null?void 0:s.colorScheme)==="dark"&&this.contentWrapper.classList.add("dark-mode"),this.addCSS(ac),(a=this.options)!=null&&a.cdnForumTweaks&&this.addCSS(ey),this.a=this.querySelector("a"),!this.a)return;const e=KR("",this.a.href),t=(o=this.a)==null?void 0:o.href,{hostname:n,pathname:r}=new URL(t);if(n!=="alpha.twizzle.net"){Qe(this,Ci,Ed).call(this);return}if(["/edit/","/explore/"].includes(r)){const u=r==="/explore/";if(e.puzzle&&!(e.puzzle in Ax)){const f=(await ft(async()=>{const{getPuzzleDescriptionString:p}=await import("./index-DQgfSxu_.js");return{getPuzzleDescriptionString:p}},[])).getPuzzleDescriptionString(e.puzzle);delete e.puzzle,e.experimentalPuzzleDescription=f}if(this.twistyPlayer=w(this,Xr).appendChild(new Tu({background:(l=this.options)!=null&&l.cdnForumTweaks?"checkered-transparent":"checkered",colorScheme:((c=this.options)==null?void 0:c.colorScheme)==="dark"?"dark":"light",...e,viewerLink:u?"experimental-twizzle-explorer":"auto"})),this.twistyPlayer.fullscreenElement=this.contentWrapper,e.experimentalTitle&&(this.twistyPlayer.experimentalTitle=e.experimentalTitle),fe(this,Qi,w(this,Xr).appendChild(document.createElement("div"))),w(this,Qi).classList.add("scrollable-region"),e.experimentalTitle&&Qe(this,Ci,oc).call(this,e.experimentalTitle).classList.add("title"),e.experimentalSetupAlg){Qe(this,Ci,oc).call(this,"Setup",async()=>{var p,v;return((v=await((p=this.twistyPlayer)==null?void 0:p.experimentalModel.setupAlg.get()))==null?void 0:v.alg.toString())??null});const f=w(this,Qi).appendChild(document.createElement("div"));f.classList.add("setup-alg"),f.textContent=new Te(e.experimentalSetupAlg).toString()}const h=Qe(this,Ci,oc).call(this,"Moves",async()=>{var f,p;return((p=await((f=this.twistyPlayer)==null?void 0:f.experimentalModel.alg.get()))==null?void 0:p.alg.toString())??null});fe(this,Uo,h.appendChild(tI(this.twistyPlayer.experimentalModel))),w(this,Uo).classList.add("move-count"),w(this,Qi).appendChild(new jx({twistyPlayer:this.twistyPlayer})).part.add("twisty-alg-viewer")}else Qe(this,Ci,Ed).call(this)}},Ci=new WeakSet,Ed=function(){var t;if(this.contentWrapper.textContent="",this.a){const n=this.contentWrapper.appendChild(document.createElement("span"));n.textContent="❗️",n.title="Could not show a player for link",this.addElement(this.a)}this.removeCSS(ac);const e=this.shadow.adoptedStyleSheets.indexOf(ac);typeof e<"u"&&this.shadow.adoptedStyleSheets.splice(e,e+1),(t=w(this,Yc))==null||t.remove()},Yc=new WeakMap,Qi=new WeakMap,Xr=new WeakMap,Uo=new WeakMap,oc=function(e,t){const n=w(this,Qi).appendChild(document.createElement("div"));n.classList.add("heading");const r=n.appendChild(document.createElement("span"));if(r.textContent=e,t){r.textContent+=" ";const s=r.appendChild(document.createElement("a"));s.textContent="📋",s.href="#",s.title="Copy to clipboard";async function a(o){s.textContent=o,await new Promise(l=>setTimeout(l,2e3)),s.textContent===o&&(s.textContent="📋")}s.addEventListener("click",async o=>{o.preventDefault(),s.textContent="📋…";const l=await t();if(l)try{await navigator.clipboard.writeText(l),a("📋✅")}catch(c){throw a("📋❌"),c}else a("📋❌")})}return n},mg);jt.define("twizzle-link",eI);function tI(i,e=document.createElement("span")){async function t(){const[n,r]=await Promise.all([i.puzzleAlg.get(),i.puzzleLoader.get()]);if(n.issues.errors.length!==0){e.textContent="";return}let s=!0;function a(o){s?s=!1:e.append(")(");const l=e.appendChild(document.createElement("span")),c=wE(r,o,n.alg);l.append(`${QR[o]}: `);const u=l.appendChild(document.createElement("span"));u.textContent=c.toString(),u.classList.add("move-number"),l.setAttribute("data-before",Bm[o]??""),l.setAttribute("title",Bm[o]??"")}e.textContent="(",r.id==="3x3x3"?(a("OBTM"),a("OBQTM"),a("RBTM")):r.pg&&(a("RBTM"),a("RBQTM")),a("ETM"),e.append(")")}return i.puzzleAlg.addFreshListener(t),i.puzzleID.addFreshListener(t),e}function nI(i){if(i.length!==54)throw new Error("Facelets string must be 54 characters long");const e=[35,34,33,32,31,30,29,28,27,44,43,42,41,40,39,38,37,36,26,25,24,23,22,21,20,19,18,8,7,6,5,4,3,2,1,0,17,16,15,14,13,12,11,10,9,53,52,51,50,49,48,47,46,45];let t="";for(let n=0;n<54;n++)t+=i[e[n]];return t}function iI(i){const t=[{u:[0,1,2,3,4,5,6,7,8],r:[9,10,11],f:[18,19,20],l:[36,37,38],b:[45,46,47]}][0];return[...t.u.map(n=>i[n]),...t.r.map(n=>i[n]),...t.f.map(n=>i[n]),...t.l.map(n=>i[n]),...t.b.map(n=>i[n])].join("")}function rI(i){return i.split("").map(e=>e==="D"?"1":"0").join("")}function mI(i){const e=nI(i);for(let t=0;t<4;t++){const n=rI(iI(e));if(n in Cd)return Cd[n]}return null}function sI(i,e){let t="";return e===1?t="U' ":e===2?t="U2 ":e===3&&(t="U "),t+i}function aI(i){const e=i.slice(0,9),t=i.slice(9,12),n=i.slice(12,15),r=i.slice(15,18),s=i.slice(18,21),a=[e[6],e[3],e[0],e[7],e[4],e[1],e[8],e[5],e[2]].join(""),o=s,l=t,c=n,u=r;return a+o+l+c+u}const oI=["000010000111010111010","000010000010011111110","000010001011010011011","001010000110110110010","000011011001000011011","011011000100110110000","010110100011011000001","100110010110100000110","010110001010110100100","001110010010001001011","011110000010011001001","001011010100100110010","000111100001011000011","000111001000110100110","100111000001011001010","000111100100010100110","100010001010010011110","100010100111010010010","101010000110010011010","101010101010010010010","010111010101000101000","010111010000001101100","111111010000101000000","011111011000100000001","110111011001100000000","110111010100100000100","010111110001001000001","111110101010010000000","011110001010110000001","110011100000011010100","011011001000110010001","110110100010011000100","001111001000110000011","101111000100010001010","100011011001100010010","110011001000010011100","110110001011110000000","011110100110010000001","001111100000011100010","100111001001110000010","010110101010010000101","101110010010101000010","111110000010111000000","110110100111010000000","001111001000010101010","011010011010000111000","010011000101110010001","010110000010011101100","010011000000011111100","010110000111110000001","000111000000011101110","000111000100010001111","000011010101000111010","010011000101010111000","000111000000111000111","000111000101010101010","101111101000010000010"],Cd={};oI.forEach((i,e)=>{let t=i;for(let n=0;n<4;n++)Cd[t]={index:e+1,rotation:n},t=aI(t)});const ty={"R U R' U'":"Sexy move","R' F R F'":"Sledgehammer","R U R' U R U2 R'":"Sune","R' U' R U' R' U2 R":"Sune from back"},Rd={1:"(R U2 R2) (F R F') U2 (R' F R F')",2:"F (R U R' U') F' f (R U R' U') f'",3:"f (R U R' U') f' (U') F (R U R' U') F'",4:"f (R U R' U') f' (U) F (R U R' U') F'",5:"r' U2 (R U R' U) r",6:"r U2 (R' U' R U') r'",7:"r (U R' U R) U2 r'",8:"r' (U' R U' R') U2 r",9:"(R U R' U') (R' F R2) (U R' U' F')",10:"(R U R' U) (R' F R F') (R U2 R')",11:"r U R' U R' F R F' R U2 r'",12:"F (R U R' U') F' U F (R U R' U') F'",13:"F U R U2 R' U' R U R' F'",14:"r U R' U' r' F R2 U R' U' F'",15:"R' F' R L' U' L U R' F R",16:"R' F R U R' U' F' R U' R' U2 R",17:"(R U R' U) (R' F R F') U2 (R' F R F')",18:"F (R U' R' U') (R U R' F') U' (F R U R' U' F')",19:"R' U2 F R U R' U' F2 U2 F R",20:"r' R U R U R' U' R2 r2 U R U' r'",21:"(R U R' U) (R U' R' U) (R U2 R')",22:"R U2 (R2' U') (R2 U') (R2' U') U' R",23:"R2 D R' U2 R D' R' U2 R'",24:"r U R' U' r' F R F'",25:"y F' r U R' U' r' F R",26:"R' U' R U' R' U2 R",27:"R U R' U R U2 R'",28:"r U R' U' r' R U R U' R'",29:"R U R' U' R U' R' F' U' F R U R'",30:"R U R' U' R' F R2 U' R' U' R U R' U R U' R' F'",31:"(R' U' F) (U R U' R') F' R",32:"L U F' U' L' U L F L'",33:"(R U R' U') (R' F R F')",34:"F R U R' U' R' F' r U R U' r'",35:"(R U2) (R2) (F R F' R) U2 R'",36:"(L' U' L U') (L' U L U) (L F' L' F)",37:"F R (U' R' U') (R U R') F'",38:"(R U R' U) (R U' R' U') (R' F R F')",39:"f' L F L' U' L' U L S",40:"f R' F' R U R U' R' S'",41:"R U R' U R U2 R' F R U R' U' F'",42:"(R' U' R U' R' U2 R) F (R U R' U') F'",43:"(R' U' F') (U F R)",44:"F U R U' R' F'",45:"F R U R' U' F'",46:"r' U' F R' F' R U r",47:"F' (L' U' L U) (L' U' L U) F",48:"F (R U R' U') (R U R' U') F'",49:"r U' (r2 U) (r2 U) (r2) U' r",50:"R' F R2 B' R2 F' R2 B R'",51:"f (R U R' U') (R U R' U') f'",52:"F U R U' R' F' r U R' U R U2 r'",53:"(r' U' R U') (R' U R U') (R' U2 r)",54:"(r U R' U) (R U' R' U) (R U2 r')",55:"R' F R U R U' R2 F' R2 U' R' U R U R'",56:"(r U r') (U R U' R') (U R U' R') (r U' r')",57:"R U R' U' R' r U R U' r'"},gI={2:"F sexy F'  f sexy f'",3:"f sexy f'  U'  F sexy F'",4:"f sexy f'  U   F sexy F'",5:"Fat antisune (U2 start)",6:"Fat sune (U2 start)",7:"Fat sune",8:"Fat antisune",11:"f' to left S move ending",12:"f to right S move ending",28:"fat sexy skinny sexy",57:"skinny sexy fat sexy",33:"Second half of y perm",37:"First half of y perm",41:"sune F sexy F'",42:"antisune F sexy F'",43:"f' lefty sexy f",44:"F sexy F'",51:"f double sexy f'",45:"2 look alg for line",47:"F' double lefty sexy F",48:"F double sexy F'",53:"fat antisune w extra double back",54:"fat sune w extra double back",49:"righty twisty thing",50:"lefty twisty thing",55:"Double flick with right index"};function vI(i,e){const t=Rd[i];if(!t)return null;const n=sI(t,e),r=lI(n);return{original:n,nicknamed:r}}function lI(i){let e=i;const t=/\(([^)]+)\)/g;e=e.replace(t,r=>`<span class="algorithm-block">${r}</span>`);for(const[r,s]of Object.entries(ty)){const a=new RegExp(r.replace(/ /g,"\\s+"),"g");e=e.replace(a,`<strong style="color: blue;">${s}</strong>`)}const n=/([RUFLDB]'?|[RUFLDB]2)/g;return e=e.replace(n,r=>`<span class="algorithm-move" data-move="${r}">${r}</span>`),e}function xI(){const i=Object.keys(Rd).map(Number),e=i[Math.floor(Math.random()*i.length)],t=Rd[e],n=ty[t]||"No nickname";return{index:e,algorithm:t,nickname:n}}export{Te as A,$e as B,ye as C,$n as D,wn as E,Ri as F,Bs as G,pI as H,Ld as K,z as M,it as O,fn as Q,Tu as T,E as V,ft as _,wh as a,xI as b,Mf as c,mI as d,gI as e,Pd as f,vI as g,wi as h,tT as i,fI as j,sr as k,dI as l,ze as m,QT as n,Rd as o,Ax as p,Pt as q,uI as r,ut as s,ei as t,rn as u,j as v,ls as w,hI as x,Ni as y,_x as z};
