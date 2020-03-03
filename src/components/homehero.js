import React from 'react'
import Img from 'gatsby-image'


function getFirstWord(sentence) {
    return sentence.replace(/ .*/,'');
}


export default ({ data }) => (
  <div id="hero" class="home">
		<div class="home_background" style ={ { backgroundImage: "url("+data.heroImage.file.url+")" } }></div>
		<div class="home_content">
			<div class="home_content_inner">
				<div class="home_text_large">{getFirstWord(data.slug)}</div>
				<div class="home_text_small">{data.slug}</div>
			</div>
		</div>
	</div>
)
