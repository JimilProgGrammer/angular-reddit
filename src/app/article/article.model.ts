export class Article {
    title: string;
    link: string;
    votes:number;

    constructor(title:string, link:string, votes?:number) {
        this.title = title;
        this.link = link;
        this.votes = votes;
    }

    voteUp(): void {
        this.votes += 1;
    }

    voteDown(): void {
        this.votes -= 1;
    }

    /**
     * utility method that extracts domain from the URL
     */
    domain(): string {
        try{
            //eg: http://foo.com/path/to/bar
            const domainAndPath: string = this.link.split('//')[1];
            //eg: foo.com/path/to/bar
            return domainAndPath.split('/')[0];
        } catch(err) {
            return null;
        }
    }
}