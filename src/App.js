
import './App.css';
import Row from "./Row"
import requests from "./request"

function App() {
  return (
		<div className="App">
			<h1>Nomi.Dev Lets Build A NETFLIX Clone</h1>
			<Row
				title="NETFLIX ORIGNALS"
				fetchUrl={requests.fetchNetflixOrignals}
			/>
			<Row title=" Trending Now" fetchUrl={requests.fetchTrending} />
		</div>
	);
}

export default App;
