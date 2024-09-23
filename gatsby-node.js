const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const queryResults = await graphql(`
    query MyQuery {
      allContentfulEquipo {
        nodes {
          id
          urlSlug
        }
      }
    }
  `);

  const memberTemplate = path.resolve(`src/templates/member.js`);
  queryResults.data.allContentfulEquipo.nodes.forEach((node) => {
    createPage({
      path: `/equipo/${node.urlSlug?.trim()}`,
      component: memberTemplate,
      context: {
        // This time the entire product is passed down as context
        id: node.id,
        member: node,
      },
    });
  });
};
