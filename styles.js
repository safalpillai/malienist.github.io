(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/lib/loader.js?!./src/styles.scss":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@angular-devkit/build-angular/src/angular-cli-files/plugins/raw-css-loader.js!./node_modules/postcss-loader/src??embedded!./node_modules/sass-loader/lib/loader.js??ref--14-3!./src/styles.scss ***!
  \**********************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = [[module.i, ".full-width {\n  width: 100%; }\n\n.absolute {\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0; }\n\n.absolute .tabled {\n    display: table;\n    width: 100%;\n    height: 100%; }\n\n.absolute .celled {\n    display: table-cell;\n    vertical-align: middle; }\n\n*:focus {\n  outline: 0px none transparent; }\n\n::-webkit-input-placeholder {\n  color: #fff !important; }\n\n::-ms-input-placeholder {\n  color: #fff !important; }\n\n::placeholder {\n  color: #fff !important; }\n\nbody {\n  width: 100%;\n  height: 100%;\n  background-color: #3d84a8;\n  position: relative; }\n\nbody:before, body:after {\n    position: fixed;\n    content: '';\n    z-index: -1; }\n\nbody:before {\n    background: url('top-bg.svg') no-repeat;\n    background-size: 80px;\n    width: 80px;\n    height: 80px;\n    top: 100px;\n    right: 5px; }\n\nbody:after {\n    -webkit-transform: rotateY(180deg);\n    transform: rotateY(180deg);\n    background: url('bottom-bg.svg') no-repeat;\n    width: 120px;\n    height: 120px;\n    background-size: 120px;\n    bottom: -10px;\n    right: -10px; }\n\nbody app-header, body app-card {\n    position: relative;\n    z-index: 100; }\n\n.pad {\n  padding: 15px 30px; }\n\nheader {\n  -webkit-display: flex;\n  -moz-display: flex;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-between;\n  align-items: center;\n  background: #48466d;\n  padding: 15px 45px; }\n\nheader a, header .local-time {\n    display: inline-block; }\n\nheader a {\n    font: 300 36px \"Open Sans\";\n    color: #fff;\n    text-transform: uppercase;\n    display: block; }\n\nheader a img {\n      display: inline-block;\n      vertical-align: middle;\n      margin-right: 15px; }\n\nheader a span {\n      display: none; }\n\nheader a:hover, header a:visited {\n      color: #fff; }\n\nheader .local-time {\n    text-align: right; }\n\nheader .local-time span {\n      font: 300 13px \"Open Sans\";\n      display: block;\n      color: #fff;\n      margin-bottom: 8px; }\n\nheader .local-time span:last-child {\n        margin-bottom: 0; }\n\nheader .local-time span em {\n        color: #46cdcf;\n        font-style: normal;\n        position: relative;\n        padding-left: 22px;\n        display: inline-block;\n        text-transform: uppercase;\n        letter-spacing: 2px; }\n\nheader .local-time span em:before {\n          position: absolute;\n          top: 50%;\n          left: 0;\n          width: 14px;\n          height: 14px;\n          margin-top: -7px;\n          content: ''; }\n\nheader .local-time span:last-child em:before {\n        background: url('time.svg') no-repeat;\n        background-size: 14px; }\n\nheader .local-time span:first-child em:before {\n        background: url('calendar.svg') no-repeat;\n        background-size: 14px; }\n\n.card {\n  box-shadow: 0 0 5px rgba(0, 0, 0, 0.25);\n  border-radius: 5px;\n  background: #46cdcf;\n  color: #333;\n  display: block;\n  overflow: hidden;\n  margin: 11px 0; }\n\n.card:hover {\n    color: #333;\n    text-decoration: none; }\n\n.card .title {\n    font: 400 22px \"Open Sans\";\n    margin-left: -30px;\n    margin-right: -30px;\n    padding: 10px 30px;\n    background: #48466d;\n    color: #fff;\n    margin-bottom: 15px;\n    text-transform: uppercase;\n    text-align: center;\n    position: relative;\n    overflow: hidden; }\n\n.card .title a {\n      background: url('back.svg') no-repeat;\n      position: absolute;\n      top: 0;\n      left: 30px;\n      background-size: 20px;\n      background-position: center;\n      background-color: #67649b;\n      width: 50px;\n      height: 100%; }\n\n.card .temp {\n    text-align: center;\n    border-bottom: 1px solid #2fb2b3;\n    padding-bottom: 30px;\n    margin-bottom: 30px; }\n\n.card .temp span {\n      font: 300 50px \"Open Sans\";\n      position: relative;\n      padding: 0 25px 0 0;\n      display: inline-block;\n      color: #fff; }\n\n.card .temp span strong {\n        font-weight: 300; }\n\n.card .temp span:after {\n        background: url('celsius.svg') no-repeat;\n        content: '';\n        width: 20px;\n        height: 20px;\n        background-size: 20px;\n        position: absolute;\n        top: 50%;\n        right: 0;\n        margin-top: -10px; }\n\n.card .temp.no-after span {\n      padding-right: 0; }\n\n.card .temp.no-after span:after {\n        display: none; }\n\n.card .temp em {\n      border-radius: 20px;\n      font: 300 16px \"Open Sans\";\n      text-transform: capitalize;\n      font-style: normal;\n      padding: 2px 30px;\n      margin-top: 15px;\n      display: inline-block;\n      letter-spacing: 1px;\n      background: #2fb2b3;\n      color: #fff; }\n\n.card .humidity {\n    text-align: center;\n    color: #fff;\n    border-bottom: 1px solid #2fb2b3;\n    padding-bottom: 30px;\n    margin-bottom: 30px; }\n\n.card .humidity i {\n      font: 300 16px \"Open Sans\";\n      display: block;\n      text-transform: uppercase;\n      font-style: normal;\n      color: #333;\n      letter-spacing: 1px; }\n\n.card .humidity span {\n      font: 300 30px \"Open Sans\";\n      position: relative;\n      padding-right: 30px;\n      display: inline-block; }\n\n.card .humidity span em {\n        font: 300 22px \"Open Sans\";\n        position: absolute;\n        top: 50%;\n        right: 0;\n        margin-top: -14px;\n        font-style: normal; }\n\n.card .title2 {\n    font: 300 16px \"Open Sans\";\n    color: #333;\n    text-transform: uppercase;\n    letter-spacing: 1px;\n    margin-bottom: 15px; }\n\n.card .max-min {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #2fb2b3;\n    text-align: center;\n    padding-bottom: 40px; }\n\n.card .max-min .temp {\n      border: none;\n      padding: 0;\n      margin: 0; }\n\n.card .max-min .temp span {\n        font-size: 40px; }\n\n.card .max-min .temp span i {\n          font: 300 18px \"Open Sans\";\n          font-style: normal; }\n\n.card .max-min .max {\n      margin-bottom: 30px; }\n\n.card .max-min .max .title2 span:after {\n        background: url('max.svg') no-repeat;\n        background-size: 24px; }\n\n.card .max-min .min .title2 span:after {\n      background: url('min.svg') no-repeat;\n      background-size: 24px; }\n\n.card .max-min .min .title2 span.wind-speed:after {\n      background: url('wind-speed.svg') no-repeat;\n      background-size: 24px; }\n\n.card .max-min .min .title2 span.wind-deg:after {\n      background: url('wind-deg.svg') no-repeat;\n      background-size: 24px; }\n\n.card .max-min .min .title2 span.latitude:after {\n      background: url('latitude.svg') no-repeat;\n      background-size: 24px; }\n\n.card .max-min .min .title2 span.longitude:after {\n      background: url('longitude.svg') no-repeat;\n      background-size: 24px; }\n\n.card .max-min .min .title2 span.sunrise:after {\n      background: url('sunrise.svg') no-repeat;\n      background-size: 24px; }\n\n.card .max-min.inverse {\n      display: flex;\n      flex-direction: column; }\n\n.card .max-min.inverse .max, .card .max-min.inverse .min {\n        margin: 20px 0; }\n\n.card .max-min.inverse.coordinates {\n        margin-top: 30px; }\n\n.mini-card .card .temp {\n  margin-bottom: 0;\n  border: none; }\n\n.mini-card .card .humidity, .mini-card .card .max-min {\n  display: none; }\n\n.no-data {\n  text-align: center; }\n\n.no-data span {\n    font: 300 18px \"Open Sans\";\n    color: #fff;\n    text-transform: capitalize;\n    position: relative;\n    display: inline-block;\n    padding: 100px 0 100px 50px; }\n\n.no-data span:before {\n      background: url('no-data.svg') no-repeat;\n      content: '';\n      width: 30px;\n      height: 30px;\n      background-size: 30px;\n      position: absolute;\n      top: 50%;\n      left: 0;\n      margin-top: -15px; }\n\n.forecast {\n  padding: 40px 0; }\n\n.forecast .forecast-title {\n    font: 300 22px \"Open Sans\";\n    text-transform: uppercase;\n    padding: 15px 0;\n    background: #22495d;\n    color: #fff;\n    text-align: center; }\n\n.forecast strong {\n    font: 300 20px \"Open Sans\";\n    padding: 30px 0;\n    display: block;\n    text-align: center;\n    color: #48466d;\n    text-transform: uppercase;\n    background: rgba(255, 255, 255, 0.15); }\n\n.forecast strong.seperate {\n      margin-top: 20px; }\n\n.forecast .degree-strip {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: stretch;\n    position: relative;\n    padding-top: 30px; }\n\n.forecast .degree-strip.no-pt {\n      padding-top: 0; }\n\n.forecast .degree-strip div:not(.degree-title) {\n      width: calc(100% / 3);\n      background: rgba(72, 70, 109, 0.25);\n      padding-left: 15px;\n      padding-right: 15px; }\n\n.forecast .degree-strip .degree-title {\n      font: 300 14px \"Open Sans\";\n      position: absolute;\n      top: 0;\n      left: 0;\n      width: 100%;\n      padding: 5px 0;\n      background: rgba(72, 70, 109, 0.5);\n      text-transform: uppercase;\n      text-align: center; }\n\n.forecast .degree-strip div {\n      font: 300 22px \"Open Sans\";\n      color: #fff;\n      text-align: center; }\n\n.forecast .degree-strip div span {\n        position: relative;\n        display: inline-block;\n        padding: 5px 20px 5px 0; }\n\n.forecast .degree-strip div span.conditions {\n          padding: 14px 0;\n          font-size: 13px; }\n\n.forecast .degree-strip div span.humidity, .forecast .degree-strip div span.conditions {\n          padding-right: 0;\n          margin-bottom: 0; }\n\n.forecast .degree-strip div span.humidity:after, .forecast .degree-strip div span.conditions:after {\n            display: none; }\n\n.forecast .degree-strip div span:after {\n          position: absolute;\n          top: 50%;\n          right: 0;\n          margin-top: -8px;\n          content: ''; }\n\n.forecast .degree-strip div span.deg:after {\n          background: url('celsius.svg') no-repeat;\n          content: '';\n          width: 16px;\n          height: 16px;\n          background-size: 16px; }\n\n.forecast .degree-strip div span.wind-speed:after {\n          background: url('wind-speed.svg') no-repeat;\n          content: '';\n          width: 16px;\n          height: 16px;\n          background-size: 16px; }\n\n.forecast .degree-strip.inverse {\n      padding-top: 0;\n      padding-bottom: 30px; }\n\n.forecast .degree-strip.inverse .degree-title {\n        top: auto;\n        bottom: 0; }\n\n.search-container {\n  position: relative;\n  padding: 20px 15px 30px;\n  margin-bottom: 20px;\n  display: flex;\n  flex-direction: row;\n  justify-content: flex-start;\n  align-items: center; }\n\n.search-container span {\n    position: absolute;\n    bottom: -2px;\n    left: 15px;\n    font: 400 14px \"Open Sans\";\n    display: block;\n    color: #fff;\n    padding-left: 28px;\n    white-space: nowrap; }\n\n.search-container span:before {\n      position: absolute;\n      top: 50%;\n      left: 0;\n      margin-top: -8px; }\n\n.search-container span.error:before {\n      background: url('error.svg') no-repeat;\n      content: '';\n      width: 16px;\n      height: 16px;\n      background-size: 16px; }\n\n.search-container span.fetch:before {\n      background: url('fetch.svg') no-repeat;\n      content: '';\n      width: 16px;\n      height: 16px;\n      background-size: 16px; }\n\n.search-container input[type=\"text\"] {\n    -moz-border-top-left-radius: 30px;\n    border-top-left-radius: 30px;\n    -moz-border-bottom-left-radius: 30px;\n    border-bottom-left-radius: 30px;\n    font: 400 14px \"Open Sans\";\n    width: calc(100% - 100px);\n    height: 36px;\n    text-transform: uppercase;\n    background: transparent;\n    color: #fff;\n    border: 1px solid #f5f5f5;\n    border-right: none;\n    padding-left: 20px; }\n\n.search-container button {\n    font: 400 18px \"Open Sans\";\n    -moz-border-top-right-radius: 30px;\n    border-top-right-radius: 30px;\n    -moz-border-bottom-right-radius: 30px;\n    border-bottom-right-radius: 30px;\n    width: 100px;\n    height: 36px;\n    line-height: 34px;\n    border: 1px solid #fff;\n    background: #48466d;\n    color: #fff;\n    text-transform: uppercase; }\n\n.city-flex {\n  display: flex;\n  flex-direction: column; }\n\n@media only screen and (min-width: 480px) {\n  .search-container input[type=\"text\"] {\n    width: 400px; }\n  .search-container button {\n    width: 150px; }\n  header a span {\n    display: inline-block;\n    vertical-align: middle; }\n  .card .temp img {\n    display: inline-block;\n    margin-right: 5px; }\n  .card .temp span {\n    font-size: 65px; }\n  .card .humidity span {\n    font-size: 40px; }\n  .card .max-min {\n    padding: 0 30px 30px;\n    flex-direction: row; }\n    .card .max-min .max {\n      margin-bottom: 0; }\n  .card .title2 span {\n    position: relative;\n    padding-right: 30px; }\n    .card .title2 span:after {\n      position: absolute;\n      top: 50%;\n      right: 0;\n      width: 24px;\n      height: 24px;\n      content: '';\n      margin-top: -12px; } }\n\n@media only screen and (min-width: 768px) {\n  .card {\n    padding: 0 30px; }\n    .card .title a {\n      left: 0; } }\n\n@media only screen and (min-width: 992px) {\n  .card .max-min.inverse {\n    width: 100%;\n    padding-left: 0;\n    padding-right: 0;\n    justify-content: space-between;\n    padding-bottom: 55px;\n    margin-bottom: 55px;\n    flex-direction: row; }\n    .card .max-min.inverse.coordinates {\n      margin-top: 0; }\n  .city-flex {\n    width: 100%;\n    margin-bottom: 60px;\n    flex-direction: row;\n    padding-right: 25px;\n    justify-content: space-between;\n    align-items: center;\n    border-bottom: 1px solid #2fb2b3; }\n    .city-flex .temp, .city-flex .humidity {\n      border: none; }\n    .city-flex .humidity {\n      margin-left: 55px; } }\n\n@media only screen and (min-width: 1200px) {\n  .pad {\n    padding: 130px 70px 50px !important; }\n  a, button, input[type=\"submit\"] {\n    transition: all .3s ease-out; }\n  body app-header {\n    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n    position: fixed;\n    width: 100%;\n    z-index: 200; }\n  header {\n    padding-left: 80px;\n    padding-right: 80px; }\n    header a {\n      letter-spacing: 3px; }\n    header .local-time span {\n      font: 400 16px \"Open Sans\"; }\n  .content {\n    padding-top: 110px;\n    padding-bottom: 30px; }\n  a.card {\n    margin: 15px 0; }\n    a.card .temp em, a.card .title {\n      transition: all .3s ease-out; }\n    a.card:hover {\n      box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);\n      background: #2fb2b3; }\n      a.card:hover .title {\n        background: #5d5a8c; }\n      a.card:hover .temp em {\n        background: #6ed8da; }\n  .card .title a:hover {\n    background-color: #48466d; }\n  .card .max-min.inverse .min {\n    margin-left: 90px; }\n  .card .max-min.coordinates .min:first-child {\n    margin-left: 0; }\n  .search-container {\n    margin-bottom: 0;\n    padding-bottom: 20px; }\n    .search-container span {\n      bottom: auto;\n      left: auto;\n      position: relative;\n      margin-left: 15px; }\n    .search-container button:hover {\n      background: transparent;\n      border-color: #fff; }\n  .forecast {\n    padding: 0;\n    margin-bottom: 40px; }\n    .forecast .forecast-title {\n      background: transparent;\n      color: #48466d;\n      font-size: 30px; } }\n\n@media only screen and (min-width: 1366px) {\n  .flex-container {\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: stretch; }\n    .flex-container .flex-block:first-child {\n      width: 65%; }\n    .flex-container .flex-block:last-child {\n      width: 30%; }\n    .flex-container .flex-block .no-data {\n      margin: 170px 0; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9GOlxcYW5ndWxhclxcc3VubGl0ZS9zcmNcXGFzc2V0c1xcc2Nzc1xcX2Jhc2Uuc2NzcyIsInNyYy9GOlxcYW5ndWxhclxcc3VubGl0ZS9zcmNcXHN0eWxlcy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVIQTtFQUNJLFlBQVcsRUFDZDs7QUFDRDtFQUNJLFlBQVc7RUFDWCxhQUFZO0VBQ1osT0FBTTtFQUNOLFFBQU87RUFDUCxTQUFRO0VBQ1IsVUFBUyxFQVdaOztBQWpCRDtJQVNRLGVBQWM7SUFDZCxZQUFXO0lBQ1gsYUFBWSxFQUNmOztBQVpMO0lBY1Esb0JBQW1CO0lBQ25CLHVCQUFzQixFQUN6Qjs7QUN4SUw7RUFDSSw4QkRBVyxFQ0NkOztBQUNEO0VBQ0ksdUJBQW9CLEVBQ3ZCOztBQUlEO0VBQ0ksdUJBQW9CLEVBQ3ZCOztBQUZEO0VBQ0ksdUJBQW9CLEVBQ3ZCOztBQUNEO0VBQ0ksWUFBVztFQUNYLGFBQVk7RUFDWiwwQkRaVTtFQ2FWLG1CQUFrQixFQTRCckI7O0FBaENEO0lBT1EsZ0JBQWU7SUFDZixZQUFXO0lBQ1gsWUFBVyxFQUNkOztBQVZMO0lEaUdJLHdDQUFzRDtJQ3BGbEQsc0JBQXFCO0lBQ3JCLFlBQVc7SUFDWCxhQUFZO0lBQ1osV0FBVTtJQUNWLFdBQVUsRUFDYjs7QUFsQkw7SUQ0RkksbUNDeEVzQztJRDBFdEMsMkJDMUVzQztJRDZFdEMsMkNBQXNEO0lDM0VsRCxhQUFZO0lBQ1osY0FBYTtJQUNiLHVCQUFzQjtJQUN0QixjQUFhO0lBQ2IsYUFBWSxFQUNmOztBQTNCTDtJQTZCUSxtQkFBa0I7SUFDbEIsYUFBWSxFQUNmOztBQUVMO0VBQ0ksbUJBQWtCLEVBQ3JCOztBQUNEO0VBQ0ksc0JBQXFCO0VBQ3JCLG1CQUFrQjtFQUNsQixjQUFhO0VBQ2Isb0JBQW1CO0VBQ25CLCtCQUE4QjtFQUM5QixvQkFBbUI7RUFDbkIsb0JEckRVO0VDc0RWLG1CQUFrQixFQThEckI7O0FBdEVEO0lBV1Esc0JBQXFCLEVBQ3hC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QztFQUNEO0lEemtCQSw2QkFBNEIsRUMya0IzQjtFQUNEO0lEaGhCQSx3Q0FBeUM7SUNtaEJqQyxnQkFBZTtJQUNmLFlBQVc7SUFDWCxhQUFZLEVBQ2Y7RUFFTDtJQUNJLG1CQUFrQjtJQUNsQixvQkFBbUIsRUFVdEI7SUFaRDtNQUtRLG9CQUFtQixFQUN0QjtJQU5MO01ENWxCQSwyQkFBa0MsRUNzbUJ6QjtFQUdUO0lBQ0ksbUJBQWtCO0lBQ2xCLHFCQUFvQixFQUN2QjtFQUNEO0lBQ0ksZUFBYyxFQWdCakI7SUFqQkQ7TURybUJBLDZCQUE0QixFQzBtQnZCO0lBTEw7TUR6aUJBLHdDQUF5QztNQ2lqQmpDLG9CQUE4QixFQVFqQztNQWhCTDtRQVdZLG9CQUErQixFQUNsQztNQVpUO1FBY1ksb0JBQStCLEVBQ2xDO0VBR1Q7SUFHWSwwQkQ1b0JGLEVDNm9CRDtFQUpUO0lBV2dCLGtCQUFpQixFQUNwQjtFQVpiO0lBaUJvQixlQUFjLEVBQ2pCO0VBS2pCO0lBQ0ksaUJBQWdCO0lBQ2hCLHFCQUFvQixFQVl2QjtJQWREO01BS1EsYUFBWTtNQUNaLFdBQVU7TUFDVixtQkFBa0I7TUFDbEIsa0JBQWlCLEVBQ3BCO0lBVEw7TUFXUSx3QkQ1cUJHO01DNnFCSCxtQkQvcUJKLEVDZ3JCQztFQUVMO0lBQ0ksV0FBVTtJQUNWLG9CQUFtQixFQU90QjtJQVREO01BS1Esd0JEcnJCRztNQ3NyQkgsZURyckJFO01Dc3JCRixnQkFBZSxFQUNsQixFQUFBOztBQUlUO0VBQ0k7SUFDSSxjQUFhO0lBQ2Isb0JBQW1CO0lBQ25CLCtCQUE4QjtJQUM5QixxQkFBb0IsRUFhdkI7SUFqQkQ7TUFRWSxXQUFVLEVBQ2I7SUFUVDtNQVdZLFdBQVUsRUFDYjtJQVpUO01BY1ksZ0JBQWUsRUFDbEIsRUFBQSIsImZpbGUiOiJzcmMvc3R5bGVzLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvL3ZhcmlibGVzXHJcbiR3OiAjZmZmO1xyXG4kYjogIzMzMztcclxuJHQ6IHRyYW5zcGFyZW50O1xyXG4kbmF2eTogIzQ4NDY2ZDtcclxuJGJsdWU6ICMzZDg0YTg7XHJcbiR0ZWFsOiAjNDZjZGNmO1xyXG4kYXF1YTogI2FiZWRkODtcclxuJGJvcmRlcjE6IGRhcmtlbigkdGVhbCwgMTAlKTtcclxuXHJcbkBtaXhpbiBsaWdodCgkc2l6ZSl7XHJcbiAgICBmb250OiAzMDAgI3skc2l6ZX1weCAnT3BlbiBTYW5zJztcclxufVxyXG5AbWl4aW4gcmVnKCRzaXplKXtcclxuICAgIGZvbnQ6IDQwMCAjeyRzaXplfXB4ICdPcGVuIFNhbnMnO1xyXG59XHJcbkBtaXhpbiBib2xkKCRzaXplKXtcclxuICAgIGZvbnQ6IDcwMCAjeyRzaXplfXB4ICdPcGVuIFNhbnMnO1xyXG59XHJcbkBtaXhpbiB0cmFuc2l0aW9ue1xyXG4gICAgLXdlYmtpdC10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgLW1vei10cmFuc2l0aW9uOiBhbGwgLjNzIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIC4zcyBlYXNlLW91dDtcclxufVxyXG5AbWl4aW4gdHJhbnNpdCgkdGltZSl7XHJcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGFsbCAkdGltZSBlYXNlLW91dDtcclxuICAgIC1tb3otdHJhbnNpdGlvbjogYWxsICR0aW1lIGVhc2Utb3V0O1xyXG4gICAgdHJhbnNpdGlvbjogYWxsICR0aW1lIGVhc2Utb3V0O1xyXG59XHJcbkBtaXhpbiB0cmFuc2l0KCR0aW1lLCAkZWFzaW5nKXtcclxuICAgIC13ZWJraXQtdHJhbnNpdGlvbjogYWxsICR0aW1lICRlYXNpbmc7XHJcbiAgICAtbW96LXRyYW5zaXRpb246IGFsbCAkdGltZSAkZWFzaW5nO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsICR0aW1lICRlYXNpbmc7XHJcbn1cclxuQG1peGluIHRsKCR0b3AsICRsZWZ0KXtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogJHRvcDtcclxuICAgIGxlZnQ6ICRsZWZ0O1xyXG59XHJcbkBtaXhpbiB0cigkdG9wLCAkcmlnaHQpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAkdG9wO1xyXG4gICAgcmlnaHQ6ICRyaWdodDtcclxufVxyXG5AbWl4aW4gYmwoJGJvdHRvbSwgJGxlZnQpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYm90dG9tOiAkYm90dG9tO1xyXG4gICAgbGVmdDogJGxlZnQ7XHJcbn1cclxuQG1peGluIGJyKCRib3R0b20sICRyaWdodCl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBib3R0b206ICRib3R0b207XHJcbiAgICByaWdodDogJHJpZ2h0O1xyXG59XHJcbkBtaXhpbiByYWRpdXMoJHNpemUpe1xyXG4gICAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAkc2l6ZTtcclxuICAgIC1tb3otYm9yZGVyLXJhZGl1czogJHNpemU7XHJcbiAgICBib3JkZXItcmFkaXVzOiAkc2l6ZTtcclxufVxyXG5AbWl4aW4gdGwtcmFkaXVzKCRzaXplKXtcclxuICAgIC13ZWJraXQtYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHNpemU7XHJcbiAgICAtbW96LWJvcmRlci10b3AtbGVmdC1yYWRpdXM6ICRzaXplO1xyXG4gICAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogJHNpemU7XHJcbn1cclxuQG1peGluIHRyLXJhZGl1cygkc2l6ZSl7XHJcbiAgICAtd2Via2l0LWJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiAkc2l6ZTtcclxuICAgIC1tb3otYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRzaXplO1xyXG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6ICRzaXplO1xyXG59XHJcbkBtaXhpbiBibC1yYWRpdXMoJHNpemUpe1xyXG4gICAgLXdlYmtpdC1ib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkc2l6ZTtcclxuICAgIC1tb3otYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogJHNpemU7XHJcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAkc2l6ZTtcclxufVxyXG5AbWl4aW4gYnItcmFkaXVzKCRzaXplKXtcclxuICAgIC13ZWJraXQtYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICRzaXplO1xyXG4gICAgLW1vei1ib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHNpemU7XHJcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogJHNpemU7XHJcbn1cclxuQG1peGluIGJveHNoYWRvdygkYSwgJGIsICRjLCAkZCwgJGUsICRmLCAkZyl7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6ICRhICRiICRjIHJnYmEoJGQsICRlLCAkZiwgJGcpO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAkYSAkYiAkYyByZ2JhKCRkLCAkZSwgJGYsICRnKTtcclxuICAgIGJveC1zaGFkb3c6ICRhICRiICRjIHJnYmEoJGQsICRlLCAkZiwgJGcpO1xyXG59XHJcbkBtaXhpbiBiYXN2Zygkc3ZnLCAkd2lkdGgsICRoZWlnaHQsICRiZ3NpemUpe1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdhc3NldHMvaW1hZ2VzLyN7JHN2Z30uc3ZnJykgbm8tcmVwZWF0O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAkYmdzaXplO1xyXG59XHJcbkBtaXhpbiBiYWpwZygkanBnLCAkd2lkdGgsICRoZWlnaHQsICRiZ3NpemUpe1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdhc3NldHMvaW1hZ2VzLyN7JGpwZ30uanBnJykgbm8tcmVwZWF0O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAkYmdzaXplO1xyXG59XHJcbkBtaXhpbiBiYXBuZygkcG5nLCAkd2lkdGgsICRoZWlnaHQsICRiZ3NpemUpe1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdhc3NldHMvaW1hZ2VzLyN7JHBuZ30ucG5nJykgbm8tcmVwZWF0O1xyXG4gICAgY29udGVudDogJyc7XHJcbiAgICB3aWR0aDogJHdpZHRoO1xyXG4gICAgaGVpZ2h0OiAkaGVpZ2h0O1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiAkYmdzaXplO1xyXG59XHJcbkBtaXhpbiB0cmFuc2Zvcm0oJHQpe1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06ICR0O1xyXG4gICAgLW1vei10cmFuc2Zvcm06ICR0O1xyXG4gICAgdHJhbnNmb3JtOiAkdDtcclxufVxyXG5AbWl4aW4gc3ZnKCRzdmcpe1xyXG4gICAgYmFja2dyb3VuZDogdXJsKCdhc3NldHMvaW1hZ2VzLyN7JHN2Z30uc3ZnJykgbm8tcmVwZWF0O1xyXG59XHJcbkBtaXhpbiBqcGcoJGpwZyl7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoJ2Fzc2V0cy9pbWFnZXMvI3skanBnfS5qcGcnKSBuby1yZXBlYXQ7XHJcbn1cclxuQG1peGluIHBuZygkcG5nKXtcclxuICAgIGJhY2tncm91bmQ6IHVybCgnYXNzZXRzL2ltYWdlcy8jeyRwbmd9LnBuZycpIG5vLXJlcGVhdDtcclxufVxyXG4uZnVsbC13aWR0aHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5hYnNvbHV0ZXtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgYm90dG9tOiAwO1xyXG5cclxuICAgIC50YWJsZWR7XHJcbiAgICAgICAgZGlzcGxheTogdGFibGU7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgfVxyXG4gICAgLmNlbGxlZHtcclxuICAgICAgICBkaXNwbGF5OiB0YWJsZS1jZWxsO1xyXG4gICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICB9XHJcbn1cclxuIiwiQGltcG9ydCAnLi9hc3NldHMvc2Nzcy9iYXNlJztcclxuXHJcbio6Zm9jdXMge1xyXG4gICAgb3V0bGluZTogMHB4IG5vbmUgJHQ7XHJcbn1cclxuOjotd2Via2l0LWlucHV0LXBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6ICR3ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjotbW96LXBsYWNlaG9sZGVye1xyXG4gICAgY29sb3I6ICR3ICFpbXBvcnRhbnQ7XHJcbn1cclxuOjpwbGFjZWhvbGRlcntcclxuICAgIGNvbG9yOiAkdyAhaW1wb3J0YW50O1xyXG59XHJcbmJvZHl7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICRibHVlO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG5cclxuICAgICY6YmVmb3JlLCAmOmFmdGVye1xyXG4gICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICB6LWluZGV4OiAtMTtcclxuICAgIH1cclxuICAgICY6YmVmb3Jle1xyXG4gICAgICAgIEBpbmNsdWRlIHN2Zyh0b3AtYmcpO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogODBweDtcclxuICAgICAgICB3aWR0aDogODBweDtcclxuICAgICAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICAgICAgdG9wOiAxMDBweDtcclxuICAgICAgICByaWdodDogNXB4O1xyXG4gICAgfVxyXG4gICAgJjphZnRlcntcclxuICAgICAgICBAaW5jbHVkZSB0cmFuc2Zvcm0ocm90YXRlWSgxODBkZWcpKTtcclxuICAgICAgICBAaW5jbHVkZSBzdmcoYm90dG9tLWJnKTtcclxuICAgICAgICB3aWR0aDogMTIwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAxMjBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEyMHB4O1xyXG4gICAgICAgIGJvdHRvbTogLTEwcHg7XHJcbiAgICAgICAgcmlnaHQ6IC0xMHB4O1xyXG4gICAgfVxyXG4gICAgYXBwLWhlYWRlciwgYXBwLWNhcmR7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHotaW5kZXg6IDEwMDtcclxuICAgIH1cclxufVxyXG4ucGFke1xyXG4gICAgcGFkZGluZzogMTVweCAzMHB4O1xyXG59XHJcbmhlYWRlcntcclxuICAgIC13ZWJraXQtZGlzcGxheTogZmxleDtcclxuICAgIC1tb3otZGlzcGxheTogZmxleDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQ6ICRuYXZ5O1xyXG4gICAgcGFkZGluZzogMTVweCA0NXB4O1xyXG5cclxuICAgIGEsIC5sb2NhbC10aW1le1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIH1cclxuICAgIGF7XHJcbiAgICAgICAgQGluY2x1ZGUgbGlnaHQoMzYpO1xyXG4gICAgICAgIGNvbG9yOiAkdztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG5cclxuICAgICAgICBpbWd7XHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcclxuICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAmOmhvdmVyLCAmOnZpc2l0ZWR7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAubG9jYWwtdGltZXtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgQGluY2x1ZGUgbGlnaHQoMTMpO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgICAgY29sb3I6ICR3O1xyXG4gICAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XHJcblxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVte1xyXG4gICAgICAgICAgICAgICAgY29sb3I6ICR0ZWFsO1xyXG4gICAgICAgICAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMnB4O1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAycHg7XHJcblxyXG4gICAgICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdGwoNTAlLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTRweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDE0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTdweDtcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGQgZW06YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKHRpbWUpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAxNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICY6Zmlyc3QtY2hpbGQgZW06YmVmb3Jle1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKGNhbGVuZGFyKTtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMTRweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4uY2FyZHtcclxuICAgIEBpbmNsdWRlIGJveHNoYWRvdygwLCAwLCA1cHgsIDAsIDAsIDAsIDAuMjUpO1xyXG4gICAgQGluY2x1ZGUgcmFkaXVzKDVweCk7XHJcbiAgICBiYWNrZ3JvdW5kOiAkdGVhbDtcclxuICAgIGNvbG9yOiAkYjtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIG1hcmdpbjogMTFweCAwO1xyXG5cclxuICAgICY6aG92ZXJ7XHJcbiAgICAgICAgY29sb3I6ICRiO1xyXG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIH1cclxuICAgIC50aXRsZXtcclxuICAgICAgICBAaW5jbHVkZSByZWcoMjIpO1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAtMzBweDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IC0zMHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDEwcHggMzBweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkbmF2eTtcclxuICAgICAgICBjb2xvcjogJHc7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuXHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKGJhY2spO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSB0bCgwLCAzMHB4KTtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyMHB4O1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0ZW4oJG5hdnksIDE1JSk7XHJcbiAgICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnRlbXB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAkYm9yZGVyMTtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIFxyXG4gICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGxpZ2h0KDUwKTtcclxuICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAwIDI1cHggMCAwO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkdztcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHN0cm9uZ3tcclxuICAgICAgICAgICAgICAgIGZvbnQtd2VpZ2h0OiAzMDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJhc3ZnKGNlbHNpdXMsIDIwcHgsIDIwcHgsIDIwcHgpO1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgdHIoNTAlLCAwKTtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi10b3A6IC0xMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgICYubm8tYWZ0ZXJ7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbXtcclxuICAgICAgICAgICAgQGluY2x1ZGUgcmFkaXVzKDIwcHgpO1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBsaWdodCgxNik7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiBjYXBpdGFsaXplO1xyXG4gICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDJweCAzMHB4O1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICRib3JkZXIxO1xyXG4gICAgICAgICAgICBjb2xvcjogJHc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmh1bWlkaXR5e1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogJHc7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXIxO1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XHJcblxyXG4gICAgICAgIGl7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGxpZ2h0KDE2KTtcclxuICAgICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICAgICAgY29sb3I6ICRiO1xyXG4gICAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBsaWdodCgzMCk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMzBweDtcclxuICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG5cclxuICAgICAgICAgICAgZW17XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBsaWdodCgyMik7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSB0cig1MCUsIDApO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE0cHg7XHJcbiAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAudGl0bGUye1xyXG4gICAgICAgIEBpbmNsdWRlIGxpZ2h0KDE2KTtcclxuICAgICAgICBjb2xvcjogJGI7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMXB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB9XHJcbiAgICAubWF4LW1pbntcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXIxO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcclxuXHJcbiAgICAgICAgLnRlbXB7XHJcbiAgICAgICAgICAgIGJvcmRlcjogbm9uZTtcclxuICAgICAgICAgICAgcGFkZGluZzogMDtcclxuICAgICAgICAgICAgbWFyZ2luOiAwO1xyXG5cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuXHJcbiAgICAgICAgICAgICAgICBpe1xyXG4gICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGxpZ2h0KDE4KTtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1heHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZTIgc3BhbjphZnRlcntcclxuICAgICAgICAgICAgICAgIEBpbmNsdWRlIHN2ZyhtYXgpO1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5taW57XHJcbiAgICAgICAgICAgIC50aXRsZTJ7XHJcbiAgICAgICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHN2ZyhtaW4pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYud2luZC1zcGVlZDphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKHdpbmQtc3BlZWQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICYud2luZC1kZWc6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIHN2Zyh3aW5kLWRlZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5sYXRpdHVkZTphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKGxhdGl0dWRlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1zaXplOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAmLmxvbmdpdHVkZTphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgc3ZnKGxvbmdpdHVkZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgJi5zdW5yaXNlOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBAaW5jbHVkZSBzdmcoc3VucmlzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5pbnZlcnNle1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG5cclxuICAgICAgICAgICAgLm1heCwgLm1pbntcclxuICAgICAgICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICYuY29vcmRpbmF0ZXN7XHJcbiAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5taW5pLWNhcmR7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICAudGVtcHtcclxuICAgICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaHVtaWRpdHksIC5tYXgtbWlue1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4ubm8tZGF0YXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuXHJcbiAgICBzcGFue1xyXG4gICAgICAgIEBpbmNsdWRlIGxpZ2h0KDE4KTtcclxuICAgICAgICBjb2xvcjogJHc7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwYWRkaW5nOiAxMDBweCAwIDEwMHB4IDUwcHg7XHJcblxyXG4gICAgICAgICY6YmVmb3Jle1xyXG4gICAgICAgICAgICBAaW5jbHVkZSBiYXN2Zyhuby1kYXRhLCAzMHB4LCAzMHB4LCAzMHB4KTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdGwoNTAlLCAwKTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLTE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbi5mb3JlY2FzdHtcclxuICAgIHBhZGRpbmc6IDQwcHggMDtcclxuXHJcbiAgICAuZm9yZWNhc3QtdGl0bGV7XHJcbiAgICAgICAgQGluY2x1ZGUgbGlnaHQoMjIpO1xyXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgICAgcGFkZGluZzogMTVweCAwO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkYmx1ZSwgMjAlKTtcclxuICAgICAgICBjb2xvcjogJHc7IFxyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIH1cclxuICAgIHN0cm9uZ3tcclxuICAgICAgICBAaW5jbHVkZSBsaWdodCgyMCk7XHJcbiAgICAgICAgcGFkZGluZzogMzBweCAwO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogJG5hdnk7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xyXG5cclxuICAgICAgICAmLnNlcGVyYXRle1xyXG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5kZWdyZWUtc3RyaXB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogc3RyZXRjaDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcblxyXG4gICAgICAgICYubm8tcHR7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXY6bm90KC5kZWdyZWUtdGl0bGUpe1xyXG4gICAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IHJnYmEoNzIsIDcwLCAxMDksIDAuMjUpO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDE1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5kZWdyZWUtdGl0bGV7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGxpZ2h0KDE0KTtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdGwoMCwgMCk7XHJcbiAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogcmdiYSg3MiwgNzAsIDEwOSwgMC41KTtcclxuICAgICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkaXZ7XHJcbiAgICAgICAgICAgIEBpbmNsdWRlIGxpZ2h0KDIyKTtcclxuICAgICAgICAgICAgY29sb3I6ICR3O1xyXG4gICAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcblxyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgcGFkZGluZzogNXB4IDIwcHggNXB4IDA7XHJcblxyXG4gICAgICAgICAgICAgICAgJi5jb25kaXRpb25ze1xyXG4gICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDE0cHggMDtcclxuICAgICAgICAgICAgICAgICAgICBmb250LXNpemU6IDEzcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAmLmh1bWlkaXR5LCAmLmNvbmRpdGlvbnN7XHJcbiAgICAgICAgICAgICAgICAgICAgcGFkZGluZy1yaWdodDogMDtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAmOmFmdGVye1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHIoNTAlLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAtOHB4O1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi5kZWd7XHJcbiAgICAgICAgICAgICAgICAgICAgJjphZnRlcntcclxuICAgICAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgYmFzdmcoY2Vsc2l1cywgMTZweCwgMTZweCwgMTZweCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJi53aW5kLXNwZWVke1xyXG4gICAgICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEBpbmNsdWRlIGJhc3ZnKHdpbmQtc3BlZWQsIDE2cHgsIDE2cHgsIDE2cHgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAmLmludmVyc2V7XHJcbiAgICAgICAgICAgIHBhZGRpbmctdG9wOiAwO1xyXG4gICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuXHJcbiAgICAgICAgICAgIC5kZWdyZWUtdGl0bGV7XHJcbiAgICAgICAgICAgICAgICB0b3A6IGF1dG87XHJcbiAgICAgICAgICAgICAgICBib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuLnNlYXJjaC1jb250YWluZXJ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4IDE1cHggMzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG4gICAgc3BhbntcclxuICAgICAgICBAaW5jbHVkZSBibCgtMnB4LCAxNXB4KTtcclxuICAgICAgICBAaW5jbHVkZSByZWcoMTQpO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogMjhweDtcclxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG5cclxuICAgICAgICAmOmJlZm9yZXtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdGwoNTAlLCAwKTtcclxuICAgICAgICAgICAgbWFyZ2luLXRvcDogLThweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgJi5lcnJvcntcclxuICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBiYXN2ZyhlcnJvciwgMTZweCwgMTZweCwgMTZweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgJi5mZXRjaHtcclxuICAgICAgICAgICAgJjpiZWZvcmV7XHJcbiAgICAgICAgICAgICAgICBAaW5jbHVkZSBiYXN2ZyhmZXRjaCwgMTZweCwgMTZweCwgMTZweCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgICAgICBAaW5jbHVkZSB0bC1yYWRpdXMoMzBweCk7XHJcbiAgICAgICAgQGluY2x1ZGUgYmwtcmFkaXVzKDMwcHgpO1xyXG4gICAgICAgIEBpbmNsdWRlIHJlZygxNCk7XHJcbiAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDEwMHB4KTtcclxuICAgICAgICBoZWlnaHQ6IDM2cHg7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAkdDtcclxuICAgICAgICBjb2xvcjogJHc7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Y1ZjVmNTtcclxuICAgICAgICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgYnV0dG9ue1xyXG4gICAgICAgIEBpbmNsdWRlIHJlZygxOCk7XHJcbiAgICAgICAgQGluY2x1ZGUgdHItcmFkaXVzKDMwcHgpO1xyXG4gICAgICAgIEBpbmNsdWRlIGJyLXJhZGl1cygzMHB4KTtcclxuICAgICAgICB3aWR0aDogMTAwcHg7XHJcbiAgICAgICAgaGVpZ2h0OiAzNnB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzNHB4O1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICR3O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICRuYXZ5O1xyXG4gICAgICAgIGNvbG9yOiAkdztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgfVxyXG59XHJcbi5jaXR5LWZsZXh7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4vL3Jlc3BvbnNpdmVcclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA0ODBweCl7XHJcbiAgICAuc2VhcmNoLWNvbnRhaW5lcntcclxuICAgICAgICBpbnB1dFt0eXBlPVwidGV4dFwiXXtcclxuICAgICAgICAgICAgd2lkdGg6IDQwMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b257XHJcbiAgICAgICAgICAgIHdpZHRoOiAxNTBweDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgYXtcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICAgICAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAuY2FyZHtcclxuICAgICAgICAudGVtcHtcclxuICAgICAgICAgICAgaW1ne1xyXG4gICAgICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIGZvbnQtc2l6ZTogNjVweDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuaHVtaWRpdHl7XHJcbiAgICAgICAgICAgIHNwYW57XHJcbiAgICAgICAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1heC1taW57XHJcbiAgICAgICAgICAgIHBhZGRpbmc6IDAgMzBweCAzMHB4O1xyXG4gICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICAgICAgLm1heHtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLnRpdGxlMntcclxuICAgICAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDMwcHg7XHJcbiAgICBcclxuICAgICAgICAgICAgICAgICY6YWZ0ZXJ7XHJcbiAgICAgICAgICAgICAgICAgICAgQGluY2x1ZGUgdHIoNTAlLCAwKTtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogLTEycHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA3NjhweCl7XHJcbiAgICAuY2FyZHtcclxuICAgICAgICBwYWRkaW5nOiAwIDMwcHg7XHJcblxyXG4gICAgICAgIC50aXRsZSBhe1xyXG4gICAgICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDk5MnB4KXtcclxuICAgIC5jYXJke1xyXG4gICAgICAgIC5tYXgtbWlue1xyXG4gICAgICAgICAgICAmLmludmVyc2V7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctbGVmdDogMDtcclxuICAgICAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDA7XHJcbiAgICAgICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogNTVweDtcclxuICAgICAgICAgICAgICAgIG1hcmdpbi1ib3R0b206IDU1cHg7XHJcbiAgICAgICAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG5cclxuICAgICAgICAgICAgICAgICYuY29vcmRpbmF0ZXN7XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLXRvcDogMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jaXR5LWZsZXh7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNjBweDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDI1cHg7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICRib3JkZXIxO1xyXG5cclxuICAgICAgICAudGVtcCwgLmh1bWlkaXR5e1xyXG4gICAgICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5odW1pZGl0eXtcclxuICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDU1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1pbi13aWR0aDogMTIwMHB4KXtcclxuICAgIC5wYWR7XHJcbiAgICAgICAgcGFkZGluZzogMTMwcHggNzBweCA1MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICB9XHJcbiAgICBhLCBidXR0b24sIGlucHV0W3R5cGU9XCJzdWJtaXRcIl17XHJcbiAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbjtcclxuICAgIH1cclxuICAgIGJvZHl7XHJcbiAgICAgICAgYXBwLWhlYWRlcntcclxuICAgICAgICAgICAgQGluY2x1ZGUgYm94c2hhZG93KDAsIDAsIDEwcHgsIDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICAgIHotaW5kZXg6IDIwMDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBoZWFkZXJ7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xyXG4gICAgICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcblxyXG4gICAgICAgIGF7XHJcbiAgICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAzcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5sb2NhbC10aW1le1xyXG4gICAgICAgICAgICBzcGFue1xyXG4gICAgICAgICAgICAgICAgQGluY2x1ZGUgcmVnKDE2KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5jb250ZW50e1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAxMTBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcclxuICAgIH1cclxuICAgIGEuY2FyZHtcclxuICAgICAgICBtYXJnaW46IDE1cHggMDtcclxuXHJcbiAgICAgICAgLnRlbXAgZW0sIC50aXRsZXtcclxuICAgICAgICAgICAgQGluY2x1ZGUgdHJhbnNpdGlvbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgJjpob3ZlcntcclxuICAgICAgICAgICAgQGluY2x1ZGUgYm94c2hhZG93KDAsIDAsIDEwcHgsIDAsIDAsIDAsIDAuNSk7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6IGRhcmtlbigkdGVhbCwgMTAlKTtcclxuXHJcbiAgICAgICAgICAgIC50aXRsZXtcclxuICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6IGxpZ2h0ZW4oJG5hdnksIDEwJSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLnRlbXAgZW17XHJcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiBsaWdodGVuKCR0ZWFsLCAxMCUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLmNhcmR7XHJcbiAgICAgICAgLnRpdGxle1xyXG4gICAgICAgICAgICBhOmhvdmVye1xyXG4gICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJG5hdnk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLm1heC1taW57XHJcbiAgICAgICAgICAgICYuaW52ZXJzZXtcclxuICAgICAgICAgICAgICAgIFxyXG5cclxuICAgICAgICAgICAgICAgIC5taW57XHJcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDkwcHg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgJi5jb29yZGluYXRlc3tcclxuICAgICAgICAgICAgICAgIC5taW57XHJcbiAgICAgICAgICAgICAgICAgICAgJjpmaXJzdC1jaGlsZHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLnNlYXJjaC1jb250YWluZXJ7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuXHJcbiAgICAgICAgc3BhbntcclxuICAgICAgICAgICAgYm90dG9tOiBhdXRvO1xyXG4gICAgICAgICAgICBsZWZ0OiBhdXRvO1xyXG4gICAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBidXR0b246aG92ZXJ7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQ6ICR0O1xyXG4gICAgICAgICAgICBib3JkZXItY29sb3I6ICR3O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIC5mb3JlY2FzdHtcclxuICAgICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XHJcblxyXG4gICAgICAgIC5mb3JlY2FzdC10aXRsZXtcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogJHQ7XHJcbiAgICAgICAgICAgIGNvbG9yOiAkbmF2eTtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiAxMzY2cHgpe1xyXG4gICAgLmZsZXgtY29udGFpbmVye1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XHJcblxyXG4gICAgICAgIC5mbGV4LWJsb2Nre1xyXG4gICAgICAgICAgICAmOmZpcnN0LWNoaWxke1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IDY1JTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAmOmxhc3QtY2hpbGR7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC5uby1kYXRhe1xyXG4gICAgICAgICAgICAgICAgbWFyZ2luOiAxNzBweCAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19 */", '', '']]

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

module.exports = __webpack_require__(/*! F:\angular\sunlite\src\styles.scss */"./src/styles.scss");


/***/ })

},[[2,"runtime"]]]);
//# sourceMappingURL=styles.js.map