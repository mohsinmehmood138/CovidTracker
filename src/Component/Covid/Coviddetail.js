import {CovidNav} from "./CovidNavbar";
import {CovidBody} from "./CovidBody"
import { useState } from "react";


export function CovidDetail(){
    let [mycity,setmycity]=useState('')

    return <>
        <CovidNav setmycity={setmycity} mycity={mycity}/>
    <CovidBody  mycity={mycity}/>
    </>
}