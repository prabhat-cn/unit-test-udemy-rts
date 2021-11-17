import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { RootState } from '../reducers/index';

// export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
