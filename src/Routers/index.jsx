import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from '../Screens/Home'
import About from "../Screens/about";
import OurWork from "../Screens/ourwork";
import GetHelp from "../Screens/gethelp";
import Givedonation from "../Screens/givedonation";
import Contactus from "../Screens/contactus";
import { ProtectedRoutes } from './ProtectedRoutes'
import Sponsorship from "../Screens/Sponsorship";
import ProgramsProjects from "../Screens/Programs&Projects";
import TopVolunteer from "../Screens/TopVolunteer";
import Ourpodcast from "../Screens/ourpodcast";
import Transitionalagedyouthshelter from '../Screens/Transitionalagedyouthshelter'
import TransitionalHousingProgram from '../Screens/TransitionalHousingProgram'
import CommunityOutreachDay from '../Screens/eventdetail'
import Event from '../Screens/event'
import Profile from "../Screens/Profile";
import Announcementdetail from "../Screens/announcementdetail";
import EventDetail from "../Screens/eventdetail";
import Podcastdetail from "../Screens/ourpodcast/podcastdetail";
import AnnouncementList from "../Screens/announcementlist";
import PrivacyNotice from "../Screens/PrivacyNotice";
import JoinOurTeam from "../Screens/JoinOurTeam";
export default function UserRouter() {
  
  return (
    <BrowserRouter basename="/His-oc">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProtectedRoutes Components={Profile} />} />
        <Route path="/about" element={<About />} />
        {/* <Route path="/ourwork" element={<OurWork />} /> */}
        <Route path="/gethelp" element={<GetHelp />} />
        <Route path="/privacy-notice" element={<PrivacyNotice />} />
        <Route path="/givedonation" element={<Givedonation />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/sponsorship" element={<Sponsorship />} />
        <Route path="/our-work" element={<ProgramsProjects />} />
        <Route path="/top-volunteer" element={<TopVolunteer />} />
        <Route path="/ourpodcastlist" element={<Ourpodcast />} />
        {/* <Route path="/our-work/:id" element={<TransitionalHousingProgram />} /> */}
        <Route path="/our-work/:slug" element={<Transitionalagedyouthshelter />} />
        <Route path="/event" element={<Event />} />
        <Route path="/event/:id" element={<EventDetail />} />
        <Route path="/news-announcements/:id" element={<Announcementdetail />} />
        <Route path="/news-announcements" element={<AnnouncementList />} />
         
        <Route path="/ourpodcastlist/podcast-detail/:id" element={<Podcastdetail />} />

        {/* New Pages */}
        <Route path="/join-our-team" element={<JoinOurTeam />} />
      </Routes>
        
    </BrowserRouter>
  );
}