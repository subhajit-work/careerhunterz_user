(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{WBnD:function(l,n,u){"use strict";u.r(n);var e=u("CcnG"),s=u("ZZ/e"),a=u("AytR"),t=u("4ZJv"),i=u("9ans"),o=function(){function l(l,n,u,e,s,t){this.activatedRoute=l,this.router=n,this.http=u,this.modalController=e,this.commonUtils=s,this.authService=t,this.main_url=a.a.apiUrl,this.file_url=a.a.fileUrl,this.model={},this.isListLoading=!1,this.page=1,this.noDataFound=!0,this.disableApplyButton=!1,this.pager={},this.step=0}return l.prototype.setStep=function(l){this.step=l},l.prototype.commonFunction=function(){var l=this;this.current_url_path_name=this.router.url.split("/")[1]+"ColumnSelect",this.commonUtils.getPathNameFun(this.router.url.split("/")[1]),this.parms_action_id=this.activatedRoute.snapshot.paramMap.get("id"),this.listing_view_url="cms/frontend_return_index",this.viewPageDataSubscribe=this.commonUtils.getSiteInfoObservable.subscribe(function(n){console.log("getSiteInfoObservable res>>>>>>>>>>>>>>>>>>>.. >",n),n&&l.viewPageData()}),this.getCompanyAbout_api="get-company-about",this.getCompanyAbout(),this.getCompanyWork_api="get-company-work",this.getCompanyWork(),this.viewPageDataSubscribe=this.commonUtils.signinCheckObservable.subscribe(function(n){console.log("getSiteInfoObservable res>>>>>>>>>>>>>>>>>>>..11111 >",n),n&&l.viewPageData()}),this.viewPageDataSubscribe=this.commonUtils.commonDataobservable.subscribe(function(n){console.log("commonPageData data res>>>>>>>>>>>>>>>>>>>.. >",n),n&&(l.commonPageData=n)})},l.prototype.ngOnInit=function(){},l.prototype.onScrollHedearFix=function(l){console.log("scroll onnnnnnnnn",l.detail.scrollTop),l.detail.scrollTop>56?(console.log("scrolling down, hiding footer...iffffffffffff"),this.isFixedHeader=!0):(console.log("scrolling up, revealing footer...elseeeeeeeeeeeeeee"),this.isFixedHeader=!1)},l.prototype.ionViewWillEnter=function(){this.commonFunction()},l.prototype.ionViewDidEnter=function(){this.content.scrollToTop(0)},l.prototype.openDescription=function(l,n,u){n.isOpenDescription=!n.isOpenDescription},l.prototype.getCompanyAbout=function(){var l=this;this.selectLoadingDepend=!0,this.getAboutSubscribe=this.http.get(this.getCompanyAbout_api).subscribe(function(n){l.selectLoadingDepend=!1,l.desc=n.return_data,console.log("sss",n)},function(n){l.selectLoadingDepend=!1})},l.prototype.getCompanyWork=function(){var l=this;this.selectLoadingDepend=!0,this.getWorkSubscribe=this.http.get(this.getCompanyWork_api).subscribe(function(n){l.selectLoadingDepend=!1,l.work=n.return_data,console.log("work",n)},function(n){l.selectLoadingDepend=!1})},l.prototype.viewPageData=function(){var l=this;this.viewLoadData=!0,this.viewPageDataSubscribe=this.http.get(this.listing_view_url).subscribe(function(n){l.viewLoadData=!1,console.log("view data  res --------------------\x3e",n.return_data),n.return_status>0&&(l.viewData=n.return_data.about_us)},function(n){l.viewLoadData=!1})},l.prototype.ngOnDestroy=function(){void 0!==this.viewPageDataSubscribe&&this.viewPageDataSubscribe.unsubscribe()},l}(),b=function(){return function(){}}(),r=u("NcP4"),c=u("gQ9u"),d=u("7jYL"),m=u("No7X"),g=u("bIR2"),p=u("xK8f"),h=u("pMnS"),v=u("oBZk"),C=u("xuDi"),f=u("Ip0R"),A=u("X59n"),w=u("t/Na"),y=u("ZYCi"),k=u("HWVv"),K=u("iw74"),_=u("Sy1n"),D=u("gIcY"),q=u("1/Ci"),x=u("njpK"),I=u("IV+P"),E=e.qb({encapsulation:0,styles:[[""]],data:{}});function P(l){return e.Mb(0,[e.Ib(402653184,1,{content:0}),(l()(),e.sb(1,0,null,null,214,"ion-content",[],null,[[null,"ionScroll"]],function(l,n,u){var e=!0;return"ionScroll"===n&&(e=!1!==l.component.onScrollHedearFix(u)&&e),e},v.V,v.j)),e.rb(2,49152,[[1,4]],0,s.t,[e.h,e.k],{scrollEvents:[0,"scrollEvents"]},null),(l()(),e.sb(3,0,null,0,3,"common-header",[],null,[["document","click"],["document","touchstart"]],function(l,n,u){var s=!0;return"document:click"===n&&(s=!1!==e.Cb(l,6).handleOutsideClick(u)&&s),"document:touchstart"===n&&(s=!1!==e.Cb(l,6).handleOutsideClick(u)&&s),s},C.b,C.a)),e.rb(4,278528,null,0,f.j,[e.t,e.u,e.k,e.G],{ngClass:[0,"ngClass"]},null),e.Fb(5,{"fix-header":0}),e.rb(6,245760,null,0,A.a,[i.a,t.a,s.Fb,w.c,y.m,s.Gb,k.a,s.Jb,K.b,s.a,_.a,s.Hb,e.k],null,null),(l()(),e.sb(7,0,null,0,10,"div",[["class","sub-header"]],null,null,null,null,null)),(l()(),e.sb(8,0,null,null,9,"div",[["class","sub-header-inner"]],null,null,null,null,null)),(l()(),e.sb(9,0,null,null,1,"h1",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["About Us "])),(l()(),e.sb(11,0,null,null,6,"div",[["class","breadcrumbs"]],null,null,null,null,null)),(l()(),e.sb(12,0,null,null,1,"a",[["class","breadcrumbs_item"],["href","#"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Home"])),(l()(),e.sb(14,0,null,null,1,"span",[["class","breadcrumbs_delimiter"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["|"])),(l()(),e.sb(16,0,null,null,1,"span",[["class","breadcrumbs_item current"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,["About Us"])),(l()(),e.sb(18,0,null,0,195,"div",[["class","detailsPage-wrapper about-us"]],null,null,null,null,null)),(l()(),e.sb(19,0,null,null,38,"div",[["class","who-we-are"]],null,null,null,null,null)),(l()(),e.sb(20,0,null,null,27,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.sb(21,0,null,null,26,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.sb(22,0,null,null,2,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.sb(23,0,null,null,1,"div",[["class","image-wrapper"]],null,null,null,null,null)),(l()(),e.sb(24,0,null,null,0,"img",[["src","assets/images/who_we_are.jpg"]],null,null,null,null,null)),(l()(),e.sb(25,0,null,null,22,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.sb(26,0,null,null,21,"div",[["class","content-wrapper"]],null,null,null,null,null)),(l()(),e.sb(27,0,null,null,10,"div",[["class","section-tittle-box"]],null,null,null,null,null)),(l()(),e.sb(28,0,null,null,2,"div",[["class","section-tittle"]],null,null,null,null,null)),(l()(),e.sb(29,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["WHO WE ARE"])),(l()(),e.sb(31,0,null,null,4,"div",[["class","section-main-title"]],null,null,null,null,null)),(l()(),e.sb(32,0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["We Choose a Human "])),(l()(),e.sb(34,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Resources Services"])),(l()(),e.sb(36,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Train people quickly well with e-business.So they highly efficient manufactured products. Our advisers provides a broad menu service that identifies the task your requirements in the organization job and designs the task description with skill requirements for the task. "])),(l()(),e.sb(38,0,null,null,9,"ul",[],null,null,null,null,null)),(l()(),e.sb(39,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.sb(40,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-caret-square-o-right"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Highly experienced Emphires employees "])),(l()(),e.sb(42,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.sb(43,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-caret-square-o-right"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" In easy way to train employees for clients "])),(l()(),e.sb(45,0,null,null,2,"li",[],null,null,null,null,null)),(l()(),e.sb(46,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-caret-square-o-right"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Our employees are expert and professional "])),(l()(),e.sb(48,0,null,null,1,"div",[["class","hero-app-1 custom-animation"]],null,null,null,null,null)),(l()(),e.sb(49,0,null,null,0,"img",[["src","assets/images/custom-animation.webp"]],null,null,null,null,null)),(l()(),e.sb(50,0,null,null,1,"div",[["class","hero-app-2 custom-animation2"]],null,null,null,null,null)),(l()(),e.sb(51,0,null,null,0,"img",[["src","assets/images/custom-animation2.webp"]],null,null,null,null,null)),(l()(),e.sb(52,0,null,null,1,"div",[["class","hero-app-5 custom-animation4"]],null,null,null,null,null)),(l()(),e.sb(53,0,null,null,0,"img",[["src","assets/images/custom-animation4.webp"]],null,null,null,null,null)),(l()(),e.sb(54,0,null,null,1,"div",[["class","hero-app-7 custom-animation2"]],null,null,null,null,null)),(l()(),e.sb(55,0,null,null,0,"img",[["src","assets/images/custom-animation1.webp"]],null,null,null,null,null)),(l()(),e.sb(56,0,null,null,1,"div",[["class","hero-app-8 custom-animation"]],null,null,null,null,null)),(l()(),e.sb(57,0,null,null,0,"img",[["src","assets/images/custom-animation.webp"]],null,null,null,null,null)),(l()(),e.sb(58,0,null,null,34,"div",[["class","our-mission"]],null,null,null,null,null)),(l()(),e.sb(59,0,null,null,23,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.sb(60,0,null,null,22,"div",[["class","row align-items-center"]],null,null,null,null,null)),(l()(),e.sb(61,0,null,null,18,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.sb(62,0,null,null,17,"div",[["class","content-wrapper"]],null,null,null,null,null)),(l()(),e.sb(63,0,null,null,8,"div",[["class","section-tittle-box"]],null,null,null,null,null)),(l()(),e.sb(64,0,null,null,2,"div",[["class","section-tittle"]],null,null,null,null,null)),(l()(),e.sb(65,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Our Mission"])),(l()(),e.sb(67,0,null,null,4,"div",[["class","section-main-title"]],null,null,null,null,null)),(l()(),e.sb(68,0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["LEADING A REVOLUTION WHERE "])),(l()(),e.sb(70,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["EVERYONE WINS."])),(l()(),e.sb(72,0,null,null,7,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Our mission is to empower the global ecosystem of talent providers, large and small, to unlock new possibilities and expand business opportunities, near and far, by harnessing our capabilities. We envision a world without borders, restrictions, or obstacles; where anyone can work for anyone, anywhere, for any length of time. A world where everyone succeeds."])),(l()(),e.sb(74,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(75,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" The business world is buzzing about the \u201cnew\u201d global workforce revolution. The acceleration of technology, globalization, remote employees, the hybrid office, and changing work attitudes have all contributed to today\u2019s demand for more flexibility and mobility."])),(l()(),e.sb(77,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.sb(78,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["People2.0 saw \u201ctoday\u201d coming decades ago. Anticipating the rise of an on-demand mobile workforce, we are now its leading enabler with the most comprehensive global employer of record (EOR) and agent of record (AOR) services platform, created exclusively for everyone who finds and provides talent. We accelerate growth for our customers with capabilities to expand access and engagement to the global talent pool for their clients. And we make it simple, fast, inexpensive, and risk free. "])),(l()(),e.sb(80,0,null,null,2,"div",[["class","col-md-6"]],null,null,null,null,null)),(l()(),e.sb(81,0,null,null,1,"div",[["class","image-wrapper"]],null,null,null,null,null)),(l()(),e.sb(82,0,null,null,0,"img",[["src","assets/images/mission.jpg"]],null,null,null,null,null)),(l()(),e.sb(83,0,null,null,1,"div",[["class","hero-app-1 custom-animation"]],null,null,null,null,null)),(l()(),e.sb(84,0,null,null,0,"img",[["src","assets/images/custom-animation.webp"]],null,null,null,null,null)),(l()(),e.sb(85,0,null,null,1,"div",[["class","hero-app-2 custom-animation2"]],null,null,null,null,null)),(l()(),e.sb(86,0,null,null,0,"img",[["src","assets/images/custom-animation2.webp"]],null,null,null,null,null)),(l()(),e.sb(87,0,null,null,1,"div",[["class","hero-app-5 custom-animation4"]],null,null,null,null,null)),(l()(),e.sb(88,0,null,null,0,"img",[["src","assets/images/custom-animation4.webp"]],null,null,null,null,null)),(l()(),e.sb(89,0,null,null,1,"div",[["class","hero-app-7 custom-animation2"]],null,null,null,null,null)),(l()(),e.sb(90,0,null,null,0,"img",[["src","assets/images/custom-animation1.webp"]],null,null,null,null,null)),(l()(),e.sb(91,0,null,null,1,"div",[["class","hero-app-8 custom-animation"]],null,null,null,null,null)),(l()(),e.sb(92,0,null,null,0,"img",[["src","assets/images/custom-animation.webp"]],null,null,null,null,null)),(l()(),e.sb(93,0,null,null,120,"div",[["class","contact"]],null,null,null,null,null)),(l()(),e.sb(94,0,null,null,14,"div",[["class","contact-top"]],null,null,null,null,null)),(l()(),e.sb(95,0,null,null,11,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.sb(96,0,null,null,10,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.sb(97,0,null,null,9,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e.sb(98,0,null,null,2,"div",[["class","section-tittle"]],null,null,null,null,null)),(l()(),e.sb(99,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["GROWING WITH IT SOFT"])),(l()(),e.sb(101,0,null,null,5,"div",[["class","section-main-title"]],null,null,null,null,null)),(l()(),e.sb(102,0,null,null,4,"h1",[],null,null,null,null,null)),(l()(),e.sb(103,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Start your Journy"])),(l()(),e.sb(105,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["To Better Experience"])),(l()(),e.sb(107,0,null,null,1,"div",[["class","call-shape"]],null,null,null,null,null)),(l()(),e.sb(108,0,null,null,0,"img",[["src","assets/images/shape.png"]],null,null,null,null,null)),(l()(),e.sb(109,0,null,null,104,"div",[["class","contact-bottom"]],null,null,null,null,null)),(l()(),e.sb(110,0,null,null,103,"div",[["class","container"]],null,null,null,null,null)),(l()(),e.sb(111,0,null,null,102,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.sb(112,0,null,null,34,"div",[["class","col-lg-6 col-md-12"]],null,null,null,null,null)),(l()(),e.sb(113,0,null,null,33,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.sb(114,0,null,null,10,"div",[["class","col-lg-12 col-md-12"]],null,null,null,null,null)),(l()(),e.sb(115,0,null,null,9,"div",[["class","single-contact-box"]],null,null,null,null,null)),(l()(),e.sb(116,0,null,null,1,"div",[["class","contact-icon"]],null,null,null,null,null)),(l()(),e.sb(117,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-map-marker"]],null,null,null,null,null)),(l()(),e.sb(118,0,null,null,6,"div",[["class","contact-content"]],null,null,null,null,null)),(l()(),e.sb(119,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Company location"])),(l()(),e.sb(121,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" 13/A Tropical Center Ramsta "])),(l()(),e.sb(123,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" London WC1B, UK "])),(l()(),e.sb(125,0,null,null,10,"div",[["class","col-lg-6 col-md-6"]],null,null,null,null,null)),(l()(),e.sb(126,0,null,null,9,"div",[["class","single-contact-box"]],null,null,null,null,null)),(l()(),e.sb(127,0,null,null,1,"div",[["class","contact-icon"]],null,null,null,null,null)),(l()(),e.sb(128,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-phone"]],null,null,null,null,null)),(l()(),e.sb(129,0,null,null,6,"div",[["class","contact-content"]],null,null,null,null,null)),(l()(),e.sb(130,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Telephone Number"])),(l()(),e.sb(132,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" +880 636 524 265, "])),(l()(),e.sb(134,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" +880 636 524 265, "])),(l()(),e.sb(136,0,null,null,10,"div",[["class","col-lg-6 col-md-6"]],null,null,null,null,null)),(l()(),e.sb(137,0,null,null,9,"div",[["class","single-contact-box"]],null,null,null,null,null)),(l()(),e.sb(138,0,null,null,1,"div",[["class","contact-icon"]],null,null,null,null,null)),(l()(),e.sb(139,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-envelope-o "]],null,null,null,null,null)),(l()(),e.sb(140,0,null,null,6,"div",[["class","contact-content"]],null,null,null,null,null)),(l()(),e.sb(141,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Our Email Address"])),(l()(),e.sb(143,0,null,null,3,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" example@gmail.com "])),(l()(),e.sb(145,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" example@gmail.com "])),(l()(),e.sb(147,0,null,null,66,"div",[["class","col-lg-6 col-md-12"]],null,null,null,null,null)),(l()(),e.sb(148,0,null,null,65,"div",[["class","single-contact-from-box"]],null,null,null,null,null)),(l()(),e.sb(149,0,null,null,10,"div",[["class","section-tittle-box"]],null,null,null,null,null)),(l()(),e.sb(150,0,null,null,2,"div",[["class","section-tittle"]],null,null,null,null,null)),(l()(),e.sb(151,0,null,null,1,"h5",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["CONNECT US TODAY"])),(l()(),e.sb(153,0,null,null,4,"div",[["class","section-main-title"]],null,null,null,null,null)),(l()(),e.sb(154,0,null,null,3,"h1",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Feel Free To "])),(l()(),e.sb(156,0,null,null,1,"span",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,["Contact"])),(l()(),e.sb(158,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Rapidiously reconceptualize effective ours innovation without us Distinctively enable value-added strategic theme areas that communities. Quickly conceptualize. "])),(l()(),e.sb(160,0,null,null,53,"div",[["class","contact_from"]],null,null,null,null,null)),(l()(),e.sb(161,0,null,null,52,"form",[["novalidate",""]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"submit"],[null,"reset"]],function(l,n,u){var s=!0;return"submit"===n&&(s=!1!==e.Cb(l,163).onSubmit(u)&&s),"reset"===n&&(s=!1!==e.Cb(l,163).onReset()&&s),s},null,null)),e.rb(162,16384,null,0,D.x,[],null,null),e.rb(163,4210688,null,0,D.p,[[8,null],[8,null]],null,null),e.Hb(2048,null,D.d,null,[D.p]),e.rb(165,16384,null,0,D.o,[[4,D.d]],null,null),(l()(),e.sb(166,0,null,null,43,"div",[["class","row"]],null,null,null,null,null)),(l()(),e.sb(167,0,null,null,9,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e.sb(168,0,null,null,8,"ion-input",[["clearInput",""],["name","name"],["placeholder","Name*"],["required",""]],[[1,"required",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var s=!0,a=l.component;return"ionBlur"===n&&(s=!1!==e.Cb(l,171)._handleBlurEvent()&&s),"ionChange"===n&&(s=!1!==e.Cb(l,171)._handleInputEvent(u.target.value)&&s),"ngModelChange"===n&&(s=!1!==(a.model.name=u)&&s),s},v.db,v.r)),e.rb(169,16384,null,0,D.u,[],{required:[0,"required"]},null),e.Hb(1024,null,D.k,function(l){return[l]},[D.u]),e.rb(171,16384,null,0,s.Nb,[e.k],null,null),e.Hb(1024,null,D.l,function(l){return[l]},[s.Nb]),e.rb(173,671744,null,0,D.q,[[2,D.d],[6,D.k],[8,null],[6,D.l]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,D.m,null,[D.q]),e.rb(175,16384,null,0,D.n,[[4,D.m]],null,null),e.rb(176,49152,null,0,s.F,[e.h,e.k],{clearInput:[0,"clearInput"],name:[1,"name"],placeholder:[2,"placeholder"],required:[3,"required"]},null),(l()(),e.sb(177,0,null,null,11,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e.sb(178,0,null,null,10,"ion-input",[["clearInput",""],["email",""],["name","email"],["pattern","[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"],["placeholder","Email*"],["required",""],["type","email"]],[[1,"required",0],[1,"pattern",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var s=!0,a=l.component;return"ionBlur"===n&&(s=!1!==e.Cb(l,183)._handleBlurEvent()&&s),"ionChange"===n&&(s=!1!==e.Cb(l,183)._handleInputEvent(u.target.value)&&s),"ngModelChange"===n&&(s=!1!==(a.model.email=u)&&s),s},v.db,v.r)),e.rb(179,16384,null,0,D.u,[],{required:[0,"required"]},null),e.rb(180,540672,null,0,D.r,[],{pattern:[0,"pattern"]},null),e.rb(181,16384,null,0,D.f,[],{email:[0,"email"]},null),e.Hb(1024,null,D.k,function(l,n,u){return[l,n,u]},[D.u,D.r,D.f]),e.rb(183,16384,null,0,s.Nb,[e.k],null,null),e.Hb(1024,null,D.l,function(l){return[l]},[s.Nb]),e.rb(185,671744,null,0,D.q,[[2,D.d],[6,D.k],[8,null],[6,D.l]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,D.m,null,[D.q]),e.rb(187,16384,null,0,D.n,[[4,D.m]],null,null),e.rb(188,49152,null,0,s.F,[e.h,e.k],{clearInput:[0,"clearInput"],name:[1,"name"],pattern:[2,"pattern"],placeholder:[3,"placeholder"],required:[4,"required"],type:[5,"type"]},null),(l()(),e.sb(189,0,null,null,12,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e.sb(190,0,null,null,11,"ion-input",[["OnlyNumber","true"],["clearInput",""],["maxlength","10"],["minlength","10"],["name","phone_no"],["placeholder","Mobile*"],["required",""],["type","tel"]],[[1,"required",0],[1,"minlength",0],[1,"maxlength",0],[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"],[null,"keydown"]],function(l,n,u){var s=!0,a=l.component;return"ionBlur"===n&&(s=!1!==e.Cb(l,195)._handleBlurEvent()&&s),"ionChange"===n&&(s=!1!==e.Cb(l,195)._handleInputEvent(u.target.value)&&s),"keydown"===n&&(s=!1!==e.Cb(l,201).onKeyDown(u)&&s),"ngModelChange"===n&&(s=!1!==(a.model.phone=u)&&s),s},v.db,v.r)),e.rb(191,16384,null,0,D.u,[],{required:[0,"required"]},null),e.rb(192,540672,null,0,D.j,[],{minlength:[0,"minlength"]},null),e.rb(193,540672,null,0,D.i,[],{maxlength:[0,"maxlength"]},null),e.Hb(1024,null,D.k,function(l,n,u){return[l,n,u]},[D.u,D.j,D.i]),e.rb(195,16384,null,0,s.Nb,[e.k],null,null),e.Hb(1024,null,D.l,function(l){return[l]},[s.Nb]),e.rb(197,671744,null,0,D.q,[[2,D.d],[6,D.k],[8,null],[6,D.l]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,D.m,null,[D.q]),e.rb(199,16384,null,0,D.n,[[4,D.m]],null,null),e.rb(200,49152,null,0,s.F,[e.h,e.k],{clearInput:[0,"clearInput"],maxlength:[1,"maxlength"],minlength:[2,"minlength"],name:[3,"name"],placeholder:[4,"placeholder"],required:[5,"required"],type:[6,"type"]},null),e.rb(201,16384,null,0,q.a,[e.k],{OnlyNumber:[0,"OnlyNumber"]},null),(l()(),e.sb(202,0,null,null,7,"div",[["class","col-lg-12"]],null,null,null,null,null)),(l()(),e.sb(203,0,null,null,6,"ion-textarea",[["auto-grow","true"],["clearInput",""],["name","message"],["placeholder","Message"]],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"ionBlur"],[null,"ionChange"]],function(l,n,u){var s=!0,a=l.component;return"ionBlur"===n&&(s=!1!==e.Cb(l,204)._handleBlurEvent()&&s),"ionChange"===n&&(s=!1!==e.Cb(l,204)._handleInputEvent(u.target.value)&&s),"ngModelChange"===n&&(s=!1!==(a.model.description=u)&&s),s},v.vb,v.J)),e.rb(204,16384,null,0,s.Nb,[e.k],null,null),e.Hb(1024,null,D.l,function(l){return[l]},[s.Nb]),e.rb(206,671744,null,0,D.q,[[2,D.d],[8,null],[8,null],[6,D.l]],{name:[0,"name"],model:[1,"model"]},{update:"ngModelChange"}),e.Hb(2048,null,D.m,null,[D.q]),e.rb(208,16384,null,0,D.n,[[4,D.m]],null,null),e.rb(209,49152,null,0,s.wb,[e.h,e.k],{name:[0,"name"],placeholder:[1,"placeholder"]},null),(l()(),e.sb(210,0,null,null,3,"div",[["class","custom-btn"]],null,null,null,null,null)),(l()(),e.sb(211,0,null,null,2,"button",[["class","btn"],["type","submit"]],null,null,null,null,null)),(l()(),e.Kb(-1,null,[" Get A Quote Now "])),(l()(),e.sb(213,0,null,null,0,"i",[["aria-hidden","true"],["class","fa fa-arrow-right"]],null,null,null,null,null)),(l()(),e.sb(214,0,null,0,1,"common-footer",[],null,null,null,x.b,x.a)),e.rb(215,245760,null,0,I.a,[k.a,w.c,t.a,s.Hb],null,null)],function(l,n){var u=n.component;l(n,2,0,!0);var e=l(n,5,0,u.isFixedHeader);l(n,4,0,e),l(n,6,0),l(n,169,0,""),l(n,173,0,"name",u.model.name),l(n,176,0,"","name","Name*",""),l(n,179,0,""),l(n,180,0,"[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$"),l(n,181,0,""),l(n,185,0,"email",u.model.email),l(n,188,0,"","email","[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,4}$","Email*","","email"),l(n,191,0,""),l(n,192,0,"10"),l(n,193,0,"10"),l(n,197,0,"phone_no",u.model.phone),l(n,200,0,"","10","10","phone_no","Mobile*","","tel"),l(n,201,0,"true"),l(n,206,0,"message",u.model.description),l(n,209,0,"message","Message"),l(n,215,0)},function(l,n){l(n,161,0,e.Cb(n,165).ngClassUntouched,e.Cb(n,165).ngClassTouched,e.Cb(n,165).ngClassPristine,e.Cb(n,165).ngClassDirty,e.Cb(n,165).ngClassValid,e.Cb(n,165).ngClassInvalid,e.Cb(n,165).ngClassPending),l(n,168,0,e.Cb(n,169).required?"":null,e.Cb(n,175).ngClassUntouched,e.Cb(n,175).ngClassTouched,e.Cb(n,175).ngClassPristine,e.Cb(n,175).ngClassDirty,e.Cb(n,175).ngClassValid,e.Cb(n,175).ngClassInvalid,e.Cb(n,175).ngClassPending),l(n,178,0,e.Cb(n,179).required?"":null,e.Cb(n,180).pattern?e.Cb(n,180).pattern:null,e.Cb(n,187).ngClassUntouched,e.Cb(n,187).ngClassTouched,e.Cb(n,187).ngClassPristine,e.Cb(n,187).ngClassDirty,e.Cb(n,187).ngClassValid,e.Cb(n,187).ngClassInvalid,e.Cb(n,187).ngClassPending),l(n,190,0,e.Cb(n,191).required?"":null,e.Cb(n,192).minlength?e.Cb(n,192).minlength:null,e.Cb(n,193).maxlength?e.Cb(n,193).maxlength:null,e.Cb(n,199).ngClassUntouched,e.Cb(n,199).ngClassTouched,e.Cb(n,199).ngClassPristine,e.Cb(n,199).ngClassDirty,e.Cb(n,199).ngClassValid,e.Cb(n,199).ngClassInvalid,e.Cb(n,199).ngClassPending),l(n,203,0,e.Cb(n,208).ngClassUntouched,e.Cb(n,208).ngClassTouched,e.Cb(n,208).ngClassPristine,e.Cb(n,208).ngClassDirty,e.Cb(n,208).ngClassValid,e.Cb(n,208).ngClassInvalid,e.Cb(n,208).ngClassPending)})}function N(l){return e.Mb(0,[(l()(),e.sb(0,0,null,null,1,"app-about-us",[],null,null,null,P,E)),e.rb(1,245760,null,0,o,[y.a,y.m,w.c,s.Gb,t.a,i.a],null,null)],function(l,n){l(n,1,0)},null)}var O=e.ob("app-about-us",o,N,{},{},[]),S=u("eDkP"),H=u("Fzqc"),M=u("mVsa"),T=u("M2Lx"),F=u("uGex"),L=u("v9Dh"),U=u("ZYjt"),j=u("Wf4p"),R=u("4epT"),W=u("OkvK"),B=u("4tE/"),Z=u("Tq4R"),z=u("rAFq"),V=u("4D9t"),G=u("bMPK"),Y=u("UiI2"),Q=u("dWZg"),J=u("wmQ5"),X=u("AYLd"),$=u("YhbO"),ll=u("4c35"),nl=u("jlZm"),ul=u("qAlS"),el=u("y4qS"),sl=u("BHnd"),al=u("UodH"),tl=u("seP3"),il=u("lLAP"),ol=u("de3e"),bl=u("Nsh5"),rl=u("8mMr"),cl=u("5NQ/"),dl=u("YR89"),ml=u("dYiE"),gl=u("SMsm"),pl=u("QpxQ"),hl=u("jRYl"),vl=u("KL2N"),Cl=u("QX+E"),fl=u("1m8Z"),Al=u("Z4CC"),wl=u("Fo5n"),yl=u("La40"),kl=u("Lwpp"),Kl=u("PCNd"),_l=u("EFU/");u.d(n,"AboutUsPageModuleNgFactory",function(){return Dl});var Dl=e.pb(b,[],function(l){return e.zb([e.Ab(512,e.j,e.eb,[[8,[r.a,c.a,d.a,m.a,g.a,p.a,h.a,O]],[3,e.j],e.y]),e.Ab(4608,f.n,f.m,[e.v,[2,f.z]]),e.Ab(4608,D.y,D.y,[]),e.Ab(4608,s.b,s.b,[e.A,e.g]),e.Ab(4608,s.Gb,s.Gb,[s.b,e.j,e.r,f.d]),e.Ab(4608,s.Kb,s.Kb,[s.b,e.j,e.r,f.d]),e.Ab(4608,S.b,S.b,[S.h,S.d,e.j,S.g,S.e,e.r,e.A,f.d,H.b,[2,f.h]]),e.Ab(5120,S.i,S.j,[S.b]),e.Ab(5120,M.b,M.g,[S.b]),e.Ab(4608,T.c,T.c,[]),e.Ab(5120,F.a,F.b,[S.b]),e.Ab(5120,L.a,L.b,[S.b]),e.Ab(4608,U.f,j.d,[[2,j.f],[2,j.h]]),e.Ab(5120,R.b,R.a,[[3,R.b]]),e.Ab(5120,W.b,W.a,[[3,W.b]]),e.Ab(5120,B.a,B.b,[S.b]),e.Ab(4608,D.g,D.g,[]),e.Ab(5120,Z.b,Z.c,[S.b]),e.Ab(4608,Z.d,Z.d,[S.b,e.r,[2,f.h],Z.b,[2,Z.a],[3,Z.d],S.d]),e.Ab(4608,z.a,z.a,[]),e.Ab(5120,V.a,V.b,[S.b]),e.Ab(4608,G.a,Y.a,[[2,G.b],Q.a]),e.Ab(5120,J.b,J.a,[[3,J.b]]),e.Ab(4608,j.c,j.c,[]),e.Ab(4608,X.c,X.c,[f.d]),e.Ab(1073742336,f.c,f.c,[]),e.Ab(1073742336,D.w,D.w,[]),e.Ab(1073742336,D.h,D.h,[]),e.Ab(1073742336,s.Cb,s.Cb,[]),e.Ab(1073742336,H.a,H.a,[]),e.Ab(1073742336,j.h,j.h,[[2,j.e],[2,U.g]]),e.Ab(1073742336,Q.b,Q.b,[]),e.Ab(1073742336,j.m,j.m,[]),e.Ab(1073742336,$.c,$.c,[]),e.Ab(1073742336,ll.g,ll.g,[]),e.Ab(1073742336,nl.d,nl.d,[]),e.Ab(1073742336,ul.c,ul.c,[]),e.Ab(1073742336,S.f,S.f,[]),e.Ab(1073742336,M.e,M.e,[]),e.Ab(1073742336,el.o,el.o,[]),e.Ab(1073742336,sl.a,sl.a,[]),e.Ab(1073742336,al.c,al.c,[]),e.Ab(1073742336,j.k,j.k,[]),e.Ab(1073742336,j.i,j.i,[]),e.Ab(1073742336,T.d,T.d,[]),e.Ab(1073742336,tl.a,tl.a,[]),e.Ab(1073742336,F.c,F.c,[]),e.Ab(1073742336,il.a,il.a,[]),e.Ab(1073742336,L.c,L.c,[]),e.Ab(1073742336,R.c,R.c,[]),e.Ab(1073742336,ol.a,ol.a,[]),e.Ab(1073742336,W.c,W.c,[]),e.Ab(1073742336,B.c,B.c,[]),e.Ab(1073742336,bl.a,bl.a,[]),e.Ab(1073742336,rl.a,rl.a,[]),e.Ab(1073742336,D.t,D.t,[]),e.Ab(1073742336,cl.a,cl.a,[]),e.Ab(1073742336,dl.c,dl.c,[]),e.Ab(1073742336,ml.c,ml.c,[]),e.Ab(1073742336,gl.c,gl.c,[]),e.Ab(1073742336,pl.c,pl.c,[]),e.Ab(1073742336,X.a,X.a,[]),e.Ab(1073742336,hl.a,hl.a,[]),e.Ab(1073742336,vl.a,vl.a,[]),e.Ab(1073742336,Cl.a,Cl.a,[]),e.Ab(1073742336,Cl.b,Cl.b,[]),e.Ab(1073742336,fl.b,fl.b,[]),e.Ab(1073742336,Al.b,Al.b,[]),e.Ab(1073742336,wl.b,wl.b,[]),e.Ab(1073742336,yl.k,yl.k,[]),e.Ab(1073742336,kl.e,kl.e,[]),e.Ab(1073742336,J.c,J.c,[]),e.Ab(1073742336,Kl.a,Kl.a,[]),e.Ab(1073742336,y.p,y.p,[[2,y.v],[2,y.m]]),e.Ab(1073742336,b,b,[]),e.Ab(256,pl.d,pl.e,[]),e.Ab(256,G.b,"en-GB",[]),e.Ab(256,_l.a,Cl.c,[]),e.Ab(256,X.b,{baseURL:"//cdnjs.cloudflare.com/ajax/libs/tinymce/4.9.0/"},[]),e.Ab(1024,y.k,function(){return[[{path:"",component:o}]]},[])])})}}]);