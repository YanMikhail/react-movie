import heart from '../../../assets/images/heart.png';
import redHeart from '../../../assets/images/red-heart.png';
import s from './Like.module.css'
import {useDispatch} from "react-redux";
import {addFavourite} from "../../../store/favouriteSlice";

const Like = ({id}) => {
    const dispatch = useDispatch()
    const addToFavourite = (event) => {
        event.preventDefault()
        dispatch(addFavourite(id))
    }
    return (
        <button className={s.like} onClick={addToFavourite}>
            <img
                className={s.img}
                src={heart}
                alt="Like"
            />
        </button>
    );
};

export default Like;