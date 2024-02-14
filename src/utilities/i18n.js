import i18n from 'i18next';

import { initReactI18next } from 'react-i18next';
const userLanguage = navigator.language.split('-')[0];

i18n
    .use(initReactI18next) // Aquí puedes seguir usando initReactI18next si lo prefieres
    .init({
        resources: {
            en: {
                translation: {
                    // Textos en inglés...
                    //HOME PAGE
                    HOME_TITLE: 'START',
                    HOME_TITLE_2: 'AUTOMATING YOUR WORLD',
                    HOME_MAIN_BUTTON: 'Automate your company.',
                    HOME_SERVICES_BUTTON: 'More information',
                    HOME_SERVICES_TITLE: 'SERVICES',
                    HOME_SERVICE_IA_TITLE: 'ARTIFICIAL INTELLIGENCE (AI) AND MACHINE LEARNING (ML)',
                    HOME_SERVICE_RPA_TITLE: 'ROBOTIC PROCESS AUTOMATION (RPA)',
                    HOME_SERVICE_CLOUD_TITLE: 'CLOUD SOLUTIONS',
                    HOME_SERVICE_BI_TITLE: 'BUSINESS INTELLIGENCE (BI)',
                    HOME_SERVICE_WEB_DEV_TITLE: 'WEB DEVELOPMENT AND APP DEVELOPMENT',
                    HOME_ABOUT_US: 'ABOUT US',
                    HOME_ABOUT_DESCRIPTION: 'We are 5IG, innovative artificial intelligence and automation leaders, with extensive experience handling Microsoft\'s Power Platform. We specialize in intelligent automation, RPA, and artificial intelligence.',
                    HOME_ABOUT_DESCRIPTION_2: 'Our mission is to simplify organizational processes for clients by leveraging cutting-edge technologies such as artificial intelligence, machine learning, and natural language processing.',
                    HOME_ABOUT_DESCRIPTION_3: 'Always hand in hand with our clients and technology.',
                    HOME_LINKEDIN_BUTTON: 'Find us on LinkedIn',

                    //SERVICES PAGES(IA)
                    IA_SERVICE_FIRST_TITLE: '',
                    IA_SERVICE_SECOND_TITLE: '',
                    IA_SERVICE_THIRD_TITLE: '',

                    IA_SERVICE_FIRST_DESCR: '',
                    IA_SERVICE_SECOND_DESCR: '',
                    IA_SERVICE_THIRD_DESCR: '',

                    //SERVICES PAGES(RPA)
                    RPA_SERVICE_FIRST_TITLE: '',
                    RPA_SERVICE_SECOND_TITLE: '',

                    RPA_SERVICE_FIRST_DESCR: '',
                    RPA_SERVICE_SECOND_DESCR: '',

                    //SERVICES PAGES (CLOUD)
                    CLOUD_SERVICE_FIRST_TITLE: '',
                    CLOUD_SERVICE_SECOND_TITLE: '',

                    CLOUD_SERVICE_FIRST_DESCR: '',
                    CLOUD_SERVICE_SECOND_DESCR: '',

                    //SERVICES PAGES (BI)
                    BI_SERVICE_FIRST_TITLE: '',
                    BI_SERVICE_SECOND_TITLE: '',

                    BI_SERVICE_FIRST_DESCR: '',
                    BI_SERVICE_SECOND_DESCR: '',

                    //SERVICES PAGES(WEB_DEV)
                    WEB_DEV_SERVICE_FIRST_TITLE: '',
                    WEB_DEV_SERVICE_SECOND_TITLE: '',

                    WEB_DEV_SERVICE_FIRST_DESCR: '',
                    WEB_DEV_SERVICE_SECOND_DESCR: '',

                    //QUIENES SOMOS
                    QS_TITLE: 'Who we are? ',
                    QS_VALUES: 'Our Values',
                    QS_VALUES_DESCR: 'Through trust, honesty, and ethical practices, we create quick and valuable solutions that offer a competitive advantage by leveraging technology and human innovation.',
                    QS_MISION: 'Goal',
                    QS_MISION_DESCR: 'Become the leading trusted partner to enable artificial intelligence, automation, and innovation through a wide range of cost-effective solutions.',
                    QS_VISION: 'Vision',
                    QS_VISION_DESCR: 'Transforming society and corporations with technology and innovation at an extraordinary speed.',

                    //AUTOMATE PAGE
                    AUT_TITLE: 'Automate your company. ',
                    AUT_SUBTITLE: 'What are automated processes? ',

                    AUT_BUTTON: 'Chat with us',

                    AUT_IMG_TITLE_1: 'Artificial intelligence',
                    AUT_IMG_TITLE_2: 'Microsoft Power Platform',
                    AUT_IMG_TITLE_3: 'Machine Learning',
                    AUT_IMG_TITLE_4: 'Innovative Technological Platforms',

                    AUT_FIRST_TITLE: 'Our clients usually want.',
                    AUT_SECOND_TITLE: 'Our client dreams of',
                    AUT_THIRD_TITLE: 'Our clients fear of',

                    AUT_FIRST_TEXT: 'Automated processes are those that are carried out through the use of technologies such as:',
                    AUT_SECOND_TEXT: 'These processes allow organizations to improve their performance, efficiency, and adaptability, as well as create exceptional and memorable customer experiences. ',
                    AUT_THIRD_TEXT: 'To acquire the skills and knowledge necessary to take advantage of the opportunities offered by automation technologies, and to create solutions that meet their specific needs and objectives. To do this, it can be helpful to offer them training, advice, and resources that help them understand how automated processes work, what factors influence their results, and how to optimize their performance and value. ',
                    AUT_FOUR_TEXT: 'Support when facing technical, organizational, or regulatory barriers to implement automated processes in their processes and systems. To do this, it can be useful to provide them with a strategic vision, a governance framework, and a technological platform that allows them to integrate automated processes with their existing systems and comply with standards and regulations. ',
                    AUT_FIFTH_TEXT: 'To be a leader in their industry or field thanks to innovation and digital transformation driven by automated processes. To achieve this, it can be helpful to inspire them with examples of successful cases, show them the benefits and potential of automated processes, and encourage them to experiment and innovate with automation technologies. ',
                    AUT_SIX_TEXT: 'Achieve harmony and synergy between automated processes and humans and create a culture of collaboration and empowerment. To do this, it can be helpful to involve them in the design, implementation, and maintenance of automated processes, explain the purpose and value of automated processes, and recognize and reward their contributions and achievements. ',
                    AUT_SEVEN_TEXT: 'Fear losing control or confidence in automated processes, and that these may cause errors, damage, or harm. Your audience may have doubts or concerns about the reliability, security, and accountability of automated processes, and fear that these may fail, deviate, or turn against them. To address this, it can be helpful to ensure the quality, transparency, and traceability of automated processes, establish control mechanisms, supervision, and audit of automated processes, and define standards and protocols for action in case of incidents or emergencies. ',
                    AUT_EIGHT_TEXT: 'Being replaced or displaced by automated processes and losing their relevance or competitiveness in the market. Your audience may feel threatened or undervalued by automated processes and fear that these may take away their jobs, roles, or positions. To address this, it can be helpful to assure them that automated processes are not intended to replace them but to complement their work, identify and develop their strengths and distinctive capabilities, and offer them opportunities for growth and professional development. ',
<<<<<<< HEAD
                    AUT_THIRD_TEXT_SMALLER:'Customers want to acquire skills and knowledge in automation to create solutions tailored to their needs.',
                    AUT_FOUR_TEXT_SMALLER:'Customers need support in overcoming technical, organizational or regulatory barriers when implementing automated processes.',
                    AUT_FIFTH_TEXT_SMALLER:'Customers dream of leading in their industries through automation-driven innovation.',
                    AUT_SIX_TEXT_SMALLER:'Customers aspire to achieve harmony between automated and human processes to foster a culture',
                    AUT_SEVEN_TEXT_SMALLER:'Customers are afraid of losing control or trust in automated processes, worried about errors or damage.',
                    AUT_EIGHT_TEXT_SMALLER:'Customers are afraid of being replaced by automated processes and losing their relevance in the labor market. ',
=======

                    //CONTACT US PAGE
                    CONTACT_US_TITLE: 'Carry your business into the new era of technology!',
>>>>>>> 258c53d73819beb1e2325549942a8393918aa9c0

                    //OTHER TITLES
                    MORE_SERVICES: '',

                    //CONTACT FORM
                    FORM_CONTACT_US: 'CONTACT US',
                    FORM_FOLLOW: 'FOLLOW US ON',
                    FORM_NAME: 'Who writes to us?',
                    FORM_EMAIL: 'Give us your email',
                    FORM_PHONE: 'Give us your phone number',
                    FORM_MESSAGE: 'Leave us a message',
                    FORM_POLICY: 'By checking this box, you confirm that you have read and accept our data processing policy.',
                    FORM_POLICY_LINK: ' Click here to read the full policy.',
                    FORM_BUTTON: 'Send',
                    FORM_BUTTON_LOADING: 'Sending...',
                    FORM_NAME_LABEL:'Name',
                    FORM_NAME_PHONE:'Phone',
                    FORM_NAME_MESSAGE:'Message',

                    //HEADER
                    HEADER_CONTRACT: 'Contract with us',
                    HEADER_SERVICES: 'Services',
                    HEADER_WHOWEARE: 'Who we are?',

                    //FOOTER
                    FOOTER_MESSAGE: 'Management approves the data processing policy on February 8, 2024. It is published on the respective platforms for public access.',
                    FOOTER_POLICIES: 'Policies',
                    FOOTER_TERMS: 'Terms of use',
                    FOOTER_DATA: 'Data treatment',
                    FOOTER_WHOWEARE: 'Who we are?',
                    FOOTER_CONTACT_US: 'Contact us'

                },
            },
            es: {
                translation: {
                    // Textos en español...
                    //HOME PAGE
                    HOME_TITLE: 'COMIENZA A',
                    HOME_TITLE_2: 'AUTOMATIZAR TU MUNDO',
                    HOME_MAIN_BUTTON: 'Automatiza tu empresa.',
                    HOME_SERVICES_BUTTON: 'Más información',
                    HOME_SERVICES_TITLE: 'SERVICIOS',
                    HOME_SERVICE_IA_TITLE: 'INTELIGENCIA ARTIFICIAL (IA) Y MACHINE LEARNING (ML) PRODUCTOS Y SERVICIOS ',
                    HOME_SERVICE_RPA_TITLE: 'ROBOTIC PROCESS AUTOMATION (RPA) PRODUCTOS Y SERVICIOS ',
                    HOME_SERVICE_CLOUD_TITLE: 'CLOUD SOLUTIONS',
                    HOME_SERVICE_BI_TITLE: 'BUSINESS INTELLIGENCE (BI)',
                    HOME_SERVICE_WEB_DEV_TITLE: 'WEB DEVELOPMENT Y APP DEVELOPMENT',
                    HOME_ABOUT_US: 'ACECA DE NOSOTROS',
                    HOME_ABOUT_DESCRIPTION: 'Líderes innovadores en inteligencia artificial y automatización, nos especializamos en automatización inteligente, RPA e inteligencia empresarial.',
                    HOME_ABOUT_DESCRIPTION_2: 'Nuestra misión es simplificar los procesos organizativos para los clientes aprovechando tecnologías de vanguardia como la inteligencia artificial, el aprendizaje automático y el procesamiento del lenguaje natural.',
                    HOME_ABOUT_DESCRIPTION_3: 'Siempre de la mano con nuestros clientes y la tecnología.',
                    HOME_LINKEDIN_BUTTON: 'Encuentranos en LinkedIn',

                    //SERVICES PAGES (IA)
                    IA_SERVICE_FIRST_TITLE: '',
                    IA_SERVICE_SECOND_TITLE: '',
                    IA_SERVICE_THIRD_TITLE: '',

                    IA_SERVICE_FIRST_DESCR: '',
                    IA_SERVICE_SECOND_DESCR: '',
                    IA_SERVICE_THIRD_DESCR: '',

                    //SERVICES PAGES(RPA)
                    RPA_SERVICE_FIRST_TITLE: '',
                    RPA_SERVICE_SECOND_TITLE: '',

                    RPA_SERVICE_FIRST_DESCR: '',
                    RPA_SERVICE_SECOND_DESCR: '',

                    //SERVICES PAGES (CLOUD)
                    CLOUD_SERVICE_FIRST_TITLE: '',
                    CLOUD_SERVICE_SECOND_TITLE: '',

                    CLOUD_SERVICE_FIRST_DESCR: '',
                    CLOUD_SERVICE_SECOND_DESCR: '',

                    //SERVICES PAGES (BI)
                    BI_SERVICE_FIRST_TITLE: '',
                    BI_SERVICE_SECOND_TITLE: '',

                    BI_SERVICE_FIRST_DESCR: '',
                    BI_SERVICE_SECOND_DESCR: '',

                    //SERVICES PAGES(WEB_DEV)
                    WEB_DEV_SERVICE_FIRST_TITLE: '',
                    WEB_DEV_SERVICE_SECOND_TITLE: '',

                    WEB_DEV_SERVICE_FIRST_DESCR: '',
                    WEB_DEV_SERVICE_SECOND_DESCR: '',

                    //QUIENES SOMOS
                    QS_TITLE: '¿QUIÉNES SOMOS?',
                    QS_VALUES: 'Nuestros Valores',
                    QS_VALUES_DESCR: 'A través de la confianza, prácticas honestas y éticas, creamos soluciones rápidas y valiosas que ofrecen una ventaja competitiva mediante la utilización de la tecnología y la innovación humana.',
                    QS_MISION: 'Misión',
                    QS_MISION_DESCR: 'Convertirnos en los socios de confianza líderes para habilitar la inteligencia artificial, la automatización y la innovación a través de una amplia gama de soluciones rentables.',
                    QS_VISION: 'Visión',
                    QS_VISION_DESCR: 'Transformar la sociedad y las corporaciones con tecnología e innovación a una velocidad extraordinaria.',

                    //AUTOMATE PAGE
                    AUT_TITLE: 'AUTOMATIZA TU EMPRESA',
                    AUT_SUBTITLE: '¿QUÉ SON LOS PROCESOS AUTOMATIZADOS?',

                    AUT_BUTTON: 'Chatea con nosotros',

                    AUT_IMG_TITLE_1: 'Inteligencia artificial',
                    AUT_IMG_TITLE_2: 'Microsoft Power Platform',
                    AUT_IMG_TITLE_3: 'Machine Learning',
                    AUT_IMG_TITLE_4: 'Plataformas Tecnológicas Innovadoras',

                    AUT_FIRST_TITLE: 'Nuestros Clientes suelen querer',
                    AUT_SECOND_TITLE: 'Nuestros Clientes sueñan con',
                    AUT_THIRD_TITLE: 'Nuestros Clientes temen',

                    AUT_FIRST_TEXT: 'Los procesos automatizados son aquellos que se realizan mediante el uso de tecnologías como:',
                    AUT_SECOND_TEXT: 'Estos procesos permiten a las organizaciones mejorar su rendimiento, eficiencia y adaptabilidad, así como crear experiencias de cliente excepcionales y memorables.',
                    AUT_THIRD_TEXT: 'Adquirir las habilidades y conocimientos necesarios para aprovechar las oportunidades que ofrecen las tecnologías de automatización, y crear soluciones que se ajusten a sus necesidades y objetivos específicos. Para ello, puede ser útil ofrecerles formación, asesoramiento y recursos que les ayuden a entender cómo funcionan los procesos automatizados, qué factores influyen en sus resultados y cómo optimizar su rendimiento y valor.',
                    AUT_FOUR_TEXT: 'Acompañamiento al enfrentarse a barreras técnicas, organizativas o regulatorias para implementar los procesos automatizados en sus procesos y sistemas. Para ello, puede ser útil proporcionarles una visión estratégica, un marco de gobernabilidad y una plataforma tecnológica que les permitan integrar los procesos automatizados con sus sistemas existentes y cumplir con las normas y regulaciones.',
                    AUT_FIFTH_TEXT: 'Ser un líder en su industria o campo gracias a la innovación y la transformación digital impulsadas por los procesos automatizados. Para ello, puede ser útil inspirarles con ejemplos de casos de éxito, mostrarles los beneficios y el potencial de los procesos automatizados, y animarles a experimentar y a innovar con las tecnologías de automatización',
                    AUT_SIX_TEXT: 'Lograr una armonía y una sinergia entre los procesos automatizados y los humanos, y crear una cultura de colaboración y empoderamiento. Para ello, puede ser útil involucrarles en el diseño, la implementación y el mantenimiento de los procesos automatizados, explicarles el propósito y el valor de los procesos automatizados, y reconocer y recompensar sus contribuciones y logros',
                    AUT_SEVEN_TEXT: 'Perder el control o la confianza en los procesos automatizados, y que estos causen errores, daños o perjuicios. Tu audiencia puede tener dudas o preocupaciones sobre la fiabilidad, la seguridad y la responsabilidad de los procesos automatizados, y temer que estos fallen, se desvíen o se vuelvan en su contra. Para ello, puede ser útil garantizarles la calidad, la transparencia y la trazabilidad de los procesos automatizados, establecer mecanismos de control, supervisión y auditoría de los procesos automatizados, y definir normas y protocolos de actuación en caso de incidencias o emergencias',
                    AUT_EIGHT_TEXT: 'Ser reemplazado o desplazado por los procesos automatizados, y perder su relevancia o competitividad en el mercado. Tu audiencia puede sentirse amenazada o desvalorizada por los procesos automatizados, y temer que estos les quiten su trabajo, su rol o su posición. Para ello, puede ser útil asegurarles que los procesos automatizados no pretenden sustituirles sino complementarles, identificar y desarrollar sus fortalezas y capacidades diferenciales, y ofrecerles oportunidades de crecimiento y desarrollo profesional',
                    AUT_THIRD_TEXT_SMALLER:'Los clientes quieren adquirir habilidades y conocimientos en automatización para crear soluciones adaptadas a sus necesidades.',
                    AUT_FOUR_TEXT_SMALLER:'Los clientes necesitan apoyo para superar barreras técnicas, organizativas o regulatorias al implementar procesos automatizados.',
                    AUT_FIFTH_TEXT_SMALLER:'Los clientes sueñan con liderar en sus industrias mediante la innovación impulsada por la automatización.',
                    AUT_SIX_TEXT_SMALLER:'Los clientes aspiran a lograr armonía entre procesos automatizados y humanos para fomentar una cultura colaborativa.',
                    AUT_SEVEN_TEXT_SMALLER:'Los clientes temen perder el control o la confianza en los procesos automatizados, preocupados por errores o daños.',
                    AUT_EIGHT_TEXT_SMALLER:'Los clientes tienen miedo de ser reemplazados por procesos automatizados y perder su relevancia en el mercado laboral.',



                    


                    //OTHER TITLES
                    MORE_SERVICES: '',

                    //CONTACT US PAGE
                    CONTACT_US_TITLE: 'Lleva tu negocio a la nueva era de la tecnología!',

                    //CONTACT FORM
                    FORM_CONTACT_US: 'CONTÁCTANOS',
                    FORM_FOLLOW: 'SIGUENOS EN',
                    FORM_NAME: '¿Quién nos escribe?',
                    FORM_EMAIL: 'Regálanos tu correo',
                    FORM_PHONE: 'Regálanos tu télefono',
                    FORM_MESSAGE: 'Dejanos tu mensaje',
                    FORM_POLICY: 'Al marcar esta casilla, confirmas que has leído y aceptas nuestra política de tratamiento de datos.',
                    FORM_POLICY_LINK: 'Haz clic aquí para leer la política completa.',
                    FORM_BUTTON: 'Enviar',
                    FORM_BUTTON_LOADING: 'Enviando...',
                    FORM_NAME_LABEL:'Nombre',
                    FORM_NAME_PHONE:'Telefono',
                    FORM_NAME_MESSAGE:'Mensaje',

                    //HEADER
                    HEADER_CONTRACT: 'Contrata con nosotros',
                    HEADER_SERVICES: 'Servicios',
                    HEADER_WHOWEARE: '¿Quiénes somos?',

                    //FOOTER
                    FOOTER_MESSAGE: 'La gerencia aprueba la política de tratamiento de datos el 8 de febrero de 2024, Se publica en las respectivas plataformas para el acceso público.',
                    FOOTER_POLICIES: 'Políticas',
                    FOOTER_TERMS: 'Términos de uso',
                    FOOTER_DATA: 'Tratamiento de datos',
                    FOOTER_WHOWEARE: '¿Quiénes somos?',
                    FOOTER_CONTACT_US: 'Contáctanos'

                },
            },
        },
        lng: userLanguage,
        fallbackLng: 'es',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
