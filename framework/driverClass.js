var webdriver =require('selenium-webdriver'),
  driver;

var getDriver = function(browser) {
 /* if(driver) {
    return driver;
  } else {
    driver = buildDriver();
    return driver;
  }*/
	driver = buildDriver(browser);
    return driver;
};

var buildDriver = function(browser) {

	switch(browser){

		case 'Chrome' :

		var chrome = require('selenium-webdriver/chrome');
		var path = require('chromedriver').path;
		return new webdriver.Builder().
	    withCapabilities(webdriver.Capabilities.chrome()).
	    build();

	    break;

	    case 'Firefox' :

	    var firefox = require('selenium-webdriver/firefox');
		var path = require('geckodriver').path;
		var service = new firefox.ServiceBuilder(path).build();
	  	return new webdriver.Builder().
	    withCapabilities(webdriver.Capabilities.firefox()).
	    build();

	    break;

	}
	//FIREFOX
/*
	var firefox = require('selenium-webdriver/firefox');
	var path = require('geckodriver').path;

	var service = new firefox.ServiceBuilder(path).build();
	//firefox.setDefaultService(service);

	  return new webdriver.Builder().
	    withCapabilities(webdriver.Capabilities.firefox()).
	    build();
*/
	  
	//CHROME
	/*
	var chrome = require('selenium-webdriver/chrome');
	var path = require('chromedriver').path;

	 var service = new chrome.ServiceBuilder(path).build();
	  chrome.setDefaultService(service); 

		return new webdriver.Builder().
	      withCapabilities(webdriver.Capabilities.chrome()).
	      build();*/
	      

	      //safari
	/*
	return new webdriver.Builder().
    withCapabilities(webdriver.Capabilities.safari()).
    build();
	*/
  /*switch(process.env.PLATFORM) {
    case 'FIREFOX':
      return new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.firefox()).
        build();
    default:
      return new webdriver.Builder().
        withCapabilities(webdriver.Capabilities.chrome()).
        build();
  }*/
	  	
};

module.exports.getDriver = getDriver;