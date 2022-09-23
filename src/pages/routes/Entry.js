import React, {useEffect, useState} from "react";
import {BaseGrid} from "../../components/layouts/Layouts";
import {PageBody, PageFooter, PageHeader} from "../../components/layouts/PageSections";
import styled from "styled-components";
import {motion} from "framer-motion";
import {useDispatch, useSelector} from "react-redux";
import {selectData} from "../../global_state/dataSlice";

const Grid = styled(motion.div).attrs(props => ({}))`

  display: grid;
  grid-template-columns: [Left] 1fr [Right];
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

const Content = styled(motion.div).attrs(props => ({}))`

  grid-area: TitleDivider / Left / ContentBottom / Right;

  display: flex;
  justify-content: flex-start;
  //align-items: center;

`

const Title = styled(motion.div).attrs(props => ({}))`

  grid-area: ContentTop / Left / TitleDivider / Right;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  font-size: 1.2rem;
  font-weight: 300;
  font-family: "Noto Sans TC";
  letter-spacing: ${props => props.route == props.name ? "4px" : "2px"};
  transition-duration: 250ms;

  z-index: 10;
`

const Entry = () => {

	const [password, setPassword] = useState("werwer")
	const [accountID, setAccountID] = useState("rrrr")

	const [showPassword, setShowPassword] = useState(false)

	const data = useSelector(selectData)
	const dispatch = useDispatch()


	useEffect(() => {

		console.log("DATA IS!!! :: " + data)

	}, [])

	return (

		<BaseGrid>

			<PageHeader/>

			<PageBody>

				<Grid>

					<Title>
						社員登入
					</Title>

					<Content>

						<div style={{
							height: "100%",
							width: 1,
							backgroundColor: "gray",

							marginRight: 16
						}}>

						</div>

						<div style={{
							display: "flex",
							flexDirection: "column"
						}}>
							<div style={{
								fontSize: "0.8rem",
								color: "gray",
							}}>
								帳號
							</div>
							<input spellCheck={false}
							       defaultValue={accountID}
							       type={"text"}
							       onChangeText={prev => setAccountID(prev)}
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
							       defaultValue={password}
							       onChangeText={prev => setAccountID(prev)}
							       type={"password"}
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
						</div>


					</Content>


				</Grid>

			</PageBody>

			<PageFooter/>

		</BaseGrid>
	)
}

export default Entry
