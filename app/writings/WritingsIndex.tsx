'use client'

import Link from 'next/link'
import type { ReactNode } from 'react'
import { TagFilteredList } from 'quire/list'
import type { Tag } from 'quire'

export type WritingRow = { slug: string; title: string; subtitle: string | null; tags: Tag[] }

/**
 * Every published writing, narrowed by tag in place (quire/list).
 *
 * One page with a filter rather than a page per tag (Eric, 2026-09-11): the chosen tag
 * rides in ?tag=, so a filtered view is still a link, and there is one address to keep
 * instead of one per tag. A client component because the filter is state; the page above
 * passes it plain data, since functions do not cross from a server component to a client one.
 */
export default function WritingsIndex({
  items,
  initialTag,
  children,
}: {
  items: WritingRow[]
  /** ?tag= as the server read it, so a shared tag link is filtered before script runs. */
  initialTag: string | null
  /** The reading order, shown under the filter until a tag is chosen. */
  children: ReactNode
}) {
  return (
    <TagFilteredList
      items={items}
      initialTag={initialTag}
      href={(w) => `/writings/${w.slug}/`}
      Link={Link}
      allLabel="All"
      describe={(n, tag) =>
        tag ? `${n} ${n === 1 ? 'writing' : 'writings'} tagged ${tag.label}` : `All ${n} writings`}
      classNames={{ root: 'tag-filter', filters: 'tag-list', filter: 'tag', status: 'label', item: 'entry' }}
      renderItem={(w) => (
        <>
          <div className="entry-title">{w.title}</div>
          {w.subtitle && <div className="entry-sub">{w.subtitle}</div>}
        </>
      )}
    >
      {children}
    </TagFilteredList>
  )
}
