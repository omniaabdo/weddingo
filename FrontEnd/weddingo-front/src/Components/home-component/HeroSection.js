
import search_img from '../../assets/img/smail-logos/search.svg'
export default function HeroSection() {
  return (
    <>
      <section className="min-section section_home_hero">
        <div className="container">
          <div className="text_container">
            <h2 className='text_container-heading'> معنا سوف تجد ما تبحث عنه</h2>
            <p>
              من خلال خدماتنا ستجد ما تريد وبالسعار المناسبة لك , واكثر من ذلك
            </p>
            <div className="search_hero input-group mb-3" dir='ltr'>
              <span className="input-group-text" id="basic-addon1">
                <img src={search_img} alt=""/>
              </span>
              <input
                type="text"
                className="form-control"
                placeholder="سيارة للايجار, قاعة مفتوحة,...الخ"
                aria-label="Username"
                aria-describedby="basic-addon1"
              />
              <button className='btn'>بحث</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
// export default function HeroSection() {
//   return (
//     <>
//       <section className="min-section section_home_hero">
//         <div className="container">
//           <div className="text_container">
//             <h2 className='text_container-heading'> Let's find your wedding team</h2>
//             <p>
//               Search over 250,000 local professionals with reviews, pricing,
//               availability, and more
//             </p>
//             <div className="search_hero input-group mb-3">
//               <span className="input-group-text" id="basic-addon1">
//                 <img src={search_img} alt=""/>
//               </span>
//               <input
//                 type="text"
//                 className="form-control"
//                 placeholder="Service..ex(venuse, cars ,..etc)"
//                 aria-label="Username"
//                 aria-describedby="basic-addon1"
//               />
//               <button className='btn'>Search</button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }
