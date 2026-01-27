import { createBrowserRouter } from "react-router";
import Home from "../MainPages/Home";
import RootLayout from "../Layouts/RootLayout";
import Packages from "../MainPages/Packages";
import Prices from "../MainPages/Prices";
import Detail from "../MainPages/Detail";
import Feedback from "../MainPages/Feedback";
import JoinUs from "../MainPages/JoinUs";
import MyEarnings from "../MainPages/MyEarnings";
import DashboardLayout from "../Layouts/DashboardLayout";
import MyProfile from "../UserPages.jsx/MyProfile";
import MyFiles from "../UserPages.jsx/MyFiles";
import Syllabus from "../UserPages.jsx/Syllabus";
import Subscription from "../UserPages.jsx/Subscription";
import Limits from "../UserPages.jsx/Limits";
import Tutorial from "../UserPages.jsx/Tutorial";
import AllFiles from "../AdminPages/AllFiles";
import AddFiles from "../AdminPages/AddFiles";
import GrantAccess from "../AdminPages/GrantAccess";
import ViewFeedbacks from "../AdminPages/ViewFeedbacks";
import BalanceSheet from "../AdminPages/BalanceSheet";
import Expenses from "../AdminPages/Expenses";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/packages",
        Component: Packages,
      },
      {
        path: "/pricing",
        Component: Prices,
      },
      {
        path: "/details",
        Component: Detail,
      },
      {
        path: "/feedback",
        Component: Feedback,
      },
      {
        path: "/join-us",
        Component: JoinUs,
      },
      {
        path: "/my-earnings",
        Component: MyEarnings,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
      {
        index: true,
        path: "/dashboard",
        element: <MyProfile></MyProfile>,
      },
      {
        path: "/dashboard/my-files",
        element: <MyFiles></MyFiles>,
      },
      {
        path: "/dashboard/syllabus",
        element: <Syllabus></Syllabus>,
      },
      {
        path: "/dashboard/subscription",
        element: <Subscription></Subscription>,
      },
      {
        path: "/dashboard/limits",
        element: <Limits></Limits>,
      },
      {
        path: "/dashboard/tutorials",
        element: <Tutorial></Tutorial>,
      },
      {
        path: "/dashboard/all-files",
        element: <AllFiles></AllFiles>,
      },
      {
        path: "/dashboard/add-files",
        element: <AddFiles></AddFiles>,
      },
      {
        path: "/dashboard/grant-access",
        element: <GrantAccess></GrantAccess>,
      },
      {
        path: "/dashboard/view-feedbacks",
        element: <ViewFeedbacks></ViewFeedbacks>,
      },
      {
        path: "/dashboard/expenses",
        element: <Expenses></Expenses>,
      },
      {
        path: "/dashboard/balance-sheet",
        element: <BalanceSheet></BalanceSheet>,
      },
    ],
  },
]);

export default router;
