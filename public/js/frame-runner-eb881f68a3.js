"use strict";document.addEventListener("DOMContentLoaded",function(){var common=parent.__common,frameId=window.__frameId,frameReady=common[frameId+"Ready$"]||{onNext:function(){}},Rx=document.Rx,chai=parent.chai,source=document.__source;document.__getJsOutput=function getJsOutput(){if(window.__err||!common.shouldRun())return window.__err||"source disabled";var output=void 0;try{output=eval(source)}catch(e){output=e.message+"\n"+e.stack,window.__err=e}return output},document.__runTests$=function runTests$(){var tests=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],editor={getValue:function(){return source}},code=source;return window.__err?Rx.Observable["throw"](window.__err):Rx.Observable.from(tests,null,null,Rx.Scheduler["default"]).delay(200).map(function(_ref){var text=_ref.text,testString=_ref.testString,assert=chai.assert,newTest={text:text,testString:testString},test=void 0;try{test=eval(testString),"function"==typeof test&&(0===test.length&&test(),1===test.length&&console.log("callback test"))}catch(e){newTest.err=e.message+"\n"+e.stack}return newTest.err||(newTest.pass=!0),newTest}).toArray()},frameReady.onNext(null)});