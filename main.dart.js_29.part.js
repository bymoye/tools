((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_29",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
aSB(d){var x,w,v,u,t="0123456789abcdef",s=d.length,r=new Uint8Array(s*2)
for(x=0,w=0;x<s;++x){v=d[x]
u=w+1
r[w]=t.charCodeAt(v>>>4&15)
w=u+1
r[u]=t.charCodeAt(v&15)}return A.l2(r,0,null)},
lF:function lF(d){this.a=d},
aaG:function aaG(){this.a=null},
BA:function BA(){},
PR:function PR(){},
mL:function mL(){},
a0B:function a0B(){},
FF:function FF(d,e){this.a=d
this.b=e},
Wn:function Wn(d,e){this.a=d
this.b=e},
ff:function ff(d,e,f){this.c=d
this.a=e
this.b=f},
FK(d){var x=d.length
if(x<16)throw A.f(A.aJc("buffer too small: need 16: length="+x))
x=$.aVr()
return x[d[0]]+x[d[1]]+x[d[2]]+x[d[3]]+"-"+x[d[4]]+x[d[5]]+"-"+x[d[6]]+x[d[7]]+"-"+x[d[8]]+x[d[9]]+"-"+x[d[10]]+x[d[11]]+x[d[12]]+x[d[13]]+x[d[14]]+x[d[15]]},
aQZ(d,e,f,g){var x
if(e==="00000000-0000-0000-0000-000000000000")return!0
if(e.length!==36)return!1
switch(g.a){case 1:x=A.d4("^[0-9a-f]{8}-[0-9a-f]{4}-[0-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",!1,!0,!1)
return x.b.test(e.toLowerCase())
case 0:x=A.d4("^[0-9a-f]{8}-[0-9a-f]{4}-[0-8][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$",!1,!0,!1)
return x.b.test(e.toLowerCase())
default:throw A.f(A.cJ("`"+g.k(0)+"` is an invalid ValidationMode."))}},
aQY(d,e,f){var x=null
if(!B.aQZ(x,d,!1,f)){if(f!==D.Io)if(B.aQZ(x,d,!1,D.Io))throw A.f(A.co("The provided UUID is not RFC4122 compliant. It seems you might be using a Microsoft GUID. Try setting `validationMode = ValidationMode.nonStrict`",d,x))
throw A.f(A.co("The provided UUID is invalid.",d,x))}}},D
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[18],B)
D=c[46]
B.lF.prototype={
j(d,e){var x,w,v,u,t
if(e==null)return!1
if(e instanceof B.lF){x=this.a
w=e.a
v=x.length
if(v!==w.length)return!1
for(u=0,t=0;t<v;++t)u|=x[t]^w[t]
return u===0}return!1},
gC(d){return A.bW(this.a)},
k(d){return B.aSB(this.a)}}
B.aaG.prototype={
D(d,e){if(this.a!=null)throw A.f(A.az("add may only be called once."))
this.a=e},
br(){if(this.a==null)throw A.f(A.az("add must be called once."))}}
B.BA.prototype={
e8(d){var x,w=new B.aaG(),v=this.iL(w)
v.D(0,d)
v.br()
x=w.a
x.toString
return x}}
B.PR.prototype={
D(d,e){var x=this
if(x.f)throw A.f(A.az("Hash.add() called after close()."))
x.d=x.d+J.bO(e)
x.e.P(0,e)
x.Sa()},
br(){var x,w=this
if(w.f)return
w.f=!0
w.abK()
w.Sa()
x=w.a
x.D(0,new B.lF(w.a9l()))
x.br()},
a9l(){var x,w,v,u,t,s,r
if(C.or===$.dW())return J.pP(C.a7d.gcm(this.gJi()))
x=this.gJi()
w=x.byteLength
v=new Uint8Array(w)
u=J.iu(C.t.gcm(v))
for(w=x.length,t=u.$flags|0,s=0;s<w;++s){r=x[s]
t&2&&A.a3(u,11)
u.setUint32(s*4,r,!1)}return v},
Sa(){var x,w,v,u,t,s=this.e,r=J.iu(C.t.gcm(s.a)),q=this.c,p=C.e.dJ(s.b,q.byteLength)
for(x=q.length,w=q.$flags|0,v=0;v<p;++v){for(u=0;u<x;++u){t=r.getUint32(v*q.byteLength+u*4,!1)
w&2&&A.a3(q)
q[u]=t}this.a0G(q)}s.Ls(s,0,p*q.byteLength)},
abK(){var x,w,v,u,t,s,r,q=this,p=q.e
p.Hx(128)
x=q.d+1+8
w=q.c.byteLength
for(w=((x+w-1&-w)>>>0)-x,v=0;v<w;++v)p.Hx(0)
w=q.d
if(w>1125899906842623)throw A.f(A.bS("Hashing is unsupported for messages with more than 2^53 bits."))
u=w*8
t=p.b
p.P(0,new Uint8Array(8))
s=J.iu(C.t.gcm(p.a))
r=C.e.cV(u,4294967296)
s.$flags&2&&A.a3(s,11)
s.setUint32(t,r,!1)
s.setUint32(t+4,u>>>0,!1)}}
B.mL.prototype={
gF(d){return this.b},
h(d,e){if(e>=this.b)throw A.f(A.Q8(e,this,null,null,null))
return this.a[e]},
m(d,e,f){var x
if(e>=this.b)throw A.f(A.Q8(e,this,null,null,null))
x=this.a
x.$flags&2&&A.a3(x)
x[e]=f},
sF(d,e){var x,w,v,u,t=this,s=t.b
if(e<s)for(x=t.a,w=x.$flags|0,v=e;v<s;++v){w&2&&A.a3(x)
x[v]=0}else{s=t.a.length
if(e>s){if(s===0)u=new Uint8Array(e)
else u=t.Af(e)
C.t.cS(u,0,t.b,t.a)
t.a=u}}t.b=e},
Hx(d){var x,w=this,v=w.b
if(v===w.a.length)w.V1(v)
v=w.a
x=w.b++
v.$flags&2&&A.a3(v)
v[x]=d},
D(d,e){var x,w=this,v=w.b
if(v===w.a.length)w.V1(v)
v=w.a
x=w.b++
v.$flags&2&&A.a3(v)
v[x]=e},
P(d,e){A.dc(0,"start")
this.an7(e,0,null)},
an7(d,e,f){var x,w,v
if(y.a.b(d))f=J.bO(d)
if(f!=null){this.an9(this.b,d,e,f)
return}for(x=J.b_(d),w=0;x.u();){v=x.gL()
if(w>=e)this.Hx(v);++w}if(w<e)throw A.f(A.az("Too few elements"))},
an9(d,e,f,g){var x,w,v,u,t=this
if(y.a.b(e)){x=J.bi(e)
if(f>x.gF(e)||g>x.gF(e))throw A.f(A.az("Too few elements"))}w=g-f
v=t.b+w
t.an8(v)
x=t.a
u=d+w
C.t.cs(x,u,t.b+w,x,d)
C.t.cs(t.a,d,u,e,f)
t.b=v},
j8(d,e,f){var x,w,v=this,u=v.b
if(e>u)throw A.f(A.cp(e,0,u,null,null))
x=v.a
if(u<x.length){C.t.cs(x,e+1,u+1,x,e)
u=v.a
u.$flags&2&&A.a3(u)
u[e]=f;++v.b
return}w=v.Af(null)
C.t.cS(w,0,e,v.a)
C.t.cs(w,e+1,v.b+1,v.a,e)
w.$flags&2&&A.a3(w)
w[e]=f;++v.b
v.a=w},
an8(d){var x,w=this
if(d<=w.a.length)return
x=w.Af(d)
C.t.cS(x,0,w.b,w.a)
w.a=x},
Af(d){var x=this.a.length*2
if(d!=null&&x<d)x=d
else if(x<8)x=8
return new Uint8Array(x)},
V1(d){var x=this.Af(null)
C.t.cS(x,0,d,this.a)
this.a=x},
cs(d,e,f,g,h){var x=this.b
if(f>x)throw A.f(A.cp(f,0,x,null,null))
x=this.a
if(A.l(this).i("mL<mL.E>").b(g))C.t.cs(x,e,f,g.a,h)
else C.t.cs(x,e,f,g,h)},
cS(d,e,f,g){return this.cs(0,e,f,g,0)}}
B.a0B.prototype={}
B.FF.prototype={}
B.Wn.prototype={
G(){return"ValidationMode."+this.b}}
B.ff.prototype={
G(){return"Namespace."+this.b}}
var z=a.updateTypes([]);(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.v,[B.lF,B.aaG,B.PR])
w(B.BA,A.bU)
w(B.mL,A.aS)
w(B.a0B,B.mL)
w(B.FF,B.a0B)
x(A.ip,[B.Wn,B.ff])})()
A.el(b.typeUniverse,JSON.parse('{"BA":{"bU":["R<k>","lF"]},"mL":{"aS":["1"],"R":["1"],"aC":["1"],"z":["1"]},"a0B":{"mL":["k"],"aS":["k"],"R":["k"],"aC":["k"],"z":["k"]},"FF":{"mL":["k"],"aS":["k"],"R":["k"],"aC":["k"],"z":["k"],"aS.E":"k","z.E":"k","mL.E":"k"}}'))
var y={a:A.Z("R<@>")};(function constants(){D.a77=new B.ff("00000000-0000-0000-0000-000000000000",10,"nil")
D.k8=new A.o(!0,C.b5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Io=new B.Wn(0,"nonStrict")
D.Ip=new B.Wn(1,"strictRFC4122")})();(function lazyInitializers(){var x=a.lazyFinal
x($,"bcp","aVr",()=>{var w,v=J.BZ(256,A.Z("j"))
for(w=0;w<256;++w)v[w]=C.d.dP(C.e.iz(w,16),2,"0")
return v})})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_29",e:"endPart",h:b})})($__dart_deferred_initializers__,"wO3qFzCt7jIHSbf9SDc4K4eRMYk=");