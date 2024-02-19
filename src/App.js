import Navbar from "./Component/Navbar";
import About from "./Component/About";
import Section from "./Component/Section";
import Footer from "./Component/Footer";

const App =()=>{
    return(
        <div className="main">
            <Navbar />
            <About/>
            <Section
            title = "skils"
            description= "loream100asfdjkljlksa kdlasjlkfjklasd ,sadaksdfkl mc,mskdlamfl ,mdldmlkmsdklfdsf mkmlkascm"
            />
            <Section
            title = "project"
            description= "loream100asfdjkljlksa kdlasjlkfjklasd ,sadaksdfkl mc,mskdlamfl ,mdldmlkmsdklfdsf mkmlkascm"
            />
            <Section
            title = "content"
            description= "loream100asfdjkljlksa kdlasjlkfjklasd ,sadaksdfkl mc,mskdlamfl ,mdldmlkmsdklfdsf mkmlkascm"
            />
            <Footer/>
        </div>
    )
}
export default App;