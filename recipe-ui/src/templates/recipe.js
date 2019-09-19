import React from "react"
import Layout from "../components/layout";
import { Row, Col } from "antd"
import IngredientTable from "../components/IngredientTable"

function ingredientsWithKeys(ingredients) {
    let counter= 0
    return ingredients.map(ingredient => (
        {
            key: (counter++),
            ...ingredient

        }
    ))
}

export default({pageContext}) => {
    return (
        <Layout>
            <Row>
                <Col style={{ textAlign: "center" }}>
                    <h1>{pageContext.recipename}</h1>
                </Col>
            </Row>
            <Row>
                <Col
                    style={{
                        justifyContent: "center",
                        alignContent: "center",
                        display: "flex",
                    }}
                >
                    <img src={pageContext.picture.childImageSharp.fluid.src} alt="" />
                </Col>
            </Row>
            <Row>
                <Col span={6} offset={9} style={{ textAlign: "center" }}>
                    <h2>Ingredients</h2>
                    <IngredientTable ingredients={ingredientsWithKeys(pageContext.ingredients)} />
                </Col>
            </Row>
            <Row>
                <Col offset={4} span={16}>
                    <p>{pageContext.description}</p>
                </Col>
            </Row>
        </Layout>
    )
}
