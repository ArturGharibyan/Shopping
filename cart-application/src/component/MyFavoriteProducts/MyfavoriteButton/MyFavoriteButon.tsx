import { useParams } from "react-router-dom";


interface Proptypes {
    onClickLike: (id: any, isFollow: any) => void
    onClickDisLike: (id: any, isFollow: any) => void
    propes: any
    cartitems: any
}


const MyFavoriteButon = ({ onClickLike, onClickDisLike, propes, cartitems }: Proptypes) => {
const { id,userid } = useParams()
const item = cartitems.favoritecartitemsAray.find((item: any) =>  item.userId==userid && item.isFollow && item?.id==id )

    return (
        <>

            {
                item?.isFollow === true && item?.userId==userid ? <img onClick={() => onClickDisLike(propes?.id, propes?.isFollow)} src={"http://localhost:3000/svg/Instagram-Like-Icon-03brf3.png"} /> : <img onClick={() => onClickLike(propes?.id, propes?.isFollow)} src={"http://localhost:3000/svg/like-106.png"} />

            }
            Favorite
        </>
    );
};

export default MyFavoriteButon;


