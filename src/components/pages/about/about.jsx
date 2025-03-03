import "./about.css"
import image from "../../../assets/images/bg-about.jpg"

const About = ()=> {
    return (
        <div className="about-container">
            <h2 className="title-about">About Our Recipe Collection</h2>
            <div className="in-about-container">
                <img src={image} alt=""  className="about-image"/>
                <div className="about-text">
                    <p className="text">Welcome to our Recipe Collection, where we bring together a wide variety of delicious, easy-to-make, and healthy recipes to inspire your cooking adventures! Whether you're a seasoned chef or just starting to explore the world of home-cooking, you'll find something to satisfy your taste buds.
                        Our collection features a diverse range of recipes, from comforting classics to adventurous new dishes from all around the world. Each recipe is carefully selected and tested to ensure that you get the best quality and flavor in every bite. Whether you're looking for quick weeknight meals, impressive dinner party ideas, or indulgent desserts, we have something to suit every occasion.
                        Every recipe comes with a list of simple, easy-to-follow instructions, along with nutritional information to help you make informed decisions about your meals. We also include helpful tips and tricks to make cooking easier and more fun!
                        Join us on this culinary journey and discover new flavors, expand your cooking skills, and make mealtimes more enjoyable than ever before!
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About;