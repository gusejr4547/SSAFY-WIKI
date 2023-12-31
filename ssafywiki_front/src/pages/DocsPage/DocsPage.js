import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";

import Contents from "components/Docs/Content";
import History from "components/Docs/History";
import Edit from "components/Docs/Edit";
import Authority from "components/Docs/Authority";
import Diff from "components/Docs/Diff";
import Raw from "components/Docs/Raw";
import RedirectSearch from "components/Docs/RedirectSearch";

import ListPage from "./ListPage";
import Sidebar from "components/Docs/Sidebar";
import styles from "./DocsPage.module.css";
import RecentListPage from "./RecentListPage"
const { Sider, Content } = Layout;

const UserPage = () => {
  return (
    <Layout hasSider>
      <Content className={styles.Content}>
        <Routes>
          <Route path="/redirect" element={<RedirectSearch />} />
          <Route path="/list" element={<ListPage />} />
          <Route path="/history/:docsId/:title" element={<History />} />
          <Route path="/history/:docsId/:title/:subtitle" element={<History />} />
          <Route path="/edit/:docsId/:title" element={<Edit />} />
          <Route path="/edit/:docsId/:title/:subtitle" element={<Edit />} />
          <Route path="/auth/:docsId/:title" element={<Authority />} />
          <Route path="/auth/:docsId/:title/:subtitle" element={<Authority />} />
          <Route path="/content/:docsId/:title" element={<Contents />} />
          <Route path="/content/:docsId/:title/:subtitle" element={<Contents />} />
          <Route path="/diff/*" element={<Diff />} />
          <Route path="/raw/:title" element={<Raw />} />
          <Route path="/raw/:title/:subtitle" element={<Raw />} />
          <Route path="/recentlist" element={<RecentListPage/>}/>
        </Routes>
      </Content>

      <Sider
        style={{
          backgroundColor: "#f5f5f5",
        }}
      >
        <Sidebar />
      </Sider>
    </Layout>
  );
};

export default UserPage;
