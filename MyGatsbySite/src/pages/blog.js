import React from 'react'
import { Link, useStaticQuery, graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"

import './blog.css'

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              date
              title
            }
            fields {
              slug
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
    <SEO title='Blog' />
      <h1>Blog</h1>
      <ol>
        {
          data.allMarkdownRemark.edges.map((edge) => {
            return (
              <li key={edge.node.frontmatter.title} className='blogLink'>
                <Link to={`/blog/${edge.node.fields.slug}`}>
                  <h2>{edge.node.frontmatter.title}</h2>
                  <p>{edge.node.frontmatter.date}</p>
                </Link>
                
              </li>
            )
          })
        }
      </ol>

    </Layout>
  )
}

export default Blog