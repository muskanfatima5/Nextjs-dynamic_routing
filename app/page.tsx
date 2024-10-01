//    DYNAMIC_ROUTING     //


import Link from "next/link"
function Countryname ({params}:{params : {Country:string}}) 
{
     return (
    <div>
    <h1 className="text-pink-500 font-bold text-5xl">Country Name : {params.Country}
    <ul className="text-3xl text-blue-400 underline">
        
        <li><Link href="/Country/{Country_name}/Pakistan">Pakistan</Link></li>
        <li><Link href="/Country/{Country_name}/India">India</Link></li>
        <li><Link href="/Country/{Country_name}/China">China</Link></li>
        <li><Link href="/Country/{Country_name}/UAE">UAE</Link></li>
        <li><Link href="/Country/{Country_name}/America">America</Link></li>
         
    </ul>
    </h1>
</div>)
}
export default Countryname