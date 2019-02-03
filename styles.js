(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".full-width {\n  width: 100%; }\n\n.absolute {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.absolute .tabled {\n    display: table;\n    width: 100%;\n    height: 100%; }\n\n.absolute .celled {\n    display: table-cell;\n    vertical-align: middle; }\n\n*:focus {\n  outline: 0px none transparent; }\n\n::-webkit-input-placeholder {\n  color: #fff !important; }\n\n::-ms-input-placeholder {\n  color: #fff !important; }\n\n::placeholder {\n  color: #fff !important; }\n\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: #3d84a8;\n  position: relative; }\n\nbody:before, body:after {\n    position: fixed;\n    content: '';\n    z-index: -1; }\n\nbody:before {\n    background: url('top-bg.svg') no-repeat;\n    background-size: 80px;\n    width: 80px;\n    height: 80px;\n    top: 100px;\n    right: 5px; }\n\nbody:after {\n    -webkit-transform: rotateY(180deg);\n    transform: rotateY(180deg);\n    background: url('bottom-bg.svg') no-repeat;\n    width: 120px;\n    height: 120px;\n    background-size: 120px;\n    bottom: -10px;\n    right: -10px; }\n\nbody app-header, body app-card {\n    position: relative;\n    z-index: 100; }\n\n.pad {\n  padding: 15px 30px; }\n\nheader {\n  -webkit-display: flex;\n  -moz-display: flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background: #48466d;\n  padding: 15px 45px; }\n\nheader a, header .local-time {\n    display: inline-block; }\n\nheader a {\n    font: 300 36px \"Open Sans\";\n    color: #fff;\n    text-transform: uppercase;\n    display: block; }\n\nheader a img {\n      display: inline-block;\n      vertical-align: middle;\n      margin-right: 15px; }\n\nheader a span {\n      display: none; }\n\nheader a:hover, header a:visited {\n      color: #fff; }\n\nheader .local-time {\n    text-align: right; }\n\nheader .local-time span {\n      font: 300 13px \"Open Sans\";\n      display: block;\n      color: #fff;\n      margin-bottom: 8px; }\n\nheader .local-time span:last-child {\n        margin-bottom: 0; }\n\nheader .local-time span em {\n        color: #46cdcf;\n        font-style: normal;\n        position: relative;\n        padding-left: 22px;\n        display: inline-block;\n        text-transform: uppercase;\n        letter-spacing: 2px; }\n\nheader .local-time span em:before {\n          position: absolute;\n          top: 50%;\n          left: 0;\n          width: 14px;\n          height: 14px;\n          margin-top: -7px;\n          content: ''; }\n\nheader .local-time span:last-child em:before {\n        background: url('time.svg') no-repeat;\n        background-size: 14px; }\n\nheader .local-time span:first-child em:before {\n        background: url('calendar.svg') no-repeat;\n        background-size: 14px; }\n\n.card {\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  background: #46cdcf;\n  color: #333;\n  display: block;\n  overflow: hidden;\n  margin: 11px 0; }\n\n.card:hover {\n    color: #333;\n    text-decoration: none; }\n\n.card .title {\n    font: 400 22px \"Open Sans\";\n    margin-left: -30px;\n    margin-right: -30px;\n    padding: 10px 30px;\n    background: #48466d;\n    color: #fff;\n    margin-bottom: 15px;\n    text-transform: uppercase;\n    text-align: center;\n    position: relative;\n    overflow: hidden; }\n\n.card .title a {\n      background: url('back.svg') no-repeat;\n      position: absolute;\n      top: 0;\n      left: 30px;\n      background-size: 20px;\n      background-position: center;\n      background-color: #67649b;\n      width: 50px;\n      height: 100%; }\n\n.card .temp {\n    text-align: center;\n    border-bottom: 1px solid #2fb2b3;\n    padding-bottom: 30px;\n    margin-bottom: 30px; }\n\n.card .temp span {\n      font: 300 50px \"Open Sans\";\n      position: relative;\n      padding: 0 25px 0 0;\n      display: inline-block;\n      color: #fff; }\n\n.card .temp span strong {\n        font-weight: 300; }\n\n.card .temp span:after {\n        background: url('celsius.svg') no-repeat;\n        content: '';\n        width: 20px;\n        height: 20px;\n        background-size: 20px;\n        position: absolute;\n        top: 50%;\n        right: 0;\n        margin-top: -10px; }\n\n.card .temp.no-after span {\n      padding-right: 0; }\n\n.card .temp.no-after span:after {\n        display: none; }\n\n.card .temp em {\n      border-radius: 20px;\n      font: 300 16px \"Open Sans\";\n      text-transform: capitalize;\n      font-style: normal;\n      padding: 2px 30px;\n      margin-top: 15px;\n      display: inline-block;\n      letter-spacing: 1px;\n      background: #2fb2b3;\n      color: #fff; }\n\n.card .humidity {\n    text-align: center;\n    color: #fff;\n    border-bottom: 1px solid #2fb2b3;\n    padding-bottom: 30px;\n    margin-bottom: 30px; }\n\n.card .humidity i {\n      font: 300 16px \"Open Sans\";\n      display: block;\n      text-transform: uppercase;\n      font-style: normal;\n      color: #333;\n      letter-spacing: 1px; }\n\n.card .humidity span {\n      font: 300 30px \"Open Sans\";\n      position: relative;\n      padding-right: 30px;\n      display: inline-block; }\n\n.card .humidity span em {\n        font: 300 22px \"Open Sans\";\n        position: absolute;\n        top: 50%;\n        right: 0;\n        margin-top: -14px;\n        font-style: normal; }\n\n.card .title2 {\n    font: 300 16px \"Open Sans\";\n    color: #333;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    margin-bottom: 15px; }\n\n.card .max-min {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #2fb2b3;\n    text-align: center;\n    padding-bottom: 40px; }\n\n.card .max-min .temp {\n      border: none;\n      padding: 0;\n      margin: 0; }\n\n.card .max-min .temp span {\n        font-size: 40px; }\n\n.card .max-min .temp span i {\n          font: 300 18px \"Open Sans\";\n          font-style: normal; }\n\n.card .max-min .max {\n      margin-bottom: 30px; }\n\n.card .max-min .max .title2 span:after {\n        background: url('max.svg') no-repeat;\n        background-size: 24px; }\n\n.card .max-min .min .title2 span:after {\n      background: url('min.svg') no-repeat;\n      background-size: 24px; }\n\n.card .max-min .min .title2 span.wind-speed:after {\n      background: url('wind-speed.svg') no-repeat;\n      background-size: 24px; }\n\n.card .max-min .min .title2 span.wind-deg:after {\n      background: url('wind-deg.svg') no-repeat;\n      background-size: 24px; }\n\n.card .max-min .min .title2 span.latitude:after {\n      background: url('latitude.svg') no-repeat;\n      background-size: 24px; }\n\n.card .max-min .min .title2 span.longitude:after {\n      background: url('longitude.svg') no-repeat;\n      background-size: 24px; }\n\n.card .max-min .min .title2 span.sunrise:after {\n      background: url('sunrise.svg') no-repeat;\n      background-size: 24px; }\n\n.card .max-min.inverse {\n      display: flex;\n      flex-direction: column; }\n\n.card .max-min.inverse .max, .card .max-min.inverse .min {\n        margin: 20px 0; }\n\n.card .max-min.inverse.coordinates {\n        margin-top: 30px; }\n\n.mini-card .card .temp {\n  margin-bottom: 0;\n  border: none; }\n\n.mini-card .card .humidity, .mini-card .card .max-min {\n  display: none; }\n\n.no-data {\n  text-align: center; }\n\n.no-data span {\n    font: 300 18px \"Open Sans\";\n    color: #fff;\n    text-transform: capitalize;\n    position: relative;\n    display: inline-block;\n    padding: 100px 0 100px 50px; }\n\n.no-data span:before {\n      background: url('no-data.svg') no-repeat;\n      content: '';\n      width: 30px;\n      height: 30px;\n      background-size: 30px;\n      position: absolute;\n      top: 50%;\n      left: 0;\n      margin-top: -15px; }\n\n.forecast {\n  padding: 40px 0; }\n\n.forecast .forecast-title {\n    font: 300 22px \"Open Sans\";\n    text-transform: uppercase;\n    padding: 15px 0;\n    background: #22495d;\n    color: #fff;\n    text-align: center; }\n\n.forecast strong {\n    font: 300 20px \"Open Sans\";\n    padding: 30px 0;\n    display: block;\n    text-align: center;\n    color: #48466d;\n    text-transform: uppercase;\n    background: rgba(255, 255, 255, 0.15); }\n\n.forecast strong.seperate {\n      margin-top: 20px; }\n\n.forecast .degree-strip {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: stretch;\n    position: relative;\n    padding-top: 30px; }\n\n.forecast .degree-strip.no-pt {\n      padding-top: 0; }\n\n.forecast .degree-strip div:not(.degree-title) {\n      width: calc(100% / 3);\n      background: rgba(72, 70, 109, 0.25); }\n\n.forecast .degree-strip .degree-title {\n      font: 300 14px \"Open Sans\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 5px 0;\n      background: rgba(72, 70, 109, 0.5);\n      text-transform: uppercase;\n      text-align: center; }\n\n.forecast .degree-strip div {\n      font: 300 22px \"Open Sans\";\n      color: #fff;\n      text-align: center; }\n\n.forecast .degree-strip div span {\n        position: relative;\n        display: inline-block;\n        padding: 5px 20px 5px 0; }\n\n.forecast .degree-strip div span.conditions {\n          padding: 14px 0;\n          font-size: 13px; }\n\n.forecast .degree-strip div span.humidity, .forecast .degree-strip div span.conditions {\n          padding-right: 0;\n          margin-bottom: 0; }\n\n.forecast .degree-strip div span.humidity:after, .forecast .degree-strip div span.conditions:after {\n            display: none; }\n\n.forecast .degree-strip div span:after {\n          position: absolute;\n          top: 50%;\n          right: 0;\n          margin-top: -8px;\n          content: ''; }\n\n.forecast .degree-strip div span.deg:after {\n          background: url('celsius.svg') no-repeat;\n          content: '';\n          width: 16px;\n          height: 16px;\n          background-size: 16px; }\n\n.forecast .degree-strip div span.wind-speed:after {\n          background: url('wind-speed.svg') no-repeat;\n          content: '';\n          width: 16px;\n          height: 16px;\n          background-size: 16px; }\n\n.forecast .degree-strip.inverse {\n      padding-top: 0;\n      padding-bottom: 30px; }\n\n.forecast .degree-strip.inverse .degree-title {\n        top: auto;\n        bottom: 0; }\n\n.search-container {\n  position: relative;\n  padding: 20px 15px 30px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n\n.search-container span {\n    position: absolute;\n    bottom: -2px;\n    left: 15px;\n    font: 400 14px \"Open Sans\";\n    display: block;\n    color: #fff;\n    padding-left: 28px;\n    white-space: nowrap; }\n\n.search-container span:before {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      margin-top: -8px; }\n\n.search-container span.error:before {\n      background: url('error.svg') no-repeat;\n      content: '';\n      width: 16px;\n      height: 16px;\n      background-size: 16px; }\n\n.search-container span.fetch:before {\n      background: url('fetch.svg') no-repeat;\n      content: '';\n      width: 16px;\n      height: 16px;\n      background-size: 16px; }\n\n.search-container input[type=\"text\"] {\n    -moz-border-top-left-radius: 30px;\n    border-top-left-radius: 30px;\n    -moz-border-bottom-left-radius: 30px;\n    border-bottom-left-radius: 30px;\n    font: 400 14px \"Open Sans\";\n    width: calc(100% - 100px);\n    height: 36px;\n    text-transform: uppercase;\n    background: transparent;\n    color: #fff;\n    border: 1px solid #f5f5f5;\n    border-right: none;\n    padding-left: 20px; }\n\n.search-container button {\n    font: 400 18px \"Open Sans\";\n    -moz-border-top-right-radius: 30px;\n    border-top-right-radius: 30px;\n    -moz-border-bottom-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n    width: 100px;\n    height: 36px;\n    line-height: 34px;\n    border: 1px solid #fff;\n    background: #48466d;\n    color: #fff;\n    text-transform: uppercase; }\n\n.city-flex {\n  display: flex;\n  flex-direction: column; }\n\n@media only screen and (min-width: 480px) {\n  .search-container input[type=\"text\"] {\n    width: 400px; }\n  .search-container button {\n    width: 150px; }\n  header a span {\n    display: inline-block;\n    vertical-align: middle; }\n  .card .temp img {\n    display: inline-block;\n    margin-right: 5px; }\n  .card .temp span {\n    font-size: 65px; }\n  .card .humidity span {\n    font-size: 40px; }\n  .card .max-min {\n    padding: 0 30px 30px;\n    flex-direction: row; }\n    .card .max-min .max {\n      margin-bottom: 0; }\n  .card .title2 span {\n    position: relative;\n    padding-right: 30px; }\n    .card .title2 span:after {\n      position: absolute;\n      top: 50%;\n      right: 0;\n      width: 24px;\n      height: 24px;\n      content: '';\n      margin-top: -12px; } }\n\n@media only screen and (min-width: 768px) {\n  .card {\n    padding: 0 30px; }\n    .card .title a {\n      left: 0; } }\n\n@media only screen and (min-width: 992px) {\n  .card .max-min.inverse {\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n    justify-content: space-between;\n    padding-bottom: 55px;\n    margin-bottom: 55px;\n    flex-direction: row; }\n    .card .max-min.inverse.coordinates {\n      margin-top: 0; }\n  .city-flex {\n    width: 100%;\n    margin-bottom: 60px;\n    flex-direction: row;\n    padding-right: 25px;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #2fb2b3; }\n    .city-flex .temp, .city-flex .humidity {\n      border: none; }\n    .city-flex .humidity {\n      margin-left: 55px; } }\n\n@media only screen and (min-width: 1200px) {\n  a, button, input[type=\"submit\"] {\n    transition: all .3s ease-out; }\n  body app-header {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n    position: fixed;\n    width: 100%;\n    z-index: 200; }\n  header a {\n    letter-spacing: 3px; }\n  header .local-time span {\n    font: 400 16px \"Open Sans\"; }\n  .content {\n    padding-top: 110px;\n    padding-bottom: 30px; }\n  a.card {\n    margin: 15px 0; }\n    a.card .temp em, a.card .title {\n      transition: all .3s ease-out; }\n    a.card:hover {\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n      background: #2fb2b3; }\n      a.card:hover .title {\n        background: #5d5a8c; }\n      a.card:hover .temp em {\n        background: #6ed8da; }\n  .card .title a:hover {\n    background-color: #48466d; }\n  .card .max-min.inverse .min {\n    margin-left: 90px; }\n  .card .max-min.coordinates .min:first-child {\n    margin-left: 0; }\n  .search-container {\n    margin-bottom: 0;\n    padding-bottom: 20px; }\n    .search-container span {\n      bottom: auto;\n      left: auto;\n      position: relative;\n      margin-left: 15px; }\n    .search-container button:hover {\n      background: transparent;\n      border-color: #fff; }\n  .forecast {\n    padding: 0;\n    margin-bottom: 40px; }\n    .forecast .forecast-title {\n      background: transparent;\n      color: #48466d;\n      font-size: 30px; } }\n\n@media only screen and (min-width: 1366px) {\n  .flex-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: stretch; }\n    .flex-container .flex-block:first-child {\n      width: 65%; }\n    .flex-container .flex-block:last-child {\n      width: 30%; }\n    .flex-container .flex-block .no-data {\n      margin: 170px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9GOlxcQW5ndWxhclxcc3VubGl0ZS9zcmNcXGFzc2V0c1xcc2Nzc1xcX2Jhc2Uuc2NzcyIsInNyYy9GOlxcQW5ndWxhclxcc3VubGl0ZS9zcmNcXHN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVIQTtFQUNJLFlBQVcsRUFDZDs7QUFDRDtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUyxFQVdaOztBQWpCRDtJQVNRLGVBQWM7SUFDZCxZQUFXO0lBQ1gsYUFBWSxFQUNmOztBQVpMO0lBY1Esb0JBQW1CO0lBQ25CLHVCQUFzQixFQUN6Qjs7QUN4SUw7RUFDSSw4QkRBVyxFQ0NkOztBQUNEO0VBQ0ksdUJBQW9CLEVBQ3ZCOztBQUlEO0VBQ0ksdUJBQW9CLEVBQ3ZCOztBQUZEO0VBQ0ksdUJBQW9CLEVBQ3ZCOztBQUNEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWiwwQkRaVTtFQ2FWLG1CQUFrQixFQTRCckI7O0FBaENEO0lBT1EsZ0JBQWU7SUFDZixZQUFXO0lBQ1gsWUFBVyxFQUNkOztBQVZMO0lEaUdJLHdDQUFzRDtJQ3BGbEQsc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCxhQUFZO0lBQ1osV0FBVTtJQUNWLFdBQVUsRUFDYjs7QUFsQkw7SUQ0RkksbUNDeEVzQztJRDBFdEMsMkJDMUVzQztJRDZFdEMsMkNBQXNEO0lDM0VsRCxhQUFZO0lBQ1osY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixjQUFhO0lBQ2IsYUFBWSxFQUNmOztBQTNCTDtJQTZCUSxtQkFBa0I7SUFDbEIsYUFBWSxFQUNmOztBQUVMO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5QixvQkFBbUI7RUFDbkIsb0JEckRVO0VDc0RWLG1CQUFrQixFQThEckI7O0FBdEVEO0lBV1Esc0JBQXFCLEVBQ3hCOztBQVpMO0lEdkNJLDJCQUFrQztJQ3NEOUIsWURoRUE7SUNpRUEsMEJBQXlCO0lBQ3pCLGVBQWMsRUFhakI7O0FBOUJMO01Bb0JZLHNCQUFxQjtNQUNyQix1QkFBc0I7TUFDdEIsbUJBQWtCLEVBQ3JCOztBQXZCVDtNQXlCWSxjQUFhLEVBQ2hCOztBQTFCVDtNQTRCWSxZRDdFSixFQzhFQzs7QUE3QlQ7SUFnQ1Esa0JBQWlCLEVBcUNwQjs7QUFyRUw7TUR2Q0ksMkJBQWtDO01DMkUxQixlQUFjO01BQ2QsWUR0Rko7TUN1RkksbUJBQWtCLEVBOEJyQjs7QUFwRVQ7UUF5Q2dCLGlCQUFnQixFQUNuQjs7QUExQ2I7UUE0Q2dCLGVEeEZGO1FDeUZFLG1CQUFrQjtRQUNsQixtQkFBa0I7UUFDbEIsbUJBQWtCO1FBQ2xCLHNCQUFxQjtRQUNyQiwwQkFBeUI7UUFDekIsb0JBQW1CLEVBU3RCOztBQTNEYjtVRGZJLG1CQUFrQjtVQUNsQixTQ21FK0I7VURsRS9CLFFDa0VrQztVQUNsQixZQUFXO1VBQ1gsYUFBWTtVQUNaLGlCQUFnQjtVQUNoQixZQUFXLEVBQ2Q7O0FBMURqQjtRRDZESSxzQ0FBc0Q7UUNDMUMsc0JBQXFCLEVBQ3hCOztBQS9EYjtRRDZESSwwQ0FBc0Q7UUNLMUMsc0JBQXFCLEVBQ3hCOztBQUliO0VEdkNJLHdDQUF5QztFQXpCekMsbUJDa0VtQjtFQUNuQixvQkR0SFU7RUN1SFYsWUQzSEk7RUM0SEosZUFBYztFQUNkLGlCQUFnQjtFQUNoQixlQUFjLEVBc0xqQjs7QUE3TEQ7SUFVUSxZRGpJQTtJQ2tJQSxzQkFBcUIsRUFDeEI7O0FBWkw7SUQzR0ksMkJBQWtDO0lDMEg5QixtQkFBa0I7SUFDbEIsb0JBQW1CO0lBQ25CLG1CQUFrQjtJQUNsQixvQkR2SU07SUN3SU4sWUQzSUE7SUM0SUEsb0JBQW1CO0lBQ25CLDBCQUF5QjtJQUN6QixtQkFBa0I7SUFDbEIsbUJBQWtCO0lBQ2xCLGlCQUFnQixFQVduQjs7QUFuQ0w7TURWSSxzQ0FBc0Q7TUE1RXRELG1CQUFrQjtNQUNsQixPQ2lIcUI7TURoSHJCLFdDZ0gyQjtNQUNuQixzQkFBcUI7TUFDckIsNEJBQTJCO01BQzNCLDBCQUFxQztNQUNyQyxZQUFXO01BQ1gsYUFBWSxFQUNmOztBQWxDVDtJQXFDUSxtQkFBa0I7SUFDbEIsaUNEdkpvQjtJQ3dKcEIscUJBQW9CO0lBQ3BCLG9CQUFtQixFQXVDdEI7O0FBL0VMO01EOUdJLDJCQUFrQztNQzBKMUIsbUJBQWtCO01BQ2xCLG9CQUFtQjtNQUNuQixzQkFBcUI7TUFDckIsWUR2S0osRUNpTEM7O0FBekRUO1FBa0RnQixpQkFBZ0IsRUFDbkI7O0FBbkRiO1FEcENJLHlDQUFzRDtRQUN0RCxZQUFXO1FBQ1gsWUN1RndDO1FEdEZ4QyxhQ3NGOEM7UURyRjlDLHNCQ3FGb0Q7UUR0SXBELG1CQUFrQjtRQUNsQixTQ3NJMkI7UURySTNCLFNDcUk4QjtRQUNsQixrQkFBaUIsRUFDcEI7O0FBeERiO01BNERnQixpQkFBZ0IsRUFLbkI7O0FBakViO1FBK0RvQixjQUFhLEVBQ2hCOztBQWhFakI7TURoRUksb0JDb0k0QjtNRGxMNUIsMkJBQWtDO01Db0wxQiwyQkFBMEI7TUFDMUIsbUJBQWtCO01BQ2xCLGtCQUFpQjtNQUNqQixpQkFBZ0I7TUFDaEIsc0JBQXFCO01BQ3JCLG9CQUFtQjtNQUNuQixvQkQ3TGdCO01DOExoQixZRHJNSixFQ3NNQzs7QUE5RVQ7SUFpRlEsbUJBQWtCO0lBQ2xCLFlEMU1BO0lDMk1BLGlDRHBNb0I7SUNxTXBCLHFCQUFvQjtJQUNwQixvQkFBbUIsRUF1QnRCOztBQTVHTDtNRDlHSSwyQkFBa0M7TUN1TTFCLGVBQWM7TUFDZCwwQkFBeUI7TUFDekIsbUJBQWtCO01BQ2xCLFlEbk5KO01Db05JLG9CQUFtQixFQUN0Qjs7QUE5RlQ7TUQ5R0ksMkJBQWtDO01DK00xQixtQkFBa0I7TUFDbEIsb0JBQW1CO01BQ25CLHNCQUFxQixFQVF4Qjs7QUEzR1Q7UUQ5R0ksMkJBQWtDO1FBNkJsQyxtQkFBa0I7UUFDbEIsU0N1TDJCO1FEdEwzQixTQ3NMOEI7UUFDbEIsa0JBQWlCO1FBQ2pCLG1CQUFrQixFQUNyQjs7QUExR2I7SUQ5R0ksMkJBQWtDO0lDNk45QixZRHRPQTtJQ3VPQSwwQkFBeUI7SUFDekIsb0JBQW1CO0lBQ25CLG9CQUFtQixFQUN0Qjs7QUFuSEw7SUFxSFEsY0FBYTtJQUNiLHVCQUFzQjtJQUN0QiwrQkFBOEI7SUFDOUIsb0JBQW1CO0lBQ25CLGlDRDFPb0I7SUMyT3BCLG1CQUFrQjtJQUNsQixxQkFBb0IsRUFpRXZCOztBQTVMTDtNQThIWSxhQUFZO01BQ1osV0FBVTtNQUNWLFVBQVMsRUFVWjs7QUExSVQ7UUFtSWdCLGdCQUFlLEVBTWxCOztBQXpJYjtVRDlHSSwyQkFBa0M7VUNxUGxCLG1CQUFrQixFQUNyQjs7QUF4SWpCO01BNElZLG9CQUFtQixFQU10Qjs7QUFsSlQ7UURWSSxxQ0FBc0Q7UUMwSjFDLHNCQUFxQixFQUN4Qjs7QUFqSmI7TURWSSxxQ0FBc0Q7TUNrS2xDLHNCQUFxQixFQUN4Qjs7QUF6SnJCO01EVkksNENBQXNEO01Dc0tsQyxzQkFBcUIsRUFDeEI7O0FBN0pyQjtNRFZJLDBDQUFzRDtNQzBLbEMsc0JBQXFCLEVBQ3hCOztBQWpLckI7TURWSSwwQ0FBc0Q7TUM4S2xDLHNCQUFxQixFQUN4Qjs7QUFyS3JCO01EVkksMkNBQXNEO01Da0xsQyxzQkFBcUIsRUFDeEI7O0FBektyQjtNRFZJLHlDQUFzRDtNQ3NMbEMsc0JBQXFCLEVBQ3hCOztBQTdLckI7TUFrTFksY0FBYTtNQUNiLHVCQUFzQixFQVF6Qjs7QUEzTFQ7UUFzTGdCLGVBQWMsRUFDakI7O0FBdkxiO1FBeUxnQixpQkFBZ0IsRUFDbkI7O0FBSWI7RUFHWSxpQkFBZ0I7RUFDaEIsYUFBWSxFQUNmOztBQUxUO0VBT1ksY0FBYSxFQUNoQjs7QUFHVDtFQUNJLG1CQUFrQixFQWdCckI7O0FBakJEO0lEdlRJLDJCQUFrQztJQzRUOUIsWUR0VUE7SUN1VUEsMkJBQTBCO0lBQzFCLG1CQUFrQjtJQUNsQixzQkFBcUI7SUFDckIsNEJBQTJCLEVBTzlCOztBQWhCTDtNRDdPSSx5Q0FBc0Q7TUFDdEQsWUFBVztNQUNYLFlDdVBvQztNRHRQcEMsYUNzUDBDO01EclAxQyxzQkNxUGdEO01EM1NoRCxtQkFBa0I7TUFDbEIsU0MyU3VCO01EMVN2QixRQzBTMEI7TUFDbEIsa0JBQWlCLEVBQ3BCOztBQUdUO0VBQ0ksZ0JBQWUsRUFnR2xCOztBQWpHRDtJRHpVSSwyQkFBa0M7SUM4VTlCLDBCQUF5QjtJQUN6QixnQkFBZTtJQUNmLG9CQUE4QjtJQUM5QixZRDNWQTtJQzRWQSxtQkFBa0IsRUFDckI7O0FBVkw7SUR6VUksMkJBQWtDO0lDc1Y5QixnQkFBZTtJQUNmLGVBQWM7SUFDZCxtQkFBa0I7SUFDbEIsZURoV007SUNpV04sMEJBQXlCO0lBQ3pCLHNDQUFxQyxFQUt4Qzs7QUF2Qkw7TUFxQlksaUJBQWdCLEVBQ25COztBQXRCVDtJQXlCUSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLCtCQUE4QjtJQUM5QixxQkFBb0I7SUFDcEIsbUJBQWtCO0lBQ2xCLGtCQUFpQixFQWtFcEI7O0FBaEdMO01BaUNZLGVBQWMsRUFDakI7O0FBbENUO01Bb0NZLHNCQUFxQjtNQUNyQixvQ0FBbUMsRUFDdEM7O0FBdENUO01EelVJLDJCQUFrQztNQXdCbEMsbUJBQWtCO01BQ2xCLE9DeVZxQjtNRHhWckIsUUN3VndCO01BQ2hCLFlBQVc7TUFDWCxlQUFjO01BQ2QsbUNBQWtDO01BQ2xDLDBCQUF5QjtNQUN6QixtQkFBa0IsRUFDckI7O0FBL0NUO01EelVJLDJCQUFrQztNQzJYMUIsWURyWUo7TUNzWUksbUJBQWtCLEVBbUNyQjs7QUF0RlQ7UUFzRGdCLG1CQUFrQjtRQUNsQixzQkFBcUI7UUFDckIsd0JBQXVCLEVBNkIxQjs7QUFyRmI7VUEyRG9CLGdCQUFlO1VBQ2YsZ0JBQWUsRUFDbEI7O0FBN0RqQjtVQStEb0IsaUJBQWdCO1VBQ2hCLGlCQUFnQixFQUtuQjs7QUFyRWpCO1lBbUV3QixjQUFhLEVBQ2hCOztBQXBFckI7VUQ1U0ksbUJBQWtCO1VBQ2xCLFNDa1grQjtVRGpYL0IsU0NpWGtDO1VBQ2xCLGlCQUFnQjtVQUNoQixZQUFXLEVBQ2Q7O0FBMUVqQjtVRC9QSSx5Q0FBc0Q7VUFDdEQsWUFBVztVQUNYLFlDMFVnRDtVRHpVaEQsYUN5VXNEO1VEeFV0RCxzQkN3VTRELEVBQzNDOztBQTlFckI7VUQvUEksNENBQXNEO1VBQ3RELFlBQVc7VUFDWCxZQytVbUQ7VUQ5VW5ELGFDOFV5RDtVRDdVekQsc0JDNlUrRCxFQUM5Qzs7QUFuRnJCO01Bd0ZZLGVBQWM7TUFDZCxxQkFBb0IsRUFNdkI7O0FBL0ZUO1FBNEZnQixVQUFTO1FBQ1QsVUFBUyxFQUNaOztBQUliO0VBQ0ksbUJBQWtCO0VBQ2xCLHdCQUF1QjtFQUN2QixvQkFBbUI7RUFDbkIsY0FBYTtFQUNiLG9CQUFtQjtFQUNuQiw0QkFBMkI7RUFDM0Isb0JBQW1CLEVBa0R0Qjs7QUF6REQ7SUR6WUksbUJBQWtCO0lBQ2xCLGFDa1pvQjtJRGpacEIsV0NpWjBCO0lEbGIxQiwyQkFBa0M7SUNvYjlCLGVBQWM7SUFDZCxZQUFXO0lBQ1gsbUJBQWtCO0lBQ2xCLG9CQUFtQixFQWdCdEI7O0FBL0JMO01EblpJLG1CQUFrQjtNQUNsQixTQ29hdUI7TURuYXZCLFFDbWEwQjtNQUNsQixpQkFBZ0IsRUFDbkI7O0FBcEJUO01EaldJLHVDQUFzRDtNQUN0RCxZQUFXO01BQ1gsWUNzWHNDO01Eclh0QyxhQ3FYNEM7TURwWDVDLHNCQ29Ya0QsRUFDekM7O0FBeEJiO01EaldJLHVDQUFzRDtNQUN0RCxZQUFXO01BQ1gsWUMyWHNDO01EMVh0QyxhQzBYNEM7TUR6WDVDLHNCQ3lYa0QsRUFDekM7O0FBN0JiO0lEelhJLGtDQzBaMkI7SUR6WjNCLDZCQ3laMkI7SURoWjNCLHFDQ2laMkI7SURoWjNCLGdDQ2daMkI7SUQxYzNCLDJCQUFrQztJQzRjOUIsMEJBQXlCO0lBQ3pCLGFBQVk7SUFDWiwwQkFBeUI7SUFDekIsd0JEMWRPO0lDMmRQLFlEN2RBO0lDOGRBLDBCQUF5QjtJQUN6QixtQkFBa0I7SUFDbEIsbUJBQWtCLEVBQ3JCOztBQTVDTDtJRHhhSSwyQkFBa0M7SUFvRGxDLG1DQ21hMkI7SURsYTNCLDhCQ2thMkI7SUR6WjNCLHNDQzBaMkI7SUR6WjNCLGlDQ3laMkI7SUFDdkIsYUFBWTtJQUNaLGFBQVk7SUFDWixrQkFBaUI7SUFDakIsdUJEemVBO0lDMGVBLG9CRHZlTTtJQ3dlTixZRDNlQTtJQzRlQSwwQkFBeUIsRUFDNUI7O0FBRUw7RUFDSSxjQUFhO0VBQ2IsdUJBQXNCLEVBQ3pCOztBQUVEO0VBQ0k7SUFFUSxhQUFZLEVBQ2Y7RUFITDtJQUtRLGFBQVksRUFDZjtFQUVMO0lBR1ksc0JBQXFCO0lBQ3JCLHVCQUFzQixFQUN6QjtFQUdUO0lBR1ksc0JBQXFCO0lBQ3JCLGtCQUFpQixFQUNwQjtFQUxUO0lBT1ksZ0JBQWUsRUFDbEI7RUFSVDtJQVlZLGdCQUFlLEVBQ2xCO0VBYlQ7SUFnQlEscUJBQW9CO0lBQ3BCLG9CQUFtQixFQUt0QjtJQXRCTDtNQW9CWSxpQkFBZ0IsRUFDbkI7RUFyQlQ7SUF5QlksbUJBQWtCO0lBQ2xCLG9CQUFtQixFQVN0QjtJQW5DVDtNRDlkQSxtQkFBa0I7TUFDbEIsU0MwZitCO01EemYvQixTQ3lma0M7TUFDbEIsWUFBVztNQUNYLGFBQVk7TUFDWixZQUFXO01BQ1gsa0JBQWlCLEVBQ3BCLEVBQUE7O0FBS2pCO0VBQ0k7SUFDSSxnQkFBZSxFQUtsQjtJQU5EO01BSVEsUUFBTyxFQUNWLEVBQUE7O0FBR1Q7RUFDSTtJQUdZLFlBQVc7SUFDWCxnQkFBZTtJQUNmLGlCQUFnQjtJQUNoQiwrQkFBOEI7SUFDOUIscUJBQW9CO0lBQ3BCLG9CQUFtQjtJQUNuQixvQkFBbUIsRUFLdEI7SUFkVDtNQVlnQixjQUFhLEVBQ2hCO0VBSWI7SUFDSSxZQUFXO0lBQ1gsb0JBQW1CO0lBQ25CLG9CQUFtQjtJQUNuQixvQkFBbUI7SUFDbkIsK0JBQThCO0lBQzlCLG9CQUFtQjtJQUNuQixpQ0R2a0JvQixFQytrQnZCO0lBZkQ7TUFVUSxhQUFZLEVBQ2Y7SUFYTDtNQWFRLGtCQUFpQixFQUNwQixFQUFBOztBQUdUO0VBQ0k7SURwa0JBLDZCQUE0QixFQ3NrQjNCO0VBQ0Q7SUQzZ0JBLHdDQUF5QztJQzhnQmpDLGdCQUFlO0lBQ2YsWUFBVztJQUNYLGFBQVksRUFDZjtFQUVMO0lBRVEsb0JBQW1CLEVBQ3RCO0VBSEw7SUR2bEJBLDJCQUFrQyxFQzhsQnpCO0VBR1Q7SUFDSSxtQkFBa0I7SUFDbEIscUJBQW9CLEVBQ3ZCO0VBQ0Q7SUFDSSxlQUFjLEVBZ0JqQjtJQWpCRDtNRDdsQkEsNkJBQTRCLEVDa21CdkI7SUFMTDtNRGppQkEsd0NBQXlDO01DeWlCakMsb0JBQThCLEVBUWpDO01BaEJMO1FBV1ksb0JBQStCLEVBQ2xDO01BWlQ7UUFjWSxvQkFBK0IsRUFDbEM7RUFHVDtJQUdZLDBCRHBvQkYsRUNxb0JEO0VBSlQ7SUFXZ0Isa0JBQWlCLEVBQ3BCO0VBWmI7SUFpQm9CLGVBQWMsRUFDakI7RUFLakI7SUFDSSxpQkFBZ0I7SUFDaEIscUJBQW9CLEVBWXZCO0lBZEQ7TUFLUSxhQUFZO01BQ1osV0FBVTtNQUNWLG1CQUFrQjtNQUNsQixrQkFBaUIsRUFDcEI7SUFUTDtNQVdRLHdCRHBxQkc7TUNxcUJILG1CRHZxQkosRUN3cUJDO0VBRUw7SUFDSSxXQUFVO0lBQ1Ysb0JBQW1CLEVBT3RCO0lBVEQ7TUFLUSx3QkQ3cUJHO01DOHFCSCxlRDdxQkU7TUM4cUJGLGdCQUFlLEVBQ2xCLEVBQUE7O0FBSVQ7RUFDSTtJQUNJLGNBQWE7SUFDYixvQkFBbUI7SUFDbkIsK0JBQThCO0lBQzlCLHFCQUFvQixFQWF2QjtJQWpCRDtNQVFZLFdBQVUsRUFDYjtJQVRUO01BV1ksV0FBVSxFQUNiO0lBWlQ7TUFjWSxnQkFBZSxFQUNsQixFQUFBIiwiZmlsZSI6InNyYy9zdHlsZXMuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vdmFyaWJsZXNcclxuJHc6ICNmZmY7XHJcbiRiOiAjMzMzO1xyXG4kdDogdHJhbnNwYXJlbnQ7XHJcbiRuYXZ5OiAjNDg0NjZkO1xyXG4kYmx1ZTogIzNkODRhODtcclxuJHRlYWw6ICM0NmNkY2Y7XHJcbiRhcXVhOiAjYWJlZGQ4O1xyXG4kYm9yZGVyMTogZGFya2VuKCR0ZWFsLCAxMCUpO1xyXG5cclxuQG1peGluIGxpZ2h0KCRzaXplKXtcclxuICAgIGZvbnQ6IDMwMCAjeyRzaXplfXB4ICdPcGVuIFNhbnMnO1xyXG59XHJcbkBtaXhpbiByZWcoJHNpemUpe1xyXG4gICAgZm9udDogNDAwICN7JHNpemV9cHggJ09wZW4gU2Fucyc7XHJcbn1cclxuQG1peGluIGJvbGQoJHNpemUpe1xyXG4gICAgZm9udDogNzAwICN7JHNpemV9cHggJ09wZW4gU2Fucyc7XHJcbn1cclxuQG1peGluIHRyYW5zaXRpb257XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAuM3MgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG59XHJcbkBtaXhpbiB0cmFuc2l0KCR0aW1lKXtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsICR0aW1lIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgJHRpbWUgZWFzZS1vdXQ7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRpbWUgZWFzZS1vdXQ7XHJcbn1cclxuQG1peGluIHRyYW5zaXQoJHRpbWUsICRlYXNpbmcpe1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgJHRpbWUgJGVhc2luZztcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsICR0aW1lICRlYXNpbmc7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgJHRpbWUgJGVhc2luZztcclxufVxyXG5AbWl4aW4gdGwoJHRvcCwgJGxlZnQpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAkdG9wO1xyXG4gICAgbGVmdDogJGxlZnQ7XHJcbn1cclxuQG1peGluIHRyKCR0b3AsICRyaWdodCl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6ICR0b3A7XHJcbiAgICByaWdodDogJHJpZ2h0O1xyXG59XHJcbkBtaXhpbiBibCgkYm90dG9tLCAkbGVmdCl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206ICRib3R0b207XHJcbiAgICBsZWZ0OiAkbGVmdDtcclxufVxyXG5AbWl4aW4gYnIoJGJvdHRvbSwgJHJpZ2h0KXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogJGJvdHRvbTtcclxuICAgIHJpZ2h0OiAkcmlnaHQ7XHJcbn1cclxuQG1peGluIHJhZGl1cygkc2l6ZSl7XHJcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6ICRzaXplO1xyXG4gICAgLW1vei1ib3JkZXItcmFkaXVzOiAkc2l6ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6ICRzaXplO1xyXG59XHJcbkBtaXhpbiB0bC1yYWRpdXMoJHNpemUpe1xyXG4gICAgLXdlYmtpdC1ib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkc2l6ZTtcclxuICAgIC1tb3otYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHNpemU7XHJcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAkc2l6ZTtcclxufVxyXG5AbWl4aW4gdHItcmFkaXVzKCRzaXplKXtcclxuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRzaXplO1xyXG4gICAgLW1vei1ib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHNpemU7XHJcbiAgICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogJHNpemU7XHJcbn1cclxuQG1peGluIGJsLXJhZGl1cygkc2l6ZSl7XHJcbiAgICAtd2Via2l0LWJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRzaXplO1xyXG4gICAgLW1vei1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkc2l6ZTtcclxuICAgIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6ICRzaXplO1xyXG59XHJcbkBtaXhpbiBici1yYWRpdXMoJHNpemUpe1xyXG4gICAgLXdlYmtpdC1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHNpemU7XHJcbiAgICAtbW96LWJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkc2l6ZTtcclxuICAgIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAkc2l6ZTtcclxufVxyXG5AbWl4aW4gYm94c2hhZG93KCRhLCAkYiwgJGMsICRkLCAkZSwgJGYsICRnKXtcclxuICAgIC13ZWJraXQtYm94LXNoYWRvdzogJGEgJGIgJGMgcmdiYSgkZCwgJGUsICRmLCAkZyk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6ICRhICRiICRjIHJnYmEoJGQsICRlLCAkZiwgJGcpO1xyXG4gICAgYm94LXNoYWRvdzogJGEgJGIgJGMgcmdiYSgkZCwgJGUsICRmLCAkZyk7XHJcbn1cclxuQG1peGluIGJhc3ZnKCRzdmcsICR3aWR0aCwgJGhlaWdodCwgJGJnc2l6ZSl7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2Fzc2V0cy9pbWFnZXMvI3skc3ZnfS5zdmcnKSBuby1yZXBlYXQ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICRiZ3NpemU7XHJcbn1cclxuQG1peGluIGJhanBnKCRqcGcsICR3aWR0aCwgJGhlaWdodCwgJGJnc2l6ZSl7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2Fzc2V0cy9pbWFnZXMvI3skanBnfS5qcGcnKSBuby1yZXBlYXQ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICRiZ3NpemU7XHJcbn1cclxuQG1peGluIGJhcG5nKCRwbmcsICR3aWR0aCwgJGhlaWdodCwgJGJnc2l6ZSl7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2Fzc2V0cy9pbWFnZXMvI3skcG5nfS5wbmcnKSBuby1yZXBlYXQ7XHJcbiAgICBjb250ZW50OiAnJztcclxuICAgIHdpZHRoOiAkd2lkdGg7XHJcbiAgICBoZWlnaHQ6ICRoZWlnaHQ7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6ICRiZ3NpemU7XHJcbn1cclxuQG1peGluIHRyYW5zZm9ybSgkdCl7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTogJHQ7XHJcbiAgICAtbW96LXRyYW5zZm9ybTogJHQ7XHJcbiAgICB0cmFuc2Zvcm06ICR0O1xyXG59XHJcbkBtaXhpbiBzdmcoJHN2Zyl7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2Fzc2V0cy9pbWFnZXMvI3skc3ZnfS5zdmcnKSBuby1yZXBlYXQ7XHJcbn1cclxuQG1peGluIGpwZygkanBnKXtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnYXNzZXRzL2ltYWdlcy8jeyRqcGd9LmpwZycpIG5vLXJlcGVhdDtcclxufVxyXG5AbWl4aW4gcG5nKCRwbmcpe1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdhc3NldHMvaW1hZ2VzLyN7JHBuZ30ucG5nJykgbm8tcmVwZWF0O1xyXG59XHJcbi5mdWxsLXdpZHRoe1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLmFic29sdXRle1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICBib3R0b206IDA7XHJcblxyXG4gICAgLnRhYmxlZHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZTtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAuY2VsbGVke1xyXG4gICAgICAgIGRpc3BsYXk6IHRhYmxlLWNlbGw7XHJcbiAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgIH1cclxufVxyXG4iLCJAaW1wb3J0ICcuL2Fzc2V0cy9zY3NzL2Jhc2UnO1xuXG4qOmZvY3VzIHtcbiAgICBvdXRsaW5lOiAwcHggbm9uZSAkdDtcbn1cbjo6LXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcntcbiAgICBjb2xvcjogJHcgIWltcG9ydGFudDtcbn1cbjo6LW1vei1wbGFjZWhvbGRlcntcbiAgICBjb2xvcjogJHcgIWltcG9ydGFudDtcbn1cbjo6cGxhY2Vob2xkZXJ7XG4gICAgY29sb3I6ICR3ICFpbXBvcnRhbnQ7XG59XG5ib2R5e1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmx1ZTtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAmOmJlZm9yZSwgJjphZnRlcntcbiAgICAgICAgcG9zaXRpb246IGZpeGVkO1xuICAgICAgICBjb250ZW50OiAnJztcbiAgICAgICAgei1pbmRleDogLTE7XG4gICAgfVxuICAgICY6YmVmb3Jle1xuICAgICAgICBAaW5jbHVkZSBzdmcodG9wLWJnKTtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiA4MHB4O1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICB0b3A6IDEwMHB4O1xuICAgICAgICByaWdodDogNXB4O1xuICAgIH1cbiAgICAmOmFmdGVye1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlWSgxODBkZWcpKTtcbiAgICAgICAgQGluY2x1ZGUgc3ZnKGJvdHRvbS1iZyk7XG4gICAgICAgIHdpZHRoOiAxMjBweDtcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxMjBweDtcbiAgICAgICAgYm90dG9tOiAtMTBweDtcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xuICAgIH1cbiAgICBhcHAtaGVhZGVyLCBhcHAtY2FyZHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAxMDA7XG4gICAgfVxufVxuLnBhZHtcbiAgICBwYWRkaW5nOiAxNXB4IDMwcHg7XG59XG5oZWFkZXJ7XG4gICAgLXdlYmtpdC1kaXNwbGF5OiBmbGV4O1xuICAgIC1tb3otZGlzcGxheTogZmxleDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZDogJG5hdnk7XG4gICAgcGFkZGluZzogMTVweCA0NXB4O1xuXG4gICAgYSwgLmxvY2FsLXRpbWV7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB9XG4gICAgYXtcbiAgICAgICAgQGluY2x1ZGUgbGlnaHQoMzYpO1xuICAgICAgICBjb2xvcjogJHc7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuXG4gICAgICAgIGltZ3tcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XG4gICAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgc3BhbntcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgJjpob3ZlciwgJjp2aXNpdGVke1xuICAgICAgICAgICAgY29sb3I6ICR3O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5sb2NhbC10aW1le1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcblxuICAgICAgICBzcGFue1xuICAgICAgICAgICAgQGluY2x1ZGUgbGlnaHQoMTMpO1xuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgICBjb2xvcjogJHc7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG5cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZW17XG4gICAgICAgICAgICAgICAgY29sb3I6ICR0ZWFsO1xuICAgICAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XG5cbiAgICAgICAgICAgICAgICAmOmJlZm9yZXtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGwoNTAlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDE0cHg7XG4gICAgICAgICAgICAgICAgICAgIGhlaWdodDogMTRweDtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpsYXN0LWNoaWxkIGVtOmJlZm9yZXtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBzdmcodGltZSk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJjpmaXJzdC1jaGlsZCBlbTpiZWZvcmV7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKGNhbGVuZGFyKTtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDE0cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4uY2FyZHtcbiAgICBAaW5jbHVkZSBib3hzaGFkb3coMCwgMCwgNXB4LCAwLCAwLCAwLCAwLjI1KTtcbiAgICBAaW5jbHVkZSByYWRpdXMoNXB4KTtcbiAgICBiYWNrZ3JvdW5kOiAkdGVhbDtcbiAgICBjb2xvcjogJGI7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDExcHggMDtcblxuICAgICY6aG92ZXJ7XG4gICAgICAgIGNvbG9yOiAkYjtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIEBpbmNsdWRlIHJlZygyMik7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAtMzBweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAzMHB4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAkbmF2eTtcbiAgICAgICAgY29sb3I6ICR3O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcblxuICAgICAgICBhe1xuICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKGJhY2spO1xuICAgICAgICAgICAgQGluY2x1ZGUgdGwoMCwgMzBweCk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDIwcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGVuKCRuYXZ5LCAxNSUpO1xuICAgICAgICAgICAgd2lkdGg6IDUwcHg7XG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRlbXB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXIxO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgICAgXG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBAaW5jbHVkZSBsaWdodCg1MCk7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nOiAwIDI1cHggMCAwO1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICAgICAgY29sb3I6ICR3O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBzdHJvbmd7XG4gICAgICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYmFzdmcoY2Vsc2l1cywgMjBweCwgMjBweCwgMjBweCk7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHIoNTAlLCAwKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLm5vLWFmdGVye1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xuXG4gICAgICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZW17XG4gICAgICAgICAgICBAaW5jbHVkZSByYWRpdXMoMjBweCk7XG4gICAgICAgICAgICBAaW5jbHVkZSBsaWdodCgxNik7XG4gICAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogY2FwaXRhbGl6ZTtcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMTVweDtcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkYm9yZGVyMTtcbiAgICAgICAgICAgIGNvbG9yOiAkdztcbiAgICAgICAgfVxuICAgIH1cbiAgICAuaHVtaWRpdHl7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICR3O1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgJGJvcmRlcjE7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgICAgIGl7XG4gICAgICAgICAgICBAaW5jbHVkZSBsaWdodCgxNik7XG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICBjb2xvcjogJGI7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xuICAgICAgICB9XG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBAaW5jbHVkZSBsaWdodCgzMCk7XG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuXG4gICAgICAgICAgICBlbXtcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBsaWdodCgyMik7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHIoNTAlLCAwKTtcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTRweDtcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnRpdGxlMntcbiAgICAgICAgQGluY2x1ZGUgbGlnaHQoMTYpO1xuICAgICAgICBjb2xvcjogJGI7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgfVxuICAgIC5tYXgtbWlue1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyMTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcblxuICAgICAgICAudGVtcHtcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG5cbiAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgZm9udC1zaXplOiA0MHB4O1xuXG4gICAgICAgICAgICAgICAgaXtcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgbGlnaHQoMTgpO1xuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tYXh7XG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gICAgICAgICAgICAudGl0bGUyIHNwYW46YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKG1heCk7XG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5taW57XG4gICAgICAgICAgICAudGl0bGUye1xuICAgICAgICAgICAgICAgIHNwYW57XG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzdmcobWluKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLndpbmQtc3BlZWQ6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzdmcod2luZC1zcGVlZCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi53aW5kLWRlZzphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHN2Zyh3aW5kLWRlZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5sYXRpdHVkZTphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHN2ZyhsYXRpdHVkZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgJi5sb25naXR1ZGU6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzdmcobG9uZ2l0dWRlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAmLnN1bnJpc2U6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzdmcoc3VucmlzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5pbnZlcnNle1xuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG5cbiAgICAgICAgICAgIC5tYXgsIC5taW57XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAmLmNvb3JkaW5hdGVze1xuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG4ubWluaS1jYXJke1xuICAgIC5jYXJke1xuICAgICAgICAudGVtcHtcbiAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmh1bWlkaXR5LCAubWF4LW1pbntcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIH1cbiAgICB9XG59XG4ubm8tZGF0YXtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICBzcGFue1xuICAgICAgICBAaW5jbHVkZSBsaWdodCgxOCk7XG4gICAgICAgIGNvbG9yOiAkdztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBwYWRkaW5nOiAxMDBweCAwIDEwMHB4IDUwcHg7XG5cbiAgICAgICAgJjpiZWZvcmV7XG4gICAgICAgICAgICBAaW5jbHVkZSBiYXN2Zyhuby1kYXRhLCAzMHB4LCAzMHB4LCAzMHB4KTtcbiAgICAgICAgICAgIEBpbmNsdWRlIHRsKDUwJSwgMCk7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTVweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbi5mb3JlY2FzdHtcbiAgICBwYWRkaW5nOiA0MHB4IDA7XG5cbiAgICAuZm9yZWNhc3QtdGl0bGV7XG4gICAgICAgIEBpbmNsdWRlIGxpZ2h0KDIyKTtcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgcGFkZGluZzogMTVweCAwO1xuICAgICAgICBiYWNrZ3JvdW5kOiBkYXJrZW4oJGJsdWUsIDIwJSk7XG4gICAgICAgIGNvbG9yOiAkdzsgXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgc3Ryb25ne1xuICAgICAgICBAaW5jbHVkZSBsaWdodCgyMCk7XG4gICAgICAgIHBhZGRpbmc6IDMwcHggMDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgY29sb3I6ICRuYXZ5O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuXG4gICAgICAgICYuc2VwZXJhdGV7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5kZWdyZWUtc3RyaXB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG5cbiAgICAgICAgJi5uby1wdHtcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xuICAgICAgICB9XG4gICAgICAgIGRpdjpub3QoLmRlZ3JlZS10aXRsZSl7XG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDcyLCA3MCwgMTA5LCAwLjI1KTtcbiAgICAgICAgfVxuICAgICAgICAuZGVncmVlLXRpdGxle1xuICAgICAgICAgICAgQGluY2x1ZGUgbGlnaHQoMTQpO1xuICAgICAgICAgICAgQGluY2x1ZGUgdGwoMCwgMCk7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3MiwgNzAsIDEwOSwgMC41KTtcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgICAgZGl2e1xuICAgICAgICAgICAgQGluY2x1ZGUgbGlnaHQoMjIpO1xuICAgICAgICAgICAgY29sb3I6ICR3O1xuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDA7XG5cbiAgICAgICAgICAgICAgICAmLmNvbmRpdGlvbnN7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMDtcbiAgICAgICAgICAgICAgICAgICAgZm9udC1zaXplOiAxM3B4O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAmLmh1bWlkaXR5LCAmLmNvbmRpdGlvbnN7XG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG5cbiAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJjphZnRlcntcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHIoNTAlLCAwKTtcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICYuZGVne1xuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYmFzdmcoY2Vsc2l1cywgMTZweCwgMTZweCwgMTZweCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgJi53aW5kLXNwZWVke1xuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYmFzdmcod2luZC1zcGVlZCwgMTZweCwgMTZweCwgMTZweCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgJi5pbnZlcnNle1xuICAgICAgICAgICAgcGFkZGluZy10b3A6IDA7XG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcblxuICAgICAgICAgICAgLmRlZ3JlZS10aXRsZXtcbiAgICAgICAgICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgICAgICAgICAgYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufVxuLnNlYXJjaC1jb250YWluZXJ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDIwcHggMTVweCAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuXG4gICAgc3BhbntcbiAgICAgICAgQGluY2x1ZGUgYmwoLTJweCwgMTVweCk7XG4gICAgICAgIEBpbmNsdWRlIHJlZygxNCk7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBjb2xvcjogI2ZmZjtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyOHB4O1xuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgICY6YmVmb3Jle1xuICAgICAgICAgICAgQGluY2x1ZGUgdGwoNTAlLCAwKTtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IC04cHg7XG4gICAgICAgIH1cbiAgICAgICAgJi5lcnJvcntcbiAgICAgICAgICAgICY6YmVmb3Jle1xuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJhc3ZnKGVycm9yLCAxNnB4LCAxNnB4LCAxNnB4KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAmLmZldGNoe1xuICAgICAgICAgICAgJjpiZWZvcmV7XG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgYmFzdmcoZmV0Y2gsIDE2cHgsIDE2cHgsIDE2cHgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xuICAgICAgICBAaW5jbHVkZSB0bC1yYWRpdXMoMzBweCk7XG4gICAgICAgIEBpbmNsdWRlIGJsLXJhZGl1cygzMHB4KTtcbiAgICAgICAgQGluY2x1ZGUgcmVnKDE0KTtcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAkdDtcbiAgICAgICAgY29sb3I6ICR3O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZjVmNWY1O1xuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICB9XG4gICAgYnV0dG9ue1xuICAgICAgICBAaW5jbHVkZSByZWcoMTgpO1xuICAgICAgICBAaW5jbHVkZSB0ci1yYWRpdXMoMzBweCk7XG4gICAgICAgIEBpbmNsdWRlIGJyLXJhZGl1cygzMHB4KTtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgICAgICBoZWlnaHQ6IDM2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAkdztcbiAgICAgICAgYmFja2dyb3VuZDogJG5hdnk7XG4gICAgICAgIGNvbG9yOiAkdztcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB9XG59XG4uY2l0eS1mbGV4e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cbi8vcmVzcG9uc2l2ZVxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCl7XG4gICAgLnNlYXJjaC1jb250YWluZXJ7XG4gICAgICAgIGlucHV0W3R5cGU9XCJ0ZXh0XCJde1xuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbntcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoZWFkZXJ7XG4gICAgICAgIGF7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICAgICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJke1xuICAgICAgICAudGVtcHtcbiAgICAgICAgICAgIGltZ3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjVweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuaHVtaWRpdHl7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAubWF4LW1pbntcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAzMHB4O1xuICAgICAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcblxuICAgICAgICAgICAgLm1heHtcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC50aXRsZTJ7XG4gICAgICAgICAgICBzcGFue1xuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xuICAgIFxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHRyKDUwJSwgMCk7XG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAyNHB4O1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtMTJweDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDc2OHB4KXtcbiAgICAuY2FyZHtcbiAgICAgICAgcGFkZGluZzogMCAzMHB4O1xuXG4gICAgICAgIC50aXRsZSBhe1xuICAgICAgICAgICAgbGVmdDogMDtcbiAgICAgICAgfVxuICAgIH1cbn1cbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogOTkycHgpe1xuICAgIC5jYXJke1xuICAgICAgICAubWF4LW1pbntcbiAgICAgICAgICAgICYuaW52ZXJzZXtcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgICAgICAgICAgcGFkZGluZy1ib3R0b206IDU1cHg7XG4gICAgICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogNTVweDtcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuXG4gICAgICAgICAgICAgICAgJi5jb29yZGluYXRlc3tcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLmNpdHktZmxleHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDYwcHg7XG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXIxO1xuXG4gICAgICAgIC50ZW1wLCAuaHVtaWRpdHl7XG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XG4gICAgICAgIH1cbiAgICAgICAgLmh1bWlkaXR5e1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDU1cHg7XG4gICAgICAgIH1cbiAgICB9XG59XG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCl7XG4gICAgYSwgYnV0dG9uLCBpbnB1dFt0eXBlPVwic3VibWl0XCJde1xuICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uO1xuICAgIH1cbiAgICBib2R5e1xuICAgICAgICBhcHAtaGVhZGVye1xuICAgICAgICAgICAgQGluY2x1ZGUgYm94c2hhZG93KDAsIDAsIDEwcHgsIDAsIDAsIDAsIDAuNSk7XG4gICAgICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIHotaW5kZXg6IDIwMDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBoZWFkZXJ7XG4gICAgICAgIGF7XG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogM3B4O1xuICAgICAgICB9XG4gICAgICAgIC5sb2NhbC10aW1le1xuICAgICAgICAgICAgc3BhbntcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSByZWcoMTYpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jb250ZW50e1xuICAgICAgICBwYWRkaW5nLXRvcDogMTEwcHg7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xuICAgIH1cbiAgICBhLmNhcmR7XG4gICAgICAgIG1hcmdpbjogMTVweCAwO1xuXG4gICAgICAgIC50ZW1wIGVtLCAudGl0bGV7XG4gICAgICAgICAgICBAaW5jbHVkZSB0cmFuc2l0aW9uO1xuICAgICAgICB9XG4gICAgICAgICY6aG92ZXJ7XG4gICAgICAgICAgICBAaW5jbHVkZSBib3hzaGFkb3coMCwgMCwgMTBweCwgMCwgMCwgMCwgMC41KTtcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdGVhbCwgMTAlKTtcblxuICAgICAgICAgICAgLnRpdGxle1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJG5hdnksIDEwJSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAudGVtcCBlbXtcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCR0ZWFsLCAxMCUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC5jYXJke1xuICAgICAgICAudGl0bGV7XG4gICAgICAgICAgICBhOmhvdmVye1xuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRuYXZ5O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC5tYXgtbWlue1xuICAgICAgICAgICAgJi5pbnZlcnNle1xuICAgICAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgICAgLm1pbntcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDkwcHg7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgJi5jb29yZGluYXRlc3tcbiAgICAgICAgICAgICAgICAubWlue1xuICAgICAgICAgICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLnNlYXJjaC1jb250YWluZXJ7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuXG4gICAgICAgIHNwYW57XG4gICAgICAgICAgICBib3R0b206IGF1dG87XG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDE1cHg7XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uOmhvdmVye1xuICAgICAgICAgICAgYmFja2dyb3VuZDogJHQ7XG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR3O1xuICAgICAgICB9XG4gICAgfVxuICAgIC5mb3JlY2FzdHtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNDBweDtcblxuICAgICAgICAuZm9yZWNhc3QtdGl0bGV7XG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiAkdDtcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2eTtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpe1xuICAgIC5mbGV4LWNvbnRhaW5lcntcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcblxuICAgICAgICAuZmxleC1ibG9ja3tcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGR7XG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICY6bGFzdC1jaGlsZHtcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLm5vLWRhdGF7XG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNzBweCAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxufSJdfQ== */", '', '']]

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target, parent) {
  if (parent){
    return parent.querySelector(target);
  }
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target, parent) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target, parent);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertAt.before, target);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	if(options.attrs.nonce === undefined) {
		var nonce = getNonce();
		if (nonce) {
			options.attrs.nonce = nonce;
		}
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function getNonce() {
	if (false) {}

	return __webpack_require__.nc;
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = typeof options.transform === 'function'
		 ? options.transform(obj.css) 
		 : options.transform.default(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./src/styles.scss":
/*!*************************!*\
  !*** ./src/styles.scss ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!../node_modules/postcss-loader/src??embedded!../node_modules/sass-loader/lib/loader.js??ref--14-3!./styles.scss */ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ 2:
/*!*******************************!*\
  !*** multi ./src/styles.scss ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! F:\Angular\sunlite\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map