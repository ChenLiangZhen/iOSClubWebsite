import styled from "styled-components"
import {motion} from "framer-motion";

export const Header = styled(motion.div).attrs(props => ({}))`

  grid-area: Top / BodyLeft / HeaderBottom / BodyRight
`

export const Body = styled(motion.div).attrs(props => ({}))`

  grid-area: BodyTop / BodyLeft / BodyBottom / BodyRight
`

export const Footer = styled(motion.div).attrs(props => ({}))`

  grid-area: FooterTop / BodyLeft / Bottom / BodyRight
`
