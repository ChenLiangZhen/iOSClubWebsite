import React, {useEffect, useState} from "react";
import styled from "styled-components";
import {AnimatePresence, motion, useAnimation} from "framer-motion";
import Link from "next/link"
import {useJsMediaQuery} from "../../utils/customHooks";
import {NavLogin} from "./PageSections";
import {useRouter} from "next/router";

const MobileMenuButton = ({
	                          isOpen = false,
	                          width = 24,
	                          height = 24,
	                          strokeWidth = 2,
	                          color = "#000",
	                          transition = null,
	                          lineProps = null,
	                          ...props
                          }) => {

	const variant = isOpen ? "opened" : "closed";

	const top = {

		closed: {
			rotate: 0,
			translateY: 0
		},
		opened: {
			rotate: 45,
			translateY: 2
		}
	};
	const center = {
		closed: {
			opacity: 1
		},
		opened: {
			opacity: 0
		}
	};
	const bottom = {
		closed: {
			rotate: 0,
			translateY: 0
		},
		opened: {
			rotate: -45,
			translateY: -2
		}
	};
	lineProps = {
		stroke: color,
		strokeWidth: 2,
		vectorEffect: "non-scaling-stroke",
		initial: "closed",
		animate: variant,
		transition,
		...lineProps
	};
	const unitHeight = 4.5;
	const unitWidth = (unitHeight * (width)) / (height);

	return (
		<motion.svg
			viewBox={`0 0 ${unitWidth} ${unitHeight}`}
			overflow="visible"
			preserveAspectRatio="none"
			width={width}
			height={height}
			{...props}
		>
			<motion.line
				x1="0"
				x2={unitWidth}
				y1="0"
				y2="0"
				variants={top}
				{...lineProps}
			/>
			<motion.line
				x1="0"
				x2={unitWidth}
				y1="2"
				y2="2"
				variants={center}
				{...lineProps}
			/>
			<motion.line
				x1="0"
				x2={unitWidth}
				y1="4"
				y2="4"
				variants={bottom}
				{...lineProps}
			/>
		</motion.svg>
	);
};

const MobileMenu_ = styled(motion.button)`
  
  display: none;

  @media (max-width: 480px) {

    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    z-index: 10;
    height: 32px;
    width: 32px;
    background-color: transparent;
    outline: none;
    border: none;

    right: 12px;
    top: 8px
  }
`

const MobileMenuContainer = styled(motion.div)`
  
  display: none;

  @media (max-width: 480px) {

    position: fixed;
    display: flex;
    height: 100vh;
    width: 100vw;
    padding-bottom: 96px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    left: 0;
    top: 0;
    opacity: 0;
    z-index: 9;

    background-color: rgba(255, 255, 255, 0.8);
    backdrop-filter: blur(8px);
    -webkit-backdrop-filter: blur(8px) ;

    //&:before {
    //  content: '';
    //  position: absolute;
    //  width: 100%;
    //  height: 100%;
    //  background-color: rgba(255, 255, 255, 0.75);
    //  backdrop-filter: blur(8px);
    //  -webkit-backdrop-filter: blur(8px);
    //}
  }
`

const MobileMenuItem_ = styled(motion.a)`
  
  display: none;

  @media (max-width: 480px) {

    padding: 10px 0px 10px 0px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    font-size: 15px;
    letter-spacing: 1px;
    font-family: "Noto Sans TC", sans-serif;
    font-weight: 300;

    &:active {

    }

    &:focus {
      background-color: whitesmoke;
    }
  }
`

function MobileMenuItem(props) {
	return (
		<Link href={props.link} passHref>
			<MobileMenuItem_ {...props}>{props.title}</MobileMenuItem_>
		</Link>
	)
}

function MobileMenu() {

	const [isOpen, setOpen] = useState(false)
	const route = useRouter().route
	const media = useJsMediaQuery()

	function sleep(ms) {
		return new Promise(resolve => setTimeout(resolve, ms));
	}

	const controls = useAnimation()

	const sequence = async () => {
		await sleep(225)
		await controls.start((i) => ({
			opacity: 1,
			x: 0,
			transition: {
				type: "spring",
				bounce: 0.3,
				duration: 0.8,
				delay: i * 0.15
			}
		}))
	}

	useEffect(() => {
		if (!media.phone) setOpen(false)

	}, [media])

	useEffect(() => {
		sequence()
	})

	return (

		<>
			<AnimatePresence>
				{isOpen ?

					<MobileMenuContainer key="MobileMenuContainer" initial={{y: -1200, opacity: 0.5}}
					                     animate={{y: -25, opacity: 1}} exit={{y: -50, opacity: 0}}
					                     transition={{type: "spring", stiffness: 250, damping: 50}}>

						{/*<HStack padding="0 10px 0 10px" width="100%" height="60px" margin="" justifyContent="flex-start">*/}
						{/*	<SunIcon size={32}/>*/}
						{/*</HStack>*/}

						<Link href={'/routes/Entry'} passHref>
							<NavLogin name={"/routes/Entry"} route={route}>
								????????????
							</NavLogin>
						</Link>

						<MobileMenuItem custom={0} initial={{x: -25, opacity: 0}} animate={controls} title="????????????"
						                link="/routes/Introduction"/>

						<MobileMenuItem custom={1} initial={{x: -25, opacity: 0}} animate={controls} title="????????????"
						                link="/routes/LearningResources"/>
						<MobileMenuItem custom={2} initial={{x: -25, opacity: 0}} animate={controls} title="????????????"
						                link="/routes/Teachers"/>
						<MobileMenuItem custom={3} initial={{x: -25, opacity: 0}} animate={controls} title="????????????"
						                link="/routes/Teams"/>
						<MobileMenuItem custom={4} initial={{x: -25, opacity: 0}} animate={controls} title="?????????"
						                link=""/>


					</MobileMenuContainer> : <></>
				}
			</AnimatePresence>


			<MobileMenu_ onClick={() => setOpen(!isOpen)}>
				<MobileMenuButton
					isOpen={isOpen}
					width={20}
					height={14}
					strokeWidth="1px"
				/>
			</MobileMenu_>
		</>
	)
}

export default MobileMenu
