export class Article {
  private title: string;
  private link: string;
  private votes: number;

  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    this.votes = votes || 0;
  }

  /**
   * Getter $title
   * @return {string}
   */
  public get $title(): string {
    return this.title;
  }

  /**
   * Getter $link
   * @return {string}
   */
  public get $link(): string {
    return this.link;
  }

  /**
   * Getter $votes
   * @return {number}
   */
  public get $votes(): number {
    return this.votes;
  }

  /**
   * Setter $title
   * @param {string} value
   */
  public set $title(value: string) {
    this.title = value;
  }

  /**
   * Setter $link
   * @param {string} value
   */
  public set $link(value: string) {
    this.link = value;
  }

  /**
   * Setter $votes
   * @param {number} value
   */
  public set $votes(value: number) {
    this.votes = value;
  }


  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }

  // domain() is a utility function that extracts
  // the domain from a URL, which we'll explain shortly
  domain(): string {
    try {
      // e.g. http://foo.com/path/to/bar
      const domainAndPath: string = this.link.split('//')[1];
      // e.g. foo.com/path/to/bar
      return domainAndPath.split('/')[0];
    } catch (err) {
      return null;
    }
  }
}
