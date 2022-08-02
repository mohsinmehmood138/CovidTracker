import {CovidDetail} from "./Coviddetail"
import {BrowserRouter , Routes,Route}  from "react-router-dom";
import {CountryDetails} from "./Details"


export function App(){
    
return <>
<BrowserRouter>
<Routes>
<Route path="/" element={<CovidDetail></CovidDetail>} />
<Route path="details" element={<CountryDetails/>} />
</Routes>
</BrowserRouter>
    
   

</>
}