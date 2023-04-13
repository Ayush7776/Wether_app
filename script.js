const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fdd3d49b77msh4b239a855034831p145b95jsn6cea637fe820',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};
const getWether=(city)=>{

fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
	.then(response => response.json())
	.then((response) => {
		cityName.innerHTML=city
		console.log(response)
		// cloud_pct.innerHTML = response.cloud_pct
		temp.innerHTML = response.temp
		feels_like.innerHTML = response.feels_like
		humidity.innerHTML = response.humidity
		min_temp.innerHTML = response.min_temp
		max_temp.innerHTML = response.max_temp
		wind_speed.innerHTML = response.wind_speed
		wind_degrees.innerHTML = response.wind_degrees

		// Calculating Sunrice Value
		let unixsunrice=response.sunrise;
        const dsunrice=new Date(unixsunrice*1000);
		var a= dsunrice.toLocaleTimeString()
		sunrise.innerHTML = a;
        
		// Calculating Sunset Value

		let unixsunset=response.sunset;
        const dsunset=new Date(unixsunset*1000);
		var b= dsunset.toLocaleTimeString()
		sunset.innerHTML = b;
    

	})
	.catch(err => console.error(err))
}
submit.addEventListener("click",(e)=>{
	e.preventDefault()
	getWether(city.value)
})
getWether("Chalisgaon")
