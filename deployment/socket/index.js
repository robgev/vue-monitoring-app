module.exports = function(server) {
	const io = require('socket.io').listen(server);

	io.sockets.on('connection', function(socket) {

		console.log('Log ::: WS ::: User was connected');

		io.emit('push', {
				commits: [
					{
						date: '2017-08-16T15:42:12+00:00',
						message: 'Merged in bug-fix (pull request #59)\n\nBug fix\n',
						hash: 'd8e690a430fe9d4e16d6daafd52e980bfbeadea4',
						links: {
			              "commits": {
			                "href": "https://api.bitbucket.org/2.0/repositories/apollobytes/cfm-cloud-dr/commits/qa_env"
			              },
			              "self": {
			                "href": "https://api.bitbucket.org/2.0/repositories/apollobytes/cfm-cloud-dr/refs/branches/qa_env"
			              },
			              "html": {
			                "href": "https://bitbucket.org/apollobytes/cfm-cloud-dr/branch/qa_env"
			              }
			            },
						author: {
							name: 'Malincyan Pavel',
							avatar: 'https://bitbucket.org/account/pavelMalincyan/avatar/32/'
						}
					},
					{
						date: '2017-08-16T15:08:14+00:00',
						message: 'Merge branch \'master\' into bug-fix\n',
						hash: '9bcdcd6ce5fe0e8730dab5aaa7abfdafe9053b2c',
						links: {
			              "commits": {
			                "href": "https://api.bitbucket.org/2.0/repositories/apollobytes/cfm-cloud-dr/commits/qa_env"
			              },
			              "self": {
			                "href": "https://api.bitbucket.org/2.0/repositories/apollobytes/cfm-cloud-dr/refs/branches/qa_env"
			              },
			              "html": {
			                "href": "https://bitbucket.org/apollobytes/cfm-cloud-dr/branch/qa_env"
			              }
			            },
						author: {
							name: 'Malincyan Pavel',
							avatar: 'https://bitbucket.org/account/pavelMalincyan/avatar/32/'
						}
					},
					{
						date: '2017-08-16T15:05:56+00:00',
						message: 'Misc | All (fix): Spelling errors\n',
						hash: 'ddf668f71afce4115d730df250c2fc1237c7d52f',
						links: {
			              "commits": {
			                "href": "https://api.bitbucket.org/2.0/repositories/apollobytes/cfm-cloud-dr/commits/qa_env"
			              },
			              "self": {
			                "href": "https://api.bitbucket.org/2.0/repositories/apollobytes/cfm-cloud-dr/refs/branches/qa_env"
			              },
			              "html": {
			                "href": "https://bitbucket.org/apollobytes/cfm-cloud-dr/branch/qa_env"
			              }
			            },
						author: {
							name: 'Malincyan Pavel',
							avatar: 'https://bitbucket.org/account/pavelMalincyan/avatar/32/'
						}
					},
					{
						date: '2017-08-16T14:58:04+00:00',
						message: 'Misc |Technical(fix): fix Collapse button functionality\n',
						hash: '26eb8db1b2f177ed676fb389b0ecd262cf58901f',
						links: {
			              "commits": {
			                "href": "https://api.bitbucket.org/2.0/repositories/apollobytes/cfm-cloud-dr/commits/qa_env"
			              },
			              "self": {
			                "href": "https://api.bitbucket.org/2.0/repositories/apollobytes/cfm-cloud-dr/refs/branches/qa_env"
			              },
			              "html": {
			                "href": "https://bitbucket.org/apollobytes/cfm-cloud-dr/branch/qa_env"
			              }
			            },
						author: {
							name: 'Malincyan Pavel',
							avatar: 'https://bitbucket.org/account/pavelMalincyan/avatar/32/'
						}
					},
					{
						date: '2017-08-16T10:34:19+00:00',
						message: 'Misc | Activites (fix): show button when scroll down\n',
						hash: '12ddb5a61de9366a11df1484f0d73d67ae8e3134',
						links: {
			              "commits": {
			                "href": "https://api.bitbucket.org/2.0/repositories/apollobytes/cfm-cloud-dr/commits/qa_env"
			              },
			              "self": {
			                "href": "https://api.bitbucket.org/2.0/repositories/apollobytes/cfm-cloud-dr/refs/branches/qa_env"
			              },
			              "html": {
			                "href": "https://bitbucket.org/apollobytes/cfm-cloud-dr/branch/qa_env"
			              }
			            },
						author: {
							name: 'Malincyan Pavel',
							avatar: 'https://bitbucket.org/account/pavelMalincyan/avatar/32/'
						}
					}
				],
				push: {
					hash: 'd8e690a430fe9d4e16d6daafd52e980bfbeadea4',
					repo: 'cfm-cloud-mc',
					branch: 'master',
					author: {
						name: 'Malincyan Pavel',
						avatar: 'https://bitbucket.org/account/pavelMalincyan/avatar/32/'
					},
					message: 'Merged in bug-fix (pull request #59)\n\nBug fix\n',
					date: '2017-08-16T15:42:12+00:00',
					links: {
			          "self": {
			            "href": "https://api.bitbucket.org/2.0/teams/apollobytes"
			          },
			          "html": {
			            "href": "https://bitbucket.org/apollobytes/"
			          },
			          "avatar": {
			            "href": "https://bitbucket.org/account/apollobytes/avatar/32/"
			          }
			        }
				}
			}
		)

  	});

  	return io;
}