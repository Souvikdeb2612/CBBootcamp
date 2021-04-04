const searchForm = document.getElementById('searchForm');
const display=document.getElementsByClassName('display');
const error=document.getElementsByClassName('error');
const input = document.getElementById('search');
const city_name=document.querySelector('.name');
const curr_temp=document.querySelector('.temp');
const min_temp=document.querySelector('.minTemp');
const max_temp=document.querySelector('.maxTemp');
const vis=document.querySelector('.visibility');







const getData = async(searchText)=>{
    const url =`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=2629cb07f801fedceda63abc5f4d1c51`

    await fetch(url)
        .then(weatherData=>{
            console.log(weatherData);
            return weatherData.json();
        })
        .then(parsedData=>{
            console.log(parsedData);
            const cityName=parsedData.name;
            

            if(cityName===undefined){
                city_name.innerHTML='City Not Found';
                curr_temp.innerHTML='';
                min_temp.innerHTML='';
                max_temp.innerHTML='';
                vis.innerHTML='';
            }
            else{
                city_name.innerHTML=cityName;
                const currTemp=(parsedData.main.temp-273.15).toFixed(2);
                const minTemp=(parsedData.main.temp_min-273.15).toFixed(2);
                const maxTemp=(parsedData.main.temp_max-273.15).toFixed(2);
                const visibility=parsedData.visibility/1000;
                curr_temp.innerHTML=`Current Temperature : ${currTemp}&#176; C`;
                min_temp.innerHTML=`Min Temperature : ${minTemp}&#176; C`;
                max_temp.innerHTML=`Max Temperature : ${maxTemp}&#176; C`;
                vis.innerHTML=`Visibility : ${visibility}KM`;
            }
            
            
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
    input.value=" ";
} )

