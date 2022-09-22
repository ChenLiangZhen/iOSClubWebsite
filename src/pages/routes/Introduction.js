import React, {useEffect, useState} from "react";
import {BaseGrid} from "../../components/layouts/Layouts";
import {PageBody, PageFooter, PageHeader} from "../../components/layouts/PageSections";
import {useRouter} from "next/router";
import {realmApp} from "../../components/RealmComponents";


const Introduction = () => {

	const [user, setUser] = useState();
	const router = useRouter()

	useEffect(() => {

		setUser(realmApp.currentUser)
		console.log(router)
	})

	 return (
		 <BaseGrid>

			 <PageHeader/>

			 <PageBody>



			 </PageBody>

			 <PageFooter/>

		 </BaseGrid>
	 )
}

export default Introduction

