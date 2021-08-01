import { Switch, Route } from 'react-router-dom';
import HeroForm from '../components/HeroForm/HeroForm';
import HeroList from '../components/HeroList/HeroList';

function Routes () {
  return (
    <Switch>
      <Route exact path='/' component={HeroList} />
      <Route path='/add' component={HeroForm} />

      <Route path='*' component={HeroForm} />
    </Switch>
  );
}
export default Routes;