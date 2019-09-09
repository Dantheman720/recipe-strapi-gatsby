import React from "react"
import Layout from "../components/layout";

export default({pageContext}) => {
    return (
        <Layout>
            {pageContext.recipename}
        </Layout>
    )
}