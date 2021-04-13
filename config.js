module.exports = {
  pathPrefix: '',
  siteUrl: 'http://localhost:8000/',
  siteTitle: 'Mario E. Garcia Huerta',
  siteDescription: 'Portafolio Personal',
  author: 'Mario E. Garcia Huerta',
  postsForArchivePage: 3,
  defaultLanguage: 'es',
  disqusScript: process.env.DISQUS_SCRIPT || 'https://rolwinreevan.disqus.com/embed.js',
  pages: {
    home: '/',
    experiencia: 'experiencia',
    proyectos: 'proyectos',
    contact: 'contact',
    resume: 'resume',
    blog:'blog'
       
    
  },
  social: {
    github: 'https://github.com/Marioegarcia',
    facebook: 'https://www.facebook.com/marioezequiel.garciahuerta.3',
    instagram: 'https://www.instagram.com/wario_egh/',
    linkedin:'https://www.linkedin.com/in/mario-ezequiel-garcía-huerta-97421a20b'
    
  },
  contactFormUrl: process.env.CONTACT_FORM_ENDPOINT || 'https://getform.io/f/09a3066f-c638-40db-ad59-05e4ed71e451',
  googleAnalyticTrackingId: process.env.GA_TRACKING_ID || '',
  
};
