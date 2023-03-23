import React, { Suspense, lazy } from 'react';
// import { BounceLoader } from 'react-spinners';
import { Path } from 'constants/path'

interface routeInterface {
  path: string;
  component: React.FC;
}

interface routeProtectedInterface {
  path: string;
  component: React.FC;
  title?: string;
}

const load = (Component: React.FC) => (props: object) =>
(
  <Suspense
    fallback={
      <div className="w-[100%] my-[20%] flex justify-center items-center">
        {/* <BounceLoader loading color="#0052CC" /> */} Loading...
      </div>
    }
  >
    <Component {...props} />
  </Suspense>
);

const Home = load(lazy(() => import('pages/Home')));
const Order = load(lazy(() => import('pages/Order')));
const Messages = load(lazy(() => import('pages/Messages')));
const Settings = load(lazy(() => import('pages/Settings')));
const Products = load(lazy(() => import('pages/Products')));
const Statistics = load(lazy(() => import('pages/Statistics')));

const authProtectedRoutes: routeProtectedInterface[] = [
  { path: Path.Home, component: Home, title: "Home" },
  { path: Path.Order, component: Order, title: "Order" },
  { path: Path.Messages, component: Messages, title: "Messages" },
  { path: Path.Settings, component: Settings, title: "Settings" },
  { path: Path.Products, component: Products, title: "Products" },
  { path: Path.Statistics, component: Statistics, title: "Statistics" },
];


// const publicRoutes: routeInterface[] = [
//   { path: Path.Home, component: Home },
//   { path: Path.Faq, component: Faq },
//   { path: Path.Contact, component: Contact },
// ];

// const authRoutes: routeInterface[] = [
//   { path: Path.Login, component: Login },
//   { path: Path.SignUp, component: SignUp },
//   { path: Path.OnBoard, component: OnBoard },
//   { path: Path.ForgotPassword, component: ForgotPassword },
//   { path: Path.ResetPassword, component: ResetPassword },
// ];

export { authProtectedRoutes };
