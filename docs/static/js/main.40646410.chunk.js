(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{121:function(e,t,a){},122:function(e,t,a){"use strict";a.r(t);var n={};a.r(n),a.d(n,"SET_CITY",(function(){return D})),a.d(n,"SET_FORECAST_DATA",(function(){return k})),a.d(n,"GET_WEATHER_CITY",(function(){return _})),a.d(n,"SET_WEATHER_CITY",(function(){return x})),a.d(n,"setSelectedCity",(function(){return g})),a.d(n,"setWeather",(function(){return W}));var r,c=a(0),o=a.n(c),i=a(28),u=a.n(i),l=a(16),s=(a(69),a(14)),d=a(15),f=a(18),m=a(17),h=a(124),p=a(139),E=a(140),y=a(141),b=a(19),v=a(9),O=a(12),w=a.n(O),j=(a(77),a(50)),C=a.n(j),T=function(e){var t,a=e.main,n=a.humidity,r=a.temp,c=e.wind.speed,o=function(e){var t=e.id;return t<300?"thunder":t<400?"drizzle":t<600?"rain":t<700?"snow":800===t?"sun":"cloud"}(e.weather[0]);return{humidity:n,temperature:(t=r,Number(C()(t).from("K").to("C").toFixed(0))),weatherState:o,wind:"".concat(c," m/s")}},S=function(e){return e.list.filter((function(e){return 6===w.a.unix(e.dt).utc().hour()||12===w.a.unix(e.dt).utc().hour()||18===w.a.unix(e.dt).utc().hour()})).map((function(e){return{weekDay:w.a.unix(e.dt).format("ddd"),hour:w.a.unix(e.dt).hour(),data:T(e)}}))},D="SET_CITY",k="SET_FORECAST_DATA",_="GET_WEATHER_CITY",x="SET_WEATHER_CITY",N="ed2b42d5d4f13ff07046ba9a40fdae8a",g=function(e){return function(t,a){var n="".concat("http://api.openweathermap.org/data/2.5/forecast","?q=").concat(e,"&appid=").concat(N);t(function(e){return{type:D,payload:e}}(e));var r=a(),c=r.cities[e]&&r.cities[e].forecastDataDate,o=new Date;if(!(c&&o-c<6e4))return fetch(n).then((function(e){return e.json()})).then((function(a){var n=S(a);console.log(n),t(function(e){return{type:k,payload:e}}({city:e,forecastData:n}))}))}},W=function(e){return function(t){e.forEach((function(e){t(function(e){return{type:_,payload:e}}(e));var a="".concat("http://api.openweathermap.org/data/2.5/weather","?q=").concat(e,"&appid=").concat(N);fetch(a).then((function(e){return e.json()})).then((function(a){var n=T(a);t(function(e){return{type:x,payload:e}}({city:e,weather:n}))}))}))}},I=a(13),A=a(56),L=a(3),z=a(4),R=a(51),P=a.n(R),Y=Object(I.a)((function(e,t){return e[t]&&e[t].forecastData}),(function(e){return e})),H=Object(I.a)((function(e){return t=e,P()(t).map((function(e){var t=Object(A.a)(e,2),a=t[0];return{key:a,name:a,data:t[1].weather}}));var t}),(function(e){return e})),B=Object(v.c)({cities:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case k:var a=t.payload,n=a.city,r=a.forecastData;return Object(z.a)(Object(z.a)({},e),{},Object(L.a)({},n,Object(z.a)(Object(z.a)({},e[n]),{},{forecastData:r,forecastDataDate:new Date})));case _:var c=t.payload;return Object(z.a)(Object(z.a)({},e),{},Object(L.a)({},c,Object(z.a)(Object(z.a)({},e[c]),{},{weather:null})));case x:var o=t.payload,i=o.city,u=o.weather;return Object(z.a)(Object(z.a)({},e),{},Object(L.a)({},i,Object(z.a)(Object(z.a)({},e[i]),{},{weather:u})));default:return e}},city:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case D:return t.payload;default:return e}}}),F=Object(I.a)((function(e){return e.city}),(function(e){return e})),G=Object(I.a)((function(e){return e.cities}),F,Y),M=Object(I.a)((function(e){return e.cities}),H),q=a(138),J=(a(46),function(e){var t=e.city;return o.a.createElement("div",{className:"locationContainer"},o.a.createElement("h1",null,t))}),V=(a(34),function(e){var t=e.humidity,a=e.wind;return o.a.createElement("div",{className:"weatherExtraInfoCont"},o.a.createElement("span",{className:"extraInfoText"},"Humedad: ".concat(t,"% ")," "),o.a.createElement("span",{className:"extraInfoText"},"Vientos: ".concat(a,"  ")))}),X=a(37),K=a.n(X),U=(r={},Object(L.a)(r,"cloud","cloud"),Object(L.a)(r,"sun","day-sunny"),Object(L.a)(r,"rain","rain"),Object(L.a)(r,"snow","snow"),Object(L.a)(r,"thunder","day-thunderstorm"),Object(L.a)(r,"drizzle","day-showers"),r),$=function(e){var t=e.temperature,a=e.weatherState;return o.a.createElement("div",{className:"weatherTemperatureCont"},function(e){var t=U[e];return t?o.a.createElement(K.a,{className:"wIcon",name:t,size:"3x"}):o.a.createElement(K.a,{className:"wIcon",name:"day-sunny",size:"3x"})}(a),o.a.createElement("span",{className:"temperature"}," ".concat(t)),o.a.createElement("span",{className:"temperatureType"},"C\xb0"))},Q=function(e){var t=e.data,a=t.temperature,n=t.weatherState,r=t.humidity,c=t.wind;return o.a.createElement("div",{className:"weatherDataCont"},o.a.createElement($,{temperature:a,weatherState:n}),o.a.createElement(V,{humidity:r,wind:c}))},Z=function(e){var t=e.onWeatherLocationClick,a=e.city,n=e.data;return o.a.createElement("div",{className:"weatherLocationCont",onClick:t},o.a.createElement(J,{city:a}),n?o.a.createElement(Q,{data:n}):o.a.createElement(q.a,{size:50}))},ee=(a(48),function(e){var t=e.cities,a=e.onSelectedLocation;return o.a.createElement("div",{className:"locationList"},function(e){return e.map((function(e){return o.a.createElement(Z,{key:e.key,city:e.name,onWeatherLocationClick:function(){return function(e){console.log("handleWeatherLocationClick"),a(e)}(e.name)},data:e.data})}))}(t))}),te=function(e){Object(f.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).handleSelectedLocation=function(t){e.props.setSelectedCity(t)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.setWeather,a=e.setSelectedCity,n=e.cities,r=e.city;t(n),a(r)}},{key:"render",value:function(){return o.a.createElement(ee,{cities:this.props.citiesWeather,onSelectedLocation:this.handleSelectedLocation})}}]),a}(c.Component),ae=Object(l.b)((function(e){return{citiesWeather:M(e),city:F(e)}}),(function(e){return Object(v.b)(n,e)}))(te),ne=(a(121),function(e){var t=e.weekDay,a=e.hour,n=e.data;return o.a.createElement("div",null,o.a.createElement("h2",null,t,"  --  ",a," hs"),o.a.createElement(Q,{data:n}))}),re=function(e){var t=e.city,a=e.forecastData;return o.a.createElement("div",null,o.a.createElement("h2",{className:"forecast-title"},"Pronostico Extendido para ",t),a?function(e){return e.map((function(e){return o.a.createElement(ne,{key:"".concat(e.weekDay).concat(e.hour),weekDay:e.weekDay,hour:e.hour,data:e.data})}))}(a):o.a.createElement("h3",null,'"Cargando Pronostico Extendido..."'))},ce=function(e){Object(f.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){var e=this.props,t=e.city,a=e.forecastData;return t&&o.a.createElement(re,{city:t,forecastData:a})}}]),a}(c.Component),oe=Object(l.b)((function(e){return{city:F(e),forecastData:G(e)}}),null)(ce),ie=["Santa Cruz de la Sierra,bo","Potosi,bo","Sucre,bo","La Paz,bo","Cochabamba,bo","Tarija,bo","Pando,bo","Beni,bo","Oruro,bo"],ue=function(e){Object(f.a)(a,e);var t=Object(m.a)(a);function a(){return Object(s.a)(this,a),t.apply(this,arguments)}return Object(d.a)(a,[{key:"render",value:function(){return o.a.createElement(b.Grid,null,o.a.createElement(b.Row,null,o.a.createElement(p.a,{position:"sticky"},o.a.createElement(E.a,null,o.a.createElement(y.a,{variant:"h3",color:"inherit"},"Wheather App")))),o.a.createElement(b.Row,null,o.a.createElement(b.Col,{xs:12,md:6},o.a.createElement(ae,{cities:ie})),o.a.createElement(b.Col,{xs:12,md:6},o.a.createElement(h.a,{elevation:4},o.a.createElement("div",{className:"details"},o.a.createElement(oe,null))))))}}]),a}(c.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var le=a(55),se=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||v.d,de=Object(v.e)(B,{city:"Sucre,bo"},se(Object(v.a)(le.a)));u.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(l.a,{store:de},o.a.createElement(ue,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},34:function(e,t,a){},46:function(e,t,a){},48:function(e,t,a){},59:function(e,t,a){e.exports=a(122)},69:function(e,t,a){}},[[59,1,2]]]);
//# sourceMappingURL=main.40646410.chunk.js.map