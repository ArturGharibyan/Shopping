import Category from "./Category/Category";
import Price from "./Price/Price";
import "./Sidebar.css";
import { Interface } from "readline";
import Cartcontainer from "../Cart/Cartcontainer";
import Card from "../Cart/Card";

interface Sidebarprops {
  onchange:(event:any)=>any
}

const Sidebar = () => {
  return (
    <>
      <section className="sidebar">
        <div className="logo-container">
          <h1>🛒</h1>
        </div>
        <Category />
        <Price />
      </section>
    </>
  );
};

export default Sidebar;
