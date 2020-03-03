const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    //Create generic landing pages dynamically
    const genericPages = path.resolve('./src/templates/generic-page.js')
    resolve(
      graphql(
        `
          {
            allContentfulPages {
              edges {
                node {
                  id
                  title
                  slug
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const pages = result.data.allContentfulPages.edges
        pages.forEach((page, index) => {
          createPage({
            path: `/${page.node.title}`,
            component: genericPages,
            context: {
              id: page.node.id
            },
          })
        })
        })
    )
    
      
    //Create hotel package pages dynamically
    const hotelPage = path.resolve('./src/templates/hotel-page.js')
    resolve(
      graphql(
        `
          {
            allContentfulHotelPackage {
              edges {
                node {
                  id
                  name
                }
              }
            }
          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulHotelPackage.edges
        posts.forEach((post, index) => {
          createPage({
            path: `/hotel/${post.node.name}`,
            component: hotelPage,
            context: {
              id: post.node.id
            },
          })
        })
      })
    )
  })
}
