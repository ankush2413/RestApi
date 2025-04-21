import { useEffect, useState } from "react";
import { refreshAccessToken,verifyToken,getAllProducts } from "./utils/urls";
import { MDBBtn } from 'mdb-react-ui-kit';
import Card from "./common/card";


function Products() {

    const [productData,setProductData] = useState();
    useEffect(() => {
        const init = async () => {
          let accessToken = localStorage.getItem('accessToken');
    
          if (!accessToken) {
            window.location.href = '/login';
            return;
          }
    
          const isTokenValid = await verifyToken(accessToken);
    
          if (!isTokenValid) {
            accessToken = await refreshAccessToken();
            if (!accessToken) {
              localStorage.clear();
              window.location.href = '/login';
              return;
            }
          }
    
          getAllProducts(accessToken)
          .then(response => {
            setProductData(response.data.results);
            console.log("Dataaaa",response);
          })
          .catch(err=>{
            alert("Error Occured, cannot fetch all products");
          })
        }
    
        init();
      }, []);

      return(
        <>
            <div>
                <div style={{ textAlign: 'center', marginTop: '30px', marginBottom: '20px' }}>
                <MDBBtn>Create New Product</MDBBtn>
                </div>
                <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    gap: '20px',
                    padding: '20px',
                }}
                >
                {productData?.length ===0 ? <p>No Products Found</p>:
               
                productData?.map((product)=>(
                    <Card
                     title={product.title}
                     content={product.content}
                     price={product.price}
                     sale_price={product.sale_price}
                    />
                ))
                }
            </div>
            </div>
        </>
      )

}

export default Products;