export function formatToTimeAgo(date: string): string {
    const dayInMs = 1000 * 60 * 60 * 24;
    const time = new Date(date).getTime();
    const now = new Date().getTime();
    const diff = Math.round((time - now) / dayInMs);
  
    const formatter = new Intl.RelativeTimeFormat("ko");//lets use api to change to korean formatting
  
    return formatter.format(diff, "days");
  }

export function formatToWon(price:number){
    return price.toLocaleString("ko-KR");
}