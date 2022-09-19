import styled from "styled-components"
import {motion} from "framer-motion";
import Image from "next/image";
import MobileMenu from "./MobileMenu";

export const HeaderContent = styled(motion.div).attrs(props => ({}))`
  
  @media (min-width: 480px) {

    grid-area: Top / BodyLeft / HeaderBottom / BodyRight;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media (max-width: 480px) {

    height: 48px;
    width: 100%;
    
    position: fixed;
    display: flex;
    
    justify-content: space-between;
    align-items: center;
  }
`

export const HeaderSeparator = styled(motion.div).attrs(props => ({}))`
  
  @media (min-width: 480px) {

    grid-area: Top / Left / HeaderBottom / Right;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
  }

  @media (max-width: 480px) {

    flex-direction: column;
    justify-content: center;
  }
`

export const Body = styled(motion.div).attrs(props => ({}))`

  grid-area: BodyTop / BodyLeft / BodyBottom / BodyRight
`

export const FooterSeparator = styled(motion.div).attrs(props => ({}))`

  grid-area: FooterTop / Left / Bottom / Right;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`

export const FooterContent = styled(motion.div).attrs(props => ({}))`

  //width: 100%;
  
  grid-area: FooterTop / BodyLeft / Bottom / BodyRight;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 480px) {
    
    flex-direction: column;
    justify-content: center;
  }
`

export const NavTitle = styled(motion.div).attrs(props => ({}))`

  width: 96px;
  height: 32px;
  text-align: center;
  line-height: 32px;

  font-size: 0.9rem;
  font-weight: 300;
  letter-spacing: 1px; 

  :hover {
    cursor: pointer;
    font-weight: 500;
    letter-spacing: 4px;
    transition-duration: 250ms;
  }
  
  //@media (max-width: 480px) {
  //  display: none 
  //}
`

export const PageHeader = () => {

	return (

		<>

			<HeaderContent>

				<Image src={require("../../public/iosclub_branding.svg")}
				       height={34}
				       width={124}
				       layout={"fixed"}
				       style={{
					       padding: 0,
					       paddingBottom: 2,
					       margin: 0
				       }}
				/>

				<div style={{
					display: "flex",
					flexDirection: "row"
				}}>

					<NavTitle>
						社團介紹
					</NavTitle>

					<NavTitle>
						學習資源
					</NavTitle>

					<NavTitle>
						歷屆幹部
					</NavTitle>

					<MobileMenu/>

				</div>



			</HeaderContent>

			<HeaderSeparator>

				<div style={{

					height: 1,
					width: "100vw",
					background: "#888",

				}}/>

			</HeaderSeparator>

		</>


	)
}

export const PageFooter = () => {

	return (

		<>
			<FooterSeparator>

				<div style={{

					height: 1,
					width: "100vw",
					background: "#888",

				}}/>

			</FooterSeparator>

			<FooterContent>

				<div style={{

					fontWeight: "500",
					fontSize: "0.9rem",
					letterSpacing: 1
				}}>
					國立台北教育大學 iOS Club 社團
				</div>

				<div style={{

					fontWeight: "200",
					fontSize: "0.75rem",
					letterSpacing: 1
				}}>
					Copyright ⓒ 2022 NTUE iOS Club
				</div>

			</FooterContent>

		</>


	)
}
