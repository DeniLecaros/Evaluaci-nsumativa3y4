import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export const Card = ({ id, titulo, subtitulo, img }) => {
    return (
        <div className="col-md-4 mb-4 d-flex justify-content-center">
            <div className="card" style={{ width: '18rem' }}>
                <img src={img} className="card-img-top" alt={titulo} />
                <div className="card-body">
                    <h5 className="card-title">{titulo}</h5>
                    <p className="card-text">{subtitulo}</p>
                    <Link to={`/animes/${id}`} className="btn btn-primary">
                        Ver más
                    </Link>
                </div>
            </div>
        </div>
    );
};

Card.propTypes = {
    id: PropTypes.number.isRequired,
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
};
