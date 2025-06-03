import Article from "./Article";
import Footer from "./footer";
import Header from "./header";
import Main1 from "./main1";


export default function App() {
    return (
        <div>
            <Header />
            <Main1 />
            <Article title="comprendre les Hooks" author="Alice" />
            <Article title="VSX VS HTML" author="Bob" />
            <Article title="Use clearly the props" author="Charlie" />
            <Footer />
        </div> 
    )
}