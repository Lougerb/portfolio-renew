// Layout
import Nav from "./Project/Layout/Nav/Nav";
import Header from "./Project/Layout/Header/Header";
import Footer from "./Project/Layout/Footer/Footer";
// Content
import Home from "./Project/Pages/Home/Home";
import NotFound from "./Project/Pages/NotFound/NotFound";
// css
import "bootstrap/dist/css/bootstrap.min.css";
import favico from "./Project/Components/img/favico.png";

// Packages
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Helmet, HelmetProvider } from "react-helmet-async";
import "./App.scss";
import "sanitize.css";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Home />,
	},
	{
		path: "*",
		element: <NotFound />,
	},
]);

const siteName = "Louein's Portfolio";
const siteDesc = "I am a Front-End Developer";
const siteKeywords = "Sample Keywords";
const siteType = "Sample Type";

function App() {
	return (
		<div className="App">
			{/* Head */}
			<HelmetProvider>
				<Helmet>
					{/* Meta Tags */}
					<meta charset="UTF-8" />
					<meta name="viewport" content="width=device-width" />
					<title>{siteName}</title>
					<link rel="icon" href={favico} />
					<meta name="description" content={siteDesc} />
					<meta name="keywords" content={siteKeywords} />
					<meta http-equiv="X-UA-Compatible" content="IE=edge" />

					<meta property="og:title" content={siteName} />
					<meta property="og:type" content={siteType} />
					<meta property="og:description" content={siteDesc} />
					<meta property="og:site_name" content={siteName} />
				</Helmet>
			</HelmetProvider>

			{/* <Header /> */}
			{/* <Nav /> */}

			<div className="main">
				<RouterProvider router={router} />
			</div>

			{/* <Footer /> */}
		</div>
	);
}

export default App;
