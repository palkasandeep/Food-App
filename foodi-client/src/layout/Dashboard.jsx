// // import React from 'react'
// // import { Link, Outlet } from 'react-router-dom'
// // import { MdSpaceDashboard } from "react-icons/md";
// // import { FaUser } from "react-icons/fa";
// // import { MdOutlineManageAccounts } from "react-icons/md";
// // import { IoIosMenu } from "react-icons/io";
// // import { MdOutlineDashboard } from "react-icons/md";
// // import { FaBorderStyle } from "react-icons/fa";

// // import { BiSolidLogOutCircle } from "react-icons/bi";
// // import { FaSitemap } from "react-icons/fa";
// // import logo from "/logo.png";
// // const Dashboard = () => {

// //   const sharedLinks = (
// //     <>
// //       <li className='mt-3'>
// //         <Link to="/dashboard"><MdSpaceDashboard />Dashbard</Link>
// //       </li>
// //       <li className='mt-3'>
// //         <Link to="/menu"><FaSitemap />Menu</Link>
// //       </li>
// //       <li className='mt-3'>
// //         <Link to="/menu"><FaBorderStyle />Orders</Link>
// //       </li>

// //     </>
// //   )
// //   return (
// //     <div>
// //       <div className="drawer lg:drawer-open">
// //         <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
// //         <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
// //           {/* Page content here */}
// //           <div className='flex flex-col sm:items-center md:justify-center'>
// //             <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
// //               < MdOutlineDashboard />
// //             </label>
// //             <button className='btn flex items-center gap-2 rounded-full px-6 bg-green text-white sm-hidden'> <BiSolidLogOutCircle /></button>
// //           </div>
// //           <div className='mt-5 md:mt-2 mx-4'><Outlet /></div>

// //         </div>
// //         <div className="drawer-side">
// //           <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
// //           <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
// //             {/* Sidebar content here */}
// //             <li
// //             >
// //               <Link to="/dashboard" className='flex justify-start mb-3'>
// //                 <img src={logo} alt="" className="w-20 "></img>
// //                 <div className="badge badge-primary">Admin</div>
// //               </Link>
// //             </li>
// //             <hr />
// //             <li>
// //               <Link to="/dashboard"><MdSpaceDashboard />
// //                 Dash board</Link>
// //             </li>

// //             <li>
// //               <Link to="/dashboard/users"><MdOutlineManageAccounts />Manage bookings</Link>
// //             </li>
// //             <li>
// //               <Link to="/dashboard/users"><IoIosMenu />Add Menu</Link>
// //             </li>
// //             <li>
// //               <Link to="/dashboard/users"><FaSitemap />Manage Items</Link>
// //             </li>
// //             <li>
// //               <Link to="/dashboard/users"><FaUser />All users data</Link>
// //             </li>

// //             {/* shared links are */}

// //             {sharedLinks}
// //           </ul>

// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Dashboard
// import React from 'react';
// import { Link, Outlet } from 'react-router-dom';
// import { MdSpaceDashboard, MdOutlineManageAccounts, MdOutlineDashboard } from "react-icons/md";
// import { FaUser, FaSitemap, FaBorderStyle } from "react-icons/fa";
// import { IoIosMenu } from "react-icons/io";
// import { BiSolidLogOutCircle } from "react-icons/bi";
// import logo from "/logo.png";

// const Dashboard = () => {
//   const sharedLinks = (
//     <>
//       <li className="mt-3">
//         <Link to="/dashboard" className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-md transition-all duration-200">
//           <MdSpaceDashboard />
//           Dashboard
//         </Link>
//       </li>
//       <li className="mt-3">
//         <Link to="/menu" className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-md transition-all duration-200">
//           <FaSitemap />
//           Menu
//         </Link>
//       </li>
//       <li className="mt-3">
//         <Link to="/orders" className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-md transition-all duration-200">
//           <FaBorderStyle />
//           Orders
//         </Link>
//       </li>
//     </>
//   );

//   return (
//      const isAdmin = false

//       < div >
//     {
//       isAdmin?(
//         <div>
//       <div className="hidden lg:flex flex-col w-64 bg-white shadow-md">
//         <div className="p-5 flex items-center justify-start border-b border-gray-200">
//           <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
//           <div className="text-xl font-semibold">Admin Panel</div>
//         </div>
//         <ul className="flex-1 px-4 py-4 space-y-2">
//           <li>
//             <Link to="/dashboard" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-md transition-all">
//               <MdSpaceDashboard />
//               Dashboard
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashboard/users" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-md transition-all">
//               <MdOutlineManageAccounts />
//               Manage Bookings
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashboard/add-menu" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-md transition-all">
//               <IoIosMenu />
//               Add Menu
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashboard/manage-items" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-md transition-all">
//               <FaSitemap />
//               Manage Items
//             </Link>
//           </li>
//           <li>
//             <Link to="/dashboard/users" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-md transition-all">
//               <FaUser />
//               All Users Data
//             </Link>
//           </li>
//           {sharedLinks}
//         </ul>
//         <div className="p-4">
//           <button className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-all">
//             <BiSolidLogOutCircle />
//             Logout
//           </button>
//         {/* </div> */}
//       </div>

//       {/* Main Content */ }
//       <div className = "flex-1 overflow-auto" >
//       {/* Top bar */ }
//       < div className = "flex items-center justify-between p-4 bg-white shadow-md lg:hidden" >
//           <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">
//             <MdOutlineDashboard />
//           </label>
//           <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
//             <BiSolidLogOutCircle />
//             Logout
//           </button>
//         </ >

//   {/* Main content */ }
//   < div className = "p-6" >
//     <Outlet />
//         </ >
//       </div >

//         </div >
//       ): ()

//           }
//     </ >
//   );
// };

// export default Dashboard;
import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { MdSpaceDashboard, MdOutlineManageAccounts, MdOutlineDashboard } from "react-icons/md";
import { FaUser, FaSitemap, FaBorderStyle } from "react-icons/fa";
import { IoIosMenu } from "react-icons/io";
import { BiSolidLogOutCircle } from "react-icons/bi";
import logo from "/logo.png";

const Dashboard = () => {
  const isAdmin = false; // Change to true for admin mode

  const sharedLinks = (
    <>
      <li className="mt-3">
        <Link to="/dashboard" className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-md transition-all duration-200">
          <MdSpaceDashboard />
          Dashboard
        </Link>
      </li>
      <li className="mt-3">
        <Link to="/menu" className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-md transition-all duration-200">
          <FaSitemap />
          Menu
        </Link>
      </li>
      <li className="mt-3">
        <Link to="/orders" className="flex items-center gap-2 hover:bg-gray-200 p-2 rounded-md transition-all duration-200">
          <FaBorderStyle />
          Orders
        </Link>
      </li>
    </>
  );

  return (
    <div>
      {isAdmin ? (
        <div className="flex">
          {/* Sidebar */}
          <div className="hidden lg:flex flex-col w-64 bg-white shadow-md">
            <div className="p-5 flex items-center justify-start border-b border-gray-200">
              <img src={logo} alt="Logo" className="w-12 h-12 mr-3" />
              <div className="text-xl font-semibold">Admin Panel</div>
            </div>
            <ul className="flex-1 px-4 py-4 space-y-2">
              <li>
                <Link to="/dashboard" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-md transition-all">
                  <MdSpaceDashboard />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-md transition-all">
                  <MdOutlineManageAccounts />
                  Manage Bookings
                </Link>
              </li>
              <li>
                <Link to="/dashboard/add-menu" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-md transition-all">
                  <IoIosMenu />
                  Add Menu
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manage-items" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-md transition-all">
                  <FaSitemap />
                  Manage Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users" className="flex items-center gap-3 text-gray-700 hover:text-blue-600 hover:bg-gray-100 p-3 rounded-md transition-all">
                  <FaUser />
                  All Users Data
                </Link>
              </li>
              {/* Shared Links */}
              {sharedLinks}
            </ul>
            <div className="p-4">
              <button className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md transition-all">
                <BiSolidLogOutCircle />
                Logout
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 overflow-auto">
            {/* Top Bar */}
            <div className="flex items-center justify-between p-4 bg-white shadow-md lg:hidden">
              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button">
                <MdOutlineDashboard />
              </label>
              <button className="flex items-center gap-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition-all">
                <BiSolidLogOutCircle />
                Logout
              </button>
            </div>

            {/* Page Content */}
            <div className="p-6">
              <Outlet />
            </div>
          </div>
        </div>
      ) : (
        <div className="drawer lg:drawer-open">
          <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
          <div className="drawer-content flex flex-col sm:items-start sm:justify-start my-2">
            {/* Mobile Top Bar */}
            <div className="flex flex-col sm:items-center md:justify-center">
              <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                <MdOutlineDashboard />
              </label>
              <button className="btn flex items-center gap-2 rounded-full px-6 bg-green-500 text-white sm:hidden">
                <BiSolidLogOutCircle />
                Logout
              </button>
            </div>

            {/* Main Content */}
            <div className="mt-5 md:mt-2 mx-4">
              <Outlet />
            </div>
          </div>

          {/* Sidebar */}
          <div className="drawer-side">
            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
              <li>
                <Link to="/dashboard" className="flex justify-start mb-3">
                  <img src={logo} alt="Logo" className="w-20" />
                  <div className="badge badge-primary">User</div>
                </Link>
              </li>
              <hr />
              <li>
                <Link to="/dashboard" className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-md transition-all">
                  <MdSpaceDashboard />
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users" className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-md transition-all">
                  <MdOutlineManageAccounts />
                  Manage Bookings
                </Link>
              </li>
              <li>
                <Link to="/dashboard/add-menu" className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-md transition-all">
                  <IoIosMenu />
                  Add Menu
                </Link>
              </li>
              <li>
                <Link to="/dashboard/manage-items" className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-md transition-all">
                  <FaSitemap />
                  Manage Items
                </Link>
              </li>
              <li>
                <Link to="/dashboard/users" className="flex items-center gap-3 hover:bg-gray-200 p-2 rounded-md transition-all">
                  <FaUser />
                  All Users Data
                </Link>
              </li>
              {sharedLinks}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
