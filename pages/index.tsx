import Layout from "../components/layout";
import Form from "../components/form";
import UserInfo from "../components/userInfo";
import UserContacts from "../components/userContacts";

function Home() {
  return (
    <Layout>
      <Form />
      <UserInfo />
      <UserContacts />
    </Layout>
  );
}

export default Home;
