const { findLastCommitSha } = require('./gitBuildId');

module.exports = {
  distDir: 'build',
  trailingSlash: true,
  generateBuildId: async () => {
    const commitSha = await findLastCommitSha();
    return commitSha.substr(0, 7);
  },
};
