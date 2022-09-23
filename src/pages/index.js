import React, {useEffect, useState} from "react";
import {UserDetail, Login, realmApp} from "../components/RealmComponents";
import {BaseGrid} from "../components/layouts/Layouts";
import {PageBody, PageFooter, PageHeader} from "../components/layouts/PageSections";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {selectData, setTestString} from "../global_state/dataSlice";

const Home = () => {

	const data = useSelector(state => state)
	const dispatch = useDispatch()

	const [user, setUser] = useState();
	const router = useRouter()

	useEffect(() => {

		setUser(realmApp.currentUser)
		console.log(router)

	}, [])

	return (

		<BaseGrid>

			<PageHeader>

			</PageHeader>

			<PageBody>
				{user ? <UserDetail user={user}/> : <Login setUser={setUser}/>}
			</PageBody>

			<PageFooter>

			</PageFooter>

		</BaseGrid>

	);
};

export default Home;
