import React from 'react';
import {withRouter} from 'react-router-dom';
import { Divider, Button } from 'antd';
import './UserInfo.scss';
import AvatarMaleSvg from '../../assets/AvatarMale.svg';


const UserInfo = props => {
  const {user} = props
  const logOut = () => {
      localStorage.removeItem("token");
      props.history.push('/login');
  }
  
  return (
      <div className="user">
        <div className="user-top">
            <div>
                <h1>Hello,</h1>
                <h1 className='user-top__username'>{user.username}</h1>
            </div>
            <div className="user-top__image">
                <img src={AvatarMaleSvg} alt=""/>
            </div>
        </div>
        <Divider  />
        <div className="user-bottom">
            <div className="user-bottom__first">
                <div>
                    <p>Всего задач</p>
                    <h2>192</h2>
                </div>
                <div>
                    <p>Завершено</p>
                    <h2>92</h2>
                </div>
            </div>
            <div className="user-bottom__second">
                <div>
                    <p>В процессе</p>
                    <h2>90</h2>
                </div>
                <div>
                    <p>Проавлено</p>
                    <h2>10</h2>
                </div>
            </div>
        </div>
        <div className="user-exit">
            <Button onClick={logOut} 
            shape='round' 
            block
            >
                Выйти
            </Button>
        </div>
      </div>
  )
}
 
export default withRouter(UserInfo);
 