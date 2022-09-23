import styled from "styled-components"
import {motion} from "framer-motion";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Link from "next/link";
import {useEffect} from "react";
import {useRouter} from "next/router";

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
  height: 48px;
  
  line-height: 32px;
  
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;

  font-size: 0.8rem;
  font-weight: ${props => props.route == props.name ? 500 : 300};
  font-family: "Noto Sans TC";
  letter-spacing: ${props => props.route == props.name ? "4px" : "2px"};
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
  font-weight: ${props => props.route == props.name ? 500 : 300};
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

	const route = useRouter().route

	useEffect(()=> {

	}, [])

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
					flexDirection: "row",
					alignItems: "center"
				}}>

					<Link href={'/routes/Introduction'} passHref>

						<NavTitle name={"/routes/Introduction"} route={route}>

							<div style={{
								height: "44px",
								paddingTop: 8,
								paddingLeft: 4
							}}>
								社團介紹
							</div>

							<div style={route == "/routes/Introduction" ? {
								width: 80,
								height: 4,
								backgroundColor: "black"
							} : {
								width: 80,
								height: 4,
								backgroundColor: "transparent" }}/>

							<div style={route == "/routes/Introduction" ? {

								position: "absolute",
								zIndex: -1,
								width: 80,
								height: 36,
								background: "linear-gradient(to bottom, white, white, #f1e9ff, #bea4ff)"
								// backgroundColor: "red"

							} : {
								display: "none" }}
							/>


						</NavTitle>

					</Link>

					<Link href={'/routes/LearningResources'} passHref>
						<NavTitle name={"/routes/LearningResources"} route={route}>

							<div style={{
								height: "44px",
								paddingTop: 8,
								paddingLeft: 4
							}}>
								學習資源
							</div>

							<div style={route == "/routes/LearningResources" ? {
								width: 80,
								height: 4,
								backgroundColor: "black"
							} : {
								width: 80,
								height: 4,
								backgroundColor: "transparent" }}/>

							<div style={route == "/routes/LearningResources" ? {

								position: "absolute",
								zIndex: -1,
								width: 80,
								height: 36,
								background: "linear-gradient(to bottom, white, white, #f1e9ff, #bea4ff)"
								// backgroundColor: "red"

							} : {
								display: "none" }}
							/>

						</NavTitle>
					</Link>

					<Link href={'/routes/Teachers'} passHref>
						<NavTitle name={"/routes/Teachers"} route={route}>

							<div style={{
								height: "44px",
								paddingTop: 8,
								paddingLeft: 4
							}}>
								指導老師
							</div>

							<div style={route == "/routes/Teachers" ? {
								width: 80,
								height: 4,
								backgroundColor: "black"
							} : {
								width: 80,
								height: 4,
								backgroundColor: "transparent" }}/>

							<div style={route == "/routes/Teachers" ? {

								position: "absolute",
								zIndex: -1,
								width: 80,
								height: 36,
								background: "linear-gradient(to bottom, white, white, #f1e9ff, #bea4ff)"
								// backgroundColor: "red"

							} : {
								display: "none" }}
							/>

						</NavTitle>
					</Link>

					<Link href={'/routes/Teams'} passHref>

						<NavTitle name={"/routes/Teams"} route={route}>

							<div style={{
								height: "44px",
								paddingTop: 8,
								paddingLeft: 4
							}}>
								社團幹部
							</div>

							<div style={route == "/routes/Teams" ? {
								width: 80,
								height: 4,
								backgroundColor: "black"
							} : {
								width: 80,
								height: 4,
								backgroundColor: "transparent" }}/>

							<div style={route == "/routes/Teams" ? {

								position: "absolute",
								zIndex: -1,
								width: 80,
								height: 36,
								background: "linear-gradient(to bottom, white, white, #f1e9ff, #bea4ff)"
								// backgroundColor: "red"

							} : {
								display: "none" }}
							/>

						</NavTitle>
					</Link>

					<Link href={'/routes/Entry'} passHref>
						<NavLogin name={"/routes/Entry"} route={route}>
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

					fontWeight: "300",
					fontSize: "0.75rem",
					letterSpacing: 1,
					fontFamily: "Quicksand"

				}}>
					國立台北教育大學 iOS Club 社團 &nbsp; &nbsp;｜&nbsp; &nbsp; Copyright ⓒ 2022 NTUE iOS Club
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
