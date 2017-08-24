const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('db.json');
const db = low(adapter);

db.defaults({
	companies: {
        'hanseaticsoft': {
			projects: {
				'cfm-cloud-mt': { changes: [], code: 'cfm-cloud-mt', id: 'maintenance', tabLabel: 'maintenance', 'proxy-target': 'https://staging5.cloudfleetmanager.com', port: 8087 },
				'cfm-cloud-blg': { changes: [], code: 'cfm-cloud-blg', id: 'blog', tabLabel: 'blog', 'proxy-target': 'https://staging4.cloudfleetmanager.com', port: 8880 },
				'cfm-cloud-cw': { changes: [], code: 'cfm-cloud-cw', id: 'crewing', tabLabel: 'crewing', 'proxy-target': 'https://staging4.cloudfleetmanager.com', port: 8884 },
				'cfm-cloud-mc': { changes: [], code: 'cfm-cloud-mc', id: 'miscellaneous', tabLabel: 'miscellaneous', 'proxy-target': 'https://staging5.cloudfleetmanager.com', port: 8882 },
				'cfm-cloud-dr': { changes: [], code: 'cfm-cloud-dr', id: 'disturbance', tabLabel: 'disturbance', 'proxy-target': 'https://staging5.cloudfleetmanager.com', port: 8280 },
				'cfm-cloud-ia': { changes: [], code: 'cfm-cloud-ia', id: 'inspections', tabLabel: 'inspections', 'proxy-target': 'https://staging5.cloudfleetmanager.com', port: 8089 },
				'cfm-cloud-ctf': { changes: [], code: 'cfm-cloud-ctf', id: 'certificates', tabLabel: 'certificates', 'proxy-target': 'https://staging4.cloudfleetmanager.com', port: 8881 },
				'cfm-cloud-cir': { changes: [], code: 'cfm-cloud-cir', id: 'circulars', tabLabel: 'circulars', 'proxy-target': 'https://staging5.cloudfleetmanager.com', port: 8121 },
				'cfm-cloud-tj': { changes: [], code: 'cfm-cloud-tj', id: 'towage', tabLabel: 'towage', 'proxy-target': 'https://staging4.cloudfleetmanager.com', port: 8380 },
				'cfm-cloud-ep': { changes: [], code: 'cfm-cloud-ep', id: 'employees', tabLabel: 'employees', 'proxy-target': 'https://staging4.cloudfleetmanager.com', port: 8228 },
			},
			logoUrl: 'static/img/hs.png'
        }
    }
});

module.exports = db;
