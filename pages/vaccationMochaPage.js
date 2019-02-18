/**
Created By QA Source
 */

var assert = require('assert');
// locators
var locate = require ('../locator.js'); 
var flightAndCarRadio = locate.elements.flightAndCarRadio;
var flightAndHotelRadio = locate.elements.flightAndHotelRadio;
var flightAndHotelAndCarRadio = locate.elements.flightAndHotelAndCarRadio;
var flightAndCarLabel = locate.elements.flightAndCarLabel;
var flightAndHotelLabel = locate.elements.flightAndHotelLabel;
var flightAndHotelAndCarLabel = locate.elements.flightAndHotelAndCarLabel;


//input data
var input = require ('../inputSheet.js'); 
var url = input.pasteUrl;
var timeoutWait = Number(input.timeout);

var parent;
var page = require('../framework/page.js');

function VaccationPage (webdriver) {
  page.call(this, webdriver, url);
  By = webdriver.By;
}

VaccationPage.prototype = Object.create(page.prototype);
VaccationPage.prototype.constructor = VaccationPage;


//Verify if flight+Car radio button available
VaccationPage.prototype.isFlightAndCarRadioButtonPresent= function(cb)
{
	this.driver.wait(this.until.elementLocated({ id: flightAndCarRadio }),timeoutWait).then(function(val){
	cb(true) ;
	},function(err){
		cb(false) ;
	});	
}
//Verify if flight+Hotel radio button available
VaccationPage.prototype.isFlightAndHotelRadioButtonPresent= function(cb)
{
	this.driver.wait(this.until.elementLocated({ id: flightAndHotelRadio }),timeoutWait).then(function(val){
		cb(true) ;
	},function(err){
		cb(false) ;
	});	
}
//Verify if flight+Hotel+Car radio button available
VaccationPage.prototype.isFlightAndHotelAndCarRadioButtonPresent= function(cb)
{
	this.driver.wait(this.until.elementLocated({ id: flightAndHotelAndCarRadio }),timeoutWait).then(function(val){
		cb(true) ;
	},function(err){
		cb(false) ;
	});	
}
//Verify if flight+Car label available
VaccationPage.prototype.isFlightAndCarLabelPresent= function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath: flightAndCarLabel }),timeoutWait).then(function(val){
		cb(true) ;
	},function(err){
		cb(false) ;
	});	
}
//Verify if flight+Hotel label available
VaccationPage.prototype.isFlightAndHotelLabelPresent= function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath: flightAndHotelLabel }),timeoutWait).then(function(val){
		cb(true) ;
	},function(err){
		cb(false) ;
	});	
}
//Verify if flight+Hotel+Car label available
VaccationPage.prototype.isFlightAndHotelAndCarLabelPresent= function(cb)
{
	this.driver.wait(this.until.elementLocated({ xpath: flightAndHotelAndCarLabel }),timeoutWait).then(function(val){
		cb(true) ;
	},function(err){
		cb(false) ;
	});	
}
module.exports = VaccationPage;