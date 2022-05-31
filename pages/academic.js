import React from "react";
import Footer from "../Components/Footer";
import NavBar from "../Components/NavBar";
import style from '../styles/academicCss.css'
const academic = () => {
  return (
    <>
      <NavBar />
      <div className="">
      <div className="1st">
        <div className="1.1 flex flex-row space-x-7 justify-center ">
          <div className={style.bgImg}>
          <div className="1.a flex justify-center order-last bg-purple-500 m-2 w-1/3 h-64">
            <div className="w-1/2 h-48 bg-purple-400">
            <div  className="blog-desc"  >

          <p>With a comprehensive curriculum designed by its highly professional educators, <a href="https://www.bloombraineducation.com/">Bloom Brain</a> provides students with the best online learning for 1st-9th grade CBSE.</p>

          <p>Instead of monotonous and boring sessions, we aim to offer interactive assessment tools in the online classes for 1st grade where children are being challenged to think and explore creative ideas through their</p>

          <p>Not only this but teachers at <a href="https://www.bloombraineducation.com/">Bloombrain</a> also create various online reading games for 1st grade students to imaginative skills.</p>

          <p>give them a better understanding of the concepts from their formative years itself. Furthermore, in the online classes for 1st grade, teachers also make sure to give positive feedback to the kids, and encourage them when something goes wrong.</p>
        </div>
            </div>
          </div>
          </div>
          <div className="1.b flex justify-center bg-blue-400 w-1/2 h-64 m-2">
            <div>
              class
            </div>
          </div>
        </div>
      </div>
      </div>
      <Footer />
    </>
  );
};

export default academic;
