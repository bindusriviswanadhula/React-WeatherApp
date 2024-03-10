import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';

import "./InfoBox.css";

export default function InfoBox({info}){
    const INIT_URL = "https://images.unsplash.com/photo-1442473483905-95eb436675f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHVzdHl8ZW58MHx8MHx8fDA%3D";

   const HOT_URL ="https://images.unsplash.com/photo-1604228741406-3faa38f4907a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c3Vubnl8ZW58MHx8MHx8fDA%3D";
   const RAIN_URL = "https://media.istockphoto.com/id/1257951336/photo/transparent-umbrella-under-rain-against-water-drops-splash-background-rainy-weather-concept.webp?b=1&s=170667a&w=0&k=20&c=7nD_8127UoUACRboJelDa-h-g0afqyRP9h8jtJ5xvUo=";
   const COLD_URL ="https://images.unsplash.com/photo-1414541944151-2f3ec1cfd87d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fHNub3d8ZW58MHx8MHx8fDA%3D";

    
    return(
    <div className='InfoBox'>
        <div className='cardContainer'>


     <Card sx={{ maxWidth: 345 }}>
      <CardMedia sx={{ height: 140 }} image={info.humidity > 80 ? RAIN_URL : info.temp > 15 ? HOT_URL : COLD_URL } title="green iguana"/>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}  {info.humidity > 80 ? <ThunderstormIcon /> : info.temp > 15 ? <WbSunnyIcon/> : <AcUnitIcon/>}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
        <p>Temperature = {info.temp}&deg;C</p>
        <p>Humidity = {info.humidity}</p>
        <p>Min Temp = {info.tempMin}&deg;C</p>
        <p>Max Temp = {info.tempMax}&deg;C</p>
        <p>
            The weather can be described as {info.weather} and feels like {info.feelslike}&deg;C
        </p>


          
        </Typography>
      </CardContent>
      
    </Card>
    </div>
    




    </div>

    
    
    
    )
}