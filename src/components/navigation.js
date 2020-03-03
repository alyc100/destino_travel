import React from 'react'
import { graphql } from 'gatsby'
import { Link } from 'gatsby'
import get from 'lodash/get'

export default ({ data }) => (
      <header class="header">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="header_container d-flex flex-row align-items-center justify-content-start">

						<div class="logo_container">
							<div class="logo">
								<div>destino</div>
								<div>travel agency</div>
								<div class="logo_image"><img src="/images/logo.png" alt="" /></div>
							</div>
						</div>

						<nav class="main_nav ml-auto">
							<ul class="main_nav_list">
                                <li class="main_nav_item"><a href="/">Home</a></li>
                                {data.map(({ node }) => {
                                return (
                                    <li class="main_nav_item"><a href={'/' + node.title}>{node.title}</a></li>
                                )
                                })}
							</ul>
						</nav>

						<div class="search">
							<form action="#" class="search_form">
								<input type="search" name="search_input" class="search_input ctrl_class" required="required" placeholder="Keyword" />
								<button type="submit" class="search_button ml-auto ctrl_class"><img src="images/search.png" alt="" /></button>
							</form>
						</div>

						<div class="hamburger ml-auto"><i class="fa fa-bars" aria-hidden="true"></i></div>

					</div>
				</div>
			</div>
		</div>
	</header>
    )
  

