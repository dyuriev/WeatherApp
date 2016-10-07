import React  from 'react';
import ReactDOM  from 'react-dom';
import {Route, Router, IndexRoute, hashHistory, useRouterHistory} from 'react-router';
import {createHashHistory} from 'history';
import Main from 'Main';
import Weather  from 'Weather';
import About from 'About';
import Examples from 'Examples';

const appHistory = useRouterHistory(createHashHistory)({
  queryKey: false
});

require('style!css!foundation-sites/dist/foundation.min.css');
require('style!css!sass!applicationStyles');
$(document).foundation();

ReactDOM.render(
  <Router history={appHistory}>
    <Route path="/" component={Main}>
      <Route path="about" component={About}/>
      <Route path="examples" component={Examples}/>
      <IndexRoute component={Weather}/>
    </Route>
  </Router>,
  document.getElementById('app')
);
