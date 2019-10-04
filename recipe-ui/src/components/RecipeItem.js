import React from "react"
import { Col, Row } from "antd"
import { Link } from "gatsby"
import styled from "styled-components"
import { localConfig } from "../config"

const CardDescWrapper = styled.div`
  h1 {
    text-align: center;
  }
  p {
    padding: 10px;
  }
`

const RecipeItem = props => {
  const { recipename, excerpt, slug, picture } = props

  return (
    <>
      <Link to={slug} style={{ color: "inherit" }}>
        <Row style={{ boxShadow: "0.2rem 0.2rem 1rem #777" }}>
          <Col
            span={6}
            style={{
              height: "300px",
              width: "300px",
              margin: "10px",
            }}
          >
            {picture && (
              <img
                src={`${localConfig.url}${picture.url}`}
                alt="Fully cooked meal!"
                style={{ height: "100%", width: "100%" }}
              />
            )}
          </Col>
          <Col
            span={18}
            style={{
              height: "300px",
              width: "600px",
              margin: "10px",
            }}
          >
            <CardDescWrapper>
              <h1>{recipename}</h1>
              <p>{excerpt}</p>
            </CardDescWrapper>
          </Col>
        </Row>
      </Link>
    </>
  )
}
export default RecipeItem
