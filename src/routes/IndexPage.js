import React from 'react';
import dva, { connect } from 'dva';
import styles from './IndexPage.css';
import request from  '../utils/request';

@connect(({input }) => ({
  input
}))
class IndexPage extends React.Component {
  constructor(){
    super();
    this.state={
        val:"",
        arr:[],
        index:-1
    }
  }

  handleChange = (e)=>{
    const result=this.refs.input.value;
    this.props.dispatch({
      type:'input/fetch',
      payload:result,
    })
  }


  componentDidMount(){
    console.log(this.props)
    this.refs.input.focus();
  }

  handleMouseEnter=(key,item,event)=>{
    this.setState({index:key,val:item[0]});
    this.refs.input.value = item[0];
  }

  handleClick =(e)=>{
  this.refs.input.innerHTML=e.target.value;
  // window.open()
  }

  render(){
    const {data}=this.props.input;
    return (
      <div className={styles.normal}>
        <input 
            type="text" 
            ref='input' 
            defaultValue={this.state.val} 
            onChange={this.handleChange}
            className={styles.formControl} 
        />
        <button className={styles.formControl}>搜索</button>
        <ul className={styles.listGroup}>
            {data && data.map((item,key)=>{
                return  <li 
                    onClick={(e)=>this.handleClick(e)} 
                    onMouseEnter={(event)=>this.handleMouseEnter(key,item,event)} 
                    className={key===this.state.index ? `${styles.listitem} ${styles.active}` :`${styles.listitem}`} 
                    key={key}
                >
                    {item[0]}
                </li>
            })}
        </ul>
      </div>
    );
  }
}

IndexPage.propTypes = {
};

export default  IndexPage;
