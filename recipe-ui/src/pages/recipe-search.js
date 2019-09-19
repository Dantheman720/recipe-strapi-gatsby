import React from "react"
import {Query} from 'react-apollo'
import gql from 'graphql-tag';

import Layout from "../components/layout"
import SEO from "../components/seo"


const GET_RECIPES = gql`
    {
        recipes {
            recipename
        }
    }
`;

const RecipeSearch = () => {

    return (
    <Layout>
        <SEO title="Search Recipes" />
        <Query query={GET_RECIPES}>
            {({ data, error, loading }) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error: {error.message}</p>;
                return (
                    <div>
                        <pre>{JSON.stringify(data, undefined, 2)}</pre>

                    </div>
                );
            }}
        </Query>

    </Layout>
)}

export default RecipeSearch
