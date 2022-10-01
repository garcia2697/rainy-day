

// function gets the weather data using fetch on the weather api
let weather = {
    key:"335297aa73e68e93cce4065523b3ce25",
     fetchWeather: function(city){
        fetch(
            
            "https://api.openweathermap.org/data/2.5/forecast?q="
            + city 
            + "&units=imperial&appid="
            +this.key
        ).then((response)=>response.json())
        .then((data) => this.displayWeather(data));
        
    },
    displayWeather:function(data){

        // this section gets the weather information for the first day
        const { name } = data.city;
        const description1 = data.list[0].weather[0].description
        const icon1 = data.list[0].weather[0].icon;
        const temp1 = data.list[0].main.temp;
        const speed1 = data.list[0].wind.speed;
        const humidity1= data.list[0].main.humidity;
        const dt_txt1 = data.list[0].dt_txt;
        
        

        window.localStorage.setItem('location',JSON.stringify(name));
        JSON.parse(window.localStorage.getItem('location'));
       

        // this section displays the weather information for the first day
        document.querySelector(".city").innerText = "Weather in " + name +"("+dt_txt1+")";
        document.querySelector(".iconNow").src = "https://openweathermap.org/img/wn/"+icon1 + ".png";
        document.querySelector(".desc1").innerText = "Description: " + description1;
        document.querySelector(".temp1").innerText = "Temp: "+ temp1 + "°F";
        document.querySelector(".wind1").innerText = "Wind Speed: " + speed1 + "MPH";
        document.querySelector(".humidity1").innerText= "Humidity: " + humidity1 + "%";
        
        // this section gets and displays the weather information for the second day
        const dt_txt2= data.list[8].dt_txt;
        const icon2 = data.list[8].weather[0].icon
        const description2 = data.list[8].weather[0].description
        const temp2 = data.list[8].main.temp;
        const speed2 = data.list[8].wind.speed;
        const humidity2= data.list[8].main.humidity;
        document.querySelector(".date2").innerText = dt_txt2;
        document.querySelector(".icon2").src = "https://openweathermap.org/img/wn/"+icon2 + ".png";
        document.querySelector(".desc2").innerText = "Description: " + description2;
        document.querySelector(".temp2").innerText = "Temp: "+ temp2 + "°F";
        document.querySelector(".wind2").innerText = "Wind Speed: " + speed2 + "MPH";
        document.querySelector(".humidity2").innerText= "Humidity: " + humidity2 + "%";
        console.log(dt_txt2, icon2, temp2, speed2, humidity2);

        // this section gets and displays the weather information for the third day
        const dt_txt3= data.list[16].dt_txt;
        const icon3 = data.list[16].weather[0].icon
        const description3 = data.list[16].weather[0].description
        const temp3 = data.list[16].main.temp;
        const speed3 = data.list[16].wind.speed;
        const humidity3= data.list[16].main.humidity;
        document.querySelector(".date3").innerText = dt_txt3;
        document.querySelector(".icon3").src = "https://openweathermap.org/img/wn/"+icon3 + ".png";
        document.querySelector(".desc3").innerText = "Description: " + description3;
        document.querySelector(".temp3").innerText = "Temp: "+ temp3 + "°F";
        document.querySelector(".wind3").innerText = "Wind Speed: " + speed3 + "MPH";
        document.querySelector(".humidity3").innerText= "Humidity: " + humidity3 + "%";
        
        // this section gets and displays the weather information for the fourth day
        const dt_txt4= data.list[24].dt_txt;
        const icon4 = data.list[24].weather[0].icon
        const description4 = data.list[24].weather[0].description
        const temp4 = data.list[24].main.temp;
        const speed4 = data.list[24].wind.speed;
        const humidity4= data.list[24].main.humidity;
        document.querySelector(".date4").innerText = dt_txt4;
        document.querySelector(".icon4").src = "https://openweathermap.org/img/wn/"+icon4+ ".png";
        document.querySelector(".desc4").innerText = "Description: " + description4;
        document.querySelector(".temp4").innerText = "Temp: "+ temp4 + "°F";
        document.querySelector(".wind4").innerText = "Wind Speed: " + speed4 + "MPH";
        document.querySelector(".humidity4").innerText= "Humidity: " + humidity4 + "%";

        // this section gets and displays the weather information for the fifth day
        const dt_txt5= data.list[32].dt_txt;
        const icon5 = data.list[32].weather[0].icon
        const description5 = data.list[32].weather[0].description
        const temp5 = data.list[32].main.temp;
        const speed5 = data.list[32].wind.speed;
        const humidity5= data.list[32].main.humidity;
        document.querySelector(".date5").innerText = dt_txt5;
        document.querySelector(".icon5").src = "https://openweathermap.org/img/wn/"+icon5+ ".png";
        document.querySelector(".desc5").innerText = "Description: " + description5;
        document.querySelector(".temp5").innerText = "Temp: "+ temp5 + "°F";
        document.querySelector(".wind5").innerText = "Wind Speed: " + speed5 + "MPH";
        document.querySelector(".humidity5").innerText= "Humidity: " + humidity5 + "%";

        // this section gets and displays the weather information for the sixth day
        const dt_txt6= data.list[39].dt_txt;
        const icon6 = data.list[39].weather[0].icon
        const description6 = data.list[39].weather[0].description
        const temp6 = data.list[39].main.temp;
        const speed6 = data.list[39].wind.speed;
        const humidity6= data.list[39].main.humidity;
        document.querySelector(".date6").innerText = dt_txt6;
        document.querySelector(".icon6").src = "https://openweathermap.org/img/wn/"+icon6+ ".png";
        document.querySelector(".desc6").innerText = "Description: " + description6;
        document.querySelector(".temp6").innerText = "Temp: "+ temp6 + "°F";
        document.querySelector(".wind6").innerText = "Wind Speed: " + speed6 + "MPH";
        document.querySelector(".humidity6").innerText= "Humidity: " + humidity6 + "%";

    },
    // will use the value in the search bar as the city parameter
    search: function(){
       
        this.fetchWeather(document.querySelector(".search-bar").value);
        document.querySelector(".pastCity").innerText= JSON.parse(window.localStorage.getItem('location'));
        return;

    },
    // the function will search up the past city
    pastSearch: function(){
        this.fetchWeather(JSON.parse(window.localStorage.getItem('location')));
        
        return;
    },
    
    
};


// activates the weather function by clicking on the search button
const button = ()=>{
   weather.search();
    document.querySelector(".pastCity").innerText= JSON.parse(window.localStorage.getItem('location'));
    
}

const pastButton = ()=>{
    weather.pastSearch();
    
}

// obtains the value in the local storage
const ButtonText= JSON.parse(window.localStorage.getItem('location'))

const placeholder = ()=>{
    console.log("is this working?")
    
    weather.pastSearch();
    
}

// populates the weather function by filling it with all previous searches
placeholder();



