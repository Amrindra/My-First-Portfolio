import "./styles.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import ProjectScreen from "./components/screens/ProjectScreen";
import Certificates from "./components/screens/CertificateScreen";
import AboutMeScreen from "./components/screens/AboutMeScreen";
import Contact from "./components/Contact";
import MyResume from "./components/resume/MyResume";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <main>
          <Container>
            <Switch>
              <Route exact path="/" component={HomePage} />
              <Route path="/projects" component={ProjectScreen} />
              <Route path="/aboutMe" component={AboutMeScreen} />
              <Route path="/contact" component={Contact} />
              <Route path="/certificate" component={Certificates} />
              <Route path="/resume" component={MyResume} />
            </Switch>
          </Container>
        </main>
        <hr />
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
