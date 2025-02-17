import React, { useState } from "react";

const Sitemap = ({ openSitemap }) => {
	const [expanded, setExpanded] = useState(false);
	const submenu = () => {
		setExpanded(!expanded);
	};

	return (
		<div className="menus">
			<div className="nav">
				<div className="menu" onClick={openSitemap}>
					<img
						src="/assets/Homepage/close.svg"
						alt="menu"
						className="menu-close"
					/>
				</div>
				<div className="logo-menu" style={{ maxWidth: "100%" }}>
					<img src="/assets/Homepage/hoopers_club_logo.svg" alt="" />
				</div>
			</div>
			<div class="menus-list">
				<ul>
					<li>
						<a href="/courts">
							OUR <span className="notranslate">COURTS</span>
						</a>
					</li>
					<li>
						<a href="/articles">ARTICLES</a>
					</li>
					<li>
						<a href="https://map.hoopers.club">HOOPERS MAP</a>
					</li>
					<li className="notranslate">
						<a href="/summerleague">SUMMER LEAGUE</a>
					</li>
					

					{/*
					<li>
						<a href="/esports" className="notranslate">
							ESPORTS
						</a>
					</li>
					
					<li className='notranslate' onClick={submenu}>
						COURTS
					</li>
					{expanded ? (
						<span className='sub-courts'>
							<li>
								<li>
						<a href='/courts'>OUR <span className="notranslate">COURTS</span></a>
					</li>
							</li>
							<li>
								<a href='https://map.hoopers.club'>
									MAP
								</a>
							</li>
						</span>
					) : (
						''
					)}
					
					<li className="notranslate">
						<a
							href="https://www.youtube.com/channel/UC9majUuTNcytG0nmt_B8Ubg"
							target="_blank"
						>
							HOOPERS TV
						</a>
					</li>*/}
					<li>
						<a
							href="https://open.spotify.com/show/0hhUbVNzpsyUT7dIlFxL1a?si=ZI7Mk6ebRv6uz0LfLQbnYA"
							target="_blank"
						>
							PODCAST
						</a>
					</li>
					{/*<li>
						<a
							href="https://try.hoopers.club/hoopers-nft-web-summit-campaign/"
							target="_blank"
						>
							NFT | WEBSUMMIT
						</a>
				</li>*/}
					<li>
						<a href="/nft" className="notranslate">
							NFT
						</a>
					</li>
					<li>
						<a href="https://hoopers.store/" target="_blank">
							SHOP
						</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Sitemap;
