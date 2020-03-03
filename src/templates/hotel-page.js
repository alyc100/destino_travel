import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'
import get from 'lodash/get'
import Img from 'gatsby-image'
import Layout from '../components/layout'
import Hero from '../components/hero'
import Footer from '../components/footer'
import Navigation from '../components/navigation'

import { documentToJSX } from '../components/richtojsx';

class HotelPageTemplate extends React.Component {
  render() {
    const hotel = get(this.props, 'data.contentfulHotelPackage')
    const navPages = get(this, 'props.data.allContentfulPages.edges')
    const priceStyle = {
        fontSize: '3.0em',
        fontWeight: 'bold'
    };
    const sideBarStyle = {
      backgroundImage: 'url(/images/offer_1.jpg)'
    };
    return (
      <Layout location={this.props.location}>
        <Navigation data={navPages} />
        <Helmet> 
            <title>{hotel.name}</title>
            <link rel="stylesheet" type="text/css" href="/styles/news_styles.css" />
            <link rel="stylesheet" type="text/css" href="/styles/news_responsive.css" />
        </Helmet>
        <Hero imageURL={hotel.image.file.url} title={hotel.name} />
        <div class="news">
		<div class="container">
			<div class="row">

				<div class="col-lg-9">
					<div class="news_posts">
		
				        <div class="news_post">
                            <div class="post_meta">
								<ul>
									<li>{hotel.starRating} STARS</li>
									<li>{hotel.nights} nights included</li>
									<li>By {hotel.author.name}</li>
								</ul>
							</div>
					       <div class="post_title">
						      <h2>{hotel.description}</h2>
					       </div>
				            <div class="post_text">
                                {documentToJSX(hotel.childContentfulHotelPackageArticleRichTextNode.json)}
            
		                    </div>
                        </div>
                    </div>
                </div>

                <div class="col-lg-3">
					<div class="sidebar">
                        
						<div class="sidebar_offers">

							<div class="sidebar_offer">
								<div class="sidebar_offer_background" style={sideBarStyle}></div>
								<div class="sidebar_offer_content">
									<div class="sidebar_offer_destination">{hotel.name}</div>
									<div class="sidebar_offer_percent" style={priceStyle}>£{hotel.price}pp</div>
									<div class="sidebar_offer_text">Price includes: <br/> {hotel.nights} nights accomodation.</div>
									<div class="sidebar_offer_button"><a href="#">BOOK NOW</a></div>
								</div>
							</div>

						</div>

						<div class="sidebar_quote">
							<div class="quote_box"><img src="../../images/quote.png" alt="" /></div>
							<div class="quote_text"><span>“Traveling</span> – it leaves you speechless, then turns you into a storyteller.”</div>
						</div>
					</div>
				</div>
	         </div>
          </div>
        </div>
      <Footer />
      </Layout>
    )

  }
}

export default HotelPageTemplate

export const pageQuery = graphql`
  query HotelById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulHotelPackage(id: { eq: $id }) {
      name
      childContentfulHotelPackageDescriptionTextNode {
        description
      } 
      price
      image {
          file {
            url
          }
        }
      childContentfulHotelPackageArticleRichTextNode {
          json
        }
      nights
      starRating
      author {
          name
        }
    }
allContentfulPages {
    edges {
      node {
        title
        slug
        id
      }
    }
  }
  }
`
