// import React from "react";

// const Addmenu = () => {
//   return (
//     <div className="w-full md:w-[870px] mx-auto">
//       <h2 className="text-2xl font-semibold my-4">
//         Upload a new <span className="text-green bg-slate-500">menu Item</span>
//       </h2>

//       {/* Creating the form */}
//       <div>
//         <form>
//           <div className="form-control w-full max-w-xs">
//             {/* Top Labels */}
//             <label className="flex justify-between mb-1">
//               <span className="label-text">Recipe Name</span>
//             </label>

//             {/* Input */}
//             <input
//               type="text"
//               placeholder="Recipie Name"
//               className="input input-bordered w-full"
//             />
//           </div>
//           {/* we are writing the 2nd row */}
//           <div>
//             {/* 2nd row */}
//             <div className="flex items-center">
//               <div className="form-control w-full my-6">
//                 <div className="label">
//                   <span className="label-text">
//                     category
//                   </span>
//                 </div>
//                 <select className="select select-bordered">
//                   <option disabled selected>
//                     select category
//                   </option>
//                   <option value="salad">Salad</option>
//                   <option value="pizza">Pizzaa</option>
//                   <option value="dessert">Desserts</option>
//                   <option value="soup">Soup</option>
//                   <option value="drinks ">Drinks</option>
//                   <option value="populardishes">Popular</option>
//                 </select>
//               </div>
//             </div>

//             <div className="form-control w-full max-w-xs">
//               {/* Top Labels */}
//               <label className="flex justify-between mb-1">
//                 <span className="label-text">Price</span>
//               </label>

//               {/* Input */}
//               <input
//                 type="number"
//                 placeholder="price"
//                 className="input input-bordered w-full"
//               />
//             </div>

//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Addmenu;
import React from "react";

const Addmenu = () => {
  return (
    <div className="w-full md:w-[870px] mx-auto p-4 border rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold my-4">
        Upload a new{" "}
        <span className="text-green-500 bg-slate-500 px-2 py-1 rounded">
          menu Item
        </span>
      </h2>

      {/* Form */}
      <form>
        {/* Recipe Name */}
        <div className="form-control w-full mb-4">
          <label className="flex justify-between mb-1">
            <span className="label-text font-medium">Recipe Name</span>
          </label>
          <input
            type="text"
            placeholder="Recipe Name"
            className="input input-bordered w-full"
          />
        </div>

        {/* Category and Price (Side by Side) */}
        <div className="flex gap-4">
          {/* Category */}
          <div className="form-control w-1/2">
            <label className="flex justify-between mb-1">
              <span className="label-text font-medium">Category</span>
            </label>
            <select className="select select-bordered w-full">
              <option disabled selected>
                Select category
              </option>
              <option value="salad">Salad</option>
              <option value="pizza">Pizza</option>
              <option value="dessert">Desserts</option>
              <option value="soup">Soup</option>
              <option value="drinks">Drinks</option>
              <option value="populardishes">Popular</option>
            </select>
          </div>

          {/* Price */}
          <div className="form-control w-1/2">
            <label className="flex justify-between mb-1">
              <span className="label-text font-medium">Price</span>
            </label>
            <input
              type="number"
              placeholder="Price"
              className="input input-bordered w-full"
            />
          </div>
        </div>

        {/* this is the 3rd div for the  */}
        <div>
          <label className="form-control">
            <div className="label">
              <span className="label-text">Recipe details</span>
            </div>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Add the complete Recipe details"
            ></textarea>

          </label>
        </div>
      </form>
    </div>
  );
};

export default Addmenu;
