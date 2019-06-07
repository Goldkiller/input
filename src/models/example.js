
export default {

  namespace: 'input',

  state: {
    data:'1'
  },

  subscriptions: {
    setup({ dispatch, history}){
    }
  },

  effects: {
    *fetch({ payload }, { call, put }) {
      debugger
      $.ajax({
      dataType: "jsonp",
      url:`https://suggest.taobao.com/sug?code=utf-8&q=${payload}&_ksTS=1559839722486_838&callback=jsonp839&k=1&area=c2c&bucketid=11`,
      success:data =>{
      return data
      },
    })
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, {payload}) {
      return { ...state,  data:payload };
    },
  },

};
