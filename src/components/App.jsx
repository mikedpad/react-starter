import { Helmet } from 'react-helmet';
import GlobalCssStyle from '../styles/globalStyles';

const App = () => (
  <>
    <GlobalCssStyle />
    <Helmet>
      <title>React Starter</title>
    </Helmet>
    <header>Header content</header>
    <main>Main content</main>
    <footer>Footer content</footer>
  </>
);

export default App;
