import { 
    SevereColdRounded,
    AcUnitRounded,
    WbSunnyRounded,
    LocalFireDepartmentRounded,
    WbCloudyRounded,
    WaterDropRounded,
    ThunderstormRounded,
    AirRounded,
} from '@mui/icons-material';

// Controls font size output of icons
const fontSizePx = 32;

// Controls custom classes for icons
const customClasses = "";

export const WeatherIconPicker = (summary: String) => {
    if(summary == "Freezing") return ( <SevereColdRounded className={customClasses} sx={{ fontSize: fontSizePx }}/> ); 
    if(summary == "Cold") return ( <AcUnitRounded className={customClasses} sx={{ fontSize: fontSizePx }}/> );
    if(summary == "Sunny") return ( <WbSunnyRounded className={customClasses} sx={{ fontSize: fontSizePx }}/> ); 
    if(summary == "Cloudy") return ( <WbCloudyRounded className={customClasses} sx={{ fontSize: fontSizePx }}/> ); 
    if(summary == "Rainy") return ( <WaterDropRounded className={customClasses} sx={{ fontSize: fontSizePx }}/> ); 
    if(summary == "Stormy") return ( <ThunderstormRounded className={customClasses} sx={{ fontSize: fontSizePx }}/> );
    if(summary == "Windy") return ( <AirRounded className={customClasses} sx={{ fontSize: fontSizePx }}/> ); 
    if(summary == "Scorching") return ( <LocalFireDepartmentRounded className={customClasses} sx={{ fontSize: fontSizePx }}/> ); 
}
