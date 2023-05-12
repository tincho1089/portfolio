import { benvido, chevron, pami, paypal, pokemon, email, netflix, person } from '../assets'

const experiences = [
  {
    title: 'Full Stack Developer',
    companyName: 'Kenility - PayPal',
    icon: paypal,
    iconBg: '#E6DEDD',
    date: 'March 2022 - Present',
    points: [
      'Development of new functionalities on platforms in React JS and Vue JS.',
      'Collaboration with cross-functional teams including designers, product managers, and other developers to create high-quality products.',
      'Backend development in NodeJS and Express.',
      'Process automation through Slackbot in nodeJS.',
      'Participation in code reviews and providing constructive feedback to other developers.',
    ],
  },
  {
    title: 'Software Engineer',
    companyName: 'Chevron',
    icon: chevron,
    iconBg: '#E6DEDD',
    date: 'Mar 2020 - Jul 2022',
    points: [
      'Application development through React JS and Angular JS.',
      'Backend development through Azure Function in C#.',
      'Deploy to different environments through Azure Pipelines.',
      'Development of digital solutions through the Dynamics 365 suite (PowerApp, Common Data Services, Flows).',
      'Database modeling for oil wells.',
      'Technical support for existing applications developed under the Dynamics 365 suite.',
    ],
  },
  {
    title: 'Freelancer Developer',
    companyName: 'Freelance',
    icon: person,
    iconBg: '#E6DEDD',
    date: 'May 2018 - Present',
    points: [
      'Development of cross-platform mobile applications.',
      'Construction of personalized management systems (invoicing, stock control, customer loyalty, Ecommerce, online reservations, sports competitions for different modalities)',
      'Survey and analysis of news.',
      'Modeling and database construction through SQL Server.',
      'Data migration.',
      'Implementation and face-to-face training of personnel.',
      'Telephone support for remote training and capture of new requirements.',
      'Configuring servers in virtual machines (OS: Windows Server)',
      'Contracting and configuration of DNS.',
      'Technical support and weekly backup.',
    ],
  },
  {
    title: 'Programmer Analyst',
    companyName: 'PAMI - Comprehensive Medical Care Program',
    icon: pami,
    iconBg: '#E6DEDD',
    date: 'Jun 2019 - Dec 2019',
    points: [
      'Automation of operational processes through JAVA.',
      'Survey and analysis of new developments and processes.',
      'Generation of reports through SAS.',
      'Development and training of the medical prescription audit system.',
      'Implementation and control of tools for massive price updates.',
      'Creation of tools for data import.',
      'Automation of audit processes.',
      'Automation of the collection of debits to apply.',
      'Creation of the automatic treatment assignment process.',
    ],
  },
  {
    title: 'Web Developer',
    companyName: 'Benvido Systems',
    icon: benvido,
    iconBg: '#E6DEDD',
    date: 'Jul 2015 - May 2018',
    points: [
      'Development of management systems through web platforms.',
      'Survey and analysis of requirements.',
      'Database construction in the IBexpert suite.',
      'Telephone support for training and error resolution.',
      'mobile developments with Unity.',
    ],
  },
]

const projects = [
  {
    name: 'Netflix',
    description:
      'web platform that allows users to explore and enjoy a variety of movies through an intuitive and easy-to-use interface, providing a content viewing experience similar to that offered by the Netflix platform.',
    tags: [
      {
        name: 'react',
        color: '#7f5dff',
      },
      {
        name: 'Typescript',
        color: '#ca00ff',
      },
      {
        name: 'Vite',
        color: '#F07B05',
      },
    ],
    image: netflix,
    sourceCodeLink: 'https://github.com/tincho1089/PokemonApi#-pokemon-application',
  },
  {
    name: 'Pokedex Pokemon',
    description:
      'Web application that allows Pokemon trainers to explore the vast world of these creatures in one place. Using the Pokemon API, the Pokedex features an attractive and easy-to-use user interface that allows users to search for detailed information on any Pokemon.',
    tags: [
      {
        name: 'react',
        color: '#F07B05',
      },
      {
        name: 'redux',
        color: '#ca00ff',
      },
      {
        name: 'axios',
        color: '#7f5dff',
      },
    ],
    image: pokemon,
    sourceCodeLink: 'https://github.com/tincho1089/PokemonApi#-pokemon-application',
  },
  {
    name: 'Email Simulator',
    description:
      'Email and real-time communications solution that uses sockets to provide a seamless and seamless experience for users, enabling them to communicate and collaborate effectively and efficiently.',
    tags: [
      {
        name: 'nestJS',
        color: '#F07B05',
      },
      {
        name: 'react',
        color: '#ca00ff',
      },
      {
        name: 'mongodb',
        color: '#7f5dff',
      },
    ],
    image: email,
    sourceCodeLink: 'https://github.com/tincho1089/PokemonApi#-pokemon-application',
  },
]

const skills = [
  { type: 'React', level: 90 },
  { type: 'Typescript', level: 85 },
  { type: 'JavaScript', level: 87 },
  { type: 'Node', level: 80 },
  { type: 'Express', level: 80 },
  { type: 'MongoDb', level: 60 },
  { type: 'SQL', level: 88 },
  { type: 'C#', level: 75 },
  { type: 'Angular', level: 20 },
  { type: 'Vue', level: 30 },
]

export { experiences, projects, skills }
