import HeaderComponent from "./components/global/HeaderComponent";
import Footer from "./components/global/FooterComponent";
import Home from "./pages/HomeComponent";
import ArticleProcessingCharges from "./pages/ArticleProcessingCharges";
import AuthorSubmissionGuidelines from "./pages/AuthorSubmissionGuidelines";
import GuidelinesFroPeerReviewers from "./pages/GuidelinesFroPeerReviewers";
import HowWePublish from "./pages/HowWePublish";
import PeerReviewModels from "./pages/PeerReviewModels";
import PublishWithUs from "./pages/PublishWithUs";
import PublishingEditorRolesAndResponsibilities from "./pages/PublishingEditorRolesAndResponsibilities";
import SellPage from "./pages/SellPage";
import SellPageForeign from "./pages/SellPageForeign";
import UnlockingKnowledgeForAll from "./pages/UnlockingKnowledgeForAll";
import WelcomeToMegaJournals from "./pages/WelcomeToMegaJournals";

function App() {
  return (
    <>
      <HeaderComponent />
      {/* <Home /> */}
      {/* <ArticleProcessingCharges /> */}
      {/* <AuthorSubmissionGuidelines /> */}
      {/* <GuidelinesFroPeerReviewers /> */}

      {/* <HowWePublish /> */}
      {/* <PeerReviewModels /> */}
      {/* <PublishWithUs /> */}
      {/* <PublishingEditorRolesAndResponsibilities /> */}
      <SellPage />
      {/* <SellPageForeign /> */}
      {/* <UnlockingKnowledgeForAll /> */}
      {/* <WelcomeToMegaJournals /> */}
      <Footer />
    </>
  );
}

export default App;
