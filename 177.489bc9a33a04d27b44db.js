(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{"qFu+":function(l,n,u){"use strict";var t=u("CcnG"),i=u("ra/t"),o=u("ntG5"),a=u("ZYCi"),r=u("3A7L"),b=u("Ip0R"),c=u("tXrQ");u("zBoC"),u("1y+R"),u.d(n,"a",function(){return e}),u.d(n,"b",function(){return h});var e=t.ob({encapsulation:0,styles:[["ion-item[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function s(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,7,"ion-item",[],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.zb(l,2).onClick()&&i),"click"===n&&(i=!1!==t.zb(l,4).onClick(u)&&i),i},i.A,i.i)),t.pb(1,49152,null,0,o.C,[t.h,t.k],null,null),t.pb(2,16384,null,0,a.n,[a.m,a.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(3,2),t.pb(4,737280,null,0,r.a,[b.g,c.a,t.k,a.m,[2,a.n]],null,null),(l()(),t.qb(5,0,null,0,2,"ion-label",[],null,null,null,i.B,i.j)),t.pb(6,49152,null,0,o.I,[t.h,t.k],null,null),(l()(),t.Hb(7,0,["",""]))],function(l,n){var u=l(n,3,0,"/category",null==n.context.$implicit?null:n.context.$implicit.slug);l(n,2,0,u),l(n,4,0)},function(l,n){l(n,7,0,null==n.context.$implicit?null:n.context.$implicit.title)})}function p(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,5,"ion-button",[["color","dark"],["fill","clear"],["size","small"]],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.zb(l,2).onClick()&&i),"click"===n&&(i=!1!==t.zb(l,4).onClick(u)&&i),i},i.u,i.c)),t.pb(1,49152,null,0,o.f,[t.h,t.k],{color:[0,"color"],fill:[1,"fill"],size:[2,"size"]},null),t.pb(2,16384,null,0,a.n,[a.m,a.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(3,2),t.pb(4,737280,null,0,r.a,[b.g,c.a,t.k,a.m,[2,a.n]],null,null),(l()(),t.Hb(5,0,["",""]))],function(l,n){l(n,1,0,"dark","clear","small");var u=l(n,3,0,"/tag",null==n.context.$implicit?null:n.context.$implicit.slug);l(n,2,0,u),l(n,4,0)},function(l,n){l(n,5,0,n.context.$implicit.title)})}function h(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,15,"section",[["class","sidebar"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,6,"ion-list",[["class","categories"]],null,null,null,i.D,i.k)),t.pb(2,49152,null,0,o.J,[t.h,t.k],null,null),(l()(),t.qb(3,0,null,0,2,"ion-list-header",[["class","sidebar-header"]],null,null,null,i.C,i.l)),t.pb(4,49152,null,0,o.K,[t.h,t.k],null,null),(l()(),t.Hb(-1,0,["Categories"])),(l()(),t.hb(16777216,null,0,1,null,s)),t.pb(7,278528,null,0,b.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(8,0,null,null,7,"ion-list",[["class","tags"]],null,null,null,i.D,i.k)),t.pb(9,49152,null,0,o.J,[t.h,t.k],null,null),(l()(),t.qb(10,0,null,0,2,"ion-list-header",[["class","sidebar-header"]],null,null,null,i.C,i.l)),t.pb(11,49152,null,0,o.K,[t.h,t.k],null,null),(l()(),t.Hb(-1,0,["Tags"])),(l()(),t.qb(13,0,null,0,2,"div",[["style","padding-top: 15px;"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,p)),t.pb(15,278528,null,0,b.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){var u=n.component;l(n,7,0,u.categories),l(n,15,0,u.tags)},null)}},ymvT:function(l,n,u){"use strict";u.r(n);var t=u("CcnG"),i=u("1y+R"),o=function(){function l(l,n){this.route=l,this.dataService=n,this.authorSlug=this.route.snapshot.paramMap.get("authorSlug")}return l.prototype.ngOnInit=function(){var l=this;this.authorSlug&&this.dataService.author({slug:this.authorSlug}).subscribe(function(n){l.author=n}),this.dataService.posts().subscribe(function(n){for(var u=[],t=0;t<n.length;t++){var i=n[t];i.author&&i.author[l.authorSlug]&&u.push(i)}l.posts=u})},l}(),a=function(){return function(){}}(),r=u("pMnS"),b=u("ra/t"),c=u("ntG5"),e=u("ZYCi"),s=u("3A7L"),p=u("Ip0R"),h=u("tXrQ"),f=u("Xqnl"),g=u("2MiI"),m=u("qFu+"),k=u("zBoC"),q=u("6jz6"),d=u("LmEr"),x=t.ob({encapsulation:0,styles:[[".author[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:.9em}.posts-thumbnail[_ngcontent-%COMP%]   ion-item[_ngcontent-%COMP%]{cursor:pointer}"]],data:{}});function v(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,17,"ion-list",[["class","author"]],null,null,null,b.D,b.k)),t.pb(1,49152,null,0,c.J,[t.h,t.k],null,null),(l()(),t.qb(2,0,null,0,2,"ion-list-header",[],null,null,null,b.C,b.l)),t.pb(3,49152,null,0,c.K,[t.h,t.k],null,null),(l()(),t.Hb(-1,0,["Author profile"])),(l()(),t.qb(5,0,null,0,12,"ion-item",[],null,null,null,b.A,b.i)),t.pb(6,49152,null,0,c.C,[t.h,t.k],null,null),(l()(),t.qb(7,0,null,0,2,"ion-avatar",[["slot","start"]],null,null,null,b.t,b.b)),t.pb(8,49152,null,0,c.b,[],null,null),(l()(),t.qb(9,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(10,0,null,0,7,"ion-label",[],null,null,null,b.B,b.j)),t.pb(11,49152,null,0,c.I,[t.h,t.k],null,null),(l()(),t.qb(12,0,null,0,3,"h2",[],null,null,null,null,null)),(l()(),t.Hb(13,null,[""," \xb7 "])),(l()(),t.qb(14,0,null,null,1,"a",[],[[8,"href",4]],null,null,null,null)),(l()(),t.Hb(15,null,["",""])),(l()(),t.qb(16,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(17,null,["",""]))],null,function(l,n){var u=n.component;l(n,9,0,u.author.avatar||"https://dummyimage.com/300x300/cccccc/ffffff"),l(n,13,0,u.author.name),l(n,14,0,"mailto:"+u.author.email),l(n,15,0,u.author.email),l(n,17,0,u.author.bio)})}function C(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,17,"ion-item",[],null,[[null,"click"]],function(l,n,u){var i=!0;return"click"===n&&(i=!1!==t.zb(l,2).onClick()&&i),"click"===n&&(i=!1!==t.zb(l,4).onClick(u)&&i),i},b.A,b.i)),t.pb(1,49152,null,0,c.C,[t.h,t.k],null,null),t.pb(2,16384,null,0,e.n,[e.m,e.a,[8,null],t.D,t.k],{routerLink:[0,"routerLink"]},null),t.Ab(3,2),t.pb(4,737280,null,0,s.a,[p.g,h.a,t.k,e.m,[2,e.n]],null,null),(l()(),t.qb(5,0,null,0,2,"ion-thumbnail",[["slot","start"]],null,null,null,b.H,b.p)),t.pb(6,49152,null,0,c.sb,[],null,null),(l()(),t.qb(7,0,null,0,0,"img",[],[[8,"src",4]],null,null,null,null)),(l()(),t.qb(8,0,null,0,9,"ion-label",[],null,null,null,b.B,b.j)),t.pb(9,49152,null,0,c.I,[t.h,t.k],null,null),(l()(),t.qb(10,0,null,0,1,"h2",[],null,null,null,null,null)),(l()(),t.Hb(11,null,["",""])),(l()(),t.qb(12,0,null,0,1,"p",[],null,null,null,null,null)),(l()(),t.Hb(13,null,["",""])),(l()(),t.qb(14,0,null,0,3,"p",[],null,null,null,null,null)),(l()(),t.Hb(-1,null,["Posted on "])),(l()(),t.qb(16,0,null,null,1,"em",[],null,null,null,null,null)),(l()(),t.Hb(17,null,["",""]))],function(l,n){var u=l(n,3,0,"/post",n.context.$implicit.slug);l(n,2,0,u),l(n,4,0)},function(l,n){l(n,7,0,n.context.$implicit.thumbnail||"https://dummyimage.com/300x300/cccccc/ffffff"),l(n,11,0,n.context.$implicit.title),l(n,13,0,n.context.$implicit.description),l(n,17,0,n.context.$implicit.date)})}function z(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,6,"ion-list",[["class","posts-thumbnail"]],null,null,null,b.D,b.k)),t.pb(1,49152,null,0,c.J,[t.h,t.k],null,null),(l()(),t.qb(2,0,null,0,2,"ion-list-header",[],null,null,null,b.C,b.l)),t.pb(3,49152,null,0,c.K,[t.h,t.k],null,null),(l()(),t.Hb(-1,0,["Author's posts"])),(l()(),t.hb(16777216,null,0,1,null,C)),t.pb(6,278528,null,0,p.h,[t.O,t.L,t.s],{ngForOf:[0,"ngForOf"]},null)],function(l,n){l(n,6,0,n.component.posts)},null)}function O(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,1,"app-header",[],null,null,null,f.b,f.a)),t.pb(1,114688,null,0,g.a,[],null,null),(l()(),t.qb(2,0,null,null,17,"ion-content",[],null,null,null,b.x,b.f)),t.pb(3,49152,null,0,c.p,[t.h,t.k],null,null),(l()(),t.qb(4,0,null,0,13,"ion-grid",[],null,null,null,b.y,b.g)),t.pb(5,49152,null,0,c.v,[t.h,t.k],null,null),(l()(),t.qb(6,0,null,0,11,"ion-row",[],null,null,null,b.E,b.m)),t.pb(7,49152,null,0,c.cb,[],null,null),(l()(),t.qb(8,0,null,0,5,"ion-col",[["offset-lg","2"],["size","12"],["size-lg","6"],["size-md","8"]],null,null,null,b.w,b.e)),t.pb(9,49152,null,0,c.o,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.hb(16777216,null,0,1,null,v)),t.pb(11,16384,null,0,p.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,0,1,null,z)),t.pb(13,16384,null,0,p.i,[t.O,t.L],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(14,0,null,0,3,"ion-col",[["size","12"],["size-lg","2"],["size-md","4"]],null,null,null,b.w,b.e)),t.pb(15,49152,null,0,c.o,[t.h,t.k],{size:[0,"size"]},null),(l()(),t.qb(16,0,null,0,1,"app-sidebar",[],null,null,null,m.b,m.a)),t.pb(17,114688,null,0,k.a,[i.a],null,null),(l()(),t.qb(18,0,null,0,1,"app-footer",[],null,null,null,q.b,q.a)),t.pb(19,114688,null,0,d.a,[],null,null)],function(l,n){var u=n.component;l(n,1,0),l(n,9,0,"12"),l(n,11,0,!!u.author),l(n,13,0,!!u.posts),l(n,15,0,"12"),l(n,17,0),l(n,19,0)},null)}function y(l){return t.Jb(0,[(l()(),t.qb(0,0,null,null,1,"app-author",[],null,null,null,O,x)),t.pb(1,114688,null,0,o,[e.a,i.a],null,null)],function(l,n){l(n,1,0)},null)}var H=t.mb("app-author",o,y,{},{},[]),I=u("gIcY"),J=u("95zI"),L=u("9opb"),S=u("apKv"),$=u("B4/3"),w=u("iTUp"),A=u("j1ZV");u.d(n,"AuthorPageModuleNgFactory",function(){return j});var j=t.nb(a,[],function(l){return t.wb([t.xb(512,t.j,t.bb,[[8,[r.a,H]],[3,t.j],t.x]),t.xb(4608,p.k,p.j,[t.u,[2,p.q]]),t.xb(4608,I.g,I.g,[]),t.xb(4608,J.a,J.a,[t.z,t.g]),t.xb(4608,L.a,L.a,[J.a,t.j,t.q]),t.xb(4608,S.a,S.a,[J.a,t.j,t.q]),t.xb(1073742336,p.b,p.b,[]),t.xb(1073742336,I.f,I.f,[]),t.xb(1073742336,I.a,I.a,[]),t.xb(1073742336,$.a,$.a,[]),t.xb(1073742336,e.q,e.q,[[2,e.w],[2,e.m]]),t.xb(1073742336,w.a,w.a,[]),t.xb(1073742336,A.a,A.a,[]),t.xb(1073742336,a,a,[]),t.xb(1024,e.k,function(){return[[{path:"",component:o}]]},[])])})},zBoC:function(l,n,u){"use strict";u.d(n,"a",function(){return t}),u("1y+R");var t=function(){function l(l){this.dataService=l}return l.prototype.ngOnInit=function(){var l=this;this.dataService.categories().subscribe(function(n){l.categories=n}),this.dataService.tags().subscribe(function(n){l.tags=n})},l}()}}]);