/**
 * 
 */
var locate = require ('../locator.js'); 
var buildChrome = locate.elements.buildChrome ;
var buildFirefox = locate.elements.buildFirefox;

function Page(webdriver, url) {
  this.driver = webdriver;
  this.url = url;
  this.until = require('selenium-webdriver').until;
  this.webdriver = require('selenium-webdriver');
 // this.By = this.webdriver.By;
};

Page.prototype.open = function() {
	this.driver.get(this.url);
  return this;
};

Page.prototype.maximum = function() {
	//this.driver.manage().window().maximize();
	this.driver.manage().window().maximize().then(function(){},function(err){});
}
//get browser
Page.prototype.getBrowser = function(cb) {
  this.driver.getCapabilities().then(function (caps) {
    var capability = caps.get("browserName");
    cb(capability);
  });
}
//get build
Page.prototype.getBuild = function(cb) {
	var drive= this.driver;
	var until = this.until;
	this.driver.wait(this.until.elementLocated({ xpath: buildChrome }),1e4).then(function(val){
		val.getText().then(function(build){
			var buildd =build.split(': ')[1].split('\n}')[0];
			cb(buildd);
		})
	},function(err){
		drive.wait(until.elementLocated({ xpath: buildFirefox }),1e4).then(function(val){
			val.getText().then(function(build){		
				cb(build);
			})
		})
	})
}
//get platform name
Page.prototype.getPlatform = function(cb) {
  this.driver.getCapabilities().then(function (caps) {
    var capability = caps.get("platform");
    if(capability == undefined)
     {
      capability = caps.get("platformName");
     }
    cb(capability);
  });
}
//providing platform to email
Page.prototype.waitFor = function(locator, timeout) {
  var waitTimeout = timeout || 20000;
  var driver = this.driver;
  return driver.wait(function() {
    return driver.isElementPresent(locator);
  }, waitTimeout);
};

module.exports = Page;