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
import {BiLogIn} from "react-icons/bi";
import Image from "next/image";

const Grid = styled(motion.div).attrs(props => ({}))`

  display: grid;
  grid-template-columns: [Left] 3fr [Middle] 2fr [Right];
  grid-template-rows: [Top] 16px [ContentTop] 60px [TitleDivider] 1fr [ContentBottom] 48px [Bottom];
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
  //align-items: center;

`


const ContentLeft = styled(motion.div).attrs(props => ({}))`

  grid-area: TitleDivider / Left / ContentBottom / Middle;

  display: flex;
  justify-content: center;
  align-items: center;

`

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

				<Grid>

					<ContentRight>

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
							{	// await realmApp.emailPasswordAuth.registerUser({ email: "felix961308@gmail.com", password: "Lightii9613!" });
							}
							<input spellCheck={false}
							       value={email}
							       type={"text"}
							       onChange={e => setEmail(e.target.value)}

							       style={{

								       width: 180,
								       height: 32,
								       borderRadius: 8,

								       padding: "0 12px 0 12px",
								       marginTop: 4,
								       marginBottom: 12,

								       outline: "none",
								       border: "none",
								       color: "black",
								       backgroundColor: "#eee"
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

								       width: 180,
								       height: 32,
								       borderRadius: 8,

								       padding: "0 12px 0 12px",
								       marginTop: 4,
								       marginBottom: 36,

								       outline: "none",
								       border: "none",
								       color: "black",
								       backgroundColor: "#eee"
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


				</Grid>

			</PageBody>

			<PageFooter/>

		</BaseGrid>
	)
}

export default Entry
