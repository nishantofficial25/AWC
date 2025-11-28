import Cards from "./cards";

function Myproducts(props) {
  const styles = {
    container: {
      padding:"1rem"
    },
  };
  return (
    <>
      <div style={styles.container}>
        <h2>My Products</h2><Cards search={props.search} myprod={true}></Cards>
      </div>
      
    </>
  );
}

export default Myproducts;
