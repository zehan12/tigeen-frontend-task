import { legacy_createStore as createStore} from 'redux';
import Reducers from '../store/reducer'

export const store = createStore(Reducers);