export const filterData=(searchedWord,restuarant)=>{
   const filteredData=restuarant.filter(
     (res) =>
       res.restuarantName.includes(searchedWord) ||
       res.items.find((ele) => {
         return ele === searchedWord;
       })
   );
   return filteredData;
}