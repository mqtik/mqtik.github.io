(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(r){if(r.ep)return;r.ep=!0;const s=e(r);fetch(r.href,s)}})();/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Qr="179",pr={ROTATE:0,DOLLY:1,PAN:2},hr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Vd=0,Tc=1,zd=2,Fu=1,Bu=2,Bn=3,bn=0,Be=1,_n=2,ri=0,gr=1,bc=2,Ac=3,Rc=4,Hd=5,Ei=100,kd=101,Gd=102,Wd=103,Xd=104,qd=200,Yd=201,$d=202,Zd=203,Fa=204,Ba=205,jd=206,Kd=207,Jd=208,Qd=209,tf=210,ef=211,nf=212,rf=213,sf=214,Oa=0,Va=1,za=2,vr=3,Ha=4,ka=5,Ga=6,Wa=7,Vl=0,of=1,af=2,si=0,lf=1,cf=2,hf=3,uf=4,df=5,ff=6,pf=7,Ou=300,xr=301,yr=302,Xa=303,qa=304,vo=306,Ya=1e3,Ti=1001,$a=1002,vn=1003,gf=1004,os=1005,En=1006,Po=1007,bi=1008,An=1009,Vu=1010,zu=1011,Zr=1012,zl=1013,Pi=1014,zn=1015,ts=1016,Hl=1017,kl=1018,jr=1020,Hu=35902,ku=1021,Gu=1022,mn=1023,Kr=1026,Jr=1027,Wu=1028,Gl=1029,Xu=1030,Wl=1031,Xl=1033,Js=33776,Qs=33777,to=33778,eo=33779,Za=35840,ja=35841,Ka=35842,Ja=35843,Qa=36196,tl=37492,el=37496,nl=37808,il=37809,rl=37810,sl=37811,ol=37812,al=37813,ll=37814,cl=37815,hl=37816,ul=37817,dl=37818,fl=37819,pl=37820,gl=37821,no=36492,_l=36494,ml=36495,qu=36283,vl=36284,xl=36285,yl=36286,_f=3200,mf=3201,ql=0,vf=1,ei="",Qe="srgb",Mr="srgb-linear",ho="linear",ie="srgb",Fi=7680,Pc=519,xf=512,yf=513,Mf=514,Yu=515,Sf=516,Ef=517,wf=518,Tf=519,Cc=35044,Dc="300 es",wn=2e3,uo=2001;class Li{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[t]===void 0&&(n[t]=[]),n[t].indexOf(e)===-1&&n[t].push(e)}hasEventListener(t,e){const n=this._listeners;return n===void 0?!1:n[t]!==void 0&&n[t].indexOf(e)!==-1}removeEventListener(t,e){const n=this._listeners;if(n===void 0)return;const r=n[t];if(r!==void 0){const s=r.indexOf(e);s!==-1&&r.splice(s,1)}}dispatchEvent(t){const e=this._listeners;if(e===void 0)return;const n=e[t.type];if(n!==void 0){t.target=this;const r=n.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,t);t.target=null}}}const Ce=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],io=Math.PI/180,Ml=180/Math.PI;function es(){const i=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(Ce[i&255]+Ce[i>>8&255]+Ce[i>>16&255]+Ce[i>>24&255]+"-"+Ce[t&255]+Ce[t>>8&255]+"-"+Ce[t>>16&15|64]+Ce[t>>24&255]+"-"+Ce[e&63|128]+Ce[e>>8&255]+"-"+Ce[e>>16&255]+Ce[e>>24&255]+Ce[n&255]+Ce[n>>8&255]+Ce[n>>16&255]+Ce[n>>24&255]).toLowerCase()}function Xt(i,t,e){return Math.max(t,Math.min(e,i))}function bf(i,t){return(i%t+t)%t}function Co(i,t,e){return(1-e)*i+e*t}function Pr(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("Invalid component type.")}}function He(i,t){switch(t.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("Invalid component type.")}}const Af={DEG2RAD:io};class Ft{constructor(t=0,e=0){Ft.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,n=this.y,r=t.elements;return this.x=r[0]*e+r[3]*n+r[6],this.y=r[1]*e+r[4]*n+r[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y;return e*e+n*n}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const n=Math.cos(e),r=Math.sin(e),s=this.x-t.x,o=this.y-t.y;return this.x=s*n-o*r+t.x,this.y=s*r+o*n+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Ci{constructor(t=0,e=0,n=0,r=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=n,this._w=r}static slerpFlat(t,e,n,r,s,o,a){let u=n[r+0],h=n[r+1],d=n[r+2],f=n[r+3];const g=s[o+0],_=s[o+1],S=s[o+2],w=s[o+3];if(a===0){t[e+0]=u,t[e+1]=h,t[e+2]=d,t[e+3]=f;return}if(a===1){t[e+0]=g,t[e+1]=_,t[e+2]=S,t[e+3]=w;return}if(f!==w||u!==g||h!==_||d!==S){let v=1-a;const m=u*g+h*_+d*S+f*w,T=m>=0?1:-1,p=1-m*m;if(p>Number.EPSILON){const x=Math.sqrt(p),c=Math.atan2(x,m*T);v=Math.sin(v*c)/x,a=Math.sin(a*c)/x}const l=a*T;if(u=u*v+g*l,h=h*v+_*l,d=d*v+S*l,f=f*v+w*l,v===1-a){const x=1/Math.sqrt(u*u+h*h+d*d+f*f);u*=x,h*=x,d*=x,f*=x}}t[e]=u,t[e+1]=h,t[e+2]=d,t[e+3]=f}static multiplyQuaternionsFlat(t,e,n,r,s,o){const a=n[r],u=n[r+1],h=n[r+2],d=n[r+3],f=s[o],g=s[o+1],_=s[o+2],S=s[o+3];return t[e]=a*S+d*f+u*_-h*g,t[e+1]=u*S+d*g+h*f-a*_,t[e+2]=h*S+d*_+a*g-u*f,t[e+3]=d*S-a*f-u*g-h*_,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,n,r){return this._x=t,this._y=e,this._z=n,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const n=t._x,r=t._y,s=t._z,o=t._order,a=Math.cos,u=Math.sin,h=a(n/2),d=a(r/2),f=a(s/2),g=u(n/2),_=u(r/2),S=u(s/2);switch(o){case"XYZ":this._x=g*d*f+h*_*S,this._y=h*_*f-g*d*S,this._z=h*d*S+g*_*f,this._w=h*d*f-g*_*S;break;case"YXZ":this._x=g*d*f+h*_*S,this._y=h*_*f-g*d*S,this._z=h*d*S-g*_*f,this._w=h*d*f+g*_*S;break;case"ZXY":this._x=g*d*f-h*_*S,this._y=h*_*f+g*d*S,this._z=h*d*S+g*_*f,this._w=h*d*f-g*_*S;break;case"ZYX":this._x=g*d*f-h*_*S,this._y=h*_*f+g*d*S,this._z=h*d*S-g*_*f,this._w=h*d*f+g*_*S;break;case"YZX":this._x=g*d*f+h*_*S,this._y=h*_*f+g*d*S,this._z=h*d*S-g*_*f,this._w=h*d*f-g*_*S;break;case"XZY":this._x=g*d*f-h*_*S,this._y=h*_*f-g*d*S,this._z=h*d*S+g*_*f,this._w=h*d*f+g*_*S;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const n=e/2,r=Math.sin(n);return this._x=t.x*r,this._y=t.y*r,this._z=t.z*r,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,n=e[0],r=e[4],s=e[8],o=e[1],a=e[5],u=e[9],h=e[2],d=e[6],f=e[10],g=n+a+f;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(d-u)*_,this._y=(s-h)*_,this._z=(o-r)*_}else if(n>a&&n>f){const _=2*Math.sqrt(1+n-a-f);this._w=(d-u)/_,this._x=.25*_,this._y=(r+o)/_,this._z=(s+h)/_}else if(a>f){const _=2*Math.sqrt(1+a-n-f);this._w=(s-h)/_,this._x=(r+o)/_,this._y=.25*_,this._z=(u+d)/_}else{const _=2*Math.sqrt(1+f-n-a);this._w=(o-r)/_,this._x=(s+h)/_,this._y=(u+d)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let n=t.dot(e)+1;return n<1e-8?(n=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=n):(this._x=0,this._y=-t.z,this._z=t.y,this._w=n)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=n),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Xt(this.dot(t),-1,1)))}rotateTowards(t,e){const n=this.angleTo(t);if(n===0)return this;const r=Math.min(1,e/n);return this.slerp(t,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const n=t._x,r=t._y,s=t._z,o=t._w,a=e._x,u=e._y,h=e._z,d=e._w;return this._x=n*d+o*a+r*h-s*u,this._y=r*d+o*u+s*a-n*h,this._z=s*d+o*h+n*u-r*a,this._w=o*d-n*a-r*u-s*h,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const n=this._x,r=this._y,s=this._z,o=this._w;let a=o*t._w+n*t._x+r*t._y+s*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=n,this._y=r,this._z=s,this;const u=1-a*a;if(u<=Number.EPSILON){const _=1-e;return this._w=_*o+e*this._w,this._x=_*n+e*this._x,this._y=_*r+e*this._y,this._z=_*s+e*this._z,this.normalize(),this}const h=Math.sqrt(u),d=Math.atan2(h,a),f=Math.sin((1-e)*d)/h,g=Math.sin(e*d)/h;return this._w=o*f+this._w*g,this._x=n*f+this._x*g,this._y=r*f+this._y*g,this._z=s*f+this._z*g,this._onChangeCallback(),this}slerpQuaternions(t,e,n){return this.copy(t).slerp(e,n)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),n=Math.random(),r=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(r*Math.sin(t),r*Math.cos(t),s*Math.sin(e),s*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class U{constructor(t=0,e=0,n=0){U.prototype.isVector3=!0,this.x=t,this.y=e,this.z=n}set(t,e,n){return n===void 0&&(n=this.z),this.x=t,this.y=e,this.z=n,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(Ic.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(Ic.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[3]*n+s[6]*r,this.y=s[1]*e+s[4]*n+s[7]*r,this.z=s[2]*e+s[5]*n+s[8]*r,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=t.elements,o=1/(s[3]*e+s[7]*n+s[11]*r+s[15]);return this.x=(s[0]*e+s[4]*n+s[8]*r+s[12])*o,this.y=(s[1]*e+s[5]*n+s[9]*r+s[13])*o,this.z=(s[2]*e+s[6]*n+s[10]*r+s[14])*o,this}applyQuaternion(t){const e=this.x,n=this.y,r=this.z,s=t.x,o=t.y,a=t.z,u=t.w,h=2*(o*r-a*n),d=2*(a*e-s*r),f=2*(s*n-o*e);return this.x=e+u*h+o*f-a*d,this.y=n+u*d+a*h-s*f,this.z=r+u*f+s*d-o*h,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,n=this.y,r=this.z,s=t.elements;return this.x=s[0]*e+s[4]*n+s[8]*r,this.y=s[1]*e+s[5]*n+s[9]*r,this.z=s[2]*e+s[6]*n+s[10]*r,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const n=t.x,r=t.y,s=t.z,o=e.x,a=e.y,u=e.z;return this.x=r*u-s*a,this.y=s*o-n*u,this.z=n*a-r*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const n=t.dot(this)/e;return this.copy(t).multiplyScalar(n)}projectOnPlane(t){return Do.copy(this).projectOnVector(t),this.sub(Do)}reflect(t){return this.sub(Do.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const n=this.dot(t)/e;return Math.acos(Xt(n,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,n=this.y-t.y,r=this.z-t.z;return e*e+n*n+r*r}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,n){const r=Math.sin(e)*t;return this.x=r*Math.sin(n),this.y=Math.cos(e)*t,this.z=r*Math.cos(n),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,n){return this.x=t*Math.sin(e),this.y=n,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),n=this.setFromMatrixColumn(t,1).length(),r=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=n,this.z=r,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,n=Math.sqrt(1-e*e);return this.x=n*Math.cos(t),this.y=e,this.z=n*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Do=new U,Ic=new Ci;class qt{constructor(t,e,n,r,s,o,a,u,h){qt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,u,h)}set(t,e,n,r,s,o,a,u,h){const d=this.elements;return d[0]=t,d[1]=r,d[2]=a,d[3]=e,d[4]=s,d[5]=u,d[6]=n,d[7]=o,d[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],this}extractBasis(t,e,n){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[3],u=n[6],h=n[1],d=n[4],f=n[7],g=n[2],_=n[5],S=n[8],w=r[0],v=r[3],m=r[6],T=r[1],p=r[4],l=r[7],x=r[2],c=r[5],P=r[8];return s[0]=o*w+a*T+u*x,s[3]=o*v+a*p+u*c,s[6]=o*m+a*l+u*P,s[1]=h*w+d*T+f*x,s[4]=h*v+d*p+f*c,s[7]=h*m+d*l+f*P,s[2]=g*w+_*T+S*x,s[5]=g*v+_*p+S*c,s[8]=g*m+_*l+S*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],h=t[7],d=t[8];return e*o*d-e*a*h-n*s*d+n*a*u+r*s*h-r*o*u}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],h=t[7],d=t[8],f=d*o-a*h,g=a*u-d*s,_=h*s-o*u,S=e*f+n*g+r*_;if(S===0)return this.set(0,0,0,0,0,0,0,0,0);const w=1/S;return t[0]=f*w,t[1]=(r*h-d*n)*w,t[2]=(a*n-r*o)*w,t[3]=g*w,t[4]=(d*e-r*u)*w,t[5]=(r*s-a*e)*w,t[6]=_*w,t[7]=(n*u-h*e)*w,t[8]=(o*e-n*s)*w,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,n,r,s,o,a){const u=Math.cos(s),h=Math.sin(s);return this.set(n*u,n*h,-n*(u*o+h*a)+o+t,-r*h,r*u,-r*(-h*o+u*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(Io.makeScale(t,e)),this}rotate(t){return this.premultiply(Io.makeRotation(-t)),this}translate(t,e){return this.premultiply(Io.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,n,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<9;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<9;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const Io=new qt;function $u(i){for(let t=i.length-1;t>=0;--t)if(i[t]>=65535)return!0;return!1}function fo(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Rf(){const i=fo("canvas");return i.style.display="block",i}const Lc={};function _r(i){i in Lc||(Lc[i]=!0,console.warn(i))}function Pf(i,t,e){return new Promise(function(n,r){function s(){switch(i.clientWaitSync(t,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:r();break;case i.TIMEOUT_EXPIRED:setTimeout(s,e);break;default:n()}}setTimeout(s,e)})}const Uc=new qt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nc=new qt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Cf(){const i={enabled:!0,workingColorSpace:Mr,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===ie&&(r.r=Hn(r.r),r.g=Hn(r.g),r.b=Hn(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===ie&&(r.r=mr(r.r),r.g=mr(r.g),r.b=mr(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===ei?ho:this.spaces[r].transfer},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return _r("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return _r("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(r,s)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],n=[.3127,.329];return i.define({[Mr]:{primaries:t,whitePoint:n,transfer:ho,toXYZ:Uc,fromXYZ:Nc,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Qe},outputColorSpaceConfig:{drawingBufferColorSpace:Qe}},[Qe]:{primaries:t,whitePoint:n,transfer:ie,toXYZ:Uc,fromXYZ:Nc,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Qe}}}),i}const te=Cf();function Hn(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function mr(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let Bi;class Df{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let n;if(t instanceof HTMLCanvasElement)n=t;else{Bi===void 0&&(Bi=fo("canvas")),Bi.width=t.width,Bi.height=t.height;const r=Bi.getContext("2d");t instanceof ImageData?r.putImageData(t,0,0):r.drawImage(t,0,0,t.width,t.height),n=Bi}return n.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=fo("canvas");e.width=t.width,e.height=t.height;const n=e.getContext("2d");n.drawImage(t,0,0,t.width,t.height);const r=n.getImageData(0,0,t.width,t.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=Hn(s[o]/255)*255;return n.putImageData(r,0,0),e}else if(t.data){const e=t.data.slice(0);for(let n=0;n<e.length;n++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[n]=Math.floor(Hn(e[n]/255)*255):e[n]=Hn(e[n]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let If=0;class Yl{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:If++}),this.uuid=es(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){const e=this.data;return e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):e instanceof VideoFrame?t.set(e.displayHeight,e.displayWidth,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const n={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(Lo(r[o].image)):s.push(Lo(r[o]))}else s=Lo(r);n.url=s}return e||(t.images[this.uuid]=n),n}}function Lo(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Df.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Lf=0;const Uo=new U;class Ye extends Li{constructor(t=Ye.DEFAULT_IMAGE,e=Ye.DEFAULT_MAPPING,n=Ti,r=Ti,s=En,o=bi,a=mn,u=An,h=Ye.DEFAULT_ANISOTROPY,d=ei){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Lf++}),this.uuid=es(),this.name="",this.source=new Yl(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=n,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=h,this.format=a,this.internalFormat=null,this.type=u,this.offset=new Ft(0,0),this.repeat=new Ft(1,1),this.center=new Ft(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=d,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Uo).x}get height(){return this.source.getSize(Uo).y}get depth(){return this.source.getSize(Uo).z}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Texture.setValues(): parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Texture.setValues(): property '${e}' does not exist.`);continue}r&&n&&r.isVector2&&n.isVector2||r&&n&&r.isVector3&&n.isVector3||r&&n&&r.isMatrix3&&n.isMatrix3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),e||(t.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Ou)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ya:t.x=t.x-Math.floor(t.x);break;case Ti:t.x=t.x<0?0:1;break;case $a:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ya:t.y=t.y-Math.floor(t.y);break;case Ti:t.y=t.y<0?0:1;break;case $a:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Ye.DEFAULT_IMAGE=null;Ye.DEFAULT_MAPPING=Ou;Ye.DEFAULT_ANISOTROPY=1;class oe{constructor(t=0,e=0,n=0,r=1){oe.prototype.isVector4=!0,this.x=t,this.y=e,this.z=n,this.w=r}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,n,r){return this.x=t,this.y=e,this.z=n,this.w=r,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,n=this.y,r=this.z,s=this.w,o=t.elements;return this.x=o[0]*e+o[4]*n+o[8]*r+o[12]*s,this.y=o[1]*e+o[5]*n+o[9]*r+o[13]*s,this.z=o[2]*e+o[6]*n+o[10]*r+o[14]*s,this.w=o[3]*e+o[7]*n+o[11]*r+o[15]*s,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,n,r,s;const u=t.elements,h=u[0],d=u[4],f=u[8],g=u[1],_=u[5],S=u[9],w=u[2],v=u[6],m=u[10];if(Math.abs(d-g)<.01&&Math.abs(f-w)<.01&&Math.abs(S-v)<.01){if(Math.abs(d+g)<.1&&Math.abs(f+w)<.1&&Math.abs(S+v)<.1&&Math.abs(h+_+m-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const p=(h+1)/2,l=(_+1)/2,x=(m+1)/2,c=(d+g)/4,P=(f+w)/4,b=(S+v)/4;return p>l&&p>x?p<.01?(n=0,r=.707106781,s=.707106781):(n=Math.sqrt(p),r=c/n,s=P/n):l>x?l<.01?(n=.707106781,r=0,s=.707106781):(r=Math.sqrt(l),n=c/r,s=b/r):x<.01?(n=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),n=P/s,r=b/s),this.set(n,r,s,e),this}let T=Math.sqrt((v-S)*(v-S)+(f-w)*(f-w)+(g-d)*(g-d));return Math.abs(T)<.001&&(T=1),this.x=(v-S)/T,this.y=(f-w)/T,this.z=(g-d)/T,this.w=Math.acos((h+_+m-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Xt(this.x,t.x,e.x),this.y=Xt(this.y,t.y,e.y),this.z=Xt(this.z,t.z,e.z),this.w=Xt(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Xt(this.x,t,e),this.y=Xt(this.y,t,e),this.z=Xt(this.z,t,e),this.w=Xt(this.w,t,e),this}clampLength(t,e){const n=this.length();return this.divideScalar(n||1).multiplyScalar(Xt(n,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,n){return this.x=t.x+(e.x-t.x)*n,this.y=t.y+(e.y-t.y)*n,this.z=t.z+(e.z-t.z)*n,this.w=t.w+(e.w-t.w)*n,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Uf extends Li{constructor(t=1,e=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:En,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},n),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=n.depth,this.scissor=new oe(0,0,t,e),this.scissorTest=!1,this.viewport=new oe(0,0,t,e);const r={width:t,height:e,depth:n.depth},s=new Ye(r);this.textures=[];const o=n.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview}_setTextureOptions(t={}){const e={minFilter:En,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),t!==null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,n=1){if(this.width!==t||this.height!==e||this.depth!==n){this.width=t,this.height=e,this.depth=n;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=t,this.textures[r].image.height=e,this.textures[r].image.depth=n,this.textures[r].isArrayTexture=this.textures[r].image.depth>1;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,n=t.textures.length;e<n;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;const r=Object.assign({},t.textures[e].image);this.textures[e].source=new Yl(r)}return this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Di extends Uf{constructor(t=1,e=1,n={}){super(t,e,n),this.isWebGLRenderTarget=!0}}class Zu extends Ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class Nf extends Ye{constructor(t=null,e=1,n=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:n,depth:r},this.magFilter=vn,this.minFilter=vn,this.wrapR=Ti,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Oe{constructor(t=new U(1/0,1/0,1/0),e=new U(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e+=3)this.expandByPoint(hn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,n=t.count;e<n;e++)this.expandByPoint(hn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,n=t.length;e<n;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const n=hn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(n),this.max.copy(t).add(n),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const n=t.geometry;if(n!==void 0){const s=n.getAttribute("position");if(e===!0&&s!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,hn):hn.fromBufferAttribute(s,o),hn.applyMatrix4(t.matrixWorld),this.expandByPoint(hn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),as.copy(t.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),as.copy(n.boundingBox)),as.applyMatrix4(t.matrixWorld),this.union(as)}const r=t.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,hn),hn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,n;return t.normal.x>0?(e=t.normal.x*this.min.x,n=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,n=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,n+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,n+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,n+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,n+=t.normal.z*this.min.z),e<=-t.constant&&n>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Cr),ls.subVectors(this.max,Cr),Oi.subVectors(t.a,Cr),Vi.subVectors(t.b,Cr),zi.subVectors(t.c,Cr),Xn.subVectors(Vi,Oi),qn.subVectors(zi,Vi),hi.subVectors(Oi,zi);let e=[0,-Xn.z,Xn.y,0,-qn.z,qn.y,0,-hi.z,hi.y,Xn.z,0,-Xn.x,qn.z,0,-qn.x,hi.z,0,-hi.x,-Xn.y,Xn.x,0,-qn.y,qn.x,0,-hi.y,hi.x,0];return!No(e,Oi,Vi,zi,ls)||(e=[1,0,0,0,1,0,0,0,1],!No(e,Oi,Vi,zi,ls))?!1:(cs.crossVectors(Xn,qn),e=[cs.x,cs.y,cs.z],No(e,Oi,Vi,zi,ls))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,hn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(hn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Pn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Pn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Pn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Pn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Pn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Pn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Pn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Pn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Pn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}}const Pn=[new U,new U,new U,new U,new U,new U,new U,new U],hn=new U,as=new Oe,Oi=new U,Vi=new U,zi=new U,Xn=new U,qn=new U,hi=new U,Cr=new U,ls=new U,cs=new U,ui=new U;function No(i,t,e,n,r){for(let s=0,o=i.length-3;s<=o;s+=3){ui.fromArray(i,s);const a=r.x*Math.abs(ui.x)+r.y*Math.abs(ui.y)+r.z*Math.abs(ui.z),u=t.dot(ui),h=e.dot(ui),d=n.dot(ui);if(Math.max(-Math.max(u,h,d),Math.min(u,h,d))>a)return!1}return!0}const Ff=new Oe,Dr=new U,Fo=new U;class $l{constructor(t=new U,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const n=this.center;e!==void 0?n.copy(e):Ff.setFromPoints(t).getCenter(n);let r=0;for(let s=0,o=t.length;s<o;s++)r=Math.max(r,n.distanceToSquared(t[s]));return this.radius=Math.sqrt(r),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const n=this.center.distanceToSquared(t);return e.copy(t),n>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Dr.subVectors(t,this.center);const e=Dr.lengthSq();if(e>this.radius*this.radius){const n=Math.sqrt(e),r=(n-this.radius)*.5;this.center.addScaledVector(Dr,r/n),this.radius+=r}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Fo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Dr.copy(t.center).add(Fo)),this.expandByPoint(Dr.copy(t.center).sub(Fo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}}const Cn=new U,Bo=new U,hs=new U,Yn=new U,Oo=new U,us=new U,Vo=new U;class ns{constructor(t=new U,e=new U(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Cn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const n=e.dot(this.direction);return n<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=Cn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Cn.copy(this.origin).addScaledVector(this.direction,e),Cn.distanceToSquared(t))}distanceSqToSegment(t,e,n,r){Bo.copy(t).add(e).multiplyScalar(.5),hs.copy(e).sub(t).normalize(),Yn.copy(this.origin).sub(Bo);const s=t.distanceTo(e)*.5,o=-this.direction.dot(hs),a=Yn.dot(this.direction),u=-Yn.dot(hs),h=Yn.lengthSq(),d=Math.abs(1-o*o);let f,g,_,S;if(d>0)if(f=o*u-a,g=o*a-u,S=s*d,f>=0)if(g>=-S)if(g<=S){const w=1/d;f*=w,g*=w,_=f*(f+o*g+2*a)+g*(o*f+g+2*u)+h}else g=s,f=Math.max(0,-(o*g+a)),_=-f*f+g*(g+2*u)+h;else g=-s,f=Math.max(0,-(o*g+a)),_=-f*f+g*(g+2*u)+h;else g<=-S?(f=Math.max(0,-(-o*s+a)),g=f>0?-s:Math.min(Math.max(-s,-u),s),_=-f*f+g*(g+2*u)+h):g<=S?(f=0,g=Math.min(Math.max(-s,-u),s),_=g*(g+2*u)+h):(f=Math.max(0,-(o*s+a)),g=f>0?s:Math.min(Math.max(-s,-u),s),_=-f*f+g*(g+2*u)+h);else g=o>0?-s:s,f=Math.max(0,-(o*g+a)),_=-f*f+g*(g+2*u)+h;return n&&n.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Bo).addScaledVector(hs,g),_}intersectSphere(t,e){Cn.subVectors(t.center,this.origin);const n=Cn.dot(this.direction),r=Cn.dot(Cn)-n*n,s=t.radius*t.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=n-o,u=n+o;return u<0?null:a<0?this.at(u,e):this.at(a,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(t.normal)+t.constant)/e;return n>=0?n:null}intersectPlane(t,e){const n=this.distanceToPlane(t);return n===null?null:this.at(n,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let n,r,s,o,a,u;const h=1/this.direction.x,d=1/this.direction.y,f=1/this.direction.z,g=this.origin;return h>=0?(n=(t.min.x-g.x)*h,r=(t.max.x-g.x)*h):(n=(t.max.x-g.x)*h,r=(t.min.x-g.x)*h),d>=0?(s=(t.min.y-g.y)*d,o=(t.max.y-g.y)*d):(s=(t.max.y-g.y)*d,o=(t.min.y-g.y)*d),n>o||s>r||((s>n||isNaN(n))&&(n=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(t.min.z-g.z)*f,u=(t.max.z-g.z)*f):(a=(t.max.z-g.z)*f,u=(t.min.z-g.z)*f),n>u||a>r)||((a>n||n!==n)&&(n=a),(u<r||r!==r)&&(r=u),r<0)?null:this.at(n>=0?n:r,e)}intersectsBox(t){return this.intersectBox(t,Cn)!==null}intersectTriangle(t,e,n,r,s){Oo.subVectors(e,t),us.subVectors(n,t),Vo.crossVectors(Oo,us);let o=this.direction.dot(Vo),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;Yn.subVectors(this.origin,t);const u=a*this.direction.dot(us.crossVectors(Yn,us));if(u<0)return null;const h=a*this.direction.dot(Oo.cross(Yn));if(h<0||u+h>o)return null;const d=-a*Yn.dot(Vo);return d<0?null:this.at(d/o,s)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Kt{constructor(t,e,n,r,s,o,a,u,h,d,f,g,_,S,w,v){Kt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,n,r,s,o,a,u,h,d,f,g,_,S,w,v)}set(t,e,n,r,s,o,a,u,h,d,f,g,_,S,w,v){const m=this.elements;return m[0]=t,m[4]=e,m[8]=n,m[12]=r,m[1]=s,m[5]=o,m[9]=a,m[13]=u,m[2]=h,m[6]=d,m[10]=f,m[14]=g,m[3]=_,m[7]=S,m[11]=w,m[15]=v,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Kt().fromArray(this.elements)}copy(t){const e=this.elements,n=t.elements;return e[0]=n[0],e[1]=n[1],e[2]=n[2],e[3]=n[3],e[4]=n[4],e[5]=n[5],e[6]=n[6],e[7]=n[7],e[8]=n[8],e[9]=n[9],e[10]=n[10],e[11]=n[11],e[12]=n[12],e[13]=n[13],e[14]=n[14],e[15]=n[15],this}copyPosition(t){const e=this.elements,n=t.elements;return e[12]=n[12],e[13]=n[13],e[14]=n[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,n){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this}makeBasis(t,e,n){return this.set(t.x,e.x,n.x,0,t.y,e.y,n.y,0,t.z,e.z,n.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,n=t.elements,r=1/Hi.setFromMatrixColumn(t,0).length(),s=1/Hi.setFromMatrixColumn(t,1).length(),o=1/Hi.setFromMatrixColumn(t,2).length();return e[0]=n[0]*r,e[1]=n[1]*r,e[2]=n[2]*r,e[3]=0,e[4]=n[4]*s,e[5]=n[5]*s,e[6]=n[6]*s,e[7]=0,e[8]=n[8]*o,e[9]=n[9]*o,e[10]=n[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,n=t.x,r=t.y,s=t.z,o=Math.cos(n),a=Math.sin(n),u=Math.cos(r),h=Math.sin(r),d=Math.cos(s),f=Math.sin(s);if(t.order==="XYZ"){const g=o*d,_=o*f,S=a*d,w=a*f;e[0]=u*d,e[4]=-u*f,e[8]=h,e[1]=_+S*h,e[5]=g-w*h,e[9]=-a*u,e[2]=w-g*h,e[6]=S+_*h,e[10]=o*u}else if(t.order==="YXZ"){const g=u*d,_=u*f,S=h*d,w=h*f;e[0]=g+w*a,e[4]=S*a-_,e[8]=o*h,e[1]=o*f,e[5]=o*d,e[9]=-a,e[2]=_*a-S,e[6]=w+g*a,e[10]=o*u}else if(t.order==="ZXY"){const g=u*d,_=u*f,S=h*d,w=h*f;e[0]=g-w*a,e[4]=-o*f,e[8]=S+_*a,e[1]=_+S*a,e[5]=o*d,e[9]=w-g*a,e[2]=-o*h,e[6]=a,e[10]=o*u}else if(t.order==="ZYX"){const g=o*d,_=o*f,S=a*d,w=a*f;e[0]=u*d,e[4]=S*h-_,e[8]=g*h+w,e[1]=u*f,e[5]=w*h+g,e[9]=_*h-S,e[2]=-h,e[6]=a*u,e[10]=o*u}else if(t.order==="YZX"){const g=o*u,_=o*h,S=a*u,w=a*h;e[0]=u*d,e[4]=w-g*f,e[8]=S*f+_,e[1]=f,e[5]=o*d,e[9]=-a*d,e[2]=-h*d,e[6]=_*f+S,e[10]=g-w*f}else if(t.order==="XZY"){const g=o*u,_=o*h,S=a*u,w=a*h;e[0]=u*d,e[4]=-f,e[8]=h*d,e[1]=g*f+w,e[5]=o*d,e[9]=_*f-S,e[2]=S*f-_,e[6]=a*d,e[10]=w*f+g}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(Bf,t,Of)}lookAt(t,e,n){const r=this.elements;return Ke.subVectors(t,e),Ke.lengthSq()===0&&(Ke.z=1),Ke.normalize(),$n.crossVectors(n,Ke),$n.lengthSq()===0&&(Math.abs(n.z)===1?Ke.x+=1e-4:Ke.z+=1e-4,Ke.normalize(),$n.crossVectors(n,Ke)),$n.normalize(),ds.crossVectors(Ke,$n),r[0]=$n.x,r[4]=ds.x,r[8]=Ke.x,r[1]=$n.y,r[5]=ds.y,r[9]=Ke.y,r[2]=$n.z,r[6]=ds.z,r[10]=Ke.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const n=t.elements,r=e.elements,s=this.elements,o=n[0],a=n[4],u=n[8],h=n[12],d=n[1],f=n[5],g=n[9],_=n[13],S=n[2],w=n[6],v=n[10],m=n[14],T=n[3],p=n[7],l=n[11],x=n[15],c=r[0],P=r[4],b=r[8],M=r[12],y=r[1],E=r[5],A=r[9],R=r[13],L=r[2],B=r[6],F=r[10],z=r[14],O=r[3],$=r[7],et=r[11],Q=r[15];return s[0]=o*c+a*y+u*L+h*O,s[4]=o*P+a*E+u*B+h*$,s[8]=o*b+a*A+u*F+h*et,s[12]=o*M+a*R+u*z+h*Q,s[1]=d*c+f*y+g*L+_*O,s[5]=d*P+f*E+g*B+_*$,s[9]=d*b+f*A+g*F+_*et,s[13]=d*M+f*R+g*z+_*Q,s[2]=S*c+w*y+v*L+m*O,s[6]=S*P+w*E+v*B+m*$,s[10]=S*b+w*A+v*F+m*et,s[14]=S*M+w*R+v*z+m*Q,s[3]=T*c+p*y+l*L+x*O,s[7]=T*P+p*E+l*B+x*$,s[11]=T*b+p*A+l*F+x*et,s[15]=T*M+p*R+l*z+x*Q,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],n=t[4],r=t[8],s=t[12],o=t[1],a=t[5],u=t[9],h=t[13],d=t[2],f=t[6],g=t[10],_=t[14],S=t[3],w=t[7],v=t[11],m=t[15];return S*(+s*u*f-r*h*f-s*a*g+n*h*g+r*a*_-n*u*_)+w*(+e*u*_-e*h*g+s*o*g-r*o*_+r*h*d-s*u*d)+v*(+e*h*f-e*a*_-s*o*f+n*o*_+s*a*d-n*h*d)+m*(-r*a*d-e*u*f+e*a*g+r*o*f-n*o*g+n*u*d)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,n){const r=this.elements;return t.isVector3?(r[12]=t.x,r[13]=t.y,r[14]=t.z):(r[12]=t,r[13]=e,r[14]=n),this}invert(){const t=this.elements,e=t[0],n=t[1],r=t[2],s=t[3],o=t[4],a=t[5],u=t[6],h=t[7],d=t[8],f=t[9],g=t[10],_=t[11],S=t[12],w=t[13],v=t[14],m=t[15],T=f*v*h-w*g*h+w*u*_-a*v*_-f*u*m+a*g*m,p=S*g*h-d*v*h-S*u*_+o*v*_+d*u*m-o*g*m,l=d*w*h-S*f*h+S*a*_-o*w*_-d*a*m+o*f*m,x=S*f*u-d*w*u-S*a*g+o*w*g+d*a*v-o*f*v,c=e*T+n*p+r*l+s*x;if(c===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/c;return t[0]=T*P,t[1]=(w*g*s-f*v*s-w*r*_+n*v*_+f*r*m-n*g*m)*P,t[2]=(a*v*s-w*u*s+w*r*h-n*v*h-a*r*m+n*u*m)*P,t[3]=(f*u*s-a*g*s-f*r*h+n*g*h+a*r*_-n*u*_)*P,t[4]=p*P,t[5]=(d*v*s-S*g*s+S*r*_-e*v*_-d*r*m+e*g*m)*P,t[6]=(S*u*s-o*v*s-S*r*h+e*v*h+o*r*m-e*u*m)*P,t[7]=(o*g*s-d*u*s+d*r*h-e*g*h-o*r*_+e*u*_)*P,t[8]=l*P,t[9]=(S*f*s-d*w*s-S*n*_+e*w*_+d*n*m-e*f*m)*P,t[10]=(o*w*s-S*a*s+S*n*h-e*w*h-o*n*m+e*a*m)*P,t[11]=(d*a*s-o*f*s-d*n*h+e*f*h+o*n*_-e*a*_)*P,t[12]=x*P,t[13]=(d*w*r-S*f*r+S*n*g-e*w*g-d*n*v+e*f*v)*P,t[14]=(S*a*r-o*w*r-S*n*u+e*w*u+o*n*v-e*a*v)*P,t[15]=(o*f*r-d*a*r+d*n*u-e*f*u-o*n*g+e*a*g)*P,this}scale(t){const e=this.elements,n=t.x,r=t.y,s=t.z;return e[0]*=n,e[4]*=r,e[8]*=s,e[1]*=n,e[5]*=r,e[9]*=s,e[2]*=n,e[6]*=r,e[10]*=s,e[3]*=n,e[7]*=r,e[11]*=s,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],n=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],r=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,n,r))}makeTranslation(t,e,n){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,n,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),n=Math.sin(t);return this.set(1,0,0,0,0,e,-n,0,0,n,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,0,n,0,0,1,0,0,-n,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),n=Math.sin(t);return this.set(e,-n,0,0,n,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const n=Math.cos(e),r=Math.sin(e),s=1-n,o=t.x,a=t.y,u=t.z,h=s*o,d=s*a;return this.set(h*o+n,h*a-r*u,h*u+r*a,0,h*a+r*u,d*a+n,d*u-r*o,0,h*u-r*a,d*u+r*o,s*u*u+n,0,0,0,0,1),this}makeScale(t,e,n){return this.set(t,0,0,0,0,e,0,0,0,0,n,0,0,0,0,1),this}makeShear(t,e,n,r,s,o){return this.set(1,n,s,0,t,1,o,0,e,r,1,0,0,0,0,1),this}compose(t,e,n){const r=this.elements,s=e._x,o=e._y,a=e._z,u=e._w,h=s+s,d=o+o,f=a+a,g=s*h,_=s*d,S=s*f,w=o*d,v=o*f,m=a*f,T=u*h,p=u*d,l=u*f,x=n.x,c=n.y,P=n.z;return r[0]=(1-(w+m))*x,r[1]=(_+l)*x,r[2]=(S-p)*x,r[3]=0,r[4]=(_-l)*c,r[5]=(1-(g+m))*c,r[6]=(v+T)*c,r[7]=0,r[8]=(S+p)*P,r[9]=(v-T)*P,r[10]=(1-(g+w))*P,r[11]=0,r[12]=t.x,r[13]=t.y,r[14]=t.z,r[15]=1,this}decompose(t,e,n){const r=this.elements;let s=Hi.set(r[0],r[1],r[2]).length();const o=Hi.set(r[4],r[5],r[6]).length(),a=Hi.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),t.x=r[12],t.y=r[13],t.z=r[14],un.copy(this);const h=1/s,d=1/o,f=1/a;return un.elements[0]*=h,un.elements[1]*=h,un.elements[2]*=h,un.elements[4]*=d,un.elements[5]*=d,un.elements[6]*=d,un.elements[8]*=f,un.elements[9]*=f,un.elements[10]*=f,e.setFromRotationMatrix(un),n.x=s,n.y=o,n.z=a,this}makePerspective(t,e,n,r,s,o,a=wn,u=!1){const h=this.elements,d=2*s/(e-t),f=2*s/(n-r),g=(e+t)/(e-t),_=(n+r)/(n-r);let S,w;if(u)S=s/(o-s),w=o*s/(o-s);else if(a===wn)S=-(o+s)/(o-s),w=-2*o*s/(o-s);else if(a===uo)S=-o/(o-s),w=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=g,h[12]=0,h[1]=0,h[5]=f,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(t,e,n,r,s,o,a=wn,u=!1){const h=this.elements,d=2/(e-t),f=2/(n-r),g=-(e+t)/(e-t),_=-(n+r)/(n-r);let S,w;if(u)S=1/(o-s),w=o/(o-s);else if(a===wn)S=-2/(o-s),w=-(o+s)/(o-s);else if(a===uo)S=-1/(o-s),w=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return h[0]=d,h[4]=0,h[8]=0,h[12]=g,h[1]=0,h[5]=f,h[9]=0,h[13]=_,h[2]=0,h[6]=0,h[10]=S,h[14]=w,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(t){const e=this.elements,n=t.elements;for(let r=0;r<16;r++)if(e[r]!==n[r])return!1;return!0}fromArray(t,e=0){for(let n=0;n<16;n++)this.elements[n]=t[n+e];return this}toArray(t=[],e=0){const n=this.elements;return t[e]=n[0],t[e+1]=n[1],t[e+2]=n[2],t[e+3]=n[3],t[e+4]=n[4],t[e+5]=n[5],t[e+6]=n[6],t[e+7]=n[7],t[e+8]=n[8],t[e+9]=n[9],t[e+10]=n[10],t[e+11]=n[11],t[e+12]=n[12],t[e+13]=n[13],t[e+14]=n[14],t[e+15]=n[15],t}}const Hi=new U,un=new Kt,Bf=new U(0,0,0),Of=new U(1,1,1),$n=new U,ds=new U,Ke=new U,Fc=new Kt,Bc=new Ci;class xn{constructor(t=0,e=0,n=0,r=xn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=n,this._order=r}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,n,r=this._order){return this._x=t,this._y=e,this._z=n,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,n=!0){const r=t.elements,s=r[0],o=r[4],a=r[8],u=r[1],h=r[5],d=r[9],f=r[2],g=r[6],_=r[10];switch(e){case"XYZ":this._y=Math.asin(Xt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-d,_),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(g,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Xt(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(a,_),this._z=Math.atan2(u,h)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Xt(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-f,_),this._z=Math.atan2(-o,h)):(this._y=0,this._z=Math.atan2(u,s));break;case"ZYX":this._y=Math.asin(-Xt(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(u,s)):(this._x=0,this._z=Math.atan2(-o,h));break;case"YZX":this._z=Math.asin(Xt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-d,h),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,_));break;case"XZY":this._z=Math.asin(-Xt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(g,h),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-d,_),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,n===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,n){return Fc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Fc,e,n)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return Bc.setFromEuler(this),this.setFromQuaternion(Bc,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}xn.DEFAULT_ORDER="XYZ";class ju{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let Vf=0;const Oc=new U,ki=new Ci,Dn=new Kt,fs=new U,Ir=new U,zf=new U,Hf=new Ci,Vc=new U(1,0,0),zc=new U(0,1,0),Hc=new U(0,0,1),kc={type:"added"},kf={type:"removed"},Gi={type:"childadded",child:null},zo={type:"childremoved",child:null};class Re extends Li{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vf++}),this.uuid=es(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Re.DEFAULT_UP.clone();const t=new U,e=new xn,n=new Ci,r=new U(1,1,1);function s(){n.setFromEuler(e,!1)}function o(){e.setFromQuaternion(n,void 0,!1)}e._onChange(s),n._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Kt},normalMatrix:{value:new qt}}),this.matrix=new Kt,this.matrixWorld=new Kt,this.matrixAutoUpdate=Re.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ju,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.multiply(ki),this}rotateOnWorldAxis(t,e){return ki.setFromAxisAngle(t,e),this.quaternion.premultiply(ki),this}rotateX(t){return this.rotateOnAxis(Vc,t)}rotateY(t){return this.rotateOnAxis(zc,t)}rotateZ(t){return this.rotateOnAxis(Hc,t)}translateOnAxis(t,e){return Oc.copy(t).applyQuaternion(this.quaternion),this.position.add(Oc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Vc,t)}translateY(t){return this.translateOnAxis(zc,t)}translateZ(t){return this.translateOnAxis(Hc,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Dn.copy(this.matrixWorld).invert())}lookAt(t,e,n){t.isVector3?fs.copy(t):fs.set(t,e,n);const r=this.parent;this.updateWorldMatrix(!0,!1),Ir.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Dn.lookAt(Ir,fs,this.up):Dn.lookAt(fs,Ir,this.up),this.quaternion.setFromRotationMatrix(Dn),r&&(Dn.extractRotation(r.matrixWorld),ki.setFromRotationMatrix(Dn),this.quaternion.premultiply(ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(kc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(kf),zo.child=t,this.dispatchEvent(zo),zo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Dn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Dn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Dn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(kc),Gi.child=t,this.dispatchEvent(Gi),Gi.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let n=0,r=this.children.length;n<r;n++){const o=this.children[n].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,n=[]){this[t]===e&&n.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(t,e,n);return n}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,t,zf),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ir,Hf,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let n=0,r=e.length;n<r;n++)e[n].updateMatrixWorld(t)}updateWorldMatrix(t,e){const n=this.parent;if(t===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",n={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(t),r.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,u){return a[u.uuid]===void 0&&(a[u.uuid]=u.toJSON(t)),u.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const u=a.shapes;if(Array.isArray(u))for(let h=0,d=u.length;h<d;h++){const f=u[h];s(t.shapes,f)}else s(t.shapes,u)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(t.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let u=0,h=this.material.length;u<h;u++)a.push(s(t.materials,this.material[u]));r.material=a}else r.material=s(t.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const u=this.animations[a];r.animations.push(s(t.animations,u))}}if(e){const a=o(t.geometries),u=o(t.materials),h=o(t.textures),d=o(t.images),f=o(t.shapes),g=o(t.skeletons),_=o(t.animations),S=o(t.nodes);a.length>0&&(n.geometries=a),u.length>0&&(n.materials=u),h.length>0&&(n.textures=h),d.length>0&&(n.images=d),f.length>0&&(n.shapes=f),g.length>0&&(n.skeletons=g),_.length>0&&(n.animations=_),S.length>0&&(n.nodes=S)}return n.object=r,n;function o(a){const u=[];for(const h in a){const d=a[h];delete d.metadata,u.push(d)}return u}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let n=0;n<t.children.length;n++){const r=t.children[n];this.add(r.clone())}return this}}Re.DEFAULT_UP=new U(0,1,0);Re.DEFAULT_MATRIX_AUTO_UPDATE=!0;Re.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const dn=new U,In=new U,Ho=new U,Ln=new U,Wi=new U,Xi=new U,Gc=new U,ko=new U,Go=new U,Wo=new U,Xo=new oe,qo=new oe,Yo=new oe;class he{constructor(t=new U,e=new U,n=new U){this.a=t,this.b=e,this.c=n}static getNormal(t,e,n,r){r.subVectors(n,e),dn.subVectors(t,e),r.cross(dn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(t,e,n,r,s){dn.subVectors(r,e),In.subVectors(n,e),Ho.subVectors(t,e);const o=dn.dot(dn),a=dn.dot(In),u=dn.dot(Ho),h=In.dot(In),d=In.dot(Ho),f=o*h-a*a;if(f===0)return s.set(0,0,0),null;const g=1/f,_=(h*u-a*d)*g,S=(o*d-a*u)*g;return s.set(1-_-S,S,_)}static containsPoint(t,e,n,r){return this.getBarycoord(t,e,n,r,Ln)===null?!1:Ln.x>=0&&Ln.y>=0&&Ln.x+Ln.y<=1}static getInterpolation(t,e,n,r,s,o,a,u){return this.getBarycoord(t,e,n,r,Ln)===null?(u.x=0,u.y=0,"z"in u&&(u.z=0),"w"in u&&(u.w=0),null):(u.setScalar(0),u.addScaledVector(s,Ln.x),u.addScaledVector(o,Ln.y),u.addScaledVector(a,Ln.z),u)}static getInterpolatedAttribute(t,e,n,r,s,o){return Xo.setScalar(0),qo.setScalar(0),Yo.setScalar(0),Xo.fromBufferAttribute(t,e),qo.fromBufferAttribute(t,n),Yo.fromBufferAttribute(t,r),o.setScalar(0),o.addScaledVector(Xo,s.x),o.addScaledVector(qo,s.y),o.addScaledVector(Yo,s.z),o}static isFrontFacing(t,e,n,r){return dn.subVectors(n,e),In.subVectors(t,e),dn.cross(In).dot(r)<0}set(t,e,n){return this.a.copy(t),this.b.copy(e),this.c.copy(n),this}setFromPointsAndIndices(t,e,n,r){return this.a.copy(t[e]),this.b.copy(t[n]),this.c.copy(t[r]),this}setFromAttributeAndIndices(t,e,n,r){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,n),this.c.fromBufferAttribute(t,r),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return dn.subVectors(this.c,this.b),In.subVectors(this.a,this.b),dn.cross(In).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return he.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return he.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,n,r,s){return he.getInterpolation(t,this.a,this.b,this.c,e,n,r,s)}containsPoint(t){return he.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return he.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const n=this.a,r=this.b,s=this.c;let o,a;Wi.subVectors(r,n),Xi.subVectors(s,n),ko.subVectors(t,n);const u=Wi.dot(ko),h=Xi.dot(ko);if(u<=0&&h<=0)return e.copy(n);Go.subVectors(t,r);const d=Wi.dot(Go),f=Xi.dot(Go);if(d>=0&&f<=d)return e.copy(r);const g=u*f-d*h;if(g<=0&&u>=0&&d<=0)return o=u/(u-d),e.copy(n).addScaledVector(Wi,o);Wo.subVectors(t,s);const _=Wi.dot(Wo),S=Xi.dot(Wo);if(S>=0&&_<=S)return e.copy(s);const w=_*h-u*S;if(w<=0&&h>=0&&S<=0)return a=h/(h-S),e.copy(n).addScaledVector(Xi,a);const v=d*S-_*f;if(v<=0&&f-d>=0&&_-S>=0)return Gc.subVectors(s,r),a=(f-d)/(f-d+(_-S)),e.copy(r).addScaledVector(Gc,a);const m=1/(v+w+g);return o=w*m,a=g*m,e.copy(n).addScaledVector(Wi,o).addScaledVector(Xi,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const Ku={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Zn={h:0,s:0,l:0},ps={h:0,s:0,l:0};function $o(i,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?i+(t-i)*6*e:e<1/2?t:e<2/3?i+(t-i)*6*(2/3-e):i}class Zt{constructor(t,e,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,n)}set(t,e,n){if(e===void 0&&n===void 0){const r=t;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(t,e,n);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,te.colorSpaceToWorking(this,e),this}setRGB(t,e,n,r=te.workingColorSpace){return this.r=t,this.g=e,this.b=n,te.colorSpaceToWorking(this,r),this}setHSL(t,e,n,r=te.workingColorSpace){if(t=bf(t,1),e=Xt(e,0,1),n=Xt(n,0,1),e===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+e):n+e-n*e,o=2*n-s;this.r=$o(o,s,t+1/3),this.g=$o(o,s,t),this.b=$o(o,s,t-1/3)}return te.colorSpaceToWorking(this,r),this}setStyle(t,e=Qe){function n(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(t)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,e);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,e);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(t)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(s,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Qe){const n=Ku[t.toLowerCase()];return n!==void 0?this.setHex(n,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Hn(t.r),this.g=Hn(t.g),this.b=Hn(t.b),this}copyLinearToSRGB(t){return this.r=mr(t.r),this.g=mr(t.g),this.b=mr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Qe){return te.workingToColorSpace(De.copy(this),t),Math.round(Xt(De.r*255,0,255))*65536+Math.round(Xt(De.g*255,0,255))*256+Math.round(Xt(De.b*255,0,255))}getHexString(t=Qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=te.workingColorSpace){te.workingToColorSpace(De.copy(this),e);const n=De.r,r=De.g,s=De.b,o=Math.max(n,r,s),a=Math.min(n,r,s);let u,h;const d=(a+o)/2;if(a===o)u=0,h=0;else{const f=o-a;switch(h=d<=.5?f/(o+a):f/(2-o-a),o){case n:u=(r-s)/f+(r<s?6:0);break;case r:u=(s-n)/f+2;break;case s:u=(n-r)/f+4;break}u/=6}return t.h=u,t.s=h,t.l=d,t}getRGB(t,e=te.workingColorSpace){return te.workingToColorSpace(De.copy(this),e),t.r=De.r,t.g=De.g,t.b=De.b,t}getStyle(t=Qe){te.workingToColorSpace(De.copy(this),t);const e=De.r,n=De.g,r=De.b;return t!==Qe?`color(${t} ${e.toFixed(3)} ${n.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(n*255)},${Math.round(r*255)})`}offsetHSL(t,e,n){return this.getHSL(Zn),this.setHSL(Zn.h+t,Zn.s+e,Zn.l+n)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,n){return this.r=t.r+(e.r-t.r)*n,this.g=t.g+(e.g-t.g)*n,this.b=t.b+(e.b-t.b)*n,this}lerpHSL(t,e){this.getHSL(Zn),t.getHSL(ps);const n=Co(Zn.h,ps.h,e),r=Co(Zn.s,ps.s,e),s=Co(Zn.l,ps.l,e);return this.setHSL(n,r,s),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,n=this.g,r=this.b,s=t.elements;return this.r=s[0]*e+s[3]*n+s[6]*r,this.g=s[1]*e+s[4]*n+s[7]*r,this.b=s[2]*e+s[5]*n+s[8]*r,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const De=new Zt;Zt.NAMES=Ku;let Gf=0;class Tr extends Li{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Gf++}),this.uuid=es(),this.name="",this.type="Material",this.blending=gr,this.side=bn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Fa,this.blendDst=Ba,this.blendEquation=Ei,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Zt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Pc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Fi,this.stencilZFail=Fi,this.stencilZPass=Fi,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const n=t[e];if(n===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const r=this[e];if(r===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(n):r&&r.isVector3&&n&&n.isVector3?r.copy(n):this[e]=n}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,this.name!==""&&(n.name=this.name),this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(t).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(t).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(t).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(t).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(t).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.shadowSide!==null&&(n.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),this.blending!==gr&&(n.blending=this.blending),this.side!==bn&&(n.side=this.side),this.vertexColors===!0&&(n.vertexColors=!0),this.opacity<1&&(n.opacity=this.opacity),this.transparent===!0&&(n.transparent=!0),this.blendSrc!==Fa&&(n.blendSrc=this.blendSrc),this.blendDst!==Ba&&(n.blendDst=this.blendDst),this.blendEquation!==Ei&&(n.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(n.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(n.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(n.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(n.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(n.blendAlpha=this.blendAlpha),this.depthFunc!==vr&&(n.depthFunc=this.depthFunc),this.depthTest===!1&&(n.depthTest=this.depthTest),this.depthWrite===!1&&(n.depthWrite=this.depthWrite),this.colorWrite===!1&&(n.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(n.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Pc&&(n.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(n.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(n.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Fi&&(n.stencilFail=this.stencilFail),this.stencilZFail!==Fi&&(n.stencilZFail=this.stencilZFail),this.stencilZPass!==Fi&&(n.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(n.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(n.rotation=this.rotation),this.polygonOffset===!0&&(n.polygonOffset=!0),this.polygonOffsetFactor!==0&&(n.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(n.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(n.linewidth=this.linewidth),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.dithering===!0&&(n.dithering=!0),this.alphaTest>0&&(n.alphaTest=this.alphaTest),this.alphaHash===!0&&(n.alphaHash=!0),this.alphaToCoverage===!0&&(n.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(n.premultipliedAlpha=!0),this.forceSinglePass===!0&&(n.forceSinglePass=!0),this.wireframe===!0&&(n.wireframe=!0),this.wireframeLinewidth>1&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(n.flatShading=!0),this.visible===!1&&(n.visible=!1),this.toneMapped===!1&&(n.toneMapped=!1),this.fog===!1&&(n.fog=!1),Object.keys(this.userData).length>0&&(n.userData=this.userData);function r(s){const o=[];for(const a in s){const u=s[a];delete u.metadata,o.push(u)}return o}if(e){const s=r(t.textures),o=r(t.images);s.length>0&&(n.textures=s),o.length>0&&(n.images=o)}return n}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let n=null;if(e!==null){const r=e.length;n=new Array(r);for(let s=0;s!==r;++s)n[s]=e[s].clone()}return this.clippingPlanes=n,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}}class Ju extends Tr{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Zt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new U,gs=new Ft;let Wf=0;class Pe{constructor(t,e,n=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Wf++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=n,this.usage=Cc,this.updateRanges=[],this.gpuType=zn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,n){t*=this.itemSize,n*=e.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[t+r]=e.array[n+r];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,n=this.count;e<n;e++)gs.fromBufferAttribute(this,e),gs.applyMatrix3(t),this.setXY(e,gs.x,gs.y);else if(this.itemSize===3)for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,n=this.count;e<n;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let n=this.array[t*this.itemSize+e];return this.normalized&&(n=Pr(n,this.array)),n}setComponent(t,e,n){return this.normalized&&(n=He(n,this.array)),this.array[t*this.itemSize+e]=n,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Pr(e,this.array)),e}setX(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Pr(e,this.array)),e}setY(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Pr(e,this.array)),e}setZ(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Pr(e,this.array)),e}setW(t,e){return this.normalized&&(e=He(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,n){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array)),this.array[t+0]=e,this.array[t+1]=n,this}setXYZ(t,e,n,r){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this}setXYZW(t,e,n,r,s){return t*=this.itemSize,this.normalized&&(e=He(e,this.array),n=He(n,this.array),r=He(r,this.array),s=He(s,this.array)),this.array[t+0]=e,this.array[t+1]=n,this.array[t+2]=r,this.array[t+3]=s,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Cc&&(t.usage=this.usage),t}}class Qu extends Pe{constructor(t,e,n){super(new Uint16Array(t),e,n)}}class td extends Pe{constructor(t,e,n){super(new Uint32Array(t),e,n)}}class kn extends Pe{constructor(t,e,n){super(new Float32Array(t),e,n)}}let Xf=0;const sn=new Kt,Zo=new Re,qi=new U,Je=new Oe,Lr=new Oe,we=new U;class Gn extends Li{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Xf++}),this.uuid=es(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($u(t)?td:Qu)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,n=0){this.groups.push({start:t,count:e,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qt().getNormalMatrix(t);n.applyNormalMatrix(s),n.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(t),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return sn.makeRotationFromQuaternion(t),this.applyMatrix4(sn),this}rotateX(t){return sn.makeRotationX(t),this.applyMatrix4(sn),this}rotateY(t){return sn.makeRotationY(t),this.applyMatrix4(sn),this}rotateZ(t){return sn.makeRotationZ(t),this.applyMatrix4(sn),this}translate(t,e,n){return sn.makeTranslation(t,e,n),this.applyMatrix4(sn),this}scale(t,e,n){return sn.makeScale(t,e,n),this.applyMatrix4(sn),this}lookAt(t){return Zo.lookAt(t),Zo.updateMatrix(),this.applyMatrix4(Zo.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(qi).negate(),this.translate(qi.x,qi.y,qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const n=[];for(let r=0,s=t.length;r<s;r++){const o=t[r];n.push(o.x,o.y,o.z||0)}this.setAttribute("position",new kn(n,3))}else{const n=Math.min(t.length,e.count);for(let r=0;r<n;r++){const s=t[r];e.setXYZ(r,s.x,s.y,s.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Oe);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new U(-1/0,-1/0,-1/0),new U(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let n=0,r=e.length;n<r;n++){const s=e[n];Je.setFromBufferAttribute(s),this.morphTargetsRelative?(we.addVectors(this.boundingBox.min,Je.min),this.boundingBox.expandByPoint(we),we.addVectors(this.boundingBox.max,Je.max),this.boundingBox.expandByPoint(we)):(this.boundingBox.expandByPoint(Je.min),this.boundingBox.expandByPoint(Je.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $l);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new U,1/0);return}if(t){const n=this.boundingSphere.center;if(Je.setFromBufferAttribute(t),e)for(let s=0,o=e.length;s<o;s++){const a=e[s];Lr.setFromBufferAttribute(a),this.morphTargetsRelative?(we.addVectors(Je.min,Lr.min),Je.expandByPoint(we),we.addVectors(Je.max,Lr.max),Je.expandByPoint(we)):(Je.expandByPoint(Lr.min),Je.expandByPoint(Lr.max))}Je.getCenter(n);let r=0;for(let s=0,o=t.count;s<o;s++)we.fromBufferAttribute(t,s),r=Math.max(r,n.distanceToSquared(we));if(e)for(let s=0,o=e.length;s<o;s++){const a=e[s],u=this.morphTargetsRelative;for(let h=0,d=a.count;h<d;h++)we.fromBufferAttribute(a,h),u&&(qi.fromBufferAttribute(t,h),we.add(qi)),r=Math.max(r,n.distanceToSquared(we))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=e.position,r=e.normal,s=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Pe(new Float32Array(4*n.count),4));const o=this.getAttribute("tangent"),a=[],u=[];for(let b=0;b<n.count;b++)a[b]=new U,u[b]=new U;const h=new U,d=new U,f=new U,g=new Ft,_=new Ft,S=new Ft,w=new U,v=new U;function m(b,M,y){h.fromBufferAttribute(n,b),d.fromBufferAttribute(n,M),f.fromBufferAttribute(n,y),g.fromBufferAttribute(s,b),_.fromBufferAttribute(s,M),S.fromBufferAttribute(s,y),d.sub(h),f.sub(h),_.sub(g),S.sub(g);const E=1/(_.x*S.y-S.x*_.y);isFinite(E)&&(w.copy(d).multiplyScalar(S.y).addScaledVector(f,-_.y).multiplyScalar(E),v.copy(f).multiplyScalar(_.x).addScaledVector(d,-S.x).multiplyScalar(E),a[b].add(w),a[M].add(w),a[y].add(w),u[b].add(v),u[M].add(v),u[y].add(v))}let T=this.groups;T.length===0&&(T=[{start:0,count:t.count}]);for(let b=0,M=T.length;b<M;++b){const y=T[b],E=y.start,A=y.count;for(let R=E,L=E+A;R<L;R+=3)m(t.getX(R+0),t.getX(R+1),t.getX(R+2))}const p=new U,l=new U,x=new U,c=new U;function P(b){x.fromBufferAttribute(r,b),c.copy(x);const M=a[b];p.copy(M),p.sub(x.multiplyScalar(x.dot(M))).normalize(),l.crossVectors(c,M);const E=l.dot(u[b])<0?-1:1;o.setXYZW(b,p.x,p.y,p.z,E)}for(let b=0,M=T.length;b<M;++b){const y=T[b],E=y.start,A=y.count;for(let R=E,L=E+A;R<L;R+=3)P(t.getX(R+0)),P(t.getX(R+1)),P(t.getX(R+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let n=this.getAttribute("normal");if(n===void 0)n=new Pe(new Float32Array(e.count*3),3),this.setAttribute("normal",n);else for(let g=0,_=n.count;g<_;g++)n.setXYZ(g,0,0,0);const r=new U,s=new U,o=new U,a=new U,u=new U,h=new U,d=new U,f=new U;if(t)for(let g=0,_=t.count;g<_;g+=3){const S=t.getX(g+0),w=t.getX(g+1),v=t.getX(g+2);r.fromBufferAttribute(e,S),s.fromBufferAttribute(e,w),o.fromBufferAttribute(e,v),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),a.fromBufferAttribute(n,S),u.fromBufferAttribute(n,w),h.fromBufferAttribute(n,v),a.add(d),u.add(d),h.add(d),n.setXYZ(S,a.x,a.y,a.z),n.setXYZ(w,u.x,u.y,u.z),n.setXYZ(v,h.x,h.y,h.z)}else for(let g=0,_=e.count;g<_;g+=3)r.fromBufferAttribute(e,g+0),s.fromBufferAttribute(e,g+1),o.fromBufferAttribute(e,g+2),d.subVectors(o,s),f.subVectors(r,s),d.cross(f),n.setXYZ(g+0,d.x,d.y,d.z),n.setXYZ(g+1,d.x,d.y,d.z),n.setXYZ(g+2,d.x,d.y,d.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,n=t.count;e<n;e++)we.fromBufferAttribute(t,e),we.normalize(),t.setXYZ(e,we.x,we.y,we.z)}toNonIndexed(){function t(a,u){const h=a.array,d=a.itemSize,f=a.normalized,g=new h.constructor(u.length*d);let _=0,S=0;for(let w=0,v=u.length;w<v;w++){a.isInterleavedBufferAttribute?_=u[w]*a.data.stride+a.offset:_=u[w]*d;for(let m=0;m<d;m++)g[S++]=h[_++]}return new Pe(g,d,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Gn,n=this.index.array,r=this.attributes;for(const a in r){const u=r[a],h=t(u,n);e.setAttribute(a,h)}const s=this.morphAttributes;for(const a in s){const u=[],h=s[a];for(let d=0,f=h.length;d<f;d++){const g=h[d],_=t(g,n);u.push(_)}e.morphAttributes[a]=u}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,u=o.length;a<u;a++){const h=o[a];e.addGroup(h.start,h.count,h.materialIndex)}return e}toJSON(){const t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const u=this.parameters;for(const h in u)u[h]!==void 0&&(t[h]=u[h]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const n=this.attributes;for(const u in n){const h=n[u];t.data.attributes[u]=h.toJSON(t.data)}const r={};let s=!1;for(const u in this.morphAttributes){const h=this.morphAttributes[u],d=[];for(let f=0,g=h.length;f<g;f++){const _=h[f];d.push(_.toJSON(t.data))}d.length>0&&(r[u]=d,s=!0)}s&&(t.data.morphAttributes=r,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere=a.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const n=t.index;n!==null&&this.setIndex(n.clone());const r=t.attributes;for(const h in r){const d=r[h];this.setAttribute(h,d.clone(e))}const s=t.morphAttributes;for(const h in s){const d=[],f=s[h];for(let g=0,_=f.length;g<_;g++)d.push(f[g].clone(e));this.morphAttributes[h]=d}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let h=0,d=o.length;h<d;h++){const f=o[h];this.addGroup(f.start,f.count,f.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const u=t.boundingSphere;return u!==null&&(this.boundingSphere=u.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Wc=new Kt,di=new ns,_s=new $l,Xc=new U,ms=new U,vs=new U,xs=new U,jo=new U,ys=new U,qc=new U,Ms=new U;class Xe extends Re{constructor(t=new Gn,e=new Ju){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,n=Object.keys(e);if(n.length>0){const r=e[n[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(t,e){const n=this.geometry,r=n.attributes.position,s=n.morphAttributes.position,o=n.morphTargetsRelative;e.fromBufferAttribute(r,t);const a=this.morphTargetInfluences;if(s&&a){ys.set(0,0,0);for(let u=0,h=s.length;u<h;u++){const d=a[u],f=s[u];d!==0&&(jo.fromBufferAttribute(f,t),o?ys.addScaledVector(jo,d):ys.addScaledVector(jo.sub(e),d))}e.add(ys)}return e}raycast(t,e){const n=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),_s.copy(n.boundingSphere),_s.applyMatrix4(s),di.copy(t.ray).recast(t.near),!(_s.containsPoint(di.origin)===!1&&(di.intersectSphere(_s,Xc)===null||di.origin.distanceToSquared(Xc)>(t.far-t.near)**2))&&(Wc.copy(s).invert(),di.copy(t.ray).applyMatrix4(Wc),!(n.boundingBox!==null&&di.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(t,e,di)))}_computeIntersections(t,e,n){let r;const s=this.geometry,o=this.material,a=s.index,u=s.attributes.position,h=s.attributes.uv,d=s.attributes.uv1,f=s.attributes.normal,g=s.groups,_=s.drawRange;if(a!==null)if(Array.isArray(o))for(let S=0,w=g.length;S<w;S++){const v=g[S],m=o[v.materialIndex],T=Math.max(v.start,_.start),p=Math.min(a.count,Math.min(v.start+v.count,_.start+_.count));for(let l=T,x=p;l<x;l+=3){const c=a.getX(l),P=a.getX(l+1),b=a.getX(l+2);r=Ss(this,m,t,n,h,d,f,c,P,b),r&&(r.faceIndex=Math.floor(l/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const S=Math.max(0,_.start),w=Math.min(a.count,_.start+_.count);for(let v=S,m=w;v<m;v+=3){const T=a.getX(v),p=a.getX(v+1),l=a.getX(v+2);r=Ss(this,o,t,n,h,d,f,T,p,l),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}else if(u!==void 0)if(Array.isArray(o))for(let S=0,w=g.length;S<w;S++){const v=g[S],m=o[v.materialIndex],T=Math.max(v.start,_.start),p=Math.min(u.count,Math.min(v.start+v.count,_.start+_.count));for(let l=T,x=p;l<x;l+=3){const c=l,P=l+1,b=l+2;r=Ss(this,m,t,n,h,d,f,c,P,b),r&&(r.faceIndex=Math.floor(l/3),r.face.materialIndex=v.materialIndex,e.push(r))}}else{const S=Math.max(0,_.start),w=Math.min(u.count,_.start+_.count);for(let v=S,m=w;v<m;v+=3){const T=v,p=v+1,l=v+2;r=Ss(this,o,t,n,h,d,f,T,p,l),r&&(r.faceIndex=Math.floor(v/3),e.push(r))}}}}function qf(i,t,e,n,r,s,o,a){let u;if(t.side===Be?u=n.intersectTriangle(o,s,r,!0,a):u=n.intersectTriangle(r,s,o,t.side===bn,a),u===null)return null;Ms.copy(a),Ms.applyMatrix4(i.matrixWorld);const h=e.ray.origin.distanceTo(Ms);return h<e.near||h>e.far?null:{distance:h,point:Ms.clone(),object:i}}function Ss(i,t,e,n,r,s,o,a,u,h){i.getVertexPosition(a,ms),i.getVertexPosition(u,vs),i.getVertexPosition(h,xs);const d=qf(i,t,e,n,ms,vs,xs,qc);if(d){const f=new U;he.getBarycoord(qc,ms,vs,xs,f),r&&(d.uv=he.getInterpolatedAttribute(r,a,u,h,f,new Ft)),s&&(d.uv1=he.getInterpolatedAttribute(s,a,u,h,f,new Ft)),o&&(d.normal=he.getInterpolatedAttribute(o,a,u,h,f,new U),d.normal.dot(n.direction)>0&&d.normal.multiplyScalar(-1));const g={a,b:u,c:h,normal:new U,materialIndex:0};he.getNormal(ms,vs,xs,g.normal),d.face=g,d.barycoord=f}return d}class br extends Gn{constructor(t=1,e=1,n=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:n,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const u=[],h=[],d=[],f=[];let g=0,_=0;S("z","y","x",-1,-1,n,e,t,o,s,0),S("z","y","x",1,-1,n,e,-t,o,s,1),S("x","z","y",1,1,t,n,e,r,o,2),S("x","z","y",1,-1,t,n,-e,r,o,3),S("x","y","z",1,-1,t,e,n,r,s,4),S("x","y","z",-1,-1,t,e,-n,r,s,5),this.setIndex(u),this.setAttribute("position",new kn(h,3)),this.setAttribute("normal",new kn(d,3)),this.setAttribute("uv",new kn(f,2));function S(w,v,m,T,p,l,x,c,P,b,M){const y=l/P,E=x/b,A=l/2,R=x/2,L=c/2,B=P+1,F=b+1;let z=0,O=0;const $=new U;for(let et=0;et<F;et++){const Q=et*E-R;for(let rt=0;rt<B;rt++){const Et=rt*y-A;$[w]=Et*T,$[v]=Q*p,$[m]=L,h.push($.x,$.y,$.z),$[w]=0,$[v]=0,$[m]=c>0?1:-1,d.push($.x,$.y,$.z),f.push(rt/P),f.push(1-et/b),z+=1}}for(let et=0;et<b;et++)for(let Q=0;Q<P;Q++){const rt=g+Q+B*et,Et=g+Q+B*(et+1),vt=g+(Q+1)+B*(et+1),W=g+(Q+1)+B*et;u.push(rt,Et,W),u.push(Et,vt,W),O+=6}a.addGroup(_,O,M),_+=O,g+=z}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new br(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Sr(i){const t={};for(const e in i){t[e]={};for(const n in i[e]){const r=i[e][n];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][n]=null):t[e][n]=r.clone():Array.isArray(r)?t[e][n]=r.slice():t[e][n]=r}}return t}function Ne(i){const t={};for(let e=0;e<i.length;e++){const n=Sr(i[e]);for(const r in n)t[r]=n[r]}return t}function Yf(i){const t=[];for(let e=0;e<i.length;e++)t.push(i[e].clone());return t}function ed(i){const t=i.getRenderTarget();return t===null?i.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:te.workingColorSpace}const $f={clone:Sr,merge:Ne};var Zf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,jf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class oi extends Tr{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Zf,this.fragmentShader=jf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Sr(t.uniforms),this.uniformsGroups=Yf(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?e.uniforms[r]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[r]={type:"m4",value:o.toArray()}:e.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const n={};for(const r in this.extensions)this.extensions[r]===!0&&(n[r]=!0);return Object.keys(n).length>0&&(e.extensions=n),e}}class nd extends Re{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Kt,this.projectionMatrix=new Kt,this.projectionMatrixInverse=new Kt,this.coordinateSystem=wn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const jn=new U,Yc=new Ft,$c=new Ft;class an extends nd{constructor(t=50,e=1,n=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=n,this.far=r,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=Ml*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(io*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ml*2*Math.atan(Math.tan(io*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,n){jn.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(jn.x,jn.y).multiplyScalar(-t/jn.z),jn.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(jn.x,jn.y).multiplyScalar(-t/jn.z)}getViewSize(t,e){return this.getViewBounds(t,Yc,$c),e.subVectors($c,Yc)}setViewOffset(t,e,n,r,s,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(io*.5*this.fov)/this.zoom,n=2*e,r=this.aspect*n,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const u=o.fullWidth,h=o.fullHeight;s+=o.offsetX*r/u,e-=o.offsetY*n/h,r*=o.width/u,n*=o.height/h}const a=this.filmOffset;a!==0&&(s+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,e,e-n,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const Yi=-90,$i=1;class Kf extends Re{constructor(t,e,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new an(Yi,$i,t,e);r.layers=this.layers,this.add(r);const s=new an(Yi,$i,t,e);s.layers=this.layers,this.add(s);const o=new an(Yi,$i,t,e);o.layers=this.layers,this.add(o);const a=new an(Yi,$i,t,e);a.layers=this.layers,this.add(a);const u=new an(Yi,$i,t,e);u.layers=this.layers,this.add(u);const h=new an(Yi,$i,t,e);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[n,r,s,o,a,u]=e;for(const h of e)this.remove(h);if(t===wn)n.up.set(0,1,0),n.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),u.up.set(0,1,0),u.lookAt(0,0,-1);else if(t===uo)n.up.set(0,-1,0),n.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),u.up.set(0,-1,0),u.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const h of e)this.add(h),h.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:r}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,u,h,d]=this.children,f=t.getRenderTarget(),g=t.getActiveCubeFace(),_=t.getActiveMipmapLevel(),S=t.xr.enabled;t.xr.enabled=!1;const w=n.texture.generateMipmaps;n.texture.generateMipmaps=!1,t.setRenderTarget(n,0,r),t.render(e,s),t.setRenderTarget(n,1,r),t.render(e,o),t.setRenderTarget(n,2,r),t.render(e,a),t.setRenderTarget(n,3,r),t.render(e,u),t.setRenderTarget(n,4,r),t.render(e,h),n.texture.generateMipmaps=w,t.setRenderTarget(n,5,r),t.render(e,d),t.setRenderTarget(f,g,_),t.xr.enabled=S,n.texture.needsPMREMUpdate=!0}}class id extends Ye{constructor(t=[],e=xr,n,r,s,o,a,u,h,d){super(t,e,n,r,s,o,a,u,h,d),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class Jf extends Di{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const n={width:t,height:t,depth:1},r=[n,n,n,n,n,n];this.texture=new id(r),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new br(5,5,5),s=new oi({name:"CubemapFromEquirect",uniforms:Sr(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Be,blending:ri});s.uniforms.tEquirect.value=e;const o=new Xe(r,s),a=e.minFilter;return e.minFilter===bi&&(e.minFilter=En),new Kf(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e=!0,n=!0,r=!0){const s=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,n,r);t.setRenderTarget(s)}}class Xr extends Re{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Qf={type:"move"};class Ko{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Xr,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Xr,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new U,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new U),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Xr,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new U,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new U),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const n of t.hand.values())this._getHandJoint(e,n)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,n){let r=null,s=null,o=null;const a=this._targetRay,u=this._grip,h=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(h&&t.hand){o=!0;for(const w of t.hand.values()){const v=e.getJointPose(w,n),m=this._getHandJoint(h,w);v!==null&&(m.matrix.fromArray(v.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=v.radius),m.visible=v!==null}const d=h.joints["index-finger-tip"],f=h.joints["thumb-tip"],g=d.position.distanceTo(f.position),_=.02,S=.005;h.inputState.pinching&&g>_+S?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!h.inputState.pinching&&g<=_-S&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else u!==null&&t.gripSpace&&(s=e.getPose(t.gripSpace,n),s!==null&&(u.matrix.fromArray(s.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,s.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(s.linearVelocity)):u.hasLinearVelocity=!1,s.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(s.angularVelocity)):u.hasAngularVelocity=!1));a!==null&&(r=e.getPose(t.targetRaySpace,n),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(Qf)))}return a!==null&&(a.visible=r!==null),u!==null&&(u.visible=s!==null),h!==null&&(h.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const n=new Xr;n.matrixAutoUpdate=!1,n.visible=!1,t.joints[e.jointName]=n,t.add(n)}return t.joints[e.jointName]}}class Zl{constructor(t,e=1,n=1e3){this.isFog=!0,this.name="",this.color=new Zt(t),this.near=e,this.far=n}clone(){return new Zl(this.color,this.near,this.far)}toJSON(){return{type:"Fog",name:this.name,color:this.color.getHex(),near:this.near,far:this.far}}}class tp extends Re{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new xn,this.environmentIntensity=1,this.environmentRotation=new xn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}const Jo=new U,ep=new U,np=new qt;class ln{constructor(t=new U(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,n,r){return this.normal.set(t,e,n),this.constant=r,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,n){const r=Jo.subVectors(n,e).cross(ep.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(r,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const n=t.delta(Jo),r=this.normal.dot(n);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const s=-(t.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:e.copy(t.start).addScaledVector(n,s)}intersectsLine(t){const e=this.distanceToPoint(t.start),n=this.distanceToPoint(t.end);return e<0&&n>0||n<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const n=e||np.getNormalMatrix(t),r=this.coplanarPoint(Jo).applyMatrix4(t),s=this.normal.applyMatrix3(n).normalize();return this.constant=-r.dot(s),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const fi=new $l,ip=new Ft(.5,.5),Es=new U;class jl{constructor(t=new ln,e=new ln,n=new ln,r=new ln,s=new ln,o=new ln){this.planes=[t,e,n,r,s,o]}set(t,e,n,r,s,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(n),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(t){const e=this.planes;for(let n=0;n<6;n++)e[n].copy(t.planes[n]);return this}setFromProjectionMatrix(t,e=wn,n=!1){const r=this.planes,s=t.elements,o=s[0],a=s[1],u=s[2],h=s[3],d=s[4],f=s[5],g=s[6],_=s[7],S=s[8],w=s[9],v=s[10],m=s[11],T=s[12],p=s[13],l=s[14],x=s[15];if(r[0].setComponents(h-o,_-d,m-S,x-T).normalize(),r[1].setComponents(h+o,_+d,m+S,x+T).normalize(),r[2].setComponents(h+a,_+f,m+w,x+p).normalize(),r[3].setComponents(h-a,_-f,m-w,x-p).normalize(),n)r[4].setComponents(u,g,v,l).normalize(),r[5].setComponents(h-u,_-g,m-v,x-l).normalize();else if(r[4].setComponents(h-u,_-g,m-v,x-l).normalize(),e===wn)r[5].setComponents(h+u,_+g,m+v,x+l).normalize();else if(e===uo)r[5].setComponents(u,g,v,l).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),fi.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),fi.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(fi)}intersectsSprite(t){fi.center.set(0,0,0);const e=ip.distanceTo(t.center);return fi.radius=.7071067811865476+e,fi.applyMatrix4(t.matrixWorld),this.intersectsSphere(fi)}intersectsSphere(t){const e=this.planes,n=t.center,r=-t.radius;for(let s=0;s<6;s++)if(e[s].distanceToPoint(n)<r)return!1;return!0}intersectsBox(t){const e=this.planes;for(let n=0;n<6;n++){const r=e[n];if(Es.x=r.normal.x>0?t.max.x:t.min.x,Es.y=r.normal.y>0?t.max.y:t.min.y,Es.z=r.normal.z>0?t.max.z:t.min.z,r.distanceToPoint(Es)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let n=0;n<6;n++)if(e[n].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class rd extends Ye{constructor(t,e,n=Pi,r,s,o,a=vn,u=vn,h,d=Kr,f=1){if(d!==Kr&&d!==Jr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:t,height:e,depth:f};super(g,r,s,o,a,u,d,n,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Yl(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}class is extends Gn{constructor(t=1,e=1,n=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:n,heightSegments:r};const s=t/2,o=e/2,a=Math.floor(n),u=Math.floor(r),h=a+1,d=u+1,f=t/a,g=e/u,_=[],S=[],w=[],v=[];for(let m=0;m<d;m++){const T=m*g-o;for(let p=0;p<h;p++){const l=p*f-s;S.push(l,-T,0),w.push(0,0,1),v.push(p/a),v.push(1-m/u)}}for(let m=0;m<u;m++)for(let T=0;T<a;T++){const p=T+h*m,l=T+h*(m+1),x=T+1+h*(m+1),c=T+1+h*m;_.push(p,l,c),_.push(l,x,c)}this.setIndex(_),this.setAttribute("position",new kn(S,3)),this.setAttribute("normal",new kn(w,3)),this.setAttribute("uv",new kn(v,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new is(t.width,t.height,t.widthSegments,t.heightSegments)}}class rp extends Tr{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Zt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class sp extends Tr{constructor(t){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new Zt(16777215),this.specular=new Zt(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Zt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ql,this.normalScale=new Ft(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new xn,this.combine=Vl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.specular.copy(t.specular),this.shininess=t.shininess,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class op extends Tr{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_f,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class ap extends Tr{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Zc={enabled:!1,files:{},add:function(i,t){this.enabled!==!1&&(this.files[i]=t)},get:function(i){if(this.enabled!==!1)return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};class lp{constructor(t,e,n){const r=this;let s=!1,o=0,a=0,u;const h=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=n,this.abortController=new AbortController,this.itemStart=function(d){a++,s===!1&&r.onStart!==void 0&&r.onStart(d,o,a),s=!0},this.itemEnd=function(d){o++,r.onProgress!==void 0&&r.onProgress(d,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(d){r.onError!==void 0&&r.onError(d)},this.resolveURL=function(d){return u?u(d):d},this.setURLModifier=function(d){return u=d,this},this.addHandler=function(d,f){return h.push(d,f),this},this.removeHandler=function(d){const f=h.indexOf(d);return f!==-1&&h.splice(f,2),this},this.getHandler=function(d){for(let f=0,g=h.length;f<g;f+=2){const _=h[f],S=h[f+1];if(_.global&&(_.lastIndex=0),_.test(d))return S}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const cp=new lp;class Kl{constructor(t){this.manager=t!==void 0?t:cp,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(t,e){const n=this;return new Promise(function(r,s){n.load(t,r,e,s)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}}Kl.DEFAULT_MATERIAL_NAME="__DEFAULT";const Un={};class hp extends Error{constructor(t,e){super(t),this.response=e}}class up extends Kl{constructor(t){super(t),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(t,e,n,r){t===void 0&&(t=""),this.path!==void 0&&(t=this.path+t),t=this.manager.resolveURL(t);const s=Zc.get(`file:${t}`);if(s!==void 0)return this.manager.itemStart(t),setTimeout(()=>{e&&e(s),this.manager.itemEnd(t)},0),s;if(Un[t]!==void 0){Un[t].push({onLoad:e,onProgress:n,onError:r});return}Un[t]=[],Un[t].push({onLoad:e,onProgress:n,onError:r});const o=new Request(t,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),a=this.mimeType,u=this.responseType;fetch(o).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const d=Un[t],f=h.body.getReader(),g=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),_=g?parseInt(g):0,S=_!==0;let w=0;const v=new ReadableStream({start(m){T();function T(){f.read().then(({done:p,value:l})=>{if(p)m.close();else{w+=l.byteLength;const x=new ProgressEvent("progress",{lengthComputable:S,loaded:w,total:_});for(let c=0,P=d.length;c<P;c++){const b=d[c];b.onProgress&&b.onProgress(x)}m.enqueue(l),T()}},p=>{m.error(p)})}}});return new Response(v)}else throw new hp(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(u){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(d=>new DOMParser().parseFromString(d,a));case"json":return h.json();default:if(a==="")return h.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),g=f&&f[1]?f[1].toLowerCase():void 0,_=new TextDecoder(g);return h.arrayBuffer().then(S=>_.decode(S))}}}).then(h=>{Zc.add(`file:${t}`,h);const d=Un[t];delete Un[t];for(let f=0,g=d.length;f<g;f++){const _=d[f];_.onLoad&&_.onLoad(h)}}).catch(h=>{const d=Un[t];if(d===void 0)throw this.manager.itemError(t),h;delete Un[t];for(let f=0,g=d.length;f<g;f++){const _=d[f];_.onError&&_.onError(h)}this.manager.itemError(t)}).finally(()=>{this.manager.itemEnd(t)}),this.manager.itemStart(t)}setResponseType(t){return this.responseType=t,this}setMimeType(t){return this.mimeType=t,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class sd extends Re{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new Zt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}class dp extends sd{constructor(t,e,n){super(t,n),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Zt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}}const Qo=new Kt,jc=new U,Kc=new U;class fp{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ft(512,512),this.mapType=An,this.map=null,this.mapPass=null,this.matrix=new Kt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new jl,this._frameExtents=new Ft(1,1),this._viewportCount=1,this._viewports=[new oe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,n=this.matrix;jc.setFromMatrixPosition(t.matrixWorld),e.position.copy(jc),Kc.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Kc),e.updateMatrixWorld(),Qo.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Qo,e.coordinateSystem,e.reversedDepth),e.reversedDepth?n.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):n.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),n.multiply(Qo)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class od extends nd{constructor(t=-1,e=1,n=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=n,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,n,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=n,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=n-t,o=n+t,a=r+e,u=r-e;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,d=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=h*this.view.offsetX,o=s+h*this.view.width,a-=d*this.view.offsetY,u=a-d*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,u,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}class pp extends fp{constructor(){super(new od(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gp extends sd{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Re.DEFAULT_UP),this.updateMatrix(),this.target=new Re,this.shadow=new pp}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class _p extends an{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}}class Jc{constructor(t=1,e=0,n=0){this.radius=t,this.phi=e,this.theta=n}set(t,e,n){return this.radius=t,this.phi=e,this.theta=n,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Xt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,n){return this.radius=Math.sqrt(t*t+e*e+n*n),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,n),this.phi=Math.acos(Xt(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Qc=new U,ws=new U,Zi=new U,ji=new U,ta=new U,mp=new U,vp=new U;class Ae{constructor(t=new U,e=new U){this.start=t,this.end=e}set(t,e){return this.start.copy(t),this.end.copy(e),this}copy(t){return this.start.copy(t.start),this.end.copy(t.end),this}getCenter(t){return t.addVectors(this.start,this.end).multiplyScalar(.5)}delta(t){return t.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(t,e){return this.delta(e).multiplyScalar(t).add(this.start)}closestPointToPointParameter(t,e){Qc.subVectors(t,this.start),ws.subVectors(this.end,this.start);const n=ws.dot(ws);let s=ws.dot(Qc)/n;return e&&(s=Xt(s,0,1)),s}closestPointToPoint(t,e,n){const r=this.closestPointToPointParameter(t,e);return this.delta(n).multiplyScalar(r).add(this.start)}distanceSqToLine3(t,e=mp,n=vp){const r=10000000000000001e-32;let s,o;const a=this.start,u=t.start,h=this.end,d=t.end;Zi.subVectors(h,a),ji.subVectors(d,u),ta.subVectors(a,u);const f=Zi.dot(Zi),g=ji.dot(ji),_=ji.dot(ta);if(f<=r&&g<=r)return e.copy(a),n.copy(u),e.sub(n),e.dot(e);if(f<=r)s=0,o=_/g,o=Xt(o,0,1);else{const S=Zi.dot(ta);if(g<=r)o=0,s=Xt(-S/f,0,1);else{const w=Zi.dot(ji),v=f*g-w*w;v!==0?s=Xt((w*_-S*g)/v,0,1):s=0,o=(w*s+_)/g,o<0?(o=0,s=Xt(-S/f,0,1)):o>1&&(o=1,s=Xt((w-S)/f,0,1))}}return e.copy(a).add(Zi.multiplyScalar(s)),n.copy(u).add(ji.multiplyScalar(o)),e.sub(n),e.dot(e)}applyMatrix4(t){return this.start.applyMatrix4(t),this.end.applyMatrix4(t),this}equals(t){return t.start.equals(this.start)&&t.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class xp extends Li{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(t){if(t===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=t}disconnect(){}dispose(){}update(){}}function th(i,t,e,n){const r=yp(n);switch(e){case ku:return i*t;case Wu:return i*t/r.components*r.byteLength;case Gl:return i*t/r.components*r.byteLength;case Xu:return i*t*2/r.components*r.byteLength;case Wl:return i*t*2/r.components*r.byteLength;case Gu:return i*t*3/r.components*r.byteLength;case mn:return i*t*4/r.components*r.byteLength;case Xl:return i*t*4/r.components*r.byteLength;case Js:case Qs:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case to:case eo:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case ja:case Ja:return Math.max(i,16)*Math.max(t,8)/4;case Za:case Ka:return Math.max(i,8)*Math.max(t,8)/2;case Qa:case tl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*8;case el:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case nl:return Math.floor((i+3)/4)*Math.floor((t+3)/4)*16;case il:return Math.floor((i+4)/5)*Math.floor((t+3)/4)*16;case rl:return Math.floor((i+4)/5)*Math.floor((t+4)/5)*16;case sl:return Math.floor((i+5)/6)*Math.floor((t+4)/5)*16;case ol:return Math.floor((i+5)/6)*Math.floor((t+5)/6)*16;case al:return Math.floor((i+7)/8)*Math.floor((t+4)/5)*16;case ll:return Math.floor((i+7)/8)*Math.floor((t+5)/6)*16;case cl:return Math.floor((i+7)/8)*Math.floor((t+7)/8)*16;case hl:return Math.floor((i+9)/10)*Math.floor((t+4)/5)*16;case ul:return Math.floor((i+9)/10)*Math.floor((t+5)/6)*16;case dl:return Math.floor((i+9)/10)*Math.floor((t+7)/8)*16;case fl:return Math.floor((i+9)/10)*Math.floor((t+9)/10)*16;case pl:return Math.floor((i+11)/12)*Math.floor((t+9)/10)*16;case gl:return Math.floor((i+11)/12)*Math.floor((t+11)/12)*16;case no:case _l:case ml:return Math.ceil(i/4)*Math.ceil(t/4)*16;case qu:case vl:return Math.ceil(i/4)*Math.ceil(t/4)*8;case xl:case yl:return Math.ceil(i/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function yp(i){switch(i){case An:case Vu:return{byteLength:1,components:1};case Zr:case zu:case ts:return{byteLength:2,components:1};case Hl:case kl:return{byteLength:2,components:4};case Pi:case zl:case zn:return{byteLength:4,components:1};case Hu:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Qr}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Qr);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ad(){let i=null,t=!1,e=null,n=null;function r(s,o){e(s,o),n=i.requestAnimationFrame(r)}return{start:function(){t!==!0&&e!==null&&(n=i.requestAnimationFrame(r),t=!0)},stop:function(){i.cancelAnimationFrame(n),t=!1},setAnimationLoop:function(s){e=s},setContext:function(s){i=s}}}function Mp(i){const t=new WeakMap;function e(a,u){const h=a.array,d=a.usage,f=h.byteLength,g=i.createBuffer();i.bindBuffer(u,g),i.bufferData(u,h,d),a.onUploadCallback();let _;if(h instanceof Float32Array)_=i.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)_=i.HALF_FLOAT;else if(h instanceof Uint16Array)a.isFloat16BufferAttribute?_=i.HALF_FLOAT:_=i.UNSIGNED_SHORT;else if(h instanceof Int16Array)_=i.SHORT;else if(h instanceof Uint32Array)_=i.UNSIGNED_INT;else if(h instanceof Int32Array)_=i.INT;else if(h instanceof Int8Array)_=i.BYTE;else if(h instanceof Uint8Array)_=i.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)_=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:g,type:_,bytesPerElement:h.BYTES_PER_ELEMENT,version:a.version,size:f}}function n(a,u,h){const d=u.array,f=u.updateRanges;if(i.bindBuffer(h,a),f.length===0)i.bufferSubData(h,0,d);else{f.sort((_,S)=>_.start-S.start);let g=0;for(let _=1;_<f.length;_++){const S=f[g],w=f[_];w.start<=S.start+S.count+1?S.count=Math.max(S.count,w.start+w.count-S.start):(++g,f[g]=w)}f.length=g+1;for(let _=0,S=f.length;_<S;_++){const w=f[_];i.bufferSubData(h,w.start*d.BYTES_PER_ELEMENT,d,w.start,w.count)}u.clearUpdateRanges()}u.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const u=t.get(a);u&&(i.deleteBuffer(u.buffer),t.delete(a))}function o(a,u){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const d=t.get(a);(!d||d.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const h=t.get(a);if(h===void 0)t.set(a,e(a,u));else if(h.version<a.version){if(h.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(h.buffer,a,u),h.version=a.version}}return{get:r,remove:s,update:o}}var Sp=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Ep=`#ifdef USE_ALPHAHASH
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
#endif`,wp=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Tp=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,bp=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Ap=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Rp=`#ifdef USE_AOMAP
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
#endif`,Pp=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cp=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
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
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
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
#endif`,Dp=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Ip=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Lp=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Up=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Np=`#ifdef USE_IRIDESCENCE
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
#endif`,Fp=`#ifdef USE_BUMPMAP
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
#endif`,Bp=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Op=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Vp=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,zp=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Hp=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,kp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Gp=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Wp=`#if defined( USE_COLOR_ALPHA )
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
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,Xp=`#define PI 3.141592653589793
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
} // validated`,qp=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Yp=`vec3 transformedNormal = objectNormal;
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
#endif`,$p=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Zp=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,jp=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Kp=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Jp="gl_FragColor = linearToOutputTexel( gl_FragColor );",Qp=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,tg=`#ifdef USE_ENVMAP
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
#endif`,eg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,ng=`#ifdef USE_ENVMAP
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
#endif`,ig=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
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
#endif`,sg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,og=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,ag=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,lg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,cg=`#ifdef USE_GRADIENTMAP
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
}`,hg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,ug=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,dg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,fg=`uniform bool receiveShadow;
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
#endif`,pg=`#ifdef USE_ENVMAP
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
#endif`,gg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,vg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,xg=`PhysicalMaterial material;
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
#endif`,yg=`struct PhysicalMaterial {
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
}`,Mg=`
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
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
#endif`,Sg=`#if defined( RE_IndirectDiffuse )
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
#endif`,Eg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,wg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Tg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ag=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Rg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Pg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Cg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Dg=`#if defined( USE_POINTS_UV )
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
#endif`,Ig=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Lg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Ug=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Ng=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bg=`#ifdef USE_MORPHTARGETS
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
#endif`,Og=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,zg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Hg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,kg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Wg=`#ifdef USE_NORMALMAP
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
#endif`,Xg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,qg=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,$g=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,jg=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
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
}`,Kg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Jg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Qg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,t_=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,e_=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,n_=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,i_=`#if NUM_SPOT_LIGHT_COORDS > 0
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
			float shadowIntensity;
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
			float shadowIntensity;
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
			float shadowIntensity;
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
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSEDEPTHBUF
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSEDEPTHBUF
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare , distribution.x );
		#endif
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return mix( 1.0, shadow, shadowIntensity );
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
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
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,r_=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
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
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,s_=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,o_=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,a_=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,l_=`#ifdef USE_SKINNING
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
#endif`,c_=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,h_=`#ifdef USE_SKINNING
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
#endif`,u_=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,d_=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,f_=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,p_=`#ifndef saturate
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
vec3 CineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,g_=`#ifdef USE_TRANSMISSION
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
#endif`,__=`#ifdef USE_TRANSMISSION
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
#endif`,m_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,v_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,x_=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,y_=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const M_=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,S_=`uniform sampler2D t2D;
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
}`,E_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,w_=`#ifdef ENVMAP_TYPE_CUBE
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
}`,T_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,b_=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,A_=`#include <common>
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
}`,R_=`#if DEPTH_PACKING == 3200
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
	#ifdef USE_REVERSEDEPTHBUF
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,P_=`#define DISTANCE
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
}`,C_=`#define DISTANCE
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
}`,D_=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,I_=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,L_=`uniform float scale;
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
}`,U_=`uniform vec3 diffuse;
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
}`,N_=`#include <common>
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
}`,F_=`uniform vec3 diffuse;
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
}`,B_=`#define LAMBERT
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
}`,O_=`#define LAMBERT
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
}`,V_=`#define MATCAP
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
}`,z_=`#define MATCAP
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
}`,H_=`#define NORMAL
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
}`,k_=`#define NORMAL
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
}`,G_=`#define PHONG
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
}`,W_=`#define PHONG
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
}`,X_=`#define STANDARD
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
}`,q_=`#define STANDARD
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
}`,Y_=`#define TOON
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
}`,$_=`#define TOON
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
}`,Z_=`uniform float size;
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
}`,j_=`uniform vec3 diffuse;
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
}`,K_=`#include <common>
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
}`,J_=`uniform vec3 color;
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
}`,Q_=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
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
}`,tm=`uniform vec3 diffuse;
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
}`,$t={alphahash_fragment:Sp,alphahash_pars_fragment:Ep,alphamap_fragment:wp,alphamap_pars_fragment:Tp,alphatest_fragment:bp,alphatest_pars_fragment:Ap,aomap_fragment:Rp,aomap_pars_fragment:Pp,batching_pars_vertex:Cp,batching_vertex:Dp,begin_vertex:Ip,beginnormal_vertex:Lp,bsdfs:Up,iridescence_fragment:Np,bumpmap_pars_fragment:Fp,clipping_planes_fragment:Bp,clipping_planes_pars_fragment:Op,clipping_planes_pars_vertex:Vp,clipping_planes_vertex:zp,color_fragment:Hp,color_pars_fragment:kp,color_pars_vertex:Gp,color_vertex:Wp,common:Xp,cube_uv_reflection_fragment:qp,defaultnormal_vertex:Yp,displacementmap_pars_vertex:$p,displacementmap_vertex:Zp,emissivemap_fragment:jp,emissivemap_pars_fragment:Kp,colorspace_fragment:Jp,colorspace_pars_fragment:Qp,envmap_fragment:tg,envmap_common_pars_fragment:eg,envmap_pars_fragment:ng,envmap_pars_vertex:ig,envmap_physical_pars_fragment:pg,envmap_vertex:rg,fog_vertex:sg,fog_pars_vertex:og,fog_fragment:ag,fog_pars_fragment:lg,gradientmap_pars_fragment:cg,lightmap_pars_fragment:hg,lights_lambert_fragment:ug,lights_lambert_pars_fragment:dg,lights_pars_begin:fg,lights_toon_fragment:gg,lights_toon_pars_fragment:_g,lights_phong_fragment:mg,lights_phong_pars_fragment:vg,lights_physical_fragment:xg,lights_physical_pars_fragment:yg,lights_fragment_begin:Mg,lights_fragment_maps:Sg,lights_fragment_end:Eg,logdepthbuf_fragment:wg,logdepthbuf_pars_fragment:Tg,logdepthbuf_pars_vertex:bg,logdepthbuf_vertex:Ag,map_fragment:Rg,map_pars_fragment:Pg,map_particle_fragment:Cg,map_particle_pars_fragment:Dg,metalnessmap_fragment:Ig,metalnessmap_pars_fragment:Lg,morphinstance_vertex:Ug,morphcolor_vertex:Ng,morphnormal_vertex:Fg,morphtarget_pars_vertex:Bg,morphtarget_vertex:Og,normal_fragment_begin:Vg,normal_fragment_maps:zg,normal_pars_fragment:Hg,normal_pars_vertex:kg,normal_vertex:Gg,normalmap_pars_fragment:Wg,clearcoat_normal_fragment_begin:Xg,clearcoat_normal_fragment_maps:qg,clearcoat_pars_fragment:Yg,iridescence_pars_fragment:$g,opaque_fragment:Zg,packing:jg,premultiplied_alpha_fragment:Kg,project_vertex:Jg,dithering_fragment:Qg,dithering_pars_fragment:t_,roughnessmap_fragment:e_,roughnessmap_pars_fragment:n_,shadowmap_pars_fragment:i_,shadowmap_pars_vertex:r_,shadowmap_vertex:s_,shadowmask_pars_fragment:o_,skinbase_vertex:a_,skinning_pars_vertex:l_,skinning_vertex:c_,skinnormal_vertex:h_,specularmap_fragment:u_,specularmap_pars_fragment:d_,tonemapping_fragment:f_,tonemapping_pars_fragment:p_,transmission_fragment:g_,transmission_pars_fragment:__,uv_pars_fragment:m_,uv_pars_vertex:v_,uv_vertex:x_,worldpos_vertex:y_,background_vert:M_,background_frag:S_,backgroundCube_vert:E_,backgroundCube_frag:w_,cube_vert:T_,cube_frag:b_,depth_vert:A_,depth_frag:R_,distanceRGBA_vert:P_,distanceRGBA_frag:C_,equirect_vert:D_,equirect_frag:I_,linedashed_vert:L_,linedashed_frag:U_,meshbasic_vert:N_,meshbasic_frag:F_,meshlambert_vert:B_,meshlambert_frag:O_,meshmatcap_vert:V_,meshmatcap_frag:z_,meshnormal_vert:H_,meshnormal_frag:k_,meshphong_vert:G_,meshphong_frag:W_,meshphysical_vert:X_,meshphysical_frag:q_,meshtoon_vert:Y_,meshtoon_frag:$_,points_vert:Z_,points_frag:j_,shadow_vert:K_,shadow_frag:J_,sprite_vert:Q_,sprite_frag:tm},xt={common:{diffuse:{value:new Zt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qt}},envmap:{envMap:{value:null},envMapRotation:{value:new qt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qt},normalScale:{value:new Ft(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Zt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Zt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0},uvTransform:{value:new qt}},sprite:{diffuse:{value:new Zt(16777215)},opacity:{value:1},center:{value:new Ft(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qt},alphaMap:{value:null},alphaMapTransform:{value:new qt},alphaTest:{value:0}}},Mn={basic:{uniforms:Ne([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.fog]),vertexShader:$t.meshbasic_vert,fragmentShader:$t.meshbasic_frag},lambert:{uniforms:Ne([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:$t.meshlambert_vert,fragmentShader:$t.meshlambert_frag},phong:{uniforms:Ne([xt.common,xt.specularmap,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)},specular:{value:new Zt(1118481)},shininess:{value:30}}]),vertexShader:$t.meshphong_vert,fragmentShader:$t.meshphong_frag},standard:{uniforms:Ne([xt.common,xt.envmap,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.roughnessmap,xt.metalnessmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag},toon:{uniforms:Ne([xt.common,xt.aomap,xt.lightmap,xt.emissivemap,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.gradientmap,xt.fog,xt.lights,{emissive:{value:new Zt(0)}}]),vertexShader:$t.meshtoon_vert,fragmentShader:$t.meshtoon_frag},matcap:{uniforms:Ne([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,xt.fog,{matcap:{value:null}}]),vertexShader:$t.meshmatcap_vert,fragmentShader:$t.meshmatcap_frag},points:{uniforms:Ne([xt.points,xt.fog]),vertexShader:$t.points_vert,fragmentShader:$t.points_frag},dashed:{uniforms:Ne([xt.common,xt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:$t.linedashed_vert,fragmentShader:$t.linedashed_frag},depth:{uniforms:Ne([xt.common,xt.displacementmap]),vertexShader:$t.depth_vert,fragmentShader:$t.depth_frag},normal:{uniforms:Ne([xt.common,xt.bumpmap,xt.normalmap,xt.displacementmap,{opacity:{value:1}}]),vertexShader:$t.meshnormal_vert,fragmentShader:$t.meshnormal_frag},sprite:{uniforms:Ne([xt.sprite,xt.fog]),vertexShader:$t.sprite_vert,fragmentShader:$t.sprite_frag},background:{uniforms:{uvTransform:{value:new qt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:$t.background_vert,fragmentShader:$t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qt}},vertexShader:$t.backgroundCube_vert,fragmentShader:$t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:$t.cube_vert,fragmentShader:$t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:$t.equirect_vert,fragmentShader:$t.equirect_frag},distanceRGBA:{uniforms:Ne([xt.common,xt.displacementmap,{referencePosition:{value:new U},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:$t.distanceRGBA_vert,fragmentShader:$t.distanceRGBA_frag},shadow:{uniforms:Ne([xt.lights,xt.fog,{color:{value:new Zt(0)},opacity:{value:1}}]),vertexShader:$t.shadow_vert,fragmentShader:$t.shadow_frag}};Mn.physical={uniforms:Ne([Mn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qt},clearcoatNormalScale:{value:new Ft(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qt},sheen:{value:0},sheenColor:{value:new Zt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qt},transmissionSamplerSize:{value:new Ft},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qt},attenuationDistance:{value:0},attenuationColor:{value:new Zt(0)},specularColor:{value:new Zt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qt},anisotropyVector:{value:new Ft},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qt}}]),vertexShader:$t.meshphysical_vert,fragmentShader:$t.meshphysical_frag};const Ts={r:0,b:0,g:0},pi=new xn,em=new Kt;function nm(i,t,e,n,r,s,o){const a=new Zt(0);let u=s===!0?0:1,h,d,f=null,g=0,_=null;function S(p){let l=p.isScene===!0?p.background:null;return l&&l.isTexture&&(l=(p.backgroundBlurriness>0?e:t).get(l)),l}function w(p){let l=!1;const x=S(p);x===null?m(a,u):x&&x.isColor&&(m(x,1),l=!0);const c=i.xr.getEnvironmentBlendMode();c==="additive"?n.buffers.color.setClear(0,0,0,1,o):c==="alpha-blend"&&n.buffers.color.setClear(0,0,0,0,o),(i.autoClear||l)&&(n.buffers.depth.setTest(!0),n.buffers.depth.setMask(!0),n.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function v(p,l){const x=S(l);x&&(x.isCubeTexture||x.mapping===vo)?(d===void 0&&(d=new Xe(new br(1,1,1),new oi({name:"BackgroundCubeMaterial",uniforms:Sr(Mn.backgroundCube.uniforms),vertexShader:Mn.backgroundCube.vertexShader,fragmentShader:Mn.backgroundCube.fragmentShader,side:Be,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),d.geometry.deleteAttribute("uv"),d.onBeforeRender=function(c,P,b){this.matrixWorld.copyPosition(b.matrixWorld)},Object.defineProperty(d.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(d)),pi.copy(l.backgroundRotation),pi.x*=-1,pi.y*=-1,pi.z*=-1,x.isCubeTexture&&x.isRenderTargetTexture===!1&&(pi.y*=-1,pi.z*=-1),d.material.uniforms.envMap.value=x,d.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,d.material.uniforms.backgroundBlurriness.value=l.backgroundBlurriness,d.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,d.material.uniforms.backgroundRotation.value.setFromMatrix4(em.makeRotationFromEuler(pi)),d.material.toneMapped=te.getTransfer(x.colorSpace)!==ie,(f!==x||g!==x.version||_!==i.toneMapping)&&(d.material.needsUpdate=!0,f=x,g=x.version,_=i.toneMapping),d.layers.enableAll(),p.unshift(d,d.geometry,d.material,0,0,null)):x&&x.isTexture&&(h===void 0&&(h=new Xe(new is(2,2),new oi({name:"BackgroundMaterial",uniforms:Sr(Mn.background.uniforms),vertexShader:Mn.background.vertexShader,fragmentShader:Mn.background.fragmentShader,side:bn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=x,h.material.uniforms.backgroundIntensity.value=l.backgroundIntensity,h.material.toneMapped=te.getTransfer(x.colorSpace)!==ie,x.matrixAutoUpdate===!0&&x.updateMatrix(),h.material.uniforms.uvTransform.value.copy(x.matrix),(f!==x||g!==x.version||_!==i.toneMapping)&&(h.material.needsUpdate=!0,f=x,g=x.version,_=i.toneMapping),h.layers.enableAll(),p.unshift(h,h.geometry,h.material,0,0,null))}function m(p,l){p.getRGB(Ts,ed(i)),n.buffers.color.setClear(Ts.r,Ts.g,Ts.b,l,o)}function T(){d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return a},setClearColor:function(p,l=1){a.set(p),u=l,m(a,u)},getClearAlpha:function(){return u},setClearAlpha:function(p){u=p,m(a,u)},render:w,addToRenderList:v,dispose:T}}function im(i,t){const e=i.getParameter(i.MAX_VERTEX_ATTRIBS),n={},r=g(null);let s=r,o=!1;function a(y,E,A,R,L){let B=!1;const F=f(R,A,E);s!==F&&(s=F,h(s.object)),B=_(y,R,A,L),B&&S(y,R,A,L),L!==null&&t.update(L,i.ELEMENT_ARRAY_BUFFER),(B||o)&&(o=!1,l(y,E,A,R),L!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,t.get(L).buffer))}function u(){return i.createVertexArray()}function h(y){return i.bindVertexArray(y)}function d(y){return i.deleteVertexArray(y)}function f(y,E,A){const R=A.wireframe===!0;let L=n[y.id];L===void 0&&(L={},n[y.id]=L);let B=L[E.id];B===void 0&&(B={},L[E.id]=B);let F=B[R];return F===void 0&&(F=g(u()),B[R]=F),F}function g(y){const E=[],A=[],R=[];for(let L=0;L<e;L++)E[L]=0,A[L]=0,R[L]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:E,enabledAttributes:A,attributeDivisors:R,object:y,attributes:{},index:null}}function _(y,E,A,R){const L=s.attributes,B=E.attributes;let F=0;const z=A.getAttributes();for(const O in z)if(z[O].location>=0){const et=L[O];let Q=B[O];if(Q===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(Q=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(Q=y.instanceColor)),et===void 0||et.attribute!==Q||Q&&et.data!==Q.data)return!0;F++}return s.attributesNum!==F||s.index!==R}function S(y,E,A,R){const L={},B=E.attributes;let F=0;const z=A.getAttributes();for(const O in z)if(z[O].location>=0){let et=B[O];et===void 0&&(O==="instanceMatrix"&&y.instanceMatrix&&(et=y.instanceMatrix),O==="instanceColor"&&y.instanceColor&&(et=y.instanceColor));const Q={};Q.attribute=et,et&&et.data&&(Q.data=et.data),L[O]=Q,F++}s.attributes=L,s.attributesNum=F,s.index=R}function w(){const y=s.newAttributes;for(let E=0,A=y.length;E<A;E++)y[E]=0}function v(y){m(y,0)}function m(y,E){const A=s.newAttributes,R=s.enabledAttributes,L=s.attributeDivisors;A[y]=1,R[y]===0&&(i.enableVertexAttribArray(y),R[y]=1),L[y]!==E&&(i.vertexAttribDivisor(y,E),L[y]=E)}function T(){const y=s.newAttributes,E=s.enabledAttributes;for(let A=0,R=E.length;A<R;A++)E[A]!==y[A]&&(i.disableVertexAttribArray(A),E[A]=0)}function p(y,E,A,R,L,B,F){F===!0?i.vertexAttribIPointer(y,E,A,L,B):i.vertexAttribPointer(y,E,A,R,L,B)}function l(y,E,A,R){w();const L=R.attributes,B=A.getAttributes(),F=E.defaultAttributeValues;for(const z in B){const O=B[z];if(O.location>=0){let $=L[z];if($===void 0&&(z==="instanceMatrix"&&y.instanceMatrix&&($=y.instanceMatrix),z==="instanceColor"&&y.instanceColor&&($=y.instanceColor)),$!==void 0){const et=$.normalized,Q=$.itemSize,rt=t.get($);if(rt===void 0)continue;const Et=rt.buffer,vt=rt.type,W=rt.bytesPerElement,nt=vt===i.INT||vt===i.UNSIGNED_INT||$.gpuType===zl;if($.isInterleavedBufferAttribute){const J=$.data,dt=J.stride,it=$.offset;if(J.isInstancedInterleavedBuffer){for(let _t=0;_t<O.locationSize;_t++)m(O.location+_t,J.meshPerAttribute);y.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let _t=0;_t<O.locationSize;_t++)v(O.location+_t);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let _t=0;_t<O.locationSize;_t++)p(O.location+_t,Q/O.locationSize,vt,et,dt*W,(it+Q/O.locationSize*_t)*W,nt)}else{if($.isInstancedBufferAttribute){for(let J=0;J<O.locationSize;J++)m(O.location+J,$.meshPerAttribute);y.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=$.meshPerAttribute*$.count)}else for(let J=0;J<O.locationSize;J++)v(O.location+J);i.bindBuffer(i.ARRAY_BUFFER,Et);for(let J=0;J<O.locationSize;J++)p(O.location+J,Q/O.locationSize,vt,et,Q*W,Q/O.locationSize*J*W,nt)}}else if(F!==void 0){const et=F[z];if(et!==void 0)switch(et.length){case 2:i.vertexAttrib2fv(O.location,et);break;case 3:i.vertexAttrib3fv(O.location,et);break;case 4:i.vertexAttrib4fv(O.location,et);break;default:i.vertexAttrib1fv(O.location,et)}}}}T()}function x(){b();for(const y in n){const E=n[y];for(const A in E){const R=E[A];for(const L in R)d(R[L].object),delete R[L];delete E[A]}delete n[y]}}function c(y){if(n[y.id]===void 0)return;const E=n[y.id];for(const A in E){const R=E[A];for(const L in R)d(R[L].object),delete R[L];delete E[A]}delete n[y.id]}function P(y){for(const E in n){const A=n[E];if(A[y.id]===void 0)continue;const R=A[y.id];for(const L in R)d(R[L].object),delete R[L];delete A[y.id]}}function b(){M(),o=!0,s!==r&&(s=r,h(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:b,resetDefaultState:M,dispose:x,releaseStatesOfGeometry:c,releaseStatesOfProgram:P,initAttributes:w,enableAttribute:v,disableUnusedAttributes:T}}function rm(i,t,e){let n;function r(h){n=h}function s(h,d){i.drawArrays(n,h,d),e.update(d,n,1)}function o(h,d,f){f!==0&&(i.drawArraysInstanced(n,h,d,f),e.update(d,n,f))}function a(h,d,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,h,0,d,0,f);let _=0;for(let S=0;S<f;S++)_+=d[S];e.update(_,n,1)}function u(h,d,f,g){if(f===0)return;const _=t.get("WEBGL_multi_draw");if(_===null)for(let S=0;S<h.length;S++)o(h[S],d[S],g[S]);else{_.multiDrawArraysInstancedWEBGL(n,h,0,d,0,g,0,f);let S=0;for(let w=0;w<f;w++)S+=d[w]*g[w];e.update(S,n,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=u}function sm(i,t,e,n){let r;function s(){if(r!==void 0)return r;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");r=i.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(P){return!(P!==mn&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const b=P===ts&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==An&&n.convert(P)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==zn&&!b)}function u(P){if(P==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=e.precision!==void 0?e.precision:"highp";const d=u(h);d!==h&&(console.warn("THREE.WebGLRenderer:",h,"not supported, using",d,"instead."),h=d);const f=e.logarithmicDepthBuffer===!0,g=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control"),_=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),S=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_TEXTURE_SIZE),v=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),m=i.getParameter(i.MAX_VERTEX_ATTRIBS),T=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),p=i.getParameter(i.MAX_VARYING_VECTORS),l=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),x=S>0,c=i.getParameter(i.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:u,textureFormatReadable:o,textureTypeReadable:a,precision:h,logarithmicDepthBuffer:f,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:S,maxTextureSize:w,maxCubemapSize:v,maxAttributes:m,maxVertexUniforms:T,maxVaryings:p,maxFragmentUniforms:l,vertexTextures:x,maxSamples:c}}function om(i){const t=this;let e=null,n=0,r=!1,s=!1;const o=new ln,a=new qt,u={value:null,needsUpdate:!1};this.uniform=u,this.numPlanes=0,this.numIntersection=0,this.init=function(f,g){const _=f.length!==0||g||n!==0||r;return r=g,n=f.length,_},this.beginShadows=function(){s=!0,d(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,g){e=d(f,g,0)},this.setState=function(f,g,_){const S=f.clippingPlanes,w=f.clipIntersection,v=f.clipShadows,m=i.get(f);if(!r||S===null||S.length===0||s&&!v)s?d(null):h();else{const T=s?0:n,p=T*4;let l=m.clippingState||null;u.value=l,l=d(S,g,p,_);for(let x=0;x!==p;++x)l[x]=e[x];m.clippingState=l,this.numIntersection=w?this.numPlanes:0,this.numPlanes+=T}};function h(){u.value!==e&&(u.value=e,u.needsUpdate=n>0),t.numPlanes=n,t.numIntersection=0}function d(f,g,_,S){const w=f!==null?f.length:0;let v=null;if(w!==0){if(v=u.value,S!==!0||v===null){const m=_+w*4,T=g.matrixWorldInverse;a.getNormalMatrix(T),(v===null||v.length<m)&&(v=new Float32Array(m));for(let p=0,l=_;p!==w;++p,l+=4)o.copy(f[p]).applyMatrix4(T,a),o.normal.toArray(v,l),v[l+3]=o.constant}u.value=v,u.needsUpdate=!0}return t.numPlanes=w,t.numIntersection=0,v}}function am(i){let t=new WeakMap;function e(o,a){return a===Xa?o.mapping=xr:a===qa&&(o.mapping=yr),o}function n(o){if(o&&o.isTexture){const a=o.mapping;if(a===Xa||a===qa)if(t.has(o)){const u=t.get(o).texture;return e(u,o.mapping)}else{const u=o.image;if(u&&u.height>0){const h=new Jf(u.height);return h.fromEquirectangularTexture(i,o),t.set(o,h),o.addEventListener("dispose",r),e(h.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const u=t.get(a);u!==void 0&&(t.delete(a),u.dispose())}function s(){t=new WeakMap}return{get:n,dispose:s}}const ur=4,eh=[.125,.215,.35,.446,.526,.582],wi=20,ea=new od,nh=new Zt;let na=null,ia=0,ra=0,sa=!1;const Si=(1+Math.sqrt(5))/2,Ki=1/Si,ih=[new U(-Si,Ki,0),new U(Si,Ki,0),new U(-Ki,0,Si),new U(Ki,0,Si),new U(0,Si,-Ki),new U(0,Si,Ki),new U(-1,1,-1),new U(1,1,-1),new U(-1,1,1),new U(1,1,1)],lm=new U;class rh{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,n=.1,r=100,s={}){const{size:o=256,position:a=lm}=s;na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const u=this._allocateTargets();return u.depthBuffer=!0,this._sceneToCubeUV(t,n,r,u,a),e>0&&this._blur(u,0,0,e),this._applyPMREM(u),this._cleanup(u),u}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=ah(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=oh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(na,ia,ra),this._renderer.xr.enabled=sa,t.scissorTest=!1,bs(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===xr||t.mapping===yr?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),na=this._renderer.getRenderTarget(),ia=this._renderer.getActiveCubeFace(),ra=this._renderer.getActiveMipmapLevel(),sa=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=e||this._allocateTargets();return this._textureToCubeUV(t,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,n={magFilter:En,minFilter:En,generateMipmaps:!1,type:ts,format:mn,colorSpace:Mr,depthBuffer:!1},r=sh(t,e,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=sh(t,e,n);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=cm(s)),this._blurMaterial=hm(s,t,e)}return r}_compileMaterial(t){const e=new Xe(this._lodPlanes[0],t);this._renderer.compile(e,ea)}_sceneToCubeUV(t,e,n,r,s){const u=new an(90,1,e,n),h=[1,-1,1,1,1,1],d=[1,1,1,-1,-1,-1],f=this._renderer,g=f.autoClear,_=f.toneMapping;f.getClearColor(nh),f.toneMapping=si,f.autoClear=!1,f.state.buffers.depth.getReversed()&&(f.setRenderTarget(r),f.clearDepth(),f.setRenderTarget(null));const w=new Ju({name:"PMREM.Background",side:Be,depthWrite:!1,depthTest:!1}),v=new Xe(new br,w);let m=!1;const T=t.background;T?T.isColor&&(w.color.copy(T),t.background=null,m=!0):(w.color.copy(nh),m=!0);for(let p=0;p<6;p++){const l=p%3;l===0?(u.up.set(0,h[p],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x+d[p],s.y,s.z)):l===1?(u.up.set(0,0,h[p]),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y+d[p],s.z)):(u.up.set(0,h[p],0),u.position.set(s.x,s.y,s.z),u.lookAt(s.x,s.y,s.z+d[p]));const x=this._cubeSize;bs(r,l*x,p>2?x:0,x,x),f.setRenderTarget(r),m&&f.render(v,u),f.render(t,u)}v.geometry.dispose(),v.material.dispose(),f.toneMapping=_,f.autoClear=g,t.background=T}_textureToCubeUV(t,e){const n=this._renderer,r=t.mapping===xr||t.mapping===yr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=ah()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=oh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Xe(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=t;const u=this._cubeSize;bs(e,0,0,3*u,2*u),n.setRenderTarget(e),n.render(o,ea)}_applyPMREM(t){const e=this._renderer,n=e.autoClear;e.autoClear=!1;const r=this._lodPlanes.length;for(let s=1;s<r;s++){const o=Math.sqrt(this._sigmas[s]*this._sigmas[s]-this._sigmas[s-1]*this._sigmas[s-1]),a=ih[(r-s-1)%ih.length];this._blur(t,s-1,s,o,a)}e.autoClear=n}_blur(t,e,n,r,s){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,n,r,"latitudinal",s),this._halfBlur(o,t,n,n,r,"longitudinal",s)}_halfBlur(t,e,n,r,s,o,a){const u=this._renderer,h=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const d=3,f=new Xe(this._lodPlanes[r],h),g=h.uniforms,_=this._sizeLods[n]-1,S=isFinite(s)?Math.PI/(2*_):2*Math.PI/(2*wi-1),w=s/S,v=isFinite(s)?1+Math.floor(d*w):wi;v>wi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${v} samples when the maximum is set to ${wi}`);const m=[];let T=0;for(let P=0;P<wi;++P){const b=P/w,M=Math.exp(-b*b/2);m.push(M),P===0?T+=M:P<v&&(T+=2*M)}for(let P=0;P<m.length;P++)m[P]=m[P]/T;g.envMap.value=t.texture,g.samples.value=v,g.weights.value=m,g.latitudinal.value=o==="latitudinal",a&&(g.poleAxis.value=a);const{_lodMax:p}=this;g.dTheta.value=S,g.mipInt.value=p-n;const l=this._sizeLods[r],x=3*l*(r>p-ur?r-p+ur:0),c=4*(this._cubeSize-l);bs(e,x,c,3*l,2*l),u.setRenderTarget(e),u.render(f,ea)}}function cm(i){const t=[],e=[],n=[];let r=i;const s=i-ur+1+eh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let u=1/a;o>i-ur?u=eh[o-i+ur-1]:o===0&&(u=0),n.push(u);const h=1/(a-2),d=-h,f=1+h,g=[d,d,f,d,f,f,d,d,f,f,d,f],_=6,S=6,w=3,v=2,m=1,T=new Float32Array(w*S*_),p=new Float32Array(v*S*_),l=new Float32Array(m*S*_);for(let c=0;c<_;c++){const P=c%3*2/3-1,b=c>2?0:-1,M=[P,b,0,P+2/3,b,0,P+2/3,b+1,0,P,b,0,P+2/3,b+1,0,P,b+1,0];T.set(M,w*S*c),p.set(g,v*S*c);const y=[c,c,c,c,c,c];l.set(y,m*S*c)}const x=new Gn;x.setAttribute("position",new Pe(T,w)),x.setAttribute("uv",new Pe(p,v)),x.setAttribute("faceIndex",new Pe(l,m)),t.push(x),r>ur&&r--}return{lodPlanes:t,sizeLods:e,sigmas:n}}function sh(i,t,e){const n=new Di(i,t,e);return n.texture.mapping=vo,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function bs(i,t,e,n,r){i.viewport.set(t,e,n,r),i.scissor.set(t,e,n,r)}function hm(i,t,e){const n=new Float32Array(wi),r=new U(0,1,0);return new oi({name:"SphericalGaussianBlur",defines:{n:wi,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:n},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function oh(){return new oi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jl(),fragmentShader:`

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
		`,blending:ri,depthTest:!1,depthWrite:!1})}function ah(){return new oi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ri,depthTest:!1,depthWrite:!1})}function Jl(){return`

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
	`}function um(i){let t=new WeakMap,e=null;function n(a){if(a&&a.isTexture){const u=a.mapping,h=u===Xa||u===qa,d=u===xr||u===yr;if(h||d){let f=t.get(a);const g=f!==void 0?f.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==g)return e===null&&(e=new rh(i)),f=h?e.fromEquirectangular(a,f):e.fromCubemap(a,f),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),f.texture;if(f!==void 0)return f.texture;{const _=a.image;return h&&_&&_.height>0||d&&_&&r(_)?(e===null&&(e=new rh(i)),f=h?e.fromEquirectangular(a):e.fromCubemap(a),f.texture.pmremVersion=a.pmremVersion,t.set(a,f),a.addEventListener("dispose",s),f.texture):null}}}return a}function r(a){let u=0;const h=6;for(let d=0;d<h;d++)a[d]!==void 0&&u++;return u===h}function s(a){const u=a.target;u.removeEventListener("dispose",s);const h=t.get(u);h!==void 0&&(t.delete(u),h.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:n,dispose:o}}function dm(i){const t={};function e(n){if(t[n]!==void 0)return t[n];let r;switch(n){case"WEBGL_depth_texture":r=i.getExtension("WEBGL_depth_texture")||i.getExtension("MOZ_WEBGL_depth_texture")||i.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=i.getExtension("EXT_texture_filter_anisotropic")||i.getExtension("MOZ_EXT_texture_filter_anisotropic")||i.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=i.getExtension("WEBGL_compressed_texture_s3tc")||i.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=i.getExtension("WEBGL_compressed_texture_pvrtc")||i.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=i.getExtension(n)}return t[n]=r,r}return{has:function(n){return e(n)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(n){const r=e(n);return r===null&&_r("THREE.WebGLRenderer: "+n+" extension not supported."),r}}}function fm(i,t,e,n){const r={},s=new WeakMap;function o(f){const g=f.target;g.index!==null&&t.remove(g.index);for(const S in g.attributes)t.remove(g.attributes[S]);g.removeEventListener("dispose",o),delete r[g.id];const _=s.get(g);_&&(t.remove(_),s.delete(g)),n.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,e.memory.geometries--}function a(f,g){return r[g.id]===!0||(g.addEventListener("dispose",o),r[g.id]=!0,e.memory.geometries++),g}function u(f){const g=f.attributes;for(const _ in g)t.update(g[_],i.ARRAY_BUFFER)}function h(f){const g=[],_=f.index,S=f.attributes.position;let w=0;if(_!==null){const T=_.array;w=_.version;for(let p=0,l=T.length;p<l;p+=3){const x=T[p+0],c=T[p+1],P=T[p+2];g.push(x,c,c,P,P,x)}}else if(S!==void 0){const T=S.array;w=S.version;for(let p=0,l=T.length/3-1;p<l;p+=3){const x=p+0,c=p+1,P=p+2;g.push(x,c,c,P,P,x)}}else return;const v=new($u(g)?td:Qu)(g,1);v.version=w;const m=s.get(f);m&&t.remove(m),s.set(f,v)}function d(f){const g=s.get(f);if(g){const _=f.index;_!==null&&g.version<_.version&&h(f)}else h(f);return s.get(f)}return{get:a,update:u,getWireframeAttribute:d}}function pm(i,t,e){let n;function r(g){n=g}let s,o;function a(g){s=g.type,o=g.bytesPerElement}function u(g,_){i.drawElements(n,_,s,g*o),e.update(_,n,1)}function h(g,_,S){S!==0&&(i.drawElementsInstanced(n,_,s,g*o,S),e.update(_,n,S))}function d(g,_,S){if(S===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,_,0,s,g,0,S);let v=0;for(let m=0;m<S;m++)v+=_[m];e.update(v,n,1)}function f(g,_,S,w){if(S===0)return;const v=t.get("WEBGL_multi_draw");if(v===null)for(let m=0;m<g.length;m++)h(g[m]/o,_[m],w[m]);else{v.multiDrawElementsInstancedWEBGL(n,_,0,s,g,0,w,0,S);let m=0;for(let T=0;T<S;T++)m+=_[T]*w[T];e.update(m,n,1)}}this.setMode=r,this.setIndex=a,this.render=u,this.renderInstances=h,this.renderMultiDraw=d,this.renderMultiDrawInstances=f}function gm(i){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,o,a){switch(e.calls++,o){case i.TRIANGLES:e.triangles+=a*(s/3);break;case i.LINES:e.lines+=a*(s/2);break;case i.LINE_STRIP:e.lines+=a*(s-1);break;case i.LINE_LOOP:e.lines+=a*s;break;case i.POINTS:e.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:r,update:n}}function _m(i,t,e){const n=new WeakMap,r=new oe;function s(o,a,u){const h=o.morphTargetInfluences,d=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,f=d!==void 0?d.length:0;let g=n.get(a);if(g===void 0||g.count!==f){let y=function(){b.dispose(),n.delete(a),a.removeEventListener("dispose",y)};var _=y;g!==void 0&&g.texture.dispose();const S=a.morphAttributes.position!==void 0,w=a.morphAttributes.normal!==void 0,v=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],T=a.morphAttributes.normal||[],p=a.morphAttributes.color||[];let l=0;S===!0&&(l=1),w===!0&&(l=2),v===!0&&(l=3);let x=a.attributes.position.count*l,c=1;x>t.maxTextureSize&&(c=Math.ceil(x/t.maxTextureSize),x=t.maxTextureSize);const P=new Float32Array(x*c*4*f),b=new Zu(P,x,c,f);b.type=zn,b.needsUpdate=!0;const M=l*4;for(let E=0;E<f;E++){const A=m[E],R=T[E],L=p[E],B=x*c*4*E;for(let F=0;F<A.count;F++){const z=F*M;S===!0&&(r.fromBufferAttribute(A,F),P[B+z+0]=r.x,P[B+z+1]=r.y,P[B+z+2]=r.z,P[B+z+3]=0),w===!0&&(r.fromBufferAttribute(R,F),P[B+z+4]=r.x,P[B+z+5]=r.y,P[B+z+6]=r.z,P[B+z+7]=0),v===!0&&(r.fromBufferAttribute(L,F),P[B+z+8]=r.x,P[B+z+9]=r.y,P[B+z+10]=r.z,P[B+z+11]=L.itemSize===4?r.w:1)}}g={count:f,texture:b,size:new Ft(x,c)},n.set(a,g),a.addEventListener("dispose",y)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)u.getUniforms().setValue(i,"morphTexture",o.morphTexture,e);else{let S=0;for(let v=0;v<h.length;v++)S+=h[v];const w=a.morphTargetsRelative?1:1-S;u.getUniforms().setValue(i,"morphTargetBaseInfluence",w),u.getUniforms().setValue(i,"morphTargetInfluences",h)}u.getUniforms().setValue(i,"morphTargetsTexture",g.texture,e),u.getUniforms().setValue(i,"morphTargetsTextureSize",g.size)}return{update:s}}function mm(i,t,e,n){let r=new WeakMap;function s(u){const h=n.render.frame,d=u.geometry,f=t.get(u,d);if(r.get(f)!==h&&(t.update(f),r.set(f,h)),u.isInstancedMesh&&(u.hasEventListener("dispose",a)===!1&&u.addEventListener("dispose",a),r.get(u)!==h&&(e.update(u.instanceMatrix,i.ARRAY_BUFFER),u.instanceColor!==null&&e.update(u.instanceColor,i.ARRAY_BUFFER),r.set(u,h))),u.isSkinnedMesh){const g=u.skeleton;r.get(g)!==h&&(g.update(),r.set(g,h))}return f}function o(){r=new WeakMap}function a(u){const h=u.target;h.removeEventListener("dispose",a),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:s,dispose:o}}const ld=new Ye,lh=new rd(1,1),cd=new Zu,hd=new Nf,ud=new id,ch=[],hh=[],uh=new Float32Array(16),dh=new Float32Array(9),fh=new Float32Array(4);function Ar(i,t,e){const n=i[0];if(n<=0||n>0)return i;const r=t*e;let s=ch[r];if(s===void 0&&(s=new Float32Array(r),ch[r]=s),t!==0){n.toArray(s,0);for(let o=1,a=0;o!==t;++o)a+=e,i[o].toArray(s,a)}return s}function Se(i,t){if(i.length!==t.length)return!1;for(let e=0,n=i.length;e<n;e++)if(i[e]!==t[e])return!1;return!0}function Ee(i,t){for(let e=0,n=t.length;e<n;e++)i[e]=t[e]}function xo(i,t){let e=hh[t];e===void 0&&(e=new Int32Array(t),hh[t]=e);for(let n=0;n!==t;++n)e[n]=i.allocateTextureUnit();return e}function vm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1f(this.addr,t),e[0]=t)}function xm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2fv(this.addr,t),Ee(e,t)}}function ym(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(i.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(Se(e,t))return;i.uniform3fv(this.addr,t),Ee(e,t)}}function Mm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4fv(this.addr,t),Ee(e,t)}}function Sm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix2fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;fh.set(n),i.uniformMatrix2fv(this.addr,!1,fh),Ee(e,n)}}function Em(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix3fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;dh.set(n),i.uniformMatrix3fv(this.addr,!1,dh),Ee(e,n)}}function wm(i,t){const e=this.cache,n=t.elements;if(n===void 0){if(Se(e,t))return;i.uniformMatrix4fv(this.addr,!1,t),Ee(e,t)}else{if(Se(e,n))return;uh.set(n),i.uniformMatrix4fv(this.addr,!1,uh),Ee(e,n)}}function Tm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1i(this.addr,t),e[0]=t)}function bm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2iv(this.addr,t),Ee(e,t)}}function Am(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3iv(this.addr,t),Ee(e,t)}}function Rm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4iv(this.addr,t),Ee(e,t)}}function Pm(i,t){const e=this.cache;e[0]!==t&&(i.uniform1ui(this.addr,t),e[0]=t)}function Cm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(i.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(Se(e,t))return;i.uniform2uiv(this.addr,t),Ee(e,t)}}function Dm(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(i.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(Se(e,t))return;i.uniform3uiv(this.addr,t),Ee(e,t)}}function Im(i,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(i.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(Se(e,t))return;i.uniform4uiv(this.addr,t),Ee(e,t)}}function Lm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r);let s;this.type===i.SAMPLER_2D_SHADOW?(lh.compareFunction=Yu,s=lh):s=ld,e.setTexture2D(t||s,r)}function Um(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture3D(t||hd,r)}function Nm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTextureCube(t||ud,r)}function Fm(i,t,e){const n=this.cache,r=e.allocateTextureUnit();n[0]!==r&&(i.uniform1i(this.addr,r),n[0]=r),e.setTexture2DArray(t||cd,r)}function Bm(i){switch(i){case 5126:return vm;case 35664:return xm;case 35665:return ym;case 35666:return Mm;case 35674:return Sm;case 35675:return Em;case 35676:return wm;case 5124:case 35670:return Tm;case 35667:case 35671:return bm;case 35668:case 35672:return Am;case 35669:case 35673:return Rm;case 5125:return Pm;case 36294:return Cm;case 36295:return Dm;case 36296:return Im;case 35678:case 36198:case 36298:case 36306:case 35682:return Lm;case 35679:case 36299:case 36307:return Um;case 35680:case 36300:case 36308:case 36293:return Nm;case 36289:case 36303:case 36311:case 36292:return Fm}}function Om(i,t){i.uniform1fv(this.addr,t)}function Vm(i,t){const e=Ar(t,this.size,2);i.uniform2fv(this.addr,e)}function zm(i,t){const e=Ar(t,this.size,3);i.uniform3fv(this.addr,e)}function Hm(i,t){const e=Ar(t,this.size,4);i.uniform4fv(this.addr,e)}function km(i,t){const e=Ar(t,this.size,4);i.uniformMatrix2fv(this.addr,!1,e)}function Gm(i,t){const e=Ar(t,this.size,9);i.uniformMatrix3fv(this.addr,!1,e)}function Wm(i,t){const e=Ar(t,this.size,16);i.uniformMatrix4fv(this.addr,!1,e)}function Xm(i,t){i.uniform1iv(this.addr,t)}function qm(i,t){i.uniform2iv(this.addr,t)}function Ym(i,t){i.uniform3iv(this.addr,t)}function $m(i,t){i.uniform4iv(this.addr,t)}function Zm(i,t){i.uniform1uiv(this.addr,t)}function jm(i,t){i.uniform2uiv(this.addr,t)}function Km(i,t){i.uniform3uiv(this.addr,t)}function Jm(i,t){i.uniform4uiv(this.addr,t)}function Qm(i,t,e){const n=this.cache,r=t.length,s=xo(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==r;++o)e.setTexture2D(t[o]||ld,s[o])}function tv(i,t,e){const n=this.cache,r=t.length,s=xo(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==r;++o)e.setTexture3D(t[o]||hd,s[o])}function ev(i,t,e){const n=this.cache,r=t.length,s=xo(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==r;++o)e.setTextureCube(t[o]||ud,s[o])}function nv(i,t,e){const n=this.cache,r=t.length,s=xo(e,r);Se(n,s)||(i.uniform1iv(this.addr,s),Ee(n,s));for(let o=0;o!==r;++o)e.setTexture2DArray(t[o]||cd,s[o])}function iv(i){switch(i){case 5126:return Om;case 35664:return Vm;case 35665:return zm;case 35666:return Hm;case 35674:return km;case 35675:return Gm;case 35676:return Wm;case 5124:case 35670:return Xm;case 35667:case 35671:return qm;case 35668:case 35672:return Ym;case 35669:case 35673:return $m;case 5125:return Zm;case 36294:return jm;case 36295:return Km;case 36296:return Jm;case 35678:case 36198:case 36298:case 36306:case 35682:return Qm;case 35679:case 36299:case 36307:return tv;case 35680:case 36300:case 36308:case 36293:return ev;case 36289:case 36303:case 36311:case 36292:return nv}}class rv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.setValue=Bm(e.type)}}class sv{constructor(t,e,n){this.id=t,this.addr=n,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=iv(e.type)}}class ov{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,n){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(t,e[a.id],n)}}}const oa=/(\w+)(\])?(\[|\.)?/g;function ph(i,t){i.seq.push(t),i.map[t.id]=t}function av(i,t,e){const n=i.name,r=n.length;for(oa.lastIndex=0;;){const s=oa.exec(n),o=oa.lastIndex;let a=s[1];const u=s[2]==="]",h=s[3];if(u&&(a=a|0),h===void 0||h==="["&&o+2===r){ph(e,h===void 0?new rv(a,i,t):new sv(a,i,t));break}else{let f=e.map[a];f===void 0&&(f=new ov(a),ph(e,f)),e=f}}}class ro{constructor(t,e){this.seq=[],this.map={};const n=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let r=0;r<n;++r){const s=t.getActiveUniform(e,r),o=t.getUniformLocation(e,s.name);av(s,o,this)}}setValue(t,e,n,r){const s=this.map[e];s!==void 0&&s.setValue(t,n,r)}setOptional(t,e,n){const r=e[n];r!==void 0&&this.setValue(t,n,r)}static upload(t,e,n,r){for(let s=0,o=e.length;s!==o;++s){const a=e[s],u=n[a.id];u.needsUpdate!==!1&&a.setValue(t,u.value,r)}}static seqWithValue(t,e){const n=[];for(let r=0,s=t.length;r!==s;++r){const o=t[r];o.id in e&&n.push(o)}return n}}function gh(i,t,e){const n=i.createShader(t);return i.shaderSource(n,e),i.compileShader(n),n}const lv=37297;let cv=0;function hv(i,t){const e=i.split(`
`),n=[],r=Math.max(t-6,0),s=Math.min(t+6,e.length);for(let o=r;o<s;o++){const a=o+1;n.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return n.join(`
`)}const _h=new qt;function uv(i){te._getMatrix(_h,te.workingColorSpace,i);const t=`mat3( ${_h.elements.map(e=>e.toFixed(4))} )`;switch(te.getTransfer(i)){case ho:return[t,"LinearTransferOETF"];case ie:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",i),[t,"LinearTransferOETF"]}}function mh(i,t,e){const n=i.getShaderParameter(t,i.COMPILE_STATUS),s=(i.getShaderInfoLog(t)||"").trim();if(n&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return e.toUpperCase()+`

`+s+`

`+hv(i.getShaderSource(t),a)}else return s}function dv(i,t){const e=uv(t);return[`vec4 ${i}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function fv(i,t){let e;switch(t){case lf:e="Linear";break;case cf:e="Reinhard";break;case hf:e="Cineon";break;case uf:e="ACESFilmic";break;case ff:e="AgX";break;case pf:e="Neutral";break;case df:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+i+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const As=new U;function pv(){te.getLuminanceCoefficients(As);const i=As.x.toFixed(4),t=As.y.toFixed(4),e=As.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function gv(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(qr).join(`
`)}function _v(i){const t=[];for(const e in i){const n=i[e];n!==!1&&t.push("#define "+e+" "+n)}return t.join(`
`)}function mv(i,t){const e={},n=i.getProgramParameter(t,i.ACTIVE_ATTRIBUTES);for(let r=0;r<n;r++){const s=i.getActiveAttrib(t,r),o=s.name;let a=1;s.type===i.FLOAT_MAT2&&(a=2),s.type===i.FLOAT_MAT3&&(a=3),s.type===i.FLOAT_MAT4&&(a=4),e[o]={type:s.type,location:i.getAttribLocation(t,o),locationSize:a}}return e}function qr(i){return i!==""}function vh(i,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return i.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function xh(i,t){return i.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const vv=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sl(i){return i.replace(vv,yv)}const xv=new Map;function yv(i,t){let e=$t[t];if(e===void 0){const n=xv.get(t);if(n!==void 0)e=$t[n],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,n);else throw new Error("Can not resolve #include <"+t+">")}return Sl(e)}const Mv=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function yh(i){return i.replace(Mv,Sv)}function Sv(i,t,e,n){let r="";for(let s=parseInt(t);s<parseInt(e);s++)r+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function Mh(i){let t=`precision ${i.precision} float;
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
	`;return i.precision==="highp"?t+=`
#define HIGH_PRECISION`:i.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ev(i){let t="SHADOWMAP_TYPE_BASIC";return i.shadowMapType===Fu?t="SHADOWMAP_TYPE_PCF":i.shadowMapType===Bu?t="SHADOWMAP_TYPE_PCF_SOFT":i.shadowMapType===Bn&&(t="SHADOWMAP_TYPE_VSM"),t}function wv(i){let t="ENVMAP_TYPE_CUBE";if(i.envMap)switch(i.envMapMode){case xr:case yr:t="ENVMAP_TYPE_CUBE";break;case vo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Tv(i){let t="ENVMAP_MODE_REFLECTION";if(i.envMap)switch(i.envMapMode){case yr:t="ENVMAP_MODE_REFRACTION";break}return t}function bv(i){let t="ENVMAP_BLENDING_NONE";if(i.envMap)switch(i.combine){case Vl:t="ENVMAP_BLENDING_MULTIPLY";break;case of:t="ENVMAP_BLENDING_MIX";break;case af:t="ENVMAP_BLENDING_ADD";break}return t}function Av(i){const t=i.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,n=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:n,maxMip:e}}function Rv(i,t,e,n){const r=i.getContext(),s=e.defines;let o=e.vertexShader,a=e.fragmentShader;const u=Ev(e),h=wv(e),d=Tv(e),f=bv(e),g=Av(e),_=gv(e),S=_v(s),w=r.createProgram();let v,m,T=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(v=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(qr).join(`
`),v.length>0&&(v+=`
`),m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S].filter(qr).join(`
`),m.length>0&&(m+=`
`)):(v=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+d:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(qr).join(`
`),m=[Mh(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,S,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",e.envMap?"#define "+f:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+u:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reversedDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==si?"#define TONE_MAPPING":"",e.toneMapping!==si?$t.tonemapping_pars_fragment:"",e.toneMapping!==si?fv("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",$t.colorspace_pars_fragment,dv("linearToOutputTexel",e.outputColorSpace),pv(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(qr).join(`
`)),o=Sl(o),o=vh(o,e),o=xh(o,e),a=Sl(a),a=vh(a,e),a=xh(a,e),o=yh(o),a=yh(a),e.isRawShaderMaterial!==!0&&(T=`#version 300 es
`,v=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+v,m=["#define varying in",e.glslVersion===Dc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Dc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);const p=T+v+o,l=T+m+a,x=gh(r,r.VERTEX_SHADER,p),c=gh(r,r.FRAGMENT_SHADER,l);r.attachShader(w,x),r.attachShader(w,c),e.index0AttributeName!==void 0?r.bindAttribLocation(w,0,e.index0AttributeName):e.morphTargets===!0&&r.bindAttribLocation(w,0,"position"),r.linkProgram(w);function P(E){if(i.debug.checkShaderErrors){const A=r.getProgramInfoLog(w)||"",R=r.getShaderInfoLog(x)||"",L=r.getShaderInfoLog(c)||"",B=A.trim(),F=R.trim(),z=L.trim();let O=!0,$=!0;if(r.getProgramParameter(w,r.LINK_STATUS)===!1)if(O=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(r,w,x,c);else{const et=mh(r,x,"vertex"),Q=mh(r,c,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(w,r.VALIDATE_STATUS)+`

Material Name: `+E.name+`
Material Type: `+E.type+`

Program Info Log: `+B+`
`+et+`
`+Q)}else B!==""?console.warn("THREE.WebGLProgram: Program Info Log:",B):(F===""||z==="")&&($=!1);$&&(E.diagnostics={runnable:O,programLog:B,vertexShader:{log:F,prefix:v},fragmentShader:{log:z,prefix:m}})}r.deleteShader(x),r.deleteShader(c),b=new ro(r,w),M=mv(r,w)}let b;this.getUniforms=function(){return b===void 0&&P(this),b};let M;this.getAttributes=function(){return M===void 0&&P(this),M};let y=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return y===!1&&(y=r.getProgramParameter(w,lv)),y},this.destroy=function(){n.releaseStatesOfProgram(this),r.deleteProgram(w),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=cv++,this.cacheKey=t,this.usedTimes=1,this.program=w,this.vertexShader=x,this.fragmentShader=c,this}let Pv=0;class Cv{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,n=t.fragmentShader,r=this._getShaderStage(e),s=this._getShaderStage(n),o=this._getShaderCacheForMaterial(t);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const n of e)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let n=e.get(t);return n===void 0&&(n=new Set,e.set(t,n)),n}_getShaderStage(t){const e=this.shaderCache;let n=e.get(t);return n===void 0&&(n=new Dv(t),e.set(t,n)),n}}class Dv{constructor(t){this.id=Pv++,this.code=t,this.usedTimes=0}}function Iv(i,t,e,n,r,s,o){const a=new ju,u=new Cv,h=new Set,d=[],f=r.logarithmicDepthBuffer,g=r.vertexTextures;let _=r.precision;const S={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(M){return h.add(M),M===0?"uv":`uv${M}`}function v(M,y,E,A,R){const L=A.fog,B=R.geometry,F=M.isMeshStandardMaterial?A.environment:null,z=(M.isMeshStandardMaterial?e:t).get(M.envMap||F),O=z&&z.mapping===vo?z.image.height:null,$=S[M.type];M.precision!==null&&(_=r.getMaxPrecision(M.precision),_!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",_,"instead."));const et=B.morphAttributes.position||B.morphAttributes.normal||B.morphAttributes.color,Q=et!==void 0?et.length:0;let rt=0;B.morphAttributes.position!==void 0&&(rt=1),B.morphAttributes.normal!==void 0&&(rt=2),B.morphAttributes.color!==void 0&&(rt=3);let Et,vt,W,nt;if($){const ee=Mn[$];Et=ee.vertexShader,vt=ee.fragmentShader}else Et=M.vertexShader,vt=M.fragmentShader,u.update(M),W=u.getVertexShaderID(M),nt=u.getFragmentShaderID(M);const J=i.getRenderTarget(),dt=i.state.buffers.depth.getReversed(),it=R.isInstancedMesh===!0,_t=R.isBatchedMesh===!0,Ut=!!M.map,Ot=!!M.matcap,N=!!z,It=!!M.aoMap,pt=!!M.lightMap,bt=!!M.bumpMap,ut=!!M.normalMap,Jt=!!M.displacementMap,at=!!M.emissiveMap,wt=!!M.metalnessMap,Gt=!!M.roughnessMap,kt=M.anisotropy>0,I=M.clearcoat>0,C=M.dispersion>0,H=M.iridescence>0,q=M.sheen>0,K=M.transmission>0,X=kt&&!!M.anisotropyMap,gt=I&&!!M.clearcoatMap,ft=I&&!!M.clearcoatNormalMap,Pt=I&&!!M.clearcoatRoughnessMap,Ct=H&&!!M.iridescenceMap,lt=H&&!!M.iridescenceThicknessMap,St=q&&!!M.sheenColorMap,zt=q&&!!M.sheenRoughnessMap,Lt=!!M.specularMap,yt=!!M.specularColorMap,Yt=!!M.specularIntensityMap,V=K&&!!M.transmissionMap,ct=K&&!!M.thicknessMap,mt=!!M.gradientMap,At=!!M.alphaMap,st=M.alphaTest>0,tt=!!M.alphaHash,Dt=!!M.extensions;let Wt=si;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Wt=i.toneMapping);const ae={shaderID:$,shaderType:M.type,shaderName:M.name,vertexShader:Et,fragmentShader:vt,defines:M.defines,customVertexShaderID:W,customFragmentShaderID:nt,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:_,batching:_t,batchingColor:_t&&R._colorsTexture!==null,instancing:it,instancingColor:it&&R.instanceColor!==null,instancingMorph:it&&R.morphTexture!==null,supportsVertexTextures:g,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Mr,alphaToCoverage:!!M.alphaToCoverage,map:Ut,matcap:Ot,envMap:N,envMapMode:N&&z.mapping,envMapCubeUVHeight:O,aoMap:It,lightMap:pt,bumpMap:bt,normalMap:ut,displacementMap:g&&Jt,emissiveMap:at,normalMapObjectSpace:ut&&M.normalMapType===vf,normalMapTangentSpace:ut&&M.normalMapType===ql,metalnessMap:wt,roughnessMap:Gt,anisotropy:kt,anisotropyMap:X,clearcoat:I,clearcoatMap:gt,clearcoatNormalMap:ft,clearcoatRoughnessMap:Pt,dispersion:C,iridescence:H,iridescenceMap:Ct,iridescenceThicknessMap:lt,sheen:q,sheenColorMap:St,sheenRoughnessMap:zt,specularMap:Lt,specularColorMap:yt,specularIntensityMap:Yt,transmission:K,transmissionMap:V,thicknessMap:ct,gradientMap:mt,opaque:M.transparent===!1&&M.blending===gr&&M.alphaToCoverage===!1,alphaMap:At,alphaTest:st,alphaHash:tt,combine:M.combine,mapUv:Ut&&w(M.map.channel),aoMapUv:It&&w(M.aoMap.channel),lightMapUv:pt&&w(M.lightMap.channel),bumpMapUv:bt&&w(M.bumpMap.channel),normalMapUv:ut&&w(M.normalMap.channel),displacementMapUv:Jt&&w(M.displacementMap.channel),emissiveMapUv:at&&w(M.emissiveMap.channel),metalnessMapUv:wt&&w(M.metalnessMap.channel),roughnessMapUv:Gt&&w(M.roughnessMap.channel),anisotropyMapUv:X&&w(M.anisotropyMap.channel),clearcoatMapUv:gt&&w(M.clearcoatMap.channel),clearcoatNormalMapUv:ft&&w(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Pt&&w(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Ct&&w(M.iridescenceMap.channel),iridescenceThicknessMapUv:lt&&w(M.iridescenceThicknessMap.channel),sheenColorMapUv:St&&w(M.sheenColorMap.channel),sheenRoughnessMapUv:zt&&w(M.sheenRoughnessMap.channel),specularMapUv:Lt&&w(M.specularMap.channel),specularColorMapUv:yt&&w(M.specularColorMap.channel),specularIntensityMapUv:Yt&&w(M.specularIntensityMap.channel),transmissionMapUv:V&&w(M.transmissionMap.channel),thicknessMapUv:ct&&w(M.thicknessMap.channel),alphaMapUv:At&&w(M.alphaMap.channel),vertexTangents:!!B.attributes.tangent&&(ut||kt),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!B.attributes.color&&B.attributes.color.itemSize===4,pointsUvs:R.isPoints===!0&&!!B.attributes.uv&&(Ut||At),fog:!!L,useFog:M.fog===!0,fogExp2:!!L&&L.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:f,reversedDepthBuffer:dt,skinning:R.isSkinnedMesh===!0,morphTargets:B.morphAttributes.position!==void 0,morphNormals:B.morphAttributes.normal!==void 0,morphColors:B.morphAttributes.color!==void 0,morphTargetsCount:Q,morphTextureStride:rt,numDirLights:y.directional.length,numPointLights:y.point.length,numSpotLights:y.spot.length,numSpotLightMaps:y.spotLightMap.length,numRectAreaLights:y.rectArea.length,numHemiLights:y.hemi.length,numDirLightShadows:y.directionalShadowMap.length,numPointLightShadows:y.pointShadowMap.length,numSpotLightShadows:y.spotShadowMap.length,numSpotLightShadowsWithMaps:y.numSpotLightShadowsWithMaps,numLightProbes:y.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:i.shadowMap.enabled&&E.length>0,shadowMapType:i.shadowMap.type,toneMapping:Wt,decodeVideoTexture:Ut&&M.map.isVideoTexture===!0&&te.getTransfer(M.map.colorSpace)===ie,decodeVideoTextureEmissive:at&&M.emissiveMap.isVideoTexture===!0&&te.getTransfer(M.emissiveMap.colorSpace)===ie,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===_n,flipSided:M.side===Be,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:Dt&&M.extensions.clipCullDistance===!0&&n.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Dt&&M.extensions.multiDraw===!0||_t)&&n.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:n.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return ae.vertexUv1s=h.has(1),ae.vertexUv2s=h.has(2),ae.vertexUv3s=h.has(3),h.clear(),ae}function m(M){const y=[];if(M.shaderID?y.push(M.shaderID):(y.push(M.customVertexShaderID),y.push(M.customFragmentShaderID)),M.defines!==void 0)for(const E in M.defines)y.push(E),y.push(M.defines[E]);return M.isRawShaderMaterial===!1&&(T(y,M),p(y,M),y.push(i.outputColorSpace)),y.push(M.customProgramCacheKey),y.join()}function T(M,y){M.push(y.precision),M.push(y.outputColorSpace),M.push(y.envMapMode),M.push(y.envMapCubeUVHeight),M.push(y.mapUv),M.push(y.alphaMapUv),M.push(y.lightMapUv),M.push(y.aoMapUv),M.push(y.bumpMapUv),M.push(y.normalMapUv),M.push(y.displacementMapUv),M.push(y.emissiveMapUv),M.push(y.metalnessMapUv),M.push(y.roughnessMapUv),M.push(y.anisotropyMapUv),M.push(y.clearcoatMapUv),M.push(y.clearcoatNormalMapUv),M.push(y.clearcoatRoughnessMapUv),M.push(y.iridescenceMapUv),M.push(y.iridescenceThicknessMapUv),M.push(y.sheenColorMapUv),M.push(y.sheenRoughnessMapUv),M.push(y.specularMapUv),M.push(y.specularColorMapUv),M.push(y.specularIntensityMapUv),M.push(y.transmissionMapUv),M.push(y.thicknessMapUv),M.push(y.combine),M.push(y.fogExp2),M.push(y.sizeAttenuation),M.push(y.morphTargetsCount),M.push(y.morphAttributeCount),M.push(y.numDirLights),M.push(y.numPointLights),M.push(y.numSpotLights),M.push(y.numSpotLightMaps),M.push(y.numHemiLights),M.push(y.numRectAreaLights),M.push(y.numDirLightShadows),M.push(y.numPointLightShadows),M.push(y.numSpotLightShadows),M.push(y.numSpotLightShadowsWithMaps),M.push(y.numLightProbes),M.push(y.shadowMapType),M.push(y.toneMapping),M.push(y.numClippingPlanes),M.push(y.numClipIntersection),M.push(y.depthPacking)}function p(M,y){a.disableAll(),y.supportsVertexTextures&&a.enable(0),y.instancing&&a.enable(1),y.instancingColor&&a.enable(2),y.instancingMorph&&a.enable(3),y.matcap&&a.enable(4),y.envMap&&a.enable(5),y.normalMapObjectSpace&&a.enable(6),y.normalMapTangentSpace&&a.enable(7),y.clearcoat&&a.enable(8),y.iridescence&&a.enable(9),y.alphaTest&&a.enable(10),y.vertexColors&&a.enable(11),y.vertexAlphas&&a.enable(12),y.vertexUv1s&&a.enable(13),y.vertexUv2s&&a.enable(14),y.vertexUv3s&&a.enable(15),y.vertexTangents&&a.enable(16),y.anisotropy&&a.enable(17),y.alphaHash&&a.enable(18),y.batching&&a.enable(19),y.dispersion&&a.enable(20),y.batchingColor&&a.enable(21),y.gradientMap&&a.enable(22),M.push(a.mask),a.disableAll(),y.fog&&a.enable(0),y.useFog&&a.enable(1),y.flatShading&&a.enable(2),y.logarithmicDepthBuffer&&a.enable(3),y.reversedDepthBuffer&&a.enable(4),y.skinning&&a.enable(5),y.morphTargets&&a.enable(6),y.morphNormals&&a.enable(7),y.morphColors&&a.enable(8),y.premultipliedAlpha&&a.enable(9),y.shadowMapEnabled&&a.enable(10),y.doubleSided&&a.enable(11),y.flipSided&&a.enable(12),y.useDepthPacking&&a.enable(13),y.dithering&&a.enable(14),y.transmission&&a.enable(15),y.sheen&&a.enable(16),y.opaque&&a.enable(17),y.pointsUvs&&a.enable(18),y.decodeVideoTexture&&a.enable(19),y.decodeVideoTextureEmissive&&a.enable(20),y.alphaToCoverage&&a.enable(21),M.push(a.mask)}function l(M){const y=S[M.type];let E;if(y){const A=Mn[y];E=$f.clone(A.uniforms)}else E=M.uniforms;return E}function x(M,y){let E;for(let A=0,R=d.length;A<R;A++){const L=d[A];if(L.cacheKey===y){E=L,++E.usedTimes;break}}return E===void 0&&(E=new Rv(i,y,M,s),d.push(E)),E}function c(M){if(--M.usedTimes===0){const y=d.indexOf(M);d[y]=d[d.length-1],d.pop(),M.destroy()}}function P(M){u.remove(M)}function b(){u.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:l,acquireProgram:x,releaseProgram:c,releaseShaderCache:P,programs:d,dispose:b}}function Lv(){let i=new WeakMap;function t(o){return i.has(o)}function e(o){let a=i.get(o);return a===void 0&&(a={},i.set(o,a)),a}function n(o){i.delete(o)}function r(o,a,u){i.get(o)[a]=u}function s(){i=new WeakMap}return{has:t,get:e,remove:n,update:r,dispose:s}}function Uv(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.material.id!==t.material.id?i.material.id-t.material.id:i.z!==t.z?i.z-t.z:i.id-t.id}function Sh(i,t){return i.groupOrder!==t.groupOrder?i.groupOrder-t.groupOrder:i.renderOrder!==t.renderOrder?i.renderOrder-t.renderOrder:i.z!==t.z?t.z-i.z:i.id-t.id}function Eh(){const i=[];let t=0;const e=[],n=[],r=[];function s(){t=0,e.length=0,n.length=0,r.length=0}function o(f,g,_,S,w,v){let m=i[t];return m===void 0?(m={id:f.id,object:f,geometry:g,material:_,groupOrder:S,renderOrder:f.renderOrder,z:w,group:v},i[t]=m):(m.id=f.id,m.object=f,m.geometry=g,m.material=_,m.groupOrder=S,m.renderOrder=f.renderOrder,m.z=w,m.group=v),t++,m}function a(f,g,_,S,w,v){const m=o(f,g,_,S,w,v);_.transmission>0?n.push(m):_.transparent===!0?r.push(m):e.push(m)}function u(f,g,_,S,w,v){const m=o(f,g,_,S,w,v);_.transmission>0?n.unshift(m):_.transparent===!0?r.unshift(m):e.unshift(m)}function h(f,g){e.length>1&&e.sort(f||Uv),n.length>1&&n.sort(g||Sh),r.length>1&&r.sort(g||Sh)}function d(){for(let f=t,g=i.length;f<g;f++){const _=i[f];if(_.id===null)break;_.id=null,_.object=null,_.geometry=null,_.material=null,_.group=null}}return{opaque:e,transmissive:n,transparent:r,init:s,push:a,unshift:u,finish:d,sort:h}}function Nv(){let i=new WeakMap;function t(n,r){const s=i.get(n);let o;return s===void 0?(o=new Eh,i.set(n,[o])):r>=s.length?(o=new Eh,s.push(o)):o=s[r],o}function e(){i=new WeakMap}return{get:t,dispose:e}}function Fv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new U,color:new Zt};break;case"SpotLight":e={position:new U,direction:new U,color:new Zt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new U,color:new Zt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new U,skyColor:new Zt,groundColor:new Zt};break;case"RectAreaLight":e={color:new Zt,position:new U,halfWidth:new U,halfHeight:new U};break}return i[t.id]=e,e}}}function Bv(){const i={};return{get:function(t){if(i[t.id]!==void 0)return i[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ft,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[t.id]=e,e}}}let Ov=0;function Vv(i,t){return(t.castShadow?2:0)-(i.castShadow?2:0)+(t.map?1:0)-(i.map?1:0)}function zv(i){const t=new Fv,e=Bv(),n={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)n.probe.push(new U);const r=new U,s=new Kt,o=new Kt;function a(h){let d=0,f=0,g=0;for(let M=0;M<9;M++)n.probe[M].set(0,0,0);let _=0,S=0,w=0,v=0,m=0,T=0,p=0,l=0,x=0,c=0,P=0;h.sort(Vv);for(let M=0,y=h.length;M<y;M++){const E=h[M],A=E.color,R=E.intensity,L=E.distance,B=E.shadow&&E.shadow.map?E.shadow.map.texture:null;if(E.isAmbientLight)d+=A.r*R,f+=A.g*R,g+=A.b*R;else if(E.isLightProbe){for(let F=0;F<9;F++)n.probe[F].addScaledVector(E.sh.coefficients[F],R);P++}else if(E.isDirectionalLight){const F=t.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),E.castShadow){const z=E.shadow,O=e.get(E);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.directionalShadow[_]=O,n.directionalShadowMap[_]=B,n.directionalShadowMatrix[_]=E.shadow.matrix,T++}n.directional[_]=F,_++}else if(E.isSpotLight){const F=t.get(E);F.position.setFromMatrixPosition(E.matrixWorld),F.color.copy(A).multiplyScalar(R),F.distance=L,F.coneCos=Math.cos(E.angle),F.penumbraCos=Math.cos(E.angle*(1-E.penumbra)),F.decay=E.decay,n.spot[w]=F;const z=E.shadow;if(E.map&&(n.spotLightMap[x]=E.map,x++,z.updateMatrices(E),E.castShadow&&c++),n.spotLightMatrix[w]=z.matrix,E.castShadow){const O=e.get(E);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,n.spotShadow[w]=O,n.spotShadowMap[w]=B,l++}w++}else if(E.isRectAreaLight){const F=t.get(E);F.color.copy(A).multiplyScalar(R),F.halfWidth.set(E.width*.5,0,0),F.halfHeight.set(0,E.height*.5,0),n.rectArea[v]=F,v++}else if(E.isPointLight){const F=t.get(E);if(F.color.copy(E.color).multiplyScalar(E.intensity),F.distance=E.distance,F.decay=E.decay,E.castShadow){const z=E.shadow,O=e.get(E);O.shadowIntensity=z.intensity,O.shadowBias=z.bias,O.shadowNormalBias=z.normalBias,O.shadowRadius=z.radius,O.shadowMapSize=z.mapSize,O.shadowCameraNear=z.camera.near,O.shadowCameraFar=z.camera.far,n.pointShadow[S]=O,n.pointShadowMap[S]=B,n.pointShadowMatrix[S]=E.shadow.matrix,p++}n.point[S]=F,S++}else if(E.isHemisphereLight){const F=t.get(E);F.skyColor.copy(E.color).multiplyScalar(R),F.groundColor.copy(E.groundColor).multiplyScalar(R),n.hemi[m]=F,m++}}v>0&&(i.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=xt.LTC_FLOAT_1,n.rectAreaLTC2=xt.LTC_FLOAT_2):(n.rectAreaLTC1=xt.LTC_HALF_1,n.rectAreaLTC2=xt.LTC_HALF_2)),n.ambient[0]=d,n.ambient[1]=f,n.ambient[2]=g;const b=n.hash;(b.directionalLength!==_||b.pointLength!==S||b.spotLength!==w||b.rectAreaLength!==v||b.hemiLength!==m||b.numDirectionalShadows!==T||b.numPointShadows!==p||b.numSpotShadows!==l||b.numSpotMaps!==x||b.numLightProbes!==P)&&(n.directional.length=_,n.spot.length=w,n.rectArea.length=v,n.point.length=S,n.hemi.length=m,n.directionalShadow.length=T,n.directionalShadowMap.length=T,n.pointShadow.length=p,n.pointShadowMap.length=p,n.spotShadow.length=l,n.spotShadowMap.length=l,n.directionalShadowMatrix.length=T,n.pointShadowMatrix.length=p,n.spotLightMatrix.length=l+x-c,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=c,n.numLightProbes=P,b.directionalLength=_,b.pointLength=S,b.spotLength=w,b.rectAreaLength=v,b.hemiLength=m,b.numDirectionalShadows=T,b.numPointShadows=p,b.numSpotShadows=l,b.numSpotMaps=x,b.numLightProbes=P,n.version=Ov++)}function u(h,d){let f=0,g=0,_=0,S=0,w=0;const v=d.matrixWorldInverse;for(let m=0,T=h.length;m<T;m++){const p=h[m];if(p.isDirectionalLight){const l=n.directional[f];l.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),l.direction.sub(r),l.direction.transformDirection(v),f++}else if(p.isSpotLight){const l=n.spot[_];l.position.setFromMatrixPosition(p.matrixWorld),l.position.applyMatrix4(v),l.direction.setFromMatrixPosition(p.matrixWorld),r.setFromMatrixPosition(p.target.matrixWorld),l.direction.sub(r),l.direction.transformDirection(v),_++}else if(p.isRectAreaLight){const l=n.rectArea[S];l.position.setFromMatrixPosition(p.matrixWorld),l.position.applyMatrix4(v),o.identity(),s.copy(p.matrixWorld),s.premultiply(v),o.extractRotation(s),l.halfWidth.set(p.width*.5,0,0),l.halfHeight.set(0,p.height*.5,0),l.halfWidth.applyMatrix4(o),l.halfHeight.applyMatrix4(o),S++}else if(p.isPointLight){const l=n.point[g];l.position.setFromMatrixPosition(p.matrixWorld),l.position.applyMatrix4(v),g++}else if(p.isHemisphereLight){const l=n.hemi[w];l.direction.setFromMatrixPosition(p.matrixWorld),l.direction.transformDirection(v),w++}}}return{setup:a,setupView:u,state:n}}function wh(i){const t=new zv(i),e=[],n=[];function r(d){h.camera=d,e.length=0,n.length=0}function s(d){e.push(d)}function o(d){n.push(d)}function a(){t.setup(e)}function u(d){t.setupView(e,d)}const h={lightsArray:e,shadowsArray:n,camera:null,lights:t,transmissionRenderTarget:{}};return{init:r,state:h,setupLights:a,setupLightsView:u,pushLight:s,pushShadow:o}}function Hv(i){let t=new WeakMap;function e(r,s=0){const o=t.get(r);let a;return o===void 0?(a=new wh(i),t.set(r,[a])):s>=o.length?(a=new wh(i),o.push(a)):a=o[s],a}function n(){t=new WeakMap}return{get:e,dispose:n}}const kv=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Gv=`uniform sampler2D shadow_pass;
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
}`;function Wv(i,t,e){let n=new jl;const r=new Ft,s=new Ft,o=new oe,a=new op({depthPacking:mf}),u=new ap,h={},d=e.maxTextureSize,f={[bn]:Be,[Be]:bn,[_n]:_n},g=new oi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ft},radius:{value:4}},vertexShader:kv,fragmentShader:Gv}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const S=new Gn;S.setAttribute("position",new Pe(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const w=new Xe(S,g),v=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Fu;let m=this.type;this.render=function(c,P,b){if(v.enabled===!1||v.autoUpdate===!1&&v.needsUpdate===!1||c.length===0)return;const M=i.getRenderTarget(),y=i.getActiveCubeFace(),E=i.getActiveMipmapLevel(),A=i.state;A.setBlending(ri),A.buffers.depth.getReversed()?A.buffers.color.setClear(0,0,0,0):A.buffers.color.setClear(1,1,1,1),A.buffers.depth.setTest(!0),A.setScissorTest(!1);const R=m!==Bn&&this.type===Bn,L=m===Bn&&this.type!==Bn;for(let B=0,F=c.length;B<F;B++){const z=c[B],O=z.shadow;if(O===void 0){console.warn("THREE.WebGLShadowMap:",z,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const $=O.getFrameExtents();if(r.multiply($),s.copy(O.mapSize),(r.x>d||r.y>d)&&(r.x>d&&(s.x=Math.floor(d/$.x),r.x=s.x*$.x,O.mapSize.x=s.x),r.y>d&&(s.y=Math.floor(d/$.y),r.y=s.y*$.y,O.mapSize.y=s.y)),O.map===null||R===!0||L===!0){const Q=this.type!==Bn?{minFilter:vn,magFilter:vn}:{};O.map!==null&&O.map.dispose(),O.map=new Di(r.x,r.y,Q),O.map.texture.name=z.name+".shadowMap",O.camera.updateProjectionMatrix()}i.setRenderTarget(O.map),i.clear();const et=O.getViewportCount();for(let Q=0;Q<et;Q++){const rt=O.getViewport(Q);o.set(s.x*rt.x,s.y*rt.y,s.x*rt.z,s.y*rt.w),A.viewport(o),O.updateMatrices(z,Q),n=O.getFrustum(),l(P,b,O.camera,z,this.type)}O.isPointLightShadow!==!0&&this.type===Bn&&T(O,b),O.needsUpdate=!1}m=this.type,v.needsUpdate=!1,i.setRenderTarget(M,y,E)};function T(c,P){const b=t.update(w);g.defines.VSM_SAMPLES!==c.blurSamples&&(g.defines.VSM_SAMPLES=c.blurSamples,_.defines.VSM_SAMPLES=c.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),c.mapPass===null&&(c.mapPass=new Di(r.x,r.y)),g.uniforms.shadow_pass.value=c.map.texture,g.uniforms.resolution.value=c.mapSize,g.uniforms.radius.value=c.radius,i.setRenderTarget(c.mapPass),i.clear(),i.renderBufferDirect(P,null,b,g,w,null),_.uniforms.shadow_pass.value=c.mapPass.texture,_.uniforms.resolution.value=c.mapSize,_.uniforms.radius.value=c.radius,i.setRenderTarget(c.map),i.clear(),i.renderBufferDirect(P,null,b,_,w,null)}function p(c,P,b,M){let y=null;const E=b.isPointLight===!0?c.customDistanceMaterial:c.customDepthMaterial;if(E!==void 0)y=E;else if(y=b.isPointLight===!0?u:a,i.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0||P.alphaToCoverage===!0){const A=y.uuid,R=P.uuid;let L=h[A];L===void 0&&(L={},h[A]=L);let B=L[R];B===void 0&&(B=y.clone(),L[R]=B,P.addEventListener("dispose",x)),y=B}if(y.visible=P.visible,y.wireframe=P.wireframe,M===Bn?y.side=P.shadowSide!==null?P.shadowSide:P.side:y.side=P.shadowSide!==null?P.shadowSide:f[P.side],y.alphaMap=P.alphaMap,y.alphaTest=P.alphaToCoverage===!0?.5:P.alphaTest,y.map=P.map,y.clipShadows=P.clipShadows,y.clippingPlanes=P.clippingPlanes,y.clipIntersection=P.clipIntersection,y.displacementMap=P.displacementMap,y.displacementScale=P.displacementScale,y.displacementBias=P.displacementBias,y.wireframeLinewidth=P.wireframeLinewidth,y.linewidth=P.linewidth,b.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const A=i.properties.get(y);A.light=b}return y}function l(c,P,b,M,y){if(c.visible===!1)return;if(c.layers.test(P.layers)&&(c.isMesh||c.isLine||c.isPoints)&&(c.castShadow||c.receiveShadow&&y===Bn)&&(!c.frustumCulled||n.intersectsObject(c))){c.modelViewMatrix.multiplyMatrices(b.matrixWorldInverse,c.matrixWorld);const R=t.update(c),L=c.material;if(Array.isArray(L)){const B=R.groups;for(let F=0,z=B.length;F<z;F++){const O=B[F],$=L[O.materialIndex];if($&&$.visible){const et=p(c,$,M,y);c.onBeforeShadow(i,c,P,b,R,et,O),i.renderBufferDirect(b,null,R,et,c,O),c.onAfterShadow(i,c,P,b,R,et,O)}}}else if(L.visible){const B=p(c,L,M,y);c.onBeforeShadow(i,c,P,b,R,B,null),i.renderBufferDirect(b,null,R,B,c,null),c.onAfterShadow(i,c,P,b,R,B,null)}}const A=c.children;for(let R=0,L=A.length;R<L;R++)l(A[R],P,b,M,y)}function x(c){c.target.removeEventListener("dispose",x);for(const b in h){const M=h[b],y=c.target.uuid;y in M&&(M[y].dispose(),delete M[y])}}}const Xv={[Oa]:Va,[za]:Ga,[Ha]:Wa,[vr]:ka,[Va]:Oa,[Ga]:za,[Wa]:Ha,[ka]:vr};function qv(i,t){function e(){let V=!1;const ct=new oe;let mt=null;const At=new oe(0,0,0,0);return{setMask:function(st){mt!==st&&!V&&(i.colorMask(st,st,st,st),mt=st)},setLocked:function(st){V=st},setClear:function(st,tt,Dt,Wt,ae){ae===!0&&(st*=Wt,tt*=Wt,Dt*=Wt),ct.set(st,tt,Dt,Wt),At.equals(ct)===!1&&(i.clearColor(st,tt,Dt,Wt),At.copy(ct))},reset:function(){V=!1,mt=null,At.set(-1,0,0,0)}}}function n(){let V=!1,ct=!1,mt=null,At=null,st=null;return{setReversed:function(tt){if(ct!==tt){const Dt=t.get("EXT_clip_control");tt?Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.ZERO_TO_ONE_EXT):Dt.clipControlEXT(Dt.LOWER_LEFT_EXT,Dt.NEGATIVE_ONE_TO_ONE_EXT),ct=tt;const Wt=st;st=null,this.setClear(Wt)}},getReversed:function(){return ct},setTest:function(tt){tt?J(i.DEPTH_TEST):dt(i.DEPTH_TEST)},setMask:function(tt){mt!==tt&&!V&&(i.depthMask(tt),mt=tt)},setFunc:function(tt){if(ct&&(tt=Xv[tt]),At!==tt){switch(tt){case Oa:i.depthFunc(i.NEVER);break;case Va:i.depthFunc(i.ALWAYS);break;case za:i.depthFunc(i.LESS);break;case vr:i.depthFunc(i.LEQUAL);break;case Ha:i.depthFunc(i.EQUAL);break;case ka:i.depthFunc(i.GEQUAL);break;case Ga:i.depthFunc(i.GREATER);break;case Wa:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}At=tt}},setLocked:function(tt){V=tt},setClear:function(tt){st!==tt&&(ct&&(tt=1-tt),i.clearDepth(tt),st=tt)},reset:function(){V=!1,mt=null,At=null,st=null,ct=!1}}}function r(){let V=!1,ct=null,mt=null,At=null,st=null,tt=null,Dt=null,Wt=null,ae=null;return{setTest:function(ee){V||(ee?J(i.STENCIL_TEST):dt(i.STENCIL_TEST))},setMask:function(ee){ct!==ee&&!V&&(i.stencilMask(ee),ct=ee)},setFunc:function(ee,Rn,yn){(mt!==ee||At!==Rn||st!==yn)&&(i.stencilFunc(ee,Rn,yn),mt=ee,At=Rn,st=yn)},setOp:function(ee,Rn,yn){(tt!==ee||Dt!==Rn||Wt!==yn)&&(i.stencilOp(ee,Rn,yn),tt=ee,Dt=Rn,Wt=yn)},setLocked:function(ee){V=ee},setClear:function(ee){ae!==ee&&(i.clearStencil(ee),ae=ee)},reset:function(){V=!1,ct=null,mt=null,At=null,st=null,tt=null,Dt=null,Wt=null,ae=null}}}const s=new e,o=new n,a=new r,u=new WeakMap,h=new WeakMap;let d={},f={},g=new WeakMap,_=[],S=null,w=!1,v=null,m=null,T=null,p=null,l=null,x=null,c=null,P=new Zt(0,0,0),b=0,M=!1,y=null,E=null,A=null,R=null,L=null;const B=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let F=!1,z=0;const O=i.getParameter(i.VERSION);O.indexOf("WebGL")!==-1?(z=parseFloat(/^WebGL (\d)/.exec(O)[1]),F=z>=1):O.indexOf("OpenGL ES")!==-1&&(z=parseFloat(/^OpenGL ES (\d)/.exec(O)[1]),F=z>=2);let $=null,et={};const Q=i.getParameter(i.SCISSOR_BOX),rt=i.getParameter(i.VIEWPORT),Et=new oe().fromArray(Q),vt=new oe().fromArray(rt);function W(V,ct,mt,At){const st=new Uint8Array(4),tt=i.createTexture();i.bindTexture(V,tt),i.texParameteri(V,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(V,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let Dt=0;Dt<mt;Dt++)V===i.TEXTURE_3D||V===i.TEXTURE_2D_ARRAY?i.texImage3D(ct,0,i.RGBA,1,1,At,0,i.RGBA,i.UNSIGNED_BYTE,st):i.texImage2D(ct+Dt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,st);return tt}const nt={};nt[i.TEXTURE_2D]=W(i.TEXTURE_2D,i.TEXTURE_2D,1),nt[i.TEXTURE_CUBE_MAP]=W(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),nt[i.TEXTURE_2D_ARRAY]=W(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),nt[i.TEXTURE_3D]=W(i.TEXTURE_3D,i.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(i.DEPTH_TEST),o.setFunc(vr),bt(!1),ut(Tc),J(i.CULL_FACE),It(ri);function J(V){d[V]!==!0&&(i.enable(V),d[V]=!0)}function dt(V){d[V]!==!1&&(i.disable(V),d[V]=!1)}function it(V,ct){return f[V]!==ct?(i.bindFramebuffer(V,ct),f[V]=ct,V===i.DRAW_FRAMEBUFFER&&(f[i.FRAMEBUFFER]=ct),V===i.FRAMEBUFFER&&(f[i.DRAW_FRAMEBUFFER]=ct),!0):!1}function _t(V,ct){let mt=_,At=!1;if(V){mt=g.get(ct),mt===void 0&&(mt=[],g.set(ct,mt));const st=V.textures;if(mt.length!==st.length||mt[0]!==i.COLOR_ATTACHMENT0){for(let tt=0,Dt=st.length;tt<Dt;tt++)mt[tt]=i.COLOR_ATTACHMENT0+tt;mt.length=st.length,At=!0}}else mt[0]!==i.BACK&&(mt[0]=i.BACK,At=!0);At&&i.drawBuffers(mt)}function Ut(V){return S!==V?(i.useProgram(V),S=V,!0):!1}const Ot={[Ei]:i.FUNC_ADD,[kd]:i.FUNC_SUBTRACT,[Gd]:i.FUNC_REVERSE_SUBTRACT};Ot[Wd]=i.MIN,Ot[Xd]=i.MAX;const N={[qd]:i.ZERO,[Yd]:i.ONE,[$d]:i.SRC_COLOR,[Fa]:i.SRC_ALPHA,[tf]:i.SRC_ALPHA_SATURATE,[Jd]:i.DST_COLOR,[jd]:i.DST_ALPHA,[Zd]:i.ONE_MINUS_SRC_COLOR,[Ba]:i.ONE_MINUS_SRC_ALPHA,[Qd]:i.ONE_MINUS_DST_COLOR,[Kd]:i.ONE_MINUS_DST_ALPHA,[ef]:i.CONSTANT_COLOR,[nf]:i.ONE_MINUS_CONSTANT_COLOR,[rf]:i.CONSTANT_ALPHA,[sf]:i.ONE_MINUS_CONSTANT_ALPHA};function It(V,ct,mt,At,st,tt,Dt,Wt,ae,ee){if(V===ri){w===!0&&(dt(i.BLEND),w=!1);return}if(w===!1&&(J(i.BLEND),w=!0),V!==Hd){if(V!==v||ee!==M){if((m!==Ei||l!==Ei)&&(i.blendEquation(i.FUNC_ADD),m=Ei,l=Ei),ee)switch(V){case gr:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bc:i.blendFunc(i.ONE,i.ONE);break;case Ac:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Rc:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}else switch(V){case gr:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case bc:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ac:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Rc:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",V);break}T=null,p=null,x=null,c=null,P.set(0,0,0),b=0,v=V,M=ee}return}st=st||ct,tt=tt||mt,Dt=Dt||At,(ct!==m||st!==l)&&(i.blendEquationSeparate(Ot[ct],Ot[st]),m=ct,l=st),(mt!==T||At!==p||tt!==x||Dt!==c)&&(i.blendFuncSeparate(N[mt],N[At],N[tt],N[Dt]),T=mt,p=At,x=tt,c=Dt),(Wt.equals(P)===!1||ae!==b)&&(i.blendColor(Wt.r,Wt.g,Wt.b,ae),P.copy(Wt),b=ae),v=V,M=!1}function pt(V,ct){V.side===_n?dt(i.CULL_FACE):J(i.CULL_FACE);let mt=V.side===Be;ct&&(mt=!mt),bt(mt),V.blending===gr&&V.transparent===!1?It(ri):It(V.blending,V.blendEquation,V.blendSrc,V.blendDst,V.blendEquationAlpha,V.blendSrcAlpha,V.blendDstAlpha,V.blendColor,V.blendAlpha,V.premultipliedAlpha),o.setFunc(V.depthFunc),o.setTest(V.depthTest),o.setMask(V.depthWrite),s.setMask(V.colorWrite);const At=V.stencilWrite;a.setTest(At),At&&(a.setMask(V.stencilWriteMask),a.setFunc(V.stencilFunc,V.stencilRef,V.stencilFuncMask),a.setOp(V.stencilFail,V.stencilZFail,V.stencilZPass)),at(V.polygonOffset,V.polygonOffsetFactor,V.polygonOffsetUnits),V.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):dt(i.SAMPLE_ALPHA_TO_COVERAGE)}function bt(V){y!==V&&(V?i.frontFace(i.CW):i.frontFace(i.CCW),y=V)}function ut(V){V!==Vd?(J(i.CULL_FACE),V!==E&&(V===Tc?i.cullFace(i.BACK):V===zd?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):dt(i.CULL_FACE),E=V}function Jt(V){V!==A&&(F&&i.lineWidth(V),A=V)}function at(V,ct,mt){V?(J(i.POLYGON_OFFSET_FILL),(R!==ct||L!==mt)&&(i.polygonOffset(ct,mt),R=ct,L=mt)):dt(i.POLYGON_OFFSET_FILL)}function wt(V){V?J(i.SCISSOR_TEST):dt(i.SCISSOR_TEST)}function Gt(V){V===void 0&&(V=i.TEXTURE0+B-1),$!==V&&(i.activeTexture(V),$=V)}function kt(V,ct,mt){mt===void 0&&($===null?mt=i.TEXTURE0+B-1:mt=$);let At=et[mt];At===void 0&&(At={type:void 0,texture:void 0},et[mt]=At),(At.type!==V||At.texture!==ct)&&($!==mt&&(i.activeTexture(mt),$=mt),i.bindTexture(V,ct||nt[V]),At.type=V,At.texture=ct)}function I(){const V=et[$];V!==void 0&&V.type!==void 0&&(i.bindTexture(V.type,null),V.type=void 0,V.texture=void 0)}function C(){try{i.compressedTexImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function H(){try{i.compressedTexImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function q(){try{i.texSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function K(){try{i.texSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function X(){try{i.compressedTexSubImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function gt(){try{i.compressedTexSubImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function ft(){try{i.texStorage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Pt(){try{i.texStorage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function Ct(){try{i.texImage2D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function lt(){try{i.texImage3D(...arguments)}catch(V){console.error("THREE.WebGLState:",V)}}function St(V){Et.equals(V)===!1&&(i.scissor(V.x,V.y,V.z,V.w),Et.copy(V))}function zt(V){vt.equals(V)===!1&&(i.viewport(V.x,V.y,V.z,V.w),vt.copy(V))}function Lt(V,ct){let mt=h.get(ct);mt===void 0&&(mt=new WeakMap,h.set(ct,mt));let At=mt.get(V);At===void 0&&(At=i.getUniformBlockIndex(ct,V.name),mt.set(V,At))}function yt(V,ct){const At=h.get(ct).get(V);u.get(ct)!==At&&(i.uniformBlockBinding(ct,At,V.__bindingPointIndex),u.set(ct,At))}function Yt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),o.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),d={},$=null,et={},f={},g=new WeakMap,_=[],S=null,w=!1,v=null,m=null,T=null,p=null,l=null,x=null,c=null,P=new Zt(0,0,0),b=0,M=!1,y=null,E=null,A=null,R=null,L=null,Et.set(0,0,i.canvas.width,i.canvas.height),vt.set(0,0,i.canvas.width,i.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:dt,bindFramebuffer:it,drawBuffers:_t,useProgram:Ut,setBlending:It,setMaterial:pt,setFlipSided:bt,setCullFace:ut,setLineWidth:Jt,setPolygonOffset:at,setScissorTest:wt,activeTexture:Gt,bindTexture:kt,unbindTexture:I,compressedTexImage2D:C,compressedTexImage3D:H,texImage2D:Ct,texImage3D:lt,updateUBOMapping:Lt,uniformBlockBinding:yt,texStorage2D:ft,texStorage3D:Pt,texSubImage2D:q,texSubImage3D:K,compressedTexSubImage2D:X,compressedTexSubImage3D:gt,scissor:St,viewport:zt,reset:Yt}}function Yv(i,t,e,n,r,s,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,u=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new Ft,d=new WeakMap;let f;const g=new WeakMap;let _=!1;try{_=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function S(I,C){return _?new OffscreenCanvas(I,C):fo("canvas")}function w(I,C,H){let q=1;const K=kt(I);if((K.width>H||K.height>H)&&(q=H/Math.max(K.width,K.height)),q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const X=Math.floor(q*K.width),gt=Math.floor(q*K.height);f===void 0&&(f=S(X,gt));const ft=C?S(X,gt):f;return ft.width=X,ft.height=gt,ft.getContext("2d").drawImage(I,0,0,X,gt),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+K.width+"x"+K.height+") to ("+X+"x"+gt+")."),ft}else return"data"in I&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+K.width+"x"+K.height+")."),I;return I}function v(I){return I.generateMipmaps}function m(I){i.generateMipmap(I)}function T(I){return I.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?i.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function p(I,C,H,q,K=!1){if(I!==null){if(i[I]!==void 0)return i[I];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let X=C;if(C===i.RED&&(H===i.FLOAT&&(X=i.R32F),H===i.HALF_FLOAT&&(X=i.R16F),H===i.UNSIGNED_BYTE&&(X=i.R8)),C===i.RED_INTEGER&&(H===i.UNSIGNED_BYTE&&(X=i.R8UI),H===i.UNSIGNED_SHORT&&(X=i.R16UI),H===i.UNSIGNED_INT&&(X=i.R32UI),H===i.BYTE&&(X=i.R8I),H===i.SHORT&&(X=i.R16I),H===i.INT&&(X=i.R32I)),C===i.RG&&(H===i.FLOAT&&(X=i.RG32F),H===i.HALF_FLOAT&&(X=i.RG16F),H===i.UNSIGNED_BYTE&&(X=i.RG8)),C===i.RG_INTEGER&&(H===i.UNSIGNED_BYTE&&(X=i.RG8UI),H===i.UNSIGNED_SHORT&&(X=i.RG16UI),H===i.UNSIGNED_INT&&(X=i.RG32UI),H===i.BYTE&&(X=i.RG8I),H===i.SHORT&&(X=i.RG16I),H===i.INT&&(X=i.RG32I)),C===i.RGB_INTEGER&&(H===i.UNSIGNED_BYTE&&(X=i.RGB8UI),H===i.UNSIGNED_SHORT&&(X=i.RGB16UI),H===i.UNSIGNED_INT&&(X=i.RGB32UI),H===i.BYTE&&(X=i.RGB8I),H===i.SHORT&&(X=i.RGB16I),H===i.INT&&(X=i.RGB32I)),C===i.RGBA_INTEGER&&(H===i.UNSIGNED_BYTE&&(X=i.RGBA8UI),H===i.UNSIGNED_SHORT&&(X=i.RGBA16UI),H===i.UNSIGNED_INT&&(X=i.RGBA32UI),H===i.BYTE&&(X=i.RGBA8I),H===i.SHORT&&(X=i.RGBA16I),H===i.INT&&(X=i.RGBA32I)),C===i.RGB&&H===i.UNSIGNED_INT_5_9_9_9_REV&&(X=i.RGB9_E5),C===i.RGBA){const gt=K?ho:te.getTransfer(q);H===i.FLOAT&&(X=i.RGBA32F),H===i.HALF_FLOAT&&(X=i.RGBA16F),H===i.UNSIGNED_BYTE&&(X=gt===ie?i.SRGB8_ALPHA8:i.RGBA8),H===i.UNSIGNED_SHORT_4_4_4_4&&(X=i.RGBA4),H===i.UNSIGNED_SHORT_5_5_5_1&&(X=i.RGB5_A1)}return(X===i.R16F||X===i.R32F||X===i.RG16F||X===i.RG32F||X===i.RGBA16F||X===i.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function l(I,C){let H;return I?C===null||C===Pi||C===jr?H=i.DEPTH24_STENCIL8:C===zn?H=i.DEPTH32F_STENCIL8:C===Zr&&(H=i.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):C===null||C===Pi||C===jr?H=i.DEPTH_COMPONENT24:C===zn?H=i.DEPTH_COMPONENT32F:C===Zr&&(H=i.DEPTH_COMPONENT16),H}function x(I,C){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==vn&&I.minFilter!==En?Math.log2(Math.max(C.width,C.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?C.mipmaps.length:1}function c(I){const C=I.target;C.removeEventListener("dispose",c),b(C),C.isVideoTexture&&d.delete(C)}function P(I){const C=I.target;C.removeEventListener("dispose",P),y(C)}function b(I){const C=n.get(I);if(C.__webglInit===void 0)return;const H=I.source,q=g.get(H);if(q){const K=q[C.__cacheKey];K.usedTimes--,K.usedTimes===0&&M(I),Object.keys(q).length===0&&g.delete(H)}n.remove(I)}function M(I){const C=n.get(I);i.deleteTexture(C.__webglTexture);const H=I.source,q=g.get(H);delete q[C.__cacheKey],o.memory.textures--}function y(I){const C=n.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),n.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let q=0;q<6;q++){if(Array.isArray(C.__webglFramebuffer[q]))for(let K=0;K<C.__webglFramebuffer[q].length;K++)i.deleteFramebuffer(C.__webglFramebuffer[q][K]);else i.deleteFramebuffer(C.__webglFramebuffer[q]);C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer[q])}else{if(Array.isArray(C.__webglFramebuffer))for(let q=0;q<C.__webglFramebuffer.length;q++)i.deleteFramebuffer(C.__webglFramebuffer[q]);else i.deleteFramebuffer(C.__webglFramebuffer);if(C.__webglDepthbuffer&&i.deleteRenderbuffer(C.__webglDepthbuffer),C.__webglMultisampledFramebuffer&&i.deleteFramebuffer(C.__webglMultisampledFramebuffer),C.__webglColorRenderbuffer)for(let q=0;q<C.__webglColorRenderbuffer.length;q++)C.__webglColorRenderbuffer[q]&&i.deleteRenderbuffer(C.__webglColorRenderbuffer[q]);C.__webglDepthRenderbuffer&&i.deleteRenderbuffer(C.__webglDepthRenderbuffer)}const H=I.textures;for(let q=0,K=H.length;q<K;q++){const X=n.get(H[q]);X.__webglTexture&&(i.deleteTexture(X.__webglTexture),o.memory.textures--),n.remove(H[q])}n.remove(I)}let E=0;function A(){E=0}function R(){const I=E;return I>=r.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+r.maxTextures),E+=1,I}function L(I){const C=[];return C.push(I.wrapS),C.push(I.wrapT),C.push(I.wrapR||0),C.push(I.magFilter),C.push(I.minFilter),C.push(I.anisotropy),C.push(I.internalFormat),C.push(I.format),C.push(I.type),C.push(I.generateMipmaps),C.push(I.premultiplyAlpha),C.push(I.flipY),C.push(I.unpackAlignment),C.push(I.colorSpace),C.join()}function B(I,C){const H=n.get(I);if(I.isVideoTexture&&wt(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&H.__version!==I.version){const q=I.image;if(q===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(q.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{nt(H,I,C);return}}else I.isExternalTexture&&(H.__webglTexture=I.sourceTexture?I.sourceTexture:null);e.bindTexture(i.TEXTURE_2D,H.__webglTexture,i.TEXTURE0+C)}function F(I,C){const H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){nt(H,I,C);return}e.bindTexture(i.TEXTURE_2D_ARRAY,H.__webglTexture,i.TEXTURE0+C)}function z(I,C){const H=n.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&H.__version!==I.version){nt(H,I,C);return}e.bindTexture(i.TEXTURE_3D,H.__webglTexture,i.TEXTURE0+C)}function O(I,C){const H=n.get(I);if(I.version>0&&H.__version!==I.version){J(H,I,C);return}e.bindTexture(i.TEXTURE_CUBE_MAP,H.__webglTexture,i.TEXTURE0+C)}const $={[Ya]:i.REPEAT,[Ti]:i.CLAMP_TO_EDGE,[$a]:i.MIRRORED_REPEAT},et={[vn]:i.NEAREST,[gf]:i.NEAREST_MIPMAP_NEAREST,[os]:i.NEAREST_MIPMAP_LINEAR,[En]:i.LINEAR,[Po]:i.LINEAR_MIPMAP_NEAREST,[bi]:i.LINEAR_MIPMAP_LINEAR},Q={[xf]:i.NEVER,[Tf]:i.ALWAYS,[yf]:i.LESS,[Yu]:i.LEQUAL,[Mf]:i.EQUAL,[wf]:i.GEQUAL,[Sf]:i.GREATER,[Ef]:i.NOTEQUAL};function rt(I,C){if(C.type===zn&&t.has("OES_texture_float_linear")===!1&&(C.magFilter===En||C.magFilter===Po||C.magFilter===os||C.magFilter===bi||C.minFilter===En||C.minFilter===Po||C.minFilter===os||C.minFilter===bi)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(I,i.TEXTURE_WRAP_S,$[C.wrapS]),i.texParameteri(I,i.TEXTURE_WRAP_T,$[C.wrapT]),(I===i.TEXTURE_3D||I===i.TEXTURE_2D_ARRAY)&&i.texParameteri(I,i.TEXTURE_WRAP_R,$[C.wrapR]),i.texParameteri(I,i.TEXTURE_MAG_FILTER,et[C.magFilter]),i.texParameteri(I,i.TEXTURE_MIN_FILTER,et[C.minFilter]),C.compareFunction&&(i.texParameteri(I,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(I,i.TEXTURE_COMPARE_FUNC,Q[C.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(C.magFilter===vn||C.minFilter!==os&&C.minFilter!==bi||C.type===zn&&t.has("OES_texture_float_linear")===!1)return;if(C.anisotropy>1||n.get(C).__currentAnisotropy){const H=t.get("EXT_texture_filter_anisotropic");i.texParameterf(I,H.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(C.anisotropy,r.getMaxAnisotropy())),n.get(C).__currentAnisotropy=C.anisotropy}}}function Et(I,C){let H=!1;I.__webglInit===void 0&&(I.__webglInit=!0,C.addEventListener("dispose",c));const q=C.source;let K=g.get(q);K===void 0&&(K={},g.set(q,K));const X=L(C);if(X!==I.__cacheKey){K[X]===void 0&&(K[X]={texture:i.createTexture(),usedTimes:0},o.memory.textures++,H=!0),K[X].usedTimes++;const gt=K[I.__cacheKey];gt!==void 0&&(K[I.__cacheKey].usedTimes--,gt.usedTimes===0&&M(C)),I.__cacheKey=X,I.__webglTexture=K[X].texture}return H}function vt(I,C,H){return Math.floor(Math.floor(I/H)/C)}function W(I,C,H,q){const X=I.updateRanges;if(X.length===0)e.texSubImage2D(i.TEXTURE_2D,0,0,0,C.width,C.height,H,q,C.data);else{X.sort((lt,St)=>lt.start-St.start);let gt=0;for(let lt=1;lt<X.length;lt++){const St=X[gt],zt=X[lt],Lt=St.start+St.count,yt=vt(zt.start,C.width,4),Yt=vt(St.start,C.width,4);zt.start<=Lt+1&&yt===Yt&&vt(zt.start+zt.count-1,C.width,4)===yt?St.count=Math.max(St.count,zt.start+zt.count-St.start):(++gt,X[gt]=zt)}X.length=gt+1;const ft=i.getParameter(i.UNPACK_ROW_LENGTH),Pt=i.getParameter(i.UNPACK_SKIP_PIXELS),Ct=i.getParameter(i.UNPACK_SKIP_ROWS);i.pixelStorei(i.UNPACK_ROW_LENGTH,C.width);for(let lt=0,St=X.length;lt<St;lt++){const zt=X[lt],Lt=Math.floor(zt.start/4),yt=Math.ceil(zt.count/4),Yt=Lt%C.width,V=Math.floor(Lt/C.width),ct=yt,mt=1;i.pixelStorei(i.UNPACK_SKIP_PIXELS,Yt),i.pixelStorei(i.UNPACK_SKIP_ROWS,V),e.texSubImage2D(i.TEXTURE_2D,0,Yt,V,ct,mt,H,q,C.data)}I.clearUpdateRanges(),i.pixelStorei(i.UNPACK_ROW_LENGTH,ft),i.pixelStorei(i.UNPACK_SKIP_PIXELS,Pt),i.pixelStorei(i.UNPACK_SKIP_ROWS,Ct)}}function nt(I,C,H){let q=i.TEXTURE_2D;(C.isDataArrayTexture||C.isCompressedArrayTexture)&&(q=i.TEXTURE_2D_ARRAY),C.isData3DTexture&&(q=i.TEXTURE_3D);const K=Et(I,C),X=C.source;e.bindTexture(q,I.__webglTexture,i.TEXTURE0+H);const gt=n.get(X);if(X.version!==gt.__version||K===!0){e.activeTexture(i.TEXTURE0+H);const ft=te.getPrimaries(te.workingColorSpace),Pt=C.colorSpace===ei?null:te.getPrimaries(C.colorSpace),Ct=C.colorSpace===ei||ft===Pt?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ct);let lt=w(C.image,!1,r.maxTextureSize);lt=Gt(C,lt);const St=s.convert(C.format,C.colorSpace),zt=s.convert(C.type);let Lt=p(C.internalFormat,St,zt,C.colorSpace,C.isVideoTexture);rt(q,C);let yt;const Yt=C.mipmaps,V=C.isVideoTexture!==!0,ct=gt.__version===void 0||K===!0,mt=X.dataReady,At=x(C,lt);if(C.isDepthTexture)Lt=l(C.format===Jr,C.type),ct&&(V?e.texStorage2D(i.TEXTURE_2D,1,Lt,lt.width,lt.height):e.texImage2D(i.TEXTURE_2D,0,Lt,lt.width,lt.height,0,St,zt,null));else if(C.isDataTexture)if(Yt.length>0){V&&ct&&e.texStorage2D(i.TEXTURE_2D,At,Lt,Yt[0].width,Yt[0].height);for(let st=0,tt=Yt.length;st<tt;st++)yt=Yt[st],V?mt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,yt.width,yt.height,St,zt,yt.data):e.texImage2D(i.TEXTURE_2D,st,Lt,yt.width,yt.height,0,St,zt,yt.data);C.generateMipmaps=!1}else V?(ct&&e.texStorage2D(i.TEXTURE_2D,At,Lt,lt.width,lt.height),mt&&W(C,lt,St,zt)):e.texImage2D(i.TEXTURE_2D,0,Lt,lt.width,lt.height,0,St,zt,lt.data);else if(C.isCompressedTexture)if(C.isCompressedArrayTexture){V&&ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Lt,Yt[0].width,Yt[0].height,lt.depth);for(let st=0,tt=Yt.length;st<tt;st++)if(yt=Yt[st],C.format!==mn)if(St!==null)if(V){if(mt)if(C.layerUpdates.size>0){const Dt=th(yt.width,yt.height,C.format,C.type);for(const Wt of C.layerUpdates){const ae=yt.data.subarray(Wt*Dt/yt.data.BYTES_PER_ELEMENT,(Wt+1)*Dt/yt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,Wt,yt.width,yt.height,1,St,ae)}C.clearLayerUpdates()}else e.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,yt.width,yt.height,lt.depth,St,yt.data)}else e.compressedTexImage3D(i.TEXTURE_2D_ARRAY,st,Lt,yt.width,yt.height,lt.depth,0,yt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else V?mt&&e.texSubImage3D(i.TEXTURE_2D_ARRAY,st,0,0,0,yt.width,yt.height,lt.depth,St,zt,yt.data):e.texImage3D(i.TEXTURE_2D_ARRAY,st,Lt,yt.width,yt.height,lt.depth,0,St,zt,yt.data)}else{V&&ct&&e.texStorage2D(i.TEXTURE_2D,At,Lt,Yt[0].width,Yt[0].height);for(let st=0,tt=Yt.length;st<tt;st++)yt=Yt[st],C.format!==mn?St!==null?V?mt&&e.compressedTexSubImage2D(i.TEXTURE_2D,st,0,0,yt.width,yt.height,St,yt.data):e.compressedTexImage2D(i.TEXTURE_2D,st,Lt,yt.width,yt.height,0,yt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):V?mt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,yt.width,yt.height,St,zt,yt.data):e.texImage2D(i.TEXTURE_2D,st,Lt,yt.width,yt.height,0,St,zt,yt.data)}else if(C.isDataArrayTexture)if(V){if(ct&&e.texStorage3D(i.TEXTURE_2D_ARRAY,At,Lt,lt.width,lt.height,lt.depth),mt)if(C.layerUpdates.size>0){const st=th(lt.width,lt.height,C.format,C.type);for(const tt of C.layerUpdates){const Dt=lt.data.subarray(tt*st/lt.data.BYTES_PER_ELEMENT,(tt+1)*st/lt.data.BYTES_PER_ELEMENT);e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,tt,lt.width,lt.height,1,St,zt,Dt)}C.clearLayerUpdates()}else e.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,lt.width,lt.height,lt.depth,St,zt,lt.data)}else e.texImage3D(i.TEXTURE_2D_ARRAY,0,Lt,lt.width,lt.height,lt.depth,0,St,zt,lt.data);else if(C.isData3DTexture)V?(ct&&e.texStorage3D(i.TEXTURE_3D,At,Lt,lt.width,lt.height,lt.depth),mt&&e.texSubImage3D(i.TEXTURE_3D,0,0,0,0,lt.width,lt.height,lt.depth,St,zt,lt.data)):e.texImage3D(i.TEXTURE_3D,0,Lt,lt.width,lt.height,lt.depth,0,St,zt,lt.data);else if(C.isFramebufferTexture){if(ct)if(V)e.texStorage2D(i.TEXTURE_2D,At,Lt,lt.width,lt.height);else{let st=lt.width,tt=lt.height;for(let Dt=0;Dt<At;Dt++)e.texImage2D(i.TEXTURE_2D,Dt,Lt,st,tt,0,St,zt,null),st>>=1,tt>>=1}}else if(Yt.length>0){if(V&&ct){const st=kt(Yt[0]);e.texStorage2D(i.TEXTURE_2D,At,Lt,st.width,st.height)}for(let st=0,tt=Yt.length;st<tt;st++)yt=Yt[st],V?mt&&e.texSubImage2D(i.TEXTURE_2D,st,0,0,St,zt,yt):e.texImage2D(i.TEXTURE_2D,st,Lt,St,zt,yt);C.generateMipmaps=!1}else if(V){if(ct){const st=kt(lt);e.texStorage2D(i.TEXTURE_2D,At,Lt,st.width,st.height)}mt&&e.texSubImage2D(i.TEXTURE_2D,0,0,0,St,zt,lt)}else e.texImage2D(i.TEXTURE_2D,0,Lt,St,zt,lt);v(C)&&m(q),gt.__version=X.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function J(I,C,H){if(C.image.length!==6)return;const q=Et(I,C),K=C.source;e.bindTexture(i.TEXTURE_CUBE_MAP,I.__webglTexture,i.TEXTURE0+H);const X=n.get(K);if(K.version!==X.__version||q===!0){e.activeTexture(i.TEXTURE0+H);const gt=te.getPrimaries(te.workingColorSpace),ft=C.colorSpace===ei?null:te.getPrimaries(C.colorSpace),Pt=C.colorSpace===ei||gt===ft?i.NONE:i.BROWSER_DEFAULT_WEBGL;i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,C.flipY),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,C.premultiplyAlpha),i.pixelStorei(i.UNPACK_ALIGNMENT,C.unpackAlignment),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);const Ct=C.isCompressedTexture||C.image[0].isCompressedTexture,lt=C.image[0]&&C.image[0].isDataTexture,St=[];for(let tt=0;tt<6;tt++)!Ct&&!lt?St[tt]=w(C.image[tt],!0,r.maxCubemapSize):St[tt]=lt?C.image[tt].image:C.image[tt],St[tt]=Gt(C,St[tt]);const zt=St[0],Lt=s.convert(C.format,C.colorSpace),yt=s.convert(C.type),Yt=p(C.internalFormat,Lt,yt,C.colorSpace),V=C.isVideoTexture!==!0,ct=X.__version===void 0||q===!0,mt=K.dataReady;let At=x(C,zt);rt(i.TEXTURE_CUBE_MAP,C);let st;if(Ct){V&&ct&&e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Yt,zt.width,zt.height);for(let tt=0;tt<6;tt++){st=St[tt].mipmaps;for(let Dt=0;Dt<st.length;Dt++){const Wt=st[Dt];C.format!==mn?Lt!==null?V?mt&&e.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt,0,0,Wt.width,Wt.height,Lt,Wt.data):e.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt,Yt,Wt.width,Wt.height,0,Wt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt,0,0,Wt.width,Wt.height,Lt,yt,Wt.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt,Yt,Wt.width,Wt.height,0,Lt,yt,Wt.data)}}}else{if(st=C.mipmaps,V&&ct){st.length>0&&At++;const tt=kt(St[0]);e.texStorage2D(i.TEXTURE_CUBE_MAP,At,Yt,tt.width,tt.height)}for(let tt=0;tt<6;tt++)if(lt){V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,St[tt].width,St[tt].height,Lt,yt,St[tt].data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Yt,St[tt].width,St[tt].height,0,Lt,yt,St[tt].data);for(let Dt=0;Dt<st.length;Dt++){const ae=st[Dt].image[tt].image;V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt+1,0,0,ae.width,ae.height,Lt,yt,ae.data):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt+1,Yt,ae.width,ae.height,0,Lt,yt,ae.data)}}else{V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,0,0,Lt,yt,St[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,0,Yt,Lt,yt,St[tt]);for(let Dt=0;Dt<st.length;Dt++){const Wt=st[Dt];V?mt&&e.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt+1,0,0,Lt,yt,Wt.image[tt]):e.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+tt,Dt+1,Yt,Lt,yt,Wt.image[tt])}}}v(C)&&m(i.TEXTURE_CUBE_MAP),X.__version=K.version,C.onUpdate&&C.onUpdate(C)}I.__version=C.version}function dt(I,C,H,q,K,X){const gt=s.convert(H.format,H.colorSpace),ft=s.convert(H.type),Pt=p(H.internalFormat,gt,ft,H.colorSpace),Ct=n.get(C),lt=n.get(H);if(lt.__renderTarget=C,!Ct.__hasExternalTextures){const St=Math.max(1,C.width>>X),zt=Math.max(1,C.height>>X);K===i.TEXTURE_3D||K===i.TEXTURE_2D_ARRAY?e.texImage3D(K,X,Pt,St,zt,C.depth,0,gt,ft,null):e.texImage2D(K,X,Pt,St,zt,0,gt,ft,null)}e.bindFramebuffer(i.FRAMEBUFFER,I),at(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,q,K,lt.__webglTexture,0,Jt(C)):(K===i.TEXTURE_2D||K>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&K<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,q,K,lt.__webglTexture,X),e.bindFramebuffer(i.FRAMEBUFFER,null)}function it(I,C,H){if(i.bindRenderbuffer(i.RENDERBUFFER,I),C.depthBuffer){const q=C.depthTexture,K=q&&q.isDepthTexture?q.type:null,X=l(C.stencilBuffer,K),gt=C.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,ft=Jt(C);at(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ft,X,C.width,C.height):H?i.renderbufferStorageMultisample(i.RENDERBUFFER,ft,X,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,X,C.width,C.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,gt,i.RENDERBUFFER,I)}else{const q=C.textures;for(let K=0;K<q.length;K++){const X=q[K],gt=s.convert(X.format,X.colorSpace),ft=s.convert(X.type),Pt=p(X.internalFormat,gt,ft,X.colorSpace),Ct=Jt(C);H&&at(C)===!1?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ct,Pt,C.width,C.height):at(C)?a.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ct,Pt,C.width,C.height):i.renderbufferStorage(i.RENDERBUFFER,Pt,C.width,C.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function _t(I,C){if(C&&C.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(i.FRAMEBUFFER,I),!(C.depthTexture&&C.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const q=n.get(C.depthTexture);q.__renderTarget=C,(!q.__webglTexture||C.depthTexture.image.width!==C.width||C.depthTexture.image.height!==C.height)&&(C.depthTexture.image.width=C.width,C.depthTexture.image.height=C.height,C.depthTexture.needsUpdate=!0),B(C.depthTexture,0);const K=q.__webglTexture,X=Jt(C);if(C.depthTexture.format===Kr)at(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_ATTACHMENT,i.TEXTURE_2D,K,0);else if(C.depthTexture.format===Jr)at(C)?a.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0,X):i.framebufferTexture2D(i.FRAMEBUFFER,i.DEPTH_STENCIL_ATTACHMENT,i.TEXTURE_2D,K,0);else throw new Error("Unknown depthTexture format")}function Ut(I){const C=n.get(I),H=I.isWebGLCubeRenderTarget===!0;if(C.__boundDepthTexture!==I.depthTexture){const q=I.depthTexture;if(C.__depthDisposeCallback&&C.__depthDisposeCallback(),q){const K=()=>{delete C.__boundDepthTexture,delete C.__depthDisposeCallback,q.removeEventListener("dispose",K)};q.addEventListener("dispose",K),C.__depthDisposeCallback=K}C.__boundDepthTexture=q}if(I.depthTexture&&!C.__autoAllocateDepthBuffer){if(H)throw new Error("target.depthTexture not supported in Cube render targets");const q=I.texture.mipmaps;q&&q.length>0?_t(C.__webglFramebuffer[0],I):_t(C.__webglFramebuffer,I)}else if(H){C.__webglDepthbuffer=[];for(let q=0;q<6;q++)if(e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[q]),C.__webglDepthbuffer[q]===void 0)C.__webglDepthbuffer[q]=i.createRenderbuffer(),it(C.__webglDepthbuffer[q],I,!1);else{const K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=C.__webglDepthbuffer[q];i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}else{const q=I.texture.mipmaps;if(q&&q.length>0?e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer[0]):e.bindFramebuffer(i.FRAMEBUFFER,C.__webglFramebuffer),C.__webglDepthbuffer===void 0)C.__webglDepthbuffer=i.createRenderbuffer(),it(C.__webglDepthbuffer,I,!1);else{const K=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,X=C.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,X),i.framebufferRenderbuffer(i.FRAMEBUFFER,K,i.RENDERBUFFER,X)}}e.bindFramebuffer(i.FRAMEBUFFER,null)}function Ot(I,C,H){const q=n.get(I);C!==void 0&&dt(q.__webglFramebuffer,I,I.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),H!==void 0&&Ut(I)}function N(I){const C=I.texture,H=n.get(I),q=n.get(C);I.addEventListener("dispose",P);const K=I.textures,X=I.isWebGLCubeRenderTarget===!0,gt=K.length>1;if(gt||(q.__webglTexture===void 0&&(q.__webglTexture=i.createTexture()),q.__version=C.version,o.memory.textures++),X){H.__webglFramebuffer=[];for(let ft=0;ft<6;ft++)if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer[ft]=[];for(let Pt=0;Pt<C.mipmaps.length;Pt++)H.__webglFramebuffer[ft][Pt]=i.createFramebuffer()}else H.__webglFramebuffer[ft]=i.createFramebuffer()}else{if(C.mipmaps&&C.mipmaps.length>0){H.__webglFramebuffer=[];for(let ft=0;ft<C.mipmaps.length;ft++)H.__webglFramebuffer[ft]=i.createFramebuffer()}else H.__webglFramebuffer=i.createFramebuffer();if(gt)for(let ft=0,Pt=K.length;ft<Pt;ft++){const Ct=n.get(K[ft]);Ct.__webglTexture===void 0&&(Ct.__webglTexture=i.createTexture(),o.memory.textures++)}if(I.samples>0&&at(I)===!1){H.__webglMultisampledFramebuffer=i.createFramebuffer(),H.__webglColorRenderbuffer=[],e.bindFramebuffer(i.FRAMEBUFFER,H.__webglMultisampledFramebuffer);for(let ft=0;ft<K.length;ft++){const Pt=K[ft];H.__webglColorRenderbuffer[ft]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,H.__webglColorRenderbuffer[ft]);const Ct=s.convert(Pt.format,Pt.colorSpace),lt=s.convert(Pt.type),St=p(Pt.internalFormat,Ct,lt,Pt.colorSpace,I.isXRRenderTarget===!0),zt=Jt(I);i.renderbufferStorageMultisample(i.RENDERBUFFER,zt,St,I.width,I.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ft,i.RENDERBUFFER,H.__webglColorRenderbuffer[ft])}i.bindRenderbuffer(i.RENDERBUFFER,null),I.depthBuffer&&(H.__webglDepthRenderbuffer=i.createRenderbuffer(),it(H.__webglDepthRenderbuffer,I,!0)),e.bindFramebuffer(i.FRAMEBUFFER,null)}}if(X){e.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture),rt(i.TEXTURE_CUBE_MAP,C);for(let ft=0;ft<6;ft++)if(C.mipmaps&&C.mipmaps.length>0)for(let Pt=0;Pt<C.mipmaps.length;Pt++)dt(H.__webglFramebuffer[ft][Pt],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,Pt);else dt(H.__webglFramebuffer[ft],I,C,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ft,0);v(C)&&m(i.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(gt){for(let ft=0,Pt=K.length;ft<Pt;ft++){const Ct=K[ft],lt=n.get(Ct);let St=i.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(St=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(St,lt.__webglTexture),rt(St,Ct),dt(H.__webglFramebuffer,I,Ct,i.COLOR_ATTACHMENT0+ft,St,0),v(Ct)&&m(St)}e.unbindTexture()}else{let ft=i.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(ft=I.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),e.bindTexture(ft,q.__webglTexture),rt(ft,C),C.mipmaps&&C.mipmaps.length>0)for(let Pt=0;Pt<C.mipmaps.length;Pt++)dt(H.__webglFramebuffer[Pt],I,C,i.COLOR_ATTACHMENT0,ft,Pt);else dt(H.__webglFramebuffer,I,C,i.COLOR_ATTACHMENT0,ft,0);v(C)&&m(ft),e.unbindTexture()}I.depthBuffer&&Ut(I)}function It(I){const C=I.textures;for(let H=0,q=C.length;H<q;H++){const K=C[H];if(v(K)){const X=T(I),gt=n.get(K).__webglTexture;e.bindTexture(X,gt),m(X),e.unbindTexture()}}}const pt=[],bt=[];function ut(I){if(I.samples>0){if(at(I)===!1){const C=I.textures,H=I.width,q=I.height;let K=i.COLOR_BUFFER_BIT;const X=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,gt=n.get(I),ft=C.length>1;if(ft)for(let Ct=0;Ct<C.length;Ct++)e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,null),e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,null,0);e.bindFramebuffer(i.READ_FRAMEBUFFER,gt.__webglMultisampledFramebuffer);const Pt=I.texture.mipmaps;Pt&&Pt.length>0?e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer[0]):e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglFramebuffer);for(let Ct=0;Ct<C.length;Ct++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(K|=i.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(K|=i.STENCIL_BUFFER_BIT)),ft){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Ct]);const lt=n.get(C[Ct]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,lt,0)}i.blitFramebuffer(0,0,H,q,0,0,H,q,K,i.NEAREST),u===!0&&(pt.length=0,bt.length=0,pt.push(i.COLOR_ATTACHMENT0+Ct),I.depthBuffer&&I.resolveDepthBuffer===!1&&(pt.push(X),bt.push(X),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,pt))}if(e.bindFramebuffer(i.READ_FRAMEBUFFER,null),e.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ft)for(let Ct=0;Ct<C.length;Ct++){e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.RENDERBUFFER,gt.__webglColorRenderbuffer[Ct]);const lt=n.get(C[Ct]).__webglTexture;e.bindFramebuffer(i.FRAMEBUFFER,gt.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ct,i.TEXTURE_2D,lt,0)}e.bindFramebuffer(i.DRAW_FRAMEBUFFER,gt.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&u){const C=I.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[C])}}}function Jt(I){return Math.min(r.maxSamples,I.samples)}function at(I){const C=n.get(I);return I.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&C.__useRenderToTexture!==!1}function wt(I){const C=o.render.frame;d.get(I)!==C&&(d.set(I,C),I.update())}function Gt(I,C){const H=I.colorSpace,q=I.format,K=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||H!==Mr&&H!==ei&&(te.getTransfer(H)===ie?(q!==mn||K!==An)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",H)),C}function kt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(h.width=I.naturalWidth||I.width,h.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(h.width=I.displayWidth,h.height=I.displayHeight):(h.width=I.width,h.height=I.height),h}this.allocateTextureUnit=R,this.resetTextureUnits=A,this.setTexture2D=B,this.setTexture2DArray=F,this.setTexture3D=z,this.setTextureCube=O,this.rebindTextures=Ot,this.setupRenderTarget=N,this.updateRenderTargetMipmap=It,this.updateMultisampleRenderTarget=ut,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=dt,this.useMultisampledRTT=at}function $v(i,t){function e(n,r=ei){let s;const o=te.getTransfer(r);if(n===An)return i.UNSIGNED_BYTE;if(n===Hl)return i.UNSIGNED_SHORT_4_4_4_4;if(n===kl)return i.UNSIGNED_SHORT_5_5_5_1;if(n===Hu)return i.UNSIGNED_INT_5_9_9_9_REV;if(n===Vu)return i.BYTE;if(n===zu)return i.SHORT;if(n===Zr)return i.UNSIGNED_SHORT;if(n===zl)return i.INT;if(n===Pi)return i.UNSIGNED_INT;if(n===zn)return i.FLOAT;if(n===ts)return i.HALF_FLOAT;if(n===ku)return i.ALPHA;if(n===Gu)return i.RGB;if(n===mn)return i.RGBA;if(n===Kr)return i.DEPTH_COMPONENT;if(n===Jr)return i.DEPTH_STENCIL;if(n===Wu)return i.RED;if(n===Gl)return i.RED_INTEGER;if(n===Xu)return i.RG;if(n===Wl)return i.RG_INTEGER;if(n===Xl)return i.RGBA_INTEGER;if(n===Js||n===Qs||n===to||n===eo)if(o===ie)if(s=t.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===Js)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===eo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=t.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===Js)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===Qs)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===to)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===eo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Za||n===ja||n===Ka||n===Ja)if(s=t.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Za)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===ja)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===Ka)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===Ja)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Qa||n===tl||n===el)if(s=t.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Qa||n===tl)return o===ie?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===el)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(n===nl||n===il||n===rl||n===sl||n===ol||n===al||n===ll||n===cl||n===hl||n===ul||n===dl||n===fl||n===pl||n===gl)if(s=t.get("WEBGL_compressed_texture_astc"),s!==null){if(n===nl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===il)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===rl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===sl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===ol)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===al)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===ll)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===cl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===hl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ul)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===dl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===fl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===pl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===gl)return o===ie?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===no||n===_l||n===ml)if(s=t.get("EXT_texture_compression_bptc"),s!==null){if(n===no)return o===ie?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===_l)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===ml)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qu||n===vl||n===xl||n===yl)if(s=t.get("EXT_texture_compression_rgtc"),s!==null){if(n===no)return s.COMPRESSED_RED_RGTC1_EXT;if(n===vl)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===xl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===yl)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===jr?i.UNSIGNED_INT_24_8:i[n]!==void 0?i[n]:null}return{convert:e}}class dd extends Ye{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}}const Zv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,jv=`
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

}`;class Kv{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){const n=new dd(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=n}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,n=new oi({vertexShader:Zv,fragmentShader:jv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Xe(new is(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jv extends Li{constructor(t,e){super();const n=this;let r=null,s=1,o=null,a="local-floor",u=1,h=null,d=null,f=null,g=null,_=null,S=null;const w=new Kv,v={},m=e.getContextAttributes();let T=null,p=null;const l=[],x=[],c=new Ft;let P=null;const b=new an;b.viewport=new oe;const M=new an;M.viewport=new oe;const y=[b,M],E=new _p;let A=null,R=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(W){let nt=l[W];return nt===void 0&&(nt=new Ko,l[W]=nt),nt.getTargetRaySpace()},this.getControllerGrip=function(W){let nt=l[W];return nt===void 0&&(nt=new Ko,l[W]=nt),nt.getGripSpace()},this.getHand=function(W){let nt=l[W];return nt===void 0&&(nt=new Ko,l[W]=nt),nt.getHandSpace()};function L(W){const nt=x.indexOf(W.inputSource);if(nt===-1)return;const J=l[nt];J!==void 0&&(J.update(W.inputSource,W.frame,h||o),J.dispatchEvent({type:W.type,data:W.inputSource}))}function B(){r.removeEventListener("select",L),r.removeEventListener("selectstart",L),r.removeEventListener("selectend",L),r.removeEventListener("squeeze",L),r.removeEventListener("squeezestart",L),r.removeEventListener("squeezeend",L),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",F);for(let W=0;W<l.length;W++){const nt=x[W];nt!==null&&(x[W]=null,l[W].disconnect(nt))}A=null,R=null,w.reset();for(const W in v)delete v[W];t.setRenderTarget(T),_=null,g=null,f=null,r=null,p=null,vt.stop(),n.isPresenting=!1,t.setPixelRatio(P),t.setSize(c.width,c.height,!1),n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(W){s=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(W){a=W,n.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||o},this.setReferenceSpace=function(W){h=W},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return f},this.getFrame=function(){return S},this.getSession=function(){return r},this.setSession=async function(W){if(r=W,r!==null){if(T=t.getRenderTarget(),r.addEventListener("select",L),r.addEventListener("selectstart",L),r.addEventListener("selectend",L),r.addEventListener("squeeze",L),r.addEventListener("squeezestart",L),r.addEventListener("squeezeend",L),r.addEventListener("end",B),r.addEventListener("inputsourceschange",F),m.xrCompatible!==!0&&await e.makeXRCompatible(),P=t.getPixelRatio(),t.getSize(c),typeof XRWebGLBinding<"u"&&(f=new XRWebGLBinding(r,e)),f!==null&&"createProjectionLayer"in XRWebGLBinding.prototype){let J=null,dt=null,it=null;m.depth&&(it=m.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,J=m.stencil?Jr:Kr,dt=m.stencil?jr:Pi);const _t={colorFormat:e.RGBA8,depthFormat:it,scaleFactor:s};g=f.createProjectionLayer(_t),r.updateRenderState({layers:[g]}),t.setPixelRatio(1),t.setSize(g.textureWidth,g.textureHeight,!1),p=new Di(g.textureWidth,g.textureHeight,{format:mn,type:An,depthTexture:new rd(g.textureWidth,g.textureHeight,dt,void 0,void 0,void 0,void 0,void 0,void 0,J),stencilBuffer:m.stencil,colorSpace:t.outputColorSpace,samples:m.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const J={antialias:m.antialias,alpha:!0,depth:m.depth,stencil:m.stencil,framebufferScaleFactor:s};_=new XRWebGLLayer(r,e,J),r.updateRenderState({baseLayer:_}),t.setPixelRatio(1),t.setSize(_.framebufferWidth,_.framebufferHeight,!1),p=new Di(_.framebufferWidth,_.framebufferHeight,{format:mn,type:An,colorSpace:t.outputColorSpace,stencilBuffer:m.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}p.isXRRenderTarget=!0,this.setFoveation(u),h=null,o=await r.requestReferenceSpace(a),vt.setContext(r),vt.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return w.getDepthTexture()};function F(W){for(let nt=0;nt<W.removed.length;nt++){const J=W.removed[nt],dt=x.indexOf(J);dt>=0&&(x[dt]=null,l[dt].disconnect(J))}for(let nt=0;nt<W.added.length;nt++){const J=W.added[nt];let dt=x.indexOf(J);if(dt===-1){for(let _t=0;_t<l.length;_t++)if(_t>=x.length){x.push(J),dt=_t;break}else if(x[_t]===null){x[_t]=J,dt=_t;break}if(dt===-1)break}const it=l[dt];it&&it.connect(J)}}const z=new U,O=new U;function $(W,nt,J){z.setFromMatrixPosition(nt.matrixWorld),O.setFromMatrixPosition(J.matrixWorld);const dt=z.distanceTo(O),it=nt.projectionMatrix.elements,_t=J.projectionMatrix.elements,Ut=it[14]/(it[10]-1),Ot=it[14]/(it[10]+1),N=(it[9]+1)/it[5],It=(it[9]-1)/it[5],pt=(it[8]-1)/it[0],bt=(_t[8]+1)/_t[0],ut=Ut*pt,Jt=Ut*bt,at=dt/(-pt+bt),wt=at*-pt;if(nt.matrixWorld.decompose(W.position,W.quaternion,W.scale),W.translateX(wt),W.translateZ(at),W.matrixWorld.compose(W.position,W.quaternion,W.scale),W.matrixWorldInverse.copy(W.matrixWorld).invert(),it[10]===-1)W.projectionMatrix.copy(nt.projectionMatrix),W.projectionMatrixInverse.copy(nt.projectionMatrixInverse);else{const Gt=Ut+at,kt=Ot+at,I=ut-wt,C=Jt+(dt-wt),H=N*Ot/kt*Gt,q=It*Ot/kt*Gt;W.projectionMatrix.makePerspective(I,C,H,q,Gt,kt),W.projectionMatrixInverse.copy(W.projectionMatrix).invert()}}function et(W,nt){nt===null?W.matrixWorld.copy(W.matrix):W.matrixWorld.multiplyMatrices(nt.matrixWorld,W.matrix),W.matrixWorldInverse.copy(W.matrixWorld).invert()}this.updateCamera=function(W){if(r===null)return;let nt=W.near,J=W.far;w.texture!==null&&(w.depthNear>0&&(nt=w.depthNear),w.depthFar>0&&(J=w.depthFar)),E.near=M.near=b.near=nt,E.far=M.far=b.far=J,(A!==E.near||R!==E.far)&&(r.updateRenderState({depthNear:E.near,depthFar:E.far}),A=E.near,R=E.far),E.layers.mask=W.layers.mask|6,b.layers.mask=E.layers.mask&3,M.layers.mask=E.layers.mask&5;const dt=W.parent,it=E.cameras;et(E,dt);for(let _t=0;_t<it.length;_t++)et(it[_t],dt);it.length===2?$(E,b,M):E.projectionMatrix.copy(b.projectionMatrix),Q(W,E,dt)};function Q(W,nt,J){J===null?W.matrix.copy(nt.matrixWorld):(W.matrix.copy(J.matrixWorld),W.matrix.invert(),W.matrix.multiply(nt.matrixWorld)),W.matrix.decompose(W.position,W.quaternion,W.scale),W.updateMatrixWorld(!0),W.projectionMatrix.copy(nt.projectionMatrix),W.projectionMatrixInverse.copy(nt.projectionMatrixInverse),W.isPerspectiveCamera&&(W.fov=Ml*2*Math.atan(1/W.projectionMatrix.elements[5]),W.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(g===null&&_===null))return u},this.setFoveation=function(W){u=W,g!==null&&(g.fixedFoveation=W),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=W)},this.hasDepthSensing=function(){return w.texture!==null},this.getDepthSensingMesh=function(){return w.getMesh(E)},this.getCameraTexture=function(W){return v[W]};let rt=null;function Et(W,nt){if(d=nt.getViewerPose(h||o),S=nt,d!==null){const J=d.views;_!==null&&(t.setRenderTargetFramebuffer(p,_.framebuffer),t.setRenderTarget(p));let dt=!1;J.length!==E.cameras.length&&(E.cameras.length=0,dt=!0);for(let Ot=0;Ot<J.length;Ot++){const N=J[Ot];let It=null;if(_!==null)It=_.getViewport(N);else{const bt=f.getViewSubImage(g,N);It=bt.viewport,Ot===0&&(t.setRenderTargetTextures(p,bt.colorTexture,bt.depthStencilTexture),t.setRenderTarget(p))}let pt=y[Ot];pt===void 0&&(pt=new an,pt.layers.enable(Ot),pt.viewport=new oe,y[Ot]=pt),pt.matrix.fromArray(N.transform.matrix),pt.matrix.decompose(pt.position,pt.quaternion,pt.scale),pt.projectionMatrix.fromArray(N.projectionMatrix),pt.projectionMatrixInverse.copy(pt.projectionMatrix).invert(),pt.viewport.set(It.x,It.y,It.width,It.height),Ot===0&&(E.matrix.copy(pt.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),dt===!0&&E.cameras.push(pt)}const it=r.enabledFeatures;if(it&&it.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&f){const Ot=f.getDepthInformation(J[0]);Ot&&Ot.isValid&&Ot.texture&&w.init(Ot,r.renderState)}if(it&&it.includes("camera-access")&&(t.state.unbindTexture(),f))for(let Ot=0;Ot<J.length;Ot++){const N=J[Ot].camera;if(N){let It=v[N];It||(It=new dd,v[N]=It);const pt=f.getCameraImage(N);It.sourceTexture=pt}}}for(let J=0;J<l.length;J++){const dt=x[J],it=l[J];dt!==null&&it!==void 0&&it.update(dt,nt,h||o)}rt&&rt(W,nt),nt.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:nt}),S=null}const vt=new ad;vt.setAnimationLoop(Et),this.setAnimationLoop=function(W){rt=W},this.dispose=function(){}}}const gi=new xn,Qv=new Kt;function tx(i,t){function e(v,m){v.matrixAutoUpdate===!0&&v.updateMatrix(),m.value.copy(v.matrix)}function n(v,m){m.color.getRGB(v.fogColor.value,ed(i)),m.isFog?(v.fogNear.value=m.near,v.fogFar.value=m.far):m.isFogExp2&&(v.fogDensity.value=m.density)}function r(v,m,T,p,l){m.isMeshBasicMaterial||m.isMeshLambertMaterial?s(v,m):m.isMeshToonMaterial?(s(v,m),f(v,m)):m.isMeshPhongMaterial?(s(v,m),d(v,m)):m.isMeshStandardMaterial?(s(v,m),g(v,m),m.isMeshPhysicalMaterial&&_(v,m,l)):m.isMeshMatcapMaterial?(s(v,m),S(v,m)):m.isMeshDepthMaterial?s(v,m):m.isMeshDistanceMaterial?(s(v,m),w(v,m)):m.isMeshNormalMaterial?s(v,m):m.isLineBasicMaterial?(o(v,m),m.isLineDashedMaterial&&a(v,m)):m.isPointsMaterial?u(v,m,T,p):m.isSpriteMaterial?h(v,m):m.isShadowMaterial?(v.color.value.copy(m.color),v.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function s(v,m){v.opacity.value=m.opacity,m.color&&v.diffuse.value.copy(m.color),m.emissive&&v.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.bumpMap&&(v.bumpMap.value=m.bumpMap,e(m.bumpMap,v.bumpMapTransform),v.bumpScale.value=m.bumpScale,m.side===Be&&(v.bumpScale.value*=-1)),m.normalMap&&(v.normalMap.value=m.normalMap,e(m.normalMap,v.normalMapTransform),v.normalScale.value.copy(m.normalScale),m.side===Be&&v.normalScale.value.negate()),m.displacementMap&&(v.displacementMap.value=m.displacementMap,e(m.displacementMap,v.displacementMapTransform),v.displacementScale.value=m.displacementScale,v.displacementBias.value=m.displacementBias),m.emissiveMap&&(v.emissiveMap.value=m.emissiveMap,e(m.emissiveMap,v.emissiveMapTransform)),m.specularMap&&(v.specularMap.value=m.specularMap,e(m.specularMap,v.specularMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest);const T=t.get(m),p=T.envMap,l=T.envMapRotation;p&&(v.envMap.value=p,gi.copy(l),gi.x*=-1,gi.y*=-1,gi.z*=-1,p.isCubeTexture&&p.isRenderTargetTexture===!1&&(gi.y*=-1,gi.z*=-1),v.envMapRotation.value.setFromMatrix4(Qv.makeRotationFromEuler(gi)),v.flipEnvMap.value=p.isCubeTexture&&p.isRenderTargetTexture===!1?-1:1,v.reflectivity.value=m.reflectivity,v.ior.value=m.ior,v.refractionRatio.value=m.refractionRatio),m.lightMap&&(v.lightMap.value=m.lightMap,v.lightMapIntensity.value=m.lightMapIntensity,e(m.lightMap,v.lightMapTransform)),m.aoMap&&(v.aoMap.value=m.aoMap,v.aoMapIntensity.value=m.aoMapIntensity,e(m.aoMap,v.aoMapTransform))}function o(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform))}function a(v,m){v.dashSize.value=m.dashSize,v.totalSize.value=m.dashSize+m.gapSize,v.scale.value=m.scale}function u(v,m,T,p){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.size.value=m.size*T,v.scale.value=p*.5,m.map&&(v.map.value=m.map,e(m.map,v.uvTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function h(v,m){v.diffuse.value.copy(m.color),v.opacity.value=m.opacity,v.rotation.value=m.rotation,m.map&&(v.map.value=m.map,e(m.map,v.mapTransform)),m.alphaMap&&(v.alphaMap.value=m.alphaMap,e(m.alphaMap,v.alphaMapTransform)),m.alphaTest>0&&(v.alphaTest.value=m.alphaTest)}function d(v,m){v.specular.value.copy(m.specular),v.shininess.value=Math.max(m.shininess,1e-4)}function f(v,m){m.gradientMap&&(v.gradientMap.value=m.gradientMap)}function g(v,m){v.metalness.value=m.metalness,m.metalnessMap&&(v.metalnessMap.value=m.metalnessMap,e(m.metalnessMap,v.metalnessMapTransform)),v.roughness.value=m.roughness,m.roughnessMap&&(v.roughnessMap.value=m.roughnessMap,e(m.roughnessMap,v.roughnessMapTransform)),m.envMap&&(v.envMapIntensity.value=m.envMapIntensity)}function _(v,m,T){v.ior.value=m.ior,m.sheen>0&&(v.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),v.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(v.sheenColorMap.value=m.sheenColorMap,e(m.sheenColorMap,v.sheenColorMapTransform)),m.sheenRoughnessMap&&(v.sheenRoughnessMap.value=m.sheenRoughnessMap,e(m.sheenRoughnessMap,v.sheenRoughnessMapTransform))),m.clearcoat>0&&(v.clearcoat.value=m.clearcoat,v.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(v.clearcoatMap.value=m.clearcoatMap,e(m.clearcoatMap,v.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(v.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,e(m.clearcoatRoughnessMap,v.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(v.clearcoatNormalMap.value=m.clearcoatNormalMap,e(m.clearcoatNormalMap,v.clearcoatNormalMapTransform),v.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Be&&v.clearcoatNormalScale.value.negate())),m.dispersion>0&&(v.dispersion.value=m.dispersion),m.iridescence>0&&(v.iridescence.value=m.iridescence,v.iridescenceIOR.value=m.iridescenceIOR,v.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],v.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(v.iridescenceMap.value=m.iridescenceMap,e(m.iridescenceMap,v.iridescenceMapTransform)),m.iridescenceThicknessMap&&(v.iridescenceThicknessMap.value=m.iridescenceThicknessMap,e(m.iridescenceThicknessMap,v.iridescenceThicknessMapTransform))),m.transmission>0&&(v.transmission.value=m.transmission,v.transmissionSamplerMap.value=T.texture,v.transmissionSamplerSize.value.set(T.width,T.height),m.transmissionMap&&(v.transmissionMap.value=m.transmissionMap,e(m.transmissionMap,v.transmissionMapTransform)),v.thickness.value=m.thickness,m.thicknessMap&&(v.thicknessMap.value=m.thicknessMap,e(m.thicknessMap,v.thicknessMapTransform)),v.attenuationDistance.value=m.attenuationDistance,v.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(v.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(v.anisotropyMap.value=m.anisotropyMap,e(m.anisotropyMap,v.anisotropyMapTransform))),v.specularIntensity.value=m.specularIntensity,v.specularColor.value.copy(m.specularColor),m.specularColorMap&&(v.specularColorMap.value=m.specularColorMap,e(m.specularColorMap,v.specularColorMapTransform)),m.specularIntensityMap&&(v.specularIntensityMap.value=m.specularIntensityMap,e(m.specularIntensityMap,v.specularIntensityMapTransform))}function S(v,m){m.matcap&&(v.matcap.value=m.matcap)}function w(v,m){const T=t.get(m).light;v.referencePosition.value.setFromMatrixPosition(T.matrixWorld),v.nearDistance.value=T.shadow.camera.near,v.farDistance.value=T.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:r}}function ex(i,t,e,n){let r={},s={},o=[];const a=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function u(T,p){const l=p.program;n.uniformBlockBinding(T,l)}function h(T,p){let l=r[T.id];l===void 0&&(S(T),l=d(T),r[T.id]=l,T.addEventListener("dispose",v));const x=p.program;n.updateUBOMapping(T,x);const c=t.render.frame;s[T.id]!==c&&(g(T),s[T.id]=c)}function d(T){const p=f();T.__bindingPointIndex=p;const l=i.createBuffer(),x=T.__size,c=T.usage;return i.bindBuffer(i.UNIFORM_BUFFER,l),i.bufferData(i.UNIFORM_BUFFER,x,c),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,p,l),l}function f(){for(let T=0;T<a;T++)if(o.indexOf(T)===-1)return o.push(T),T;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(T){const p=r[T.id],l=T.uniforms,x=T.__cache;i.bindBuffer(i.UNIFORM_BUFFER,p);for(let c=0,P=l.length;c<P;c++){const b=Array.isArray(l[c])?l[c]:[l[c]];for(let M=0,y=b.length;M<y;M++){const E=b[M];if(_(E,c,M,x)===!0){const A=E.__offset,R=Array.isArray(E.value)?E.value:[E.value];let L=0;for(let B=0;B<R.length;B++){const F=R[B],z=w(F);typeof F=="number"||typeof F=="boolean"?(E.__data[0]=F,i.bufferSubData(i.UNIFORM_BUFFER,A+L,E.__data)):F.isMatrix3?(E.__data[0]=F.elements[0],E.__data[1]=F.elements[1],E.__data[2]=F.elements[2],E.__data[3]=0,E.__data[4]=F.elements[3],E.__data[5]=F.elements[4],E.__data[6]=F.elements[5],E.__data[7]=0,E.__data[8]=F.elements[6],E.__data[9]=F.elements[7],E.__data[10]=F.elements[8],E.__data[11]=0):(F.toArray(E.__data,L),L+=z.storage/Float32Array.BYTES_PER_ELEMENT)}i.bufferSubData(i.UNIFORM_BUFFER,A,E.__data)}}}i.bindBuffer(i.UNIFORM_BUFFER,null)}function _(T,p,l,x){const c=T.value,P=p+"_"+l;if(x[P]===void 0)return typeof c=="number"||typeof c=="boolean"?x[P]=c:x[P]=c.clone(),!0;{const b=x[P];if(typeof c=="number"||typeof c=="boolean"){if(b!==c)return x[P]=c,!0}else if(b.equals(c)===!1)return b.copy(c),!0}return!1}function S(T){const p=T.uniforms;let l=0;const x=16;for(let P=0,b=p.length;P<b;P++){const M=Array.isArray(p[P])?p[P]:[p[P]];for(let y=0,E=M.length;y<E;y++){const A=M[y],R=Array.isArray(A.value)?A.value:[A.value];for(let L=0,B=R.length;L<B;L++){const F=R[L],z=w(F),O=l%x,$=O%z.boundary,et=O+$;l+=$,et!==0&&x-et<z.storage&&(l+=x-et),A.__data=new Float32Array(z.storage/Float32Array.BYTES_PER_ELEMENT),A.__offset=l,l+=z.storage}}}const c=l%x;return c>0&&(l+=x-c),T.__size=l,T.__cache={},this}function w(T){const p={boundary:0,storage:0};return typeof T=="number"||typeof T=="boolean"?(p.boundary=4,p.storage=4):T.isVector2?(p.boundary=8,p.storage=8):T.isVector3||T.isColor?(p.boundary=16,p.storage=12):T.isVector4?(p.boundary=16,p.storage=16):T.isMatrix3?(p.boundary=48,p.storage=48):T.isMatrix4?(p.boundary=64,p.storage=64):T.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",T),p}function v(T){const p=T.target;p.removeEventListener("dispose",v);const l=o.indexOf(p.__bindingPointIndex);o.splice(l,1),i.deleteBuffer(r[p.id]),delete r[p.id],delete s[p.id]}function m(){for(const T in r)i.deleteBuffer(r[T]);o=[],r={},s={}}return{bind:u,update:h,dispose:m}}class nx{constructor(t={}){const{canvas:e=Rf(),context:n=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:u=!0,preserveDrawingBuffer:h=!1,powerPreference:d="default",failIfMajorPerformanceCaveat:f=!1,reversedDepthBuffer:g=!1}=t;this.isWebGLRenderer=!0;let _;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");_=n.getContextAttributes().alpha}else _=o;const S=new Uint32Array(4),w=new Int32Array(4);let v=null,m=null;const T=[],p=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=si,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const l=this;let x=!1;this._outputColorSpace=Qe;let c=0,P=0,b=null,M=-1,y=null;const E=new oe,A=new oe;let R=null;const L=new Zt(0);let B=0,F=e.width,z=e.height,O=1,$=null,et=null;const Q=new oe(0,0,F,z),rt=new oe(0,0,F,z);let Et=!1;const vt=new jl;let W=!1,nt=!1;const J=new Kt,dt=new U,it=new oe,_t={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Ot(){return b===null?O:1}let N=n;function It(D,k){return e.getContext(D,k)}try{const D={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:u,preserveDrawingBuffer:h,powerPreference:d,failIfMajorPerformanceCaveat:f};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Qr}`),e.addEventListener("webglcontextlost",mt,!1),e.addEventListener("webglcontextrestored",At,!1),e.addEventListener("webglcontextcreationerror",st,!1),N===null){const k="webgl2";if(N=It(k,D),N===null)throw It(k)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(D){throw console.error("THREE.WebGLRenderer: "+D.message),D}let pt,bt,ut,Jt,at,wt,Gt,kt,I,C,H,q,K,X,gt,ft,Pt,Ct,lt,St,zt,Lt,yt,Yt;function V(){pt=new dm(N),pt.init(),Lt=new $v(N,pt),bt=new sm(N,pt,t,Lt),ut=new qv(N,pt),bt.reversedDepthBuffer&&g&&ut.buffers.depth.setReversed(!0),Jt=new gm(N),at=new Lv,wt=new Yv(N,pt,ut,at,bt,Lt,Jt),Gt=new am(l),kt=new um(l),I=new Mp(N),yt=new im(N,I),C=new fm(N,I,Jt,yt),H=new mm(N,C,I,Jt),lt=new _m(N,bt,wt),ft=new om(at),q=new Iv(l,Gt,kt,pt,bt,yt,ft),K=new tx(l,at),X=new Nv,gt=new Hv(pt),Ct=new nm(l,Gt,kt,ut,H,_,u),Pt=new Wv(l,H,bt),Yt=new ex(N,Jt,bt,ut),St=new rm(N,pt,Jt),zt=new pm(N,pt,Jt),Jt.programs=q.programs,l.capabilities=bt,l.extensions=pt,l.properties=at,l.renderLists=X,l.shadowMap=Pt,l.state=ut,l.info=Jt}V();const ct=new Jv(l,N);this.xr=ct,this.getContext=function(){return N},this.getContextAttributes=function(){return N.getContextAttributes()},this.forceContextLoss=function(){const D=pt.get("WEBGL_lose_context");D&&D.loseContext()},this.forceContextRestore=function(){const D=pt.get("WEBGL_lose_context");D&&D.restoreContext()},this.getPixelRatio=function(){return O},this.setPixelRatio=function(D){D!==void 0&&(O=D,this.setSize(F,z,!1))},this.getSize=function(D){return D.set(F,z)},this.setSize=function(D,k,Y=!0){if(ct.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}F=D,z=k,e.width=Math.floor(D*O),e.height=Math.floor(k*O),Y===!0&&(e.style.width=D+"px",e.style.height=k+"px"),this.setViewport(0,0,D,k)},this.getDrawingBufferSize=function(D){return D.set(F*O,z*O).floor()},this.setDrawingBufferSize=function(D,k,Y){F=D,z=k,O=Y,e.width=Math.floor(D*Y),e.height=Math.floor(k*Y),this.setViewport(0,0,D,k)},this.getCurrentViewport=function(D){return D.copy(E)},this.getViewport=function(D){return D.copy(Q)},this.setViewport=function(D,k,Y,Z){D.isVector4?Q.set(D.x,D.y,D.z,D.w):Q.set(D,k,Y,Z),ut.viewport(E.copy(Q).multiplyScalar(O).round())},this.getScissor=function(D){return D.copy(rt)},this.setScissor=function(D,k,Y,Z){D.isVector4?rt.set(D.x,D.y,D.z,D.w):rt.set(D,k,Y,Z),ut.scissor(A.copy(rt).multiplyScalar(O).round())},this.getScissorTest=function(){return Et},this.setScissorTest=function(D){ut.setScissorTest(Et=D)},this.setOpaqueSort=function(D){$=D},this.setTransparentSort=function(D){et=D},this.getClearColor=function(D){return D.copy(Ct.getClearColor())},this.setClearColor=function(){Ct.setClearColor(...arguments)},this.getClearAlpha=function(){return Ct.getClearAlpha()},this.setClearAlpha=function(){Ct.setClearAlpha(...arguments)},this.clear=function(D=!0,k=!0,Y=!0){let Z=0;if(D){let G=!1;if(b!==null){const ot=b.texture.format;G=ot===Xl||ot===Wl||ot===Gl}if(G){const ot=b.texture.type,Mt=ot===An||ot===Pi||ot===Zr||ot===jr||ot===Hl||ot===kl,Rt=Ct.getClearColor(),Tt=Ct.getClearAlpha(),Vt=Rt.r,Ht=Rt.g,Nt=Rt.b;Mt?(S[0]=Vt,S[1]=Ht,S[2]=Nt,S[3]=Tt,N.clearBufferuiv(N.COLOR,0,S)):(w[0]=Vt,w[1]=Ht,w[2]=Nt,w[3]=Tt,N.clearBufferiv(N.COLOR,0,w))}else Z|=N.COLOR_BUFFER_BIT}k&&(Z|=N.DEPTH_BUFFER_BIT),Y&&(Z|=N.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),N.clear(Z)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",mt,!1),e.removeEventListener("webglcontextrestored",At,!1),e.removeEventListener("webglcontextcreationerror",st,!1),Ct.dispose(),X.dispose(),gt.dispose(),at.dispose(),Gt.dispose(),kt.dispose(),H.dispose(),yt.dispose(),Yt.dispose(),q.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",yn),ct.removeEventListener("sessionend",xc),li.stop()};function mt(D){D.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),x=!0}function At(){console.log("THREE.WebGLRenderer: Context Restored."),x=!1;const D=Jt.autoReset,k=Pt.enabled,Y=Pt.autoUpdate,Z=Pt.needsUpdate,G=Pt.type;V(),Jt.autoReset=D,Pt.enabled=k,Pt.autoUpdate=Y,Pt.needsUpdate=Z,Pt.type=G}function st(D){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",D.statusMessage)}function tt(D){const k=D.target;k.removeEventListener("dispose",tt),Dt(k)}function Dt(D){Wt(D),at.remove(D)}function Wt(D){const k=at.get(D).programs;k!==void 0&&(k.forEach(function(Y){q.releaseProgram(Y)}),D.isShaderMaterial&&q.releaseShaderCache(D))}this.renderBufferDirect=function(D,k,Y,Z,G,ot){k===null&&(k=_t);const Mt=G.isMesh&&G.matrixWorld.determinant()<0,Rt=Ld(D,k,Y,Z,G);ut.setMaterial(Z,Mt);let Tt=Y.index,Vt=1;if(Z.wireframe===!0){if(Tt=C.getWireframeAttribute(Y),Tt===void 0)return;Vt=2}const Ht=Y.drawRange,Nt=Y.attributes.position;let jt=Ht.start*Vt,ne=(Ht.start+Ht.count)*Vt;ot!==null&&(jt=Math.max(jt,ot.start*Vt),ne=Math.min(ne,(ot.start+ot.count)*Vt)),Tt!==null?(jt=Math.max(jt,0),ne=Math.min(ne,Tt.count)):Nt!=null&&(jt=Math.max(jt,0),ne=Math.min(ne,Nt.count));const pe=ne-jt;if(pe<0||pe===1/0)return;yt.setup(G,Z,Rt,Y,Tt);let ce,se=St;if(Tt!==null&&(ce=I.get(Tt),se=zt,se.setIndex(ce)),G.isMesh)Z.wireframe===!0?(ut.setLineWidth(Z.wireframeLinewidth*Ot()),se.setMode(N.LINES)):se.setMode(N.TRIANGLES);else if(G.isLine){let Bt=Z.linewidth;Bt===void 0&&(Bt=1),ut.setLineWidth(Bt*Ot()),G.isLineSegments?se.setMode(N.LINES):G.isLineLoop?se.setMode(N.LINE_LOOP):se.setMode(N.LINE_STRIP)}else G.isPoints?se.setMode(N.POINTS):G.isSprite&&se.setMode(N.TRIANGLES);if(G.isBatchedMesh)if(G._multiDrawInstances!==null)_r("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),se.renderMultiDrawInstances(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount,G._multiDrawInstances);else if(pt.get("WEBGL_multi_draw"))se.renderMultiDraw(G._multiDrawStarts,G._multiDrawCounts,G._multiDrawCount);else{const Bt=G._multiDrawStarts,de=G._multiDrawCounts,Qt=G._multiDrawCount,Ze=Tt?I.get(Tt).bytesPerElement:1,Ni=at.get(Z).currentProgram.getUniforms();for(let je=0;je<Qt;je++)Ni.setValue(N,"_gl_DrawID",je),se.render(Bt[je]/Ze,de[je])}else if(G.isInstancedMesh)se.renderInstances(jt,pe,G.count);else if(Y.isInstancedBufferGeometry){const Bt=Y._maxInstanceCount!==void 0?Y._maxInstanceCount:1/0,de=Math.min(Y.instanceCount,Bt);se.renderInstances(jt,pe,de)}else se.render(jt,pe)};function ae(D,k,Y){D.transparent===!0&&D.side===_n&&D.forceSinglePass===!1?(D.side=Be,D.needsUpdate=!0,ss(D,k,Y),D.side=bn,D.needsUpdate=!0,ss(D,k,Y),D.side=_n):ss(D,k,Y)}this.compile=function(D,k,Y=null){Y===null&&(Y=D),m=gt.get(Y),m.init(k),p.push(m),Y.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),D!==Y&&D.traverseVisible(function(G){G.isLight&&G.layers.test(k.layers)&&(m.pushLight(G),G.castShadow&&m.pushShadow(G))}),m.setupLights();const Z=new Set;return D.traverse(function(G){if(!(G.isMesh||G.isPoints||G.isLine||G.isSprite))return;const ot=G.material;if(ot)if(Array.isArray(ot))for(let Mt=0;Mt<ot.length;Mt++){const Rt=ot[Mt];ae(Rt,Y,G),Z.add(Rt)}else ae(ot,Y,G),Z.add(ot)}),m=p.pop(),Z},this.compileAsync=function(D,k,Y=null){const Z=this.compile(D,k,Y);return new Promise(G=>{function ot(){if(Z.forEach(function(Mt){at.get(Mt).currentProgram.isReady()&&Z.delete(Mt)}),Z.size===0){G(D);return}setTimeout(ot,10)}pt.get("KHR_parallel_shader_compile")!==null?ot():setTimeout(ot,10)})};let ee=null;function Rn(D){ee&&ee(D)}function yn(){li.stop()}function xc(){li.start()}const li=new ad;li.setAnimationLoop(Rn),typeof self<"u"&&li.setContext(self),this.setAnimationLoop=function(D){ee=D,ct.setAnimationLoop(D),D===null?li.stop():li.start()},ct.addEventListener("sessionstart",yn),ct.addEventListener("sessionend",xc),this.render=function(D,k){if(k!==void 0&&k.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(x===!0)return;if(D.matrixWorldAutoUpdate===!0&&D.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(k),k=ct.getCamera()),D.isScene===!0&&D.onBeforeRender(l,D,k,b),m=gt.get(D,p.length),m.init(k),p.push(m),J.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),vt.setFromProjectionMatrix(J,wn,k.reversedDepth),nt=this.localClippingEnabled,W=ft.init(this.clippingPlanes,nt),v=X.get(D,T.length),v.init(),T.push(v),ct.enabled===!0&&ct.isPresenting===!0){const ot=l.xr.getDepthSensingMesh();ot!==null&&Ao(ot,k,-1/0,l.sortObjects)}Ao(D,k,0,l.sortObjects),v.finish(),l.sortObjects===!0&&v.sort($,et),Ut=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,Ut&&Ct.addToRenderList(v,D),this.info.render.frame++,W===!0&&ft.beginShadows();const Y=m.state.shadowsArray;Pt.render(Y,D,k),W===!0&&ft.endShadows(),this.info.autoReset===!0&&this.info.reset();const Z=v.opaque,G=v.transmissive;if(m.setupLights(),k.isArrayCamera){const ot=k.cameras;if(G.length>0)for(let Mt=0,Rt=ot.length;Mt<Rt;Mt++){const Tt=ot[Mt];Mc(Z,G,D,Tt)}Ut&&Ct.render(D);for(let Mt=0,Rt=ot.length;Mt<Rt;Mt++){const Tt=ot[Mt];yc(v,D,Tt,Tt.viewport)}}else G.length>0&&Mc(Z,G,D,k),Ut&&Ct.render(D),yc(v,D,k);b!==null&&P===0&&(wt.updateMultisampleRenderTarget(b),wt.updateRenderTargetMipmap(b)),D.isScene===!0&&D.onAfterRender(l,D,k),yt.resetDefaultState(),M=-1,y=null,p.pop(),p.length>0?(m=p[p.length-1],W===!0&&ft.setGlobalState(l.clippingPlanes,m.state.camera)):m=null,T.pop(),T.length>0?v=T[T.length-1]:v=null};function Ao(D,k,Y,Z){if(D.visible===!1)return;if(D.layers.test(k.layers)){if(D.isGroup)Y=D.renderOrder;else if(D.isLOD)D.autoUpdate===!0&&D.update(k);else if(D.isLight)m.pushLight(D),D.castShadow&&m.pushShadow(D);else if(D.isSprite){if(!D.frustumCulled||vt.intersectsSprite(D)){Z&&it.setFromMatrixPosition(D.matrixWorld).applyMatrix4(J);const Mt=H.update(D),Rt=D.material;Rt.visible&&v.push(D,Mt,Rt,Y,it.z,null)}}else if((D.isMesh||D.isLine||D.isPoints)&&(!D.frustumCulled||vt.intersectsObject(D))){const Mt=H.update(D),Rt=D.material;if(Z&&(D.boundingSphere!==void 0?(D.boundingSphere===null&&D.computeBoundingSphere(),it.copy(D.boundingSphere.center)):(Mt.boundingSphere===null&&Mt.computeBoundingSphere(),it.copy(Mt.boundingSphere.center)),it.applyMatrix4(D.matrixWorld).applyMatrix4(J)),Array.isArray(Rt)){const Tt=Mt.groups;for(let Vt=0,Ht=Tt.length;Vt<Ht;Vt++){const Nt=Tt[Vt],jt=Rt[Nt.materialIndex];jt&&jt.visible&&v.push(D,Mt,jt,Y,it.z,Nt)}}else Rt.visible&&v.push(D,Mt,Rt,Y,it.z,null)}}const ot=D.children;for(let Mt=0,Rt=ot.length;Mt<Rt;Mt++)Ao(ot[Mt],k,Y,Z)}function yc(D,k,Y,Z){const G=D.opaque,ot=D.transmissive,Mt=D.transparent;m.setupLightsView(Y),W===!0&&ft.setGlobalState(l.clippingPlanes,Y),Z&&ut.viewport(E.copy(Z)),G.length>0&&rs(G,k,Y),ot.length>0&&rs(ot,k,Y),Mt.length>0&&rs(Mt,k,Y),ut.buffers.depth.setTest(!0),ut.buffers.depth.setMask(!0),ut.buffers.color.setMask(!0),ut.setPolygonOffset(!1)}function Mc(D,k,Y,Z){if((Y.isScene===!0?Y.overrideMaterial:null)!==null)return;m.state.transmissionRenderTarget[Z.id]===void 0&&(m.state.transmissionRenderTarget[Z.id]=new Di(1,1,{generateMipmaps:!0,type:pt.has("EXT_color_buffer_half_float")||pt.has("EXT_color_buffer_float")?ts:An,minFilter:bi,samples:4,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:te.workingColorSpace}));const ot=m.state.transmissionRenderTarget[Z.id],Mt=Z.viewport||E;ot.setSize(Mt.z*l.transmissionResolutionScale,Mt.w*l.transmissionResolutionScale);const Rt=l.getRenderTarget(),Tt=l.getActiveCubeFace(),Vt=l.getActiveMipmapLevel();l.setRenderTarget(ot),l.getClearColor(L),B=l.getClearAlpha(),B<1&&l.setClearColor(16777215,.5),l.clear(),Ut&&Ct.render(Y);const Ht=l.toneMapping;l.toneMapping=si;const Nt=Z.viewport;if(Z.viewport!==void 0&&(Z.viewport=void 0),m.setupLightsView(Z),W===!0&&ft.setGlobalState(l.clippingPlanes,Z),rs(D,Y,Z),wt.updateMultisampleRenderTarget(ot),wt.updateRenderTargetMipmap(ot),pt.has("WEBGL_multisampled_render_to_texture")===!1){let jt=!1;for(let ne=0,pe=k.length;ne<pe;ne++){const ce=k[ne],se=ce.object,Bt=ce.geometry,de=ce.material,Qt=ce.group;if(de.side===_n&&se.layers.test(Z.layers)){const Ze=de.side;de.side=Be,de.needsUpdate=!0,Sc(se,Y,Z,Bt,de,Qt),de.side=Ze,de.needsUpdate=!0,jt=!0}}jt===!0&&(wt.updateMultisampleRenderTarget(ot),wt.updateRenderTargetMipmap(ot))}l.setRenderTarget(Rt,Tt,Vt),l.setClearColor(L,B),Nt!==void 0&&(Z.viewport=Nt),l.toneMapping=Ht}function rs(D,k,Y){const Z=k.isScene===!0?k.overrideMaterial:null;for(let G=0,ot=D.length;G<ot;G++){const Mt=D[G],Rt=Mt.object,Tt=Mt.geometry,Vt=Mt.group;let Ht=Mt.material;Ht.allowOverride===!0&&Z!==null&&(Ht=Z),Rt.layers.test(Y.layers)&&Sc(Rt,k,Y,Tt,Ht,Vt)}}function Sc(D,k,Y,Z,G,ot){D.onBeforeRender(l,k,Y,Z,G,ot),D.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,D.matrixWorld),D.normalMatrix.getNormalMatrix(D.modelViewMatrix),G.onBeforeRender(l,k,Y,Z,D,ot),G.transparent===!0&&G.side===_n&&G.forceSinglePass===!1?(G.side=Be,G.needsUpdate=!0,l.renderBufferDirect(Y,k,Z,G,D,ot),G.side=bn,G.needsUpdate=!0,l.renderBufferDirect(Y,k,Z,G,D,ot),G.side=_n):l.renderBufferDirect(Y,k,Z,G,D,ot),D.onAfterRender(l,k,Y,Z,G,ot)}function ss(D,k,Y){k.isScene!==!0&&(k=_t);const Z=at.get(D),G=m.state.lights,ot=m.state.shadowsArray,Mt=G.state.version,Rt=q.getParameters(D,G.state,ot,k,Y),Tt=q.getProgramCacheKey(Rt);let Vt=Z.programs;Z.environment=D.isMeshStandardMaterial?k.environment:null,Z.fog=k.fog,Z.envMap=(D.isMeshStandardMaterial?kt:Gt).get(D.envMap||Z.environment),Z.envMapRotation=Z.environment!==null&&D.envMap===null?k.environmentRotation:D.envMapRotation,Vt===void 0&&(D.addEventListener("dispose",tt),Vt=new Map,Z.programs=Vt);let Ht=Vt.get(Tt);if(Ht!==void 0){if(Z.currentProgram===Ht&&Z.lightsStateVersion===Mt)return wc(D,Rt),Ht}else Rt.uniforms=q.getUniforms(D),D.onBeforeCompile(Rt,l),Ht=q.acquireProgram(Rt,Tt),Vt.set(Tt,Ht),Z.uniforms=Rt.uniforms;const Nt=Z.uniforms;return(!D.isShaderMaterial&&!D.isRawShaderMaterial||D.clipping===!0)&&(Nt.clippingPlanes=ft.uniform),wc(D,Rt),Z.needsLights=Nd(D),Z.lightsStateVersion=Mt,Z.needsLights&&(Nt.ambientLightColor.value=G.state.ambient,Nt.lightProbe.value=G.state.probe,Nt.directionalLights.value=G.state.directional,Nt.directionalLightShadows.value=G.state.directionalShadow,Nt.spotLights.value=G.state.spot,Nt.spotLightShadows.value=G.state.spotShadow,Nt.rectAreaLights.value=G.state.rectArea,Nt.ltc_1.value=G.state.rectAreaLTC1,Nt.ltc_2.value=G.state.rectAreaLTC2,Nt.pointLights.value=G.state.point,Nt.pointLightShadows.value=G.state.pointShadow,Nt.hemisphereLights.value=G.state.hemi,Nt.directionalShadowMap.value=G.state.directionalShadowMap,Nt.directionalShadowMatrix.value=G.state.directionalShadowMatrix,Nt.spotShadowMap.value=G.state.spotShadowMap,Nt.spotLightMatrix.value=G.state.spotLightMatrix,Nt.spotLightMap.value=G.state.spotLightMap,Nt.pointShadowMap.value=G.state.pointShadowMap,Nt.pointShadowMatrix.value=G.state.pointShadowMatrix),Z.currentProgram=Ht,Z.uniformsList=null,Ht}function Ec(D){if(D.uniformsList===null){const k=D.currentProgram.getUniforms();D.uniformsList=ro.seqWithValue(k.seq,D.uniforms)}return D.uniformsList}function wc(D,k){const Y=at.get(D);Y.outputColorSpace=k.outputColorSpace,Y.batching=k.batching,Y.batchingColor=k.batchingColor,Y.instancing=k.instancing,Y.instancingColor=k.instancingColor,Y.instancingMorph=k.instancingMorph,Y.skinning=k.skinning,Y.morphTargets=k.morphTargets,Y.morphNormals=k.morphNormals,Y.morphColors=k.morphColors,Y.morphTargetsCount=k.morphTargetsCount,Y.numClippingPlanes=k.numClippingPlanes,Y.numIntersection=k.numClipIntersection,Y.vertexAlphas=k.vertexAlphas,Y.vertexTangents=k.vertexTangents,Y.toneMapping=k.toneMapping}function Ld(D,k,Y,Z,G){k.isScene!==!0&&(k=_t),wt.resetTextureUnits();const ot=k.fog,Mt=Z.isMeshStandardMaterial?k.environment:null,Rt=b===null?l.outputColorSpace:b.isXRRenderTarget===!0?b.texture.colorSpace:Mr,Tt=(Z.isMeshStandardMaterial?kt:Gt).get(Z.envMap||Mt),Vt=Z.vertexColors===!0&&!!Y.attributes.color&&Y.attributes.color.itemSize===4,Ht=!!Y.attributes.tangent&&(!!Z.normalMap||Z.anisotropy>0),Nt=!!Y.morphAttributes.position,jt=!!Y.morphAttributes.normal,ne=!!Y.morphAttributes.color;let pe=si;Z.toneMapped&&(b===null||b.isXRRenderTarget===!0)&&(pe=l.toneMapping);const ce=Y.morphAttributes.position||Y.morphAttributes.normal||Y.morphAttributes.color,se=ce!==void 0?ce.length:0,Bt=at.get(Z),de=m.state.lights;if(W===!0&&(nt===!0||D!==y)){const Ue=D===y&&Z.id===M;ft.setState(Z,D,Ue)}let Qt=!1;Z.version===Bt.__version?(Bt.needsLights&&Bt.lightsStateVersion!==de.state.version||Bt.outputColorSpace!==Rt||G.isBatchedMesh&&Bt.batching===!1||!G.isBatchedMesh&&Bt.batching===!0||G.isBatchedMesh&&Bt.batchingColor===!0&&G.colorTexture===null||G.isBatchedMesh&&Bt.batchingColor===!1&&G.colorTexture!==null||G.isInstancedMesh&&Bt.instancing===!1||!G.isInstancedMesh&&Bt.instancing===!0||G.isSkinnedMesh&&Bt.skinning===!1||!G.isSkinnedMesh&&Bt.skinning===!0||G.isInstancedMesh&&Bt.instancingColor===!0&&G.instanceColor===null||G.isInstancedMesh&&Bt.instancingColor===!1&&G.instanceColor!==null||G.isInstancedMesh&&Bt.instancingMorph===!0&&G.morphTexture===null||G.isInstancedMesh&&Bt.instancingMorph===!1&&G.morphTexture!==null||Bt.envMap!==Tt||Z.fog===!0&&Bt.fog!==ot||Bt.numClippingPlanes!==void 0&&(Bt.numClippingPlanes!==ft.numPlanes||Bt.numIntersection!==ft.numIntersection)||Bt.vertexAlphas!==Vt||Bt.vertexTangents!==Ht||Bt.morphTargets!==Nt||Bt.morphNormals!==jt||Bt.morphColors!==ne||Bt.toneMapping!==pe||Bt.morphTargetsCount!==se)&&(Qt=!0):(Qt=!0,Bt.__version=Z.version);let Ze=Bt.currentProgram;Qt===!0&&(Ze=ss(Z,k,G));let Ni=!1,je=!1,Rr=!1;const fe=Ze.getUniforms(),nn=Bt.uniforms;if(ut.useProgram(Ze.program)&&(Ni=!0,je=!0,Rr=!0),Z.id!==M&&(M=Z.id,je=!0),Ni||y!==D){ut.buffers.depth.getReversed()&&D.reversedDepth!==!0&&(D._reversedDepth=!0,D.updateProjectionMatrix()),fe.setValue(N,"projectionMatrix",D.projectionMatrix),fe.setValue(N,"viewMatrix",D.matrixWorldInverse);const ze=fe.map.cameraPosition;ze!==void 0&&ze.setValue(N,dt.setFromMatrixPosition(D.matrixWorld)),bt.logarithmicDepthBuffer&&fe.setValue(N,"logDepthBufFC",2/(Math.log(D.far+1)/Math.LN2)),(Z.isMeshPhongMaterial||Z.isMeshToonMaterial||Z.isMeshLambertMaterial||Z.isMeshBasicMaterial||Z.isMeshStandardMaterial||Z.isShaderMaterial)&&fe.setValue(N,"isOrthographic",D.isOrthographicCamera===!0),y!==D&&(y=D,je=!0,Rr=!0)}if(G.isSkinnedMesh){fe.setOptional(N,G,"bindMatrix"),fe.setOptional(N,G,"bindMatrixInverse");const Ue=G.skeleton;Ue&&(Ue.boneTexture===null&&Ue.computeBoneTexture(),fe.setValue(N,"boneTexture",Ue.boneTexture,wt))}G.isBatchedMesh&&(fe.setOptional(N,G,"batchingTexture"),fe.setValue(N,"batchingTexture",G._matricesTexture,wt),fe.setOptional(N,G,"batchingIdTexture"),fe.setValue(N,"batchingIdTexture",G._indirectTexture,wt),fe.setOptional(N,G,"batchingColorTexture"),G._colorsTexture!==null&&fe.setValue(N,"batchingColorTexture",G._colorsTexture,wt));const rn=Y.morphAttributes;if((rn.position!==void 0||rn.normal!==void 0||rn.color!==void 0)&&lt.update(G,Y,Ze),(je||Bt.receiveShadow!==G.receiveShadow)&&(Bt.receiveShadow=G.receiveShadow,fe.setValue(N,"receiveShadow",G.receiveShadow)),Z.isMeshGouraudMaterial&&Z.envMap!==null&&(nn.envMap.value=Tt,nn.flipEnvMap.value=Tt.isCubeTexture&&Tt.isRenderTargetTexture===!1?-1:1),Z.isMeshStandardMaterial&&Z.envMap===null&&k.environment!==null&&(nn.envMapIntensity.value=k.environmentIntensity),je&&(fe.setValue(N,"toneMappingExposure",l.toneMappingExposure),Bt.needsLights&&Ud(nn,Rr),ot&&Z.fog===!0&&K.refreshFogUniforms(nn,ot),K.refreshMaterialUniforms(nn,Z,O,z,m.state.transmissionRenderTarget[D.id]),ro.upload(N,Ec(Bt),nn,wt)),Z.isShaderMaterial&&Z.uniformsNeedUpdate===!0&&(ro.upload(N,Ec(Bt),nn,wt),Z.uniformsNeedUpdate=!1),Z.isSpriteMaterial&&fe.setValue(N,"center",G.center),fe.setValue(N,"modelViewMatrix",G.modelViewMatrix),fe.setValue(N,"normalMatrix",G.normalMatrix),fe.setValue(N,"modelMatrix",G.matrixWorld),Z.isShaderMaterial||Z.isRawShaderMaterial){const Ue=Z.uniformsGroups;for(let ze=0,Ro=Ue.length;ze<Ro;ze++){const ci=Ue[ze];Yt.update(ci,Ze),Yt.bind(ci,Ze)}}return Ze}function Ud(D,k){D.ambientLightColor.needsUpdate=k,D.lightProbe.needsUpdate=k,D.directionalLights.needsUpdate=k,D.directionalLightShadows.needsUpdate=k,D.pointLights.needsUpdate=k,D.pointLightShadows.needsUpdate=k,D.spotLights.needsUpdate=k,D.spotLightShadows.needsUpdate=k,D.rectAreaLights.needsUpdate=k,D.hemisphereLights.needsUpdate=k}function Nd(D){return D.isMeshLambertMaterial||D.isMeshToonMaterial||D.isMeshPhongMaterial||D.isMeshStandardMaterial||D.isShadowMaterial||D.isShaderMaterial&&D.lights===!0}this.getActiveCubeFace=function(){return c},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return b},this.setRenderTargetTextures=function(D,k,Y){const Z=at.get(D);Z.__autoAllocateDepthBuffer=D.resolveDepthBuffer===!1,Z.__autoAllocateDepthBuffer===!1&&(Z.__useRenderToTexture=!1),at.get(D.texture).__webglTexture=k,at.get(D.depthTexture).__webglTexture=Z.__autoAllocateDepthBuffer?void 0:Y,Z.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(D,k){const Y=at.get(D);Y.__webglFramebuffer=k,Y.__useDefaultFramebuffer=k===void 0};const Fd=N.createFramebuffer();this.setRenderTarget=function(D,k=0,Y=0){b=D,c=k,P=Y;let Z=!0,G=null,ot=!1,Mt=!1;if(D){const Tt=at.get(D);if(Tt.__useDefaultFramebuffer!==void 0)ut.bindFramebuffer(N.FRAMEBUFFER,null),Z=!1;else if(Tt.__webglFramebuffer===void 0)wt.setupRenderTarget(D);else if(Tt.__hasExternalTextures)wt.rebindTextures(D,at.get(D.texture).__webglTexture,at.get(D.depthTexture).__webglTexture);else if(D.depthBuffer){const Nt=D.depthTexture;if(Tt.__boundDepthTexture!==Nt){if(Nt!==null&&at.has(Nt)&&(D.width!==Nt.image.width||D.height!==Nt.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");wt.setupDepthRenderbuffer(D)}}const Vt=D.texture;(Vt.isData3DTexture||Vt.isDataArrayTexture||Vt.isCompressedArrayTexture)&&(Mt=!0);const Ht=at.get(D).__webglFramebuffer;D.isWebGLCubeRenderTarget?(Array.isArray(Ht[k])?G=Ht[k][Y]:G=Ht[k],ot=!0):D.samples>0&&wt.useMultisampledRTT(D)===!1?G=at.get(D).__webglMultisampledFramebuffer:Array.isArray(Ht)?G=Ht[Y]:G=Ht,E.copy(D.viewport),A.copy(D.scissor),R=D.scissorTest}else E.copy(Q).multiplyScalar(O).floor(),A.copy(rt).multiplyScalar(O).floor(),R=Et;if(Y!==0&&(G=Fd),ut.bindFramebuffer(N.FRAMEBUFFER,G)&&Z&&ut.drawBuffers(D,G),ut.viewport(E),ut.scissor(A),ut.setScissorTest(R),ot){const Tt=at.get(D.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_CUBE_MAP_POSITIVE_X+k,Tt.__webglTexture,Y)}else if(Mt){const Tt=k;for(let Vt=0;Vt<D.textures.length;Vt++){const Ht=at.get(D.textures[Vt]);N.framebufferTextureLayer(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0+Vt,Ht.__webglTexture,Y,Tt)}}else if(D!==null&&Y!==0){const Tt=at.get(D.texture);N.framebufferTexture2D(N.FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Tt.__webglTexture,Y)}M=-1},this.readRenderTargetPixels=function(D,k,Y,Z,G,ot,Mt,Rt=0){if(!(D&&D.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=at.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt){ut.bindFramebuffer(N.FRAMEBUFFER,Tt);try{const Vt=D.textures[Rt],Ht=Vt.format,Nt=Vt.type;if(!bt.textureFormatReadable(Ht)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!bt.textureTypeReadable(Nt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=D.width-Z&&Y>=0&&Y<=D.height-G&&(D.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Rt),N.readPixels(k,Y,Z,G,Lt.convert(Ht),Lt.convert(Nt),ot))}finally{const Vt=b!==null?at.get(b).__webglFramebuffer:null;ut.bindFramebuffer(N.FRAMEBUFFER,Vt)}}},this.readRenderTargetPixelsAsync=async function(D,k,Y,Z,G,ot,Mt,Rt=0){if(!(D&&D.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=at.get(D).__webglFramebuffer;if(D.isWebGLCubeRenderTarget&&Mt!==void 0&&(Tt=Tt[Mt]),Tt)if(k>=0&&k<=D.width-Z&&Y>=0&&Y<=D.height-G){ut.bindFramebuffer(N.FRAMEBUFFER,Tt);const Vt=D.textures[Rt],Ht=Vt.format,Nt=Vt.type;if(!bt.textureFormatReadable(Ht))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!bt.textureTypeReadable(Nt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const jt=N.createBuffer();N.bindBuffer(N.PIXEL_PACK_BUFFER,jt),N.bufferData(N.PIXEL_PACK_BUFFER,ot.byteLength,N.STREAM_READ),D.textures.length>1&&N.readBuffer(N.COLOR_ATTACHMENT0+Rt),N.readPixels(k,Y,Z,G,Lt.convert(Ht),Lt.convert(Nt),0);const ne=b!==null?at.get(b).__webglFramebuffer:null;ut.bindFramebuffer(N.FRAMEBUFFER,ne);const pe=N.fenceSync(N.SYNC_GPU_COMMANDS_COMPLETE,0);return N.flush(),await Pf(N,pe,4),N.bindBuffer(N.PIXEL_PACK_BUFFER,jt),N.getBufferSubData(N.PIXEL_PACK_BUFFER,0,ot),N.deleteBuffer(jt),N.deleteSync(pe),ot}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(D,k=null,Y=0){const Z=Math.pow(2,-Y),G=Math.floor(D.image.width*Z),ot=Math.floor(D.image.height*Z),Mt=k!==null?k.x:0,Rt=k!==null?k.y:0;wt.setTexture2D(D,0),N.copyTexSubImage2D(N.TEXTURE_2D,Y,0,0,Mt,Rt,G,ot),ut.unbindTexture()};const Bd=N.createFramebuffer(),Od=N.createFramebuffer();this.copyTextureToTexture=function(D,k,Y=null,Z=null,G=0,ot=null){ot===null&&(G!==0?(_r("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),ot=G,G=0):ot=0);let Mt,Rt,Tt,Vt,Ht,Nt,jt,ne,pe;const ce=D.isCompressedTexture?D.mipmaps[ot]:D.image;if(Y!==null)Mt=Y.max.x-Y.min.x,Rt=Y.max.y-Y.min.y,Tt=Y.isBox3?Y.max.z-Y.min.z:1,Vt=Y.min.x,Ht=Y.min.y,Nt=Y.isBox3?Y.min.z:0;else{const rn=Math.pow(2,-G);Mt=Math.floor(ce.width*rn),Rt=Math.floor(ce.height*rn),D.isDataArrayTexture?Tt=ce.depth:D.isData3DTexture?Tt=Math.floor(ce.depth*rn):Tt=1,Vt=0,Ht=0,Nt=0}Z!==null?(jt=Z.x,ne=Z.y,pe=Z.z):(jt=0,ne=0,pe=0);const se=Lt.convert(k.format),Bt=Lt.convert(k.type);let de;k.isData3DTexture?(wt.setTexture3D(k,0),de=N.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(wt.setTexture2DArray(k,0),de=N.TEXTURE_2D_ARRAY):(wt.setTexture2D(k,0),de=N.TEXTURE_2D),N.pixelStorei(N.UNPACK_FLIP_Y_WEBGL,k.flipY),N.pixelStorei(N.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),N.pixelStorei(N.UNPACK_ALIGNMENT,k.unpackAlignment);const Qt=N.getParameter(N.UNPACK_ROW_LENGTH),Ze=N.getParameter(N.UNPACK_IMAGE_HEIGHT),Ni=N.getParameter(N.UNPACK_SKIP_PIXELS),je=N.getParameter(N.UNPACK_SKIP_ROWS),Rr=N.getParameter(N.UNPACK_SKIP_IMAGES);N.pixelStorei(N.UNPACK_ROW_LENGTH,ce.width),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,ce.height),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Vt),N.pixelStorei(N.UNPACK_SKIP_ROWS,Ht),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Nt);const fe=D.isDataArrayTexture||D.isData3DTexture,nn=k.isDataArrayTexture||k.isData3DTexture;if(D.isDepthTexture){const rn=at.get(D),Ue=at.get(k),ze=at.get(rn.__renderTarget),Ro=at.get(Ue.__renderTarget);ut.bindFramebuffer(N.READ_FRAMEBUFFER,ze.__webglFramebuffer),ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,Ro.__webglFramebuffer);for(let ci=0;ci<Tt;ci++)fe&&(N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,at.get(D).__webglTexture,G,Nt+ci),N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,at.get(k).__webglTexture,ot,pe+ci)),N.blitFramebuffer(Vt,Ht,Mt,Rt,jt,ne,Mt,Rt,N.DEPTH_BUFFER_BIT,N.NEAREST);ut.bindFramebuffer(N.READ_FRAMEBUFFER,null),ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else if(G!==0||D.isRenderTargetTexture||at.has(D)){const rn=at.get(D),Ue=at.get(k);ut.bindFramebuffer(N.READ_FRAMEBUFFER,Bd),ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,Od);for(let ze=0;ze<Tt;ze++)fe?N.framebufferTextureLayer(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,rn.__webglTexture,G,Nt+ze):N.framebufferTexture2D(N.READ_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,rn.__webglTexture,G),nn?N.framebufferTextureLayer(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,Ue.__webglTexture,ot,pe+ze):N.framebufferTexture2D(N.DRAW_FRAMEBUFFER,N.COLOR_ATTACHMENT0,N.TEXTURE_2D,Ue.__webglTexture,ot),G!==0?N.blitFramebuffer(Vt,Ht,Mt,Rt,jt,ne,Mt,Rt,N.COLOR_BUFFER_BIT,N.NEAREST):nn?N.copyTexSubImage3D(de,ot,jt,ne,pe+ze,Vt,Ht,Mt,Rt):N.copyTexSubImage2D(de,ot,jt,ne,Vt,Ht,Mt,Rt);ut.bindFramebuffer(N.READ_FRAMEBUFFER,null),ut.bindFramebuffer(N.DRAW_FRAMEBUFFER,null)}else nn?D.isDataTexture||D.isData3DTexture?N.texSubImage3D(de,ot,jt,ne,pe,Mt,Rt,Tt,se,Bt,ce.data):k.isCompressedArrayTexture?N.compressedTexSubImage3D(de,ot,jt,ne,pe,Mt,Rt,Tt,se,ce.data):N.texSubImage3D(de,ot,jt,ne,pe,Mt,Rt,Tt,se,Bt,ce):D.isDataTexture?N.texSubImage2D(N.TEXTURE_2D,ot,jt,ne,Mt,Rt,se,Bt,ce.data):D.isCompressedTexture?N.compressedTexSubImage2D(N.TEXTURE_2D,ot,jt,ne,ce.width,ce.height,se,ce.data):N.texSubImage2D(N.TEXTURE_2D,ot,jt,ne,Mt,Rt,se,Bt,ce);N.pixelStorei(N.UNPACK_ROW_LENGTH,Qt),N.pixelStorei(N.UNPACK_IMAGE_HEIGHT,Ze),N.pixelStorei(N.UNPACK_SKIP_PIXELS,Ni),N.pixelStorei(N.UNPACK_SKIP_ROWS,je),N.pixelStorei(N.UNPACK_SKIP_IMAGES,Rr),ot===0&&k.generateMipmaps&&N.generateMipmap(de),ut.unbindTexture()},this.copyTextureToTexture3D=function(D,k,Y=null,Z=null,G=0){return _r('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(D,k,Y,Z,G)},this.initRenderTarget=function(D){at.get(D).__webglFramebuffer===void 0&&wt.setupRenderTarget(D)},this.initTexture=function(D){D.isCubeTexture?wt.setTextureCube(D,0):D.isData3DTexture?wt.setTexture3D(D,0):D.isDataArrayTexture||D.isCompressedArrayTexture?wt.setTexture2DArray(D,0):wt.setTexture2D(D,0),ut.unbindTexture()},this.resetState=function(){c=0,P=0,b=null,ut.reset(),yt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorSpace=te._getDrawingBufferColorSpace(t),e.unpackColorSpace=te._getUnpackColorSpace()}}const Th={type:"change"},Ql={type:"start"},fd={type:"end"},Rs=new ns,bh=new ln,ix=Math.cos(70*Af.DEG2RAD),xe=new U,ke=2*Math.PI,re={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},aa=1e-6;class rx extends xp{constructor(t,e=null){super(t,e),this.state=re.NONE,this.target=new U,this.cursor=new U,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:hr.ROTATE,TWO:hr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new U,this._lastQuaternion=new Ci,this._lastTargetPosition=new U,this._quat=new Ci().setFromUnitVectors(t.up,new U(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Jc,this._sphericalDelta=new Jc,this._scale=1,this._panOffset=new U,this._rotateStart=new Ft,this._rotateEnd=new Ft,this._rotateDelta=new Ft,this._panStart=new Ft,this._panEnd=new Ft,this._panDelta=new Ft,this._dollyStart=new Ft,this._dollyEnd=new Ft,this._dollyDelta=new Ft,this._dollyDirection=new U,this._mouse=new Ft,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=ox.bind(this),this._onPointerDown=sx.bind(this),this._onPointerUp=ax.bind(this),this._onContextMenu=px.bind(this),this._onMouseWheel=hx.bind(this),this._onKeyDown=ux.bind(this),this._onTouchStart=dx.bind(this),this._onTouchMove=fx.bind(this),this._onMouseDown=lx.bind(this),this._onMouseMove=cx.bind(this),this._interceptControlDown=gx.bind(this),this._interceptControlUp=_x.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(t){super.connect(t),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Th),this.update(),this.state=re.NONE}update(t=null){const e=this.object.position;xe.copy(e).sub(this.target),xe.applyQuaternion(this._quat),this._spherical.setFromVector3(xe),this.autoRotate&&this.state===re.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let n=this.minAzimuthAngle,r=this.maxAzimuthAngle;isFinite(n)&&isFinite(r)&&(n<-Math.PI?n+=ke:n>Math.PI&&(n-=ke),r<-Math.PI?r+=ke:r>Math.PI&&(r-=ke),n<=r?this._spherical.theta=Math.max(n,Math.min(r,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(n+r)/2?Math.max(n,this._spherical.theta):Math.min(r,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let s=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),s=o!=this._spherical.radius}if(xe.setFromSpherical(this._spherical),xe.applyQuaternion(this._quatInverse),e.copy(this.target).add(xe),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=xe.length();o=this._clampDistance(a*this._scale);const u=a-o;this.object.position.addScaledVector(this._dollyDirection,u),this.object.updateMatrixWorld(),s=!!u}else if(this.object.isOrthographicCamera){const a=new U(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),s=u!==this.object.zoom;const h=new U(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(a),this.object.updateMatrixWorld(),o=xe.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Rs.origin.copy(this.object.position),Rs.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Rs.direction))<ix?this.object.lookAt(this.target):(bh.setFromNormalAndCoplanarPoint(this.object.up,this.target),Rs.intersectPlane(bh,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),s=!0)}return this._scale=1,this._performCursorZoom=!1,s||this._lastPosition.distanceToSquared(this.object.position)>aa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>aa||this._lastTargetPosition.distanceToSquared(this.target)>aa?(this.dispatchEvent(Th),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?ke/60*this.autoRotateSpeed*t:ke/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){xe.setFromMatrixColumn(e,0),xe.multiplyScalar(-t),this._panOffset.add(xe)}_panUp(t,e){this.screenSpacePanning===!0?xe.setFromMatrixColumn(e,1):(xe.setFromMatrixColumn(e,0),xe.crossVectors(this.object.up,xe)),xe.multiplyScalar(t),this._panOffset.add(xe)}_pan(t,e){const n=this.domElement;if(this.object.isPerspectiveCamera){const r=this.object.position;xe.copy(r).sub(this.target);let s=xe.length();s*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*s/n.clientHeight,this.object.matrix),this._panUp(2*e*s/n.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/n.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/n.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const n=this.domElement.getBoundingClientRect(),r=t-n.left,s=e-n.top,o=n.width,a=n.height;this._mouse.x=r/o*2-1,this._mouse.y=-(s/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateUp(-ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this.enableRotate&&this._rotateLeft(-ke*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._rotateStart.set(n,r)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panStart.set(n,r)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyStart.set(0,s)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const n=this._getSecondPointerPosition(t),r=.5*(t.pageX+n.x),s=.5*(t.pageY+n.y);this._rotateEnd.set(r,s)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(ke*this._rotateDelta.x/e.clientHeight),this._rotateUp(ke*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),n=.5*(t.pageX+e.x),r=.5*(t.pageY+e.y);this._panEnd.set(n,r)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),n=t.pageX-e.x,r=t.pageY-e.y,s=Math.sqrt(n*n+r*r);this._dollyEnd.set(0,s),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Ft,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,n={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:n.deltaY*=16;break;case 2:n.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(n.deltaY*=10),n}}function sx(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i)))}function ox(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function ax(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(fd),this.state=re.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function lx(i){let t;switch(i.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=re.DOLLY;break;case pr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}break;case pr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=re.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=re.PAN}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Ql)}function cx(i){switch(this.state){case re.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case re.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case re.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function hx(i){this.enabled===!1||this.enableZoom===!1||this.state!==re.NONE||(i.preventDefault(),this.dispatchEvent(Ql),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(fd))}function ux(i){this.enabled!==!1&&this._handleKeyDown(i)}function dx(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case hr.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=re.TOUCH_ROTATE;break;case hr.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=re.TOUCH_PAN;break;default:this.state=re.NONE}break;case 2:switch(this.touches.TWO){case hr.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=re.TOUCH_DOLLY_PAN;break;case hr.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=re.TOUCH_DOLLY_ROTATE;break;default:this.state=re.NONE}break;default:this.state=re.NONE}this.state!==re.NONE&&this.dispatchEvent(Ql)}function fx(i){switch(this._trackPointer(i),this.state){case re.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case re.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case re.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case re.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=re.NONE}}function px(i){this.enabled!==!1&&i.preventDefault()}function gx(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function _x(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function mx(i){const t=new nx({antialias:!0});t.setPixelRatio(Math.min(window.devicePixelRatio,2)),t.setSize(i.clientWidth,i.clientHeight),t.shadowMap.enabled=!0,t.shadowMap.type=Bu,i.appendChild(t.domElement);const e=new an(45,i.clientWidth/i.clientHeight,.1,2e3);e.position.set(200,150,400),e.lookAt(0,0,0);const n=new tp;n.background=new Zt(10526880),n.fog=new Zl(10526880,200,1200),n.add(vx()),n.add(xx());const r=new rx(e,t.domElement);return r.enableDamping=!0,r.dampingFactor=.05,window.addEventListener("resize",()=>{e.aspect=i.clientWidth/i.clientHeight,e.updateProjectionMatrix(),t.setSize(i.clientWidth,i.clientHeight)}),yx(t,n,e,r),{scene:n}}function vx(){const i=new Xr,t=new dp(16777215,9276813,3);t.position.set(0,100,0),i.add(t);const e=new gp(16777215,3);return e.position.set(0,40,50),e.castShadow=!0,e.shadow.camera.near=.1,e.shadow.camera.far=500,e.shadow.camera.left=-200,e.shadow.camera.right=200,e.shadow.camera.top=200,e.shadow.camera.bottom=-200,i.add(e),i}function xx(){const i=new Xe(new is(2e3,2e3),new sp({color:13355979,depthWrite:!1}));return i.rotation.x=-Math.PI/2,i.position.y=-80,i.receiveShadow=!0,i}function yx(i,t,e,n){(function r(){requestAnimationFrame(r),n.update(),i.render(t,e)})()}class Mx extends Kl{constructor(t){super(t)}load(t,e,n,r){const s=this,o=new up(this.manager);o.setPath(this.path),o.setResponseType("arraybuffer"),o.setRequestHeader(this.requestHeader),o.setWithCredentials(this.withCredentials),o.load(t,function(a){try{e(s.parse(a))}catch(u){r?r(u):console.error(u),s.manager.itemError(t)}},n,r)}parse(t){function e(h){const d=new DataView(h),f=32/8*3+32/8*3*3+16/8,g=d.getUint32(80,!0);if(80+32/8+g*f===d.byteLength)return!0;const S=[115,111,108,105,100];for(let w=0;w<5;w++)if(n(S,d,w))return!1;return!0}function n(h,d,f){for(let g=0,_=h.length;g<_;g++)if(h[g]!==d.getUint8(f+g))return!1;return!0}function r(h){const d=new DataView(h),f=d.getUint32(80,!0);let g,_,S,w=!1,v,m,T,p,l;for(let E=0;E<70;E++)d.getUint32(E,!1)==1129270351&&d.getUint8(E+4)==82&&d.getUint8(E+5)==61&&(w=!0,v=new Float32Array(f*3*3),m=d.getUint8(E+6)/255,T=d.getUint8(E+7)/255,p=d.getUint8(E+8)/255,l=d.getUint8(E+9)/255);const x=84,c=12*4+2,P=new Gn,b=new Float32Array(f*3*3),M=new Float32Array(f*3*3),y=new Zt;for(let E=0;E<f;E++){const A=x+E*c,R=d.getFloat32(A,!0),L=d.getFloat32(A+4,!0),B=d.getFloat32(A+8,!0);if(w){const F=d.getUint16(A+48,!0);F&32768?(g=m,_=T,S=p):(g=(F&31)/31,_=(F>>5&31)/31,S=(F>>10&31)/31)}for(let F=1;F<=3;F++){const z=A+F*12,O=E*3*3+(F-1)*3;b[O]=d.getFloat32(z,!0),b[O+1]=d.getFloat32(z+4,!0),b[O+2]=d.getFloat32(z+8,!0),M[O]=R,M[O+1]=L,M[O+2]=B,w&&(y.setRGB(g,_,S,Qe),v[O]=y.r,v[O+1]=y.g,v[O+2]=y.b)}}return P.setAttribute("position",new Pe(b,3)),P.setAttribute("normal",new Pe(M,3)),w&&(P.setAttribute("color",new Pe(v,3)),P.hasColors=!0,P.alpha=l),P}function s(h){const d=new Gn,f=/solid([\s\S]*?)endsolid/g,g=/facet([\s\S]*?)endfacet/g,_=/solid\s(.+)/;let S=0;const w=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,v=new RegExp("vertex"+w+w+w,"g"),m=new RegExp("normal"+w+w+w,"g"),T=[],p=[],l=[],x=new U;let c,P=0,b=0,M=0;for(;(c=f.exec(h))!==null;){b=M;const y=c[0],E=(c=_.exec(y))!==null?c[1]:"";for(l.push(E);(c=g.exec(y))!==null;){let L=0,B=0;const F=c[0];for(;(c=m.exec(F))!==null;)x.x=parseFloat(c[1]),x.y=parseFloat(c[2]),x.z=parseFloat(c[3]),B++;for(;(c=v.exec(F))!==null;)T.push(parseFloat(c[1]),parseFloat(c[2]),parseFloat(c[3])),p.push(x.x,x.y,x.z),L++,M++;B!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+S),L!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+S),S++}const A=b,R=M-b;d.userData.groupNames=l,d.addGroup(A,R,P),P++}return d.setAttribute("position",new kn(T,3)),d.setAttribute("normal",new kn(p,3)),d}function o(h){return typeof h!="string"?new TextDecoder().decode(h):h}function a(h){if(typeof h=="string"){const d=new Uint8Array(h.length);for(let f=0;f<h.length;f++)d[f]=h.charCodeAt(f)&255;return d.buffer||d}else return h}const u=a(t);return e(u)?r(u):s(o(t))}}function Sx(i,t=1e-4){t=Math.max(t,Number.EPSILON);const e={},n=i.getIndex(),r=i.getAttribute("position"),s=n?n.count:r.count;let o=0;const a=Object.keys(i.attributes),u={},h={},d=[],f=["getX","getY","getZ","getW"],g=["setX","setY","setZ","setW"];for(let T=0,p=a.length;T<p;T++){const l=a[T],x=i.attributes[l];u[l]=new x.constructor(new x.array.constructor(x.count*x.itemSize),x.itemSize,x.normalized);const c=i.morphAttributes[l];c&&(h[l]||(h[l]=[]),c.forEach((P,b)=>{const M=new P.array.constructor(P.count*P.itemSize);h[l][b]=new P.constructor(M,P.itemSize,P.normalized)}))}const _=t*.5,S=Math.log10(1/t),w=Math.pow(10,S),v=_*w;for(let T=0;T<s;T++){const p=n?n.getX(T):T;let l="";for(let x=0,c=a.length;x<c;x++){const P=a[x],b=i.getAttribute(P),M=b.itemSize;for(let y=0;y<M;y++)l+=`${~~(b[f[y]](p)*w+v)},`}if(l in e)d.push(e[l]);else{for(let x=0,c=a.length;x<c;x++){const P=a[x],b=i.getAttribute(P),M=i.morphAttributes[P],y=b.itemSize,E=u[P],A=h[P];for(let R=0;R<y;R++){const L=f[R],B=g[R];if(E[B](o,b[L](p)),M)for(let F=0,z=M.length;F<z;F++)A[F][B](o,M[F][L](p))}}e[l]=o,d.push(o),o++}}const m=i.clone();for(const T in i.attributes){const p=u[T];if(m.setAttribute(T,new p.constructor(p.array.slice(0,o*p.itemSize),p.itemSize,p.normalized)),T in h)for(let l=0;l<h[T].length;l++){const x=h[T][l];m.morphAttributes[T][l]=new x.constructor(x.array.slice(0,o*x.itemSize),x.itemSize,x.normalized)}}return m.setIndex(d),m}const Ex=15259063;function Ah(i){return new Promise((t,e)=>{new Mx().load(i,n=>{const r=Sx(n,1e-4);r.computeVertexNormals(),r.computeBoundingBox();const s=new U;r.boundingBox.getCenter(s),r.translate(-s.x,-s.y,-s.z),r.computeBoundingBox();const o=new rp({color:Ex,roughness:.6,metalness:.1});t(new Xe(r,o))},void 0,e)})}let wx=0;const Tx=`varying vec3 v_worldPos;
varying vec3 v_worldNrm;
`,bx=`#include <worldpos_vertex>
v_worldPos = (modelMatrix * vec4(position, 1.0)).xyz;
v_worldNrm = normalize(mat3(modelMatrix) * normal);`,Ax=["varying vec3 v_worldPos;","varying vec3 v_worldNrm;","uniform float u_planeZ;","uniform float u_showDash;"].join(`
`)+`
`,Rx=`if (u_showDash > 0.5) {
  float inBand = 1.0 - step(1.5, abs(v_worldPos.z - u_planeZ));
  vec3 n = abs(v_worldNrm);
  float useY = step(n.y, n.x);
  float dash = mix(
    step(0.5, fract(v_worldPos.x * 0.12)),
    step(0.5, fract(v_worldPos.y * 0.12)),
    useY
  );
  gl_FragColor.rgb = mix(gl_FragColor.rgb, vec3(0.08, 0.08, 0.08), inBand * dash * 0.9);
}
#include <fog_fragment>`;function la(i){let t=null,e=0,n=1;return i.onBeforeCompile=r=>{r.uniforms.u_planeZ={value:e},r.uniforms.u_showDash={value:n},t=r.uniforms,r.vertexShader=Tx+r.vertexShader.replace("#include <worldpos_vertex>",bx),r.fragmentShader=Ax+r.fragmentShader.replace("#include <fog_fragment>",Rx)},i.customProgramCacheKey=()=>`dash_${wx++}`,i.needsUpdate=!0,{setPlaneZ(r){e=r,t&&(t.u_planeZ.value=r)},setDashVisible(r){const s=r?1:0;n=s,t&&(t.u_showDash.value=s)}}}const Px=.05;class Cx{constructor(t){this.z=0,this.minZ=0,this.maxZ=0,this.step=0,this.recalculate(t)}moveUp(){this.z=Math.min(this.z+this.step,this.maxZ)}moveDown(){this.z=Math.max(this.z-this.step,this.minZ)}getZ(){return this.z}isAtMax(){return this.z>=this.maxZ}isAtMin(){return this.z<=this.minZ}setToMin(){this.z=this.minZ}setToMax(){this.z=this.maxZ}recalculate(t){const e=new U;t.getSize(e),this.step=e.z*Px,this.minZ=t.min.z+this.step,this.maxZ=t.max.z-this.step,this.z=(t.min.z+t.max.z)/2}}const pd=0,Dx=1,Ix=2,Rh=2,ca=1.25,Ph=1,Ie=6*4+4+4,ye=Ie/4,gd=65535,so=Math.pow(2,-24),tc=Symbol("SKIP_GENERATION"),_d={strategy:pd,maxDepth:40,maxLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[tc]:!1};function ge(i,t,e){return e.min.x=t[i],e.min.y=t[i+1],e.min.z=t[i+2],e.max.x=t[i+3],e.max.y=t[i+4],e.max.z=t[i+5],e}function Ch(i){let t=-1,e=-1/0;for(let n=0;n<3;n++){const r=i[n+3]-i[n];r>e&&(e=r,t=n)}return t}function Dh(i,t){t.set(i)}function Ih(i,t,e){let n,r;for(let s=0;s<3;s++){const o=s+3;n=i[s],r=t[s],e[s]=n<r?n:r,n=i[o],r=t[o],e[o]=n>r?n:r}}function Ps(i,t,e){for(let n=0;n<3;n++){const r=t[i+2*n],s=t[i+2*n+1],o=r-s,a=r+s;o<e[n]&&(e[n]=o),a>e[n+3]&&(e[n+3]=a)}}function Ur(i){const t=i[3]-i[0],e=i[4]-i[1],n=i[5]-i[2];return 2*(t*e+e*n+n*t)}function Me(i,t){return t[i+15]===gd}function Le(i,t){return t[i+6]}function Fe(i,t){return t[i+14]}function Te(i){return i+ye}function be(i,t){const e=t[i+6];return i+e*ye}function ec(i,t){return t[i+7]}function ha(i,t,e,n,r){let s=1/0,o=1/0,a=1/0,u=-1/0,h=-1/0,d=-1/0,f=1/0,g=1/0,_=1/0,S=-1/0,w=-1/0,v=-1/0;const m=i.offset||0;for(let T=(t-m)*6,p=(t+e-m)*6;T<p;T+=6){const l=i[T+0],x=i[T+1],c=l-x,P=l+x;c<s&&(s=c),P>u&&(u=P),l<f&&(f=l),l>S&&(S=l);const b=i[T+2],M=i[T+3],y=b-M,E=b+M;y<o&&(o=y),E>h&&(h=E),b<g&&(g=b),b>w&&(w=b);const A=i[T+4],R=i[T+5],L=A-R,B=A+R;L<a&&(a=L),B>d&&(d=B),A<_&&(_=A),A>v&&(v=A)}n[0]=s,n[1]=o,n[2]=a,n[3]=u,n[4]=h,n[5]=d,r[0]=f,r[1]=g,r[2]=_,r[3]=S,r[4]=w,r[5]=v}const On=32,Lx=(i,t)=>i.candidate-t.candidate,Kn=new Array(On).fill().map(()=>({count:0,bounds:new Float32Array(6),rightCacheBounds:new Float32Array(6),leftCacheBounds:new Float32Array(6),candidate:0})),Cs=new Float32Array(6);function Ux(i,t,e,n,r,s){let o=-1,a=0;if(s===pd)o=Ch(t),o!==-1&&(a=(t[o]+t[o+3])/2);else if(s===Dx)o=Ch(i),o!==-1&&(a=Nx(e,n,r,o));else if(s===Ix){const u=Ur(i);let h=ca*r;const d=e.offset||0,f=(n-d)*6,g=(n+r-d)*6;for(let _=0;_<3;_++){const S=t[_],m=(t[_+3]-S)/On;if(r<On/4){const T=[...Kn];T.length=r;let p=0;for(let x=f;x<g;x+=6,p++){const c=T[p];c.candidate=e[x+2*_],c.count=0;const{bounds:P,leftCacheBounds:b,rightCacheBounds:M}=c;for(let y=0;y<3;y++)M[y]=1/0,M[y+3]=-1/0,b[y]=1/0,b[y+3]=-1/0,P[y]=1/0,P[y+3]=-1/0;Ps(x,e,P)}T.sort(Lx);let l=r;for(let x=0;x<l;x++){const c=T[x];for(;x+1<l&&T[x+1].candidate===c.candidate;)T.splice(x+1,1),l--}for(let x=f;x<g;x+=6){const c=e[x+2*_];for(let P=0;P<l;P++){const b=T[P];c>=b.candidate?Ps(x,e,b.rightCacheBounds):(Ps(x,e,b.leftCacheBounds),b.count++)}}for(let x=0;x<l;x++){const c=T[x],P=c.count,b=r-c.count,M=c.leftCacheBounds,y=c.rightCacheBounds;let E=0;P!==0&&(E=Ur(M)/u);let A=0;b!==0&&(A=Ur(y)/u);const R=Ph+ca*(E*P+A*b);R<h&&(o=_,h=R,a=c.candidate)}}else{for(let l=0;l<On;l++){const x=Kn[l];x.count=0,x.candidate=S+m+l*m;const c=x.bounds;for(let P=0;P<3;P++)c[P]=1/0,c[P+3]=-1/0}for(let l=f;l<g;l+=6){let P=~~((e[l+2*_]-S)/m);P>=On&&(P=On-1);const b=Kn[P];b.count++,Ps(l,e,b.bounds)}const T=Kn[On-1];Dh(T.bounds,T.rightCacheBounds);for(let l=On-2;l>=0;l--){const x=Kn[l],c=Kn[l+1];Ih(x.bounds,c.rightCacheBounds,x.rightCacheBounds)}let p=0;for(let l=0;l<On-1;l++){const x=Kn[l],c=x.count,P=x.bounds,M=Kn[l+1].rightCacheBounds;c!==0&&(p===0?Dh(P,Cs):Ih(P,Cs,Cs)),p+=c;let y=0,E=0;p!==0&&(y=Ur(Cs)/u);const A=r-p;A!==0&&(E=Ur(M)/u);const R=Ph+ca*(y*p+E*A);R<h&&(o=_,h=R,a=x.candidate)}}}}else console.warn(`BVH: Invalid build strategy value ${s} used.`);return{axis:o,pos:a}}function Nx(i,t,e,n){let r=0;const s=i.offset;for(let o=t,a=t+e;o<a;o++)r+=i[(o-s)*6+n*2];return r/e}class ua{constructor(){this.boundingData=new Float32Array(6)}}function Fx(i,t,e,n,r,s){let o=n,a=n+r-1;const u=s.pos,h=s.axis*2,d=e.offset||0;for(;;){for(;o<=a&&e[(o-d)*6+h]<u;)o++;for(;o<=a&&e[(a-d)*6+h]>=u;)a--;if(o<a){for(let f=0;f<t;f++){let g=i[o*t+f];i[o*t+f]=i[a*t+f],i[a*t+f]=g}for(let f=0;f<6;f++){const g=o-d,_=a-d,S=e[g*6+f];e[g*6+f]=e[_*6+f],e[_*6+f]=S}o++,a--}else return o}}let md,oo,El,vd;const Bx=Math.pow(2,32);function wl(i){return"count"in i?1:1+wl(i.left)+wl(i.right)}function Ox(i,t,e){return md=new Float32Array(e),oo=new Uint32Array(e),El=new Uint16Array(e),vd=new Uint8Array(e),Tl(i,t)}function Tl(i,t){const e=i/4,n=i/2,r="count"in t,s=t.boundingData;for(let o=0;o<6;o++)md[e+o]=s[o];if(r)return t.buffer?(vd.set(new Uint8Array(t.buffer),i),i+t.buffer.byteLength):(oo[e+6]=t.offset,El[n+14]=t.count,El[n+15]=gd,i+Ie);{const{left:o,right:a,splitAxis:u}=t,h=i+Ie;let d=Tl(h,o);const f=i/Ie,_=d/Ie-f;if(_>Bx)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");return oo[e+6]=_,oo[e+7]=u,Tl(d,a)}}function Vx(i,t,e,n,r,s){const{maxDepth:o,verbose:a,maxLeafSize:u,strategy:h,onProgress:d}=r,f=i.primitiveBuffer,g=i.primitiveBufferStride,_=new Float32Array(6);let S=!1;const w=new ua;return ha(t,e,n,w.boundingData,_),m(w,e,n,_),w;function v(T){d&&d((T-s.offset)/s.count)}function m(T,p,l,x=null,c=0){if(!S&&c>=o&&(S=!0,a&&console.warn(`BVH: Max depth of ${o} reached when generating BVH. Consider increasing maxDepth.`)),l<=u||c>=o)return v(p+l),T.offset=p,T.count=l,T;const P=Ux(T.boundingData,x,t,p,l,h);if(P.axis===-1)return v(p+l),T.offset=p,T.count=l,T;const b=Fx(f,g,t,p,l,P);if(b===p||b===p+l)v(p+l),T.offset=p,T.count=l;else{T.splitAxis=P.axis;const M=new ua,y=p,E=b-p;T.left=M,ha(t,y,E,M.boundingData,_),m(M,y,E,_,c+1);const A=new ua,R=b,L=l-E;T.right=A,ha(t,R,L,A.boundingData,_),m(A,R,L,_,c+1)}return T}}function zx(i,t){const e=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,n=i.getRootRanges(t.range),r=n[0],s=n[n.length-1],o={offset:r.offset,count:s.offset+s.count-r.offset},a=new Float32Array(6*o.count);a.offset=o.offset,i.computePrimitiveBounds(o.offset,o.count,a),i._roots=n.map(u=>{const h=Vx(i,a,u.offset,u.count,t,o),d=wl(h),f=new e(Ie*d);return Ox(0,h,f),f})}class nc{constructor(t){this._getNewPrimitive=t,this._primitives=[]}getPrimitive(){const t=this._primitives;return t.length===0?this._getNewPrimitive():t.pop()}releasePrimitive(t){this._primitives.push(t)}}class Hx{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const t=[];let e=null;this.setBuffer=n=>{e&&t.push(e),e=n,this.float32Array=new Float32Array(n),this.uint16Array=new Uint16Array(n),this.uint32Array=new Uint32Array(n)},this.clearBuffer=()=>{e=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,t.length!==0&&this.setBuffer(t.pop())}}}const ue=new Hx;let ii,dr;const Ji=[],Ds=new nc(()=>new Oe);function kx(i,t,e,n,r,s){ii=Ds.getPrimitive(),dr=Ds.getPrimitive(),Ji.push(ii,dr),ue.setBuffer(i._roots[t]);const o=bl(0,i.geometry,e,n,r,s);ue.clearBuffer(),Ds.releasePrimitive(ii),Ds.releasePrimitive(dr),Ji.pop(),Ji.pop();const a=Ji.length;return a>0&&(dr=Ji[a-1],ii=Ji[a-2]),o}function bl(i,t,e,n,r=null,s=0,o=0){const{float32Array:a,uint16Array:u,uint32Array:h}=ue;let d=i*2;if(Me(d,u)){const S=Le(i,h),w=Fe(d,u);return ge(i,a,ii),n(S,w,!1,o,s+i/ye,ii)}else{let A=function(L){const{uint16Array:B,uint32Array:F}=ue;let z=L*2;for(;!Me(z,B);)L=Te(L),z=L*2;return Le(L,F)},R=function(L){const{uint16Array:B,uint32Array:F}=ue;let z=L*2;for(;!Me(z,B);)L=be(L,F),z=L*2;return Le(L,F)+Fe(z,B)};var g=A,_=R;const S=Te(i),w=be(i,h);let v=S,m=w,T,p,l,x;if(r&&(l=ii,x=dr,ge(v,a,l),ge(m,a,x),T=r(l),p=r(x),p<T)){v=w,m=S;const L=T;T=p,p=L,l=x}l||(l=ii,ge(v,a,l));const c=Me(v*2,u),P=e(l,c,T,o+1,s+v/ye);let b;if(P===Rh){const L=A(v),F=R(v)-L;b=n(L,F,!0,o+1,s+v/ye,l)}else b=P&&bl(v,t,e,n,r,s,o+1);if(b)return!0;x=dr,ge(m,a,x);const M=Me(m*2,u),y=e(x,M,p,o+1,s+m/ye);let E;if(y===Rh){const L=A(m),F=R(m)-L;E=n(L,F,!0,o+1,s+m/ye,x)}else E=y&&bl(m,t,e,n,r,s,o+1);return!!E}}const Yr=new ue.constructor,po=new ue.constructor,Qn=new nc(()=>new Oe),Qi=new Oe,tr=new Oe,da=new Oe,fa=new Oe;let pa=!1;function Gx(i,t,e,n){if(pa)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");pa=!0;const r=i._roots,s=t._roots;let o,a=0,u=0;const h=new Kt().copy(e).invert();for(let d=0,f=r.length;d<f;d++){Yr.setBuffer(r[d]),u=0;const g=Qn.getPrimitive();ge(0,Yr.float32Array,g),g.applyMatrix4(h);for(let _=0,S=s.length;_<S&&(po.setBuffer(s[_]),o=gn(0,0,e,h,n,a,u,0,0,g),po.clearBuffer(),u+=s[_].byteLength/Ie,!o);_++);if(Qn.releasePrimitive(g),Yr.clearBuffer(),a+=r[d].byteLength/Ie,o)break}return pa=!1,o}function gn(i,t,e,n,r,s=0,o=0,a=0,u=0,h=null,d=!1){let f,g;d?(f=po,g=Yr):(f=Yr,g=po);const _=f.float32Array,S=f.uint32Array,w=f.uint16Array,v=g.float32Array,m=g.uint32Array,T=g.uint16Array,p=i*2,l=t*2,x=Me(p,w),c=Me(l,T);let P=!1;if(c&&x)d?P=r(Le(t,m),Fe(t*2,T),Le(i,S),Fe(i*2,w),u,o+t/ye,a,s+i/ye):P=r(Le(i,S),Fe(i*2,w),Le(t,m),Fe(t*2,T),a,s+i/ye,u,o+t/ye);else if(c){const b=Qn.getPrimitive();ge(t,v,b),b.applyMatrix4(e);const M=Te(i),y=be(i,S);ge(M,_,Qi),ge(y,_,tr);const E=b.intersectsBox(Qi),A=b.intersectsBox(tr);P=E&&gn(t,M,n,e,r,o,s,u,a+1,b,!d)||A&&gn(t,y,n,e,r,o,s,u,a+1,b,!d),Qn.releasePrimitive(b)}else{const b=Te(t),M=be(t,m);ge(b,v,da),ge(M,v,fa);const y=h.intersectsBox(da),E=h.intersectsBox(fa);if(y&&E)P=gn(i,b,e,n,r,s,o,a,u+1,h,d)||gn(i,M,e,n,r,s,o,a,u+1,h,d);else if(y)if(x)P=gn(i,b,e,n,r,s,o,a,u+1,h,d);else{const A=Qn.getPrimitive();A.copy(da).applyMatrix4(e);const R=Te(i),L=be(i,S);ge(R,_,Qi),ge(L,_,tr);const B=A.intersectsBox(Qi),F=A.intersectsBox(tr);P=B&&gn(b,R,n,e,r,o,s,u,a+1,A,!d)||F&&gn(b,L,n,e,r,o,s,u,a+1,A,!d),Qn.releasePrimitive(A)}else if(E)if(x)P=gn(i,M,e,n,r,s,o,a,u+1,h,d);else{const A=Qn.getPrimitive();A.copy(fa).applyMatrix4(e);const R=Te(i),L=be(i,S);ge(R,_,Qi),ge(L,_,tr);const B=A.intersectsBox(Qi),F=A.intersectsBox(tr);P=B&&gn(M,R,n,e,r,o,s,u,a+1,A,!d)||F&&gn(M,L,n,e,r,o,s,u,a+1,A,!d),Qn.releasePrimitive(A)}}return P}const Lh=new Oe,er=new Float32Array(6);class Wx{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(t){t={..._d,...t},zx(this,t)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(t,e,n,r){let s=1/0,o=1/0,a=1/0,u=-1/0,h=-1/0,d=-1/0;for(let f=t,g=t+e;f<g;f++){this.writePrimitiveBounds(f,er,0);const[_,S,w,v,m,T]=er;_<s&&(s=_),v>u&&(u=v),S<o&&(o=S),m>h&&(h=m),w<a&&(a=w),T>d&&(d=T)}return n[r+0]=s,n[r+1]=o,n[r+2]=a,n[r+3]=u,n[r+4]=h,n[r+5]=d,n}computePrimitiveBounds(t,e,n){const r=n.offset||0;for(let s=t,o=t+e;s<o;s++){this.writePrimitiveBounds(s,er,0);const[a,u,h,d,f,g]=er,_=(a+d)/2,S=(u+f)/2,w=(h+g)/2,v=(d-a)/2,m=(f-u)/2,T=(g-h)/2,p=(s-r)*6;n[p+0]=_,n[p+1]=v+(Math.abs(_)+v)*so,n[p+2]=S,n[p+3]=m+(Math.abs(S)+m)*so,n[p+4]=w,n[p+5]=T+(Math.abs(w)+T)*so}return n}shiftPrimitiveOffsets(t){const e=this._indirectBuffer;if(e)for(let n=0,r=e.length;n<r;n++)e[n]+=t;else{const n=this._roots;for(let r=0;r<n.length;r++){const s=n[r],o=new Uint32Array(s),a=new Uint16Array(s),u=s.byteLength/Ie;for(let h=0;h<u;h++){const d=ye*h,f=2*d;Me(f,a)&&(o[d+6]+=t)}}}}traverse(t,e=0){const n=this._roots[e],r=new Uint32Array(n),s=new Uint16Array(n);o(0);function o(a,u=0){const h=a*2,d=Me(h,s);if(d){const f=r[a+6],g=s[h+14];t(u,d,new Float32Array(n,a*4,6),f,g)}else{const f=Te(a),g=be(a,r),_=ec(a,r);t(u,d,new Float32Array(n,a*4,6),_)||(o(f,u+1),o(g,u+1))}}}refit(){const t=this._roots;for(let e=0,n=t.length;e<n;e++){const r=t[e],s=new Uint32Array(r),o=new Uint16Array(r),a=new Float32Array(r),u=r.byteLength/Ie;for(let h=u-1;h>=0;h--){const d=h*ye,f=d*2;if(Me(f,o)){const _=Le(d,s),S=Fe(f,o);this.writePrimitiveRangeBounds(_,S,er,0),a.set(er,d)}else{const _=Te(d),S=be(d,s);for(let w=0;w<3;w++){const v=a[_+w],m=a[_+w+3],T=a[S+w],p=a[S+w+3];a[d+w]=v<T?v:T,a[d+w+3]=m>p?m:p}}}}}getBoundingBox(t){return t.makeEmpty(),this._roots.forEach(n=>{ge(0,new Float32Array(n),Lh),t.union(Lh)}),t}shapecast(t){let{boundsTraverseOrder:e,intersectsBounds:n,intersectsRange:r,intersectsPrimitive:s,scratchPrimitive:o,iterate:a}=t;if(r&&s){const f=r;r=(g,_,S,w,v)=>f(g,_,S,w,v)?!0:a(g,_,this,s,S,w,o)}else r||(s?r=(f,g,_,S)=>a(f,g,this,s,_,S,o):r=(f,g,_)=>_);let u=!1,h=0;const d=this._roots;for(let f=0,g=d.length;f<g;f++){const _=d[f];if(u=kx(this,f,n,r,e,h),u)break;h+=_.byteLength/Ie}return u}bvhcast(t,e,n){let{intersectsRanges:r}=n;return Gx(this,t,e,r)}}function Xx(){return typeof SharedArrayBuffer<"u"}function ic(i){return i.index?i.index.count:i.attributes.position.count}function yo(i){return ic(i)/3}function qx(i,t=ArrayBuffer){return i>65535?new Uint32Array(new t(4*i)):new Uint16Array(new t(2*i))}function Yx(i,t){if(!i.index){const e=i.attributes.position.count,n=t.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,r=qx(e,n);i.setIndex(new Pe(r,1));for(let s=0;s<e;s++)r[s]=s}}function $x(i,t,e){const n=ic(i)/e,r=t||i.drawRange,s=r.start/e,o=(r.start+r.count)/e,a=Math.max(0,s),u=Math.min(n,o)-a;return{offset:Math.floor(a),count:Math.floor(u)}}function Zx(i,t){return i.groups.map(e=>({offset:e.start/t,count:e.count/t}))}function Uh(i,t,e){const n=$x(i,t,e),r=Zx(i,e);if(!r.length)return[n];const s=[],o=n.offset,a=n.offset+n.count,u=ic(i)/e,h=[];for(const g of r){const{offset:_,count:S}=g,w=_,v=isFinite(S)?S:u-_,m=_+v;w<a&&m>o&&(h.push({pos:Math.max(o,w),isStart:!0}),h.push({pos:Math.min(a,m),isStart:!1}))}h.sort((g,_)=>g.pos!==_.pos?g.pos-_.pos:g.type==="end"?-1:1);let d=0,f=null;for(const g of h){const _=g.pos;d!==0&&_!==f&&s.push({offset:f,count:_-f}),d+=g.isStart?1:-1,f=_}return s}function jx(i,t){const e=i[i.length-1],n=e.offset+e.count>2**16,r=i.reduce((h,d)=>h+d.count,0),s=n?4:2,o=t?new SharedArrayBuffer(r*s):new ArrayBuffer(r*s),a=n?new Uint32Array(o):new Uint16Array(o);let u=0;for(let h=0;h<i.length;h++){const{offset:d,count:f}=i[h];for(let g=0;g<f;g++)a[u+g]=d+g;u+=f}return a}class Kx extends Wx{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(t){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(t){}constructor(t,e={}){if(t.isBufferGeometry){if(t.index&&t.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(e.useSharedArrayBuffer&&!Xx())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=t,this.resolvePrimitiveIndex=e.indirect?n=>this._indirectBuffer[n]:n=>n,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,e={..._d,...e},e[tc]||this.init(e)}init(t){const{geometry:e,primitiveStride:n}=this;if(t.indirect){const r=Uh(e,t.range,n),s=jx(r,t.useSharedArrayBuffer);this._indirectBuffer=s}else Yx(e,t);super.init(t),!e.boundingBox&&t.setBoundingBox&&(e.boundingBox=this.getBoundingBox(new Oe))}getRootRanges(t){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:Uh(this.geometry,t,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class Wn{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(t,e){let n=1/0,r=-1/0;for(let s=0,o=t.length;s<o;s++){const u=t[s][e];n=u<n?u:n,r=u>r?u:r}this.min=n,this.max=r}setFromPoints(t,e){let n=1/0,r=-1/0;for(let s=0,o=e.length;s<o;s++){const a=e[s],u=t.dot(a);n=u<n?u:n,r=u>r?u:r}this.min=n,this.max=r}isSeparated(t){return this.min>t.max||t.min>this.max}}Wn.prototype.setFromBox=function(){const i=new U;return function(e,n){const r=n.min,s=n.max;let o=1/0,a=-1/0;for(let u=0;u<=1;u++)for(let h=0;h<=1;h++)for(let d=0;d<=1;d++){i.x=r.x*u+s.x*(1-u),i.y=r.y*h+s.y*(1-h),i.z=r.z*d+s.z*(1-d);const f=e.dot(i);o=Math.min(f,o),a=Math.max(f,a)}this.min=o,this.max=a}}();const Jx=function(){const i=new U,t=new U,e=new U;return function(r,s,o){const a=r.start,u=i,h=s.start,d=t;e.subVectors(a,h),i.subVectors(r.end,r.start),t.subVectors(s.end,s.start);const f=e.dot(d),g=d.dot(u),_=d.dot(d),S=e.dot(u),v=u.dot(u)*_-g*g;let m,T;v!==0?m=(f*g-S*_)/v:m=0,T=(f+m*g)/_,o.x=m,o.y=T}}(),rc=function(){const i=new Ft,t=new U,e=new U;return function(r,s,o,a){Jx(r,s,i);let u=i.x,h=i.y;if(u>=0&&u<=1&&h>=0&&h<=1){r.at(u,o),s.at(h,a);return}else if(u>=0&&u<=1){h<0?s.at(0,a):s.at(1,a),r.closestPointToPoint(a,!0,o);return}else if(h>=0&&h<=1){u<0?r.at(0,o):r.at(1,o),s.closestPointToPoint(o,!0,a);return}else{let d;u<0?d=r.start:d=r.end;let f;h<0?f=s.start:f=s.end;const g=t,_=e;if(r.closestPointToPoint(f,!0,t),s.closestPointToPoint(d,!0,e),g.distanceToSquared(f)<=_.distanceToSquared(d)){o.copy(g),a.copy(f);return}else{o.copy(d),a.copy(_);return}}}}(),Qx=function(){const i=new U,t=new U,e=new ln,n=new Ae;return function(s,o){const{radius:a,center:u}=s,{a:h,b:d,c:f}=o;if(n.start=h,n.end=d,n.closestPointToPoint(u,!0,i).distanceTo(u)<=a||(n.start=h,n.end=f,n.closestPointToPoint(u,!0,i).distanceTo(u)<=a)||(n.start=d,n.end=f,n.closestPointToPoint(u,!0,i).distanceTo(u)<=a))return!0;const w=o.getPlane(e);if(Math.abs(w.distanceToPoint(u))<=a){const m=w.projectPoint(u,t);if(o.containsPoint(m))return!0}return!1}}(),t0=["x","y","z"],Vn=1e-15,Nh=Vn*Vn;function on(i){return Math.abs(i)<Vn}class $e extends he{constructor(...t){super(...t),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new U),this.satBounds=new Array(4).fill().map(()=>new Wn),this.points=[this.a,this.b,this.c],this.plane=new ln,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new Ae,this.needsUpdate=!0}intersectsSphere(t){return Qx(t,this)}update(){const t=this.a,e=this.b,n=this.c,r=this.points,s=this.satAxes,o=this.satBounds,a=s[0],u=o[0];this.getNormal(a),u.setFromPoints(a,r);const h=s[1],d=o[1];h.subVectors(t,e),d.setFromPoints(h,r);const f=s[2],g=o[2];f.subVectors(e,n),g.setFromPoints(f,r);const _=s[3],S=o[3];_.subVectors(n,t),S.setFromPoints(_,r);const w=h.length(),v=f.length(),m=_.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,w<Vn?v<Vn||m<Vn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(n)):v<Vn?m<Vn?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(t)):m<Vn&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(n),this.degenerateSegment.end.copy(e)),this.plane.setFromNormalAndCoplanarPoint(a,t),this.needsUpdate=!1}}$e.prototype.closestPointToSegment=function(){const i=new U,t=new U,e=new Ae;return function(r,s=null,o=null){const{start:a,end:u}=r,h=this.points;let d,f=1/0;for(let g=0;g<3;g++){const _=(g+1)%3;e.start.copy(h[g]),e.end.copy(h[_]),rc(e,r,i,t),d=i.distanceToSquared(t),d<f&&(f=d,s&&s.copy(i),o&&o.copy(t))}return this.closestPointToPoint(a,i),d=a.distanceToSquared(i),d<f&&(f=d,s&&s.copy(i),o&&o.copy(a)),this.closestPointToPoint(u,i),d=u.distanceToSquared(i),d<f&&(f=d,s&&s.copy(i),o&&o.copy(u)),Math.sqrt(f)}}();$e.prototype.intersectsTriangle=function(){const i=new $e,t=new Wn,e=new Wn,n=new U,r=new U,s=new U,o=new U,a=new Ae,u=new Ae,h=new U,d=new Ft,f=new Ft;function g(p,l,x,c){const P=n;!p.isDegenerateIntoPoint&&!p.isDegenerateIntoSegment?P.copy(p.plane.normal):P.copy(l.plane.normal);const b=p.satBounds,M=p.satAxes;for(let A=1;A<4;A++){const R=b[A],L=M[A];if(t.setFromPoints(L,l.points),R.isSeparated(t)||(o.copy(P).cross(L),t.setFromPoints(o,p.points),e.setFromPoints(o,l.points),t.isSeparated(e)))return!1}const y=l.satBounds,E=l.satAxes;for(let A=1;A<4;A++){const R=y[A],L=E[A];if(t.setFromPoints(L,p.points),R.isSeparated(t)||(o.crossVectors(P,L),t.setFromPoints(o,p.points),e.setFromPoints(o,l.points),t.isSeparated(e)))return!1}return x&&(c||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),x.start.set(0,0,0),x.end.set(0,0,0)),!0}function _(p,l,x,c,P,b,M,y,E,A,R){let L=M/(M-y);A.x=c+(P-c)*L,R.start.subVectors(l,p).multiplyScalar(L).add(p),L=M/(M-E),A.y=c+(b-c)*L,R.end.subVectors(x,p).multiplyScalar(L).add(p)}function S(p,l,x,c,P,b,M,y,E,A,R){if(P>0)_(p.c,p.a,p.b,c,l,x,E,M,y,A,R);else if(b>0)_(p.b,p.a,p.c,x,l,c,y,M,E,A,R);else if(y*E>0||M!=0)_(p.a,p.b,p.c,l,x,c,M,y,E,A,R);else if(y!=0)_(p.b,p.a,p.c,x,l,c,y,M,E,A,R);else if(E!=0)_(p.c,p.a,p.b,c,l,x,E,M,y,A,R);else return!0;return!1}function w(p,l,x,c){const P=l.degenerateSegment,b=p.plane.distanceToPoint(P.start),M=p.plane.distanceToPoint(P.end);return on(b)?on(M)?g(p,l,x,c):(x&&(x.start.copy(P.start),x.end.copy(P.start)),p.containsPoint(P.start)):on(M)?(x&&(x.start.copy(P.end),x.end.copy(P.end)),p.containsPoint(P.end)):p.plane.intersectLine(P,n)!=null?(x&&(x.start.copy(n),x.end.copy(n)),p.containsPoint(n)):!1}function v(p,l,x){const c=l.a;return on(p.plane.distanceToPoint(c))&&p.containsPoint(c)?(x&&(x.start.copy(c),x.end.copy(c)),!0):!1}function m(p,l,x){const c=p.degenerateSegment,P=l.a;return c.closestPointToPoint(P,!0,n),P.distanceToSquared(n)<Nh?(x&&(x.start.copy(P),x.end.copy(P)),!0):!1}function T(p,l,x,c){if(p.isDegenerateIntoSegment)if(l.isDegenerateIntoSegment){const P=p.degenerateSegment,b=l.degenerateSegment,M=r,y=s;P.delta(M),b.delta(y);const E=n.subVectors(b.start,P.start),A=M.x*y.y-M.y*y.x;if(on(A))return!1;const R=(E.x*y.y-E.y*y.x)/A,L=-(M.x*E.y-M.y*E.x)/A;if(R<0||R>1||L<0||L>1)return!1;const B=P.start.z+M.z*R,F=b.start.z+y.z*L;return on(B-F)?(x&&(x.start.copy(P.start).addScaledVector(M,R),x.end.copy(P.start).addScaledVector(M,R)),!0):!1}else return l.isDegenerateIntoPoint?m(p,l,x):w(l,p,x,c);else{if(p.isDegenerateIntoPoint)return l.isDegenerateIntoPoint?l.a.distanceToSquared(p.a)<Nh?(x&&(x.start.copy(p.a),x.end.copy(p.a)),!0):!1:l.isDegenerateIntoSegment?m(l,p,x):v(l,p,x);if(l.isDegenerateIntoPoint)return v(p,l,x);if(l.isDegenerateIntoSegment)return w(p,l,x,c)}}return function(l,x=null,c=!1){this.needsUpdate&&this.update(),l.isExtendedTriangle?l.needsUpdate&&l.update():(i.copy(l),i.update(),l=i);const P=T(this,l,x,c);if(P!==void 0)return P;const b=this.plane,M=l.plane;let y=M.distanceToPoint(this.a),E=M.distanceToPoint(this.b),A=M.distanceToPoint(this.c);on(y)&&(y=0),on(E)&&(E=0),on(A)&&(A=0);const R=y*E,L=y*A;if(R>0&&L>0)return!1;let B=b.distanceToPoint(l.a),F=b.distanceToPoint(l.b),z=b.distanceToPoint(l.c);on(B)&&(B=0),on(F)&&(F=0),on(z)&&(z=0);const O=B*F,$=B*z;if(O>0&&$>0)return!1;r.copy(b.normal),s.copy(M.normal);const et=r.cross(s);let Q=0,rt=Math.abs(et.x);const Et=Math.abs(et.y);Et>rt&&(rt=Et,Q=1),Math.abs(et.z)>rt&&(Q=2);const W=t0[Q],nt=this.a[W],J=this.b[W],dt=this.c[W],it=l.a[W],_t=l.b[W],Ut=l.c[W];if(S(this,nt,J,dt,R,L,y,E,A,d,a))return g(this,l,x,c);if(S(l,it,_t,Ut,O,$,B,F,z,f,u))return g(this,l,x,c);if(d.y<d.x){const Ot=d.y;d.y=d.x,d.x=Ot,h.copy(a.start),a.start.copy(a.end),a.end.copy(h)}if(f.y<f.x){const Ot=f.y;f.y=f.x,f.x=Ot,h.copy(u.start),u.start.copy(u.end),u.end.copy(h)}return d.y<f.x||f.y<d.x?!1:(x&&(f.x>d.x?x.start.copy(u.start):x.start.copy(a.start),f.y<d.y?x.end.copy(u.end):x.end.copy(a.end)),!0)}}();$e.prototype.distanceToPoint=function(){const i=new U;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();$e.prototype.distanceToTriangle=function(){const i=new U,t=new U,e=["a","b","c"],n=new Ae,r=new Ae;return function(o,a=null,u=null){const h=a||u?n:null;if(this.intersectsTriangle(o,h))return(a||u)&&(a&&h.getCenter(a),u&&h.getCenter(u)),0;let d=1/0;for(let f=0;f<3;f++){let g;const _=e[f],S=o[_];this.closestPointToPoint(S,i),g=S.distanceToSquared(i),g<d&&(d=g,a&&a.copy(i),u&&u.copy(S));const w=this[_];o.closestPointToPoint(w,i),g=w.distanceToSquared(i),g<d&&(d=g,a&&a.copy(w),u&&u.copy(i))}for(let f=0;f<3;f++){const g=e[f],_=e[(f+1)%3];n.set(this[g],this[_]);for(let S=0;S<3;S++){const w=e[S],v=e[(S+1)%3];r.set(o[w],o[v]),rc(n,r,i,t);const m=i.distanceToSquared(t);m<d&&(d=m,a&&a.copy(i),u&&u.copy(t))}}return Math.sqrt(d)}}();class Ve{constructor(t,e,n){this.isOrientedBox=!0,this.min=new U,this.max=new U,this.matrix=new Kt,this.invMatrix=new Kt,this.points=new Array(8).fill().map(()=>new U),this.satAxes=new Array(3).fill().map(()=>new U),this.satBounds=new Array(3).fill().map(()=>new Wn),this.alignedSatBounds=new Array(3).fill().map(()=>new Wn),this.needsUpdate=!1,t&&this.min.copy(t),e&&this.max.copy(e),n&&this.matrix.copy(n)}set(t,e,n){this.min.copy(t),this.max.copy(e),this.matrix.copy(n),this.needsUpdate=!0}copy(t){this.min.copy(t.min),this.max.copy(t.max),this.matrix.copy(t.matrix),this.needsUpdate=!0}}Ve.prototype.update=function(){return function(){const t=this.matrix,e=this.min,n=this.max,r=this.points;for(let h=0;h<=1;h++)for(let d=0;d<=1;d++)for(let f=0;f<=1;f++){const g=1*h|2*d|4*f,_=r[g];_.x=h?n.x:e.x,_.y=d?n.y:e.y,_.z=f?n.z:e.z,_.applyMatrix4(t)}const s=this.satBounds,o=this.satAxes,a=r[0];for(let h=0;h<3;h++){const d=o[h],f=s[h],g=1<<h,_=r[g];d.subVectors(a,_),f.setFromPoints(d,r)}const u=this.alignedSatBounds;u[0].setFromPointsField(r,"x"),u[1].setFromPointsField(r,"y"),u[2].setFromPointsField(r,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}}();Ve.prototype.intersectsBox=function(){const i=new Wn;return function(e){this.needsUpdate&&this.update();const n=e.min,r=e.max,s=this.satBounds,o=this.satAxes,a=this.alignedSatBounds;if(i.min=n.x,i.max=r.x,a[0].isSeparated(i)||(i.min=n.y,i.max=r.y,a[1].isSeparated(i))||(i.min=n.z,i.max=r.z,a[2].isSeparated(i)))return!1;for(let u=0;u<3;u++){const h=o[u],d=s[u];if(i.setFromBox(h,e),d.isSeparated(i))return!1}return!0}}();Ve.prototype.intersectsTriangle=function(){const i=new $e,t=new Array(3),e=new Wn,n=new Wn,r=new U;return function(o){this.needsUpdate&&this.update(),o.isExtendedTriangle?o.needsUpdate&&o.update():(i.copy(o),i.update(),o=i);const a=this.satBounds,u=this.satAxes;t[0]=o.a,t[1]=o.b,t[2]=o.c;for(let g=0;g<3;g++){const _=a[g],S=u[g];if(e.setFromPoints(S,t),_.isSeparated(e))return!1}const h=o.satBounds,d=o.satAxes,f=this.points;for(let g=0;g<3;g++){const _=h[g],S=d[g];if(e.setFromPoints(S,f),_.isSeparated(e))return!1}for(let g=0;g<3;g++){const _=u[g];for(let S=0;S<4;S++){const w=d[S];if(r.crossVectors(_,w),e.setFromPoints(r,t),n.setFromPoints(r,f),e.isSeparated(n))return!1}}return!0}}();Ve.prototype.closestPointToPoint=function(){return function(t,e){return this.needsUpdate&&this.update(),e.copy(t).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),e}}();Ve.prototype.distanceToPoint=function(){const i=new U;return function(e){return this.closestPointToPoint(e,i),e.distanceTo(i)}}();Ve.prototype.distanceToBox=function(){const i=["x","y","z"],t=new Array(12).fill().map(()=>new Ae),e=new Array(12).fill().map(()=>new Ae),n=new U,r=new U;return function(o,a=0,u=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(o))return(u||h)&&(o.getCenter(r),this.closestPointToPoint(r,n),o.closestPointToPoint(n,r),u&&u.copy(n),h&&h.copy(r)),0;const d=a*a,f=o.min,g=o.max,_=this.points;let S=1/0;for(let v=0;v<8;v++){const m=_[v];r.copy(m).clamp(f,g);const T=m.distanceToSquared(r);if(T<S&&(S=T,u&&u.copy(m),h&&h.copy(r),T<d))return Math.sqrt(T)}let w=0;for(let v=0;v<3;v++)for(let m=0;m<=1;m++)for(let T=0;T<=1;T++){const p=(v+1)%3,l=(v+2)%3,x=m<<p|T<<l,c=1<<v|m<<p|T<<l,P=_[x],b=_[c];t[w].set(P,b);const y=i[v],E=i[p],A=i[l],R=e[w],L=R.start,B=R.end;L[y]=f[y],L[E]=m?f[E]:g[E],L[A]=T?f[A]:g[E],B[y]=g[y],B[E]=m?f[E]:g[E],B[A]=T?f[A]:g[E],w++}for(let v=0;v<=1;v++)for(let m=0;m<=1;m++)for(let T=0;T<=1;T++){r.x=v?g.x:f.x,r.y=m?g.y:f.y,r.z=T?g.z:f.z,this.closestPointToPoint(r,n);const p=r.distanceToSquared(n);if(p<S&&(S=p,u&&u.copy(n),h&&h.copy(r),p<d))return Math.sqrt(p)}for(let v=0;v<12;v++){const m=t[v];for(let T=0;T<12;T++){const p=e[T];rc(m,p,n,r);const l=n.distanceToSquared(r);if(l<S&&(S=l,u&&u.copy(n),h&&h.copy(r),l<d))return Math.sqrt(l)}}return Math.sqrt(S)}}();class e0 extends nc{constructor(){super(()=>new $e)}}const cn=new e0,Nr=new U,ga=new U;function n0(i,t,e={},n=0,r=1/0){const s=n*n,o=r*r;let a=1/0,u=null;if(i.shapecast({boundsTraverseOrder:d=>(Nr.copy(t).clamp(d.min,d.max),Nr.distanceToSquared(t)),intersectsBounds:(d,f,g)=>g<a&&g<o,intersectsTriangle:(d,f)=>{d.closestPointToPoint(t,Nr);const g=t.distanceToSquared(Nr);return g<a&&(ga.copy(Nr),a=g,u=f),g<s}}),a===1/0)return null;const h=Math.sqrt(a);return e.point?e.point.copy(ga):e.point=ga.clone(),e.distance=h,e.faceIndex=u,e}const Is=parseInt(Qr)>=169,i0=parseInt(Qr)<=161,_i=new U,mi=new U,vi=new U,Ls=new Ft,Us=new Ft,Ns=new Ft,Fh=new U,Bh=new U,Oh=new U,Fr=new U;function r0(i,t,e,n,r,s,o,a){let u;if(s===Be?u=i.intersectTriangle(n,e,t,!0,r):u=i.intersectTriangle(t,e,n,s!==_n,r),u===null)return null;const h=i.origin.distanceTo(r);return h<o||h>a?null:{distance:h,point:r.clone()}}function Vh(i,t,e,n,r,s,o,a,u,h,d){_i.fromBufferAttribute(t,s),mi.fromBufferAttribute(t,o),vi.fromBufferAttribute(t,a);const f=r0(i,_i,mi,vi,Fr,u,h,d);if(f){if(n){Ls.fromBufferAttribute(n,s),Us.fromBufferAttribute(n,o),Ns.fromBufferAttribute(n,a),f.uv=new Ft;const _=he.getInterpolation(Fr,_i,mi,vi,Ls,Us,Ns,f.uv);Is||(f.uv=_)}if(r){Ls.fromBufferAttribute(r,s),Us.fromBufferAttribute(r,o),Ns.fromBufferAttribute(r,a),f.uv1=new Ft;const _=he.getInterpolation(Fr,_i,mi,vi,Ls,Us,Ns,f.uv1);Is||(f.uv1=_),i0&&(f.uv2=f.uv1)}if(e){Fh.fromBufferAttribute(e,s),Bh.fromBufferAttribute(e,o),Oh.fromBufferAttribute(e,a),f.normal=new U;const _=he.getInterpolation(Fr,_i,mi,vi,Fh,Bh,Oh,f.normal);f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1),Is||(f.normal=_)}const g={a:s,b:o,c:a,normal:new U,materialIndex:0};if(he.getNormal(_i,mi,vi,g.normal),f.face=g,f.faceIndex=s,Is){const _=new U;he.getBarycoord(Fr,_i,mi,vi,_),f.barycoord=_}}return f}function zh(i){return i&&i.isMaterial?i.side:i}function Mo(i,t,e,n,r,s,o){const a=n*3;let u=a+0,h=a+1,d=a+2;const{index:f,groups:g}=i;i.index&&(u=f.getX(u),h=f.getX(h),d=f.getX(d));const{position:_,normal:S,uv:w,uv1:v}=i.attributes;if(Array.isArray(t)){const m=n*3;for(let T=0,p=g.length;T<p;T++){const{start:l,count:x,materialIndex:c}=g[T];if(m>=l&&m<l+x){const P=zh(t[c]),b=Vh(e,_,S,w,v,u,h,d,P,s,o);if(b)if(b.faceIndex=n,b.face.materialIndex=c,r)r.push(b);else return b}}}else{const m=zh(t),T=Vh(e,_,S,w,v,u,h,d,m,s,o);if(T)if(T.faceIndex=n,T.face.materialIndex=0,r)r.push(T);else return T}return null}function ve(i,t,e,n){const r=i.a,s=i.b,o=i.c;let a=t,u=t+1,h=t+2;e&&(a=e.getX(a),u=e.getX(u),h=e.getX(h)),r.x=n.getX(a),r.y=n.getY(a),r.z=n.getZ(a),s.x=n.getX(u),s.y=n.getY(u),s.z=n.getZ(u),o.x=n.getX(h),o.y=n.getY(h),o.z=n.getZ(h)}function s0(i,t,e,n,r,s,o,a){const{geometry:u,_indirectBuffer:h}=i;for(let d=n,f=n+r;d<f;d++)Mo(u,t,e,d,s,o,a)}function o0(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:u}=i;let h=1/0,d=null;for(let f=n,g=n+r;f<g;f++){let _;_=Mo(a,t,e,f,null,s,o),_&&_.distance<h&&(d=_,h=_.distance)}return d}function a0(i,t,e,n,r,s,o){const{geometry:a}=e,{index:u}=a,h=a.attributes.position;for(let d=i,f=t+i;d<f;d++){let g;if(g=d,ve(o,g*3,u,h),o.needsUpdate=!0,n(o,g,r,s))return!0}return!1}function l0(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,u,h=0;const d=i._roots;for(let g=0,_=d.length;g<_;g++)s=d[g],o=new Uint32Array(s),a=new Uint16Array(s),u=new Float32Array(s),f(0,h),h+=s.byteLength;function f(g,_,S=!1){const w=g*2;if(Me(w,a)){const v=Le(g,o),m=Fe(w,a);let T=1/0,p=1/0,l=1/0,x=-1/0,c=-1/0,P=-1/0;for(let b=3*v,M=3*(v+m);b<M;b++){let y=n[b];const E=r.getX(y),A=r.getY(y),R=r.getZ(y);E<T&&(T=E),E>x&&(x=E),A<p&&(p=A),A>c&&(c=A),R<l&&(l=R),R>P&&(P=R)}return u[g+0]!==T||u[g+1]!==p||u[g+2]!==l||u[g+3]!==x||u[g+4]!==c||u[g+5]!==P?(u[g+0]=T,u[g+1]=p,u[g+2]=l,u[g+3]=x,u[g+4]=c,u[g+5]=P,!0):!1}else{const v=Te(g),m=be(g,o);let T=S,p=!1,l=!1;if(t){if(!T){const y=v/ye+_/Ie,E=m/ye+_/Ie;p=t.has(y),l=t.has(E),T=!p&&!l}}else p=!0,l=!0;const x=T||p,c=T||l;let P=!1;x&&(P=f(v,_,T));let b=!1;c&&(b=f(m,_,T));const M=P||b;if(M)for(let y=0;y<3;y++){const E=v+y,A=m+y,R=u[E],L=u[E+3],B=u[A],F=u[A+3];u[g+y]=R<B?R:B,u[g+y+3]=L>F?L:F}return M}}}function ai(i,t,e,n,r){let s,o,a,u,h,d;const f=1/e.direction.x,g=1/e.direction.y,_=1/e.direction.z,S=e.origin.x,w=e.origin.y,v=e.origin.z;let m=t[i],T=t[i+3],p=t[i+1],l=t[i+3+1],x=t[i+2],c=t[i+3+2];return f>=0?(s=(m-S)*f,o=(T-S)*f):(s=(T-S)*f,o=(m-S)*f),g>=0?(a=(p-w)*g,u=(l-w)*g):(a=(l-w)*g,u=(p-w)*g),s>u||a>o||((a>s||isNaN(s))&&(s=a),(u<o||isNaN(o))&&(o=u),_>=0?(h=(x-v)*_,d=(c-v)*_):(h=(c-v)*_,d=(x-v)*_),s>d||h>o)?!1:((h>s||s!==s)&&(s=h),(d<o||o!==o)&&(o=d),s<=r&&o>=n)}function c0(i,t,e,n,r,s,o,a){const{geometry:u,_indirectBuffer:h}=i;for(let d=n,f=n+r;d<f;d++){let g=h?h[d]:d;Mo(u,t,e,g,s,o,a)}}function h0(i,t,e,n,r,s,o){const{geometry:a,_indirectBuffer:u}=i;let h=1/0,d=null;for(let f=n,g=n+r;f<g;f++){let _;_=Mo(a,t,e,u?u[f]:f,null,s,o),_&&_.distance<h&&(d=_,h=_.distance)}return d}function u0(i,t,e,n,r,s,o){const{geometry:a}=e,{index:u}=a,h=a.attributes.position;for(let d=i,f=t+i;d<f;d++){let g;if(g=e.resolveTriangleIndex(d),ve(o,g*3,u,h),o.needsUpdate=!0,n(o,g,r,s))return!0}return!1}function d0(i,t,e,n,r,s,o){ue.setBuffer(i._roots[t]),Al(0,i,e,n,r,s,o),ue.clearBuffer()}function Al(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:u,uint32Array:h}=ue,d=i*2;if(Me(d,u)){const g=Le(i,h),_=Fe(d,u);s0(t,e,n,g,_,r,s,o)}else{const g=Te(i);ai(g,a,n,s,o)&&Al(g,t,e,n,r,s,o);const _=be(i,h);ai(_,a,n,s,o)&&Al(_,t,e,n,r,s,o)}}const f0=["x","y","z"];function p0(i,t,e,n,r,s){ue.setBuffer(i._roots[t]);const o=Rl(0,i,e,n,r,s);return ue.clearBuffer(),o}function Rl(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:u}=ue;let h=i*2;if(Me(h,a)){const f=Le(i,u),g=Fe(h,a);return o0(t,e,n,f,g,r,s)}else{const f=ec(i,u),g=f0[f],S=n.direction[g]>=0;let w,v;S?(w=Te(i),v=be(i,u)):(w=be(i,u),v=Te(i));const T=ai(w,o,n,r,s)?Rl(w,t,e,n,r,s):null;if(T){const x=T.point[g];if(S?x<=o[v+f]:x>=o[v+f+3])return T}const l=ai(v,o,n,r,s)?Rl(v,t,e,n,r,s):null;return T&&l?T.distance<=l.distance?T:l:T||l||null}}const Fs=new Oe,nr=new $e,ir=new $e,Br=new Kt,Hh=new Ve,Bs=new Ve;function g0(i,t,e,n){ue.setBuffer(i._roots[t]);const r=Pl(0,i,e,n);return ue.clearBuffer(),r}function Pl(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ue;let u=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),Hh.set(e.boundingBox.min,e.boundingBox.max,n),r=Hh),Me(u,o)){const d=t.geometry,f=d.index,g=d.attributes.position,_=e.index,S=e.attributes.position,w=Le(i,a),v=Fe(u,o);if(Br.copy(n).invert(),e.boundsTree)return ge(i,s,Bs),Bs.matrix.copy(Br),Bs.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:T=>Bs.intersectsBox(T),intersectsTriangle:T=>{T.a.applyMatrix4(n),T.b.applyMatrix4(n),T.c.applyMatrix4(n),T.needsUpdate=!0;for(let p=w*3,l=(v+w)*3;p<l;p+=3)if(ve(ir,p,f,g),ir.needsUpdate=!0,T.intersectsTriangle(ir))return!0;return!1}});{const m=yo(e);for(let T=w*3,p=(v+w)*3;T<p;T+=3){ve(nr,T,f,g),nr.a.applyMatrix4(Br),nr.b.applyMatrix4(Br),nr.c.applyMatrix4(Br),nr.needsUpdate=!0;for(let l=0,x=m*3;l<x;l+=3)if(ve(ir,l,_,S),ir.needsUpdate=!0,nr.intersectsTriangle(ir))return!0}}}else{const d=Te(i),f=be(i,a);return ge(d,s,Fs),!!(r.intersectsBox(Fs)&&Pl(d,t,e,n,r)||(ge(f,s,Fs),r.intersectsBox(Fs)&&Pl(f,t,e,n,r)))}}const Os=new Kt,_a=new Ve,Or=new Ve,_0=new U,m0=new U,v0=new U,x0=new U;function y0(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),_a.set(t.boundingBox.min,t.boundingBox.max,e),_a.needsUpdate=!0;const a=i.geometry,u=a.attributes.position,h=a.index,d=t.attributes.position,f=t.index,g=cn.getPrimitive(),_=cn.getPrimitive();let S=_0,w=m0,v=null,m=null;r&&(v=v0,m=x0);let T=1/0,p=null,l=null;return Os.copy(e).invert(),Or.matrix.copy(Os),i.shapecast({boundsTraverseOrder:x=>_a.distanceToBox(x),intersectsBounds:(x,c,P)=>P<T&&P<o?(c&&(Or.min.copy(x.min),Or.max.copy(x.max),Or.needsUpdate=!0),!0):!1,intersectsRange:(x,c)=>{if(t.boundsTree)return t.boundsTree.shapecast({boundsTraverseOrder:b=>Or.distanceToBox(b),intersectsBounds:(b,M,y)=>y<T&&y<o,intersectsRange:(b,M)=>{for(let y=b,E=b+M;y<E;y++){ve(_,3*y,f,d),_.a.applyMatrix4(e),_.b.applyMatrix4(e),_.c.applyMatrix4(e),_.needsUpdate=!0;for(let A=x,R=x+c;A<R;A++){ve(g,3*A,h,u),g.needsUpdate=!0;const L=g.distanceToTriangle(_,S,v);if(L<T&&(w.copy(S),m&&m.copy(v),T=L,p=A,l=y),L<s)return!0}}}});{const P=yo(t);for(let b=0,M=P;b<M;b++){ve(_,3*b,f,d),_.a.applyMatrix4(e),_.b.applyMatrix4(e),_.c.applyMatrix4(e),_.needsUpdate=!0;for(let y=x,E=x+c;y<E;y++){ve(g,3*y,h,u),g.needsUpdate=!0;const A=g.distanceToTriangle(_,S,v);if(A<T&&(w.copy(S),m&&m.copy(v),T=A,p=y,l=b),A<s)return!0}}}}}),cn.releasePrimitive(g),cn.releasePrimitive(_),T===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=T,n.faceIndex=p,r&&(r.point?r.point.copy(m):r.point=m.clone(),r.point.applyMatrix4(Os),w.applyMatrix4(Os),r.distance=w.sub(r.point).length(),r.faceIndex=l),n)}function M0(i,t=null){t&&Array.isArray(t)&&(t=new Set(t));const e=i.geometry,n=e.index?e.index.array:null,r=e.attributes.position;let s,o,a,u,h=0;const d=i._roots;for(let g=0,_=d.length;g<_;g++)s=d[g],o=new Uint32Array(s),a=new Uint16Array(s),u=new Float32Array(s),f(0,h),h+=s.byteLength;function f(g,_,S=!1){const w=g*2;if(Me(w,a)){const v=Le(g,o),m=Fe(w,a);let T=1/0,p=1/0,l=1/0,x=-1/0,c=-1/0,P=-1/0;for(let b=v,M=v+m;b<M;b++){const y=3*i.resolveTriangleIndex(b);for(let E=0;E<3;E++){let A=y+E;A=n?n[A]:A;const R=r.getX(A),L=r.getY(A),B=r.getZ(A);R<T&&(T=R),R>x&&(x=R),L<p&&(p=L),L>c&&(c=L),B<l&&(l=B),B>P&&(P=B)}}return u[g+0]!==T||u[g+1]!==p||u[g+2]!==l||u[g+3]!==x||u[g+4]!==c||u[g+5]!==P?(u[g+0]=T,u[g+1]=p,u[g+2]=l,u[g+3]=x,u[g+4]=c,u[g+5]=P,!0):!1}else{const v=Te(g),m=be(g,o);let T=S,p=!1,l=!1;if(t){if(!T){const y=v/ye+_/Ie,E=m/ye+_/Ie;p=t.has(y),l=t.has(E),T=!p&&!l}}else p=!0,l=!0;const x=T||p,c=T||l;let P=!1;x&&(P=f(v,_,T));let b=!1;c&&(b=f(m,_,T));const M=P||b;if(M)for(let y=0;y<3;y++){const E=v+y,A=m+y,R=u[E],L=u[E+3],B=u[A],F=u[A+3];u[g+y]=R<B?R:B,u[g+y+3]=L>F?L:F}return M}}}function S0(i,t,e,n,r,s,o){ue.setBuffer(i._roots[t]),Cl(0,i,e,n,r,s,o),ue.clearBuffer()}function Cl(i,t,e,n,r,s,o){const{float32Array:a,uint16Array:u,uint32Array:h}=ue,d=i*2;if(Me(d,u)){const g=Le(i,h),_=Fe(d,u);c0(t,e,n,g,_,r,s,o)}else{const g=Te(i);ai(g,a,n,s,o)&&Cl(g,t,e,n,r,s,o);const _=be(i,h);ai(_,a,n,s,o)&&Cl(_,t,e,n,r,s,o)}}const E0=["x","y","z"];function w0(i,t,e,n,r,s){ue.setBuffer(i._roots[t]);const o=Dl(0,i,e,n,r,s);return ue.clearBuffer(),o}function Dl(i,t,e,n,r,s){const{float32Array:o,uint16Array:a,uint32Array:u}=ue;let h=i*2;if(Me(h,a)){const f=Le(i,u),g=Fe(h,a);return h0(t,e,n,f,g,r,s)}else{const f=ec(i,u),g=E0[f],S=n.direction[g]>=0;let w,v;S?(w=Te(i),v=be(i,u)):(w=be(i,u),v=Te(i));const T=ai(w,o,n,r,s)?Dl(w,t,e,n,r,s):null;if(T){const x=T.point[g];if(S?x<=o[v+f]:x>=o[v+f+3])return T}const l=ai(v,o,n,r,s)?Dl(v,t,e,n,r,s):null;return T&&l?T.distance<=l.distance?T:l:T||l||null}}const Vs=new Oe,rr=new $e,sr=new $e,Vr=new Kt,kh=new Ve,zs=new Ve;function T0(i,t,e,n){ue.setBuffer(i._roots[t]);const r=Il(0,i,e,n);return ue.clearBuffer(),r}function Il(i,t,e,n,r=null){const{float32Array:s,uint16Array:o,uint32Array:a}=ue;let u=i*2;if(r===null&&(e.boundingBox||e.computeBoundingBox(),kh.set(e.boundingBox.min,e.boundingBox.max,n),r=kh),Me(u,o)){const d=t.geometry,f=d.index,g=d.attributes.position,_=e.index,S=e.attributes.position,w=Le(i,a),v=Fe(u,o);if(Vr.copy(n).invert(),e.boundsTree)return ge(i,s,zs),zs.matrix.copy(Vr),zs.needsUpdate=!0,e.boundsTree.shapecast({intersectsBounds:T=>zs.intersectsBox(T),intersectsTriangle:T=>{T.a.applyMatrix4(n),T.b.applyMatrix4(n),T.c.applyMatrix4(n),T.needsUpdate=!0;for(let p=w,l=v+w;p<l;p++)if(ve(sr,3*t.resolveTriangleIndex(p),f,g),sr.needsUpdate=!0,T.intersectsTriangle(sr))return!0;return!1}});{const m=yo(e);for(let T=w,p=v+w;T<p;T++){const l=t.resolveTriangleIndex(T);ve(rr,3*l,f,g),rr.a.applyMatrix4(Vr),rr.b.applyMatrix4(Vr),rr.c.applyMatrix4(Vr),rr.needsUpdate=!0;for(let x=0,c=m*3;x<c;x+=3)if(ve(sr,x,_,S),sr.needsUpdate=!0,rr.intersectsTriangle(sr))return!0}}}else{const d=Te(i),f=be(i,a);return ge(d,s,Vs),!!(r.intersectsBox(Vs)&&Il(d,t,e,n,r)||(ge(f,s,Vs),r.intersectsBox(Vs)&&Il(f,t,e,n,r)))}}const Hs=new Kt,ma=new Ve,zr=new Ve,b0=new U,A0=new U,R0=new U,P0=new U;function C0(i,t,e,n={},r={},s=0,o=1/0){t.boundingBox||t.computeBoundingBox(),ma.set(t.boundingBox.min,t.boundingBox.max,e),ma.needsUpdate=!0;const a=i.geometry,u=a.attributes.position,h=a.index,d=t.attributes.position,f=t.index,g=cn.getPrimitive(),_=cn.getPrimitive();let S=b0,w=A0,v=null,m=null;r&&(v=R0,m=P0);let T=1/0,p=null,l=null;return Hs.copy(e).invert(),zr.matrix.copy(Hs),i.shapecast({boundsTraverseOrder:x=>ma.distanceToBox(x),intersectsBounds:(x,c,P)=>P<T&&P<o?(c&&(zr.min.copy(x.min),zr.max.copy(x.max),zr.needsUpdate=!0),!0):!1,intersectsRange:(x,c)=>{if(t.boundsTree){const P=t.boundsTree;return P.shapecast({boundsTraverseOrder:b=>zr.distanceToBox(b),intersectsBounds:(b,M,y)=>y<T&&y<o,intersectsRange:(b,M)=>{for(let y=b,E=b+M;y<E;y++){const A=P.resolveTriangleIndex(y);ve(_,3*A,f,d),_.a.applyMatrix4(e),_.b.applyMatrix4(e),_.c.applyMatrix4(e),_.needsUpdate=!0;for(let R=x,L=x+c;R<L;R++){const B=i.resolveTriangleIndex(R);ve(g,3*B,h,u),g.needsUpdate=!0;const F=g.distanceToTriangle(_,S,v);if(F<T&&(w.copy(S),m&&m.copy(v),T=F,p=R,l=y),F<s)return!0}}}})}else{const P=yo(t);for(let b=0,M=P;b<M;b++){ve(_,3*b,f,d),_.a.applyMatrix4(e),_.b.applyMatrix4(e),_.c.applyMatrix4(e),_.needsUpdate=!0;for(let y=x,E=x+c;y<E;y++){const A=i.resolveTriangleIndex(y);ve(g,3*A,h,u),g.needsUpdate=!0;const R=g.distanceToTriangle(_,S,v);if(R<T&&(w.copy(S),m&&m.copy(v),T=R,p=y,l=b),R<s)return!0}}}}}),cn.releasePrimitive(g),cn.releasePrimitive(_),T===1/0?null:(n.point?n.point.copy(w):n.point=w.clone(),n.distance=T,n.faceIndex=p,r&&(r.point?r.point.copy(m):r.point=m.clone(),r.point.applyMatrix4(Hs),w.applyMatrix4(Hs),r.distance=w.sub(r.point).length(),r.faceIndex=l),n)}function Gh(i,t,e){return i===null?null:(i.point.applyMatrix4(t.matrixWorld),i.distance=i.point.distanceTo(e.ray.origin),i.object=t,i)}const ks=new Ve,Gs=new ns,Wh=new U,Xh=new Kt,qh=new U,va=["getX","getY","getZ"];class go extends Kx{static serialize(t,e={}){e={cloneBuffers:!0,...e};const n=t.geometry,r=t._roots,s=t._indirectBuffer,o=n.getIndex(),a={version:1,roots:null,index:null,indirectBuffer:null};return e.cloneBuffers?(a.roots=r.map(u=>u.slice()),a.index=o?o.array.slice():null,a.indirectBuffer=s?s.slice():null):(a.roots=r,a.index=o?o.array:null,a.indirectBuffer=s),a}static deserialize(t,e,n={}){n={setIndex:!0,indirect:!!t.indirectBuffer,...n};const{index:r,roots:s,indirectBuffer:o}=t;t.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),u(s));const a=new go(e,{...n,[tc]:!0});if(a._roots=s,a._indirectBuffer=o||null,n.setIndex){const h=e.getIndex();if(h===null){const d=new Pe(t.index,1,!1);e.setIndex(d)}else h.array!==r&&(h.array.set(r),h.needsUpdate=!0)}return a;function u(h){for(let d=0;d<h.length;d++){const f=h[d],g=new Uint32Array(f),_=new Uint16Array(f);for(let S=0,w=f.byteLength/Ie;S<w;S++){const v=ye*S,m=2*v;Me(m,_)||(g[v+6]=g[v+6]/ye-S)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(t,e={}){e.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use maxLeafSize, instead.'),e={...e,maxLeafSize:e.maxLeafTris}),super(t,e)}shiftTriangleOffsets(t){return super.shiftPrimitiveOffsets(t)}writePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,h=(s?s[t]:t)*3;let d=h+0,f=h+1,g=h+2;a&&(d=a[d],f=a[f],g=a[g]);for(let _=0;_<3;_++){const S=o[va[_]](d),w=o[va[_]](f),v=o[va[_]](g);let m=S;w<m&&(m=w),v<m&&(m=v);let T=S;w>T&&(T=w),v>T&&(T=v),e[n+_]=m,e[n+_+3]=T}return e}computePrimitiveBounds(t,e,n){const r=this.geometry,s=this._indirectBuffer,o=r.attributes.position,a=r.index?r.index.array:null,u=o.normalized;if(t<0||e+t-n.offset>n.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const h=o.array,d=o.offset||0;let f=3;o.isInterleavedBufferAttribute&&(f=o.data.stride);const g=["getX","getY","getZ"],_=n.offset;for(let S=t,w=t+e;S<w;S++){const m=(s?s[S]:S)*3,T=(S-_)*6;let p=m+0,l=m+1,x=m+2;a&&(p=a[p],l=a[l],x=a[x]),u||(p=p*f+d,l=l*f+d,x=x*f+d);for(let c=0;c<3;c++){let P,b,M;u?(P=o[g[c]](p),b=o[g[c]](l),M=o[g[c]](x)):(P=h[p+c],b=h[l+c],M=h[x+c]);let y=P;b<y&&(y=b),M<y&&(y=M);let E=P;b>E&&(E=b),M>E&&(E=M);const A=(E-y)/2,R=c*2;n[T+R+0]=y+A,n[T+R+1]=A+(Math.abs(y)+A)*so}}return n}raycastObject3D(t,e,n=[]){const{material:r}=t;if(r===void 0)return;Xh.copy(t.matrixWorld).invert(),Gs.copy(e.ray).applyMatrix4(Xh),qh.setFromMatrixScale(t.matrixWorld),Wh.copy(Gs.direction).multiply(qh);const s=Wh.length(),o=e.near/s,a=e.far/s;if(e.firstHitOnly===!0){let u=this.raycastFirst(Gs,r,o,a);u=Gh(u,t,e),u&&n.push(u)}else{const u=this.raycast(Gs,r,o,a);for(let h=0,d=u.length;h<d;h++){const f=Gh(u[h],t,e);f&&n.push(f)}}return n}refit(t=null){return(this.indirect?M0:l0)(this,t)}raycast(t,e=bn,n=0,r=1/0){const s=this._roots,o=[],a=this.indirect?S0:d0;for(let u=0,h=s.length;u<h;u++)a(this,u,e,t,o,n,r);return o}raycastFirst(t,e=bn,n=0,r=1/0){const s=this._roots;let o=null;const a=this.indirect?w0:p0;for(let u=0,h=s.length;u<h;u++){const d=a(this,u,e,t,n,r);d!=null&&(o==null||d.distance<o.distance)&&(o=d)}return o}intersectsGeometry(t,e){let n=!1;const r=this._roots,s=this.indirect?T0:g0;for(let o=0,a=r.length;o<a&&(n=s(this,o,t,e),!n);o++);return n}shapecast(t){const e=cn.getPrimitive(),n=super.shapecast({...t,intersectsPrimitive:t.intersectsTriangle,scratchPrimitive:e,iterate:this.indirect?u0:a0});return cn.releasePrimitive(e),n}bvhcast(t,e,n){let{intersectsRanges:r,intersectsTriangles:s}=n;const o=cn.getPrimitive(),a=this.geometry.index,u=this.geometry.attributes.position,h=this.indirect?S=>{const w=this.resolveTriangleIndex(S);ve(o,w*3,a,u)}:S=>{ve(o,S*3,a,u)},d=cn.getPrimitive(),f=t.geometry.index,g=t.geometry.attributes.position,_=t.indirect?S=>{const w=t.resolveTriangleIndex(S);ve(d,w*3,f,g)}:S=>{ve(d,S*3,f,g)};if(s){if(!(t instanceof go))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const S=(w,v,m,T,p,l,x,c)=>{for(let P=m,b=m+T;P<b;P++){_(P),d.a.applyMatrix4(e),d.b.applyMatrix4(e),d.c.applyMatrix4(e),d.needsUpdate=!0;for(let M=w,y=w+v;M<y;M++)if(h(M),o.needsUpdate=!0,s(o,d,M,P,p,l,x,c))return!0}return!1};if(r){const w=r;r=function(v,m,T,p,l,x,c,P){return w(v,m,T,p,l,x,c,P)?!0:S(v,m,T,p,l,x,c,P)}}else r=S}return super.bvhcast(t,e,{intersectsRanges:r})}intersectsBox(t,e){return ks.set(t.min,t.max,e),ks.needsUpdate=!0,this.shapecast({intersectsBounds:n=>ks.intersectsBox(n),intersectsTriangle:n=>ks.intersectsTriangle(n)})}intersectsSphere(t){return this.shapecast({intersectsBounds:e=>t.intersectsBox(e),intersectsTriangle:e=>e.intersectsSphere(t)})}closestPointToGeometry(t,e,n={},r={},s=0,o=1/0){return(this.indirect?C0:y0)(this,t,e,n,r,s,o)}closestPointToPoint(t,e={},n=0,r=1/0){return n0(this,t,e,n,r)}}const xd=1e-6,D0=xd*.5,yd=Math.pow(10,-Math.log10(xd)),I0=D0*yd;function Tn(i){return~~(i*yd+I0)}function L0(i){return`${Tn(i.x)},${Tn(i.y)}`}function Yh(i){return`${Tn(i.x)},${Tn(i.y)},${Tn(i.z)}`}function U0(i){return`${Tn(i.x)},${Tn(i.y)},${Tn(i.z)},${Tn(i.w)}`}function N0(i,t,e){e.direction.subVectors(t,i).normalize();const n=i.dot(e.direction);return e.origin.copy(i).addScaledVector(e.direction,-n),e}function Md(){return typeof SharedArrayBuffer<"u"}function F0(i){if(i.buffer instanceof SharedArrayBuffer)return i;const t=i.constructor,e=i.buffer,n=new SharedArrayBuffer(e.byteLength),r=new Uint8Array(e);return new Uint8Array(n).set(r,0),new t(n)}function B0(i){return i.index?i.index.count:i.attributes.position.count}function sc(i){return B0(i)/3}const O0=1e-8,V0=new U;function z0(i){return~~(i/3)}function H0(i){return i%3}function $h(i,t){return i.start-t.start}function Zh(i,t){return V0.subVectors(t,i.origin).dot(i.direction)}function k0(i,t,e,n=O0){i.sort($h),t.sort($h);for(let a=0;a<i.length;a++){const u=i[a];for(let h=0;h<t.length;h++){const d=t[h];if(!(d.start>u.end)){if(u.end<d.start||d.end<u.start)continue;if(u.start<=d.start&&u.end>=d.end)s(d.end,u.end)||i.splice(a+1,0,{start:d.end,end:u.end,index:u.index}),u.end=d.start,d.start=0,d.end=0;else if(u.start>=d.start&&u.end<=d.end)s(u.end,d.end)||t.splice(h+1,0,{start:u.end,end:d.end,index:d.index}),d.end=u.start,u.start=0,u.end=0;else if(u.start<=d.start&&u.end<=d.end){const f=u.end;u.end=d.start,d.start=f}else if(u.start>=d.start&&u.end>=d.end){const f=d.end;d.end=u.start,u.start=f}else throw new Error}if(e.has(u.index)||e.set(u.index,[]),e.has(d.index)||e.set(d.index,[]),e.get(u.index).push(d.index),e.get(d.index).push(u.index),o(d)&&(t.splice(h,1),h--),o(u)){i.splice(a,1),a--;break}}}r(i),r(t);function r(a){for(let u=0;u<a.length;u++)o(a[u])&&(a.splice(u,1),u--)}function s(a,u){return Math.abs(u-a)<n}function o(a){return Math.abs(a.end-a.start)<n}}const jh=1e-5,Kh=1e-4;class G0{constructor(){this._rays=[]}addRay(t){this._rays.push(t)}findClosestRay(t){const e=this._rays,n=t.clone();n.direction.multiplyScalar(-1);let r=1/0,s=null;for(let u=0,h=e.length;u<h;u++){const d=e[u];if(o(d,t)&&o(d,n))continue;const f=a(d,t),g=a(d,n),_=Math.min(f,g);_<r&&(r=_,s=d)}return s;function o(u,h){const d=u.origin.distanceTo(h.origin)>jh;return u.direction.angleTo(h.direction)>Kh||d}function a(u,h){const d=u.origin.distanceTo(h.origin),f=u.direction.angleTo(h.direction);return d/jh+f/Kh}}}const xa=new U,ya=new U,Ws=new ns;function W0(i,t,e){const n=i.attributes,r=i.index,s=n.position,o=new Map,a=new Map,u=Array.from(t),h=new G0;for(let d=0,f=u.length;d<f;d++){const g=u[d],_=z0(g),S=H0(g);let w=3*_+S,v=3*_+(S+1)%3;r&&(w=r.getX(w),v=r.getX(v)),xa.fromBufferAttribute(s,w),ya.fromBufferAttribute(s,v),N0(xa,ya,Ws);let m,T=h.findClosestRay(Ws);T===null&&(T=Ws.clone(),h.addRay(T)),a.has(T)||a.set(T,{forward:[],reverse:[],ray:T}),m=a.get(T);let p=Zh(T,xa),l=Zh(T,ya);p>l&&([p,l]=[l,p]),Ws.direction.dot(T.direction)<0?m.reverse.push({start:p,end:l,index:g}):m.forward.push({start:p,end:l,index:g})}return a.forEach(({forward:d,reverse:f},g)=>{k0(d,f,o,e),d.length===0&&f.length===0&&a.delete(g)}),{disjointConnectivityMap:o,fragmentMap:a}}const X0=new Ft,Ma=new U,q0=new oe,Sa=["","",""];class Y0{constructor(){this.data=null,this.disjointConnections=null,this.unmatchedDisjointEdges=null,this.unmatchedEdges=-1,this.matchedEdges=-1,this.useDrawRange=!0,this.useAllAttributes=!1,this.matchDisjointEdges=!1,this.degenerateEpsilon=1e-8}getSiblingTriangleIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:~~(n/3)}getSiblingEdgeIndex(t,e){const n=this.data[t*3+e];return n===-1?-1:n%3}getDisjointSiblingTriangleIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>~~(s/3)):[]}getDisjointSiblingEdgeIndices(t,e){const n=t*3+e,r=this.disjointConnections.get(n);return r?r.map(s=>s%3):[]}isFullyConnected(){return this.unmatchedEdges===0}updateFrom(t){const{useAllAttributes:e,useDrawRange:n,matchDisjointEdges:r,degenerateEpsilon:s}=this,o=e?p:T,a=new Map,{attributes:u}=t,h=e?Object.keys(u):null,d=t.index,f=u.position;let g=sc(t);const _=g;let S=0;n&&(S=t.drawRange.start,t.drawRange.count!==1/0&&(g=~~(t.drawRange.count/3)));let w=this.data;(!w||w.length<3*_)&&(w=new Int32Array(3*_)),w.fill(-1);let v=0,m=new Set;for(let l=S,x=g*3+S;l<x;l+=3){const c=l;for(let P=0;P<3;P++){let b=c+P;d&&(b=d.getX(b)),Sa[P]=o(b)}for(let P=0;P<3;P++){const b=(P+1)%3,M=Sa[P],y=Sa[b],E=`${y}_${M}`;if(a.has(E)){const A=c+P,R=a.get(E);w[A]=R,w[R]=A,a.delete(E),v+=2,m.delete(R)}else{const A=`${M}_${y}`,R=c+P;a.set(A,R),m.add(R)}}}if(r){const{fragmentMap:l,disjointConnectivityMap:x}=W0(t,m,s);m.clear(),l.forEach(({forward:c,reverse:P})=>{c.forEach(({index:b})=>m.add(b)),P.forEach(({index:b})=>m.add(b))}),this.unmatchedDisjointEdges=l,this.disjointConnections=x,v=g*3-m.size}this.matchedEdges=v,this.unmatchedEdges=m.size,this.data=w;function T(l){return Ma.fromBufferAttribute(f,l),Yh(Ma)}function p(l){let x="";for(let c=0,P=h.length;c<P;c++){const b=u[h[c]];let M;switch(b.itemSize){case 1:M=Tn(b.getX(l));break;case 2:M=L0(X0.fromBufferAttribute(b,l));break;case 3:M=Yh(Ma.fromBufferAttribute(b,l));break;case 4:M=U0(q0.fromBufferAttribute(b,l));break}x!==""&&(x+="|"),x+=M}return x}}}class _o extends Xe{constructor(...t){super(...t),this.isBrush=!0,this._previousMatrix=new Kt,this._previousMatrix.elements.fill(0),this._halfEdges=null,this._boundsTree=null,this._groupIndices=null,this._hash=null}markUpdated(){this._previousMatrix.copy(this.matrix)}isDirty(){const{matrix:t,_previousMatrix:e}=this,n=t.elements,r=e.elements;for(let s=0;s<16;s++)if(n[s]!==r[s])return!0;return!1}prepareGeometry(){const t=this.geometry,e=t.attributes,n=Md(),r=t.index,s=t.attributes.position,o=r?`${r.uuid}_${r.count}_${r.version}`:"-1_-1_-1",a=`${s.uuid}_${s.count}_${s.version}`,u=`${t.uuid}_${o}_${a}`;if(this._hash===u)return;if(this._hash=u,n)for(const g in e){const _=e[g];if(_.isInterleavedBufferAttribute)throw new Error("Brush: InterleavedBufferAttributes are not supported.");_.array=F0(_.array)}t.boundsTree=new go(t,{maxLeafSize:3,indirect:!0,useSharedArrayBuffer:n}),t.halfEdges||(t.halfEdges=new Y0),t.halfEdges.updateFrom(t);const h=sc(t);(!t.groupIndices||t.groupIndices.length!==h)&&(t.groupIndices=new Uint16Array(h));const d=t.groupIndices,f=t.groups;for(let g=0,_=f.length;g<_;g++){const{start:S,count:w}=f[g];for(let v=S/3,m=(S+w)/3;v<m;v++)d[v]=g}}disposeCacheData(){const{geometry:t}=this;t.halfEdges=null,t.boundsTree=null,t.groupIndices=null}}var $0=Object.getOwnPropertyNames,en=(i,t)=>function(){return t||(0,i[$0(i)[0]])((t={exports:{}}).exports,t),t.exports},So=en({"node_modules/binary-search-bounds/search-bounds.js"(i,t){function e(u,h,d,f,g){for(var _=g+1;f<=g;){var S=f+g>>>1,w=u[S],v=d!==void 0?d(w,h):w-h;v>=0?(_=S,g=S-1):f=S+1}return _}function n(u,h,d,f,g){for(var _=g+1;f<=g;){var S=f+g>>>1,w=u[S],v=d!==void 0?d(w,h):w-h;v>0?(_=S,g=S-1):f=S+1}return _}function r(u,h,d,f,g){for(var _=f-1;f<=g;){var S=f+g>>>1,w=u[S],v=d!==void 0?d(w,h):w-h;v<0?(_=S,f=S+1):g=S-1}return _}function s(u,h,d,f,g){for(var _=f-1;f<=g;){var S=f+g>>>1,w=u[S],v=d!==void 0?d(w,h):w-h;v<=0?(_=S,f=S+1):g=S-1}return _}function o(u,h,d,f,g){for(;f<=g;){var _=f+g>>>1,S=u[_],w=d!==void 0?d(S,h):S-h;if(w===0)return _;w<=0?f=_+1:g=_-1}return-1}function a(u,h,d,f,g,_){return typeof d=="function"?_(u,h,d,f===void 0?0:f|0,g===void 0?u.length-1:g|0):_(u,h,void 0,d===void 0?0:d|0,f===void 0?u.length-1:f|0)}t.exports={ge:function(u,h,d,f,g){return a(u,h,d,f,g,e)},gt:function(u,h,d,f,g){return a(u,h,d,f,g,n)},lt:function(u,h,d,f,g){return a(u,h,d,f,g,r)},le:function(u,h,d,f,g){return a(u,h,d,f,g,s)},eq:function(u,h,d,f,g){return a(u,h,d,f,g,o)}}}}),oc=en({"node_modules/two-product/two-product.js"(i,t){t.exports=n;var e=+(Math.pow(2,27)+1);function n(r,s,o){var a=r*s,u=e*r,h=u-r,d=u-h,f=r-d,g=e*s,_=g-s,S=g-_,w=s-S,v=a-d*S,m=v-f*S,T=m-d*w,p=f*w-T;return o?(o[0]=p,o[1]=a,o):[p,a]}}}),Sd=en({"node_modules/robust-sum/robust-sum.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,u=o-a,h=s-a,d=r-u,f=d+h;return f?[f,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],s[0]);var u=o+a,h=new Array(u),d=0,f=0,g=0,_=Math.abs,S=r[f],w=_(S),v=s[g],m=_(v),T,p;w<m?(p=S,f+=1,f<o&&(S=r[f],w=_(S))):(p=v,g+=1,g<a&&(v=s[g],m=_(v))),f<o&&w<m||g>=a?(T=S,f+=1,f<o&&(S=r[f],w=_(S))):(T=v,g+=1,g<a&&(v=s[g],m=_(v)));for(var l=T+p,x=l-T,c=p-x,P=c,b=l,M,y,E,A,R;f<o&&g<a;)w<m?(T=S,f+=1,f<o&&(S=r[f],w=_(S))):(T=v,g+=1,g<a&&(v=s[g],m=_(v))),p=P,l=T+p,x=l-T,c=p-x,c&&(h[d++]=c),M=b+l,y=M-b,E=M-y,A=l-y,R=b-E,P=R+A,b=M;for(;f<o;)T=S,p=P,l=T+p,x=l-T,c=p-x,c&&(h[d++]=c),M=b+l,y=M-b,E=M-y,A=l-y,R=b-E,P=R+A,b=M,f+=1,f<o&&(S=r[f]);for(;g<a;)T=v,p=P,l=T+p,x=l-T,c=p-x,c&&(h[d++]=c),M=b+l,y=M-b,E=M-y,A=l-y,R=b-E,P=R+A,b=M,g+=1,g<a&&(v=s[g]);return P&&(h[d++]=P),b&&(h[d++]=b),d||(h[d++]=0),h.length=d,h}}}),Z0=en({"node_modules/two-sum/two-sum.js"(i,t){t.exports=e;function e(n,r,s){var o=n+r,a=o-n,u=o-a,h=r-a,d=n-u;return s?(s[0]=d+h,s[1]=o,s):[d+h,o]}}}),Ed=en({"node_modules/robust-scale/robust-scale.js"(i,t){var e=oc(),n=Z0();t.exports=r;function r(s,o){var a=s.length;if(a===1){var u=e(s[0],o);return u[0]?u:[u[1]]}var h=new Array(2*a),d=[.1,.1],f=[.1,.1],g=0;e(s[0],o,d),d[0]&&(h[g++]=d[0]);for(var _=1;_<a;++_){e(s[_],o,f);var S=d[1];n(S,f[0],d),d[0]&&(h[g++]=d[0]);var w=f[1],v=d[1],m=w+v,T=m-w,p=v-T;d[1]=m,p&&(h[g++]=p)}return d[1]&&(h[g++]=d[1]),g===0&&(h[g++]=0),h.length=g,h}}}),wd=en({"node_modules/robust-subtract/robust-diff.js"(i,t){t.exports=n;function e(r,s){var o=r+s,a=o-r,u=o-a,h=s-a,d=r-u,f=d+h;return f?[f,o]:[o]}function n(r,s){var o=r.length|0,a=s.length|0;if(o===1&&a===1)return e(r[0],-s[0]);var u=o+a,h=new Array(u),d=0,f=0,g=0,_=Math.abs,S=r[f],w=_(S),v=-s[g],m=_(v),T,p;w<m?(p=S,f+=1,f<o&&(S=r[f],w=_(S))):(p=v,g+=1,g<a&&(v=-s[g],m=_(v))),f<o&&w<m||g>=a?(T=S,f+=1,f<o&&(S=r[f],w=_(S))):(T=v,g+=1,g<a&&(v=-s[g],m=_(v)));for(var l=T+p,x=l-T,c=p-x,P=c,b=l,M,y,E,A,R;f<o&&g<a;)w<m?(T=S,f+=1,f<o&&(S=r[f],w=_(S))):(T=v,g+=1,g<a&&(v=-s[g],m=_(v))),p=P,l=T+p,x=l-T,c=p-x,c&&(h[d++]=c),M=b+l,y=M-b,E=M-y,A=l-y,R=b-E,P=R+A,b=M;for(;f<o;)T=S,p=P,l=T+p,x=l-T,c=p-x,c&&(h[d++]=c),M=b+l,y=M-b,E=M-y,A=l-y,R=b-E,P=R+A,b=M,f+=1,f<o&&(S=r[f]);for(;g<a;)T=v,p=P,l=T+p,x=l-T,c=p-x,c&&(h[d++]=c),M=b+l,y=M-b,E=M-y,A=l-y,R=b-E,P=R+A,b=M,g+=1,g<a&&(v=-s[g]);return P&&(h[d++]=P),b&&(h[d++]=b),d||(h[d++]=0),h.length=d,h}}}),j0=en({"node_modules/robust-orientation/orientation.js"(i,t){var e=oc(),n=Sd(),r=Ed(),s=wd(),o=5,a=11102230246251565e-32,u=(3+16*a)*a,h=(7+56*a)*a;function d(l,x,c,P){return function(M,y,E){var A=l(l(x(y[1],E[0]),x(-E[1],y[0])),l(x(M[1],y[0]),x(-y[1],M[0]))),R=l(x(M[1],E[0]),x(-E[1],M[0])),L=P(A,R);return L[L.length-1]}}function f(l,x,c,P){return function(M,y,E,A){var R=l(l(c(l(x(E[1],A[0]),x(-A[1],E[0])),y[2]),l(c(l(x(y[1],A[0]),x(-A[1],y[0])),-E[2]),c(l(x(y[1],E[0]),x(-E[1],y[0])),A[2]))),l(c(l(x(y[1],A[0]),x(-A[1],y[0])),M[2]),l(c(l(x(M[1],A[0]),x(-A[1],M[0])),-y[2]),c(l(x(M[1],y[0]),x(-y[1],M[0])),A[2])))),L=l(l(c(l(x(E[1],A[0]),x(-A[1],E[0])),M[2]),l(c(l(x(M[1],A[0]),x(-A[1],M[0])),-E[2]),c(l(x(M[1],E[0]),x(-E[1],M[0])),A[2]))),l(c(l(x(y[1],E[0]),x(-E[1],y[0])),M[2]),l(c(l(x(M[1],E[0]),x(-E[1],M[0])),-y[2]),c(l(x(M[1],y[0]),x(-y[1],M[0])),E[2])))),B=P(R,L);return B[B.length-1]}}function g(l,x,c,P){return function(M,y,E,A,R){var L=l(l(l(c(l(c(l(x(A[1],R[0]),x(-R[1],A[0])),E[2]),l(c(l(x(E[1],R[0]),x(-R[1],E[0])),-A[2]),c(l(x(E[1],A[0]),x(-A[1],E[0])),R[2]))),y[3]),l(c(l(c(l(x(A[1],R[0]),x(-R[1],A[0])),y[2]),l(c(l(x(y[1],R[0]),x(-R[1],y[0])),-A[2]),c(l(x(y[1],A[0]),x(-A[1],y[0])),R[2]))),-E[3]),c(l(c(l(x(E[1],R[0]),x(-R[1],E[0])),y[2]),l(c(l(x(y[1],R[0]),x(-R[1],y[0])),-E[2]),c(l(x(y[1],E[0]),x(-E[1],y[0])),R[2]))),A[3]))),l(c(l(c(l(x(E[1],A[0]),x(-A[1],E[0])),y[2]),l(c(l(x(y[1],A[0]),x(-A[1],y[0])),-E[2]),c(l(x(y[1],E[0]),x(-E[1],y[0])),A[2]))),-R[3]),l(c(l(c(l(x(A[1],R[0]),x(-R[1],A[0])),y[2]),l(c(l(x(y[1],R[0]),x(-R[1],y[0])),-A[2]),c(l(x(y[1],A[0]),x(-A[1],y[0])),R[2]))),M[3]),c(l(c(l(x(A[1],R[0]),x(-R[1],A[0])),M[2]),l(c(l(x(M[1],R[0]),x(-R[1],M[0])),-A[2]),c(l(x(M[1],A[0]),x(-A[1],M[0])),R[2]))),-y[3])))),l(l(c(l(c(l(x(y[1],R[0]),x(-R[1],y[0])),M[2]),l(c(l(x(M[1],R[0]),x(-R[1],M[0])),-y[2]),c(l(x(M[1],y[0]),x(-y[1],M[0])),R[2]))),A[3]),l(c(l(c(l(x(y[1],A[0]),x(-A[1],y[0])),M[2]),l(c(l(x(M[1],A[0]),x(-A[1],M[0])),-y[2]),c(l(x(M[1],y[0]),x(-y[1],M[0])),A[2]))),-R[3]),c(l(c(l(x(E[1],A[0]),x(-A[1],E[0])),y[2]),l(c(l(x(y[1],A[0]),x(-A[1],y[0])),-E[2]),c(l(x(y[1],E[0]),x(-E[1],y[0])),A[2]))),M[3]))),l(c(l(c(l(x(E[1],A[0]),x(-A[1],E[0])),M[2]),l(c(l(x(M[1],A[0]),x(-A[1],M[0])),-E[2]),c(l(x(M[1],E[0]),x(-E[1],M[0])),A[2]))),-y[3]),l(c(l(c(l(x(y[1],A[0]),x(-A[1],y[0])),M[2]),l(c(l(x(M[1],A[0]),x(-A[1],M[0])),-y[2]),c(l(x(M[1],y[0]),x(-y[1],M[0])),A[2]))),E[3]),c(l(c(l(x(y[1],E[0]),x(-E[1],y[0])),M[2]),l(c(l(x(M[1],E[0]),x(-E[1],M[0])),-y[2]),c(l(x(M[1],y[0]),x(-y[1],M[0])),E[2]))),-A[3]))))),B=l(l(l(c(l(c(l(x(A[1],R[0]),x(-R[1],A[0])),E[2]),l(c(l(x(E[1],R[0]),x(-R[1],E[0])),-A[2]),c(l(x(E[1],A[0]),x(-A[1],E[0])),R[2]))),M[3]),c(l(c(l(x(A[1],R[0]),x(-R[1],A[0])),M[2]),l(c(l(x(M[1],R[0]),x(-R[1],M[0])),-A[2]),c(l(x(M[1],A[0]),x(-A[1],M[0])),R[2]))),-E[3])),l(c(l(c(l(x(E[1],R[0]),x(-R[1],E[0])),M[2]),l(c(l(x(M[1],R[0]),x(-R[1],M[0])),-E[2]),c(l(x(M[1],E[0]),x(-E[1],M[0])),R[2]))),A[3]),c(l(c(l(x(E[1],A[0]),x(-A[1],E[0])),M[2]),l(c(l(x(M[1],A[0]),x(-A[1],M[0])),-E[2]),c(l(x(M[1],E[0]),x(-E[1],M[0])),A[2]))),-R[3]))),l(l(c(l(c(l(x(E[1],R[0]),x(-R[1],E[0])),y[2]),l(c(l(x(y[1],R[0]),x(-R[1],y[0])),-E[2]),c(l(x(y[1],E[0]),x(-E[1],y[0])),R[2]))),M[3]),c(l(c(l(x(E[1],R[0]),x(-R[1],E[0])),M[2]),l(c(l(x(M[1],R[0]),x(-R[1],M[0])),-E[2]),c(l(x(M[1],E[0]),x(-E[1],M[0])),R[2]))),-y[3])),l(c(l(c(l(x(y[1],R[0]),x(-R[1],y[0])),M[2]),l(c(l(x(M[1],R[0]),x(-R[1],M[0])),-y[2]),c(l(x(M[1],y[0]),x(-y[1],M[0])),R[2]))),E[3]),c(l(c(l(x(y[1],E[0]),x(-E[1],y[0])),M[2]),l(c(l(x(M[1],E[0]),x(-E[1],M[0])),-y[2]),c(l(x(M[1],y[0]),x(-y[1],M[0])),E[2]))),-R[3])))),F=P(L,B);return F[F.length-1]}}function _(l){var x=l===3?d:l===4?f:g;return x(n,e,r,s)}var S=_(3),w=_(4),v=[function(){return 0},function(){return 0},function(x,c){return c[0]-x[0]},function(x,c,P){var b=(x[1]-P[1])*(c[0]-P[0]),M=(x[0]-P[0])*(c[1]-P[1]),y=b-M,E;if(b>0){if(M<=0)return y;E=b+M}else if(b<0){if(M>=0)return y;E=-(b+M)}else return y;var A=u*E;return y>=A||y<=-A?y:S(x,c,P)},function(x,c,P,b){var M=x[0]-b[0],y=c[0]-b[0],E=P[0]-b[0],A=x[1]-b[1],R=c[1]-b[1],L=P[1]-b[1],B=x[2]-b[2],F=c[2]-b[2],z=P[2]-b[2],O=y*L,$=E*R,et=E*A,Q=M*L,rt=M*R,Et=y*A,vt=B*(O-$)+F*(et-Q)+z*(rt-Et),W=(Math.abs(O)+Math.abs($))*Math.abs(B)+(Math.abs(et)+Math.abs(Q))*Math.abs(F)+(Math.abs(rt)+Math.abs(Et))*Math.abs(z),nt=h*W;return vt>nt||-vt>nt?vt:w(x,c,P,b)}];function m(l){var x=v[l.length];return x||(x=v[l.length]=_(l.length)),x.apply(void 0,l)}function T(l,x,c,P,b,M,y){return function(A,R,L,B,F){switch(arguments.length){case 0:case 1:return 0;case 2:return P(A,R);case 3:return b(A,R,L);case 4:return M(A,R,L,B);case 5:return y(A,R,L,B,F)}for(var z=new Array(arguments.length),O=0;O<arguments.length;++O)z[O]=arguments[O];return l(z)}}function p(){for(;v.length<=o;)v.push(_(v.length));t.exports=T.apply(void 0,[m].concat(v));for(var l=0;l<=o;++l)t.exports[l]=v[l]}p()}}),K0=en({"node_modules/cdt2d/lib/monotone.js"(i,t){var e=So(),n=j0()[3],r=0,s=1,o=2;t.exports=w;function a(v,m,T,p,l){this.a=v,this.b=m,this.idx=T,this.lowerIds=p,this.upperIds=l}function u(v,m,T,p){this.a=v,this.b=m,this.type=T,this.idx=p}function h(v,m){var T=v.a[0]-m.a[0]||v.a[1]-m.a[1]||v.type-m.type;return T||v.type!==r&&(T=n(v.a,v.b,m.b),T)?T:v.idx-m.idx}function d(v,m){return n(v.a,v.b,m)}function f(v,m,T,p,l){for(var x=e.lt(m,p,d),c=e.gt(m,p,d),P=x;P<c;++P){for(var b=m[P],M=b.lowerIds,E=M.length;E>1&&n(T[M[E-2]],T[M[E-1]],p)>0;)v.push([M[E-1],M[E-2],l]),E-=1;M.length=E,M.push(l);for(var y=b.upperIds,E=y.length;E>1&&n(T[y[E-2]],T[y[E-1]],p)<0;)v.push([y[E-2],y[E-1],l]),E-=1;y.length=E,y.push(l)}}function g(v,m){var T;return v.a[0]<m.a[0]?T=n(v.a,v.b,m.a):T=n(m.b,m.a,v.a),T||(m.b[0]<v.b[0]?T=n(v.a,v.b,m.b):T=n(m.b,m.a,v.b),T||v.idx-m.idx)}function _(v,m,T){var p=e.le(v,T,g),l=v[p],x=l.upperIds,c=x[x.length-1];l.upperIds=[c],v.splice(p+1,0,new a(T.a,T.b,T.idx,[c],x))}function S(v,m,T){var p=T.a;T.a=T.b,T.b=p;var l=e.eq(v,T,g),x=v[l],c=v[l-1];c.upperIds=x.upperIds,v.splice(l,1)}function w(v,m){for(var T=v.length,p=m.length,l=[],x=0;x<T;++x)l.push(new u(v[x],null,r,x));for(var x=0;x<p;++x){var c=m[x],P=v[c[0]],b=v[c[1]];P[0]<b[0]?l.push(new u(P,b,o,x),new u(b,P,s,x)):P[0]>b[0]&&l.push(new u(b,P,o,x),new u(P,b,s,x))}l.sort(h);for(var M=l[0].a[0]-(1+Math.abs(l[0].a[0]))*Math.pow(2,-52),y=[new a([M,1],[M,0],-1,[],[])],E=[],x=0,A=l.length;x<A;++x){var R=l[x],L=R.type;L===r?f(E,y,v,R.a,R.idx):L===o?_(y,v,R):S(y,v,R)}return E}}}),J0=en({"node_modules/cdt2d/lib/triangulation.js"(i,t){var e=So();t.exports=o;function n(a,u){this.stars=a,this.edges=u}var r=n.prototype;function s(a,u,h){for(var d=1,f=a.length;d<f;d+=2)if(a[d-1]===u&&a[d]===h){a[d-1]=a[f-2],a[d]=a[f-1],a.length=f-2;return}}r.isConstraint=function(){var a=[0,0];function u(h,d){return h[0]-d[0]||h[1]-d[1]}return function(h,d){return a[0]=Math.min(h,d),a[1]=Math.max(h,d),e.eq(this.edges,a,u)>=0}}(),r.removeTriangle=function(a,u,h){var d=this.stars;s(d[a],u,h),s(d[u],h,a),s(d[h],a,u)},r.addTriangle=function(a,u,h){var d=this.stars;d[a].push(u,h),d[u].push(h,a),d[h].push(a,u)},r.opposite=function(a,u){for(var h=this.stars[u],d=1,f=h.length;d<f;d+=2)if(h[d]===a)return h[d-1];return-1},r.flip=function(a,u){var h=this.opposite(a,u),d=this.opposite(u,a);this.removeTriangle(a,u,h),this.removeTriangle(u,a,d),this.addTriangle(a,d,h),this.addTriangle(u,h,d)},r.edges=function(){for(var a=this.stars,u=[],h=0,d=a.length;h<d;++h)for(var f=a[h],g=0,_=f.length;g<_;g+=2)u.push([f[g],f[g+1]]);return u},r.cells=function(){for(var a=this.stars,u=[],h=0,d=a.length;h<d;++h)for(var f=a[h],g=0,_=f.length;g<_;g+=2){var S=f[g],w=f[g+1];h<Math.min(S,w)&&u.push([h,S,w])}return u};function o(a,u){for(var h=new Array(a),d=0;d<a;++d)h[d]=[];return new n(h,u)}}}),Q0=en({"node_modules/robust-in-sphere/in-sphere.js"(i,t){var e=oc(),n=Sd(),r=wd(),s=Ed(),o=6;function a(p){var l=p===3?f:p===4?g:p===5?_:S;return l(n,r,e,s)}function u(){return 0}function h(){return 0}function d(){return 0}function f(p,l,x,c){function P(b,M,y){var E=x(b[0],b[0]),A=c(E,M[0]),R=c(E,y[0]),L=x(M[0],M[0]),B=c(L,b[0]),F=c(L,y[0]),z=x(y[0],y[0]),O=c(z,b[0]),$=c(z,M[0]),et=p(l($,F),l(B,A)),Q=l(O,R),rt=l(et,Q);return rt[rt.length-1]}return P}function g(p,l,x,c){function P(b,M,y,E){var A=p(x(b[0],b[0]),x(b[1],b[1])),R=c(A,M[0]),L=c(A,y[0]),B=c(A,E[0]),F=p(x(M[0],M[0]),x(M[1],M[1])),z=c(F,b[0]),O=c(F,y[0]),$=c(F,E[0]),et=p(x(y[0],y[0]),x(y[1],y[1])),Q=c(et,b[0]),rt=c(et,M[0]),Et=c(et,E[0]),vt=p(x(E[0],E[0]),x(E[1],E[1])),W=c(vt,b[0]),nt=c(vt,M[0]),J=c(vt,y[0]),dt=p(p(c(l(J,Et),M[1]),p(c(l(nt,$),-y[1]),c(l(rt,O),E[1]))),p(c(l(nt,$),b[1]),p(c(l(W,B),-M[1]),c(l(z,R),E[1])))),it=p(p(c(l(J,Et),b[1]),p(c(l(W,B),-y[1]),c(l(Q,L),E[1]))),p(c(l(rt,O),b[1]),p(c(l(Q,L),-M[1]),c(l(z,R),y[1])))),_t=l(dt,it);return _t[_t.length-1]}return P}function _(p,l,x,c){function P(b,M,y,E,A){var R=p(x(b[0],b[0]),p(x(b[1],b[1]),x(b[2],b[2]))),L=c(R,M[0]),B=c(R,y[0]),F=c(R,E[0]),z=c(R,A[0]),O=p(x(M[0],M[0]),p(x(M[1],M[1]),x(M[2],M[2]))),$=c(O,b[0]),et=c(O,y[0]),Q=c(O,E[0]),rt=c(O,A[0]),Et=p(x(y[0],y[0]),p(x(y[1],y[1]),x(y[2],y[2]))),vt=c(Et,b[0]),W=c(Et,M[0]),nt=c(Et,E[0]),J=c(Et,A[0]),dt=p(x(E[0],E[0]),p(x(E[1],E[1]),x(E[2],E[2]))),it=c(dt,b[0]),_t=c(dt,M[0]),Ut=c(dt,y[0]),Ot=c(dt,A[0]),N=p(x(A[0],A[0]),p(x(A[1],A[1]),x(A[2],A[2]))),It=c(N,b[0]),pt=c(N,M[0]),bt=c(N,y[0]),ut=c(N,E[0]),Jt=p(p(p(c(p(c(l(ut,Ot),y[1]),p(c(l(bt,J),-E[1]),c(l(Ut,nt),A[1]))),M[2]),p(c(p(c(l(ut,Ot),M[1]),p(c(l(pt,rt),-E[1]),c(l(_t,Q),A[1]))),-y[2]),c(p(c(l(bt,J),M[1]),p(c(l(pt,rt),-y[1]),c(l(W,et),A[1]))),E[2]))),p(c(p(c(l(Ut,nt),M[1]),p(c(l(_t,Q),-y[1]),c(l(W,et),E[1]))),-A[2]),p(c(p(c(l(ut,Ot),M[1]),p(c(l(pt,rt),-E[1]),c(l(_t,Q),A[1]))),b[2]),c(p(c(l(ut,Ot),b[1]),p(c(l(It,z),-E[1]),c(l(it,F),A[1]))),-M[2])))),p(p(c(p(c(l(pt,rt),b[1]),p(c(l(It,z),-M[1]),c(l($,L),A[1]))),E[2]),p(c(p(c(l(_t,Q),b[1]),p(c(l(it,F),-M[1]),c(l($,L),E[1]))),-A[2]),c(p(c(l(Ut,nt),M[1]),p(c(l(_t,Q),-y[1]),c(l(W,et),E[1]))),b[2]))),p(c(p(c(l(Ut,nt),b[1]),p(c(l(it,F),-y[1]),c(l(vt,B),E[1]))),-M[2]),p(c(p(c(l(_t,Q),b[1]),p(c(l(it,F),-M[1]),c(l($,L),E[1]))),y[2]),c(p(c(l(W,et),b[1]),p(c(l(vt,B),-M[1]),c(l($,L),y[1]))),-E[2]))))),at=p(p(p(c(p(c(l(ut,Ot),y[1]),p(c(l(bt,J),-E[1]),c(l(Ut,nt),A[1]))),b[2]),c(p(c(l(ut,Ot),b[1]),p(c(l(It,z),-E[1]),c(l(it,F),A[1]))),-y[2])),p(c(p(c(l(bt,J),b[1]),p(c(l(It,z),-y[1]),c(l(vt,B),A[1]))),E[2]),c(p(c(l(Ut,nt),b[1]),p(c(l(it,F),-y[1]),c(l(vt,B),E[1]))),-A[2]))),p(p(c(p(c(l(bt,J),M[1]),p(c(l(pt,rt),-y[1]),c(l(W,et),A[1]))),b[2]),c(p(c(l(bt,J),b[1]),p(c(l(It,z),-y[1]),c(l(vt,B),A[1]))),-M[2])),p(c(p(c(l(pt,rt),b[1]),p(c(l(It,z),-M[1]),c(l($,L),A[1]))),y[2]),c(p(c(l(W,et),b[1]),p(c(l(vt,B),-M[1]),c(l($,L),y[1]))),-A[2])))),wt=l(Jt,at);return wt[wt.length-1]}return P}function S(p,l,x,c){function P(b,M,y,E,A,R){var L=p(p(x(b[0],b[0]),x(b[1],b[1])),p(x(b[2],b[2]),x(b[3],b[3]))),B=c(L,M[0]),F=c(L,y[0]),z=c(L,E[0]),O=c(L,A[0]),$=c(L,R[0]),et=p(p(x(M[0],M[0]),x(M[1],M[1])),p(x(M[2],M[2]),x(M[3],M[3]))),Q=c(et,b[0]),rt=c(et,y[0]),Et=c(et,E[0]),vt=c(et,A[0]),W=c(et,R[0]),nt=p(p(x(y[0],y[0]),x(y[1],y[1])),p(x(y[2],y[2]),x(y[3],y[3]))),J=c(nt,b[0]),dt=c(nt,M[0]),it=c(nt,E[0]),_t=c(nt,A[0]),Ut=c(nt,R[0]),Ot=p(p(x(E[0],E[0]),x(E[1],E[1])),p(x(E[2],E[2]),x(E[3],E[3]))),N=c(Ot,b[0]),It=c(Ot,M[0]),pt=c(Ot,y[0]),bt=c(Ot,A[0]),ut=c(Ot,R[0]),Jt=p(p(x(A[0],A[0]),x(A[1],A[1])),p(x(A[2],A[2]),x(A[3],A[3]))),at=c(Jt,b[0]),wt=c(Jt,M[0]),Gt=c(Jt,y[0]),kt=c(Jt,E[0]),I=c(Jt,R[0]),C=p(p(x(R[0],R[0]),x(R[1],R[1])),p(x(R[2],R[2]),x(R[3],R[3]))),H=c(C,b[0]),q=c(C,M[0]),K=c(C,y[0]),X=c(C,E[0]),gt=c(C,A[0]),ft=p(p(p(c(p(p(c(p(c(l(gt,I),E[1]),p(c(l(X,ut),-A[1]),c(l(kt,bt),R[1]))),y[2]),c(p(c(l(gt,I),y[1]),p(c(l(K,Ut),-A[1]),c(l(Gt,_t),R[1]))),-E[2])),p(c(p(c(l(X,ut),y[1]),p(c(l(K,Ut),-E[1]),c(l(pt,it),R[1]))),A[2]),c(p(c(l(kt,bt),y[1]),p(c(l(Gt,_t),-E[1]),c(l(pt,it),A[1]))),-R[2]))),M[3]),p(c(p(p(c(p(c(l(gt,I),E[1]),p(c(l(X,ut),-A[1]),c(l(kt,bt),R[1]))),M[2]),c(p(c(l(gt,I),M[1]),p(c(l(q,W),-A[1]),c(l(wt,vt),R[1]))),-E[2])),p(c(p(c(l(X,ut),M[1]),p(c(l(q,W),-E[1]),c(l(It,Et),R[1]))),A[2]),c(p(c(l(kt,bt),M[1]),p(c(l(wt,vt),-E[1]),c(l(It,Et),A[1]))),-R[2]))),-y[3]),c(p(p(c(p(c(l(gt,I),y[1]),p(c(l(K,Ut),-A[1]),c(l(Gt,_t),R[1]))),M[2]),c(p(c(l(gt,I),M[1]),p(c(l(q,W),-A[1]),c(l(wt,vt),R[1]))),-y[2])),p(c(p(c(l(K,Ut),M[1]),p(c(l(q,W),-y[1]),c(l(dt,rt),R[1]))),A[2]),c(p(c(l(Gt,_t),M[1]),p(c(l(wt,vt),-y[1]),c(l(dt,rt),A[1]))),-R[2]))),E[3]))),p(p(c(p(p(c(p(c(l(X,ut),y[1]),p(c(l(K,Ut),-E[1]),c(l(pt,it),R[1]))),M[2]),c(p(c(l(X,ut),M[1]),p(c(l(q,W),-E[1]),c(l(It,Et),R[1]))),-y[2])),p(c(p(c(l(K,Ut),M[1]),p(c(l(q,W),-y[1]),c(l(dt,rt),R[1]))),E[2]),c(p(c(l(pt,it),M[1]),p(c(l(It,Et),-y[1]),c(l(dt,rt),E[1]))),-R[2]))),-A[3]),c(p(p(c(p(c(l(kt,bt),y[1]),p(c(l(Gt,_t),-E[1]),c(l(pt,it),A[1]))),M[2]),c(p(c(l(kt,bt),M[1]),p(c(l(wt,vt),-E[1]),c(l(It,Et),A[1]))),-y[2])),p(c(p(c(l(Gt,_t),M[1]),p(c(l(wt,vt),-y[1]),c(l(dt,rt),A[1]))),E[2]),c(p(c(l(pt,it),M[1]),p(c(l(It,Et),-y[1]),c(l(dt,rt),E[1]))),-A[2]))),R[3])),p(c(p(p(c(p(c(l(gt,I),E[1]),p(c(l(X,ut),-A[1]),c(l(kt,bt),R[1]))),M[2]),c(p(c(l(gt,I),M[1]),p(c(l(q,W),-A[1]),c(l(wt,vt),R[1]))),-E[2])),p(c(p(c(l(X,ut),M[1]),p(c(l(q,W),-E[1]),c(l(It,Et),R[1]))),A[2]),c(p(c(l(kt,bt),M[1]),p(c(l(wt,vt),-E[1]),c(l(It,Et),A[1]))),-R[2]))),b[3]),c(p(p(c(p(c(l(gt,I),E[1]),p(c(l(X,ut),-A[1]),c(l(kt,bt),R[1]))),b[2]),c(p(c(l(gt,I),b[1]),p(c(l(H,$),-A[1]),c(l(at,O),R[1]))),-E[2])),p(c(p(c(l(X,ut),b[1]),p(c(l(H,$),-E[1]),c(l(N,z),R[1]))),A[2]),c(p(c(l(kt,bt),b[1]),p(c(l(at,O),-E[1]),c(l(N,z),A[1]))),-R[2]))),-M[3])))),p(p(p(c(p(p(c(p(c(l(gt,I),M[1]),p(c(l(q,W),-A[1]),c(l(wt,vt),R[1]))),b[2]),c(p(c(l(gt,I),b[1]),p(c(l(H,$),-A[1]),c(l(at,O),R[1]))),-M[2])),p(c(p(c(l(q,W),b[1]),p(c(l(H,$),-M[1]),c(l(Q,B),R[1]))),A[2]),c(p(c(l(wt,vt),b[1]),p(c(l(at,O),-M[1]),c(l(Q,B),A[1]))),-R[2]))),E[3]),c(p(p(c(p(c(l(X,ut),M[1]),p(c(l(q,W),-E[1]),c(l(It,Et),R[1]))),b[2]),c(p(c(l(X,ut),b[1]),p(c(l(H,$),-E[1]),c(l(N,z),R[1]))),-M[2])),p(c(p(c(l(q,W),b[1]),p(c(l(H,$),-M[1]),c(l(Q,B),R[1]))),E[2]),c(p(c(l(It,Et),b[1]),p(c(l(N,z),-M[1]),c(l(Q,B),E[1]))),-R[2]))),-A[3])),p(c(p(p(c(p(c(l(kt,bt),M[1]),p(c(l(wt,vt),-E[1]),c(l(It,Et),A[1]))),b[2]),c(p(c(l(kt,bt),b[1]),p(c(l(at,O),-E[1]),c(l(N,z),A[1]))),-M[2])),p(c(p(c(l(wt,vt),b[1]),p(c(l(at,O),-M[1]),c(l(Q,B),A[1]))),E[2]),c(p(c(l(It,Et),b[1]),p(c(l(N,z),-M[1]),c(l(Q,B),E[1]))),-A[2]))),R[3]),c(p(p(c(p(c(l(X,ut),y[1]),p(c(l(K,Ut),-E[1]),c(l(pt,it),R[1]))),M[2]),c(p(c(l(X,ut),M[1]),p(c(l(q,W),-E[1]),c(l(It,Et),R[1]))),-y[2])),p(c(p(c(l(K,Ut),M[1]),p(c(l(q,W),-y[1]),c(l(dt,rt),R[1]))),E[2]),c(p(c(l(pt,it),M[1]),p(c(l(It,Et),-y[1]),c(l(dt,rt),E[1]))),-R[2]))),b[3]))),p(p(c(p(p(c(p(c(l(X,ut),y[1]),p(c(l(K,Ut),-E[1]),c(l(pt,it),R[1]))),b[2]),c(p(c(l(X,ut),b[1]),p(c(l(H,$),-E[1]),c(l(N,z),R[1]))),-y[2])),p(c(p(c(l(K,Ut),b[1]),p(c(l(H,$),-y[1]),c(l(J,F),R[1]))),E[2]),c(p(c(l(pt,it),b[1]),p(c(l(N,z),-y[1]),c(l(J,F),E[1]))),-R[2]))),-M[3]),c(p(p(c(p(c(l(X,ut),M[1]),p(c(l(q,W),-E[1]),c(l(It,Et),R[1]))),b[2]),c(p(c(l(X,ut),b[1]),p(c(l(H,$),-E[1]),c(l(N,z),R[1]))),-M[2])),p(c(p(c(l(q,W),b[1]),p(c(l(H,$),-M[1]),c(l(Q,B),R[1]))),E[2]),c(p(c(l(It,Et),b[1]),p(c(l(N,z),-M[1]),c(l(Q,B),E[1]))),-R[2]))),y[3])),p(c(p(p(c(p(c(l(K,Ut),M[1]),p(c(l(q,W),-y[1]),c(l(dt,rt),R[1]))),b[2]),c(p(c(l(K,Ut),b[1]),p(c(l(H,$),-y[1]),c(l(J,F),R[1]))),-M[2])),p(c(p(c(l(q,W),b[1]),p(c(l(H,$),-M[1]),c(l(Q,B),R[1]))),y[2]),c(p(c(l(dt,rt),b[1]),p(c(l(J,F),-M[1]),c(l(Q,B),y[1]))),-R[2]))),-E[3]),c(p(p(c(p(c(l(pt,it),M[1]),p(c(l(It,Et),-y[1]),c(l(dt,rt),E[1]))),b[2]),c(p(c(l(pt,it),b[1]),p(c(l(N,z),-y[1]),c(l(J,F),E[1]))),-M[2])),p(c(p(c(l(It,Et),b[1]),p(c(l(N,z),-M[1]),c(l(Q,B),E[1]))),y[2]),c(p(c(l(dt,rt),b[1]),p(c(l(J,F),-M[1]),c(l(Q,B),y[1]))),-E[2]))),R[3]))))),Pt=p(p(p(c(p(p(c(p(c(l(gt,I),E[1]),p(c(l(X,ut),-A[1]),c(l(kt,bt),R[1]))),y[2]),c(p(c(l(gt,I),y[1]),p(c(l(K,Ut),-A[1]),c(l(Gt,_t),R[1]))),-E[2])),p(c(p(c(l(X,ut),y[1]),p(c(l(K,Ut),-E[1]),c(l(pt,it),R[1]))),A[2]),c(p(c(l(kt,bt),y[1]),p(c(l(Gt,_t),-E[1]),c(l(pt,it),A[1]))),-R[2]))),b[3]),p(c(p(p(c(p(c(l(gt,I),E[1]),p(c(l(X,ut),-A[1]),c(l(kt,bt),R[1]))),b[2]),c(p(c(l(gt,I),b[1]),p(c(l(H,$),-A[1]),c(l(at,O),R[1]))),-E[2])),p(c(p(c(l(X,ut),b[1]),p(c(l(H,$),-E[1]),c(l(N,z),R[1]))),A[2]),c(p(c(l(kt,bt),b[1]),p(c(l(at,O),-E[1]),c(l(N,z),A[1]))),-R[2]))),-y[3]),c(p(p(c(p(c(l(gt,I),y[1]),p(c(l(K,Ut),-A[1]),c(l(Gt,_t),R[1]))),b[2]),c(p(c(l(gt,I),b[1]),p(c(l(H,$),-A[1]),c(l(at,O),R[1]))),-y[2])),p(c(p(c(l(K,Ut),b[1]),p(c(l(H,$),-y[1]),c(l(J,F),R[1]))),A[2]),c(p(c(l(Gt,_t),b[1]),p(c(l(at,O),-y[1]),c(l(J,F),A[1]))),-R[2]))),E[3]))),p(p(c(p(p(c(p(c(l(X,ut),y[1]),p(c(l(K,Ut),-E[1]),c(l(pt,it),R[1]))),b[2]),c(p(c(l(X,ut),b[1]),p(c(l(H,$),-E[1]),c(l(N,z),R[1]))),-y[2])),p(c(p(c(l(K,Ut),b[1]),p(c(l(H,$),-y[1]),c(l(J,F),R[1]))),E[2]),c(p(c(l(pt,it),b[1]),p(c(l(N,z),-y[1]),c(l(J,F),E[1]))),-R[2]))),-A[3]),c(p(p(c(p(c(l(kt,bt),y[1]),p(c(l(Gt,_t),-E[1]),c(l(pt,it),A[1]))),b[2]),c(p(c(l(kt,bt),b[1]),p(c(l(at,O),-E[1]),c(l(N,z),A[1]))),-y[2])),p(c(p(c(l(Gt,_t),b[1]),p(c(l(at,O),-y[1]),c(l(J,F),A[1]))),E[2]),c(p(c(l(pt,it),b[1]),p(c(l(N,z),-y[1]),c(l(J,F),E[1]))),-A[2]))),R[3])),p(c(p(p(c(p(c(l(gt,I),y[1]),p(c(l(K,Ut),-A[1]),c(l(Gt,_t),R[1]))),M[2]),c(p(c(l(gt,I),M[1]),p(c(l(q,W),-A[1]),c(l(wt,vt),R[1]))),-y[2])),p(c(p(c(l(K,Ut),M[1]),p(c(l(q,W),-y[1]),c(l(dt,rt),R[1]))),A[2]),c(p(c(l(Gt,_t),M[1]),p(c(l(wt,vt),-y[1]),c(l(dt,rt),A[1]))),-R[2]))),b[3]),c(p(p(c(p(c(l(gt,I),y[1]),p(c(l(K,Ut),-A[1]),c(l(Gt,_t),R[1]))),b[2]),c(p(c(l(gt,I),b[1]),p(c(l(H,$),-A[1]),c(l(at,O),R[1]))),-y[2])),p(c(p(c(l(K,Ut),b[1]),p(c(l(H,$),-y[1]),c(l(J,F),R[1]))),A[2]),c(p(c(l(Gt,_t),b[1]),p(c(l(at,O),-y[1]),c(l(J,F),A[1]))),-R[2]))),-M[3])))),p(p(p(c(p(p(c(p(c(l(gt,I),M[1]),p(c(l(q,W),-A[1]),c(l(wt,vt),R[1]))),b[2]),c(p(c(l(gt,I),b[1]),p(c(l(H,$),-A[1]),c(l(at,O),R[1]))),-M[2])),p(c(p(c(l(q,W),b[1]),p(c(l(H,$),-M[1]),c(l(Q,B),R[1]))),A[2]),c(p(c(l(wt,vt),b[1]),p(c(l(at,O),-M[1]),c(l(Q,B),A[1]))),-R[2]))),y[3]),c(p(p(c(p(c(l(K,Ut),M[1]),p(c(l(q,W),-y[1]),c(l(dt,rt),R[1]))),b[2]),c(p(c(l(K,Ut),b[1]),p(c(l(H,$),-y[1]),c(l(J,F),R[1]))),-M[2])),p(c(p(c(l(q,W),b[1]),p(c(l(H,$),-M[1]),c(l(Q,B),R[1]))),y[2]),c(p(c(l(dt,rt),b[1]),p(c(l(J,F),-M[1]),c(l(Q,B),y[1]))),-R[2]))),-A[3])),p(c(p(p(c(p(c(l(Gt,_t),M[1]),p(c(l(wt,vt),-y[1]),c(l(dt,rt),A[1]))),b[2]),c(p(c(l(Gt,_t),b[1]),p(c(l(at,O),-y[1]),c(l(J,F),A[1]))),-M[2])),p(c(p(c(l(wt,vt),b[1]),p(c(l(at,O),-M[1]),c(l(Q,B),A[1]))),y[2]),c(p(c(l(dt,rt),b[1]),p(c(l(J,F),-M[1]),c(l(Q,B),y[1]))),-A[2]))),R[3]),c(p(p(c(p(c(l(kt,bt),y[1]),p(c(l(Gt,_t),-E[1]),c(l(pt,it),A[1]))),M[2]),c(p(c(l(kt,bt),M[1]),p(c(l(wt,vt),-E[1]),c(l(It,Et),A[1]))),-y[2])),p(c(p(c(l(Gt,_t),M[1]),p(c(l(wt,vt),-y[1]),c(l(dt,rt),A[1]))),E[2]),c(p(c(l(pt,it),M[1]),p(c(l(It,Et),-y[1]),c(l(dt,rt),E[1]))),-A[2]))),b[3]))),p(p(c(p(p(c(p(c(l(kt,bt),y[1]),p(c(l(Gt,_t),-E[1]),c(l(pt,it),A[1]))),b[2]),c(p(c(l(kt,bt),b[1]),p(c(l(at,O),-E[1]),c(l(N,z),A[1]))),-y[2])),p(c(p(c(l(Gt,_t),b[1]),p(c(l(at,O),-y[1]),c(l(J,F),A[1]))),E[2]),c(p(c(l(pt,it),b[1]),p(c(l(N,z),-y[1]),c(l(J,F),E[1]))),-A[2]))),-M[3]),c(p(p(c(p(c(l(kt,bt),M[1]),p(c(l(wt,vt),-E[1]),c(l(It,Et),A[1]))),b[2]),c(p(c(l(kt,bt),b[1]),p(c(l(at,O),-E[1]),c(l(N,z),A[1]))),-M[2])),p(c(p(c(l(wt,vt),b[1]),p(c(l(at,O),-M[1]),c(l(Q,B),A[1]))),E[2]),c(p(c(l(It,Et),b[1]),p(c(l(N,z),-M[1]),c(l(Q,B),E[1]))),-A[2]))),y[3])),p(c(p(p(c(p(c(l(Gt,_t),M[1]),p(c(l(wt,vt),-y[1]),c(l(dt,rt),A[1]))),b[2]),c(p(c(l(Gt,_t),b[1]),p(c(l(at,O),-y[1]),c(l(J,F),A[1]))),-M[2])),p(c(p(c(l(wt,vt),b[1]),p(c(l(at,O),-M[1]),c(l(Q,B),A[1]))),y[2]),c(p(c(l(dt,rt),b[1]),p(c(l(J,F),-M[1]),c(l(Q,B),y[1]))),-A[2]))),-E[3]),c(p(p(c(p(c(l(pt,it),M[1]),p(c(l(It,Et),-y[1]),c(l(dt,rt),E[1]))),b[2]),c(p(c(l(pt,it),b[1]),p(c(l(N,z),-y[1]),c(l(J,F),E[1]))),-M[2])),p(c(p(c(l(It,Et),b[1]),p(c(l(N,z),-M[1]),c(l(Q,B),E[1]))),y[2]),c(p(c(l(dt,rt),b[1]),p(c(l(J,F),-M[1]),c(l(Q,B),y[1]))),-E[2]))),A[3]))))),Ct=l(ft,Pt);return Ct[Ct.length-1]}return P}var w=[u,h,d];function v(p){var l=w[p.length];return l||(l=w[p.length]=a(p.length)),l.apply(void 0,p)}function m(p,l,x,c,P,b,M,y){function E(A,R,L,B,F,z){switch(arguments.length){case 0:case 1:return 0;case 2:return c(A,R);case 3:return P(A,R,L);case 4:return b(A,R,L,B);case 5:return M(A,R,L,B,F);case 6:return y(A,R,L,B,F,z)}for(var O=new Array(arguments.length),$=0;$<arguments.length;++$)O[$]=arguments[$];return p(O)}return E}function T(){for(;w.length<=o;)w.push(a(w.length));t.exports=m.apply(void 0,[v].concat(w));for(var p=0;p<=o;++p)t.exports[p]=w[p]}T()}}),ty=en({"node_modules/cdt2d/lib/delaunay.js"(i,t){var e=Q0()[4];So(),t.exports=r;function n(s,o,a,u,h,d){var f=o.opposite(u,h);if(!(f<0)){if(h<u){var g=u;u=h,h=g,g=d,d=f,f=g}o.isConstraint(u,h)||e(s[u],s[h],s[d],s[f])<0&&a.push(u,h)}}function r(s,o){for(var a=[],u=s.length,h=o.stars,d=0;d<u;++d)for(var f=h[d],g=1;g<f.length;g+=2){var _=f[g];if(!(_<d)&&!o.isConstraint(d,_)){for(var S=f[g-1],w=-1,v=1;v<f.length;v+=2)if(f[v-1]===_){w=f[v];break}w<0||e(s[d],s[_],s[S],s[w])<0&&a.push(d,_)}}for(;a.length>0;){for(var _=a.pop(),d=a.pop(),S=-1,w=-1,f=h[d],m=1;m<f.length;m+=2){var T=f[m-1],p=f[m];T===_?w=p:p===_&&(S=T)}S<0||w<0||e(s[d],s[_],s[S],s[w])>=0||(o.flip(d,_),n(s,o,a,S,d,w),n(s,o,a,d,w,S),n(s,o,a,w,_,S),n(s,o,a,_,S,w))}}}}),ey=en({"node_modules/cdt2d/lib/filter.js"(i,t){var e=So();t.exports=u;function n(h,d,f,g,_,S,w){this.cells=h,this.neighbor=d,this.flags=g,this.constraint=f,this.active=_,this.next=S,this.boundary=w}var r=n.prototype;function s(h,d){return h[0]-d[0]||h[1]-d[1]||h[2]-d[2]}r.locate=function(){var h=[0,0,0];return function(d,f,g){var _=d,S=f,w=g;return f<g?f<d&&(_=f,S=g,w=d):g<d&&(_=g,S=d,w=f),_<0?-1:(h[0]=_,h[1]=S,h[2]=w,e.eq(this.cells,h,s))}}();function o(h,d){for(var f=h.cells(),g=f.length,_=0;_<g;++_){var S=f[_],w=S[0],v=S[1],m=S[2];v<m?v<w&&(S[0]=v,S[1]=m,S[2]=w):m<w&&(S[0]=m,S[1]=w,S[2]=v)}f.sort(s);for(var T=new Array(g),_=0;_<T.length;++_)T[_]=0;var p=[],l=[],x=new Array(3*g),c=new Array(3*g),P=null;d&&(P=[]);for(var b=new n(f,x,c,T,p,l,P),_=0;_<g;++_)for(var S=f[_],M=0;M<3;++M){var w=S[M],v=S[(M+1)%3],y=x[3*_+M]=b.locate(v,w,h.opposite(v,w)),E=c[3*_+M]=h.isConstraint(w,v);y<0&&(E?l.push(_):(p.push(_),T[_]=1),d&&P.push([v,w,-1]))}return b}function a(h,d,f){for(var g=0,_=0;_<h.length;++_)d[_]===f&&(h[g++]=h[_]);return h.length=g,h}function u(h,d,f){var g=o(h,f);if(d===0)return f?g.cells.concat(g.boundary):g.cells;for(var _=1,S=g.active,w=g.next,v=g.flags,m=g.cells,T=g.constraint,p=g.neighbor;S.length>0||w.length>0;){for(;S.length>0;){var l=S.pop();if(v[l]!==-_){v[l]=_,m[l];for(var x=0;x<3;++x){var c=p[3*l+x];c>=0&&v[c]===0&&(T[3*l+x]?w.push(c):(S.push(c),v[c]=_))}}}var P=w;w=S,S=P,w.length=0,_=-_}var b=a(m,v,d);return f?b.concat(g.boundary):b}}}),ny=en({"node_modules/cdt2d/cdt2d.js"(i,t){var e=K0(),n=J0(),r=ty(),s=ey();t.exports=d;function o(f){return[Math.min(f[0],f[1]),Math.max(f[0],f[1])]}function a(f,g){return f[0]-g[0]||f[1]-g[1]}function u(f){return f.map(o).sort(a)}function h(f,g,_){return g in f?f[g]:_}function d(f,g,_){Array.isArray(g)?(_=_||{},g=g||[]):(_=g||{},g=[]);var S=!!h(_,"delaunay",!0),w=!!h(_,"interior",!0),v=!!h(_,"exterior",!0),m=!!h(_,"infinity",!1);if(!w&&!v||f.length===0)return[];var T=e(f,g);if(S||w!==v||m){for(var p=n(f.length,u(g)),l=0;l<T.length;++l){var x=T[l];p.addTriangle(x[0],x[1],x[2])}return S&&r(f,p),v?w?m?s(p,0,m):p.cells():s(p,1,m):s(p,-1)}else return T}}});const iy=ny();class Ii{constructor(t){this.createFn=t,this._pool=[],this._index=0}getInstance(){return this._index>=this._pool.length&&this._pool.push(this.createFn()),this._pool[this._index++]}clear(){this._index=0}reset(){this._pool.length=0,this._index=0}}const Jh=1e-16,ry=1e-16,Ai=new U,Qh=new U,tu=new Ii(()=>({param:0,index:0})),sy=new Ii(()=>new U);function oy(i,t,e,n){tu.clear(),t.length=0,e.length=0;for(let h=0,d=i.length;h<d;h++){const f=i[h];u(f.start),u(f.end)}for(let h=0,d=i.length;h<d;h++){const f=i[h];for(let g=h+1;g<d;g++){const _=i[g];f.distanceSqToLine3(_,Ai,Qh)<Jh*n&&u(Qh)}}const r=[];for(let h=0,d=i.length;h<d;h++){r.length=0;const f=i[h];for(let g=0,_=t.length;g<_;g++){const S=t[g],w=f.closestPointToPointParameter(S,!0);if(f.at(w,Ai),S.distanceToSquared(Ai)<Jh*n){const v=tu.getInstance();v.param=w,v.index=g,r.push(v)}}r.sort(a);for(let g=0,_=r.length-1;g<_;g++){const S=r[g].index,w=r[g+1].index;S!==w&&e.push([S,w])}}const s=new Set;let o=0;for(let h=0,d=e.length;h<d;h++){const f=e[h],g=Math.min(f[0],f[1]),_=Math.max(f[0],f[1]),S=g+","+_;s.has(S)||(s.add(S),e[o++]=f)}e.length=o;function a(h,d){return h.param-d.param}function u(h){for(let d=0;d<t.length;d++){const f=t[d];if(h===f||h.distanceToSquared(f)<ry*n)return d}return t.push(sy.getInstance().copy(h)),t.length-1}}class eu{constructor(){this.trianglePool=new Ii(()=>new $e),this.linePool=new Ii(()=>new Ae),this.triangles=[],this.triangleIndices=[],this.constrainedEdges=[],this.triangleConnectivity=[],this.normal=new U,this.projOrigin=new U,this.projU=new U,this.projV=new U,this.baseTri=new $e,this.baseIndices=new Array(3)}initialize(t,e=null,n=null,r=null){this.reset();const{normal:s,baseTri:o,projU:a,projV:u,projOrigin:h,constrainedEdges:d,linePool:f,baseIndices:g}=this;t.getNormal(s),o.copy(t),o.update(),g[0]=e,g[1]=n,g[2]=r,d.length=0;const _=f.getInstance();_.start.copy(o.a),_.end.copy(o.b);const S=f.getInstance();S.start.copy(o.b),S.end.copy(o.c);const w=f.getInstance();w.start.copy(o.c),w.end.copy(o.a),d.push(_,S,w),h.copy(o.a),a.subVectors(o.b,o.a).normalize(),u.crossVectors(s,a).normalize()}addConstraintEdge(t){const{constrainedEdges:e,linePool:n}=this,r=n.getInstance().copy(t);e.push(r)}_to2D(t,e){const{projOrigin:n,projU:r,projV:s}=this;return Ai.subVectors(t,n),e.set(Ai.dot(r),Ai.dot(s),0)}_from2D(t,e,n){const{projOrigin:r,projU:s,projV:o}=this;return n.copy(r).addScaledVector(s,t).addScaledVector(o,e),n}triangulate(){const{triangles:t,trianglePool:e,triangleConnectivity:n,triangleIndices:r,linePool:s,baseTri:o,constrainedEdges:a,baseIndices:u}=this;t.length=0,e.clear();const h=[];for(let m=0,T=a.length;m<T;m++){const p=a[m],l=s.getInstance();this._to2D(p.start,l.start),this._to2D(p.end,l.end),h.push(l)}let d=0;for(let m=0;m<3;m++){const T=this._to2D(o.points[m],Ai);d=Math.max(d,Math.abs(T.x),Math.abs(T.y))}const f=[],g=[];oy(h,f,g,d);const _=[];for(let m=0,T=f.length;m<T;m++){const p=f[m];_.push([p.x,p.y])}const S=iy(_,g,{exterior:!1}),w=new Map;for(let m=0,T=g.length;m<T;m++){const p=g[m];w.set(`${p[0]}_${p[1]}`,-1),w.set(`${p[1]}_${p[0]}`,-1)}const v=`${u[0]}_${u[1]}_${u[2]}_`;for(let m=0,T=S.length;m<T;m++){const p=S[m],[l,x,c]=p,P=e.getInstance();this._from2D(_[l][0],_[l][1],P.a),this._from2D(_[x][0],_[x][1],P.b),this._from2D(_[c][0],_[c][1],P.c),t.push(P);const b=[];n.push(b);const M=[];r.push(M);for(let y=0;y<3;y++){const E=p[y];M.push(E<3?u[E]:v+E);const A=p[(y+1)%3],R=`${E}_${A}`;if(w.has(R)){const L=w.get(R);L!==-1&&(b.push(L),n[L].push(m))}else{const L=`${A}_${E}`;w.set(L,m)}}}}reset(){this.trianglePool.clear(),this.linePool.clear(),this.triangles.length=0,this.triangleIndices.length=0,this.triangleConnectivity.length=0,this.constrainedEdges.length=0}}const ay=1e-14,Ea=new U,nu=new U,iu=new U;function ni(i,t=ay){Ea.subVectors(i.b,i.a),nu.subVectors(i.c,i.a),iu.subVectors(i.b,i.c);const e=Ea.angleTo(nu),n=Ea.angleTo(iu),r=Math.PI-e-n;return Math.abs(e)<t||Math.abs(n)<t||Math.abs(r)<t||i.a.distanceToSquared(i.b)<t||i.a.distanceToSquared(i.c)<t||i.b.distanceToSquared(i.c)<t}const wa=1e-10,Hr=1e-10,Nn=new Ae,_e=new Ae,Fn=new U,ru=new U,su=new U,Xs=new ln,Ta=new $e;class ou{constructor(){this.trianglePool=new Ii(()=>new he),this.triangles=[],this.normal=new U}initialize(t){this.reset();const{triangles:e,trianglePool:n,normal:r}=this;if(Array.isArray(t))for(let s=0,o=t.length;s<o;s++){const a=t[s];if(s===0)a.getNormal(r);else if(Math.abs(1-a.getNormal(Fn).dot(r))>wa)throw new Error("Triangle Splitter: Cannot initialize with triangles that have different normals.");const u=n.getInstance();u.copy(a),e.push(u)}else{t.getNormal(r);const s=n.getInstance();s.copy(t),e.push(s)}}splitByTriangle(t,e){const{triangles:n}=this;if(e){for(let s=0,o=n.length;s<o;s++){const a=n[s];a.coplanarCount=0}const r=[t.a,t.b,t.c];for(let s=0;s<3;s++){const o=(s+1)%3,a=r[s],u=r[o];t.getNormal(ru).normalize(),Fn.subVectors(u,a).normalize(),su.crossVectors(ru,Fn),Xs.setFromNormalAndCoplanarPoint(su,a),this.splitByPlane(Xs,t)}}else t.getPlane(Xs),this.splitByPlane(Xs,t)}splitByPlane(t,e){const{triangles:n,trianglePool:r}=this;Ta.copy(e),Ta.needsUpdate=!0;for(let s=0,o=n.length;s<o;s++){const a=n[s];if(!Ta.intersectsTriangle(a,Nn,!0))continue;const{a:u,b:h,c:d}=a;let f=0,g=-1,_=!1,S=[],w=[];const v=[u,h,d];for(let m=0;m<3;m++){const T=(m+1)%3;Nn.start.copy(v[m]),Nn.end.copy(v[T]);const p=t.distanceToPoint(Nn.start),l=t.distanceToPoint(Nn.end);if(Math.abs(p)<Hr&&Math.abs(l)<Hr){_=!0;break}if(p>0?S.push(m):w.push(m),Math.abs(p)<Hr)continue;let x=!!t.intersectLine(Nn,Fn);!x&&Math.abs(l)<Hr&&(Fn.copy(Nn.end),x=!0),x&&!(Fn.distanceTo(Nn.start)<wa)&&(Fn.distanceTo(Nn.end)<wa&&(g=m),f===0?_e.start.copy(Fn):_e.end.copy(Fn),f++)}if(!_&&f===2&&_e.distance()>Hr)if(g!==-1){g=(g+1)%3;let m=0;m===g&&(m=(m+1)%3);let T=m+1;T===g&&(T=(T+1)%3);const p=r.getInstance();p.a.copy(v[T]),p.b.copy(_e.end),p.c.copy(_e.start),ni(p)||n.push(p),a.a.copy(v[m]),a.b.copy(_e.start),a.c.copy(_e.end),ni(a)&&(n.splice(s,1),s--,o--)}else{const m=S.length>=2?w[0]:S[0];if(m===0){let c=_e.start;_e.start=_e.end,_e.end=c}const T=(m+1)%3,p=(m+2)%3,l=r.getInstance(),x=r.getInstance();v[T].distanceToSquared(_e.start)<v[p].distanceToSquared(_e.end)?(l.a.copy(v[T]),l.b.copy(_e.start),l.c.copy(_e.end),x.a.copy(v[T]),x.b.copy(v[p]),x.c.copy(_e.start)):(l.a.copy(v[p]),l.b.copy(_e.start),l.c.copy(_e.end),x.a.copy(v[T]),x.b.copy(v[p]),x.c.copy(_e.end)),a.a.copy(v[m]),a.b.copy(_e.end),a.c.copy(_e.start),ni(l)||n.push(l),ni(x)||n.push(x),ni(a)&&(n.splice(s,1),s--,o--)}else f===3&&console.warn("TriangleClipper: Coplanar clip not handled")}}reset(){this.triangles.length=0,this.trianglePool.clear()}}class au{constructor(){this.coplanarSet=new Map,this.intersectionSet=new Map,this.edgeSet=new Map,this.ids=[]}add(t,e,n=!1){const{intersectionSet:r,coplanarSet:s,ids:o}=this;r.has(t)||(r.set(t,[]),o.push(t)),r.get(t).push(e),n&&(s.has(t)||s.set(t,new Set),s.get(t).add(e))}addIntersectionEdge(t,e){const{edgeSet:n}=this;n.has(t)||n.set(t,new Set),n.get(t).add(e)}getIntersectionEdges(t){return this.edgeSet.get(t)||null}}const ly=0,cy=1,hy=2,Ll=3,uy=4,Td=5,bd=6,ba=1e-10,dy=1e-15,fy=1e-10,py=1e-10,lu=new Ae,or=new Ae,cu=new U,hu=new U,uu=new U,Aa=new ln,fr=new U,mo=new U;function gy(i,t){i.getNormal(fr),t.getNormal(mo);const e=fr.dot(mo);if(Math.abs(1-Math.abs(e))>=fy)return!1;const n=fr.dot(i.a),r=fr.dot(t.a);return Math.abs(n-r)<py}function du(i,t,e,n){let r=0,s=1;i.delta(cu);const o=[t.a,t.b,t.c];for(let a=0;a<3;a++){const u=o[a],h=o[(a+1)%3];hu.subVectors(h,u),uu.crossVectors(e,hu),Aa.setFromNormalAndCoplanarPoint(uu,u);const d=Aa.distanceToPoint(i.start),f=Aa.normal.dot(cu);if(Math.abs(f)<dy){if(d<-ba)return null;continue}const g=-d/f;if(f>0?r=Math.max(r,g):s=Math.min(s,g),r>s+ba)return null}return s-r<ba?null:(i.at(r,n.start),i.at(s,n.end),n)}function fu(i,t,e){let n=0;i.getNormal(fr),t.getNormal(mo);const r=[t.a,t.b,t.c];for(let o=0;o<3;o++){or.start.copy(r[o]),or.end.copy(r[(o+1)%3]);const a=du(or,i,fr,lu);a!==null&&(n>=e.length&&e.push(new Ae),e[n].copy(a),n++)}const s=[i.a,i.b,i.c];for(let o=0;o<3;o++){or.start.copy(s[o]),or.end.copy(s[(o+1)%3]);const a=du(or,t,mo,lu);a!==null&&(n>=e.length&&e.push(new Ae),e[n].copy(a),n++)}return n}const ar=new ns,pu=new Kt,qs=new Ae,Ra=[],Ys=new Ii(()=>new Ae),lr=-1,cr=1,ao=-2,lo=2,$r=0,xi=1,ac=2;let co=null;function gu(i){co=i}function Ad(i,t,e=null){i.getMidpoint(ar.origin),i.getNormal(ar.direction),e&&(ar.origin.applyMatrix4(e),ar.direction.transformDirection(e));const n=t.raycastFirst(ar,_n);return!!(n&&ar.direction.dot(n.face.normal)>0)?lr:cr}function _y(i,t){const e=new au,n=new au;return Ys.clear(),pu.copy(i.matrixWorld).invert().multiply(t.matrixWorld),i.geometry.boundsTree.bvhcast(t.geometry.boundsTree,pu,{intersectsTriangles(r,s,o,a){if(!ni(r)&&!ni(s)){const h=(gy(r,s)?fu(r,s,Ra):0)>2;if(h||r.intersectsTriangle(s,qs,!0)){const f=i.geometry.boundsTree.resolveTriangleIndex(o),g=t.geometry.boundsTree.resolveTriangleIndex(a);if(e.add(f,g,h),n.add(g,f,h),h){const _=fu(r,s,Ra);for(let S=0;S<_;S++){const w=Ys.getInstance().copy(Ra[S]);e.addIntersectionEdge(f,w),n.addIntersectionEdge(g,w)}}else{const _=Ys.getInstance().copy(qs),S=Ys.getInstance().copy(qs);e.addIntersectionEdge(f,_),n.addIntersectionEdge(g,S)}co&&(co.addEdge(qs),co.addIntersectingTriangles(o,r,a,s))}}return!1}}),{aIntersections:e,bIntersections:n}}function Rd(i,t,e=!1){switch(i){case ly:if(t===cr||t===lo&&!e)return xi;break;case cy:if(e){if(t===lr)return $r}else if(t===cr||t===ao)return xi;break;case hy:if(e){if(t===cr||t===ao)return xi}else if(t===lr)return $r;break;case uy:if(t===lr)return $r;if(t===cr)return xi;break;case Ll:if(t===lr||t===lo&&!e)return xi;break;case Td:if(!e&&(t===cr||t===ao))return xi;break;case bd:if(!e&&(t===lr||t===lo))return xi;break;default:throw new Error(`Unrecognized CSG operation enum "${i}".`)}return ac}class my{constructor(t){this.triangle=new he().copy(t),this.intersects={}}addTriangle(t,e){this.intersects[t]=new he().copy(e)}getIntersectArray(){const t=[],{intersects:e}=this;for(const n in e)t.push(e[n]);return t}}class _u{constructor(){this.data={}}addTriangleIntersection(t,e,n,r){const{data:s}=this;s[t]||(s[t]=new my(e)),s[t].addTriangle(n,r)}getTrianglesAsArray(t=null){const{data:e}=this,n=[];if(t!==null)t in e&&n.push(e[t].triangle);else for(const r in e)n.push(e[r].triangle);return n}getTriangleIndices(){return Object.keys(this.data).map(t=>parseInt(t))}getIntersectionIndices(t){const{data:e}=this;return e[t]?Object.keys(e[t].intersects).map(n=>parseInt(n)):[]}getIntersectionsAsArray(t=null,e=null){const{data:n}=this,r=new Set,s=[],o=a=>{if(n[a])if(e!==null)n[a].intersects[e]&&s.push(n[a].intersects[e]);else{const u=n[a].intersects;for(const h in u)r.has(h)||(r.add(h),s.push(u[h]))}};if(t!==null)o(t);else for(const a in n)o(a);return s}reset(){this.data={}}}class vy{constructor(){this.enabled=!1,this.triangleIntersectsA=new _u,this.triangleIntersectsB=new _u,this.intersectionEdges=[]}addIntersectingTriangles(t,e,n,r){const{triangleIntersectsA:s,triangleIntersectsB:o}=this;s.addTriangleIntersection(t,e,n,r),o.addTriangleIntersection(n,r,t,e)}addEdge(t){this.intersectionEdges.push(t.clone())}reset(){this.triangleIntersectsA.reset(),this.triangleIntersectsB.reset(),this.intersectionEdges=[]}init(){this.enabled&&(this.reset(),gu(this))}complete(){this.enabled&&gu(null)}}const tn=new Kt,yi=new Kt,We=new Kt,ti=new qt,fn=new he,Mi=new he,pn=new he,Jn=new he,Ri=[],Sn=[],$s=new Set,mu=new U,vu=new U,xu=new Ii(()=>new he),yu=new U,Zs=[];function xy(i,t,e,n,r,s={}){const{useGroups:o=!0}=s,{aIntersections:a,bIntersections:u}=_y(i,t),h=[];let d=null,f;return f=o?0:-1,Su(i,t,a,e,!1,r,f),Mu(i,t,a,e,!1,n,r,f),e.findIndex(_=>_!==bd&&_!==Td)!==-1&&(r.forEach(_=>_.clearIndexMap()),f=o?i.geometry.groups.length||1:-1,Su(t,i,u,e,!0,r,f),Mu(t,i,u,e,!0,n,r,f)),r.forEach(_=>_.clearIndexMap()),Ri.length=0,{groups:h,materials:d}}function Mu(i,t,e,n,r,s,o,a=0){tn.copy(t.matrixWorld).invert().multiply(i.matrixWorld),yi.copy(tn).invert(),r?We.copy(tn):We.identity();const u=We.determinant()<0;ti.getNormalMatrix(We).multiplyScalar(u?-1:1);const h=i.geometry.groupIndices,d=i.geometry.index,f=i.geometry.attributes.position,g=t.geometry.boundsTree,_=t.geometry.index,S=t.geometry.attributes.position,w=e.ids;for(let v=0,m=w.length;v<m;v++){const T=w[v],p=a===-1?0:h[T]+a,l=3*T;let x=l+0,c=l+1,P=l+2;d&&(x=d.getX(x),c=d.getX(c),P=d.getX(P)),fn.a.fromBufferAttribute(f,x),fn.b.fromBufferAttribute(f,c),fn.c.fromBufferAttribute(f,P),r&&(fn.a.applyMatrix4(tn),fn.b.applyMatrix4(tn),fn.c.applyMatrix4(tn)),s.reset(),s.initialize(fn,x,c,P),Zs.length=0,xu.clear(),fn.getNormal(vu);const b=e.coplanarSet.get(T);if(b)for(const A of b){const R=3*A;let L=R+0,B=R+1,F=R+2;_&&(L=_.getX(L),B=_.getX(B),F=_.getX(F));const z=xu.getInstance();z.a.fromBufferAttribute(S,L),z.b.fromBufferAttribute(S,B),z.c.fromBufferAttribute(S,F),r||(z.a.applyMatrix4(yi),z.b.applyMatrix4(yi),z.c.applyMatrix4(yi)),Zs.push(z)}if(s.addConstraintEdge){const A=e.getIntersectionEdges(T);if(A)for(const R of A)s.addConstraintEdge(R);s.triangulate()}else{const R=e.intersectionSet.get(T);for(let L=0,B=R.length;L<B;L++){const F=R[L],z=b&&b.has(F),O=3*F;let $=O+0,et=O+1,Q=O+2;_&&($=_.getX($),et=_.getX(et),Q=_.getX(Q)),Mi.a.fromBufferAttribute(S,$),Mi.b.fromBufferAttribute(S,et),Mi.c.fromBufferAttribute(S,Q),r||(Mi.a.applyMatrix4(yi),Mi.b.applyMatrix4(yi),Mi.c.applyMatrix4(yi)),s.splitByTriangle(Mi,z)}}const{triangles:M,triangleIndices:y=[],triangleConnectivity:E=[]}=s;for(let A=0,R=o.length;A<R;A++)o[A].initInterpolatedAttributeData(i.geometry,We,ti,x,c,P);$s.clear();for(let A=0,R=M.length;A<R;A++){if($s.has(A))continue;const L=M[A],B=r?null:tn;let F=null;L.getMidpoint(mu);for(let z=0,O=Zs.length;z<O;z++){const $=Zs[z];if($.containsPoint(mu)){$.getNormal(yu),F=vu.dot(yu)>0?lo:ao;break}}F===null&&(F=Ad(L,g,B)),Ri.length=0,Sn.length=0;for(let z=0,O=n.length;z<O;z++){const $=Rd(n[z],F,r);$!==ac&&(Ri.push($),Sn.push(o[z]))}if(Sn.length!==0){const z=[A];for(;z.length>0;){const O=z.pop();if($s.has(O))continue;$s.add(O);const $=y[O];let et=null,Q=null,rt=null;$&&(et=$[0],Q=$[1],rt=$[2]);const Et=M[O];fn.getBarycoord(Et.a,Jn.a),fn.getBarycoord(Et.b,Jn.b),fn.getBarycoord(Et.c,Jn.c);for(let vt=0,W=Sn.length;vt<W;vt++){const nt=Sn[vt],dt=Ri[vt]===$r,it=u!==dt;nt.appendInterpolatedAttributeData(p,Jn.a,et,it),it?(nt.appendInterpolatedAttributeData(p,Jn.c,rt,it),nt.appendInterpolatedAttributeData(p,Jn.b,Q,it)):(nt.appendInterpolatedAttributeData(p,Jn.b,Q,it),nt.appendInterpolatedAttributeData(p,Jn.c,rt,it))}}}}}return w.length}function Su(i,t,e,n,r,s,o=0){tn.copy(t.matrixWorld).invert().multiply(i.matrixWorld),r?We.copy(tn):We.identity();const a=We.determinant()<0;ti.getNormalMatrix(We).multiplyScalar(a?-1:1);const u=t.geometry.boundsTree,h=i.geometry.groupIndices,d=i.geometry.index,g=i.geometry.attributes.position,_=[],S=i.geometry.halfEdges,w=new Set(e.ids),v=sc(i.geometry);for(let m=0;m<v&&w.size!==v;m++){if(w.has(m))continue;w.add(m),_.push(m);const T=3*m;let p=T+0,l=T+1,x=T+2;d&&(p=d.getX(p),l=d.getX(l),x=d.getX(x)),pn.a.fromBufferAttribute(g,p),pn.b.fromBufferAttribute(g,l),pn.c.fromBufferAttribute(g,x),r&&(pn.a.applyMatrix4(tn),pn.b.applyMatrix4(tn),pn.c.applyMatrix4(tn));const c=Ad(pn,u,r?null:tn);Ri.length=0,Sn.length=0;for(let P=0,b=n.length;P<b;P++){const M=Rd(n[P],c,r);M!==ac&&(Ri.push(M),Sn.push(s[P]))}for(;_.length>0;){const P=_.pop();for(let b=0;b<3;b++){const M=S.getSiblingTriangleIndex(P,b);M!==-1&&!w.has(M)&&(_.push(M),w.add(M))}if(Sn.length!==0){const b=3*P;let M=b+0,y=b+1,E=b+2;d&&(M=d.getX(M),y=d.getX(y),E=d.getX(E));const A=o===-1?0:h[P]+o;if(pn.a.fromBufferAttribute(g,M),pn.b.fromBufferAttribute(g,y),pn.c.fromBufferAttribute(g,E),!ni(pn))for(let R=0,L=Sn.length;R<L;R++){const B=Sn[R],O=Ri[R]===$r!==a;B.appendIndexFromGeometry(i.geometry,We,ti,A,M,O),O?(B.appendIndexFromGeometry(i.geometry,We,ti,A,E,O),B.appendIndexFromGeometry(i.geometry,We,ti,A,y,O)):(B.appendIndexFromGeometry(i.geometry,We,ti,A,y,O),B.appendIndexFromGeometry(i.geometry,We,ti,A,E,O))}}}}}function yy(i){return i=~~i,i+4-i%4}class My{constructor(t,e=500){this.expansionFactor=1.5,this.type=t,this.length=0,this.array=null,this.setSize(e)}setType(t){if(t===this.type)return;if(this.length!==0)throw new Error("TypeBackedArray: Cannot change the type while there is used data in the buffer.");const e=this.array.buffer;this.array=new t(e),this.type=t}setSize(t){if(this.array&&t===this.array.length)return;const e=this.type,n=Md()?SharedArrayBuffer:ArrayBuffer,r=new e(new n(yy(t*e.BYTES_PER_ELEMENT)));this.array&&r.set(this.array,0),this.array=r}expand(){const{array:t,expansionFactor:e}=this;this.setSize(t.length*e)}push(...t){let{array:e,length:n}=this;n+t.length>e.length&&(this.expand(),e=this.array);for(let r=0,s=t.length;r<s;r++)e[n+r]=t[r];this.length+=t.length}clear(){this.length=0}}const Ge=new U,Pa=new U,Ca=new U,Da=new U,js=new oe,Sy=new oe,Ey=new oe,wy=new oe;function Ty(i,t,e,n,r,s=!1,o=!1){return r.set(0,0,0,0).addScaledVector(i,n.x).addScaledVector(t,n.y).addScaledVector(e,n.z),s&&r.normalize(),o&&r.multiplyScalar(-1),r}function Eu(i,t,e){switch(t){case 1:e.push(i.x);break;case 2:e.push(i.x,i.y);break;case 3:e.push(i.x,i.y,i.z);break;case 4:e.push(i.x,i.y,i.z,i.w);break}}class Ia extends My{get count(){return this.length/this.itemSize}constructor(...t){super(...t),this.itemSize=1,this.normalized=!1}}class by{constructor(){this.attributeData={},this.groupIndices=[],this.forwardIndexMap=new Map,this.invertedIndexMap=new Map,this.interpolatedFields={}}initFromGeometry(t,e){this.clear();const{attributeData:n}=this,r=t.attributes;for(let s=0,o=e.length;s<o;s++){const a=e[s],u=r[a],h=u.array.constructor;n[a]||(n[a]=new Ia(h)),n[a].setType(h),n[a].itemSize=u.itemSize,n[a].normalized=u.normalized}for(const s in n.attributes)e.includes(s)||n.delete(s)}initInterpolatedAttributeData(t,e,n,r,s,o){const{attributeData:a,interpolatedFields:u}=this,{attributes:h}=t;for(const d in a){const f=h[d];if(!f)throw new Error(`CSG Operations: Attribute ${d} not available on geometry.`);let g,_,S;if(d==="position"?(g=Pa.fromBufferAttribute(f,r).applyMatrix4(e),_=Ca.fromBufferAttribute(f,s).applyMatrix4(e),S=Da.fromBufferAttribute(f,o).applyMatrix4(e)):d==="normal"?(g=Pa.fromBufferAttribute(f,r).applyNormalMatrix(n),_=Ca.fromBufferAttribute(f,s).applyNormalMatrix(n),S=Da.fromBufferAttribute(f,o).applyNormalMatrix(n)):d==="tangent"?(g=Pa.fromBufferAttribute(f,r).transformDirection(e),_=Ca.fromBufferAttribute(f,s).transformDirection(e),S=Da.fromBufferAttribute(f,o).transformDirection(e)):(g=Sy.fromBufferAttribute(f,r),_=Ey.fromBufferAttribute(f,s),S=wy.fromBufferAttribute(f,o)),!u[d])u[d]=[g.clone(),_.clone(),S.clone()];else{const w=u[d];w[0].copy(g),w[1].copy(_),w[2].copy(S)}}}appendInterpolatedAttributeData(t,e,n=null,r=!1){const{groupIndices:s,attributeData:o,interpolatedFields:a,forwardIndexMap:u,invertedIndexMap:h}=this;for(;s.length<=t;)s.push(new Ia(Uint32Array));const d=r?h:u,f=s[t];if(n!==null&&d.has(n))f.push(d.get(n));else{d.set(n,o.position.count),f.push(o.position.count);for(const g in a){const _=o[g],S=g==="normal"||g==="tangent",w=r&&S,v=_.itemSize,[m,T,p]=a[g];Ty(m,T,p,e,js,S,w),Eu(js,v,_)}}}appendIndexFromGeometry(t,e,n,r,s,o=!1){const{groupIndices:a,attributeData:u,forwardIndexMap:h,invertedIndexMap:d}=this;for(;a.length<=r;)a.push(new Ia(Uint32Array));const f=o?d:h,g=a[r];if(s!==null&&f.has(s))g.push(f.get(s));else{f.set(s,u.position.count),g.push(u.position.count);const{attributes:_}=t;for(const S in u){const w=u[S],v=_[S];if(!v)throw new Error(`CSG Operations: Attribute ${S} not available on geometry.`);const m=v.itemSize;S==="position"?(Ge.fromBufferAttribute(v,s).applyMatrix4(e),w.push(Ge.x,Ge.y,Ge.z)):S==="normal"?(Ge.fromBufferAttribute(v,s).applyNormalMatrix(n),o&&Ge.multiplyScalar(-1),w.push(Ge.x,Ge.y,Ge.z)):S==="tangent"?(Ge.fromBufferAttribute(v,s).transformDirection(e),o&&Ge.multiplyScalar(-1),w.push(Ge.x,Ge.y,Ge.z)):(js.fromBufferAttribute(v,s),Eu(js,m,w))}}}buildGeometry(t,e){let n=!1;const{groupIndices:r,attributeData:s}=this,{attributes:o,index:a}=t;for(const d in s){const f=s[d],{type:g,itemSize:_,normalized:S,length:w,count:v}=f,m=f.array.buffer;let T=o[d];(!T||T.count<v||T.array.type!==g)&&(T=new Pe(new g(w),_,S),t.setAttribute(d,T),n=!0),T.array.set(new g(m,0,w),0),T.needsUpdate=!0}const u=r.reduce((d,f)=>f.count+d,0);(!t.index||a.count<u||a.array.type!==Uint32Array)&&(t.setIndex(new Pe(new Uint32Array(u),1)),n=!0),t.clearGroups();let h=0;for(let d=0,f=Math.min(e.length,r.length);d<f;d++){const{index:g,materialIndex:_}=e[d],{count:S}=r[g],w=r[g].array.buffer;S!==0&&(t.index.array.set(new Uint32Array(w,0,S),h),t.addGroup(h,S,_),h+=S)}t.setDrawRange(0,h),t.boundsTree=null,t.boundingBox=null,t.boundingSphere=null,n&&t.dispose()}clearIndexMap(){this.forwardIndexMap.clear(),this.invertedIndexMap.clear()}clear(){const{groupIndices:t,attributeData:e}=this;this.interpolatedFields={};for(const n in e)e[n].clear();t.forEach(n=>{n.clear()}),this.clearIndexMap()}}function Ay(i,t){for(const e in i.attributes)t.includes(e)||(i.deleteAttribute(e),i.dispose());return i}function Ry(i,t){const e=[];for(let n=0,r=i.length;n<r;n++){const s=i[n],o=t[s.materialIndex];e.push({...s,materialIndex:t.indexOf(o)})}return e}function Py(i,t){const e=[],n=new Map;for(let r=0,s=i.length;r<s;r++){const o=i[r];n.has(o.materialIndex)||(n.set(o.materialIndex,e.length),e.push(t[o.materialIndex])),o.materialIndex=n.get(o.materialIndex)}return e}function Cy(i){for(let t=0;t<i.length-1;t++){const e=i[t],n=i[t+1];if(e.materialIndex===n.materialIndex){const r=e.start,s=n.start+n.count;n.start=r,n.count=s-r,i.splice(t,1),t--}}}function wu(i,t){let e=t;return Array.isArray(t)||(e=[],i.forEach(n=>{e[n.materialIndex]=t})),e}class Dy{get useCDTClipping(){return this.triangleSplitter instanceof eu}set useCDTClipping(t){t!==this.useCDTClipping&&(this.triangleSplitter=t?new eu:new ou)}constructor(){this.triangleSplitter=new ou,this.geometryBuilders=[],this.attributes=["position","uv","normal"],this.useGroups=!0,this.consolidateGroups=!0,this.removeUnusedMaterials=!0,this.debug=new vy}getGroupRanges(t){return!this.useGroups||t.groups.length===0?[{start:0,count:1/0,materialIndex:0}]:t.groups.map(n=>({...n}))}evaluate(t,e,n,r=new _o){let s=!0;if(Array.isArray(n)||(n=[n]),Array.isArray(r)||(r=[r],s=!1),r.length!==n.length)throw new Error("Evaluator: operations and target array passed as different sizes.");t.prepareGeometry(),e.prepareGeometry();const{triangleSplitter:o,geometryBuilders:a,attributes:u,useGroups:h,consolidateGroups:d,removeUnusedMaterials:f,debug:g}=this;for(;a.length<r.length;)a.push(new by);r.forEach((p,l)=>{a[l].initFromGeometry(t.geometry,u),Ay(p.geometry,u)}),g.init(),xy(t,e,n,o,a,{useGroups:h}),g.complete();const _=this.getGroupRanges(t.geometry),S=wu(_,t.material),w=this.getGroupRanges(e.geometry),v=wu(w,e.material);w.forEach(p=>p.materialIndex+=S.length);const m=[...S,...v];let T=[..._,...w].map((p,l)=>({...p,index:l}));return h?h&&d&&(T=Ry(T,m),T.sort((p,l)=>p.materialIndex-l.materialIndex)):T=[{start:0,count:1/0,index:0,materialIndex:0}],r.forEach((p,l)=>{const x=p.geometry;a[l].buildGeometry(x,T),t.matrixWorld.decompose(p.position,p.quaternion,p.scale),p.updateMatrix(),p.matrixWorld.copy(t.matrixWorld),h?(p.material=m,d&&Cy(x.groups),f&&(p.material=Py(x.groups,m))):p.material=m[0]}),s?r:r[0]}evaluateHierarchy(t,e=new _o){t.updateMatrixWorld(!0);const n=(s,o)=>{const a=s.children;for(let u=0,h=a.length;u<h;u++){const d=a[u];d.isOperationGroup?n(d,o):o(d)}},r=s=>{const o=s.children;let a=!1;for(let h=0,d=o.length;h<d;h++){const f=o[h];a=r(f)||a}const u=s.isDirty();if(u&&s.markUpdated(),a&&!s.isOperationGroup){let h;return n(s,d=>{h?h=this.evaluate(h,d,d.operation):h=this.evaluate(s,d,d.operation)}),s._cachedGeometry=h.geometry,s._cachedMaterials=h.material,!0}else return a||u};return r(t),e.geometry=t._cachedGeometry,e.material=t._cachedMaterials,e}reset(){this.triangleSplitter.reset()}}const La=50;function Iy(i,t){i.geometry.computeBoundingBox();const e=i.geometry.boundingBox,n=new U,r=new U;e.getSize(n),e.getCenter(r);const s=n.x+La,o=n.y+La,a=n.z+La,u=new Dy;u.attributes=["position","normal"];const h=Ly(i.geometry,i.material),d=Tu(s,o,a,r.x,r.y,t+a/2),f=Tu(s,o,a,r.x,r.y,t-a/2),g=u.evaluate(h,d,Ll),_=u.evaluate(h,f,Ll),S=i.material;return{proximal:new Xe(g.geometry,S.clone()),distal:new Xe(_.geometry,S.clone())}}function Ly(i,t){const e=i.clone();e.hasAttribute("uv")&&e.deleteAttribute("uv");const n=new _o(e,t);return n.updateMatrixWorld(),n.prepareGeometry(),n}function Tu(i,t,e,n,r,s){const o=new br(i,t,e);o.deleteAttribute("uv"),o.translate(n,r,s);const a=new _o(o);return a.updateMatrixWorld(),a.prepareGeometry(),a}function bu(i,t,e){const n={allowed:!1,newState:i};switch(t){case"up":case"down":return i==="cut_executed"?n:i==="first_cut_done"?{allowed:!0,newState:"first_cut_done"}:{allowed:!0,newState:"plane_active"};case"cut":return e.hasBone?i==="first_cut_done"?{allowed:!0,newState:"cut_executed"}:i!=="plane_active"&&i!=="listening"?n:{allowed:!0,newState:e.twoCutMode?"first_cut_done":"cut_executed"}:n;case"toggle_proximal":return i!=="cut_executed"||!e.hasProximal?n:{allowed:!0,newState:"cut_executed"};case"toggle_distal":return i!=="cut_executed"||!e.hasDistal?n:{allowed:!0,newState:"cut_executed"};case"toggle_middle":return i!=="cut_executed"||!e.hasMiddle?n:{allowed:!0,newState:"cut_executed"}}}const kr=3;class Au{constructor(t,e,n){this.state="plane_active",this.twoCutMode=!1,this.inactive=null,this.segments={proximal:null,middle:null,distal:null},this.scene=t,this.ui=n,this.bone=e,e.castShadow=!0,e.receiveShadow=!0,t.add(e),e.geometry.computeBoundingBox(),this.plane=new Cx(e.geometry.boundingBox),this.dash=la(e.material),this.syncDash(),n.onModeToggle(()=>this.toggleMode()),n.setTwoCutMode(!1),this.syncUI()}handleCommand(t){const e=this.buildContext(),n=bu(this.state,t,e);if(!n.allowed)return;const r=this.state;switch(this.state=n.newState,t){case"up":this.movePlane("up");break;case"down":this.movePlane("down");break;case"cut":if(!this.executeCut()){this.state=r;return}break;default:this.toggleSegment(t.replace("toggle_",""));break}this.ui.setLastCommand(`Heard: "${t.replace("_"," ")}"`),this.syncUI()}buildContext(){return{hasBone:this.bone!==null,hasProximal:this.segments.proximal!==null,hasDistal:this.segments.distal!==null,hasMiddle:this.segments.middle!==null,twoCutMode:this.twoCutMode}}enabledCommands(){const t=["up","down","cut","toggle_proximal","toggle_middle","toggle_distal"],e=this.buildContext(),n=new Set;for(const r of t)bu(this.state,r,e).allowed&&n.add(r);return n}syncUI(){this.ui.setState(this.state),this.ui.syncButtons(this.enabledCommands(),this.state==="plane_active"||this.state==="listening")}toggleMode(){this.state!=="plane_active"&&this.state!=="listening"||(this.twoCutMode=!this.twoCutMode,this.ui.setTwoCutMode(this.twoCutMode),this.syncUI())}movePlane(t){if((t==="up"?this.plane.isAtMax():this.plane.isAtMin())&&this.inactive&&this.bone){const n=this.worldZOf(this.inactive),r=this.worldZOf(this.bone);if(t==="up"?n.min>r.min:n.max<r.max){this.switchToInactive(t==="up"?"min":"max");return}}t==="up"?this.plane.moveUp():this.plane.moveDown(),this.syncDash()}executeCut(){if(!this.bone)return!1;try{const t=this.bone,e=Iy(t,this.plane.getZ());return this.disposeMesh(t),this.placeCutResults(e.proximal,e.distal),!0}catch(t){return console.error("Cut failed:",t),this.ui.setLastCommand("Cut failed"),!1}}placeCutResults(t,e){if(this.scene.add(t),this.scene.add(e),this.state==="first_cut_done"){t.position.z=kr,this.bone=e,this.inactive=t,this.reattachPlane(this.bone);return}this.twoCutMode?this.assignThreeSegments(t,e):this.assignTwoSegments(t,e),this.bone=null}assignTwoSegments(t,e){t.position.z=kr,e.position.z=-kr,this.segments.proximal=t,this.segments.distal=e}assignThreeSegments(t,e){var r,s;t.geometry.computeBoundingBox(),e.geometry.computeBoundingBox(),t.geometry.boundingBox.max.z>=(((s=(r=this.inactive)==null?void 0:r.geometry.boundingBox)==null?void 0:s.max.z)??-1/0)?(this.segments.proximal=t,this.segments.middle=e,this.segments.distal=this.inactive):(this.segments.proximal=this.inactive,this.segments.middle=t,this.segments.distal=e),this.segments.proximal&&(this.segments.proximal.position.z=kr),this.segments.distal&&(this.segments.distal.position.z=-kr),this.inactive=null}reattachPlane(t){var e;t.geometry.computeBoundingBox(),(e=this.inactive)==null||e.geometry.computeBoundingBox(),this.plane.recalculate(t.geometry.boundingBox),this.dash=la(t.material),this.syncDash()}toggleSegment(t){const e=this.segments[t];e&&(e.visible=!e.visible)}dispose(){this.bone&&this.disposeMesh(this.bone),this.inactive&&this.disposeMesh(this.inactive);for(const t of Object.values(this.segments))t&&this.disposeMesh(t);this.bone=null,this.inactive=null,this.segments={proximal:null,middle:null,distal:null}}switchToInactive(t){!this.bone||!this.inactive||(this.dash.setDashVisible(!1),[this.bone,this.inactive]=[this.inactive,this.bone],this.bone.geometry.computeBoundingBox(),this.plane.recalculate(this.bone.geometry.boundingBox),t==="min"?this.plane.setToMin():this.plane.setToMax(),this.dash=la(this.bone.material),this.syncDash())}syncDash(){var t;this.dash.setPlaneZ(this.plane.getZ()+(((t=this.bone)==null?void 0:t.position.z)??0))}worldZOf(t){t.geometry.computeBoundingBox();const e=t.geometry.boundingBox;return{min:e.min.z+t.position.z,max:e.max.z+t.position.z}}disposeMesh(t){this.scene.remove(t),t.geometry.dispose(),t.material.dispose()}}function Ru(i){const t=i.toLowerCase().trim();return(t.includes("toggle")||t.includes("remove"))&&t.includes("proximal")?"toggle_proximal":(t.includes("toggle")||t.includes("remove"))&&t.includes("distal")?"toggle_distal":(t.includes("toggle")||t.includes("remove"))&&t.includes("middle")?"toggle_middle":t.includes("cut")?"cut":t.includes("up")?"up":t.includes("down")?"down":null}class Uy{constructor(){this.callback=null,this.active=!1,this.restartTimer=null,this.Ctor=window.SpeechRecognition||window.webkitSpeechRecognition||null}start(){if(!this.Ctor)return;this.active=!0;const t=new this.Ctor;t.continuous=!1,t.interimResults=!0,t.lang="en-US",t.maxAlternatives=1,t.onresult=e=>{for(let n=e.resultIndex;n<e.results.length;n++){const r=e.results[n],s=r[0].transcript;if(!r.isFinal){const a=Ru(s);if(a&&this.callback){this.callback(a),t.abort();return}continue}const o=Ru(s);o&&this.callback&&this.callback(o)}},t.onend=()=>{this.active&&!this.restartTimer&&(this.restartTimer=setTimeout(()=>{this.restartTimer=null,this.active&&this.start()},300))},t.onerror=e=>{e.error==="not-allowed"&&(this.active=!1)},t.start()}stop(){this.active=!1,this.restartTimer&&(clearTimeout(this.restartTimer),this.restartTimer=null)}onCommand(t){this.callback=t}isSupported(){return this.Ctor!==null}}const Ny={ArrowUp:"up",ArrowDown:"down",c:"cut",C:"cut",p:"toggle_proximal",P:"toggle_proximal",m:"toggle_middle",M:"toggle_middle",d:"toggle_distal",D:"toggle_distal"};function Fy(i){window.addEventListener("keydown",e=>{const n=Ny[e.key];n&&(e.preventDefault(),i(n))}),document.querySelectorAll("#controls-bar button[data-cmd]").forEach(e=>{e.addEventListener("click",()=>{e.blur(),i(e.dataset.cmd)})});const t=new Uy;if(t.onCommand(i),t.isSupported()){const e=()=>{t.start(),document.removeEventListener("click",e),document.removeEventListener("keydown",e)};document.addEventListener("click",e),document.addEventListener("keydown",e)}return()=>t.stop()}const By={loading:"Loading...",listening:"Listening...",plane_active:"Active",first_cut_done:"First Cut",cut_executed:"Cut Executed"};class Oy{constructor(){this.clearTimer=null,this.modeToggleHandler=null,this.statusBar=document.getElementById("status-bar"),this.recordBtn=document.getElementById("record-btn"),this.stateEl=this.statusBar.querySelector(".state"),this.lastCommandEl=this.statusBar.querySelector(".last-command"),this.modeToggle=document.getElementById("mode-toggle"),this.toggleMiddleBtn=document.querySelector('[data-cmd="toggle_middle"]'),this.toggleMiddleBtn.hidden=!0}setState(t){this.stateEl.textContent=By[t]}setLoading(t){this.recordBtn.classList.toggle("loading",t)}setLastCommand(t){this.lastCommandEl.textContent=t,this.statusBar.classList.add("command-visible"),this.clearTimer&&clearTimeout(this.clearTimer),this.clearTimer=setTimeout(()=>{this.statusBar.classList.remove("command-visible")},3e3)}syncButtons(t,e){const n=["up","down","cut","toggle_proximal","toggle_middle","toggle_distal"];for(const r of n){const s=document.querySelector(`[data-cmd="${r}"]`);s&&(s.disabled=!t.has(r))}this.modeToggle.disabled=!e}onModeToggle(t){this.modeToggleHandler&&this.modeToggle.removeEventListener("click",this.modeToggleHandler),this.modeToggleHandler=t,this.modeToggle.addEventListener("click",t)}setTwoCutMode(t){this.modeToggle.dataset.tooltip=t?"Two Cuts":"Single Cut",this.modeToggle.classList.toggle("active",t),this.toggleMiddleBtn.hidden=!t}}var Vy=Object.defineProperty,zy=(i,t,e)=>t in i?Vy(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,j=(i,t,e)=>(zy(i,typeof t!="symbol"?t+"":t,e),e);class Eo{constructor(t){j(this,"x"),j(this,"y"),j(this,"target"),this.x=t.x,this.y=t.y,this.target=t.target}}class lc extends Eo{}class wo extends Eo{}class To extends Eo{}class bo extends Eo{}class Pd{constructor(t){j(this,"pluginId"),j(this,"pluginName"),j(this,"viewName"),j(this,"dataName"),j(this,"dataValue"),this.event=t,this.pluginId=t.pluginId,this.pluginName=t.pluginName,this.viewName=t.viewName,this.dataName=t.dataName,this.dataValue=t.dataValue}}function Hy(i){return i.replace(/(?:^\w|[A-Z]|\b\w)/g,function(t,e){return e===0?t.toLowerCase():t.toUpperCase()}).replace(/\s+/g,"").replace(/-+/g,"")}function ky(i){return i.split("").map((t,e)=>t.toUpperCase()===t?`${e!==0?"-":""}${t.toLowerCase()}`:t).join("")}class Ul{constructor(t){j(this,"node"),this.node=t.node}}class Nl{constructor(t){j(this,"node"),this.node=t.node}}class Gy{constructor(t){j(this,"_eventBus"),j(this,"_observer"),this._eventBus=t,this._observer=new MutationObserver(this._handler.bind(this)),this._observer.observe(document.body,{childList:!0,subtree:!0,attributes:!0,attributeOldValue:!0})}_handler(t){t.forEach(e=>{e.addedNodes.forEach(r=>{if(!(r instanceof HTMLElement)||r.dataset.velViewId||r.parentElement&&typeof r.parentElement.dataset.velAdded<"u")return;let s=r;if(r.dataset.velView||(s=r.querySelector("[data-vel-view][data-vel-plugin]")),!s)return;this._eventBus.emitEvent(Ul,{node:s});const o=s.querySelectorAll("[data-vel-plugin]");o.length&&o.forEach(a=>{this._eventBus.emitEvent(Ul,{node:a})})}),e.removedNodes.forEach(r=>{if(!(r instanceof HTMLElement)||typeof r.dataset.velProcessing<"u")return;const s=r.querySelectorAll("[data-vel-plugin]");s.length&&s.forEach(o=>{this._eventBus.emitEvent(Nl,{node:o})}),this._eventBus.emitEvent(Nl,{node:r})});const n=e.attributeName;if(n&&/data-vel-data-.+/gi.test(n)){const r=e.target,s=r.dataset.velPluginId||"",o=r.dataset.velPlugin||"",a=r.dataset.velView||"",u=r.getAttribute(n);if(u&&u!==e.oldValue){const h=Hy(n.replace("data-vel-data-",""));this._eventBus.emitEvent(Pd,{pluginId:s,pluginName:o,viewName:a,dataName:h,dataValue:u})}}})}}class Wy{execute(t){this.call(t)}}class Pu extends Wy{constructor(t){super(),j(this,"_handler"),this._handler=t}call(t){this._handler(t)}}class Fl{constructor(){j(this,"_listeners",new Map),j(this,"_keyedListeners",new Map)}subscribeToEvent(t,e,n){if(n){this._subscribeToKeyedEvent(t,e,n);return}let r=this._listeners.get(t);r||(r=[],this._listeners.set(t,r)),r.push(new Pu(e))}_subscribeToKeyedEvent(t,e,n){let r=this._keyedListeners.get(t);r||(r=new Map,this._keyedListeners.set(t,r));let s=r.get(n);s||(s=[],r.set(n,s)),s.push(new Pu(e))}emitEvent(t,e,n){if(n){this._emitKeyedEvent(t,e,n);return}const r=this._listeners.get(t);r&&r.forEach(s=>{s.execute(e)})}_emitKeyedEvent(t,e,n){const r=this._keyedListeners.get(t);if(!r)return;const s=r.get(n);s&&s.forEach(o=>{o.execute(e)})}_convertListener(t){return e=>t(e)}subscribeToPluginReadyEvent(t,e,n=!1){if(n){this.subscribeToEvent(Uu,this._convertListener(t),e);return}this.subscribeToEvent(Lu,this._convertListener(t),e)}emitPluginReadyEvent(t,e,n=!1){if(n){this.emitEvent(Uu,e,t);return}this.emitEvent(Lu,e,t)}reset(){this._listeners.clear()}}let Xy=0;function Cd(){return Xy+++""}class Dd{constructor(t,e,n,r,s,o,a){j(this,"_registry"),j(this,"_eventBus"),j(this,"_appEventBus"),j(this,"_internalEventBus"),j(this,"_initialized",!1),j(this,"_config"),j(this,"_pluginFactory"),j(this,"_pluginName"),j(this,"_id"),j(this,"_pluginKey"),j(this,"_layoutIdViewMapWaitingToEnter"),j(this,"_apiData"),j(this,"_isReady",!1),this._id=Cd(),this._pluginFactory=t,this._pluginName=e,this._registry=n,this._eventBus=r,this._appEventBus=s,this._internalEventBus=new Fl,this._config=o,this._layoutIdViewMapWaitingToEnter=new Map,this._pluginKey=a,this._apiData={},this._appEventBus.subscribeToPluginReadyEvent(()=>{this._isReady=!0},this._pluginName,!0)}get api(){return this._apiData}_setApi(t){this._apiData=t}get pluginName(){return this._pluginName}get pluginFactory(){return this._pluginFactory}get pluginKey(){return this._pluginKey}get id(){return this._id}get config(){return{...this._config}}getViews(t){return t?this._registry.getViewsByNameForPlugin(this,t):this._registry.getViewsForPlugin(this)}getView(t){return t?this._registry.getViewsByNameForPlugin(this,t)[0]:this._registry.getViewsForPlugin(this)[0]}getViewById(t){return this._registry.getViewById(t)}addView(t){this._registry.assignViewToPlugin(t,this)}setInternalEventBus(t){this._internalEventBus=t}get internalBusEvent(){return this._internalEventBus}emit(t,e){this._internalEventBus.emitEvent(t,e)}on(t,e){this._internalEventBus.subscribeToEvent(t,e)}useEventPlugin(t,e={}){const n=this._registry.createPlugin(t,this._eventBus,e);return this._registry.associateEventPluginWithPlugin(this.id,n.id),n}notifyAboutDataChanged(t){this.onDataChanged(t)}onDataChanged(t){}removeView(t){t.onRemoveCallback?this._invokeRemoveCallback(t):this._deleteView(t),this.onViewRemoved(t)}_invokeRemoveCallback(t){const e=this._createTemporaryView(t);requestAnimationFrame(()=>{var n;(n=e.onRemoveCallback)==null||n.call(e,e,()=>{var r,s;if((r=t.onAddCallbacks)!=null&&r.afterRemoved&&t.layoutId){const o=this._layoutIdViewMapWaitingToEnter.get(t.layoutId);(s=o==null?void 0:o.onAddCallbacks)==null||s.afterEnter(o),this._layoutIdViewMapWaitingToEnter.delete(t.layoutId)}this._deleteView(e,!0)}),setTimeout(()=>{e.element.parentElement&&this._deleteView(e,!0)},1e4)})}_deleteView(t,e=!1){(e||!t.layoutId)&&(this._registry.removeViewById(t.id,this.id),t.element.remove())}_createTemporaryView(t){const e=t.previousRect.viewportOffset,n=t.previousRect.size,r=t.rotation.degrees<0?0:Math.sin(t.rotation.radians)*n.height*t.scale.y,s=t.rotation.degrees>0?0:Math.sin(t.rotation.radians)*n.width*t.scale.y,o=t.element.cloneNode(!0);t.element.remove(),o.style.cssText="",o.style.position="absolute",o.style.left=`${e.left+r}px`,o.style.top=`${e.top-s}px`,o.style.width=`${n.width}px`,o.style.height=`${n.height}px`,o.style.transform=`
      scale3d(${t.scale.x}, ${t.scale.y}, 1) rotate(${t.rotation.degrees}deg)
    `,o.style.pointerEvents="none",o.dataset.velRemoved="",document.body.appendChild(o);const a=this._registry.createView(o,t.name);return a.setAsTemporaryView(),a.styles.position="absolute",a.styles.left=`${e.left+r}px`,a.styles.top=`${e.top-s}px`,a.rotation.setDegrees(t.rotation.degrees,!1),a.scale.set({x:t.scale.x,y:t.scale.y},!1),a.size.set({width:t._localWidth,height:t._localHeight},!1),t._copyAnimatorsToAnotherView(a),t.onRemoveCallback&&a.onRemove(t.onRemoveCallback),a}onViewRemoved(t){}notifyAboutViewAdded(t){this.onViewAdded(t),this._invokeAddCallbacks(t)}_invokeAddCallbacks(t){var e,n,r;!((e=t.onAddCallbacks)!=null&&e.onInitialLoad)&&!this._initialized||((n=t.onAddCallbacks)==null||n.beforeEnter(t),!((r=t.onAddCallbacks)!=null&&r.afterRemoved)||!this._initialized?requestAnimationFrame(()=>{var s;(s=t.onAddCallbacks)==null||s.afterEnter(t)}):t.layoutId&&this._layoutIdViewMapWaitingToEnter.set(t.layoutId,t))}onViewAdded(t){}init(){!this._initialized&&this._isReady&&(this.setup(),this._initialized=!0)}setup(){}subscribeToEvents(t){}}class qy extends Dd{isRenderable(){return!0}isInitialized(){return this._initialized}get initialized(){return this._initialized}update(t,e){}render(){}addView(t){t.setPluginId(this.id),super.addView(t)}}class cc extends Dd{isRenderable(){return!1}}class Yy{constructor(t){j(this,"_plugin"),this._plugin=t}get initialized(){return this._plugin.isInitialized()}get config(){return this._plugin.config}setup(t){this._plugin.setup=t}api(t){this._plugin._setApi(t)}update(t){this._plugin.update=t}render(t){this._plugin.render=t}getViews(t){return this._plugin.getViews(t)}getView(t){return this._plugin.getView(t)}getViewById(t){return this._plugin.getViewById(t)}useEventPlugin(t,e={}){return this._plugin.useEventPlugin(t,e)}emit(t,e){this._plugin.emit(t,e)}on(t,e){this._plugin.on(t,e)}onDataChanged(t){this._plugin.onDataChanged=t}onViewRemoved(t){this._plugin.onViewRemoved=t}onViewAdded(t){this._plugin.onViewAdded=t}subscribeToEvents(t){this._plugin.subscribeToEvents=t}}function Ua(i,t,e,n,r,s){if($y(i))return new i(i,i.pluginName,t,e,n,r,s);const o=new qy(i,i.pluginName,t,e,n,r,s),a=new Yy(o);return i(a),o}function $y(i){var t;return((t=i.prototype)==null?void 0:t.constructor.toString().indexOf("class "))===0}class ht{constructor(t,e){j(this,"x"),j(this,"y"),this.x=t,this.y=e}get magnitudeSquared(){return this.x*this.x+this.y*this.y}get magnitude(){return Math.sqrt(this.x*this.x+this.y*this.y)}get unitVector(){const t=new ht(0,0),e=this.magnitude;return e!==0&&(t.x=this.x/e,t.y=this.y/e),t}add(t){this.x+=t.x,this.y+=t.y}sub(t){this.x-=t.x,this.y-=t.y}scale(t){this.x*=t,this.y*=t}dot(t){return this.x*t.x+this.y*t.y}equals(t){return this.x===t.x&&this.y===t.y}clone(){return new ht(this.x,this.y)}static scale(t,e){return new ht(t.x*e,t.y*e)}static sub(t,e){return new ht(t.x-e.x,t.y-e.y)}static add(t,e){return new ht(t.x+e.x,t.y+e.y)}}function Id(i,t,e){return Math.min(Math.max(i,t),e)}function Zy(i,t,e){return i+(t-i)*e}function le(i,t){const e=i-t;return Math.abs(e)<=.01}function jy(i,t,e,n,r){return(i-t)/(e-t)*(r-n)+n}function Ky(i,t,e){const n=t.getScroll(),r=t.position.x-n.x,s=t.position.y-n.y,o=i.x||r,a=i.y||s,u=Math.abs(r-o),h=Math.abs(s-a),d=Math.sqrt(u*u+h*h);return 1-Id(0,d/e,1)}function qe(i){let t=i.match(/^([\d.]+)([a-zA-Z%]*)$/);t||(t="0px".match(/^([\d.]+)([a-zA-Z%]*)$/));const e=parseFloat(t[1]),n=t[2];return{value:e,unit:n,valueWithUnit:i}}function Jy(i,t,e=!1){if(i===t)return!0;if(i.length!==t.length)return!1;for(let n=0;n<i.length;n++)if(e&&!le(i[n].value,t[n].value)||i[n].value!==t[n].value)return!1;return!0}function Cu(i,t){return Jy(i,t,!0)}class Gr{constructor(t,e,n,r){j(this,"_topLeft"),j(this,"_topRight"),j(this,"_bottomLeft"),j(this,"_bottomRight"),this._topLeft=t,this._topRight=e,this._bottomLeft=n,this._bottomRight=r}get value(){return{topLeft:this._topLeft,topRight:this._topRight,bottomRight:this._bottomRight,bottomLeft:this._bottomLeft}}equals(t){return le(this.value.topLeft.value,t.value.topLeft.value)&&le(this.value.topRight.value,t.value.topRight.value)&&le(this.value.bottomRight.value,t.value.bottomRight.value)&&le(this.value.bottomLeft.value,t.value.bottomLeft.value)}toCssPercentageForNewSize(t){const e=this._convertToPercentage(this._topLeft,t),n=this._convertToPercentage(this._topRight,t),r=this._convertToPercentage(this._bottomLeft,t),s=this._convertToPercentage(this._bottomRight,t);return`${e.h} ${n.h} ${s.h} ${r.h} / ${e.v} ${n.v} ${s.v} ${r.v}`}_convertToPercentage(t,e){if(t.unit==="%")return{h:`${t.value}%`,v:`${t.value}%`};const n=t.value/e.width*100,r=t.value/e.height*100;return{h:`${n}%`,v:`${r}%`}}}function Bl(i){const t=i.split(" ").map(n=>qe(n)),e={value:0,unit:"",valueWithUnit:"0"};switch(t.length){case 1:return new Gr(t[0],t[0],t[0],t[0]);case 2:return new Gr(t[0],t[1],t[0],t[1]);case 3:return new Gr(t[0],t[1],t[2],t[1]);case 4:return new Gr(t[0],t[1],t[3],t[2]);default:return new Gr(e,e,e,e)}}function Qy(i,t){const e=o(i.topLeft,t),n=o(i.topRight,t),r=o(i.bottomLeft,t),s=o(i.bottomRight,t);return{v:{topLeft:e.v,topRight:n.v,bottomRight:s.v,bottomLeft:r.v},h:{topLeft:e.h,topRight:n.h,bottomRight:s.h,bottomLeft:r.h}};function o(a,u){if(a.unit==="%")return{h:qe(`${a.value}%`),v:qe(`${a.value}%`)};const h=a.value/u.width*100,d=a.value/u.height*100;return{h:qe(`${h}%`),v:qe(`${d}%`)}}}function Du(i,t){return le(i.topLeft.value,t.topLeft.value)&&le(i.topRight.value,t.topRight.value)&&le(i.bottomRight.value,t.bottomRight.value)&&le(i.bottomLeft.value,t.bottomLeft.value)}class tM{constructor(t){j(this,"_value"),this._value=t}get value(){return this._value}equals(t){return le(this.value,t.value)}}function eM(i){return new tM(parseFloat(i))}class nM{constructor(t,e){j(this,"_x"),j(this,"_y"),this._x=t,this._y=e}get value(){return new ht(this._x,this._y)}}function iM(i,t){const[e,n]=i.split(" "),r=qe(e),s=qe(n);return new nM(r.value/t.width,s.value/t.height)}function rM(i){const t=sM(i),e=oM(i);return{viewportOffset:{left:Math.round(t.left),top:Math.round(t.top),right:Math.round(t.right),bottom:Math.round(t.bottom)},pageOffset:{top:e.top,left:e.left},size:{width:i.offsetWidth,height:i.offsetHeight}}}function sM(i){const t=i.getBoundingClientRect();return{left:t.left,top:t.top,right:t.right,bottom:t.bottom,width:t.width,height:t.height}}function oM(i){let t=i,e=0,n=0;for(;t;)e+=t.offsetTop,n+=t.offsetLeft,t=t.offsetParent;return{top:e,left:n}}class aM{constructor(t){j(this,"_element"),j(this,"_rect"),j(this,"_computedStyle"),this._rect=rM(t),this._computedStyle=getComputedStyle(t),this._element=t}read(t){switch(t){case"opacity":return this.opacity;case"borderRadius":return this.borderRadius}}get rect(){return this._rect}get opacity(){return eM(this._computedStyle.opacity)}get borderRadius(){return Bl(this._computedStyle.borderRadius)}get origin(){return iM(this._computedStyle.transformOrigin,this._rect.size)}get scroll(){let t=this._element,e=0,n=0;for(;t;)e+=t.scrollTop,n+=t.scrollLeft,t=t.offsetParent;return n+=window.scrollX,e+=window.scrollY,{y:e,x:n}}}function Na(i){return new aM(i)}function Ol(i,t){const e={set:(n,r,s)=>(typeof n[r]=="object"&&n[r]!==null?n[r]=Ol(s,t):(t(),n[r]=s),!0),get:(n,r)=>typeof n[r]=="object"&&n[r]!==null?Ol(n[r],t):n[r]};return new Proxy(i,e)}const Er=.01,hc={speed:15};class uc{constructor(t){j(this,"name","dynamic"),j(this,"_config"),this._config=t}get config(){return this._config}}class lM extends uc{update({animatorProp:t,current:e,target:n,dt:r}){const s=ht.sub(n,e),o=ht.scale(s,this._config.speed);let a=ht.add(e,ht.scale(o,r));return this._shouldFinish(n,e,o)&&(a=n,requestAnimationFrame(()=>{t.callCompleteCallback()})),t.callUpdateCallback(),a}_shouldFinish(t,e,n){return ht.sub(t,e).magnitude<Er&&n.magnitude<Er}}class cM extends uc{update({animatorProp:t,current:e,target:n,dt:r}){const s=(n-e)*this._config.speed;let o=e+s*r;return this._shouldFinish(n,e,s)&&(o=n,requestAnimationFrame(()=>{t.callCompleteCallback()})),t.callUpdateCallback(),o}_shouldFinish(t,e,n){return Math.abs(t-e)<Er&&Math.abs(n)<Er}}class hM extends uc{update({animatorProp:t,current:e,target:n,dt:r}){return n.map((s,o)=>{const a=e[o],u=s.value===0?a.unit:s.unit,h=(s.value-a.value)*this._config.speed,d=a.value+h*r;let f=qe(`${d}${u}`);return this._shouldFinish(s.value,a.value,h)&&(f=s,requestAnimationFrame(()=>{t.callCompleteCallback()})),t.callUpdateCallback(),f})}_shouldFinish(t,e,n){return Math.abs(t-e)<Er&&Math.abs(n)<Er}}class dc{constructor(){j(this,"name","instant"),j(this,"_config",{})}get config(){return this._config}update(t){return requestAnimationFrame(()=>{t.animatorProp.callCompleteCallback()}),t.target}}const fc={stiffness:.5,damping:.75,speed:10},wr=.01;class pc{constructor(t){j(this,"name","spring"),j(this,"_config"),this._config=t}get config(){return this._config}}class uM extends pc{constructor(){super(...arguments),j(this,"_velocity",new ht(0,0))}update({animatorProp:t,current:e,target:n,dt:r}){const s=ht.scale(ht.scale(ht.sub(e,n),-1),this._config.stiffness);this._velocity=ht.add(this._velocity,s),this._velocity=ht.scale(this._velocity,this._config.damping);let o=ht.add(e,ht.scale(this._velocity,r*this._config.speed));return this._shouldFinish(n,e)&&(o=n,requestAnimationFrame(()=>{t.callCompleteCallback()})),o}_shouldFinish(t,e){return ht.sub(t,e).magnitude<wr&&this._velocity.magnitude<wr}}class dM extends pc{constructor(){super(...arguments),j(this,"_velocity",0)}update({animatorProp:t,current:e,target:n,dt:r}){const s=-(e-n)*this._config.stiffness;this._velocity+=s,this._velocity*=this._config.damping;let o=e+this._velocity*r*this._config.speed;return this._shouldFinish(n,e)&&(o=n,requestAnimationFrame(()=>{t.callCompleteCallback()})),o}_shouldFinish(t,e){return Math.abs(t-e)<wr&&Math.abs(this._velocity)<wr}}class fM extends pc{constructor(){super(...arguments),j(this,"_velocity",0)}update({animatorProp:t,current:e,target:n,dt:r}){return n.map((s,o)=>{const a=e[o],u=s.value===0?a.unit:s.unit,h=-(a.value-s.value)*this._config.stiffness;this._velocity+=h,this._velocity*=this._config.damping;const d=a.value+this._velocity*r*this._config.speed;let f=qe(`${d}${u}`);return this._shouldFinish(s.value,a.value)&&(f=s,requestAnimationFrame(()=>{t.callCompleteCallback()})),f})}_shouldFinish(t,e){return Math.abs(t-e)<wr&&Math.abs(this._velocity)<wr}}function pM(i){return i}const gc={duration:350,ease:pM};class _c{constructor(t){j(this,"name","tween"),j(this,"_config"),j(this,"_startTime"),this._config=t}get config(){return this._config}reset(){this._startTime=void 0}}class gM extends _c{update({animatorProp:t,initial:e,target:n,ts:r}){this._startTime||(this._startTime=r);const s=Math.min(1,(r-this._startTime)/this._config.duration);return le(s,1)?(requestAnimationFrame(()=>{t.callCompleteCallback()}),n):ht.add(e,ht.scale(ht.sub(n,e),this._config.ease(s)))}}class _M extends _c{update({animatorProp:t,initial:e,target:n,ts:r}){this._startTime||(this._startTime=r);const s=Math.min(1,(r-this._startTime)/this._config.duration);return le(s,1)?(requestAnimationFrame(()=>{t.callCompleteCallback()}),n):e.map((o,a)=>{const u=n[a],h=u.value===0?o.unit:u.unit,d=o.value+this._config.ease(s)*(n[a].value-o.value);return qe(`${d}${h}`)})}}class mM extends _c{update({animatorProp:t,initial:e,target:n,ts:r}){this._startTime||(this._startTime=r);const s=Math.min(1,(r-this._startTime)/this._config.duration);return le(s,1)?(requestAnimationFrame(()=>{t.callCompleteCallback()}),n):e+(n-e)*this._config.ease(s)}}class mc{createAnimatorByName(t,e){switch(t){case"instant":return this.createInstantAnimator();case"dynamic":return this.createDynamicAnimator(e);case"tween":return this.createTweenAnimator(e);case"spring":return this.createSpringAnimator(e)}return this.createInstantAnimator()}}class Ks extends mc{createInstantAnimator(){return new dc}createTweenAnimator(t){return new gM({...gc,...t})}createDynamicAnimator(t){return new lM({...hc,...t})}createSpringAnimator(t){return new uM({...fc,...t})}}class vM extends mc{createInstantAnimator(){return new dc}createTweenAnimator(t){return new _M({...gc,...t})}createDynamicAnimator(t){return new hM({...hc,...t})}createSpringAnimator(t){return new fM({...fc,...t})}}class Iu extends mc{createInstantAnimator(){return new dc}createDynamicAnimator(t){return new cM({...hc,...t})}createTweenAnimator(t){return new mM({...gc,...t})}createSpringAnimator(t){return new dM({...fc,...t})}}function Wr(i){return structuredClone(i)}class xM{constructor(t){j(this,"_viewProp"),j(this,"_completeCallback"),j(this,"_updateCallback"),j(this,"_isAnimating"),this._viewProp=t,this._isAnimating=!1}set(t,e){this._viewProp.setAnimator(t,e)}get name(){return this._viewProp.getAnimator().name}onComplete(t){this._completeCallback=t}get isAnimating(){return this._isAnimating}markAsAnimating(){this._isAnimating=!0}callCompleteCallback(){var t;(t=this._completeCallback)==null||t.call(this),this._isAnimating=!1}onUpdate(t){this._updateCallback=t}callUpdateCallback(){var t;(t=this._updateCallback)==null||t.call(this)}}class Ui{constructor(t,e,n){j(this,"_animatorProp"),j(this,"_animator"),j(this,"_initialValue"),j(this,"_previousValue"),j(this,"_targetValue"),j(this,"_currentValue"),j(this,"_hasChanged"),j(this,"_view"),j(this,"_animatorFactory"),j(this,"_previousRenderValue"),this._animatorProp=new xM(this),this._animatorFactory=t,this._initialValue=Wr(e),this._previousValue=Wr(e),this._targetValue=Wr(e),this._currentValue=Wr(e),this._hasChanged=!1,this._previousRenderValue=void 0,this._view=n,this._animator=this._animatorFactory.createInstantAnimator()}get shouldRender(){return!0}get isAnimating(){return this.animator.isAnimating}getAnimator(){return this._animator}get animator(){return this._animatorProp}get _rect(){return this._view.rect}get _previousRect(){return this._view.previousRect}setAnimator(t,e){this._animator=this._animatorFactory.createAnimatorByName(t,e)}_setTarget(t,e=!0){var n,r;this._previousValue=Wr(this._currentValue),this._targetValue=t,e?((r=(n=this._animator).reset)==null||r.call(n),this.animator.markAsAnimating()):this._currentValue=t,this._hasChanged=!0}hasChanged(){return this._hasChanged}destroy(){this._hasChanged=!1}update(t,e){}}class yM extends Ui{constructor(){super(...arguments),j(this,"_invertedBorderRadius"),j(this,"_forceStyleUpdateThisFrame",!1),j(this,"_updateWithScale",!1)}setFromElementPropValue(t){this._setTarget([t.value.topLeft,t.value.topRight,t.value.bottomRight,t.value.bottomLeft],!0)}enableUpdateWithScale(){this._updateWithScale=!0}disableUpdateWithScale(){this._updateWithScale=!1}get value(){return{topLeft:this._currentValue[0],topRight:this._currentValue[1],bottomRight:this._currentValue[2],bottomLeft:this._currentValue[3]}}get invertedBorderRadius(){return this._invertedBorderRadius}set(t,e=!0){let n;if(typeof t=="string"){const u=Bl(t.trim());n={topLeft:u.value.topLeft.valueWithUnit,topRight:u.value.topRight.valueWithUnit,bottomRight:u.value.bottomRight.valueWithUnit,bottomLeft:u.value.bottomLeft.valueWithUnit}}else n=t;const r=n.topLeft?qe(n.topLeft):this._currentValue[0],s=n.topRight?qe(n.topRight):this._currentValue[1],o=n.bottomRight?qe(n.bottomRight):this._currentValue[2],a=n.bottomLeft?qe(n.bottomLeft):this._currentValue[3];this._setTarget([r,s,o,a],e)}reset(t=!0){this._setTarget(this._initialValue,t)}update(t,e){if(this._forceStyleUpdateThisFrame)this._hasChanged=!0,this._forceStyleUpdateThisFrame=!1;else if(this._view.scale.isAnimating&&this._updateWithScale)this._hasChanged=!0;else if(Cu(this._targetValue,this._currentValue)){this._hasChanged=!Cu(this._targetValue,this._initialValue);return}this._currentValue=this._animator.update({animatorProp:this._animatorProp,current:this._currentValue,target:this._targetValue,initial:this._previousValue,ts:t,dt:e}),this._updateWithScale&&this._applyScaleInverse()}applyScaleInverse(){this._updateWithScale&&(this._forceStyleUpdateThisFrame=!0)}_applyScaleInverse(){if(le(this._view.scale.x,1)&&le(this._view.scale.y,1))return;const t=this._rect.size.width*this._view.scale.x,e=this._rect.size.height*this._view.scale.y;this._invertedBorderRadius=Qy(Bl(`${this._currentValue[0].valueWithUnit} ${this._currentValue[1].valueWithUnit} ${this._currentValue[2].valueWithUnit} ${this._currentValue[3].valueWithUnit}`).value,{width:t,height:e})}get shouldRender(){return this._hasChanged?this._previousRenderValue?!(Du(this.renderValue.v,this._previousRenderValue.v)&&Du(this.renderValue.h,this._previousRenderValue.h)):!0:!1}get renderValue(){return this.invertedBorderRadius?{v:{topLeft:this.invertedBorderRadius.v.topLeft,topRight:this.invertedBorderRadius.v.topRight,bottomLeft:this.invertedBorderRadius.v.bottomLeft,bottomRight:this.invertedBorderRadius.v.bottomRight},h:{topLeft:this.invertedBorderRadius.h.topLeft,topRight:this.invertedBorderRadius.h.topRight,bottomLeft:this.invertedBorderRadius.h.bottomLeft,bottomRight:this.invertedBorderRadius.h.bottomRight}}:{v:{topLeft:this.value.topLeft,topRight:this.value.topRight,bottomLeft:this.value.bottomLeft,bottomRight:this.value.bottomRight},h:{topLeft:this.value.topLeft,topRight:this.value.topRight,bottomLeft:this.value.bottomLeft,bottomRight:this.value.bottomRight}}}projectStyles(){const t=this.renderValue,e=`border-radius: ${t.h.topLeft.valueWithUnit} ${t.h.topRight.valueWithUnit} ${t.h.bottomRight.valueWithUnit} ${t.h.bottomLeft.valueWithUnit} / ${t.v.topLeft.valueWithUnit} ${t.v.topRight.valueWithUnit} ${t.v.bottomRight.valueWithUnit} ${t.v.bottomLeft.valueWithUnit};`;return this._previousRenderValue=t,e}isTransform(){return!1}}class MM extends Ui{setFromElementPropValue(t){this._setTarget(t.value,!0)}get value(){return this._currentValue}set(t,e=!0){this._setTarget(t,e)}reset(t=!0){this._setTarget(1,t)}update(t,e){if(le(this._targetValue,this._currentValue)){this._hasChanged=!le(this._targetValue,this._initialValue);return}this._currentValue=this._animator.update({animatorProp:this._animatorProp,current:this._currentValue,target:this._targetValue,initial:this._previousValue,ts:t,dt:e})}get shouldRender(){return this._hasChanged?typeof this._previousRenderValue>"u"?!0:this.renderValue!==this._previousRenderValue:!1}get renderValue(){return this.value}projectStyles(){const t=this.renderValue,e=`opacity: ${t};`;return this._previousRenderValue=t,e}isTransform(){return!1}}class SM extends Ui{get x(){return this._currentValue.x}get y(){return this._currentValue.y}set(t){const e={x:this.x,y:this.y,...t};if(e.x<0||e.x>1){console.log(`%c WARNING: ${this._view.name}.origin.x property can only be a value from 0 to 1`,"background: #885500");return}if(e.y<0||e.y>1){console.log(`%c WARNING: ${this._view.name}.origin.y property can only be a value from 0 to 1`,"background: #885500");return}this._setTarget(new ht(e.x,e.y),!1)}reset(){this._setTarget(this._initialValue,!1)}get shouldRender(){if(!this._hasChanged)return!1;if(!this._previousRenderValue)return!0;const t=this.renderValue;return!(le(t.x,this._previousRenderValue.x)&&le(t.y,this._previousRenderValue.y))}get renderValue(){return new ht(this.x*100,this.y*100)}projectStyles(){const t=this.renderValue,e=`transform-origin: ${t.x}% ${t.y}%;`;return this._previousRenderValue=t,e}isTransform(){return!1}}class EM extends Ui{constructor(){super(...arguments),j(this,"_animateLayoutUpdateNextFrame",!1),j(this,"_parentScaleInverse",new ht(1,1))}get _parentDiff(){let t=this._view._parent,e=0,n=0;if(t){const r=t.rect.pageOffset,s=t.getScroll(),o={left:t.previousRect.viewportOffset.left+s.x,top:t.previousRect.viewportOffset.top+s.y};e=o.left-r.left,n=o.top-r.top}return{parentDx:e,parentDy:n}}get x(){return this._currentValue.x+this._rect.pageOffset.left+this._parentDiff.parentDx}get y(){return this._currentValue.y+this._rect.pageOffset.top+this._parentDiff.parentDy}get initialX(){return this._rect.pageOffset.left}get initialY(){return this._rect.pageOffset.top}progressTo(t){const e=typeof t.x>"u"?this.initialX:t.x,n=typeof t.y>"u"?this.initialY:t.y,r=new ht(e,n),s=new ht(this.initialX,this.initialY),o=new ht(this.x,this.y),a=ht.sub(o,s),u=ht.sub(r,s);return 1-ht.sub(u,a).magnitude/u.magnitude}set(t,e=!0){const n={x:this.x,y:this.y,...t};this._setTarget(new ht(n.x-this._rect.pageOffset.left,n.y-this._rect.pageOffset.top),e)}reset(t=!0){this._setTarget(new ht(0,0),t)}update(t,e){if((this._view.isInverseEffectEnabled||this._view.isLayoutTransitionEnabled)&&!this._view.isTemporaryView&&this._runLayoutTransition(),this._view.isInverseEffectEnabled){const u=this._view._parent,h=u?u.scale.x:1,d=u?u.scale.y:1;this._parentScaleInverse=new ht(1/h,1/d),this._parentScaleInverse.equals(new ht(1,1))||(this._hasChanged=!0)}if(this._targetValue.x===this._currentValue.x&&this._targetValue.y===this._currentValue.y)return;const n=this._view._parent,r=n?n.scale.x:1,s=n?n.scale.y:1,o=n?n.scale._previousValue.x:1,a=n?n.scale._previousValue.y:1;this._currentValue=this._animator.update({animatorProp:this._animatorProp,current:new ht(this._currentValue.x*r,this._currentValue.y*s),target:this._targetValue,initial:new ht(this._previousValue.x*o,this._previousValue.y*a),ts:t,dt:e}),this._currentValue=new ht(this._currentValue.x/r,this._currentValue.y/s)}_runLayoutTransition(){const t=!(this._targetValue.x===this._currentValue.x&&this._targetValue.y===this._currentValue.y),e=!(this._view.scale._targetValue.x===this._view.scale._currentValue.x&&this._view.scale._targetValue.y===this._view.scale._currentValue.y),n=t||e,r=this._rect.pageOffset.left-this._previousRect.pageOffset.left,s=this._rect.pageOffset.top-this._previousRect.pageOffset.top,o=this._previousRect.size.width/this._rect.size.width,a=this._previousRect.size.height/this._rect.size.height;let u=!1;if(r!==0||s!==0||!Number.isNaN(o)&&o!==1||!Number.isNaN(a)&&a!==1?u=!0:u=(()=>{const h=this._view._parents;for(let d=0;d<h.length;d++){const f=h[d],g=f.previousRect.size.width/f.rect.size.width,_=f.previousRect.size.height/f.rect.size.height;if(g!==1||_!==1)return!0}return!1})(),u){if(this._currentValue.x!==0||this._currentValue.y!==0||this._view.scale._currentValue.x!==1||this._view.scale._currentValue.y!==1){if(!n){const O=this._rect.pageOffset.left-this._previousRect.pageOffset.left,$=this._rect.pageOffset.top-this._previousRect.pageOffset.top;this._setTarget(new ht(this._currentValue.x-O,this._currentValue.y-$),!1);return}const b=this._view._parent,M=this._rect.pageOffset,y=this._view.getScroll(),E={left:this._previousRect.viewportOffset.left+y.x,top:this._previousRect.viewportOffset.top+y.y},A=E.left-M.left,R=E.top-M.top;let L=0,B=0,F=0,z=0;if(b&&b.position.animator.name!=="instant"){const O=b.rect.pageOffset,$=b.getScroll(),et={left:b.previousRect.viewportOffset.left+$.x,top:b.previousRect.viewportOffset.top+$.y};L=et.left-O.left,B=et.top-O.top;const Q=E.top-et.top,rt=E.left-et.left,Et=b.scale.y*Q;F=(Q-Et)/b.scale.y;const vt=b.scale.x*rt;z=(rt-vt)/b.scale.x}this._setTarget(new ht(A-L+z,R-B+F),!1),n&&(this._animateLayoutUpdateNextFrame=!0);return}this._animateLayoutUpdateNextFrame=!0;const h=this._previousRect,d=this._rect,f=this._view._parent;let g=0,_=0;f&&f.position.animator.name!=="instant"&&(g=f.previousRect.viewportOffset.left-f.rect.viewportOffset.left),f&&f.position.animator.name!=="instant"&&(_=f.previousRect.viewportOffset.top-f.rect.viewportOffset.top);let S=1,w=1;f&&f.scale.animator.name!=="instant"&&(S=f.previousRect.size.width/f.rect.size.width,w=f.previousRect.size.height/f.rect.size.height);const v=f&&f.position.animator.name!=="instant"?f.previousRect.viewportOffset.left:0,m=f&&f.position.animator.name!=="instant"?f.previousRect.viewportOffset.top:0,T=h.viewportOffset.left-v,p=h.viewportOffset.top-m,l=T/S-T,x=p/w-p;let c=h.viewportOffset.left-d.viewportOffset.left-g+l;const P=h.viewportOffset.top-d.viewportOffset.top-_+x;this._setTarget(new ht(c,P),!1)}else this._animateLayoutUpdateNextFrame&&(this._setTarget(this._initialValue,!0),this._animateLayoutUpdateNextFrame=!1)}get shouldRender(){if(!this._hasChanged)return!1;if(!this._previousRenderValue)return!0;const t=this.renderValue;return!(le(t.x,this._previousRenderValue.x)&&le(t.y,this._previousRenderValue.y))}get renderValue(){let t=0,e=0;return(this._view.isInverseEffectEnabled||this._view.isLayoutTransitionEnabled)&&(t=(this._rect.size.width*this._parentScaleInverse.x*this._view.scale.x-this._rect.size.width)*this._view.origin.x,e=(this._rect.size.height*this._parentScaleInverse.y*this._view.scale.y-this._rect.size.height)*this._view.origin.y),new ht(this._currentValue.x+t,this._currentValue.y+e)}projectStyles(){const t=this.renderValue,e=`translate3d(${t.x}px, ${t.y}px, 0)`;return this._previousRenderValue=t,e}isTransform(){return!0}}class wM extends Ui{constructor(){super(...arguments),j(this,"_unit","deg")}get degrees(){let t=this._currentValue;return this._unit==="rad"&&(t=t*(180/Math.PI)),t}get radians(){let t=this._currentValue;return this._unit==="deg"&&(t=t*(Math.PI/180)),t}setDegrees(t,e=!0){this._unit="deg",this._setTarget(t,e)}setRadians(t,e=!0){this._unit="rad",this._setTarget(t,e)}reset(t=!0){this._setTarget(0,t)}update(t,e){this._targetValue!==this._currentValue&&(this._currentValue=this._animator.update({animatorProp:this._animatorProp,current:this._currentValue,target:this._targetValue,initial:this._previousValue,ts:t,dt:e}))}get shouldRender(){if(!this._hasChanged)return!1;if(typeof this._previousRenderValue>"u")return!0;const t=this.renderValue;return!le(t,this._previousRenderValue)}get renderValue(){return this._currentValue}projectStyles(){const t=this.renderValue,e=`rotate(${t}${this._unit})`;return this._previousRenderValue=t,e}isTransform(){return!0}}class TM extends Ui{constructor(){super(...arguments),j(this,"_animateLayoutUpdateNextFrame",!1)}get x(){return this._currentValue.x}get y(){return this._currentValue.y}set(t,e=!0){const n={x:this._currentValue.x,y:this._currentValue.y,...typeof t=="number"?{x:t,y:t}:t};this._setTarget(new ht(n.x,n.y),e)}setWithSize(t,e=!0){let n=this._currentValue.x,r=this._currentValue.y;t.width&&(n=t.width/this._rect.size.width),t.height&&(r=t.height/this._rect.size.height),!t.width&&t.height&&(n=r),!t.height&&t.width&&(r=n);const s={x:n,y:r};this._setTarget(new ht(s.x,s.y),e)}reset(t=!0){this._setTarget(new ht(1,1),t)}update(t,e){if((this._view.isInverseEffectEnabled||this._view.isLayoutTransitionEnabled)&&!this._view.isTemporaryView&&this._runLayoutTransition(),this._view.isInverseEffectEnabled){const n=this._view._parent,r=n?n.scale.x:1,s=n?n.scale.y:1;this._hasChanged=r!==1||s!==1}this._targetValue.x===this._currentValue.x&&this._targetValue.y===this._currentValue.y||(this._currentValue=this._animator.update({animatorProp:this._animatorProp,current:this._currentValue,target:this._targetValue,initial:new ht(this._previousValue.x,this._previousValue.y),ts:t,dt:e}))}_runLayoutTransition(){const t=!(this._targetValue.x===this._currentValue.x&&this._targetValue.y===this._currentValue.y),e=this._previousRect.size.width/this._rect.size.width,n=this._previousRect.size.height/this._rect.size.height;let r=!1;if((!Number.isNaN(e)&&e!==1||!Number.isNaN(n)&&n!==1)&&(r=!0),r){if(this._currentValue.x!==1||this._currentValue.y!==1){const h=this._view.previousRect.size.width/this._view.rect.size.width,d=this._view.previousRect.size.height/this._view.rect.size.height;this._setTarget(new ht(this._currentValue.x*h,this._currentValue.y*d),!1),t&&(this._animateLayoutUpdateNextFrame=!0);return}const s=this._previousRect.size.width/this._rect.size.width,o=this._previousRect.size.height/this._rect.size.height,a=s,u=o;this._view.viewProps.borderRadius.applyScaleInverse(),this._setTarget(new ht(a,u),!1),this._animateLayoutUpdateNextFrame=!0}else this._animateLayoutUpdateNextFrame&&(this._setTarget(this._initialValue,!0),this._animateLayoutUpdateNextFrame=!1)}get shouldRender(){if(!this._hasChanged)return!1;if(!this._previousRenderValue)return!0;const t=this.renderValue;return!(le(t.x,this._previousRenderValue.x)&&le(t.y,this._previousRenderValue.y))}get renderValue(){const t=this._view._parent?this._view._parent.scale.x:1,e=this._view._parent?this._view._parent.scale.y:1,n=this._currentValue.x/t,r=this._currentValue.y/e;return new ht(n,r)}projectStyles(){const t=this.renderValue,e=`scale3d(${t.x}, ${t.y}, 1)`;return this._previousRenderValue=t,e}isTransform(){return!0}}class bM extends Ui{get width(){return this._view.rect.size.width}get height(){return this._view.rect.size.height}get localWidth(){return this._currentValue.x}get localHeight(){return this._currentValue.y}get widthAfterScale(){const t=this._view.scale.x;return this.localWidth*t}get heightAfterScale(){const t=this._view.scale.y;return this.localHeight*t}get initialWidth(){return this._initialValue.x}get initialHeight(){return this._initialValue.y}set(t,e=!0){const n={width:this._currentValue.x,height:this._currentValue.y,...t};this._setTarget(new ht(n.width,n.height),e)}setWidth(t,e=!0){const n={width:this._currentValue.x,height:this._currentValue.y,width:t};this._setTarget(new ht(n.width,n.height),e)}setHeight(t,e=!0){const n={width:this._currentValue.x,height:this._currentValue.y,height:t};this._setTarget(new ht(n.width,n.height),e)}reset(t=!0){this._setTarget(new ht(this.initialWidth,this.initialHeight),t)}update(t,e){this._targetValue.x===this._currentValue.x&&this._targetValue.y===this._currentValue.y||(this._currentValue=this._animator.update({animatorProp:this._animatorProp,current:this._currentValue,target:this._targetValue,initial:this._previousValue,ts:t,dt:e}))}get shouldRender(){if(!this._hasChanged)return!1;if(!this._previousRenderValue)return!0;const t=this.renderValue;return!(le(t.x,this._previousRenderValue.x)&&le(t.y,this._previousRenderValue.y))}get renderValue(){return new ht(this._currentValue.x,this._currentValue.y)}projectStyles(){const t=this.renderValue,e=`width: ${t.x}px; height: ${t.y}px;`;return this._previousRenderValue=t,e}isTransform(){return!1}}class AM{constructor(t){j(this,"_props",new Map),this._props.set("position",new EM(new Ks,new ht(0,0),t)),this._props.set("scale",new TM(new Ks,new ht(1,1),t)),this._props.set("rotation",new wM(new Iu,0,t)),this._props.set("size",new bM(new Ks,new ht(t.rect.size.width,t.rect.size.height),t)),this._props.set("opacity",new MM(new Iu,t.elementReader.opacity.value,t)),this._props.set("borderRadius",new yM(new vM,[t.elementReader.borderRadius.value.topLeft,t.elementReader.borderRadius.value.topRight,t.elementReader.borderRadius.value.bottomRight,t.elementReader.borderRadius.value.bottomLeft],t)),this._props.set("origin",new SM(new Ks,t.elementReader.origin.value,t))}allProps(){return Array.from(this._props.values())}allPropNames(){return Array.from(this._props.keys())}getPropByName(t){return this._props.get(t)}get position(){return this._props.get("position")}get scale(){return this._props.get("scale")}get rotation(){return this._props.get("rotation")}get size(){return this._props.get("size")}get opacity(){return this._props.get("opacity")}get borderRadius(){return this._props.get("borderRadius")}get origin(){return this._props.get("origin")}}class RM{constructor(t,e,n,r){j(this,"id"),j(this,"name"),j(this,"element"),j(this,"styles",{}),j(this,"_viewProps"),j(this,"_previousRect"),j(this,"_onAddCallbacks"),j(this,"_onRemoveCallback"),j(this,"_skipFirstRenderFrame"),j(this,"_layoutTransition"),j(this,"_registry"),j(this,"_layoutId"),j(this,"_elementReader"),j(this,"_temporaryView"),j(this,"_inverseEffect"),j(this,"_renderNextTick"),this.id=Cd(),this.name=e,this.element=t,this._elementReader=Na(t),this._previousRect=this._elementReader.rect,this._viewProps=new AM(this),this._skipFirstRenderFrame=!0,this._layoutId=r,this._layoutTransition=!1,this._registry=n,this.element.dataset.velViewId=this.id,this._temporaryView=!1,this._inverseEffect=!1,this.styles=Ol(this.styles,()=>{this._renderNextTick=!0}),this._renderNextTick=!1}destroy(){this._viewProps.allProps().forEach(t=>t.destroy()),this.element.removeAttribute("data-vel-view-id"),this.element.removeAttribute("data-vel-plugin-id"),this._renderNextTick=!0}get elementReader(){return this._elementReader}setElement(t){this.element=t,this._elementReader=Na(this.element),this.element.dataset.velViewId=this.id}get layoutId(){return this._layoutId}get position(){return this._viewProps.position}get scale(){return this._viewProps.scale}get _children(){return Array.from(this.element.children).map(t=>t.dataset.velViewId).filter(t=>t&&typeof t=="string").map(t=>this._registry.getViewById(t)).filter(t=>!!t)}get _parent(){var t;const e=this.element.parentElement;if(!e)return;const n=e.closest("[data-vel-view-id]");if((t=n==null?void 0:n.dataset)!=null&&t.velViewId)return this._registry.getViewById(n.dataset.velViewId)}get _parents(){var t;const e=[];let n=this.element.parentElement;if(!n)return e;for(n=n.closest("[data-vel-view-id]");n;){const r=n.dataset.velViewId;if(r){const s=this._registry.getViewById(r);s&&e.push(s)}n=(t=n.parentElement)==null?void 0:t.closest("[data-vel-view-id]")}return e}get rotation(){return this._viewProps.rotation}get size(){return this._viewProps.size}get _localWidth(){return this._viewProps.size.localWidth}get _localHeight(){return this._viewProps.size.localHeight}get opacity(){return this._viewProps.opacity}get borderRadius(){return this._viewProps.borderRadius}get origin(){return this._viewProps.origin}get data(){const t=this.element.dataset;return Object.keys(t).filter(e=>e.includes("velData")).map(e=>e.replace("velData","")).map(e=>`${e[0].toLowerCase()}${e.slice(1)}`).reduce((e,n)=>{const r=t[`velData${n[0].toUpperCase()}${n.slice(1)}`];return!e[n]&&r&&(e[n]=r),e},{})}get onAddCallbacks(){return this._onAddCallbacks}get onRemoveCallback(){return this._onRemoveCallback}get isLayoutTransitionEnabled(){return this._layoutTransition}get hasLayoutTransitionEnabledForParents(){return this._parents.some(t=>t.isLayoutTransitionEnabled)}get isInverseEffectEnabled(){return this._parents.some(t=>t._inverseEffect)}layoutTransition(t){this._layoutTransition=t,this.inverseEffect(t)}inverseEffect(t){this._inverseEffect=t,t&&this._children.forEach(e=>{if(e.position.animator.name==="instant"){const n=this.viewProps.position.getAnimator();e.position.setAnimator(n.name,n.config)}if(e.scale.animator.name==="instant"){const n=this.viewProps.scale.getAnimator();e.scale.setAnimator(n.name,n.config)}})}setAnimatorsFromParent(){let t=this._parent;for(;t&&!t._inverseEffect;)t=t._parent;if(t){if(this.position.animator.name==="instant"){const e=t.viewProps.position.getAnimator();this.position.setAnimator(e.name,e.config)}if(this.scale.animator.name==="instant"){const e=t.viewProps.scale.getAnimator();this.scale.setAnimator(e.name,e.config)}}}get _isRemoved(){return!this._registry.getViewById(this.id)}setPluginId(t){this.element.dataset.velPluginId=t}hasElement(t){return this.element.contains(t)}getScroll(){return this._elementReader.scroll}intersects(t,e){const n={x:this.rect.viewportOffset.left,y:this.rect.viewportOffset.top};return t>=n.x&&t<=n.x+this.size.width&&e>=n.y&&e<=n.y+this.size.height}overlapsWith(t){const e=t._localWidth*t.scale.x,n=t._localHeight*t.scale.y,r=this._localWidth*this.scale.x,s=this._localHeight*this.scale.y;return this.position.x<t.position.x+e&&this.position.x+r>t.position.x&&this.position.y<t.position.y+n&&this.position.y+s>t.position.y}distanceTo(t){const e=new ht(this.position.x,this.position.y),n=new ht(t.position.x,t.position.y);return ht.sub(n,e).magnitude}read(){this._elementReader=Na(this.element)}get rect(){return this._elementReader.rect}get previousRect(){return this._previousRect}update(t,e){this._viewProps.allProps().forEach(n=>n.update(t,e))}_updatePreviousRect(){this._previousRect=this._elementReader.rect}setAsTemporaryView(){this._temporaryView=!0}get isTemporaryView(){return this._temporaryView}get shouldRender(){return this._renderNextTick||this._viewProps.allProps().some(t=>t.shouldRender)}render(){if(!this.shouldRender)return;if(this._isRemoved&&this._skipFirstRenderFrame){this._skipFirstRenderFrame=!1;return}let t="";const e=this._viewProps.allProps(),n=e.filter(s=>s.isTransform()),r=e.filter(s=>!s.isTransform());if(n.some(s=>s.hasChanged())){const s=n.reduce((o,a,u)=>(o+=a.projectStyles(),u===n.length-1&&(o+=";"),o),"transform: ");t+=s}r.forEach(s=>{s.hasChanged()&&(t+=s.projectStyles())}),t+=this._getUserStyles(),this.element.style.cssText=t,this._renderNextTick=!1}_getUserStyles(){return Object.keys(this.styles).reduce((t,e)=>e?t+`${ky(e)}: ${this.styles[e]};`:t,"")}markAsAdded(){delete this.element.dataset.velProcessing}onAdd(t){this._onAddCallbacks=t}onRemove(t){this._onRemoveCallback=t}get viewProps(){return this._viewProps}getPropByName(t){return this._viewProps.getPropByName(t)}_copyAnimatorsToAnotherView(t){t.viewProps.allPropNames().forEach(e=>{var n,r;const s=(n=this.viewProps.getPropByName(e))==null?void 0:n.getAnimator();s&&((r=t.viewProps.getPropByName(e))==null||r.setAnimator(s.name,s.config))})}}class PM{constructor(t,e){j(this,"_appEventBus"),j(this,"_eventBus"),j(this,"_plugins",[]),j(this,"_views",[]),j(this,"_viewsPerPlugin",new Map),j(this,"_viewsToBeCreated",[]),j(this,"_viewsToBeRemoved",[]),j(this,"_viewsCreatedInPreviousFrame",[]),j(this,"_layoutIdToViewMap",new Map),j(this,"_eventPluginsPerPlugin",new Map),j(this,"_pluginNameToPluginFactoryMap",new Map),j(this,"_pluginNameToPluginConfigMap",new Map),this._appEventBus=t,this._eventBus=e}update(){this._handleRemovedViews(),this._handleAddedViews()}associateEventPluginWithPlugin(t,e){let n=this._eventPluginsPerPlugin.get(t);n||(n=[],this._eventPluginsPerPlugin.set(t,n)),n.push(e)}_handleRemovedViews(){const t=this._viewsToBeRemoved.filter(e=>e.dataset.velViewId);t.length&&(t.forEach(e=>{const n=e.dataset.velViewId;n&&this._handleRemoveView(n)}),this._viewsToBeRemoved=[])}_getPluginNameForElement(t){const e=t.dataset.velPlugin;if(e&&e.length>0)return e;const n=t.closest("[data-vel-plugin]");if(n)return n.dataset.velPlugin}_getPluginIdForElement(t){const e=this._getPluginNameForElement(t);if(!e)return;const n=t.closest("[data-vel-plugin-id]");if(n)return n.dataset.velPluginId;const r=this.getPluginByName(e);if(r)return r.id}_isScopedElement(t){const e=this._getPluginNameForElement(t);if(!e)return!1;const n=this._pluginNameToPluginFactoryMap.get(e),r=n==null?void 0:n.scope;return t.dataset.velView===r}_handleAddedViews(){this._viewsCreatedInPreviousFrame.forEach(r=>{r.markAsAdded()}),this._viewsCreatedInPreviousFrame=[];const t=this._viewsToBeCreated.filter(r=>this._isScopedElement(r)),e=this._viewsToBeCreated.filter(r=>!this._isScopedElement(r));this._viewsToBeCreated=[],t.forEach(r=>{const s=this._getPluginNameForElement(r),o=this._pluginNameToPluginFactoryMap.get(s),a=this._pluginNameToPluginConfigMap.get(s),u=r.dataset.velPluginKey,h=Ua(o,this,this._eventBus,this._appEventBus,a,u);this._plugins.push(h);const d=r.dataset.velView,f=this._createNewView(r,d,h);f.isInverseEffectEnabled&&f.setAnimatorsFromParent(),h.notifyAboutViewAdded(f)});const n=e.filter(r=>!!this._getPluginIdForElement(r));n.length!==0&&n.forEach(r=>{const s=this._getPluginIdForElement(r),o=r.dataset.velView;if(!o||!s)return;const a=this._getPluginById(s);if(!a)return;const u=this._getLayoutIdForElement(r,a);let h;u&&this._layoutIdToViewMap.has(u)?(h=this._layoutIdToViewMap.get(u),h.setElement(r),h.setPluginId(a.id),this._createChildrenForView(h,a)):h=this._createNewView(r,o,a),h.isInverseEffectEnabled&&h.setAnimatorsFromParent(),a.notifyAboutViewAdded(h)})}_getLayoutIdForElement(t,e){const n=t.dataset.velLayoutId;if(n)return`${n}-${e.id}`}_createNewView(t,e,n){const r=this._getLayoutIdForElement(t,n),s=this.createView(t,e,r);return n.addView(s),s.layoutId&&this._layoutIdToViewMap.set(s.layoutId,s),this._createChildrenForView(s,n),this._appEventBus.emitPluginReadyEvent(n.pluginName,n.api,!0),requestAnimationFrame(()=>{requestAnimationFrame(()=>{this._appEventBus.emitPluginReadyEvent(n.pluginName,n.api)})}),s}_createChildrenForView(t,e){const n=t.element.querySelectorAll("*");if(n.length){if(Array.from(n).some(r=>this._getPluginNameForElement(r)!==e.pluginName)){console.log(`%c WARNING: The plugin "${e.pluginName}" has view(s) created for a different plugin. Make sure all views inside that plugin don't have data-vel-plugin set or the pluginName is set to "${e.pluginName}"`,"background: #885500");return}Array.from(n).forEach(r=>{const s=r,o=s.dataset.velView?s.dataset.velView:`${t.name}-child`,a=this._getLayoutIdForElement(s,e),u=this.createView(s,o,a);a&&!this._layoutIdToViewMap.has(a)&&this._layoutIdToViewMap.set(a,u),e.addView(u),e.notifyAboutViewAdded(u)})}}_handleRemoveView(t){this._plugins.forEach(e=>{if(!this._viewsPerPlugin.get(e.id))return;const n=this._getPluginViewById(e,t);n&&e.removeView(n)})}removeViewById(t,e){this._unassignViewFromPlugin(t,e),this._views=this._views.filter(n=>n.id!==t)}_unassignViewFromPlugin(t,e){const n=this._viewsPerPlugin.get(e);if(!n)return;const r=n.indexOf(t);r!==-1&&n.splice(r,1)}getViewById(t){return this._views.find(e=>e.id===t)}_getPluginById(t){return this._plugins.find(e=>e.id===t)}_getPluginViewById(t,e){return this.getViewsForPlugin(t).find(n=>n.id===e)}destroy(t,e){if(!t){this._destroyAll(e);return}let n=[];if(t&&t.length>0){const r=this.getPluginByName(t);if(r){const s=(this._eventPluginsPerPlugin.get(r.id)||[]).map(o=>this._getPluginById(o)).filter(o=>typeof o<"u");n.push(r),n.push(...s)}}else n=this._plugins;requestAnimationFrame(()=>{n.forEach(r=>{this._destroyPlugin(r)}),requestAnimationFrame(()=>{e==null||e()})})}_destroyPlugin(t){const e=this.getViewsForPlugin(t);e.forEach(n=>{n.layoutId&&this._layoutIdToViewMap.delete(n.layoutId),n.destroy()}),this._views=this._views.filter(n=>!e.find(r=>r.id===n.id)),this._viewsPerPlugin.delete(t.id),this._plugins=this._plugins.filter(n=>n.id!==t.id)}_destroyAll(t){this._views.forEach(e=>e.destroy()),requestAnimationFrame(()=>{this._plugins=[],this._views=[],this._viewsPerPlugin.clear(),this._viewsToBeCreated=[],this._viewsToBeRemoved=[],this._viewsCreatedInPreviousFrame=[],this._layoutIdToViewMap.clear(),this._eventPluginsPerPlugin.clear(),t==null||t()})}reset(t,e){let n=[];if(t&&t.length>0){const r=this.getPluginByName(t);if(r){const s=(this._eventPluginsPerPlugin.get(r.id)||[]).map(o=>this._getPluginById(o)).filter(o=>typeof o<"u");n.push(r),n.push(...s)}}else n=this._plugins;requestAnimationFrame(()=>{n.forEach(r=>{this._resetPlugin(r)}),requestAnimationFrame(()=>{e==null||e()})})}_resetPlugin(t){const e=t.config,n=t.pluginFactory,r=t.internalBusEvent,s=!t.isRenderable(),o=this.getViewsForPlugin(t);o.forEach(a=>{a.layoutId&&this._layoutIdToViewMap.delete(a.layoutId),a.destroy()}),this._views=this._views.filter(a=>!o.find(u=>u.id===a.id)),this._viewsPerPlugin.delete(t.id),this._plugins=this._plugins.filter(a=>a.id!==t.id),s||requestAnimationFrame(()=>{this.createPlugin(n,this._eventBus,e).setInternalEventBus(r)})}queueNodeToBeCreated(t){this._viewsToBeCreated.push(t)}queueNodeToBeRemoved(t){this._viewsToBeRemoved.push(t)}notifyPluginAboutDataChange(t){const e=this._plugins.filter(n=>n.id===t.pluginId);!e||!e.length||e.forEach(n=>{n.notifyAboutDataChanged({dataName:t.dataName,dataValue:t.dataValue,viewName:t.viewName})})}getPlugins(){return this._plugins}getRenderablePlugins(){function t(e){return e.isRenderable()}return this._plugins.filter(t)}getPluginByName(t,e){return this._plugins.find(n=>e?n.pluginKey===e&&n.pluginName===t:n.pluginName===t)}getPluginsByName(t,e){return this._plugins.filter(n=>e?n.pluginKey===e&&n.pluginName===t:n.pluginName===t)}hasPlugin(t){return t.pluginName?!!this.getPluginByName(t.pluginName):!1}createPlugin(t,e,n={}){if(!t.pluginName)throw Error(`Plugin ${t.name} must contain a pluginName field`);let r=[];if(t.scope){const a=document.querySelectorAll(`[data-vel-plugin=${t.pluginName}][data-vel-view=${t.scope}]`);this._pluginNameToPluginFactoryMap.has(t.pluginName)||this._pluginNameToPluginFactoryMap.set(t.pluginName,t),this._pluginNameToPluginConfigMap.has(t.pluginName)||this._pluginNameToPluginConfigMap.set(t.pluginName,n),a?r=Array.from(a):r=[document.documentElement]}else r=[document.documentElement];const s=r.map(a=>{const u=a.dataset.velPluginKey,h=Ua(t,this,e,this._appEventBus,n,u);this._plugins.push(h);let d=[];a!==document.documentElement&&d.push(a);const f=a.querySelectorAll(`[data-vel-plugin=${h.pluginName}]`);d=[...d,...f];const g=d.filter(_=>{if(!_.parentElement)return!0;const S=this._getPluginNameForElement(_.parentElement);return!(S&&S.length>0)});return g.length&&g.forEach(_=>{const S=_.dataset.velView;if(!S)return;const w=this._createNewView(_,S,h);h.notifyAboutViewAdded(w)}),h});if(s&&s.length>0)return s[0];const o=Ua(t,this,e,this._appEventBus,n);return t.scope||console.log(`%c WARNING: The plugin "${o.pluginName}" is created but there are no elements using it on the page`,"background: #885500"),o}getViews(){return this._views}createView(t,e,n){const r=new RM(t,e,this,n);return this._views.push(r),this._viewsCreatedInPreviousFrame.push(r),r}assignViewToPlugin(t,e){this._viewsPerPlugin.has(e.id)||this._viewsPerPlugin.set(e.id,[]);const n=this._viewsPerPlugin.get(e.id);n.includes(t.id)||n.push(t.id)}getViewsForPlugin(t){const e=this._viewsPerPlugin.get(t.id);return e?e.map(n=>this._views.find(r=>r.id===n)).filter(n=>!!n):[]}getViewsByNameForPlugin(t,e){return this.getViewsForPlugin(t).filter(n=>n.name===e)}}class Lu{constructor(t){j(this,"pluginApi"),this.pluginApi=t.pluginApi}}class Uu{constructor(t){j(this,"pluginApi"),this.pluginApi=t.pluginApi}}class vc{constructor(){j(this,"_previousTime",0),j(this,"_registry"),j(this,"_eventBus"),j(this,"_appEventBus"),this._eventBus=new Fl,this._appEventBus=new Fl,this._registry=new PM(this._appEventBus,this._eventBus),new Gy(this._eventBus)}static create(){return new vc}addPlugin(t,e={}){this._registry.hasPlugin(t)||this._registry.createPlugin(t,this._eventBus,e)}reset(t,e){this._registry.reset(t,e)}destroy(t,e){this._registry.destroy(t,e)}getPlugin(t,e){let n=typeof t=="string"?t:t.pluginName;const r=this._registry.getPluginByName(n,e);if(!r)throw new Error(`You can't call getPlugin for ${n} with key: ${e} because it does not exist in your app`);return r.api}getPlugins(t,e){let n=typeof t=="string"?t:t.pluginName;const r=this._registry.getPluginsByName(n,e);if(r.length===0)throw new Error(`You can't call getPlugins for ${n} with key: ${e} because they don't exist in your app`);return r.map(s=>s.api)}onPluginEvent(t,e,n){const r=this._registry.getPluginByName(t.pluginName);r&&r.on(e,n)}run(){document.readyState==="loading"?document.addEventListener("DOMContentLoaded",this._start.bind(this)):this._start()}ready(t,e){this._appEventBus.subscribeToPluginReadyEvent(e,t)}_start(){this._setup(),requestAnimationFrame(this._tick.bind(this))}_setup(){this._listenToNativeEvents(),this._subscribeToEvents()}_listenToNativeEvents(){document.addEventListener("click",t=>{this._eventBus.emitEvent(lc,{x:t.clientX,y:t.clientY,target:t.target})}),document.addEventListener("pointermove",t=>{this._eventBus.emitEvent(wo,{x:t.clientX,y:t.clientY,target:t.target})}),document.addEventListener("pointerdown",t=>{this._eventBus.emitEvent(To,{x:t.clientX,y:t.clientY,target:t.target})}),document.addEventListener("pointerup",t=>{this._eventBus.emitEvent(bo,{x:t.clientX,y:t.clientY,target:t.target})})}_tick(t){let e=(t-this._previousTime)/1e3;e>.016&&(e=1/60),this._previousTime=t,this._eventBus.reset(),this._subscribeToEvents(),this._read(),this._update(t,e),this._render(),requestAnimationFrame(this._tick.bind(this))}_subscribeToEvents(){this._eventBus.subscribeToEvent(Ul,this._onNodeAdded.bind(this)),this._eventBus.subscribeToEvent(Nl,this._onNodeRemoved.bind(this)),this._eventBus.subscribeToEvent(Pd,this._onDataChanged.bind(this)),this._registry.getPlugins().forEach(t=>{t.subscribeToEvents(this._eventBus)})}_onNodeAdded({node:t}){this._registry.queueNodeToBeCreated(t)}_onNodeRemoved({node:t}){this._registry.queueNodeToBeRemoved(t)}_onDataChanged(t){this._registry.notifyPluginAboutDataChange(t)}_read(){this._registry.getViews().forEach(t=>{t.read()})}_update(t,e){this._registry.update(),this._registry.getPlugins().slice().reverse().forEach(n=>{n.init()}),this._registry.getRenderablePlugins().forEach(n=>{n.update(t,e)}),this._registry.getViews().forEach(n=>{n.update(t,e)}),this._registry.getViews().forEach(n=>{n._updatePreviousRect()})}_render(){this._registry.getRenderablePlugins().forEach(t=>{t.render()}),this._registry.getViews().forEach(t=>{t.render()})}}function CM(){return vc.create()}class DM{constructor(t){j(this,"view"),j(this,"previousX"),j(this,"previousY"),j(this,"x"),j(this,"y"),j(this,"isDragging"),j(this,"target"),j(this,"directions",[]),j(this,"width"),j(this,"height"),this.props=t,this.previousX=t.previousX,this.previousY=t.previousY,this.x=t.x,this.y=t.y,this.width=t.width,this.height=t.height,this.view=t.view,this.isDragging=t.isDragging,this.target=t.target,this.directions=t.directions}}class IM extends cc{constructor(){super(...arguments),j(this,"_pointerX",0),j(this,"_pointerY",0),j(this,"_initialPointer",new ht(0,0)),j(this,"_initialPointerPerView",new Map),j(this,"_pointerDownPerView",new Map),j(this,"_targetPerView",new Map),j(this,"_viewPointerPositionLog",new Map)}setup(){document.addEventListener("selectstart",this.onSelect.bind(this))}onSelect(t){this._isDragging&&t.preventDefault()}get _isDragging(){return Array.from(this._pointerDownPerView.values()).some(t=>!!t)}subscribeToEvents(t){t.subscribeToEvent(To,({x:e,y:n,target:r})=>{this._initialPointer=new ht(e,n),this.getViews().forEach(s=>{this._pointerDownPerView.set(s.id,s.intersects(e,n)),this._targetPerView.set(s.id,r);const o=new ht(e-s.position.x,n-s.position.y);this._pointerX=e,this._pointerY=n,this._initialPointerPerView.set(s.id,o)})}),t.subscribeToEvent(bo,()=>{this.getViews().forEach(e=>{this._pointerDownPerView.get(e.id)&&this._initialPointerPerView.get(e.id)&&(this._pointerDownPerView.set(e.id,!1),this._emitEvent(e,[]))})}),t.subscribeToEvent(wo,({x:e,y:n})=>{this._pointerX=e,this._pointerY=n,this.getViews().forEach(r=>{if(this._pointerDownPerView.get(r.id)&&this._initialPointerPerView.get(r.id)){this._viewPointerPositionLog.has(r.id)||this._viewPointerPositionLog.set(r.id,[]);const s=new ht(e,n),o=this._viewPointerPositionLog.get(r.id);o&&o.push(new ht(e,n));const a=o&&o.length>=2?o[o.length-2]:s.clone(),u=this._calculateDirections(a,s);this._emitEvent(r,u)}})})}_emitEvent(t,e){const n=this._viewPointerPositionLog.get(t.id),r=n&&n.length>=2?n[n.length-2]:null,s=this._pointerX-this._initialPointerPerView.get(t.id).x,o=this._pointerY-this._initialPointerPerView.get(t.id).y,a=r?r.x-this._initialPointerPerView.get(t.id).x:s,u=r?r.y-this._initialPointerPerView.get(t.id).y:o,h=this._pointerY-this._initialPointer.y,d=this._pointerX-this._initialPointer.x,f=this._targetPerView.get(t.id);if(!f||!t.hasElement(f))return;const g=this._pointerDownPerView.get(t.id)===!0;g||this._viewPointerPositionLog.clear();const _={view:t,target:f,previousX:a,previousY:u,x:s,y:o,width:d,height:h,isDragging:g,directions:e};this.emit(DM,_)}_calculateDirections(t,e){const n={up:ht.sub(new ht(t.x,t.y-1),t),down:ht.sub(new ht(t.x,t.y+1),t),left:ht.sub(new ht(t.x-1,t.y),t),right:ht.sub(new ht(t.x+1,t.y),t)},r=ht.sub(e,t).unitVector;return[{direction:"up",projection:r.dot(n.up)},{direction:"down",projection:r.dot(n.down)},{direction:"left",projection:r.dot(n.left)},{direction:"right",projection:r.dot(n.right)}].filter(s=>s.projection>0).map(s=>s.direction)}}j(IM,"pluginName","DragEventPlugin");class LM{constructor(t){j(this,"view"),j(this,"direction"),this.props=t,this.view=t.view,this.direction=t.direction}}class UM extends cc{constructor(){super(...arguments),j(this,"_viewIsPointerDownMap",new Map),j(this,"_viewPointerPositionLog",new Map),j(this,"_targetPerView",new Map)}subscribeToEvents(t){t.subscribeToEvent(To,({x:e,y:n,target:r})=>{this.getViews().forEach(s=>{this._targetPerView.set(s.id,r),s.intersects(e,n)&&this._viewIsPointerDownMap.set(s.id,!0)})}),t.subscribeToEvent(wo,({x:e,y:n})=>{this.getViews().forEach(r=>{this._viewIsPointerDownMap.get(r.id)&&(this._viewPointerPositionLog.has(r.id)||this._viewPointerPositionLog.set(r.id,[]),this._viewPointerPositionLog.get(r.id).push(new ht(e,n)))})}),t.subscribeToEvent(bo,({x:e,y:n})=>{this.getViews().forEach(s=>{if(!this._viewIsPointerDownMap.get(s.id)||!this._viewPointerPositionLog.has(s.id))return;const o=new ht(e,n),a=this._viewPointerPositionLog.get(s.id),u=a[a.length-2]||o.clone(),h=this._targetPerView.get(s.id),d=r(u,o);h&&s.hasElement(h)&&d.hasSwiped&&this.emit(LM,{view:s,direction:d.direction}),this._viewPointerPositionLog.set(s.id,[]),this._viewIsPointerDownMap.set(s.id,!1)});function r(s,o){const a={up:ht.sub(new ht(s.x,s.y-1),s),down:ht.sub(new ht(s.x,s.y+1),s),left:ht.sub(new ht(s.x-1,s.y),s),right:ht.sub(new ht(s.x+1,s.y),s)},u=ht.sub(o,s).unitVector,h=["up","down","left","right"],d=[u.dot(a.up),u.dot(a.down),u.dot(a.left),u.dot(a.right)],f=Math.max(...d),g=d.indexOf(f),_=h[g],S=ht.sub(o,s).magnitude;return{hasSwiped:u.dot(a[_])*S>30,direction:_}}})}}j(UM,"pluginName","SwipeEventPlugin");class NM{constructor(t){j(this,"view"),this.props=t,this.view=t.view}}class FM extends cc{subscribeToEvents(t){t.subscribeToEvent(lc,({x:e,y:n,target:r})=>{this.getViews().forEach(s=>{const o=r,a=s.element===o||s.element.contains(o);s.intersects(e,n)&&a&&this.emit(NM,{view:s})})})}}j(FM,"pluginName","ClickEventPlugin");function BM(i,t){const e=i.map(t),n=Math.min(...e),r=e.indexOf(n);return i[r]}const Nu=Object.freeze(Object.defineProperty({__proto__:null,clamp:Id,minBy:BM,pointToViewProgress:Ky,remap:jy,valueAtPercentage:Zy},Symbol.toStringTag,{value:"Module"})),OM=Object.freeze(Object.defineProperty({__proto__:null,PointerClickEvent:lc,PointerDownEvent:To,PointerMoveEvent:wo,PointerUpEvent:bo},Symbol.toStringTag,{value:"Module"}));function VM(){const i=e=>{let n,r;e.subscribeToEvents(o=>{o.subscribeToEvent(OM.PointerMoveEvent,s)});function s(o){if(!(!r||!n)){if(!r.intersects(o.x,o.y)){n.forEach(a=>a.size.reset());return}n.forEach(a=>{const u=Nu.pointToViewProgress({x:o.x,y:o.y},a,120),h=Nu.remap(u,0,1,1,1.9);a.size.set({width:40*h,height:40*h})})}}e.setup(()=>{r=e.getView("root"),n=e.getViews("item"),n.forEach(o=>{o.size.setAnimator("dynamic"),o.origin.set({x:.5,y:1})})})};i.pluginName="CommandShelf";const t=CM();t.addPlugin(i),t.run()}async function zM(){VM();const{scene:i}=mx(document.getElementById("app")),t=new Oy;t.setState("loading"),t.setLoading(!0);let e;try{e=await Ah("./Femur_lightweight.stl")}catch(r){t.setLoading(!1),t.setState("listening"),console.error("Failed to load bone STL:",r);return}t.setLoading(!1);let n=new Au(i,e,t);Fy(r=>n.handleCommand(r)),document.getElementById("record-btn").addEventListener("click",async()=>{n.dispose(),t.setState("loading"),t.setLoading(!0);try{const r=await Ah("./Femur_lightweight.stl");n=new Au(i,r,t)}catch(r){t.setState("listening"),console.error("Failed to reload bone:",r)}t.setLoading(!1)})}zM();
