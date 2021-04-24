import {createStore} from 'redux';
import Counter from '../reducers/Counter';

const store = createStore(Counter);
export default store;