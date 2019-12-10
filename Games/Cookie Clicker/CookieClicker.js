//adds a certain amount of cookies to total cookies
var makeCookie = function() {
  var td1 = document.getElementById("currentCookies");
  var td2 = document.getElementById("totalCookies"); 
  var td3 = document.getElementById("clickerLevel");
  var currentCookies = td1.innerHTML;
  var totalCookies = td2.innerHTML;
  var clickerLevel = td3.innerHTML;
  clickerLevel = parseInt(clickerLevel, 10);
  currentCookies = parseInt(currentCookies, 10);
  currentCookies += clickerLevel;
  totalCookies = parseInt(totalCookies, 10);
  totalCookies += clickerLevel;
  td1.innerHTML = currentCookies;
  td2.innerHTML = totalCookies;
}

//increases productivity of clicker if user has enough cookies
var upgradeClicker = function(){
  var td1 = document.getElementById("clickerLevel");
  clickerLevel = td1.innerHTML;
  clickerLevel = parseInt(clickerLevel, 10);
  var td2 = document.getElementById("clickerCost");
  clickerCost = td2.innerHTML;
  clickerCost = parseInt(clickerCost, 10);
  var td3 = document.getElementById("currentCookies");
  var currentCookies = td3.innerHTML;
  currentCookies = parseInt(currentCookies, 10);
  if(currentCookies < clickerCost){
      alert("Not enough cookies to upgrade the clicker!")
  }
  else{
      currentCookies = currentCookies - clickerCost;
      td3.innerHTML = currentCookies;
      clickerLevel++;
      td1.innerHTML = clickerLevel;
      clickerCost *= 2;
      td2.innerHTML = clickerCost;
  }
}
//increases productivity of bakery if user has enough cookies
var upgradeProduction = function(){
  var td1 = document.getElementById("bakeryLevel");
  var bakeryLevel = td1.innerHTML;
  bakeryLevel = parseInt(bakeryLevel, 10);
  var td3 = document.getElementById("bakeryCost");
  var bakeryCost = td3.innerHTML;
  bakeryCost = parseInt(bakeryCost, 10);
  var td4 = document.getElementById("currentCookies");
  var currentCookies = td4.innerHTML;
  currentCookies = parseInt(currentCookies, 10);

  if(currentCookies < bakeryCost){
      alert("Not enough cookies to upgrade the bakery!");
  }
  else{
      currentCookies = currentCookies - bakeryCost;
      bakeryLevel++;
      bakeryCost = bakeryCost * 2;
      td1.innerHTML = bakeryLevel;
      td3.innerHTML = bakeryCost;
      td4.innerHTML = currentCookies;
  }
}

//increases productivity of factory if user has enough cookies
var upgradeProductionFactory = function(){
  var td1 = document.getElementById("factoryLevel");
  var factoryLevel = td1.innerHTML;
  factoryLevel = parseInt(factoryLevel, 10);
  var td3 = document.getElementById("factoryCost");
  var factoryCost = td3.innerHTML;
  factoryCost = parseInt(factoryCost, 10);
  var td4 = document.getElementById("currentCookies");
  var currentCookies = td4.innerHTML;
  currentCookies = parseInt(currentCookies, 10);

  if(currentCookies < factoryCost){
      alert("Not enough cookies to upgrade the factory!");
  }
  else{
      currentCookies = currentCookies - factoryCost;
      factoryLevel++;
      factoryCost = factoryCost * 2;
      td1.innerHTML = factoryLevel;
      td3.innerHTML = factoryCost;
      td4.innerHTML = currentCookies;
  }
}

//allows for bakery to automatically contribute to cookie production
var autoCookiesBakery = function(){
  var td1 = document.getElementById("currentCookies");
  var td2 = document.getElementById("totalCookies"); 
  var td3 = document.getElementById("bakeryLevel");
  var bakeryLevel = td3.innerHTML;
  bakeryLevel = parseInt(bakeryLevel, 10);
  var currentCookies = td1.innerHTML;
  var totalCookies = td2.innerHTML;
  currentCookies = parseInt(currentCookies, 10);
  currentCookies += bakeryLevel;
  totalCookies = parseInt(totalCookies, 10);
  totalCookies += bakeryLevel;
  td1.innerHTML = currentCookies;
  td2.innerHTML = totalCookies;
}

var autoCookiesFactory = function(){
  var td1 = document.getElementById("currentCookies");
  var td2 = document.getElementById("totalCookies"); 
  var td3 = document.getElementById("factoryLevel");
  var factoryLevel = td3.innerHTML;
  factoryLevel = parseInt(factoryLevel, 10);
  var currentCookies = td1.innerHTML;
  var totalCookies = td2.innerHTML;
  currentCookies = parseInt(currentCookies, 10);
  currentCookies += (10 * factoryLevel);
  totalCookies = parseInt(totalCookies, 10);
  totalCookies += (10 * factoryLevel);
  td1.innerHTML = currentCookies;
  td2.innerHTML = totalCookies;
}
setInterval(autoCookiesBakery, 1000);
setInterval(autoCookiesFactory, 1000);