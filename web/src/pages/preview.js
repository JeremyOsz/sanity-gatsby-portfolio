import React from 'react'
import * as queryString from 'query-string';
import { Router, Link, Match } from "@reach/router"
import { StaticQuery, graphql } from "gatsby"
import Container from '../components/container'
import GraphQLErrorList from '../components/graphql-error-list'
import Project from '../components/project'
import SEO from '../components/seo'
import Layout from '../containers/layout'

export const query = graphql`
  query ProjectPreviewQuery($id: String! =  "9e278881-65f2-4839-960f-33d3e4a446db") {
      sanitySampleProject(_id: {eq: $id}) {
        id
        title
        _rawExcerpt(resolveReferences: {maxDepth: 10})
        mainImage {
          caption
          asset {
            url
          }
          alt
        }
      }
    }`


const ProjectTemplate = props => {
    const {data, errors} = props
    const project = data && data.sampleProject
    return (
      <Layout>
        {errors && <SEO title='GraphQL Error' />}
        {project && <SEO title={project.title || 'Untitled'} />}
  
        {errors && (
          <Container>
            <GraphQLErrorList errors={errors} />
          </Container>
        )}
        <h1>{props.data.sanitySampleProject.title}</h1>
        <p>{props.data.sanitySampleProject._rawExcerpt[0].children[0].text}</p>
        <img src={props.data.sanitySampleProject.mainImage.asset.url}></img>
        {console.log(props)}
      </Layout>
    )
  }
  


export default ProjectTemplate
