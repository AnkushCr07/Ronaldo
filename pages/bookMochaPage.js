/**
Created By QA Source
 */

var assert = require('assert');
// locators
var locate = require ('../locator.js'); 
var vaccationTab = locate.elements.vaccationTab;


//input data
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var timeoutWait = Number(input.timeout);

var parent;
var page = require('../framework/page.js');

function BookPage (webdriver) {
  page.call(this, webdriver, url);
  By = webdriver.By;
}

BookPage.prototype = Object.create(page.prototype);
BookPage.prototype.constructor = BookPage;


//Click on vaccation tab
BookPage.prototype.clickVaccationTab= function() 
{
	this.driver.wait(this.until.elementLocated({ xpath: vaccationTab }),timeoutWait).then(function(val){		
		val.click();
	},function(err){
		 throw new Error('Unable to click vaccation tab');
	})
}

module.exports = BookPage;