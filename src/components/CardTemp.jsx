import s from "./CardTemp.module.css";
export default function CardTemp ({label, value}) {
    return (
        <div className= {s.cardTemp}>
           <label >{label}</label>
           <span>{value}</span> 
        </div>
    )
}