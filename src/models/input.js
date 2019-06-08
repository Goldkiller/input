// import $ from 'jquery';
import {query2} from '../services/example'

export default {

  namespace: 'input',

  state: {
    data:[]
  },

  subscriptions: {
    setup({ dispatch, history}){
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      const res=yield call(query2,{ payload });
    yield put({type:'save',payload:{ res}});
    },
  },

  reducers: {
    save(state, {payload}) {
      return { ...state,
          data:payload.res.data.result };
    },
  },

};

