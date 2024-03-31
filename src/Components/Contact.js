import Form from "./Form"
export default function Contact(){
    return(
        <>
        <div className="contain Contact">
            <div className="cInfo">
            <h1>Stay in<span className='effect'> <h2>Touch</h2> </span>With Us</h1>
            <p>We are located in the heart of the city “Sangrur” just opposite the Main Bus Stand of Guhla sangrur.</p>
            </div>
<div className="contain"><iframe className="map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3446.8012759084622!2d75.83973047429586!3d30.242743009150413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3910513b1a9c4035%3A0xdedd0f6174f6d9a0!2sSai%20Samosa%20Center!5e0!3m2!1sen!2sin!4v1703444796154!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
</div>
<div className="wrapInfo">
 <div className="infoBox">
          <i class="fa-solid fa-location-crosshairs bg-color"></i>
        <h5>Address</h5>
        <p>Near Jawahar Sweets.
</p>
    </div>
    <div className="infoBox">
          <i class="fa-solid fa-location-crosshairs bg-color"></i>
        <h5>Address</h5>
        <p>Near Jawahar Sweets.
</p>
    </div>
    <div className="infoBox">
          <i class="fa-solid fa-location-crosshairs bg-color"></i>
        <h5>Address</h5>
        <p>Near Jawahar Sweets.
</p>
    
</div>
    </div>
    <div className="cInfo">
            <h1><span className='effect'><h2>Frequently</h2></span> Asked Questions</h1>
            <p> Here is the list of some questions which are frequently asked by our students or clients.
</p>
            </div>
        </div>
        </>
    )
}