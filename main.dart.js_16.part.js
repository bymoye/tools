((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_16",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aIi(d){var x,w,v,u,t="0123456789abcdef",s=d.length,r=new Uint8Array(s*2)
for(x=0,w=0;x<s;++x){v=d[x]
u=w+1
r[w]=t.charCodeAt(v>>>4&15)
w=u+1
r[u]=t.charCodeAt(v&15)}return A.nC(r,0,null)},
kD:function kD(d){this.a=d},
a5t:function a5t(){this.a=null},
zm:function zm(){},
MS:function MS(){},
lF:function lF(){},
Xu:function Xu(){},
Dg:function Dg(d,e){this.a=d
this.b=e},
SD:function SD(d,e){this.a=d
this.b=e},
eH:function eH(d,e,f){this.c=d
this.a=e
this.b=f},
Dl(d){var x=d.length
if(x<16)throw A.f(A.azv("buffer too small: need 16: length="+x))
x=$.aKY()
return x[d[0]]+x[d[1]]+x[d[2]]+x[d[3]]+"-"+x[d[4]]+x[d[5]]+"-"+x[d[6]]+x[d[7]]+"-"+x[d[8]]+x[d[9]]+"-"+x[d[10]]+x[d[11]]+x[d[12]]+x[d[13]]+x[d[14]]+x[d[15]]},
aGJ(d,e,f,g){var x
if(e==="00000000-0000-0000-0000-000000000000")return!0
if(e.length!==36)return!1
switch(g.a){case 1:x=A.cI("^[0-9a-f]{8}-[0-9a-f]{4}-[0-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",!1,!0,!1)
return x.b.test(e.toLowerCase())
case 0:x=A.cI("^[0-9a-f]{8}-[0-9a-f]{4}-[0-8][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$",!1,!0,!1)
return x.b.test(e.toLowerCase())
default:throw A.f(A.cU("`"+g.k(0)+"` is an invalid ValidationMode."))}},
aGI(d,e,f){var x=null
if(!B.aGJ(x,d,!1,f)){if(f!==D.GG)if(B.aGJ(x,d,!1,D.GG))throw A.f(A.c_("The provided UUID is not RFC4122 compliant. It seems you might be using a Microsoft GUID. Try setting `validationMode = ValidationMode.nonStrict`",d,x))
throw A.f(A.c_("The provided UUID is invalid.",d,x))}}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[13],B)
D=c[26]
B.kD.prototype={
j(d,e){var x,w,v,u,t
if(e==null)return!1
if(e instanceof B.kD){x=this.a
w=e.a
v=x.length
if(v!==w.length)return!1
for(u=0,t=0;t<v;++t)u|=x[t]^w[t]
return u===0}return!1},
gA(d){return A.bO(this.a)},
k(d){return B.aIi(this.a)}}
B.a5t.prototype={
D(d,e){if(this.a!=null)throw A.f(A.au("add may only be called once."))
this.a=e},
bk(){if(this.a==null)throw A.f(A.au("add must be called once."))}}
B.zm.prototype={
dN(d){var x,w=new B.a5t(),v=this.i7(w)
v.D(0,d)
v.bk()
x=w.a
x.toString
return x}}
B.MS.prototype={
D(d,e){var x=this
if(x.f)throw A.f(A.au("Hash.add() called after close()."))
x.d=x.d+J.cf(e)
x.e.S(0,e)
x.OE()},
bk(){var x,w=this
if(w.f)return
w.f=!0
w.a6l()
w.OE()
x=w.a
x.D(0,new B.kD(w.a48()))
x.bk()},
a48(){var x,w,v,u,t,s,r
if(C.nu===$.dz())return J.rd(C.a_q.gcc(this.gGn()))
x=this.gGn()
w=x.byteLength
v=new Uint8Array(w)
u=J.ja(C.v.gcc(v))
for(w=x.length,t=u.$flags|0,s=0;s<w;++s){r=x[s]
t&2&&A.X(u,11)
u.setUint32(s*4,r,!1)}return v},
OE(){var x,w,v,u,t,s=this.e,r=J.ja(C.v.gcc(s.a)),q=this.c,p=C.e.dz(s.b,q.byteLength)
for(x=q.length,w=q.$flags|0,v=0;v<p;++v){for(u=0;u<x;++u){t=r.getUint32(v*q.byteLength+u*4,!1)
w&2&&A.X(q)
q[u]=t}this.Xy(q)}s.Ii(s,0,p*q.byteLength)},
a6l(){var x,w,v,u,t,s,r,q=this,p=q.e
p.EL(128)
x=q.d+1+8
w=q.c.byteLength
for(w=((x+w-1&-w)>>>0)-x,v=0;v<w;++v)p.EL(0)
w=q.d
if(w>1125899906842623)throw A.f(A.bG("Hashing is unsupported for messages with more than 2^53 bits."))
u=w*8
t=p.b
p.S(0,new Uint8Array(8))
s=J.ja(C.v.gcc(p.a))
r=C.e.cA(u,4294967296)
s.$flags&2&&A.X(s,11)
s.setUint32(t,r,!1)
s.setUint32(t+4,u>>>0,!1)}}
B.lF.prototype={
gF(d){return this.b},
h(d,e){if(e>=this.b)throw A.f(A.N3(e,this,null,null,null))
return this.a[e]},
n(d,e,f){var x
if(e>=this.b)throw A.f(A.N3(e,this,null,null,null))
x=this.a
x.$flags&2&&A.X(x)
x[e]=f},
sF(d,e){var x,w,v,u,t=this,s=t.b
if(e<s)for(x=t.a,w=x.$flags|0,v=e;v<s;++v){w&2&&A.X(x)
x[v]=0}else{s=t.a.length
if(e>s){if(s===0)u=new Uint8Array(e)
else u=t.y7(e)
C.v.cF(u,0,t.b,t.a)
t.a=u}}t.b=e},
EL(d){var x,w=this,v=w.b
if(v===w.a.length)w.Rj(v)
v=w.a
x=w.b++
v.$flags&2&&A.X(v)
v[x]=d},
D(d,e){var x,w=this,v=w.b
if(v===w.a.length)w.Rj(v)
v=w.a
x=w.b++
v.$flags&2&&A.X(v)
v[x]=e},
S(d,e){A.cQ(0,"start")
this.ah2(e,0,null)},
ah2(d,e,f){var x,w,v
if(y.a.b(d))f=J.cf(d)
if(f!=null){this.ah4(this.b,d,e,f)
return}for(x=J.az(d),w=0;x.t();){v=x.gI()
if(w>=e)this.EL(v);++w}if(w<e)throw A.f(A.au("Too few elements"))},
ah4(d,e,f,g){var x,w,v,u,t=this
if(y.a.b(e)){x=J.b8(e)
if(f>x.gF(e)||g>x.gF(e))throw A.f(A.au("Too few elements"))}w=g-f
v=t.b+w
t.ah3(v)
x=t.a
u=d+w
C.v.cb(x,u,t.b+w,x,d)
C.v.cb(t.a,d,u,e,f)
t.b=v},
iC(d,e,f){var x,w,v=this,u=v.b
if(e>u)throw A.f(A.c0(e,0,u,null,null))
x=v.a
if(u<x.length){C.v.cb(x,e+1,u+1,x,e)
u=v.a
u.$flags&2&&A.X(u)
u[e]=f;++v.b
return}w=v.y7(null)
C.v.cF(w,0,e,v.a)
C.v.cb(w,e+1,v.b+1,v.a,e)
w.$flags&2&&A.X(w)
w[e]=f;++v.b
v.a=w},
ah3(d){var x,w=this
if(d<=w.a.length)return
x=w.y7(d)
C.v.cF(x,0,w.b,w.a)
w.a=x},
y7(d){var x=this.a.length*2
if(d!=null&&x<d)x=d
else if(x<8)x=8
return new Uint8Array(x)},
Rj(d){var x=this.y7(null)
C.v.cF(x,0,d,this.a)
this.a=x},
cb(d,e,f,g,h){var x=this.b
if(f>x)throw A.f(A.c0(f,0,x,null,null))
x=this.a
if(A.k(this).i("lF<lF.E>").b(g))C.v.cb(x,e,f,g.a,h)
else C.v.cb(x,e,f,g,h)},
cF(d,e,f,g){return this.cb(0,e,f,g,0)}}
B.Xu.prototype={}
B.Dg.prototype={}
B.SD.prototype={
G(){return"ValidationMode."+this.b}}
B.eH.prototype={
G(){return"Namespace."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.y,[B.kD,B.a5t,B.MS])
w(B.zm,A.bC)
w(B.lF,A.aK)
w(B.Xu,B.lF)
w(B.Dg,B.Xu)
x(A.lV,[B.SD,B.eH])})()
A.h2(b.typeUniverse,JSON.parse('{"zm":{"bC":["G<j>","kD"]},"lF":{"aK":["1"],"G":["1"],"as":["1"],"t":["1"]},"Xu":{"lF":["j"],"aK":["j"],"G":["j"],"as":["j"],"t":["j"]},"Dg":{"lF":["j"],"aK":["j"],"G":["j"],"as":["j"],"t":["j"],"aK.E":"j","t.E":"j","lF.E":"j"}}'))
var y={a:A.a_("G<@>")};(function constants(){D.a_k=new B.eH("00000000-0000-0000-0000-000000000000",10,"nil")
D.dx=new A.h(0,3)
D.FZ=new A.es(null,10,null,null)
D.jx=new A.l(!0,C.B1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.GG=new B.SD(0,"nonStrict")
D.GH=new B.SD(1,"strictRFC4122")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"b0x","aKY",()=>{var w,v=J.tx(256,A.a_("i"))
for(w=0;w<256;++w)v[w]=C.d.dK(C.e.jr(w,16),2,"0")
return v})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_16",e:"endPart",h:b})})($__dart_deferred_initializers__,"rlmK8+TQBjbUlN5+es7/XyiX71U=");