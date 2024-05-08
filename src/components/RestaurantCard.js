const RestaurantCard=(props)=>{
   const {resData}=props;
//   console.log(resData.info.sla.deliveryTime)
   // const {name,id,cloudinaryImageId,costForTwo,avgRating,cuisines}=resData;
    return(
       <div className="res-card">
          <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + resData.info.cloudinaryImageId}></img>
          <h3>{resData.info.name}</h3>
          <h4>{resData.info.cuisines}</h4>
          <h4>{resData.info.avgRating} Stars</h4>      
          <h4>{resData.info.costForTwo}</h4>
          <h4>Delivery Time:{resData.info.sla.deliveryTime}</h4>
       </div>
    );
 };
 export default RestaurantCard;