import React, {useState} from 'react';
import '../App.css';
import ShoppingCart from './components/shopcart';

const Product = ({products, addCart, Shoppingcart}) => {

    const buttonstyle = { margin: "8px" }
    const [amount, setAmount] = useState(0)
    
    const [infoText,setInfoText]= useState("");
    
    const infoTest = () =>{
    setInfoText("Tuote lisätty ostoskoriin")
    setInterval(() => {
    setInfoText("");
    },3500)
    } 
    const AmountSet = (addition) => {
    if (addition < 0 && amount > 0) {
    setAmount(amount + addition)
    
    } else if (addition >= 0) {
    setAmount(amount + addition)
    } else if (addition = 0) {
    setAmount(amount = 0)
    }
    }



    return (
    <div>
        <table>
            <tr>
            <td width="350px"></td>
            <td width="180px">Nimi</td>
            <td>Hinta</td>
            <td>Määrä</td>
            </tr>
            
            <tr>
            <td><img src={products.pic}/></td>
            <td>{products.title}</td>
            <td>{products.price} €</td>
            <td>{products.amount} <br></br>

            <button style={buttonstyle} onClick={() => AmountSet(-1)}>-</button>
            <button style={buttonstyle} onClick={() => AmountSet(+1)}>+</button>

            <br/>

            <section className="Content" id= "Cart" onClick={this.releaseScroll}>
            <div className="TranspBackground"></div>
            <ShoppingCart items={this.state.cart} lockScroll = {this.lockScroll} notMobile = {this.state.notMobile} checkout= {this.checkout}/> 
            </section>
                        
            
            </td>
            </tr>
        </table>
    </div>
    )
}



const Products1 = ({products, setProds}) => {

    const addCart = (id) => {
        const tempCart = products.map(img => {
            if(products.id === id){
                products = {...products, amount: (products.amount + 1)};
            }
            return img;
        })
        setProds(tempCart);
    }

    return (
        <div className="konsoli">
          {products.map(c => <Product products={c} key={c.id} addCart={addCart}/> )}
        </div>
    )

}

export default Products1;