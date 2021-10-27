import React, { useState } from 'react';

const Sitemap = ({ openSitemap }) => {
	const [expanded, setExpanded] = useState(false);
	const submenu = () => {
		setExpanded(!expanded);
	};

	return (
		<div className='menus'>
			<div className='nav'>
				<div onClick={openSitemap}>
					<img
						className='menu'
						style={{ width: '5em' }}
						src='/assets/Homepage/close.svg'
						alt='menu'
					/>
				</div>
				<div className='logo-menu' style={{ maxWidth: '10em' }}>
					<img src='/assets/Homepage/logo_hoopers.svg' alt='' />
				</div>
			</div>
			<div class='menus-list'>
				<ul>
					<li>
						<a href='/articles'>ARTICLES</a>
					</li>
					<li className='strikeline'>
						<span style={{ color: 'white' }}>ESPORTS</span>
					</li>
					<li onClick={submenu}>COURTS</li>
					{expanded ? (
						<span className='sub-courts'>
							<li>
								<a href='/courts'>OUR COURTS</a>
							</li>
							<li>
								<a href='https://hoopers-map.netlify.app'>MAP</a>
							</li>
						</span>
					) : (
						''
					)}
					<li className='strikeline'>
						<span style={{ color: 'white' }}>SUMMER LEAGUE</span>
					</li>
					<li>
						<a
							href='https://www.youtube.com/channel/UC9majUuTNcytG0nmt_B8Ubg'
							target='_blank'>
							HOOPERS TV
						</a>
					</li>
					<li>
						<a
							href='https://open.spotify.com/show/0hhUbVNzpsyUT7dIlFxL1a?si=ZI7Mk6ebRv6uz0LfLQbnYA'
							target='_blank'>
							PODCAST
						</a>
					</li>
					<li className='strikeline'>
						<span style={{ color: 'white' }}>NFT</span>
					</li>
					<li>
						<a href='https://hoopers.store/' target='_blank'>
							SHOP
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sitemap;
