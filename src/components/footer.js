import React from 'react'
import Img from 'gatsby-image'


export default () => (
  <footer class="footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-4 footer_col">
					<div class="footer_about">
						<div class="logo_container">
							<div class="logo">
								<div>destino</div>
								<div>travel agency</div>
								<div class="logo_image"><img src="/images/logo.png" alt="" /></div>
							</div>
						</div>
						<div class="footer_about_text">Destino Travel Agency IS NOT A REAL COMPANY.</div>

					</div>
				</div>
        <div class="col-lg-4 footer_col">
					<div class="footer_latest">
						<div class="footer_title">Latest News</div>
						<div class="footer_latest_content">

							<div class="footer_latest_item">
								<div class="footer_latest_image"><img src="/images/latest_1.jpg"></div>
								<div class="footer_latest_item_content">
									<div class="footer_latest_item_title"><a href="#">Brazil Summer</a></div>
									<div class="footer_latest_item_date">Jan 09, 2020</div>
								</div>
							</div>

							<div class="footer_latest_item">
								<div class="footer_latest_image"><img src="/images/latest_2.jpg"></div>
								<div class="footer_latest_item_content">
									<div class="footer_latest_item_title"><a href="#">A perfect vacation</a></div>
									<div class="footer_latest_item_date">Jan 09, 2020</div>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</footer>
)
