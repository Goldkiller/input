import request from '../utils/request';
import $ from 'jquery';

export function query() {
  return  $.ajax({
      dataType: "jsonp",
      url:`https://suggest.taobao.com/sug?code=utf-8&q=${result}&_ksTS=1559839722486_838&callback=jsonp839&k=1&area=c2c&bucketid=11`,
      success:data =>{
        this.setState({
          arr:data.result    
      })
      },
    })
}
