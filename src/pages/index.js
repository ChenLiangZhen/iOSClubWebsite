import React, {useEffect, useState} from "react";
import {UserDetail, Login, realmApp} from "../components/RealmComponents";
import {BaseGrid} from "../components/Layouts/Layouts";
import {Body, Footer, Header} from "../components/Layouts/PageSections";

const Home = () => {

  const [user, setUser] = useState();

  useEffect(() => {
     setUser(realmApp.currentUser)
  }, [])

  return (
       <BaseGrid>
          <Header>

          </Header>

          <Body>
             { user ? <UserDetail user={user} /> : <Login setUser={setUser} /> }
          </Body>

          <Footer>

          </Footer>

       </BaseGrid>
  );
};

export default Home;
