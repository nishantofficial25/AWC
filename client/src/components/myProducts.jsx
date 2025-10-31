import Cards from "./cards";
import SortFilter from "./filter";

function Myproducts(props) {
  return (
    <><h1 className="dashboard-title">My Products</h1>
      <div className="main-content">
        {/* <div className="sortFilter" style={{ width: "100%", margin: "0" }}>
          <SortFilter></SortFilter>
        </div> */}
        
        {/* <!-- Products Area --> */}
        <Cards search={props.search} myprod={true}></Cards>
      </div>
    </>
  );
}

export default Myproducts;
