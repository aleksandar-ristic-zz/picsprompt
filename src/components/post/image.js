import propTypes from 'prop-types'

export default function Image({ src, caption }) {
	return <img src={src} alt={caption} />
}

Image.propTypes = {
	src: propTypes.string.isRequired,
	caption: propTypes.string.isRequired
}
