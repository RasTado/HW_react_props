import { ListPr } from "./models/listing.models";
import { Product } from "./Product";
import "./css/main.css";

export const Listing = ({ data }: ListPr) => {
  return (
    <div className="item-list">
      {data.map((el) => (
        <Product el={el} />
      ))}
    </div>
  );
};
