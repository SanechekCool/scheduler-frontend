import React from 'react'
import { Navbar, Collections, UserInfo, Tasks } from '../../components/index';
import { useQuery } from '@apollo/react-hooks';
import { LoadingOutlined } from '@ant-design/icons';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import './Home.scss';
import { GET_USER } from '../../utils/graphql';


const Home = props => {
  if (!localStorage.getItem("token")) {
    props.history.push('/login');
  }
  
  const { loading, error, data } = useQuery(GET_USER);

  if (error) {
    localStorage.removeItem("token");
    localStorage.removeItem("USER_ID");
    props.history.push('/login');
  
  }

  return (
    <div className='home' >
    
      <div className="home-main">
        {loading ? (
            <LoadingOutlined style={{ fontSize: 40 }} spin />
        ) : (
          <Switch>
            <Route
                exact
                path='/'
                render={() => <Collections />}
            />
            <Route
                path='/collections/:id'
                component={Tasks}
            />
          </Switch>
        )}
      </div>
      <div className="home-user">
        {!loading && data && <UserInfo user={data.me} />}
      </div>
    </div>
  )
}
 
export default withRouter(Home);
 