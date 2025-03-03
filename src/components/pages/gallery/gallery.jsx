import "./gallery.css"


const Gallery = ()=> {
    return (
        <div className="container">
            <h1 className="title">Gallery</h1>
            <div className="gallery">
                <div className="photo photo_tree">
                    <img src="src/assets/images/vegan.webp" alt=""/>
                </div>
                <div className="photo">
                    <img src="src/assets/images/Lasagne.webp" alt=""/>
                </div>
                <div className="photo">
                    <img src="src/assets/images/Honey.webp" alt=""/>
                </div>
                <div className="photo for">
                    <img src="src/assets/images/Garlic.jpg" alt=""/>
                </div>
                <div className="photo">
                    <img src="src/assets/images/aa.jpg" alt=""/>
                </div>
                <div className="photo">
                    <img src="src/assets/images/Easy.jpg" alt=""/>
                </div>
                <div className="photo photo_sunset">
                    <img src="src/assets/images/pexel.jpg" alt=""/>
                </div>
                <div className="photo photo_flower_sunset">
                    <img src="src/assets/images/Ea.jpg" alt=""/>
                </div>
                <div className="photo photo_flower">
                    <img src="src/assets/images/pancakes.webp" alt=""/>
                </div>
           
            </div>
        </div>
    )
}

export default Gallery;