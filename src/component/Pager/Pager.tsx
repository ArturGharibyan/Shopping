import { useNavigate, useParams } from "react-router-dom"
import { useTypedSelector } from "../../ReduxTypeScript/hooks/useTypedSelector";
import "./pager.css"
import { Category } from "@mui/icons-material";


const Pager = () => {
  const { id } = useParams()
  const { user } = useTypedSelector(state => state.user)
  const userId = user.find((user: any) => user.id == id)
  const navigate = useNavigate()
  const paramsPathname = window.parent.location.pathname.replace(/[0-9/]/ig, "")


  return (
    <>
      <nav className="navbar navbar-light bg-gray">
        <div className="container">
          <a onClick={() => navigate("/" + userId.id)} className="navbar-brand" >
            <img src={"http://localhost:3000/svg/iconmonstr-arrow-right-thin-241.png"} alt="" width="30" height="24" />
          </a>
          <ul className="nav justify-content-center">
            <li className="nav-item">
              <h3 className="nav-link  active searchHeader" aria-current="page" >{paramsPathname}</h3>
            </li>
          </ul>
          <ul className="nav justify-content-center">
            <li className="nav-item">
          </li>
        </ul>
      </div>

    </nav >

    </>
  );
};

export default Pager;