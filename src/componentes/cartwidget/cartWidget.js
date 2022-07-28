
import cart from './cart.svg'
function CartWidget(){
    return(
        <div className='carrito'>
            <img src={cart} width="30" height="30" class="d-inline-block align-top" alt=""/>
        </div>
        
    );
}
export default CartWidget