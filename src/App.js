import React, { Component } from 'react';
import { Route, Switch} from 'react-router-dom';

import Login from './pages/login/Login.jsx';
import Index from './pages/index.js';
import Home from './pages/home/home.jsx'
import Buttons from './pages/ui/Buttons.jsx';
import Modals from './pages/ui/Modal.jsx';
import Notifications from './pages/ui/Notifications.jsx';
import Messages from './pages/ui/Messages.jsx';
import TabsCustom from './pages/ui/Tabs.jsx';
import Banners from './pages/ui/Banners.jsx'
import FormLogin from './pages/form/FormLogin.jsx';
import FormRegister from './pages/form/FormRegister.jsx';
import BasicTables from './pages/table/index.jsx'
import AdvancedTables from './pages/table/AdvancedTables.jsx';
import LineCharts from './pages/charts/lines/index.jsx';
import BarCharts from './pages/charts/bars/index.jsx';
import ChinaMap from './pages/charts/ChinaMap.jsx'
class App extends Component {
  render() {
    return (
		<Switch>
			<Route exact path="/" component={Login}/>
			<Route path="/" render={(props)=>(
				<Index {...props}>
					<Route exact path="/home" component={Home}/>
					<Route path='/ui/buttons' component={Buttons}/>
					<Route path='/ui/modals' component={Modals}/>
					<Route path='/ui/notifications' component={Notifications}/>
					<Route path='/ui/messages' component={Messages}/>
					<Route path='/ui/tabs' component={TabsCustom}/>
					<Route path='/ui/carousel' component={Banners}/>
					<Route path='/form/login' component={FormLogin}/>
					<Route path='/form/register' component={FormRegister}/>
					<Route path='/table/basic' component={BasicTables}/>
					<Route path='/table/advancedTable' component={AdvancedTables}/>
					<Route path='/charts/line' component={LineCharts}/>
					<Route path='/charts/bar' component={BarCharts} />
					<Route path='/charts/map' component={ChinaMap} />
				</Index>
				
			)} />
			
		</Switch> 
    );
  }
}

export default App;