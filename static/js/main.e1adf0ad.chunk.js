(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e){e.exports=[{id:1,name:"Tyrion",image:"https://pbs.twimg.com/profile_images/589936768335634432/LebGvyCB_400x400.jpg",clicked:!1,show:!1},{id:2,name:"Cersei",image:"https://shortlist.imgix.net/app/uploads/2017/08/24174526/cbb2bc94086fbb1a80ebcf5e717d31c8-256x256.png?w=256&h=256&fit=max&auto=format%2Ccompress",clicked:!1,show:!1},{id:3,name:"Gendry",image:"https://pbs.twimg.com/profile_images/3656541184/8abdcbad902ee3646eec692458f68099.jpeg",clicked:!1,show:!1},{id:4,name:"Jon Snow",image:"https://pbs.twimg.com/profile_images/613894506480439296/MGWBzW3B_400x400.jpg",clicked:!1,show:!1},{id:5,name:"Daenerys",image:"https://pbs.twimg.com/profile_images/586650383675711488/tmIahnw-_400x400.jpg",clicked:!1,show:!1},{id:6,name:"Jaime",image:"https://pbs.twimg.com/profile_images/702597942838992897/YPiVEfba_400x400.jpg",clicked:!1,show:!1},{id:7,name:"Arya",image:"https://steamuserimages-a.akamaihd.net/ugc/945084836989688263/DE7B6D0AF2A5F3D2625BE084372B00E252397A50/",clicked:!1,show:!1},{id:8,name:"Sansa",image:"https://stylist-assets.imgix.net/app/uploads/2019/02/21114423/sansa-crop-1550749468-640x640.jpeg?w=256&h=256&fit=max&auto=format%2Ccompress",clicked:!1,show:!1},{id:9,name:"Bran",image:"https://pbs.twimg.com/profile_images/378800000262873473/ad99e918f330342509aae8be1389d43e.png",clicked:!1,show:!1},{id:10,name:"Night King",image:"https://i.pinimg.com/originals/cf/22/be/cf22be3eda8a8786616a263dbdec1734.jpg",clicked:!1,show:!1},{id:11,name:"Sandor",image:"https://pbs.twimg.com/profile_images/597760902759206912/ywNIA8Ot_400x400.jpg",clicked:!1,show:!1},{id:12,name:"Brienne",image:"https://pbs.twimg.com/profile_images/378800000133933698/1461f48a5b43c5a9ae7c8a92b87d5c1d.png",clicked:!1,show:!1}]},,function(e,t,a){e.exports=a(24)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(8),s=a.n(i),r=a(10),o=a(2),m=a(3),l=a(5),d=a(4),u=a(6),g=a(1);a(17);var p=function(e){return c.a.createElement("div",{className:"card",onClick:function(){return e.handleClick(e.id)}},c.a.createElement("div",{className:"img-container"},c.a.createElement("img",{alt:e.name,src:e.image})))};a(18);var h=function(e){return c.a.createElement("div",{className:"wrapper"},e.children)},f=(a(19),a(20),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={animating:!1,message:""},a.renderMessage=function(){switch(a.state.message){case"correct":return"You have chosen wisely.";case"incorrect":return"You have chosen...poorly.";default:return"To begin, you must choose."}},a.addAnimation=function(){switch(a.state.message){case"correct":return"animated pulse";case"incorrect":return"animated wobble";default:return""}},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidUpdate",value:function(e){console.log("------",e);var t={animating:!0},a=e.score,n=e.topScore;t.message=0===a&&0===n?"":0!==a&&n>0?"correct":"incorrect",a===this.props.score&&this.state.message===t.message||this.setState(t)}},{key:"render",value:function(){var e=this;return c.a.createElement("h2",{className:" \n              gameMessage \n              ".concat(this.state.animating?this.addAnimation():"","  \n              ").concat(this.state.animating?this.state.message:"black","\n            "),id:"".concat(this.state.message),onAnimationEnd:function(){return e.setState({animating:!1})}},this.renderMessage())}}]),t}(n.Component)),b=function(e){return c.a.createElement("div",null,c.a.createElement("nav",{className:"navbar"},c.a.createElement("div",{className:"col-sm text-center"},c.a.createElement("h3",{className:"title"},"Game of Clicks")),c.a.createElement("div",{className:"col-sm text-center"},c.a.createElement("div",{className:"float-center",id:"message"},c.a.createElement(f,{score:e.score,topScore:e.topScore}))),c.a.createElement("div",{className:"col-sm text-center"},c.a.createElement("div",{className:"float-right",id:"score"},"Score: ",e.score," | Top Score: ",e.topScore))))},w=(a(21),function(){return c.a.createElement("div",{className:"header"},c.a.createElement("p",{id:"subhead"},"Click an image to live, but do not click the same one twice!"))}),k=a(9),v=(a(22),function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(a=Object(l.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(c)))).state={friends:k,score:0,topScore:0,message:"Click as many images as you can without repeating",show:!1},a.shuffleDeck=function(e){return e.sort(function(){return Math.random()-.5})},a.resetDeck=function(e){var t=e.map(function(e){return Object(r.a)({},e,{clicked:!1})});return a.timeoutId&&clearTimeout(a.timeoutId),a.shuffleDeck(t)},a.correctPick=function(e){var t=a.state.score;t++;var n=Math.max(t,a.state.topScore);a.setState({friends:a.shuffleDeck(e),score:t,topScore:n})},a.wrongPick=function(e){a.setState({friends:a.resetDeck(e),score:0,show:!1}),a.timeoutId=setTimeout(function(){this.setState({show:!0})}.bind(Object(g.a)(Object(g.a)(a))),0),console.log(a.timeoutId)},a.gameCardClick=function(e){var t=!1,n=a.state.friends.map(function(a){return a.id===e&&(a.clicked||(a.clicked=!0,t=!0)),a});t?a.correctPick(n):a.wrongPick(n)},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){this.setState({friends:this.shuffleDeck(this.state.friends)})}},{key:"render",value:function(){var e=this;return c.a.createElement(h,null,c.a.createElement(b,{score:this.state.score,topScore:this.state.topScore}),c.a.createElement(w,null),c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"card-deck",align:"center"},this.state.friends.map(function(t){return c.a.createElement("div",{className:e.state.show,key:t.id},c.a.createElement(p,{id:t.id,image:t.image,handleClick:e.gameCardClick}))}))))}}]),t}(n.Component));a(23);s.a.render(c.a.createElement(v,null),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.e1adf0ad.chunk.js.map