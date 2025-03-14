((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_25",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
aL9(d,e,f,g,h,i){return new B.Au(e,h,f,i,d,g)},
jm:function jm(d,e){this.a=d
this.b=e},
Au:function Au(d,e,f,g,h,i){var _=this
_.c=d
_.w=e
_.x=f
_.y=g
_.ax=h
_.a=i},
GQ:function GQ(d,e){this.a=d
this.b=e},
Gx:function Gx(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.hp$=e
_.dl$=f
_.bn$=g
_.c=_.a=null},
avq:function avq(d){this.a=d},
avr:function avr(d){this.a=d},
avs:function avs(d){this.a=d},
avt:function avt(d){this.a=d},
JQ:function JQ(){},
JR:function JR(){},
aOd(d,e,f,g){return new B.Up(d,e,f,g,null)},
Up:function Up(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.w=f
_.c=g
_.a=h}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[15],B)
C=c[25]
B.jm.prototype={
G(){return"DismissDirection."+this.b}}
B.Au.prototype={
af(){var x=null
return new B.Gx(new A.b2(x,y.z),x,x,x)}}
B.GQ.prototype={
G(){return"_FlingGestureKind."+this.b}}
B.Gx.prototype={
aJ(){var x,w,v=this
v.a5N()
x=v.geA()
x.bH()
w=x.cS$
w.b=!0
w.a.push(v.gacf())
x.bH()
x.d2$.E(0,v.gach())
v.GQ()},
geA(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.bV(null,D.O,null,1,null,w)
w.d!==$&&A.al()
w.d=x
v=x}return v},
gpy(){var x=this.geA().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
l(){this.geA().l()
var x=this.f
if(x!=null)x.l()
this.a5M()},
gje(){var x=this.a.x
return x===C.lm||x===C.pj||x===C.ln},
qi(d){var x,w,v,u
if(d===0)return C.pl
if(this.gje()){x=this.c.ad(y.o).w
$label0$0:{w=D.ak===x
if(w&&d<0){v=C.ln
break $label0$0}u=D.j===x
if(u&&d>0){v=C.ln
break $label0$0}if(!w)v=u
else v=!0
if(v){v=C.pj
break $label0$0}v=null}return v}return d>0?C.lo:C.pk},
gEF(){this.a.toString
C.a26.h(0,this.qi(this.w))
return 0.4},
gRO(){var x=this.c.gp()
x.toString
return this.gje()?x.a:x.b},
a9A(d){var x,w=this
if(w.x)return
w.y=!0
x=w.geA().r
if(x!=null&&x.a!=null){x=w.geA().x
x===$&&A.b()
w.w=x*w.gRO()*J.eh(w.w)
w.geA().eM()}else{w.w=0
w.geA().sv(0)}w.ab(new B.avq(w))},
a9B(d){var x,w,v=this
if(v.y){x=v.geA().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
x=d.c
x.toString
w=v.w
switch(v.a.x.a){case 1:case 0:v.w=w+x
break
case 4:x=w+x
if(x<0)v.w=x
break
case 5:x=w+x
if(x>0)v.w=x
break
case 2:switch(v.c.ad(y.o).w.a){case 0:x=v.w+x
if(x>0)v.w=x
break
case 1:x=v.w+x
if(x<0)v.w=x
break}break
case 3:switch(v.c.ad(y.o).w.a){case 0:x=v.w+x
if(x<0)v.w=x
break
case 1:x=v.w+x
if(x>0)v.w=x
break}break
case 6:v.w=0
break}if(J.eh(w)!==J.eh(v.w))v.ab(new B.avr(v))
x=v.geA().r
if(!(x!=null&&x.a!=null))v.geA().sv(Math.abs(v.w)/v.gRO())},
aci(){this.a.toString},
GQ(){var x=this,w=J.eh(x.w),v=x.geA(),u=x.gje(),t=x.a
if(u){t.toString
u=new A.i(w,0)}else{t.toString
u=new A.i(0,w)}t=y.A
x.e=new A.aC(y.v.a(v),new A.av(D.h,u,t),t.i("aC<ay.T>"))},
a9n(d){var x,w,v,u,t=this
if(t.w===0)return C.nE
x=d.a
w=x.a
v=x.b
if(t.gje()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.nE
u=t.qi(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.nE
u=t.qi(v)}if(u===t.qi(t.w))return C.agS
return C.agT},
a9z(d){var x,w,v,u=this
if(u.y){x=u.geA().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
u.y=!1
if(u.geA().gbu()===D.ab){u.uf()
return}x=d.a
w=x.a
v=u.gje()?w.a:w.b
switch(u.a9n(x).a){case 1:if(u.gEF()>=1){u.geA().dI()
break}u.w=J.eh(v)
u.geA().vX(Math.abs(v)*0.0033333333333333335)
break
case 2:u.w=J.eh(v)
u.geA().vX(-Math.abs(v)*0.0033333333333333335)
break
case 0:if(u.geA().gbu()!==D.X){x=u.geA().x
x===$&&A.b()
if(x>u.gEF())u.geA().cp()
else u.geA().dI()}break}},
yt(d){return this.acg(d)},
acg(d){var x=0,w=A.F(y.q),v=this
var $async$yt=A.z(function(e,f){if(e===1)return A.C(f,w)
while(true)switch(x){case 0:x=d===D.ab&&!v.y?2:3
break
case 2:x=4
return A.I(v.uf(),$async$yt)
case 4:case 3:if(v.c!=null)v.mp()
return A.D(null,w)}})
return A.E($async$yt,w)},
uf(){var x=0,w=A.F(y.q),v,u=this,t
var $async$uf=A.z(function(d,e){if(d===1)return A.C(e,w)
while(true)switch(x){case 0:if(u.gEF()>=1){u.geA().dI()
x=1
break}x=3
return A.I(u.Es(),$async$uf)
case 3:t=e
if(u.c!=null)if(t)u.akI()
else u.geA().dI()
case 1:return A.D(v,w)}})
return A.E($async$uf,w)},
Es(){var x=0,w=A.F(y.e),v,u=this
var $async$Es=A.z(function(d,e){if(d===1)return A.C(e,w)
while(true)switch(x){case 0:u.a.toString
v=!0
x=1
break
case 1:return A.D(v,w)}})
return A.E($async$Es,w)},
akI(){var x,w,v=this,u=v.a.y
if(u==null){x=v.qi(v.w)
v.a.w.$1(x)}else{u=A.bV(null,u,null,1,null,v)
u.bH()
u.d2$.E(0,v.gae7())
u.bH()
w=u.cS$
w.b=!0
w.a.push(new B.avs(v))
v.f=u
u.cp()
v.ab(new B.avt(v))}},
ae8(){var x=this,w=x.f.gbu(),v=x.a
if(w===D.ab)v.w.$1(x.qi(x.w))
else v.toString},
I(d){var x,w,v,u,t,s,r,q=this,p=null
q.xF(d)
x=q.a
x.toString
w=q.r
if(w!=null){x=q.gje()?D.ad:D.b1
v=q.z
u=v.a
return B.aOd(x,0,A.cr(p,v.b,u),w)}w=q.e
w===$&&A.b()
t=A.Em(new A.lS(x.c,q.as),w,p,!0)
if(x.x===C.pl)return t
x=q.gje()?q.gOX():p
w=q.gje()?q.gOY():p
v=q.gje()?q.gOW():p
u=q.gje()?p:q.gOX()
s=q.gje()?p:q.gOY()
r=q.gje()?p:q.gOW()
return A.iy(q.a.ax,t,D.U,!1,p,p,p,p,v,x,w,p,p,p,p,p,p,p,p,p,p,p,r,u,s)}}
B.JQ.prototype={
c5(){this.d7()
this.cN()
this.eC()},
l(){var x=this,w=x.bn$
if(w!=null)w.K(x.gen())
x.bn$=null
x.aP()}}
B.JR.prototype={
aJ(){this.aZ()
if(this.gpy())this.qg()},
e7(){var x=this.hp$
if(x!=null){x.aU()
x.dL()
this.hp$=null}this.mE()}}
B.Up.prototype={
I(d){var x,w,v=this,u=null,t=v.e
switch(t.a){case 0:x=new A.eZ(v.f,-1)
break
case 1:x=new A.eZ(-1,v.f)
break
default:x=u}w=t===D.ad?Math.max(A.fC(y.v.a(v.c).gv()),0):u
t=t===D.b1?Math.max(A.fC(y.v.a(v.c).gv()),0):u
return A.a8v(new A.dR(x,t,w,v.w,u),D.D,u)}}
var z=a.updateTypes(["~()","~(hN)","~(hO)","~(fh)","W<~>(fd)"])
B.avq.prototype={
$0(){this.a.GQ()},
$S:0}
B.avr.prototype={
$0(){this.a.GQ()},
$S:0}
B.avs.prototype={
$1(d){return this.a.mp()},
$S:8}
B.avt.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gp()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aC(w.a(new A.aC(w.a(x),new A.hK(C.PL),y.n.i("aC<ay.T>"))),new A.av(1,0,v),v.i("aC<ay.T>"))},
$S:0};(function aliases(){var x=B.JQ.prototype
x.a5M=x.l
x=B.JR.prototype
x.a5N=x.aJ})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.Gx.prototype,"gOX","a9A",1)
x(v,"gOY","a9B",2)
w(v,"gach","aci",0)
x(v,"gOW","a9z",3)
x(v,"gacf","yt",4)
w(v,"gae7","ae8",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.j_,[B.jm,B.GQ])
v(B.Au,A.R)
v(B.JQ,A.V)
v(B.JR,B.JQ)
v(B.Gx,B.JR)
w(A.h5,[B.avq,B.avr,B.avt])
v(B.avs,A.ej)
v(B.Up,A.tQ)
x(B.JQ,A.ds)
x(B.JR,A.nm)})()
A.fc(b.typeUniverse,JSON.parse('{"Au":{"R":[],"e":[]},"Gx":{"V":["Au"]},"Up":{"R":[],"e":[]}}'))
var y={v:A.Y("bG<K>"),n:A.Y("hK"),o:A.Y("fg"),z:A.Y("b2<V<R>>"),A:A.Y("av<i>"),g:A.Y("av<K>"),e:A.Y("B"),q:A.Y("~")};(function constants(){C.lm=new B.jm(1,"horizontal")
C.pj=new B.jm(2,"endToStart")
C.ln=new B.jm(3,"startToEnd")
C.pk=new B.jm(4,"up")
C.lo=new B.jm(5,"down")
C.pl=new B.jm(6,"none")
C.P9=new A.hU(D.OY,null,null,null,null)
C.PL=new A.e8(0.4,1,D.aV)
C.a26=new A.a2(D.bC,[],A.Y("a2<jm,K>"))
C.nE=new B.GQ(0,"none")
C.agS=new B.GQ(1,"forward")
C.agT=new B.GQ(2,"reverse")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_25",e:"endPart",h:b})})($__dart_deferred_initializers__,"ZQl+7yqkRXI96F+z1MRRBDhXH+8=");