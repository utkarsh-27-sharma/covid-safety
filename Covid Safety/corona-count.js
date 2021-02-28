// Live corona virus cases
$.ajax({
  url: 'https://api.thevirustracker.com/free-api?global=stats',
  dataType: 'json',
  success: function(data) {
    console.log(data);    
    console.log("Total Cases worldwide: "+data.results[0].total_cases);
    console.log("Total deaths worldwide: " +data.results[0].total_deaths);
    $(".world-count").append("Total Cases worldwide: "+'<br>'+data.results[0].total_cases +'<br>' )
    $(".world-count").append("Total Deaths worldwide: "+'<br>'+data.results[0].total_deaths +'<br>')
    $(".world-count").append("Total active cases worldwide: "+'<br>'+data.results[0].total_active_cases +'<br>')
    $(".world-count").append("New cases today worldwide: "+'<br>'+data.results[0].total_new_cases_today)
}
});

$.ajax({
  url: 'https://api.thevirustracker.com/free-api?countryTotal=IN',
  dataType: 'json',
  success: function(data) {
    console.log(data);    
    console.log("Country: " +data.countrydata[0].info.title);
    console.log("Total Cases: "+data.countrydata[0].total_cases);
    console.log("Total deaths: "+data.countrydata[0].total_deaths);
    $(".india-count").append("Total Cases in India: "+'<br>'+data.countrydata[0].total_cases +'<br>')
    $(".india-count").append("Total Deaths in India: "+'<br>'+data.countrydata[0].total_deaths +'<br>')
    $(".india-count").append("Total active cases in India: "+'<br>'+data.countrydata[0].total_active_cases + '<br>')
    $(".india-count").append("New cases today in India: "+'<br>'+data.countrydata[0].total_new_cases_today)
  }
});