((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_35",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
aN5(d,e,f,g,h,i){return new B.AM(e,h,f,i,d,g)},
jt:function jt(d,e){this.a=d
this.b=e},
AM:function AM(d,e,f,g,h,i){var _=this
_.c=d
_.w=e
_.x=f
_.y=g
_.ax=h
_.a=i},
H7:function H7(d,e){this.a=d
this.b=e},
GP:function GP(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.hD$=e
_.dk$=f
_.bl$=g
_.c=_.a=null},
awR:function awR(d){this.a=d},
awS:function awS(d){this.a=d},
awT:function awT(d){this.a=d},
awU:function awU(d){this.a=d},
Kd:function Kd(){},
Ke:function Ke(){},
aQ5(d,e,f,g){return new B.V0(d,e,f,g,null)},
V0:function V0(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.w=f
_.c=g
_.a=h}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[16],B)
C=c[27]
B.jt.prototype={
G(){return"DismissDirection."+this.b}}
B.AM.prototype={
ah(){var x=null
return new B.GP(new A.b4(x,y.z),x,x,x)}}
B.H7.prototype={
G(){return"_FlingGestureKind."+this.b}}
B.GP.prototype={
aK(){var x,w,v=this
v.a6X()
x=v.geP()
x.bN()
w=x.cY$
w.b=!0
w.a.push(v.gadI())
x.bN()
x.cX$.D(0,v.gadK())
v.HF()},
geP(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.bJ(null,D.O,null,1,null,w)
w.d!==$&&A.ak()
w.d=x
v=x}return v},
gpZ(){var x=this.geP().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
l(){this.geP().l()
var x=this.f
if(x!=null)x.l()
this.a6W()},
gjm(){var x=this.a.x
return x===C.lu||x===C.py||x===C.lv},
qK(d){var x,w,v,u
if(d===0)return C.pA
if(this.gjm()){x=this.c.ab(y.o).w
$label0$0:{w=D.ab===x
if(w&&d<0){v=C.lv
break $label0$0}u=D.j===x
if(u&&d>0){v=C.lv
break $label0$0}if(!w)v=u
else v=!0
if(v){v=C.py
break $label0$0}v=null}return v}return d>0?C.lw:C.pz},
gFm(){this.a.toString
C.a6L.h(0,this.qK(this.w))
return 0.4},
gSN(){var x=this.c.gq()
x.toString
return this.gjm()?x.a:x.b},
aaU(d){var x,w=this
if(w.x)return
w.y=!0
x=w.geP().r
if(x!=null&&x.a!=null){x=w.geP().x
x===$&&A.b()
w.w=x*w.gSN()*J.eq(w.w)
w.geP().f_()}else{w.w=0
w.geP().sB(0)}w.a3(new B.awR(w))},
aaV(d){var x,w,v=this
if(v.y){x=v.geP().r
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
case 2:switch(v.c.ab(y.o).w.a){case 0:x=v.w+x
if(x>0)v.w=x
break
case 1:x=v.w+x
if(x<0)v.w=x
break}break
case 3:switch(v.c.ab(y.o).w.a){case 0:x=v.w+x
if(x<0)v.w=x
break
case 1:x=v.w+x
if(x>0)v.w=x
break}break
case 6:v.w=0
break}if(J.eq(w)!==J.eq(v.w))v.a3(new B.awS(v))
x=v.geP().r
if(!(x!=null&&x.a!=null))v.geP().sB(Math.abs(v.w)/v.gSN())},
adL(){this.a.toString},
HF(){var x=this,w=J.eq(x.w),v=x.geP(),u=x.gjm(),t=x.a
if(u){t.toString
u=new A.i(w,0)}else{t.toString
u=new A.i(0,w)}t=y.A
x.e=new A.aH(y.v.a(v),new A.at(D.h,u,t),t.i("aH<aB.T>"))},
aaH(d){var x,w,v,u,t=this
if(t.w===0)return C.nR
x=d.a
w=x.a
v=x.b
if(t.gjm()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.nR
u=t.qK(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.nR
u=t.qK(v)}if(u===t.qK(t.w))return C.alM
return C.alN},
aaT(d){var x,w,v,u=this
if(u.y){x=u.geP().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
u.y=!1
if(u.geP().gbu()===D.ad){u.uM()
return}x=d.a
w=x.a
v=u.gjm()?w.a:w.b
switch(u.aaH(x).a){case 1:if(u.gFm()>=1){u.geP().d_()
break}u.w=J.eq(v)
u.geP().wu(Math.abs(v)*0.0033333333333333335)
break
case 2:u.w=J.eq(v)
u.geP().wu(-Math.abs(v)*0.0033333333333333335)
break
case 0:if(u.geP().gbu()!==D.T){x=u.geP().x
x===$&&A.b()
if(x>u.gFm())u.geP().cf()
else u.geP().d_()}break}},
z9(d){return this.adJ(d)},
adJ(d){var x=0,w=A.I(y.q),v=this
var $async$z9=A.C(function(e,f){if(e===1)return A.F(f,w)
while(true)switch(x){case 0:x=d===D.ad&&!v.y?2:3
break
case 2:x=4
return A.L(v.uM(),$async$z9)
case 4:case 3:if(v.c!=null)v.mC()
return A.G(null,w)}})
return A.H($async$z9,w)},
uM(){var x=0,w=A.I(y.q),v,u=this,t
var $async$uM=A.C(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:if(u.gFm()>=1){u.geP().d_()
x=1
break}x=3
return A.L(u.F9(),$async$uM)
case 3:t=e
if(u.c!=null)if(t)u.ams()
else u.geP().d_()
case 1:return A.G(v,w)}})
return A.H($async$uM,w)},
F9(){var x=0,w=A.I(y.e),v,u=this
var $async$F9=A.C(function(d,e){if(d===1)return A.F(e,w)
while(true)switch(x){case 0:u.a.toString
v=!0
x=1
break
case 1:return A.G(v,w)}})
return A.H($async$F9,w)},
ams(){var x,w,v=this,u=v.a.y
if(u==null){x=v.qK(v.w)
v.a.w.$1(x)}else{u=A.bJ(null,u,null,1,null,v)
u.bN()
u.cX$.D(0,v.gafD())
u.bN()
w=u.cY$
w.b=!0
w.a.push(new B.awT(v))
v.f=u
u.cf()
v.a3(new B.awU(v))}},
afE(){var x=this,w=x.f.gbu(),v=x.a
if(w===D.ad)v.w.$1(x.qK(x.w))
else v.toString},
I(d){var x,w,v,u,t,s,r,q=this,p=null
q.yn(d)
x=q.a
x.toString
w=q.r
if(w!=null){x=q.gjm()?D.ag:D.al
v=q.z
u=v.a
return B.aQ5(x,0,A.cz(p,v.b,u),w)}w=q.e
w===$&&A.b()
t=A.EE(new A.jE(x.c,q.as),w,p,!0)
if(x.x===C.pA)return t
x=q.gjm()?q.gPU():p
w=q.gjm()?q.gPV():p
v=q.gjm()?q.gPT():p
u=q.gjm()?p:q.gPU()
s=q.gjm()?p:q.gPV()
r=q.gjm()?p:q.gPT()
return A.iG(q.a.ax,t,D.S,!1,p,p,p,p,v,x,w,p,p,p,p,p,p,p,p,p,p,p,r,u,s)}}
B.Kd.prototype={
c4(){this.d0()
this.cJ()
this.eu()},
l(){var x=this,w=x.bl$
if(w!=null)w.K(x.geh())
x.bl$=null
x.aQ()}}
B.Ke.prototype={
aK(){this.b0()
if(this.gpZ())this.qI()},
ej(){var x=this.hD$
if(x!=null){x.b2()
x.dX()
this.hD$=null}this.mQ()}}
B.V0.prototype={
I(d){var x,w,v=this,u=null,t=v.e
switch(t.a){case 0:x=new A.f8(v.f,-1)
break
case 1:x=new A.f8(-1,v.f)
break
default:x=u}w=t===D.ag?Math.max(A.fI(y.v.a(v.c).gB()),0):u
t=t===D.al?Math.max(A.fI(y.v.a(v.c).gB()),0):u
return A.a9i(new A.dX(x,t,w,v.w,u),D.H,u)}}
var z=a.updateTypes(["~()","~(fP)","~(fQ)","~(eV)","W<~>(fm)"])
B.awR.prototype={
$0(){this.a.HF()},
$S:0}
B.awS.prototype={
$0(){this.a.HF()},
$S:0}
B.awT.prototype={
$1(d){return this.a.mC()},
$S:7}
B.awU.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gq()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aH(w.a(new A.aH(w.a(x),new A.hT(C.Um),y.n.i("aH<aB.T>"))),new A.at(1,0,v),v.i("aH<aB.T>"))},
$S:0};(function aliases(){var x=B.Kd.prototype
x.a6W=x.l
x=B.Ke.prototype
x.a6X=x.aK})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.GP.prototype,"gPU","aaU",1)
x(v,"gPV","aaV",2)
w(v,"gadK","adL",0)
x(v,"gPT","aaT",3)
x(v,"gadI","z9",4)
w(v,"gafD","afE",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.ip,[B.jt,B.H7])
v(B.AM,A.S)
v(B.Kd,A.V)
v(B.Ke,B.Kd)
v(B.GP,B.Ke)
w(A.fo,[B.awR,B.awS,B.awU])
v(B.awT,A.dS)
v(B.V0,A.u6)
x(B.Kd,A.dn)
x(B.Ke,A.ny)})()
A.el(b.typeUniverse,JSON.parse('{"AM":{"S":[],"e":[]},"GP":{"V":["AM"]},"V0":{"S":[],"e":[]}}'))
var y={v:A.Z("bB<B>"),n:A.Z("hT"),o:A.Z("eU"),z:A.Z("b4<V<S>>"),A:A.Z("at<i>"),g:A.Z("at<B>"),e:A.Z("D"),q:A.Z("~")};(function constants(){C.lu=new B.jt(1,"horizontal")
C.py=new B.jt(2,"endToStart")
C.lv=new B.jt(3,"startToEnd")
C.pz=new B.jt(4,"up")
C.lw=new B.jt(5,"down")
C.pA=new B.jt(6,"none")
C.TJ=new A.i1(D.Tt,null,null,null,null)
C.Um=new A.ee(0.4,1,D.b3)
C.a6L=new A.a5(D.bI,[],A.Z("a5<jt,B>"))
C.nR=new B.H7(0,"none")
C.alM=new B.H7(1,"forward")
C.alN=new B.H7(2,"reverse")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_35",e:"endPart",h:b})})($__dart_deferred_initializers__,"vpCoXm6h/R1azk0M+qqphbvdznY=");