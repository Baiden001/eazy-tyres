export const PageHead=({title,sub})=>(<section className="ph"><h1>{title}</h1><p>{sub}</p></section>);
export const Cards=({items,numbered})=>(<div className="grid">{items.map(([a,b],i)=><article key={a}>{numbered&&<span className="idx">{String(i+1).padStart(2,'0')}</span>}<h3>{a}</h3><p>{b}</p></article>)}</div>);
export const Stats=({items})=>(<div className="stats">{items.map(([a,b])=><div key={b}><b>{a}</b>{b}</div>)}</div>);
