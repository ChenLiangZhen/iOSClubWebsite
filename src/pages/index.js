import React, {useEffect, useState} from "react";
import {UserDetail, Login, realmApp} from "../components/RealmComponents";
import {BaseGrid} from "../components/layouts/Layouts";
import {PageBody, PageFooter, PageHeader} from "../components/layouts/PageSections";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import Image from "next/image";
import styled from "styled-components";
import {motion} from "framer-motion";
import {ImageList, ImageListItem} from "@mui/material";
import {useJsMediaQuery} from "../utils/customHooks";
import NOSSR from "../components/utils/NOSSR";


const Grid = styled(motion.div).attrs(props => ({}))`

  display: grid;
  grid-template-columns: [Left] 1fr [Right];
  grid-template-rows: [Top] 1fr [ContentTop] 0px [FirstSectionTop] 240px [FirstSectionBottom] 64px [SecondSectionTop] 320px [SecondSectionBottom] 24px [ContentBottom] 1.5fr [Bottom];
  min-height: 100%;
  width: 100%;

  @media (min-width: 960px) and (max-width: 1280px) {

  }

  @media (min-width: 720px) and (max-width: 960px) {

  }

  @media (min-width: 480px) and (max-width: 720px) {

  }

  @media (max-width: 480px) {

  }

`

const TitleText = styled(motion.div).attrs(props => ({}))`

  margin-top: -16px;
  
  font-size: 3.6rem;
  font-weight: 800;
  font-family: "Noto Sans TC";

  background: linear-gradient(-120deg, #6065c0, #9b55ab);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (min-width: 960px) and (max-width: 1280px) {
    font-size: 3rem;
  }

  @media (min-width: 720px) and (max-width: 960px) {
    font-size: 3rem;
  }

  @media (min-width: 480px) and (max-width: 720px) {
    font-size: 2.8rem;
  }

  @media (max-width: 480px) {
    font-size: 2.4rem;
  }
`

const TitleDescription = styled(motion.div).attrs(props => ({}))`

  font-size: 1.2rem;
  font-weight: 600;
  font-family: "Noto Sans TC";
  letter-spacing: 1px;
  background: linear-gradient(-120deg, #6065c0, #9b55ab);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const Home = () => {

	const data = useSelector(state => state)
	const dispatch = useDispatch()

	const [user, setUser] = useState();
	const router = useRouter()

	const media = useJsMediaQuery()

	const [randomImageSet, setRandomImageSet] = useState([])

	{/*<ImageLayout items={[*/}
	{/*	{ src: "https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/%E7%A4%BE%E9%95%B7%EF%BC%BF%E7%B0%A1%E6%9F%8F%E6%9D%BE.jpg" },*/}
	{/*	{ src: "https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/%E5%89%AF%E7%A4%BE%EF%BC%BF%E6%9E%97%E6%98%B1%E5%BE%B7.jpg" },*/}
	{/*]} columnWidth={200} columns={5} gutter={8} />*/}


	useEffect(() => {

		setUser(realmApp.currentUser)
		console.log(router)

		let assignedImage = []
		let target = [1,2,3,4,5,6,7,8,9,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

		for(let i =1; i <= 12; i++){

			let randomVal = target[Math.floor(Math.random() * 23)]


			if(!assignedImage.includes(randomVal)) {

				console.log(randomVal)
				assignedImage.push(randomVal)
				setRandomImageSet(prev => [...prev, { img: `https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/RandomPics/LINE_ALBUM_221002_${randomVal}.jpg`}])

			}
		}

		{/*{user ? <UserDetail user={user}/> : <Login setUser={setUser}/>}*/}

	}, [])

	return (

		<BaseGrid>

			<PageHeader/>

			<PageBody>

				<Grid>

					<div style={{

						gridArea: "FirstSectionTop / Left / FirstSectionBottom / Right",
						display: "flex",
						justifyContent: "center"

						// flexDirection: "column"
					}}>

						<div style={{

							display: "flex",
							flexDirection: "column",
							justifyContent: "center",
							height: "100%",
							marginRight: 84
						}}>

							<TitleText>

								NTUE iOS Club

							</TitleText>

							<TitleDescription>

								國立台北教育大學 iOSClub 社團

							</TitleDescription>

							<div style={{

								width: 480,

								marginTop: 32,

								fontSize: "0.9rem",
								fontWeight: 400,
								fontFamily: "Noto Sans TC",
								letterSpacing: 1,
								background: "linear-gradient(-120deg, #7670e1, #a766cc)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",

							}}>
								想學習蘋果原生開發嗎？ 我們是蘋果官方認證的 iOS Club 社團，歡迎你一起加入 iOS Club，
								與我們學習 Swift 語言的原生開發、程式語言與 App 設計等相關的知識！
							</div>

					</div>

						<Image src={require("../public/main.svg")}
						       height={240}
						       width={360}
						       color={"#7b4c96"}
						/>
					</div>

					<div style={{

						gridArea: "SecondSectionTop / Left / SecondSectionBottom / Right",
						display: "flex",
						justifyContent: "center"

					}}>
9
					</div>

					<div style={{

						gridArea: "SecondSectionTop / Left / SecondSectionBottom / Right",
						display: "flex",
						justifyContent: "center"

					}}>

						{/*<ImageList variant={"standard"} sx={{ width: "100%", height: 320 }} cols={media.desktop? 5 : 4} gap={16} rowHeight={164}>*/}
						{/*	{teamsImage.map((item) => (*/}
						{/*		<ImageListItem key={item.img}>*/}
						{/*			<img*/}
						{/*				src={`${item.img}?w=200&h=140&fit=crop&auto=format`}*/}
						{/*				srcSet={`${item.img}?w=140&h=120&fit=crop&auto=format&dpr=2 2x`}*/}
						{/*				alt={item.title}*/}
						{/*				loading="lazy"*/}

						{/*				style={{*/}
						{/*					padding: 0,*/}

						{/*					// border: "2px solid lightgray",*/}
						{/*					borderRadius: 12*/}
						{/*				}}*/}
						{/*			/>*/}
						{/*		</ImageListItem>*/}
						{/*	))}*/}
						{/*</ImageList>*/}

						<NOSSR>
							<ImageList variant="masonry" sx={{ width: "100%", height: 320 }} cols={5} gap={12}>

								{randomImageSet.map((item) => (
									<ImageListItem key={item.img}>
										<img

											src={`${item.img}?w=248&fit=crop&auto=format`}
											srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
											alt={item.title}
											loading="eager"

											style={{
												padding: 0,

												// border: "2px solid lightgray",
												borderRadius: 12
											}}
										/>
									</ImageListItem>
								))}
							</ImageList>
						</NOSSR>



					</div>



				</Grid>

			</PageBody>

			<PageFooter/>

		</BaseGrid>

	);
};

export default Home;
