import Footer from "./base/Footer";
import Header from "./base/Header";
import Sidebar from "./base/Sidebar";

export default function Layout(props: { children: React.ReactNode }) {
  return (
    <div className="app-layout">
      <div className="app-sidebar">
        <Sidebar />
      </div>
      <div className="app-header">
        <Header />
      </div>
      <div className="app-main">
        <div className="app-content">{props.children}</div>
        <div className="app-footer">
          <Footer />
        </div>
      </div>
    </div>
  );
}
