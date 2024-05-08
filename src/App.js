import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";

const AppComponent=()=>{
   return(
      <div className="app">
         <Header/>
         {/* {console.log(mockData.URL)} */}
         <Body/>
       
      </div>
   );
};


const root=ReactDOM.createRoot(document.querySelector("#root"));
root.render(<AppComponent/>)
