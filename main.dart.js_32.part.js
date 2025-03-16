((a,b,c)=>{a[b]=a[b]||{}
a[b][c]=a[b][c]||[]
a[b][c].push({p:"main.dart.js_32",e:"beginPart"})})(self,"$__dart_deferred_initializers__","eventLog")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,D,B={
aMd(d,e,f,g,h,i){return new B.AF(e,h,f,i,d,g)},
jo:function jo(d,e){this.a=d
this.b=e},
AF:function AF(d,e,f,g,h,i){var _=this
_.c=d
_.w=e
_.x=f
_.y=g
_.ax=h
_.a=i},
GZ:function GZ(d,e){this.a=d
this.b=e},
GG:function GG(d,e,f,g){var _=this
_.e=_.d=$
_.r=_.f=null
_.w=0
_.y=_.x=!1
_.z=null
_.Q=!1
_.as=d
_.hw$=e
_.dq$=f
_.bm$=g
_.c=_.a=null},
awc:function awc(d){this.a=d},
awd:function awd(d){this.a=d},
awe:function awe(d){this.a=d},
awf:function awf(d){this.a=d},
K0:function K0(){},
K1:function K1(){},
aPd(d,e,f,g){return new B.UE(d,e,f,g,null)},
UE:function UE(d,e,f,g,h){var _=this
_.e=d
_.f=e
_.w=f
_.c=g
_.a=h}},C
J=c[1]
A=c[0]
D=c[2]
B=a.updateHolder(c[15],B)
C=c[26]
B.jo.prototype={
G(){return"DismissDirection."+this.b}}
B.AF.prototype={
ag(){var x=null
return new B.GG(new A.b2(x,y.z),x,x,x)}}
B.GZ.prototype={
G(){return"_FlingGestureKind."+this.b}}
B.GG.prototype={
aM(){var x,w,v=this
v.a6J()
x=v.geJ()
x.bH()
w=x.cX$
w.b=!0
w.a.push(v.gado())
x.bH()
x.cW$.D(0,v.gadq())
v.HA()},
geJ(){var x,w=this,v=w.d
if(v===$){w.a.toString
x=A.bL(null,D.O,null,1,null,w)
w.d!==$&&A.ak()
w.d=x
v=x}return v},
gpV(){var x=this.geJ().r
if(!(x!=null&&x.a!=null)){x=this.f
if(x==null)x=null
else{x=x.r
x=x!=null&&x.a!=null}x=x===!0}else x=!0
return x},
l(){this.geJ().l()
var x=this.f
if(x!=null)x.l()
this.a6I()},
gji(){var x=this.a.x
return x===C.lr||x===C.pv||x===C.ls},
qG(d){var x,w,v,u
if(d===0)return C.px
if(this.gji()){x=this.c.ad(y.o).w
$label0$0:{w=D.a9===x
if(w&&d<0){v=C.ls
break $label0$0}u=D.j===x
if(u&&d>0){v=C.ls
break $label0$0}if(!w)v=u
else v=!0
if(v){v=C.pv
break $label0$0}v=null}return v}return d>0?C.lt:C.pw},
gFh(){this.a.toString
C.a2t.h(0,this.qG(this.w))
return 0.4},
gSx(){var x=this.c.gp()
x.toString
return this.gji()?x.a:x.b},
aaF(d){var x,w=this
if(w.x)return
w.y=!0
x=w.geJ().r
if(x!=null&&x.a!=null){x=w.geJ().x
x===$&&A.b()
w.w=x*w.gSx()*J.en(w.w)
w.geJ().eT()}else{w.w=0
w.geJ().sA(0)}w.a6(new B.awc(w))},
aaG(d){var x,w,v=this
if(v.y){x=v.geJ().r
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
break}if(J.en(w)!==J.en(v.w))v.a6(new B.awd(v))
x=v.geJ().r
if(!(x!=null&&x.a!=null))v.geJ().sA(Math.abs(v.w)/v.gSx())},
adr(){this.a.toString},
HA(){var x=this,w=J.en(x.w),v=x.geJ(),u=x.gji(),t=x.a
if(u){t.toString
u=new A.i(w,0)}else{t.toString
u=new A.i(0,w)}t=y.A
x.e=new A.aC(y.v.a(v),new A.at(D.h,u,t),t.i("aC<aA.T>"))},
aas(d){var x,w,v,u,t=this
if(t.w===0)return C.nO
x=d.a
w=x.a
v=x.b
if(t.gji()){x=Math.abs(w)
if(x-Math.abs(v)<400||x<700)return C.nO
u=t.qG(w)}else{x=Math.abs(v)
if(x-Math.abs(w)<400||x<700)return C.nO
u=t.qG(v)}if(u===t.qG(t.w))return C.ahr
return C.ahs},
aaE(d){var x,w,v,u=this
if(u.y){x=u.geJ().r
x=x!=null&&x.a!=null}else x=!0
if(x)return
u.y=!1
if(u.geJ().gbs()===D.aa){u.uL()
return}x=d.a
w=x.a
v=u.gji()?w.a:w.b
switch(u.aas(x).a){case 1:if(u.gFh()>=1){u.geJ().d6()
break}u.w=J.en(v)
u.geJ().wq(Math.abs(v)*0.0033333333333333335)
break
case 2:u.w=J.en(v)
u.geJ().wq(-Math.abs(v)*0.0033333333333333335)
break
case 0:if(u.geJ().gbs()!==D.T){x=u.geJ().x
x===$&&A.b()
if(x>u.gFh())u.geJ().cc()
else u.geJ().d6()}break}},
z0(d){return this.adp(d)},
adp(d){var x=0,w=A.G(y.q),v=this
var $async$z0=A.z(function(e,f){if(e===1)return A.D(f,w)
while(true)switch(x){case 0:x=d===D.aa&&!v.y?2:3
break
case 2:x=4
return A.K(v.uL(),$async$z0)
case 4:case 3:if(v.c!=null)v.my()
return A.E(null,w)}})
return A.F($async$z0,w)},
uL(){var x=0,w=A.G(y.q),v,u=this,t
var $async$uL=A.z(function(d,e){if(d===1)return A.D(e,w)
while(true)switch(x){case 0:if(u.gFh()>=1){u.geJ().d6()
x=1
break}x=3
return A.K(u.F4(),$async$uL)
case 3:t=e
if(u.c!=null)if(t)u.am4()
else u.geJ().d6()
case 1:return A.E(v,w)}})
return A.F($async$uL,w)},
F4(){var x=0,w=A.G(y.e),v,u=this
var $async$F4=A.z(function(d,e){if(d===1)return A.D(e,w)
while(true)switch(x){case 0:u.a.toString
v=!0
x=1
break
case 1:return A.E(v,w)}})
return A.F($async$F4,w)},
am4(){var x,w,v=this,u=v.a.y
if(u==null){x=v.qG(v.w)
v.a.w.$1(x)}else{u=A.bL(null,u,null,1,null,v)
u.bH()
u.cW$.D(0,v.gafj())
u.bH()
w=u.cX$
w.b=!0
w.a.push(new B.awe(v))
v.f=u
u.cc()
v.a6(new B.awf(v))}},
afk(){var x=this,w=x.f.gbs(),v=x.a
if(w===D.aa)v.w.$1(x.qG(x.w))
else v.toString},
I(d){var x,w,v,u,t,s,r,q=this,p=null
q.ye(d)
x=q.a
x.toString
w=q.r
if(w!=null){x=q.gji()?D.ae:D.b3
v=q.z
u=v.a
return B.aPd(x,0,A.cq(p,v.b,u),w)}w=q.e
w===$&&A.b()
t=A.Ev(new A.lW(x.c,q.as),w,p,!0)
if(x.x===C.px)return t
x=q.gji()?q.gPG():p
w=q.gji()?q.gPH():p
v=q.gji()?q.gPF():p
u=q.gji()?p:q.gPG()
s=q.gji()?p:q.gPH()
r=q.gji()?p:q.gPF()
return A.iD(q.a.ax,t,D.U,!1,p,p,p,p,v,x,w,p,p,p,p,p,p,p,p,p,p,p,r,u,s)}}
B.K0.prototype={
c7(){this.d7()
this.cO()
this.ex()},
l(){var x=this,w=x.bm$
if(w!=null)w.K(x.gej())
x.bm$=null
x.aS()}}
B.K1.prototype={
aM(){this.b2()
if(this.gpV())this.qE()},
ec(){var x=this.hw$
if(x!=null){x.b_()
x.dR()
this.hw$=null}this.mM()}}
B.UE.prototype={
I(d){var x,w,v=this,u=null,t=v.e
switch(t.a){case 0:x=new A.f4(v.f,-1)
break
case 1:x=new A.f4(-1,v.f)
break
default:x=u}w=t===D.ae?Math.max(A.fD(y.v.a(v.c).gA()),0):u
t=t===D.b3?Math.max(A.fD(y.v.a(v.c).gA()),0):u
return A.a8Q(new A.dT(x,t,w,v.w,u),D.H,u)}}
var z=a.updateTypes(["~()","~(fK)","~(fL)","~(eS)","W<~>(fh)"])
B.awc.prototype={
$0(){this.a.HA()},
$S:0}
B.awd.prototype={
$0(){this.a.HA()},
$S:0}
B.awe.prototype={
$1(d){return this.a.my()},
$S:8}
B.awf.prototype={
$0(){var x,w,v,u=this.a
u.z=u.c.gp()
x=u.f
x.toString
w=y.v
v=y.g
u.r=new A.aC(w.a(new A.aC(w.a(x),new A.hP(C.Q5),y.n.i("aC<aA.T>"))),new A.at(1,0,v),v.i("aC<aA.T>"))},
$S:0};(function aliases(){var x=B.K0.prototype
x.a6I=x.l
x=B.K1.prototype
x.a6J=x.aM})();(function installTearOffs(){var x=a._instance_1u,w=a._instance_0u
var v
x(v=B.GG.prototype,"gPG","aaF",1)
x(v,"gPH","aaG",2)
w(v,"gadq","adr",0)
x(v,"gPF","aaE",3)
x(v,"gado","z0",4)
w(v,"gafj","afk",0)})();(function inheritance(){var x=a.mixinHard,w=a.inheritMany,v=a.inherit
w(A.ik,[B.jo,B.GZ])
v(B.AF,A.R)
v(B.K0,A.U)
v(B.K1,B.K0)
v(B.GG,B.K1)
w(A.fI,[B.awc,B.awd,B.awf])
v(B.awe,A.dV)
v(B.UE,A.tZ)
x(B.K0,A.dl)
x(B.K1,A.ns)})()
A.eK(b.typeUniverse,JSON.parse('{"AF":{"R":[],"e":[]},"GG":{"U":["AF"]},"UE":{"R":[],"e":[]}}'))
var y={v:A.Z("bH<H>"),n:A.Z("hP"),o:A.Z("f6"),z:A.Z("b2<U<R>>"),A:A.Z("at<i>"),g:A.Z("at<H>"),e:A.Z("B"),q:A.Z("~")};(function constants(){C.lr=new B.jo(1,"horizontal")
C.pv=new B.jo(2,"endToStart")
C.ls=new B.jo(3,"startToEnd")
C.pw=new B.jo(4,"up")
C.lt=new B.jo(5,"down")
C.px=new B.jo(6,"none")
C.Ps=new A.hn(D.Pf,null,null,null,null)
C.Q5=new A.ed(0.4,1,D.aY)
C.a2t=new A.a4(D.bG,[],A.Z("a4<jo,H>"))
C.nO=new B.GZ(0,"none")
C.ahr=new B.GZ(1,"forward")
C.ahs=new B.GZ(2,"reverse")})()};
((a,b)=>{a[b]=a.current
a.eventLog.push({p:"main.dart.js_32",e:"endPart",h:b})})($__dart_deferred_initializers__,"VoOTbexnYXkNLjZU8KlO1tjFv/U=");