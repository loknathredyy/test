
import './App.css';
import { Doughnut1 } from './Doughnut';
import { StackedChart } from './StackedChart';
import WordCloud1 from './WordCloud';


function App() {
  return (
    <div className="App">
      Doughnut
      <Doughnut1/>
      {/* <StackedChart/> */}
      <WordCloud1/>
    </div>
  );
}

export default App;
