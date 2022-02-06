import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';

export function Product({ name, type, image, price, _id }) {
    return (
        <div className="product-card">
            <img className="product-img" src={image} alt={name} />
            <h1>{name}
                <IconButton style={{ marginLeft: "auto" }} color="error" >
                    <AddShoppingCartIcon color="primary" />
                </IconButton>
            </h1>
            <h2>Price: {price}/day</h2>
        </div>
    );
}

