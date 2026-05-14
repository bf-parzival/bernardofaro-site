import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const essays = await getCollection('essays', ({ data }) => !data.draft);
  const sorted = essays.sort(
    (a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf()
  );

  return rss({
    title: 'Bernardo Faro',
    description: "A synthesizer of ideas for the agent-economy. Writing on technology, institutions, and what we're optimising for beneath the strategy.",
    site: context.site,
    items: sorted.map((essay) => ({
      title: essay.data.title.replace(/<[^>]+>/g, ''),
      pubDate: essay.data.pubDate,
      description: essay.data.description,
      link: `/essays/${essay.slug}/`,
      categories: essay.data.tags,
    })),
    customData: `<language>en-gb</language>`,
  });
}
