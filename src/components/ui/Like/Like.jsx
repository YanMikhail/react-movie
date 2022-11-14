import s from './Like.module.css'


const Like = ({clickHandler, img}) => {
    return (
        <>
            <button className={s.like} onClick={clickHandler}>
                <img
                    className={s.img}
                    src={img}
                    alt="Like"
                />
            </button>
        </>
    );
};

export default Like;