import React from 'react'

class ImageCard extends React.Component {
    constructor(props) {
        super(props);

        this.state= { spans: 0 };

        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);

        // the properties inside the image can only be ontained 
        // after it is rendered to the DOM (downloaded)
        // hence, if we access it when it's not yet downlad,
        // take clientHeight as instance, it'd appear to be 0
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;

        const spans = Math.ceil( height / 10 + 1 );

        this.setState({ spans });
    }

    render() {
        const { description, urls } = this.props.image;

        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }}>
                <img
                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular} 
                />
            </div>
        )
    }
}

export default ImageCard;