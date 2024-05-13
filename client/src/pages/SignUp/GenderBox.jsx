
const GenderBox = ({ onGenderChange, selectedGender }) => {
     
   
     return (
       <div className="flex">
         <div className="form-control">
           <label
             className={`label gap-2 cursor-pointer ${
               selectedGender === "male" ? "selected" : ""
             }`}
           >
             <span className="label-text text-black">Male</span>
             <input
               type="checkbox"
               className={`checkbox bg-slate-900`}
               checked={selectedGender === "male"}
               onChange={() => onGenderChange("male")}
             />
           </label>
         </div>
         <div className="form-control">
           <label
             className={`label gap-2 cursor-pointer ${
               selectedGender === "female" ? "selected" : ""
             }`}
           >
             <span className="label-text text-black">Female</span>
             <input
               type="checkbox"
               className={`checkbox bg-slate-900`}
               checked={selectedGender === "female"}
               onChange={() => onGenderChange("female")}
             />
           </label>
         </div>
       </div>
     );
   };
   
   export default GenderBox;
   