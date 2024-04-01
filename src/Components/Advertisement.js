import imgg from "./Assets/image-3.png";
import img from "./Assets/feature-2.png";
export default function Advertisement(){
return(
<div className="advertise container">
<div className="leftAd"><h3>
Why Choose PTE Over any other course ?
    </h3>
    <hr />
    <p>
    PTE makes your work, study or visa application simpler with a convenient English language test, accepted by governments and universities worldwide. Automatic Scoring makes us the Best ielts Institute and pte institute in Cheeka.
    </p>
<a href="#" className="primary-btn lB">Learn More</a>    </div>
<div className="rightAd">
    <div className="firstAd">
        <img src={img} alt="image" srcset="" />
        <h5>Complete Preparation</h5>
        <p>Build confidence for pte test day with our mix of pte preparation packages, scored practice tests, and free pte resources.
</p>
    </div>
    <div className="secondAd">
        <div className="circle">100%</div>
        <h5>Fast Results</h5>
        <p>Most pte test takers get their pte results within 48 hours. You can choose from frequent test dates.</p>
    </div>
    <div className="thirdAd">
    <i class="fa-solid fa-user-shield"></i>
        <h5>Less Stress</h5>
        <p>
Choose a better test experience with our two-hour pte computer-based exam, friendly test environment, and straightforward pte booking.</p>
    </div>
    <div className="fourAd">
        <img src={imgg} alt="image" srcset="" />
        <h5>Trusted by 3,000+ institutions</h5>
        <p>
The Australian, New Zealand, and UK governments accept PTE as proof of English for all visa tiers.</p>
</div>
        
</div>
</div>)
}
