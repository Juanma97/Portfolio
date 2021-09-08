import { Page, Text, View, Document, StyleSheet } from '@react-pdf/renderer';


const styles = StyleSheet.create({
    page: {
        fontSize: '14pt',
        flexDirection: 'column',
        backgroundColor: '#2c3e50'
    },
    sectionTitle: {
        margin: 10,
        padding: 10,
        color: 'white',
        textAlign: 'center'
    },
    personalSection: {
        padding: 20,
        color: 'white',
        backgroundColor: '#34495e',
        flexDirection: 'row'
    },
    personalData: {
        paddingLeft: '22pt'
    },
    experienceSection: {
        padding: 20,
        borderBottom: '1pt',
        borderBottomColor: 'white',
        color: 'white',
        backgroundColor: '#34495e'
    },
    stackSection: {
        backgroundColor: '#34495e',
        color: 'white',
        padding: 20,
        flexDirection: 'row'
    },
    stackData: {
        backgroundColor: '#34495e',
        color: 'white',
        padding: 20
    },
    stackTitle: {
        paddingBottom: '8pt',
        fontSize: '16pt'
    },
    section: {
        padding: 20,
        color: 'white',
        backgroundColor: '#34495e',
    }
})

function DocumentPDF() {
    return (
        <Document>
            <Page size="A4" style={styles.page} pageNumber={1}>
            <View style={styles.sectionTitle}>
                <Text>Datos personales</Text>
            </View>
            <View style={styles.personalSection}>
                <View>
                    <Text>Nombre: </Text>
                    <Text>Edad: </Text>
                    <Text>Email: </Text>
                    <Text>Linkedin: </Text>
                    <Text>Github: </Text>
                    <Text>Pagina web: </Text>
                </View>
                <View style={styles.personalData}>
                    <Text>Juan Manuel Pérez Toro</Text>
                    <Text>24 años</Text>
                    <Text>juanma97@outlook.com</Text>
                    <Text>https://www.linkedin.com/in/juanma-perez/</Text>
                    <Text>https://github.com/Juanma97</Text>
                    <Text>https://www.juanmaperezdev.com</Text>
                </View>
            </View>
            <View style={styles.sectionTitle}>
                <Text>Formación</Text>
            </View>
            <View style={styles.section}>
                <Text>Graduado en Ingeniería Informática</Text>
                <Text>Universidad de Las Palmas de Gran Canaria</Text>
                <Text>2015 - 2019</Text>
            </View>
            <View style={styles.sectionTitle}>
                <Text>Experiencia</Text>
            </View>
            <View style={styles.experienceSection}>
                <Text>Software Developer</Text>
                <Text>Autentia</Text>
                <Text>2019 - Actualmente</Text>
            </View>
            <View style={styles.experienceSection}>
                <Text>Junior QA Developer</Text>
                <Text>Imaweb</Text>
                <Text>2019 - 2019 (6 meses)</Text>
            </View>
            <View style={styles.sectionTitle}>
                <Text>Tecnologías</Text>
            </View>
            <View style={styles.stackSection}>
                <View style={styles.stackData}>
                    <Text style={styles.stackTitle}>Backend</Text>
                    <Text>Java - Intermedio</Text>
                    <Text>Kotlin - Básico</Text>
                    <Text>Spring Boot - Intermedio</Text>
                </View>
                <View style={styles.stackData}>
                    <Text style={styles.stackTitle}>Frontend</Text>
                    <Text>Angular - Básico/Intermedio</Text>
                    <Text>React - Básico</Text>
                </View>
                <View style={styles.stackData}>
                    <Text style={styles.stackTitle}>Otros</Text>
                    <Text>Git - Intermedio</Text>
                    <Text>SQL/NoSQL - Básico/Intermedio</Text>
                    <Text>TDD</Text>
                    <Text>SOLID, KISS, DRY</Text>
                </View>
            </View>
            </Page>
        </Document>
    );
}

export default DocumentPDF;