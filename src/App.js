import "./App.css";
// import Row from "./components/Row/Row";
import requests from "./request";
// import Banner from "./components/Banner/Banner";
import { Row, Banner, Navbar} from "./components"

function App() {
	return (
		<div className="App">
			
			<Navbar/>
			<Banner/>
			<Row title="NETFLIX ORIGNALS" fetchUrl={requests.fetchNetflixOrignals} isLargeRow />
			<Row title=" Trending Now" fetchUrl={requests.fetchTrending} />
			<Row title=" Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row title=" Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row title=" Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row title=" Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row title=" Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row
				title=" Documentaries"
				fetchUrl={requests.fetchDocumentariesMovies}
			/>
		</div>
	);
}

export default App;
