/* ignore file coverage: just a config file */
module.exports = () => {
    return {
      loose: true,
      files: [
        'src/*.js', 
        'test/*.js', 
        '!test/*.test.js'
      ],
      tests: [
        'test/*.test.js'
        ],
      hints: {
        ignoreCoverageForFile: /ignore file coverage/,
        ignoreCoverage: /ignore coverage/
      },
      env: {
        type: 'node',
        runner: 'node'
      },
  
      testFramework: 'jest'
    };
  };
  