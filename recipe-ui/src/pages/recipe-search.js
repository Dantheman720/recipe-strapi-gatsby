import React, {useState} from "react"
import { useQuery } from '@apollo/react-hooks';
import gql from "graphql-tag"

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
    const {loading, error, data} = useQuery(GET_RECIPES)
    return (
        <pre>{JSON.stringify(data, undefined, 2)}</pre>
)}

export default RecipeSearch
