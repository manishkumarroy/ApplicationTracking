// Controllers
import Dashboard from "Pages/dashboard";
import ContactUS from "Pages/contactUs";
import Login from "Pages/login";
// import Notfound from "Pages/notFound";
import PanelList from "Pages/panelList";
import ViewPanel from "Pages/panelList/viewPanelData";
import Header from "Components/header";
import SignUp from "Pages/signup";

function Injector(component, deps, name) {
  const hoc = component(deps);
  hoc.displayName = name;

  return hoc;
}

export default {
  Header: Injector(Header, null, "Header"),
  Dashboard: Injector(Dashboard, null, "Dashboard"),
  ContactUS: Injector(ContactUS, null, "ContactUS"),
  Login: Injector(Login, null, "Login"),
  PanelList: Injector(PanelList, null, "PanelList"),
  ViewPanel: Injector(ViewPanel, null, "PanelList"),
  // Notfound: Injector(Notfound, null, "Notfound"),
  SignUp: Injector(SignUp, null, "SignUp"),
};
