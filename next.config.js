const { findLastCommitSha } = require('./gitBuildId');

module.exports = {
  distDir: 'build',
  generateBuildId: async () => {
    const commitSha = await findLastCommitSha();
    return commitSha.substr(0, 7);
  },
};
