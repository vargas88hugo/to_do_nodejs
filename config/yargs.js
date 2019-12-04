// Configuration of the command line arguments
const argv = require('yargs')
                .command('create', 'Create an element to do', {
                    description: {
                        demand: true,
                        alias: 'd',
                        desc: 'Description of to do task'

                    }
                })
                .command('update', 'Update the completed status of the task', {
                    description : {
                        demand: true,
                        alias: 'd',
                        desc: 'Description of to do task'

                    },
                    complete: {
                        default: true,
                        alias: 'c',
                        desc: 'Mark completed a to do task'
                    }
                })
                .help()
                .argv;

module.exports = {
    argv
}