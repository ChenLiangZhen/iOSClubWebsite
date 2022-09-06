import React, {useEffect, useState} from "react";
import {UserDetail, Login, realmApp} from "../components/RealmComponents";
import {BaseGrid} from "../components/Layouts/Layouts";
import {Body, Footer, Header, PageFooter, PageHeader} from "../components/Layouts/PageSections";
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

          <Body>
             { user ? <UserDetail user={user} /> : <Login setUser={setUser} /> }
          </Body>

          <PageFooter>

          </PageFooter>

       </BaseGrid>
  );
};

export default Home;
