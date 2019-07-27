import React from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import InstitutionManagement from '../institution-management/institution-management'
import UserManagement from '../user-management/user-management'
import RoleManagement from '../role-management/role-management'
import RoleAuthorityAllocation from '../role-authority-allocation/role-authority-allocation'
import DiaryManagementLogin from '../diary-management-login/diary-management-login'
import DiaryManagementDo from '../diary-management-do/diary-management-do'
import HomePage from '../homePage/homePage'


export default class Right extends React.Component{
  render(){
    return(
      <div className="rightDiv">
        <Switch>
          <Route path='/institution-management' component={InstitutionManagement}/>
          <Route path='/user-management' component={UserManagement}/>
          <Route path='/role-management' component={RoleManagement}/>
          <Route path='/role-authority-allocation' component={RoleAuthorityAllocation}/>
          <Route path='/diary-management-login' component={DiaryManagementLogin}/>
          <Route path='/diary-management-do' component={DiaryManagementDo}/>
          <Redirect to='/homePage'/>
        </Switch>
      </div>

    )
  }
}
// class Right extends React.Component {
//     render() {
//         const data = [{
//             path: '/institution-management',
//             component: InstitutionManagement
//         },{
//             path: '/user-management',
//             component: UserManagement
//         },{
//             path: '/role-management',
//             component: RoleManagement
//         },{
//             path: '/role-authority-allocation',
//             component: RoleAuthorityAllocation
//         },{
//             path: '/test11',
//             component: Test11
//         },{
//             path: '/homePage',
//             component: HomePage
//         }]
//         return (
//             <div className="rightDiv">
//                 <Switch>
//                     <Route exact path="/home"/>
//                     {
//                         data.map(e => {
//                             return (
//                                 <Route key={e.path} path={e.path} component={e.component}></Route>
//                             )
//                         })
//                     }
//                 </Switch>
//             </div>
//         )
//     }
// }
//
// export default Right;