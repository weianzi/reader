webpackJsonp(["UpPassenger"],{345:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.mapDispatchToProps=t.mapStateToProps=void 0;var r=n(759),i=a(r),l=n(132),o=t.mapStateToProps=function e(t){return{}},A=t.mapDispatchToProps={};t.default=(0,l.withReducer)("",o,A)(i.default)},419:function(e,t,n){t=e.exports=n(334)(!1),t.push([e.i,"",""])},420:function(e,t,n){t=e.exports=n(334)(!1),t.push([e.i,".CountryList{position:fixed;top:0;bottom:0;right:0;left:0;z-index:9999;background:#fff}.CountryList .CountryDell{margin-top:.9rem;list-style:none}.CountryList .CountryDell .CountryDell-main{position:fixed;overflow:auto;bottom:0;left:0;right:0;top:.9rem}.CountryList .CountryDell .CountryDell-main .CountryDell-header{padding-left:.3rem;height:.55rem;line-height:.55rem;background:#edf7fb;color:#4d4d4d}.CountryList .CountryDell-info{padding-right:.68rem}.CountryList .CountryDell-info li{width:100%;font-size:.25rem;padding-left:.3rem;border-bottom:.01rem solid #e8ecef;line-height:.76rem;font-family:PingFang-SC-Bold;color:#4d4d4d}.CountryList .navigation{position:fixed;right:.1rem;top:1.7rem;bottom:0;text-align:center}.CountryList .navigation li{height:.55rem;color:#008acb;font-size:.24rem}.CountryList .letterTips{font-size:200%;color:#fff;position:fixed;top:50%;left:50%;width:40%;padding:0 .2rem;height:1.3rem;line-height:1.3rem;background:hsla(132,5%,60%,.5);-ms-transform:translate(-50%,-50%);-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);text-align:center;z-index:13;-webkit-border-radius:.1rem;border-radius:.1rem}.CountryList .CountryListHeader .header-nav-float{background:#008acb!important;z-index:9999}",""])},759:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(54),i=a(r),l=n(4),o=a(l),A=n(6),u=a(A),s=n(7),c=a(s),d=n(8),f=a(d),I=n(0),N=a(I);n(760);var E=n(352),C=a(E),L=n(761),R=a(L),T=function(e){function t(e){(0,o.default)(this,t);var n=(0,c.default)(this,(t.__proto__||(0,i.default)(t)).call(this,e));return n.state={countryName:"",type:"",countryListShow:!1},n.openAcloseCountryList=n.openAcloseCountryList.bind(n),n.openAcloseCountryList=n.openAcloseCountryList.bind(n),n.receiveCountryParam=n.receiveCountryParam.bind(n),n}return(0,f.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function e(){}},{key:"openAcloseCountryList",value:function e(t){this.setState({countryListShow:!this.state.countryListShow,type:t||""})}},{key:"receiveCountryParam",value:function e(t){var n=this.state.type,a=t.split("-")[0];this.setState({countryName:a})}},{key:"render",value:function e(){var t=this,n=this.state,a=n.countryListShow,r=n.type,i=n.countryName;return N.default.createElement("div",{className:"up-passenger-view"},N.default.createElement(C.default,{title:"编辑乘机人"}),N.default.createElement("div",{style:{padding:100}},N.default.createElement("input",{type:"text",style:{border:"1px solid #ccc"},value:i,onClick:function e(){return t.openAcloseCountryList("nationality")}})),N.default.createElement("div",null,a&&N.default.createElement(R.default,{isType:r,openAcloseCountryList:this.openAcloseCountryList,receiveCountryParam:this.receiveCountryParam})))}}]),t}(I.Component);t.default=T},760:function(e,t,n){var a=n(419);"string"==typeof a&&(a=[[e.i,a,""]]);var r,i,l={hmr:!0};l.transform=void 0,l.insertInto=void 0;var o=n(335)(a,l);a.locals&&(e.exports=a.locals),e.hot.accept(419,function(){var t=n(419);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},761:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var r=n(762),i=a(r);t.default=i.default},762:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CountryList=void 0;var r=n(30),i=a(r),l=n(54),o=a(l),A=n(4),u=a(A),s=n(6),c=a(s),d=n(7),f=a(d),I=n(8),N=a(I),E=n(0),C=a(E),L=n(352),R=a(L);n(763);var T=n(764),S=a(T),p=n(765),y=n(766),M=function(e){function t(e){(0,u.default)(this,t);var n=(0,f.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e));return n.state={titleArray:[],navigation:y.A_Z,selectVal:"",showLetter:!1},n}return(0,N.default)(t,e),(0,c.default)(t,[{key:"getTitle",value:function e(t){var n=this.state.titleArray;n.push(t),this.setState({titleArray:n})}},{key:"selectVal",value:function e(t){var n=this,a=void 0;clearTimeout(a),this.setState({selectVal:t,showLetter:!0},function(){a=setTimeout(function(){n.setState({showLetter:!1})},150)})}},{key:"render",value:function e(){var t=this,n=this.state,a=n.navigation,r=n.titleArray,l=this.props,o=l.receiveCountryParam,A=l.openAcloseCountryList,u=l.isType,s=function e(){return"nationality"===u?"选择国籍（国家/地区）":"选择签发国家/地区"};return C.default.createElement("div",{className:"CountryList"},C.default.createElement(R.default,{title:s(),className:"CountryListHeader",rightContent:!0,onLeftClick:function e(){return A()}}),C.default.createElement("div",{className:"CountryDell"},C.default.createElement("div",{className:"CountryDell-main"},p.country.map(function(e,n){return C.default.createElement(S.default,{item:e,key:n,reF:"CountryDellTitle",keys:(0,i.default)(e),getTitle:t.getTitle.bind(t),receiveCountryParam:o,openAcloseCountryList:A})})),this.state.showLetter&&C.default.createElement(O,{letter:this.state.selectVal})),C.default.createElement("div",{className:"navigation"},C.default.createElement("ul",{className:"navigation-ul"},a.map(function(e,n){return C.default.createElement(m,{item:e,key:n,titleArray:r,selectVal:t.selectVal.bind(t)})}))))}}]),t}(E.Component);t.CountryList=M;var m=function(e){function t(e){return(0,u.default)(this,t),(0,f.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e))}return(0,N.default)(t,e),(0,c.default)(t,[{key:"clickHandle",value:function e(t){for(var n=this.props,a=n.titleArray,r=n.selectVal,i=t.target.innerText,l=0;l<a.length;l++){var o=a[l];if(o.title===i){document.getElementsByClassName("CountryDell-main")[0].scrollTop=o.offsetTop;break}}r(i)}},{key:"render",value:function e(){var t=this.props.item;return C.default.createElement("li",{"data-title":t,onClick:this.clickHandle.bind(this)},t)}}]),t}(E.Component),O=function(e){function t(){return(0,u.default)(this,t),(0,f.default)(this,(t.__proto__||(0,o.default)(t)).apply(this,arguments))}return(0,N.default)(t,e),(0,c.default)(t,[{key:"render",value:function e(){return C.default.createElement("div",{className:"letterTips"},this.props.letter)}}]),t}(E.Component);t.default=M},763:function(e,t,n){var a=n(420);"string"==typeof a&&(a=[[e.i,a,""]]);var r,i,l={hmr:!0};l.transform=void 0,l.insertInto=void 0;var o=n(335)(a,l);a.locals&&(e.exports=a.locals),e.hot.accept(420,function(){var t=n(420);if("string"==typeof t&&(t=[[e.i,t,""]]),!function(e,t){var n,a=0;for(n in e){if(!t||e[n]!==t[n])return!1;a++}for(n in t)a--;return 0===a}(a.locals,t.locals))throw new Error("Aborting CSS HMR due to changed css-modules locals.");o(t)}),e.hot.dispose(function(){o()})},764:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0}),t.CountryDell=void 0;var r=n(30),i=a(r),l=n(54),o=a(l),A=n(4),u=a(A),s=n(6),c=a(s),d=n(7),f=a(d),I=n(8),N=a(I),E=n(0),C=a(E),L=t.CountryDell=function(e){function t(e){return(0,u.default)(this,t),(0,f.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e))}return(0,N.default)(t,e),(0,c.default)(t,[{key:"componentDidMount",value:function e(){this.getTitles()}},{key:"getTitles",value:function e(){var t=this.props.getTitle,n=this.refs.CountryDellTitle,a={};a.offsetTop=n.offsetTop,a.title=n.innerText,t(a)}},{key:"render",value:function e(){var t=this.props,n=t.item,a=t.keys,r=t.reF,l=t.receiveCountryParam,o=t.openAcloseCountryList;return C.default.createElement("div",null,C.default.createElement("div",{className:"CountryDell-header",ref:r},(0,i.default)(n)),C.default.createElement("div",{className:"CountryDell-info"},n[a[0]].map(function(e,t){return C.default.createElement(R,{data:e,key:t,receiveCountryParam:l,openAcloseCountryList:o})})))}}]),t}(E.Component),R=function(e){function t(e){return(0,u.default)(this,t),(0,f.default)(this,(t.__proto__||(0,o.default)(t)).call(this,e))}return(0,N.default)(t,e),(0,c.default)(t,[{key:"clickHandle",value:function e(t,n){var a=this.props,r=a.receiveCountryParam,i=a.openAcloseCountryList;r(t.target.getAttribute("data-data")),i()}},{key:"formatData",value:function e(t){var n=t.split("-")[0];return n.length>27?n.slice(0,26)+"...":n}},{key:"render",value:function e(){var t=this.props.data;return C.default.createElement("li",{"data-data":t,onClick:this.clickHandle.bind(this)},this.formatData(t))}}]),t}(E.Component);t.default=L},765:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.country=[{A:["安道尔ANDORRA-AD","阿拉伯联合酋长国ARAB-AE","阿富汗AFGHANISTANA-AF","安提瓜和巴布达ANTIGUABARBUDA-AG","安圭拉Anguilla-AIA","阿尔巴尼亚ALBANIA-ALB","亚美尼亚ARMENIA-AM","阿尔及利亚ALGERIA-DZA","安哥拉ANGOLA-AO","阿根廷ARGENTINA-ARG","奥地利AUSTRIA-AT","澳大利亚AUSTRALIA-AUS","阿塞拜疆共和国AZERBAIJAN-AZE"]},{B:["巴巴多斯BARBADOS-BB","孟加拉国BANGLADESH-BD","比利时BELGIUM-BEL","布基纳法索BURKINAFASO-BFA","保加利亚BULGARIA-BGR","巴林BAHRAIN-BHR","布隆迪BURUNDI-BI","波斯尼亚和黑塞哥维那BOSNIA-BIH","贝宁BENIN-BJ","百慕大群岛Bermuda-BMU","文莱达鲁萨兰国BRUNIDARUSSALAM-BN","玻利维亚BOLIVIA-BOL","巴西BRAZIL-BRA","巴哈马BAHAMAS-BS","不丹Bhutan-BTN","博茨瓦纳BOTSWANA-BWA","白俄罗斯BELARUS-BY","伯里兹BELIZE-BZ"]},{C:["加拿大CANADA-CA","柬埔寨CAMBODIA-KHM","佛得角CAPEVERDE-KY","中非共和国CENTRALAFRICANREPUBLI-CF","乍得CHAD-TD","刚果（布）CONGO-CG","中国CHINA-CHN","科特迪瓦COTEDLVOIRE-CIV","库克群岛COOKISLANDS-CK","智利CHILE-CL","喀麦隆CAMEROON-CMR","克罗地亚CROATIA-HRV","哥伦比亚COLOMBIA-COL","科摩罗COMOROS-KM","刚果(金沙萨)CONGO,THEDRC(Kinshasa)-COD","哥斯达里加COSTARICA-CRI","捷克共和国CZECHREPUBLIC-CS","古巴共和国CUBA-CUB","塞浦路斯CYPRUS-CYP"]},{D:["吉布提DJIBOUTI-DJI","丹麦DENMARK-DK","多米尼克DOMINICA-DMA","多米尼加共和国DOMINICANREPUBLIC-DOM"]},{E:["厄瓜多尔ECUADOR-EC","英国ENGLAND-GBR","爱沙尼亚ESTONIA-EE","埃及EGYPT-EGY","厄立特里亚ERITREA-ERI","埃塞俄比亚ETHIOPIA-ETH"]},{F:["芬兰FINLAND-FIN","斐济FIJI-FJI","福克兰群岛FAULKLANDISLANDS-FK","法罗群岛FAROEISLANDS-FO","法国FRANCE-FRA","法属圭亚那FRENCHGUIANA-GF","法属玻力尼西亚FRENCHPOLYNESIA-AM1"]},{G:["加蓬GABON-GAB","格鲁吉亚GEORGIA-GEO","德国GERMANY-DE","加纳GHANA-GHA","直布罗陀Gibraltar-GIB","格林纳达GRENADA-GL","冈比亚GAMBIA-GMB","几内亚GUINEA-GN","赤道几内亚EQUATORIALGUINEA-GQ","希腊GREECE-GRC","危地马拉-GTM","关岛（马里亚纳群岛）Guam(MarianaIslands)-GUM","几内亚比绍GUINEABISSAU-GW","圭亚那GUYANA-GY"]},{H:["香港，中国Hong Kong,China-HKG","洪都拉斯Honduras-HND","荷兰HOLLAND-NLD","海地-HTI","匈牙利HUNGARY-HUN"]},{I:["印度尼西亚INDONESIA-IDN","爱尔兰IRELAND-IE","以色列ISRAEL-IL","印度INDIA-IND","伊拉克IRAQ-IQ","伊朗IRAN-IRN","冰岛Iceland-ISL","意大利ITALY-ITA"]},{J:["牙买加JAMAICA-JM","约旦JORDAN-JOR","日本JAPAN-JPN"]},{K:["肯尼亚KENYA-KEN","吉尔吉斯共和国KIRGIZSTAN-KG","吉尔吉斯斯坦Kyrgyzstan-KGZ","朝鲜民主主义共和国KOREADEMOCRATICREPUBL-KP","韩国KOREA-KR","科威特KUWAIT-KWT","哈萨克斯坦KAZAKHSTAN-KZ"]},{L:["老挝LAOS-LAO","黎巴嫩LEBANON-LBN","列支敦士登LIECHTENSTEIN-LIE","利比里亚LIBERIA-LR","北马里亚纳群岛NORTHERNMARIANAISLAND-MP","莱索托LESOTHO-LSO","立陶宛LITHUANIA-LT","立陶宛Lithuania-LTU","卢森堡LUXEMBOURG-LUX","拉脱维亚LATVIA-LVA","利比亚LIBYA-LY"]},{M:["摩洛哥MOROCCO-MA","摩纳哥MONACO-MC","摩尔多瓦MOLDOVA-MD","马达加斯加MADAGASCAR-MG","马绍尔群岛Marshall Islands-MHL","马里MALI-MLI","缅甸MYANMAR-MMR","马其顿MACEDONIA-MK","澳门，中国Macau,China-MO","毛里塔尼亚MAURITANIA-MR","毛利塔尼亚Mauritania-MRT","墨西哥MEXICO-MX","马提尼克MARTINIQUE-MQ","蒙特赛拉特岛Montserrat-MSR","马耳他MALTA-MT","毛里求斯MAURITIUS-MUS","马尔代夫MALDIVES-MV","马来西亚MALAYSIA-MYS","马约特岛Ma Mayotte-MYT","莫桑比克MOZAMBIQUE-MZ","密克罗尼西亚联邦MICRONESIA-FM","蒙古MONGOLIA-MN"]},{N:["纳米比亚Namibia-NAM","新喀里多尼亚群岛New Caledonia Islands-NCL","尼日尔NIGER-NER","诺福克岛Norfolk Island-NFK","尼日利亚NIGERIA-NGA","尼加拉瓜Nicaragua-NIC","挪威NORWAY-NOR","尼泊尔NEPAL-NPL","瑙鲁NAURU-NRU","纽埃NIUE-NU","新西兰NEWZEALAND-NZL"]},{O:["阿曼OMAN-OMN"]},{P:["巴拿马Panama-PAN","秘鲁PERU-PER","菲律宾PHILIPPINES-PHL","巴布亚新几内亚PAPUANEWGUINEA-PG","巴基斯坦PAKISTAN-PK","波兰POLAND-PL","波多黎各Portugal-PRI","葡萄牙PORTUGAL-PT","帕劳PALAU-PW","巴拉圭PARAGUAY-PY"]},{Q:["卡塔尔QATAR-QAT"]},{R:["留尼旺岛Reunion-REU","罗马尼亚ROMANIA-MAT","俄罗斯RUSSIA-RU","俄罗斯联邦Russian Federation-RUS","卢旺达RWANDA-RWA"]},{S:["圣卢西亚SAINTLUCIA-LCA","圣文森特和格林纳丁斯Saint Vincent andtheGrenadines-VCT","圣多美和普林西比SAOTOMEPRINCIPE-STP","沙特阿拉伯SAUDIARABIA-SAU","美属萨摩亚SAMOA-WS","圣马力诺SANMARINO-SMR","塞内加尔SENEGAL-SN","塞尔维亚SERBIA-CS1","塞舌尔SEYCHELLES-SC","塞拉利昂SIERRALEONE-SLE","新加坡SINGAPORE-SGP","斯洛伐克共和国SLOVAKREPUBLIC-SK","斯洛文尼亚SLOVENIA-SI","所罗门群岛SOLOMONISLANDS-SB","索马里SOMALI-SOM","南非SOUTHAFRICA-ZAF","西班牙SPAIN-ESP","斯里兰卡SRILANKA-LKA","圣皮埃尔和密克隆ST.PIERREANDMIQUELON-PM","苏丹SUDAN-SDN","苏里南SURINAM-SR","斯威士兰SWAZILAND-SZ","瑞典SWEDEN-SE","瑞士SWITZERLAND-CHE","叙利亚SYRIA-SYR","萨尔瓦多ELSALVADOR-SV"]},{T:["塔吉克斯坦TAJIKISTAN-TJK","坦桑尼亚TANZANIA-TZA","多哥TOGO-TGO","泰国THAILAND-TH","东帝汶TIMOR-TLS","特克斯和凯科斯群岛Turks and Caicos Islands-TCA","汤加TONGA-TO","特立尼达和多巴哥TRINIDADANDTOBAGO-TTO","突尼斯TUNISIA-TN","土耳其TURKEY-TR","土库曼斯坦TURKMENISTAN-TM","图瓦卢TUVALU-TV","台湾，中国Taiwan,China-TWN"]},{U:["美国UNITED STATES-US","乌干达UGANDA-UGA","乌克兰UKRAINE-UA","乌拉圭URUGUAY-UY","乌兹别克斯坦UZBEKISTAN-UZB"]},{V:["瓦努阿图VANUATU-VU","梵蒂冈The Vatican-VAT","委内瑞拉VENEZUELA-VEN","越南VIETNAM-VNM","维尔京群岛（英属）Virgin Islands (British)-VGB","维尔京群岛（美属）Virgin Islands (U.S.)-VIR"]},{W:["萨摩亚群岛Samoa-WSM","瓦利斯和富图纳群岛FORTUNAISLANDS-WF"]},{Y:["也门民主人民共和国DEMOCRATICYEMEN-YD","也门共和国The Republic of Yemen-YEM"]},{Z:["赞比亚ZAMBIA-ZMB","津巴布韦ZIMBABWE-ZWE","扎伊尔ZAIRE-ZR"]}]},766:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=t.passengersType=["成人(≥12岁)","儿童(2-12岁)","婴儿(2周-2岁)"],r=t.interpassengersType=["成人","儿童","婴儿"],i=t.cardTypes={NI:"身份证",PP:"护照",ID:"其他证件"},l=t.A_Z=["A","B","C","D","E","F","G","H","J","L","M","N","P","R","S","T","W","X","Y","Z"],o=t.domesIdCardType=[{label:"身份证",value:"身份证"},{label:"护照",value:"护照"},{label:"其他证件",value:"其他证件"}],A=t.interIdCardType=[{label:"护照",value:"护照"},{label:"回乡证",value:"回乡证"},{label:"台胞证",value:"台胞证"},{label:"台湾通行证",value:"台湾通行证"},{label:"港澳通行证",value:"港澳通行证"}],u=t.domesOneTypeOf=[{label:"成人(≥12岁)",value:"0"},{label:"儿童(2-12岁)",value:"1"},{label:"婴儿(2周-2岁)",value:"2"}],s=t.interOneTypeOf=[{label:"成人",value:"0"},{label:"儿童",value:"1"},{label:"婴儿",value:"2"}],c=t.airlinesTypes={CZ:"中国南方航空",MU:"中国东方航空",MF:"中国厦门航空","3U":"中国四川航空",VN:"越南航空",KE:"大韩航空",CI:"中华航空",ME:"巴黎嫩中东航空",SV:"沙特阿拉伯航空",DL:"达美航空",AM:"墨西哥航空",AR:"阿根廷航空",AF:"法国航空",KL:"荷兰航空",SU:"俄罗斯航空",OK:"捷克航空",AZ:"意大利航空",Ro:"罗马尼亚航空",UX:"西班牙欧罗巴航空",KQ:"肯尼亚航空",VS:"维珍美国航空"},d=t.interTypes={ID:"其他证件",PP:"护照",HKandMacauPass:"港澳通行证",Taiwan:"台湾通行证",HomeReturnPermit:"回乡证",MTPs:"台胞证"},f=t.domesTypes={ID:"其他证件",NI:"身份证",PP:"护照","二代身份证":"身份证"}}});