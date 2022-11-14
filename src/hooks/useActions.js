import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import {favouriteActions} from "../store/favouriteSlice";


const actions = {
    ...favouriteActions
}

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(actions, dispatch)
}