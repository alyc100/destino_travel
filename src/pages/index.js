import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'
import Helmet from 'react-helmet'
import HomeHero from '../components/homehero'
import Footer from '../components/footer'
import Layout from '../components/layout'
import Navigation from '../components/navigation'

class RootIndex extends React.Component {
  render() {
    const [homePage] = get(this, 'props.data.allContentfulHomePage.edges')
    const hotels = get(this, 'props.data.allContentfulHotelPackage.edges')
    const navPages = get(this, 'props.data.allContentfulPages.edges')

    return (
      <Layout location={this.props.location}>
        <Navigation data={navPages} />
        <Helmet> 
        <title>{homePage.node.title}</title>
        <link rel="stylesheet" type="text/css" href="/styles/main_styles.css" />
        <link rel="stylesheet" type="text/css" href="/styles/responsive.css" />
        </Helmet>
        <HomeHero data={homePage.node} />
          
          
        <div class="special">
		<div class="container">
			<div class="row">
				<div class="col">
					<div class="section_title text-center">
						<h2>Our most popular hotel packages</h2>
						<div>take a look at these offers</div>
					</div>
				</div>
			</div>
		</div>
		<div class="special_content">
			<div class="special_slider_container">
				<div class="owl-carousel owl-theme special_slider">
					{hotels.map(({ node }) => {
                        return (
                            <div class="owl-item">
						<div class="special_item">
							<div class="special_item_background"><img src={node.image.file.url} alt={node.image.name} /></div>
							<div class="special_item_content text-center">
								<div class="special_category">£{node.price}pp<br/>{node.nights} nights</div>
								<div class="special_title"><a href={'./hotel/' + node.name}>{node.name}</a></div>
							</div>
						</div>
					</div>
                )
              })}
					

					

				</div>

				<div class="special_slider_nav d-flex flex-column align-items-center justify-content-center">
					<img src="images/special_slider.png" alt="" />
				</div>
			</div>
		</div>
	</div>
    <Footer />
      </Layout>
    )
  }
}

export default RootIndex

export const homeQuery = graphql`
  query HomeQuery {
    site {
      siteMetadata {
        title
      }
    }
  allContentfulHomePage {
    pageInfo {
      perPage
    }
    edges {
      node {
        heroImage {
          file {
            url
          }
        }
        slug
        title
      }
    }
    }
    allContentfulHotelPackage(sort: { fields: [updatedAt], order: DESC }) {
      edges {
        node {
            id
            image {
                file {
                    url
                }
            }
            name
            price
            starRating
            nights
        } 
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
