export default function Product({url,title,rating,price}){
    return(
        <div className="product">
            <div className="product-image">
                <img className="" src={url} alt={title}/>
            </div>
            <div className="title-container">
                <h3><a href="#">{title}</a></h3>
            </div>
            <div className="rating-container">
                <p className="rating">{rating} ★ ★ ★ ★</p>
                <p className="price">${price}</p> 
            </div>
            <div className="cta-container">
                <button>Add to cart</button>
                <button>Buy Now</button>
            </div>
        </div>
    )
}