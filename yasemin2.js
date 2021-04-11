    <script>
//<![CDATA[
(function(){var f="function",h="object",l,m=this||self,n=function(a){return"string"==typeof a},p=function(a){var b=typeof a;if(b==h)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return h;if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=
typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return f}else return"null";else if(b==f&&"undefined"==typeof a.call)return h;return b};var q=Array.prototype.indexOf?function(a,b,c){return Array.prototype.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(n(a))return n(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},r=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=n(a)?a.split(""):a,g=0;g<d;g++)g in e&&b.call(c,e[g],g,a)},u=function(a){return Array.prototype.concat.apply([],arguments)},v=function(a){var b=
a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]};var w;a:{var x=m.navigator;if(x){var y=x.userAgent;if(y){w=y;break a}}w=""}var z=function(a){return-1!=w.indexOf(a)};var A=function(){};A.prototype.h=function(){return this};(new A).h("");var B=function(){};B.prototype.h=function(){return this};(new B).h("");var C=function(){};C.prototype.h=function(){return this};(new C).h("");var D=function(){};D.prototype.h=function(){return this};(new D).h("<!DOCTYPE html>",0);(new D).h("",0);(new D).h("<br>",0);var E=z("Trident")||z("MSIE");var F=function(a,b){return n(b)?a.getElementById(b):b},G=function(a,b,c,d){a=d||a;var e=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(e||c))return a.querySelectorAll(e+(c?"."+c:""));if(c&&a.getElementsByClassName){b=a.getElementsByClassName(c);if(e){a={};for(var g=d=0,k;k=b[g];g++)e==k.nodeName&&(a[d++]=k);a.length=d;return a}return b}b=a.getElementsByTagName(e||"*");if(c){a={};for(g=d=0;k=b[g];g++){e=k.className;var t;if(t=typeof e.split==f)t=0<=q(e.split(/\s+/),c);
t&&(a[d++]=k)}a.length=d;return a}return b};var H=function(a){this.F=a};H.prototype.serialize=function(a){var b=[];this.I(a,b);return b.join("")};
H.prototype.I=function(a,b){if(null==a)b.push("null");else{if(typeof a==h){if("array"==p(a)){this.serializeArray(a,b);return}if(a instanceof String||a instanceof Number||a instanceof Boolean)a=a.valueOf();else{this.aa(a,b);return}}switch(typeof a){case "string":this.M(a,b);break;case "number":this.Z(a,b);break;case "boolean":b.push(String(a));break;case f:b.push("null");break;default:throw Error("Unknown type: "+typeof a);}}};
var I={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},J=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;H.prototype.M=function(a,b){b.push('"',a.replace(J,function(c){var d=I[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),I[c]=d);return d}),'"')};H.prototype.Z=function(a,b){b.push(isFinite(a)&&!isNaN(a)?String(a):"null")};
H.prototype.serializeArray=function(a,b){var c=a.length;b.push("[");for(var d="",e=0;e<c;e++)b.push(d),d=a[e],this.I(this.F?this.F.call(a,String(e),d):d,b),d=",";b.push("]")};H.prototype.aa=function(a,b){b.push("{");var c="",d;for(d in a)if(Object.prototype.hasOwnProperty.call(a,d)){var e=a[d];typeof e!=f&&(b.push(c),this.M(d,b),b.push(":"),this.I(this.F?this.F.call(a,d,e):e,b),c=",")}b.push("}")};var K="StopIteration"in m?m.StopIteration:{message:"StopIteration",stack:""},L=function(){};L.prototype.next=function(){throw K;};L.prototype.U=function(){return this};var M=function(a,b){this.g={};this.c=[];this.G=this.b=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else a&&this.addAll(a)};l=M.prototype;l.w=function(){this.B();for(var a=[],b=0;b<this.c.length;b++)a.push(this.g[this.c[b]]);return a};l.v=function(){this.B();return this.c.concat()};l.u=function(a){return N(this.g,a)};
l.remove=function(a){return N(this.g,a)?(delete this.g[a],this.b--,this.G++,this.c.length>2*this.b&&this.B(),!0):!1};l.B=function(){if(this.b!=this.c.length){for(var a=0,b=0;a<this.c.length;){var c=this.c[a];N(this.g,c)&&(this.c[b++]=c);a++}this.c.length=b}if(this.b!=this.c.length){var d={};for(b=a=0;a<this.c.length;)c=this.c[a],N(d,c)||(this.c[b++]=c,d[c]=1),a++;this.c.length=b}};l.get=function(a,b){return N(this.g,a)?this.g[a]:b};
l.set=function(a,b){N(this.g,a)||(this.b++,this.c.push(a),this.G++);this.g[a]=b};l.addAll=function(a){if(a instanceof M)for(var b=a.v(),c=0;c<b.length;c++)this.set(b[c],a.get(b[c]));else for(b in a)this.set(b,a[b])};l.forEach=function(a,b){for(var c=this.v(),d=0;d<c.length;d++){var e=c[d],g=this.get(e);a.call(b,g,e,this)}};l.clone=function(){return new M(this)};
l.U=function(a){this.B();var b=0,c=this.G,d=this,e=new L;e.next=function(){if(c!=d.G)throw Error("The map has changed since the iterator was created");if(b>=d.c.length)throw K;var g=d.c[b++];return a?g:d.g[g]};return e};var N=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)};var aa=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/,ba=function(a,b){if(a){a=a.split("&");for(var c=0;c<a.length;c++){var d=a[c].indexOf("="),e=null;if(0<=d){var g=a[c].substring(0,d);e=a[c].substring(d+1)}else g=a[c];b(g,e?decodeURIComponent(e.replace(/\+/g," ")):"")}}};var O=function(a,b){this.C=this.K=this.s="";this.D=null;this.H=this.L="";this.f=this.Y=!1;var c;a instanceof O?(this.f=void 0!==b?b:a.f,this.S(a.s),this.T(a.K),this.N(a.C),this.P(a.D),this.setPath(a.getPath()),this.R(a.i.clone()),this.O(a.H)):a&&(c=String(a).match(aa))?(this.f=!!b,this.S(c[1]||"",!0),this.T(c[2]||"",!0),this.N(c[3]||"",!0),this.P(c[4]),this.setPath(c[5]||"",!0),this.R(c[6]||"",!0),this.O(c[7]||"",!0)):(this.f=!!b,this.i=new P(null,null,this.f))};l=O.prototype;
l.toString=function(){var a=[],b=this.s;b&&a.push(Q(b,R,!0),":");var c=this.C;if(c||"file"==b)a.push("//"),(b=this.K)&&a.push(Q(b,R,!0),"@"),a.push(encodeURIComponent(String(c)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),c=this.D,null!=c&&a.push(":",String(c));if(c=this.getPath())this.X()&&"/"!=c.charAt(0)&&a.push("/"),a.push(Q(c,"/"==c.charAt(0)?ca:da,!0));(c=this.V())&&a.push("?",c);(c=this.H)&&a.push("#",Q(c,ea));return a.join("")};l.clone=function(){return new O(this)};
l.S=function(a,b){this.l();if(this.s=b?S(a,!0):a)this.s=this.s.replace(/:$/,"");return this};l.T=function(a,b){this.l();this.K=b?S(a):a;return this};l.N=function(a,b){this.l();this.C=b?S(a,!0):a;return this};l.X=function(){return!!this.C};l.P=function(a){this.l();if(a){a=Number(a);if(isNaN(a)||0>a)throw Error("Bad port number "+a);this.D=a}else this.D=null;return this};l.getPath=function(){return this.L};l.setPath=function(a,b){this.l();this.L=b?S(a,!0):a;return this};
l.R=function(a,b){this.l();a instanceof P?(this.i=a,this.i.J(this.f)):(b||(a=Q(a,fa)),this.i=new P(a,null,this.f));return this};l.V=function(){return this.i.toString()};l.ba=function(a,b){this.l();this.i.set(a,b);return this};l.W=function(a){return this.i.get(a)};l.O=function(a,b){this.l();this.H=b?S(a):a;return this};l.l=function(){if(this.Y)throw Error("Tried to modify a read-only Uri");};l.J=function(a){this.f=a;this.i&&this.i.J(a);return this};
var S=function(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""},Q=function(a,b,c){return n(a)?(a=encodeURI(a).replace(b,ha),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null},ha=function(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)},R=/[#\/\?@]/g,da=/[#\?:]/g,ca=/[#\?]/g,fa=/[#\?@]/g,ea=/#/g,P=function(a,b,c){this.b=this.a=null;this.j=a||null;this.f=!!c};l=P.prototype;
l.m=function(){if(!this.a&&(this.a=new M,this.b=0,this.j)){var a=this;ba(this.j,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)})}};l.add=function(a,b){this.m();this.A();a=this.o(a);var c=this.a.get(a);c||this.a.set(a,c=[]);c.push(b);this.b+=1;return this};l.remove=function(a){this.m();a=this.o(a);return this.a.u(a)?(this.A(),this.b-=this.a.get(a).length,this.a.remove(a)):!1};l.u=function(a){this.m();a=this.o(a);return this.a.u(a)};
l.forEach=function(a,b){this.m();this.a.forEach(function(c,d){r(c,function(e){a.call(b,e,d,this)},this)},this)};l.v=function(){this.m();for(var a=this.a.w(),b=this.a.v(),c=[],d=0;d<b.length;d++)for(var e=a[d],g=0;g<e.length;g++)c.push(b[d]);return c};l.w=function(a){this.m();var b=[];if(n(a))this.u(a)&&(b=u(b,this.a.get(this.o(a))));else{a=this.a.w();for(var c=0;c<a.length;c++)b=u(b,a[c])}return b};
l.set=function(a,b){this.m();this.A();a=this.o(a);this.u(a)&&(this.b-=this.a.get(a).length);this.a.set(a,[b]);this.b+=1;return this};l.get=function(a,b){if(!a)return b;a=this.w(a);return 0<a.length?String(a[0]):b};l.setValues=function(a,b){this.remove(a);0<b.length&&(this.A(),this.a.set(this.o(a),v(b)),this.b+=b.length)};
l.toString=function(){if(this.j)return this.j;if(!this.a)return"";for(var a=[],b=this.a.v(),c=0;c<b.length;c++){var d=b[c],e=encodeURIComponent(String(d));d=this.w(d);for(var g=0;g<d.length;g++){var k=e;""!==d[g]&&(k+="="+encodeURIComponent(String(d[g])));a.push(k)}}return this.j=a.join("&")};l.A=function(){this.j=null};l.clone=function(){var a=new P;a.j=this.j;this.a&&(a.a=this.a.clone(),a.b=this.b);return a};l.o=function(a){a=String(a);this.f&&(a=a.toLowerCase());return a};
l.J=function(a){a&&!this.f&&(this.m(),this.A(),this.a.forEach(function(b,c){var d=c.toLowerCase();c!=d&&(this.remove(c),this.setValues(d,b))},this));this.f=a};var U=function(a,b,c){a:{var d=9==b.nodeType?b:b.ownerDocument||b.document;if(d.defaultView&&d.defaultView.getComputedStyle&&(d=d.defaultView.getComputedStyle(b,null))){d=d[a]||d.getPropertyValue(a)||"";break a}d=""}d=d||(b.currentStyle?b.currentStyle[a]:null)||b.style&&b.style[a];return null==d||"inherit"==d||"transparent"==d||"rgba(0, 0, 0, 0)"==d?b!=(9==b.nodeType?b:b.ownerDocument||b.document).body&&b.parentNode?T(a,b.parentNode):c:d},T=function(a,b){return U(a,b,"rgb(0, 0, 0)")},ja=function(){for(var a=
G(document,"iframe","blogger-iframe-colorize",void 0),b=0;b<a.length;b++){var c=a[b],d=F(document,c.id+"-src"),e=d.href;if(!(new O(e)).W("skin")){var g=T("color",c),k=T("backgroundColor",c),t=U("fontFamily",c,"serif");d.href="https://www.blogger.com/unvisited-link-"+(new Date).valueOf();var ia=T("color",d);d=d.href=e;e=encodeURIComponent;g=(new H(void 0)).serialize({color:g,backgroundColor:k,unvisitedLinkColor:ia,fontFamily:t});e=d+("#"+e(g))}c.src=e}};var ka=!E&&!(z("Safari")&&!((z("Chrome")||z("CriOS"))&&!z("Edge")||z("Coast")||z("Opera")||z("Edge")||z("Edg/")||z("OPR")||z("Firefox")||z("FxiOS")||z("Silk")||z("Android")));var V=-1;var W=function(){V=Math.floor(1E7*Math.random());for(var a=G(document,"iframe","blogger-comment-from-post",void 0),b=0;b<a.length;b++){var c=F(document,a[b].id+"-src"),d=new O(c.href);d.ba("blogspotRpcToken",V);c.href=d.toString()}ja();a=function(e){if(n(e.data)&&0==e.data.indexOf("set-comment-editor-height")){var g=document.getElementById("comment-editor");g.height=e.data.substring(26);if(ka&&g.dataset)g.dataset.resized=!0;else{if(/-[a-z]/.test("resized"))throw Error("");g.setAttribute("data-"+"resized".replace(/([A-Z])/g,
"-$1").toLowerCase(),!0)}}};window.addEventListener?window.addEventListener("message",a,!1):window.attachEvent&&window.attachEvent("onmessage",a)},X=["BLOG_CMT_createIframe"],Y=m;X[0]in Y||"undefined"==typeof Y.execScript||Y.execScript("var "+X[0]);for(var Z;X.length&&(Z=X.shift());)X.length||void 0===W?Y=Y[Z]&&Y[Z]!==Object.prototype[Z]?Y[Z]:Y[Z]={}:Y[Z]=W;}).call(this);
//]]>
</script>
