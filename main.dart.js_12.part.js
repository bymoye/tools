((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_12",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,A={
qW(d,e){var x=A.aVa(d,e)
if(x==null)throw B.f(B.c0("Could not parse BigInt",d,null))
return x},
aV6(d,e){var x,w,v=$.hh(),u=d.length,t=4-u%4
if(t===4)t=0
for(x=0,w=0;w<u;++w){x=x*10+d.charCodeAt(w)-48;++t
if(t===4){v=v.ac(0,$.aD7()).a0(0,A.qV(x))
x=0
t=0}}if(e)return v.kg(0)
return v},
aBP(d){if(48<=d&&d<=57)return d-48
return(d|32)-97+10},
aV7(d,e,f){var x,w,v,u,t,s,r,q=d.length,p=q-e,o=C.c.iz(p/4),n=new Uint16Array(o),m=o-1,l=p-m*4
for(x=e,w=0,v=0;v<l;++v,x=u){u=x+1
t=A.aBP(d.charCodeAt(x))
if(t>=16)return null
w=w*16+t}s=m-1
n[m]=w
for(;x<q;s=r){for(w=0,v=0;v<4;++v,x=u){u=x+1
t=A.aBP(d.charCodeAt(x))
if(t>=16)return null
w=w*16+t}r=s-1
n[s]=w}if(o===1&&n[0]===0)return $.hh()
q=A.eS(o,n)
return new A.dm(q===0?!1:f,n,q)},
aV8(d,e,f){var x,w,v,u=$.hh(),t=A.qV(e)
for(x=d.length,w=0;w<x;++w){v=A.aBP(d.charCodeAt(w))
if(v>=e)return null
u=u.ac(0,t).a0(0,A.qV(v))}if(f)return u.kg(0)
return u},
aVa(d,e){var x,w,v,u,t,s,r=null
if(d==="")return r
x=$.aMn().oC(d)
if(x==null)return r
w=x.b
v=w[1]==="-"
u=w[4]
t=w[3]
s=w[5]
if(e<2||e>36)throw B.f(B.ch(e,2,36,"radix",r))
if(e===10&&u!=null)return A.aV6(u,v)
if(e===16)w=u!=null||s!=null
else w=!1
if(w){if(u==null){s.toString
w=s}else w=u
return A.aV7(w,0,v)}w=u==null?s:u
if(w==null){t.toString
w=t}return A.aV8(w,e,v)},
eS(d,e){while(!0){if(!(d>0&&e[d-1]===0))break;--d}return d},
aBO(d,e,f,g){var x,w=new Uint16Array(g),v=f-e
for(x=0;x<v;++x)w[x]=d[e+x]
return w},
aBK(d){var x
if(d===0)return $.hh()
if(d===1)return $.me()
if(d===2)return $.aMo()
if(Math.abs(d)<4294967296)return A.qV(C.e.ai(d))
x=A.aV3(d)
return x},
qV(d){var x,w,v,u,t=d<0
if(t){if(d===-9223372036854776e3){x=new Uint16Array(4)
x[3]=32768
w=A.eS(4,x)
return new A.dm(w!==0,x,w)}d=-d}if(d<65536){x=new Uint16Array(1)
x[0]=d
w=A.eS(1,x)
return new A.dm(w===0?!1:t,x,w)}if(d<=4294967295){x=new Uint16Array(2)
x[0]=d&65535
x[1]=C.e.f_(d,16)
w=A.eS(2,x)
return new A.dm(w===0?!1:t,x,w)}w=C.e.cM(C.e.gTz(d)-1,16)+1
x=new Uint16Array(w)
for(v=0;d!==0;v=u){u=v+1
x[v]=d&65535
d=C.e.cM(d,65536)}w=A.eS(w,x)
return new A.dm(w===0?!1:t,x,w)},
aV3(d){var x,w,v,u,t,s,r,q
if(isNaN(d)||d==1/0||d==-1/0)throw B.f(B.ck("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.hh()
x=$.aMm()
for(w=x.$flags|0,v=0;v<8;++v){w&2&&B.a7(x)
x[v]=0}w=J.mf(C.G.gcc(x))
w.$flags&2&&B.a7(w,13)
w.setFloat64(0,d,!0)
w=x[7]
u=x[6]
t=(w<<4>>>0)+(u>>>4)-1075
s=new Uint16Array(4)
s[0]=(x[1]<<8>>>0)+x[0]
s[1]=(x[3]<<8>>>0)+x[2]
s[2]=(x[5]<<8>>>0)+x[4]
s[3]=u&15|16
r=new A.dm(!1,s,4)
if(t<0)q=r.KG(0,-t)
else q=t>0?r.iR(0,t):r
return q},
aBQ(d,e,f,g){var x,w,v
if(e===0)return 0
if(f===0&&g===d)return e
for(x=e-1,w=g.$flags|0;x>=0;--x){v=d[x]
w&2&&B.a7(g)
g[x+f]=v}for(x=f-1;x>=0;--x){w&2&&B.a7(g)
g[x]=0}return e+f},
aIr(d,e,f,g){var x,w,v,u,t,s=C.e.cM(f,16),r=C.e.bc(f,16),q=16-r,p=C.e.iR(1,q)-1
for(x=e-1,w=g.$flags|0,v=0;x>=0;--x){u=d[x]
t=C.e.yv(u,q)
w&2&&B.a7(g)
g[x+s+1]=(t|v)>>>0
v=C.e.iR(u&p,r)}w&2&&B.a7(g)
g[s]=v},
aIm(d,e,f,g){var x,w,v,u,t=C.e.cM(f,16)
if(C.e.bc(f,16)===0)return A.aBQ(d,e,t,g)
x=e+t+1
A.aIr(d,e,f,g)
for(w=g.$flags|0,v=t;--v,v>=0;){w&2&&B.a7(g)
g[v]=0}u=x-1
return g[u]===0?u:x},
aV9(d,e,f,g){var x,w,v,u,t=C.e.cM(f,16),s=C.e.bc(f,16),r=16-s,q=C.e.iR(1,s)-1,p=C.e.yv(d[t],s),o=e-t-1
for(x=g.$flags|0,w=0;w<o;++w){v=d[w+t+1]
u=C.e.iR(v&q,r)
x&2&&B.a7(g)
g[w]=(u|p)>>>0
p=C.e.yv(v,s)}x&2&&B.a7(g)
g[o]=p},
aoJ(d,e,f,g){var x,w=e-g
if(w===0)for(x=e-1;x>=0;--x){w=d[x]-f[x]
if(w!==0)return w}return w},
aV4(d,e,f,g,h){var x,w,v
for(x=h.$flags|0,w=0,v=0;v<g;++v){w+=d[v]+f[v]
x&2&&B.a7(h)
h[v]=w&65535
w=w>>>16}for(v=g;v<e;++v){w+=d[v]
x&2&&B.a7(h)
h[v]=w&65535
w=w>>>16}x&2&&B.a7(h)
h[e]=w},
VP(d,e,f,g,h){var x,w,v
for(x=h.$flags|0,w=0,v=0;v<g;++v){w+=d[v]-f[v]
x&2&&B.a7(h)
h[v]=w&65535
w=0-(C.e.f_(w,16)&1)}for(v=g;v<e;++v){w+=d[v]
x&2&&B.a7(h)
h[v]=w&65535
w=0-(C.e.f_(w,16)&1)}},
aIs(d,e,f,g,h,i){var x,w,v,u,t,s
if(d===0)return
for(x=g.$flags|0,w=0;--i,i>=0;h=t,f=v){v=f+1
u=d*e[f]+g[h]+w
t=h+1
x&2&&B.a7(g)
g[h]=u&65535
w=C.e.cM(u,65536)}for(;w!==0;h=t){s=g[h]+w
t=h+1
x&2&&B.a7(g)
g[h]=s&65535
w=C.e.cM(s,65536)}},
aV5(d,e,f){var x,w=e[f]
if(w===d)return 65535
x=C.e.h_((w<<16|e[f-1])>>>0,d)
if(x>65535)return 65535
return x},
dm:function dm(d,e,f){this.a=d
this.b=e
this.c=f},
aoK:function aoK(){},
aoL:function aoL(){},
aJG(d){var x,w,v,u,t="0123456789abcdef",s=d.length,r=new Uint8Array(s*2)
for(x=0,w=0;x<s;++x){v=d[x]
u=w+1
r[w]=t.charCodeAt(v>>>4&15)
w=u+1
r[u]=t.charCodeAt(v&15)}return B.ly(r,0,null)},
p_:function p_(d){this.a=d},
a6r:function a6r(){this.a=null},
N4:function N4(){},
abt:function abt(){},
aVR(d){var x=new Uint32Array(B.m7(B.a([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],y.t))),w=new Uint32Array(64),v=new Uint8Array(0)
return new A.a0d(x,w,d,new Uint32Array(16),new A.Dq(v,0))},
a0c:function a0c(){},
avf:function avf(){},
a0d:function a0d(d,e,f,g,h){var _=this
_.w=d
_.x=e
_.a=f
_.c=g
_.d=0
_.e=h
_.f=!1},
aIX(d){var x=d.m_(!1)
return new A.a13(d,new B.c3(x,C.c2,C.aO),$.af())},
aTF(d,e){return B.azu(e)},
a13:function a13(d,e,f){var _=this
_.ax=d
_.a=e
_.J$=0
_.L$=f
_.aJ$=_.a6$=0},
a04:function a04(d,e){var _=this
_.w=d
_.a=e
_.b=!0
_.c=!1
_.e=_.d=0
_.f=null
_.r=!1},
Cc:function Cc(d,e,f){this.c=d
this.f=e
this.a=f},
Gt:function Gt(d){var _=this
_.d=$
_.e=null
_.f=!1
_.w=_.r=$
_.x=d
_.c=_.a=null},
av4:function av4(d,e){this.a=d
this.b=e},
av3:function av3(d,e){this.a=d
this.b=e},
av5:function av5(d){this.a=d},
a9y:function a9y(d,e){this.a=d
this.b=!1
this.c=e},
a9z:function a9z(){},
a9B:function a9B(d){this.a=d},
a9A:function a9A(d){this.a=d},
apH:function apH(){},
aOk(d){var x,w,v,u=y.N,t=B.q(u,y.a)
for(x=y.P.a(C.cu.iD(d)).gfl(),x=x.gaa(x),w=y.j;x.u();){v=x.gN()
t.n(0,v.a,J.xg(w.a(v.b),u))}return new B.bP(t,y.b)},
a47:function a47(){},
aZm(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1,a2,a3){var x,w,v,u
a2=C.dF.alH(d,e,f,g,h,i,j,l,m,n,o,q,r,s,t,a0,a1,a3)
x=a2.w
if(x==null)x=C.q
w=a2.x
v=A.aWD(new A.e2(x,w==null?C.cz:w),new B.b5(p,B.i(p).h("b5<1>")))
x=p.i(0,v)
x.toString
u=A.x3(new A.abn(new A.abo(k,v),x))
$.aKN.D(0,u)
u.c2(new A.ays(u),y.y)
return a2.alN(k+"_"+v.k(0),B.a([k],y.s))},
x3(d){return A.aZJ(d)},
aZJ(d){var x=0,w=B.K(y.H),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$x3=B.F(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:l=d.a
k=l.a
j=l.b
i=k+"_"+j.k(0)
h=k+"-"+j.Yk()
j=d.b
s=j.a
if($.aCq.p(0,i)){x=1
break}else $.aCq.D(0,i)
u=4
r=null
k=$.aNM()
n=$.aDT
if(n==null){k=k.xO()
$.aDT=k}else k=n
x=7
return B.M(y.M.b(k)?k:B.f9(k,y.v),$async$x3)
case 7:q=f
p=A.aX7(l,q)
if(p!=null)r=$.xe().jo(p)
l=r
k=y.x
x=8
return B.M(y.I.b(l)?l:B.f9(l,k),$async$x3)
case 8:if(f!=null){l=A.x2(i,r)
v=l
x=1
break}r=B.c8(null,k)
x=9
return B.M(r,$async$x3)
case 9:if(f!=null){l=A.x2(i,r)
v=l
x=1
break}$.aLi()
r=A.axu(i,j)
x=10
return B.M(r,$async$x3)
case 10:if(f!=null){l=A.x2(i,r)
v=l
x=1
break}u=2
x=6
break
case 4:u=3
g=t
o=B.ad(g)
$.aCq.C(0,i)
B.x6("Error: google_fonts was unable to load font "+B.l(h)+" because the following exception occurred:\n"+B.l(o))
B.x6("If troubleshooting doesn't solve the problem, please file an issue at https://github.com/material-foundation/flutter-packages/issues/new/choose.\n")
throw g
x=6
break
case 3:x=2
break
case 6:case 1:return B.I(v,w)
case 2:return B.H(t,w)}})
return B.J($async$x3,w)},
x2(d,e){var x=0,w=B.K(y.H),v,u,t
var $async$x2=B.F(function(f,g){if(f===1)return B.H(g,w)
while(true)switch(x){case 0:if(e==null){x=1
break}x=3
return B.M(e,$async$x2)
case 3:u=g
if(u==null){x=1
break}t=new A.a9y(d,B.a([],y.m))
t.ajU(B.c8(u,y.Y))
x=4
return B.M(t.As(),$async$x2)
case 4:case 1:return B.I(v,w)}})
return B.J($async$x2,w)},
aWD(d,e){var x,w,v,u,t=B.b2("bestMatch")
for(x=e.a,x=B.hV(x,x.r),w=null;x.u();){v=x.d
u=A.aWK(d,v)
if(w==null||u<w){t.b=v
w=u}}return t.ba()},
axu(d,e){return A.aXl(d,e)},
aXl(d,e){var x=0,w=B.K(y.Y),v,u=2,t,s,r,q,p,o,n,m,l
var $async$axu=B.F(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:n=e.a
m=B.aBD("https://fonts.gstatic.com/s/a/"+n+".ttf")
if(m==null)throw B.f(B.bn("Invalid fontUrl: "+e.gBO()))
s=null
u=4
x=7
return B.M($.aNQ().tQ("GET",m,null),$async$axu)
case 7:s=g
u=2
x=6
break
case 4:u=3
l=t
r=B.ad(l)
n=B.bn("Failed to load font with url "+e.gBO()+": "+B.l(r))
throw B.f(n)
x=6
break
case 3:x=2
break
case 6:if(s.b===200){p=s.w
o=A.aJG(D.ID.ho(p).a)
if(!(e.b===p.length&&n===o))throw B.f(B.bn("File from "+e.gBO()+" did not match expected length and checksum."))
s.toString
B.c8(null,y.H)
v=J.xf(C.G.gcc(s.w),0,null)
x=1
break}else throw B.f(B.bn("Failed to load font with url: "+e.gBO()))
case 1:return B.I(v,w)
case 2:return B.H(t,w)}})
return B.J($async$axu,w)},
aWK(d,e){var x
if(d.j(0,e))return 0
x=Math.abs(d.a.a-e.a.a)
return d.b!==e.b?x+2:x},
aX7(d,e){var x,w,v,u,t,s,r,q
if(e==null)return null
x=d.a+"-"+d.b.Yk()
for(w=e.gbp(),w=w.gaa(w),v=y.s;w.u();)for(u=J.aM(w.gN());u.u();){t=u.gN()
for(s=B.a([".ttf",".otf"],v),r=C.d.gamW(t),s=C.b.gaa(s),r=new B.nJ(s,r),q=t.length;r.u();)if(C.d.qJ(C.d.a3(t,0,q-s.gN().length),x))return t}return null},
ays:function ays(d){this.a=d},
abn:function abn(d,e){this.a=d
this.b=e},
eI:function eI(d,e){this.a=d
this.b=e},
abo:function abo(d,e){this.a=d
this.b=e},
e2:function e2(d,e){this.a=d
this.b=e},
aJy(d){var x,w,v,u,t,s=y.N,r=B.q(s,s),q=d.getAllResponseHeaders().split("\r\n")
for(s=q.length,x=0;x<s;++x){w=q[x]
if(w.length===0)continue
v=C.d.ji(w,": ")
if(v===-1)continue
u=C.d.a3(w,0,v).toLowerCase()
t=C.d.dh(w,v+2)
if(r.ak(u))r.n(0,u,B.l(r.i(0,u))+", "+t)
else r.n(0,u,t)}return r},
a4K:function a4K(d){this.a=d},
a4L:function a4L(d,e,f){this.a=d
this.b=e
this.c=f},
a4M:function a4M(d,e){this.a=d
this.b=e},
SD:function SD(d,e,f,g,h,i,j,k){var _=this
_.w=d
_.a=e
_.b=f
_.c=g
_.d=h
_.e=i
_.f=j
_.r=k},
Tg:function Tg(d){this.a=d},
aUM(){return new A.lI(null)},
lI:function lI(d){this.a=d},
H4:function H4(d,e){var _=this
_.d=d
_.f=_.e=null
_.r=e
_.c=_.a=null},
awf:function awf(){},
awg:function awg(){},
awe:function awe(d){this.a=d},
awd:function awd(d,e){this.a=d
this.b=e},
vf:function vf(){},
Yc:function Yc(){},
Dq:function Dq(d,e){this.a=d
this.b=e},
Ti:function Ti(d,e){this.a=d
this.b=e},
Th:function Th(){},
ayO(d,e){var x=0,w=B.K(y.H)
var $async$ayO=B.F(function(f,g){if(f===1)return B.H(g,w)
while(true)switch(x){case 0:x=2
return B.M($.a9().gv9().Av(d,e),$async$ayO)
case 2:B.az0()
return B.I(null,w)}})
return B.J($async$ayO,w)},
ug(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return A.aZm(d,e,f,g,h,i,j,"RobotoMono",k,l,m,n,B.aB([D.LE,new A.eI("c143970b9f2e250fcf4caf9cf62f6b3b47c62efe1e162ac256338db8d0f798c3",80016),D.LG,new A.eI("93efc2bd39f8d8ee242082e7257b52e5d3a1186a8048a8d5501eba74b365a77c",79924),D.LI,new A.eI("fe25b3d13b147927ceabb850b05d171758aa325f6941ca11448fd9b3fdd00774",79716),D.LK,new A.eI("98e94e15e13718555a10299bb96017f6e50a69f47ff61899b1d9e1a86b5fac7f",78968),D.LM,new A.eI("acdfbf353c42d04ec7e1e2cf8d5eb7709dee60939030102d07f8623e0ad72973",78944),D.LO,new A.eI("77a88f0807b9af22ca1caa4c3ab778f5c2513c60fde26c1701f80cb473262294",79188),D.LQ,new A.eI("10e89cd69daf71a7c64dbcc00f694dbbff3c234f4d4aaf12709e67f4d1b0e8d7",79132),D.LF,new A.eI("938b70df0e223daf3b21075cdf2863eef241074f020dbbad099f49cde2e6dd19",84948),D.LH,new A.eI("8c19993c14f6cc7604b31efdcd983aa495c199c1e628aa3ca5561734c4b1697c",85276),D.LJ,new A.eI("f56f980d8bd43f21e09ba36ad248cc05f092484d5c2b02f23c3129fe5ba474b1",85596),D.LL,new A.eI("07884a6dc8021a2eef997774bf83e0c67f13985e3f61797ce0eaa38d672c9038",85676),D.LN,new A.eI("088f51f1cfd499a79da475a3d01f3b4f2f2649fa3f187556bde578bc88dddb32",85752),D.LP,new A.eI("2427ed57d03c2d128127429ef4de10ba21826a6992de2bb7b096ed45387876f7",85752),D.LR,new A.eI("4110df6eb9855f4b1b509dee1597dce8a7beb522ab4fc46cc317e88d76dc45d2",85932)],y.U,y.r),o,p,q,r,s,t,u,v)},
aIa(d,e,f,g){var x
if(e==="00000000-0000-0000-0000-000000000000")return!0
if(e.length!==36)return!1
switch(g.a){case 1:x=B.dt("^[0-9a-f]{8}-[0-9a-f]{4}-[0-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",!1,!0,!1)
return x.b.test(e.toLowerCase())
case 0:x=B.dt("^[0-9a-f]{8}-[0-9a-f]{4}-[0-8][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$",!1,!0,!1)
return x.b.test(e.toLowerCase())
default:throw B.f(B.bn("`"+g.k(0)+"` is an invalid ValidationMode."))}}},D,G,E,F
J=c[1]
B=c[0]
C=c[2]
A=a.updateHolder(c[7],A)
D=c[18]
G=c[10]
E=c[14]
F=c[12]
A.dm.prototype={
kg(d){var x,w,v=this,u=v.c
if(u===0)return v
x=!v.a
w=v.b
u=A.eS(u,w)
return new A.dm(u===0?!1:x,w,u)},
a7d(d){var x,w,v,u,t,s,r=this.c
if(r===0)return $.hh()
x=r+d
w=this.b
v=new Uint16Array(x)
for(u=r-1;u>=0;--u)v[u+d]=w[u]
t=this.a
s=A.eS(x,v)
return new A.dm(s===0?!1:t,v,s)},
a7j(d){var x,w,v,u,t,s,r,q=this,p=q.c
if(p===0)return $.hh()
x=p-d
if(x<=0)return q.a?$.aD8():$.hh()
w=q.b
v=new Uint16Array(x)
for(u=d;u<p;++u)v[u-d]=w[u]
t=q.a
s=A.eS(x,v)
r=new A.dm(s===0?!1:t,v,s)
if(t)for(u=0;u<d;++u)if(w[u]!==0)return r.a1(0,$.me())
return r},
iR(d,e){var x,w,v,u,t,s=this
if(e<0)throw B.f(B.ck("shift-amount must be posititve "+e,null))
x=s.c
if(x===0)return s
w=C.e.cM(e,16)
if(C.e.bc(e,16)===0)return s.a7d(w)
v=x+w+1
u=new Uint16Array(v)
A.aIr(s.b,x,e,u)
x=s.a
t=A.eS(v,u)
return new A.dm(t===0?!1:x,u,t)},
KG(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(e<0)throw B.f(B.ck("shift-amount must be posititve "+e,null))
x=o.c
if(x===0)return o
w=C.e.cM(e,16)
v=C.e.bc(e,16)
if(v===0)return o.a7j(w)
u=x-w
if(u<=0)return o.a?$.aD8():$.hh()
t=o.b
s=new Uint16Array(u)
A.aV9(t,x,e,s)
x=o.a
r=A.eS(u,s)
q=new A.dm(r===0?!1:x,s,r)
if(x){if((t[w]&C.e.iR(1,v)-1)!==0)return q.a1(0,$.me())
for(p=0;p<w;++p)if(t[p]!==0)return q.a1(0,$.me())}return q},
bM(d,e){var x,w=this.a
if(w===e.a){x=A.aoJ(this.b,this.c,e.b,e.c)
return w?0-x:x}return w?-1:1},
pG(d,e){var x,w,v,u=this,t=u.c,s=d.c
if(t<s)return d.pG(u,e)
if(t===0)return $.hh()
if(s===0)return u.a===e?u:u.kg(0)
x=t+1
w=new Uint16Array(x)
A.aV4(u.b,t,d.b,s,w)
v=A.eS(x,w)
return new A.dm(v===0?!1:e,w,v)},
kk(d,e){var x,w,v,u=this,t=u.c
if(t===0)return $.hh()
x=d.c
if(x===0)return u.a===e?u:u.kg(0)
w=new Uint16Array(t)
A.VP(u.b,t,d.b,x,w)
v=A.eS(t,w)
return new A.dm(v===0?!1:e,w,v)},
LL(d,e){var x,w,v,u,t,s=this.c,r=d.c
s=s<r?s:r
x=this.b
w=d.b
v=new Uint16Array(s)
for(u=0;u<s;++u)v[u]=x[u]&w[u]
t=A.eS(s,v)
return new A.dm(t===0?!1:e,v,t)},
LK(d,e){var x,w,v=this.c,u=this.b,t=d.b,s=new Uint16Array(v),r=d.c
if(v<r)r=v
for(x=0;x<r;++x)s[x]=u[x]&~t[x]
for(x=r;x<v;++x)s[x]=u[x]
w=A.eS(v,s)
return new A.dm(w===0?!1:e,s,w)},
LM(d,e){var x,w,v,u,t,s=this.c,r=d.c,q=s>r?s:r,p=this.b,o=d.b,n=new Uint16Array(q)
if(s<r){x=s
w=d}else{x=r
w=this}for(v=0;v<x;++v)n[v]=p[v]|o[v]
u=w.b
for(v=x;v<q;++v)n[v]=u[v]
t=A.eS(q,n)
return new A.dm(t===0?!1:e,n,t)},
JN(d,e){var x,w,v,u=this
if(u.c===0||e.c===0)return $.hh()
x=u.a
if(x===e.a){if(x){x=$.me()
return u.kk(x,!0).LM(e.kk(x,!0),!0).pG(x,!0)}return u.LL(e,!1)}if(x){w=u
v=e}else{w=e
v=u}return v.LK(w.kk($.me(),!1),!1)},
m9(d,e){var x,w,v,u=this
if(u.c===0)return e
if(e.c===0)return u
x=u.a
if(x===e.a){if(x){x=$.me()
return u.kk(x,!0).LL(e.kk(x,!0),!0).pG(x,!0)}return u.LM(e,!1)}if(x){w=u
v=e}else{w=e
v=u}x=$.me()
return w.kk(x,!0).LK(v,!0).pG(x,!0)},
a0(d,e){var x,w,v=this,u=v.c
if(u===0)return e
x=e.c
if(x===0)return v
w=v.a
if(w===e.a)return v.pG(e,w)
if(A.aoJ(v.b,u,e.b,x)>=0)return v.kk(e,w)
return e.kk(v,!w)},
a1(d,e){var x,w,v=this,u=v.c
if(u===0)return e.kg(0)
x=e.c
if(x===0)return v
w=v.a
if(w!==e.a)return v.pG(e,w)
if(A.aoJ(v.b,u,e.b,x)>=0)return v.kk(e,w)
return e.kk(v,!w)},
ac(d,e){var x,w,v,u,t,s,r,q=this.c,p=e.c
if(q===0||p===0)return $.hh()
x=q+p
w=this.b
v=e.b
u=new Uint16Array(x)
for(t=0;t<p;){A.aIs(v[t],w,0,u,t,q);++t}s=this.a!==e.a
r=A.eS(x,u)
return new A.dm(r===0?!1:s,u,r)},
Nn(d){var x,w,v,u
if(this.c<d.c)return $.hh()
this.No(d)
x=$.aBM.bm()-$.DW.bm()
w=A.aBO($.aBL.bm(),$.DW.bm(),$.aBM.bm(),x)
v=A.eS(x,w)
u=new A.dm(!1,w,v)
return this.a!==d.a&&v>0?u.kg(0):u},
agd(d){var x,w,v,u=this
if(u.c<d.c)return u
u.No(d)
x=A.aBO($.aBL.bm(),0,$.DW.bm(),$.DW.bm())
w=A.eS($.DW.bm(),x)
v=new A.dm(!1,x,w)
if($.aBN.bm()>0)v=v.KG(0,$.aBN.bm())
return u.a&&v.c>0?v.kg(0):v},
No(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h=this,g=h.c
if(g===$.aIo&&d.c===$.aIq&&h.b===$.aIn&&d.b===$.aIp)return
x=d.b
w=d.c
v=16-C.e.gTz(x[w-1])
if(v>0){u=new Uint16Array(w+5)
t=A.aIm(x,w,v,u)
s=new Uint16Array(g+5)
r=A.aIm(h.b,g,v,s)}else{s=A.aBO(h.b,0,g,g+2)
t=w
u=x
r=g}q=u[t-1]
p=r-t
o=new Uint16Array(r)
n=A.aBQ(u,t,p,o)
m=r+1
l=s.$flags|0
if(A.aoJ(s,r,o,n)>=0){l&2&&B.a7(s)
s[r]=1
A.VP(s,m,o,n,s)}else{l&2&&B.a7(s)
s[r]=0}k=new Uint16Array(t+2)
k[t]=1
A.VP(k,t+1,u,t,k)
j=r-1
for(;p>0;){i=A.aV5(q,s,j);--p
A.aIs(i,k,0,s,p,t)
if(s[j]<i){n=A.aBQ(k,t,p,o)
A.VP(s,m,o,n,s)
for(;--i,s[j]<i;)A.VP(s,m,o,n,s)}--j}$.aIn=h.b
$.aIo=g
$.aIp=x
$.aIq=w
$.aBL.b=s
$.aBM.b=m
$.DW.b=t
$.aBN.b=v},
gv(d){var x,w,v,u=new A.aoK(),t=this.c
if(t===0)return 6707
x=this.a?83585:429689
for(w=this.b,v=0;v<t;++v)x=u.$2(x,w[v])
return new A.aoL().$1(x)},
j(d,e){if(e==null)return!1
return e instanceof A.dm&&this.bM(0,e)===0},
h_(d,e){if(e.c===0)throw B.f(D.n7)
return this.Nn(e)},
ai(d){var x,w,v
for(x=this.c-1,w=this.b,v=0;x>=0;--x)v=v*65536+w[x]
return this.a?-v:v},
k(d){var x,w,v,u,t,s=this,r=s.c
if(r===0)return"0"
if(r===1){if(s.a)return C.e.k(-s.b[0])
return C.e.k(s.b[0])}x=B.a([],y.s)
r=s.a
w=r?s.kg(0):s
for(;w.c>1;){v=$.aD7()
if(v.c===0)B.V(D.n7)
u=w.agd(v).k(0)
x.push(u)
t=u.length
if(t===1)x.push("000")
if(t===2)x.push("00")
if(t===3)x.push("0")
w=w.Nn(v)}x.push(C.e.k(w.b[0]))
if(r)x.push("-")
return new B.bH(x,y.u).r8(0)},
$icn:1}
A.p_.prototype={
j(d,e){var x,w,v,u,t
if(e==null)return!1
if(e instanceof A.p_){x=this.a
w=e.a
v=x.length
if(v!==w.length)return!1
for(u=0,t=0;t<v;++t)u|=x[t]^w[t]
return u===0}return!1},
gv(d){return B.bV(this.a)},
k(d){return A.aJG(this.a)}}
A.a6r.prototype={
D(d,e){if(this.a!=null)throw B.f(B.ap("add may only be called once."))
this.a=e},
bg(){if(this.a==null)throw B.f(B.ap("add must be called once."))}}
A.N4.prototype={
ho(d){var x=new A.a6r(),w=A.aVR(x)
w.D(0,d)
w.bg()
w=x.a
w.toString
return w}}
A.abt.prototype={
D(d,e){var x=this
if(x.f)throw B.f(B.ap("Hash.add() called after close()."))
x.d=x.d+J.cE(e)
x.e.U(0,e)
x.Pr()},
bg(){var x,w=this
if(w.f)return
w.f=!0
w.a7L()
w.Pr()
x=w.a
x.D(0,new A.p_(w.a5x()))
x.bg()},
a5x(){var x,w,v,u,t,s,r
if(C.n5===$.dv())return J.rr(C.a_E.gcc(this.w))
x=this.w
w=x.byteLength
v=new Uint8Array(w)
u=J.mf(C.G.gcc(v))
for(w=x.length,t=u.$flags|0,s=0;s<w;++s){r=x[s]
t&2&&B.a7(u,11)
u.setUint32(s*4,r,!1)}return v},
Pr(){var x,w,v,u,t,s=this.e,r=J.mf(C.G.gcc(s.a)),q=this.c,p=C.e.h_(s.b,q.byteLength)
for(x=q.length,w=q.$flags|0,v=0;v<p;++v){for(u=0;u<x;++u){t=r.getUint32(v*q.byteLength+u*4,!1)
w&2&&B.a7(q)
q[u]=t}this.at6(q)}s.J8(s,0,p*q.byteLength)},
a7L(){var x,w,v,u,t,s,r,q=this,p=q.e
p.Fq(128)
x=q.d+1+8
w=q.c.byteLength
for(w=((x+w-1&-w)>>>0)-x,v=0;v<w;++v)p.Fq(0)
w=q.d
if(w>1125899906842623)throw B.f(B.c_("Hashing is unsupported for messages with more than 2^53 bits."))
u=w*8
t=p.b
p.U(0,new Uint8Array(8))
s=J.mf(C.G.gcc(p.a))
r=C.e.cM(u,4294967296)
s.$flags&2&&B.a7(s,11)
s.setUint32(t,r,!1)
s.setUint32(t+4,u>>>0,!1)}}
A.a0c.prototype={
ld(d){var x=new Uint32Array(B.m7(B.a([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],y.t))),w=new Uint32Array(64),v=new Uint8Array(0)
return new B.W2(new A.a0d(x,w,d,new Uint32Array(16),new A.Dq(v,0)))}}
A.avf.prototype={
at6(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f
for(x=this.x,w=x.$flags|0,v=0;v<16;++v){u=d[v]
w&2&&B.a7(x)
x[v]=u}for(v=16;v<64;++v){u=x[v-2]
t=x[v-7]
s=x[v-15]
r=x[v-16]
w&2&&B.a7(x)
x[v]=((((u>>>17|u<<15)^(u>>>19|u<<13)^u>>>10)>>>0)+t>>>0)+((((s>>>7|s<<25)^(s>>>18|s<<14)^s>>>3)>>>0)+r>>>0)>>>0}w=this.w
q=w[0]
p=w[1]
o=w[2]
n=w[3]
m=w[4]
l=w[5]
k=w[6]
j=w[7]
for(i=q,v=0;v<64;++v,j=k,k=l,l=m,m=g,n=o,o=p,p=i,i=f){h=(j+(((m>>>6|m<<26)^(m>>>11|m<<21)^(m>>>25|m<<7))>>>0)>>>0)+(((m&l^~m&k)>>>0)+(D.MX[v]+x[v]>>>0)>>>0)>>>0
g=n+h>>>0
f=h+((((i>>>2|i<<30)^(i>>>13|i<<19)^(i>>>22|i<<10))>>>0)+((i&p^i&o^p&o)>>>0)>>>0)>>>0}w.$flags&2&&B.a7(w)
w[0]=i+q>>>0
w[1]=p+w[1]>>>0
w[2]=o+w[2]>>>0
w[3]=n+w[3]>>>0
w[4]=m+w[4]>>>0
w[5]=l+w[5]>>>0
w[6]=k+w[6]>>>0
w[7]=j+w[7]>>>0}}
A.a0d.prototype={}
A.a13.prototype={
TF(d,e,f){return B.cK(B.a([this.ax],y.q),e,null)},
si3(d){throw B.f(B.ie(null))}}
A.a04.prototype={
AY(d){if(!this.a.gfX())return
this.a23(d)
this.w.a.toString}}
A.Cc.prototype={
al(){return new A.Gt(new B.bb(null,y.g))}}
A.Gt.prototype={
gnK(){var x,w=null
this.a.toString
x=this.e
if(x==null){x=B.mz(!0,w,!0,!0,w,w,!0)
this.e=x}return x},
gHE(){var x=this.w
x===$&&B.b()
return x},
gfX(){this.a.toString
return!0},
aP(){var x,w=this
w.be()
w.r=new A.a04(w,w)
x=B.cK(null,null,w.a.c)
x=A.aIX(x)
w.d=x
x.Y(w.gPU())
w.gnK().Y(w.gRh())},
b6(d){var x,w,v=this
v.bl(d)
x=v.a.c
if(x!==d.c){x=v.d
x===$&&B.b()
w=v.gPU()
x.H(w)
x=v.d
x.L$=$.af()
x.J$=0
x=B.cK(null,null,v.a.c)
x=A.aIX(x)
v.d=x
x.Y(w)}v.a.toString
if(v.gnK().gbU()){x=v.d
x===$&&B.b()
x=x.a.b
x=x.a===x.b}else x=!1
if(x)v.f=!1
else v.f=!0},
l(){var x,w=this
w.gnK().H(w.gRh())
x=w.e
if(x!=null)x.l()
x=w.d
x===$&&B.b()
x.L$=$.af()
x.J$=0
w.b4()},
adP(){var x,w,v=this
if(v.gnK().gbU()){x=v.d
x===$&&B.b()
x=x.a.b
w=x.a!==x.b}else w=!0
if(w===v.f)return
v.aB(new A.av4(v,w))},
ahl(){if(!this.gnK().gbU()&&$.bs.go$===C.c9){var x=this.d
x===$&&B.b()
x.mh(new B.c3(x.a.a,C.c2,C.aO))}},
ahn(d,e){var x,w=this,v=w.ahO(e)
if(v!==w.f)w.aB(new A.av3(w,v))
w.a.toString
x=w.c
x.toString
switch(B.Q(x).w.a){case 2:case 4:if(e===C.b8){x=w.x.gM()
if(x!=null)x.iy(d.glt())}return
case 0:case 1:case 3:case 5:break}},
aby(){var x=this.d
x===$&&B.b()
x=x.a.b
if(x.a===x.b)this.x.gM().Jn()},
ahO(d){var x,w=this.r
w===$&&B.b()
if(!w.b)return!1
w=this.d
w===$&&B.b()
w=w.a
x=w.b
if(x.a===x.b)return!1
if(d===C.ah)return!1
if(d===C.b8)return!0
if(w.a.length!==0)return!0
return!1},
I(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.Q(d),g=d.ao(y.Z)
if(g==null)g=C.d5
x=j.gnK()
j.a.toString
w=!0
v=!0
u=i
t=i
switch(h.w.a){case 2:s=B.oT(d)
j.w=!0
r=$.aDs()
j.a.toString
q=g.w
if(q==null)q=s.geG()
p=g.x
if(p==null)p=s.geG().bz(0.4)
u=new B.h(-2/B.bz(d,C.c6,y.w).w.b,0)
t=C.cO
break
case 4:s=B.oT(d)
j.w=!1
r=$.aDr()
j.a.toString
q=g.w
if(q==null)q=s.geG()
p=g.x
if(p==null)p=s.geG().bz(0.4)
u=new B.h(-2/B.bz(d,C.c6,y.w).w.b,0)
t=C.cO
break
case 0:case 1:j.w=!1
r=$.aDA()
q=g.w
if(q==null)q=h.ax.b
p=g.x
if(p==null)p=h.ax.b.bz(0.4)
w=!1
v=!1
break
case 3:case 5:j.w=!1
r=$.azm()
q=g.w
if(q==null)q=h.ax.b
p=g.x
if(p==null)p=h.ax.b.bz(0.4)
w=!1
v=!1
break
default:p=i
q=p
v=q
w=v
r=w}o=d.ao(y.D)
if(o==null)o=C.o0
n=j.a.f
if(n.a)n=o.w.bJ(n)
j.a.toString
$label0$1:{break $label0$1}m=j.f
l=j.d
l===$&&B.b()
k=$.aD5()
m=B.aFd(!0,i,i,i,!1,C.dX,C.I,i,A.b_7(),l,q,i,u,v,t,2,C.a1,!0,!0,!0,!1,x,!1,C.bP,i,j.x,C.ae,i,k,o.Q,i,i,!1,"\u2022",i,i,i,j.gahm(),j.gabx(),i,i,w,!0,!0,i,!0,i,C.d7,i,p,r,C.bH,C.bs,!1,m,i,i,i,D.a4i,n,C.aY,C.dC,i,o.at,i,i,o.as,i,i)
j.a.toString
l=j.r
l===$&&B.b()
return B.bD(i,l.TC(C.bI,new B.fn(m,i)),!1,i,i,!1,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.av5(j),i,i,i,i,i,i,i,i,i,i)},
ga5(){return this.x}}
A.a9y.prototype={
ajU(d){if(this.b)throw B.f(B.ap("FontLoader is already loaded"))
this.c.push(d.c2(new A.a9z(),y.E))},
As(){var x=0,w=B.K(y.H),v=this,u,t
var $async$As=B.F(function(d,e){if(d===1)return B.H(e,w)
while(true)switch(x){case 0:if(v.b)throw B.f(B.ap("FontLoader is already loaded"))
v.b=!0
u=v.c
t=B.a1(u).h("aq<1,Z<~>>")
x=2
return B.M(B.jA(B.aa(new B.aq(u,new A.a9B(v),t),!0,t.h("aC.E")),y.H),$async$As)
case 2:return B.I(null,w)}})
return B.J($async$As,w)}}
A.apH.prototype={}
A.a47.prototype={
xO(){var x=0,w=B.K(y.v),v,u=2,t,s,r,q,p
var $async$xO=B.F(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:u=4
x=7
return B.M($.xe().oO("AssetManifest.json",!0),$async$xO)
case 7:s=e
r=A.aOk(s)
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t
r=$.xe()
r.a.C(0,"AssetManifest.json")
r.b.C(0,"AssetManifest.json")
r.c.C(0,"AssetManifest.json")
throw p
x=6
break
case 3:x=2
break
case 6:case 1:return B.I(v,w)
case 2:return B.H(t,w)}})
return B.J($async$xO,w)}}
A.abn.prototype={}
A.eI.prototype={
gBO(){return"https://fonts.gstatic.com/s/a/"+this.a+".ttf"}}
A.abo.prototype={
k(d){return this.a+"_"+this.b.k(0)}}
A.e2.prototype={
Yk(){var x,w=D.a_d.i(0,this.a)
if(w==null)w="Regular"
x=this.b===E.ce?"Italic":""
if(w==="Regular")return x===""?w:x
return w+x},
k(d){var x,w=this.a.a,v=w===3,u=v?"":(w+1)*100
w=this.b.G()
w=B.x8(w,"FontStyle.","")
x=C.d.XW(w,"normal",v?"regular":"")
return B.l(u)+x},
gv(d){return B.O(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
j(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.R(e)!==B.u(x))return!1
return e instanceof A.e2&&e.a===x.a&&e.b===x.b}}
A.a4K.prototype={
eV(d){return this.ZE(d)},
ZE(d){var x=0,w=B.K(y.n),v,u=2,t,s=[],r=this,q,p,o,n,m,l
var $async$eV=B.F(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:d.KR()
x=3
return B.M(new F.kv(F.aBo(d.y,y.L)).Jk(),$async$eV)
case 3:o=f
q=new self.XMLHttpRequest()
n=r.a
n.D(0,q)
m=q
m.open(d.a,d.b.k(0),!0)
m.responseType="arraybuffer"
m.withCredentials=!1
for(m=d.r.gfl(),m=m.gaa(m);m.u();){l=m.gN()
q.setRequestHeader(l.a,l.b)}p=new B.bq(new B.ah($.ak,y.O),y.Q)
m=y.C
l=y.H
new B.vO(q,"load",!1,m).ga7(0).c2(new A.a4L(q,p,d),l)
new B.vO(q,"error",!1,m).ga7(0).c2(new A.a4M(p,d),l)
q.send(o)
u=4
x=7
return B.M(p.a,$async$eV)
case 7:m=f
v=m
s=[1]
x=5
break
s.push(6)
x=5
break
case 4:s=[2]
case 5:u=2
n.C(0,q)
x=s.pop()
break
case 6:case 1:return B.I(v,w)
case 2:return B.H(t,w)}})
return B.J($async$eV,w)}}
A.SD.prototype={}
A.Tg.prototype={
gatc(){var x,w=C.d.a3(this.a,19,20).toUpperCase(),v=B.qb(w,null)
if(v!=null&&v>=1&&v<=7)return"\u4e3a NCS \u517c\u5bb9\u6027\u4fdd\u7559"
else{x=y.s
if(C.b.p(B.a(["8","9","A","B"],x),w))return"\u5728 (RFC 9562/RFC 4122) \u4e2d\u6307\u5b9a"
else if(C.b.p(B.a(["C","D"],x),w))return"\u4e3a\u4e0e Microsoft \u517c\u5bb9\u800c\u4fdd\u7559"
else if(C.b.p(B.a(["E","F"],x),w))return"\u4fdd\u7559\u4ee5\u4f9b\u5c06\u6765\u5b9a\u4e49"
else return"\u672a\u77e5\u53d8\u79cd"}},
gGf(){var x,w=A.aBK(4095),v=this.a
if(B.dM(B.cy(v.charCodeAt(14)),null)===1)return A.qW(C.d.a3(v,14,18),16).JN(0,w).iR(0,48).m9(0,A.qW(C.d.a3(v,9,13),16).iR(0,32)).m9(0,A.qW(C.d.a3(v,0,8),16))
if(B.dM(B.cy(v.charCodeAt(14)),null)===6){x=C.d.a3(v,0,8)
return A.qW(x,16).iR(0,28).m9(0,A.qW(C.d.a3(v,9,13),16).iR(0,12)).m9(0,A.qW(x,16).JN(0,w))}if(B.dM(B.cy(v.charCodeAt(14)),null)===7)return A.qW(C.d.a3(v,0,8)+C.d.a3(v,9,13),16)
return A.aBK(0)},
gakz(){var x,w=B.dM(B.cy(this.a.charCodeAt(14)),null)
$label0$0:{if(1===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           time_low                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|           time_mid            |  ver  |       time_high       |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|         clock_seq         |             node              |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                              node                             |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}if(3===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                            md5_high                           |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|          md5_high             |  ver  |       md5_mid         |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|                        md5_low                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                            md5_low                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}if(4===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           random_a                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|          random_a             |  ver  |       random_b        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|                       random_c                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           random_c                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}if(5===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           sha1_high                           |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|         sha1_high             |  ver  |      sha1_mid         |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|                       sha1_low                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           sha1_low                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}if(6===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           time_high                           |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|           time_mid            |  ver  |       time_low        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|         clock_seq         |             node              |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                              node                             |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}if(7===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           unix_ts_ms                          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|          unix_ts_ms           |  ver  |       rand_a          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|                        rand_b                             |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                            rand_b                             |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}if(8===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           custom_a                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|          custom_a             |  ver  |       custom_b        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|                       custom_c                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           custom_c                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}x="\u672a\u77e5\u7248\u672c"
break $label0$0}return x},
gasJ(){var x=this.a
if(C.b.p(B.a([1,6],y.t),B.dM(B.cy(x.charCodeAt(14)),null)))return B.azX(1582,10,15,0,0,0,0,0).mj(B.d2(0,0,this.gGf().h_(0,A.aBK(10)).ai(0),0,0).a)
if(B.dM(B.cy(x.charCodeAt(14)),null)===7)return new B.bB(B.yF(this.gGf().ai(0),0,!0),0,!0)
return new B.bB(B.yF(0,0,!1),0,!1)}}
A.lI.prototype={
al(){return new A.H4(new B.ib(C.dD,$.af()),C.AJ)}}
A.H4.prototype={
aqw(){var x,w,v,u=this
u.f=null
w=u.d.a.a
if(w.length===0){u.r=C.AK
u.f="UUID\u4e0d\u80fd\u4e3a\u7a7a"
return}u.e=null
try{w=new A.Tg(w)
w.a2a()
u.e=w
u.aB(new A.awf())}catch(v){x=B.ad(v)
if(y.T.b(x)){u.r=C.AK
u.f="UUID\u683c\u5f0f\u9519\u8bef"
u.aB(new A.awg())}B.aKB(J.dw(x),"")}},
I(d){return new B.Aa(new A.awe(this),null)}}
A.vf.prototype={
gF(d){return this.b},
i(d,e){if(e>=this.b)throw B.f(B.Nm(e,this,null,null,null))
return this.a[e]},
n(d,e,f){var x
if(e>=this.b)throw B.f(B.Nm(e,this,null,null,null))
x=this.a
x.$flags&2&&B.a7(x)
x[e]=f},
sF(d,e){var x,w,v,u,t=this,s=t.b
if(e<s)for(x=t.a,w=x.$flags|0,v=e;v<s;++v){w&2&&B.a7(x)
x[v]=0}else{s=t.a.length
if(e>s){if(s===0)u=new Uint8Array(e)
else u=t.Fr(e)
C.G.ia(u,0,t.b,t.a)
t.a=u}}t.b=e},
Fq(d){var x,w=this,v=w.b
if(v===w.a.length)w.Sd(v)
v=w.a
x=w.b++
v.$flags&2&&B.a7(v)
v[x]=d},
D(d,e){var x,w=this,v=w.b
if(v===w.a.length)w.Sd(v)
v=w.a
x=w.b++
v.$flags&2&&B.a7(v)
v[x]=e},
U(d,e){B.dg(0,"start")
this.aiN(e,0,null)},
aiN(d,e,f){var x,w,v
if(y.j.b(d))f=J.cE(d)
if(f!=null){this.aiP(this.b,d,e,f)
return}for(x=J.aM(d),w=0;x.u();){v=x.gN()
if(w>=e)this.Fq(v);++w}if(w<e)throw B.f(B.ap("Too few elements"))},
aiP(d,e,f,g){var x,w,v,u,t=this
if(y.j.b(e)){x=J.bv(e)
if(f>x.gF(e)||g>x.gF(e))throw B.f(B.ap("Too few elements"))}w=g-f
v=t.b+w
t.aiO(v)
x=t.a
u=d+w
C.G.e4(x,u,t.b+w,x,d)
C.G.e4(t.a,d,u,e,f)
t.b=v},
aiO(d){var x,w=this
if(d<=w.a.length)return
x=w.Fr(d)
C.G.ia(x,0,w.b,w.a)
w.a=x},
Fr(d){var x=this.a.length*2
if(d!=null&&x<d)x=d
else if(x<8)x=8
return new Uint8Array(x)},
Sd(d){var x=this.Fr(null)
C.G.ia(x,0,d,this.a)
this.a=x}}
A.Yc.prototype={}
A.Dq.prototype={}
A.Ti.prototype={
G(){return"ValidationMode."+this.b}}
A.Th.prototype={
JB(){var x,w=null,v=this.a
if(!A.aIa(w,v,!1,D.aaR)){x=A.aIa(w,v,!1,D.aaQ)
if(x)B.V(B.c0("The provided UUID is not RFC4122 compliant. It seems you might be using a Microsoft GUID. Try setting `validationMode = ValidationMode.nonStrict`",v,w))
B.V(B.c0("The provided UUID is invalid.",v,w))}},
k(d){return this.a},
j(d,e){if(e==null)return!1
return e instanceof A.Tg&&this.a===e.a},
gv(d){return C.d.gv(this.a)}}
var z=a.updateTypes(["~()","~(qH)","~(eR,h3?)","uV(W,ab)","d(W,hk)","m({background:n6?,backgroundColor:z?,color:z?,decoration:qI?,decorationColor:z?,decorationStyle:CX?,decorationThickness:L?,fontFeatures:N<aQN>?,fontSize:L?,fontStyle:tu?,fontWeight:fk?,foreground:n6?,height:L?,letterSpacing:L?,locale:hX?,shadows:N<jY>?,textBaseline:k5?,textStyle:m?,wordSpacing:L?})"])
A.aoK.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:127}
A.aoL.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:44}
A.av4.prototype={
$0(){this.a.f=this.b},
$S:0}
A.av3.prototype={
$0(){this.a.f=this.b},
$S:0}
A.av5.prototype={
$0(){this.a.gnK().fP()},
$S:0}
A.a9z.prototype={
$1(d){return J.ir(C.ay.gcc(d),d.byteOffset,d.byteLength)},
$S:537}
A.a9B.prototype={
$1(d){return d.c2(new A.a9A(this.a),y.H)},
$S:538}
A.a9A.prototype={
$1(d){return A.ayO(d,this.a.a)},
$S:539}
A.ays.prototype={
$1(d){return $.aKN.C(0,this.a)},
$S:540}
A.a4L.prototype={
$1(d){var x,w,v,u,t,s,r=this,q=r.a,p=A.aJy(q).i(0,"content-length"),o=!1
if(p!=null){o=$.aN_()
o=!o.b.test(p)}if(o){r.b.o9(new F.oM("Invalid content-length header ["+B.l(p)+"].",r.c.b))
return}x=B.aAW(y.o.a(q.response),0,null)
w=q.responseURL
if(w.length!==0)B.ed(w,0,null)
o=F.aBo(x,y.L)
v=q.status
u=x.length
t=r.c
s=A.aJy(q)
q=q.statusText
o=new A.SD(F.aL_(new F.kv(o)),t,v,q,u,s,!1,!0)
o.CM(v,u,s,!1,!0,q,t)
r.b.ek(o)},
$S:198}
A.a4M.prototype={
$1(d){this.a.mH(new F.oM("XMLHttpRequest error.",this.b.b),B.CG())},
$S:198}
A.awf.prototype={
$0(){},
$S:0}
A.awg.prototype={
$0(){},
$S:0}
A.awe.prototype={
$2(d,e){var x,w=null,v="\u8bf7\u5728\u6b64\u5904\u8f93\u5165\u9700\u8981\u89e3\u6790\u7684UUID",u=Math.min(1000,e.b-20),t=this.a,s=t.f
u=B.a([B.fH(B.fJ(w,B.CZ(!0,C.bY,!1,w,!0,C.I,w,B.a3j(),t.d,w,w,w,w,w,2,B.aAC(w,new G.i2(4,B.hI(10),new B.bf(t.r,1,C.D,-1)),w,E.f1,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,D.Gb,s,w,w,D.Gb,v,w,w,w,w,w,w,w,w,v,!0,w,w,w,w,w,w,w,w,w,w,w,w,w),C.a1,!0,w,!0,w,!1,w,C.bP,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,t.gaqv(),w,w,!1,w,!1,w,!0,w,C.d7,w,w,C.bH,C.bs,w,w,w,w,w,w,w,C.aY,w,C.dC,w,w,w,w),C.z,w,w,w,w,w,w,E.f1,w,w,u),w,w)],y.p)
t=t.e
if(t!=null){s=t.a
x=B.aB(["UUID",s,"\u6574\u6570\u503c",A.qW(B.x8(s,"-",""),16).k(0),"\u7248\u672c",B.dM(B.cy(s.charCodeAt(14)),w),"\u53d8\u79cd",t.gatc()],y.N,y.z)
if(C.b.p(B.a([1,6,7],y.t),B.dM(B.cy(s.charCodeAt(14)),w))){x.n(0,"\u65f6\u95f4\u6233",t.gGf())
x.n(0,"\u65f6\u95f4",t.gasJ().asP())}x.n(0,"\u4f4d\u5e03\u5c40",t.gakz())
C.b.U(u,x.gfl().i_(0,new A.awd(e,d),y.l))}return F.aBj(new B.eE(new B.ab(0,1/0,e.d,1/0),B.en(u,C.a9,C.fr,C.al),w),C.mW,C.aR)},
$S:z+3}
A.awd.prototype={
$1(d){var x=null,w=Math.min(1000,this.a.b-20),v=this.b,u=B.Q(v),t=B.hI(8)
v=B.Q(v).k1
v=B.a([new B.dx(2,C.eK,B.aw(200,v.gm()>>>16&255,v.gm()>>>8&255,v.gm()&255),D.a0_,5)],y.V)
return B.fH(B.fJ(x,B.en(B.a([B.cr(d.a,x,x,x,D.a6Y,x,x,x),D.a4_,F.aBj(new A.Cc(J.dw(d.b),A.b__().$1$fontSize(16),x),x,C.bb)],y.p),C.a9,C.a3,C.al),C.z,x,x,new B.dd(u.at,x,x,t,v,x,C.aC),x,x,E.o6,E.f1,x,x,w),x,x)},
$S:542};(function aliases(){var x=A.Th.prototype
x.a2a=x.JB})();(function installTearOffs(){var x=a._static_2,w=a._instance_1u,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff
x(A,"b_7","aTF",4)
w(A.a04.prototype,"gX8","AY",1)
var s
v(s=A.Gt.prototype,"gPU","adP",0)
v(s,"gRh","ahl",0)
u(s,"gahm","ahn",2)
v(s,"gabx","aby",0)
v(A.H4.prototype,"gaqv","aqw",0)
t(A,"b__",0,null,["$19$background$backgroundColor$color$decoration$decorationColor$decorationStyle$decorationThickness$fontFeatures$fontSize$fontStyle$fontWeight$foreground$height$letterSpacing$locale$shadows$textBaseline$textStyle$wordSpacing","$0","$1$color","$2$color$fontSize","$1$fontSize","$18$background$backgroundColor$color$decoration$decorationColor$decorationStyle$decorationThickness$fontFeatures$fontSize$fontStyle$fontWeight$foreground$height$letterSpacing$locale$shadows$textBaseline$wordSpacing","$1$height"],["ug",function(){var r=null
return A.ug(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},function(d){var r=null
return A.ug(r,r,d,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},function(d,e){var r=null
return A.ug(r,r,d,r,r,r,r,r,e,r,r,r,r,r,r,r,r,r,r)},function(d){var r=null
return A.ug(r,r,r,r,r,r,r,r,d,r,r,r,r,r,r,r,r,r,r)},function(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,a0,a1,a2){return A.ug(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,a0,a1,null,a2)},function(d){var r=null
return A.ug(r,r,r,r,r,r,r,r,r,r,r,r,d,r,r,r,r,r,r)}],5,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.G,[A.dm,A.p_,A.a6r,A.abt,A.a9y,A.apH,A.a47,A.abn,A.eI,A.abo,A.e2,A.Th])
x(B.mm,[A.aoK,A.awe])
x(B.fI,[A.aoL,A.a9z,A.a9B,A.a9A,A.ays,A.a4L,A.a4M,A.awd])
w(A.N4,B.cG)
w(A.a0c,A.N4)
w(A.avf,A.abt)
w(A.a0d,A.avf)
w(A.a13,B.ib)
w(A.a04,B.v9)
x(B.S,[A.Cc,A.lI])
x(B.X,[A.Gt,A.H4])
x(B.kx,[A.av4,A.av3,A.av5,A.awf,A.awg])
w(A.a4K,F.IT)
w(A.SD,F.lw)
w(A.Tg,A.Th)
w(A.vf,B.aP)
w(A.Yc,A.vf)
w(A.Dq,A.Yc)
w(A.Ti,B.nQ)})()
B.kl(b.typeUniverse,JSON.parse('{"aDX":{"cn":["aDX"]},"dm":{"cn":["aDX"]},"N4":{"cG":["N<k>","p_"]},"a0c":{"cG":["N<k>","p_"],"cG.S":"N<k>","cG.T":"p_"},"Cc":{"S":[],"d":[]},"a13":{"c4":["c3"],"a_":[]},"Gt":{"X":["Cc"]},"SD":{"lw":[]},"lI":{"S":[],"d":[]},"H4":{"X":["lI"]},"vf":{"aP":["1"],"N":["1"],"at":["1"],"v":["1"]},"Yc":{"vf":["k"],"aP":["k"],"N":["k"],"at":["k"],"v":["k"]},"Dq":{"vf":["k"],"aP":["k"],"N":["k"],"at":["k"],"v":["k"],"aP.E":"k","v.E":"k"}}'))
var y=(function rtii(){var x=B.a5
return{Y:x("cm"),Z:x("kE"),D:x("oV"),T:x("iF"),I:x("Z<cm?>"),M:x("Z<b_<j,N<j>>?>"),r:x("eI"),U:x("e2"),V:x("p<dx>"),m:x("p<Z<du>>"),s:x("p<j>"),q:x("p<lC>"),p:x("p<d>"),t:x("p<k>"),g:x("bb<hk>"),a:x("N<j>"),j:x("N<@>"),L:x("N<k>"),P:x("b_<j,@>"),w:x("hr"),o:x("n1"),u:x("bH<j>"),n:x("lw"),N:x("j"),b:x("bP<b_<j,N<j>>?>"),E:x("du"),l:x("d"),Q:x("bq<lw>"),C:x("vO<bo>"),O:x("ah<lw>"),y:x("y"),z:x("@"),x:x("cm?"),v:x("b_<j,N<j>>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.n7=new B.Nq()
D.ID=new A.a0c()
D.LE=new A.e2(C.e2,C.cz)
D.LF=new A.e2(C.e2,E.ce)
D.LG=new A.e2(C.hM,C.cz)
D.LH=new A.e2(C.hM,E.ce)
D.LI=new A.e2(C.hN,C.cz)
D.LJ=new A.e2(C.hN,E.ce)
D.LK=new A.e2(C.q,C.cz)
D.LL=new A.e2(C.q,E.ce)
D.LM=new A.e2(C.Y,C.cz)
D.LN=new A.e2(C.Y,E.ce)
D.LO=new A.e2(C.hO,C.cz)
D.LP=new A.e2(C.hO,E.ce)
D.LQ=new A.e2(C.bw,C.cz)
D.LR=new A.e2(C.bw,E.ce)
D.MX=B.a(x([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),y.t)
D.a_d=new B.cw([C.e2,"Thin",C.hM,"ExtraLight",C.hN,"Light",C.q,"Regular",C.Y,"Medium",C.hO,"SemiBold",C.bw,"Bold",C.ot,"ExtraBold",C.kP,"Black"],B.a5("cw<fk,j>"))
D.a0_=new B.h(0,3)
D.a4_=new B.e9(null,10,null,null)
D.a4i=new B.qF(null,null,null,null,null,null,null,null,null,null)
D.a6Y=new B.m(!0,null,null,null,null,null,20,C.Y,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.Gb=new B.m(!0,C.AJ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aaQ=new A.Ti(0,"nonStrict")
D.aaR=new A.Ti(1,"strictRFC4122")})();(function staticFields(){$.aIn=null
$.aIo=null
$.aIp=null
$.aIq=null
$.aBL=B.b2("_lastQuoRemDigits")
$.aBM=B.b2("_lastQuoRemUsed")
$.DW=B.b2("_lastRemUsed")
$.aBN=B.b2("_lastRem_nsh")
$.aDT=null
$.aCq=B.au(y.N)
$.aKN=B.au(B.a5("Z<~>"))})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"b27","hh",()=>A.qV(0))
x($,"b25","me",()=>A.qV(1))
x($,"b26","aMo",()=>A.qV(2))
x($,"b23","aD8",()=>$.me().kg(0))
x($,"b21","aD7",()=>A.qV(1e4))
w($,"b24","aMn",()=>B.dt("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1,!1))
x($,"b22","aMm",()=>B.aAV(8))
x($,"b0b","aLi",()=>new A.apH())
w($,"b4p","aNQ",()=>new A.a4K(B.au(B.a5("bo"))))
w($,"b4c","aNM",()=>new A.a47())
x($,"b32","aN_",()=>B.dt("^\\d+$",!0,!1,!1))})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_12",e:"endPart",h:b})})($__dart_deferred_initializers__,"EODRMuhf7c33kntSe/gu771qA/4=");