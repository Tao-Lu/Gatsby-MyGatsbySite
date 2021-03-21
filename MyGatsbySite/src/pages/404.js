import { Link } from "gatsby"
import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import './404.css'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404: Not Found</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    <Link className='notFound' to='/'>Back To Home</Link>
  </Layout>
)

export default NotFoundPage
