(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){},18:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(8),c=n.n(o),r=(n(14),n(1)),u=n(2),i=n(5),s=n(3),d=n(4),m=n(6),v=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).shouldComponentUpdate=function(e){return console.log("Should I Update?"),e.value%2===0},n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"componentWillReceiveProps",value:function(e){console.log("Receiving new props")}},{key:"componentDidUpdate",value:function(){console.log("Component Re-rendered.")}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,this.props.value))}}]),t}(a.Component),b=function(e){function t(e){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).call(this,e))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"shouldComponentUpdate",value:function(e){return e.value%2===1}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,this.props.value))}}]),t}(a.Component),h=function(e){function t(e){var n;return Object(r.a)(this,t),(n=Object(i.a)(this,Object(s.a)(t).call(this,e))).state={value:0},n.addValue=n.addValue.bind(Object(m.a)(Object(m.a)(n))),n}return Object(d.a)(t,e),Object(u.a)(t,[{key:"addValue",value:function(){this.setState({value:this.state.value+1})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("button",{onClick:this.addValue},"Add"),l.a.createElement("form",null,l.a.createElement("label",{className:"evenNumsLabel"},"Even Numbers",l.a.createElement(v,{value:this.state.value})),l.a.createElement("label",{className:"oddNumsLabel"},"Odd Numbers",l.a.createElement(b,{value:this.state.value}))))}}]),t}(a.Component),p=(n(16),function(e){function t(){return Object(r.a)(this,t),Object(i.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement(h,null))}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},9:function(e,t,n){e.exports=n(18)}},[[9,2,1]]]);
//# sourceMappingURL=main.04cefbbe.chunk.js.map