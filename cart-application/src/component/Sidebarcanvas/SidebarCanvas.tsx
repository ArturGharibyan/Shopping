import Category from "./Categorycanvas/CategoryCanvas";
import Price from "./Pricecanvas/PriceCanvas";
import "./Sidebarcanvas.css";
import { Interface } from "readline";
import Cartcontainer from "../Cart/Cartcontainer";
import Card from "../Cart/Card";


const SidebarCanvas = () => {
  return (
    <>
      <section className="sidebars">
        <div className="logo-containers">
          <h1>🛒</h1>
        </div>
        <Category />
        <Price />
      </section>
    </>
  );
};

export default SidebarCanvas;
