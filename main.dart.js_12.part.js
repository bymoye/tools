((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_12",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,B,C,F,A={
wg(d,e){var x=A.blE(d,e)
if(x==null)throw B.c(B.cf("Could not parse BigInt",d,null))
return x},
blA(d,e){var x,w,v=$.jB(),u=d.length,t=4-u%4
if(t===4)t=0
for(x=0,w=0;w<u;++w){x=x*10+d.charCodeAt(w)-48;++t
if(t===4){v=v.ap(0,$.b06()).Y(0,A.wf(x))
x=0
t=0}}if(e)return v.o9(0)
return v},
aZj(d){if(48<=d&&d<=57)return d-48
return(d|32)-97+10},
blB(d,e,f){var x,w,v,u,t,s,r,q=d.length,p=q-e,o=C.d.iv(p/4),n=new Uint16Array(o),m=o-1,l=p-m*4
for(x=e,w=0,v=0;v<l;++v,x=u){u=x+1
t=A.aZj(d.charCodeAt(x))
if(t>=16)return null
w=w*16+t}s=m-1
n[m]=w
for(;x<q;s=r){for(w=0,v=0;v<4;++v,x=u){u=x+1
t=A.aZj(d.charCodeAt(x))
if(t>=16)return null
w=w*16+t}r=s-1
n[s]=w}if(o===1&&n[0]===0)return $.jB()
q=A.hC(o,n)
return new A.eC(q===0?!1:f,n,q)},
blC(d,e,f){var x,w,v,u=$.jB(),t=A.wf(e)
for(x=d.length,w=0;w<x;++w){v=A.aZj(d.charCodeAt(w))
if(v>=e)return null
u=u.ap(0,t).Y(0,A.wf(v))}if(f)return u.o9(0)
return u},
blE(d,e){var x,w,v,u,t,s,r=null
if(d==="")return r
x=$.baN().rw(d)
if(x==null)return r
w=x.b
v=w[1]==="-"
u=w[4]
t=w[3]
s=w[5]
if(e<2||e>36)throw B.c(B.d8(e,2,36,"radix",r))
if(e===10&&u!=null)return A.blA(u,v)
if(e===16)w=u!=null||s!=null
else w=!1
if(w){if(u==null){s.toString
w=s}else w=u
return A.blB(w,0,v)}w=u==null?s:u
if(w==null){t.toString
w=t}return A.blC(w,e,v)},
hC(d,e){while(!0){if(!(d>0&&e[d-1]===0))break;--d}return d},
aZi(d,e,f,g){var x,w=new Uint16Array(g),v=f-e
for(x=0;x<v;++x)w[x]=d[e+x]
return w},
aZe(d){var x
if(d===0)return $.jB()
if(d===1)return $.q0()
if(d===2)return $.baO()
if(Math.abs(d)<4294967296)return A.wf(C.e.aW(d))
x=A.blx(d)
return x},
wf(d){var x,w,v,u,t=d<0
if(t){if(d===-9223372036854776e3){x=new Uint16Array(4)
x[3]=32768
w=A.hC(4,x)
return new A.eC(w!==0,x,w)}d=-d}if(d<65536){x=new Uint16Array(1)
x[0]=d
w=A.hC(1,x)
return new A.eC(w===0?!1:t,x,w)}if(d<=4294967295){x=new Uint16Array(2)
x[0]=d&65535
x[1]=C.e.kz(d,16)
w=A.hC(2,x)
return new A.eC(w===0?!1:t,x,w)}w=C.e.ez(C.e.ga4O(d)-1,16)+1
x=new Uint16Array(w)
for(v=0;d!==0;v=u){u=v+1
x[v]=d&65535
d=C.e.ez(d,65536)}w=A.hC(w,x)
return new A.eC(w===0?!1:t,x,w)},
blx(d){var x,w,v,u,t,s,r,q
if(isNaN(d)||d==1/0||d==-1/0)throw B.c(B.by("Value must be finite: "+d,null))
d=Math.floor(d)
if(d===0)return $.jB()
x=$.baM()
for(w=0;w<8;++w)x[w]=0
B.kM(x.buffer,0,null).setFloat64(0,d,!0)
v=x[7]
u=x[6]
t=(v<<4>>>0)+(u>>>4)-1075
s=new Uint16Array(4)
s[0]=(x[1]<<8>>>0)+x[0]
s[1]=(x[3]<<8>>>0)+x[2]
s[2]=(x[5]<<8>>>0)+x[4]
s[3]=u&15|16
r=new A.eC(!1,s,4)
if(t<0)q=r.UM(0,-t)
else q=t>0?r.my(0,t):r
return q},
aZk(d,e,f,g){var x
if(e===0)return 0
if(f===0&&g===d)return e
for(x=e-1;x>=0;--x)g[x+f]=d[x]
for(x=f-1;x>=0;--x)g[x]=0
return e+f},
b5W(d,e,f,g){var x,w,v,u=C.e.ez(f,16),t=C.e.c2(f,16),s=16-t,r=C.e.my(1,s)-1
for(x=e-1,w=0;x>=0;--x){v=d[x]
g[x+u+1]=(C.e.F5(v,s)|w)>>>0
w=C.e.my(v&r,t)}g[u]=w},
b5R(d,e,f,g){var x,w,v,u=C.e.ez(f,16)
if(C.e.c2(f,16)===0)return A.aZk(d,e,u,g)
x=e+u+1
A.b5W(d,e,f,g)
for(w=u;--w,w>=0;)g[w]=0
v=x-1
return g[v]===0?v:x},
blD(d,e,f,g){var x,w,v=C.e.ez(f,16),u=C.e.c2(f,16),t=16-u,s=C.e.my(1,u)-1,r=C.e.F5(d[v],u),q=e-v-1
for(x=0;x<q;++x){w=d[x+v+1]
g[x]=(C.e.my(w&s,t)|r)>>>0
r=C.e.F5(w,u)}g[q]=r},
aIA(d,e,f,g){var x,w=e-g
if(w===0)for(x=e-1;x>=0;--x){w=d[x]-f[x]
if(w!==0)return w}return w},
bly(d,e,f,g,h){var x,w
for(x=0,w=0;w<g;++w){x+=d[w]+f[w]
h[w]=x&65535
x=x>>>16}for(w=g;w<e;++w){x+=d[w]
h[w]=x&65535
x=x>>>16}h[e]=x},
a7h(d,e,f,g,h){var x,w
for(x=0,w=0;w<g;++w){x+=d[w]-f[w]
h[w]=x&65535
x=0-(C.e.kz(x,16)&1)}for(w=g;w<e;++w){x+=d[w]
h[w]=x&65535
x=0-(C.e.kz(x,16)&1)}},
b5X(d,e,f,g,h,i){var x,w,v,u,t
if(d===0)return
for(x=0;--i,i>=0;h=u,f=w){w=f+1
v=d*e[f]+g[h]+x
u=h+1
g[h]=v&65535
x=C.e.ez(v,65536)}for(;x!==0;h=u){t=g[h]+x
u=h+1
g[h]=t&65535
x=C.e.ez(t,65536)}},
blz(d,e,f){var x,w=e[f]
if(w===d)return 65535
x=C.e.j8((w<<16|e[f-1])>>>0,d)
if(x>65535)return 65535
return x},
eC:function eC(d,e,f){this.a=d
this.b=e
this.c=f},
aIB:function aIB(){},
aIC:function aIC(){},
b7g(d){var x,w,v,u,t="0123456789abcdef",s=d.length,r=new Uint8Array(s*2)
for(x=0,w=0;x<s;++x){v=d[x]
u=w+1
r[w]=t.charCodeAt(v>>>4&15)
w=u+1
r[u]=t.charCodeAt(v&15)}return B.dD(r,0,null)},
tV:function tV(d){this.a=d},
amx:function amx(){this.a=null},
WP:function WP(){},
arF:function arF(){},
bmj(d){var x=new Uint32Array(B.lh(B.a([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],y.t))),w=new Uint32Array(64),v=new Uint8Array(0)
return new A.adX(x,w,d,new Uint32Array(16),new A.KH(v,0))},
adW:function adW(){},
aR9:function aR9(){},
adX:function adX(d,e,f,g,h){var _=this
_.w=d
_.x=e
_.a=f
_.c=g
_.d=0
_.e=h
_.f=!1},
b6v(d){var x=d.Cd(!1)
return new A.af_(d,new B.bK(x,C.bY,C.L),$.as())},
bjP(d,e){return B.aWQ(e)},
af_:function af_(d,e,f){var _=this
_.ax=d
_.a=e
_.G$=0
_.M$=f
_.aj$=_.ac$=0
_.aI$=!1},
adN:function adN(d,e){var _=this
_.x=d
_.z=_.y=0
_.a=e
_.b=!0
_.c=!1
_.e=_.d=0
_.r=_.f=null
_.w=!1},
Jr:function Jr(d,e,f){this.c=d
this.f=e
this.a=f},
Ot:function Ot(d,e){var _=this
_.d=$
_.e=null
_.f=!1
_.w=_.r=$
_.x=d
_.a=null
_.b=e
_.c=null},
aQZ:function aQZ(d,e){this.a=d
this.b=e},
aQY:function aQY(d,e){this.a=d
this.b=e},
aR_:function aR_(d){this.a=d},
apL:function apL(d,e){this.a=d
this.b=!1
this.c=e},
apM:function apM(){},
apO:function apO(d){this.a=d},
apN:function apN(d){this.a=d},
aK1:function aK1(){},
bdm(d){var x,w,v,u=y.N,t=B.A(u,y.a)
for(x=J.ai2(y.P.a(C.cm.kd(0,d))),x=x.gaA(x),w=y.j;x.u();){v=x.gT(x)
t.n(0,v.a,J.tp(w.a(v.b),u))}return new B.ck(t,y.b)},
aiH:function aiH(){},
bqb(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,a0,a1,a2,a3){var x,w,v,u
a2=C.cy.aGb(d,e,f,g,h,i,j,l,m,n,o,q,r,s,t,a0,a1,a3)
x=a2.w
if(x==null)x=C.V
w=a2.x
v=A.bn5(new A.fz(x,w==null?C.dk:w),new B.bb(p,B.m(p).i("bb<1>")))
x=p.h(0,v)
x.toString
u=A.CJ(new A.arA(new A.arB(k,v),x))
$.b8U.E(0,u)
u.cv(new A.aVk(u),y.y)
return a2.aGf(k+"_"+v.j(0),B.a([k],y.s))},
CJ(d){return A.bqK(d)},
bqK(d){var x=0,w=B.y(y.H),v,u=2,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$CJ=B.u(function(e,f){if(e===1){t=f
x=u}while(true)switch(x){case 0:l=d.a
k=l.a
j=l.b
i=k+"_"+j.j(0)
h=k+"-"+j.aaf()
j=d.b
s=j.a
if($.b_0.p(0,i)){x=1
break}else $.b_0.E(0,i)
u=4
r=null
k=$.bce()
n=$.b0W
if(n==null){k=k.Ec()
$.b0W=k}else k=n
x=7
return B.z(y.M.b(k)?k:B.cO(k,y.v),$async$CJ)
case 7:q=f
p=A.bnz(l,q)
if(p!=null)r=$.wU().lE(0,p)
l=r
k=y.q
x=8
return B.z(y.I.b(l)?l:B.cO(l,k),$async$CJ)
case 8:if(f!=null){l=A.CI(i,r)
v=l
x=1
break}r=B.dj(null,k)
x=9
return B.z(r,$async$CJ)
case 9:if(f!=null){l=A.CI(i,r)
v=l
x=1
break}$.b9Q()
r=A.aU4(i,j)
x=10
return B.z(r,$async$CJ)
case 10:if(f!=null){l=A.CI(i,r)
v=l
x=1
break}u=2
x=6
break
case 4:u=3
g=t
o=B.aw(g)
$.b_0.C(0,i)
B.lm("Error: google_fonts was unable to load font "+B.h(h)+" because the following exception occurred:\n"+B.h(o))
B.lm("If troubleshooting doesn't solve the problem, please file an issue at https://github.com/material-foundation/flutter-packages/issues/new/choose.\n")
throw g
x=6
break
case 3:x=2
break
case 6:case 1:return B.w(v,w)
case 2:return B.v(t,w)}})
return B.x($async$CJ,w)},
CI(d,e){var x=0,w=B.y(y.H),v,u,t
var $async$CI=B.u(function(f,g){if(f===1)return B.v(g,w)
while(true)switch(x){case 0:if(e==null){x=1
break}x=3
return B.z(e,$async$CI)
case 3:u=g
if(u==null){x=1
break}t=new A.apL(d,B.a([],y.m))
t.aDo(B.dj(u,y.Y))
x=4
return B.z(t.Hl(0),$async$CI)
case 4:case 1:return B.w(v,w)}})
return B.x($async$CI,w)},
bn5(d,e){var x,w,v,u,t=B.bA("bestMatch")
for(x=e.a,x=B.hU(x,x.r,e.$ti.c),w=null;x.u();){v=x.d
u=A.bna(d,v)
if(w==null||u<w){t.b=v
w=u}}return t.bC()},
aU4(d,e){return A.bnN(d,e)},
bnN(d,e){var x=0,w=B.y(y.Y),v,u=2,t,s,r,q,p,o,n,m,l
var $async$aU4=B.u(function(f,g){if(f===1){t=g
x=u}while(true)switch(x){case 0:n=e.a
m=B.KL("https://fonts.gstatic.com/s/a/"+n+".ttf")
if(m==null)throw B.c(B.cx("Invalid fontUrl: "+e.gJ0(0)))
s=null
u=4
x=7
return B.z($.bck().w0("GET",m,null),$async$aU4)
case 7:s=g
u=2
x=6
break
case 4:u=3
l=t
r=B.aw(l)
n=B.cx("Failed to load font with url "+e.gJ0(0)+": "+B.h(r))
throw B.c(n)
x=6
break
case 3:x=2
break
case 6:if(s.b===200){p=s.w
o=A.b7g(D.Py.fW(p).a)
if(!(e.b===p.length&&n===o))throw B.c(B.cx("File from "+e.gJ0(0)+" did not match expected length and checksum."))
s.toString
B.dj(null,y.H)
v=B.kM(s.w.buffer,0,null)
x=1
break}else throw B.c(B.cx("Failed to load font with url: "+e.gJ0(0)))
case 1:return B.w(v,w)
case 2:return B.v(t,w)}})
return B.x($async$aU4,w)},
bna(d,e){var x
if(d.k(0,e))return 0
x=Math.abs(d.a.a-e.a.a)
return d.b!==e.b?x+2:x},
bnz(d,e){var x,w,v,u,t,s,r,q,p
if(e==null)return null
x=d.a+"-"+d.b.aaf()
for(w=J.aC(J.aWI(e)),v=y.s,u=y.z;w.u();)for(t=J.aC(w.gT(w));t.u();){s=t.gT(t)
for(r=B.a([".ttf",".otf"],v),q=C.c.gaHU(s),r=C.b.gaA(r),q=new B.ha(r,q,u),p=s.length;q.u();)if(C.c.fY(C.c.X(s,0,p-r.gT(0).length),x))return s}return null},
aVk:function aVk(d){this.a=d},
arA:function arA(d,e){this.a=d
this.b=e},
hk:function hk(d,e){this.a=d
this.b=e},
arB:function arB(d,e){this.a=d
this.b=e},
fz:function fz(d,e){this.a=d
this.b=e},
a4w:function a4w(d){this.a=d},
blb(){return new A.pu(null)},
pu:function pu(d){this.a=d},
Pc:function Pc(d,e,f){var _=this
_.d=d
_.f=_.e=null
_.r=e
_.a=null
_.b=f
_.c=null},
aSI:function aSI(){},
aSJ:function aSJ(){},
aSH:function aSH(d){this.a=d},
aSG:function aSG(d,e){this.a=d
this.b=e},
pq:function pq(){},
aaj:function aaj(){},
KH:function KH(d,e){this.a=d
this.b=e},
a4y:function a4y(d,e){this.a=d
this.b=e},
a4x:function a4x(){},
aVK(d,e){var x=0,w=B.y(y.H)
var $async$aVK=B.u(function(f,g){if(f===1)return B.v(g,w)
while(true)switch(x){case 0:x=2
return B.z($.af().gAY().Hq(d,e),$async$aVK)
case 2:B.aW3()
return B.w(null,w)}})
return B.x($async$aVK,w)},
iE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v){return A.bqb(d,e,f,g,h,i,j,"RobotoMono",k,l,m,n,B.P([D.WC,new A.hk("c143970b9f2e250fcf4caf9cf62f6b3b47c62efe1e162ac256338db8d0f798c3",80016),D.WD,new A.hk("93efc2bd39f8d8ee242082e7257b52e5d3a1186a8048a8d5501eba74b365a77c",79924),D.WE,new A.hk("fe25b3d13b147927ceabb850b05d171758aa325f6941ca11448fd9b3fdd00774",79716),D.WF,new A.hk("98e94e15e13718555a10299bb96017f6e50a69f47ff61899b1d9e1a86b5fac7f",78968),D.WG,new A.hk("acdfbf353c42d04ec7e1e2cf8d5eb7709dee60939030102d07f8623e0ad72973",78944),D.WH,new A.hk("77a88f0807b9af22ca1caa4c3ab778f5c2513c60fde26c1701f80cb473262294",79188),D.WI,new A.hk("10e89cd69daf71a7c64dbcc00f694dbbff3c234f4d4aaf12709e67f4d1b0e8d7",79132),D.WJ,new A.hk("938b70df0e223daf3b21075cdf2863eef241074f020dbbad099f49cde2e6dd19",84948),D.WK,new A.hk("8c19993c14f6cc7604b31efdcd983aa495c199c1e628aa3ca5561734c4b1697c",85276),D.WL,new A.hk("f56f980d8bd43f21e09ba36ad248cc05f092484d5c2b02f23c3129fe5ba474b1",85596),D.WM,new A.hk("07884a6dc8021a2eef997774bf83e0c67f13985e3f61797ce0eaa38d672c9038",85676),D.WN,new A.hk("088f51f1cfd499a79da475a3d01f3b4f2f2649fa3f187556bde578bc88dddb32",85752),D.WO,new A.hk("2427ed57d03c2d128127429ef4de10ba21826a6992de2bb7b096ed45387876f7",85752),D.WP,new A.hk("4110df6eb9855f4b1b509dee1597dce8a7beb522ab4fc46cc317e88d76dc45d2",85932)],y.U,y.r),o,p,q,r,s,t,u,v)},
b5G(d,e,f,g){var x
if(e==="00000000-0000-0000-0000-000000000000")return!0
if(e.length!==36)return!1
switch(g.a){case 1:x=B.bn("^[0-9a-f]{8}-[0-9a-f]{4}-[0-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$",!1,!0,!1)
return x.b.test(e.toLowerCase())
case 0:x=B.bn("^[0-9a-f]{8}-[0-9a-f]{4}-[0-8][0-9a-f]{3}-[0-9a-f]{4}-[0-9a-f]{12}$",!1,!0,!1)
return x.b.test(e.toLowerCase())
default:throw B.c(B.cx("`"+g.j(0)+"` is an invalid ValidationMode."))}}},D,G,H,I,E
J=c[1]
B=c[0]
C=c[2]
F=c[16]
A=a.updateHolder(c[7],A)
D=c[25]
G=c[11]
H=c[24]
I=c[14]
E=c[19]
A.eC.prototype={
o9(d){var x,w,v=this,u=v.c
if(u===0)return v
x=!v.a
w=v.b
u=A.hC(u,w)
return new A.eC(u===0?!1:x,w,u)},
amZ(d){var x,w,v,u,t,s,r=this.c
if(r===0)return $.jB()
x=r+d
w=this.b
v=new Uint16Array(x)
for(u=r-1;u>=0;--u)v[u+d]=w[u]
t=this.a
s=A.hC(x,v)
return new A.eC(s===0?!1:t,v,s)},
an6(d){var x,w,v,u,t,s,r,q=this,p=q.c
if(p===0)return $.jB()
x=p-d
if(x<=0)return q.a?$.b07():$.jB()
w=q.b
v=new Uint16Array(x)
for(u=d;u<p;++u)v[u-d]=w[u]
t=q.a
s=A.hC(x,v)
r=new A.eC(s===0?!1:t,v,s)
if(t)for(u=0;u<d;++u)if(w[u]!==0)return r.ae(0,$.q0())
return r},
my(d,e){var x,w,v,u,t,s=this
if(e<0)throw B.c(B.by("shift-amount must be posititve "+e,null))
x=s.c
if(x===0)return s
w=C.e.ez(e,16)
if(C.e.c2(e,16)===0)return s.amZ(w)
v=x+w+1
u=new Uint16Array(v)
A.b5W(s.b,x,e,u)
x=s.a
t=A.hC(v,u)
return new A.eC(t===0?!1:x,u,t)},
UM(d,e){var x,w,v,u,t,s,r,q,p,o=this
if(e<0)throw B.c(B.by("shift-amount must be posititve "+e,null))
x=o.c
if(x===0)return o
w=C.e.ez(e,16)
v=C.e.c2(e,16)
if(v===0)return o.an6(w)
u=x-w
if(u<=0)return o.a?$.b07():$.jB()
t=o.b
s=new Uint16Array(u)
A.blD(t,x,e,s)
x=o.a
r=A.hC(u,s)
q=new A.eC(r===0?!1:x,s,r)
if(x){if((t[w]&C.e.my(1,v)-1)!==0)return q.ae(0,$.q0())
for(p=0;p<w;++p)if(t[p]!==0)return q.ae(0,$.q0())}return q},
c_(d,e){var x,w=this.a
if(w===e.a){x=A.aIA(this.b,this.c,e.b,e.c)
return w?0-x:x}return w?-1:1},
vq(d,e){var x,w,v,u=this,t=u.c,s=d.c
if(t<s)return d.vq(u,e)
if(t===0)return $.jB()
if(s===0)return u.a===e?u:u.o9(0)
x=t+1
w=new Uint16Array(x)
A.bly(u.b,t,d.b,s,w)
v=A.hC(x,w)
return new A.eC(v===0?!1:e,w,v)},
oh(d,e){var x,w,v,u=this,t=u.c
if(t===0)return $.jB()
x=d.c
if(x===0)return u.a===e?u:u.o9(0)
w=new Uint16Array(t)
A.a7h(u.b,t,d.b,x,w)
v=A.hC(t,w)
return new A.eC(v===0?!1:e,w,v)},
Wd(d,e){var x,w,v,u,t,s=this.c,r=d.c
s=s<r?s:r
x=this.b
w=d.b
v=new Uint16Array(s)
for(u=0;u<s;++u)v[u]=x[u]&w[u]
t=A.hC(s,v)
return new A.eC(t===0?!1:e,v,t)},
Wc(d,e){var x,w,v=this.c,u=this.b,t=d.b,s=new Uint16Array(v),r=d.c
if(v<r)r=v
for(x=0;x<r;++x)s[x]=u[x]&~t[x]
for(x=r;x<v;++x)s[x]=u[x]
w=A.hC(v,s)
return new A.eC(w===0?!1:e,s,w)},
We(d,e){var x,w,v,u,t,s=this.c,r=d.c,q=s>r?s:r,p=this.b,o=d.b,n=new Uint16Array(q)
if(s<r){x=s
w=d}else{x=r
w=this}for(v=0;v<x;++v)n[v]=p[v]|o[v]
u=w.b
for(v=x;v<q;++v)n[v]=u[v]
t=A.hC(q,n)
return new A.eC(t===0?!1:e,n,t)},
CB(d,e){var x,w,v,u=this
if(u.c===0||e.c===0)return $.jB()
x=u.a
if(x===e.a){if(x){x=$.q0()
return u.oh(x,!0).We(e.oh(x,!0),!0).vq(x,!0)}return u.Wd(e,!1)}if(x){w=u
v=e}else{w=e
v=u}return v.Wc(w.oh($.q0(),!1),!1)},
t4(d,e){var x,w,v,u=this
if(u.c===0)return e
if(e.c===0)return u
x=u.a
if(x===e.a){if(x){x=$.q0()
return u.oh(x,!0).Wd(e.oh(x,!0),!0).vq(x,!0)}return u.We(e,!1)}if(x){w=u
v=e}else{w=e
v=u}x=$.q0()
return w.oh(x,!0).Wc(v,!0).vq(x,!0)},
Y(d,e){var x,w,v=this,u=v.c
if(u===0)return e
x=e.c
if(x===0)return v
w=v.a
if(w===e.a)return v.vq(e,w)
if(A.aIA(v.b,u,e.b,x)>=0)return v.oh(e,w)
return e.oh(v,!w)},
ae(d,e){var x,w,v=this,u=v.c
if(u===0)return e.o9(0)
x=e.c
if(x===0)return v
w=v.a
if(w!==e.a)return v.vq(e,w)
if(A.aIA(v.b,u,e.b,x)>=0)return v.oh(e,w)
return e.oh(v,!w)},
ap(d,e){var x,w,v,u,t,s,r,q=this.c,p=e.c
if(q===0||p===0)return $.jB()
x=q+p
w=this.b
v=e.b
u=new Uint16Array(x)
for(t=0;t<p;){A.b5X(v[t],w,0,u,t,q);++t}s=this.a!==e.a
r=A.hC(x,u)
return new A.eC(r===0?!1:s,u,r)},
Y2(d){var x,w,v,u
if(this.c<d.c)return $.jB()
this.Y3(d)
x=$.aZg.cj()-$.Lg.cj()
w=A.aZi($.aZf.cj(),$.Lg.cj(),$.aZg.cj(),x)
v=A.hC(x,w)
u=new A.eC(!1,w,v)
return this.a!==d.a&&v>0?u.o9(0):u},
ayf(d){var x,w,v,u=this
if(u.c<d.c)return u
u.Y3(d)
x=A.aZi($.aZf.cj(),0,$.Lg.cj(),$.Lg.cj())
w=A.hC($.Lg.cj(),x)
v=new A.eC(!1,x,w)
if($.aZh.cj()>0)v=v.UM(0,$.aZh.cj())
return u.a&&v.c>0?v.o9(0):v},
Y3(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i=this,h=i.c
if(h===$.b5T&&d.c===$.b5V&&i.b===$.b5S&&d.b===$.b5U)return
x=d.b
w=d.c
v=16-C.e.ga4O(x[w-1])
if(v>0){u=new Uint16Array(w+5)
t=A.b5R(x,w,v,u)
s=new Uint16Array(h+5)
r=A.b5R(i.b,h,v,s)}else{s=A.aZi(i.b,0,h,h+2)
t=w
u=x
r=h}q=u[t-1]
p=r-t
o=new Uint16Array(r)
n=A.aZk(u,t,p,o)
m=r+1
if(A.aIA(s,r,o,n)>=0){s[r]=1
A.a7h(s,m,o,n,s)}else s[r]=0
l=new Uint16Array(t+2)
l[t]=1
A.a7h(l,t+1,u,t,l)
k=r-1
for(;p>0;){j=A.blz(q,s,k);--p
A.b5X(j,l,0,s,p,t)
if(s[k]<j){n=A.aZk(l,t,p,o)
A.a7h(s,m,o,n,s)
for(;--j,s[k]<j;)A.a7h(s,m,o,n,s)}--k}$.b5S=i.b
$.b5T=h
$.b5U=x
$.b5V=w
$.aZf.b=s
$.aZg.b=m
$.Lg.b=t
$.aZh.b=v},
gv(d){var x,w,v,u=new A.aIB(),t=this.c
if(t===0)return 6707
x=this.a?83585:429689
for(w=this.b,v=0;v<t;++v)x=u.$2(x,w[v])
return new A.aIC().$1(x)},
k(d,e){if(e==null)return!1
return e instanceof A.eC&&this.c_(0,e)===0},
j8(d,e){if(e.c===0)throw B.c(D.q5)
return this.Y2(e)},
nb(d,e){return this.c_(0,e)<0},
aW(d){var x,w,v
for(x=this.c-1,w=this.b,v=0;x>=0;--x)v=v*65536+w[x]
return this.a?-v:v},
j(d){var x,w,v,u,t,s=this,r=s.c
if(r===0)return"0"
if(r===1){if(s.a)return C.e.j(-s.b[0])
return C.e.j(s.b[0])}x=B.a([],y.s)
r=s.a
w=r?s.o9(0):s
for(;w.c>1;){v=$.b06()
if(v.c===0)B.p(D.q5)
u=w.ayf(v).j(0)
x.push(u)
t=u.length
if(t===1)x.push("000")
if(t===2)x.push("00")
if(t===3)x.push("0")
w=w.Y2(v)}x.push(C.e.j(w.b[0]))
if(r)x.push("-")
return new B.bx(x,y.o).j_(0)},
$icq:1}
A.tV.prototype={
k(d,e){var x,w,v,u,t
if(e==null)return!1
if(e instanceof A.tV){x=this.a
w=e.a
v=x.length
if(v!==w.length)return!1
for(u=0,t=0;t<v;++t)u|=x[t]^w[t]
return u===0}return!1},
gv(d){return B.cv(this.a)},
j(d){return A.b7g(this.a)}}
A.amx.prototype={
E(d,e){if(this.a!=null)throw B.c(B.T("add may only be called once."))
this.a=e},
br(d){if(this.a==null)throw B.c(B.T("add must be called once."))}}
A.WP.prototype={
fW(d){var x=new A.amx(),w=A.bmj(x)
w.E(0,d)
w.br(0)
w=x.a
w.toString
return w}}
A.arF.prototype={
E(d,e){var x=this
if(x.f)throw B.c(B.T("Hash.add() called after close()."))
x.d=x.d+J.cQ(e)
x.e.P(0,e)
x.a_x()},
br(d){var x,w=this
if(w.f)return
w.f=!0
w.anR()
w.a_x()
x=w.a
x.E(0,new A.tV(w.al0()))
x.br(0)},
al0(){var x,w,v,u,t
if(C.q3===$.eQ())return B.eK(this.w.buffer,0,null)
x=this.w
w=x.byteLength
v=new Uint8Array(w)
u=B.kM(v.buffer,0,null)
for(w=x.length,t=0;t<w;++t)u.setUint32(t*4,x[t],!1)
return v},
a_x(){var x,w,v,u=this.e,t=B.kM(u.a.buffer,0,null),s=this.c,r=C.e.j8(u.b,s.byteLength)
for(x=s.length,w=0;w<r;++w){for(v=0;v<x;++v)s[v]=t.getUint32(w*s.byteLength+v*4,!1)
this.aPP(s)}u.kn(u,0,r*s.byteLength)},
anR(){var x,w,v,u,t,s,r=this,q=r.e
q.Oa(0,128)
x=r.d+1+8
w=r.c.byteLength
for(w=((x+w-1&-w)>>>0)-x,v=0;v<w;++v)q.Oa(0,0)
w=r.d
if(w>1125899906842623)throw B.c(B.ae("Hashing is unsupported for messages with more than 2^53 bits."))
u=w*8
t=q.b
q.P(0,new Uint8Array(8))
s=B.kM(q.a.buffer,0,null)
s.setUint32(t,C.e.ez(u,4294967296),!1)
s.setUint32(t+4,u>>>0,!1)}}
A.adW.prototype={
lV(d){var x=new Uint32Array(B.lh(B.a([1779033703,3144134277,1013904242,2773480762,1359893119,2600822924,528734635,1541459225],y.t))),w=new Uint32Array(64),v=new Uint8Array(0)
return new B.Lp(new A.adX(x,w,d,new Uint32Array(16),new A.KH(v,0)))}}
A.aR9.prototype={
aPP(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
for(x=this.x,w=0;w<16;++w)x[w]=d[w]
for(w=16;w<64;++w){v=x[w-2]
u=x[w-7]
t=x[w-15]
x[w]=((((v>>>17|v<<15)^(v>>>19|v<<13)^v>>>10)>>>0)+u>>>0)+((((t>>>7|t<<25)^(t>>>18|t<<14)^t>>>3)>>>0)+x[w-16]>>>0)>>>0}v=this.w
s=v[0]
r=v[1]
q=v[2]
p=v[3]
o=v[4]
n=v[5]
m=v[6]
l=v[7]
for(k=s,w=0;w<64;++w,l=m,m=n,n=o,o=i,p=q,q=r,r=k,k=h){j=(l+(((o>>>6|o<<26)^(o>>>11|o<<21)^(o>>>25|o<<7))>>>0)>>>0)+(((o&n^~o&m)>>>0)+(D.Zn[w]+x[w]>>>0)>>>0)>>>0
i=p+j>>>0
h=j+((((k>>>2|k<<30)^(k>>>13|k<<19)^(k>>>22|k<<10))>>>0)+((k&r^k&q^r&q)>>>0)>>>0)>>>0}v[0]=k+s>>>0
v[1]=r+v[1]>>>0
v[2]=q+v[2]>>>0
v[3]=p+v[3]>>>0
v[4]=o+v[4]>>>0
v[5]=n+v[5]>>>0
v[6]=m+v[6]>>>0
v[7]=l+v[7]>>>0}}
A.adX.prototype={}
A.af_.prototype={
a4V(d,e,f){return B.d2(B.a([this.ax],y.n),null,null,e,null)},
saV(d,e){throw B.c(B.eh(null))}}
A.adN.prototype={
ga1G(){var x,w=this.a,v=w.gaq()
if($.X.W$.z.h(0,v)==null)x=null
else{w=w.gaq()
w=$.X.W$.z.h(0,w)
w.toString
x=B.i0(w)}if(x==null)w=0
else{w=x.d.at
w.toString}return w},
ga1F(){var x,w=this.a,v=w.gaq()
if($.X.W$.z.h(0,v)==null)x=null
else{w=w.gaq()
w=$.X.W$.z.h(0,w)
w.toString
x=B.i0(w)}return x==null?null:x.a.c},
xv(d){var x
this.VW(d)
x=this.a
if(x.giN()&&this.b){x=x.gaq().gU()
x.toString
x.jn()}},
BH(d){},
rN(d){var x,w,v=this,u=v.a
if(!u.giN())return
x=u.gaq().gU()
x.toString
x=x.gak()
w=x.dX
w.toString
x.pf(C.b6,w)
w=v.x.c
w.toString
B.aoV(w)
u=u.gaq().gU()
u.toString
u=u.gak().eW.at
u.toString
v.z=u
v.y=v.ga1G()},
BJ(d){var x,w,v,u,t,s,r=this,q=r.a
if(!q.giN())return
x=q.gaq().gU()
x.toString
if(x.gak().fQ===1){x=q.gaq().gU()
x.toString
x=x.gak().eW.at
x.toString
w=new B.k(x-r.z,0)}else{x=q.gaq().gU()
x.toString
x=x.gak().eW.at
x.toString
w=new B.k(0,x-r.z)}v=r.ga1G()-r.y
u=r.ga1F()===C.ab||r.ga1F()===C.a3
x=!u?v:0
t=u?v:0
q=q.gaq().gU()
q.toString
s=d.a
q.gak().y6(C.b6,s.ae(0,d.c).ae(0,w).ae(0,new B.k(x,t)),s)},
BL(d){var x=this.a,w=x.gaq().gU()
w.toString
w.iZ()
if(x.giN()){w=this.x.c
w.toString
switch(B.M(w).w.a){case 2:case 4:x=x.gaq().gU()
x.toString
x.gak().Up(C.az)
break
case 0:case 1:case 3:case 5:x=x.gaq().gU()
x.toString
x=x.gak()
w=x.dX
w.toString
x.hS(C.az,w)
break}}this.x.a.toString}}
A.Jr.prototype={
al(){return new A.Ot(new B.bq(null,y.g),C.k)}}
A.Ot.prototype={
gEX(){var x,w=null
this.a.toString
x=this.e
if(x==null){x=B.kE(!0,w,!0,!0,w,w,!0)
this.e=x}return x},
gR6(){var x=this.w
x===$&&B.b()
return x},
giN(){this.a.toString
return!0},
aH(){var x,w=this,v=null
w.b8()
w.r=new A.adN(w,w)
x=B.d2(v,v,v,v,w.a.c)
x=A.b6v(x)
w.d=x
x.a4(0,w.ga0d())},
b9(d){var x,w,v=this,u=null
v.by(d)
x=v.a.c
if(x!==d.c){x=v.d
x===$&&B.b()
w=v.ga0d()
x.K(0,w)
x=v.d
x.M$=$.as()
x.G$=0
x=B.d2(u,u,u,u,v.a.c)
x=A.b6v(x)
v.d=x
x.a4(0,w)}if(v.gEX().gc8()){x=v.d
x===$&&B.b()
x=x.a.b
x=x.a===x.b}else x=!1
if(x)v.f=!1
else v.f=!0},
l(){var x=this.e
if(x!=null)x.l()
x=this.d
x===$&&B.b()
x.M$=$.as()
x.G$=0
this.aS()},
avp(){var x,w,v=this
if(v.gEX().gc8()){x=v.d
x===$&&B.b()
x=x.a.b
w=x.a!==x.b}else w=!0
if(w===v.f)return
v.ad(new A.aQZ(v,w))},
azw(d,e){var x,w=this,v=w.azz(e)
if(v!==w.f)w.ad(new A.aQY(w,v))
w.a.toString
x=w.c
x.toString
switch(B.M(x).w.a){case 2:case 4:if(e===C.b6){x=w.x.gU()
if(x!=null)x.iT(d.giS())}return
case 0:case 1:case 3:case 5:break}},
azy(){var x=this.d
x===$&&B.b()
x=x.a.b
if(x.a===x.b)this.x.gU().Tp()},
azz(d){var x,w=this.r
w===$&&B.b()
if(!w.b)return!1
w=this.d
w===$&&B.b()
w=w.a
x=w.b
if(x.a===x.b)return!1
if(d===C.X)return!1
if(d===C.b6)return!0
if(w.a.length!==0)return!0
return!1},
F(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k,j=this,i=null,h=B.M(d),g=d.ao(y.Z)
if(g==null)g=C.eD
x=j.gEX()
j.a.toString
switch(h.w.a){case 2:w=B.o9(d)
j.w=!0
v=$.b0t()
j.a.toString
u=g.w
if(u==null)u=w.giI()
t=g.x
if(t==null){g=w.giI()
t=B.O(102,g.gm(g)>>>16&255,g.gm(g)>>>8&255,g.gm(g)&255)}s=new B.k(-2/B.bI(d,C.c1,y.w).w.b,0)
r=!0
q=!0
p=C.d3
break
case 4:w=B.o9(d)
j.w=!1
v=$.b0s()
j.a.toString
u=g.w
if(u==null)u=w.giI()
t=g.x
if(t==null){g=w.giI()
t=B.O(102,g.gm(g)>>>16&255,g.gm(g)>>>8&255,g.gm(g)&255)}s=new B.k(-2/B.bI(d,C.c1,y.w).w.b,0)
r=!0
q=!0
p=C.d3
break
case 0:case 1:j.w=!1
v=$.b0B()
u=g.w
if(u==null)u=h.ax.b
t=g.x
if(t==null){g=h.ax.b
t=B.O(102,g.gm(g)>>>16&255,g.gm(g)>>>8&255,g.gm(g)&255)}p=i
s=p
r=!1
q=!1
break
case 3:case 5:j.w=!1
v=$.aWE()
u=g.w
if(u==null)u=h.ax.b
t=g.x
if(t==null){g=h.ax.b
t=B.O(102,g.gm(g)>>>16&255,g.gm(g)>>>8&255,g.gm(g)&255)}p=i
s=p
r=!1
q=!1
break
default:p=i
t=p
u=t
s=u
q=s
r=q
v=r}g=d.ao(y.D)
if(g==null)g=C.iH
o=j.a.f
if(o.a)o=g.w.bR(o)
j.a.toString
$label0$1:{break $label0$1}n=j.f
m=j.d
m===$&&B.b()
l=g.x
if(l==null)l=C.aC
k=$.b01()
g=B.b2p(!0,i,i,i,!1,C.dT,C.I,i,A.bre(),m,u,i,s,q,p,2,C.M,!0,!0,!0,!1,x,!1,i,j.x,C.a4,i,k,g.Q,i,i,!1,"\u2022",i,i,i,j.gazv(),j.gazx(),i,i,r,!0,!0,i,!0,i,C.cX,i,t,v,C.bQ,C.bC,!1,n,i,i,i,D.akJ,o,l,C.d9,i,g.at,i,i,g.as,i,i)
j.a.toString
n=j.r
n===$&&B.b()
return B.bJ(i,i,n.a4R(C.bT,new B.iI(g,i)),!1,i,i,!1,!1,i,i,i,i,i,i,i,i,i,i,i,i,i,i,new A.aR_(j),i,i,i,i,i,i,i,i,i,i,i)},
gaq(){return this.x}}
A.apL.prototype={
aDo(d){if(this.b)throw B.c(B.T("FontLoader is already loaded"))
this.c.push(d.cv(new A.apM(),y.E))},
Hl(d){var x=0,w=B.y(y.H),v=this,u,t
var $async$Hl=B.u(function(e,f){if(e===1)return B.v(f,w)
while(true)switch(x){case 0:if(v.b)throw B.c(B.T("FontLoader is already loaded"))
v.b=!0
u=v.c
t=B.a1(u).i("a2<1,a5<~>>")
x=2
return B.z(B.oo(B.a4(new B.a2(u,new A.apO(v),t),!0,t.i("av.E")),y.H),$async$Hl)
case 2:return B.w(null,w)}})
return B.x($async$Hl,w)}}
A.aK1.prototype={}
A.aiH.prototype={
Ec(){var x=0,w=B.y(y.v),v,u=2,t,s,r,q,p
var $async$Ec=B.u(function(d,e){if(d===1){t=e
x=u}while(true)switch(x){case 0:u=4
x=7
return B.z($.wU().rG("AssetManifest.json",!0),$async$Ec)
case 7:s=e
r=A.bdm(s)
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t
$.wU().QI("AssetManifest.json")
throw p
x=6
break
case 3:x=2
break
case 6:case 1:return B.w(v,w)
case 2:return B.v(t,w)}})
return B.x($async$Ec,w)}}
A.arA.prototype={}
A.hk.prototype={
gJ0(d){return"https://fonts.gstatic.com/s/a/"+this.a+".ttf"}}
A.arB.prototype={
j(d){return this.a+"_"+this.b.j(0)}}
A.fz.prototype={
aaf(){var x,w=D.acT.h(0,this.a)
if(w==null)w="Regular"
x=this.b===E.cE?"Italic":""
if(w==="Regular")return x===""?w:x
return w+x},
j(d){var x,w=this.a.a,v=w===3,u=v?"":(w+1)*100
w=this.b.J()
w=B.cP(w,"FontStyle.","")
x=C.c.uJ(w,"normal",v?"regular":"")
return B.h(u)+x},
gv(d){return B.a0(this.a,this.b,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a,C.a)},
k(d,e){var x=this
if(e==null)return!1
if(x===e)return!0
if(J.a7(e)!==B.B(x))return!1
return e instanceof A.fz&&e.a===x.a&&e.b===x.b}}
A.a4w.prototype={
gaPV(d){var x,w=C.c.X(this.a,19,20).toUpperCase(),v=B.oV(w,null)
if(v!=null&&v>=1&&v<=7)return"\u4e3a NCS \u517c\u5bb9\u6027\u4fdd\u7559"
else{x=y.s
if(C.b.p(B.a(["8","9","A","B"],x),w))return"\u5728 (RFC 9562/RFC 4122) \u4e2d\u6307\u5b9a"
else if(C.b.p(B.a(["C","D"],x),w))return"\u4e3a\u4e0e Microsoft \u517c\u5bb9\u800c\u4fdd\u7559"
else if(C.b.p(B.a(["E","F"],x),w))return"\u4fdd\u7559\u4ee5\u4f9b\u5c06\u6765\u5b9a\u4e49"
else return"\u672a\u77e5\u53d8\u79cd"}},
gP4(){var x,w=A.aZe(4095),v=this.a
if(B.cA(B.c4(v.charCodeAt(14)),null)===1)return A.wg(C.c.X(v,14,18),16).CB(0,w).my(0,48).t4(0,A.wg(C.c.X(v,9,13),16).my(0,32)).t4(0,A.wg(C.c.X(v,0,8),16))
if(B.cA(B.c4(v.charCodeAt(14)),null)===6){x=C.c.X(v,0,8)
return A.wg(x,16).my(0,28).t4(0,A.wg(C.c.X(v,9,13),16).my(0,12)).t4(0,A.wg(x,16).CB(0,w))}if(B.cA(B.c4(v.charCodeAt(14)),null)===7)return A.wg(C.c.X(v,0,8)+C.c.X(v,9,13),16)
return A.aZe(0)},
gaEy(){var x,w=B.cA(B.c4(this.a.charCodeAt(14)),null)
$label0$0:{if(1===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           time_low                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|           time_mid            |  ver  |       time_high       |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|         clock_seq         |             node              |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                              node                             |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}if(3===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                            md5_high                           |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|          md5_high             |  ver  |       md5_mid         |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|                        md5_low                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                            md5_low                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}if(4===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           random_a                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|          random_a             |  ver  |       random_b        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|                       random_c                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           random_c                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}if(5===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           sha1_high                           |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|         sha1_high             |  ver  |      sha1_mid         |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|                       sha1_low                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           sha1_low                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}if(6===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           time_high                           |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|           time_mid            |  ver  |       time_low        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|         clock_seq         |             node              |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                              node                             |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}if(7===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           unix_ts_ms                          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|          unix_ts_ms           |  ver  |       rand_a          |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|                        rand_b                             |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                            rand_b                             |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}if(8===w){x=" 0                   1                   2                   3\n 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1 2 3 4 5 6 7 8 9 0 1\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           custom_a                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|          custom_a             |  ver  |       custom_b        |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|var|                       custom_c                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n|                           custom_c                            |\n+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+\n"
break $label0$0}x="\u672a\u77e5\u7248\u672c"
break $label0$0}return x},
gaPo(){var x=this.a
if(C.b.p(B.a([1,6],y.t),B.cA(B.c4(x.charCodeAt(14)),null))){x=B.cG(1582,10,15,0,0,0,0,!0)
if(!B.cd(x))B.p(B.ch(x))
return new B.bh(x,!0).E(0,B.dt(0,0,this.gP4().j8(0,A.aZe(10)).aW(0),0,0))}if(B.cA(B.c4(x.charCodeAt(14)),null)===7)return B.xJ(this.gP4().aW(0),!0)
return B.xJ(0,!1)}}
A.pu.prototype={
al(){return new A.Pc(new B.hy(C.dK,$.as()),C.f3,C.k)}}
A.Pc.prototype={
aMs(){var x,w,v,u=this
u.f=null
w=u.d.a.a
if(w.length===0){u.r=C.ec
u.f="UUID\u4e0d\u80fd\u4e3a\u7a7a"
return}u.e=null
try{w=new A.a4w(w)
w.agU()
u.e=w
u.ad(new A.aSI())}catch(v){x=B.aw(v)
if(y.T.b(x)){u.r=C.ec
u.f="UUID\u683c\u5f0f\u9519\u8bef"
u.ad(new A.aSJ())}J.c_(x)}},
F(d){return new B.mO(new A.aSH(this),null)}}
A.pq.prototype={
gt(d){return this.b},
h(d,e){if(e>=this.b)throw B.c(B.Xm(e,this,null,null,null))
return this.a[e]},
n(d,e,f){if(e>=this.b)throw B.c(B.Xm(e,this,null,null,null))
this.a[e]=f},
st(d,e){var x,w,v,u=this,t=u.b
if(e<t)for(x=u.a,w=e;w<t;++w)x[w]=0
else{t=u.a.length
if(e>t){if(t===0)v=new Uint8Array(e)
else v=u.Fl(e)
C.aa.jU(v,0,u.b,u.a)
u.a=v}}u.b=e},
Oa(d,e){var x=this,w=x.b
if(w===x.a.length)x.a35(w)
x.a[x.b++]=e},
E(d,e){var x=this,w=x.b
if(w===x.a.length)x.a35(w)
x.a[x.b++]=e},
P(d,e){B.em(0,"start")
this.aBY(e,0,null)},
aBY(d,e,f){var x,w,v
if(y.j.b(d))f=J.cQ(d)
if(f!=null){this.aC_(this.b,d,e,f)
return}for(x=J.aC(d),w=0;x.u();){v=x.gT(x)
if(w>=e)this.Oa(0,v);++w}if(w<e)throw B.c(B.T("Too few elements"))},
aC_(d,e,f,g){var x,w,v,u,t=this
if(y.j.b(e)){x=J.aJ(e)
if(f>x.gt(e)||g>x.gt(e))throw B.c(B.T("Too few elements"))}w=g-f
v=t.b+w
t.aBZ(v)
x=t.a
u=d+w
C.aa.df(x,u,t.b+w,x,d)
C.aa.df(t.a,d,u,e,f)
t.b=v},
c1(d,e,f){var x,w,v,u=this
if(e.nb(0,0)||e.Ub(0,u.b))throw B.c(B.d8(e,0,u.b,null,null))
x=u.b
w=u.a
if(x<w.length){C.aa.df(w,e.Y(0,1),u.b+1,u.a,e)
u.a[e]=f;++u.b
return}v=u.Fl(null)
C.aa.jU(v,0,e,u.a)
C.aa.df(v,e.Y(0,1),u.b+1,u.a,e)
v[e]=f;++u.b
u.a=v},
aBZ(d){var x,w=this
if(d<=w.a.length)return
x=w.Fl(d)
C.aa.jU(x,0,w.b,w.a)
w.a=x},
Fl(d){var x=this.a.length*2
if(d!=null&&x<d)x=d
else if(x<8)x=8
return new Uint8Array(x)},
a35(d){var x=this.Fl(null)
C.aa.jU(x,0,d,this.a)
this.a=x},
df(d,e,f,g,h){var x=this.b
if(f>x)throw B.c(B.d8(f,0,x,null,null))
x=this.a
if(B.m(this).i("pq<pq.E>").b(g))C.aa.df(x,e,f,g.a,h)
else C.aa.df(x,e,f,g,h)}}
A.aaj.prototype={}
A.KH.prototype={}
A.a4y.prototype={
J(){return"ValidationMode."+this.b}}
A.a4x.prototype={
TD(){var x,w=null,v=this.a
if(!A.b5G(w,v,!1,D.aqY)){x=A.b5G(w,v,!1,D.aqX)
if(x)B.p(B.cf("The provided UUID is not RFC4122 compliant. It seems you might be using a Microsoft GUID. Try setting `validationMode = ValidationMode.nonStrict`",v,w))
B.p(B.cf("The provided UUID is invalid.",v,w))}},
j(d){return this.a},
k(d,e){if(e==null)return!1
return e instanceof A.a4w&&this.a===e.a},
gv(d){return C.c.gv(this.a)}}
var z=a.updateTypes(["~()","~(lC)","~(mQ)","~(oB)","~(vW)","~(dI,i1?)","Af(Y,ak)","e(Y,jI)","H({background:r6?,backgroundColor:j?,color:j?,decoration:m7?,decorationColor:j?,decorationStyle:Kc?,decorationThickness:R?,fontFeatures:I<om>?,fontSize:R?,fontStyle:ye?,fontWeight:iv?,foreground:r6?,height:R?,letterSpacing:R?,locale:kI?,shadows:I<n7>?,textBaseline:rB?,textStyle:H?,wordSpacing:R?})"])
A.aIB.prototype={
$2(d,e){d=d+e&536870911
d=d+((d&524287)<<10)&536870911
return d^d>>>6},
$S:199}
A.aIC.prototype={
$1(d){d=d+((d&67108863)<<3)&536870911
d^=d>>>11
return d+((d&16383)<<15)&536870911},
$S:44}
A.aQZ.prototype={
$0(){this.a.f=this.b},
$S:0}
A.aQY.prototype={
$0(){this.a.f=this.b},
$S:0}
A.aR_.prototype={
$0(){this.a.gEX().iK()},
$S:0}
A.apM.prototype={
$1(d){return B.eK(d.buffer,d.byteOffset,d.byteLength)},
$S:645}
A.apO.prototype={
$1(d){return d.cv(new A.apN(this.a),y.H)},
$S:646}
A.apN.prototype={
$1(d){return A.aVK(d,this.a.a)},
$S:647}
A.aVk.prototype={
$1(d){return $.b8U.C(0,this.a)},
$S:648}
A.aSI.prototype={
$0(){},
$S:0}
A.aSJ.prototype={
$0(){},
$S:0}
A.aSH.prototype={
$2(d,e){var x,w=null,v="\u8bf7\u5728\u6b64\u5904\u8f93\u5165\u9700\u8981\u89e3\u6790\u7684UUID",u=Math.min(1000,e.b-20),t=this.a,s=t.f
u=B.a([B.fT(B.ca(w,B.vY(!0,C.bp,!1,w,!0,C.I,w,B.CO(),t.d,w,w,w,w,w,2,B.qJ(w,new I.kP(4,B.ik(10),new B.bd(t.r,1,C.B,-1)),w,E.dX,w,w,w,w,!0,w,w,w,w,w,w,w,!0,w,w,w,w,w,w,w,w,D.L3,s,w,w,D.L3,v,w,w,w,w,w,w,w,w,v,w,w,w,w,w,w,w,w,w,w,w,w,w),C.M,!0,w,!0,w,!1,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,t.gaMr(),w,w,!1,w,!1,w,!0,w,C.cX,w,w,C.bQ,C.bC,w,w,w,w,w,w,w,C.aC,w,C.d9,w,w,w,w),C.n,w,w,w,w,w,w,E.dX,w,w,u),w,w)],y.p)
t=t.e
if(t!=null){s=t.a
x=B.P(["UUID",s,"\u6574\u6570\u503c",A.wg(B.cP(s,"-",""),16).j(0),"\u7248\u672c",B.cA(B.c4(s.charCodeAt(14)),w),"\u53d8\u79cd",t.gaPV(0)],y.N,y.A)
if(C.b.p(B.a([1,6,7],y.t),B.cA(B.c4(s.charCodeAt(14)),w))){x.n(0,"\u65f6\u95f4\u6233",t.gP4())
x.n(0,"\u65f6\u95f4",t.gaPo().aPu())}x.n(0,"\u4f4d\u5e03\u5c40",t.gaEy())
C.b.P(u,x.ghK(x).h7(0,new A.aSG(e,d),y.l))}return F.m3(new B.es(new B.ak(0,1/0,e.d,1/0),B.cW(u,C.y,C.d_,C.J,C.G),w),w,w,C.pS,C.w)},
$S:z+6}
A.aSG.prototype={
$1(d){var x=null,w=Math.min(1000,this.a.b-20),v=this.b,u=B.M(v),t=B.ik(8)
v=B.M(v).k1.a
v=B.a([new B.bR(2,C.U,B.O(C.d.af(25.5),v>>>16&255,v>>>8&255,v&255),H.ef,5)],y.V)
return B.fT(B.ca(x,B.cW(B.a([B.b0(d.a,x,x,x,x,D.ana,x,x),E.hR,F.m3(new A.Jr(J.c_(d.b),A.br2().$1$fontSize(16),x),x,x,x,C.ap)],y.p),C.y,C.D,C.J,C.G),C.n,x,x,new B.db(u.at,x,x,t,v,x,C.aq),x,x,C.eF,E.dX,x,x,w),x,x)},
$S:649};(function aliases(){var x=A.a4x.prototype
x.agU=x.TD})();(function installTearOffs(){var x=a._static_2,w=a._instance_1u,v=a._instance_0u,u=a._instance_2u,t=a.installStaticTearOff
x(A,"bre","bjP",7)
var s
w(s=A.adN.prototype,"gSk","xv",1)
w(s,"gSj","BH",1)
w(s,"gBK","rN",2)
w(s,"gI6","BJ",3)
w(s,"gI7","BL",4)
v(s=A.Ot.prototype,"ga0d","avp",0)
u(s,"gazv","azw",5)
v(s,"gazx","azy",0)
v(A.Pc.prototype,"gaMr","aMs",0)
t(A,"br2",0,null,["$19$background$backgroundColor$color$decoration$decorationColor$decorationStyle$decorationThickness$fontFeatures$fontSize$fontStyle$fontWeight$foreground$height$letterSpacing$locale$shadows$textBaseline$textStyle$wordSpacing","$0","$1$color","$2$color$fontSize","$1$height","$3$decoration$fontSize$height","$6$color$decoration$fontSize$fontWeight$height$letterSpacing","$2$fontSize$fontWeight","$3$color$fontSize$height","$2$color$fontSize","$3$color$fontSize$fontWeight","$1$decoration","$1$decorationColor","$3$fontFeatures$fontSize$fontWeight","$1$fontSize","$18$background$backgroundColor$color$decoration$decorationColor$decorationStyle$decorationThickness$fontFeatures$fontSize$fontStyle$fontWeight$foreground$height$letterSpacing$locale$shadows$textBaseline$wordSpacing"],["iE",function(){var r=null
return A.iE(r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},function(d){var r=null
return A.iE(r,r,d,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},function(d,e){var r=null
return A.iE(r,r,d,r,r,r,r,r,e,r,r,r,r,r,r,r,r,r,r)},function(d){var r=null
return A.iE(r,r,r,r,r,r,r,r,r,r,r,r,d,r,r,r,r,r,r)},function(d,e,f){var r=null
return A.iE(r,r,r,d,r,r,r,r,e,r,r,r,f,r,r,r,r,r,r)},function(d,e,f,g,h,i){var r=null
return A.iE(r,r,d,e,r,r,r,r,f,r,g,r,h,i,r,r,r,r,r)},function(d,e){var r=null
return A.iE(r,r,r,r,r,r,r,r,d,r,e,r,r,r,r,r,r,r,r)},function(d,e,f){var r=null
return A.iE(r,r,d,r,r,r,r,r,e,r,r,r,f,r,r,r,r,r,r)},function(d,e){var r=null
return A.iE(r,r,d,r,r,r,r,r,e,r,r,r,r,r,r,r,r,r,r)},function(d,e,f){var r=null
return A.iE(r,r,d,r,r,r,r,r,e,r,f,r,r,r,r,r,r,r,r)},function(d){var r=null
return A.iE(r,r,r,d,r,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},function(d){var r=null
return A.iE(r,r,r,r,d,r,r,r,r,r,r,r,r,r,r,r,r,r,r)},function(d,e,f){var r=null
return A.iE(r,r,r,r,r,r,r,d,e,r,f,r,r,r,r,r,r,r,r)},function(d){var r=null
return A.iE(r,r,r,r,r,r,r,r,d,r,r,r,r,r,r,r,r,r,r)},function(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,a0,a1,a2){return A.iE(d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,a0,a1,null,a2)}],8,0)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(B.L,[A.eC,A.tV,A.amx,A.arF,A.apL,A.aK1,A.aiH,A.arA,A.hk,A.arB,A.fz,A.a4x])
x(B.o3,[A.aIB,A.aSH])
x(B.hK,[A.aIC,A.apM,A.apO,A.apN,A.aVk,A.aSG])
w(A.WP,B.c0)
w(A.adW,A.WP)
w(A.aR9,A.arF)
w(A.adX,A.aR9)
w(A.af_,B.hy)
w(A.adN,B.Az)
x(B.W,[A.Jr,A.pu])
x(B.a_,[A.Ot,A.Pc])
x(B.lu,[A.aQZ,A.aQY,A.aR_,A.aSI,A.aSJ])
w(A.a4w,A.a4x)
w(A.pq,B.a6)
w(A.aaj,A.pq)
w(A.KH,A.aaj)
w(A.a4y,B.pB)})()
B.kj(b.typeUniverse,JSON.parse('{"b11":{"cq":["b11"]},"eC":{"cq":["b11"]},"WP":{"c0":["I<n>","tV"]},"adW":{"c0":["I<n>","tV"],"c0.S":"I<n>","c0.T":"tV"},"Jr":{"W":[],"e":[]},"af_":{"bV":["bK"],"aa":[]},"Ot":{"a_":["Jr"]},"pu":{"W":[],"e":[]},"Pc":{"a_":["pu"]},"pq":{"a6":["1"],"I":["1"],"ah":["1"],"o":["1"]},"aaj":{"pq":["n"],"a6":["n"],"I":["n"],"ah":["n"],"o":["n"]},"KH":{"pq":["n"],"a6":["n"],"I":["n"],"ah":["n"],"o":["n"],"a6.E":"n","o.E":"n","pq.E":"n"}}'))
var y=(function rtii(){var x=B.a3
return{Y:x("dc"),Z:x("oc"),D:x("mx"),T:x("jL"),I:x("a5<dc?>"),M:x("a5<aD<i,I<i>>?>"),r:x("hk"),U:x("fz"),V:x("r<bR>"),m:x("r<a5<e7>>"),s:x("r<i>"),n:x("r<pm>"),p:x("r<e>"),t:x("r<n>"),g:x("bq<jI>"),a:x("I<i>"),j:x("I<@>"),P:x("aD<i,@>"),w:x("iA"),o:x("bx<i>"),N:x("i"),b:x("ck<aD<i,I<i>>?>"),E:x("e7"),z:x("ha<i>"),l:x("e"),y:x("q"),A:x("@"),q:x("dc?"),v:x("aD<i,I<i>>?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.q5=new B.Xw()
D.Py=new A.adW()
D.WC=new A.fz(C.iX,C.dk)
D.WD=new A.fz(C.iY,C.dk)
D.WE=new A.fz(C.iZ,C.dk)
D.WF=new A.fz(C.V,C.dk)
D.WG=new A.fz(C.aE,C.dk)
D.WH=new A.fz(C.j_,C.dk)
D.WI=new A.fz(C.bF,C.dk)
D.WJ=new A.fz(C.iX,E.cE)
D.WK=new A.fz(C.iY,E.cE)
D.WL=new A.fz(C.iZ,E.cE)
D.WM=new A.fz(C.V,E.cE)
D.WN=new A.fz(C.aE,E.cE)
D.WO=new A.fz(C.j_,E.cE)
D.WP=new A.fz(C.bF,E.cE)
D.Zn=B.a(x([1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298]),y.t)
D.acT=new B.b9([C.iX,"Thin",C.iY,"ExtraLight",C.iZ,"Light",C.V,"Regular",C.aE,"Medium",C.j_,"SemiBold",C.bF,"Bold",C.rN,"ExtraBold",C.j0,"Black"],B.a3("b9<iv,i>"))
D.akJ=new B.Ap(null,null,null,null,null,null,null,null,null,null)
D.ana=new B.H(!0,null,null,null,null,null,20,C.aE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.L3=new B.H(!0,C.f3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
D.aqX=new A.a4y(0,"nonStrict")
D.aqY=new A.a4y(1,"strictRFC4122")})();(function staticFields(){$.b5S=null
$.b5T=null
$.b5U=null
$.b5V=null
$.aZf=B.bA("_lastQuoRemDigits")
$.aZg=B.bA("_lastQuoRemUsed")
$.Lg=B.bA("_lastRemUsed")
$.aZh=B.bA("_lastRem_nsh")
$.b0W=null
$.b_0=B.aM(y.N)
$.b8U=B.aM(B.a3("a5<~>"))})();(function lazyInitializers(){var x=a.lazyFinal,w=a.lazy
x($,"bv_","jB",()=>A.wf(0))
x($,"buY","q0",()=>A.wf(1))
x($,"buZ","baO",()=>A.wf(2))
x($,"buW","b07",()=>$.q0().o9(0))
x($,"buU","b06",()=>A.wf(1e4))
w($,"buX","baN",()=>B.bn("^\\s*([+-]?)((0x[a-f0-9]+)|(\\d+)|([a-z0-9]+))\\s*$",!1,!1,!1))
x($,"buV","baM",()=>B.ax7(8))
x($,"bt3","b9Q",()=>new A.aK1())
w($,"bxp","bck",()=>G.bdU())
w($,"bx7","bce",()=>new A.aiH())})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_12",e:"endPart",h:b})})($__dart_deferred_initializers__,"V9Si4Fqs+XTRKVZSJo+7uWj8UYs=");