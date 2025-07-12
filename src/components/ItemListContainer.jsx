import '../css/ItemListContainer.css';

const ItemListContainer = ({greeting}) => {
    return(
        <div className="div-greeting">
            <h1 className="h1-greeting">{greeting}</h1>
        </div>
    )
}

export default ItemListContainer