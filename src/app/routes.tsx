import { createBrowserRouter, useNavigate } from "react-router";
import { MainLayout } from "./components/MainLayout";
import { Dashboard } from "./components/Dashboard";
import { Contrats } from "./components/Contrats";
import { Depenses } from "./components/Depenses";
import { Trajets } from "./components/Trajets";
import { AEM } from "./components/AEM";
import { Revenus } from "./components/Revenus";
import { BilanAnnuel } from "./components/BilanAnnuel";
import { LandingPage } from "./components/LandingPage";
import { Login } from "./components/Login";
import { Signup } from "./components/Signup";

function LandingWrapper() {
  const navigate = useNavigate();
  return (
    <LandingPage
      onLogin={() => navigate('/login')}
      onSignup={() => navigate('/signup')}
      onGoToFeatures={() => {}}
      onGoToCgu={() => {}}
      onGoToMentions={() => {}}
    />
  );
}

function LoginWrapper() {
  const navigate = useNavigate();
  return (
    <Login
      onLogin={() => navigate('/app')}
      onGoToSignup={() => navigate('/signup')}
      onBackToHome={() => navigate('/')}
    />
  );
}

function SignupWrapper() {
  const navigate = useNavigate();
  return (
    <Signup
      onSignup={() => navigate('/app')}
      onBackToLogin={() => navigate('/login')}
      onBackToHome={() => navigate('/')}
    />
  );
}

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingWrapper />,
  },
  {
    path: "/login",
    element: <LoginWrapper />,
  },
  {
    path: "/signup",
    element: <SignupWrapper />,
  },
  {
    path: "/app",
    element: <MainLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "contrats", element: <Contrats /> },
      { path: "depenses", element: <Depenses /> },
      { path: "trajets", element: <Trajets /> },
      { path: "aem", element: <AEM /> },
      { path: "revenus", element: <Revenus /> },
      { path: "bilan", element: <BilanAnnuel /> },
    ],
  },
]);
