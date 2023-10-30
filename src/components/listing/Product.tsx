import "./css/main.css";

const currencyFunc = (currency_code: string, price: number) => {
  if (currency_code === "USD") {
    return `$${price}`;
  } else if (currency_code === "EUR") {
    return `€${price}`;
  } else {
    return `${price} GBP`;
  }
};

const quantityFunc = (quantity: number) => {
  if (quantity < 10) {
    return "low";
  } else if (quantity < 20) {
    return "medium";
  } else {
    return "high";
  }
};

export const Product = ({ el }: any) => {
  if (typeof el.title === "undefined") {
    return;
  } else {
    return (
      <div className="item" key={el.listing_id}>
        <div className="item-image">
          <a href={el.url}>
            <img src={el.MainImage.url_570xN} />
          </a>
        </div>
        <div className="item-details">
          <p className="item-title">
            {el.title.length <= 50 ? el.title : el.title.slice(0, 50) + "..."}
          </p>
          <p className="item-price">
            {currencyFunc(el.currency_code, el.price)}
          </p>
          <p className={`item-quantity level-${quantityFunc(el.quantity)}`}>
            {el.quantity}
          </p>
        </div>
      </div>
    );
  }
};
