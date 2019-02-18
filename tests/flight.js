/*
 Created by QA Source
Verify that return date exists for round way trip and does not exists for one way trip.
 */
var assert = require('assert');
var {describe, it, after, before} = require('selenium-webdriver/testing');
var Page = require('../framework/page.js');
var Flight = require('../pages/flightMochaPage.js');
var flight;

//input Data
var input =require('../inputSheet.js');
var crossBrowserTesting =input.crossBrowserTesting;
var wait = input.wait;
var url = input.spiritURl;


var browsers = crossBrowserTesting.split(',');
for(var i=0; i<browsers.length; i++){
	let ii = i;
	var browser = browsers[ii];
	describe('Flight : ' + browser , function(){
		var driver;
		this.timeout(wait);

		beforeEach(function(){
			driver = require('../framework/driverClass.js').getDriver(browsers[ii]);
			page = new Page(driver,url);
			flight = new Flight(driver);
			page.maximum();
			page.open();
		});
		afterEach(function(){
			if(driver)
				driver.close();
		});

		it('Verify that return date exists only for round way trip ', function(){	

				//Click on one way trip radio button
				flight.clickOneWayTrip();		
			
				//is return date field present for one way trip
				flight.isReturnDatePresent(function(oneWayReturnDate){
					assert.equal(oneWayReturnDate, false,["return date field is present "])
									
				//Click on round trip radio button
				flight.clickRoundTrip();	
						
				//is return date field present for round way trip
				flight.isReturnDatePresent(function(roundTripReturnDate){
					assert.equal(roundTripReturnDate, true,["return date is not present "])
				});
				
			});
		}); 
	});
}