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
        // api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
    },
    displayWeather:function(data){
        const { name } = data.city;
        const description1 = data.list[0].weather[0].description
        const icon1 = data.list[0].weather[0].icon;
        const temp1 = data.list[0].main.temp;
        const speed1 = data.list[0].wind.speed;
        const humidity1= data.list[0].main.humidity;
        const dt_txt1 = data.list[0].dt_txt;
        console.log(name,dt_txt1, icon1, description1, temp1, humidity1, speed1);


        document.querySelector(".city").innerText = "Weather in " + name +"("+dt_txt1+")";
        document.querySelector(".iconNow").src = "https://openweathermap.org/img/wn/"+icon1 + ".png";
        document.querySelector(".desc1").innerText = "Description: " + description1;
        document.querySelector(".temp1").innerText = "Temp: "+ temp1 + "°F";
        document.querySelector(".wind1").innerText = "Wind Speed: " + speed1 + "MPH";
        document.querySelector(".humidity1").innerText= "Humidity: " + humidity1 + "%";
        

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

    }
}