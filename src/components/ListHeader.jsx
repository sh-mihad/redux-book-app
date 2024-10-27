import { useDispatch, useSelector } from "react-redux"
import { filters } from "../redux/status/actions"

export default function ListHeader() {
  const {filter} = useSelector((state)=>state.status)
  const dispatch = useDispatch()

  const handleFilter = (value)=>{
   if(value === "all" ){
    dispatch(filters(value))
   }else{
    dispatch(filters(value))
   }
  }
  return (
    <div className="flex items-center justify-between mb-12">
    <h4 className="mt-2 text-xl font-bold">Book List</h4>

    <div className="flex items-center space-x-4">
      <button onClick={()=>handleFilter("all")} className={`filter-btn ${filter === "all" && "active-filter"}`} id="lws-filterAll">All</button>
      <button  onClick={()=>handleFilter("featured")} className={`filter-btn ${filter === "featured" && "active-filter"}`} id="lws-filterFeatured">Featured</button>
    </div>
  </div>
  )
}
