import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Error from './componentes/Error';
import NewPirate from './componentes/NewPirate';
import AllPirates from './componentes/AllPirates';
import ViewPirate from './componentes/ViewPirate';


const App = () => {
  return(
    <div className="container">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact render={()=><AllPirates />} />
          <Route path="/nuevo" render={()=><NewPirate />} />
          <Route path="/view/:id" render={()=><ViewPirate />} />
          <Route path="/error" render={()=><Error />} />
          <Route path="*" render={() => <Error /> } />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;
