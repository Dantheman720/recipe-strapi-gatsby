import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { localConfig } from "../config"

const CardDescWrapper = styled.div`
  grid-column: 2;
  margin: 0.5rem 2rem;
  font-size: 1rem;
`
const RecipeItemWrapper = styled.div`
  margin: 2rem auto;
  display: grid;
  grid-template-columns: 300px auto;
  width: 75%;
  box-shadow: 0.2rem 0.2rem 1rem ${props => props.theme.greyBoxShadow};

  img {
    width: 300px;
    height: 300px;
    margin: 0;
  }
`

const RecipeItem = ({ recipename, excerpt, slug, picture }) => (
  <Link to={slug} style={{ color: "inherit" }}>
    <RecipeItemWrapper>
      {picture && (
        <img
          src={`${localConfig.url}${picture.url}`}
          alt="Fully cooked meal!"
        />
      )}
      <CardDescWrapper>
        <h2>{recipename}</h2>
        <p>{excerpt}</p>
      </CardDescWrapper>
    </RecipeItemWrapper>
  </Link>
)

// const RecipeItem = props => {
//   const { recipename, excerpt, slug, picture } = props
//
//   return (
//     <RecipeItemWrapper>
//       <Link to={slug} style={{ color: "inherit" }}>
//         <Row style={{ boxShadow: "0.2rem 0.2rem 1rem #777" }}>
//           <Col
//             span={6}
//             style={{
//               height: "300px",
//               width: "300px",
//               margin: "10px",
//             }}
//           >
//             {picture && (
//               <img
//                 src={`${localConfig.url}${picture.url}`}
//                 alt="Fully cooked meal!"
//                 style={{ height: "100%", width: "100%" }}
//               />
//             )}
//           </Col>
//           <Col
//             span={18}
//             style={{
//               height: "300px",
//               width: "600px",
//               margin: "10px",
//             }}
//           >
//             <CardDescWrapper>
//               <h1>{recipename}</h1>
//               <p>{excerpt}</p>
//             </CardDescWrapper>
//           </Col>
//         </Row>
//       </Link>
//     </RecipeItemWrapper>
//   )
// }
export default RecipeItem
