import React, {useEffect, useState} from "react";
import {UserDetail, Login, realmApp} from "../components/RealmComponents";
import {BaseGrid} from "../components/layouts/Layouts";
import {PageBody, PageFooter, PageHeader} from "../components/layouts/PageSections";
import Image from "next/image";

const Home = () => {

  const [user, setUser] = useState();

  useEffect(() => {
     setUser(realmApp.currentUser)
  }, [])

  return (
       <BaseGrid>

          <PageHeader>

          </PageHeader>

          <PageBody>
             { user ? <UserDetail user={user} /> : <Login setUser={setUser} /> }
          </PageBody>

          <PageFooter>

          </PageFooter>

       </BaseGrid>
  );
};

export default Home;
