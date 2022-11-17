import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import PlaceToStay from './pages/placetostay/placetostay';
import NFTs from './pages/NFTs/nft';
import Community from './pages/community/community';

const App = () => {
	return (
		<div className="app">
			<Routes>
				<Route path="/Home" element={<Home />} />
				<Route path="/placetostay" element={<PlaceToStay/>} />
				<Route path="/NFTs" element={<NFTs/>} />
				<Route path="/community" element={<Community/>} />
			</Routes>
		</div>
	);
};

export default App;

