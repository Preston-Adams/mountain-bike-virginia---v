webpackJsonp([2],{373:function(e,t,a){"use strict";function n(e){a(404)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(406),m=a.n(i),r=a(409),s=a(90),o=n,l=s(m.a,r.a,o,null,null);t.default=l.exports},376:function(e,t,a){"use strict";function n(e){a(377)}Object.defineProperty(t,"__esModule",{value:!0});var i=a(379),m=a.n(i),r=a(380),s=a(90),o=n,l=s(m.a,r.a,o,null,null);t.default=l.exports},377:function(e,t,a){var n=a(378);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(371)("7ac197a4",n,!0)},378:function(e,t,a){t=e.exports=a(125)(void 0),t.push([e.i,".header-wrapper{background-color:#000}.toolbar{background-color:transparent!important;margin-bottom:32rem}@media screen and (max-width:480px){.xxcva{display:none}}.xxcva{width:12rem}.mtbva{width:8rem}.xxcva-link{margin-left:1rem}.fb{width:2.5rem}.nav-text{margin-top:4.5rem!important;color:#fff!important;margin-left:1rem;margin-right:1rem;text-decoration:none;font-size:1.5rem}.nav-link{margin-top:4.5rem}.mtbva-title{text-align:center}.header-button{background-color:transparent!important;border:2px solid #fff!important;color:#fff!important}",""])},379:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"mtbva-header",props:["header-height","image","title","subtitle","button","buttonLink"]}},380:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-parallax",{staticClass:"header-wrapper",attrs:{src:e.image,height:e.headerHeight}},[n("v-toolbar",{staticClass:"toolbar",attrs:{extended:"",absolute:""}},[n("router-link",{staticClass:"nav-link",attrs:{to:"home"}},[n("img",{staticClass:"mtbva",attrs:{src:a(381)}})]),n("router-link",{staticClass:"xxcva-link nav-link",attrs:{to:"home"}},[n("img",{staticClass:"xxcva",attrs:{src:a(382),alt:"XXCVA"}})]),n("v-spacer"),n("router-link",{staticClass:"nav-text",attrs:{to:"/results"}},[e._v("\n        Results\n    ")]),n("a",{staticClass:"nav-link",attrs:{href:"https://www.facebook.com/xxcva/"}},[n("img",{staticClass:"fb",attrs:{src:a(383)}})])],1),n("v-layout",{attrs:{column:"","align-center":"","justify-center":""}},[n("h3",{staticClass:"white--text mtbva-title"},[e._v(e._s(e.title))]),n("h5",{staticClass:"white--text mtbva-title"},[e._v(e._s(e.subtitle))]),e.buttonLink?n("v-btn",{staticClass:"header-button",attrs:{raised:"",href:e.buttonLink}},[e._v("\n      "+e._s(e.button)+"\n    ")]):e._e()],1)],1)},i=[],m={render:n,staticRenderFns:i};t.a=m},381:function(e,t,a){e.exports=a.p+"mtbva.png"},382:function(e,t,a){e.exports=a.p+"XXCVA.jpg"},383:function(e,t,a){e.exports=a.p+"fb.svg"},404:function(e,t,a){var n=a(405);"string"==typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);a(371)("c0831f54",n,!0)},405:function(e,t,a){t=e.exports=a(125)(void 0),t.push([e.i,".clazz{margin-bottom:0!important;margin-top:1rem;padding-left:6%}.post{margin:auto;padding:1rem;margin-top:1.5rem;margin-bottom:1.5rem}.center{text-align:center}.results-container{padding:1rem;background-color:#fff}",""])},406:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var i=a(376),m=n(i),r=a(407),s=n(r),o=a(408),l=n(o);t.default={name:"results",components:{MTBVAHeader:m.default},metaInfo:{title:"Results",meta:[{description:"Results from races sanctioned by The Virginia Championship Commission"},{keywords:"mountain, bike, cyclocross, gravel, ride, race, review, blog, results, cycling, road, virginia, trails, creature, carvins cove, douthat, middle mountain momma, "},{}]},data:function(){return{image:s.default,races:this.initRaces().reverse(),currentRace:this.initRaces().reverse()[0],headers:[{text:"Position",align:"center",sortable:!1,value:"position"},{text:"Name",align:"center",sortable:!1,value:"name"},{text:"Time",align:"center",sortable:!1,value:"time"}]}},methods:{initRaces:function(){var e=JSON.parse(JSON.stringify(l.default));return e.forEach(function(e){e.results.classes.forEach(function(e){e.riders.forEach(function(e,t,a){e.position=t+1,e.value=!1})})}),e},divide:function(e){for(var t=[],a=0;a<e.length;a+=2)t.push(e.slice(a,a+2));return t}}}},407:function(e,t,a){e.exports=a.p+"podium.png"},408:function(e,t,a){"use strict";e.exports=[{race:"Creature From Carvins Cove 2017",results:{classes:[{name:"XXC Men",riders:[{name:"Andrew Dunlap",time:"4:09"},{name:"Robbie Bruce",time:"4:09"},{name:"Jeffery Glenn",time:"4:25"},{name:"Derek Dotson",time:"4:27"},{name:"Alan Dyer",time:"4:28"},{name:"Jeff Cheng",time:"4:51"},{name:"Reid Bailey",time:"4:58"},{name:"Joshua Cave",time:"4:59"},{name:"Chris Blankenship",time:"5:05"},{name:"David Mccurdy",time:"5:07"},{name:"Jeff Morris",time:"5:29"},{name:"Scott Horner",time:"5:30"},{name:"Roy Pruett",time:"5:33"},{name:"Michael Cummings",time:"5:42"},{name:"Derek Johnson",time:"5:46"},{name:"Daniel Blankenship",time:"5:56"},{name:"Cole Inman",time:"5:57"},{name:"Sebastian Suppes",time:"6:27"},{name:"Dan Richardson",time:"6:27"},{name:"Andrew Burton",time:"6:29"},{name:"Carlo Dy",time:"7:42"},{name:"Phillip Mitchell",time:"7:42"}]},{name:"XXC Master Men 45-55",riders:[{name:"Acie Hylton",time:"4:11"},{name:"Wake Fulp",time:"4:21"},{name:"Chris Powhosky",time:"4:36"},{name:"Ronny Angell",time:"4:44"},{name:"Steve Schumaker",time:"4:52"},{name:"Daniel Hockenberger",time:"5:06"},{name:"Charles Dye",time:"5:11"},{name:"Scott Ramsey",time:"5:17"},{name:"Jamison Baker",time:"5:18"},{name:"Paul Sullivan",time:"5:21"},{name:"Pierson Hotchkiss",time:"5:30"},{name:"Rob Issem",time:"5:41"},{name:"John McDowell",time:"5:47"},{name:"Brian Bond",time:"6:00"},{name:"Todd Hoge",time:"6:13"},{name:"Mike Meadows",time:"6:29"},{name:"Rob Odenwelder",time:"6:34"},{name:"Jeff Baker",time:"7:08"}]},{name:"XXC Veteran Men 55+",riders:[{name:"David Lanchlet",time:"5:49"}]},{name:"XXC Women",riders:[{name:"Anna Sortore",time:"5:26"},{name:"Susannah Cadwalader",time:"5:36"},{name:"Becky Barkett",time:"6:06"},{name:"Natalie Morris",time:"6:34"}]},{name:"XXC Singlespeed",riders:[{name:"Scottie Pendeleton",time:"4:30"},{name:"Tommy Oravetz",time:"4:34"},{name:"Shannon Willis",time:"4:39"},{name:"Laura Hamm",time:"4:41"},{name:"Eric Sauer",time:"4:41:02"},{name:"Benjamin Crandell",time:"4:44"},{name:"Bryan Carpenter",time:"4:45"},{name:"Dave Williams",time:"4:54"},{name:"Gabor Szilagyi",time:"5:25"}]}]}},{race:"Creature From Carvins Cove 2016",results:{classes:[{name:"XXC Men",riders:[{name:"Jeremiah Bishop",time:"4:04"},{name:"Adam Williams",time:"4:24"},{name:"Alan Dyer",time:"4:30"},{name:"Adam Stephens",time:"4:48"},{name:"Charlie Ornsby",time:"4:48"},{name:"Jackson Hotchkiss",time:"4:48"},{name:"Ryan Miracle",time:"4:53"},{name:"Ben Klimas",time:"4:58"},{name:"Dave Williams",time:"5:02"},{name:"Gary Carrier",time:"5:04"},{name:"Sean Keefe",time:"5:06"},{name:"Jeff Jennings",time:"5:11"},{name:"John Compton",time:"5:12"},{name:"Jeff Cheng",time:"5:14"},{name:"Bradley Bayne",time:"5:14"},{name:"Joshua Cave",time:"5:18"},{name:"Carter Teague",time:"5:22"},{name:"Ray Crowder",time:"5:23"},{name:"Corey Heitz",time:"5:24"},{name:"Jeffery Glenn",time:"5:54"},{name:"Simon Rice",time:"5:54"},{name:"Kyle Little",time:"6:02"},{name:"Drew Duke",time:"6:03"},{name:"Georg Kaufman",time:"5:22"},{name:"Billy Miller",time:"5:23"},{name:"Robbie Bruce",time:"6:18"},{name:"Brian Poston",time:"6:23"},{name:"Andrew Burton",time:"6:26"},{name:"Jonas Malever",time:"6:29"},{name:"Benjamin Martin",time:"6:34"}]},{name:"XXC Master Men 45+",riders:[{name:"Wake Fulp",time:"4:38"},{name:"Rob Issem",time:"4:49"},{name:"Chris Pohowsky",time:"4:53"},{name:"Jon Gaudio",time:"4:53"},{name:"Charles Dye",time:"5:19"},{name:"John Lewis",time:"6:02"},{name:"Mike Meadows",time:"6:04"},{name:"David Phlegar",time:"6:06"},{name:"Michael Comer",time:"6:21"},{name:"Martin Piedl",time:"6:25"},{name:"Pierson Hotchkiss",time:"6:30"},{name:"Paul Sullivan",time:"6:30"},{name:"Gibson Barbee",time:"6:33"},{name:"Mark McCardell",time:"6:35"},{name:"Todd Hodge",time:"6:42"},{name:"Don Crisp",time:"6:44"},{name:"Rob Odenwelder",time:"6:53"},{name:"Steve Johnson",time:"6:54"}]},{name:"XXC Women",riders:[{name:"Laura Hamm",time:"4:46"},{name:"Lauren Cantwell",time:"5:24"},{name:"Christine Putnam",time:"5:55"},{name:"Sydney Compton",time:"6:02"},{name:"Sue George",time:"6:34"},{name:"Susannah Cadwalader",time:"6:35"},{name:"Mackenzie Prandi",time:"6:42"},{name:"Melissa Cooper",time:"7:11"}]},{name:"XXC Singlespeed",riders:[{name:"Bob Moss",time:"4:17:51"},{name:"Victor Guerara",time:"4:32:33"},{name:"Rich Dillen",time:"4:39:02"},{name:"Cliff Hatchett",time:"4:40:24"},{name:"Tommy Oravetz",time:"4:48:03"},{name:"Gabor Szilagyi",time:"4:50"},{name:"Michael Blankenship",time:"7:05"}]}]}}].reverse()},409:function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"results"}},[a("m-t-b-v-a-header",{attrs:{"header-height":480,image:e.image}}),a("v-content",[a("v-container",[a("v-layout",{attrs:{row:"",wrap:"","align-center":""}},[a("v-card",{staticClass:"post"},[a("v-select",{attrs:{items:e.races,"item-text":"race",placeholder:e.currentRace.race,label:"Select",bottom:""},model:{value:e.currentRace,callback:function(t){e.currentRace=t},expression:"currentRace"}}),e._l(e.currentRace.results.classes,function(t){return a("div",[a("h5",{staticClass:"center clazz"},[e._v(e._s(t.name))]),a("v-data-table",{attrs:{headers:e.headers,items:t.riders,"hide-actions":""},scopedSlots:e._u([{key:"items",fn:function(t){return[a("td",{staticClass:"center"},[e._v(e._s(t.item.position))]),a("td",{staticClass:"center"},[e._v(e._s(t.item.name))]),a("td",{staticClass:"center"},[e._v(e._s(t.item.time))])]}}])})],1)})],2)],1)],1)],1)],1)},i=[],m={render:n,staticRenderFns:i};t.a=m}});