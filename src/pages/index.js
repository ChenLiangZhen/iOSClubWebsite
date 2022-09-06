import React, {useEffect, useState} from "react";
import {UserDetail, Login, realmApp} from "../components/RealmComponents";
import {BaseGrid} from "../components/Layouts/Layouts";
import {Body, Footer, Header} from "../components/Layouts/PageSections";
import Image from "next/image";

const Home = () => {

  const [user, setUser] = useState();

  useEffect(() => {
     setUser(realmApp.currentUser)
  }, [])

  return (
       <BaseGrid>
          <Header>
             <Image src={require("../public/iosclub_webbanner.svg")}
                    height={64}
                    width={180}

                    style={{
                       padding: 0,
                       margin: 0
                    }}
             />
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
