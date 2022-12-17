import './bannerText.css';

const BannerText = (props) => {
    return (
        <div class="jumbotron jumbotron-fluid bannerText">
            <div class="container">
                <h1 class="display-4">{props.conteudo}</h1>
            </div>
        </div>
    )
}

export default BannerText