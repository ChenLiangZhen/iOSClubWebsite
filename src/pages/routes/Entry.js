import React, {useEffect, useState} from "react";
import {BaseGrid} from "../../components/layouts/Layouts";
import {PageBody, PageFooter, PageHeader} from "../../components/layouts/PageSections";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {changeLoginState, selectData} from "../../global_state/dataSlice";
import {realmApp} from "../../components/RealmComponents";
import * as Realm from "realm-web";
import {
	BarLoader,
	BeatLoader,
	CircleLoader, ClimbingBoxLoader,
	ClipLoader,
	DotLoader,
	HashLoader,
	MoonLoader,
	PulseLoader
} from "react-spinners";
import {BiLogIn, BiUserCircle} from "react-icons/bi";
import Image from "next/image";
import {Device as media} from "../../utils/Utilities";
import {Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";

const LoginGrid = styled(motion.div).attrs(props => ({}))`

  display: grid;
  grid-template-columns: [Left] 3fr [Middle] 2fr [Right];
  grid-template-rows: [Top] 16px [ContentTop] 24px [TitleDivider] 1fr [ContentBottom] 48px [Bottom];
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

const LoggedGrid = styled(motion.div).attrs(props => ({}))`

  display: grid;
  grid-template-columns: [Left] 3fr [Middle] 1fr [Right];
  grid-template-rows: [Top] 24px [ContentTop] 0px [TitleDivider] 1fr [ContentBottom] 24px [Bottom];
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

const ContentRight = styled(motion.div).attrs(props => ({}))`

  grid-area: TitleDivider / Middle / ContentBottom / Right;

  display: flex;
  justify-content: flex-start;
  align-items: ${props => props.$loggedIn ? "flex-start" : "center"};

  padding-bottom: ${props => props.$loggedIn ? "0px" : "144px"};
`

const ContentLeft = styled(motion.div).attrs(props => ({}))`

  grid-area: TitleDivider / Left / ContentBottom / Middle;

  display: flex;
  justify-content: center;
  align-items: ${props => props.$alignItems};

  margin-right: 64px;
  padding-bottom: 144px;


`

const DownloadButton = styled(motion.a).attrs( props => ({}))`

  width: 112px;
  height: 32px;
  background-color: whitesmoke;
  color: ${props => props.href === "" ? "lightgray" : "black"};
  border-radius: 8px;
  outline: none;
  border:  ${props => props.href === "" ? "1px solid lightgray" : "1px solid gray"};
  font-size: 0.7rem;
  letter-spacing: 1px;
  font-weight: 300;
  font-family: Noto Sans TC;
  display: flex;
  justify-content: center;
  align-items: center;

  margin: 5px 0px 5px 0px;

  transition-duration: 250ms;
  pointer-events: ${props => props.href === "" ? "none" : "undefined"};
  
  :hover {

    background: ${props => props.href === "" ? "shitesmoke" : "linear-gradient(-120deg, #ba63ea, #ea62b3)"};
    
    border: none;
    color: white;

    cursor: pointer;

    font-weight: 500;

    transition-duration: 250ms;

  }

`

function createData(
	name,
	description,
	swift,
	figma,
	backend,
) {
	return { name, description, swift, figma, backend };
}

const rows = [
	createData('第一週', "基本 XCode 操作、認識蘋果開發生態。/設計課程介紹、Figma 基礎。/後端課程介紹、建立虛擬機。", "https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Presentations/01_Xcode%E7%9A%84%E7%AC%AC%E4%B8%80%E6%AC%A1%E8%A6%AA%E5%AF%86%E6%8E%A5%E8%A7%B8%E6%B5%B7%E6%B4%8B.pdf", "", "https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Presentations/%E5%BE%9E%E7%84%A1%E5%88%B0%E6%9C%89%E5%BB%BA%E7%AB%8B%E4%B8%80%E5%80%8BREST%E5%BE%8C%E7%AB%AF%E6%9E%B6%E6%A7%8B%20-%20Chapter%201%20-%20%E8%AA%B2%E7%A8%8B%E7%9B%AE%E6%A8%99%E8%88%87%E4%BB%8B%E7%B4%B9%E3%80%81%E5%BB%BA%E7%AB%8B%E8%99%9B%E6%93%AC%E6%A9%9F.pdf"),
	createData('第二週', "建立自己的型別、Boogie Bot。/構建使用者介面（Wireframe）。/設定 Ubuntu 伺服器與安裝 MongoDB。", "https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Presentations/02_Swift%20%E7%A8%8B%E5%BC%8F%E8%A6%AA%E5%AF%86%E6%8E%A5%E8%A7%B8%E6%B5%B7%E6%B4%8B.pdf", "", "https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Presentations/%E5%BE%9E%E7%84%A1%E5%88%B0%E6%9C%89%E5%BB%BA%E7%AB%8B%E4%B8%80%E5%80%8BREST%E5%BE%8C%E7%AB%AF%E6%9E%B6%E6%A7%8B%20-%20Chapter%202%20-%20%E8%A8%AD%E7%BD%AE%E8%99%9B%E6%93%AC%E6%A9%9F%E8%88%87%20MongoDB.pdf"),
	createData('第三週', "SwiftUI 基礎排版。/使用者介面進階排版與填色。/使用 ExpressJS 建立 API 端點。", "https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Presentations/03_SwiftUI%20%E5%88%9D%E9%AB%94%E9%A9%97.pdf", "", ""),
	// createData('第四週', 305, 3.7, 67, 4.3),
	// createData('第五週', 356, 16.0, 49, 3.9),
];


const Entry = () => {

	const [password, setPassword] = useState("")
	const [email, setEmail] = useState("")
	const [isAsync, setIsAsync] = useState(false)

	const [showPassword, setShowPassword] = useState(false)

	const data = useSelector(selectData)
	const dispatch = useDispatch()

	const [user, setUser] = useState();

	async function loginEmailPassword(email, password) {
		// Create an anonymous credential
		const credentials = Realm.Credentials.emailPassword(email, password);
		try {
			// Authenticate the user
			const user = await realmApp.logIn(credentials);
			// `App.currentUser` updates to match the logged in user
			console.assert(user.id === realmApp.currentUser.id);
			console.log(user)
			return user;

		} catch (err) {
			console.error("Failed to log in", err);
		}
	}

	useEffect(() => {

		console.log("DATA IS!!! :: " + data)
		setUser(realmApp.currentUser)

	}, [])

	useEffect(() => {

		console.log("Current Input : " + email + " " + password)

	}, [email, password])


	return (

		<BaseGrid>

			<PageHeader/>

			<PageBody>

				{data.appState.userLoggedIn ?

					<LoggedGrid initial={{ y: -100, opacity: 0 }} transition={{ type: "spring", duration: 1}} animate={{ y: 0, opacity: 1 }}>

						<ContentLeft $loggedIn={data.appState.userLoggedIn}>

							<TableContainer component={Paper} style={{

								borderRadius: 12,
								boxShadow: "none",
								border: "1px solid lightgray",
								padding: "4px 16px 4px 16px"
							}}>

								<Table sx={{ minWidth: 650 }} aria-label="simple table" style={{
									minWidth: 400,
								}}>

									<TableHead>
										<TableRow>

											<TableCell align="left" style={{
												fontSize: "0.95rem",
												fontWeight: 600,
												fontFamily: "Noto Sans TC",
												letterSpacing: 1

											}}>社課週目</TableCell>


											<TableCell align="left" style={{
												fontSize: "0.95rem",
												fontWeight: 600,
												fontFamily: "Noto Sans TC",
												letterSpacing: 1

											}}>課程內容</TableCell>

											<TableCell align="left" style={{
												fontSize: "0.95rem",
												fontWeight: 600,
												fontFamily: "Noto Sans TC",
												letterSpacing: 1

											}}>簡報下載&nbsp;</TableCell>

										</TableRow>
									</TableHead>

									<TableBody>
										{rows.map((row) => (
											<TableRow
												key={row.name}
												sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
											>
												<TableCell component="th" scope="row">
													{row.name}
												</TableCell>
												<TableCell align="left" style={{

													fontFamily: "Noto Sans TC",
													fontWeight: 300,
													letterSpacing: 1,
													lineHeight: "1.5rem"
												}}>

													{
														row.description
															.toString()
															.split("/")
															.map((curs, idx) => (
															<div key={idx}>{curs}</div>
														))
													}

												</TableCell>
												<TableCell style={{

													display: "flex",
													justifyContent: "center",
													alignItems: "flex-start",
													flexDirection: "column"
												}}>
													<DownloadButton
														href={row.swift}
														target={"_blank"}
														rel="noopener noreferrer"
													     onClick={()=> {
															  console.log("Download PPT.")
													     }}
													>
															Swift 課程簡報
													</DownloadButton>

													<DownloadButton
														href={row.figma}
														target={"_blank"}
														rel="noopener noreferrer"
														onClick={()=> {
															console.log("Download PPT.")
														}}
													>
														設計課程簡報
													</DownloadButton>
													<DownloadButton
														href={row.backend}
														target={"_blank"}
														rel="noopener noreferrer"
														onClick={()=> {
															console.log("Download PPT.")
														}}
													>
														後端課程簡報
													</DownloadButton>
												</TableCell>
											</TableRow>
										))}
									</TableBody>

								</Table>

							</TableContainer>

						</ContentLeft>

						<ContentRight $loggedIn={data.appState.userLoggedIn}>

							<div style={{

								width: "100%",
								height: 60,
								border: "1px solid lightgray",
								borderRadius: 16,
								display: "flex",
								flexDirection: "column"
							}}>

								<disv style={{

									width: "100%",
									height: 60,
									padding: 16,
									// backgroundColor: "darkgray",

									display: "flex",
									alignItems: "center"
								}}>

									<BiUserCircle size={32} color={"black"} />

									<div style={{
										width: "100%",
										display: "flex",
										justifyContent: "space-between",
										alignItems: "center"
									}}>

										<div style={{

											fontFamily: "Noto Sans TC",
											fontWeight: 500,
											fontSize: "0.9rem",
											marginLeft: 8,
										}}>

											{"felix961308@gmail.com".substring(0, "felix961308@gmail.com". indexOf('@'))}

										</div>

										<div style={{

											fontFamily: "Noto Sans TC",
											fontWeight: 150,
											fontSize: "0.7rem",

											border: "1px solid lightgray",
											borderRadius: 10,
											padding: "4px 8px 4px 8px",
											marginLeft: 8,
										}}>
											正式社員
										</div>
									</div>
								</disv>
							</div>
						</ContentRight>

					</LoggedGrid>


					:

					<LoginGrid>

						<ContentLeft $loggedIn={data.appState.userLoggedIn}>

							<Image src={require("../../public/club.svg")}
							       height={300}
							       width={400}
							       color={"#222"}
							       layout={"intrinsic"}
							       style={{

								       padding: 0,
								       margin: 0,
								       zIndex: 10

							       }}
							/>

						</ContentLeft>

						<ContentRight $loggedIn={data.appState.userLoggedIn}>

							<div style={{
								height: 256,
								width: 1,
								backgroundColor: "gray",

								marginRight: 36
							}}>


							</div>

							<div style={{
								display: "flex",
								flexDirection: "column"
							}}>

								<div style={{

									// height: 64,
									display: "flex",
									flexDirection: "row",
									alignItems: "center",

									marginBottom: 24,
								}}>

									<BiLogIn size={24} color={"black"}/>

									<div style={{

										fontSize: "1.2rem",
										fontWeight: 300,
										fontFamily: "Noto Sans TC",
										letterSpacing: 2,
										marginLeft: 16,
										marginBottom: 4

									}}>
										社員登入
									</div>

								</div>


								<div style={{
									fontSize: "0.8rem",
									color: "gray",
								}}>
									帳號
								</div>

								<input spellCheck={false}
								       value={email}
								       type={"text"}
								       onChange={e => setEmail(e.target.value)}

								       style={{

									       width: 192,
									       height: 32,
									       borderRadius: 8,

									       padding: "0 12px 0 12px",
									       marginTop: 4,
									       marginBottom: 12,

									       outline: "none",
									       border: "none",
									       color: "black",
									       backgroundColor: "whitesmoke",

									       fontSize: "0.8rem"
								       }}/>

								<div style={{
									fontSize: "0.8rem",
									color: "gray"
								}}>
									密碼
								</div>

								<input spellCheck={false}
								       value={password}
								       onChange={e => setPassword(e.target.value)}
								       type={"password"}
								       style={{

									       width: 192,
									       height: 32,
									       borderRadius: 8,

									       padding: "0 12px 0 12px",
									       marginTop: 4,
									       marginBottom: 36,

									       outline: "none",
									       border: "none",
									       color: "black",
									       backgroundColor: "whitesmoke"
								       }}/>

								<div style={{
									display: "flex",
									// justifyContent: "center",
									alignItems: "center",
									flexDirection: "row"
								}}>

									<button title={"This is amazing"} onClick={async () => {

										setIsAsync(true)

										loginEmailPassword(email, password)
											.then(res => {

												if (res) {

													setIsAsync(false)
													dispatch(changeLoginState(true))

												}
											})

									}} style={{
										outline: "none",
										color: "white",
										background: "linear-gradient(-120deg, #706ad3, #a766cc)",
										border: "none",
										borderRadius: 8,
										height: 30,
										width: 84,
										marginRight: 12
									}}>

										<div style={{
											fontSize: "0.8rem"
										}}> 登入
										</div>

									</button>

									{isAsync ?
										<MoonLoader color={"indigo"} loading={true} size={21}/> : <></>
									}

								</div>

							</div>


						</ContentRight>




					</LoginGrid>

				}


			</PageBody>

			<PageFooter/>

		</BaseGrid>
	)
}

export default Entry
