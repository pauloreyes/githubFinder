import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/layouts/Footer";
import Navbar from "./components/layouts/Navbar";
import About from "./pages/About";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { GithubProvider } from "./contexts/github/GithubContexts";
import { AlertProvider } from "./contexts/alert/AlertContexts";
import Alert from "./components/layouts/Alert";
import User from "./pages/User";

function App() {
	return (
		<GithubProvider>
			<AlertProvider>
				<Router>
					<div className='flex flex-col justify-between h-screen'>
						<Navbar />
						<main className='container mx-auto px-3 pb-12'>
							<Alert />
							<Routes>
								<Route path='/' element={<Home />} />
								<Route path='/about' element={<About />} />
								<Route path='/notfound' element={<NotFound />} />
								<Route path='/user/:login' element={<User />} />
								<Route path='/*' element={<NotFound />} />
							</Routes>
						</main>
						<Footer />
					</div>
				</Router>
			</AlertProvider>
		</GithubProvider>
	);
}

export default App;
