process.env.JEST_JUNIT_OUTPUT_DIR = 'reports/jest'

module.exports = {
  reporters: ['default', 'jest-junit'],
  // coverageThreshold: {
  //   global: {
  //     branches: 80
  //   }
  // },
  errorOnDeprecated: true,
  notify: true
}
