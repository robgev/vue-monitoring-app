class Converter {
    set(payload) {
        if (payload && typeof payload === 'object' && !Array.isArray(payload)) {
            this.payload = payload;
            this.changes = this.payload.push.changes[0];
            return this;
        } else {
            throw new Error('Payload should be an object');
        }
    }

    __getPushInfo() {

        const { name: branch, target } = this.changes.new;

        const { hash, links, date, message, author } = target;

        return Object.assign({}, {
            hash,
            repo: this.payload.repository.name,
            branch,
            author: Object.assign({}, {
                name: author.user.display_name,
                avatar: author.user.links.avatar.href
            }),
            message,
            date,
            links,
        });
    }

    __getCommitsInfo() {

        const { commits = [] } = this.changes;

        return commits.map(commit => {
            const { hash, date, message, links, author } = commit;
            return Object.assign({}, {
                date,
                message,
                hash,
                links,
                author: Object.assign({}, {
                    name: author.user.display_name,
                    avatar: author.user.links.avatar.href
                })
            });
        })
    }

    getInfo(flags) {
        const info = {};

        if (!flags || (flags && (!Array.isArray(flags) || (Array.isArray(flags) && flags.length === 0)))) {
            throw new Error('Please tell us which type of information you need. ex - commits or push');
        }

        if (flags.includes('commits')) {
            info.commits = this.__getCommitsInfo();
        }

        if (flags.includes('push')) {
            info.push = this.__getPushInfo();
        }

        return info;
    }
}


module.exports = new Converter;
