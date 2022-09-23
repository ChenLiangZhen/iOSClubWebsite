import styled from "styled-components"
import {motion} from "framer-motion";

export const BaseWeb = styled.div`
  background-color: white;
`

export const BaseGrid = styled.div`

  display: grid;
  grid-template-columns: [Left] 15% [ContentLeft] 20px [BodyLeft]  1fr [BodyRight] 20px [ContentRight] 15% [Right];
  grid-template-rows: [Top] 48px [HeaderBottom] 32px [BodyTop] auto [BodyBottom] 32px [FooterTop] 48px [Bottom];
  min-height: 100vh;
  width: 100vw;

  @media (min-width: 960px) and (max-width: 1280px) {
    grid-template-columns: [Left] 5% [ContentLeft] 20px [BodyLeft]  1fr [BodyRight] 20px [ContentRight] 5% [Right];
    grid-template-rows: [Top] 48px [HeaderBottom] 32px [BodyTop] auto [BodyBottom] 32px [FooterTop] 48px [Bottom];
  }

  @media (min-width: 720px) and (max-width: 960px) {
    grid-template-columns: [Left] 5% [ContentLeft] 20px [BodyLeft]  1fr [BodyRight] 20px [ContentRight] 5% [Right];
    grid-template-rows: [Top] 48px [HeaderBottom] 32px [BodyTop] auto [BodyBottom] 32px [FooterTop] 48px [Bottom];
  }
  
  @media (min-width: 480px) and (max-width: 720px) {
    grid-template-columns: [Left] 5% [ContentLeft] 20px [BodyLeft]  1fr [BodyRight] 20px [ContentRight] 5% [Right];
    grid-template-rows: [Top] 48px [HeaderBottom] 32px [BodyTop] auto [BodyBottom] 32px [FooterTop] 48px [Bottom];
  }
  
  @media (max-width: 480px) {
    grid-template-columns: [Left] 12px [ContentLeft] 8px [BodyLeft]  1fr [BodyRight] 8px [ContentRight] 12px [Right];
    grid-template-rows: [Top] 54px [HeaderBottom] 32px [BodyTop] auto [BodyBottom] 32px [FooterTop] 48px [Bottom];
  }
  
`

export const HStack = styled(motion.div)`

  grid-area: ${props => props.$gridArea};

    //display: ${props => props.$display};
    // flex-direction: ${props => props.$flexDirection};

  display: flex;
  flex-direction: row;
  justify-content: ${props => props.$justifyContent};
  align-items: ${props => props.$alignItems};

  position: ${props => props.$position};

  height: ${props => props.$height};
  width: ${props => props.$width};

  margin: ${props => props.$margin};
  padding: ${props => props.$padding};
  border: ${props => props.$border};
  border-radius: ${props => props.$borderRadius};
  outline: ${props => props.$outline};

  color: ${props => props.$color};
  background-color: ${props => props.$backgroundColor};

  font-size: ${props => props.$fontSize};
  font-family: ${props => props.$fontFamily};
  font-weight: ${props => props.$fontWeight};

  letter-spacing: ${props => props.$letterSpacing};
  line-height: ${props => props.$lineHeight};
  text-decoration: ${props => props.$textDecoration};

  box-shadow: ${props => props.$boxShadow};
  opacity: ${props => props.$opacity};

  transform: ${props => props.$transform};
  z-index: ${props => props.$zIndex};

  left: ${props => props.$left};
  right: ${props => props.$right};
  top: ${props => props.$top};
  bottom: ${props => props.$bottom};

  :hover {
    cursor: ${props => props.$hoverCursor};
    background-color: ${props => props.$hoverColor};
  }
`


export const VStack = styled(motion.div).attrs(props => ({}))`

  grid-area: ${props => props.$gridArea};

    //display: ${props => props.$display};
    // flex-direction: ${props => props.$flexDirection};
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.$justifyContent};
  align-items: ${props => props.$alignItems};

  position: ${props => props.$position};

  height: ${props => props.$height};
  width: ${props => props.$width};

  margin: ${props => props.$margin};
  padding: ${props => props.$padding};
  border: ${props => props.$border};
  border-radius: ${props => props.$borderRadius};
  outline: ${props => props.$outline};

  color: ${props => props.$color};
  background-color: ${props => props.$backgroundColor};

  font-size: ${props => props.$fontSize};
  font-family: ${props => props.$fontFamily};
  font-weight: ${props => props.$fontWeight};

  letter-spacing: ${props => props.$letterSpacing};
  line-height: ${props => props.$lineHeight};
  text-decoration: ${props => props.$textDecoration};

  box-shadow: ${props => props.$boxShadow};
  opacity: ${props => props.$opacity};

  transform: ${props => props.$transform};
  z-index: ${props => props.$zIndex};

  left: ${props => props.$left};
  right: ${props => props.$right};
  top: ${props => props.$top};
  bottom: ${props => props.$bottom};

  :hover {
    cursor: ${props => props.$hoverCursor};
    background-color: ${props => props.$hoverColor};
  }

`
