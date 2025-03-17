((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_27",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aRH(d){var x,w,v,u,t="0123456789abcdef",s=d.length,r=new Uint8Array(s*2)
for(x=0,w=0;x<s;++x){v=d[x]
u=w+1
r[w]=t.charCodeAt(v>>>4&15)
w=u+1
r[u]=t.charCodeAt(v&15)}return A.kX(r,0,null)},
lz:function lz(d){this.a=d},
aad:function aad(){this.a=null},
Bt:function Bt(){},
PA:function PA(){},
mF:function mF(){},
a09:function a09(){},
Fx:function Fx(d,e){this.a=d
this.b=e},
W_:function W_(d,e){this.a=d
this.b=e},
fb:function fb(d,e,f){this.c=d
this.a=e
this.b=f},
FC(d){var x=d.length
if(x<16)throw A.f(A.aIl("buffer too small: need 16: length="+x))
x=$.aUx()
return x[d[0]]+x[d[1]]+x[d[2]]+x[d[3]]+"-"+x[d[4]]+x[d[5]]+"-"+x[d[6]]+x[d[7]]+"-"+x[d[8]]+x[d[9]]+"-"+x[d[10]]+x[d[11]]+x[d[12]]+x[d[13]]+x[d[14]]+x[d[15]]},
aQ6(d,e,f,g){var x
if(e==="00000000-0000-0000-0000-000000000000")return!0
if(e.length!==36)return!1
switch(g.a){case 1:x=A.d9("^[0-9a-f]{8}-[0-9a-f]{4}-[0-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",!1,!0,!1)
return x.b.test(e.toLowerCase())
case 0:x=A.d9("^[0-9a-f]{8}-[0-9a-f]{4}-[0-8][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$",!1,!0,!1)
return x.b.test(e.toLowerCase())
default:throw A.f(A.cU("`"+g.k(0)+"` is an invalid ValidationMode."))}},
aQ5(d,e,f){var x=null
if(!B.aQ6(x,d,!1,f)){if(f!==D.Ih)if(B.aQ6(x,d,!1,D.Ih))throw A.f(A.cj("The provided UUID is not RFC4122 compliant. It seems you might be using a Microsoft GUID. Try setting `validationMode = ValidationMode.nonStrict`",d,x))
throw A.f(A.cj("The provided UUID is invalid.",d,x))}}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[17],B)
D=c[42]
B.lz.prototype={
j(d,e){var x,w,v,u,t
if(e==null)return!1
if(e instanceof B.lz){x=this.a
w=e.a
v=x.length
if(v!==w.length)return!1
for(u=0,t=0;t<v;++t)u|=x[t]^w[t]
return u===0}return!1},
gB(d){return A.bS(this.a)},
k(d){return B.aRH(this.a)}}
B.aad.prototype={
D(d,e){if(this.a!=null)throw A.f(A.ax("add may only be called once."))
this.a=e},
bo(){if(this.a==null)throw A.f(A.ax("add must be called once."))}}
B.Bt.prototype={
ea(d){var x,w=new B.aad(),v=this.iG(w)
v.D(0,d)
v.bo()
x=w.a
x.toString
return x}}
B.PA.prototype={
D(d,e){var x=this
if(x.f)throw A.f(A.ax("Hash.add() called after close()."))
x.d=x.d+J.ca(e)
x.e.P(0,e)
x.RV()},
bo(){var x,w=this
if(w.f)return
w.f=!0
w.abv()
w.RV()
x=w.a
x.D(0,new B.lz(w.a96()))
x.bo()},
a96(){var x,w,v,u,t,s,r
if(C.op===$.dS())return J.pG(C.a2X.gcd(this.gJa()))
x=this.gJa()
w=x.byteLength
v=new Uint8Array(w)
u=J.iq(C.r.gcd(v))
for(w=x.length,t=u.$flags|0,s=0;s<w;++s){r=x[s]
t&2&&A.a1(u,11)
u.setUint32(s*4,r,!1)}return v},
RV(){var x,w,v,u,t,s=this.e,r=J.iq(C.r.gcd(s.a)),q=this.c,p=C.e.dF(s.b,q.byteLength)
for(x=q.length,w=q.$flags|0,v=0;v<p;++v){for(u=0;u<x;++u){t=r.getUint32(v*q.byteLength+u*4,!1)
w&2&&A.a1(q)
q[u]=t}this.a0u(q)}s.Lj(s,0,p*q.byteLength)},
abv(){var x,w,v,u,t,s,r,q=this,p=q.e
p.Hr(128)
x=q.d+1+8
w=q.c.byteLength
for(w=((x+w-1&-w)>>>0)-x,v=0;v<w;++v)p.Hr(0)
w=q.d
if(w>1125899906842623)throw A.f(A.bP("Hashing is unsupported for messages with more than 2^53 bits."))
u=w*8
t=p.b
p.P(0,new Uint8Array(8))
s=J.iq(C.r.gcd(p.a))
r=C.e.cN(u,4294967296)
s.$flags&2&&A.a1(s,11)
s.setUint32(t,r,!1)
s.setUint32(t+4,u>>>0,!1)}}
B.mF.prototype={
gF(d){return this.b},
h(d,e){if(e>=this.b)throw A.f(A.PR(e,this,null,null,null))
return this.a[e]},
m(d,e,f){var x
if(e>=this.b)throw A.f(A.PR(e,this,null,null,null))
x=this.a
x.$flags&2&&A.a1(x)
x[e]=f},
sF(d,e){var x,w,v,u,t=this,s=t.b
if(e<s)for(x=t.a,w=x.$flags|0,v=e;v<s;++v){w&2&&A.a1(x)
x[v]=0}else{s=t.a.length
if(e>s){if(s===0)u=new Uint8Array(e)
else u=t.A7(e)
C.r.cQ(u,0,t.b,t.a)
t.a=u}}t.b=e},
Hr(d){var x,w=this,v=w.b
if(v===w.a.length)w.UO(v)
v=w.a
x=w.b++
v.$flags&2&&A.a1(v)
v[x]=d},
D(d,e){var x,w=this,v=w.b
if(v===w.a.length)w.UO(v)
v=w.a
x=w.b++
v.$flags&2&&A.a1(v)
v[x]=e},
P(d,e){A.d8(0,"start")
this.amK(e,0,null)},
amK(d,e,f){var x,w,v
if(y.a.b(d))f=J.ca(d)
if(f!=null){this.amM(this.b,d,e,f)
return}for(x=J.aX(d),w=0;x.q();){v=x.gL()
if(w>=e)this.Hr(v);++w}if(w<e)throw A.f(A.ax("Too few elements"))},
amM(d,e,f,g){var x,w,v,u,t=this
if(y.a.b(e)){x=J.bh(e)
if(f>x.gF(e)||g>x.gF(e))throw A.f(A.ax("Too few elements"))}w=g-f
v=t.b+w
t.amL(v)
x=t.a
u=d+w
C.r.cn(x,u,t.b+w,x,d)
C.r.cn(t.a,d,u,e,f)
t.b=v},
j4(d,e,f){var x,w,v=this,u=v.b
if(e>u)throw A.f(A.ck(e,0,u,null,null))
x=v.a
if(u<x.length){C.r.cn(x,e+1,u+1,x,e)
u=v.a
u.$flags&2&&A.a1(u)
u[e]=f;++v.b
return}w=v.A7(null)
C.r.cQ(w,0,e,v.a)
C.r.cn(w,e+1,v.b+1,v.a,e)
w.$flags&2&&A.a1(w)
w[e]=f;++v.b
v.a=w},
amL(d){var x,w=this
if(d<=w.a.length)return
x=w.A7(d)
C.r.cQ(x,0,w.b,w.a)
w.a=x},
A7(d){var x=this.a.length*2
if(d!=null&&x<d)x=d
else if(x<8)x=8
return new Uint8Array(x)},
UO(d){var x=this.A7(null)
C.r.cQ(x,0,d,this.a)
this.a=x},
cn(d,e,f,g,h){var x=this.b
if(f>x)throw A.f(A.ck(f,0,x,null,null))
x=this.a
if(A.l(this).i("mF<mF.E>").b(g))C.r.cn(x,e,f,g.a,h)
else C.r.cn(x,e,f,g,h)},
cQ(d,e,f,g){return this.cn(0,e,f,g,0)}}
B.a09.prototype={}
B.Fx.prototype={}
B.W_.prototype={
G(){return"ValidationMode."+this.b}}
B.fb.prototype={
G(){return"Namespace."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.u,[B.lz,B.aad,B.PA])
w(B.Bt,A.bQ)
w(B.mF,A.aP)
w(B.a09,B.mF)
w(B.Fx,B.a09)
x(A.ik,[B.W_,B.fb])})()
A.eK(b.typeUniverse,JSON.parse('{"Bt":{"bQ":["Q<k>","lz"]},"mF":{"aP":["1"],"Q":["1"],"aB":["1"],"y":["1"]},"a09":{"mF":["k"],"aP":["k"],"Q":["k"],"aB":["k"],"y":["k"]},"Fx":{"mF":["k"],"aP":["k"],"Q":["k"],"aB":["k"],"y":["k"],"aP.E":"k","y.E":"k","mF.E":"k"}}'))
var y={a:A.Z("Q<@>")};(function constants(){D.a2R=new B.fb("00000000-0000-0000-0000-000000000000",10,"nil")
D.Hn=new A.e2(null,10,null,null)
D.k4=new A.n(!0,C.b_,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Ih=new B.W_(0,"nonStrict")
D.Ii=new B.W_(1,"strictRFC4122")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bbo","aUx",()=>{var w,v=J.BR(256,A.Z("j"))
for(w=0;w<256;++w)v[w]=C.d.dY(C.e.jW(w,16),2,"0")
return v})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_27",e:"endPart",h:b})})($__dart_deferred_initializers__,"dj6Obv8cIeTwrXXabdmp9Rz+N9w=");