import React from "react"
import Layout from "../components/layout";

export default({pageContext}) => {
    return (
        <Layout>
            <pre>{JSON.stringify(pageContext, undefined, 2)}</pre>
        </Layout>
    )
}