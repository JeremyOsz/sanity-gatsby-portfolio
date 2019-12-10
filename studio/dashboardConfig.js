export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5def1247fedd59b80efcdc7a',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-g3f85ocm',
                  apiId: 'c49092a4-6d88-496f-a0ac-add80fa12ab5'
                },
                {
                  buildHookId: '5def1247eebfc50b2bd0475a',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-2rn9yh3f',
                  apiId: '7f919bb5-59bc-4622-9d02-9ae1c335041e'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JeremyOsz/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-2rn9yh3f.netlify.com',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
