import React,{useState,useEffect, Fragment, Suspense} from "react";
import Footer from "../components/common/footer";
import Loading from "../components/common/Loading";
import EventsCover from "../components/events-page/cover";
import Events from "../components/events-page/Events";
import Header from "../Header";

const url='https://course-api.com/react-tours-project';

function AllEvents(){

    const [tours,setTours]= useState([]);
    const fetchTours= async () =>{
        try {
        const response=await fetch(url);
        const tours= await response.json();
        setTours(tours);
            
        } catch (error) {
            console.log(`error: ${error}`);
        }

    };
    useEffect(()=>{
        fetchTours();
    },[]);

    return (
        
           <Fragment>
           <Suspense fallback={<Loading />}>
            <Header />
            <EventsCover />
            <Events events={tours} />
           <Footer />
           </ Suspense>
           </Fragment >
        
    );
}

export default AllEvents;