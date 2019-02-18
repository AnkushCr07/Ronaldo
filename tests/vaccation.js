/*
 Created by QA Source
 Verify that "Flight +Car", "Flight + Hotel" and "Flight + Car +Hotel" options arre available for Vaccations #Smoke
 Verify that "Flight +Car", "Flight + Hotel" and "Flight + Car +Hotel" options arre available for Vaccations #Sanity
 Intentially Failed Scenraio : Verify that "Flight +Car", "Flight + Hotel" and "Flight + Car +Hotel" options arre available for Vaccations

 */
var assert = require('assert');
var {describe, it, after, before} = require('selenium-webdriver/testing');
var Page = require('../framework/page.js');
var Vaccation = require('../pages/vaccationMochaPage.js');
var Book = require('../pages/bookMochaPage.js');
var vaccation, book;

//input Data
var input =require('../inputSheet.js');
var crossBrowserTesting =input.crossBrowserTesting;
var wait = input.wait;
var url = input.spiritURl;


var browsers = crossBrowserTesting.split(',');
for(var i=0; i<browsers.length; i++){
	let ii = i;
	var browser = browsers[ii];
	describe('Vaccation : ' + browser , function(){
		var driver;
		this.timeout(wait);

		beforeEach(function(){
			driver = require('../framework/driverClass.js').getDriver(browsers[ii]);
			page = new Page(driver,url);
			vaccation = new Vaccation(driver);
			book = new Book(driver);
			page.maximum();
			page.open();
		});
		afterEach(function(){
			if(driver)
				driver.close();
		});

		it('Verify that "Flight +Car", "Flight + Hotel" and "Flight + Car +Hotel" options arre available for Vaccations #Smoke', function(){	

			//click vaccation tab
			book.clickVaccationTab();
			
			//verify that Flight +Car radio button is available
			vaccation.isFlightAndCarRadioButtonPresent(function(flightCarRadio){
				assert.equal(flightCarRadio,true,["Flight +Car button is not Present"]);
			})
			
			//verify that Flight +Car label button is available
			vaccation.isFlightAndCarLabelPresent(function(flightAndCarLabel){
				assert.equal(flightAndCarLabel,true,['Flight +Car label is not Present']);
			})
			
			//verify that Flight +Hotel radio button s available
			vaccation.isFlightAndHotelRadioButtonPresent(function(flightHotelRadio){
				assert.equal(flightHotelRadio,true,['Flight + Hotel button is not Present']);
			})
			
			//verify that Flight +Hotel label button s available
			vaccation.isFlightAndHotelLabelPresent(function(flightHotelLabel){
				assert.equal(flightHotelLabel,true,['Flight + Hottel label is not Present']);
			})
			
			//verify that Flight +Car + Hotel radio button s available
			vaccation.isFlightAndHotelAndCarRadioButtonPresent(function(flightCarHotelRadio){
				assert.equal(flightCarHotelRadio,true,['Flight +Car + Hotel button is not Present']);
			})
			
			//verify that Flight +Car + Hotel label button s available
			vaccation.isFlightAndHotelAndCarLabelPresent(function(flightHotelCarLabel){
				assert.equal(flightHotelCarLabel,true,['Flight +Car + Hotel label is not Present']);
			})		
		}); 
		
		it('Verify that "Flight +Car", "Flight + Hotel" and "Flight + Car +Hotel" options arre available for Vaccations #Sanity', function(){	

			//click vaccation tab
			book.clickVaccationTab();
			
			//verify that Flight +Car radio button is available
			vaccation.isFlightAndCarRadioButtonPresent(function(flightCarRadio){
				assert.equal(flightCarRadio,true,["Flight +Car button is not Present"]);
			})
			
			//verify that Flight +Car label button is available
			vaccation.isFlightAndCarLabelPresent(function(flightAndCarLabel){
				assert.equal(flightAndCarLabel,true,['Flight +Car label is not Present']);
			})
			
			//verify that Flight +Hotel radio button s available
			vaccation.isFlightAndHotelRadioButtonPresent(function(flightHotelRadio){
				assert.equal(flightHotelRadio,true,['Flight + Hotel button is not Present']);
			})
			
			//verify that Flight +Hotel label button s available
			vaccation.isFlightAndHotelLabelPresent(function(flightHotelLabel){
				assert.equal(flightHotelLabel,true,['Flight + Hottel label is not Present']);
			})
			
			//verify that Flight +Car + Hotel radio button s available
			vaccation.isFlightAndHotelAndCarRadioButtonPresent(function(flightCarHotelRadio){
				assert.equal(flightCarHotelRadio,true,['Flight +Car + Hotel button is not Present']);
			})
			
			//verify that Flight +Car + Hotel label button s available
			vaccation.isFlightAndHotelAndCarLabelPresent(function(flightHotelCarLabel){
				assert.equal(flightHotelCarLabel,true,['Flight +Car + Hotel label is not Present']);
			})		
		}); 
		
		it('Intentially Failed Scenraio : Verify that "Flight +Car", "Flight + Hotel" and "Flight + Car +Hotel" options arre available for Vaccations #Sanity', function(){	

			//click vaccation tab
			book.clickVaccationTab();
			
			//verify that Flight +Car radio button is available
			vaccation.isFlightAndCarRadioButtonPresent(function(flightCarRadio){
				assert.equal(flightCarRadio,false,["Flight +Car button is not Present"]);
			})
			
			//verify that Flight +Car label button is available
			vaccation.isFlightAndCarLabelPresent(function(flightAndCarLabel){
				assert.equal(flightAndCarLabel,true,['Flight +Car label is not Present']);
			})
			
			//verify that Flight +Hotel radio button s available
			vaccation.isFlightAndHotelRadioButtonPresent(function(flightHotelRadio){
				assert.equal(flightHotelRadio,true,['Flight + Hotel button is not Present']);
			})
			
			//verify that Flight +Hotel label button s available
			vaccation.isFlightAndHotelLabelPresent(function(flightHotelLabel){
				assert.equal(flightHotelLabel,true,['Flight + Hottel label is not Present']);
			})
			
			//verify that Flight +Car + Hotel radio button s available
			vaccation.isFlightAndHotelAndCarRadioButtonPresent(function(flightCarHotelRadio){
				assert.equal(flightCarHotelRadio,true,['Flight +Car + Hotel button is not Present']);
			})
			
			//verify that Flight +Car + Hotel label button s available
			vaccation.isFlightAndHotelAndCarLabelPresent(function(flightHotelCarLabel){
				assert.equal(flightHotelCarLabel,true,['Flight +Car + Hotel label is not Present']);
			})		
		}); 
	});
}