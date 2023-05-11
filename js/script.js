const API_KEY = `07d3d2cae37e90bfc943edede6e79214
`
const loadCurrenData = city => {
   const url =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
   fetch(url)
   .then(res => res.json())
   .then(data => displayTaperature(data))
}
const displayTaperature = data => {
   // const temparature =document.getElementById('temperature');
   // temparature.innerText = data.main.temp
   // console.log(data.weather[0].main)
   setTempracherById('temperature',data.main.temp);
   setTempracherById('contain',data.weather[0].main);
}
const setTempracherById =(id ,text)=>{
   const temparature =document.getElementById(id);
   temparature.innerText = text;
}
document.getElementById('btn-search').addEventListener('click',function(){
   const searchContainer =document.getElementById('search-field');
   const city = searchContainer.value;
   document.getElementById('city').innerText = city;
   loadCurrenData(city)
})
loadCurrenData('Dhaka');