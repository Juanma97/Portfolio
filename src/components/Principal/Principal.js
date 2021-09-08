import { PDFDownloadLink } from '@react-pdf/renderer';
import DocumentPDF from '../DocumentPDF/DocumentPDF';
import './Principal.css';

function Principal() {
    return (
        <div className="container">
            <div className="text">
                <div className="title">Software Developer</div>
                <div className="paragraph">Java · Spring Boot · React</div>
                <PDFDownloadLink className="download" document={<DocumentPDF />} fileName="CV-Juanma-Perez.pdf">
                    {({ blob, url, loading, error }) => (loading ? 'Cargando documento...' : 'Descarga mi CV :)')}
                </PDFDownloadLink>
            </div>
        </div>
    );
}

export default Principal;