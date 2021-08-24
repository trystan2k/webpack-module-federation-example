const moduleFedereationRemotes = {
  app_about: {
    host: 'http://localhost',
    port: '3004',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  },
  app_todo: {
    host: 'http://localhost',
    port: '3002',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  },
  app_dashboard: {
    host: 'http://localhost',
    port: '3001',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  },
  app_login: {
    host: 'http://localhost',
    port: '3003',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  },
  app_shell: {
    host: 'http://localhost',
    port: '3000',
    version: '1.0.0',
    filename: 'remoteEntry.js'
  }
}

module.exports.moduleFedereationRemotes = moduleFedereationRemotes

module.exports.buildRemoteUrl = (app_name) => {
  return `${app_name}@${moduleFedereationRemotes[app_name].host}:${moduleFedereationRemotes[app_name].port}/${moduleFedereationRemotes[app_name].version}/${moduleFedereationRemotes[app_name].filename}`
}
