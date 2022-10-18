import React from "react";
import {BaseGrid} from "../../components/layouts/Layouts";
import {PageBody, PageFooter, PageHeader} from "../../components/layouts/PageSections";
import styled from "styled-components";
import {motion} from "framer-motion";
import Image from "next/image";

const MemberGrid = styled(motion.div).attrs(props => ({}))`

  display: grid;
  grid-template-columns: [Left] 1fr [hLLine1] 20px [hRLine1] 1fr [hLLine2] 20px [hRLine2] 1fr [hLLine3]  20px [hRLine3] 1fr [hLLine4] 20px [hRLine4] 1fr [hLLine5] 20px [hRLine5] 1fr [Right];
  grid-template-rows: [Top] 20px [ContentTop] 192px [vTLine1] 20px [vBLine1] 192px [vTLine2] 20px [vBLine2] 192px [vTLine3] 20px [vBLine3] 192px [vTLine4] 20px [vBLine4] 192px [ContentBottom] 20px [Bottom];
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

const MemberCardBase = styled(motion.div).attrs(props => ({}))`

  display: flex;
  width: 100%;
  height: 100%;
  padding: 16px;
  overflow: hidden;
  box-shadow: 0px 0px 24px 0px #e2e2e2;
  
  border: 1px solid lightgray;
  border-radius: 12px;

`

const MemberCard = ({gridArea, imgURL, title, name, description, delay}) => {

	return <>

		<MemberCardBase

			initial={{ x: -100, opacity: 0 }}
			transition={{ type: "spring", duration: 0.75, delay: delay}}
			animate={{ x: 0, opacity: 1 }}

			style={{
				display: "flex",
				gridArea: gridArea,
			}}>

			<div style={{

				display: "flex",
				position: "relative",
				overflow: "hidden",
				borderRadius: 10,
				padding: 16,

				width: "40%",

				flexGrow: 1,
				height: "100%",
				boxShadow: "0px 0px 16px 0px lightgray",
				border: "4px solid white",
				marginRight: 20
			}}>
				<Image src={imgURL}
				       height={300}
				       width={200}
				       layout={"fill"}
				       objectFit={"cover"}
				       style={{

					       borderRadius: 6,
					       padding: 0,
					       margin: 0,
					       zIndex: 10
				       }}
				/>
			</div>


			<div style={{

				display: "flex",
				flexDirection: "column",
				height: "100%",
				width: "60%"

			}}>
				<div style={{

					display: "flex",
					justifyContent: "flex-start",
					alignItems: "center",
					fontFamily: "Noto Sans TC",
					fontWeight: 600,
					fontSize: "1.2rem",
					height: 48,
					marginBottom: 12,

				}}>

					<div style={{
						fontWeight: 300
					}}>
						{title}
					</div>

					<div>
						{name}
					</div>

				</div>

				<div style={{

					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					fontFamily: "Noto Sans TC",
					fontWeight: 300,
					fontSize: "0.7rem",
					fontStyle: "italic",

					borderRadius: 10,
					backgroundColor:"whitesmoke",
					width: "100%",
					letterSpacing: 2,

					padding: 24,
					paddingBottom: 32,
					height: "100%"

				}}>
					{description}
				</div>
			</div>

		</MemberCardBase>


	</>
}

// https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/社長＿簡柏松.jpg

const Teams = () => {

	return (
		<BaseGrid>

			<PageHeader/>

			<PageBody>

				<MemberGrid>

					<MemberCard gridArea={"ContentTop / Left / vTLine1 / hLLine3"}
					            imgURL={"https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/社長＿簡柏松.jpg"}
					            title={"社長 "}
					            name={"–簡柏松"}
					            description={"「 不要讓未來的你 後悔現在的自己 」"}
					            delay={0}
					/>
					<MemberCard gridArea={"ContentTop / hRLine3 / vTLine1 / Right"}
					            imgURL={"https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/社長＿簡柏松.jpg"}
					            title={"副社長 "}
					            name={"–林昱德"}
					            description={"「 下定勇往直前的目標 篤定鍥而不捨的達成 」"}
					            delay={0.15}
					/>
					<MemberCard gridArea={"vBLine1 / Left / vTLine2 / hLLine3"}
					            imgURL={"https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/社長＿簡柏松.jpg"}
					            title={"公關  "}
					            name={"–陳映慈"}
					            description={"「 We are the only thing we can control 」"}
					            delay={0.3}

					/>
					<MemberCard gridArea={"vBLine1 / hRLine3 / vTLine2 / Right"}
					            imgURL={"https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/社長＿簡柏松.jpg"}
					            title={"財務  "}
					            name={"–林毓庭"}
					            description={"「 沒有目標的努力叫忙碌 有目標的努力才叫奮鬥 」"}
					            delay={0.45}

					/>
					<MemberCard gridArea={"vBLine2 / Left / vTLine3 / hLLine3"}
					            imgURL={"https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/社長＿簡柏松.jpg"}
					            title={"美宣  "}
					            name={"–蔡相㐮"}
					            description={"「 駑馬十駕 功在不舍 」"}
					            delay={0.6}

					/>
					<MemberCard gridArea={"vBLine2 / hRLine3 / vTLine3 / Right"}
					            imgURL={"https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/社長＿簡柏松.jpg"}
					            title={"教學  "}
					            name={"–胡芳瑜"}
					            description={"「 一個人知道自己為什麼而活 就可以忍受任何一種生活 」"}
					            delay={0.75}

					/>
					<MemberCard gridArea={"vBLine3 / Left / vTLine4 / hLLine3"}
					            imgURL={"https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/社長＿簡柏松.jpg"}
					            title={"教學  "}
					            name={"–曾浩儀"}
					            description={"「 一群人一起走 可以走的更遠」"}
					            delay={0.9}

					/>
					<MemberCard gridArea={"vBLine3 / hRLine3 / vTLine4 / Right"}
					            imgURL={"https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/社長＿簡柏松.jpg"}
					            title={"教學  "}
					            name={"–陳亮禎"}
					            description={"「 用愛看世界 然後活出自己！」"}
					            delay={1.05}

					/>
					<MemberCard gridArea={"vBLine4 / Left / vTLine5 / hLLine3"}
					            imgURL={"https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/社長＿簡柏松.jpg"}
					            title={"器材"}
					            name={"–林緯宸"}
					            description={"「 我不是這方面的專家 但經過反覆觀看貼文跟留言並仔細思考後 我得出了一個結論 那就是我沒有任何結論 因為正如我一開始說的 我不是一個專家 」"}
					            delay={1.2}

					/>
					{/*<MemberCard gridArea={"vBLine4 / hRLine3 / vTLine6 / Right"}*/}
					{/*            imgURL={"https://horizones-space.sgp1.cdn.digitaloceanspaces.com/NTUE/iOS-Club-Assets/Teams/社長＿簡柏松.jpg"}*/}
					{/*            title={"社長  簡柏松"}*/}
					{/*            description={"「 不要讓未來的你 後悔現在的自己 」"}*/}
					{/*            delay={1.35}*/}

					{/*/>*/}

				</MemberGrid>

			</PageBody>

			<PageFooter/>

		</BaseGrid>
	)
}

export default Teams

