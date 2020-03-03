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

class GenericPageTemplate extends React.Component {
  render() {
    const page = get(this.props, 'data.contentfulPages')
    const navPages = get(this, 'props.data.allContentfulPages.edges')
    
    return (
      <Layout location={this.props.location}>
        <Navigation data={navPages} />
        <Helmet> 
        <title>{page.title}</title>
        <link rel="stylesheet" type="text/css" href="/styles/main_styles.css" />
        <link rel="stylesheet" type="text/css" href="/styles/responsive.css" />
        </Helmet>
        <Hero imageURL={page.heroImage.file.url} title={page.title} />
        <div class="about">
		<div class="container">
            <div class="row">
				<div class="col">
					<div class="section_title text-center">
						<h2>{page.headline}</h2>
					</div>
				</div>
			</div>
			<div class="row about_row">
            {documentToJSX(page.childContentfulPagesBodyRichTextNode.json)}
            </div>
		</div>
	</div>
    <Footer />
      </Layout>
    )

  }
}

export default GenericPageTemplate

export const pageQuery = graphql`
  query PageById($id: String!) {
    site {
      siteMetadata {
        title
      }
    }
    contentfulPages(id: { eq: $id }) {
      title
      headline
      heroImage {
          file {
            url
          }
        }
      childContentfulPagesBodyRichTextNode {
          json
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
