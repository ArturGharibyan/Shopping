import { Stack } from 'react-bootstrap';
import { Button } from 'react-bootstrap';
import FormatCurrency from '../../../Cureancy/curency';
import { ShoppingProductPropertyes } from '../../../types/modules';
import { useDispatch } from 'react-redux';
import { removeFavoriteItem } from '../../../ReduxTypeScript/store/action-creators/productcreator';
import { useParams } from 'react-router-dom';

interface Pros {
    item: ShoppingProductPropertyes
}

const MyFavoriteProductItem = ({ item }: Pros) => {
    const dispatch = useDispatch()
    const { userid } = useParams()

    console.log("flacs", item, "userid=>",userid)

    return (
        <div className='MyshopingCardItem'>
            <Stack direction='horizontal' gap={3} className='d-flex align-items-center'>
                <img src={item?.imgUrlArray[0]} style={{ width: "125px", height: "75px", objectFit: "contain" }} />
                <div className='me-auto'>
                    <div className='text-muted' style={{ fontSize: ".75rem" }}>{FormatCurrency(item?.price)}</div>
                    <div className='text-muted' style={{ fontSize: ".75rem" }}>{item?.name}</div>
                </div>
                <Button onClick={() => dispatch(removeFavoriteItem(item.id))} variant="outline-danger" size="sm"> &times;</Button>
            </Stack>
        </div>
    );
};

export default MyFavoriteProductItem;