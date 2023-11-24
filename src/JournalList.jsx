import {Link} from "react-router-dom";
const ReviewList = ({journals}) => {
    return(
        <div className="">
            {journals.map((s) => (
                <div className="mt-5" key={s.id}>
                    <Link to = {`/journals/${s.id}`}>
                    <div className="relative">
                        <div className='absolute text-slate-100 bg-rose-500 font-poppins font-semibold text-sm px-2 uppercase z-10 rounded-full'>{s.subject}</div>
                        <div className='absolute text-slate-100 bg-orange-400 font-poppins font-semibold text-sm px-2 uppercase z-10 right-0 rounded-full'>{s.date}</div>
                        <div className='relative top-3 bg-slate-50/70 rounded-lg hover:bg-slate-50/20 p-4 pb-2 hover:text-slate-50 text-slate-800 font-bold text-xs font-poppins'>
                            {s.body} 
                        </div>
                    </div>                    
                    </Link> 
                </div>
            ))}      
        </div>
    );
};

export default ReviewList;