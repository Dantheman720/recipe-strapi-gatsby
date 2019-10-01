import React from "react"
import { Card } from "antd"
import styled from "styled-components"
import { Link, useStaticQuery } from "gatsby"
import { Row, Col } from "antd"

const FeaturedRecipeWrapper = styled.div`
  h1 {
    text-align: center;
  }
`
const { Meta } = Card
const FeaturedRecipes = () => {
  const { allStrapiRecipe } = useStaticQuery(graphql`
    query GET_ALL_RECIPES {
      allStrapiRecipe(limit: 4, sort: { fields: createdAt, order: ASC }) {
        edges {
          node {
            description
            recipename
            excerpt
            ingredients {
              amount
              measurement
              name
            }
            id
            strapiId
            slug
            picture {
              childImageSharp {
                fixed {
                  src
                }
              }
            }
            createdAt(formatString: "MM/DD/YYYY")
          }
        }
      }
    }
  `)

  return (
    <FeaturedRecipeWrapper>
      <h1>Latest Tasty Treats!</h1>
      <div className="featured-recipe-wrapper">
        <Row gutter={16}>
          <Col span={4} />

          {allStrapiRecipe.edges.map(edge => (
            <Col
              span={4}
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Link to={`/${edge.node.slug}`}>
                <Card
                  style={{ width: 240, height: "350px" }}
                  hoverable={true}
                  cover={
                    <img
                      alt="example"
                      src={
                        edge.node.picture
                          ? edge.node.picture.childImageSharp.fixed.src
                          : ""
                      }
                      style={{ height: "200px" }}
                    />
                  }
                >
                  <Meta
                    title={edge.node.recipename}
                    description={edge.node.excerpt}
                  />
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </div>
    </FeaturedRecipeWrapper>
  )
}
export default FeaturedRecipes
