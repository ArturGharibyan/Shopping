import { Link, useParams } from "react-router-dom";
import "./gamecontrpileritems.css"
import { Products } from "../../../types/modules";
import { useTypedSelector } from "../../../ReduxTypeScript/hooks/useTypedSelector";

interface GameGontroilerProps {
    props?: Products
    onChanger: (index: any, id: any) => void
    image: any
    items: any
}

const Gamecontroileritems = ({ props, items, onChanger }: GameGontroilerProps) => {
    const params = useParams()
    const { user } = useTypedSelector(state => state.user)
    const userId = user.find((user: any) => user.id == params.id)

    return (

        <div className="gamecontroileritem" >
        <div className="gameitemImagesChildren">
        <img className="gameimgs" src={items} onMouseOver={() => onChanger(items,props?.id)} />
        </div>
    </div>
    );
};

export default Gamecontroileritems;