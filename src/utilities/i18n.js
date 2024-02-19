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
                    HOME_ABOUT_DESCRIPTION: 'At 5ig, innovation meets intelligence in the dynamic world of artificial intelligence (AI) and automation. As leaders in this exciting field, our passion and expertise shine brightest in our work with Microsoft’s Power Platform, redefining new standards in intelligent automation and Robotic Process Automation (RPA).',
                    HOME_ABOUT_DESCRIPTION_2: 'Our mission is to transform the way organizations operate. We harness the power of AI, machine learning, and natural language processing to turn complex challenges into opportunities for efficiency and growth. Our goal is to take your operations from good to great, making every process smoother, faster, and more efficient.',
                    HOME_ABOUT_DESCRIPTION_3: 'Always hand in hand with our clients and technology.',
                    HOME_LINKEDIN_BUTTON: 'Find us on LinkedIn',

                    //SERVICES PAGES(IA)
                    IA_SERVICE_FIRST_TITLE: 'Predictive Analysis Platform',
                    IA_SERVICE_SECOND_TITLE: 'Intelligent Virtual Assistant',
                    IA_SERVICE_THIRD_TITLE: 'Recommendation Systems',

                    IA_SERVICE_FIRST_DESCR: 'Our platform utilizes the latest in AI and ML technology to offer predictive insights, allowing organizations to navigate future trends and data patterns for smarter decision-making. ',
                    IA_SERVICE_SECOND_DESCR: 'Our custom-designed virtual assistants, powered by AI, redefine customer service with automated responses and continuous, 24/7 support, enhancing user engagement and satisfaction.',
                    IA_SERVICE_THIRD_DESCR: 'By implementing Machine Learning, our team develops personalized recommendation systems that assist businesses in boosting customer retention and amplifying sales, ensuring a tailored user experience. ',

                    //SERVICES PAGES(RPA)
                    RPA_SERVICE_FIRST_TITLE: 'Business Process Automation',
                    RPA_SERVICE_SECOND_TITLE: 'RPA Implementation Consultancy',

                    RPA_SERVICE_FIRST_DESCR: 'Our expertise in RPA allows us to transform manual and repetitive tasks with automation solutions, significantly enhancing efficiency and minimizing human error.',
                    RPA_SERVICE_SECOND_DESCR: 'Offering both consultancy and implementation services, our team guides companies through identifying automation potentials and crafting streamlined automated workflows.',

                    //SERVICES PAGES (CLOUD)
                    CLOUD_SERVICE_FIRST_TITLE: 'Cloud Migration',
                    CLOUD_SERVICE_SECOND_TITLE: 'Cloud Management',

                    CLOUD_SERVICE_FIRST_DESCR: 'Our team specializes in assisting organizations with the transition of their systems and data to the cloud, ensuring scalable, secure infrastructure solutions tailored to meet specific needs.',
                    CLOUD_SERVICE_SECOND_DESCR: 'Our services extend to comprehensive cloud management, including monitoring and optimization, to ensure peak performance and robust security within cloud infrastructures.',

                    //SERVICES PAGES (BI)
                    BI_SERVICE_FIRST_TITLE: 'Personalized Dashboards',
                    BI_SERVICE_SECOND_TITLE: 'Advanced Data Analysis',

                    BI_SERVICE_FIRST_DESCR: 'Our expertise lies in crafting tailored dashboards and control panels, offering instant access to real-time information and insightful data analysis to empower strategic decision-making.',
                    BI_SERVICE_SECOND_DESCR: 'Leveraging Business Intelligence (BI) tools, our team conducts sophisticated data analyses, including trend analysis, customer segmentation, and anomaly detection, to uncover actionable insights.',

                    //SERVICES PAGES(WEB_DEV)
                    WEB_DEV_SERVICE_FIRST_TITLE: 'Responsive Website Development',
                    WEB_DEV_SERVICE_SECOND_TITLE: 'Mobile App Development',

                    WEB_DEV_SERVICE_FIRST_DESCR: 'Our team specializes in developing responsive websites that deliver a seamless and engaging user experience across all devices, ensuring accessibility and appeal.',
                    WEB_DEV_SERVICE_SECOND_DESCR: 'Our team develops custom mobile applications, including both native and cross-platform solutions, designed to meet the distinct needs and goals of our clients.',

                    //QUIENES SOMOS
                    QS_TITLE: 'OUR TEAM',
                    QS_VALUES: 'Values',
                    QS_VALUES_DESCR: 'At our core, we value trust, transparency, and ethical conduct. We\'re committed to developing solutions that not only respond swiftly to our clients\' needs but also incorporate cutting-edge technology and innovation to secure a competitive advantage.',
                    QS_MISION: 'Goal',
                    QS_MISION_DESCR: 'Our mission is to establish ourselves as the foremost trusted advisor in the realms of artificial intelligence, automation, and innovation. We aim to achieve this through offering a suite of solutions that are both effective and accessible, ensuring our clients receive unparalleled value.',
                    QS_VISION: 'Vision',
                    QS_VISION_DESCR: 'We envision a future where technology and innovation drive transformative change in both society and the corporate world. Our goal is to lead this change by delivering rapid advancements and tangible impacts, setting new standards of excellence and progress.',

                    //AUTOMATE PAGE
                    AUT_TITLE: 'Automate your company. ',
                    AUT_SUBTITLE: 'What are automated processes? ',

                    AUT_BUTTON: 'Chat with us',

                    AUT_IMG_TITLE_1: 'Artificial intelligence',
                    AUT_IMG_TITLE_2: 'Microsoft Power Platform',
                    AUT_IMG_TITLE_3: 'Machine Learning',
                    AUT_IMG_TITLE_4: 'Innovative Technological Platforms',

                    AUT_FIRST_TITLE: 'Our Clients Aim',
                    AUT_SECOND_TITLE: 'Our Clients Vision',
                    AUT_THIRD_TITLE: 'Our Clients Concerns',

                    AUT_FIRST_TEXT: 'Automated processes, powered by Artificial Intelligence, Microsoft Power Platform, Machine Learning, and innovative technology platforms, empower organizations to enhance their performance, efficiency, and flexibility.',
                    AUT_SECOND_TEXT: 'By integrating these cutting-edge solutions, businesses can craft exceptional and unforgettable customer experiences, setting new standards in service delivery and operational excellence.',
                    AUT_THIRD_TEXT: 'Our clients want to make their work better using automation technology. They\'re looking to improve and speed up their processes with solutions that fit exactly what they need. We help them do this by offering training, advice, and resources to make automated processes easier to use and more effective.',
                    AUT_FOUR_TEXT: 'They also need our help to fit these new technologies into their existing systems without running into problems with tech, organization, or rules. We provide smart plans, help with setting up, and technology platforms that make it easy to start using automation, ensuring everything works smoothly and meets the required standards. ',
                    AUT_FIFTH_TEXT: 'Our clients dream of becoming industry leaders through innovation and digital transformation enabled by automation. To support this vision, we aim to inspire them with success stories, highlight the advantages and possibilities of automation, and motivate them to embrace and innovate with these technologies.',
                    AUT_SIX_TEXT: 'They also strive for a seamless blend of automation and human effort, fostering a culture of teamwork and empowerment. Involving them in the creation, deployment, and upkeep of automated systems, clarifying the importance and benefits of these processes, and appreciating their efforts and accomplishments can be key strategies in achieving this harmony. ',
                    AUT_SEVEN_TEXT: 'Our clients worry about keeping control when using automated processes. They\'re concerned about mistakes or problems automation might cause. Our goal is to make sure these processes are safe, clear, and easy to track. We set up checks and oversight to keep everything running smoothly and have clear plans for handling any unexpected situations.',
                    AUT_EIGHT_TEXT: 'Another common worry is about automation taking over jobs and making people less important or competitive. We want to reassure everyone that our automation is here to support and enhance human work, not replace it. We focus on bringing out the best in everyone\'s abilities and providing chances for learning and growing in your career, making sure automation works for you, not against you.',
                    AUT_THIRD_TEXT_SMALLER:'Customers want to acquire skills and knowledge in automation to create solutions tailored to their needs.',
                    AUT_FOUR_TEXT_SMALLER:'Customers need support in overcoming technical, organizational or regulatory barriers when implementing automated processes.',
                    AUT_FIFTH_TEXT_SMALLER:'Customers dream of leading in their industries through automation-driven innovation.',
                    AUT_SIX_TEXT_SMALLER:'Customers aspire to achieve harmony between automated and human processes to foster a culture',
                    AUT_SEVEN_TEXT_SMALLER:'Customers are afraid of losing control or trust in automated processes, worried about errors or damage.',
                    AUT_EIGHT_TEXT_SMALLER:'Customers are afraid of being replaced by automated processes and losing their relevance in the labor market. ',
                    //CONTACT US PAGE
                    CONTACT_US_TITLE: 'Navigate your business into the Next Wave of Technological Innovation!',
                    //OTHER TITLES
                    MORE_SERVICES: 'More services',

                    //CONTACT FORM
                    FORM_HEADER: 'CONTACT US',
                    FORM_TITLE: 'Please use the form below to contact us. We will get back to you as quickly as possible. Thanks!',
                    FORM_CONTACT_US: 'CONTACT US',
                    FORM_FOLLOW: 'FOLLOW US ON',
                    FORM_NAME: 'Contact',
                    FORM_EMAIL: 'Give us your email',
                    FORM_PHONE: 'Give us your phone number',
                    FORM_MESSAGE: 'What would you like to contact us about?',
                    FORM_POLICY: 'By checking this box, you confirm that you have read and accept our data processing policy.',
                    FORM_POLICY_LINK: ' Click here to read the full policy.',
                    FORM_BUTTON: 'Send',
                    FORM_BUTTON_LOADING: 'Sending...',
                    FORM_NAME_LABEL:'Your name here',
                    FORM_NAME_PHONE:'Phone',
                    FORM_NAME_MESSAGE:'Type your message here',

                    //HEADER
                    HEADER_CONTRACT: 'Contact Us',
                    HEADER_SERVICES: 'Services',
                    HEADER_WHOWEARE: 'Our Team',

                    //FOOTER
                    FOOTER_MESSAGE: 'Management approves the data processing policy on February 8, 2024. It is published on the respective platforms for public access.',
                    FOOTER_POLICIES: 'Policies',
                    FOOTER_TERMS: 'Terms of use',
                    FOOTER_DATA: 'Data treatment',
                    FOOTER_WHOWEARE: 'Our Team',
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
                    HOME_SERVICE_IA_TITLE: 'INTELIGENCIA ARTIFICIAL (IA) Y MACHINE LEARNING (ML)',
                    HOME_SERVICE_RPA_TITLE: 'ROBOTIC PROCESS AUTOMATION (RPA)',
                    HOME_SERVICE_CLOUD_TITLE: 'CLOUD SOLUTIONS',
                    HOME_SERVICE_BI_TITLE: 'BUSINESS INTELLIGENCE (BI)',
                    HOME_SERVICE_WEB_DEV_TITLE: 'WEB DEVELOPMENT Y APP DEVELOPMENT',
                    HOME_ABOUT_US: 'ACERCA DE NOSOTROS',
                    HOME_ABOUT_DESCRIPTION: 'Líderes innovadores en inteligencia artificial y automatización, nos especializamos en automatización inteligente, RPA e inteligencia empresarial.',
                    HOME_ABOUT_DESCRIPTION_2: 'Nuestra misión es simplificar los procesos organizativos para los clientes aprovechando tecnologías de vanguardia como la inteligencia artificial, el aprendizaje automático y el procesamiento del lenguaje natural.',
                    HOME_ABOUT_DESCRIPTION_3: 'Siempre de la mano con nuestros clientes y la tecnología.',
                    HOME_LINKEDIN_BUTTON: 'Encuéntranos en LinkedIn',

                    //SERVICES PAGES (IA)
                    IA_SERVICE_FIRST_TITLE: 'Plataforma de Análisis Predictivo',
                    IA_SERVICE_SECOND_TITLE: 'Asistente Virtual Inteligente',
                    IA_SERVICE_THIRD_TITLE: 'Sistemas de Recomendación',

                    IA_SERVICE_FIRST_DESCR: 'Ofrecemos una plataforma de análisis predictivo impulsada por IA y ML que ayuda a las empresas a tomar decisiones más informadas mediante la identificación de tendencias y patrones en sus datos.',
                    IA_SERVICE_SECOND_DESCR: 'Desarrollamos asistentes virtuales personalizados que utilizan IA para mejorar la atención al cliente, automatizar respuestas y proporcionar soporte las 24 horas del día.',
                    IA_SERVICE_THIRD_DESCR: 'Creamos sistemas de recomendación basados en ML que ayudan a las empresas a aumentar la retención de clientes y las ventas al ofrecer recomendaciones personalizadas.',

                    //SERVICES PAGES(RPA)
                    RPA_SERVICE_FIRST_TITLE: 'Automatización de Procesos Empresariales',
                    RPA_SERVICE_SECOND_TITLE: 'Asesoría en Implementación de RPA',

                    RPA_SERVICE_FIRST_DESCR: 'Implementamos soluciones RPA para automatizar tareas repetitivas y manuales, lo que aumenta la eficiencia y reduce los errores humanos.',
                    RPA_SERVICE_SECOND_DESCR: 'Brindamos consultoría y servicios de implementación de RPA para ayudar a las empresas a identificar oportunidades de automatización y diseñar flujos de trabajo automatizados.',

                    //SERVICES PAGES (CLOUD)
                    CLOUD_SERVICE_FIRST_TITLE: 'Migración a la Nube',
                    CLOUD_SERVICE_SECOND_TITLE: 'Gestión de la Nube',

                    CLOUD_SERVICE_FIRST_DESCR: 'Ayudamos a las empresas a migrar sus sistemas y datos a la nube, ofreciendo opciones de infraestructura escalable y segura.',
                    CLOUD_SERVICE_SECOND_DESCR: 'Proporcionamos servicios de gestión de la nube, monitoreo y optimización para garantizar un rendimiento óptimo y una seguridad sólida en entornos de nube.',

                    //SERVICES PAGES (BI)
                    BI_SERVICE_FIRST_TITLE: 'Dashboards Personalizado',
                    BI_SERVICE_SECOND_TITLE: 'Análisis de Datos Avanzado',

                    BI_SERVICE_FIRST_DESCR: 'Diseñamos dashboards y paneles de control personalizados que brindan información en tiempo real y análisis de datos para la toma de decisiones estratégicas.',
                    BI_SERVICE_SECOND_DESCR: 'Utilizamos herramientas de BI para realizar análisis avanzados, como análisis de tendencias, segmentación de clientes y detección de anomalías.',

                    //SERVICES PAGES(WEB_DEV)
                    WEB_DEV_SERVICE_FIRST_TITLE: 'Desarrollo de Sitios Web Responsive',
                    WEB_DEV_SERVICE_SECOND_TITLE: 'Desarrollo de Aplicaciones Móviles',

                    WEB_DEV_SERVICE_FIRST_DESCR: 'Creamos sitios web responsivos y atractivos que se adaptan a diferentes dispositivos y ofrecen una experiencia de usuario excepcional.',
                    WEB_DEV_SERVICE_SECOND_DESCR: 'Diseñamos y desarrollamos aplicaciones móviles nativas y multiplataforma para satisfacer las necesidades específicas de nuestros clientes.',

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
                    MORE_SERVICES: 'Mas servicios',

                    //CONTACT US PAGE
                    CONTACT_US_TITLE: 'Lleva tu negocio a la nueva era de la tecnología!',

                    //CONTACT FORM
                    FORM_HEADER: 'CONTÁCTANOS',
                    FORM_TITLE: 'Por favor, utiliza el formulario a continuación para contactarnos. Nos pondremos en contacto contigo lo antes posible. ¡Gracias!',
                    FORM_CONTACT_US: 'CONTÁCTANOS',
                    FORM_FOLLOW: 'SÍGUENOS EN',
                    FORM_NAME: '¿Quién nos escribe?',
                    FORM_EMAIL: 'Regálanos tu correo',
                    FORM_PHONE: 'Regálanos tu teléfono',
                    FORM_MESSAGE: 'Dejanos tu mensaje',
                    FORM_POLICY: 'Al marcar esta casilla, confirmas que has leído y aceptas nuestra política de tratamiento de datos.',
                    FORM_POLICY_LINK: 'Haz clic aquí para leer la política completa.',
                    FORM_BUTTON: 'Enviar',
                    FORM_BUTTON_LOADING: 'Enviando...',
                    FORM_NAME_LABEL:'Nombre',
                    FORM_NAME_PHONE:'Teléfono',
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

