const searchForm = document.getElementById('searchForm');






const getData = async(searchText)=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=2629cb07f801fedceda63abc5f4d1c51`

    await fetch(url)
        .then(weatherData=>{
            console.log(weatherData);
            return weatherData.json();
        })
        .then(parsedData=>{
            console.log(parsedData);
            const cityName=console.log(parsedData.name);
            const currTemp=console.log(parsedData.main.temp-273.15);
            const minTemp=console.log(parsedData.main.temp_min-273.15);
            const maxTemp=console.log(parsedData.main.temp_max-273.15);
            const visibility=console.log(parsedData.visibility/1000);
        })
        .catch(err=>{
            console.log('Error');
            console.log(err);
        })
}



searchForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    const searchText=searchForm.elements[0].value;

    getData(searchText)
} )