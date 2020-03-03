import React from 'react'
import Img from 'gatsby-image'

export default ({ imageURL, title }) => (
  <div class="home">
		<div class="home_background" style ={ { backgroundImage: "url("+imageURL+")" } } data-speed="0.8"></div>
        <div class="home_content">
			<div class="home_content_inner">
				<div class="home_text_small">{title}</div>
			</div>
		</div>
	</div>
)
