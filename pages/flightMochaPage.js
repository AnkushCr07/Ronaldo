/**
Created By QA Source
 */

var assert = require('assert');
// locators
var locate = require ('../locator.js'); 
var returnDate = locate.elements.returnDate;
var oneWayTripLabel= locate.elements.oneWayTripLabel;
var roundTripLabel= locate.elements.roundTripLabel;


//input data
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var timeoutWait = Number(input.timeout);
var returnDateStyle=input.returnDateStyle;

var parent;
var page = require('../framework/page.js');

function FlightPage (webdriver) {
  page.call(this, webdriver, url);
  By = webdriver.By;
}

FlightPage.prototype = Object.create(page.prototype);
FlightPage.prototype.constructor = FlightPage;

//is Return date input field present
FlightPage.prototype.isReturnDatePresent= function(cb)
{
	var drive = this.driver;
	this.driver.wait(this.until.elementLocated({ id : returnDate }),timeoutWait).then(function(val){	
		drive.sleep(5000);
		val.getAttribute("style").then(function(text){	
			if(text== returnDateStyle)
				{
					cb(true);
				}
			else
				{
					cb(false);
				}
		})			
	},function(err){
		throw new Error('Return date input field is not present');
	})
}
//click One Way Trip Radio Button
FlightPage.prototype.clickOneWayTrip= function()
{
	this.driver.wait(this.until.elementLocated({ xpath : oneWayTripLabel }),timeoutWait).then(function(val){
		val.click();			
	},function(err){
		throw new Error('Unable to click One way radio button');
	})
}
//click Round Trip Radio Button
FlightPage.prototype.clickRoundTrip= function()
{
	this.driver.wait(this.until.elementLocated({ xpath : roundTripLabel }),timeoutWait).then(function(val){
		val.click();			
	},function(err){
		throw new Error('Unable to click Round Trip radio button');
	})
}

module.exports = FlightPage;