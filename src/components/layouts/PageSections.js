import styled from "styled-components"
import {motion} from "framer-motion";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

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

export const PageBody = styled(motion.div).attrs(props => ({}))`

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
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 480px) {
    
    flex-direction: column;
    justify-content: center;
  }
`

export const NavTitle = styled(motion.div).attrs(props => ({}))`

  width: 88px;
  height: 32px;
  text-align: center;
  line-height: 32px;

  font-size: 0.8rem;
  font-weight: 300;
  font-family: "Noto Sans TC";
  letter-spacing: 1px;
  transition-duration: 250ms;

  z-index: 10;
  
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

export const NavLogin = styled(motion.div).attrs(props => ({}))`

  width: 84px;
  height: 30px;
  text-align: center;
  line-height: 32px;

  //background-color: #000;
  background: linear-gradient(135deg, rgba(25, 0, 255, 0.8), rgba(255, 0, 0, 0) 100%), linear-gradient(225deg, rgba(183, 0, 255, 0.8), rgba(255, 0, 0, 0) 100%);
  border-radius: 8px;

  margin-left: 32px;

  color: #fff;
  font-size: 0.75rem;
  font-weight: 300;
  //font-family: "Noto Sans TC";
  letter-spacing: 1px;
  transition-duration: 500ms;


  line-height: 30px;
  z-index: 10;

  :hover {

    //background-color: #fff;
    background: linear-gradient(135deg, rgba(123, 0, 255, 0.8), rgba(255, 0, 0, 0) 100%), linear-gradient(225deg, rgba(255, 0, 204, 0.8), rgba(255, 0, 0, 0) 100%);

    cursor: pointer;
    font-weight: 500;
    transition-duration: 500ms;
  }

  //@media (max-width: 480px) {
  //  display: none 
  //}
`

export const Branding = styled(motion.div).attrs(props => ({}))`
  
  :hover {
    cursor: pointer;
  }
  
  //@media (max-width: 480px) {
  //  display: none 
  //}
`

export const PageHeader = () => {

	return (

		<>

			<HeaderContent>

				<Link href={"/"} passHref>

					<Branding>
						<Image src={require("../../public/iosclub_branding.svg")}
						       height={27}
						       width={99}
						       layout={"fixed"}
						       style={{

							       padding: 0,
							       margin: 0,
						       }}
						/>
					</Branding>

				</Link>

				<div style={{
					display: "flex",
					flexDirection: "row"
				}}>

					<Link href={'/routes/Introduction'} passHref>
						<NavTitle>
							社團介紹
						</NavTitle>
					</Link>

					<Link href={'/routes/LearningResources'} passHref>
						<NavTitle>
							學習資源
						</NavTitle>
					</Link>

					<Link href={'/routes/Teams'} passHref>
						<NavTitle>
							指導教師
						</NavTitle>
					</Link>

					<Link href={'/routes/Teams'} passHref>
						<NavTitle>
							歷屆幹部
						</NavTitle>
					</Link>

					<Link href={'/routes/Teams'} passHref>
						<NavLogin>
							社員登入
						</NavLogin>
					</Link>

					<MobileMenu/>

				</div>



			</HeaderContent>

			<HeaderSeparator>

				<div style={{

					height: 1,
					width: "100vw",
					background: "#ccc",

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
					background: "#ccc",

				}}/>

			</FooterSeparator>

			<FooterContent>

				<div style={{

					fontWeight: "500",
					fontSize: "0.75rem",
					letterSpacing: 1,
					fontFamily: "Quicksand"
				}}>
					國立台北教育大學 iOS Club 社團 ｜ Copyright ⓒ 2022 NTUE iOS Club
				</div>

				{/*<div style={{*/}

				{/*	fontWeight: "200",*/}
				{/*	fontSize: "0.75rem",*/}
				{/*	letterSpacing: 1*/}
				{/*}}>*/}
				{/*	*/}
				{/*</div>*/}

			</FooterContent>

		</>


	)
}
